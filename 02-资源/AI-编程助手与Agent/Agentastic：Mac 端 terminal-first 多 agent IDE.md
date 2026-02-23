---
title: "Agentastic：Mac 端 terminal-first 多 agent IDE"

对象: "网站"
发布日期: "2026-02-22"
来源:
  - "https://www.agentastic.dev/"
---

## 摘要

Agentastic 是一款面向 macOS 的 terminal-first 多 agent IDE，支持在隔离的 Git worktree（及页面声明的容器）中并行运行多个 CLI agent，并在合并前完成 diff 审查与代码 review。

## 功能与定位

Agentastic 定位为 Mac 原生多 agent 开发环境。它把 agent 启动、工作树隔离、终端会话、diff 查看和合并动作整合到一个 IDE 流程中。

## 典型使用场景

- 多 feature 并行开发并保持改动隔离。
- 在合并前做可视化 diff 对比与自动审查。
- 使用 hook 在工作树创建时自动注入环境配置。

## 核心功能

- 原生 Swift 构建。
- 并行运行多类 CLI agent。
- 每个 agent 对应独立 Git worktree。
- 内置 diff viewer 与 agentic code review。
- 每个工作树独立终端，支持 Ghostty 或 SwiftTerm。
- 支持 `.agentastic/setup.sh` 等 hooks。

## 特色与差异点

- 强调 terminal-first，同时提供 IDE 级可视化管理。
- 免费、无需注册（按页面 FAQ）。
- 兼顾本地运行与多 agent 协同。

## 使用方式概览

1. 导入 Git 仓库。
2. 创建并行工作树并启动所需 agent。
3. 在内置 diff/merge 流程中审查与合并。

## 限制与注意事项

- 系统要求为 macOS 14+。
- 软件本身免费，但模型/API 费用由用户向各模型供应方承担。
- FAQ 提到项目仍在持续开发演进中，功能边界可能变化。

## 链接

- 官网：https://www.agentastic.dev/

## 相关文档

- [[02-资源/AI-编程助手与Agent/Conductor：Mac 端多 agent 编排与工作树协作工具|Conductor：Mac 端多 agent 编排与工作树协作工具]]；关联理由：观点一致；说明：两者都把多 agent 并行、Git worktree 隔离与改动审查整合为 macOS 本地桌面工作流。
- [[02-资源/AI-编程助手与Agent/Superset：面向 AI agent 的并行工作区与编排工具|Superset：面向 AI agent 的并行工作区与编排工具]]；关联理由：延伸思考；说明：Superset 同样聚焦多 agent 与 worktree 编排，但强调 GUI 协作，可用于对照 Agentastic 的 terminal-first 取舍。
- [[02-资源/AI-编程助手与Agent/1Code：Claude Code 与 Codex 的并行开发 GUI 客户端|1Code：Claude Code 与 Codex 的并行开发 GUI 客户端]]；关联理由：延伸思考；说明：1Code 偏向 GUI 承载并行会话与审查流程，可与 Agentastic 的 terminal-first 设计形成对照。
- [[02-资源/通用开发工具/Ghostty：GPU 加速终端模拟器|Ghostty：GPU 加速终端模拟器]]；关联理由：引用；说明：本文核心功能中明确提到可在独立工作树终端中使用 Ghostty。

## 关联主题

- [[00-元语/AI]]
- [[00-元语/tool]]
- [[00-元语/Agent]]
- [[00-元语/ide]]
- [[00-元语/terminal]]
- [[00-元语/git-worktree]]
- [[00-元语/cli]]
- [[00-元语/code-review]]
- [[00-元语/desktop-client]]
- [[00-元语/workflow]]
