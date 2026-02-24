---
title: "我用AI分析了227部短剧后，终于看到了快手AI短剧的未来。"
发布日期: 2024-07-18
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647663873&idx=1&sn=4c8f3b06a588ad88b574f46c2b8d8453&chksm=f1564f9858e3d6682ab7b7b5e5a4abdaf8b31dcc9ed1984fb661360c34e40bcec41c74d27132"
---

## 摘要

**1) 一句话总结**
本文通过数据分析快手首部AI短剧《山海奇镜之劈波斩浪》的播放量与用户评论，验证了AI短剧在C端市场的可行性与较高的用户接受度。

**2) 核心要点**
*   **分析对象**：快手首部AI玄幻短剧《山海奇镜之劈波斩浪》（共5集）完结，作者通过客观播放量与主观评论两方面评估其市场反响。
*   **播放量抽样方法**：通过随机截取快手短剧推荐页，利用ChatGPT提取了226部短剧的播放量数据作为分析样本。
*   **大盘数据分布**：快手短剧播放量平均数为1133.96万，中位数为159.05万，75%的剧集播放量低于580万。
*   **该剧总播放量表现**：该AI短剧总播放量为744万，在样本中处于前20.35%的分位，超过近80%的短剧。
*   **该剧集均播放量表现**：该剧集均播放量达148.8万（大盘中位数仅为2.1万），集均排名超过约92.07%的剧集，综合处于前15%的优良梯队。
*   **评论抽样方法**：使用RPA抓取该剧400条评论，经清洗去重并剔除作者自身回复后，获得283条有效C端用户评论。
*   **用户情感分析**：经ChatGPT语义打标，用户评论情感分布为：中性53.19%、正面35.82%、负面10.99%。
*   **核心结论**：该剧以仅11%的低负面评价率和前15%的播放成绩，证明了普通用户对AI短剧并不反感，成功跑通了AI短剧面向C端市场的模式。

**3) 风险/不足**
*   **市场竞争风险**：短剧生态呈现极强的“头部效应”，流量差距巨大（最低数千至最高数亿），非头部作品获取流量难度高。
*   **用户接受度风险**：大众市场对AI生成视频内容普遍仍存在较强的抵触情绪，容易引发负面评价。
*   **数据样本局限**：本次分析受限于无法获取官方全量数据，仅采用随机抽取的226个样本进行统计，属于非官方的估算分析。

## 正文

昨天晚上6点，快手的第一部AI短剧《山海奇镜之劈波斩浪》，在连载了5天之后，完结了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo5hHkJxuiaIjps5bwXAxaGJxKMKicHUGBCLP82TB8Mdd8S7RuSPqRZvhNHd0PIzAVArxS79ic6rfibEA/640?wx_fmt=png&from=appmsg)

AI短剧，作为AI视频领域和短剧两个领域的结合体，这是一个新的种类。

而
《山海奇镜之劈波斩浪》，是AI短剧赛道里面目前我能看到的制作最精良，真正的可以称得上是短剧的品种。

没看过的小伙伴，可以直接去快手搜山海奇镜就行，对AI感兴趣的，还是非常推荐去看一看的。

我自己是正儿八经追了5天，昨晚看完了大结局。

看完了以后，对剧本身制作水平、AI难度，其实我没啥特别想说的。

我其实更关注另一个点，
就是他的反响，到底怎么样？

可能很多行业内的人也会非常的关心，
AI短剧这个模式，市场到底买账吗？用户到底爱看吗？

过往我们所做的绝大部分的AI视频，其实很多时候你会发现，他跟C端的触达并不是很强，而短剧，是正儿八经要靠C端普通用户买账的。

所以，为了搞清楚这件事，我决定用我自己的野路子，去做一下这部剧的数据分析。

主要看两个东西：

播放量：主要看
《山海奇镜之劈波斩浪》
在快手短剧生态里属于什么梯队。

用户评论：用户的评论是正面多还是负面多。

