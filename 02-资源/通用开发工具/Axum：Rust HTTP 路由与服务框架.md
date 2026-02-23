---
title: "axum：Rust HTTP 路由与服务框架"
对象: "GitHub 仓库 tokio-rs/axum"
项目主页: "https://github.com/tokio-rs/axum"
文档地址: "https://docs.rs/axum"
开源协议: "MIT"
主要语言: "Rust"
版本说明: "crates.io 当前稳定版本 0.8.8；main 分支正在推进 0.9（含 breaking changes）"
来源: "axum/README.md、axum/Cargo.toml、examples/README.md、axum/CHANGELOG.md"
---

## 摘要

- axum 是基于 `tokio` 与 `hyper` 的 Rust HTTP 路由与请求处理框架，强调人体工程学与模块化。
- 它的核心差异点是直接复用 `tower::Service` 与 `tower-http` 中间件生态，而不是自建中间件系统。
- 项目以高性能、可组合性和安全实现为重点，适合从轻量 API 到复杂服务治理场景。

## 功能与定位

axum 提供无宏路由 API、声明式请求提取器（extractors）和低样板响应构造能力，用于构建异步 HTTP 服务。项目定位是通用 Rust Web 服务框架，重点在于开发体验与模块化组合，而非封闭式全家桶。

## 典型使用场景

- 构建 REST API、内部服务和面向公网的 HTTP 服务。
- 在同一服务中组合 JSON、表单、Multipart、WebSocket、SSE 等能力。
- 需要把超时、追踪、压缩、鉴权、限流等能力按层叠加到路由链路。
- 需要与 `hyper`、`tonic` 体系共享 `tower` 中间件与服务抽象。

## 特色与差异点

- 深度复用 `tower` 生态：中间件能力可直接复用，降低与其他 Rust 网络组件的集成成本。
- 性能路径清晰：作为 `hyper` 之上的薄层封装，额外开销较小。
- 错误处理模型可预期：请求提取、响应返回与错误转换边界明确。
- 安全边界明确：仓库使用 `#![forbid(unsafe_code)]`，强调安全 Rust 实现。
- 工程成熟度高：仓库包含大量 `examples/`，覆盖从入门到常见生产问题的示例。

## 使用方式概览

1. 使用 `Router::new().route(...)` 定义路径与方法路由。
2. 在 handler 参数中使用提取器解析请求数据，并返回实现 `IntoResponse` 的响应。
3. 通过 `tokio::net::TcpListener` 监听端口，使用 `axum::serve` 启动服务。
4. 按需引入 `tower-http` 等中间件，在路由或全局层叠加横切能力。

## 限制与注意事项

- 当前 `main` 分支面向 0.9 开发，包含破坏性变更；生产项目应优先对齐稳定版本线。
- 当前仓库信息显示 axum 的 MSRV 为 Rust 1.80。
- 本文仅整理可验证公开资料，不替代官方文档与发布说明。

## 链接

- 仓库：https://github.com/tokio-rs/axum
- README：https://github.com/tokio-rs/axum/blob/main/axum/README.md
- Crates.io：https://crates.io/crates/axum
- 文档：https://docs.rs/axum
- Changelog：https://github.com/tokio-rs/axum/blob/main/axum/CHANGELOG.md
- 示例目录：https://github.com/tokio-rs/axum/tree/main/examples

## 关联主题

- [[00-元语/github]]
- [[00-元语/tool]]
- [[00-元语/protocol]]
