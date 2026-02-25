---
title: "Claude 开发平台发布说明：API 与 SDK 更新总览"
发布日期: 2026-02-19
作者: "Anthropic"
来源: "Claude API Docs"
原文链接: "https://platform.claude.com/docs/en/release-notes/overview"
译注: "未找到官方中文版本，本文基于英文原文翻译整理。"
---

## 摘要

**1) 一句话总结**
本文档总结了 Claude 开发者平台（包括 API、SDK 和控制台）的更新日志，重点涵盖了 Claude 4.x 系列新模型的迭代、旧模型的全面弃用，以及自动缓存、高级工具调用、结构化输出和 1M Token 超长上下文等核心 API 功能的演进。

**2) 关键要点**
*   **模型发布与迭代**：推出了 Claude 4.6（Opus/Sonnet）、4.5（Opus/Sonnet/Haiku）、4.1 (Opus) 以及 3.7 (Sonnet)。新模型引入了自适应思考 (Adaptive thinking)、扩展思考 (Extended thinking) 和交错思考 (Interleaved thinking) 能力。
*   **模型弃用与下线**：已停用或宣布弃用 Claude 1、2、2.1 系列，以及 Claude 3 (Opus/Sonnet/Haiku)、3.5 (Sonnet/Haiku) 和 3.7 (Sonnet) 模型。
*   **上下文与缓存优化**：推出了**自动缓存**功能（无需手动管理断点），并支持 1 小时缓存持续时间；为 Sonnet 4/4.5/4.6 和 Opus 4.6 引入了 **1M Token 上下文窗口**；新增压缩 API (Compaction API) 和上下文编辑功能以管理超长对话。
*   **工具调用与智能体能力**：全面上线了代码执行（与网络搜索结合使用时免费）、网络搜索/抓取、工具搜索、记忆工具以及 Agent Skills（支持预构建和自定义技能）。支持编程式工具调用和细粒度工具流式传输。
*   **输出控制与性能**：**结构化输出** (Structured Outputs) 在 4.5 模型上正式发布，确保 JSON schema 一致性；引入 `effort` 参数取代 `budget_tokens` 以控制思考深度；为 Opus 4.6 推出快速模式（速度提升最高 2.5 倍）。
*   **平台与生态整合**：开发者平台统一重命名并迁移至 `platform.claude.com`；推出 **Microsoft Foundry 中的 Claude**（支持 Azure 计费）；新增数据驻留控制（纯美国推理价格为 1.1 倍）。
*   **企业级管理功能**：发布了 Message Batches API（异步处理降低 50% 成本）、Usage & Cost API、Admin API，并在控制台中引入了 Workspaces（工作区）以实现细粒度的成本和速率限制管理。
*   **SDK 扩展**：除了 Python 和 TypeScript，官方 SDK 现已扩展并正式支持 Java、Go、Ruby，并推出了 C# 和 PHP 的测试版。

**3) 风险/差距（明确指出的限制与问题）**
*   **已停用模型报错**：对已停用模型（如 Claude 1/2/2.1、Sonnet 3/3.5/3.7、Haiku 3.5、Opus 3 等）的所有 API 请求现在都将直接返回错误。
*   **Opus 4.6 限制**：Claude Opus 4.6 模型不支持预填充助手消息 (prefilling assistant messages)。
*   **Opus 4.1 参数冲突**：Claude Opus 4.1 不允许同时指定 `temperature` 和 `top_p` 参数，只能使用其中之一。
*   **速率限制错误变更**：由于 API 加速限制，API 使用量急剧增加时，客户可能会遇到 429 (`rate_limit_error`) 错误，而以前在类似情况下会返回 529 (`overloaded_error`) 错误。
*   **缓存控制验证错误**：缓存控制必须直接在 `tool_result` 和 `document.source` 的父 `content` 块中指定，在这些内容内部的任何其他块上进行缓存控制将导致验证错误。

## 正文

概述

Claude 开发者平台的更新，包括 Claude API、客户端 SDK 和 Claude Console。

