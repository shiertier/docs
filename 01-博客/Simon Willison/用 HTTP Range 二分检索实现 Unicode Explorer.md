---
title: "用 HTTP Range 二分检索实现 Unicode Explorer"
发布日期: 2026-02-27
作者: "Simon Willison"
来源: "Simon Willison"
原文链接: "https://simonwillison.net/2026/Feb/27/unicode-explorer/#atom-everything"
译注: "根据原文整理"
---

## 摘要

Simon Willison 用一次小型原型实验，把 HTTP Range 请求、二分查找与 LLM 辅助开发组合起来，做成了一个可在远程大文件上检索 Unicode 码点信息的 Unicode Explorer。

- 他先从自己长期关注的 HTTP Range 技巧出发，寻找一个天然有序、适合二分检索的大文件场景，最终选中了 Unicode 元数据。
- 具体实现路径是先与 Claude 头脑风暴，再让 Claude 写规格说明，随后交给 Claude Code 在 `simonw/research` 仓库里完成异步研究与编码。
- 实作过程中最关键的工程约束是：Range 请求依赖精确字节偏移，不能和 HTTP 压缩混用；但 Cloudflare 等 CDN 会在返回 `content-range` 时自动跳过压缩。
- 最终部署版本通过浏览器 `fetch()` 对一个经 Cloudflare 前置、支持 CORS 的 76.6MB S3 文件执行区间读取，并把二分检索过程中的步数与字节传输量直接展示给用户。

## 正文

Simon Willison 把这篇文章写成了一次很轻量但很完整的实验记录：他在手机上做了一个 Unicode Explorer 原型，既是对 HTTP Range 请求的实践，也是一次“用 LLM 满足技术好奇心”的示范。

他一直在收集各种 HTTP Range 请求的技巧，这次想亲手做一个真正有用的例子。难点在于，二分查找要求底层数据天然有序，才能通过少量请求不断缩小搜索范围。和 Claude 讨论后，他把目标定为 Unicode 码点信息检索，因为相关元数据规模足够大，而且码点本身就是可排序的。

随后，他先让 Claude 写出一份可执行的规格，再把这份规格交给 Claude Code，作为 `simonw/research` 仓库中的一次异步研究项目来落地实现。最终产物既包含代码，也包含研究报告，说明这篇文章不只是展示一个玩具 demo，也是在展示一种“先提出问题，再让模型和工具链把问题推进到可运行原型”的工作方式。

实现细节里最有意思的一点，是 HTTP Range 请求与压缩之间的冲突。因为二分查找要依赖稳定的字节偏移，任何传输层压缩都会打乱偏移计算，所以他最初在 `fetch()` 中加入了 `Accept-Encoding: 'identity'`。但他后来发现，这一步其实并非必需，因为 Cloudflare 以及其他 CDN 在检测到 `content-range` 头时，本来就会自动关闭压缩。

部署时，他把数据放在一个支持 CORS 的 76.6MB S3 文件上，并由 Cloudflare 作为前置层提供访问。这样浏览器只需要按需请求很小的字节区间，就能在远程大文件里执行二分检索。演示工具支持直接输入字符，例如 `ø`，也支持输入十六进制码点，例如 `1F99C`，并会把每一次区间请求的收敛过程展示出来。作者给出的示例中，输入 `&` 时，工具用了 17 步、传输了 3,864 字节，就定位到了 `U+0026` 以及它所属的字符类别。

这篇文章的价值不在于“Unicode 查询工具”本身，而在于它把几个原本分散的工程点串成了一条很短的实验闭环：先用 LLM 找到问题切口，再用 Claude Code 把想法推进为代码，然后用 HTTP Range 这样的底层能力，把一个看似需要整文件加载的问题压缩成浏览器里可交互的远程检索体验。

## 相关文档

- [[01-博客/Simon Willison/Gwtar：一种高效的单文件静态 HTML 归档格式|Gwtar：一种高效的单文件静态 HTML 归档格式]]；关联理由：延伸思考；说明：两文都把 HTTP Range 请求当作远程大文件的按需读取手段，Gwtar 提供了另一种资源组织与定位方式。
- [[01-博客/Simon Willison/缩短问题与答案的距离：Claude Code 为研究探索带来的新变化|缩短问题与答案的距离：Claude Code 为研究探索带来的新变化]]；关联理由：观点一致；说明：该文抽象总结了 Claude Code 如何缩短研究验证路径，而本文正是这一判断的具体原型案例。

## 关联主题

- [[00-元语/protocol]]
- [[00-元语/retrieval]]
- [[00-元语/Claude Code]]
- [[00-元语/llm]]
