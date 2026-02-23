---
title: Chatwoot：开源客户沟通与工单支持平台
对象: GitHub 仓库
项目主页: https://github.com/chatwoot/chatwoot
官网: https://www.chatwoot.com/help-center
来源:
  - https://raw.githubusercontent.com/chatwoot/chatwoot/develop/README.md
  - https://github.com/chatwoot/chatwoot
  - https://github.com/chatwoot/chatwoot/releases/latest
  - https://raw.githubusercontent.com/chatwoot/chatwoot/develop/LICENSE
---

## 摘要

Chatwoot 是一款开源、可自托管的全渠道客户沟通与工单支持平台，定位为 Intercom、Zendesk、Salesforce Service Cloud 等商业客服系统的替代方案。它将网站实时聊天、邮件、社交媒体与即时通讯渠道汇聚到统一收件箱，并提供自动化、知识库、报表分析与第三方集成能力，适合希望统一客服流程并保留数据主权的团队。

## 功能与定位

Chatwoot 的核心定位是“统一客户沟通中台 + 支持工单协作”。根据仓库 README，它强调开源与自托管，目标是在多渠道客服场景下，为企业提供可扩展、可控的数据与流程管理能力。

## 典型使用场景

- 在企业官网接入 Live Chat，结合聊前表单收集访客信息并实时响应。
- 接入 WhatsApp、Telegram、Line、Facebook、Instagram、Twitter、SMS 与邮件渠道，统一处理对话。
- 用 Help Center 发布 FAQ 与操作指南，减少重复咨询。
- 用自动化规则完成会话分配、打标、自动回复等标准化流程。
- 通过 Slack 等集成在现有协作工具内处理客户消息。

## 核心功能

- 全渠道收件箱：聚合网站聊天、邮件与多类社交通讯渠道。
- 团队协作：私密备注、@提及、标签、快捷回复、自动分配、团队协同。
- 客户数据管理：联系人资料、分群、备注、自定义属性、Campaigns。
- 集成与扩展：支持 Slack、Dialogflow、Shopify、Google Translate、Linear、Webhooks。
- 运营分析：提供对话、坐席、收件箱、标签、团队、CSAT 等维度报表与导出能力。
- AI 辅助：提供 Captain AI 相关能力用于加速客服响应。

## 特色与差异点

- 开源替代商业客服套件，便于按需自定义与二次开发。
- 支持自托管部署，数据可留存在企业自有基础设施中。
- 将客服会话、知识库、自动化与报表能力放在同一平台内，减少工具切换成本。
- 社区活跃度较高（GitHub 页面在 2026-02-23 抓取快照显示约 27.4k Stars、6.4k Forks）。

## 使用方式概览

- 官方提供 Heroku 一键部署、DigitalOcean Kubernetes 一键部署，以及部署总入口 `https://chatwoot.com/deploy`。
- 部署后可按业务需求配置渠道接入、自动化规则、团队分工、帮助中心与外部系统集成。
- 对于需要稳定版本的场景，可参考 Releases 页面；当前可见 latest 标识为 `v4.11.1`。

## 限制与注意事项

- 授权边界需要区分：仓库主体代码按 MIT Expat 许可发布；若使用 `enterprise/` 目录内容，应同时遵守该目录内独立许可证。
- 第三方渠道与集成功能的可用性，受对应平台账号、API 策略与配额限制。
- 本文档仅做功能与场景归档，不替代官方部署、配置与合规文档。

## 链接

- GitHub 仓库：https://github.com/chatwoot/chatwoot
- 最新版本发布：https://github.com/chatwoot/chatwoot/releases/latest
- README：https://raw.githubusercontent.com/chatwoot/chatwoot/develop/README.md
- 官方帮助中心：https://www.chatwoot.com/help-center
- 部署入口：https://chatwoot.com/deploy
- 许可证：https://raw.githubusercontent.com/chatwoot/chatwoot/develop/LICENSE
