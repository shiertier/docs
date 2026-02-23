---
title: "Terraform：基础设施即代码管理工具"
对象: "GitHub 仓库"
仓库: "https://github.com/hashicorp/terraform"
官网: "https://developer.hashicorp.com/terraform"
文档: "https://developer.hashicorp.com/terraform/docs"
许可证: "Business Source License 1.1（适用于 Terraform 1.6.0 或更高版本；Change License 为 MPL 2.0）"
来源: "README、LICENSE、docs/README、Releases 页面"
---

## 摘要

- Terraform 是一款基于插件化架构的基础设施即代码（IaC）工具，通过执行计划和资源图实现安全、高效的基础设施构建、变更与版本控制。
- Terraform Core 仅包含 CLI 和主图引擎，具体资源管理通过 Provider 插件实现。
- 该项目适合需要将基础设施配置纳入版本控制、执行前审阅变更并进行团队协作治理的场景。

## 功能与定位

Terraform 的核心定位是把基础设施定义为可版本化的配置，并通过统一流程执行变更。根据仓库 README，Terraform 支持主流服务提供商与自定义内部方案，强调“先计划、后执行”的可预期变更。仓库本身主要包含 Terraform Core，而不是所有 Provider 的实现。

## 典型使用场景

- 团队将云资源、网络与平台组件以 IaC 方式管理，并纳入代码评审与版本控制。
- 在多环境部署中先生成执行计划，再决定是否应用，减少误操作。
- 通过统一配置管理跨团队基础设施交付流程，提升复用性与一致性。

## 核心功能

- 基础设施即代码：用声明式配置描述资源与依赖关系。
- 执行计划：在应用变更前预览将发生的操作。
- 资源图：根据依赖关系并行处理非依赖资源，提升执行效率。
- 插件生态：通过 Terraform Registry 获取 Provider，实现对不同平台的扩展支持。

## 特色与差异点

- Core 与 Provider 插件分离，核心职责清晰，便于生态扩展。
- 将“变更可见性”作为默认能力，执行前能看到计划与依赖顺序。
- 项目文档体系完整，既有面向使用者的官方文档，也有面向贡献者的核心架构文档。

## 使用方式概览

先在仓库 README 和官方文档确认目标平台对应的 Provider 与能力边界，再以最小配置建立基础设施定义并执行计划审阅流程。团队落地时通常需要同步制定状态管理、权限控制、模块复用和版本升级策略，以保证协作可控。

## 限制与注意事项

- 许可证边界：仓库 LICENSE 标注 Terraform 1.6.0 及以上版本采用 BSL 1.1，并定义了与托管/嵌入式竞争性提供相关的限制条款。
- 版本边界：Releases 页面存在预发布版本，实验性能力不等同于稳定版能力，生产采用前应核对目标版本文档。
- 组件边界：本仓库聚焦 Terraform Core，Provider 的具体行为与支持范围需要在对应 Provider 文档中确认。

## 链接

- 仓库：https://github.com/hashicorp/terraform
- 官方文档入口：https://developer.hashicorp.com/terraform
- CLI 文档：https://developer.hashicorp.com/terraform/cli
- Provider 插件与生态：https://registry.terraform.io
- 版本发布页：https://github.com/hashicorp/terraform/releases
- 许可证文本：https://github.com/hashicorp/terraform/blob/main/LICENSE

## 关联主题

- [[00-元语/github]]
- [[00-元语/tool]]
- [[00-元语/workflow]]
- [[00-元语/cli]]
