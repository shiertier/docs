---
title: 'NVIDIA 借助智能体 AI 蓝图和电信推理模型推动自治网络发展'
发布日期: 2026-03-01
来源: 'NVIDIA'
原文链接: 'https://blogs.nvidia.com/blog/nvidia-agentic-ai-blueprints-telco-reasoning-models/'
作者: 'NVIDIA'
译注: '原文无可用官方中文正文，使用 Gemini 翻译并经助手最小必要校对整理。'
---

## 摘要

**1) 一句话总结**
NVIDIA 推出了全新的开源 300 亿参数大型电信模型（LTM）、实施指南以及智能体 AI 蓝图，旨在帮助电信运营商利用自有数据安全地构建和部署自治网络。

**2) 关键要点**
*   **开源大型电信模型 (LTM)**：NVIDIA 与 AdaptKey AI 合作发布了基于 Nemotron 3 系列的 300 亿参数开源模型，该模型使用开源电信数据集微调，专为故障隔离、修复规划和变更验证等电信工作流设计。
*   **GSMA 合作发布**：作为 GSMA 全新 Open Telco AI 倡议的一部分，NVIDIA 将通过该行业组织将 LTM、实施指南和智能体 AI 蓝图作为开放资源发布。
*   **NOC 智能体构建指南**：NVIDIA 与 Tech Mahindra 联合发布开源指南，利用 NVIDIA NeMo-Skills 管道教导 AI 模型像网络运营中心（NOC）工程师一样进行推理和决策。
*   **RAN 节能蓝图**：该蓝图集成了 VIAVI 的 TeraVM AI RSG 平台以生成合成网络数据，使 AI 智能体能够在闭环仿真中安全验证 5G 无线接入网（RAN）的节能策略，而不会影响实时配置或用户。
*   **网络配置蓝图应用 (Cassava)**：Cassava Technologies 正在非洲部署该蓝图，构建包含三个智能体的平台，用于监控网络、应用变更，并在产生意外效果时安全回滚变更。
*   **网络配置蓝图应用 (NTT DATA)**：NTT DATA 正与日本一家一级运营商合作部署该蓝图，通过 AI 智能体实时决策特定小区的用户接入，以管理网络中断后的流量激增。
*   **多智能体编排合作**：NVIDIA 与 BubbleRAN 结合 NeMo Agent Toolkit (NAT) 和 BubbleRAN Agentic Toolkit (BAT) 增强网络配置蓝图，Telenor Group 成为首家采用该联合方案以增强其 5G 网络的电信公司。

## 正文

全新的开源大型电信模型和 NVIDIA Blueprints 使电信运营商能够使用自有数据训练 AI 智能体并构建自治网络。

