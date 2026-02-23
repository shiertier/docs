---
title: "AgentScope：多智能体应用开发框架"
发布日期: "2026-02-23"
对象: "GitHub 项目 `agentscope-ai/agentscope`"
项目主页: "https://github.com/agentscope-ai/agentscope"
开源协议: "Apache License 2.0"
主要语言: "Python"
统计快照: "Stars 16421，Forks 1474，Watchers 93（抓取时间：2026-02-24）"
版本快照: "最新发布 v1.0.16（发布时间：2026-02-15T03:18:20Z）"
---

## 摘要

### 一句话总结
AgentScope 是一个基于 Python 的开源、生产就绪型智能体开发框架，旨在通过灵活的编排、丰富的内置组件和强大的生态，帮助开发者快速构建多智能体协作、人机协同及支持强化学习的复杂应用。

### 核心要点
*   **基础信息**：采用 Apache License 2.0 开源协议，要求 Python 3.10 或更高版本，可通过 `pip` 或 `uv pip` 快速安装。
*   **核心理念**：主张充分利用大语言模型（LLM）自身的推理和工具使用能力，避免通过严格的提示词和死板的编排来限制模型。
*   **多智能体编排**：提供 `MsgHub`（消息中心）和多种 Pipeline，实现高效的消息路由、信息共享和动态参与者管理。
*   **强大的记忆系统**：内置记忆模块支持数据库存储、记忆压缩以及增强型长期记忆（ReMe）。
*   **工具与协议扩展**：支持将 MCP（Model Context Protocol）工具作为本地函数调用，支持 A2A 协议，并集成了 Anthropic Agent Skill。
*   **多模态与人机协同**：内置 TTS 支持实时语音交互；支持人类在环（Human-in-the-loop），允许在运行中实时中断并依赖记忆机制无缝恢复。
*   **智能体强化学习（Agentic RL）**：内置模型微调支持，结合 Trinity-RFT 库，可提升智能体的多步推理、环境导航和工具使用能力。
*   **生产环境就绪**：支持本地运行、云端 Serverless 部署以及带有内置 OTel 支持的 Kubernetes 集群部署。
*   **完善的生态系统**：提供独立的运行时环境 `agentscope-runtime`（支持 Docker/K8s 部署和基于 VNC 的 GUI 沙盒）及丰富的示例库，开发者可在 5 分钟内完成极简启动。

## 功能与定位

AgentScope 是一个生产就绪且易于使用的智能体（Agent）框架，旨在构建可见、可理解且可信任的智能体应用。该框架的核心理念是充分利用大语言模型（LLM）自身的推理和工具使用能力，而不是通过严格的提示词和死板的编排来限制模型，从而更好地适应不断提升的模型能力。

## 典型使用场景

- **多智能体协作与工作流**：构建多智能体对话、辩论、并发任务处理或复杂游戏（如九人狼人杀）。
- **实时语音交互**：开发支持语音输入/输出的智能体，或多智能体实时语音对话系统。
- **人机协同任务**：需要人类在环（Human-in-the-loop）进行实时干预和引导的复杂业务场景。
- **智能体微调与强化学习**：针对特定场景（如数学推理、工具调用、游戏策略）对智能体模型进行强化学习（Agentic RL）和微调。

## 核心功能

- **灵活的多智能体编排**：提供 `MsgHub`（消息中心）和多种 Pipeline（如顺序执行），实现高效的消息路由、信息共享和动态参与者管理。
- **丰富的内置组件**：内置 ReAct 智能体、规划模块、评估模块以及强大的记忆系统（支持数据库存储、记忆压缩和增强型长期记忆 ReMe）。
- **工具与协议集成**：
  - 支持将 MCP（Model Context Protocol）工具作为本地可调用函数进行细粒度控制或封装。
  - 支持 A2A（Agent-to-Agent）协议。
  - 集成 Anthropic Agent Skill。
- **语音与多模态能力**：内置 TTS（文本转语音）支持，并提供实时语音智能体（Realtime Voice Agent）功能。
- **人类在环（Human-in-the-loop）**：支持在智能体运行过程中进行实时中断，并依赖强大的记忆保存机制实现无缝恢复。
- **智能体强化学习（Agentic RL）**：内置模型微调支持，结合 Trinity-RFT 库，可用于提升智能体的多步推理、环境导航和工具使用能力。

## 特色与差异点

- **极简启动**：开发者可在 5 分钟内快速构建包含工具、技能、记忆和人类介入的智能体。
- **生产环境就绪**：不仅支持本地运行，还支持云端 Serverless 部署以及带有内置 OTel（OpenTelemetry）支持的 Kubernetes 集群部署。
- **强大的生态系统**：拥有独立的运行时环境（`agentscope-runtime`，支持 Docker/K8s 部署和基于 VNC 的 GUI 沙盒）以及丰富的示例库（`agentscope-samples`，包含 Alias-Agent、Data-Juicer Agent 等）。

## 使用方式概览

- **环境要求**：需 Python 3.10 或更高版本。
- **安装**：可通过 `pip install agentscope` 或 `uv pip install agentscope` 进行安装。
- **开发模式**：通过 Python 代码实例化模型（如 `DashScopeChatModel`）、记忆模块和工具包（`Toolkit`），将其注入到智能体（如 `ReActAgent`）中，并通过异步编程（`asyncio`）驱动单智能体对话或多智能体工作流。

## 限制与注意事项

- 使用前请核对许可证、维护状态与兼容性约束。

## 链接

- GitHub 仓库: https://github.com/agentscope-ai/agentscope
- 官方文档: https://doc.agentscope.io/
- Discord 社区: https://discord.gg/eYMpfnkG8h

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/workflow]]
- [[00-元语/github]]
