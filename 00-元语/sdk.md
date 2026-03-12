---
title: "SDK"
类型: "元语词条"
更新日期: "2026-03-12"
---

## 定义

SDK 指软件开发工具包（Software Development Kit），是围绕某个平台、服务、协议或运行时提供的一组开发材料，用于帮助开发者以更低成本完成接入、调用、调试与发布。

## 核心内涵

- SDK 不只是库文件，还常包含 API 封装、鉴权处理、类型定义、示例代码、调试工具、测试辅助和文档。
- 它的价值在于把底层协议、请求细节、错误处理和版本兼容策略收敛成更稳定的开发接口。
- 在当前 AI 工程语境中，SDK 常用于封装 LLM API、Agent runtime、MCP 协议或云平台能力，让开发者以程序内集成方式调用模型、工具和工作流。

## 实践要点

- 优先关注版本稳定性、向后兼容和弃用策略，避免升级 SDK 时破坏现有集成。
- 要同时检查文档、示例和错误处理是否完整；只有库而缺少清晰文档的 SDK，接入成本通常会被低估。
- 评估 SDK 与底层协议或 API 的差距：封装过薄会增加样板代码，封装过厚则可能掩盖权限、时延和资源消耗边界。
- 在生产环境固定版本并记录变更窗口，必要时直接回落到底层 API，以绕过 SDK 尚未覆盖的新能力。

## 边界与区分

- sdk 与 protocol 不同：protocol 定义交互契约，sdk 把契约封装为具体语言或平台的开发接口。
- sdk 与 tool 不同：tool 是直接被人或 Agent 调用的能力单元，sdk 是把某类能力嵌入应用的开发包。
- sdk 与 cli 不同：cli 是面向终端的操作界面，sdk 是面向程序内集成的调用层；二者可以并存，例如 SDK 复用 CLI runtime。
- sdk 与 Agent 不同：Agent 负责目标分解与决策，sdk 负责把模型、工具或运行时能力暴露给开发者。

## 相关词条

- [[00-元语/tool]]
- [[00-元语/cli]]
- [[00-元语/protocol]]
- [[00-元语/mcp]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/软件工程]]

## 相关文档

- [[02-资源/AI-编程助手与Agent/GitHub Copilot SDK：Copilot agent 工作流多语言集成开发包|GitHub Copilot SDK：Copilot agent 工作流多语言集成开发包]]；关联理由：解说；说明：该文展示 SDK 如何作为多语言集成层复用 CLI runtime、统一鉴权与会话管理。
- [[02-资源/AI-编程助手与Agent/typescript-sdk：The official TypeScript SDK for Model Context Protocol servers and clients|typescript-sdk：The official TypeScript SDK for Model Context Protocol servers and clients]]；关联理由：解说；说明：该文对应 MCP 官方 TypeScript SDK，可直接看到协议如何被封装成服务端与客户端开发接口。
- [[01-博客/Anthropic/Claude 开发平台发布说明：API 与 SDK 更新总览|Claude 开发平台发布说明：API 与 SDK 更新总览]]；关联理由：版本演进；说明：该文记录了 SDK 在语言支持、工具助手与上下文管理能力上的持续演进，体现 SDK 也是平台能力分发层。

## 关联主题

- [[00-元语/AI]]
- [[00-元语/tool]]
- [[00-元语/cli]]
- [[00-元语/软件工程]]
- [[00-元语/protocol]]
- [[00-元语/mcp]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
