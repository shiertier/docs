---
title: SeaweedFS：分布式对象与文件存储系统
对象: GitHub 仓库
仓库: https://github.com/seaweedfs/seaweedfs
开源协议: Apache License 2.0
最新版本: 4.13
版本信息来源: https://github.com/seaweedfs/seaweedfs/releases.atom
来源:
  - https://github.com/seaweedfs/seaweedfs/blob/master/README.md
  - https://github.com/seaweedfs/seaweedfs/blob/master/docker/README.md
  - https://github.com/seaweedfs/seaweedfs/blob/master/k8s/charts/seaweedfs/README.md
  - https://github.com/seaweedfs/seaweedfs/blob/master/LICENSE
---

## 摘要

SeaweedFS 是一个基于 Apache 2.0 协议开源的、高度可扩展的分布式文件系统，面向海量文件的高效存储与分发，强调 O(1) 访问、对象接口兼容和多部署形态。

- 项目定位是同时满足“存储海量文件”和“快速提供文件访问”，并针对小文件场景做了重点优化。
- 架构上将卷映射集中在 Master，将文件元数据分散到 Volume Server，以降低中心节点并发压力。
- 在接口层同时提供 Blob/Object 能力与 Filer 文件系统层，支持 S3 兼容 API、FUSE 挂载、WebDAV 等访问方式。
- 存储策略支持机架和数据中心感知副本、TTL、自动压缩和压实，以及温数据纠删码与云分层。
- 提供单机快速启动路径（如 `weed mini`）和生产可扩展路径（多 Volume Server、Kubernetes、Helm）。
- Filer 元数据后端可接入多类数据库（如 MySQL、Postgres、Redis、Etcd 等），便于按现有基础设施选型。
- 仓库发布流显示最新版本为 4.13（releases.atom 条目更新时间 2026-02-17T01:18:38Z）。

## 功能与定位

SeaweedFS 是一个分布式对象与文件存储系统，核心目标是面向海量文件提供高吞吐、低延迟的读写能力。项目从 Blob Store 起步，通过将元数据分散到存储节点来提升并发能力，并在上层提供 Filer 以支持目录与文件语义。

## 典型使用场景

- 海量小文件存储与高并发分发。
- 在本地集群与云存储之间做冷热分层，平衡成本和访问性能。
- 作为 Hadoop/Spark/Flink 可访问的存储后端之一。
- 需要跨集群异步复制（单向或双向）的多活或容灾场景。

## 核心功能

- Blob 层支持多级副本策略（机架/数据中心感知）、自动主节点故障转移、TTL、自动压实等。
- Filer 层支持目录结构、POSIX 属性、FUSE 挂载、S3 兼容 API、WebDAV、数据加密。
- 提供云分层与纠删码能力，用于温数据成本优化与可用性提升。
- 提供 Kubernetes CSI Driver、Operator 与 Helm Chart 等工程化部署路径。

## 特色与差异点

- 通过卷级元数据管理和可缓存的卷映射，强调 O(1) 访问路径。
- Filer 采用无状态设计，元数据后端可替换，适配不同基础设施。
- 对比传统分块或更重型分布式存储实现，SeaweedFS 更强调扁平架构与扩容简洁性。
- 扩容路径直接面向 Volume Server，通常不要求每次扩容都进行全局重平衡。

## 使用方式概览

- 开发与测试：使用单二进制快速启动，验证 S3、Filer、WebDAV 等接口。
- 容器环境：使用 Docker Compose 快速拉起示例集群。
- Kubernetes 环境：通过 Helm Chart、CSI Driver 或 Operator 部署，并按场景配置 Filer 后端数据库与 S3 端点。

## 限制与注意事项

- Filer 默认后端（如 leveldb）在副本规模扩大或生产高可用要求下可能受限，官方文档建议评估外部数据库后端。
- Helm 场景中的证书配置依赖 `cert-manager`，文档也提示部分证书相关配置未充分验证。
- 本条目仅整理可验证来源信息，具体参数与兼容矩阵以仓库最新文档为准。

## 链接

1. https://github.com/seaweedfs/seaweedfs
2. https://github.com/seaweedfs/seaweedfs/blob/master/README.md
3. https://github.com/seaweedfs/seaweedfs/blob/master/docker/README.md
4. https://github.com/seaweedfs/seaweedfs/blob/master/k8s/charts/seaweedfs/README.md
5. https://github.com/seaweedfs/seaweedfs/releases
6. https://github.com/seaweedfs/seaweedfs/releases.atom
7. https://github.com/seaweedfs/seaweedfs/blob/master/LICENSE

## 关联主题

- [[00-元语/github]]
- [[00-元语/tool]]
- [[00-元语/workflow]]
- [[00-元语/virtual-file-system]]
