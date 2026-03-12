---
title: "Claude Skills Cookbook 使用指南"

发布日期: 2026-02-17
作者: "Anthropic"
来源仓库: "anthropics/claude-cookbooks"
原文链接: "https://github.com/anthropics/claude-cookbooks/blob/main/skills/README.md"
译注: "原文为英文仓库文档，本稿为中文整理版。"
---

## 摘要

**1) 一句话总结**
本指南全面介绍了如何利用 Claude 的 Skills 功能进行文档生成、数据分析和业务自动化，涵盖了从内置技能应用到自定义技能开发的完整工作流。

**2) 关键要点**
*   **核心概念**：Skills 是包含指令、可执行代码和资源的组织包，使 Claude 能够动态创建专业文档（Excel、PowerPoint、PDF、Word）并执行复杂分析。
*   **架构优势**：采用渐进式披露（Progressive disclosure）架构，仅在需要时分阶段加载技能，以最小化 Token 消耗。
*   **内置技能**：原生提供 `xlsx`、`pptx`、`pdf` 和 `docx` 四个预置技能 ID，支持生成带公式、图表和丰富格式的文档。
*   **自定义开发**：支持构建专属技能，其标准目录结构必须包含 `SKILL.md`（指令文件），并可选择附加脚本（scripts）和模板数据（resources）。
*   **API 配置**：调用该功能需强制配置三个 Beta 请求头：`code-execution-2025-08-25`、`files-api-2025-04-14` 和 `skills-2025-10-02`。
*   **文件处理机制**：技能在代码执行期间创建文件并在响应中返回 `file_id`，开发者必须通过 Files API 下载实际的二进制文件内容并保存至本地。
*   **教程结构**：提供三个递进式 Jupyter Notebook，覆盖基础入门、真实金融数据应用（如财务仪表板、跨格式工作流）及自定义开发（如品牌规范、财务计算器）。
*   **性能优化**：官方建议通过批处理操作、组合多个技能以及使用容器 ID 复用已加载的技能缓存来提升执行效率。

**3) 风险/缺口**
*   **数据存储与覆盖风险**：生成的文件临时存储在 Anthropic 的服务器上；在本地执行下载时，默认行为是覆盖现有文件（重新运行单元格会替换原文件）。
*   **Token 限制**：处理大型操作时可能会触发“超出 Token 限制”错误，必须将任务拆分为较小块或依赖渐进式披露机制。
*   **配置强依赖**：若未正确设置环境变量（API 密钥）或缺失指定的 Beta 请求头，将直接导致功能调用失败。

## 正文

一份关于使用 Claude 的 Skills（技能）功能进行文档生成、数据分析和业务自动化的综合指南。本 Cookbook 演示了如何利用 Claude 内置的 Excel、PowerPoint 和 PDF 创建技能，以及如何为特定工作流构建自定义技能。

