---
title: "go-size-analyzer：用于分析 Go 二进制体积的可视化工具"
发布日期: 2026-02-24
作者: "Simon Willison"
来源: "Simon Willison Blog"
原文链接: "https://simonwillison.net/2026/Feb/24/go-size-analyzer/#atom-everything"
译注: "未找到官方中文版本，本文基于英文原文翻译整理。"
---

## 摘要

**一句话总结**
`go-size-analyzer` 是一个通过树状图可视化展示 Go 二进制文件中各依赖体积的工具，支持本地运行和基于 WebAssembly 的纯浏览器在线分析。

**关键点**
* 工具名称为 `go-size-analyzer`（由 Simon Willison 介绍）。
* 核心功能是使用树状图（treemap）可视化 Go 可执行文件的依赖体积，帮助开发者快速定位体积来源。
* 支持在本地环境中安装并运行。
* 提供基于 WebAssembly 的在线版本（网址为 `gsa.zxilly.dev`）。
* 在线版本允许用户直接在浏览器中打开并分析编译好的 Go 二进制文件。
* 实测案例显示，该工具成功对一个约 8.1MB 的 macOS 版 Go 程序进行了分析，并输出了清晰的依赖体积分布结果。

## 正文

Simon Willison 介绍了一个名为 `go-size-analyzer` 的 Go 工具。这个工具可以用树状图（treemap）可视化展示 Go 可执行文件中各依赖所占的体积，便于快速定位体积来源。

该工具既可以本地安装运行，也提供了基于 WebAssembly 的在线版本 `gsa.zxilly.dev`。这意味着用户可以直接在浏览器中打开编译好的 Go 二进制文件并进行体积分析。

文中给出的实测示例是：对一个约 8.1MB 的 macOS 版 Go 程序进行分析，并得到清晰的依赖体积分布结果。

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
