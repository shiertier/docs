---
title: "Gemini"

类型: "元语词条"
更新日期: "2026-03-11"
---

## 定义

Gemini 是 Google 旗下的原生多模态模型与产品生态名称；在本仓库中既指 Gemini 模型家族，也指围绕 Gemini app、Google AI Studio 与 Gemini API 展开的使用语境。

## 核心内涵

- **原生多模态**：Gemini 持续被官方定义为可原生处理文本、图像、音频、视频与代码的模型系列，重点不在单一输入模态，而在跨模态理解与生成能力。
- **长上下文与大规模输入**：Gemini API 官方文档持续强调 1M 级上下文窗口，以及长文档、代码库、音视频等大规模多模态输入场景，这是其代表性特征之一。
- **工具调用与 agentic 能力**：当前 Gemini API 已把 Google Search、URL Context、Code Execution、Computer Use 等工具，以及 Deep Research 这类 agent 能力作为一等开发能力提供。
- **多层交付形态**：Gemini 不只是模型名，也覆盖 Gemini app、Google AI Studio、Gemini API、Vertex AI 与 Google DeepMind 模型卡等不同入口与使用语境。

## 实践要点

- 把 Gemini 区分为“模型家族”和“产品入口”：讨论能力时优先指明是在说具体模型版本，还是 Gemini app / AI Studio / API 层的功能。
- 处理复杂任务时，优先利用长上下文、文件输入、工具调用与结构化输出，而不是只把它当作普通聊天模型。
- 涉及音频、视频、PDF、代码库等多模态材料时，要显式设计输入组织方式与输出约束，避免把长上下文直接堆成噪音。
- 落地时同步考虑安全策略、权限边界与成本控制，尤其是工具调用、搜索接地和企业数据接入场景。

## 相关词条

- [[00-元语/llm]]
- [[00-元语/multimodal]]
- [[00-元语/Agent]]
- [[00-元语/tool]]

## 相关文档

- [[01-博客/Google/Gemini 3 Deep Think：推动科学、研究与工程的进步|Gemini 3 Deep Think：推动科学、研究与工程的进步]]；关联理由：版本演进；说明：该文展示 Gemini 在高阶推理方向的最新能力扩展，可补充词条的家族演进脉络。
- [[01-博客/Google/Gemini Drop（2026 年 2 月）：Gemini 应用新能力总览|Gemini Drop（2026 年 2 月）：Gemini 应用新能力总览]]；关联理由：版本演进；说明：该文聚焦 Gemini 应用层的新能力更新，可补全品牌在产品层面的演进信息。
- [[02-资源/AI-编程助手与Agent/Gemini CLI：终端优先的开源 AI agent|Gemini CLI：终端优先的开源 AI agent]]；关联理由：上下游；说明：该项目体现 Gemini 能力如何通过 CLI 与工具系统落到开发者工作流，属于模型品牌到工程接入的下游形态。

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/multimodal]]
- [[00-元语/prompt]]
- [[00-元语/context-optimization]]
- [[00-元语/tool]]
- [[00-元语/Agent]]
- [[00-元语/compliance]]
- [[00-元语/security]]
