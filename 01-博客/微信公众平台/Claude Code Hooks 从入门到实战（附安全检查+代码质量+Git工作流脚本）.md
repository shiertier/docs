---
title: "Claude Code Hooks 从入门到实战（附安全检查+代码质量+Git工作流脚本）"

站点: "微信公众平台"
原文链接: "https://mp.weixin.qq.com/s/4_-kul76I_I5_fSmViyz7Q"
发布日期: "2025-11-04"
作者: "韦东东"
---

## 摘要

**1) 一句话总结**
Claude Code Hooks 是一种在特定生命周期自动执行脚本的机制，通过双向通信和闭环验证强制 AI 完成测试、格式化等收尾工作，实现对 AI 行为的确定性控制。

**2) 核心要点**
*   **核心机制**：Hook 在特定节点自动执行检查，若发现遗漏会将具体原因反馈给 Claude，驱动其自动修正直至检查通过，将多轮手动对话简化为单轮闭环。
*   **双向通信协议**：Hook 通过标准输入（`stdin`）接收包含当前状态的 JSON 数据；通过退出码（0 为通过，2 为失败）或标准错误输出（`stderr` JSON）向 Claude 返回决策与拦截原因。
*   **配置三要素**：需在 `.claude/settings.json` 中定义触发时机（When，如 `Stop` 等 8 种事件）、针对操作（What，通过 `matcher` 匹配特定工具）和执行动作（How，指定执行脚本）。
*   **生命周期事件**：支持 `SessionStart`、`PreToolUse`、`PostToolUse`、`Stop` 等 8 种事件，覆盖从会话初始化、工具调用前后到任务完成的全流程。
*   **典型实战场景**：包括拦截敏感文件修改或危险命令（案例 1）、自动执行代码格式化与单元测试（案例 2），以及强制规范 Git 提交信息与分支管理（案例 3）。
*   **Skills 与 Hooks 对比**：Skills 是建议性的（传授知识，教 AI 怎么做好），Hooks 是强制性、确定性的（物理拦截，强制 AI 必须做对），两者常配合使用。
*   **模型选型策略**：建议先用顶级模型（如 Claude Sonnet 4.5）验证业务准确度上限，再进行速度优化，最后通过大小模型分层服务控制成本。

**3) 风险与不足**
*   **无限循环风险**：Hook 机制在失败重试时可能导致死循环，需依赖输入 JSON 中的 `stop_hook_active` 标志进行控制（首次可阻止，第二次必须放行）。
*   **危险操作风险**：Claude 在运行过程中可能会意外修改敏感文件（如 `.env`、密钥）或执行危险命令（如 `rm -rf`），必须依赖 Hook 机制进行硬拦截。
*   **模型选型误区**：直接使用小尺寸开源模型做 POC（概念验证），容易陷入无法区分“模型能力不足”还是“技术方案有问题”的困局，从而浪费大量调试时间。

## 正文

在日常的 AI 编程实践中，Claude Code 的代码能力有目共睹，但有时也会出现“虎头蛇尾”的情况。比如，新开发的功能或修改的内容看似完整实现了，但 Claude Code 可能没有主动进行测试，或者忘记更新相关文档。这导致发现问题后，我们还需要手动与它进行多次交互。这可以说是 AI 编程的“最后一公里”问题。

有朋友在知识星球会员群中问到：如何使用 Stop Hook 让 Claude 不打断当前工作，而是继续执行收尾任务？

本文将详细拆解 Claude Code Hook 的运行机制、配置三要素，并提供三个实用的 Hook 脚本案例，教你如何优雅地解决此类问题。

### 一、 Claude Code Hook 快速扫盲

一句话总结：**Claude Code Hooks 是在 Claude Code 特定时刻自动执行的脚本，让你能对它的行为进行确定性控制。**

#### 1. 核心机制
Hook 会在 Claude 认为任务完成时自动介入，执行预设的检查脚本（例如：测试是否通过、代码是否格式化、Changelog 是否更新、是否创建 PR 等）。
*   如果全部完成，则任务真正结束。
*   如果发现遗漏，Hook 会把具体的缺失项反馈给 Claude。Claude 能够理解这些反馈并自动补充收尾工作。补充后，Hook 会再次检查，形成闭环，直到所有收尾工序完成。

#### 2. 价值对比
*   **没有 Hook（需要 5 轮对话）：** 你说"重构用户模块" → Claude 完成代码 → 你说"运行测试" → 你说"格式化代码" → 你说"更新 Changelog" → 你说"创建 PR"。
*   **有 Hook（1 轮对话完成）：** 你说"重构用户模块" → Claude 完成代码 → Hook 自动发现缺少测试、格式化、Changelog → Claude 自动补全所有收尾工序 → Hook 确认通过。主打一个靠谱。

