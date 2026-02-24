---
title: "我用了2周PIKA1.0后，总结了10个宝藏使用技巧 - 建议收藏公测后用"
发布日期: 2023-12-18
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647660789&idx=1&sn=756a1ca3f9c3fb7b9edf9f248ee9863e&chksm=f135f5d0c33a8e7cd0054d467e096977749969553ef5b300d298b5a4ec3510aebf47bdecfcfe"
---

## 摘要

**1) 一句话总结**
本文总结了基于两周内测经验的10个PIKA 1.0实用技巧，涵盖提示词优化、参数设置、视频延长与局部修改等核心功能，旨在帮助用户在公测中获得更稳定、优质的视频生成体验。

**2) 关键要点**
*   **善用负面提示词：** 建议添加通用负面提示（如Blur, distortion, deformation等）减少画面崩坏；生成写实视频时应排除动画相关词汇（cartoon, 3d, animation）。
*   **精简正向提示词：** 避免冗长复杂的描述，采用“清晰主体描述+画面相关Tag”的短句结构，以降低画面变形概率。
*   **优化相关性参数（Relevance）：** 官方默认值12偏高，建议设置在5～10之间（作者最常用值为7）以保持画面稳定。
*   **延长视频的帧率策略：** 延长视频（每次4秒）依赖上一段的最后一帧。建议将初始帧率设为12帧而非24帧，以避免最后一帧出现动态模糊，后期再用剪辑软件补帧。
*   **延长视频的相关性递减策略：** 每次延长视频时，建议将相关性参数逐步减1（例如7→6→5），以最大程度提高画面的一致性和稳定性。
*   **延长视频的运镜组合：** 在延长视频时可以修改运镜方向（如先拉远，延长时改为右移和上移），从而实现复杂的立体长镜头。
*   **区域修改的框选范围：** 选框必须完全覆盖物体在这4秒内的所有运动轨迹及阴影，以确保替换完整。
*   **视频扩展的自由度：** 在进行视频扩展（扩充蒙版区域）时，原视频在画布中支持自由移动和缩小。
*   **利用Seed值复现：** 保持提示词、负面提示、参数和Seed值一致，可以复刻已有视频的大致构图与动作。
*   **Retry功能管理：** 点击Retry重新生成时，新视频会收纳在原视频下方的“抽卡盒”中，保持界面整洁。

**3) 风险与不足**
*   **画面变形风险：** 提示词过于复杂或相关性参数设置过高（超过10，特别是达到25时），会大幅增加画面严重变形的概率。
*   **视频延长模糊风险：** 若在24帧模式下生成视频，PIKA可能会添加动态模糊，若最后一帧刚好模糊，会导致后续延长的视频整体发糊。
*   **局部修改畸变风险：** 在区域修改时，若白框未能完全框住物体的运动范围（如留了半个身子在框外），会导致生成“克苏鲁式”的畸变画面。
*   **Seed复现局限性：** 使用相同Seed值和参数“抄作业”时，只能复刻大概的构图和动作，无法做到百分之百完全一致。

## 正文

最近挺多小伙伴都拿到PIKA1.0的资格了。

在这也很感谢Jessie让群友们优先体验PIKA1.0。。。感觉这两天她手都开冒烟了。。。

作为已经用了2周的“元老”，我也总结了不少关于PIKA1.0的使用技巧和经验，我觉得这些可以让大家更好的体验更有趣的PIKA1.0哈哈。

之前的PIKA1.0首发评测，可以看我的这篇文章：
【全网首发】PIKA1.0上手评测 - 你就是传奇

关于PIKA的使用技巧，这次我自己总结了10个，个人感觉还挺有用的，在PIKA即将全面公测之际，分享给大家，希望对大家后面使用PIKA1.0，会有一些帮助。

PS：这些技巧仅是我自己使用下来的主观经验，不杠，杠就是你对。。

OK，话不多说，直接开始。

1. 负面提示有奇效

PIKA这次上线了负面提示，就是跟SD一样的那个玩意，效果很好，很多时候有奇效。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpVnpWica4tudoB65s6kosmOta6eomD3hI43FeO2icUTXrYeCnnpMYk5xuh3esPpiaayBCCdQ0rVnDbw/640?wx_fmt=png&from=appmsg)

我建议在任何时候，都可以加一个通用的负面提示：

Blur, out of focus, distortion, deformation, exposure

可以大幅的减少一些诡异的画面。比如人物变形，画面失焦之类的。

因为PIKA对动画的支持极好，数据集里肯定更多的也都是动画相关的风格，所以如果你想做极度写实的视频，也可以把
cartoon, 3d, animation这些跟动画有关的词给ban了，效果会更好。比如这个：

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURpVnpWica4tudoB65s6kosmOvl989UX4fu0gPWDx1NoFteNe2zwCTMu4tjcp2rhhr8waVIabZM9ZXw/640?wx_fmt=gif&from=appmsg)

