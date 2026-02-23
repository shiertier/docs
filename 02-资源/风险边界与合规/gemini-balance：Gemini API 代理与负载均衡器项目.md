---
title: "gemini-balance：Gemini API 代理与负载均衡器项目"
对象: "GitHub 项目"
项目主页: "https://github.com/snailyp/gemini-balance"
Stars快照: "5825"
---

## 摘要

**1) 一句话总结**
Gemini Balance 是一个基于 Python FastAPI 构建的开源代理与负载均衡器，专为管理多个 Gemini API Key 设计，并提供 OpenAI 格式兼容及多模态扩展功能。

**2) 核心要点**
*   **技术栈与开源协议**：基于 Python 3.9+ 和 FastAPI 构建，获 5825 Stars，采用 CC BY-NC 4.0 协议。
*   **多 Key 管理与容错**：支持多 API Key 自动顺序轮询、正则批量导入去重；具备失败自动重试、超限自动禁用及定时复查功能。
*   **多协议兼容**：支持 Gemini 原生格式（`/gemini/v1beta`），并完全兼容 OpenAI CHAT 与 Embeddings API 格式（含 `/openai/v1` 及 `/hf/v1`）。
*   **可视化与监控**：提供管理后台，配置修改即时生效（免重启），内置需身份验证的 `/keys_status` 页面用于实时监控 Key 状态。
*   **多模态与扩展功能**：支持图文对话、联网搜索、TTS（文本转语音）、URL 上下文理解、代码执行及显示模型思考过程；将 `imagen-3.0` 深度适配为 OpenAI 图像生成 API 格式。
*   **图床与流式控制**：内置 SM.MS、PicGo、Cloudflare ImgBed 及阿里云 OSS 等图床支持；提供流式输出优化及伪流式输出功能。
*   **部署与网络支持**：原生支持 HTTP/SOCKS5 代理，提供 AMD/ARM 架构的 Docker 镜像，支持通过 Docker Compose（结合 MySQL/SQLite）一键部署。

**3) 风险与限制**
*   **商业使用限制**：受 CC BY-NC 4.0 协议约束，严格禁止任何形式的商业转售服务。
*   **端点功能差异**：`/gemini/v1beta` 和 `/openai/v1` 仅作官方格式直接转发；伪流式输出等高级功能必须通过 `/hf/v1` 端点使用。
*   **日志隐私风险**：错误日志默认不记录请求体，但若手动开启 `ERROR_LOG_RECORD_REQUEST_BODY`，可能会在日志中记录敏感信息。

## 功能与定位
Gemini Balance 是一个基于 Python FastAPI 构建的应用程序，专为 Google Gemini API 提供代理和负载均衡服务。它通过简单的配置帮助用户管理多个 Gemini API Key，实现密钥轮询、身份验证、模型过滤和状态监控，同时支持将 Gemini 接口转换为 OpenAI API 格式，便于对接各类 AI 客户端。

## 典型使用场景
*   **突破单 Key 限制**：开发者拥有多个 Gemini API Key，需要通过负载均衡和自动轮询来提高并发能力和请求成功率。
*   **跨生态兼容**：在仅支持 OpenAI 格式的第三方客户端或应用中，无缝接入并使用 Gemini 模型。
*   **多模态应用后端**：需要集成图文对话、图像生成、TTS（文本转语音）或联网搜索功能的 AI 应用。

## 核心功能
*   **多 Key 负载均衡与管理**：支持配置多个 API Key 进行自动顺序轮询；支持通过正则表达式批量添加 Key 并自动去重。
*   **双协议 API 兼容**：
    *   支持 Gemini 原生格式（`/gemini/v1beta`）。
    *   支持 OpenAI CHAT API 格式（`/openai/v1` 及兼容 Hugging Face 的 `/hf/v1`）。
    *   完全兼容 OpenAI 的 Embeddings API 格式。
*   **可视化配置与监控**：提供管理后台，配置修改即时生效（无需重启）；提供需身份验证的 `/keys_status` 页面以实时监控 Key 状态。
*   **容错与自动禁用**：支持 API 请求失败自动重试，当某个 Key 达到最大失败次数后会自动禁用，并支持定时重新检查。
*   **模型列表自动维护**：自动获取并同步 Gemini 和 OpenAI 的最新可用模型列表。

## 特色与差异点
*   **多模态与搜索集成**：通过配置特定模型名称（如 `configured_model-image` 或 `configured_model-search`），可直接调用图文对话、图像修改及联网搜索功能。
*   **图像生成 API 适配**：将 Gemini 的 `imagen-3.0-generate-002` 模型深度适配为 OpenAI 的图像生成 API 格式。
*   **丰富的图床支持**：内置支持 SM.MS、PicGo、Cloudflare ImgBed 及阿里云 OSS 等多种图像上传服务。
*   **高级流式控制**：支持流式输出优化（Stream Optimizer）以及伪流式输出（Fake Stream，需通过 `/hf/v1` 端点使用）。
*   **附加功能扩展**：支持 TTS（文本转语音）、URL 上下文理解、代码执行工具（Tools Code Execution）以及显示模型思考过程（Thinking Process）。
*   **网络与部署友好**：原生支持 HTTP/SOCKS5 代理；提供支持 AMD 和 ARM 架构的 Docker 镜像。

## 使用方式概览
*   **Docker Compose（推荐）**：下载 `docker-compose.yml`，配置 `.env` 文件（设置数据库为 MySQL 或 SQLite），通过 `docker-compose up -d` 一键启动。
*   **Docker 命令行**：拉取官方镜像 `ghcr.io/snailyp/gemini-balance:latest`，挂载本地数据卷并传入环境变量运行。
*   **本地开发**：克隆仓库，通过 `pip` 安装依赖，使用 Uvicorn 启动 FastAPI 服务。

## 限制与注意事项
*   **商业使用限制**：项目采用 CC BY-NC 4.0 协议，**严格禁止任何形式的商业转售服务**。
*   **端点功能差异**：
    *   `/gemini/v1beta` 和 `/openai/v1` 端点为直接转发官方格式，不包含高级功能。
    *   若需使用伪流式输出等高级功能，必须使用 `/hf/v1` 端点。
*   **日志隐私**：错误日志默认不记录请求体，若开启 `ERROR_LOG_RECORD_REQUEST_BODY` 可能会记录敏感信息。

## 链接

- 仓库：https://github.com/snailyp/gemini-balance

## 关联主题

- [[00-元语/risk]]
- [[00-元语/security]]
- [[00-元语/compliance]]
- [[00-元语/github]]
- [[00-元语/tool]]
