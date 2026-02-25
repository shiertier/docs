---
title: "Claude 模型总览：从旧链接迁移后的当前能力基线"
发布日期: 2025-08-07
作者: "Anthropic"
来源: "Claude API Docs"
原文链接: "https://platform.claude.com/docs/en/about-claude/models/whats-new-claude-4-5"
译注: "原链接当前返回 Models overview 页面，本文基于该页面英文正文翻译整理。"
---

## 摘要

**1) 一句话总结**
本指南详细介绍了 Anthropic 最新一代 Claude 模型（Opus 4.6、Sonnet 4.6 和 Haiku 4.5）的特性、定价、上下文窗口及性能对比，并为开发者提供了模型选择与迁移建议。

**2) 核心要点**
* **首选推荐**：对于最复杂的任务（如构建智能体和编码），官方建议从最智能的 Claude Opus 4.6 开始。
* **通用能力**：所有当前模型均支持文本和图像输入、文本输出、多语言及视觉功能，可通过 Claude API、AWS Bedrock 和 Google Vertex AI 访问。
* **模型定位与定价**（每百万 Token）：
  * **Opus 4.6**：最智能模型（输入 $5 / 输出 $25）。
  * **Sonnet 4.6**：速度与智能的最佳结合（输入 $3 / 输出 $15）。
  * **Haiku 4.5**：速度最快模型（输入 $1 / 输出 $5）。
* **上下文与输出限制**：三款模型的基础上下文窗口均为 200K Token。Opus 4.6 的最大输出能力为 128K Token，而 Sonnet 4.6 和 Haiku 4.5 为 64K Token。
* **高级功能支持**：所有三款模型均支持“扩展思考”和“优先层级”，但只有 Opus 4.6 和 Sonnet 4.6 支持“自适应思考”。
* **端点路由选项**：从 Sonnet 4.5 及后续模型开始，AWS Bedrock 和 Vertex AI 提供全局端点（动态路由以实现最大可用性）和区域端点（保证数据通过特定地理区域路由）。
* **版本一致性**：带有快照日期（如 20240620）的模型版本在所有平台上完全相同且不会更改，以确保开发者环境中的性能稳定性。

**3) 风险/不足**
* **测试版限制与额外成本**：Opus 4.6 和 Sonnet 4.6 的 1M Token 超大上下文窗口目前仍处于测试版阶段（需使用特定请求头 `context-1m-2025-08-07`），且超过 200K Token 的请求会触发额外的长上下文定价。
* **功能缺失**：Claude Haiku 4.5 明确不支持“自适应思考”功能。

## 正文

模型与定价
================

Claude 是由 Anthropic 开发的一系列最先进的大型语言模型。本指南介绍了可用的模型并比较了它们的性能。

选择模型
----------------

如果您不确定使用哪个模型，对于最复杂的任务，建议从 **Claude Opus 4.6** 开始。它是最新一代模型，在编码和推理方面具有卓越的性能。

目前所有的 Claude 模型都支持文本和图像输入、文本输出、多语言功能以及视觉能力。可以通过 Claude API、AWS Bedrock 和 Google Vertex AI 访问这些模型。

