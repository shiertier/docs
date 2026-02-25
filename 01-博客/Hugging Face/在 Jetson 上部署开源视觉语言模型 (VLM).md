---
title: "在 Jetson 上部署开源视觉语言模型 (VLM)"
发布日期: 2026-02-24
作者: "Hugging Face"
来源: "Hugging Face Blog"
原文链接: "https://huggingface.co/blog/nvidia/cosmos-on-jetson"
译注: "未找到官方中文版本，本文基于英文原文翻译整理。"
---

## 摘要

**1) 一句话总结**
本文档详细介绍了如何使用 vLLM 框架在 NVIDIA Jetson 系列边缘设备上部署 Cosmos Reason 2B 视觉语言模型 (VLM)，并将其接入 Live VLM WebUI 以实现基于网络摄像头的实时 AI 交互。

**2) 关键要点**
*   **支持的硬件与系统**：支持 Jetson AGX Thor（需 JetPack 7）、Jetson AGX Orin 和 Orin Super Nano（需 JetPack 6）。
*   **存储与账号要求**：必须使用 NVMe SSD（需约 5GB 存储 FP8 模型权重，8GB 存储 vLLM 容器镜像），并需要免费的 NVIDIA NGC 账号以下载资源。
*   **统一部署工作流**：通过 NGC CLI 下载 FP8 量化模型 -> 拉取对应设备的 vLLM Docker 镜像 -> 将模型作为数据卷挂载并启动容器 -> 连接至 WebUI。
*   **高性能设备配置 (Thor / AGX Orin)**：显存充足，支持配置最大模型长度（`max-model-len`）为 8192 tokens，GPU 显存利用率设为 0.8。
*   **内存受限设备配置 (Orin Super Nano)**：需采用激进的内存优化，最大模型长度限制为 256 tokens，GPU 利用率降至 0.65，并需启用 `--enforce-eager`（禁用 CUDA graphs）、限制单次处理请求数及多模态输入数量。
*   **模型特性启用**：在启动 vLLM 服务时，需通过 `--reasoning-parser qwen3` 参数来启用模型的思维链 (chain-of-thought) 推理提取功能。
*   **WebUI 推荐设置**：针对上下文长度较短的 Orin 设备，建议在 Live VLM WebUI 中将 Max Tokens 设为 100–150，帧处理间隔 (Frame Processing Interval) 设为 60+。

**3) 风险与问题（基于文档明确指出）**
*   **Orin 内存不足 (OOM) 风险**：vLLM 可能会因 CUDA 内存不足而崩溃。需在启动前释放系统缓存 (`sudo sysctl -w vm.drop_caches=3`)，或进一步降低 GPU 利用率（至 0.50-0.55）和最大模型长度。
*   **Orin 推理速度缓慢**：在内存受限的配置下，响应时间长属于正常现象（系统优先保证运行而非速度），需通过减少 `max_tokens` 或增加帧间隔来缓解。
*   **模型加载失败风险**：如果 NGC 模型下载不完整、Docker 卷挂载路径错误，或未以只读模式 (`:ro`) 挂载模型目录，vLLM 将无法启动服务。
*   **WebUI 连接失败**：如果 WebUI 的 API Base URL 未正确指向 `http://localhost:8000/v1`（例如误用 `https` 或跨容器时未指定正确的 Jetson IP），会导致 WebUI 无法检测到模型。

## 正文

视觉语言模型 (VLM) 将视觉感知与语义推理相结合，标志着人工智能领域的一次重大飞跃。突破了受限于固定标签的传统模型，VLM 利用联合嵌入空间，使用自然语言来理解和讨论复杂的开放式环境。

