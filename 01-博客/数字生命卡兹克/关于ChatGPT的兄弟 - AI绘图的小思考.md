---
title: "关于ChatGPT的兄弟 - AI绘图的小思考"
发布日期: 2023-02-25
作者: "卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647657627&idx=1&sn=e17677d7db3bf4c823aef0df3966dcfa&chksm=f124b34bda81bf916118b49c94d463c4cf08bedc300db33f2318be6d7abeb4cd27efcc2b4e09"
---

## 摘要

**1) 一句话总结**
本文从设计师视角探讨了以Stable Diffusion为代表的开源AI绘图工具的强大定制化能力，及其对电商模特等传统产业链带来的颠覆性效率提升与行业冲击。

**2) 核心要点**
*   **工具选择与优势**：相比每月需30美元的Midjourney，开源的Stable Diffusion (SD) web UI 支持本地化显卡渲染、完全免费，且具备强大的开源生态和可拓展性。
*   **生成质量**：现阶段AI绘图在风格和质量上已超越多数设计师，不仅限于二次元或CG风格，更能生成极具真实感的精修照片级图像。
*   **低成本定制化**：基于SD的开源性，仅需几十张特定照片即可低成本训练专属模型，实现固定面部特征，并自由定制体型、服装、动作和场景。
*   **重塑电商产业链**：在服饰模特领域（如淘宝），AI数字模特可省去寄送样品、真人拍摄、后期修图等传统环节，实现100%的效率提升，打破上下游概念。
*   **技术迭代速度**：AI绘图技术正处于急速更新的起点，例如Controlnet插件的出现，通过“以图生图”模式进一步大幅拔高了绘图的效率和可控性。

**3) 风险与不足（原文明确提及）**
*   **技术缺陷**：现阶段AI绘图在“画手”方面仍存在不足。
*   **灰色地带冲击**：AI定制化生成技术对社交平台（推特、微博、小红书等）的网红、COSER及写真售卖者将造成毁灭性打击。
*   **合规与监管风险**：随着AI绘图能力的滥用（如搞颜色等灰色地带），预计相关的AI监管法律将很快出台。
*   **职业替代风险**：AI的快速发展给设计师及相关从业者带来了被替代的生存压力，要求从业者必须转型为“掌控AI的人”。

## 正文

最近ChatGPT和人工智能上了天，不管是资本市场还是大众舆论，无不是最火热的话题，就连背后的某些算力公司，都趁着这股东风，一飞冲天。

无数人把ChatGPT玩出了花来，但是对于我自己来说，或许是因为职业是设计师的缘故，ChatGPT带给我的震撼远不如AI绘画。

AI绘画这块我使用的是开源的Stable Diffusion web UI，
相比在线的
Midjourney，SD-WebUI的好处是可以本地化部署，渲染直接用显卡，且完全免费，毕竟
Midjourney那高昂的1个月30美刀的价格不是一般人能给得起的。

但是另一个更重要的原因，是Stable Diffusion的开源和可拓展性。

基于开源生态，发光发彩，无数人进入一起迭代，这个恐怖的速度，让人望而生畏。

这里不赘述怎么获取安装怎么生成这些东西了，直接B站找赛博菩萨秋葉aaaki做制作的整合包。

下面我直接放图，让大家感受一下AI绘图的威力。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURraibxGuHz6cfRAR74OFy6ib8cpG6B90nnIiao6iaXqf9HlKhbQXqvKsMcSNuqkLqZYQTASS8dIicM3ekQ/640?wx_fmt=png)

说句实话，现阶段AI的绘画只要不画手，在风格、质量上，已强于大多数设计师。

当然，如果只到上面这几张图的地步，AI绘画还不可能带给我这么大的震撼。

在说接下来的话题之前，我想再放几张图，大家可以猜猜看，哪些是AI画出来的?

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURraibxGuHz6cfRAR74OFy6ib8MR5jGpiaarIp1ibnkIfwKxOWEicf7ibV6YcB4PC1X7dAjp5riaquR0yicsug/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURraibxGuHz6cfRAR74OFy6ib8e7MxKEtkuOxWc4xSIHkQqvuQMVHFmpyHspvL27CgI6lk9iaYbic3llrg/640?wx_fmt=png)

全都
是。

说实话，对于二次元、CG或其他风格的图，对现实世界影响有限，不管你是插画是原画，其实还好。

但是，当能生成精修照片级的图片时，那就是另一个概念了。

由于AI绘图的基本指令是选取训练好的模型，然后撰写tag，AI根据tag和模型绘制出你想要的图片。

这就意味着有个最核心的概念：可定制化。

同时，由于SD的开源性，我们还可以训练自己的模型，而且训练的成本非常低，只需要几十张图足以。

我们完全可以拿些特定的人的照片，训练出此人的模型，固定住脸，然后直接定制化，定制他的体型、服装、动作、姿势、所处场景。

如果再涉及到颜色的话，那后果不敢想象。比如下面这是我训练完的模型生成的部分图片（我并不是要搞颜色，只是科学研究）

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURraibxGuHz6cfRAR74OFy6ib8poXYFPxFG7NCh5ibPpbopwuw0QEphia6PXBxTmQMxz8DDDPkfRhNwibwA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURraibxGuHz6cfRAR74OFy6ib8PpyhhTiavtZseme8ibtqIaoxxMichHnkRiccMPWLUMIoMuKBUxsq93WiauA/640?wx_fmt=png)

这玩意要多少有多少，想怎么定制就怎么定制，这就带来了可怕的冲击力。

用在正道上，会带某些产业链的流程重分配。

举个例子，服饰模特领域，以淘宝为首，现在有一套完整的产业链，商家寻找模特，给模特寄出衣服和报酬，模特收到后出门拍摄，拍摄完修图发给商家或买家秀。

而使用AI绘图的话，我训练好固定模型，打造好IP，以后你的衣服我直接训练一下让我的数字模特穿上，不需要物流，不需要真人模特，什么都不需要，一键生成。这是100%的效率提升，完全不再有上下游概念了。

用在灰色地带的话。。。

只能说，对于现在某些推特、微博、小红书的网红们COSER们，特别是那些卖写真集的福利姬们，是完全毁灭性的打击。而且也可以预料到，关于AI这块的监管法律，很快就要来了。

然而最恐怖的是，现在的AI不是终点，而是起点。

就如同刚出现的还处于急速更新中的Controlnet插件，以图生图，直接又将AI绘图的效率和可控性拔高了一个档次

![](https://mmbiz.qpic.cn/mmbiz/OjgKEXmLURraibxGuHz6cfRAR74OFy6ib8ll8lDic9rrRoXI23p0C9ZIiaY7sw1K8moPVvWreywTjoqTVFKqibXIqyw/640?wx_fmt=other)

![](https://mmbiz.qpic.cn/mmbiz/OjgKEXmLURraibxGuHz6cfRAR74OFy6ib8Hic8N7yFoP3NjxScic9AADbsicOm2OopWmbrsZPls5gp09eEqibQyiaQ8ibw/640?wx_fmt=other)

大家对C
ontrolnet有兴趣的话，下次可以分享一下。

回到工作中，如何不被AI替代，如何变成掌控AI的人，我也一直在思考这个问题，后续有新的思考，也会写在这个公众号里。

AI是一场伟大的变革，我们每个人都不自觉的已生在其中，命运的车轮向前，我们能做的，就是努力跟上时代。

虽然前方未知，但我仍坚信，人类在某些维度上即使渺小如蚂蚁，但他们的智慧，也定能战胜一切。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
