---
title: "DeepSeek开源第三天，只用300行代码就超越了英伟达自己。"
发布日期: 2025-02-26
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647668991&idx=1&sn=fdd135918474a6edee54be35529657d2&chksm=f18f1663d736c2b6fc3f6a338fc3fefa2db3ebda3f045f87fc6504f872de1224ef2aa675272c"
---

## 摘要

**1) 一句话总结**
DeepSeek开源了专为DeepSeek-V3设计的轻量级FP8矩阵乘法库DeepGEMM，仅用约300行代码便在特定场景下实现了超越英伟达官方库的计算性能。

**2) 核心要点**
*   **核心功能**：DeepGEMM是一个专为DeepSeek-V3设计的FP8通用矩阵乘法（GEMM）库，支持普通GEMM和专家混合（MoE）分组GEMM。
*   **极致轻量**：核心代码仅约300行，且不依赖英伟达CUTLASS等庞大模板，采用完全自主的激进优化方式。
*   **即时编译**：安装时无需提前编译，通过轻量级的即时编译（JIT）模块在运行时编译所有内核，大幅简化部署流程。
*   **精度优化**：针对FP8计算速度快但精度偏低的问题，利用CUDA核心进行两次累加操作，在保持速度的同时提升了计算精度。
*   **性能数据**：在H800显卡上针对DeepSeek-V3和R1推理场景进行测试，其运行速度最高可达英伟达官方库CUTLASS 3.6的2.7倍。
*   **社区热度**：开源后极受关注，GitHub仓库在半小时内即获得数百个Star。

**3) 风险/不足**
*   **硬件限制**：目前该库仅支持英伟达H系列显卡（H卡），暂不支持其他硬件。
*   **特定场景表现不佳**：DeepSeek官方团队明确指出，DeepGEMM在某些特定情况下的表现确实不太好，仍需开源社区共同参与改进。

## 正文

不能再肝了，但我又觉得DeepSeek值得。。。

这两天，DeepSeek的高强度开源波，一山更比一山高。

先是给GPU安超频加速外挂的
FlashMLA
，又是叫英伟达知道“原来GPU没有商业护城河”的
DeepEP
。

我也都第一时间给大家带来了报道。

在追求效率、把硬件资源干下来的路上，DeepSeek快成AI性能效率上的Godfather了。。。

这回，他们开源的是一个叫做
DeepGEMM
的玩意儿，专门给当时爆cei全网的DeepSeek-V3做的。

Github星星没半小时，就几百个了。点的越多，意味着开源友友们越喜爱和越关注这个代码仓库，水分那是相当的少
。一般几千的星星就已经算是爆款了，半小时就几百，这个含金量你懂的。

开源链接在此：https://github.com/deepseek-ai/DeepGEMM?tab=readme-ov-file

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURosfFrtiaMa0PJrpK5TTfg0edw0DricVUZUiaESPzYEXWf0cwic3xicvygoMsicNDoOX7iajibJerQWEHlKkg/640?wx_fmt=png&from=appmsg)

这东西，倒也没那么难懂。

举个例子，假如我结婚了。场面特别特别大，记得是假如。。。

几百万人组成的迎亲队伍、点鞭炮得点几亿种、接亲队伍也叫个几百万人来，甚至我再搞点大的出来，比如弄个几万盏灯光秀。

所有的一切的一切都需要计算好时间点，相互之间得互相搭配。而DeepGEMM这东西，能把以上所有东西塞进一个矩阵里。

所有迎亲队伍的实时行走轨迹、啥时候点鞭炮的精细时间规划、接亲队伍得到哪里等、等多久，几万盏灯光秀和几千万首音乐秀，几分几秒，该怎么配合，效果最好，等等。

全都能放进矩阵里计算，这都快成在天上俯瞰人间的God了。。。

用技术语言说，就是：

DeepGEMM 是一个为 DeepSeek-V3 专门设计的，用于 FP8 的，通用矩阵乘法（GEMM）库。还支持
普通的和专家混合（Mix-of-Experts，MoE）分组 GEMM
。

安装时，你都无需编译，只通过一个轻量级的即时编译（JIT）模块，在运行时就可以编译所有内核了。牛逼，一点多余东西都不舍得让你多干活。

而且，只用了300行代码，实在是牛逼。。。

