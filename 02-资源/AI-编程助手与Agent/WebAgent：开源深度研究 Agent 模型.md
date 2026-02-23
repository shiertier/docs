---
title: "WebAgent：开源深度研究 Agent 模型"
对象: "GitHub 项目"
项目主页: "https://github.com/Alibaba-NLP/WebAgent"
Stars快照: "3671"
官方网站: "https://tongyi-agent.github.io/blog/introducing-tongyi-deep-research/"
主要语言: "Python"
开源协议: "Apache-2.0"
---

## 摘要

### 1) 一句话总结
Tongyi DeepResearch 是由通义实验室开源的 Agentic 大语言模型，专为长周期、深度的信息检索与研究任务设计，具备高效的稀疏激活架构与强大的多工具集成能力。

### 2) 核心要点
* **开源与项目数据**：基于 Apache-2.0 协议开源，主要使用 Python 开发，GitHub 仓库目前拥有超 1.8 万 Stars。
* **高效参数架构**：模型（30B-A3B）总参数量为 305 亿，采用稀疏激活机制，每个 token 仅激活 33 亿参数。
* **长上下文支持**：模型支持高达 128K 的上下文长度，适合处理复杂的长周期探索任务。
* **双推理范式**：支持用于评估核心能力的 ReAct 模式，以及利用测试时扩展（test-time scaling）解锁性能上限的 Heavy 模式（基于 IterResearch）。
* **多工具集成**：推理脚本支持配置并调用外部 API，包括网页搜索（Serper）、网页阅读（Jina）、文件解析（Dashscope）及代码沙盒执行。
* **先进训练机制**：采用全自动合成数据管道，结合大规模持续预训练，并使用定制的 GRPO 框架进行端到端的 on-policy 强化学习。
* **典型应用场景**：适用于深度信息检索、自动化文档与网页处理，以及在 Humanity's Last Exam、SimpleQA 等主流 Agentic 基准上进行测试。
* **多样化部署方式**：支持通过 ModelScope/HuggingFace/阿里云百炼进行在线体验，通过 OpenRouter 进行 API 调用，或下载权重进行本地部署。

### 3) 风险与不足
* **在线 Demo 稳定性限制**：官方提供的在线 Demo 受限于模型延迟和工具 QPS 限制，响应时间可能存在波动或出现间歇性失败，不建议用于生产环境。
* **环境依赖冲突风险**：本地部署强烈建议使用 Python 3.10.0 版本，使用其他 Python 版本可能会导致依赖冲突问题。

## 功能与定位

Tongyi DeepResearch 是由 Tongyi Lab 开发的一款开源 Agentic 大语言模型（基于早期的 WebAgent 项目构建）。该模型专为**长周期、深度的信息检索（long-horizon, deep information-seeking）**任务而设计，旨在提供强大的自主搜索与研究能力。

## 典型使用场景

* **深度信息检索与研究**：处理需要长时间跨度、多步骤探索的复杂查询任务。
* **Agent 能力基准测试**：可用于评估模型在 Humanity's Last Exam、BrowseComp、WebWalkerQA、SimpleQA 等主流 Agentic 搜索基准上的表现。
* **自动化文档与网页处理**：结合外部工具进行网页搜索、页面阅读、文件解析及代码沙盒执行。

## 核心功能

* **双推理范式支持**：
  * **ReAct 模式**：用于严格评估模型的核心内在能力。
  * **Heavy 模式（基于 IterResearch）**：采用测试时扩展（test-time scaling）策略，以解锁模型的最大性能上限。
* **长上下文处理**：模型（Tongyi-DeepResearch-30B-A3B）支持高达 128K 的上下文长度。
* **多工具集成推理**：推理脚本支持配置并调用多种外部 API（如 Serper 进行网页搜索、Jina 进行网页阅读、Dashscope 进行文件解析等）。

## 特色与差异点

* **高效的参数架构**：模型总参数量为 305 亿，但采用稀疏激活机制，每个 token 仅激活 33 亿参数（30B-A3B）。
* **全自动合成数据管道**：设计了高可扩展的数据合成管道，全面赋能 Agentic 预训练、监督微调（SFT）和强化学习（RL）。
* **大规模持续预训练**：利用多样化、高质量的 Agentic 交互数据扩展模型能力，保持信息新鲜度并强化推理性能。
* **端到端强化学习**：采用严格的 on-policy 强化学习方法，基于定制的 GRPO（Group Relative Policy Optimization）框架，结合 token 级策略梯度和负样本过滤，以稳定非平稳环境下的训练。

## 使用方式概览

* **在线体验**：可通过 ModelScope、HuggingFace 的在线 Demo 或阿里云百炼（Bailian）服务进行快速探索。
* **第三方 API 调用**：模型已上线 OpenRouter，用户可通过配置 API 密钥实现无 GPU 环境下的云端推理。
* **本地部署与推理**：
  1. 从 HuggingFace 或 ModelScope 下载模型权重。
  2. 配置 Python 独立环境并安装依赖。
  3. 配置 `.env` 文件，填入所需的第三方工具 API 密钥（如搜索、网页读取、大模型总结等）。
  4. 准备 JSON 或 JSONL 格式的评估数据集（支持本地文件引用）。
  5. 运行提供的 Bash 推理脚本。

## 限制与注意事项

* **Demo 稳定性限制**：官方提供的在线 Demo 仅供快速探索，受限于模型延迟和工具 QPS 限制，响应时间可能会有波动或出现间歇性失败。
* **生产环境建议**：为了获得稳定的体验，官方建议进行本地部署；若需生产级服务，推荐使用阿里云百炼并遵循其引导设置。
* **环境依赖要求**：本地部署强烈建议使用 **Python 3.10.0**，使用其他版本可能会导致依赖冲突问题。

## 链接

- 仓库：https://github.com/Alibaba-NLP/WebAgent
- 官网：https://tongyi-agent.github.io/blog/introducing-tongyi-deep-research/

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/github]]
- [[00-元语/mcp]]
- [[00-元语/sdk]]