> **🎯 观看 Skills 实战：** 查看 **[Claude Creates Files](https://www.anthropic.com/news/create-files)**，了解这些 Skills 如何赋予 Claude 在 Claude.ai 和桌面应用中直接创建和编辑文档的能力！

## 什么是 Skills？

Skills 是包含指令、可执行代码和资源的组织包，赋予 Claude 执行特定任务的专业能力。可以将它们视为“专家包”，Claude 可以动态发现并加载它们以：

- 创建专业文档（Excel、PowerPoint、PDF、Word）
- 执行复杂的数据分析和可视化
- 应用公司特定的工作流和品牌规范
- 利用领域专业知识自动化业务流程

📖 阅读我们的工程博客文章：[Equipping agents for the real world with Skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)

## 主要特性

- ✨ **渐进式披露架构** - Skills 仅在需要时加载，优化 Token 使用
- 📊 **聚焦金融** - 针对金融和商业分析的真实世界示例
- 🔧 **自定义 Skills 开发** - 学习构建和部署您自己的 Skills
- 🎯 **生产级示例** - 可直接调整并投入使用的代码

## Cookbook 结构

### 📚 Notebook 1：Skills 简介（`notebooks/01_skills_introduction.ipynb`）

通过快速入门示例学习 Claude Skills 功能的基础知识。

- 理解 Skills 架构
- 使用 Beta 请求头设置 API
- 创建您的第一个 Excel 电子表格
- 生成 PowerPoint 演示文稿
- 导出为 PDF 格式

### 💼 Notebook 2：金融应用（`notebooks/02_skills_financial_applications.ipynb`）

使用真实的金融数据探索强大的商业用例。

- 构建包含图表和数据透视表的金融仪表板
- 投资组合分析和投资报告
- 跨格式工作流：CSV → Excel → PowerPoint → PDF
- Token 优化策略

### 🔧 Notebook 3：自定义 Skills 开发（`notebooks/03_skills_custom_development.ipynb`）

掌握创建您自己的专属 Skills 的技巧。

- 构建财务比率计算器
- 创建公司品牌规范 Skill
- 进阶：财务建模套件
- [最佳实践](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/best-practices)与安全注意事项

## 快速入门

### 前置要求

- Python 3.8 或更高版本
- Anthropic API 密钥（[在此获取](https://console.anthropic.com/)）
- Jupyter Notebook 或 JupyterLab

### 安装步骤

1. **克隆仓库**

```bash
git clone https://github.com/anthropics/claude-cookbooks.git
cd claude-cookbooks/skills
```

2. **创建虚拟环境**（推荐）

```bash
python -m venv venv
source venv/bin/activate  # Windows 系统：venv\Scripts\activate
```

3. **安装依赖**

```bash
pip install -r requirements.txt
```

4. **配置 API 密钥**

```bash
cp .env.example .env
# 编辑 .env 并添加您的 ANTHROPIC_API_KEY
```

5. **启动 Jupyter**

```bash
jupyter notebook
```

6. **从 Notebook 1 开始**
   打开 `notebooks/01_skills_introduction.ipynb` 并跟着操作！

## 示例数据

本 Cookbook 在 `sample_data/` 目录中包含了逼真的金融数据集：

- 📊 **financial_statements.csv** - 季度损益表、资产负债表和现金流量表数据
- 💰 **portfolio_holdings.json** - 包含绩效指标的投资组合
- 📋 **budget_template.csv** - 包含差异分析的部门预算
- 📈 **quarterly_metrics.json** - KPIs 和运营指标

## 项目结构

```
skills/
├── notebooks/                    # Jupyter notebooks
│   ├── 01_skills_introduction.ipynb
│   ├── 02_skills_financial_applications.ipynb
│   └── 03_skills_custom_development.ipynb
├── sample_data/                  # 金融数据集
│   ├── financial_statements.csv
│   ├── portfolio_holdings.json
│   ├── budget_template.csv
│   └── quarterly_metrics.json
├── custom_skills/                # 您的自定义 Skills
│   ├── financial_analyzer/
│   ├── brand_guidelines/
│   └── report_generator/
├── outputs/                      # 生成的文件
├── docs/                         # 文档
├── requirements.txt             # Python 依赖
├── .env.example                 # 环境变量模板
└── README.md                    # 当前文件
```

## API 配置

Skills 需要特定的 Beta 请求头。Notebook 会自动处理此操作，但以下是幕后的工作原理：

```python
from anthropic import Anthropic

client = Anthropic(
    api_key="your-api-key",
    default_headers={
        "anthropic-beta": "code-execution-2025-08-25,files-api-2025-04-14,skills-2025-10-02"
    }
)
```

**必需的 Beta 请求头：**

- `code-execution-2025-08-25` - 为 Skills 启用代码执行
- `files-api-2025-04-14` - 下载生成的文件所需
- `skills-2025-10-02` - 启用 Skills 功能

## 处理生成的文件

当 Skills 创建文档（Excel、PowerPoint、PDF 等）时，它们会在响应中返回 `file_id` 属性。您必须使用 **Files API** 来下载这些文件。

### 工作原理

1. **Skills 在代码执行期间创建文件**
2. **响应中包含每个已创建文件的 file_ids**
3. **使用 Files API** 下载实际的文件内容
4. **保存到本地**或根据需要进行处理

### 示例：创建并下载 Excel 文件

```python
from anthropic import Anthropic

client = Anthropic(api_key="your-api-key")

# 第 1 步：使用 skill 创建文件
response = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=4096,
    container={
        "skills": [
            {"type": "anthropic", "skill_id": "xlsx", "version": "latest"}
        ]
    },
    tools=[{"type": "code_execution_20250825", "name": "code_execution"}],
    messages=[{
        "role": "user",
        "content": "Create an Excel file with a simple budget spreadsheet"
    }]
)

# 第 2 步：从响应中提取 file_id
file_id = None
for block in response.content:
    if block.type == "tool_result" and hasattr(block, 'output'):
        # 在工具输出中查找 file_id
        if 'file_id' in str(block.output):
            file_id = extract_file_id(block.output)  # 解析 file_id
            break

# 第 3 步：使用 Files API 下载文件
if file_id:
    file_content = client.beta.files.download(file_id=file_id)

    # 第 4 步：保存到磁盘
    with open("outputs/budget.xlsx", "wb") as f:
        f.write(file_content.read())

    print(f"✅ File downloaded: budget.xlsx")
```

### Files API 方法

```python
# 下载文件内容（二进制）
content = client.beta.files.download(file_id="file_abc123...")
with open("output.xlsx", "wb") as f:
    f.write(content.read())  # 使用 .read() 而不是 .content

# 获取文件元数据
info = client.beta.files.retrieve_metadata(file_id="file_abc123...")
print(f"Filename: {info.filename}, Size: {info.size_bytes} bytes")  # 使用 size_bytes 而不是 size

# 列出所有文件
files = client.beta.files.list()
for file in files.data:
    print(f"{file.filename} - {file.created_at}")

# 删除文件
client.beta.files.delete(file_id="file_abc123...")
```

**重要提示：**

- 文件临时存储在 Anthropic 的服务器上
- 下载的文件应保存到本地的 `outputs/` 目录中
- Files API 使用与 Messages API 相同的 API 密钥
- 所有 Notebook 都包含用于文件下载的辅助函数
- **默认情况下文件会被覆盖** - 重新运行单元格将替换现有文件（您会在输出中看到 `[overwritten]`）

有关完整详细信息，请参阅 [Files API 文档](https://docs.claude.com/en/api/files-content)。

## 内置 Skills 参考

Claude 附带以下预置的 Skills：

| Skill      | ID     | 描述                                                                 |
| ---------- | ------ | --------------------------------------------------------------------------- |
| Excel      | `xlsx` | 创建和操作带有公式、图表和格式的 Excel 工作簿 |
| PowerPoint | `pptx` | 生成带有幻灯片、图表和过渡效果的专业演示文稿    |
| PDF        | `pdf`  | 创建带有文本、表格和图像的格式化 PDF 文档                |
| Word       | `docx` | 生成具有丰富格式和结构的 Word 文档                  |

## 创建自定义 Skills

自定义 Skills 遵循以下结构：

```
my_skill/
├── SKILL.md           # 必需：给 Claude 的指令
├── scripts/           # 可选：Python/JS 代码
│   └── processor.py
└── resources/         # 可选：模板、数据
    └── template.xlsx
```

在 Notebook 3（`notebooks/03_skills_custom_development.ipynb`） 中了解更多信息。

## 常见用例

### 财务报告

- 自动化的季度报告
- 预算差异分析
- 投资绩效仪表板

### 数据分析

- 基于 Excel 的复杂公式分析
- 数据透视表生成
- 统计分析与可视化

### 文档自动化

- 品牌化演示文稿生成
- 多数据源报告汇总
- 跨格式文档转换

## 性能提示

1. **使用渐进式披露**：Skills 分阶段加载以最小化 Token 使用
2. **批处理操作**：在单次对话中处理多个文件
3. **Skill 组合**：组合多个 Skills 以处理复杂工作流
4. **缓存复用**：使用容器 ID 复用已加载的 Skills

## 故障排除

### 常见问题

**找不到 API 密钥**

```
ValueError: ANTHROPIC_API_KEY not found
```

→ 确保您已将 `.env.example` 复制为 `.env` 并添加了您的密钥

**缺少 Skills Beta 请求头**

```
Error: Skills feature requires beta header
```

→ 确保您使用了 Notebook 中所示的正确 Beta 请求头

**超出 Token 限制**

```
Error: Request exceeds token limit
```

→ 将大型操作拆分为较小的块，或使用渐进式披露

## 资源

### 文档

- 📖 [Claude API 文档](https://docs.anthropic.com/en/api/messages)
- 🔧 [Skills 文档](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview)

### 支持文章

- 📚 [使用 Skills 教 Claude 按照您的方式工作](https://support.claude.com/en/articles/12580051-teach-claude-your-way-of-working-using-skills) - 使用 Skills 的用户指南
- 🛠️ [如何通过对话与 Claude 创建 Skill](https://support.claude.com/en/articles/12599426-how-to-create-a-skill-with-claude-through-conversation) - 交互式 Skill 创建指南

### 社区与支持

- 💬 [Claude 支持](https://support.claude.com)
- 🐙 [GitHub Issues](https://github.com/anthropics/claude-cookbooks/issues)

## 贡献

我们欢迎您的贡献！请参阅 [CONTRIBUTING.md](../CONTRIBUTING.md) 了解指南。

## 许可证

本 Cookbook 基于 MIT 许可证提供。详情请参阅 [LICENSE](../LICENSE)。

## 致谢

特别感谢 Anthropic 团队开发 Skills 功能并提供 SDK。

---

**有问题？** 请查看 [FAQ](docs/FAQ.md) 或提交 Issue。

**准备好开始了吗？** 打开 Notebook 1（`notebooks/01_skills_introduction.ipynb`），让我们构建一些了不起的东西吧！🎉

## 相关文档

- [[01-博客/Anthropic/Claude 开发平台发布说明：API 与 SDK 更新总览|Claude 开发平台发布说明：API 与 SDK 更新总览]]；关联理由：版本演进；说明：该文记录 Agent Skills 与 Files API 进入平台发布说明的时间线，本文则展示同一能力在 `skills/README` 中的后续接入方式与使用边界。
- [[01-博客/Anthropic/Claude Skills Cookbook 开发与排障手册|Claude Skills Cookbook 开发与排障手册]]；关联理由：解说；说明：两文都围绕同一套 Skills Cookbook，本篇给总览与入门路径，该文补充 SDK、Files API 与排障细节。
- [[01-博客/Anthropic/Claude Skills Notebook 实战进阶|Claude Skills Notebook 实战进阶]]；关联理由：上下游；说明：本篇先定义三份 Notebook 的结构与能力边界，该文继续展开到分层实操路径与示例代码。

## 关联主题

- [[00-元语/Claude]]
- [[00-元语/skills]]
- [[00-元语/context-optimization]]
- [[00-元语/workflow]]
- [[00-元语/sdk]]
- [[00-元语/Agent]]