---

### 二、 Hook 运行机制拆解

Hook 脚本并不是简单的命令执行，而是一个**双向通信过程**：Claude Code 告诉 Hook 当前状态，Hook 检查后返回决定，告诉 Claude Code 是继续还是阻止，以及具体原因。

#### 1. 通信流程与参与方
整个过程包含 4 个关键参与方：
*   **你**：发起任务。
*   **Claude Code**：管理生命周期，触发 Hook。
*   **Hook 脚本**：执行检查逻辑。
*   **Claude AI**：理解反馈并修正。

**成功路径：**
1. Stop 事件触发后，Claude Code 发送当前状态给 Hook 脚本（通过 stdin JSON）。
2. Hook 运行检查（测试、格式化等）。
3. 检查通过，返回 `exit code 0`，任务完成。

**失败路径：**
1. Hook 检查发现问题。
2. 返回 `exit code 2` + JSON 失败原因（通过 stderr）。
3. Claude Code 将失败原因显示给 Claude AI。
4. Claude AI 理解问题并修正，继续工作，再次触发 Stop Hook。
5. 此时 `stop_hook_active: true`，Hook 再次检查。通过后返回 `exit code 0`，任务完成。
*(注意：`stop_hook_active` 标志用于防止无限循环，第一次可以阻止，第二次必须放行。)*

#### 2. 输入：Hook 接收什么信息？
Hook 脚本通过 `stdin`（标准输入）接收 JSON 格式的当前状态：

```python
import json
import sys

# 读取 Claude Code 传来的状态
input_data = json.loads(sys.stdin.read())
```

**JSON 内容示例与关键字段：**
```json
{
  "session_id": "abc123",
  "stop_hook_active": false,  // 关键：防止无限循环。false=可以阻止，true=必须放行
  "tool_name": "Write",       // 触发的工具，用于判断是什么操作
  "tool_input": {             // 工具参数，获取具体执行内容
    "file_path": "src/main.py",
    "content": "..."
  },
  "tool_response": "..."      // 工具结果（PostToolUse 时可用）
}
```

#### 3. 输出：Hook 如何返回决定？
Hook 脚本通过两种方式告诉 Claude Code 检查结果：

**方式 1：退出码（简单版）**
```python
import sys

# ✅ 检查通过
sys.exit(0)

# ❌ 检查失败，阻止并反馈
sys.exit(2)  # stderr 的内容会发送给 Claude AI
```

**方式 2：JSON 响应（精细版）**
通过 `stderr`（标准错误输出）返回 JSON，实现更精细的控制：
```python
import json
import sys

response = {
    "decision": "block",           # 阻止继续 (PreToolUse / Stop 适用)
    "reason": "测试失败: test_login", # ⭐ Claude 会读取并理解
    "continue": False,             # false=停止所有处理
    "suppressOutput": False        # 隐藏 stdout 输出
}

print(json.dumps(response, ensure_ascii=False), file=sys.stderr)
sys.exit(2)
```
*(备注：`stdout` 输出人类可读的日志，方便调试；`stderr` 输出机器可读的反馈，供 Claude AI 处理。)*

---

### 三、 Hook 配置三要素梳理

一个完整的 Hook 配置需要回答三个问题：什么时候触发（When）、针对什么操作（What）、运行什么脚本（How）。

#### 1. 事件类型（When - 什么时候触发）
Claude Code 目前支持 8 种生命周期事件：

| 事件 | 触发时机 | 典型用途 |
| :--- | :--- | :--- |
| **SessionStart** | 会话开始 | 加载项目上下文、初始化环境 |
| **UserPromptSubmit** | 用户提交提示词前 | 注入额外信息、验证输入 |
| **PreToolUse** | 工具执行前 | 阻止危险命令、参数校验 |
| **PostToolUse** | 工具执行后 | 自动格式化、运行 linter |
| **Notification** | AI 发送通知时 | 自定义提醒、日志记录 |
| **Stop** | AI 完成响应时 | 确保收尾工作、质量门槛 |
| **SubagentStop** | 子任务完成时 | 子任务验证、结果串联 |
| **PreCompact** | 上下文压缩前 | 保存完整历史、备份状态 |

#### 2. 触发条件（What - 针对什么操作）
可以使用 `matcher` 精确控制哪些工具调用会触发 Hook（仅适用于 `PreToolUse` 和 `PostToolUse` 事件，`Stop` 等事件不需要）：

```json
{
  "matcher": "Bash",           // 只针对 Bash 命令
  "matcher": "Write|Edit",     // 针对文件写入或编辑
  "matcher": "*",              // 针对所有工具
  "matcher": ""                // 针对所有
}
```

