---
title: Cloudflare
类型: 主题词条
更新日期: 2026-03-11
---

## 定义

Cloudflare 是面向互联网应用的全球网络与安全平台，提供 DNS、CDN、反向代理、WAF、DDoS 防护、Zero Trust 接入与边缘开发者平台等能力。它常被用作站点和 API 的统一流量入口，用于同时完成加速、防护与边缘逻辑执行。

## 核心内涵

Cloudflare 不应只被理解为单一 CDN 服务。更准确地说，它是把流量接入、安全策略和边缘执行能力收敛到同一张全球网络里的基础设施层。官方近年的产品表述是 connectivity cloud，但在知识整理语境中，更适合把它理解为将网络入口、安全控制与 serverless 运行时整合在一起的平台能力。

对于开发者语境，Cloudflare 也常指围绕 Workers 与 Durable Objects 构成的边缘应用运行环境：请求可以在边缘节点被鉴权、改写、缓存或直接处理；当业务需要单点一致状态时，再由 Durable Objects 这类有状态组件承接协调逻辑，而不是默认回源。

## 实践要点

- **流量入口统一化**：把 DNS、代理、TLS 终止和缓存控制放到同一入口，减少源站直接暴露面。
- **安全控制前置**：优先在边缘层配置 WAF、DDoS 防护与速率限制，把恶意流量挡在源站之前。
- **边缘逻辑执行**：使用 Workers 处理鉴权、路由改写、A/B 分流或轻量 API，降低回源延迟与源站负载。
- **有状态边缘协同**：只有在确实需要单点一致状态时，才把协调逻辑放入 Durable Objects 一类组件，避免把 Cloudflare 误当作通用数据库。

## 相关词条

- [[00-元语/dns]]
- [[00-元语/security]]
- [[00-元语/serverless]]
- [[00-元语/durable-objects]]

## 相关文档

- [[00-元语/serverless|serverless]]；关联理由：解说；说明：Cloudflare Workers 是边缘 serverless 的代表性实现，能够帮助理解 Cloudflare 在开发者平台层面的定位。
- [[00-元语/durable-objects|durable-objects]]；关联理由：上下游；说明：Durable Objects 是 Cloudflare Workers 体系中的有状态原语，直接体现 Cloudflare 如何补足无状态边缘执行的能力边界。

## 关联主题

- [[00-元语/domain-name]]
- [[00-元语/dns]]
- [[00-元语/security]]
- [[00-元语/rate-limiting]]
- [[00-元语/serverless]]
- [[00-元语/durable-objects]]
