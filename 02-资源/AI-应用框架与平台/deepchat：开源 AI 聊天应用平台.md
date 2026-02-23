---
title: "deepchat：开源 AI 聊天应用平台"
发布日期: "2026-02-23"
对象: "GitHub 项目 `ThinkInAIXYZ/deepchat`"
项目主页: "https://github.com/ThinkInAIXYZ/deepchat"
开源协议: "Apache License 2.0"
主要语言: "TypeScript"
统计快照: "Stars 5515，Forks 635，Watchers 55（抓取时间：2026-02-24）"
版本快照: "最新发布 v0.5.8（发布时间：2026-02-09T14:37:31Z）"
---

## 摘要

**1) 一句话总结**
DeepChat 是一款基于 Apache 2.0 协议开源的桌面端 AI Agent 平台，通过统一集成多模型支持、MCP 工具调用与 ACP Agent 运行时，为用户提供安全高效的本地与云端 AI 交互体验。

**2) 核心要点**
*   **项目概况**：基于 TypeScript 开发，采用数据与 UI 分离的 Electron 原生桌面架构（支持 Win/Mac/Linux），截至 2026 年 2 月（v0.5.8 版本）在 GitHub 拥有 5515 Stars 和 635 Forks。
*   **多模型兼容**：支持接入 OpenAI、DeepSeek、Gemini 等主流云端大模型 API，同时内置 Ollama 图形化支持，无需命令行即可管理和运行本地模型。
*   **高级交互体验**：提供多窗口与多标签页并行会话、会话自由分支（Fork）、Artifacts 渲染、多模态内容展示以及基于 CodeMirror 的 Markdown 和代码渲染。
*   **MCP 工具生态**：原生支持 MCP（Model Context Protocol）协议，内置 Node.js 运行环境、工具调用调试窗口，并自带代码执行、网页检索等基础工具。
*   **ACP Agent 集成**：支持将兼容 ACP（Agent Client Protocol）的外部 Agent 作为“模型”直接运行，并提供专属工作区 UI 结构化展示 Agent 计划与终端输出。
*   **搜索增强能力**：内置 BoSearch、Brave Search 等搜索 API，支持模拟浏览 Google、Bing 等主流搜索引擎，允许配置专属搜索助手连接内网或垂直数据源。
*   **隐私与安全机制**：所有数据本地存储，支持网络代理配置与防窥屏（隐藏投影）功能，底层已预留数据加密与代码混淆接口。
*   **高扩展与商业友好**：采用 Apache 2.0 开源协议，模型提供商与 MCP 服务模块高度解耦，支持 DeepLink 一键安装服务，便于企业低成本二次定制。

## 功能与定位

DeepChat 是一款功能丰富的开源桌面端 AI Agent 平台。它将大语言模型（LLM）、工具调用和 Agent 运行时统一在一个应用程序中，支持多模型聊天、MCP（Model Context Protocol）工具调用以及 ACP（Agent Client Protocol）Agent 集成，旨在为用户提供无缝的云端 API 与本地模型使用体验。

## 典型使用场景

- **日常助手**：处理问答、提供建议及辅助写作。
- **开发辅助**：代码生成、代码调试与技术问题排查。
- **学习与探索**：概念解释、知识检索与学习指导。
- **内容创作**：文案撰写与创意启发。

## 核心功能

- **多模型支持（云端与本地）**：
  - 支持接入 OpenAI、Gemini、Anthropic、DeepSeek、Kimi 等主流云端模型 API。
  - 内置 Ollama 支持，无需命令行即可在图形界面中管理、下载和运行本地模型。
- **高级聊天交互**：
  - 采用多窗口与多标签页架构，支持并行多会话。
  - 支持 Artifacts 渲染，优化复杂结果的展示。
  - 提供消息重试、会话自由分支（Fork）功能。
  - 支持多模态内容（图片渲染、Mermaid 图表、文本生图）。
  - 基于 CodeMirror 提供完善的 Markdown 和代码块渲染。
- **搜索增强能力**：
  - 通过 MCP 模式内置 BoSearch、Brave Search 等搜索 API。
  - 支持模拟用户浏览，接入 Google、Bing、Baidu 等主流搜索引擎及公众号搜索。
  - 允许配置专属搜索助手模型，连接内网或垂直领域搜索源。
- **MCP（Model Context Protocol）工具生态**：
  - 完整支持 MCP 的 Resources/Prompts/Tools 核心能力。
  - 内置 Node.js 运行环境，支持类似 npx/node 的服务开箱即用。
  - 提供工具调用调试窗口，自动格式化参数与返回数据。
  - 内置代码执行、网页检索、文件操作等基础实用工具。
- **ACP（Agent Client Protocol）集成**：
  - 允许将兼容 ACP 的 Agent（内置或自定义命令）作为“模型”直接运行。
  - 提供专属的 ACP 工作区 UI，结构化展示 Agent 的计划、工具调用和终端输出。
- **DeepLink 支持**：支持通过外部链接直接发起会话或一键安装 MCP 服务。

## 特色与差异点

- **统一的 Agentic 协议生态**：在单一客户端内同时原生支持 MCP（工具扩展）与 ACP（外部 Agent 接入），将模型能力转化为可执行的工作流。
- **隐私与安全优先**：数据本地存储，支持网络代理配置；提供防窥屏（隐藏投影）功能；底层预留了数据加密接口与代码混淆能力。
- **原生桌面体验**：支持 Windows、macOS 和 Linux。采用数据交互与 UI 行为分离的架构，充分利用 Electron 性能，而非简单的 Web 页面套壳。
- **商业友好**：基于 Apache 2.0 协议开源，模型提供商与 MCP 服务模块高度解耦，便于企业低成本进行二次定制与集成。

## 使用方式概览

- 建议先阅读 README 与官方文档，再按最小示例验证。

## 限制与注意事项

- 使用前请核对许可证、维护状态与兼容性约束。

## 链接

- GitHub 仓库: https://github.com/ThinkInAIXYZ/deepchat
- 官方网站: https://deepchat.thinkinai.xyz/
- 发布版本: https://github.com/ThinkInAIXYZ/deepchat/releases/tag/v0.5.8

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/github]]
- [[00-元语/tool]]
