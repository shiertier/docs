---
title: "trufflehog：机密泄漏检测工具"
发布日期: "2026-02-23"
对象: "GitHub 项目 `trufflesecurity/trufflehog`"
项目主页: "https://github.com/trufflesecurity/trufflehog"
开源协议: "GNU Affero General Public License v3.0"
主要语言: "Go"
统计快照: "Stars 24654，Forks 2230，Watchers 196（抓取时间：2026-02-24）"
版本快照: "最新发布 v3.93.4（发布时间：2026-02-19T14:17:56Z）"
---

## 摘要

### 1) 一句话总结
TruffleHog 是一款基于 Go 语言开发的开源安全工具，专门用于在代码仓库、云基础设施及第三方协作平台中发现、分类并动态验证泄露的敏感凭证。

### 2) 关键要点
* **开源与技术栈**：采用 AGPL-3.0 开源协议，V3 版本使用 Go 语言完全重写。
* **广泛的数据源支持**：原生支持扫描 Git/GitHub/GitLab 仓库、AWS S3、GCS、Docker 镜像、CI/CD 管道及多种第三方平台（如 Postman、Hugging Face、Jenkins 等）。
* **智能分类**：内置超过 800 种凭证类型的检测器，能够准确识别各类 API 密钥、数据库密码和私钥。
* **动态验证机制**：通过向目标 API 发起真实登录测试来验证凭证是否处于激活状态（分为 `verified`、`unverified`、`unknown`），从而实现极低的误报率。
* **深度上下文分析**：针对最常见的 20 多种泄露凭证，工具会发送额外请求以获取创建者、可访问资源及具体权限等详细信息。
* **深度 Git 挖掘**：提供实验性功能，支持枚举并扫描 GitHub 仓库中的跨 Fork 对象引用以及已删除或隐藏的提交。
* **灵活的集成与输出**：支持通过 `--json` 输出结构化数据，支持通过 `--results=verified` 过滤有效凭证，并允许通过 `trufflehog:ignore` 代码注释忽略特定结果。

### 3) 风险与局限（基于原文）
* **API 速率限制**：在未提供个人访问令牌（`--token`）的情况下扫描 GitHub 组织或仓库时，会受到 GitHub 的速率限制。
* **本地扫描安全风险**：存在恶意 Git 配置风险（CVE-2025-41390），为此 TruffleHog 默认会将本地仓库克隆到临时目录后再进行扫描。
* **隐藏提交扫描耗时**：使用实验性功能枚举并扫描 GitHub 仓库的所有有效及隐藏提交时耗时较长，根据仓库大小可能需要 20 分钟到数小时不等。

## 功能与定位

TruffleHog 是一款强大的开源安全工具，专门用于发现、分类、验证和分析泄露的敏感凭证（Secrets）。在此上下文中，“凭证”指机器用于身份认证的密钥，包括 API 密钥、数据库密码、私有加密密钥等。该工具旨在帮助开发者和安全团队在代码库、云环境及协作工具中挖掘并确认潜在的安全风险。

## 典型使用场景

- **代码仓库审计**：扫描 Git、GitHub、GitLab 仓库（包括历史提交、Issue 和 PR 评论）以查找硬编码的密钥。
- **云基础设施安全**：扫描 AWS S3 存储桶、Google Cloud Storage (GCS) 以及 Docker 镜像中的敏感信息。
- **CI/CD 管道集成**：集成到 CircleCI、TravisCI 或作为 GitHub Actions 和 pre-commit hook 运行，防止新提交的代码中包含有效密钥。
- **第三方平台扫描**：检查 Postman 工作空间、Hugging Face（模型、数据集、空间及讨论）、Jenkins 服务器和 Elasticsearch 集群中的泄露凭证。

## 核心功能

- **凭证发现 (Discovery)**：支持在 Git 仓库、聊天记录、Wiki、日志、API 测试平台、对象存储和文件系统等多种数据源中查找凭证。
- **智能分类 (Classification)**：内置超过 800 种凭证类型的检测器，能够准确识别并分类发现的密钥（如 AWS 密钥、Stripe 密钥、Postgres 密码等）。
- **动态验证 (Validation)**：对发现的凭证进行真实的 API 登录测试，以确认其是否处于激活状态。验证结果分为：
  - `verified`：经 API 测试确认为有效且活跃的凭证。
  - `unverified`：已检测到但未能确认有效（可能已失效、过期或禁用了验证）。
  - `unknown`：尝试验证但因网络或 API 错误等原因失败。
- **深度分析 (Analysis)**：针对最常见的 20 多种泄露凭证类型，TruffleHog 会发送多个请求以获取该凭证的详细上下文信息（如创建者、可访问的资源及具体权限）。

## 特色与差异点

- **极低的误报率**：通过主动向目标 API 发起验证请求，TruffleHog 能够有效剔除无效的测试密钥或占位符，直接定位真正的安全威胁。
- **Driftwood 技术集成**：能够针对数百万 GitHub 用户和数十亿 TLS 证书即时验证私钥的有效性。
- **广泛的数据源原生支持**：V3 版本使用 Go 语言完全重写，原生支持扫描 GitHub、GitLab、Docker、文件系统、S3、GCS、Syslog 等，甚至支持扫描二进制文件和文档。
- **深度 Git 挖掘**：提供实验性功能，支持枚举并扫描 GitHub 仓库中的跨 Fork 对象引用（Cross Fork Object References）以及已删除或隐藏的提交。

## 使用方式概览

- **安装**：支持通过 Homebrew (macOS)、Docker、预编译二进制文件、源码编译或官方安装脚本进行安装。官方对发布工件提供了 Cosign 签名校验以确保安全性。
- **命令行操作**：通过不同的子命令扫描不同数据源（如 `trufflehog git`, `trufflehog github`, `trufflehog docker`, `trufflehog s3` 等）。
- **结果过滤与输出**：可通过 `--results=verified` 参数仅输出已验证的有效凭证；支持通过 `--json` 参数输出结构化数据以便于自动化处理。
- **忽略特定结果**：如果扫描源支持行号，可以在包含凭证的代码行添加 `trufflehog:ignore` 注释，以忽略该特定凭证。

## 限制与注意事项

- **API 速率限制**：在未提供认证令牌的情况下扫描 GitHub 组织或仓库时，会受到 GitHub 的速率限制。建议使用 `--token` 参数传入个人访问令牌。
- **本地 Git 扫描安全机制**：为防范本地扫描中的恶意 Git 配置（CVE-2025-41390），TruffleHog 默认会将本地仓库克隆到临时目录后再进行扫描。用户可通过参数自定义克隆路径或在信任该仓库的前提下跳过此步骤。
- **隐藏提交扫描耗时**：使用实验性功能枚举 GitHub 仓库的所有有效及隐藏提交时，根据仓库大小，可能需要 20 分钟到数小时不等（实际的密钥扫描过程则非常快）。

## 链接

- [TruffleHog GitHub 仓库](https://github.com/trufflesecurity/trufflehog)
- [Truffle Security 官网](https://trufflesecurity.com)
- [V3.93.4 Release](https://github.com/trufflesecurity/trufflehog/releases/tag/v3.93.4)

## 关联主题

- [[00-元语/security]]
- [[00-元语/github]]
- [[00-元语/risk]]
- [[00-元语/cli]]
