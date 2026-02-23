---
title: "gpt4free：多模型聚合与API转换工具"
对象: "GitHub 项目"
项目主页: "https://github.com/xtekky/gpt4free"
Stars快照: "65706"
---

## 摘要

### 一句话总结
GPT4Free (g4f) 是一个高人气的开源项目（超 6.5 万 Stars），旨在聚合多种 AI 模型提供商，为开发者和用户提供统一的本地 Web GUI、兼容 OpenAI 格式的 API 以及多语言客户端集成。

### 关键要点
*   **项目背景**：由 @xtekky 创建、@hlohaus 维护的社区驱动项目，采用 GPL v3 开源协议。
*   **多模型与媒体聚合**：支持聚合 Gemini、MetaAI、PerplexityLabs 等多个大语言模型提供商，同时支持图像、音频和视频的生成与本地持久化保存。
*   **API 兼容性**：提供基于 FastAPI 的 Interference API，可作为代理无缝兼容标准的 OpenAI 调用格式。
*   **多端与多语言支持**：内置响应式本地 Web GUI，提供功能完善的 Python 客户端（支持同步/异步）以及无需后端的浏览器原生 JS 客户端。
*   **MCP 服务器集成**：内置模型上下文协议（MCP）服务器，为 Claude Desktop 等 AI 助手提供 DuckDuckGo 网络搜索、网页抓取和图像生成工具。
*   **部署与安装**：推荐使用 Docker 部署（支持 x86_64/arm64，通过 8080 端口访问 API/GUI，7900 端口用于桌面环境登录）；同时提供 Windows 独立 `.exe` 启动器和 Python 3.10+ (`pip install -U g4f[all]`) 安装方式。
*   **合规与下架政策**：被聚合的网站所有者若希望移除其服务，可向官方邮箱 (takedown@g4f.ai) 发送所有权证明进行下架。

### 风险与不足
*   **环境依赖限制**：部分依赖浏览器自动化的提供商强制要求系统中必须安装 Google Chrome 或 Chromium。
*   **认证配置繁琐**：根据不同提供商的要求，用户可能需要手动提取并提供 API 密钥、Token、浏览器 Cookies 或 HAR 文件。
*   **生产环境安全风险**：官方强调不要存储或共享敏感凭证；若在生产环境中使用，必须自行配置 HTTPS、身份验证和防火墙，并严格限制对凭证及 Cookie/HAR 存储目录的访问权限。

## 功能与定位
GPT4Free 是一个社区驱动的开源项目，旨在聚合多种可访问的 AI 模型提供商和接口。它让开发者和用户能够更灵活地使用现代大语言模型（LLM）和媒体生成模型，提供统一的调用方式、本地图形界面以及兼容主流标准的 API。

## 典型使用场景
*   在本地通过 Web GUI 与多种大语言模型进行交互。
*   作为兼容 OpenAI 格式的 API 代理（Interference API），无缝接入现有的 AI 应用或工作流。
*   在 Python 或 JavaScript 项目中快速集成文本、图像、音频或视频生成功能。
*   为 AI 助手（如 Claude Desktop）提供网络搜索、网页抓取和图像生成的 MCP（模型上下文协议）工具支持。

## 核心功能
*   **多提供商支持**：聚合了多个 LLM 和媒体生成提供商（如 Gemini、MetaAI、PerplexityLabs 等），并支持本地推理后端。
*   **兼容 OpenAI 的 API**：提供基于 FastAPI 的 Interference API，支持标准的 OpenAI 调用格式。
*   **多语言客户端**：提供功能完善的 Python 客户端（支持同步与异步调用）以及无需后端的浏览器原生 JavaScript 客户端。
*   **本地 Web GUI**：内置可选的图形用户界面，支持响应式设计，可在桌面或智能手机浏览器中访问。
*   **MCP 服务器集成**：内置 MCP 服务器，提供 `web_search`（DuckDuckGo 搜索）、`web_scrape`（网页内容提取）和 `image_generation`（图像生成）工具。
*   **媒体生成与持久化**：支持图像、音频和视频的生成，并可将生成的媒体文件、Cookies 及 HAR 文件持久化保存到本地映射目录。

## 使用方式概览
*   **Docker 部署（推荐）**：提供完整版和精简版（Slim）镜像，支持 x86_64 和 arm64 架构。通过映射端口（如 8080）即可访问 GUI 和 API；可选映射 7900 端口用于提供商登录的桌面环境。
*   **Windows 客户端**：提供独立的 `.exe` 启动器，解压运行后即可在本地浏览器访问 GUI。
*   **Python 安装**：要求 Python 3.10+，可通过 `pip install -U g4f[all]` 安装。支持通过 CLI 或 Python 代码启动 GUI、API 或 MCP 服务器。
*   **浏览器 JS**：直接通过官方 CDN 引入 JS 客户端模块，即可在前端直接调用模型。

## 限制与注意事项
*   **环境依赖**：部分依赖浏览器自动化的提供商需要系统中安装 Google Chrome 或 Chromium。
*   **认证要求**：根据不同的提供商要求，用户可能需要提供 API 密钥、Token、浏览器 Cookies 或 HAR 文件。
*   **安全建议**：官方强调不要存储或共享敏感凭证。在生产环境中使用时，应配置 HTTPS、身份验证和防火墙，并严格限制对凭证和 Cookie/HAR 存储目录的访问。
*   **下架政策**：被聚合的网站所有者若希望移除其服务，可向官方发送所有权证明（takedown@g4f.ai）进行下架处理。

## 链接

- 仓库：https://github.com/xtekky/gpt4free

## 关联主题

- [[00-元语/risk]]
- [[00-元语/security]]
- [[00-元语/compliance]]
- [[00-元语/github]]
- [[00-元语/tool]]
