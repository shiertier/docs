---
title: "实测完OpenAI的SearchGPT，我发现它有点不太聪明的亚子。"
发布日期: 2024-08-02
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647664225&idx=1&sn=7bb022d0b1113681e2b8f6a6e4acdaec&chksm=f1c99ea741aee0c7280a32baf500b2f85f64c27b1594a6352f9c01aae8794c2c88c7f7e6251e"
---

## 摘要

**1) 一句话总结**
实测表明，OpenAI的SearchGPT虽然具备界面简洁和信息源权威的优点，但在中文语义理解、实时数据准确性及模型幻觉方面仍存在明显不足，整体表现瑕瑜互见。

**2) 关键要点**
*   **产品界面与定位**：SearchGPT界面极度简洁，主页仅有巨大搜索框，并提供“设为默认搜索引擎”的按钮，意图挑战传统搜索引擎。
*   **实时数据测试**：在查询特定时间点（8月2日0点）的奥运奖牌数时，SearchGPT首次给出了正确的21枚，但经追问和更改时间条件后发现其并未真正理解时间线，首次正确纯属巧合。
*   **竞品对比**：在同等实时问题下，Perplexity（答6枚）、秘塔AI搜索（答19枚）均回答错误，360AI搜索虽答错但明确提示了数据截止时间，未产生幻觉。
*   **逻辑与常识测试翻车**：在询问“中国经济特区有哪些”（错答5个）和“9.11和9.8谁更大”时，SearchGPT均回答错误，且未调用左侧已检索到的参考链接，仅依赖模型内部知识作答。
*   **语言与信息源偏好**：用中文询问iOS 18功能时，系统直接输出英文回答；在检索LLM Agent论文时，引用了科技媒体文章而非arXiv等直接学术源。
*   **核心优势**：界面体验好、抓取的信息源多为权威媒体或官方、回答直接无废话、支持追问，且具备较丰富的卡片生态（主要为国外生态）。
*   **后续计划**：作者正在构建包含实时性、准确性、语义理解、中国特色数据、来源多样性等维度的AI搜索全面评测体系。

**3) 风险/不足（基于原文明确指出）**
*   **准确性与过度自信风险**：有时会搜到正确信息但不调用，过度相信模型内部知识从而导致事实性错误（如数字大小比较）。
*   **幻觉风险**：在被要求提供明确信息源和引用段落时，会出现“已读乱回”的幻觉现象。
*   **时间维度缺陷**：对时间维度的信息理解和实时数据抓取能力存在明显不足。
*   **中文适配不足**：部分情况下对中文语义理解能力不够，且存在中文提问却强制回复英文的情况。
*   **功能生态单一**：相比其他AI搜索，缺乏脑图、PPT生成等丰富的扩展功能体验。

## 正文

盼星星，盼月亮。

终于盼到了OpenAI的AI搜索SearchGPT的体验资格了。

一周期，SearchGPT在跳票了将近3个月之后，终于被正式官宣了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo41oicfEA5JgV6Mkt7tu5WFJLT0jOibpS42yBc921gVibgG0MqAzDFBDxRsbugI7tlOzN0UuiaEh3usw/640?wx_fmt=png&from=appmsg)

我也是在看到的第一时间，申请了内测资格。

OpenAI说，会在大概一周的时间里，逐步开放给大家。

于是，我也在苦苦的等了一周以后，终于，发现自己。

还是没等到。

毕竟我特娘的，在OpenAI的各种内测里，永远是最后一批。

但是，那首Rap怎么唱的来着，XX就是兄弟多？。。。我虽然没拿到，但是我的好朋友
@毅恒
拿到资格了呀，在知道消息的第一时间，我就去恬不知耻的找他借号了。

他也很痛快，直接给我发了一串字母。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo41oicfEA5JgV6Mkt7tu5WFcX0ZsrQSvyibBIXDSBCBtKub8jWhCFESUiaB6yRDuth9VmpVZXcc7BqQ/640?wx_fmt=png&from=appmsg)

唯有感动。

在拿到号的那一瞬间，我就沐浴更衣，登上了他的号，进入了那个期待已久的，
SearchGPT。

网址在此：https://chatgpt.com/search，如果没有排队的朋友，也可以第一时间去排队一下。

一进来，就是一个极度简洁的巨大的搜索框。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo41oicfEA5JgV6Mkt7tu5WF2MuUhKxNSnz84OEkNnJSKo3ZOta4fLyHfHl9ZY7vAXAcZ9eNXCKnsA/640?wx_fmt=png&from=appmsg)

右上角有个小彩蛋，一个小按钮。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo41oicfEA5JgV6Mkt7tu5WFfCpCuEEEkFRUTHcM2fP4qru4a0RrZlmRsRpbTb6eCibvln3Gicm44Ouw/640?wx_fmt=png&from=appmsg)