#### 3. 执行动作（How - 做什么）
指定要运行的脚本或命令（支持 Python 脚本 `.py`、Shell 脚本 `.sh` 或任何可执行文件）：

```json
{
  "type": "command",
  "command": "python3 .claude/hooks/my_hook.py"
}
```

#### 4. 完整配置示例
将以上三要素组合，在项目根目录的 `.claude/settings.json` 中配置如下：

```json
{
  "hooks": {
    "Stop": [                               // 1️⃣ 事件类型
      {
        "hooks": [                          // 2️⃣ Stop 不需要 matcher
          {
            "type": "command",              // 3️⃣ 执行动作
            "command": "python3 .claude/hooks/stop_check.py"
          }
        ]
      }
    ],
    "PreToolUse": [                         // 另一个例子
      {
        "matcher": "Bash",                  // 2️⃣ 只针对 Bash 命令
        "hooks": [
          {
            "type": "command",              // 3️⃣ 执行动作
            "command": "python3 .claude/hooks/bash_check.py"
          }
        ]
      }
    ]
  }
}
```
*(配置说明：配置文件位于 `.claude/settings.json`；Hook 脚本约定俗成放在 `.claude/hooks/` 目录下；路径推荐使用相对路径，方便项目分享。)*

---

### 四、 三个实战案例

以下提供三个常见用例。新手建议从案例 1 开始，案例 2 能够显著提升代码质量，案例 3 则非常适合企业级工作流。*(注：受篇幅限制，此处展示核心逻辑，完整脚本代码见知识星球)*

#### 案例 1: 阻止危险操作
Claude 可能会不小心修改敏感文件（如 `.env`、密钥文件），或执行危险命令（如 `rm -rf`）。此 Hook 使用 `matcher` 在相关工具上触发，不仅阻止危险操作，还能提供替代方案。

**Hook 配置 (`.claude/settings.json`)：**
```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Edit|Write|MultiEdit",
        "hooks": [{"type": "command", "command": "python3 .claude/hooks/security_check.py"}]
      },
      {
        "matcher": "Bash",
        "hooks": [{"type": "command", "command": "python3 .claude/hooks/security_check.py"}]
      }
    ]
  }
}
```

**Hook 脚本核心逻辑 (`.claude/hooks/security_check.py`)：**
```python
#!/usr/bin/env python3
import json
import sys

def check_sensitive_files(file_path):
    """检查是否为敏感文件"""
    SENSITIVE_FILES = [".env", "secrets.yaml", "private_key.pem", ".ssh/id_rsa"]
    for sensitive in SENSITIVE_FILES:
        if sensitive in file_path:
            return False, f"🚫 禁止修改敏感文件: {file_path}"
    return True, None

def check_dangerous_commands(command):
    """检查危险命令"""
    DANGEROUS_PATTERNS = ["rm -rf /", "rm -rf /*", "> /dev/sda", "chmod -R 777 /"]
    for pattern in DANGEROUS_PATTERNS:
        if pattern in command:
            return False, f"🚫 禁止执行危险命令: {command}"
    return True, None
```
*(别忘了添加执行权限：`chmod +x .claude/hooks/security_check.py`)*

#### 案例 2: 自动格式化 + 测试检查
Claude 完成代码后经常忘记格式化和运行测试。此案例使用 `PostToolUse` 自动格式化，并用 `Stop` 进行全面检查。

**Hook 配置 (`.claude/settings.json`)：**
```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write|MultiEdit",
        "hooks": [{"type": "command", "command": "python3 .claude/hooks/auto_format.py"}]
      }
    ],
    "Stop": [
      {
        "hooks": [{"type": "command", "command": "python3 .claude/hooks/quality_check.py"}]
      }
    ]
  }
}
```

**质量检查脚本核心逻辑 (`.claude/hooks/quality_check.py`)：**
```python
#!/usr/bin/env python3
import subprocess
import sys

def run_tests():
    """运行测试套件"""
    result = subprocess.run(["python3", "-m", "pytest", "-v"], capture_output=True, text=True, timeout=60)
    if result.returncode == 0:
        return True, "✅ 所有测试通过"
    else:
        failed = [line for line in result.stdout.split('\n') if 'FAILED' in line]
        return False, f"❌ 测试失败\n" + "\n".join(failed[:5])

def check_format():
    """检查代码格式"""
    result = subprocess.run(["python3", "-m", "black", "--check", "src/"], capture_output=True, timeout=30)
    return result.returncode == 0, "✅ 格式规范" if result.returncode == 0 else "❌ 需要格式化"
```

#### 案例 3: Git 提交工作流 - 完整质量门槛
在团队协作中，代码提交前需要通过多项检查。此案例强制要求 Conventional Commits 格式，禁止直接提交到 main/master 分支。

