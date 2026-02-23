---
title: "SkyReels-V2：文生视频生成模型"
发布日期: "2026-02-23"
对象: "GitHub 项目 `SkyworkAI/SkyReels-V2`"
项目主页: "https://github.com/SkyworkAI/SkyReels-V2"
开源协议: "Other"
主要语言: "Python"
统计快照: "Stars 6383，Forks 1316，Watchers 129（抓取时间：2026-02-24）"
---

## 摘要

**1) 一句话总结**
SkyReels-V2 是一款基于自回归扩散强制（AutoRegressive Diffusion-Forcing）架构的开源无限长度视频生成模型，支持文本到视频、图像到视频以及精准的帧控制功能。

**2) 关键要点**
* **架构创新**：首个采用自回归扩散强制架构的开源视频生成模型，宣称在同类开源模型中达到 SOTA 性能。
* **多场景支持**：支持文本到视频（T2V）、图像到视频（I2V）、长视频生成（可达 60 秒及以上）、视频扩展以及首尾帧平滑过渡控制。
* **模型规格**：目前已发布 1.3B 和 14B 参数量版本，支持 540P 和 720P 分辨率（5B 版本及 Camera Director 模型在计划中）。
* **推理模式与优化**：提供同步和异步两种推理模式，原生支持模型卸载（Offload）和 TeaCache 加速机制。
* **生态集成**：深度集成至 Hugging Face 的 `diffusers` 库，并提供配套的视频字幕生成模型（SkyCaptioner-V1）与 Prompt 增强工具。
* **使用方式**：可通过官方提供的 Python 脚本或 `diffusers` 标准 Pipeline（如 `SkyReelsV2DiffusionForcingPipeline`）进行单卡或多卡推理。

**3) 风险与不足**
* **显存消耗大**：生成 540P 视频时，1.3B 模型峰值显存约需 14.7GB，而 14B 模型峰值显存高达约 51.2GB。
* **显存与质量的权衡**：通过降低基础帧数（`--base_num_frames`）可减少显存峰值，但这会轻微降低视频质量，且不宜设置过小。
* **异步模式限制**：异步推理模式耗时比同步模式更长，且要求输入的帧潜变量数量必须能被 `causal_block_size` 整除。
* **长视频参数敏感**：用于平滑长视频生成的 `--addnoise_condition` 参数若设置过大（建议不超过 50），会导致画面不一致。
* **I2V 提示词依赖**：在进行图像到视频生成时，提示词中必须包含对首帧图像的具体描述。

## 功能与定位

SkyReels-V2 是一个开源的无限长度视频生成模型（Infinite-Length Film Generative Model）。该项目基于自回归扩散强制（AutoRegressive Diffusion-Forcing）架构，旨在提供高质量的视频生成能力，并宣称在公开可用的同类模型中达到了 SOTA（当前最优）性能。

## 典型使用场景

- **文本到视频（T2V）**：根据文本提示词生成动态视频。
- **图像到视频（I2V）**：基于单张图像和提示词生成视频。
- **长视频生成**：生成 10 秒、15 秒、30 秒、60 秒甚至更长时间的连续视频。
- **视频扩展（Video Extension）**：基于现有视频片段向后延续生成新内容。
- **首尾帧控制（Start/End Frame Control）**：输入起始图像和结束图像，生成平滑过渡的中间视频帧。

## 核心功能

- **Diffusion Forcing 长视频生成**：通过自回归方式支持无限长度的视频生成，提供同步（Synchronous）和异步（Asynchronous）两种推理模式。
- **多任务模型矩阵**：提供专门针对 Diffusion Forcing、文本生成视频（T2V）和图像生成视频（I2V）训练的模型权重。
- **精准帧控制**：支持视频扩展以及指定首尾帧的条件生成。
- **配套生态工具**：包含视频字幕生成模型（SkyCaptioner-V1）以及 Prompt 增强工具。

## 特色与差异点

- **架构创新**：首个采用自回归扩散强制（AutoRegressive Diffusion-Forcing）架构的开源视频生成模型。
- **多规格分辨率与参数量**：目前已发布 1.3B 和 14B 参数量版本，支持 540P 和 720P 分辨率（5B 版本及 Camera Director 模型在计划中）。
- **生态兼容性**：已深度集成至 Hugging Face 的 `diffusers` 库，支持通过标准 Pipeline（如 `SkyReelsV2DiffusionForcingPipeline`）进行调用。
- **推理优化**：原生支持模型卸载（Offload）和 TeaCache 加速机制。

## 使用方式概览

- **环境配置**：克隆 GitHub 仓库并安装 `requirements.txt` 中的依赖（测试环境基于 Python 3.10.12）。
- **脚本推理**：通过提供的 `generate_video_df.py` 脚本运行单卡或多卡推理。支持通过命令行参数调整分辨率、生成帧数（`--num_frames`）、重叠历史帧（`--overlap_history`）等。
- **Diffusers 调用**：可加载 `Skywork/SkyReels-V2-DF-14B-540P-Diffusers` 等权重，结合 `UniPCMultistepScheduler` 调度器进行 Python 代码层面的推理与视频导出。

## 限制与注意事项

- **显存消耗**：生成 540P 视频时，1.3B 模型峰值显存约需 14.7GB，而 14B 模型峰值显存约需 51.2GB。
- **显存与质量的权衡**：可以通过降低基础帧数（`--base_num_frames`，如降至 77 或 57）来减少显存峰值，但这可能会轻微降低视频质量，且不宜设置过小。
- **推理模式差异**：异步推理模式比同步模式耗时更长，但在指令遵循和视觉一致性上表现更好。使用异步模式时，需确保输入的帧潜变量数量能被 `causal_block_size` 整除。
- **长视频生成参数**：`--addnoise_condition` 参数用于向干净条件中添加噪声以平滑长视频生成，推荐值为 20；若设置过大（建议不超过 50）会导致画面不一致。
- **I2V 提示词建议**：在进行图像到视频生成时，建议使用类似 T2V 的提示词，并在其中包含对首帧图像的描述。

## 链接

- GitHub 仓库：https://github.com/SkyworkAI/SkyReels-V2
- 官方平台：https://platform.skyreels.ai
- 技术报告：https://arxiv.org/pdf/2504.13074
- Hugging Face 集合：https://huggingface.co/collections/Skywork/skyreels-v2-6801b1b93df627d441d0d0d9
- ModelScope 集合：https://www.modelscope.cn/collections/SkyReels-V2-f665650130b144

## 关联主题

- [[00-元语/AI]]
- [[00-元语/video]]
- [[00-元语/multimodal]]
- [[00-元语/github]]
