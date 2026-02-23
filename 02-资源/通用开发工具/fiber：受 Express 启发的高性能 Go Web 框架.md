---
title: "fiber：受 Express 启发的高性能 Go Web 框架"
对象: "GitHub 项目"
项目主页: "https://github.com/gofiber/fiber"
Stars快照: "3732"
官方网站: "https://gofiber.io"
主要语言: "Go"
开源协议: "MIT"
---

## 摘要

**1) 一句话总结**
Fiber 是一个受 Node.js Express 启发、基于 Fasthttp 构建的高性能 Go Web 框架，旨在结合极简易用性与 Go 语言的原生高并发优势。

**2) 关键要点**
*   **底层引擎**：基于 Go 语言中最快的 HTTP 引擎 Fasthttp 构建，采用 MIT 开源协议。
*   **设计理念**：深受 Express 框架启发，提供类似的操作接口，大幅降低 Node.js 开发者的迁移与上手成本。
*   **路由系统**：支持基础路由、动态参数提取、通配符、路由命名以及路由分组。
*   **中间件与生态**：支持 `Next` 机制，内置日志、CORS、速率限制等中间件。
*   **视图与静态资源**：支持便捷的静态文件托管，默认使用 `html/template`，并可通过扩展支持 Pug、Handlebars 等多种模板引擎。
*   **实时通信**：原生支持 WebSocket、Socket.io 以及 Server-Sent Events (SSE)。
*   **极致性能**：通过在请求间复用 `fiber.Ctx` 实现“零内存分配”，大幅降低内存占用并提升效率。
*   **双向兼容**：提供适配器（Adaptor），可与 Go 标准库 `net/http` 无缝共存并实现中间件链的双向转换。
*   **环境要求**：v3 版本需要 Go 1.25 或更高版本环境。

**3) 风险与不足**
*   **上下文引用风险**：由于采用“零内存分配”机制，`fiber.Ctx` 的值在请求结束后会被复用。开发者绝对不能在 handler 外部保留其引用，否则会导致数据错乱。
*   **版本兼容性风险**：框架底层使用了 `unsafe` 特性，可能无法始终与最新版本的 Go 语言保持完美兼容。
*   **兼容层性能损耗**：使用 `net/http` 或 Express 风格的适配器会带来额外的性能开销，且无法使用 `fiber.Ctx` 的全部特性（建议追求最佳性能时使用原生 `fiber.Handler`）。

## 功能与定位

Fiber 是一个基于 Fasthttp（Go 语言中最快的 HTTP 引擎）构建的 Web 框架。它的设计深受 Node.js 社区中流行的 Express 框架启发，秉承极简主义和 UNIX 哲学。Fiber 旨在结合 Express 的易用性与 Go 语言的原生高性能，帮助尤其是从 Node.js 转型而来的开发者快速上手构建 Web 应用和微服务。

## 核心功能

*   **强大的路由系统**：支持基础路由、动态参数提取、通配符、路由命名以及路由分组（Group Chains）。
*   **中间件生态**：支持类似 Express 的 `Next` 机制，内置或提供日志（Logger）、跨域（CORS）、速率限制（Rate Limiter）等常用中间件。
*   **静态资源托管**：可轻松配置并提供静态文件服务。
*   **多模板引擎支持**：默认使用 Go 标准库的 `html/template`，同时通过扩展包支持 Pug、Amber、Handlebars、Mustache 等多种视图引擎。
*   **实时通信**：提供对 WebSocket、Socket.io 以及 Server-Sent Events (SSE) 的支持。
*   **便捷的 API 响应**：内置对 JSON 序列化、自定义 HTTP 状态码及 404 响应的便捷处理方法。

## 特色与差异点

*   **零内存分配 (Zero Allocation)**：为了追求极致性能，Fiber 进行了深度优化。`fiber.Ctx` 返回的值在请求之间会被复用，从而实现极低的内存占用和极高的运行效率。
*   **双向兼容与适配能力**：
    *   **兼容 `net/http`**：可以与 Go 标准库无缝共存，路由可直接接收现有的 `net/http` 处理器。通过适配器中间件（Adaptor），还能在两者之间双向转换中间件链。
    *   **Express 风格接口**：支持操作 `fiber.Req` 和 `fiber.Res` 的 Express 风格回调，极大降低了从 JavaScript 代码库迁移路由和中间件的成本。

## 使用方式概览

1.  **环境准备**：需要 Go `1.25` 或更高版本。
2.  **安装依赖**：在 Go 模块项目中执行 `go get -u github.com/gofiber/fiber/v3`。
3.  **快速启动**：
    *   引入包并使用 `fiber.New()` 初始化应用。
    *   使用 `app.Get("/", handler)` 等方法定义路由。
    *   使用 `app.Listen(":3000")` 启动服务器。

## 限制与注意事项

*   **上下文引用风险**：由于“零内存分配”机制，开发者**必须**只在 handler 内部使用 context (`fiber.Ctx`) 的值，**绝对不能**保留其引用。一旦 handler 返回，context 中的值将被后续请求复用，保留引用会导致数据错乱。
*   **版本兼容性**：Fiber 底层使用了 `unsafe` 特性，因此可能无法始终与最新版本的 Go 保持完美兼容（v3 版本已在 Go 1.25+ 上完成测试）。
*   **性能损耗提示**：虽然 Fiber 提供了对 `net/http` 和 Express 风格处理器的适配支持，但这些兼容层无法使用 `fiber.Ctx` 的全部特性，且会带来额外的性能开销。为了获得最佳性能，建议使用原生的 `fiber.Handler` 回调。

## 链接

- 仓库：https://github.com/gofiber/fiber
- 官网：https://gofiber.io

## 关联主题

- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/cli]]
- [[00-元语/desktop-client]]
- [[00-元语/workflow]]
