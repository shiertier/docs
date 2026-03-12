---
title: "diffusion"

类型: "主题词条"
更新日期: "2026-03-12"
---

## 定义

diffusion 指通过逐步加噪与逐步去噪来学习数据分布的生成范式，常用于图像、视频、音频与 3D 内容生成。它不是某个具体产品名，而是一类模型方法及其部署生态。

## 核心内涵

- **逐步去噪生成**：模型通常从噪声或潜变量出发，经过多个时间步迭代还原目标内容，因此推理延迟与步数、采样器和并行策略高度相关。
- **跨模态生成基础**：diffusion 常与 VAE、DiT 或其他 Transformer 结构组合，支撑 text-to-image、image-to-image、text-to-video 等多种生成任务。
- **部署优化空间大**：由于迭代步数多、VAE 编解码和注意力计算开销高，工程实践会重点优化内核、并行、蒸馏、量化与缓存。
- **与自回归互补**：自回归更擅长离散序列建模，diffusion 更常用于高保真连续内容生成，实际系统会探索两类范式的融合。

## 实践要点

- 区分“模型能力提升”和“推理引擎加速”，避免把并行、内核或服务层优化误判为模型质量提升。
- 对比方案时同时记录步数、吞吐、延迟、显存占用和硬件条件，单看样例质量不足以判断部署价值。
- 涉及视频或长序列生成时，需额外关注时序一致性、VAE 成本与多 GPU 并行策略。
- 落地到产品时，要根据任务类型分别评估 text-to-image、image-editing、video generation 等不同 pipeline 的接口与资源需求。

## 边界与区分

- diffusion 与 `text-to-image` 不同：前者是生成范式，后者是具体任务；文生图只是 diffusion 的常见应用之一。
- diffusion 与 `image-editing` 不同：图像编辑是应用场景，既可以由 diffusion 实现，也可以由其他方法实现。
- diffusion 与 `benchmark` 不同：benchmark 负责评估效果与效率，diffusion 指被评估的模型范式本身。

## 相关词条

- [[00-元语/multimodal]]
- [[00-元语/text-to-image]]
- [[00-元语/image-editing]]
- [[00-元语/video]]
- [[00-元语/benchmark]]

## 关联主题

- [[00-元语/AI]]
- [[00-元语/multimodal]]
- [[00-元语/text-to-image]]
- [[00-元语/image-editing]]
- [[00-元语/video]]
- [[00-元语/benchmark]]
