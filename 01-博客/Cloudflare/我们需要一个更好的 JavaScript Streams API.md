---
title: "我们需要一个更好的 JavaScript Streams API"
发布日期: 2026-02-27
作者: "Cloudflare"
来源: "Cloudflare"
原文链接: "https://blog.cloudflare.com/a-better-web-streams-api/"
译注: "根据原文整理"
---

## 摘要

**一句话总结**
Cloudflare 认为 WHATWG Web Streams 生于 `async iteration` 普及之前，导致消费、转换、分叉与反压表达都偏离现代 JavaScript 习惯；他们给出以 `AsyncIterable` 为中心的替代思路，并展示在 Workers 中可获得 2 倍到 120 倍的性能提升。

**关键要点**
* 设计根因：Web Streams 标准定稿早于 `for await...of` 成为 JavaScript 处理异步序列的主流写法，现有 `reader` / `controller` 模型因此显得割裂且笨重。
* 主要问题：`tee()` 依赖缓冲队列且取消传播滞后，双消费者速度不一致时容易放大内存占用；`TransformStream` 也难以为纯同步路径提供低开销 fast path。
* 替代方向：把流直接建模为 `AsyncIterable`，并把反压能力做成更显式的能力接口，同时维持与 `ReadableStream`、`WritableStream`、`TransformStream` 的互操作。
* 工程结果：Cloudflare 用 `fast-webstreams` 做参考实现，在 pass-through、transform、`tee()` 与 `IdentityTransformStream` 等基准中实现了约 2x 到 120x 的提速。

## 正文

Cloudflare 在文中指出，WHATWG Web Streams 的核心设计诞生于 `async iteration` 进入主流之前，这直接影响了 API 的形态。今天开发者处理异步序列时，直觉上会先想到 `for await...of`，但标准 `ReadableStream` 仍要求先取 `reader`，再循环调用 `read()`，这让消费端代码明显背离现代 JavaScript 的自然写法。

```js
const reader = stream.getReader();

while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  await processChunk(value);
}
```

文章希望把“流”重新收敛到 `AsyncIterable` 这一更贴近语言本身的抽象上，让读取端可以直接写成下面这种形式，并让运行时在同步生产者、同步消费者场景中更容易走低开销路径。

```js
for await (const chunk of stream) {
  await processChunk(chunk);
}
```

Cloudflare 认为现行标准除了消费端不够顺手，还有两个更实在的工程问题。第一，`tee()` 的语义过度依赖内部缓冲，两个分支消费速度不一致时会积累额外内存，而且取消信号不能尽早向上游传播。第二，`TransformStream` 的抽象默认把所有阶段都推向 promise 驱动路径，使许多“本来可以同步完成”的转换仍要承担额外的调度与对象分配成本。

为说明理想中的组合方式，文中把“流式转换”重新表述为对异步序列的直接映射：生产者只负责不断产出 chunk，消费者或中间层只负责按序处理并继续 `yield`。这也是 Cloudflare 倾向的 API 方向。

```js
async function* mapStream(source) {
  for await (const chunk of source) {
    yield transformChunk(chunk);
  }
}
```

Cloudflare 随后给出 `fast-webstreams` 参考实现，并强调它不是另起炉灶的私有协议，而是尝试在保留现有 Web Streams 互操作能力的前提下，把“同步 fast path、显式反压、低成本 tee/transform”重新做对。文中的 Workers 基准测试显示，简单传递和变换场景可获得约 2x 到 10x 的提升，`tee()` 与 `IdentityTransformStream` 代理等高开销场景最高可接近 120x。

这篇文章的价值不在于“又造一个流库”，而在于它把问题界定得很清楚：如果 JavaScript 运行时继续围绕流式 I/O、边缘计算与中间件链路演进，那么流 API 是否贴近语言习惯、是否能表达真实反压、是否允许同步路径高效落地，都会直接影响运行时与框架的上限。

## 关联主题

- [[00-元语/cloudflare]]
- [[00-元语/web-streams]]
- [[00-元语/benchmark]]
