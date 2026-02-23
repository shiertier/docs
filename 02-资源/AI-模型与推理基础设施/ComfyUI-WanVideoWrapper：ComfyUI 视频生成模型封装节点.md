---
title: "ComfyUI-WanVideoWrapper：ComfyUI 视频生成模型封装节点"
发布日期: "2026-02-23"
对象: "GitHub 项目 `kijai/ComfyUI-WanVideoWrapper`"
项目主页: "https://github.com/kijai/ComfyUI-WanVideoWrapper"
开源协议: "Apache License 2.0"
主要语言: "Python"
统计快照: "Stars 6098，Forks 587，Watchers 68（抓取时间：2026-02-24）"
---

## 摘要

**1) 一句话总结**
ComfyUI-WanVideoWrapper 是一个为 WanVideo（Wan2.1）及其相关模型提供 ComfyUI 封装节点的开源项目，旨在作为开发者的先行测试沙盒，支持极低显存的长视频生成、多种前沿扩展模型及显存优化技术。

**2) 核心要点**
*   **项目定位**：作为开发者的“个人沙盒”，用于在 ComfyUI 原生支持前快速测试、探索 WanVideo 的新模型与新特性，而非替代原生工作流。
*   **极低显存长视频生成**：利用上下文窗口技术，在 RTX 5090 上生成 1025 帧视频仅需不到 5GB 显存（耗时约 10 分钟）。
*   **显存优化与区块交换**：支持区块交换（Block Swapping）和异步卸载预取功能，减少对 `torch.compile` 的依赖以提升显存效率。
*   **LoRA 权重管理**：未合并的 LoRA 权重作为缓冲区分配，遵循区块交换机制，统一了卸载流程并使 LoRA 受益于预取功能。
*   **模型格式支持**：推荐使用 fp8 缩放模型，同时支持 GGUF 格式，并兼容 ComfyUI 原生的文本编码器和 CLIP Vision 加载器。
*   **加速与扩展集成**：支持 TeaCache 加速（推荐阈值 0.25-0.30），并集成了大量扩展模型（如 SkyReels、VACE 等）及免训练动画技术（如 TimeToMove、SCAIL 等）。
*   **典型场景**：涵盖长视频生成、视频重绘（Vid2vid，支持 14B/1.3B T2V 模型）以及前沿模型与免训练技术的快速测试。
*   **安装方式**：克隆至 `custom_nodes` 目录，通过 `requirements.txt` 安装依赖，并将对应模型放入指定 `models` 子目录即可使用。

**3) 风险与不足**
*   **稳定性风险**：代码处于永久性的“开发中（WIP）”状态，可能存在不稳定因素或 Bug。
*   **社区支持受限**：由于机器人或误用用户的涌入，项目暂时禁止了新账号提交 Issue。
*   **LoRA 显存激增风险**：由于机制更新，若不开启区块交换（block swap），LoRA 会全部加载到显存中导致占用增加。
*   **Windows 缓存问题**：在 Windows 系统中使用 `torch.compile` 时，更新代码后首次运行可能出现显存激增，通常需再次运行或清理 Triton 缓存（`.triton` 和 `torchinductor` 文件夹）来解决。

## 功能与定位

这是一个为 WanVideo（Wan2.1）及其相关模型提供 ComfyUI 封装节点的开源项目。该项目定位为开发者的“个人沙盒”，旨在 ComfyUI 原生支持之前，提供一个能够快速测试、探索新模型与新特性的独立环境。它并非为了替代 ComfyUI 的原生工作流，而是作为体验 WanVideo 最新发布内容的先行测试平台。

## 典型使用场景

- **长视频生成**：利用上下文窗口（Context window）技术生成超长帧视频（如 1025 帧）。
- **视频重绘（Vid2vid）**：使用 14B 或 1.3B 的 T2V（文本到视频）模型进行视频到视频的生成。
- **前沿模型与免训练技术测试**：快速体验尚未集成到 ComfyUI 主分支的最新视频生成模型、补丁节点（如 ATI）和免训练（Training-free）动画技术。

## 核心功能

- **显存优化与区块交换（Block Swapping）**：减少对 `torch.compile` 的依赖以提升显存效率。支持异步卸载的预取功能。
- **LoRA 权重管理**：未合并的 LoRA 权重现作为缓冲区分配给对应模块，并遵循区块交换机制。这统一了卸载流程，使 LoRA 也能受益于预取功能。
- **广泛的模型格式支持**：支持加载 fp8 缩放模型（作者推荐）以及 GGUF 格式模型。同时兼容 ComfyUI 原生的文本编码器和 CLIP Vision 加载器。
- **TeaCache 加速支持**：支持 TeaCache，推荐阈值范围在 0.25-0.30 之间（新版本阈值需比旧版高 10 倍）。
- **丰富的扩展模型与技术集成**：
  - **扩展模型**：支持 SkyReels、WanVideoFun、ReCamMaster、VACE、Phantom、ATI、Uni3C、MiniMaxRemover、MAGREF、FantasyTalking、FantasyPortrait、MultiTalk、EchoShot、Stand-In、HuMo、WanAnimate、Lynx、MoCha、UniLumos、Bindweave 等。
  - **免训练技术**：支持 TimeToMove、SteadyDancer、One-to-all-Animation、SCAIL。
  - **其他兼容模型**：LongCat-Video。

## 特色与差异点

- **快速迭代**：相比 ComfyUI 核心代码的复杂性，该独立封装器能更简单、快速地实现对新模型的支持。
- **极低显存的长视频生成能力**：在测试中，使用 1.3B T2V 模型结合上下文窗口（窗口大小 81，重叠 16）生成 1025 帧视频，在 RTX 5090 上仅需不到 5GB 显存，耗时约 10 分钟。

## 使用方式概览

1. 将仓库克隆至 ComfyUI 的 `custom_nodes` 目录。
2. 通过 `pip install -r requirements.txt` 安装依赖（便携版需使用内置 Python 环境执行）。
3. 将对应的模型（文本编码器、Clip vision、Transformer 主视频模型、VAE）放置在 ComfyUI 相应的 `models` 子目录下。

## 限制与注意事项

- **项目状态**：代码处于永久性的“开发中（WIP）”状态，可能存在不稳定因素或 Bug。
- **Issue 提交限制**：由于大量机器人或误以为这是视频生成服务的用户涌入，项目暂时禁止了新账号提交 Issue。
- **LoRA 显存占用变化**：由于 LoRA 处理机制的更新，如果不开启区块交换（block swap），LoRA 会全部加载到显存中导致占用增加；若开启区块交换，可通过增加交换的区块数量来补偿显存占用。
- **Windows 下的 Triton 缓存问题**：在 Windows 系统中使用 `torch.compile` 时，更新模型代码后首次运行可能会出现显存激增。通常再次运行或清理 Triton 缓存（`.triton` 和 `torchinductor` 文件夹）即可解决。

## 链接

- 仓库地址：https://github.com/kijai/ComfyUI-WanVideoWrapper
- WanVideo 原项目：https://github.com/Wan-Video/Wan2.1
- 推荐的 fp8 模型：https://huggingface.co/Kijai/WanVideo_comfy_fp8_scaled

## 关联主题

- [[00-元语/AI]]
- [[00-元语/video]]
- [[00-元语/workflow]]
- [[00-元语/github]]
