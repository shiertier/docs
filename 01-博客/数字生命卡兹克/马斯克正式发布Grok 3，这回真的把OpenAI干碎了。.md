---
title: "马斯克正式发布Grok 3，这回真的把OpenAI干碎了。"
发布日期: 2025-02-18
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647668685&idx=1&sn=63e229e9ce9936a46ee50574819b0b64&chksm=f1c0bf53e09ff4239e67774d14ffa1b54b6cc47dead8a749258ebf9f2baffee59914bcd4e3bb"
---

## 摘要

**1) 一句话总结**
马斯克正式发布了由20万块GPU集群训练的Grok 3系列模型，在多项基准测试中跑分登顶，并同步推出了具备深度思考能力的推理模型及AI搜索智能体。

**2) 核心要点**
*   **算力基建与极速迭代**：Grok 3由自建的Colossus集群训练。该集群首期10万块H100 GPU仅用122天建成并训练，后扩展至20万块GPU（新增5万块H100与5万块H200）追加训练92天，由TVA提供超100兆瓦电力。
*   **基础模型跑分登顶**：无推理能力的Grok 3在Chatbot Arena竞技场中拿下第一，是目前唯一突破1400分的模型，并在内部的数学、科学和代码测试中得分最高。
*   **推出Grok 3 Reasoning**：发布了对标行业顶尖水平的推理模型，支持调节参数以延长模型思考时间。在数学、科学、代码及AIME 2025测试中，跑分超越了o3 mini和DeepSeek R1。
*   **发布Agent工具DeepSearch**：推出深度搜索智能体，支持多问题同时运行，具备思考进度条，并能交叉验证不同来源的网站信息。
*   **上线时间与渠道**：X Premium预先订阅用户可率先体验，预计一周后陆续上线Grok 3全套功能（含推理模型、DeepSearch及App端），官方网址为grok.com。
*   **其他功能与计划**：确认支持语音（语音转文字）功能；马斯克宣布后续将开源上一代模型Grok 2。

**3) 风险与不足（基于原文明确提及）**
*   **DeepSearch能力存在差距**：DeepSearch的实际效果更偏向于普通搜索（类似Perplexity），在成品质量和研究深度上与OpenAI的Deep Research相比仍有较远差距。
*   **实测表现仍待验证**：发布会缺乏复杂的实际应用展示（如代码演示案例难度不高），Grok 3的实际能力是否与跑分完全一致，仍需等待全面实测。
*   **语音功能细节未明**：现场仅确认支持语音转文字，是否具备双向语音通话能力及具体效果仍属未知。

## 正文

中午12点，
预告了两三天的Grok3的发布会，终于来了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpm0yYibXx8iaJgA3JpWQBo3DI3r17cvic1EMUAYnfcPn2UW1xqCiaicGvrzK7NOA93AM6CoI5GLlumFzg/640?wx_fmt=png&from=appmsg)

前天马斯克就在X上吆喝，说Grok 3是“地球上最聪明的人工智能”。

甚至还在迪拜世界政府峰会说：“Grok 3的推理表现优于我们所知的任何已发布的模型，这是个好迹象。”

而今天，在灯等等灯等的小音乐声中，马斯克习惯性的迟到后，四个大兄弟也坐在了现场，给大家演示Grok 3。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpm0yYibXx8iaJgA3JpWQBo3DiaChsic0FTxbmuHibkeibfibAiaAbNe5Kib2aicwS4C2LYq0AdLTeODy4BJWTA/640?wx_fmt=jpeg&from=appmsg)

中间C位又是两个华人。

看完全程以后，我只能说，OpenAI现在是真的惨，前脚被DeepSeek，而后脚，又全部被Grok 3给干碎了。。。

是的，连o3 mini，也被Grok 3 mini干碎了，而Grok 3，今天X
Premium用户可是就可以用了。。。

一文来带大家迅速过一遍，Grok 3的能力。

主要分成3块，Grok 3、Grok 3 Reasoning、Agents。

1. Grok 3

Grok这次是直接冲着OpenAI来的。研发团队一开始就直接甩了Grok和GPT的迭代时间对比。

从Grok0到Grok3，确实是进步飞速。

马斯克嘚啵嘚的意思，就一句话：Grok只用了两年多，就能匹敌GPT五六年的能力。