**Hook 配置 (`.claude/settings.json`)：**
```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [{"type": "command", "command": "python3 .claude/hooks/pre_commit.py"}]
      }
    ],
    "Stop": [
      {
        "hooks": [{"type": "command", "command": "python3 .claude/hooks/final_check.py"}]
      }
    ]
  }
}
```

**提交前检查脚本核心逻辑 (`.claude/hooks/pre_commit.py`)：**
```python
#!/usr/bin/env python3
import re
import subprocess

def check_commit_message(command):
    """检查提交信息格式（Conventional Commits）"""
    match = re.search(r'-m\s+["\'](.+?)["\']', command)
    if not match:
        return True, None

    message = match.group(1)
    pattern = r'^(feat|fix|docs|style|refactor|test|chore)(\(.+?\))?: .{3,}'
    if not re.match(pattern, message):
        return False, (f"❌ 提交信息不符合规范\n当前：{message}\n要求：type(scope): subject")
    return True, None

def check_branch():
    """检查当前分支"""
    result = subprocess.run(["git", "branch", "--show-current"], capture_output=True, text=True)
    branch = result.stdout.strip()
    if branch in ["main", "master", "production"]:
        return False, f"❌ 禁止直接提交到 {branch} 分支"
    return True, None
```

---

### 五、 写在最后

#### 1. Skills VS Hooks
Claude Skills 和 Hooks 的定位完全不同：
*   **Skills 是教 Claude "怎么做好"**：通过 Markdown 文档传授领域知识、工作流程、最佳实践，Claude 会自动判断何时加载并参考执行。它是**建议性**的。
*   **Hooks 是强制 Claude "必须做对"**：在关键节点执行脚本验证，不通过就物理阻止继续。它是**确定性**的。

实践中两者常常配合使用：Skills 提供方法论指导，Hooks 确保最低质量标准。

#### 2. 对 2B Agent 工程的参考
Claude Code 的 Skills 和 Hooks 机制，本质上是在解决 AI Agent 的可控性和可靠性问题，对构建 2B Agent 有很强的参考价值：
*   **分层控制架构**：Skills（知识层）+ Hooks（控制层）的设计在 2B Agent 中也应区分"建议性指导"和"强制性验证"。例如客服 Agent 可以有话术 Skills，但敏感信息泄露必须用 Hook 机制硬拦截。
*   **人机协同界面**：Hooks 的 stdin/stderr 通信模式展示了一种清晰的意图注入和反馈机制。在 2B 场景中，决策透明度和可解释性至关重要，类似的通信协议设计可以让业务人员理解 Agent 的每个判断依据。

#### 3. 题外话：关于模型选型的避坑参考
最近经常被问到不同业务场景下的模型选型问题。一个普遍的误区是：很多团队习惯直接用小尺寸开源模型做 POC，结果陷入了“不知道是模型能力不足，还是技术方案有问题”的困局，浪费了大量调试时间。

个人经验建议：
1.  **先测上限**：第一步优先用顶级模型（如 Claude Sonnet 4.5、GPT-5、Gemini 2.5 Pro 等）验证业务场景的准确度上限，快速确认当前技术方案是否可行。
2.  **再做优化**：准确度验证通过后，再根据实际需求，通过模型降级或算力升级来优化响应速度。
3.  **分层服务**：最后考虑成本控制和本地化部署要求，设计大小模型分层服务（路由 + 降级策略），针对高频低难度任务使用小模型。

一句话总结：**先确保"能做到"，再优化"做得快"和"做得省"。** 千万别在小模型上反复调试，最后发现是模型天花板的问题。

## 相关文档

- [[01-博客/宝玉/用 Claude Code 的 Hook + Skill，实现每次提交后自从 commit 提交变更|用 Claude Code 的 Hook + Skill，实现每次提交后自从 commit 提交变更]]；关联理由：上下游；说明：本文拆解了 Hook 的通信机制与 Git 工作流脚本，而该文把 Stop Hook 和 Skill 组合成自动提交的具体落地方案。
- [[01-博客/宝玉/Claude Code 之父 Boris 的 9 条实战技巧：原来高手的配置这么“朴实无华”|Claude Code 之父 Boris 的 9 条实战技巧：原来高手的配置这么“朴实无华”]]；关联理由：延伸思考；说明：该文把 Stop Hook、PostToolUse Hook 与验证闭环放回 Claude Code 团队的整体工程实践中，可补充本文的使用场景与组织方式。

## 关联主题

- [[00-元语/Claude Code]]
- [[00-元语/Agent]]
- [[00-元语/protocol]]
- [[00-元语/CI]]
- [[00-元语/security]]
- [[00-元语/cli]]
- [[00-元语/workflow]]
- [[00-元语/skills]]
