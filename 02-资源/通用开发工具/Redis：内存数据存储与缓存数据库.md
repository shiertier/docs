---
title: "Redis：内存数据存储与缓存数据库"
发布日期: "2026-02-23"
对象: "GitHub 项目 `redis/redis`"
项目主页: "https://github.com/redis/redis"
开源协议: "Other"
主要语言: "C"
统计快照: "Stars 73132，Forks 24502，Watchers 2491（抓取时间：2026-02-24）"
版本快照: "最新发布 8.6.1（发布时间：2026-02-23T09:41:02Z）"
---

## 摘要

### 1) 一句话总结
Redis 是一款基于内存的高性能缓存与数据结构服务器，提供亚毫秒级延迟，原生支持丰富的数据类型、高级查询及向量引擎，广泛应用于实时数据驱动、生成式 AI 及高并发场景。

### 2) 关键要点
* **极致性能**：基于内存架构，为读写操作提供亚毫秒级的极低延迟。
* **丰富的数据类型**：原生支持字符串、JSON、哈希、列表、集合、有序集合、地理空间索引、位图、时间序列等十余种数据结构。
* **高级查询与向量引擎**：内置查询引擎，支持文档数据库功能、向量搜索（Beta版）、全文搜索及地理空间查询。
* **广泛的应用场景**：涵盖高频数据缓存、分布式会话存储、NoSQL 数据库、消息代理（Pub/sub 与 Stream）、实时分析以及生成式 AI 的向量存储（如 RAG 和语义缓存）。
* **事务与可编程性**：支持将多个命令作为单一隔离操作执行，并允许在服务端执行 Lua 脚本以实现高效的数据控制。
* **高扩展性**：提供 Modules API，允许开发者扩展 Redis 核心功能并快速实现自定义命令。
* **完善的生态系统**：提供 Python、Java、Go 等主流语言客户端，配备 `redis-cli` 命令行工具及集成 AI 助手（Redis Copilot）的可视化管理工具 Redis Insight。
* **多样化部署**：支持全托管云服务（Redis Cloud）、Docker 容器化、多种包管理器安装以及跨平台源码编译。
* **版本更名**：自 v8.0 版本起，Redis 社区版（Redis CE）已正式更名为 Redis Open Source。

### 3) 风险与缺口
* **模块依赖限制**：部分高级概率性数据结构（如 Bloom filter、Cuckoo filter、t-digest、Top-k、Count-min sketch）默认不开启，必须在从源码构建时显式添加 `BUILD_WITH_MODULES=yes` 标志才能使用。

## 功能与定位

Redis 是面向构建实时数据驱动应用的开发者的首选工具。它主要将数据存储在内存中，定位为速度极快且功能丰富的缓存、数据结构服务器，以及文档和向量查询引擎。凭借其高效的数据结构，Redis 能够为读写操作提供极低的延迟（通常在亚毫秒级）。

## 典型使用场景

- **缓存**：支持多种淘汰策略、键过期及哈希字段过期，用于快速访问高频数据以减轻主数据库压力。
- **分布式会话存储**：灵活管理用户会话数据（支持字符串、JSON、哈希等格式）。
- **NoSQL 数据存储**：作为键值、文档和时间序列数据存储库使用。
- **搜索与查询引擎**：为哈希和 JSON 文档建立索引，支持向量搜索、全文搜索、地理空间查询、排名及聚合。
- **事件存储与消息代理**：实现任务队列、优先级队列、事件去重、流处理以及发布/订阅（Pub/sub）通信。
- **生成式 AI 的向量存储**：与 AI 应用（如 LangGraph、mem0）集成，用于短期/长期记忆、大语言模型（LLM）响应的语义缓存以及检索增强生成（RAG）。
- **实时分析**：为个性化推荐、欺诈检测和风险评估提供底层支持。

## 核心功能

- **丰富的基础数据类型**：原生支持字符串（String）、JSON、哈希（Hash）、列表（List）、集合（Set）、有序集合（Sorted set）、地理空间索引（Geospatial）、位图（Bitmap）、位域（Bitfield）和时间序列（Time series）等。
- **高级查询与向量引擎**：内置 Redis 查询引擎，支持将 Redis 用作文档数据库、向量数据库（Beta 版支持向量集合）和二级索引。
- **概率性数据结构**：内置 Hyperloglog 用于基数估算；通过模块化编译还可支持布隆过滤器（Bloom filter）、布谷鸟过滤器（Cuckoo filter）、t-digest、Top-k 和 Count-min sketch 等高级结构。
- **消息与流处理**：提供轻量级的发布/订阅（Pub/sub）功能，以及支持消费者组的追加日志结构（Stream）。
- **事务与可编程性**：支持将多个命令作为单一隔离操作执行（Transaction），并允许在服务端上传和执行 Lua 脚本以实现高效的数据读写控制。

## 特色与差异点

- **极致性能与灵活性**：基于内存架构，不仅提供简单的键值存储，还原生支持广泛的数据结构和高级语义（如计数器、排行榜、限流器）。
- **高扩展性**：提供模块 API（Modules API），允许开发者扩展 Redis 的核心功能并快速实现自定义命令。
- **简单易用**：采用基于文本的简单协议，拥有完善的命令集文档。
- **生态完善**：提供 Python、C#/.NET、Go、JavaScript、Java 等主流语言的官方及社区客户端库；配备命令行工具 `redis-cli` 以及集成自然语言 AI 助手（Redis Copilot）的可视化管理工具 Redis Insight。
- **广泛的行业验证**：在大规模生产环境中经过了充分的实战检验，是众多数据管理场景的事实标准。

## 使用方式概览

- **云托管服务**：使用全托管的 Redis Cloud（集成于 Google Cloud、Azure 和 AWS）。
- **容器化运行**：通过官方 Docker 镜像（Alpine/Debian）快速启动。
- **二进制安装**：支持通过 Snap、Homebrew、RPM、Debian 等包管理器安装。
- **源码编译**：支持在 Ubuntu、Debian、AlmaLinux、macOS 等操作系统上从源码构建。

## 限制与注意事项

- **模块依赖**：部分高级概率性数据结构（如 Bloom filter、Cuckoo filter、t-digest、Top-k、Count-min sketch）并非默认开启，需要在从源码构建时添加 `BUILD_WITH_MODULES=yes` 标志进行编译。
- **版本更名**：自 v8.0 版本起，Redis 社区版（Redis CE）已正式更名为 Redis Open Source。

## 链接

- GitHub 仓库：https://github.com/redis/redis
- 官方网站：http://redis.io
- 官方文档：https://redis.io/docs/
- Redis Cloud：https://cloud.redis.io/
- 官方 Docker 镜像：https://hub.docker.com/_/redis
- Redis Insight GitHub：https://github.com/RedisInsight/RedisInsight

## 关联主题

- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/self-hosting]]
