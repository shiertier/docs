---
title: "NLWeb：自然语言驱动网站交互框架"
发布日期: "2026-02-23"
对象: "GitHub 项目 `microsoft/NLWeb`"
项目主页: "https://github.com/microsoft/NLWeb"
开源协议: "MIT License"
主要语言: "Python"
统计快照: "Stars 6146，Forks 691，Watchers 91（抓取时间：2026-02-24）"
---

## 摘要

### 1) 一句话总结
NLWeb 是一个基于 Python 的开源协议与工具集参考实现，旨在通过原生支持 MCP 协议和 Schema.org 词汇表，为网站快速构建可同时服务于人类与 AI 代理的自然语言对话接口。

### 2) 核心要点
* **项目定位**：采用 MIT 协议开源，由微软提供概念验证（PoC）参考实现，致力于成为 MCP（Model Context Protocol）和 A2A 标准的“HTML”基础层。
* **双向服务能力**：原生支持 MCP 协议并提供核心的 `ask` 方法，使同一套自然语言 API 能够同时被人类用户和 AI 代理（如聊天机器人）调用。
* **复用现有语义层**：巧妙利用超过一亿个网站已在使用的 Schema.org 和 RSS 等半结构化格式作为数据基础，并返回 JSON 格式的结构化响应。
* **广泛的生态兼容性**：支持多种主流大语言模型（OpenAI、DeepSeek、Gemini、Anthropic 等）以及多种向量数据库（Qdrant、Milvus、Azure AI Search、Postgres、Elasticsearch 等）。
* **开箱即用的工具链**：内置数据摄取工具（支持将 Schema.org JSONL 和 RSS 导入向量库）、核心查询服务代码、数据库/LLM 连接器以及带示例 UI 的 Web 前端。
* **灵活部署与定制**：支持在本地、Azure 或通过 Docker 轻量化部署；开发者可通过修改提示词、控制流、UI 和记忆功能进行深度定制，并可通过 REST API 进行外部集成。

### 3) 风险与不足
* **功能缺失与待开发**：目前尚未支持 GCP 和 AWS 部署、移动设备运行以及 A2A（Agent-to-Agent）标准（均处于计划中）。
* **工程化基础薄弱**：当前代码库缺失用于自动化测试和部署的 CI/CD 管道，需要开发者自行构建。
* **数据时效性风险**：通过复制内容进行数据摄取可能导致数据过时，生产环境中需直接连接实时数据库以规避此风险。

## 功能与定位

NLWeb 旨在简化为网站构建对话式界面的过程。它是一系列开放协议和相关开源工具的集合，致力于成为“AI Web”的基础层——正如 HTML 彻底改变了文档共享一样，NLWeb 旨在成为 MCP（Model Context Protocol）和 A2A 标准的“HTML”。
它原生支持 MCP，使得同一套自然语言 API 能够同时服务于人类用户和 AI 代理（Agents），帮助网站快速实现对话式端点。

## 典型使用场景

* **网站对话式改造**：为包含结构化列表（如产品、食谱、景点、评论等）的网站轻松添加自然语言对话界面。
* **AI 代理交互（MCP 服务器）**：作为 MCP 服务器运行，允许聊天机器人或 AI 助手通过自然语言向网站提问，并获取结构化的数据响应。
* **企业级生产集成**：在生产环境中，企业可使用自定义 UI，将 NLWeb 直接集成到现有应用中，并连接实时数据库以避免数据过时。

## 核心功能

* **自然语言交互协议**：提供简单的协议与网站进行自然语言交互，并使用广泛采用的 Schema.org 词汇表返回 JSON 格式的响应。
* **MCP/A2A 核心方法支持**：支持核心的 `ask` 方法，允许向网站提出自然语言问题。
* **数据摄取工具**：内置工具支持将 Schema.org JSONL、RSS 等数据摄取到向量数据库中。
* **广泛的生态兼容性**：
  * **操作系统**：Windows、macOS、Linux。
  * **向量数据库**：Qdrant、Snowflake、Milvus、Azure AI Search、Elasticsearch、Postgres、Cloudflare AutoRAG。
  * **大语言模型 (LLM)**：OpenAI、DeepSeek、Gemini、Anthropic、Inception、HuggingFace。
* **开箱即用的组件**：代码库包含处理自然语言查询的核心服务代码、主流 LLM 和向量数据库的连接器，以及包含示例 UI 的 Web 服务器前端。

## 特色与差异点

* **基于现有语义层**：巧妙利用超过一亿个网站已在使用的 Schema.org 和 RSS 等半结构化格式作为 Web 的语义层。
* **轻量且高可扩展**：设计轻量，既能在数据中心集群上扩展运行，也能在普通笔记本电脑上运行。
* **概念验证与社区驱动**：微软提供的 Python 代码主要作为概念验证（Proof-of-Concept）的参考实现，旨在鼓励社区开发更多样化、更创新的实现方式。

## 使用方式概览

* **部署运行**：支持在本地（笔记本电脑）、Azure 云平台或通过 Docker 容器运行。
* **定制化**：开发者可以通过修改提示词（Prompts）、更改控制流（Control Flow）、调整用户界面（UI）以及添加记忆功能（Memory）来定制 NLWeb。
* **接口调用**：提供 REST API 供外部调用与集成，并提供连接性测试脚本以验证配置。

## 限制与注意事项

* **功能开发中**：对 GCP 和 AWS 的部署支持、移动设备运行支持，以及 A2A（Agent-to-Agent）标准支持目前仍在计划中（Coming soon）。
* **CI/CD 缺失**：当前代码库尚未包含自动化测试或部署的 CI/CD 管道，需开发者自行构建或参与社区贡献。
* **数据新鲜度**：官方建议在生产部署时直接连接实时数据库，而不是复制内容，以避免数据同步带来的时效性问题。

## 链接

- https://github.com/microsoft/NLWeb
- https://github.com/nlweb-ai/NLWeb/blob/main/README.md

## 关联主题

- [[00-元语/AI]]
- [[00-元语/protocol]]
- [[00-元语/github]]
- [[00-元语/tool]]