推理准确性和效率的快速发展，使得这些模型非常适合边缘设备。[NVIDIA Jetson 系列](https://marketplace.nvidia.com/en-us/enterprise/robotics-edge/?limit=15)（从高性能的 AGX Thor 和 AGX Orin 到紧凑型的 Orin Nano Super）专为驱动物理 AI 和机器人的加速应用而构建，为领先的[开源模型](https://www.jetson-ai-lab.com/models/)提供了必要的优化运行时。

在本教程中，我们将演示如何使用 [vLLM](https://vllm.ai/) 框架在整个 Jetson 产品线上部署 [NVIDIA Cosmos Reason 2B](https://build.nvidia.com/nvidia/cosmos-reason2-2b) 模型。我们还将指导您将该模型连接到 [Live VLM WebUI](https://github.com/NVIDIA-AI-IOT/live-vlm-webui)，从而实现基于网络摄像头的实时界面，用于交互式物理 AI。

-----------------------------------------------------------------------------------

**支持的设备：**

*   Jetson AGX Thor 开发者套件
*   Jetson AGX Orin (64GB / 32GB)
*   Jetson Orin Super Nano

**JetPack 版本：**

*   JetPack 6 (L4T r36.x) — 适用于 Orin 设备
*   JetPack 7 (L4T r38.x) — 适用于 Thor

**存储：** **必须**使用 NVMe SSD

*   约 5 GB 用于 FP8 模型权重
*   约 8 GB 用于 vLLM 容器镜像

**账户：**

*   创建 [NVIDIA NGC](https://ngc.nvidia.com/) 账户（免费）以同时下载模型和 vLLM 容器

* * *

-------------------------------------------------------------------------

|  | Jetson AGX Thor | Jetson AGX Orin | Orin Super Nano |
| --- | --- | --- | --- |
| **vLLM 容器** | `nvcr.io/nvidia/vllm:26.01-py3` | `ghcr.io/nvidia-ai-iot/vllm:r36.4-tegra-aarch64-cu126-22.04` | `ghcr.io/nvidia-ai-iot/vllm:r36.4-tegra-aarch64-cu126-22.04` |
| **模型** | 通过 NGC 获取的 FP8（卷挂载） | 通过 NGC 获取的 FP8（卷挂载） | 通过 NGC 获取的 FP8（卷挂载） |
| **最大模型长度** | 8192 tokens | 8192 tokens | 256 tokens（受限于内存） |
| **GPU 显存利用率** | 0.8 | 0.8 | 0.65 |

所有设备的工作流程都是相同的：

1.   通过 NGC CLI **下载** FP8 模型权重文件 (checkpoint)
2.   为您的设备 **拉取 (Pull)** vLLM Docker 镜像
3.   **启动**容器，并将模型作为数据卷挂载
4.   将 Live VLM WebUI **连接**到 vLLM 端点

* * *

--------------------------------------------------------------------------------------------------------------

NGC CLI 允许您从 [NVIDIA NGC Catalog](https://catalog.ngc.nvidia.com/?tab=model) 下载模型权重文件。

### [](https://huggingface.co/blog/nvidia/cosmos-on-jetson#download-and-install) 下载并安装

```bash
mkdir -p ~/Projects/CosmosReason
cd ~/Projects/CosmosReason

# 下载适用于 ARM64 的 NGC CLI
# 从以下地址获取最新的安装程序 URL：https://org.ngc.nvidia.com/setup/installers/cli
wget -O ngccli_arm64.zip https://api.ngc.nvidia.com/v2/resources/nvidia/ngc-apps/ngc_cli/versions/4.13.0/files/ngccli_arm64.zip
unzip ngccli_arm64.zip
chmod u+x ngc-cli/ngc

# 添加到 PATH 环境变量
export PATH="$PATH:$(pwd)/ngc-cli"
```

### [](https://huggingface.co/blog/nvidia/cosmos-on-jetson#configure-the-cli) 配置 CLI

```bash
ngc config set
```

系统将提示您输入：

*   **API Key** — 在 [NGC API Key setup](https://org.ngc.nvidia.com/setup/api-key) 生成一个
*   **CLI output format** — 选择 `json` 或 `ascii`
*   **org** — 按 Enter 键接受默认值

* * *

------------------------------------------------------------------------------------------------------------

下载 **FP8 量化**权重文件。这将用于所有 Jetson 设备：

```bash
cd ~/Projects/CosmosReason
ngc registry model download-version "nim/nvidia/cosmos-reason2-2b:1208-fp8-static-kv8"
```

这将创建一个名为 `cosmos-reason2-2b_v1208-fp8-static-kv8/` 的目录，其中包含模型权重。请注意完整路径 —— 您需要将其作为数据卷挂载到 Docker 容器中。

* * *

----------------------------------------------------------------------------------------------------------------------------

### [](https://huggingface.co/blog/nvidia/cosmos-on-jetson#for-jetson-agx-thor) 适用于 Jetson AGX Thor

```bash
docker pull nvcr.io/nvidia/vllm:26.01-py3
```

### [](https://huggingface.co/blog/nvidia/cosmos-on-jetson#for-jetson-agx-orin--orin-super-nano) 适用于 Jetson AGX Orin / Orin Super Nano

```bash
docker pull ghcr.io/nvidia-ai-iot/vllm:r36.4-tegra-aarch64-cu126-22.04
```

* * *

----------------------------------------------------------------------------------------------------------------------------------------

### [](https://huggingface.co/blog/nvidia/cosmos-on-jetson#option-a-jetson-agx-thor) 选项 A：Jetson AGX Thor

Thor 拥有充足的 GPU 显存，可以以较大的上下文长度运行该模型。

设置已下载模型的路径，并释放主机上的缓存内存：

```bash
MODEL_PATH="$HOME/Projects/CosmosReason/cosmos-reason2-2b_v1208-fp8-static-kv8"
sudo sysctl -w vm.drop_caches=3
```

**挂载模型并启动容器：**

```bash
docker run --rm -it \
  --runtime nvidia \
  --network host \
  --ipc host \
  -v "$MODEL_PATH:/models/cosmos-reason2-2b:ro" \
  -e NVIDIA_VISIBLE_DEVICES=all \
  -e NVIDIA_DRIVER_CAPABILITIES=compute,utility \
  nvcr.io/nvidia/vllm:26.01-py3 \
  bash
```

**在容器内部，激活环境并启动模型服务：**

```bash
vllm serve /models/cosmos-reason2-2b \
  --max-model-len 8192 \
  --media-io-kwargs '{"video": {"num_frames": -1}}' \
  --reasoning-parser qwen3 \
  --gpu-memory-utilization 0.8
```

**注意：** `--reasoning-parser qwen3` 标志启用了思维链 (chain-of-thought) 推理提取。`--media-io-kwargs` 标志用于配置视频帧处理。

等待直到您看到以下输出：

```
INFO:     Uvicorn running on http://0.0.0.0:8000
```

### [](https://huggingface.co/blog/nvidia/cosmos-on-jetson#option-b-jetson-agx-orin) 选项 B：Jetson AGX Orin

AGX Orin 拥有足够的显存，可以使用与 Thor 相同的大参数配置来运行该模型。

设置已下载模型的路径，并释放主机上的缓存内存：

```bash
MODEL_PATH="$HOME/Projects/CosmosReason/cosmos-reason2-2b_v1208-fp8-static-kv8"
sudo sysctl -w vm.drop_caches=3
```

**1. 启动容器：**

```bash
docker run --rm -it \
  --runtime nvidia \
  --network host \
  -v "$MODEL_PATH:/models/cosmos-reason2-2b:ro" \
  -e NVIDIA_VISIBLE_DEVICES=all \
  -e NVIDIA_DRIVER_CAPABILITIES=compute,utility \
  ghcr.io/nvidia-ai-iot/vllm:r36.4-tegra-aarch64-cu126-22.04 \
  bash
```

**2. 在容器内部，激活环境并启动服务：**

```bash
cd /opt/
source venv/bin/activate

vllm serve /models/cosmos-reason2-2b \
  --max-model-len 8192 \
  --media-io-kwargs '{"video": {"num_frames": -1}}' \
  --reasoning-parser qwen3 \
  --gpu-memory-utilization 0.8
```

等待直到您看到以下输出：

```
INFO:     Uvicorn running on http://0.0.0.0:8000
```

### [](https://huggingface.co/blog/nvidia/cosmos-on-jetson#option-c-jetson-orin-super-nano-memory-constrained) 选项 C：Jetson Orin Super Nano（受限于内存）

Orin Super Nano 的内存要少得多，因此我们需要使用激进的内存优化标志。

设置已下载模型的路径，并释放主机上的缓存内存：

```bash
MODEL_PATH="$HOME/Projects/CosmosReason/cosmos-reason2-2b_v1208-fp8-static-kv8"
sudo sysctl -w vm.drop_caches=3
```

**1. 启动容器：**

```bash
docker run --rm -it \
  --runtime nvidia \
  --network host \
  -v "$MODEL_PATH:/models/cosmos-reason2-2b:ro" \
  -e NVIDIA_VISIBLE_DEVICES=all \
  -e NVIDIA_DRIVER_CAPABILITIES=compute,utility \
  ghcr.io/nvidia-ai-iot/vllm:r36.4-tegra-aarch64-cu126-22.04 \
  bash
```

**2. 在容器内部，激活环境并启动服务：**

```bash
cd /opt/
source venv/bin/activate

vllm serve /models/cosmos-reason2-2b \
  --host 0.0.0.0 \
  --port 8000 \
  --trust-remote-code \
  --enforce-eager \
  --max-model-len 256 \
  --max-num-batched-tokens 256 \
  --gpu-memory-utilization 0.65 \
  --max-num-seqs 1 \
  --enable-chunked-prefill \
  --limit-mm-per-prompt '{"image":1,"video":1}' \
  --mm-processor-kwargs '{"num_frames":2,"max_pixels":150528}'
```

**关键标志说明（仅限 Orin Super Nano）：**

| 标志 | 作用 |
| --- | --- |
| `--enforce-eager` | 禁用 CUDA graphs 以节省内存 |
| `--max-model-len 256` | 限制上下文以适应可用内存 |
| `--max-num-batched-tokens 256` | 与模型长度限制保持一致 |
| `--gpu-memory-utilization 0.65` | 为系统进程保留余量 |
| `--max-num-seqs 1` | 每次处理单个请求以最小化内存占用 |
| `--enable-chunked-prefill` | 分块处理预填充 (prefill) 以提高内存效率 |
| `--limit-mm-per-prompt` | 限制每个提示词 (prompt) 最多包含 1 张图像和 1 段视频 |
| `--mm-processor-kwargs` | 减少视频帧数和图像分辨率 |
| `--VLLM_SKIP_WARMUP=true` | 跳过预热 (warmup) 阶段以节省时间和内存 |

等待直到您看到服务器已准备就绪：

```
INFO:     Uvicorn running on http://0.0.0.0:8000
```

### [](https://huggingface.co/blog/nvidia/cosmos-on-jetson#verify-the-server-is-running) 验证服务器是否正在运行

在 Jetson 的另一个终端中：

```bash
curl http://localhost:8000/v1/models
```

您应该能在响应中看到列出的模型。

* * *

----------------------------------------------------------------------------------------------------------------------------

在连接 WebUI 之前，请验证模型是否能正确响应：

```bash
curl -s http://localhost:8000/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "/models/cosmos-reason2-2b",
    "messages": [
      {
        "role": "user",
        "content": "What capabilities do you have?"
      }
    ],
    "max_tokens": 128
  }' | python3 -m json.tool
```

> **提示：** API 请求中使用的模型名称必须与 vLLM 报告的名称一致。请使用 `curl http://localhost:8000/v1/models` 进行验证。

* * *

--------------------------------------------------------------------------------------------------------------------------

[Live VLM WebUI](https://github.com/NVIDIA-AI-IOT/live-vlm-webui) 提供了一个实时的网络摄像头到 VLM 的界面。通过 vLLM 提供 Cosmos Reason 2B 服务，您可以传输网络摄像头画面，并获得带有推理过程的实时 AI 分析。

### [](https://huggingface.co/blog/nvidia/cosmos-on-jetson#install-live-vlm-webui) 安装 Live VLM WebUI

最简单的方法是使用 pip（打开另一个终端）：

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
source $HOME/.local/bin/env
cd ~/Projects/CosmosReason
uv venv .live-vlm --python 3.12
source .live-vlm/bin/activate
uv pip install live-vlm-webui
live-vlm-webui
```

或者使用 Docker：

```bash
git clone https://github.com/nvidia-ai-iot/live-vlm-webui.git
cd live-vlm-webui
./scripts/start_container.sh
```

### [](https://huggingface.co/blog/nvidia/cosmos-on-jetson#configure-the-webui) 配置 WebUI

1.   在浏览器中打开 **`https://localhost:8090`**
2.   接受自签名证书（点击 **高级 (Advanced)** → **继续 (Proceed)**）
3.   在左侧边栏的 **VLM API Configuration** 部分：
    *   将 **API Base URL** 设置为 `http://localhost:8000/v1`
    *   点击 **Refresh** 按钮以检测模型
    *   从下拉菜单中选择 Cosmos Reason 2B 模型

4.   选择您的摄像头并点击 **Start**

WebUI 现在会将您的网络摄像头帧流式传输到 Cosmos Reason 2B，并实时显示模型的分析结果。

### [](https://huggingface.co/blog/nvidia/cosmos-on-jetson#recommended-webui-settings-for-orin) 推荐的 Orin WebUI 设置

由于 Orin 运行时的上下文长度较短，请在 WebUI 中调整以下设置：

*   **Max Tokens**：设置为 **100–150**（较短的响应完成得更快）
*   **Frame Processing Interval**：设置为 **60+**（为模型在帧与帧之间留出处理时间）

* * *

---------------------------------------------------------------------------------------

### [](https://huggingface.co/blog/nvidia/cosmos-on-jetson#out-of-memory-on-orin) Orin 内存不足 (Out of memory)

**问题：** vLLM 因 CUDA 内存不足错误而崩溃。

**解决方案：**

1.   在启动前释放系统内存：

```bash
sudo sysctl -w vm.drop_caches=3
```
2.   降低 `--gpu-memory-utilization`（尝试 `0.55` 或 `0.50`）

3.   进一步减小 `--max-model-len`（尝试 `128`）

4.   确保没有运行其他占用大量 GPU 资源的进程

### [](https://huggingface.co/blog/nvidia/cosmos-on-jetson#model-not-found-in-webui) 在 WebUI 中找不到模型

**问题：** 模型未出现在 Live VLM WebUI 的下拉菜单中。

**解决方案：**

1.   验证 vLLM 是否正在运行：`curl http://localhost:8000/v1/models`
2.   确保 WebUI 的 API Base URL 设置为 `http://localhost:8000/v1`（而不是 `https`）
3.   如果 vLLM 和 WebUI 位于不同的容器中，请使用 `http://<jetson-ip>:8000/v1` 而不是 `localhost`

### [](https://huggingface.co/blog/nvidia/cosmos-on-jetson#slow-inference-on-orin) Orin 推理速度慢

**问题：** 每次响应都需要很长时间。

**解决方案：**

*   在受限于内存的配置下，这是正常现象。Orin 上的 Cosmos Reason 2B FP8 优先考虑适应内存限制，而非速度。
*   在 WebUI 中减少 `max_tokens` 以获得更短、更快的响应。
*   增加帧间隔 (frame interval)，这样模型就不会不断地处理新帧。

### [](https://huggingface.co/blog/nvidia/cosmos-on-jetson#vllm-fails-to-load-model) vLLM 无法加载模型

**问题：** vLLM 报告模型路径不存在或无法加载。

**解决方案：**

*   验证 NGC 下载是否成功完成：`ls ~/Projects/CosmosReason/cosmos-reason2-2b_v1208-fp8-static-kv8/`
*   确保 `docker run` 命令中的卷挂载路径正确。
*   检查模型目录是否以只读模式 (`:ro`) 挂载，并且容器内的路径与传递给 `vllm serve` 的路径相匹配。

* * *

-----------------------------------------------------------------------

在本教程中，我们展示了如何使用 vLLM 在 Jetson 系列设备上部署 **NVIDIA Cosmos Reason 2B** 模型。

Cosmos Reason 2B 的思维链能力与 Live VLM WebUI 的实时流媒体功能相结合，使其成为在边缘端进行视觉 AI 应用原型设计和评估的理想选择。

* * *


-------------------------------------------------------------------------------------------------

*   **NVIDIA Build 上的 Cosmos Reason 2B**：[https://huggingface.co/nvidia/Cosmos-Reason2-2B](https://huggingface.co/nvidia/Cosmos-Reason2-2B)
*   **NGC 模型目录**：[https://catalog.ngc.nvidia.com/](https://catalog.ngc.nvidia.com/)
*   **Live VLM WebUI**：[https://github.com/NVIDIA-AI-IOT/live-vlm-webui](https://github.com/NVIDIA-AI-IOT/live-vlm-webui)
*   **适用于 Jetson Thor 的 vLLM 容器**：[https://ghcr.io/nvidia-ai-iot/vllm:r36.4-tegra-aarch64-cu126-22.04](https://ghcr.io/nvidia-ai-iot/vllm:r36.4-tegra-aarch64-cu126-22.04)
*   **适用于 Jetson AGX Orin 和 Orin Super Nano 的 vLLM 容器**：[https://nvcr.io/nvidia/vllm:26.01-py3](https://nvcr.io/nvidia/vllm:26.01-py3)
*   **NGC CLI 安装程序**：[https://org.ngc.nvidia.com/setup/installers/cli](https://org.ngc.nvidia.com/setup/installers/cli)
*   **Jetson 支持的开源模型**：[https://www.jetson-ai-lab.com/models/](https://www.jetson-ai-lab.com/models/)
*   **Jetson 入门指南**：[https://www.jetson-ai-lab.com/tutorials/](https://www.jetson-ai-lab.com/tutorials/)

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/tool]]
