---
title: "registry：社区驱动的 MCP 服务器注册中心"
对象: "GitHub 项目"
项目主页: "https://github.com/modelcontextprotocol/registry"
Stars快照: "3698"
官方网站: "https://github.com/modelcontextprotocol/registry/tree/main/docs"
主要语言: "Go"
开源协议: "NOASSERTION"
---

## 摘要

**一句话总结**
MCP Registry 是一个由多方社区共同维护的 MCP 服务器集中注册中心，类似于“应用商店”，为客户端提供服务器发现功能，并为开发者提供带有严格所有权验证的发布工具。

**关键要点**
* **核心定位**：为 Model Context Protocol (MCP) 客户端提供一个集中的、可供查询的可用服务器目录。
* **发布工具**：提供专用的命令行工具 `mcp-publisher` CLI，供开发者将自定义 MCP 服务器发布到注册中心。
* **所有权验证**：发布时需进行严格的命名空间所有权验证，支持 GitHub OAuth、GitHub OIDC（用于自动化）、DNS 验证和 HTTP 验证。
* **社区驱动**：项目由 Anthropic、PulseMCP、GitHub 和 Stacklok 等不同组织的核心成员协作维护。
* **API 冻结策略**：采用版本冻结机制（如 v0.1），在特定周期内保证 API 稳定且无破坏性更新，以平滑过渡到未来的 v1 GA 版本。
* **技术栈与开发**：主要使用 Go 1.24.x 编写，依赖 Docker 和 `ko`，可通过 `make dev-compose` 快速启动包含 PostgreSQL 的本地开发环境。
* **数据同步**：本地环境启动时，默认从生产环境 API 拉取经过验证的服务器子集作为种子数据，同时支持离线加载本地种子文件。
* **容器化部署**：官方在 GitHub Container Registry 提供预构建的 Docker 镜像，支持运行最新稳定版、主分支最新版或特定历史版本。

**风险与不足**
* **预览版变更风险**：项目目前仍处于预览（Preview）阶段，在正式版（GA）发布之前，仍有可能出现破坏性更改或数据重置的情况。
* **本地数据易失性**：本地开发环境（`dev-compose`）中的 PostgreSQL 数据库使用临时存储，每次重启容器时数据均会被重置清空。

## 功能与定位

MCP Registry 是一个由社区驱动的 Model Context Protocol (MCP) 服务器注册服务。它的核心定位类似于 MCP 服务器的“应用商店”，旨在为 MCP 客户端提供一个集中的、可供查询的 MCP 服务器列表。

## 核心功能

- **服务器发现与分发**：为 MCP 客户端提供可用的服务器目录。
- **服务器发布工具**：提供专用的命令行工具（`mcp-publisher` CLI），供开发者将自己的 MCP 服务器发布到注册中心。
- **严格的所有权验证**：在发布服务器时，系统会验证命名空间的所有权，以确保安全性与合规性。支持的身份验证与所有权证明方式包括：
  - GitHub OAuth（通过 GitHub 账号登录验证）
  - GitHub OIDC（用于 GitHub Actions 自动化发布）
  - DNS 验证（证明域名及子域名所有权）
  - HTTP 验证（证明域名所有权）

## 特色与差异点

- **多方协作维护**：该项目由来自 Anthropic、PulseMCP、GitHub 和 Stacklok 等不同组织的核心成员共同维护，体现了强烈的社区驱动属性。
- **平滑的过渡策略**：项目采用 API 冻结机制（如 v0.1 版本冻结），在特定周期内保证 API 稳定且无破坏性更新，以便集成商能够放心地进行对接，同时利用真实场景的反馈来塑造未来的正式版本（v1 GA）。

## 使用方式概览

- **本地开发环境**：项目主要使用 Go 语言编写。依赖 Docker、Go 1.24.x 和容器构建工具 `ko`。通过提供的 Makefile 命令（如 `make dev-compose`），可以快速启动包含 PostgreSQL 数据库的本地开发环境。
- **种子数据同步**：本地启动时，默认会从生产环境的 API 拉取经过验证的服务器子集作为种子数据，以确保本地环境与生产行为一致且启动迅速；也支持离线加载本地种子文件。
- **Docker 部署**：官方在 GitHub Container Registry 提供了预构建的 Docker 镜像，支持直接运行最新稳定版、主分支最新构建版或特定历史版本的容器。

## 限制与注意事项

- **预览版状态**：目前该注册中心仍处于预览（Preview）阶段。虽然系统稳定性在不断提升且部分 API 已冻结，但在正式版（GA）发布之前，仍有可能出现破坏性更改或数据重置的情况。
- **本地数据易失性**：在本地开发环境（`dev-compose`）中，PostgreSQL 数据库使用的是临时存储，每次重启容器时数据都会被重置，以确保测试环境的干净状态。

## 链接

- 仓库：https://github.com/modelcontextprotocol/registry
- 官网：https://github.com/modelcontextprotocol/registry/tree/main/docs

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/github]]
- [[00-元语/mcp]]
- [[00-元语/sdk]]
