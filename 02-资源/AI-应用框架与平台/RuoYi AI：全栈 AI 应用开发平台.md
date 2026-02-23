---
title: "RuoYi AI：全栈 AI 应用开发平台"
对象: "GitHub 仓库 ageerle/ruoyi-ai"
项目主页: "https://github.com/ageerle/ruoyi-ai"
官方文档: "https://doc.pandarobot.chat"
开源协议: "MIT"
来源: "README.md、README_EN.md、docs/工作流模块说明.md、docs/RuoYi-AI 后端部署教程（Docker 部署版）.md、pom.xml、LICENSE、tags"
---

## 摘要

- RuoYi AI 是一个基于 Java 17 和 Vue 3 的开源全栈 AI 应用开发平台，重点提供多模型接入、知识库问答（RAG）和可视化工作流编排能力。
- 项目强调与 FastGPT、扣子（Coze）、DIFY 的集成，并提供统一聊天接口与 SSE/WebSocket 流式对话能力。
- 从仓库文档可见，该项目面向需要本地化部署与企业内部 AI 落地的团队，提供 Docker 部署文档与模块化后端结构。

## 功能与定位

RuoYi AI 在 README 中定位为企业级 AI 助手平台，目标是让团队在统一框架内完成模型接入、知识库能力和业务流程编排。仓库资料显示其后端采用 Spring Boot 3.4、Spring AI 与 Langchain4j，前端采用 Vue 3，并围绕 AI 对话、RAG、工作流、知识图谱与数字人能力进行整合。

## 典型使用场景

- 企业内部 AI 助手与统一对话入口。
- 基于私有知识库的问答与检索增强生成（RAG）。
- 需要条件分支和多步骤节点的可视化 AI 工作流自动化。
- 需要在 Java 技术栈中集成多家 AI 平台能力（FastGPT、Coze、DIFY）的项目。

## 特色与差异点

- 多平台集成导向：仓库文档明确列出 FastGPT、Coze、DIFY 的集成能力。
- 工作流模块化：`docs/工作流模块说明.md` 给出基于 LangGraph4j 的工作流设计与节点体系，覆盖模型、检索、分支、人机交互和外部 HTTP 调用等类型。
- 工程化结构清晰：根 `pom.xml` 显示采用 Maven 聚合模块（`ruoyi-common`、`ruoyi-modules`、`ruoyi-modules-api`、`ruoyi-admin`、`ruoyi-extend`）。
- 开源协议明确：`LICENSE` 为 MIT。

## 使用方式概览

- 先阅读仓库 README 与官方文档，确认系统组成和模块边界。
- 按业务需求选择模型与平台集成方案，再规划知识库与工作流节点配置。
- 若走容器化路线，可参考仓库内 Docker 部署文档完成后端服务部署。

## 限制与注意事项

- 项目能力说明以仓库文档为准；README 中部分描述属于功能宣称，落地前需按实际版本验证。
- 后端技术栈与部署文档对运行环境有前置要求（如 Java 17、Docker/Compose、操作系统条件）。
- 本文只做定位与选型信息整理，不复述部署命令与接口调用细节。

## 链接

- 仓库主页：https://github.com/ageerle/ruoyi-ai
- 仓库 README（中文）：https://github.com/ageerle/ruoyi-ai/blob/main/README.md
- 仓库 README（英文）：https://github.com/ageerle/ruoyi-ai/blob/main/README_EN.md
- 工作流模块说明：https://github.com/ageerle/ruoyi-ai/blob/main/docs/%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%A8%A1%E5%9D%97%E8%AF%B4%E6%98%8E.md
- 后端 Docker 部署文档：https://github.com/ageerle/ruoyi-ai/blob/main/docs/RuoYi-AI%20%E5%90%8E%E7%AB%AF%E9%83%A8%E7%BD%B2%E6%95%99%E7%A8%8B%EF%BC%88Docker%20%E9%83%A8%E7%BD%B2%E7%89%88%EF%BC%89.md
- 官方文档：https://doc.pandarobot.chat
- License：https://github.com/ageerle/ruoyi-ai/blob/main/LICENSE
- 标签列表：https://github.com/ageerle/ruoyi-ai/tags

## 关联主题

- [[00-元语/github]]
- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/rag]]
- [[00-元语/mcp]]
- [[00-元语/workflow]]
