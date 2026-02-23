---
title: MediaPipe：跨平台实时媒体机器学习框架
对象: GitHub 仓库
项目主页: https://github.com/google-ai-edge/mediapipe
官方文档: https://developers.google.com/mediapipe
许可证: Apache License 2.0
来源:
  - https://github.com/google-ai-edge/mediapipe
  - https://github.com/google-ai-edge/mediapipe/blob/master/README.md
  - https://developers.google.com/mediapipe
  - https://github.com/google-ai-edge/mediapipe/releases
---

## 摘要

MediaPipe 是 Google 开源的跨平台端侧机器学习框架，面向实时媒体处理，提供从高层任务 API 到底层计算图框架的完整能力。

- 采用 Apache License 2.0，仓库持续迭代并持续发布版本。
- 支持 Android、iOS、Web、桌面、边缘设备与 IoT 场景。
- Tasks 体系覆盖视觉、文本、音频任务，支持快速集成。
- Framework 体系基于 Graph、Calculators、Packet、Streams，强调时序与实时调度。
- Web 侧支持 `@mediapipe/tasks-*` 与 Wasm 组合部署。
- 官方文档已迁移到 Google Developers，GitHub 主要承担源码与发布入口。

## 功能与定位

MediaPipe 是一个用于实时媒体机器学习的跨平台开源框架，定位于在设备侧直接运行感知与推理能力。它既提供可直接调用的任务级 API，也提供可深度定制的底层数据流框架，适合从快速集成到工程化构建的不同阶段。

## 典型使用场景

- 在视频流中做人脸检测、手势识别、姿态估计和分割。
- 在端侧完成文本分类、语言检测与嵌入提取。
- 在端侧完成音频分类与音频嵌入。
- 为 Android、iOS、Web、桌面端构建一致的跨平台智能功能。

## 核心功能

- MediaPipe Tasks：提供跨平台任务 API 与库，覆盖 Vision、Text、Audio。
- MediaPipe Models：提供可直接使用的预训练模型。
- MediaPipe Model Maker：支持用业务数据做定制与微调。
- MediaPipe Studio：支持浏览器内可视化、评估与基准测试。
- MediaPipe Framework：通过图结构组织节点与数据流，支持实时流处理与精细调度。

## 特色与差异点

- 同时覆盖高层任务 API 与底层图计算框架，兼顾易用性与可定制性。
- 跨平台支持完整，便于同一能力在多终端复用。
- Web 端有明确的 Wasm 化路径，适合浏览器内实时推理。
- 任务与模块生态较全，常见实时感知任务可直接落地。

## 使用方式概览

- 任务级接入：按平台引入对应 Tasks 包，加载官方或自定义模型并调用推理 API。
- 框架级开发：基于 Graph 与 Calculators 设计数据处理流水线，按业务需求扩展节点。
- 工程化验证：结合 Studio 做可视化验证与性能评估，再进入生产集成。

## 限制与注意事项

- 旧版 Legacy Solutions 已在 2023-03-01 结束官方支持，相关代码与二进制以 as-is 方式保留。
- 仓库中的部分旧文档为迁移指引，正式文档入口以 Google Developers 站点为准。
- 在选型时应优先核对目标平台对应任务与版本兼容性，再决定接入路径。

## 链接

- 项目主页：https://github.com/google-ai-edge/mediapipe
- 官方文档：https://developers.google.com/mediapipe
- Releases：https://github.com/google-ai-edge/mediapipe/releases
- README：https://github.com/google-ai-edge/mediapipe/blob/master/README.md
- 视觉任务 README：https://github.com/google-ai-edge/mediapipe/blob/master/mediapipe/tasks/web/vision/README.md
- 文本任务 README：https://github.com/google-ai-edge/mediapipe/blob/master/mediapipe/tasks/web/text/README.md
- 音频任务 README：https://github.com/google-ai-edge/mediapipe/blob/master/mediapipe/tasks/web/audio/README.md

## 关联主题

- [[00-元语/AI]]
- [[00-元语/multimodal]]
- [[00-元语/video]]
- [[00-元语/audio]]
- [[00-元语/wasm]]
