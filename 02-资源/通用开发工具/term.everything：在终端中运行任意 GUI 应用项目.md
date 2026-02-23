---
title: "term.everything：在终端中运行任意 GUI 应用项目"
对象: "GitHub 项目"
项目主页: "https://github.com/mmulet/term.everything"
Stars快照: "7749"
主要语言: "Go"
开源协议: "AGPL-3.0"
---

## 摘要

**1) 一句话总结**
term.everything 是一个基于 Go 语言开发的开源工具，旨在让用户能够直接在命令行终端中运行并交互任何图形用户界面（GUI）应用程序。

**2) 关键点**
* **项目概况**：采用 AGPL-3.0 开源协议，主要使用 Go 语言编写，目前在 GitHub 上拥有 7749 个 Stars 和 186 个 Forks。
* **跨显示服务器支持**：兼容并在 X11 和 Wayland 宿主系统上运行。
* **终端图形渲染**：通过将帧缓冲区转换为 ANSI 转义序列（`framebuffertoansi`）以及支持 SIXEL 协议，实现终端内的图形界面渲染。
* **交互能力**：内置独立的输入事件处理模块（InputEvents），支持用户在终端内直接与 GUI 应用进行交互。
* **渲染性能优化**：具备按需渲染机制，仅在应用内容发生变化时才进行重绘，以提升运行性能。
* **语言与重构**：项目已全面使用 Go 语言重写，旧版的 TypeScript 代码作为独立分支保留供参考。
* **模块化设计**：其 Wayland 相关实现被设计为独立的库，开发者可直接通过 `go get` 获取使用，无需额外生成依赖。

## 功能与定位
term.everything 是一个开源工具，其核心目标是让用户能够在命令行终端（Terminal）中直接运行和显示任何图形用户界面（GUI）应用程序。

## 核心功能
* **跨显示服务器兼容**：支持在 X11 和 Wayland 宿主系统上运行。
* **终端图形渲染**：通过将帧缓冲区转换为 ANSI 转义序列（`framebuffertoansi`）以及支持 SIXEL 协议（SIXEL override support），实现在终端内渲染图形界面。
* **输入事件处理**：内置独立的输入事件处理模块（InputEvents），支持在终端内与 GUI 应用进行交互。
* **渲染优化**：具备按需渲染机制，仅在应用内容发生变化时才进行重绘（only draw when content changes），以提升性能。

## 特色与差异点
* **语言重构**：项目目前已全面使用 Go 语言重写。早期的 TypeScript 版本仍作为独立分支（`typescript`）保留供参考。
* **模块化设计**：其 Wayland 相关实现被设计为易于独立使用的库，开发者可以直接通过 `go get` 获取该包而无需额外生成依赖。

## 链接

- 仓库：https://github.com/mmulet/term.everything

## 关联主题

- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/cli]]
- [[00-元语/desktop-client]]
- [[00-元语/workflow]]
