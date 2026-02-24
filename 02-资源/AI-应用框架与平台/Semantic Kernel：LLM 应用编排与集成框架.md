---
title: Semantic Kernel：LLM 应用编排与集成框架
对象: GitHub 仓库
项目主页: https://github.com/microsoft/semantic-kernel
来源: README、dotnet/README、docs/FAQS、Releases
许可证: MIT
---

## 摘要

Semantic Kernel 是一个与模型无关的企业级 SDK，旨在帮助开发者构建、编排和部署单体 AI Agent 以及复杂的多代理协作系统。

- 作为企业级编排框架，强调可观测性、安全性与稳定 API。
- 支持插件扩展、向量数据库集成与多模态处理能力。
- 支持 Python、.NET、Java，并覆盖本地与云端模型接入。
- 项目按语言与组件维度独立发布，使用时需关注版本匹配。

## 功能与定位

Semantic Kernel 的核心定位是 LLM 应用编排框架，强调“agent 能力 + 工作流编排 + 企业级可运维”。从官方 README 可验证的定位包括：
- 面向单 agent 与多 agent 协同系统。
- 提供模型无关的接入层，可对接多类模型服务。
- 关注可观测性、安全性与稳定 API 的工程化落地。

## 典型使用场景

- 构建具备工具调用、记忆与规划能力的业务助手。
- 通过多 agent 分工协作处理复杂任务。
- 将检索增强、向量数据库与业务流程结合，形成可运行的 LLM 应用链路。
- 在云端模型与本地模型之间按合规或成本要求进行部署选择。

## 特色与差异点

- 模型接入范围广：OpenAI、Azure OpenAI、Hugging Face、NVIDIA 等。
- 插件与工具扩展方式多：原生函数、Prompt 模板、OpenAPI、MCP。
- 数据与检索集成明确：可对接 Azure AI Search、Elasticsearch、Chroma 等。
- 运行形态灵活：兼容 Ollama、LMStudio、ONNX 等本地方案。
- 发布节奏具备组件化特征：Releases 同时存在 `dotnet-*`、`python-*`、`vectordata-dotnet-*` 等版本线。

## 使用方式概览

1. 选择目标语言运行时（Python 3.10+、.NET 10.0+、Java JDK 17+）。
2. 安装对应 SDK 包（如 `pip install semantic-kernel` 或 NuGet 包）。
3. 配置模型服务凭据（如 Azure OpenAI/OpenAI）。
4. 基于官方 Quick Start、Agent 文档和 Samples 组合功能模块。
5. 按目标语言与组件版本线锁定依赖，避免跨线版本错配。

## 限制与注意事项

- Semantic Kernel 本身不提供模型算力，必须接入外部模型服务并配置凭据。
- 由于版本按语言/组件独立推进，升级时需要同时核对 SDK、连接器与依赖兼容性。
- FAQ 中的 nightly build 使用门槛较高，涉及 GitHub 账号、PAT 权限与私有包源配置。

## 链接

1. https://github.com/microsoft/semantic-kernel
2. https://github.com/microsoft/semantic-kernel/blob/main/README.md
3. https://github.com/microsoft/semantic-kernel/releases
4. https://learn.microsoft.com/en-us/semantic-kernel/
5. https://learn.microsoft.com/en-us/semantic-kernel/get-started/quick-start-guide
6. https://learn.microsoft.com/en-us/semantic-kernel/frameworks/agent/
7. https://learn.microsoft.com/en-us/semantic-kernel/get-started/detailed-samples
8. https://learn.microsoft.com/en-us/semantic-kernel/concepts/kernel
9. https://learn.microsoft.com/en-us/dotnet/api/microsoft.semantickernel?view=semantic-kernel-dotnet
10. https://learn.microsoft.com/en-us/python/api/semantic-kernel/semantic_kernel?view=semantic-kernel-python
11. https://pypi.org/project/semantic-kernel/
12. https://www.nuget.org/packages/Microsoft.SemanticKernel/

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/llm]]
- [[00-元语/sdk]]
- [[00-元语/mcp]]
