---
title: "claude-relay-service：一站式开源 AI API 中转服务"
对象: "GitHub 项目"
项目主页: "https://github.com/Wei-Shaw/claude-relay-service"
Stars快照: "3763"
官方网站: "https://pincc.ai"
主要语言: "JavaScript"
开源协议: "MIT"
---

## 摘要

### 一句话总结
Claude Relay Service (CRS) 是一个开源的 AI API 中转服务，支持统一接入和管理 Claude、OpenAI、Gemini 等多平台账号，提供多账户智能轮换、精细化权限控制以及与官方原生 CLI 工具的无缝集成。

### 核心要点
* **项目概况**：基于 JavaScript 开发（MIT 协议，8200+ Stars），服务部署依赖 Node.js 18+ 和 Redis 6+，提供一键安装脚本与 Docker Compose 方案。
* **多平台与多端点路由**：支持 Claude、OpenAI、Gemini 和 Droid 等服务，通过不同的路由前缀（如 `/claude`, `/gemini`）自动识别并调用对应的账号池。
* **多账户智能管理**：支持添加多个 AI 账户并自动轮换，遇错智能切换，特别适用于团队/好友拼车以分摊高昂的订阅费用。
* **精细化密钥与权限控制**：可为不同用户分配独立 API Key，支持设置速率限制、并发限制、可用模型限制以及特定客户端（如仅限 ClaudeCode）限制。
* **原生工具无缝集成**：通过修改环境变量（如 `ANTHROPIC_BASE_URL`）或配置文件，可直接驱动 Claude Code、Gemini CLI、Codex CLI 等官方命令行工具及第三方客户端。
* **数据透明与隐私保护**：提供 Web 管理面板（默认端口 3000）监控 Token 消耗与换算成本；对话数据直连官方 API，避免第三方公共镜像站的隐私泄露风险。
* **性能优化**：内置连接池与缓存机制以降低延迟，并支持 HTTP/SOCKS5 代理以突破地区访问限制。

### 风险与限制
* **严重安全漏洞**：v1.1.248 及以下版本存在管理员认证绕过漏洞，必须更新至 v1.1.249+，或迁移至新一代项目 CRS 2.0 (sub2api)。
* **合规与封号风险**：使用该项目可能违反 Anthropic 的服务条款（TOS），用户需自行承担账户封禁或服务中断的风险。
* **网络拦截问题**：服务器必须能访问 Anthropic API，部分国内云厂商的海外主机可能会被 Cloudflare 拦截导致无法直连。
* **Nginx 反代配置限制**：若使用 Nginx 反代并接入 Codex CLI，必须在配置中开启 `underscores_in_headers on;`，否则会导致多账号环境下的粘性会话功能失效。
* **Gemini CLI 认证限制**：通过 Assist API 访问仅支持 `Login with Google`；通过 Gemini API 访问仅支持选择 `Use Gemini API Key` 并留空回车。

## 功能与定位

Claude Relay Service (CRS) 是一个开源的自建 API 中转服务，旨在将 Claude、OpenAI、Gemini 和 Droid 等 AI 订阅统一接入。该项目主要用于解决地区访问限制、第三方镜像隐私泄露以及官方订阅成本过高的问题，允许用户通过自建服务实现多账户管理和拼车共享，并无缝对接原生 CLI 工具。

## 典型使用场景

* **团队/好友拼车**：多人共同分摊 Claude Code Max 等高昂的订阅费用。
* **隐私保护**：避免使用第三方公共镜像站，确保对话数据直连官方 API，防止商业机密或隐私泄露。
* **提升稳定性**：替代高峰期容易卡顿或故障的公共镜像服务，获得专属的稳定访问体验。
* **突破地区限制**：在无法直接访问 Claude 官方服务的地区，通过部署在海外的服务器进行中转访问。

## 核心功能

* **多账户管理与智能切换**：支持添加多个 AI 账户并自动轮换，当某个账户出现问题时可智能切换至下一个可用账户。
* **精细化 API Key 管理**：可为不同用户分配独立的 API Key，并支持设置速率限制、并发限制、可用模型限制以及特定客户端限制（如仅允许 ClaudeCode 或 Gemini-CLI 访问）。
* **多端点路由识别**：通过不同的路由前缀（如 `/claude`, `/gemini`, `/openai`）自动识别并调用对应的账号池，支持接入 Cherry Studio 等第三方客户端。
* **数据统计与监控**：提供 Web 管理面板，详细记录每个用户的 Token 消耗量，按官方价格换算成本，并提供性能监控。
* **性能与网络优化**：内置连接池与缓存机制以降低延迟，支持 HTTP/SOCKS5 代理。

## 特色与差异点

* **原生工具无缝集成**：高度兼容官方命令行工具，通过修改环境变量或配置文件即可直接驱动 Claude Code、Gemini CLI、Codex CLI 和 Droid CLI。
* **成本与数据完全透明**：相比于计费不透明的第三方镜像，自建服务可清晰掌握实际 Token 消耗和成本。
* **支持特殊账号池**：除了标准账号，还支持 Antigravity 渠道账号池（适用于 Claude 模型）和 Droid 类型兼容账号池。
* **自动化部署体验**：提供一键安装脚本（自动配置 Node.js 和 Redis）以及 Docker Compose 方案，大幅降低搭建门槛。

## 使用方式概览

1. **服务部署**：推荐使用官方提供的管理脚本一键安装，或使用 Docker Compose 部署。服务依赖 Node.js 18+ 和 Redis 6+。
2. **初始化配置**：通过 Web 面板（默认端口 3000）登录管理员账号，通过 OAuth 授权方式添加 Claude 等 AI 账户。
3. **分配密钥**：在后台创建 API Key，可根据需求配置使用额度和客户端限制。
4. **客户端接入**：在本地终端设置环境变量（如 `ANTHROPIC_BASE_URL` 和 `ANTHROPIC_AUTH_TOKEN`）或修改工具的配置文件，将请求指向自建的 CRS 服务地址，即可开始使用。

## 限制与注意事项

* **严重安全漏洞**：v1.1.248 及以下版本存在严重的管理员认证绕过漏洞，攻击者可未授权访问管理面板。必须更新至 v1.1.249+，或迁移至新一代项目 CRS 2.0 (sub2api)。
* **合规与封号风险**：使用该项目可能违反 Anthropic 的服务条款（TOS），因使用本项目导致的账户封禁或服务中断风险需由用户自行承担。
* **网络环境要求**：服务器必须能够访问 Anthropic API。经测试，部分国内云厂商的海外主机可能会被 Cloudflare 拦截，导致无法直接访问 Claude API。
* **Nginx 反代配置限制**：若通过 Nginx 反向代理 CRS 服务并使用 Codex CLI，必须在 Nginx 配置中开启 `underscores_in_headers on;`，否则会因请求头丢失导致多账号环境下的粘性会话功能失效。
* **Gemini CLI 认证限制**：通过 Gemini Assist API 方式访问时，只能选择 `Login with Google` 进行认证；通过 Gemini API 方式访问时，只能选择 `Use Gemini API Key` 且需留空回车。

## 链接

- 仓库：https://github.com/Wei-Shaw/claude-relay-service
- 官网：https://pincc.ai

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/github]]
- [[00-元语/mcp]]
- [[00-元语/sdk]]
