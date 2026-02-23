---
title: "StarVector：SVG 生成基础模型"
对象: "GitHub 仓库"
项目主页: "https://github.com/joanrod/star-vector"
官方网站: "https://starvector.github.io/"
论文: "https://arxiv.org/abs/2312.11556"
开源协议: "Apache-2.0"
主要语言: "Python"
来源: "README.md、pyproject.toml、LICENSE（joanrod/star-vector）"
---

## 摘要

StarVector 是一个面向 SVG 生成的多模态视觉语言模型，将图像与文本条件下的矢量图生成统一为代码生成任务，直接输出 SVG 代码。项目开源了 1B/8B 两个模型、对应数据集与基准评测方案，适用于图标、Logo、技术图表等结构化图形场景，并明确不面向自然图像或复杂插画矢量化。

## 功能与定位

StarVector 的核心定位是“从图像或文本生成可用的 SVG 代码”。

根据仓库 README，它支持两类主要任务：
- Image-to-SVG：把输入图像转换成 SVG 代码。
- Text-to-SVG：根据文本指令直接生成 SVG。

项目采用多模态架构，将视觉输入转为视觉 token 后在 SVG 代码空间生成结果，重点是提升生成结果的语义一致性和代码紧凑度，而不只是做像素级拟合。

## 典型使用场景

- 设计资产生产：图标、标志、UI 图形的矢量化与生成。
- 图表与结构化图形生成：技术图、流程图、示意图等。
- SVG 生成研究与评测：基于项目提供的数据集与基准做模型对比。
- 生成系统集成：作为上游模型接入图形处理或内容生产流程。

## 特色与差异点

- 模型与数据配套完整：仓库同时提供模型权重、训练流程和评测基准。
- 多规模模型：提供 StarVector-1B 与 StarVector-8B 两个公开模型。
- 基准与数据集明确：README 给出 SVG-Bench（10 个数据集、3 类任务）与 SVG-Stack（大规模训练数据）说明。
- 明确的任务边界：项目强调在图标、Logo、技术图等结构化图形上更有优势。

## 使用方式概览

- 推理：可通过项目接口或 Hugging Face `AutoModelForCausalLM` 方式加载模型。
- 验证：支持 Hugging Face 后端与 vLLM 后端进行评测。
- 训练：提供预训练与微调脚本，并区分 1B 与 8B 的训练配置路径。
- 演示：提供基于 Gradio 的交互式 Demo 方案。

## 限制与注意事项

- README 明确指出：当前模型不适用于自然图像或复杂插画的矢量化。
- 文档中的性能结论来自项目自述与其公开基准，实际效果仍需在目标业务数据上复核。
- 若用于生产，应补齐资源规划、服务监控、版本固定与回滚策略。

## 链接

- 仓库主页：https://github.com/joanrod/star-vector
- 项目官网：https://starvector.github.io/
- 论文页面：https://arxiv.org/abs/2312.11556
- 模型集合：https://huggingface.co/collections/starvector/starvector-models-6783b22c7bd4b43d13cb5289
- 数据集集合：https://huggingface.co/collections/starvector/starvector-svg-datasets-67811204a76475be4dd66d09
- 许可证文件：https://github.com/joanrod/star-vector/blob/main/LICENSE

## 关联主题

- [[00-元语/AI]]
- [[00-元语/github]]
- [[00-元语/multimodal]]
- [[00-元语/llm]]
- [[00-元语/tool]]
