---
title: '全新 NVIDIA Nemotron 3 Super 为智能体 AI 提供 5 倍吞吐量提升'
发布日期: 2026-03-11
来源: 'NVIDIA'
原文链接: 'https://blogs.nvidia.com/blog/nemotron-3-super-agentic-ai/'
作者: 'NVIDIA'
译注: '原文无可用官方中文正文，使用 Gemini 翻译并经助手最小必要校对整理。'
---

## 摘要

**1) 一句话总结**
NVIDIA 发布了专为智能体 AI 设计的开源 1200 亿参数混合专家模型 Nemotron 3 Super，通过创新的混合架构和 100 万 Token 上下文窗口，有效解决了多智能体工作流中的上下文爆炸和高昂推理成本问题，实现了 5 倍的吞吐量提升。

**2) 关键要点**
*   **模型规模与架构**：包含 1200 亿总参数（推理时仅激活 120 亿），采用结合 Mamba 层（提供 4 倍内存和计算效率）与 Transformer 层（驱动高级推理）的混合专家 (MoE) 架构。
*   **显著的性能提升**：相比上一代 Nemotron Super 模型，吞吐量提升高达 5 倍，准确率提升高达 2 倍；在 NVIDIA Blackwell 平台上以 NVFP4 精度运行，推理速度比 Hopper 架构上的 FP8 快高达 4 倍且无精度损失。
*   **核心技术创新**：引入“潜在 MoE (Latent MoE)”（以 1 个专家的成本激活 4 个专家以提高准确率）和“多 Token 预测”（同时预测多个未来词，使推理速度提升 3 倍）。
*   **超长上下文能力**：具备 100 万 Token 的上下文窗口，支持一次性加载整个代码库或数千页财务报告，允许智能体在内存中保留完整工作流状态。
*   **全面开源与开放**：在宽松许可证下发布模型权重，并开放了超过 10 万亿 Token 的预训练/后训练合成数据集、15 个强化学习环境及完整的训练方法论。
*   **广泛的生态支持**：模型被打包为 NVIDIA NIM 微服务，可通过 build.nvidia.com、Hugging Face、OpenRouter 访问，并已接入 Google Cloud、Oracle 等云服务商及多家推理服务平台。
*   **企业级应用落地**：已被 Perplexity、Siemens、Palantir、CodeRabbit 等企业集成，用于搜索模型编排、端到端代码生成、生命科学研究及工业工作流自动化。

**3) 风险与缺口（基于原文明确提及的行业痛点）**
*   **上下文爆炸与目标偏移**：多智能体工作流生成的 Token 数量比标准聊天多出高达 15 倍，在长时间任务中会导致成本激增，并容易导致智能体偏离最初的目标（目标偏移）。
*   **“思考税”导致应用受阻**：复杂的智能体需要在每一步进行推理，若为每个子任务都调用大型模型，会使多智能体应用变得过于昂贵且迟缓，难以投入实际生产。
*   **高风险环境下的执行错误**：在网络安全等高风险的自主编排环境中，若模型缺乏高精度的工具调用能力，智能体在浏览海量函数库时极易发生严重的执行错误。

## 正文

一款专为 NVIDIA Blackwell 优化的全新、开源、1200 亿参数混合专家模型，解决了拖慢自主智能体工作流的长时间思考成本和上下文爆炸问题。