善用负面提示，这块可以去学一下SD的负面提示，那个已经很成熟了，可以魔改一下直接搬过来。

2.
Prompt不要太复杂，多用短句

我自己跑了N多PIKA1.0直接的文生图，用下来整体有个体验是：在文生图的时候，不要像MJ一样，写一堆乱七八糟的什么“我不敢相信这是多么美丽”。

即使是已经负面提示写的很明确的情况下，在Prompt里面写的很复杂，会大幅增加画面变形的概率。清晰的主体描述+画面相关Tag，就很OK了。

比如这个：
Cinematic shot, angry female soldiers in cyberpunk city, gun in hand, anime style

电影镜头，赛博朋克城市愤怒的女兵，手中的枪，动漫风格

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURpVnpWica4tudoB65s6kosmOU7HqtibAwhReibcmcEucx7gzhn4micy1Z2nGNubzic3UAydJ0ziaaOpMTibw/640?wx_fmt=gif&from=appmsg)

3.
相关性设为5～10之间效果更好

提示词相关性也是PIKA1.0新上的功能。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpVnpWica4tudoB65s6kosmO8o9dcHk1X2pvfE0BodJMqZ0ESDZUkvBSr1dzgPic4Sib8nc5rhvvldicw/640?wx_fmt=png&from=appmsg)

这个提示词相关性官方默认是12，但是还是太高，我曾经同一个Prompt从0～25分5档，每档跑过10个视频，整体测试下来，超过10的时候，画面的变形会严重的多，25的时候就更严重了，就像这个Bad Case：

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURpVnpWica4tudoB65s6kosmOXJN7XzvV4rgEBZcUPvOvfsDL3nynMPARrqG8iasQEfBK2qJnbOE5kIw/640?wx_fmt=gif&from=appmsg)

所以，我测试下来，5～10之间效果最好，没有任何理由把这个提示词相关性设到10以上，我自己最常用的数值是7。会稳定非常多。

4. 需要延长视频时可以将帧数设为12

PIKA1.0是支持在生成的视频基础上，延长4s的视频的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpVnpWica4tudoB65s6kosmOHYnG7xCYkvialBbRSPch7kZTktyDuhlMvjaOrrWr5DZLqcQ28tdREjQ/640?wx_fmt=png&from=appmsg)

延长视频其实本质上，就是用已生成视频的最后一帧，作为延长的4s的视频的起始帧。所以你最后一帧的质量至关重要。

我试下来以后，如果像保证下一段视频的稳定性，可以将帧率设为12而不是24，因为PIKA在24帧的时候会在一些细节上去加一些动态模糊，万一最后一帧刚好某个地方模糊了，你后面的延长的视频就糊了。

所以设为12帧，可以在保证连贯的前提下，尽可能的保证后续视频的稳定。最后再用剪辑软件去补帧。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpVnpWica4tudoB65s6kosmOoRjIfIpqugcUobhJNj54ib5vORiaeQhRRj53FB4NZz3ba3VrkKllN30Q/640?wx_fmt=png&from=appmsg)

5. 延长视频时可以将相关性逐步递减

还是关于延长视频，我们都知道提示词相关性对于画面的影响格外的大，你设的越高就越限制AI的发挥，画面也就越容易崩。

所在在延长4s的时候，将相关性逐步减1，比如你最开始初始的相关性值是7，那么下一次延长镜头的时候就可以减1变成6，再延长的时候就可以减1变成5。这样能最大程度提高一致性和稳定性。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURpVnpWica4tudoB65s6kosmORos5t9ibwBWHMHzoaE24gfsdsvQmZzXR0TicjJxHksDw22dDDrskqm4Q/640?wx_fmt=gif&from=appmsg)

6. 延长视频的时候可以修改运镜，实现立体运镜

还是延长视频的技巧。我们都知道PIKA1.0是在UI上可以直接操控运镜的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpVnpWica4tudoB65s6kosmOVH4oKKmibicqvhb3hyfsNh3uBibDLyS5YqpOfVRViaEbf7icFA1X2xc6KDg/640?wx_fmt=png&from=appmsg)

在第一次生成视频的时候，是可以自选运镜去生成的，但是在延长时间的时候，其实是可以修改运镜的。

比如我的这个机器人，我是先添加了一个Zoom out也就是拉远的运镜，先生成了一个视频。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURpVnpWica4tudoB65s6kosmOArbic37ciaEgzM8f6UZ0iaY9icZGTwCRGrrGdCRicKDw3R7Ib61b6P0TbQQ/640?wx_fmt=gif&from=appmsg)

