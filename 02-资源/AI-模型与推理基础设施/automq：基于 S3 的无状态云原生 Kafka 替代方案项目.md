---
title: "automq：基于 S3 的无状态云原生 Kafka 替代方案项目"
对象: "GitHub 项目"
项目主页: "https://github.com/AutoMQ/automq"
Stars快照: "3737"
官方网站: "https://www.automq.com"
主要语言: "Java"
开源协议: "Apache-2.0"
---

## 摘要

### 1) 一句话总结
AutoMQ 是一款 100% 兼容 Apache Kafka 的开源无状态消息流系统，通过将底层架构改造为基于 S3 的共享存储模式，实现了秒级弹性扩缩容，并大幅降低了云上存储与跨可用区流量成本。

### 2) 核心要点
* **核心定位**：Fork 自 Apache Kafka（采用 Apache-2.0 协议，Java 编写），将传统的无共享架构改造为基于 S3（或 MinIO）的共享存储（Shared-storage）架构。
* **完全兼容**：100% 兼容 Apache Kafka 的所有特性和协议。
* **极致降本**：以对象存储为主存储，结合机架感知路由（Rack-aware Router）消除跨可用区流量，宣称在云上可将 Kafka 账单成本降低高达 90%。
* **Serverless 弹性**：计算层（Broker）无状态，支持秒级自动扩缩容，彻底消除了传统 Kafka 中繁琐的分区数据迁移和重平衡操作。
* **底层存储架构**：通过 S3 Storage Adapter 重写底层日志模块，结合 S3Stream（包含 WAL、LogCache 和 BlockCache）优化对象存储的读写性能。
* **自动化调度**：内置自动负载均衡组件（Auto Balancer），自动在 Broker 间调度分区和网络流量，无需依赖外部工具。
* **流表统一**：提供 Table Topic 新特性，原生支持与 Apache Iceberg、AWS S3 tables 等数据湖及目录服务无缝集成。
* **内置可观测性**：原生支持导出 Prometheus 和 OpenTelemetry 指标，替代了传统的 JMX 监控。
* **企业级验证**：已被京东、腾讯、Grab、小红书等多家企业用于生产或评估，支持 Linux、Kubernetes 及云端 BYOC 部署。

### 3) 风险与不足
* **开源版延迟限制**：开源版本默认直接运行在 S3 上，会导致数百毫秒级别的延迟；若需个位数毫秒级的极低延迟，必须使用其企业版。
* **生产部署复杂性**：官方明确指出部署生产级别的 AutoMQ 集群具有挑战性，基于 Docker 的快速启动方案仅限功能评估，严禁用于生产环境。
* **高级功能受限**：集群管理控制平面、增强的可用性与可观测性，以及用于现有 Kafka 集群零停机迁移的 Kafka Linking 功能，仅在企业版中提供。

## 功能与定位

AutoMQ 是一个 Fork 自 Apache Kafka 的开源消息流系统，其核心定位是**基于 S3（或兼容 S3 的对象存储，如 MinIO）的无状态 Kafka 替代方案**。它将传统 Kafka 的 Shared-nothing（无共享）架构改造为 Shared-storage（共享存储）架构，旨在解决传统 Kafka 在云上部署时面临的存储成本高昂、跨可用区（Cross-AZ）流量费用昂贵以及扩缩容困难等痛点。

## 典型使用场景

- **云上大规模消息流处理**：适用于需要处理海量数据流且希望大幅降低云基础设施账单（特别是 EBS 存储和跨 AZ 流量费）的企业。
- **高弹性需求场景**：如应对节假日或突发流量洪峰，需要计算节点（Broker）能够秒级自动扩缩容的业务。
- **流表统一与数据分析**：通过其 Table Topic 功能，适用于需要将流数据与数据湖（如 Apache Iceberg）无缝集成的实时分析场景。
- **企业级应用**：已被 Grab、京东、腾讯、吉利汽车、小鹏汽车、得物、知乎、小红书等企业用于生产或评估。

## 核心功能

- **100% Kafka 兼容**：完全兼容 Apache Kafka 的所有特性和协议。
- **基于对象存储的底层架构**：
  - **S3 Storage Adapter**：重写了底层日志模块，将数据直接写入 S3 而非本地磁盘（同时也保留了本地磁盘支持）。
  - **S3Stream**：共享流存储库，结合了针对低 IOPS 优化的预写日志（WAL）和对象存储，并利用 LogCache 和 BlockCache 提升读取性能。
- **自动负载均衡（Auto Balancer）**：内置组件，可自动在 Broker 之间调度分区和网络流量，无需手动重新分配分区或依赖外部工具（如 Cruise Control）。
- **机架感知路由（Rack-aware Router）**：为不同可用区的客户端提供特定的分区元数据，通过对象存储交换数据，从而避免跨可用区流量。
- **Table Topic（新特性）**：结合流和表功能，原生支持 Apache Iceberg 和 AWS S3 tables，并可集成 AWS Glue、HMS 和 Rest catalog 等目录服务。
- **内置可观测性**：原生支持导出 Prometheus 和 OpenTelemetry 指标（支持 Push 和 Pull 模式），替代传统的 JMX 监控。

## 特色与差异点

- **极致的成本优化**：通过将对象存储作为主存储并消除跨可用区流量，宣称在云上可将 Apache Kafka 的账单成本降低高达 90%。
- **真正的 Serverless 体验**：由于计算层（Broker）是无状态的，集群可以在几秒钟内完成扩缩容，无需进行复杂的数据迁移；存储容量则依赖云对象存储实现无限扩展。
- **高可靠性**：依托云对象存储服务，可实现零 RPO（恢复点目标）、秒级 RTO（恢复时间目标）以及极高的数据持久性。
- **免运维架构**：消除了传统 Kafka 中繁琐的分区数据迁移和重平衡操作。

## 使用方式概览

- **本地评估**：官方提供基于 Docker Compose 的单节点或多节点测试集群配置，内置 MinIO 作为 S3 存储，可快速启动用于开发和测试。
- **生产部署**：支持在 Linux（多节点）和 Kubernetes 环境下部署。
- **云端试用**：在 AWS Marketplace 和阿里云 Marketplace 提供自带云环境（BYOC）的部署选项。

## 限制与注意事项

- **开源版延迟限制**：开源版本默认直接运行在 S3 上，这会导致数百毫秒级别的延迟。如果需要个位数毫秒级的极低延迟，需要使用其企业版。
- **生产环境部署复杂性**：官方明确提示，部署生产级别的 AutoMQ 集群具有挑战性，快速启动（Quick Start）中的 Docker 方案仅限功能评估，不可用于生产环境。
- **企业版差异**：企业版额外提供了控制平面（用于集群管理）、增强的可用性与可观测性，以及用于从现有 Kafka 集群零停机迁移的 Kafka Linking 功能。

## 链接

- 仓库：https://github.com/AutoMQ/automq
- 官网：https://www.automq.com

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/github]]
- [[00-元语/stream-processing]]
- [[00-元语/wasm]]