选择模型后，请[了解如何进行首次 API 调用](https://platform.claude.com/docs/en/get-started)。

### 最新模型比较

| 特性 | Claude Opus 4.6 | Claude Sonnet 4.6 | Claude Haiku 4.5 |
| --- | --- | --- | --- |
| **描述** | 用于构建智能体和编码的最智能模型 | 速度与智能的最佳结合 | 具有接近前沿智能的最快模型 |
| **Claude API ID** | claude-opus-4-6 | claude-sonnet-4-6 | claude-haiku-4-5-20251001 |
| **Claude API 别名** | claude-opus-4-6 | claude-sonnet-4-6 | claude-haiku-4-5 |
| **AWS Bedrock ID** | anthropic.claude-opus-4-6-v1 | anthropic.claude-sonnet-4-6 | anthropic.claude-haiku-4-5-20251001-v1:0 |
| **GCP Vertex AI ID** | claude-opus-4-6 | claude-sonnet-4-6 | claude-haiku-4-5@20251001 |
| **定价**1 | $5 / 输入 MTok $25 / 输出 MTok | $3 / 输入 MTok $15 / 输出 MTok | $1 / 输入 MTok $5 / 输出 MTok |
| **[扩展思考](https://platform.claude.com/docs/en/build-with-claude/extended-thinking)** | 是 | 是 | 是 |
| **[自适应思考](https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking)** | 是 | 是 | 否 |
| **[优先层级](https://platform.claude.com/docs/en/api/service-tiers)** | 是 | 是 | 是 |
| **相对延迟** | 中等 | 快 | 最快 |
| **上下文窗口** | 200K Token / 1M Token (测试版)3 | 200K Token / 1M Token (测试版)3 | 200K Token |
| **最大输出** | 128K Token | 64K Token | 64K Token |
| **可靠知识截止日期** | 2025 年 5 月 2 | 2025 年 8 月 2 | 2025 年 2 月 |
| **训练数据截止日期** | 2025 年 8 月 | 2026 年 1 月 | 2025 年 7 月 |

_1 - 有关完整的定价信息（包括批处理 API 折扣、提示词缓存费率、扩展思考成本和视觉处理费用），请参阅[定价页面](https://platform.claude.com/docs/en/about-claude/pricing)。_

_2 - **可靠知识截止日期**表示模型的知识最广泛且最可靠的日期。**训练数据截止日期**是所用训练数据的更广泛日期范围。如需了解更多信息，请参阅 [Anthropic 的透明度中心 (Transparency Hub)](https://www.anthropic.com/transparency)。_

_3 - 当使用 `context-1m-2025-08-07` 测试版请求头时，Claude Opus 4.6 和 Sonnet 4.6 支持 [1M Token 上下文窗口](https://platform.claude.com/docs/en/build-with-claude/context-windows#1m-token-context-window)。超过 200K Token 的请求适用[长上下文定价](https://platform.claude.com/docs/en/about-claude/pricing#long-context-pricing)。_

具有相同快照日期（例如 20240620）的模型在所有平台上都是完全相同的，并且不会发生改变。模型名称中的快照日期确保了一致性，并允许开发者在不同环境中依赖其稳定的性能。

从 **Claude Sonnet 4.5 及所有后续模型**（包括 Claude Sonnet 4.6）开始，AWS Bedrock 和 Google Vertex AI 提供两种端点类型：**全局端点 (global endpoints)**（动态路由以实现最大可用性）和**区域端点 (regional endpoints)**（保证数据通过特定地理区域进行路由）。如需了解更多信息，请参阅[第三方平台定价部分](https://platform.claude.com/docs/en/about-claude/pricing#third-party-platform-pricing)。

提示词与输出性能
-----------------------------

Claude 4 模型在以下方面表现出色：

*   **性能**：在推理、编码、多语言任务、长上下文处理、诚实度以及图像处理方面均取得了顶尖结果。有关更多信息，请参阅 [Claude 4 博客文章](http://www.anthropic.com/news/claude-4)。

*   **引人入胜的回复**：Claude 模型非常适合需要丰富、拟人化交互的应用程序。

    *   如果您倾向于更简洁的回复，可以调整您的提示词，以引导模型生成所需长度的输出。详情请参阅[提示词工程指南](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering)。
    *   有关提示词的最佳实践，请参阅[提示词最佳实践指南](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)。

*   **输出质量**：从上一代模型迁移到 Claude 4 时，您可能会注意到整体性能有较大幅度的提升。

迁移到 Claude 4.6
-----------------------

如果您目前使用的是旧版 Claude 模型，建议考虑迁移到 Claude Opus 4.6，以利用其提升的智能水平和增强的功能。有关详细的迁移说明，请参阅[迁移到 Claude 4.6](https://platform.claude.com/docs/en/about-claude/models/migration-guide)。

开始使用 Claude
-----------------------

如果您已准备好开始探索 Claude 能为您做些什么，那就开始吧！无论您是希望将 Claude 集成到应用程序中的开发者，还是想要亲身体验 AI 强大功能的用户，以下资源都能为您提供帮助。

想要与 Claude 聊天？请访问 [claude.ai](http://www.claude.ai/)！

如果您有任何问题或需要帮助，请随时联系[支持团队](https://support.claude.com/)或咨询 [Discord 社区](https://www.anthropic.com/discord)。

此页面对您有帮助吗？

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Claude]]
- [[00-元语/llm]]
- [[00-元语/multimodal]]
- [[00-元语/benchmark]]