翻译过来的意思就是，
设为默认搜索引擎
。

这明晃晃的，就是要抢Google的饭碗嘛。

我们在搜索框里，随便输入一个问题。

“2024年巴黎奥运会，截止北京时间2024年8月2日0点，中国队的奖牌数量？”

这个对于实时性要求极高，对数据溯源的要求也极高，如果你去拆关键词，搜很多的新闻报告，大概率就会错，你必须理解这个问题，真的去巴黎官网搜，去央视奖牌榜，或者一些三方的实时更新的榜单搜，才可能会对。

我先把这个问题的正确答案公布出来，
截止到8月2号0点，总奖牌数是
21枚
，11金7银3铜，奖牌榜第一。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo41oicfEA5JgV6Mkt7tu5WFoDaVyOVdg35VZQdnXobhLUPBiaGaZfgCO8MObNa3SibQaicYyVdnfeNQQ/640?wx_fmt=png&from=appmsg)

奖牌榜上实时数据虽然是22枚，但是有一铜其实是0点以后拿的，所以不算，正确答案是21枚。

我们先看一下其他AI搜索产品的情况。

Perplexity，直接躺平，6枚，咋地，你跟我这虚空吞金牌呢？

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo41oicfEA5JgV6Mkt7tu5WFZI0skHMMGHeyzcxnb1C8jcPp9OkiceU68pkEL1BZKIx68gHTJyyDJNQ/640?wx_fmt=png&from=appmsg)

秘塔AI搜索，抓了8月1号早上8点38的新闻，然后非常确凿的说是19枚。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo41oicfEA5JgV6Mkt7tu5WFxUgbeVBdpOO0YN6UbJpXc6y0P7AFdm0oNibia4sanibRVQE678gDS4fLQ/640?wx_fmt=png&from=appmsg)

浓眉大眼的360AI搜索，也答错了，但是哥们好在知道自己没抓到最新数据，知道只抓到1号早上9点的数据，所以抱歉了，虽然答错，但是没有出现幻觉。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo41oicfEA5JgV6Mkt7tu5WFnuzZMeatOxEicwGUP6yoqt7XQU1PtuEwKz3bTDrbKgGtofFvPiaHUFtQ/640?wx_fmt=png&from=appmsg)

最后，我们再来看看
SearchGPT。

直接从奥运会官网抓的数据，完美正确。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo41oicfEA5JgV6Mkt7tu5WFdfOJGdHSwBqAibxDHzZsm0iaqhv7FC1jt5tAm565q33I1QgF4zgMsz5Q/640?wx_fmt=png&from=appmsg)

而点进去参考链接，我才赫然发现，人官网明明写的是：
22枚。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo41oicfEA5JgV6Mkt7tu5WFrz2ChWib3fgEuVibf3UcduibLiaenLtcd2wAAb4dbBykemAUQ4PR9qEiccQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo41oicfEA5JgV6Mkt7tu5WF8xNMWV6h8ELxeUMbRB26uib1al76arwTJuyLAQDkia4ot1vXAL1eFic8g/640?wx_fmt=png&from=appmsg)

我在这两个网页所有地方，都没有看到一个21这个数字。

我都懵逼了，我真的不知道，
SearchGPT是如何如何判断时间，避开数字陷阱，得到了这个神乎其神的回答。

于是，我就追问了他一下：
“
你的这个21枚数据，是从哪得来的，请给我明确的信息源，和引用段落
”

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo41oicfEA5JgV6Mkt7tu5WFsyzhInTHpicWcb4In1NNCQia0YhprzdohpkMh7E3icUfyspBWEZyXOC1A/640?wx_fmt=png&from=appmsg)

而
SearchGPT，居然开始，已读乱回。

我心里隐隐有一种，不好的预感。

于是，我就把问题改了一下，改成了
“2024年巴黎奥运会，截止北京时间2024年8月2日1点，中国队的奖牌数量？”

这道题的答案，想必朋友们都知道了，是22枚。

而看到SearchGPT回答的那一刻，我心中千万只草泥马翻腾而过。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo41oicfEA5JgV6Mkt7tu5WFt7osibLAg4hdR8sY0gynQdiciarAicRYlic3DULjzkic4HVvQeHsFdlhs7Xg/640?wx_fmt=png&from=appmsg)

此时，
SearchGPT被Perplexity附身。

我又换了一种问法，我再问：
“2024年巴黎奥运会，截止目前最新时间，中国队的奖牌数量是多少？”

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo41oicfEA5JgV6Mkt7tu5WFvu75vAwtcBctF9JzsFQTXppADZVjjqayrIA2RFRnia7Gz7FK8icXIOMw/640?wx_fmt=png&from=appmsg)

19枚...终于跟秘塔AI搜索同源了，答案质量上，还不如360AI搜索，人家至少还会反思。