目前，DeepGEMM跟前两天一样，还是只支持H卡。它为了让FP8这种速度快但精度偏低的计算方式变得更准确，利用了CUDA核心做了两次累加。

简单说就是先用FP8完成快速计算，然后再用CUDA核心对结果进行更精细的再加工，这样既能保持速度快，还能把精度提上去。

DeepGEMM也借鉴了英伟达CUTLASS和CuTe的一些概念。

CUTLASS 是基于英伟达明星当家CUDA架构。简单说，它是一个写给 NVIDIA显卡的工具包，专门用来加速“矩阵计算”的。

英伟达的CUTLASS实在是过于高效，以至于被用来构建内核时，几乎能帮显卡把矩阵计算的性能榨到极限，跑到显卡的理论峰值。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURosfFrtiaMa0PJrpK5TTfg0eDwNNS2IlefDWbBuOqfcnzRSgJLPlLIbRuDt9eq0JIkic8ytoLia8kp5Q/640?wx_fmt=png&from=appmsg)

但是如果你手里的硬件没那么强大，就像很多现在的AI公司们还停在上一代的卡上时，CUTLASS这种大而全的加速套件，就有点用不上了。

CUTLASS虽然时哥通用、功能强大的矩阵加速库，但是DeepGEMM这种激进的优化方式更专注、更轻量。

深刻的展现了DeepSeek那种“抠”到极致的理念。

把性能也抠到了极限。

性能只要卡的不死，DeepSeek就能拿效率调优这条至简大路冲出来，无形中连美国算力封锁都给捅破了。。。

它完全没有一点对英伟达项目的模版or代数的过分的依赖度，全凭自主。

而且不止是轻量化，性能也是直接起飞。

按他们的话说，

团队说，能够匹配甚至超越英伟达、ADM等等专家专门调优的库。。。

比英伟达自己的
CUTLASS 3.6，速度还提升了2.7倍。

他们在H800上，测试了 DeepSeek-V3 和 R1 推理中可能用到的所有矩阵情况，性能水平，我都整理在这了。

先是密集模型档，估计老黄那个项目的人，也很难想明白，几百行代码怎么调优调成这样的。。。

之前不是都说，硬件是有护城河的嘛。。。现在看起来，DeepSeek比英伟达都懂GPU。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURosfFrtiaMa0PJrpK5TTfg0eD76BOPmUuYiakn9dFSibcBdLBQ92FjTiaLTlrqeosyXz39O5x03o4c2Tg/640?wx_fmt=png&from=appmsg)

然后就是现在被称为AI未来方向之一的专家混合模型MoE了。它在处理复杂任务上独树一帜。整体的性能，实在是太硬核了。数据如下：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURosfFrtiaMa0PJrpK5TTfg0eYsdlkoqjl4PxOhbibHYiaia0UHXR3ibbAEb4rGmKxxA4AenrR1XzPmNNQA/640?wx_fmt=png&from=appmsg)

但DeepSeek的人也确实说了。

DeepGEMM虽然非常牛逼，但是在某些情况上的表现确实不太好，欢迎所有人一起改进。

具体的部署上，依旧和之前每次DeepSeek开源时的动作一样，把饭喂到你嘴边，顺便走的时候，再给你擦擦嘴。

因为无需编译，部署速度会更快、更顺畅。这让我想起来了当年的贴吧大神们，只留下宝典教程里最核心的部分，挥挥衣袖，就跑了。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURosfFrtiaMa0PJrpK5TTfg0eYkbcjFD8F5TRMZtKicNjNCHISt9DxsRUWj3sY8yGJN3LNOq8NcIIOhw/640?wx_fmt=png&from=appmsg)

随着下一代基座模型，比如DeepSeek V4、GPT-4.5等等的参数和复杂度继续增长时，深入到底层进行优化的DeepGEMM这种库，真的会越来越重要。

AI圈子内曾经充斥着，闭源才是通向AGI的论调。

这平等地伤害了，每一个踏进AI大门的普通人们。

闭源的AI世界，就像是黑暗森林。

每个人都是拿着枪追着篝火的猎人。

但DeepSeek这一举。

让我突然想起来《教父》里那句名言。

永远不要动怒。

绝不要威胁。

要讲道理。

开源就是DeepSeek这群家伙们的道理。

共勉。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
