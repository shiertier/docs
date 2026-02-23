---
title: "DeepSpeed：深度学习分布式训练与推理优化库项目"
对象: "GitHub 项目"
项目主页: "https://github.com/deepspeedai/DeepSpeed"
Stars快照: "3696"
官方网站: "https://www.deepspeed.ai/"
主要语言: "Python"
开源协议: "Apache-2.0"
---

## 摘要

**1) 一句话总结**
DeepSpeed 是一个由微软主导的深度学习分布式训练与推理优化库，通过 ZeRO、3D 并行和高效卸载等系统级创新，极大提升了超大规模语言模型（百亿至千亿参数）和超长序列模型的训练效率与可扩展性。

**2) 核心要点**
* **核心定位**：专注于深度学习分布式训练与推理优化，重新定义模型训练的规模边界，广泛应用于顶级 LLM（如 BLOOM、GLM-130B）及百万 Token 级长上下文模型训练。
* **关键并行技术**：内置 ZeRO（零冗余优化器）、ZeRO-Infinity、3D 并行、Ulysses 序列并行以及 DeepSpeed-MoE 等核心系统创新。
* **高效卸载与 I/O 优化**：提供 SuperOffload、ZenFlow（无停顿卸载）等技术释放超级芯片算力，并结合 DeepCompile（编译优化）和 DeepNVMe（I/O 扩展）提升整体性能。
* **自动张量并行（AutoTP）**：原生支持对 Hugging Face 模型进行自动张量并行训练。
* **多硬件兼容**：除 NVIDIA 和 AMD GPU 外，还支持 Intel Gaudi 2 (HPU)、Intel XPU/CPU、华为昇腾 NPU 及 Tecorigin SDAA 等多种硬件。
* **广泛的生态集成**：作为底层优化引擎，与 Hugging Face、PyTorch Lightning、MosaicML 等主流开源框架无缝集成。
* **即时编译（JIT）**：默认依赖 Ninja 和 PyTorch 的 C++ 扩展加载器，在运行时对 C++/CUDA 扩展进行即时编译和动态链接。
* **便捷的安装与验证**：通过 `pip install deepspeed` 即可安装，并提供 `ds_report` 命令用于快速验证环境及算子兼容性。

**3) 风险与限制**
* **依赖顺序严格**：必须在安装 DeepSpeed **之前**安装 PyTorch（建议 >= 1.9 版本），否则会导致问题。
* **编译环境要求**：系统必须配备 CUDA 或 ROCm 编译器（如 `nvcc` 或 `hipcc`），否则无法获得完整的 C++/CUDA/HIP 扩展功能支持。
* **硬件测试局限**：尽管支持多种硬件，但官方测试最充分的仅为特定的 NVIDIA（Pascal, Volta, Ampere, Hopper）和 AMD（MI100, MI200）GPU 架构。
* **Windows 平台限制**：在 Windows 系统下不支持异步 I/O（AIO）和 GDS 功能；且安装门槛较高，需预装 Visual C++ 构建工具并以管理员权限运行脚本生成安装包。

## 功能与定位

DeepSpeed 是一个深度学习优化库，旨在使分布式训练和推理变得简单、高效且有效。它通过一系列系统级创新，极大地提升了大规模深度学习训练的可用性与效率，重新定义了深度学习模型训练的规模边界，能够为深度学习训练提供极致的速度与扩展性。

## 典型使用场景

* **超大规模语言模型（LLM）训练**：用于训练具有百亿至千亿级参数的顶级语言模型（如 MT-530B、BLOOM、GLM-130B、Jurassic-1 等）。
* **长序列模型训练**：支持数百万 Token 级别的超长上下文/序列训练（如 Arctic Long Sequence Training）。
* **跨框架加速**：作为底层优化引擎，与主流开源深度学习框架（如 Hugging Face Transformers、PyTorch Lightning 等）结合使用以加速训练过程。

## 核心功能

* **核心并行与优化技术**：包含 ZeRO（零冗余优化器）、ZeRO-Infinity、3D 并行（3D-Parallelism）、Ulysses 序列并行以及 DeepSpeed-MoE 等系统创新。
* **高效卸载引擎（Offloading）**：提供 SuperOffload、ZenFlow（无停顿卸载引擎）以及 Ulysses-Offload 等技术，释放超级芯片在大规模 LLM 训练中的算力，并推动长上下文训练的普及。
* **编译与 I/O 优化**：支持 DeepCompile（解锁分布式训练的编译器优化）和 DeepNVMe（为深度学习应用提供经济的 I/O 扩展）。
* **自动张量并行（AutoTP）**：支持对 Hugging Face 模型进行自动张量并行训练。
* **多硬件加速器支持**：除 NVIDIA 和 AMD GPU 外，还支持 Intel Gaudi 2 (HPU)、Intel XPU/CPU、华为昇腾 NPU 以及 Tecorigin SDAA 等多种硬件。

## 特色与差异点

* **极高的行业认可度**：是微软“AI at Scale”计划的重要组成部分，曾助力训练出发布时全球最强大的生成式语言模型。
* **广泛的生态集成**：已与众多流行的开源深度学习框架无缝集成，包括 Hugging Face (Transformers/Accelerate)、PyTorch Lightning、MosaicML、Determined 和 MMEngine。
* **即时编译（JIT）扩展**：默认情况下，DeepSpeed 包含的 C++/CUDA 扩展（ops）会在运行时依赖 Ninja 和 PyTorch 的 C++ 扩展加载器进行即时编译和动态链接。

## 使用方式概览

* **安装**：推荐通过 pip 安装最新版本（`pip install deepspeed`）。
* **环境验证**：安装后可通过运行 `ds_report` 命令查看环境报告，验证安装并检查当前机器兼容的扩展/算子。
* **Windows 支持**：支持在 Windows 环境下进行训练和推理，但需要预先安装 Visual C++ 构建工具并以管理员权限运行特定构建脚本生成 wheel 包。

## 限制与注意事项

* **依赖顺序**：必须在安装 DeepSpeed **之前**安装 PyTorch（建议使用 >= 1.9 的稳定版本）。
* **编译环境要求**：为了获得完整的功能支持，系统需要配备 CUDA 或 ROCm 编译器（如 `nvcc` 或 `hipcc`）以编译 C++/CUDA/HIP 扩展。
* **硬件测试范围**：虽然支持多种硬件，但官方测试最充分的 GPU 架构为 NVIDIA（Pascal, Volta, Ampere, Hopper）和 AMD（MI100, MI200）。
* **Windows 平台限制**：在 Windows 系统上，目前不支持异步 I/O（AIO）和 GDS 功能。

## 链接

- 仓库：https://github.com/deepspeedai/DeepSpeed
- 官网：https://www.deepspeed.ai/

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/github]]
- [[00-元语/stream-processing]]
- [[00-元语/wasm]]
