---
title: Bagel：统一多模态生成模型
对象: GitHub 仓库
仓库: https://github.com/ByteDance-Seed/Bagel
官网: https://bagel-ai.org/
模型页: https://huggingface.co/ByteDance-Seed/BAGEL-7B-MoT
论文: https://arxiv.org/abs/2505.14683
许可证: Apache 2.0
---

## 摘要

Bagel 是由 ByteDance-Seed 开源的 14B 参数（7B 激活）多模态基础模型，目标是统一多模态理解与生成，并向 world-modeling 场景扩展。

- 模型在单一体系中融合视觉理解、文本生成图像与图像编辑能力。
- 仓库提供理解、生成、编辑三类任务的基准对比，并给出多项公开评测结果。
- 工程侧提供推理示例、训练配方和评测脚本，便于复现与二次开发。
- 部分评测流程依赖外部评测服务或第三方 API key。

## 功能与定位

Bagel 是面向多模态理解与生成的一体化基础模型项目。根据 README，项目当前公开模型为 7B 激活参数（14B 总参数），并在视觉理解、文本生成图像、图像编辑等任务上给出统一能力定位。

## 典型使用场景

- 多模态理解：对图像与文本混合输入进行问答、分析和推理。
- 文本生成图像：按提示词生成图像内容。
- 图像编辑：基于文本指令完成修改、补全或属性调整。
- 研究评测：在 KRIS、RISE、GenEval、WISE 等基准上进行对比测试。

## 核心功能

- 推理与体验：仓库提供本地运行入口与 Gradio WebUI 示例。
- 训练支持：提供 pre-training 与 fine-tuning 的基线流程和关键参数说明。
- 评测支持：提供多类 benchmark 的数据准备说明与脚本入口。
- 生态入口：同步提供官网、论文、模型权重和在线演示页面。

## 特色与差异点

- 统一多模态路径：在同一项目中覆盖理解、生成与编辑三类能力。
- 文档完整度较高：除 README 外，另有 TRAIN 与 EVAL 文档分别覆盖训练与评测。
- 面向资源约束给出模式建议：README 中提供不同显存区间下的推理模式说明。

## 使用方式概览

- 按 README 准备运行环境并下载官方发布的模型权重。
- 通过仓库提供的应用入口进行本地推理体验。
- 需要训练或评测时，分别参考 TRAIN 与 EVAL 文档中的流程说明与脚本入口。

## 限制与注意事项

- 项目中的多项能力描述与对比数据来自仓库维护方公开材料，使用时应结合自身任务复测。
- 部分评测流程依赖外部评测服务或第三方 API key，离线环境下可能无法完整复现。
- 仓库含多种运行模式与参数配置，不同硬件条件下的效果和稳定性可能存在差异。

## 链接

- 仓库：https://github.com/ByteDance-Seed/Bagel
- README：https://github.com/ByteDance-Seed/Bagel/blob/main/README.md
- TRAIN：https://github.com/ByteDance-Seed/Bagel/blob/main/TRAIN.md
- EVAL：https://github.com/ByteDance-Seed/Bagel/blob/main/EVAL.md
- 官网：https://bagel-ai.org/
- 模型页：https://huggingface.co/ByteDance-Seed/BAGEL-7B-MoT
- 演示：https://demo.bagel-ai.org/
- 论文：https://arxiv.org/abs/2505.14683