![Image 22](https://blogs.nvidia.com/wp-content/uploads/2026/03/nemotron-3-super-1920x1080-1-1280x720.jpg)

今日发布的 NVIDIA Nemotron 3 Super 是一款拥有 1200 亿参数（其中 120 亿为激活参数）的开放模型，专为大规模运行复杂的智能体 AI（Agentic AI）系统而设计。

该模型现已可用，它结合了先进的推理能力，能够为自主智能体高效、高精度地完成任务。

**AI 原生公司：** Perplexity 为其用户提供 Nemotron 3 Super 用于搜索，并将其作为 Computer 中 20 个协同编排的模型之一。提供软件开发智能体的公司（如 [CodeRabbit](https://www.coderabbit.ai/blog/faster-code-reviews-with-nemotron-3-super)、Factory 和 [Greptile](http://greptile.com/blog/nvidia-nemotron-super-in-code-review)）正在将该模型与其专有模型一起集成到他们的 AI 智能体中，以更低的成本实现更高的准确率。此外，Edison Scientific 和 Lila Sciences 等生命科学和前沿 AI 组织将利用该模型为其智能体提供动力，用于深度文献检索、数据科学和分子理解。

**企业软件平台：** Amdocs、Palantir、Cadence、Dassault Systèmes 和 [Siemens](https://www.siemens.com/en-us/products/fuse-eda-ai-system/) 等行业领导者正在部署和定制该模型，以实现电信、网络安全、半导体设计和制造领域的工作流自动化。

随着企业超越聊天机器人并迈向多智能体应用，他们遇到了两个限制。

第一个是上下文爆炸。多智能体工作流生成的 Token 数量比标准聊天多出高达 [15 倍](https://www.anthropic.com/engineering/multi-agent-research-system)，因为每次交互都需要重新发送完整的历史记录，包括工具输出和中间推理过程。

在长时间的任务中，这种上下文数据量会增加成本，并可能导致目标偏移（即智能体偏离最初的目标）。

第二个是思考税（thinking tax）。复杂的智能体必须在每一步进行推理，但为每个子任务都使用大型模型会使多智能体应用变得过于昂贵且迟缓，难以投入实际应用。

Nemotron 3 Super 拥有 100 万 Token 的上下文窗口，允许智能体在内存中保留完整的工作流状态，从而防止目标偏移。

Nemotron 3 Super 树立了新标准，在 Artificial Analysis 的效率和开放性排名中占据榜首，并在同等规模模型中保持领先的准确率。

该模型还助力 [NVIDIA AI-Q](https://build.nvidia.com/nvidia/aiq) 研究智能体在 [DeepResearch Bench](https://huggingface.co/spaces/muset-ai/DeepResearch-Bench-Leaderboard) 和 [DeepResearch Bench II](https://agentresearchlab.com/benchmarks/deepresearch-bench-ii/index.html#leaderboard) 排行榜上荣登榜首，这些基准测试旨在衡量 AI 系统在大型文档集中进行彻底的、多步骤研究同时保持推理连贯性的能力。

**混合架构**
-----------------------

Nemotron 3 Super 采用混合专家 (MoE) 架构，结合了三大创新，与之前的 Nemotron Super 模型相比，吞吐量提升高达 5 倍，准确率提升高达 2 倍。

*   **混合架构：** Mamba 层提供 4 倍的内存和计算效率，而 Transformer 层则驱动高级推理。
*   **MoE：** 在其 1200 亿个参数中，推理时仅激活 120 亿个。
*   **潜在 MoE (Latent MoE)：** 一项新技术，通过在推理生成下一个 Token 时以一个专家的成本激活四个专家，从而提高准确率。
*   **多 Token 预测：** 同时预测多个未来的词，使推理速度提升 3 倍。

在 NVIDIA Blackwell 平台上，该模型以 NVFP4 精度运行。这降低了内存需求，并使推理速度比 NVIDIA Hopper 上的 FP8 快高达 4 倍，且准确率没有任何损失。

**开放权重、数据和配方**
----------------------------------

NVIDIA 正在宽松的许可证下发布带有开放权重的 Nemotron 3 Super。开发者可以在工作站、数据中心或云端部署和定制该模型。

该模型使用前沿推理模型生成的合成数据进行训练。NVIDIA 正在发布完整的方法论，包括超过 10 万亿 Token 的预训练和后训练数据集、15 个用于强化学习的训练环境以及评估配方。研究人员可以进一步使用 NVIDIA NeMo 平台微调模型或构建自己的模型。

**在智能体系统中的应用**
--------------------------

Nemotron 3 Super 专为处理多智能体系统内部的复杂子任务而设计。

软件开发智能体可以一次性将整个代码库加载到上下文中，从而实现端到端的代码生成和调试，而无需进行文档分割。

在财务分析中，它可以将数千页的报告加载到内存中，消除了在长对话中重新推理的需要，从而提高了效率。

Nemotron 3 Super 具有高精度的工具调用能力，可确保自主智能体可靠地浏览海量函数库，以防止在高风险环境中（如网络安全中的自主安全编排）发生执行错误。

**可用性******
--------------------

NVIDIA Nemotron 3 Super 是 [Nemotron 3 家族](https://nvidianews.nvidia.com/news/nvidia-debuts-nemotron-3-family-of-open-models)的一部分，可通过 [build.nvidia.com](https://build.nvidia.com/nvidia/nemotron-3-super-120b-a12b)、[Perplexity](http://perplexity.ai/)、[OpenRouter](https://openrouter.ai/nvidia/nemotron-3-super-120b-a12b:free) 和 [Hugging Face](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Super-120B-A12B-FP8) 访问。戴尔科技（Dell Technologies）正在将该模型引入 Hugging Face 上的 Dell Enterprise Hub，并针对 Dell AI Factory 的本地部署进行了优化，从而推进多智能体 AI 工作流。[HPE](https://community.hpe.com/t5/the-cloud-experience-everywhere/operationalizing-agentic-ai-with-nvidia-nemotron-and-hpe-agents/ba-p/7262654) 也正在将 NVIDIA Nemotron 引入其智能体中心，以帮助确保企业能够可扩展地采用智能体 AI。

企业和开发者可以通过以下几个合作伙伴部署该模型：

*   **云服务提供商**：Google Cloud 的 Vertex AI 和 Oracle Cloud Infrastructure，并即将通过 Amazon Bedrock 登陆 Amazon Web Services 以及 Microsoft Azure。
*   **NVIDIA 云合作伙伴**：Coreweave、[Crusoe](https://www.crusoe.ai/cloud/managed-inference)、[Nebius](https://nebius.com/blog/posts/nemotron3-super-now-available) 和 [Together AI](https://www.together.ai/blog/nvidia-nemotron-3-super)。
*   **推理服务提供商**：[Baseten](https://www.baseten.co/blog/introducing-nemotron-3-super)、[Cloudflare](https://developers.cloudflare.com/changelog/post/2026-03-11-nemotron-3-super-workers-ai)、[DeepInfra](https://deepinfra.com/blog/nvidia-nemotron-3-super-release)、[Fireworks AI,](https://app.fireworks.ai/models/fireworks/nvidia-nemotron-3-super-120b-a12b-fp8)[Inference.net](http://inference.net/blog/nemotron-finetuning)、[Lightning AI](https://lightning.ai/nvidia-nemotron-3-super)、[Modal](https://modal.com/docs/examples/nemotron_inference) 和 [FriendliAI](https://friendli.ai/blog/nvidia-nemotron-3-super)。
*   **数据平台和服务**：Distyl、Dataiku、DataRobot、Deloitte（德勤）、EY（安永）和 Tata Consultancy Services（塔塔咨询服务）。

该模型被打包为 [NVIDIA NIM](https://www.nvidia.com/en-us/ai-data-science/products/nim-microservices/) 微服务，允许从本地系统部署到云端。

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/Agent]]
- [[00-元语/benchmark]]
- [[00-元语/GPU互连]]
