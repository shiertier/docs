---
title: oTTomator Agents：开源 AI Agent 集合与运行平台
来源: GitHub
项目主页: https://github.com/coleam00/ottomator-agents
平台主页: https://studio.ottomator.ai
开源协议: MIT
---

## 摘要

`ottomator-agents` 是 Live Agent Studio 的开源仓库，集中提供多种框架与场景的 AI Agent 示例与模板，面向学习、复用和平台化运行。

- 项目采用 MIT 协议，仓库包含大量独立 agent 子目录与示例模板。
- 提供 n8n 与 Python 两类基础模板，覆盖输入处理、认证、会话记录与标准化响应。
- 包含 MCP 多智能体协作示例，可将任务分派给不同能力的子 agent，并对接第三方服务。
- 与 Live Agent Studio 平台联动，平台侧按 token 计费以覆盖模型与外部 API 成本。
- 文档强调该平台仍处于 Beta 阶段，在高负载时可能出现响应变慢。

## 功能与定位

该项目是 oTTomator 社区围绕 Live Agent Studio 建设的开源 Agent 集合与运行实践仓库。定位是把“可运行的 agent 工作流/代码”和“可复用的开发模板”放在同一处，帮助开发者快速理解并构建 AI Agent。

## 典型使用场景

- 通过现成 agent 示例学习 RAG、研究助理、内容处理、自动化编排等常见模式。
- 基于 n8n 或 Python 模板改造出自定义 agent，并接入平台进行演示或测试。
- 参考多智能体示例，把不同工具能力拆分给专门子 agent，降低单体 agent 复杂度。

## 核心功能

- 提供面向不同主题的 agent 子项目集合，覆盖 n8n、Python、MCP 等技术路线。
- 提供 `~sample-n8n-agent~` 与 `~sample-python-agent~` 作为最小可行模板。
- 提供多智能体协作示例（如 `mcp-agent-army`），展示主 agent 编排与子 agent 分工。
- 支持基于数据库的会话历史管理思路（示例中包含 Supabase/PostgreSQL 方案）。

## 特色与差异点

- 教学导向和工程可复用并行：既可直接运行示例，也可作为自建 agent 的脚手架。
- 平台与开源代码同步：平台中的 agent 方案可在仓库中找到对应实现材料。
- 强调模块化 agent 设计，避免单 agent 绑定过多工具导致提示与上下文过载。

## 使用方式概览

- 从根 README 进入平台与开发者指南，先明确目标场景。
- 选取最接近需求的子目录示例，按其 README 完成环境与依赖配置。
- 需要快速起步时优先使用 `~sample-n8n-agent~` 或 `~sample-python-agent~` 进行改造。
- 涉及多工具协作时可参考 `mcp-agent-army` 的编排方式。

## 限制与注意事项

- Live Agent Studio 在 README 中标注为 Beta 阶段，高峰期可能出现响应变慢。
- 平台 token 消耗与底层模型调用和外部 API 使用有关，具体成本会随 agent 实现差异变化。
- 部分示例依赖第三方服务密钥与外部系统授权，实际部署前需先完成合规与权限评估。

## 链接

- https://github.com/coleam00/ottomator-agents
- https://studio.ottomator.ai
- https://studio.ottomator.ai/guide
- https://studio.ottomator.ai/pricing
- https://thinktank.ottomator.ai
- https://github.com/coleam00/Archon

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/github]]
- [[00-元语/mcp]]
- [[00-元语/workflow]]
