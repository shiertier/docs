---
title: "为什么我偏爱使用 Claude Code 桌面端与 Rodney 工具"

来源: "https://simonwillison.net/2026/Feb/16/rodney-claude-code/#atom-everything"
发布日期: "2026-02-16"
---

## 摘要

**一句话总结**
本文介绍了作者偏爱使用 Claude Code 原生桌面端与 Rodney 工具的原因，重点强调了其安全的云端容器环境以及 Mac 桌面端便捷的视觉预览功能。

**关键要点**
* 作者主要使用运行在 Anthropic 云端容器中的“网页版 Claude Code”，以降低本地电脑受损的安全风险。
* 作者完全不使用网页端界面，而是通过原生的 Mac 和 iPhone 应用进行访问。
* Mac 桌面端支持视觉预览，允许用户实时查看 Claude 通过 `Read /path/to/image` 工具正在处理的图片。
* 视觉预览功能让用户无需等待代码推送到 GitHub 即可直接查看和验证处理效果。
* 作者结合 Rodney 工具，通过特定提示词（如运行 `uvx rodney --help`）让 Claude 自动测试新页面和菜单并检查屏幕截图。
* Rodney 工具的 `--help` 输出经过专门设计，包含了代码智能体（coding agent）使用该工具所需的全部指导信息。

**风险与不足**
* Claude 的 iPhone 应用目前不支持显示已打开的图片（作者已在 Twitter 上向官方提出该功能请求）。

## 正文

### 安全的云端容器与原生应用

我是“网页版 Claude Code”（Claude Code on the web）的重度用户。这是 Anthropic 推出的一款出色但命名不佳的云端版本。在其中，所有的操作都运行在由他们管理的容器环境中，这大大降低了我个人电脑受损的风险。

我完全不使用它的网页端界面（这也是我不喜欢这个命名的原因），而是完全通过原生的 iPhone 和 Mac 桌面应用来访问它。

### 桌面端的视觉预览优势

Mac 桌面端应用有一个让我特别欣赏的功能：它允许你查看 Claude 正在通过 `Read /path/to/image` 工具“观看”的图片。

这意味着在 Claude 工作时，你可以直接获得它正在处理的内容的视觉预览，而无需等待它将代码推送到 GitHub 后再亲自去测试。

### 结合 Rodney 工具进行测试

为了触发上述的图片预览功能，我使用了以下提示词（Prompt）：

> 运行 "uvx rodney --help"，然后使用 Rodney 手动测试新页面和菜单——查看它的屏幕截图，并检查你是否认为它们看起来没问题。

在设计 Rodney 这个工具时，我特意让它的 `--help` 输出包含了代码智能体（coding agent）使用该工具所需知道的一切信息。

### 移动端的待改进之处

目前，Claude 的 iPhone 应用还无法显示已打开的图片。因此，我刚刚在 Twitter 的一个帖子中向官方提出了这个功能请求。

## 相关文档

- [[01-博客/Anthropic/Claude Code 核心功能与使用概览|Claude Code 核心功能与使用概览]]；关联理由：解说；说明：该文补足了 Claude Code 在 Web、桌面端与其他入口之间的产品形态，能帮助理解本文偏爱“原生客户端 + 云端会话”的使用背景。
- [[01-博客/Simon Willison/Rodney v0.4.0 发布：浏览器自动化 CLI 工具的新特性|Rodney v0.4.0 发布：浏览器自动化 CLI 工具的新特性]]；关联理由：解说；说明：该文具体展开 Rodney 的浏览器自动化、截图与断言能力，是本文把 Rodney 用作页面和菜单测试工具的直接补充。
- [[01-博客/Simon Willison/利用 Claude 会话日志找回丢失的代码|利用 Claude 会话日志找回丢失的代码]]；关联理由：延伸思考；说明：该文把本文“尽量不要让本地环境承担全部风险”的思路延伸到故障恢复场景，展示 Claude Code 工作流中的另一种风险控制方式。

## 关联主题

- [[00-元语/Claude Code]]
- [[00-元语/Agent]]
- [[00-元语/desktop-client]]
- [[00-元语/sandbox]]
- [[00-元语/browser-automation]]
- [[00-元语/cli]]
- [[00-元语/multimodal]]
