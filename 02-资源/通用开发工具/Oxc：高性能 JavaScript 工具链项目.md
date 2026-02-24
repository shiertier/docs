---
title: Oxc：高性能 JavaScript 工具链项目
对象: GitHub 仓库 oxc-project/oxc
项目主页: https://github.com/oxc-project/oxc
官方网站: https://oxc.rs
开源协议: MIT
来源:
  - https://github.com/oxc-project/oxc/blob/main/README.md
  - https://github.com/oxc-project/oxc/blob/main/ARCHITECTURE.md
  - https://github.com/oxc-project/oxc/blob/main/crates/oxc/README.md
  - https://github.com/oxc-project/oxc/blob/main/LICENSE
  - https://github.com/oxc-project/oxc/releases
---

## 摘要

Oxc（The Oxidation Compiler）是一个基于 Rust 构建的高性能、模块化 JavaScript/TypeScript 工具链，作为 VoidZero 的一部分，提供解析、检查、转换和压缩等能力，既可独立使用也可作为底层组件集成。

- 项目强调性能、正确性、开发者体验与模块化组合，支持按需组合工具能力。
- 工具链覆盖 Parser、Linter、Transformer、Minifier、Formatter、Resolver，并提供 CLI、Node.js npm 包与 Rust crates 三类接入方式。
- 架构采用分层设计，文档强调基于 arena allocator 的零拷贝处理路径，以降低热点路径的开销。
- 落地时建议先从单一场景做最小集成，再逐步扩展到完整工具链。

## 功能与定位

Oxc 是一个使用 Rust 构建的 JavaScript/TypeScript 工具链项目，目标是提供高性能、可组合的编译与工程化能力。项目由 `oxc-project/oxc` 开源维护，并作为 VoidZero 统一高性能 JavaScript 工具链的一部分。

项目在定位上强调四点：性能、正确性、开发者体验、模块化组合。它既可作为独立工具使用，也可作为其他构建系统或框架的底层组件。

## 典型使用场景

- 在代码库中执行静态检查与格式化，缩短本地和 CI 的反馈周期。
- 在构建工具、框架或平台中复用解析、转换、压缩等底层能力。
- 在 Rust 或 Node.js 生态中构建自定义代码分析、转换或语言工具。

## 特色与差异点

- 组件化工具链：围绕 Parser、Linter、Transformer、Minifier、Formatter、Resolver 等能力提供独立包和组合能力。
- 分层架构：基础层、核心处理层、应用层职责清晰，便于按需集成。
- 内存与性能设计：文档强调基于 arena allocator 的零拷贝处理路径，用于降低热点路径开销。
- 跨生态接入：同时提供 CLI、npm 包与 Rust crates，适配不同语言栈的工程集成。

## 使用方式概览

- CLI：通过 `oxlint`、`oxfmt` 等工具直接在项目中执行检查与格式化。
- Node.js：通过 `oxc-parser`、`oxc-transform`、`oxc-minify` 等 npm 包集成到 JS/TS 工具流程。
- Rust：通过 `oxc` umbrella crate 或细分 crates 按需引入能力，并可通过 feature flags 组合功能。

## 限制与注意事项

- 具体规则覆盖、兼容细节和 API 稳定性应以仓库文档、官网文档和 release 说明为准。
- 项目提供多组件与多入口，落地时建议先从单一场景做最小集成，再逐步扩展。
- 本文档仅整理可验证的公开信息，不替代官方文档中的完整配置与迁移说明。

## 链接

1. https://github.com/oxc-project/oxc
2. https://oxc.rs
3. https://github.com/oxc-project/oxc/blob/main/README.md
4. https://github.com/oxc-project/oxc/blob/main/ARCHITECTURE.md
5. https://github.com/oxc-project/oxc/blob/main/crates/oxc/README.md
6. https://github.com/oxc-project/oxc/releases

## 关联主题

- [[00-元语/github]]
- [[00-元语/typescript]]
- [[00-元语/cli]]
- [[00-元语/软件工程]]
