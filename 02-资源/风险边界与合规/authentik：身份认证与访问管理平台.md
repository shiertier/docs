---
title: "authentik：身份认证与访问管理平台"
发布日期: "2026-02-23"
对象: "GitHub 项目 `goauthentik/authentik`"
项目主页: "https://github.com/goauthentik/authentik"
开源协议: "Other"
主要语言: "Python"
统计快照: "Stars 20250，Forks 1482，Watchers 68（抓取时间：2026-02-24）"
版本快照: "最新发布 version/2025.12.4（发布时间：2026-02-12T15:47:41Z）"
---

## 摘要

**1) 一句话总结**
authentik 是一款基于 Python 的开源身份提供商（IdP）与单点登录（SSO）解决方案，支持多种主流协议，能够灵活适应从个人实验室到大型生产集群的自托管身份管理需求。

**2) 关键要点**
*   **技术栈与协议**：主要使用 Python 开发，核心代码采用 MIT 协议开源。
*   **多协议支持**：原生支持 SAML、OAuth2/OIDC、LDAP 和 RADIUS 等主流身份验证与授权协议。
*   **核心功能**：提供统一的单点登录（SSO）入口，并配备支持明暗模式切换的可视化应用门户（Apps）与管理后台（Admin）。
*   **商业替代**：可作为 Okta、Auth0、Entra ID 和 Ping Identity 等商业身份管理方案的自托管替代品。
*   **灵活部署**：支持 Docker Compose（推荐用于小型/测试环境）和 Kubernetes Helm Chart（推荐用于大型生产环境）。
*   **云平台接入**：官方支持通过 AWS CloudFormation 模板或 DigitalOcean 应用市场进行快速/一键部署。
*   **版本支持**：在开源版本之外，提供专门的企业版（Enterprise offering）以满足大规模组织的强健性需求。

**3) 风险/差距**
*   **许可证限制**：项目采用混合许可证，虽然核心代码为 MIT 协议，但部分企业级功能受 authentik EE License（企业版许可证）约束。

## 功能与定位

authentik 是一个开源的身份提供商（Identity Provider, IdP），旨在为现代单点登录（SSO）提供支持。它被定位为“身份验证的粘合剂”，能够灵活适应从小型个人实验室到大型生产集群的自托管需求。

## 典型使用场景

*   **个人与测试环境**：在小型实验室中进行自托管的身份验证管理。
*   **大型生产集群**：为复杂的生产环境提供集中式的身份管理与单点登录服务。
*   **商业 IdP 替代**：在企业组织中，作为 Okta、Auth0、Entra ID 和 Ping Identity 等现有身份管理方案的安全替代品。

## 核心功能

*   **多协议支持**：原生支持 SAML、OAuth2/OIDC、LDAP、RADIUS 等多种主流身份验证与授权协议。
*   **单点登录 (SSO)**：为现代应用程序提供统一的身份验证入口。
*   **可视化管理与门户**：提供应用门户（Apps）和管理后台（Admin），且界面支持明亮（Light）与暗黑（Dark）模式切换。

## 特色与差异点

*   **灵活的部署规模**：既支持轻量级的单机部署，也支持基于 Kubernetes 的大规模集群部署。
*   **多平台快速接入**：除了常规的容器化部署，还官方支持主流云平台（如 AWS、DigitalOcean）的快速或一键部署。
*   **开源与企业级支持并存**：在开源版本的基础上，提供专门的企业版（Enterprise offering）以满足大规模组织的强健性需求。

## 使用方式概览

authentik 提供了多种官方推荐的安装与部署方式以适应不同规模：
*   **Docker Compose**：推荐用于小型环境或测试安装。
*   **Kubernetes (Helm Chart)**：推荐用于大型生产环境，可通过官方 Helm 仓库部署。
*   **AWS CloudFormation**：使用官方提供的模板在 AWS 云环境中部署。
*   **DigitalOcean Marketplace**：通过官方应用市场实现一键快速部署。

## 限制与注意事项

*   项目包含不同的许可证限制：核心代码为 MIT 协议，但部分企业级功能受 authentik EE License（企业版许可证）约束。

## 链接

- GitHub 仓库: https://github.com/goauthentik/authentik
- 官方网站: https://goauthentik.io
- Helm Chart 仓库: https://github.com/goauthentik/helm
- DigitalOcean 市场: https://marketplace.digitalocean.com/apps/authentik

## 关联主题

- [[00-元语/security]]
- [[00-元语/self-hosting]]
- [[00-元语/github]]
- [[00-元语/risk]]
