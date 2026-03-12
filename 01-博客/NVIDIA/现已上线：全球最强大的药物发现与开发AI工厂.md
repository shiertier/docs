---
title: "现已上线：全球最强大的药物发现与开发AI工厂"
发布日期: 2026-02-26
作者: "NVIDIA"
来源: "NVIDIA"
原文链接: "https://blogs.nvidia.com/blog/lilly-ai-factory-live/"
译注: "根据原文翻译整理"
---

## 摘要

**1) 一句话总结**
礼来公司（Lilly）正式上线了由1016块NVIDIA Blackwell Ultra GPU驱动的全球最强药物研发AI工厂“LillyPod”，旨在通过突破性的超级计算能力加速药物发现与开发。

**2) 关键要点**
*   **顶级硬件配置**：LillyPod是全球首个配备DGX B300系统的NVIDIA DGX SuperPOD，搭载1016块NVIDIA Blackwell Ultra GPU，可提供超过9000 petaflops的AI算力。
*   **高效部署与海量处理**：该系统仅用四个月即在印第安纳波利斯组装完成，利用超290 TB的高带宽GPU内存可处理高达700 TB的数据。
*   **突破传统研发瓶颈**：构建了大规模计算“干实验室”，使科学家能在物理实验前并行模拟数十亿个分子假设，打破了传统“湿实验室”每年每个靶点仅能测试约2000个分子的物理限制。
*   **核心模型训练**：主要用于支持蛋白质扩散模型、小分子图神经网络模型以及基因组学基础模型的大规模训练。
*   **全栈软件与网络支持**：采用NVIDIA Spectrum-X以太网网络，并利用NVIDIA Mission Control软件安全高效地管理工作负载和自动化AI操作。
*   **TuneLab平台与联邦学习**：推出Lilly TuneLab平台，结合NVIDIA BioNeMo和基于NVIDIA FLARE的联邦学习技术，使外部生物技术公司能在保护自身数据隐私的前提下，访问礼来耗资超10亿美元数据构建的专有AI模型。
*   **可持续发展规划**：系统采用高效液冷技术，礼来计划到2030年实现该AI基础设施100%使用可再生电力运行。

## 正文

拯救和改善生命——这一最伟大的人类事业——刚刚获得了超级计算的助力。

