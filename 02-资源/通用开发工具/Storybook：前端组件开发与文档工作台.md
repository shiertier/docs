---
title: "Storybook：前端组件开发与文档工作台"
对象: "GitHub 仓库 `storybookjs/storybook`"
项目主页: "https://github.com/storybookjs/storybook"
官方网站: "https://storybook.js.org/"
来源: "README、Docs Addon 文档、MIGRATION、CHANGELOG（next 分支）"
开源协议: "MIT"
版本线索: "next 分支 CHANGELOG 顶部版本为 10.2.10"
---

## 摘要

Storybook 是一个支持多框架的前端工作台，面向 UI 组件的隔离开发、测试与文档化交付。它通过 DocsPage、MDX 和 Addons 生态把开发、验证、文档沉淀放入同一流程，适合设计系统与组件库协作。

- 支持 React、Angular、Vue 3、Svelte、Web Components、Preact 等主流前端框架。
- 支持 `npm create storybook@latest` 快速初始化，降低接入门槛。
- 默认 DocsPage 可聚合 Story、组件描述、参数信息与代码示例。
- 10.x 迁移有明确工程边界：ESM 配置、Node.js 版本和 TypeScript `moduleResolution` 要求。

## 功能与定位

Storybook 将组件从业务应用中拆出，在隔离环境中进行开发和调试。它的核心定位是“前端组件开发与文档工作台”，用于统一组件展示、交互验证、文档输出与团队协作评审。

## 典型使用场景

- 设计系统与组件库建设：统一组件入口、状态演示和文档口径。
- 业务团队协作开发：前端、设计、测试围绕同一组件页面对齐预期。
- 文档站沉淀：把示例、用法、参数说明与规范放在同一结构中维护。
- 多框架团队协同：在不同技术栈下复用一致的组件研发流程。

## 核心功能

- 隔离式组件开发：单独运行 stories，减少业务上下文干扰。
- 文档自动化：DocsPage 可自动聚合组件说明、参数与代码片段。
- MDX 混合编排：在同一文档中组合长文本说明与可运行示例。
- Addons 扩展能力：可按需接入 a11y、viewport、actions、measure、outline 等。
- 官方示例体系：通过 docs、showcase 与 `storybook.new` 快速验证接入路径。

## 特色与差异点

- 文档与开发一体化：围绕 stories 直接生成可演示文档。
- 起步成本低且可定制：默认可用，同时支持全局、组件、Story 粒度的配置。
- 框架兼容范围广：同一方法论可跨多个前端栈迁移。
- 版本演进可跟踪：CHANGELOG 与 MIGRATION 提供持续更新与升级边界说明。

## 使用方式概览

1. 在项目中执行 `npm create storybook@latest` 初始化。
2. 按项目框架接入 stories，并在 `.storybook` 配置中启用所需 addons。
3. 使用 DocsPage 作为默认文档页；需要更强编排能力时引入 MDX。
4. 升级主版本前先对照 MIGRATION 校验 Node.js、ESM 与 TypeScript 配置。

## 限制与注意事项

- Storybook 10 对运行环境有硬约束：Node.js 需满足 20.19+ 或 22.12+。
- 10.x 配置体系要求 ESM，历史 CJS 配置需要迁移。
- TypeScript 项目需使用支持 `types` condition 的 `moduleResolution`（如 `bundler`、`node16`、`nodenext`）。
- 使用 `next` 分支文档时，建议在生产升级前再核对稳定版本发布说明。

## 链接

- 仓库：https://github.com/storybookjs/storybook
- 官网：https://storybook.js.org/
- 文档：https://storybook.js.org/docs
- Showcase：https://storybook.js.org/showcase
- 快速创建：https://storybook.new
- README：https://github.com/storybookjs/storybook/blob/next/README.md
- Docs Addon 说明：https://github.com/storybookjs/storybook/blob/next/code/addons/docs/README.md
- 迁移文档：https://github.com/storybookjs/storybook/blob/next/MIGRATION.md
- 更新日志：https://github.com/storybookjs/storybook/blob/next/CHANGELOG.md

## 关联主题

- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/react]]
- [[00-元语/typescript]]
- [[00-元语/workflow]]
