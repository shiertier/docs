---
title: "assistant-ui：AI 聊天界面组件库"
发布日期: "2026-02-23"
对象: "GitHub 项目 `assistant-ui/assistant-ui`"
项目主页: "https://github.com/assistant-ui/assistant-ui"
开源协议: "MIT License"
主要语言: "TypeScript"
统计快照: "Stars 8571，Forks 900，Watchers 78（抓取时间：2026-02-24）"
版本快照: "最新发布 @assistant-ui/tap@0.3.0（发布时间：2025-11-21T07:35:06Z）"
---

## 摘要

**一句话总结**
assistant-ui 是一个开源的 TypeScript/React 库，采用可组合的基础组件设计，旨在帮助开发者快速构建高度可定制且具备生产级别的 AI 聊天界面。

**关键要点**
*   **开源与技术栈**：基于 MIT 协议开源，主要使用 TypeScript 编写，专为 React 应用设计。
*   **组件化设计理念**：采用类似 Radix 的设计，提供消息列表、输入框等独立的基础组件（Primitives），允许开发者进行像素级的高度定制（受 shadcn/ui 启发）。
*   **开箱即用的聊天功能**：内置流式输出、自动滚动、消息重试、附件上传、Markdown 渲染、代码高亮以及语音听写等核心交互功能。
*   **动态 UI 与工具调用**：支持将 AI 的工具调用（Tool calls）和复杂 JSON 数据直接渲染为自定义 React 组件，并支持内联的人工审批（Human approvals）工作流。
*   **广泛的后端集成**：支持 Vercel AI SDK、LangGraph、Mastra 及自定义流式协议，原生兼容 OpenAI、Anthropic、Google Gemini、Ollama 等多种大模型提供商。
*   **云端扩展能力**：可通过 Assistant Cloud 提供可选的聊天历史记录持久化与数据分析功能。
*   **优秀的开发者体验**：提供强类型的 TypeScript 支持、内置键盘快捷键、无障碍访问（a11y）支持，并可通过 CLI 工具（`npx assistant-ui create/init`）快速初始化项目。
*   **生态认可度高**：项目获得 Y Combinator 支持，已被 LangChain、Browser Use 和 Helicone 等知名项目及企业采用。

## 功能与定位

assistant-ui 是一个开源的 TypeScript/React 库，旨在帮助开发者在 React 应用中快速构建生产级别的 AI 聊天体验（类似 ChatGPT 的交互体验）。它采用类似 Radix 的设计理念，提供可组合的基础组件（Primitives）而非单一的巨型组件，方便开发者进行高度定制。

## 典型使用场景

*   在 React 应用中快速集成具备流式输出和自动滚动功能的 AI 助手。
*   构建类似 Perplexity 或 ChatGPT 的定制化 AI 聊天界面。
*   需要将 AI 工具调用（Tool calls）或复杂 JSON 数据渲染为自定义 UI 组件的场景。
*   需要人工介入审批（Human approvals）或触发前端安全操作的 AI 工作流。

## 核心功能

*   **开箱即用的聊天交互**：内置流式传输（Streaming）、自动滚动、消息重试、附件上传、Markdown 渲染、代码高亮以及语音输入（听写）功能。
*   **动态组件生成**：支持将 AI 返回的工具调用和 JSON 数据直接渲染为 React 组件，并支持内联的人工审批操作。
*   **广泛的后端与框架集成**：
    *   支持 Vercel AI SDK、LangGraph（及 LangGraph Cloud）、Mastra 或任何自定义后端/流式协议。
    *   原生兼容多种大模型提供商，包括 OpenAI、Anthropic、Mistral、Perplexity、AWS Bedrock、Azure、Google Gemini、Hugging Face、Fireworks、Cohere、Replicate 和 Ollama。
*   **云端扩展**：可通过 Assistant Cloud 提供可选的聊天历史记录持久化和数据分析功能。

## 特色与差异点

*   **高度可定制的 UI**：受 shadcn/ui 和 cmdk 启发，提供消息列表、输入框、对话线程、工具栏等独立组件，开发者可以精确控制每一个像素的样式。
*   **优秀的开发者体验（DX）**：提供合理的默认设置、内置键盘快捷键、无障碍访问（a11y）支持以及强类型的 TypeScript 支持。
*   **生态认可**：项目获得了 Y Combinator 的支持，并被 LangChain、Browser Use、Helicone 等知名项目和企业采用。

## 使用方式概览

开发者可以通过命令行工具快速初始化项目：
*   创建新项目：运行 `npx assistant-ui create`
*   添加到现有项目：运行 `npx assistant-ui init`

## 限制与注意事项

- 使用前请核对许可证、维护状态与兼容性约束。

## 链接

- GitHub 仓库: https://github.com/assistant-ui/assistant-ui
- 官方网站: https://www.assistant-ui.com
- 官方文档: https://www.assistant-ui.com/docs
- 示例展示: https://www.assistant-ui.com/examples
- Discord 社区: https://discord.gg/S9dwgCNEFs

## 关联主题

- [[00-元语/AI]]
- [[00-元语/react]]
- [[00-元语/ui-protocol]]
- [[00-元语/github]]