非常的野路子，但是确实也能给我自己带来一些参考。

一.播放量

这个数据分析其实很简单，就是我希望能拿到快手短剧所有剧集的播放量，这样就能形成一个分布图，可以看到有多少是10万到100万之间，有多少是在100万到1000万之间，也能看到
《山海奇镜之劈波斩浪》在其中，处于一个什么位置。

因为播放量其实很多时候就能说明很多东西了，你在这个生态中的身位，就能看出来用户到底看不看你。

但是我肯定没办法拿到快手短剧的所有数据，快手网页端又没有短剧的数据，不好爬。

所以我想了一个偷鸡摸狗的办法，
我在快手短剧推荐页面中，随机截了25张图，每张图上有9个剧的信息
，大概就能得到220个左右剧的信息。

推荐其实是乱序的，有几千播放的剧甚至都会给你推出来，也有几亿播放的剧，所以这个样本还是比较符合统计学的，理论上也是具有一定参考意义的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo5hHkJxuiaIjps5bwXAxaGJuOjQThmISIKYVpeIHW7SV1qnUxDqOqOFntfCUVh4BQ43FSARK6sL6A/640?wx_fmt=png&from=appmsg)

每个剧都有
剧名、集数、播放量
，我要做的，就是把这些信息，让AI给我提取出来，列成表格。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo5hHkJxuiaIjps5bwXAxaGJ0Y0BibJNEPbEk8JnOqJlC40XgbMjfwK8681dIKNn8icvY28enhfMwM9g/640?wx_fmt=png&from=appmsg)

我一般会喜欢输出Markdown格式，稳定些，至于Markdown转成excel，也挺简单的，一个在现的小工具就行。

https://tableconvert.com/markdown-to-excel

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo5hHkJxuiaIjps5bwXAxaGJTTicic6s6ibJhicVygpSl3UTMNia1MazLyWj5S8qTqNCjRBqLGWfUiadefPA/640?wx_fmt=png&from=appmsg)

然后，我就把23张图都扔到了ChatGPT里，于是，得到了一个有227个短剧数据的表格，但是有一个无效数据，所以实际是226。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo5hHkJxuiaIjps5bwXAxaGJplN4Bm8BWAsyqcmqeZOwbpRexuXKTBgibNLe252WvIeoPqek2o3ImPQ/640?wx_fmt=png&from=appmsg)

有了数据之后，那自然就好办了。

继续扔到ChatGPT里，看下播放量的分布。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo5hHkJxuiaIjps5bwXAxaGJ4javUIBibqqLEjzvzH2cKQhQVyWjFNmQuSmEAlkhrcmTpRicaibzNGThw/640?wx_fmt=png&from=appmsg)

平均数1133.96万，中位数159.05万，最低的3521个播放，最高的7.2亿播放。

有四分之三的剧，是低于580万播放的。

这差距实在是太尼玛大了，短剧完全就是头部的游戏。

而
《山海奇镜之劈波斩浪》的播放量（7月18号凌晨3点），是
744万
。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo5hHkJxuiaIjps5bwXAxaGJoPibyeKiavic40h9Y7YIictibIOIalfaHA8nWDEB50LSQcCE8mSdTfLqkicg/640?wx_fmt=png&from=appmsg)

在播放量梯度中的分位：
大约处于前第20.35百分位
。也就是超过了将近80%的短剧。

而需要注意的是，
《山海奇镜之劈波斩浪》只有5集，如果我们算每集均播放的话，它的集均播放量是148.8万。

而整体集均播放量的中位数，其实只有2.1万。

如果算集均播放量的话，
《山海奇镜之劈波斩浪》是第18名，超过了约92.07%的其他剧。

所以，从播放量这个客观数据我们可以看出，《山海奇镜之劈波斩浪》综合来看，是处在前15%的梯队里，不是那种超级破圈的神剧，但是至少在短剧生态里，可以说算是一部成绩很不错的良品剧。