有关 Claude Apps 的发布说明，请参阅 [Claude 帮助中心内的 Claude Apps 发布说明](https://support.claude.com/en/articles/12138966-release-notes)。

有关 Claude Code 的更新，请参阅 `claude-code` 仓库中的 [完整 CHANGELOG.md](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md)。

### 2026 年 2 月 19 日

*   我们为 Messages API 推出了**自动缓存 (automatic caching)**。只需在您的请求正文中添加一个 `cache_control` 字段，系统就会自动缓存最后一个可缓存的块，并随着对话的增长将缓存点向前移动。无需手动管理断点。可与现有的块级缓存控制配合使用，以实现细粒度优化。在 Claude API 和 Azure AI Foundry（预览版）上可用。在我们的[提示词缓存文档](https://platform.claude.com/docs/en/build-with-claude/prompt-caching#automatic-caching)中了解更多信息。
*   我们已停用 Claude Sonnet 3.7 模型 (`claude-3-7-sonnet-20250219`) 和 Claude Haiku 3.5 模型 (`claude-3-5-haiku-20241022`)。现在对这些模型的所有请求都将返回错误。我们建议分别升级到 [Claude Sonnet 4.6](https://platform.claude.com/docs/en/about-claude/models/overview#latest-models-comparison) 和 [Claude Haiku 4.5](https://platform.claude.com/docs/en/about-claude/models/overview#latest-models-comparison)。研究人员可以通过[外部研究人员访问计划](https://support.claude.com/en/articles/9125743-what-is-the-external-researcher-access-program)申请持续访问权限。
*   我们宣布弃用 Claude Haiku 3 模型 (`claude-3-haiku-20240307`)，计划于 2026 年 4 月 19 日停用。我们建议迁移到 [Claude Haiku 4.5](https://platform.claude.com/docs/en/about-claude/models/overview#latest-models-comparison)。在[模型弃用](https://platform.claude.com/docs/en/about-claude/model-deprecations)中阅读更多信息。

### 2026 年 2 月 17 日

*   我们推出了 [Claude Sonnet 4.6](https://www.anthropic.com/news/claude-sonnet-4-6)，这是我们最新的均衡模型，结合了速度和智能，适用于日常任务。Sonnet 4.6 提供了改进的智能体搜索性能，同时消耗更少的 token。Sonnet 4.6 支持[扩展思考 (extended thinking)](https://platform.claude.com/docs/en/build-with-claude/extended-thinking) 和 [1M token 上下文窗口](https://platform.claude.com/docs/en/build-with-claude/context-windows#1m-token-context-window)（测试版）。详情请参阅[模型与定价](https://platform.claude.com/docs/en/about-claude/models)。
*   API [代码执行](https://platform.claude.com/docs/en/agents-and-tools/tool-use/code-execution-tool)现在**与网络搜索或网络抓取结合使用时免费**。沙盒化的代码执行提高了模型能力和 token 效率。有关独立使用的信息，请参阅[定价详情](https://platform.claude.com/docs/en/agents-and-tools/tool-use/code-execution-tool#usage-and-pricing)。
*   [网络搜索工具](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool)和[编程式工具调用](https://platform.claude.com/docs/en/agents-and-tools/tool-use/programmatic-tool-calling)现已正式发布（无需 beta 请求头）。网络搜索和网络抓取现在支持[动态过滤](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool#dynamic-filtering-with-opus-46-and-sonnet-46)，它使用代码执行在结果到达上下文窗口之前对其进行过滤，从而获得更好的性能并降低 token 成本。
*   [代码执行工具](https://platform.claude.com/docs/en/agents-and-tools/tool-use/code-execution-tool)、[网络抓取工具](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-fetch-tool)、[工具搜索工具](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-search-tool)、[工具使用示例](https://platform.claude.com/docs/en/agents-and-tools/tool-use/implement-tool-use#providing-tool-use-examples)和[记忆工具](https://platform.claude.com/docs/en/agents-and-tools/tool-use/memory-tool)现已正式发布（无需 beta 请求头）。

### 2026 年 2 月 7 日

*   我们为 Opus 4.6 推出了研究预览版的[快速模式 (fast mode)](https://platform.claude.com/docs/en/build-with-claude/fast-mode)，通过 `speed` 参数提供显著更快的输出 token 生成速度。在高级定价下，快速模式的速度最高可达 2.5 倍。感兴趣的客户应加入[候补名单](https://claude.com/fast-mode)。

### 2026 年 2 月 5 日

*   我们推出了 [Claude Opus 4.6](https://www.anthropic.com/news/claude-opus-4-6)，这是我们用于复杂智能体任务和长期工作的最智能模型。Opus 4.6 推荐使用[自适应思考 (adaptive thinking)](https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking) (`thinking: {type: "adaptive"}`)；手动思考（带有 `budget_tokens` 的 `type: "enabled"`）已被弃用。Opus 4.6 不支持预填充助手消息。在 [Claude 4.6 的新特性](https://platform.claude.com/docs/en/about-claude/models/whats-new-claude-4-6)中了解更多信息。
*   [effort 参数](https://platform.claude.com/docs/en/build-with-claude/effort)现已正式发布（无需 beta 请求头），并支持 Claude Opus 4.6。在较新的模型上，Effort 取代了 `budget_tokens` 来控制思考深度。
*   我们推出了测试版的[压缩 API (compaction API)](https://platform.claude.com/docs/en/build-with-claude/compaction)，提供服务器端上下文摘要，以实现实际上无限的对话。在 Opus 4.6 上可用。
*   我们引入了[数据驻留控制](https://platform.claude.com/docs/en/build-with-claude/data-residency)，允许您使用 `inference_geo` 参数指定模型推理运行的位置。对于 2026 年 2 月 1 日之后发布的模型，仅限美国的推理以 1.1 倍的价格提供。
*   除了 Sonnet 4.5 和 Sonnet 4 之外，[1M token 上下文窗口](https://platform.claude.com/docs/en/build-with-claude/context-windows#1m-token-context-window)现在也在 Claude Opus 4.6 中提供测试版。[长上下文定价](https://platform.claude.com/docs/en/about-claude/pricing#long-context-pricing)适用于超过 200K 输入 token 的请求。
*   [细粒度工具流式传输](https://platform.claude.com/docs/en/agents-and-tools/tool-use/fine-grained-tool-streaming)现已在所有模型和平台上正式发布（无需 beta 请求头）。用于[结构化输出](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)的 `output_format` 参数已移至 `output_config.format`。

### 2026 年 1 月 29 日

*   [结构化输出](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)现已在 Claude API 上为 Claude Sonnet 4.5、Claude Opus 4.5 和 Claude Haiku 4.5 正式发布。正式版 (GA) 包括扩展的 schema 支持、改进的语法编译延迟，以及无需 beta 请求头的简化集成路径。`output_format` 参数已移至 `output_config.format`。现有的测试版用户可以在过渡期内继续使用 beta 请求头。结构化输出在 Amazon Bedrock 和 Microsoft Foundry 上仍处于公开测试阶段。

### 2026 年 1 月 12 日

*   `console.anthropic.com` 现在重定向到 `platform.claude.com`。作为我们 Claude 品牌整合的一部分，Claude Console 已移至新主页。现有的书签和链接将通过自动重定向继续有效。有关更多详细信息，请参阅 [2025 年 9 月 16 日的公告](https://platform.claude.com/docs/en/release-notes/overview#september-16-2025)。

### 2026 年 1 月 5 日

*   我们已停用 Claude Opus 3 模型 (`claude-3-opus-20240229`)。现在对该模型的所有请求都将返回错误。我们建议升级到 [Claude Opus 4.5](https://platform.claude.com/docs/en/about-claude/models/overview#latest-models-comparison)，它以三分之一的成本提供了显著提升的智能。研究人员可以通过[外部研究人员访问计划](https://support.claude.com/en/articles/9125743-what-is-the-external-researcher-access-program)申请在 API 上持续访问 Claude Opus 3。

### 2025 年 12 月 19 日

*   我们宣布弃用 Claude Haiku 3.5 模型。在[我们的文档](https://platform.claude.com/docs/en/about-claude/model-deprecations)中阅读更多信息。

### 2025 年 12 月 4 日

*   [结构化输出](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)现在支持 Claude Haiku 4.5。

### 2025 年 11 月 24 日

*   我们推出了 [Claude Opus 4.5](https://www.anthropic.com/news/claude-opus-4-5)，这是我们将最强能力与实用性能相结合的最智能模型。非常适合复杂的专业任务、专业软件工程和高级智能体。在视觉、编码和计算机使用方面实现了阶跃式改进，且价格比以前的 Opus 模型更亲民。在我们的[模型与定价文档](https://platform.claude.com/docs/en/about-claude/models)中了解更多信息。
*   我们推出了公开测试版的[编程式工具调用](https://platform.claude.com/docs/en/agents-and-tools/tool-use/programmatic-tool-calling)，允许 Claude 在代码执行中调用工具，以减少多工具工作流中的延迟和 token 使用量。
*   我们推出了公开测试版的[工具搜索工具](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-search-tool)，使 Claude 能够从大型工具目录中按需动态发现和加载工具。
*   我们为 Claude Opus 4.5 推出了公开测试版的 [effort 参数](https://platform.claude.com/docs/en/build-with-claude/effort)，允许您通过在响应的详尽程度和效率之间进行权衡来控制 token 使用量。
*   我们在 Python 和 TypeScript SDK 中添加了[客户端压缩 (client-side compaction)](https://platform.claude.com/docs/en/build-with-claude/context-editing#client-side-compaction-sdk)，在使用 `tool_runner` 时通过摘要自动管理对话上下文。

### 2025 年 11 月 21 日

*   搜索结果内容块现已在 Amazon Bedrock 上正式发布。在我们的[搜索结果文档](https://platform.claude.com/docs/en/build-with-claude/search-results)中了解更多信息。

### 2025 年 11 月 19 日

*   我们在 [platform.claude.com/docs](https://platform.claude.com/docs) 推出了**新的文档平台**。我们的文档现在与 Claude Console 并排显示，提供统一的开发者体验。之前位于 docs.claude.com 的文档网站将重定向到新位置。

### 2025 年 11 月 18 日

*   我们推出了 **Microsoft Foundry 中的 Claude**，为 Azure 客户带来具有 Azure 计费和 OAuth 身份验证的 Claude 模型。访问完整的 Messages API，包括扩展思考、提示词缓存（5 分钟和 1 小时）、PDF 支持、Files API、Agent Skills 和工具使用。在我们的 [Microsoft Foundry 文档](https://platform.claude.com/docs/en/build-with-claude/claude-in-microsoft-foundry)中了解更多信息。

### 2025 年 11 月 14 日

*   我们推出了公开测试版的[结构化输出](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)，为 Claude 的响应提供有保证的 schema 一致性。将 JSON 输出用于结构化数据响应，或将严格的工具使用用于经过验证的工具输入。适用于 Claude Sonnet 4.5 和 Claude Opus 4.1。要启用，请使用 beta 请求头 `structured-outputs-2025-11-13`。

### 2025 年 10 月 28 日

*   我们宣布弃用 Claude Sonnet 3.7 模型。在[我们的文档](https://platform.claude.com/docs/en/about-claude/model-deprecations)中阅读更多信息。
*   我们已停用 Claude Sonnet 3.5 模型。现在对这些模型的所有请求都将返回错误。
*   我们通过思考块清除 (`clear_thinking_20251015`) 扩展了上下文编辑，实现了思考块的自动管理。在我们的[上下文编辑文档](https://platform.claude.com/docs/en/build-with-claude/context-editing)中了解更多信息。

### 2025 年 10 月 16 日

*   我们推出了 [Agent Skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)（`skills-2025-10-02` 测试版），这是一种扩展 Claude 功能的新方法。Skills 是包含指令、脚本和资源的组织化文件夹，Claude 会动态加载它们以执行专门的任务。初始版本包括：
    *   **Anthropic 管理的 Skills**：用于处理 PowerPoint (.pptx)、Excel (.xlsx)、Word (.docx) 和 PDF 文件的预构建 Skills
    *   **自定义 Skills**：通过 Skills API（`/v1/skills` 端点）上传您自己的 Skills，以打包领域专业知识和组织工作流
    *   Skills 需要启用[代码执行工具](https://platform.claude.com/docs/en/agents-and-tools/tool-use/code-execution-tool)
    *   在我们的 [Agent Skills 文档](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)和 [API 参考](https://platform.claude.com/docs/en/api/skills/create-skill)中了解更多信息

### 2025 年 10 月 15 日

*   我们推出了 [Claude Haiku 4.5](https://www.anthropic.com/news/claude-haiku-4-5)，这是我们最快、最智能的 Haiku 模型，具有接近前沿的性能。非常适合需要强大推理能力的实时应用程序、高容量处理和成本敏感型部署。在我们的[模型与定价文档](https://platform.claude.com/docs/en/about-claude/models)中了解更多信息。

### 2025 年 9 月 29 日

*   我们推出了 [Claude Sonnet 4.5](https://www.anthropic.com/news/claude-sonnet-4-5)，这是我们用于复杂智能体和编码的最佳模型，在大多数任务中具有最高的智能。在[模型概述](https://platform.claude.com/docs/en/about-claude/models/overview)中了解更多信息。
*   我们为 AWS Bedrock 和 Google Vertex AI 引入了[全局端点定价](https://platform.claude.com/docs/en/about-claude/pricing#third-party-platform-pricing)。Claude API (1P) 定价不受影响。
*   我们引入了一个新的停止原因 `model_context_window_exceeded`，允许您在不计算输入大小的情况下请求最大可能的 token。在我们的[处理停止原因文档](https://platform.claude.com/docs/en/build-with-claude/handling-stop-reasons)中了解更多信息。
*   我们推出了测试版的记忆工具，使 Claude 能够在对话中存储和查阅信息。在我们的[记忆工具文档](https://platform.claude.com/docs/en/agents-and-tools/tool-use/memory-tool)中了解更多信息。
*   我们推出了测试版的上下文编辑，提供自动管理对话上下文的策略。初始版本支持在接近 token 限制时清除较旧的工具结果和调用。在我们的[上下文编辑文档](https://platform.claude.com/docs/en/build-with-claude/context-editing)中了解更多信息。

### 2025 年 9 月 17 日

*   我们为 Python 和 TypeScript SDK 推出了测试版的工具助手 (tool helpers)，通过类型安全的输入验证和用于在对话中自动处理工具的 tool runner 简化了工具的创建和执行。有关详细信息，请参阅 [Python SDK](https://github.com/anthropics/anthropic-sdk-python/blob/main/tools.md) 和 [TypeScript SDK](https://github.com/anthropics/anthropic-sdk-typescript/blob/main/helpers.md#tool-helpers) 的文档。

### 2025 年 9 月 16 日

*   我们将开发者产品统一在 Claude 品牌下。您应该会在我们的平台和文档中看到更新的命名和 URL，但**我们的开发者界面将保持不变**。以下是一些显著的变化：
    *   Claude Console ([console.anthropic.com](https://console.anthropic.com/)) → Claude Console ([platform.claude.com](https://platform.claude.com/))。在 2026 年 1 月 12 日之前，控制台将在这两个 URL 上可用。在此日期之后，[console.anthropic.com](https://console.anthropic.com/) 将自动重定向到 [platform.claude.com](https://platform.claude.com/)。
    *   Anthropic Docs ([docs.claude.com](https://docs.claude.com/)) → Claude Docs ([docs.claude.com](https://docs.claude.com/))
    *   Anthropic Help Center ([support.claude.com](https://support.claude.com/)) → Claude Help Center ([support.claude.com](https://support.claude.com/))
    *   API 端点、请求头、环境变量和 SDK 保持不变。您现有的集成将继续工作，无需任何更改。

### 2025 年 9 月 10 日

*   我们推出了测试版的网络抓取工具，允许 Claude 从指定的网页和 PDF 文档中检索完整内容。在我们的[网络抓取工具文档](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-fetch-tool)中了解更多信息。
*   我们推出了 [Claude Code Analytics API](https://platform.claude.com/docs/en/build-with-claude/claude-code-analytics-api)，使组织能够以编程方式访问 Claude Code 的每日聚合使用指标，包括生产力指标、工具使用统计信息和成本数据。

### 2025 年 9 月 8 日

*   我们推出了 [C# SDK](https://github.com/anthropics/anthropic-sdk-csharp) 的测试版。

### 2025 年 9 月 5 日

*   我们在 Console 的 [Usage](https://console.anthropic.com/settings/usage) 页面中推出了[速率限制图表](https://platform.claude.com/docs/en/api/rate-limits#monitoring-your-rate-limits-in-the-console)，允许您监控 API 速率限制使用情况和随时间推移的缓存率。

### 2025 年 9 月 3 日

*   我们在客户端工具结果中推出了对可引用文档的支持。在我们的[工具使用文档](https://platform.claude.com/docs/en/agents-and-tools/tool-use/implement-tool-use)中了解更多信息。

### 2025 年 9 月 2 日

*   我们推出了公开测试版的[代码执行工具](https://platform.claude.com/docs/en/agents-and-tools/tool-use/code-execution-tool) v2，用 Bash 命令执行和直接文件操作功能（包括用其他语言编写代码）取代了最初仅支持 Python 的工具。

### 2025 年 8 月 27 日

*   我们推出了 [PHP SDK](https://github.com/anthropics/anthropic-sdk-php) 的测试版。

### 2025 年 8 月 26 日

*   我们提高了 Claude API 上 Claude Sonnet 4 的 [1M token 上下文窗口](https://platform.claude.com/docs/en/build-with-claude/context-windows#1m-token-context-window)的速率限制。有关更多信息，请参阅[长上下文速率限制](https://platform.claude.com/docs/en/api/rate-limits#long-context-rate-limits)。
*   1M token 上下文窗口现已在 Google Cloud 的 Vertex AI 上可用。有关更多信息，请参阅 [Vertex AI 上的 Claude](https://platform.claude.com/docs/en/build-with-claude/claude-on-vertex-ai)。

### 2025 年 8 月 19 日

*   请求 ID 现在与现有的 `request-id` 请求头一起直接包含在错误响应正文中。在我们的[错误文档](https://platform.claude.com/docs/en/api/errors#error-shapes)中了解更多信息。

### 2025 年 8 月 18 日

*   我们发布了 [Usage & Cost API](https://platform.claude.com/docs/en/build-with-claude/usage-cost-api)，允许管理员以编程方式监控其组织的使用量和成本数据。
*   我们在 Admin API 中添加了一个新端点，用于检索组织信息。有关详细信息，请参阅 [Organization Info Admin API 参考](https://platform.claude.com/docs/en/api/admin-api/organization/get-me)。

### 2025 年 8 月 13 日

*   我们宣布弃用 Claude Sonnet 3.5 模型（`claude-3-5-sonnet-20240620` 和 `claude-3-5-sonnet-20241022`）。这些模型将于 2025 年 10 月 28 日停用。我们建议迁移到 Claude Sonnet 4.5 (`claude-sonnet-4-5-20250929`) 以获得改进的性能和功能。在[模型弃用文档](https://platform.claude.com/docs/en/about-claude/model-deprecations)中阅读更多信息。
*   提示词缓存的 1 小时缓存持续时间现已正式发布。您现在可以使用延长的缓存 TTL，而无需 beta 请求头。在我们的[提示词缓存文档](https://platform.claude.com/docs/en/build-with-claude/prompt-caching#1-hour-cache-duration)中了解更多信息。

### 2025 年 8 月 12 日

*   我们在 Claude API 和 Amazon Bedrock 上的 Claude Sonnet 4 中推出了对 [1M token 上下文窗口](https://platform.claude.com/docs/en/build-with-claude/context-windows#1m-token-context-window)的测试版支持。

### 2025 年 8 月 11 日

*   由于 API 的加速限制，一些客户在 API 使用量急剧增加后可能会遇到 429 (`rate_limit_error`) [错误](https://platform.claude.com/docs/en/api/errors)。以前，在类似情况下会发生 529 (`overloaded_error`) 错误。

### 2025 年 8 月 8 日

*   搜索结果内容块现已在 Claude API 和 Google Cloud 的 Vertex AI 上正式发布。此功能为 RAG 应用程序提供具有适当来源归属的自然引用。不再需要 beta 请求头 `search-results-2025-06-09`。在我们的[搜索结果文档](https://platform.claude.com/docs/en/build-with-claude/search-results)中了解更多信息。

### 2025 年 8 月 5 日

*   我们推出了 [Claude Opus 4.1](https://www.anthropic.com/news/claude-opus-4-1)，这是对 Claude Opus 4 的增量更新，具有增强的功能和性能改进。* 在我们的[模型与定价文档](https://platform.claude.com/docs/en/about-claude/models)中了解更多信息。

_* - Opus 4.1 不允许同时指定 `temperature` 和 `top_p` 参数。请仅使用其中一个。_

### 2025 年 7 月 28 日

*   我们发布了 `text_editor_20250728`，这是一个更新的文本编辑器工具，修复了以前版本中的一些问题，并添加了一个可选的 `max_characters` 参数，允许您在查看大文件时控制截断长度。

### 2025 年 7 月 24 日

*   我们提高了 Claude API 上 Claude Opus 4 的[速率限制](https://platform.claude.com/docs/en/api/rate-limits)，为您提供更多容量来使用 Claude 进行构建和扩展。对于具有[使用层级 1-4 速率限制](https://platform.claude.com/docs/en/api/rate-limits#rate-limits)的客户，这些更改将立即应用于您的帐户 - 无需执行任何操作。

### 2025 年 7 月 21 日

*   我们已停用 Claude 2.0、Claude 2.1 和 Claude Sonnet 3 模型。现在对这些模型的所有请求都将返回错误。在[我们的文档](https://platform.claude.com/docs/en/about-claude/model-deprecations)中阅读更多信息。

### 2025 年 7 月 17 日

*   我们提高了 Claude API 上 Claude Sonnet 4 的[速率限制](https://platform.claude.com/docs/en/api/rate-limits)，为您提供更多容量来使用 Claude 进行构建和扩展。对于具有[使用层级 1-4 速率限制](https://platform.claude.com/docs/en/api/rate-limits#rate-limits)的客户，这些更改将立即应用于您的帐户 - 无需执行任何操作。

### 2025 年 7 月 3 日

*   我们推出了测试版的搜索结果内容块，为 RAG 应用程序提供自然引用。工具现在可以返回具有适当来源归属的搜索结果，并且 Claude 将在其响应中自动引用这些来源 - 与网络搜索的引用质量相匹配。这消除了在自定义知识库应用程序中对文档变通方法的需求。在我们的[搜索结果文档](https://platform.claude.com/docs/en/build-with-claude/search-results)中了解更多信息。要启用此功能，请使用 beta 请求头 `search-results-2025-06-09`。

### 2025 年 6 月 30 日

*   我们宣布弃用 Claude Opus 3 模型。在[我们的文档](https://platform.claude.com/docs/en/about-claude/model-deprecations)中阅读更多信息。

### 2025 年 6 月 23 日

*   具有开发者 (Developer) 角色的 Console 用户现在可以访问 [Cost](https://console.anthropic.com/settings/cost) 页面。以前，开发者角色允许访问 [Usage](https://console.anthropic.com/settings/usage) 页面，但不能访问 Cost 页面。

### 2025 年 6 月 11 日

*   我们推出了公开测试版的[细粒度工具流式传输](https://platform.claude.com/docs/en/agents-and-tools/tool-use/fine-grained-tool-streaming)，该功能使 Claude 能够流式传输工具使用参数，而无需缓冲 / JSON 验证。要启用细粒度工具流式传输，请使用 [beta 请求头](https://platform.claude.com/docs/en/api/beta-headers) `fine-grained-tool-streaming-2025-05-14`。

### 2025 年 5 月 22 日

*   我们推出了 [Claude Opus 4 和 Claude Sonnet 4](http://www.anthropic.com/news/claude-4)，这是我们具有扩展思考能力的最新模型。在我们的[模型与定价文档](https://platform.claude.com/docs/en/about-claude/models)中了解更多信息。
*   Claude 4 模型中[扩展思考](https://platform.claude.com/docs/en/build-with-claude/extended-thinking)的默认行为会返回 Claude 完整思考过程的摘要，完整的思考过程将被加密并返回在 `thinking` 块输出的 `signature` 字段中。
*   我们推出了公开测试版的[交错思考 (interleaved thinking)](https://platform.claude.com/docs/en/build-with-claude/extended-thinking#interleaved-thinking)，该功能使 Claude 能够在工具调用之间进行思考。要启用交错思考，请使用 [beta 请求头](https://platform.claude.com/docs/en/api/beta-headers) `interleaved-thinking-2025-05-14`。
*   我们推出了公开测试版的 [Files API](https://platform.claude.com/docs/en/build-with-claude/files)，使您能够上传文件并在 Messages API 和代码执行工具中引用它们。
*   我们推出了公开测试版的[代码执行工具](https://platform.claude.com/docs/en/agents-and-tools/tool-use/code-execution-tool)，该工具使 Claude 能够在安全的沙盒环境中执行 Python 代码。
*   我们推出了公开测试版的 [MCP 连接器](https://platform.claude.com/docs/en/agents-and-tools/mcp-connector)，该功能允许您直接从 Messages API 连接到远程 MCP 服务器。
*   为了提高回答质量并减少工具错误，我们将所有模型的 Messages API 中 `top_p` [核采样 (nucleus sampling)](https://en.wikipedia.org/wiki/Top-p_sampling) 参数的默认值从 0.999 更改为 0.99。要恢复此更改，请将 `top_p` 设置为 0.999。此外，启用扩展思考后，您现在可以将 `top_p` 设置为 0.95 到 1 之间的值。
*   我们将 [Go SDK](https://github.com/anthropics/anthropic-sdk-go) 从测试版 (beta) 移至正式版 (GA)。
*   我们在 Console 的 [Usage](https://console.anthropic.com/settings/usage) 页面中包含了分钟和小时级别的粒度，并在 Usage 页面上显示了 429 错误率。

### 2025 年 5 月 21 日

*   我们将 [Ruby SDK](https://github.com/anthropics/anthropic-sdk-ruby) 从测试版 (beta) 移至正式版 (GA)。

### 2025 年 5 月 7 日

*   我们在 API 中推出了网络搜索工具，允许 Claude 从网络访问最新信息。在我们的[网络搜索工具文档](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool)中了解更多信息。

### 2025 年 5 月 1 日

*   现在必须直接在 `tool_result` 和 `document.source` 的父 `content` 块中指定缓存控制。为了向后兼容，如果在 `tool_result.content` 或 `document.source.content` 的最后一个块上检测到缓存控制，它将自动应用于父块。在 `tool_result.content` 和 `document.source.content` 内的任何其他块上进行缓存控制将导致验证错误。

### 2025 年 4 月 9 日

*   我们推出了 [Ruby SDK](https://github.com/anthropics/anthropic-sdk-ruby) 的测试版。

### 2025 年 3 月 31 日

*   我们将 [Java SDK](https://github.com/anthropics/anthropic-sdk-java) 从测试版 (beta) 移至正式版 (GA)。
*   我们将 [Go SDK](https://github.com/anthropics/anthropic-sdk-go) 从 Alpha 版移至测试版 (beta)。

### 2025 年 2 月 27 日

*   我们在 Messages API 中为图像和 PDF 添加了 URL 源块。您现在可以直接通过 URL 引用图像和 PDF，而无需对它们进行 base64 编码。在我们的[视觉文档](https://platform.claude.com/docs/en/build-with-claude/vision)和 [PDF 支持文档](https://platform.claude.com/docs/en/build-with-claude/pdf-support)中了解更多信息。
*   我们在 Messages API 的 `tool_choice` 参数中添加了对 `none` 选项的支持，以防止 Claude 调用任何工具。此外，在包含 `tool_use` 和 `tool_result` 块时，您不再需要提供任何 `tools`。
*   我们推出了兼容 OpenAI 的 API 端点，允许您只需在现有的 OpenAI 集成中更改 API 密钥、基础 URL 和模型名称即可测试 Claude 模型。此兼容层支持核心的聊天补全 (chat completions) 功能。在我们的 [OpenAI SDK 兼容性文档](https://platform.claude.com/docs/en/api/openai-sdk)中了解更多信息。

### 2025 年 2 月 24 日

*   我们推出了 [Claude Sonnet 3.7](http://www.anthropic.com/news/claude-3-7-sonnet)，这是我们迄今为止最智能的模型。Claude Sonnet 3.7 可以产生近乎即时的响应，或者逐步展示其扩展思考过程。一个模型，两种思考方式。在我们的[模型与定价文档](https://platform.claude.com/docs/en/about-claude/models)中了解有关所有 Claude 模型的更多信息。
*   我们为 Claude Haiku 3.5 添加了视觉支持，使模型能够分析和理解图像。
*   我们发布了一种 token 高效的工具使用实现，提高了与 Claude 一起使用工具时的整体性能。在我们的[工具使用文档](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview)中了解更多信息。
*   我们将 [Console](https://console.anthropic.com/workbench) 中新提示词的默认 temperature（温度）从 0 更改为 1，以与 API 中的默认 temperature 保持一致。现有的已保存提示词保持不变。
*   我们发布了工具的更新版本，将文本编辑和 bash 工具与计算机使用系统提示词解耦：
    *   `bash_20250124`：功能与以前的版本相同，但独立于计算机使用。不需要 beta 请求头。
    *   `text_editor_20250124`：功能与以前的版本相同，但独立于计算机使用。不需要 beta 请求头。
    *   `computer_20250124`：更新的计算机使用工具，包含新的命令选项，包括 "hold_key"、"left_mouse_down"、"left_mouse_up"、"scroll"、"triple_click" 和 "wait"。此工具需要 "computer-use-2025-01-24" anthropic-beta 请求头。在我们的[工具使用文档](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview)中了解更多信息。

### 2025 年 2 月 10 日

*   我们在所有 API 响应中添加了 `anthropic-organization-id` 响应头。此请求头提供与请求中使用的 API 密钥关联的组织 ID。

### 2025 年 1 月 31 日

*   我们将 [Java SDK](https://github.com/anthropics/anthropic-sdk-java) 从 Alpha 版移至测试版 (beta)。

### 2025 年 1 月 23 日

*   我们在 API 中推出了引用功能，允许 Claude 为信息提供来源归属。在我们的[引用文档](https://platform.claude.com/docs/en/build-with-claude/citations)中了解更多信息。
*   我们在 Messages API 中添加了对纯文本文档和自定义内容文档的支持。

### 2025 年 1 月 21 日

*   我们宣布弃用 Claude 2、Claude 2.1 和 Claude Sonnet 3 模型。在[我们的文档](https://platform.claude.com/docs/en/about-claude/model-deprecations)中阅读更多信息。

### 2025 年 1 月 15 日

*   我们更新了[提示词缓存](https://platform.claude.com/docs/en/build-with-claude/prompt-caching)，使其更易于使用。现在，当您设置缓存断点时，我们将自动从您之前缓存的最长前缀中读取。
*   现在，您可以在使用工具时预填充 Claude 的回复 (put words in Claude's mouth)。

### 2025 年 1 月 10 日

*   我们优化了对 [Message Batches API 中提示词缓存](https://platform.claude.com/docs/en/build-with-claude/batch-processing#using-prompt-caching-with-message-batches)的支持，以提高缓存命中率。

### 2024 年 12 月 19 日

*   我们在 Message Batches API 中添加了对[删除端点](https://platform.claude.com/docs/en/api/deleting-message-batches)的支持。

### 2024 年 12 月 17 日

以下功能现已在 Claude API 中正式发布：

*   [Models API](https://platform.claude.com/docs/en/api/models-list)：查询可用模型、验证模型 ID，并将[模型别名](https://platform.claude.com/docs/en/about-claude/models#model-names)解析为其规范的模型 ID。
*   [Message Batches API](https://platform.claude.com/docs/en/build-with-claude/batch-processing)：以标准 API 成本的 50% 异步处理大批量的消息。
*   [Token 计数 API](https://platform.claude.com/docs/en/build-with-claude/token-counting)：在将 Messages 发送给 Claude 之前计算其 token 数量。
*   [提示词缓存](https://platform.claude.com/docs/en/build-with-claude/prompt-caching)：通过缓存和重用提示词内容，将成本降低高达 90%，延迟降低高达 80%。
*   [PDF 支持](https://platform.claude.com/docs/en/build-with-claude/pdf-support)：处理 PDF 以分析文档中的文本和视觉内容。

我们还发布了新的官方 SDK：

*   [Java SDK](https://github.com/anthropics/anthropic-sdk-java) (Alpha 版)
*   [Go SDK](https://github.com/anthropics/anthropic-sdk-go) (Alpha 版)

### 2024 年 12 月 4 日

*   我们在 [Developer Console](https://console.anthropic.com/) 的 [Usage](https://console.anthropic.com/settings/usage) 和 [Cost](https://console.anthropic.com/settings/cost) 页面中添加了按 API 密钥分组的功能。
*   我们在 [Developer Console](https://console.anthropic.com/) 的 [API keys](https://console.anthropic.com/settings/keys) 页面中添加了两个新的 **Last used at**（最后使用时间）和 **Cost**（成本）列，以及按任何列排序的功能。

### 2024 年 11 月 21 日

*   我们发布了 [Admin API](https://platform.claude.com/docs/en/build-with-claude/administration-api)，允许用户以编程方式管理其组织的资源。

### 2024 年 11 月 20 日

*   我们更新了 Messages API 的速率限制。我们用新的每分钟输入和输出 token 速率限制取代了每分钟 token 速率限制。在我们的[文档](https://platform.claude.com/docs/en/api/rate-limits)中阅读更多信息。
*   我们在 [Workbench](https://console.anthropic.com/workbench) 中添加了对[工具使用](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview)的支持。

### 2024 年 11 月 13 日

*   我们为所有 Claude Sonnet 3.5 模型添加了 PDF 支持。在我们的[文档](https://platform.claude.com/docs/en/build-with-claude/pdf-support)中阅读更多信息。

### 2024 年 11 月 6 日

*   我们已停用 Claude 1 和 Instant 模型。在[我们的文档](https://platform.claude.com/docs/en/about-claude/model-deprecations)中阅读更多信息。

### 2024 年 11 月 4 日

*   [Claude Haiku 3.5](https://www.anthropic.com/claude/haiku) 现已作为纯文本模型在 Claude API 上可用。

### 2024 年 11 月 1 日

*   我们添加了 PDF 支持，以便与新的 Claude Sonnet 3.5 结合使用。在我们的[文档](https://platform.claude.com/docs/en/build-with-claude/pdf-support)中阅读更多信息。
*   我们还添加了 token 计数功能，允许您在将 Message 发送给 Claude 之前确定其总 token 数。在我们的[文档](https://platform.claude.com/docs/en/build-with-claude/token-counting)中阅读更多信息。

### 2024 年 10 月 22 日

*   我们在 API 中添加了 Anthropic 定义的计算机使用工具，以便与新的 Claude Sonnet 3.5 结合使用。在我们的[文档](https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool)中阅读更多信息。
*   Claude Sonnet 3.5，我们迄今为止最智能的模型，刚刚获得了升级，现已在 Claude API 上可用。在 [Claude Sonnet 文档](https://www.anthropic.com/claude/sonnet)中阅读更多信息。

### 2024 年 10 月 8 日

*   Message Batches API 现已推出测试版。在 Claude API 中以降低 50% 的成本异步处理大批量查询。在我们的[文档](https://platform.claude.com/docs/en/build-with-claude/batch-processing)中阅读更多信息。
*   我们放宽了对 Messages API 中 `user`/`assistant` 轮次排序的限制。连续的 `user`/`assistant` 消息将被合并为一条消息而不是报错，并且我们不再要求第一条输入消息必须是 `user` 消息。
*   我们已弃用 Build 和 Scale 计划，转而采用标准功能套件（以前称为 Build），以及可通过销售获取的附加功能。在我们的 [API 定价信息](https://claude.com/platform/api)中阅读更多信息。

### 2024 年 10 月 3 日

*   我们在 API 中添加了禁用并行工具使用的功能。在 `tool_choice` 字段中设置 `disable_parallel_tool_use: true` 以确保 Claude 最多使用一个工具。在我们的[文档](https://platform.claude.com/docs/en/agents-and-tools/tool-use/implement-tool-use#parallel-tool-use)中阅读更多信息。

### 2024 年 9 月 10 日

*   我们在 [Developer Console](https://console.anthropic.com/) 中添加了 Workspaces（工作区）。Workspaces 允许您设置自定义支出或速率限制、对 API 密钥进行分组、按项目跟踪使用情况，并通过用户角色控制访问权限。在我们的[博客文章](https://www.anthropic.com/news/workspaces)中阅读更多信息。

### 2024 年 9 月 4 日

*   我们宣布弃用 Claude 1 模型。在[我们的文档](https://platform.claude.com/docs/en/about-claude/model-deprecations)中阅读更多信息。

### 2024 年 8 月 22 日

*   我们通过在 API 响应中返回 CORS 请求头，添加了对在浏览器中使用 SDK 的支持。在 SDK 实例化中设置 `dangerouslyAllowBrowser: true` 以启用此功能。

### 2024 年 8 月 19 日

*   我们将 Claude Sonnet 3.5 的 8,192 token 输出从测试版移至正式发布。

### 2024 年 8 月 14 日

*   [提示词缓存](https://platform.claude.com/docs/en/build-with-claude/prompt-caching)现已作为测试版功能在 Claude API 中可用。缓存并重用提示词可将延迟降低高达 80%，并将成本降低高达 90%。

### 2024 年 7 月 15 日

*   使用新的 `anthropic-beta: max-tokens-3-5-sonnet-2024-07-15` 请求头，从 Claude Sonnet 3.5 生成长度高达 8,192 个 token 的输出。

### 2024 年 7 月 9 日

*   在 [Developer Console](https://console.anthropic.com/) 中使用 Claude 自动为您的提示词生成测试用例。
*   在 [Developer Console](https://console.anthropic.com/) 的新输出比较模式中并排比较不同提示词的输出。

### 2024 年 6 月 27 日

*   在 [Developer Console](https://console.anthropic.com/) 的新 [Usage](https://console.anthropic.com/settings/usage) 和 [Cost](https://console.anthropic.com/settings/cost) 选项卡中，查看按美元金额、token 数量和 API 密钥细分的 API 使用情况和计费。
*   在 [Developer Console](https://console.anthropic.com/) 的新 [Rate Limits](https://console.anthropic.com/settings/limits) 选项卡中查看您当前的 API 速率限制。

### 2024 年 6 月 20 日

*   [Claude Sonnet 3.5](http://anthropic.com/news/claude-3-5-sonnet)，我们迄今为止最智能的模型，现已在 Claude API、Amazon Bedrock 和 Google Vertex AI 上正式发布。

### 2024 年 5 月 30 日

*   [工具使用](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview)现已在 Claude API、Amazon Bedrock 和 Google Vertex AI 上正式发布。

### 2024 年 5 月 10 日

*   我们的提示词生成器工具现已在 [Developer Console](https://console.anthropic.com/) 中可用。Prompt Generator 使您可以轻松引导 Claude 生成针对您的特定任务量身定制的高质量提示词。在我们的[博客文章](https://www.anthropic.com/news/prompt-generator)中阅读更多信息。

本页面对您有帮助吗？

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Claude]]
- [[00-元语/sdk]]
- [[00-元语/workflow]]
- [[00-元语/evals]]
