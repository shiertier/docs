---
title: "一位 AI 代理编程怀疑者的超细节实测"
发布日期: 2026-02-27
作者: "Simon Willison"
来源: "Simon Willison"
原文链接: "https://simonwillison.net/2026/Feb/27/ai-agent-coding-in-excessive-detail/#atom-everything"
译注: "根据原文整理"
---

## 摘要

**一句话总结**
Simon Willison 转引了 Max Woolf 一篇约 12000 字的编程智能体实测长文，并直言自己这个长期怀疑 AI 代理编程的人也被说服了：从 Claude Opus 4.5 之后，新一代编程模型的实用性相比几个月前已出现数量级跃迁。

**关键要点**
* Simon 将 Max Woolf 的文章视为“2025 年 11 月后编程智能体突然变得真正可用”的又一例证。
* Max Woolf 在文中详细记录了自己如何借助 Claude Code、ChatGPT o3 和公开文档，为一个 Rust 词云工具持续补功能并解决技术细节。
* Simon 明确点名 Opus 4.6 与 Codex 5.3，认为它们已经明显强于几个月前的 coding LLM。
* 受这篇文章启发，Simon 也让 Claude Code 帮自己写了一个 Rust CLI 工具 `toolong`，用于分析自己博客归档里的高频词。

## 正文

这是一篇很短的 link post。Simon Willison 推荐了 Max Woolf 的长文《How I Use Claude Code and Other Coding Agents as a Skeptic》，并明确表示：自己原本一直对 AI 代理编程持怀疑态度，但这篇文章确实让他产生了共鸣。

Simon 给出的判断很直接：这类文章再次说明，编程智能体在 2025 年 11 月前后跨过了一个实用性拐点。按照他的说法，从 Claude Opus 4.5 开始，再到后续的 Opus 4.6、Codex 5.3，这一代模型在真实编程任务上的表现，相比几个月前的 coding LLM 已经强了一个数量级。

被他点名的 Max Woolf 文章并不是泛泛夸赞，而是一篇约 12000 字的细节复盘：从想法、工具选择、查阅 scikit-learn 文档，到让模型在 Rust 项目里持续补功能与修修补补，完整记录了“怀疑者如何在真实任务中被说服”的过程。

Simon 还补充了自己的一个小实验：受此启发，他也让 Claude Code 为自己写了一个 Rust CLI 工具 `toolong`，用来统计和可视化博客归档中的高频词。这让这篇短文的重点不只是“转发别人”，而是作者亲自承认自己已经开始把编程智能体用于实际工具开发。

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/Agent]]
- [[00-元语/Claude Code]]
- [[00-元语/Codex]]
- [[00-元语/软件工程]]
