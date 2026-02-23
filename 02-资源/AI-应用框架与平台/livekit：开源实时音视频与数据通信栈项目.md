---
title: "livekit：开源实时音视频与数据通信栈项目"
对象: "GitHub 项目"
项目主页: "https://github.com/livekit/livekit"
Stars快照: "3708"
官方网站: "https://docs.livekit.io"
主要语言: "Go"
开源协议: "Apache-2.0"
---

## 摘要

**1) 一句话总结**
LiveKit 是一个基于 WebRTC 和 Go 语言开发的开源分布式实时音视频与数据通信栈，为构建多用户会议、AI 语音交互及流媒体直播等应用提供端到端的基础设施。

**2) 核心要点**
* **技术栈与协议**：服务端采用 Go 语言编写（源码编译需 Go 1.23+），底层基于 Pion WebRTC 实现分布式 SFU，采用 Apache-2.0 开源协议。
* **高性能传输**：支持 UDP/TCP/TURN 协议、端到端加密，以及 SVC 编解码器（VP9, AV1）。
* **高级会议控制**：内置说话人检测、视频联播（Simulcast）、选择性订阅以及用于管理参与者的审核 API。
* **生态扩展组件**：包含 Agents（用于构建实时多模态 AI 应用）、Egress（用于录制和导出音视频轨）以及 Ingress（支持 RTMP、WHIP、HLS 或 OBS 等外部流摄取）。
* **全平台 SDK**：提供覆盖前端/移动端/游戏引擎（JS/TS、iOS、Android、Flutter、Unity 等）的客户端 SDK，以及多种语言（Go、Python、Java 等）的服务端 SDK。
* **安全机制**：客户端连接需使用基于 JWT 的访问令牌（Access Token）进行身份与权限验证，并支持 Webhooks 事件回调。
* **部署与运维**：专为生产环境设计，支持通过单一二进制文件、Docker 或 Kubernetes 进行自托管部署（支持多区域扩展），同时也提供官方托管的 LiveKit Cloud 服务。
* **典型应用场景**：广泛应用于大规模并发音视频会议、结合大语言模型的 AI 语音助手、空间音频互动及流媒体直播分发。

## 功能与定位

LiveKit 是一个基于 WebRTC 的开源项目，旨在提供可扩展的多用户音视频会议能力。它被定位为“连接人类与 AI 的端到端实时通信技术栈”，为开发者在应用中构建实时视频、音频和数据传输功能提供完整的基础设施。其服务端采用 Go 语言编写，底层基于 Pion WebRTC 实现，作为可扩展的分布式 WebRTC SFU（选择性转发单元）运行。

## 典型使用场景

* **多用户音视频会议**：构建支持大规模并发的实时互动会议系统。
* **AI 语音助手**：结合大语言模型（如 ChatGPT）构建实时的多模态 AI 交互应用。
* **空间音频（Spatial Audio）**：实现具备空间方位感的音频互动体验。
* **流媒体直播**：支持从 OBS Studio 等外部工具推流并进行实时分发。

## 核心功能

* **高性能音视频传输**：支持 UDP/TCP/TURN 协议，提供端到端加密，支持 SVC 编解码器（VP9, AV1）。
* **高级会议控制**：内置说话人检测（Speaker detection）、视频联播（Simulcast）、选择性订阅（Selective subscription）以及用于管理参与者的审核 API。
* **生态扩展组件**：
  * **Agents**：用于构建具有可编程后端参与者的实时多模态 AI 应用。
  * **Egress**：用于录制房间内容、多流分发以及导出独立的音视频轨。
  * **Ingress**：支持从外部源（如 RTMP、WHIP、HLS 或 OBS Studio）摄取流媒体。
* **安全与集成**：支持基于 JWT 的身份验证机制，并提供 Webhooks 用于服务端事件回调。

## 特色与差异点

* **全平台 SDK 生态**：提供现代化的全功能客户端 SDK（涵盖 JS/TS/React、Swift/iOS/macOS、Kotlin/Android、Flutter、Unity WebGL、React Native、Rust 等）以及服务端 SDK（Go、JS/TS、Ruby、Java/Kotlin、Python、PHP 等）。
* **易于部署与扩展**：支持通过单一二进制文件、Docker 或 Kubernetes 进行部署，具备分布式和多区域（Multi-region）部署能力。
* **生产级就绪**：专为生产环境设计，提供端到端优化，并配备 CLI 命令行工具用于 API 访问、令牌生成和负载测试。

## 使用方式概览

* **安装与运行**：可通过 Homebrew (macOS)、curl 脚本 (Linux) 或直接下载二进制文件安装。支持通过 `livekit-server --dev` 命令快速启动自带测试密钥的开发模式。
* **身份验证**：客户端连接 LiveKit 房间需要提供访问令牌（Access Token，即 JWT），该令牌对用户身份及房间权限进行编码，可通过服务端 SDK 或 CLI 工具生成。
* **部署模式**：
  * **LiveKit Cloud**：官方提供的托管云服务，提供带宽和转码支持。
  * **自托管（Self-host）**：用户可利用官方提供的 Docker 镜像或 Helm Charts 自行部署。
* **源码编译**：如需从源码构建，需要 Go 1.23+ 环境。

## 链接

- 仓库：https://github.com/livekit/livekit
- 官网：https://docs.livekit.io

## 关联主题

- [[00-元语/AI]]
- [[00-元语/workflow]]
- [[00-元语/github]]
- [[00-元语/sdk]]
- [[00-元语/rag]]
