---
title: "mcp"

类型: "主题词条"
更新日期: "2026-03-11"
---

## 定义

mcp（Model Context Protocol）是面向 LLM 与 Agent 生态的开放协议，用于标准化宿主应用、MCP 客户端与 MCP 服务端之间的上下文和工具交换方式。它不规定模型如何推理，而是规定模型如何以一致、可扩展、可审计的方式访问外部资源、提示模板与可执行工具。

## 核心内涵

- 架构分层：MCP 采用宿主应用、客户端、服务端的分层协作方式，由宿主承载模型或 Agent，会话与权限边界由宿主和服务端共同约束。
- 能力抽象：协议把外部能力统一组织为 `Resources`、`Prompts` 与 `Tools`，降低模型接入文件系统、数据库、API 与业务系统时的定制成本。
- 互操作性：同一套 MCP server 能被不同模型产品与运行环境复用，减少“每个模型单独做一套集成”的重复劳动。
- 安全边界：MCP 只是交互协议，不替代鉴权、沙箱、审计和人工确认机制；高权限能力必须在宿主或服务端侧显式收口。

## 实践要点

- 接口标准化：开发 MCP server 时应先定义清晰的能力 Schema 与能力边界，避免把含糊描述直接暴露给模型。
- 权限与安全：把鉴权、最小权限、人工确认与审计日志放在宿主或服务端侧，避免让协议层掩盖真实风险。
- 传输与会话：无论走 `stdio`、HTTP 还是其他传输方式，都要保证错误返回、超时处理与会话状态语义一致。
- 上下文效率：在工具数量很多时避免一次性预加载全部定义，优先采用按需发现、按需加载与结果裁剪。
- 版本兼容：协议演进优先向后兼容，避免客户端与服务端因能力漂移导致调用失败或行为不一致。

## 相关词条

- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/protocol]]
- [[00-元语/sdk]]
- [[00-元语/tool]]
- [[00-元语/prompt]]
- [[00-元语/context-database]]
- [[00-元语/memory]]
- [[00-元语/security]]

## 相关文档

- [[01-博客/Anthropic/使用 MCP 执行代码|使用 MCP 执行代码]]；关联理由：延伸思考；说明：该文讨论在大规模 MCP 部署下如何通过代码执行降低上下文与 token 开销，补充了协议落地时的效率问题。
- [[01-博客/Anthropic/Anthropic 捐赠 MCP 并成立 Agentic AI Foundation|Anthropic 捐赠 MCP 并成立 Agentic AI Foundation]]；关联理由：版本演进；说明：该文记录了 MCP 的治理变化、生态采用情况与规范扩展，是理解协议演进节点的直接材料。
- [[02-资源/学习资源与知识库/mcp-for-beginners：This open-source curriculum introduces the fundamentals of Model Context|mcp-for-beginners：This open-source curriculum introduces the fundamentals of Model Context]]；关联理由：解说；说明：这是一份围绕 MCP 基础概念与跨语言实践的系统化入门材料，可作为词条的延伸阅读。
- [[02-资源/学习资源与知识库/Awesome MCP Servers：MCP 服务目录与生态索引|Awesome MCP Servers：MCP 服务目录与生态索引]]；关联理由：上下游；说明：该清单聚合了大量 MCP server 与周边资源，适合从概念词条继续走向生态选型与落地。
- [[02-资源/AI-应用框架与平台/Playwright MCP：微软浏览器自动化 MCP 服务|Playwright MCP：微软浏览器自动化 MCP 服务]]；关联理由：上下游；说明：这是一种把浏览器自动化能力封装为 MCP server 的具体实现，能直观看到协议如何承接真实工具能力。

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/protocol]]
- [[00-元语/sdk]]
- [[00-元语/tool]]
- [[00-元语/prompt]]
- [[00-元语/context-database]]
- [[00-元语/security]]
- [[00-元语/memory]]