![Image 22](https://blogs.nvidia.com/wp-content/uploads/2026/02/Autonomous-Networks-Blog-Image-1280x720.png)

[自治网络](https://www.nvidia.com/en-us/glossary/autonomous-networks/)（智能、自我管理的电信运营）正从未来愿景转变为电信运营商当前的优先事项。在最新的 NVIDIA [《电信行业 AI 现状报告》](https://www.nvidia.com/en-us/lp/industries/telecommunications/state-of-ai-in-telecom-survey-report/)中，网络自动化成为投资和投资回报率最高的 AI 应用场景。

自动化不同于自治。除了执行预定义的工作流之外，自治网络还必须理解运营商的意图，权衡利弊并决定采取何种行动。在电信数据上微调的推理模型和 AI 智能体是实现这一转变的关键。

为了使网络实现自治，需要一个端到端的智能体系统，该系统包括电信网络模型和 AI 智能体等关键组件，它们可以相互通信并使用网络仿真工具来验证操作。

在巴塞罗那世界移动通信大会（MWC）开幕前夕，NVIDIA 推出了一款基于 NVIDIA Nemotron 的开源大型电信模型（LTM）、一份用于构建网络运营推理智能体的综合指南，以及用于节能和具有多智能体编排的网络配置的全新 NVIDIA Blueprints，以帮助运营商向自治迈进。

作为 GSMA 明天即将推出的全新 Open Telco AI 倡议的一部分，NVIDIA 将通过移动通信行业组织 GSMA，把全新的开源 LTM、实施指南和智能体 AI 蓝图作为开放资源发布。

**开源 Nemotron 3 大型电信模型为电信行业带来推理能力**
-----------------------------------------------------------------

为了让电信公司在其运营中成功实施生成式和智能体 AI，AI 模型必须具备理解电信语言并通过复杂工作流进行推理的能力。NVIDIA 与 [AdaptKey AI](https://adaptkey.ai/blog.html) 合作发布了全新的开源 300 亿参数 NVIDIA Nemotron LTM，全球运营商均可使用它来构建自治网络。

该 LTM 基于 NVIDIA Nemotron 3 系列基础模型构建，并由 AdaptKey AI 使用包括行业标准和合成日志在内的开源电信数据集进行微调，经过优化后能够理解电信行业术语，并在故障隔离、修复规划和变更验证等工作流中进行推理。

作为一款开源模型，Nemotron LTM 为电信公司提供了关于其训练方式和所用数据的完全透明度，从而能够在他们的网络中实现安全、快速的本地部署，并直接在其中构建和运行智能体。它还允许电信公司使用自己的网络和运营数据安全地调整和扩展经过电信微调的推理能力，以便在不牺牲数据控制权或安全性的情况下迈向自治运营。

**教导 AI 智能体像网络工程师一样推理**
-------------------------------------------------------

NVIDIA 和 Tech Mahindra 发布了一份开源[指南](https://developer.nvidia.com/blog/building-telco-reasoning-models-for-autonomous-networks-with-nvidia-nemo/)，向电信运营商展示如何微调特定领域的推理模型，并构建能够安全执行网络运营中心（NOC）工作流的智能体。

该指南概述了一个教导模型像 NOC 工程师一样推理的框架：专注于高影响、高频的事件类别，将专家解决方案转化为分步程序，并将其转化为结构化的推理轨迹，记录每一次操作、工具调用、结果和决策。这些轨迹成为模型学习的“思考示例”，使其不仅知道该做什么，还理解为什么特定的检查和修复序列是安全有效的。

使用 NVIDIA NeMo-Skills 管道，运营商可以在这些轨迹上微调推理模型，为能够像网络工程师一样推理和解决问题的电信专用 AI 智能体奠定基础。

**借助全新的意图驱动节能蓝图最大化能源效率**
-------------------------------------------------------------------------------

自治网络依赖于闭环运行：理解网络的模型、根据意图采取行动的智能体，以及将结果反馈到系统中以验证和优化决策的仿真。全新的[意图驱动 RAN 节能 NVIDIA Blueprint](https://build.nvidia.com/viavi/intent-driven-ran-energy-efficiency) 将这些要素结合在一起，帮助运营商系统地降低 5G 无线接入网（RAN）的功耗，同时保持服务质量。

该蓝图集成了网络测试和测量领导者 [VIAVI 的](https://blog.viavisolutions.com/2026/03/01/accelerating-ai-native-networks-with-nvidia-ai-ran-platforms/) TeraVM AI RAN 场景生成器（AI RSG）平台，以生成合成网络数据（包括小区利用率、用户吞吐量和其他流量模式），并将其转换为简单、可查询的格式。

然后，能源规划智能体对合成数据进行推理，生成可在 AI RSG 中仿真的节能策略，使运营商能够在闭环中安全地验证节能策略以满足其意图，而无需更改实时配置或影响用户。

**电信公司将网络配置 NVIDIA Blueprint 投入使用**
---------------------------------------------------------------------

[电信网络配置 NVIDIA Blueprint](https://blogs.nvidia.com/blog/ai-blueprint-telco-network-configuration/) 正被全球各地的运营商采用。

Cassava Technologies 正在使用该蓝图构建 [Cassava 自治网络（Cassava Autonomous Network）](https://www.cassavatechnologies.com/launch-of-cassava-autonomous-network-agentic-ai-for-4g-and-5g-radio-access-networks/)，这是一个旨在优化非洲多样化、多供应商移动网络环境的智能体平台。该平台实现了三个智能体：一个用于监控网络并推荐配置变更，一个用于在文档和治理下应用变更，还有一个用于评估所做变更的影响，并在产生意外效果时安全地回滚变更。

NTT DATA 正在实施该蓝图，为流量调节带来智能，帮助网络管理用户在中断后重新连接时的流量激增，并正与日本的一家一级运营商合作部署该蓝图。

AI 智能体会查看整个网络的实时需求，然后决定何时以及如何在特定小区接纳新用户。随着情况稳定，智能体会调整其决策，将过去的手动配置转变为数据驱动的优化循环，从而打造更具弹性的移动网络。

**通过多智能体编排演进网络配置**
-----------------------------------------------------------------

为了帮助电信公司设计、观察和优化跨 RAN 的复杂智能体工作流，NVIDIA 和 [BubbleRAN](https://bubbleran.com/) 正在利用 [NVIDIA NeMo Agent Toolkit](https://developer.nvidia.com/nemo-agent-toolkit) (NAT) 和 [BubbleRAN Agentic Toolkit](https://github.com/bubbleran/bat) (BAT)（用于多智能体编排的互补框架）来增强[电信网络配置 NVIDIA Blueprint](https://build.nvidia.com/nvidia/telco-network-configuration)。

BubbleRAN 正在将 NAT 和 BAT 集成到其 [Opti-Sphere](https://bubbleran.com/news/opti-sphere/) 平台中，以便在容器和工作负载中更灵活地管理网络监控、配置和验证智能体，并将它们连接到报告网络指标和流量状态的工具，从而使它们能够不断提出并验证配置变更。

Telenor Group 将成为首家采用该蓝图与 BubbleRAN 合作的电信公司，以增强其为该集团全球海上连接提供商 Telenor Maritime 提供的 5G 网络。

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
- [[00-元语/Agent]]
- [[00-元语/workflow]]