然后，我在延长4s的时候，把运镜给改成右移和上移。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpVnpWica4tudoB65s6kosmOrpVStc0h6UPhibTobnVJPibwS0Z933RhmwhDmiajjaBDJv54lIzxyrgSw/640?wx_fmt=png&from=appmsg)

这样就可以实现一些长镜头的立体运镜了。刚才的机器人效果是这样的。（卡是因为GIF超过10M我只能抽帧了。。。）

7. 区域修改时白框需要框住物体运动的所有区域
在使用PIKA1.0的区域修改时，PIKA1.0用的是一个白框，这个白框需要框住这4秒内物体所运动的所有范围。
比如这个鸭子，在这4秒内，是从右游到左的，这时候你需要把它整个游动的轨迹都框上，影子最好也框上。
这样才能替换完全，如果你留了半拉鸭子在白框外，你到时候就能见证克苏鲁古神的变身了。
8. 视频扩展时是可以缩小或移动的
视频扩展也是PIKA1.0新上线时独一无二的新功能。
可以根据PIKA预设的比例，去扩充蒙版区域。但是其实挺多人没发现，原视频在画布中，是可以随意移动或者缩小的。。。
就像这样：
所以可以大幅发挥你的想象力，不要局限于原画面本身。
9. 可以利用seed值"抄作业"
Seed也是PIKA新出的参数，其实跟AI绘图的SD还有MJ是一样的，每个视频都有个seed也就是种子的概念，我们可以通过相同的Prompt、相同的负面提示、相同的参数，以及一样的seed值，来复现之前已经实现的视频，简称抄作业。
但是需要注意的事，复现并不是完全一样，而是在这个基础上差不多，可以看到我这三个视频，虽然seed值和所有prompt、参数都一样，但是还是有很多差别的。所以这个需要注意，但是复刻大概的构图、动作是没有任何问题的
10. 体验爆棚的Retry
这是我最喜欢PIKA1.0的一点，某way在生成的时候，即使完全一样的参数，他也给你全部堆在左边，乱七八糟，极其混乱。
但是PIKA新增了一个Retry功能，引入了一个“抽卡盒”的概念，即你可以在这个视频下方点击Retry，这个视频就会再Roll一次，同时存在你这个盒子中。
从而让你整个生成的体验极佳，可以放心大胆的Roll。
写在最后
以上，便是我这段时间的经验，以及我认为能少走一些弯路，让大家在使用PIKA1.0的过程中优化体验的一些小技巧。
根据PIKA官方的消息，他们已经开始逐步推送PIKA1.0的使用资格，开始准备全面公测了。
而昨晚，Jessie也给国内的部分用户做了一次小小的交流，分享了很多的经验。
夜里12点钟，腾讯会议上居然还有160人同时在线。
所以今天不由自主，就写下了这篇文章。
因为真的很想看到大家用AI做出很多有趣的作品，真的很想把我知道的一些经验分享给大家。
毕竟。
有一群志同道合一起玩AI的朋友，真好啊。
。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURpVnpWica4tudoB65s6kosmOC0ukd3AzQgWERwjicicgFUHab3OHOa7WlgRRChl8S5uob0kRubylckVA/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURpVnpWica4tudoB65s6kosmORLg0Uic1YunyxYzicVfpjjoo3M9Lo9pRPfp5gPP0ZJN42pe1U2Kkftew/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpVnpWica4tudoB65s6kosmOA9M0KISHO2Vqp0dIVmt0uGJQjPZk1DGRJK5Mn3nhl4nlBF0lvD7PBQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURpVnpWica4tudoB65s6kosmO7Bz5QkDP8jynd07s9fBZkmhzQC1Q7kmmUWUjUb9mXm6ic5vw6LSibI4g/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpVnpWica4tudoB65s6kosmOyoRdOVib46AibAshmzH9qb77LoRmMwXPXM4rI1eOKeQrqYhrx6NKYNQg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpVnpWica4tudoB65s6kosmO2qq0HteUCvjA1NSHcMFRibdyF5AnU9zZSiaibxCic3wBMT6rJAQxbbHXkw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpVnpWica4tudoB65s6kosmOmDLOfWQTzds9LJJvZFdDlMUYYMSibFL6NVp9DOxjDJPpjLP9tuGnpCw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpVnpWica4tudoB65s6kosmOOeeQlnbrcTKAWr4UO8ZKwHV3cYib0ncv6BpHoxO4EY4ToasYY3PrYmQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpVnpWica4tudoB65s6kosmOPkAQS0mW97n3BuDeDa2VALEFRCc9OQaerTUnsm5Q7aR8dqiaRM2cRjg/640?wx_fmt=jpeg&from=appmsg)

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
