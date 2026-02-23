---
title: "elasticsearch：免费开源的分布式 RESTful 搜索引擎"
对象: "GitHub 项目"
项目主页: "https://github.com/elastic/elasticsearch"
Stars快照: "76175"
---

## 摘要

**一句话总结**
Elasticsearch 是一个免费且开源的分布式 RESTful 搜索引擎，近期在 ES|QL 查询引擎、向量检索性能以及 Serverless 架构适配上进行了持续优化，并拥有极高的开源社区活跃度。

**关键要点**
* **核心定位**：免费、开源的分布式 RESTful 搜索引擎。
* **ES|QL 查询引擎**：支持 ES|QL 查询，提供可插拔的外部数据源框架（如支持 NDJSON），并具备查询设置的遥测（Telemetry）功能。
* **向量检索优化**：支持 DirectIO 批量重评分（bulk rescoring），能够分批预取向量并使用随机向量评分器进行批量评分。
* **监控集成**：支持安全的本地 Prometheus `remote_write` 集成，包含基础认证配置。
* **底层与架构优化**：持续优化底层 I/O 性能（如 DirectIO），并积极适配 Serverless 环境。
* **社区数据**：作为头部开源项目，拥有超 7.6 万 Stars、2.5 万 Forks 以及高达 9.4 万次的代码提交记录。
* **官方资源**：项目托管于 GitHub（elastic/elasticsearch），并提供官方产品网站。

## 功能与定位
elasticsearch 是一个免费且开源的分布式 RESTful 搜索引擎。

## 核心功能
根据仓库代码提交记录与描述，其核心功能与近期演进包括：
* **分布式搜索**：提供基于 RESTful 架构的分布式搜索能力。
* **ES|QL 查询引擎**：支持 ES|QL 查询，具备可插拔的外部数据源框架（如支持 NDJSON 数据源），并提供查询设置的遥测（Telemetry）功能。
* **向量检索与批量评分**：支持 DirectIO 批量重评分（DirectIO bulk rescoring），能够分批预取向量并使用随机向量评分器进行批量评分。
* **监控与指标**：支持安全的本地 Prometheus `remote_write` 集成（包含基础认证配置）。

## 特色与差异点
* **极高的社区活跃度**：作为头部开源项目，拥有超过 7.6 万 Stars、2.5 万 Forks 以及高达 9.4 万次的代码提交记录。
* **持续的性能与架构优化**：在底层持续优化 I/O 性能（如 DirectIO）与 Serverless 环境的适配。

## 链接

- 仓库：https://github.com/elastic/elasticsearch

## 关联主题

- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/cli]]
- [[00-元语/desktop-client]]
- [[00-元语/workflow]]
