---
title: "neon：开源 Serverless Postgres 数据库平台"
对象: "GitHub 项目"
项目主页: "https://github.com/neondatabase/neon"
Stars快照: "21004"
---

## 摘要

**一句话总结**
Neon 是一个拥有 21004 个 GitHub Stars 的开源 Serverless PostgreSQL 数据库平台，通过存储与计算分离架构提供高弹性，并支持独特的数据库分支（Branching）功能。

**关键要点**
* **核心架构**：采用存储与计算分离设计，计算节点为无状态的 PostgreSQL 节点，底层数据由专属的 Neon 存储引擎接管。
* **存储引擎组件**：由 Pageserver（提供可扩展的存储后端）和 Safekeepers（提供冗余的 WAL 预写式日志服务并负责持久化）组成。
* **数据库分支（Branching）**：支持基于现有数据库状态创建隔离的时间线，分支上的数据修改完全隔离，不影响生产主库，非常适合开发、测试与实验。
* **云端托管服务**：官方提供包含免费层（Free Tier）的云端服务，兼容 psql、DBeaver 等所有标准 Postgres 客户端。
* **本地编译与运行**：支持在 Linux 和 macOS 环境下编译，提供 `cargo neon` 命令行工具链以管理存储组件、租户和计算节点。
* **测试与调试支持**：内置基于 `cargo-nextest` 的 Rust 单元测试和 Python 集成测试，并支持生成火焰图（Flamegraphs）用于性能分析。

**风险与限制**
* 本地编译时，Neon 的源码路径中严格禁止包含空格。
* 强依赖特定版本的 Rust 工具链（由 `rust-toolchain.toml` 定义），使用较旧的 `rustc` 版本会导致构建失败。
* 编译构建需要 3.15 或更高版本的 `protoc`（protobuf-compiler）。
* 系统与 PostgreSQL 内部结构高度耦合，要求开发者熟悉 LSN、WAL、Timeline 等特定术语，且存储单位（如 MB）的定义遵循 PostgreSQL 习惯（即 1 MB = 1024 * 1024 字节，而非 MiB）。

## 功能与定位
Neon 是一个开源的 Serverless PostgreSQL 数据库平台。其核心设计理念是实现存储与计算的分离，通过在节点集群中重新分配数据来替代传统 PostgreSQL 的存储层。

## 典型使用场景
- 需要 Serverless 架构弹性的云原生 PostgreSQL 数据库应用。
- 数据库开发与测试（利用其独特的数据分支功能，在不影响生产数据的情况下进行实验和迁移测试）。
- 本地小规模实验与数据库内核代码修改测试。

## 核心功能
- **存储与计算分离架构**：计算节点（Compute nodes）是无状态的 PostgreSQL 节点，其底层数据由专门的 Neon 存储引擎提供支持。
- **Neon 存储引擎**：
  - **Pageserver**：为计算节点提供可扩展的存储后端。
  - **Safekeepers**：构成冗余的 WAL（预写式日志）服务。它接收来自计算节点的 WAL 并将其持久化存储，直到日志被 Pageserver 处理并上传至云存储。
- **数据库分支（Branching）**：支持基于现有数据库状态创建新的时间线（Timeline/Branch）。在分支上启动的 Postgres 实例包含原数据库的所有数据，但在分支上的任何修改都完全隔离，不会影响主数据库。

## 使用方式概览
- **云端托管服务**：用户可通过 Neon 官网注册免费层（Free Tier）创建 Serverless Postgres 实例，并使用任何标准的 Postgres 客户端（如 psql、DBeaver）或其提供的在线 SQL 编辑器进行连接和查询。
- **本地编译与运行**：
  - 支持在 Linux 和 macOS 环境下进行本地编译（依赖 Rust 工具链、PostgreSQL 客户端及其他构建工具）。
  - 提供 `cargo neon` 命令行工具链，用于在本地初始化环境、启动存储组件（Pageserver、Safekeeper、Broker）、创建租户、启动计算节点（Endpoint）以及管理数据库分支。
- **测试与调试**：项目内置了 Rust 单元测试（基于 `cargo-nextest`）和 Python 集成测试脚本，并支持生成火焰图（Flamegraphs）用于性能分析。

## 限制与注意事项
- 本地编译时，Neon 的源码路径中不能包含空格。
- 项目依赖特定版本的 Rust 工具链（通过 `rust-toolchain.toml` 定义），较旧的 `rustc` 版本可能因不支持新特性而无法完成构建。
- 构建 Neon 需要 3.15 或更高版本的 `protoc`（protobuf-compiler）。
- 由于 Neon 与 PostgreSQL 内部结构高度耦合，项目中使用了大量特定的数据库术语（如 LSN、WAL、Timeline 等），且在存储单位的拼写上遵循 PostgreSQL 的习惯（如使用 MB 表示 1024 * 1024 字节，而非 MiB）。

## 链接

- 仓库：https://github.com/neondatabase/neon

## 关联主题

- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/cli]]
- [[00-元语/desktop-client]]
- [[00-元语/workflow]]