23年xAI成立后发布了33B的Grok 0，比肩70B的Llama 2。同年11月份，又马不停蹄的发了Grok 1模型。

24年他们不仅发布了Grok 1.5和Grok 2，还发布了xAI的第一个多模态模型Grok-1.5V。

从Grok0到2024 年 8 月 13 日发布的Grok2，再到今天2025年2月的Grok3，Grok的迭代确实很迅速。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpm0yYibXx8iaJgA3JpWQBo3DJTNoCRDl1JCXN5lA367e3iaLtFPnBnlrYK3252bTyrX3nWGFS4IfN1Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpm0yYibXx8iaJgA3JpWQBo3Dz4tn3AStdLk5VPmfVzGqG0fS5k4dibeO9IeAffy354Z0tQ5ia4ZUI7FQ/640?wx_fmt=png&from=appmsg)

关注度这么高的发布会，马斯克也是忍不住炫耀一下自家的十万卡集群Colossus。

老马起初找了数据中心供应商，问他们要在一个地方有序运行10万个Gpu需要多长时间？供应商给的时间范围是从18个月到24个月。

老马直接不乐意了，所以直接自己做。

最终这个集群只用了122天建成，第一阶段是10万块NVIDIA H100 GPU，训练了122天。后来扩展到20万块GPU（含新增的5万块H100与5万块H200），又训练了92天。
由田纳西河流域管理局（TVA）提供超过100兆瓦的电力支持。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpm0yYibXx8iaJgA3JpWQBo3DUxiaZObJf9d4X88ib6FjTmk4Uxk5cDYRjt6r2FDsIbXV8Hz1WiccW5o1A/640?wx_fmt=png&from=appmsg)

最终，有了Grok 3这个超级产物。

半个多小时的发布会没啥实际应用的展示，不过光看跑分grok表现也是挺亮眼的。

在他们内部的测试里，数学、科学和代码三个领域的跑分，Grok 3都是最高的。

不带推理能力的Grok，Benchmarks跑分遥遥领先。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpm0yYibXx8iaJgA3JpWQBo3DqwCX5XTmgwtWIKhqibdrIPkdMOy7ZFlDGY0m6OxoDMMqXK2SQ4AoJgw/640?wx_fmt=png&from=appmsg)

在Chatbot Arena竞技场，Grok3直接拿下第一，分数也高得惊人。

带推理能力的Grok，也是直接冲着目前最好的推理模型去的。分数远高于o3和DeepSeek-R1，拉着就是比。

尤其是Grok解数学题的能力，马斯克在发布会上也特意强调他们会给模型更多时间让它自己思考。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpm0yYibXx8iaJgA3JpWQBo3DfkNfMV9VIeVic4Wo99Rso3t9OaHfmZThzdYlaXVPzHicOQgIiaT767ImA/640?wx_fmt=png&from=appmsg)

不仅第一，还是目前唯一1400分以上的模型，直接把没火多久的Gemini2.0甩开一大截。

2. Grok 3 Reasoning

下一个，reasoning，也就是grok 3的推理模型。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpm0yYibXx8iaJgA3JpWQBo3DIibPF2ibsNbbMr6OicJN4EMT7BRQV1aRSWia1JDjQQtJLzNfB6JHNY46gw/640?wx_fmt=png&from=appmsg)

但是因为还没有具体实测到，所以我不知道，他是类似DeepSeek v3和DeepSeek R1这种两套模型的区别，还是类似于Claude在传的那种混合模型的区别，但是我个人感觉大概率还是两套。

然后上来展示这UI设计，好眼熟。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpm0yYibXx8iaJgA3JpWQBo3DhL6Zw8m287E8n0PlqSciaWYDOTibFWN7vxR5zApYG09dVK30cqQJfficQ/640?wx_fmt=png&from=appmsg)

大家都在群里疯狂吐槽，deepseek是你吗。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpm0yYibXx8iaJgA3JpWQBo3DIAiaGDcRjCuB1RaLHib2wJcibXpIZF562JmxlL2THy9bu3PQFpv2uApPA/640?wx_fmt=png&from=appmsg)

在跑分上，
还是我们熟悉的三领域：数学、科学、代码。

