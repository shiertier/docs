---
title: "sherpa-onnx：端侧语音识别与语音处理推理引擎"
发布日期: "2026-02-23"
对象: "GitHub 项目 `k2-fsa/sherpa-onnx`"
项目主页: "https://github.com/k2-fsa/sherpa-onnx"
开源协议: "Apache License 2.0"
主要语言: "C++"
统计快照: "Stars 10430，Forks 1177，Watchers 101（抓取时间：2026-02-24）"
版本快照: "最新发布 v1.12.25（发布时间：2026-02-14T14:47:22Z）"
---

## 摘要

**1) 一句话总结**
sherpa-onnx 是一个基于下一代 Kaldi 和 ONNX Runtime 构建的跨平台、完全离线的开源语音与音频处理框架，支持从高性能服务器到边缘设备的广泛部署。

**2) 核心要点**
*   **开源协议与语言**：采用 Apache License 2.0 协议，核心代码使用 C++ 编写。
*   **核心功能**：提供完全本地化、无需联网的语音识别（流式/非流式 ASR）、语音合成（TTS）、说话人处理（识别/验证/分离）、语音活动检测（VAD）、语种识别及关键词唤醒等功能。
*   **极致跨平台**：支持 Linux、macOS、Windows、Android、iOS、HarmonyOS、WearOS 等操作系统，覆盖 x64、x86、arm64、arm32 及 riscv64 硬件架构。
*   **边缘计算与 NPU 加速**：原生支持树莓派、NVIDIA Jetson 及 RK3588 等多种开发板，并深度适配 Rockchip (RKNN)、Qualcomm (QNN)、Ascend (昇腾) 和 Axera 等 NPU 硬件加速。
*   **多语言 API 绑定**：提供 12 种编程语言的 API（包括 C++、Python、Java、C#、Go、Rust、Swift 等），并支持通过 WebAssembly 在浏览器中进行本地处理。
*   **主流模型兼容**：支持 Whisper、Zipformer、Paraformer、SenseVoice、Piper 等业界主流模型，涵盖多语种及多种中文方言。
*   **开箱即用**：官方提供大量预编译的 Android APK、Flutter 应用，并在 Huggingface 和 ModelScope 提供免安装的 Web 体验。

## 功能与定位

sherpa-onnx 是一个基于下一代 Kaldi 和 ONNX Runtime 构建的开源语音与音频处理框架。其核心定位是提供**完全本地化、无需互联网连接**的语音 AI 能力。该项目致力于在从高性能服务器到资源受限的嵌入式设备上，实现高效的语音识别、合成及多种音频分析任务。

## 典型使用场景

- **移动端与穿戴设备**：在 Android、iOS、HarmonyOS 及 WearOS 上集成离线语音助手或语音输入功能。
- **边缘计算与物联网**：在树莓派、NVIDIA Jetson 或各类 NPU 开发板上实现智能硬件的语音唤醒与交互。
- **Web 端本地处理**：通过 WebAssembly 在浏览器中直接运行语音识别或 VAD，保护用户隐私。
- **多语种与方言转写**：利用预训练模型进行实时或离线的会议记录、字幕生成及多语言翻译辅助。
- **复杂音频分析**：在本地环境中进行声源分离、语音增强或说话人日志（区分不同说话人）处理。

## 核心功能

- **语音识别 (ASR)**：支持语音转文本，兼容流式（实时）与非流式处理。
- **语音合成 (TTS)**：支持将文本转换为自然语音。
- **说话人处理**：包含说话人识别（Identification）、说话人验证（Verification）以及说话人日志/分离（Diarization）。
- **音频与语音分析**：
  - 语音活动检测 (VAD)
  - 语种识别 (Spoken Language Identification)
  - 音频标记 (Audio Tagging)
  - 关键词唤醒 (Keyword Spotting)
- **音频增强与处理**：支持声源分离、语音增强以及自动添加标点符号。

## 特色与差异点

- **极致的跨平台与架构兼容性**：
  - **操作系统**：支持 Linux, macOS, Windows, Android, iOS, HarmonyOS, openKylin, WearOS 等。
  - **硬件架构**：覆盖 x64, x86, arm64, arm32, riscv64。
  - **边缘硬件**：原生支持树莓派、NVIDIA Jetson 系列，以及 RV1126, LicheePi4A, VisionFive 2, 旭日X3派, 爱芯派, RK3588 等多种开发板。
- **深度的 NPU 硬件加速**：适配 Rockchip NPU (RKNN), Qualcomm NPU (QNN), Ascend NPU (昇腾) 和 Axera NPU。
- **广泛的编程语言绑定**：提供 12 种语言的 API，包括 C++, C, Python, JavaScript, Java, C#, Kotlin, Swift, Go, Dart, Rust, Pascal，并支持 NodeJS 和 WebAssembly。
- **丰富的模型生态支持**：兼容业界主流模型，如 Whisper, Zipformer, Paraformer, SenseVoice, Moonshine, Piper, Matcha 等，支持多语种及多种中文方言。
- **开箱即用的体验**：官方提供大量预编译的 Android APK、Flutter 应用、Lazarus 应用，并在 Huggingface 和 ModelScope 上提供无需安装的 Web 体验空间。

## 使用方式概览

- 建议先阅读 README 与官方文档，再按最小示例验证。

## 限制与注意事项

- 使用前请核对许可证、维护状态与兼容性约束。

## 链接

- [GitHub 仓库](https://github.com/k2-fsa/sherpa-onnx)
- [项目主页](https://k2-fsa.github.io/sherpa/onnx/index.html)
- [v1.12.25 Release](https://github.com/k2-fsa/sherpa-onnx/releases/tag/v1.12.25)

## 关联主题

- [[00-元语/AI]]
- [[00-元语/asr]]
- [[00-元语/audio]]
- [[00-元语/github]]
