---
title: refine：React 后台与 B2B 应用开发框架
对象: GitHub 仓库
项目主页: https://refine.dev/
源码仓库: https://github.com/refinedev/refine
许可证: MIT
来源:
  - https://github.com/refinedev/refine
  - https://github.com/refinedev/refine/blob/main/README.md
  - https://refine.dev/docs/getting-started/overview/
  - https://refine.dev/docs/getting-started/quickstart/
  - https://github.com/refinedev/refine/tree/main/examples/app-crm-minimal
---

## 摘要

refine 是一个基于 MIT 协议开源的 React 无头（Headless）元框架，通过解耦核心逻辑与 UI，面向重度 CRUD 的企业级 Web 应用开发，典型场景包括后台系统、内部工具、数据仪表盘和 B2B 应用。

它内置认证、权限、路由、数据请求、状态管理与 i18n 等基础能力，支持 15+ 后端连接器，并提供 SSR、实时能力、审计日志与文档版本化相关能力。项目强调“可定制与工程效率并重”，可与主流 UI 体系和多运行环境组合使用。

## 功能与定位

refine 的定位是 React 应用开发框架，重点解决“数据密集型业务系统”在工程搭建阶段的重复工作。

项目采用 Headless 架构，把业务逻辑与 UI 层分离，既提供统一的开发能力底座，也保留前端团队在设计系统、路由策略和交互实现上的自主性。

## 典型使用场景

- 企业内部工具与运营系统
- 管理后台与权限管理系统
- 面向业务团队的数据仪表盘
- B2B 场景下的中后台 CRUD 应用

## 特色与差异点

- 在“从零开发”与“低代码平台”之间提供折中方案，降低样板代码与维护负担。
- 以 Headless 思路适配多 UI 技术栈，可接入 Ant Design、Material UI、Mantine、Chakra UI 等方案。
- 官方提供以 CRM 为代表的完整示例，覆盖认证、授权、看板、公司信息管理等业务流程，便于团队评估落地路径。

## 使用方式概览

- 推荐通过 CLI 或浏览器 Scaffolder 初始化项目。
- CLI 常用入口：`npm create refine-app@latest`
- 可从官方示例入手（如 `app-crm-minimal`）验证技术栈组合与业务模块拆分方式，再按团队需求扩展。

## 限制与注意事项

- 当前条目基于仓库 README、官方 docs 入门页面与示例文档整理，未覆盖仓库全部子包与每个适配器的实现差异。
- 版本能力应以官方文档与仓库最新说明为准；选型时建议按目标技术栈逐项核对对应集成文档。

## 链接

1. https://github.com/refinedev/refine
2. https://refine.dev/
3. https://refine.dev/docs/getting-started/overview/
4. https://refine.dev/docs/getting-started/quickstart/
5. https://github.com/refinedev/refine/tree/main/examples/app-crm-minimal
6. https://github.com/refinedev/refine/blob/main/LICENSE
