---
title: "Langchain-Chatchat：开源、可离线部署的 RAG 与 Agent 应用项目"
对象: "GitHub 项目"
项目主页: "https://github.com/chatchat-space/Langchain-Chatchat"
Stars快照: "3752"
主要语言: "Python"
开源协议: "Apache-2.0"
---

## 摘要

**1) 一句话总结**
Langchain-Chatchat 是一款基于 Python 和 Langchain 框架的开源（Apache-2.0）本地知识库问答应用，专注于提供支持纯离线部署、多模型接入的 RAG（检索增强生成）与 Agent 解决方案。

**2) 核心要点**
* **开源与热度**：采用 Apache-2.0 协议，GitHub 拥有超 3.7 万 Stars，主要开发语言为 Python。
* **核心功能**：提供完整的 RAG 流程（涵盖文件加载、分割、向量化、BM25+KNN检索及生成），支持构建保障数据隐私的私有知识库问答系统。
* **广泛的模型接入**：支持 Xinference、Ollama 等本地推理框架，以及通过 One API 接入 OpenAI、Claude、智谱等在线大模型，所有接口均兼容 OpenAI SDK 标准。
* **多模态与 Agent 支持**：支持图片对话、搜索引擎、数据库及文献检索等工具交互，并针对 ChatGLM3 和 Qwen 模型优化了 Agent 任务处理能力。
* **硬件与跨平台兼容**：支持 Windows、macOS、Linux 系统（Python 3.8-3.11），可在 CPU、GPU、NPU、MPS 等多种异构硬件上运行。
* **开箱即用**：提供基于 Streamlit 的可视化 WebUI，无需进行模型微调或训练即可直接使用，支持 pip、源码及 Docker 多种部署方式。

**3) 风险与不足**
* **依赖冲突风险**：与模型部署框架（如 Xinference）共用环境易产生冲突，强烈建议分别部署在独立的 Python 虚拟环境中。
* **网络访问限制**：默认监听地址为 `127.0.0.1`（仅限本机访问），需手动修改配置文件为 `0.0.0.0` 才能对外提供服务。
* **Windows 兼容性问题**：在 Windows 环境下构建知识库时，可能因 `python-magic-bin` 依赖导致进程卡死，需手动重新安装特定版本。
* **版本迁移风险**：0.3.x 版本架构变化较大，旧版（0.2.x）迁移不保证 100% 兼容，官方强烈建议重新部署而非直接升级。

## 功能与定位

Langchain-Chatchat（原名 Langchain-ChatGLM）是一个基于大语言模型（如 ChatGLM、Qwen、Llama 等）与 Langchain 框架实现的本地知识库问答应用。其核心目标是提供一套对中文场景与开源模型支持友好、可完全离线运行的 RAG（检索增强生成）与 Agent 解决方案。

## 典型使用场景

* **企业/个人私有知识库问答**：利用本地文档构建离线问答系统，在保障数据隐私的前提下进行信息检索与问答。
* **多模态与多工具交互**：支持图片对话（推荐使用 qwen-vl-chat 等模型）、搜索引擎对话、数据库对话、ARXIV 文献检索及 Wolfram 运算。
* **智能体（Agent）任务处理**：通过 LLM 自动或手动调用外部工具完成复杂任务（针对 ChatGLM3 和 Qwen 模型进行了专门优化）。

## 核心功能

* **完整的 RAG 流程**：涵盖文件加载、文本分割、向量化、问句向量化、相似度检索（支持 BM25+KNN 等多种检索方式），并结合 Prompt 交由 LLM 生成回答。
* **广泛的模型与框架接入**：
  * **本地部署框架**：支持接入 Xinference、Ollama、LocalAI、FastChat 等主流推理框架，可加载 LLM、Embedding、Rerank 及多模态模型。
  * **在线 API 接入**：支持通过 One API 接入 OpenAI、Azure OpenAI、Anthropic Claude、智谱清言、百川等在线大模型。
* **多类型对话支持**：涵盖基础 LLM 对话、知识库对话、文件对话（统一为 File RAG 功能）、文生图等。
* **可视化交互界面**：提供基于 Streamlit 的 WebUI，支持多会话管理、自定义系统提示词及本地知识库管理。

## 特色与差异点

* **纯离线私有部署**：支持市面主流开源 LLM、Embedding 模型与向量数据库，可实现全流程断网运行，无需依赖外部 API。
* **硬件兼容性广**：支持在 CPU、GPU、NPU、MPS 等多种异构硬件条件下运行。
* **接口标准化**：所有模型接入均兼容 OpenAI SDK 接口标准。
* **开箱即用**：项目本身不涉及模型微调或训练过程，直接通过 RAG 技术提升问答准确性（但也兼容用户自行微调后的模型）。

## 使用方式概览

* **环境要求**：支持 Python 3.8-3.11 环境，兼容 Windows、macOS、Linux 操作系统。
* **安装方式**：提供 `pip install langchain-chatchat -U`（支持附加特定框架依赖如 `[xinference]`）、源码部署及 Docker 镜像部署（推荐使用 docker-compose）。
* **初始化与启动流程**：
  1. 启动第三方模型推理框架（如 Xinference）并加载所需模型。
  2. 使用 `chatchat init` 初始化配置与数据目录，生成本地 `yaml` 配置文件。
  3. 修改配置文件以匹配选用的模型推理框架、模型名称和知识库路径。
  4. 使用 `chatchat kb -r` 初始化并构建知识库。
  5. 使用 `chatchat start -a` 启动 WebUI 服务。

## 限制与注意事项

* **环境隔离**：强烈建议将 Langchain-Chatchat 与模型部署框架（如 Xinference）放在不同的 Python 虚拟环境中（如 conda, venv）以避免依赖冲突。
* **网络访问限制**：默认监听地址为 `127.0.0.1`，仅限本机访问。如需局域网或公网访问（如部署在 Linux 服务器上），需在配置文件中将监听地址修改为 `0.0.0.0`。
* **Windows 兼容性问题**：在 Windows 下新建虚拟环境构建知识库时，可能会遇到 `python-magic-bin` 依赖导致进程卡死的问题，需重新安装特定版本的该依赖包予以解决。
* **版本迁移风险**：0.3.x 版本架构变化较大，官方强烈建议重新部署而非直接升级，旧版（0.2.x）迁移不保证 100% 兼容。

## 链接

- 仓库：https://github.com/chatchat-space/Langchain-Chatchat

## 关联主题

- [[00-元语/AI]]
- [[00-元语/workflow]]
- [[00-元语/github]]
- [[00-元语/sdk]]
- [[00-元语/rag]]
