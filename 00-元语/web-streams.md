---
title: "Web Streams"

类型: "主题词条"
更新日期: "2026-03-12"
---

## 定义

Web Streams 是 WHATWG Streams Standard 定义的一组 Web 平台流式数据原语，用于以增量方式创建、组合和消费数据流，核心接口包括 `ReadableStream`、`WritableStream` 和 `TransformStream`。

## 核心内涵

Web Streams 的重点不是“网络下载时分块接收”这个单一场景，而是为 Web 平台提供统一的流式 I/O 抽象，让 `fetch()` 响应体、文本解码、压缩解压、文件处理与跨上下文数据传递等能力共享一致的数据流模型。它既支持直接通过 reader / writer 消费，也支持通过 `pipeThrough()`、`pipeTo()` 组成处理链；规范同时把背压、队列、锁定、取消和错误传播纳入同一套语义，避免流式处理只停留在“不断读 chunk”这一层。

## 实践要点

- 需要边接收边处理大响应体、生成式输出或长时间数据传输时，优先考虑 `ReadableStream`，避免先把全部数据缓冲到内存。
- 设计流式转换时，要显式检查背压、取消传播和错误处理是否合理，而不是只验证“能否读出数据”。
- `TransformStream` 适合串接解码、过滤、重分块等处理步骤；若调用方更习惯 `for await...of`，则要额外关注与 `AsyncIterable` 的互操作成本。
- 面向字节流的高性能场景，需要区分默认 reader 与 BYOB 等更底层读取方式，减少不必要的复制和分配。

## 边界与区分

- Web Streams 与分布式 `stream-processing` 不同：前者是运行时 API 抽象，后者通常指持续处理事件流的数据系统。
- Web Streams 与 Node.js stream 不同：两者都处理流式 I/O，但历史接口、状态模型与互操作边界并不相同。
- Web Streams 与 `AsyncIterable` 不完全等同：后者更贴近语言级异步序列消费，前者还额外定义了 pipe chain、队列策略与背压语义。

## 相关词条

- [[00-元语/stream-processing]]

## 关联主题

- [[00-元语/stream-processing]]