Lilly（礼来）本周推出了由制药公司全资拥有和运营的最强大的AI工厂，以帮助其团队更快、更准确、以前所未有的规模取得有意义的医学进展。该工厂被称为LillyPod，是全球首个配备[DGX B300系统](https://www.nvidia.com/en-us/data-center/dgx-b300/)的[NVIDIA DGX SuperPOD](https://www.nvidia.com/en-us/data-center/dgx-superpod/)。

Lilly的AI工厂由配备1,016块NVIDIA Blackwell Ultra GPU的DGX SuperPOD提供动力，可提供超过9,000 petaflops的AI性能。它仅用四个月就组装完成。

LillyPod于周三在印第安纳波利斯的剪彩仪式上正式启用。

“超级计算机的上线对我们来说是个大日子，但这也是酝酿了150年的一天，”Lilly执行副总裁兼首席信息与数字官Diogo Rau表示。“LillyPod是我们是谁以及我们为何从事这项工作的有力象征：让世界各地人们的生活变得更美好。此时此地，我们正处于以一种前所未有的方式推进生物学发展的绝佳时机。”

### 走进 LillyPod 的幕后

曾经需要700万台Cray超级计算机的计算能力，现在只需一块NVIDIA GPU即可容纳——而LillyPod包含1,000多块这样的GPU。这一基础设施使Lilly的基因组学团队能够利用超过290 TB的高带宽GPU内存来处理700 TB的数据。

“计算是生物学的核心，也是科学的核心，”Lilly高级副总裁兼首席AI官Thomas Fuchs表示。“对于像我们这样的公司来说，能够进行大规模计算不是可选项，而是绝对必要的。因此，我们正在构建医学的计算未来，你可以在制药价值链的所有领域看到这一点。”

Lilly的AI工厂将支持蛋白质扩散模型、小分子[图神经网络](https://blogs.nvidia.com/blog/what-are-graph-neural-networks/)模型和基因组学[基础模型](https://blogs.nvidia.com/blog/what-are-foundation-models/)的大规模训练。

NVIDIA DGX SuperPOD提供的NVIDIA全栈AI工厂架构——包括加速计算、[NVIDIA Spectrum-X以太网](https://www.nvidia.com/en-us/networking/spectrumx/)网络和优化的AI软件——为医疗健康和生命科学领域高度受监管的工作流提供了一个安全、可扩展的平台。

这台超级计算机的近5,000个连接由超过1,000磅的光纤电缆构建而成。Lilly的目标是到2030年使其新的AI超级计算基础设施100%使用可再生电力运行，采用高效的液冷技术，并将新增能源影响降至最低。

### 推进基础模型、物理 AI 和代理 AI

LillyPod不仅仅是一个工具——它是一种将专有数据和高级AI模型结合在一起的新型科学仪器。

在此基础上，Lilly团队可以分析基因组，探索数十亿种化学可能性，并在临床开发和制造中应用AI，以设计更好的试验、优化生产并加速决策。这些功能共同实现了更快、更精确、更具可扩展性的药物创造和交付。

“LillyPod将开启AI驱动的药物发现新纪元，”Lilly高级副总裁兼首席技术官Tim Coleman表示。“我们相信计算是科学的基础，Lilly的患者理应获得我们所能提供的每一项优势。”

部分模型将通过Lilly TuneLab提供，这是一个AI和机器学习平台，为生物技术公司提供访问基于Lilly耗资超10亿美元生成的专有数据构建的药物发现模型的途径。

作为首个计划同时提供Lilly模型和用于医疗健康与生命科学的[NVIDIA BioNeMo](https://www.nvidia.com/en-us/industries/healthcare-life-sciences/biopharma/)开放基础模型的药物发现平台，TuneLab使用基于[NVIDIA FLARE](https://developer.nvidia.com/flare)构建的联邦学习基础设施，这使得生物技术公司能够利用强大的专有AI模型，同时保持其数据私密并与其他用户隔离。随着更多公司的参与，模型将不断改进，从而使所有用户受益，并进一步扩大生物技术生态系统的AI访问权限。

### 打破湿实验室瓶颈

从历史上看，药物发现一直受到湿实验室物理限制的制约。即使是高产的团队，通常每年每个靶点也只能分析大约2,000个分子构想，因为每个实验都需要进行物理合成和测试。

“现在，超级计算中心基本上打破了[湿实验室的]物理限制，”Lilly研发信息学副总裁Yue Wang Webster表示。“现在在干实验室中，您可以触手可及地测试数十亿个分子构想。”

LillyPod通过创建一个大规模的计算干实验室消除了这一限制，科学家可以在进行物理实验之前，并行模拟和评估数十亿个分子假设。

借助其内部AI平台，Lilly员工还可以使用LillyPod构建聊天机器人、代理工作流和研究实验室代理，而无需重复造轮子。

通过结合科学、数据和计算能力，Lilly和NVIDIA正在为生命科学领域的AI开辟新天地。

“这台机器正是AI应有的使用方式，”Fuchs说。“它应该用于科学。它应该用于减轻痛苦和改善人类生存状况。”

## 相关文档

- [[01-博客/NVIDIA/从放射学到药物发现，调查显示AI正在医疗健康领域带来明确的投资回报|从放射学到药物发现，调查显示AI正在医疗健康领域带来明确的投资回报]]；关联理由：上下游；说明：该文用调查数据说明药物发现已成为生命科学领域的核心 AI 投资方向，本文则展示礼来将这一趋势落地为专有 AI 工厂。
- [[01-博客/NVIDIA/印度科技巨头借助 NVIDIA AI 打造下一代企业智能体，重塑业务流程|印度科技巨头借助 NVIDIA AI 打造下一代企业智能体，重塑业务流程]]；关联理由：上下游；说明：两文都围绕 NVIDIA 的 BioNeMo 与加速计算栈展开，关联文档补充了药物发现工作流在企业侧的下游实现方式。
- [[01-博客/NVIDIA/NVIDIA Blackwell Ultra：为代理型 AI 带来 50 倍性能提升与 35 倍成本降低|NVIDIA Blackwell Ultra：为代理型 AI 带来 50 倍性能提升与 35 倍成本降低]]；关联理由：解说；说明：本文的 LillyPod 直接建立在 Blackwell Ultra GPU 之上，关联文档补足了这套底层算力平台的性能与成本背景。

## 关联主题

- [[00-元语/AI]]
- [[00-元语/life-sciences]]
- [[00-元语/genomics]]
