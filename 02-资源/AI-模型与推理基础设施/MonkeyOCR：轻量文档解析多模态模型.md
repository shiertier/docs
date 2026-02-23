---
title: MonkeyOCR：轻量文档解析多模态模型
对象: GitHub 仓库
项目主页: https://github.com/Yuliang-Liu/MonkeyOCR
来源:
  - https://github.com/Yuliang-Liu/MonkeyOCR/blob/main/README.md
  - https://github.com/Yuliang-Liu/MonkeyOCR/blob/main/docs/install_cuda_pp.md
  - https://github.com/Yuliang-Liu/MonkeyOCR/blob/main/docs/Quantization.md
---

## 摘要

MonkeyOCR 是一款面向中英文文档解析的多模态模型，采用 Structure-Recognition-Relation（SRR）范式，目标是在复杂文档场景下同时兼顾结构化解析能力与推理效率。项目提供 MonkeyOCR、MonkeyOCR-pro-3B、MonkeyOCR-pro-1.2B 等模型形态，并支持命令行、Gradio、FastAPI 与 Docker 等多种使用方式。

根据项目 README 与文档声明，MonkeyOCR-pro-1.2B 在速度上相较 pro-3B 有明显提升，同时保留较强解析能力；推理后端可选 LMDeploy、vLLM 与 transformers，官方文档给出 LMDeploy ≥ vLLM >>> transformers 的内部测试结论。项目同时给出了 AWQ 量化路径与多硬件运行参考，但当前版本对拍照文本、手写体、繁体中文与多语支持仍有限，且版权声明标注为学术研究和非商业用途。

## 功能与定位

MonkeyOCR 的核心定位是“文档解析多模态模型”，面向 PDF 与图像文档中的文本、公式、表格等结构化内容提取。项目强调通过 SRR（Structure-Recognition-Relation）范式降低传统多工具流水线的复杂度。

## 典型使用场景

- 学术论文、技术文档、财报等复杂排版 PDF 的结构化解析。
- 对目录、批量文件执行统一解析并输出可继续加工的 Markdown/JSON 结果。
- 只针对单一任务做抽取，例如仅文本识别、仅公式识别、仅表格识别。

## 核心功能

- 提供多模型规格：MonkeyOCR、MonkeyOCR-pro-3B、MonkeyOCR-pro-1.2B。
- 支持多种输出结果：Markdown、版面可视化 PDF、中间块级 JSON。
- 提供多种服务形态：CLI、Gradio、FastAPI、Docker。
- 支持 AWQ 量化与后端切换（LMDeploy、vLLM、transformers）。

## 特色与差异点

- 官方材料将 SRR 作为架构重点，用于兼顾结构理解与关系建模。
- README 给出多种 GPU（如 3090、4090、A6000、H800）下的 pages/s 速度参考。
- 项目文档给出后端速度排序（LMDeploy ≥ vLLM >>> transformers），便于部署时做性能取舍。
- 社区反馈中出现更多硬件可运行案例（如 V100、2080Ti、50 系、NPU），可作为兼容性参考线索。

## 使用方式概览

- 本地模式：安装依赖与模型后，通过 `parse.py` 处理单文件、目录或分组批量任务。
- 服务模式：可使用 Gradio 提供交互式页面，或使用 FastAPI 暴露接口服务。
- 容器模式：仓库提供 Dockerfile 与 compose 配置，适合复现与部署。
- 推理后端：可按环境选 LMDeploy、vLLM 或 transformers，并参考官方文档中的兼容说明。
- 量化路径：仓库提供 AWQ 文档与工具脚本，适合显存受限场景的模型压缩实践。

## 限制与注意事项

- 项目声明当前对拍照文本、手写体、繁体中文、多语内容支持仍不完整。
- README 中的性能数据与硬件兼容说明主要来自项目方测试与社区反馈，使用前建议按自身数据集复测。
- 版权声明标注该模型用于学术研究和非商业用途；落地前需自行核对许可边界。

## 链接

- GitHub 仓库：https://github.com/Yuliang-Liu/MonkeyOCR
- README：https://github.com/Yuliang-Liu/MonkeyOCR/blob/main/README.md
- 安装文档（CUDA + 后端）：https://github.com/Yuliang-Liu/MonkeyOCR/blob/main/docs/install_cuda_pp.md
- 量化文档（AWQ）：https://github.com/Yuliang-Liu/MonkeyOCR/blob/main/docs/Quantization.md
- 模型权重（Hugging Face）：https://huggingface.co/echo840/MonkeyOCR
- 模型权重（ModelScope）：https://modelscope.cn/models/l1731396519/MonkeyOCR
- 论文（MonkeyOCR）：https://arxiv.org/abs/2506.05218
- 技术报告（MonkeyOCR v1.5）：https://arxiv.org/abs/2511.10390
