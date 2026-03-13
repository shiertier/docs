---
title: '让 Claude Code 更自主地工作'
发布日期: 2026-03-02
来源: 'Anthropic'
原文链接: 'https://www.anthropic.com/news/enabling-claude-code-to-work-more-autonomously'
作者: 'Anthropic'
译注: '原文无可用官方中文正文，使用 Gemini 翻译并经助手最小必要校对整理。'
---

## 摘要

**1) 一句话摘要**
Anthropic 为 Claude Code 推出了原生 VS Code 扩展、终端界面 2.0、检查点（Checkpoints）功能以及 Claude Agent SDK 更新，并在默认模型 Sonnet 4.5 的支持下大幅提升了其处理复杂开发任务的自主性。

**2) 关键要点**
*   **默认模型升级**：Claude Code 现默认搭载最新的 Claude Sonnet 4.5 模型，用户可通过 `/model` 命令进行切换。
*   **原生 VS Code 扩展（Beta 版）**：将 Claude Code 直接集成至 IDE，提供专属侧边栏面板和实时的行内差异对比（inline diffs）功能。
*   **终端界面 2.0**：优化了状态显示的可见性，并新增可搜索的提示词历史记录功能（通过 `Ctrl+r` 触发）。
*   **检查点（Checkpoints）功能**：在每次代码更改前自动保存状态，用户可通过连按两次 `Esc` 键或输入 `/rewind` 命令，将代码、对话或两者同时回退到先前版本。
*   **Claude Agent SDK**：前身为 Claude Code SDK，开放了核心工具、上下文管理和权限框架，并新增对子智能体（subagents）和钩子（hooks）的支持，便于开发者构建自定义智能体。
*   **增强的自主工作流**：结合子智能体（处理并行任务）、钩子（自动触发测试或代码检查）和后台任务（维持长耗时进程），使 Claude Code 能够独立执行大规模重构或功能探索。
*   **相关企业动态**：Anthropic 宣布投资 1 亿美元建立 Claude 合作伙伴网络、成立 Anthropic 研究所，并在悉尼设立亚太地区第四个办事处。

**3) 风险/不足**
*   检查点（Checkpoints）功能仅适用于 Claude 所执行的编辑操作，无法撤销用户的个人编辑或 bash 命令。
*   官方建议检查点功能必须与常规的版本控制系统结合使用，不能作为完全的替代方案。

## 正文

我们正在为 [Claude Code](https://claude.com/product/claude-code) 引入几项升级：原生的 VS Code 扩展、终端界面的 2.0 版本，以及用于自主运行的检查点（checkpoints）功能。在 [Sonnet 4.5](https://www.anthropic.com/news/claude-sonnet-4-5) 的支持下，Claude Code 现在可以在您的终端和 IDE 中处理更长、更复杂的开发任务。

覆盖更多使用场景的 Claude Code
----------------------------

**VS Code 扩展**

我们正在推出处于 Beta 测试阶段的 [原生 VS Code 扩展](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code)，将 Claude Code 直接带入您的 IDE。您现在可以通过带有行内差异对比（inline diffs）的专属侧边栏面板，实时查看 Claude 所做的更改。对于更喜欢在 IDE 而不是终端中工作的用户，该扩展提供了更丰富、图形化的 Claude Code 体验。

**增强的终端体验**

我们还焕新了 Claude Code 的终端界面。更新后的界面提升了状态显示的可见性，并支持可搜索的提示词历史记录（Ctrl+r），让复用或编辑之前的提示词变得更加容易。

![图片 1：全新 Claude Code 终端用户体验界面截图](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F3613f360926fae004521197488623465eb0cd751-1920x1035.png&w=3840&q=75)

**Claude Agent SDK**

对于希望创建自定义智能体体验的团队，Claude Agent SDK（前身为 Claude Code SDK）提供了对驱动 Claude Code 的相同核心工具、上下文管理系统和权限框架的访问权限。我们还发布了对子智能体（subagents）和钩子（hooks）的 SDK 支持，使您在为特定工作流构建智能体时拥有更高的可定制性。

开发者们 [已经在利用该 SDK 构建智能体](https://anthropic.com/engineering/building-agents-with-the-claude-agent-sdk)，应用于广泛的用例，包括财务合规智能体、网络安全智能体和代码调试智能体。

放心执行长耗时任务
------------------------------------------

随着 Claude Code 承担越来越复杂的任务，我们发布了检查点（checkpointing）功能，帮助您在保持控制权的同时，放心地将任务委派给 Claude Code。结合近期发布的功能，Claude Code 现在具备了更强的处理复杂任务的能力。

**检查点（Checkpoints）**

复杂的开发通常涉及探索和迭代。我们全新的检查点系统会在每次更改前自动保存您的代码状态，您只需连按两次 Esc 键或使用 `/rewind` 命令，即可立即回退到之前的版本。检查点让您可以去追求更宏大、更大规模的任务，因为您知道自己随时可以返回到先前的代码状态。

当您回退到某个检查点时，您可以选择将代码、对话或两者同时恢复到先前的状态。检查点仅适用于 Claude 的编辑，不适用于用户的编辑或 bash 命令，我们建议将其与版本控制系统结合使用。

**子智能体、钩子和后台任务**

当与 Claude Code 驱动自主工作的最新功能结合使用时，检查点尤为实用：

*   **子智能体（Subagents）** 负责委派专门的任务——例如在主智能体构建前端时启动后端 API——从而实现并行的开发工作流。
*   **钩子（Hooks）** 在特定节点自动触发操作，例如在代码更改后运行测试套件，或在提交前进行代码检查（linting）。
*   **后台任务（Background tasks）** 保持开发服务器等长耗时进程处于活动状态，而不会阻塞 Claude Code 处理其他工作的进度。

这些功能结合在一起，让您可以放心地将大规模重构或功能探索等广泛的任务委派给 Claude Code。

开始使用
---------------

Claude Code 用户现已可体验这些更新。

*   **Claude Sonnet 4.5** 是 Claude Code 中新的默认模型。运行 `/model` 即可切换模型。
*   **VS Code 扩展**（Beta 版）**：** 从 [VS Code 扩展市场](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code) 下载即可开始使用。
*   **终端更新**，包括视觉焕新和检查点功能，已向所有 Claude Code 用户开放——只需更新您的本地安装即可。
*   **Claude Agent SDK：** [查看文档](https://docs.claude.com/en/api/agent-sdk/overview) 开始使用。

相关内容
---------------

### Anthropic 投资 1 亿美元建立 Claude 合作伙伴网络

我们正在推出 Claude 合作伙伴网络（Claude Partner Network），这是一个面向合作伙伴组织的计划，旨在帮助企业采用 Claude。

[阅读更多](https://www.anthropic.com/news/claude-partner-network)

### 隆重介绍 Anthropic 研究所

我们正在成立 Anthropic 研究所（The Anthropic Institute），这是一项全新的举措，旨在应对强大的 AI 将给我们的社会带来的最重大挑战。

[阅读更多](https://www.anthropic.com/news/the-anthropic-institute)

### 悉尼将成为 Anthropic 在亚太地区的第四个办事处

[阅读更多](https://www.anthropic.com/news/sydney-fourth-office-asia-pacific)

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/Claude Code]]
- [[00-元语/workflow]]
- [[00-元语/软件工程]]
