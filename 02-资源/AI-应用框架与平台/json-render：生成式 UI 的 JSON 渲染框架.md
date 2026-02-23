---
title: json-render：生成式 UI 的 JSON 渲染框架
对象: GitHub 仓库
项目主页: https://github.com/vercel-labs/json-render
源码许可: Apache-2.0
来源: README、docs 页面与仓库 tags
---

## 摘要

json-render 是一个生成式 UI 框架，通过预定义组件目录与流式 JSON 补丁，让 AI 在受控范围内生成可渲染界面，并支持 Web、移动端、视频与 PDF 等多种载体。

它的核心价值在于把“模型输出”限制到可验证的 UI 结构：开发者先定义 catalog/registry，模型只在已声明组件与动作内生成；再通过 SpecStream 渐进渲染，在流式响应中持续更新界面。项目同时提供 Generate 与 Chat 两种模式，适合独立 UI 生成和对话内联 UI 场景。

## 功能与定位

json-render 面向“生成式 UI”应用开发，目标是把自然语言请求转换为结构化 UI 规范，并在前端稳定渲染。框架核心由三部分组成：

- Catalog：定义模型可用的组件、属性 schema、动作与描述。
- Registry：把组件类型映射到实际的 React 或 React Native 组件实现。
- Renderer/Stream：接收 JSONL Patch 流并持续编译为可渲染 spec。

从 README 与 docs 可以验证其定位不是通用 Agent 框架，而是聚焦“UI 生成约束 + 渲染落地”的中间层。

## 典型使用场景

- 低代码/无代码 UI 生成器：根据提示词生成表单、卡片、仪表盘等页面结构。
- 对话式产品内联 UI：聊天回复中同时返回文字与可交互组件。
- 多端一致渲染：同一套生成逻辑覆盖 React Web 与 React Native。
- 非网页输出：用 Remotion 生成时间线视频，用 React PDF 生成文档。

## 特色与差异点

- 受控生成：模型仅能使用 catalog 中声明的组件和动作，降低不可控输出。
- 流式规范：采用 JSONL + RFC 6902 JSON Patch 的 SpecStream，支持渐进式渲染。
- 双模式输出：
  - Generate 模式：仅输出 JSONL 补丁。
  - Chat 模式：文本与 JSONL 混合输出，服务端通过 `pipeJsonRender` 分离。
- 组件生态起步快：提供 `@json-render/shadcn`，可直接使用预置组件集合。
- 版本演进清晰：docs/changelog 给出 `v0.6.0`（Chat Mode）、`v0.7.0`（shadcn 组件包）、`v0.8.0`（react-pdf）的阶段性能力扩展。

## 使用方式概览

1. 定义 catalog：声明组件 props、actions 与描述，用于生成系统提示词。
2. 定义 registry：实现各组件渲染逻辑，绑定 `props`、`children` 与事件。
3. 接入模型流：在服务端通过 AI SDK 生成流式输出。
4. 编译并渲染：客户端使用 `useUIStream` 或底层 compiler 把 patch 流转为 spec 并渲染。
5. 根据业务选择模式：独立生成用 Generate，对话交互用 Chat。

## 限制与注意事项

- 组件与动作必须预先声明，未声明类型不会被安全地生成与渲染。
- Chat 模式需要服务端正确处理混合流，否则文本与 spec 可能无法分离。
- 动态可见性、绑定和 patch 路径依赖 JSON Pointer / JSON Patch 语义，团队需要统一数据路径约定。
- 仓库展示了文档站与示例应用结构；生产接入前仍需按自身组件库、状态模型和安全策略做二次约束。

## 链接

- 项目仓库：https://github.com/vercel-labs/json-render
- README：https://raw.githubusercontent.com/vercel-labs/json-render/main/README.md
- 文档目录：https://github.com/vercel-labs/json-render/tree/main/apps/web/app/(main)/docs
- Changelog 页面源码：https://github.com/vercel-labs/json-render/blob/main/apps/web/app/(main)/docs/changelog/page.mdx
