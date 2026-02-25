---
title: "TSSLint 3.0 发布，可能是最后一次大更新"
发布日期: 2026-02-24
作者: "InfoQ"
来源: "InfoQ"
原文链接: "https://www.infoq.cn/article/d7aCEhQudlIvP1pPJQPJ?utm_source=rss&utm_medium=article"
---

## 摘要

### 一句话总结
轻量级 TypeScript 语义 lint 工具 TSSLint 发布了被称为“最后一个重大版本”的 3.0 更新，该版本通过移除 esbuild 依赖提升了性能，并显著增强了与旧版 TSLint 及 ESLint 生态的兼容性。

### 核心要点
* **架构与性能**：TSSLint 作为 TypeScript Language Server 插件运行，直接复用现有 TypeChecker 和原生 TS AST，免去 ESTree 转换，实现几乎即时的诊断与自动修复。
* **移除 esbuild 依赖**：改用 Node.js 原生对 `.ts` 文件的导入支持，降低了构建复杂度并提升了启动速度。
* **生态兼容性**：引入 TSL 兼容层统一处理规则，将 `@tsslint/compat-eslint` 拆分为独立包，并新增 `importTSLintRules` 功能以支持直接导入旧版 TSLint 规则。
* **API 与工具更新**：新增 `createIgnorePlugin` API 用于支持指令注释（替代原 `createDisableNextLinePlugin`）；新增 `tsslint-docgen` 工具用于自动生成规则文档。
* **CLI 缓存优化**：CLI 缓存现默认存储于操作系统的临时目录中，避免污染项目目录结构。
* **破坏性变更**：CLI 参数 `--projects` 更名为 `--project`；完全移除 `--threads` 选项（因基准测试显示多线程仅带来 1.5 倍性能提升却消耗 2 倍能耗，团队计划未来重做该功能）。

### 风险与不足
* **运行环境要求**：由于依赖原生 `.ts` 导入支持，运行环境强制要求升级至 Node.js 22.6.0 或更高版本。
* **底层编译器兼容性断层**：TSSLint 与即将推出的 TypeScript 7 原生编译器（typescript-go）不兼容，因为该 Go 版本编译器不支持 Language Service Plugins。

## 正文

由 Johnson Chu 创建的轻量级 TypeScript 语义 lint 工具 TSSLint 日前发布 3.0 版本 。本次更新显著减少了依赖体积，改进了从旧版 lint 工具迁移的路径，并被 Chu 称为该项目的“最后一个重大版本”。

TSSLint 将自身定位为已停止维护的 TSLint 的精神继任者。与 ESLint 这类通用 lint 工具不同，后者通常以独立进程运行，并且往往需要重复初始化类型检查上下文；TSSLint 则直接作为 TypeScript Language Server 插件运行。它通过复用现有的 TypeChecker，并直接基于原生 TypeScript AST（抽象语法树）工作，无需进行 ESTree 转换，从而实现几乎即时的诊断与自动修复能力。这一设计解决了大型项目中的常见痛点——在保存自动修复时，编辑器卡顿往往会拖慢开发效率。

v3 版本最重要的变化之一，是移除了运行时对 esbuild 的依赖。TSSLint 现在利用 Node.js 对 .ts 文件原生导入的支持，从而降低构建复杂度并提升启动速度。不过，这一改动也意味着运行环境需要 Node.js 22.6.0 或更高版本。

本次发布还引入了一个 TSL 兼容层，该兼容层通过 Arnaud Barre 主导的 TSL 项目进行整合 ，用于统一处理 TypeScript lint 规则。同时，@tsslint/compat-eslint 包被重新拆分为独立包，并更新了与现有 ESLint 生态互操作的集成逻辑。对于仍在使用旧版 TSLint 的团队，新加入的 importTSLintRules 功能允许直接将 TSLint 规则导入 TSSLint 配置中，从而简化迁移流程。

新版本还新增 createIgnorePlugin API，用于支持指令注释（directive comments），开发者可以在配置中定义忽略规则模式。

在开发者工具方面，项目新增了 tsslint-docgen，用于自动生成规则文档，同时为 defineRules API 提供了更新后的 JSDoc 文档。CLI 缓存现在默认存储于操作系统临时目录中，避免缓存文件污染项目目录结构。

不过，本次升级也包含若干破坏性变更。CLI 参数 --projects 已更名为 --project；createDisableNextLinePlugin 被重命名为 createIgnorePlugin；--threads 选项则被完全移除。团队表示，根据基准测试结果，由于 Node.js 在内存共享方面的限制，多线程仅带来约 1.5 倍性能提升，却消耗了约 2 倍能耗。因此，团队计划在未来版本中引入更加资源高效的多线程方案。

在 X 平台发布 更新公告 时，Chu 将该版本描述为“更轻、更快”，并特别提到项目已切换至 Node.js 原生 .ts 导入支持。此前，Vue.js 创始人 尤雨溪 曾公开评价 TSSLint 是“在复用现有 TypeScript 语言服务器的前提下运行类型感知 lint 规则的最高效方式”。

在同一条 X 讨论串中，有用户提问：

很有意思，这能在 TypeScript 的 Golang 版本中运行吗？

Johnson Chu 回复称：

目前答案是否定的。社区已经在这一方向上做过尝试，比如 tsgolint、oxlint、rslint 等项目。因此，除非我们能提出明显更优的解决方案，否则 tsslint 不会重复造轮子。

在当前占据主流地位的 TypeScript lint 方案 ESLint + typescript-eslint 之外，TSSLint 采用了另一种实现思路。TSSLint 通过直接运行在语言服务器内部，避免了维护独立类型检查进程所带来的额外开销。近年来出现的 Biome 和 oxlint 等新工具，则通过原生实现显著提升了执行速度，但它们主要聚焦语法层面的 lint 检查，尚未提供与 TSSLint 借助 TypeScript 编译器 API 深度集成所实现的类型感知分析能力。

需要注意的是，TSSLint 与即将推出的 TypeScript 7 原生编译器（typescript-go）并不兼容，因为后者不支持 Language Service Plugins。

TSSLint 项目已开源，并托管在 GitHub 上，截至本文撰写时约获得 600 个 Star。

原文链接：

https://www.infoq.com/news/2026/02/tsslint-3-release-final/

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