和o3 mini、DeepSeek R1相比，Grok 3 reasoning都取得了领先地位。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpm0yYibXx8iaJgA3JpWQBo3DwlicRTgEHaVwDAazDhvyMSJicPSJeLRZreS3z7T01tGicMc962RWOlavQ/640?wx_fmt=png&from=appmsg)

特别是o3 mini，直接被干碎了。

5天前，完成了AIME2025的测试，分数最高。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpm0yYibXx8iaJgA3JpWQBo3DkrrPrOESFreYEib0LiaesU1UuuG2oxhuicebhB5QbYtibxEheNdyFf7OyQ/640?wx_fmt=png&from=appmsg)

并且还有类似于o1 pro的功能，可以调高参数，
允许Grok 3用更长的时间去推理，让大模型花更多时间思考，直到得出结论。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpm0yYibXx8iaJgA3JpWQBo3Dzgwcn5paoavXHq4d2PymHbupuCqcFbuicOpw3Zoze5V6lTm67uK2ehw/640?wx_fmt=png&from=appmsg)

展示的第一个编程例子，动态宇宙模型，思考了114s。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpm0yYibXx8iaJgA3JpWQBo3DNLF0FRwUtuiaM2Ak86lXd7A36gAly2hezpWICiaXNliaIlWh8G6ibSC6Fw/640?wx_fmt=png&from=appmsg)

效果看起来还挺好的，感觉马斯克离他的老家火星又进了一步。

第二个展示了Grok的游戏代码，俄罗斯方块演示（视频有点长，我们这里直接五倍速）

case本身难度也不怎么高，具体实测还不知道是个什么情况，具体详情得测试看，如果确实跟跑分一致，老马没吹牛逼，那Grok 3就是地表最强。

3. Agent

最后一个。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpm0yYibXx8iaJgA3JpWQBo3DnOF3dpVMdWYTeFibZa5tYVJUDdZ4X6ykmIf7FKKPvSoKicKCyefwiciarw/640?wx_fmt=png&from=appmsg)

老马决定继续按着OpenAI的头打，推出了他们的Agent工具，DeepSearch，也就是深度搜索。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpm0yYibXx8iaJgA3JpWQBo3Dh4qGxwJNw2YoxWJGuiafF2mY7s8NjdX2hGKeBuDpUibhCulc9UQFPCEw/640?wx_fmt=png&from=appmsg)

明显就是前段时间OpenAI Deep Research的翻版。

但是效果上，看了下说实话不太像是能对标
OpenAI Deep Research的，更偏向于搜索而不是研究，比
OpenAI Deep Research的成品和质量还是差的有点远。

更像是Perplexity出的那个。

他们也跑了一个demo。

点击左侧的答案，会有进度条，思考时间不算特别长。

右侧是当前模型的一些摘要，可以看到模型正在浏览哪些网站，并且会交叉验证不同的来源。

可以同时问好几个问题，一起运行。

4. 写在最后

最后的QA环节，直播也解答了大家最关心的几个问题。

Q：什么时候发布Grok3？

A：X上的预先订阅用户可以最早体验，预计一周后陆续发布，推荐大家关注Grok的动态。

Q：现在的新的网址？

A：
grok.com

Q：
有语音功能吗？

A：有。（但是现场也只是说有语音功能，支持语音转文字，不知道是不是语音通话，但具体的效果如何，还是等上线吧。）

马斯克在发布会上是说，一周后会陆续上线grok 3的所有功能。也就是说Grok 3、Grok 3的推理模型、DeepResearch、包括app端。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpm0yYibXx8iaJgA3JpWQBo3DvsmeyAtzcXXNMMibr2XFib1TiatnDrg8wqlWrOfHAcHoGbyy75ktdYDXg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpm0yYibXx8iaJgA3JpWQBo3DtyzHttzNcNuwdMGX0TJZMP5mcszsgeP6f08IFLFXTE4iayGAFjicDrJw/640?wx_fmt=png&from=appmsg)

这个画面总让我幻视直播带货，感觉马斯克应该说一句“老铁们记得订阅”。

行，信一回，等着下周上手玩玩了。

老马还说，之后会开源上一代模型，也就是Grok 2，那我也坐等。

无论如何，新王已到，江湖又得重新排座次了。

AI圈，变得就是如此之快。

AI一天，人间一年。

我们，拭目以待。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