而且，是以AI短剧新物种的身份，拿到这个成绩的。

二.用户评论

上面的播放量，是一个非常客观的数据。

而用户评论，就是相对应的非常主观的数据。

用户评论其实就很好理解了，就是看
《山海奇镜之劈波斩浪》下面的评论，有多少人觉得不错，有多少骂。

从用户评论的情感比例判断，大众对AI短剧这个新型物种，是否接受。

那一步，自然就是得先有数据，我就先用RPA，把
《山海奇镜之劈波斩浪》5集下面的评论全部抓下来了，一共400条数据，形成了一个表格。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo5hHkJxuiaIjps5bwXAxaGJLbNMRdibfXcpxgHldTx4T1gsibhuE8LangeAJroCoFqwWowdQ0x9icYtQ/640?wx_fmt=png&from=appmsg)

因为会有很多乱七八糟的无关数据，还有一级评论二级评论。

我就简单做了一下清理，剔除重复的，最后剩余336条数据。

而这部剧的作者闲人一坤的评论，对于数据分析来说，也没有意义，也是该剔除的，所以
再剔除掉
闲人一坤的53条评论数据，最终剩余283条是正儿八经的用户评论数据。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo5hHkJxuiaIjps5bwXAxaGJOMVRRoZULS3LACiaClKznpdticlsaEm6fUvl6SkaW3JJO4LnAmTFKfww/640?wx_fmt=png&from=appmsg)

然后就是情感分析，就是最简单的语义打标，这一步就很简单了，直接扔给ChatGPT，让他来做就完事，然后我们就能得到一个标注好情感的表格。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo5hHkJxuiaIjps5bwXAxaGJxWbvc8ibvP1MQ2ASa9E2ZxdwhibDyAdONPhHgKothX3DsICbSShgaibFg/640?wx_fmt=png&from=appmsg)

这个表格，同样可以让ChatGPT继续分析。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo5hHkJxuiaIjps5bwXAxaGJeGGcbUapnc2D4DZqa27ibNy4HiaY9mjDJ6A7D2Vlib4rIDZQyH3c7pR7Q/640?wx_fmt=png&from=appmsg)

中性情感占比：53.19%

正面情感占比：35.82%

负面情感占比：10.99%

可以非常清晰的看到，有一半多的人，对AI短剧持中性态度，可能觉得还不错，可能也会评论一些无关的话题。比如：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo5hHkJxuiaIjps5bwXAxaGJgMpcs2h8iaHtjozBRnAEFau1Obop6tSXBhZLpw1oum55qovO4rGSXww/640?wx_fmt=png&from=appmsg)

就我自己得亲身经历来看，AI视频这个东西，说实话，在很多时候，是会被人喷的挺惨的，至少我自己去年8月做的《流浪地球3》AI预告片，虽然很火，但是不妨碍被喷的体无完肤。

而
《山海奇镜之劈波斩浪》，只有11%的差评和负面，在我看来，已经算是很优秀的了，毕竟你面对的不是同样的AI视频创作者，而是真正的C端用户，不能说大家都觉得这个东西很棒很牛逼，只要大家不反感，这个已经很难得了。

写在最后

看完上面所有的客观和主观分析后，我相信，大家对快手这个首部AI玄幻剧
《山海奇镜之劈波斩浪》的身位，有了大概的理解。

作为第一部AI玄幻短剧，在这个大众其实对AI有比较强的抵触情绪的情况下，能拿到这个成绩，我觉得还是挺成功的。至少，给了后面也想做AI短剧的人信心。

这个模式，是还有可能跑下去的。

如果上来就低于播放量中位数，上来就是差评如潮，那我觉得后面谁想进场，那都得掂量掂量。

万幸，它担住了。

开拓者的使命，已经有人完成了。

台子已经搭好，只等各种娟红。

所以，现在我更想知道的是。

下一个接棒者，会是谁呢？

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
