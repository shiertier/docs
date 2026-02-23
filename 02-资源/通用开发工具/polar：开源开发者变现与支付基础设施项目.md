---
title: "polar：开源开发者变现与支付基础设施项目"
对象: "GitHub 项目"
项目主页: "https://github.com/polarsource/polar"
Stars快照: "9469"
---

## 摘要

### 1) 一句话总结
Polar 是一款基于 Apache 2.0 协议开源的开发者变现与支付基础设施，其作为“记录商家”（MoR）接管繁琐的税务与账单逻辑，帮助开发者快速销售 SaaS 及各类数字产品。

### 2) 核心要点
* **项目数据**：采用 Apache License 2.0 开源协议，GitHub 拥有 9469 Stars。
* **核心定位 (MoR)**：作为“记录商家”，代为处理跨国销售税和增值税（VAT）等复杂的税务合规问题。
* **典型应用场景**：支持销售 SaaS 服务、文件下载、软件许可证密钥（License Keys），以及 GitHub 仓库和 Discord 频道的访问权限。
* **账单与支付管理**：自动处理计费、收据生成及客户账户管理，并在结账时集成 IPinfo 数据进行地理定位以辅助支付处理。
* **开发者集成**：提供 Public API、Webhook 端点，并官方支持 JavaScript（Node.js/浏览器）与 Python SDK。
* **透明的技术栈**：采用 Monorepo 结构；后端基于 Python（FastAPI、SQLAlchemy/PostgreSQL、Redis），前端基于 TypeScript（NextJS、React 组件库）。
* **收费模式**：无固定月度使用费，采用基于交易的抽成模式。
* **本地开发支持**：提供详细的开发指南，并支持通过 GitHub Codespaces 一键启动标准化开发环境。

### 3) 风险与不足
* **交易成本**：平台会收取基础的交易手续费（当前标明为 4% + 40¢）。
* **潜在附加费**：根据具体情况，可能还会产生其他的附加费用。

## 功能与定位
Polar 是一个面向开发者的开源变现平台与支付基础设施。它作为“记录商家”（Merchant of Record, MoR），帮助开发者在几分钟内实现 SaaS 和数字产品的销售。其核心定位是接管繁琐的支付、账单和税务底层逻辑，使开发者能够专注于产品本身的构建。

## 典型使用场景
* 快速上线并销售 SaaS 服务及各类数字产品。
* 通过数字产品或订阅模式，向用户出售特定资源的访问权限，包括：
  * GitHub 仓库访问权限
  * Discord 支持频道访问权限
  * 文件下载
  * 软件许可证密钥（License Keys）

## 核心功能
* **记录商家 (MoR) 服务**：代为处理跨国销售税和增值税（VAT）等复杂的税务合规问题。
* **全套账单管理**：自动处理计费、收据生成以及客户账户管理等基础业务流程。
* **API 与 Webhook 集成**：提供 Public API 和 Webhook 端点，允许开发者将其无缝集成到现有的文档、网站或后端服务中。
* **官方 SDK 支持**：提供主流语言的 SDK，包括 JavaScript（支持 Node.js 和浏览器环境）与 Python。
* **结账地理定位**：集成 IPinfo 数据，在用户结账时自动进行地理位置定位以辅助税务和支付处理。

## 特色与差异点
* **开源与技术栈透明**：项目采用 Monorepo 结构开源。
  * 后端（Server）：基于 Python，使用 FastAPI、Dramatiq、SQLAlchemy (PostgreSQL) 和 Redis。
  * 前端（Clients）：基于 TypeScript，使用 Turborepo 管理，包含 NextJS 仪表盘和共享 React 组件库（polarkit）。
* **无固定月费模式**：平台不收取固定的月度使用费，而是基于交易进行抽成。

## 使用方式概览
* **服务集成**：开发者可通过查阅官方 API 文档或引入 `polar-js` / `polar-python` SDK，将支付与变现模块接入自有项目。
* **本地开发与贡献**：项目提供了详细的 `DEVELOPMENT.md` 指南，并支持通过 GitHub Codespaces 一键启动标准化的开发环境。

## 限制与注意事项
* **交易手续费**：虽然没有固定月费，但平台会收取基础的交易手续费（当前来源标明为 4% + 40¢），且根据具体情况可能产生其他附加费用。

## 链接

- 仓库：https://github.com/polarsource/polar

## 关联主题

- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/cli]]
- [[00-元语/desktop-client]]
- [[00-元语/workflow]]
