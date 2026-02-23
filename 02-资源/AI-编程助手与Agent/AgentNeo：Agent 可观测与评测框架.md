---
title: AgentNeo：Agent 可观测与评测框架
对象: GitHub 仓库
仓库: https://github.com/raga-ai-hub/AgentNeo
项目主页: https://catalyst.raga.ai/
源码许可: Apache-2.0
来源: README、quickstart、docs（agentic_tracing/trace_management/dataset_management/prompt_management）
---

## 摘要

AgentNeo（仓库内文档当前以 RagaAI Catalyst 命名）是面向 LLM 与 Agent 应用的可观测与评测框架，覆盖追踪、评估、数据集管理和 Prompt 管理等关键环节，可用于定位质量问题、分析调用链路与优化成本表现。

## 功能与定位

该项目定位为一套用于 LLM/Agent 应用治理的 Python SDK 与平台能力集合。根据仓库文档，其核心范围包括项目管理、数据集管理、评估管理、Trace 管理、Agentic Tracing、Prompt 管理、合成数据生成、Guardrail 与红队测试。

## 典型使用场景

- 对 RAG 或问答系统进行质量评测（如忠实度、幻觉相关指标）。
- 对 Agent 工作流做端到端观测，查看工具调用、Token 消耗和多步决策链路。
- 在迭代过程中做性能与成本追踪，辅助定位瓶颈与回归。
- 在多版本提示词场景中进行 Prompt 模板与变量管理。

## 特色与差异点

- 提供 Agent 场景专用的追踪能力，除常规 LLM 调用外，还覆盖工具与流程层面的可观测信号。
- 支持多框架自动追踪接入，文档列出 LangGraph、LangChain、Smolagents、OpenAI Agents、LlamaIndex、Haystack 等类型。
- 数据集导入支持 schema mapping，可把 CSV/JSONL/DataFrame 的字段映射到统一评测结构。
- 支持 Span/Trace 粒度的上下文与指标补充，便于做更细粒度的质量诊断。

## 使用方式概览

- 安装：通过 Python 包 `ragaai-catalyst` 安装 SDK。
- 鉴权：在平台生成 Access Key/Secret Key 后初始化客户端。
- 追踪：根据应用框架选择 tracer 类型，使用自动或自定义方式采集运行轨迹。
- 评测：定义 schema mapping 与指标配置后执行评测，并读取状态与结果。
- Prompt：按项目管理 Prompt、变量与版本，再编译生成可执行提示词。

## 限制与注意事项

- 项目能力依赖有效鉴权，未配置密钥无法执行主要操作。
- Prompt 编译存在严格变量校验，变量缺失、多余或类型不匹配会触发错误。
- 数据集导入质量依赖 schema 映射正确性，字段映射不当会影响后续评测结果。
- 仓库名为 AgentNeo，但当前文档主体仍大量使用 RagaAI Catalyst 命名；落地前建议按实际版本再次核对命名与接口变更。

## 链接

- https://github.com/raga-ai-hub/AgentNeo
- https://catalyst.raga.ai/
- https://github.com/raga-ai-hub/AgentNeo/blob/main/README.md
- https://github.com/raga-ai-hub/AgentNeo/blob/main/quickstart.md

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/observability]]
- [[00-元语/evals]]
- [[00-元语/sdk]]