所以这个小实验发现，8月2号0点那个21枚出神入化的精准回答，根本不是
SearchGPT多牛逼，而是单纯的。

瞎猫碰到死耗子，纯种的巧合。

心中瞬间对
SearchGPT完成了祛魅。

当然，这个问题，毕竟是难倒所有AI搜索的杀手锏，大家都躺，你
SearchGPT躺了也不算啥。

也不能这一个问题，就一棒子把SearchGPT打死不是。

我又问了其他一些问题。

比如
“
中国经济特区有哪些
”，
SearchGPT又G了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo41oicfEA5JgV6Mkt7tu5WFtk9JIibmwTkzP5aicqkPLUrFyibtMI7bGztycNoNsPciaibvLgLv4XjunJg/640?wx_fmt=png&from=appmsg)

答案明明是7个，却只给我回答了5个。

又比如经典问题，
“9.11和9.8谁更大”

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo41oicfEA5JgV6Mkt7tu5WFOqK4FDslpHqmFUxH6pANmyNibSkmGHO2KSOQz3ymwm5fxjVrcAQm6tQ/640?wx_fmt=png&from=appmsg)

直接原地翻车。

不是哥们，你左边明明有这么多的链接，你就不能参考一下吗，非一个不用，直接用自己的模型能力进行回答。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo41oicfEA5JgV6Mkt7tu5WFgGOtmsq6tIPfb9vJicwLbAcuFeXZ9dLFyKDiblxk03icCzL0aicZqW1eibQ/640?wx_fmt=png&from=appmsg)

然后我又问：
“
苹果iOS18最新的AI功能有什么
”，
不是哥们，我用中文问问题的，咱就是说，咱能翻译一下再给我回答吗。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo41oicfEA5JgV6Mkt7tu5WFxUbiaB64ShfR4Yffp4a9vjr0krWic1sic6MgCYXicRMdGLfgeice6bTU6kA/640?wx_fmt=png&from=appmsg)

比如我又问：
“24年有关LLM Agent的论文”。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo41oicfEA5JgV6Mkt7tu5WF9yZt3PdNXfPicZ5Xyzb6biaJibzOuibdzjrI5tKzicN9tOLG4gNia7VyPPqw/640?wx_fmt=png&from=appmsg)

咱就是说，搜论文其实完全可以学一下人家，咱去arxiv来搜嘛，咱没必要引用机器之心的文章你说对不= =

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo41oicfEA5JgV6Mkt7tu5WFpOK6XqnibTQwEv5ZfrRd9Cic2dCIHQqRMROibfW4Dqh9t0DX68icRnTLiag/640?wx_fmt=png&from=appmsg)

再问：
“
给我推荐现在中国比较著名的精品咖啡
”

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo41oicfEA5JgV6Mkt7tu5WFf9MR8iawzJ1kKrOgmVneI0zNyYibaIrkKWK23K7Yb8NA4WtbZZDps6uQ/640?wx_fmt=png&from=appmsg)

行吧，你推荐了瑞星，我们就是好兄弟。

整体而言，说句实在话，SearchGPT这玩意。

都不是瑕不掩瑜，是有点瑕瑜互见，甚至瑜不掩瑕的意思。

翻下了X，发现拿到资格的，对
SearchGPT评价也不是很高。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo41oicfEA5JgV6Mkt7tu5WFvjL5ibficlPVPSTic8KJruQ0czLKHjLRRV3AphnzfrHXgMFPtu3Yhx3wg/640?wx_fmt=png&from=appmsg)

如果硬要我对SearchGPT这玩意做个总结的话，我可能会这么评价：

优点：

界面简洁，用户体验舒适；
抓取的信息来源质量较高，基本是权威媒体或官方信息源；
回答得直接，废话少；
卡片生态做的挺丰富的，但是大部分都是国外的；
可以追问；

缺点：

有些时候只能回复英文答案；
一些情况下对中文语义理解能力不够；
准确性着实一般，有时候搜到了东西但是不调用，相信自己的模型内部知识。
在时间维度上的信息理解和信息抓取能力存在不足，不过这是通病了；
用户体验不够丰富，没有脑图、ppt之类的（maybe也算是简洁的优点？）

当然，为了大概了解几个主流的原生AI搜索产品的一些能力，我们也跟AI视频、AI绘图、AI PPT等等一样，会做一个全面的评测。

测试的维度包括：实时性、准确性、语义理解、中国特色数据、来源多样性。当然这是我自己瞎总结的野鸡维度，仅给我自己做参考用。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo41oicfEA5JgV6Mkt7tu5WFZLlqMZ7hAGuUcYib0tM7ribicD0yNX5BZkoj71OBv0eGuI39amt81PFvg/640?wx_fmt=png&from=appmsg)

不过表格没做完。

所以，后面做完了，我会再单独写一期。

AI搜索产品的全面评测。

希望可以给大家带来一些帮助。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
