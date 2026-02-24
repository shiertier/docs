---
title: BrowserMCP：浏览器自动化 MCP 服务
对象: GitHub 仓库
项目主页: https://browsermcp.io
仓库: https://github.com/BrowserMCP/mcp
文档: https://docs.browsermcp.io
源码协议: Apache License 2.0
来源: README、package.json、src/index.ts、src/context.ts、src/tools/common.ts、src/tools/snapshot.ts、src/tools/custom.ts
---

## 摘要

BrowserMCP 是一个结合 MCP 服务器与 Chrome 扩展的本地浏览器自动化服务，允许 AI 助手（如 Claude、Cursor、VS Code 等）直接控制用户本地浏览器会话并复用已登录状态。项目提供页面导航、元素交互、ARIA 快照、截图和控制台日志能力，通过 WebSocket 在 MCP 服务器与浏览器扩展之间通信。当前开源仓库依赖其内部 Monorepo 工作区，无法独立构建；此外，关于反爬与验证码规避能力属于官方定位声明，不应视为绝对保证。

## 功能与定位

BrowserMCP/mcp 是 BrowserMCP 体系中的 MCP 服务端核心代码，采用“本地 MCP 服务器 + 浏览器扩展”的协作方式，把 AI 助手发起的自动化请求映射为真实浏览器会话中的操作。

## 典型使用场景

- 让 AI 助手在本地浏览器中执行导航、点击、输入、选择等页面操作。
- 在“已登录”的真实用户会话中完成网页任务，而不是创建独立无状态浏览器实例。
- 在自动化流程中同时获取页面结构快照、截图或控制台日志，辅助诊断与校验。

## 核心功能

- 页面导航：跳转、后退、前进。
- 页面交互：点击、悬停、输入、下拉选择。
- 状态采集：交互后返回 ARIA 快照。
- 诊断能力：返回浏览器截图（`image/png`）与控制台日志文本。
- 基础控制：按键与等待。

## 特色与差异点

- 本地执行：自动化动作在本机完成，避免远程浏览器中转。
- 会话复用：可复用用户当前浏览器状态与登录上下文。
- 集成定位：面向 MCP 生态，便于接入支持 MCP 的 AI 客户端。

## 使用方式概览

该仓库中的 MCP 服务通过标准输入输出通道对外提供能力，并通过内置 WebSocket 与浏览器扩展通信。运行时需要先在浏览器侧建立扩展连接；若未连接标签页，服务会返回“未连接浏览器扩展”的错误并中止相关操作。

## 限制与注意事项

- 仓库可构建性限制：项目维护方在 README 中明确说明，该仓库当前依赖内部 Monorepo 的工具与类型，不能单独完整构建。
- 运行依赖：自动化能力依赖本地浏览器扩展连接状态。
- 边界说明：关于“规避基础 Bot 检测或验证码”的描述仅是官方定位信息，效果受站点策略与环境影响，不应作为保证。

## 链接

- 仓库：https://github.com/BrowserMCP/mcp
- 官网：https://browsermcp.io
- 文档：https://docs.browsermcp.io
- 问题反馈：https://github.com/BrowserMCP/mcp/issues

## 关联主题

- [[00-元语/mcp]]
- [[00-元语/browser-automation]]
- [[00-元语/protocol]]
- [[00-元语/Agent]]
