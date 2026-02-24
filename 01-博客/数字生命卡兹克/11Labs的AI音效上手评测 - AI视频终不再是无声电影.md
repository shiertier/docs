---
title: "11Labs的AI音效上手评测 - AI视频终不再是无声电影"
发布日期: 2024-03-11
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647661733&idx=1&sn=fbf41a0075d381e6bf9a7e564e3991f5&chksm=f11815d0ef44dd48c337b73dba74d3f066989cffcf8913699f361efcff9a4467f2a69e7d6ac4"
---

## 摘要

**1) 一句话总结**
11Labs推出了极简的AI音效生成工具，虽然生成速度快且已开始与PIKA等视频平台结合，但目前在声音真实感、清晰度和语义理解上仍有欠缺，距离成熟的商用交付还有一定距离。

**2) 关键要点**
* **产品背景**：11Labs在为Sora首批视频配音营销后，正式开放了其AI音效生成产品的内测。
* **交互设计**：官网界面极简，仅提供一个Prompt（提示词）输入框。
* **生成效率**：生成速度极快（不到10秒），且每次操作会一次性生成5条音效供用户挑选。
* **实测数据**：作者针对特定提示词生成了约30条音效，勉强可用的比例仅为10%~20%，约40%的生成结果无法听出目标声音（如脚步声）。
* **使用技巧**：由于语义理解能力有限，复杂场景（如外星人走在嘈杂商业街+汽车鸣笛）通常需要将Prompt拆开分别生成，再通过后期合并音轨来使用。
* **生态合作**：AI视频公司PIKA近期上线了生成视频自带音效的功能，推测大概率接入了11Labs的API。
* **行业格局**：AI声音赛道目前主要分为AI配音（微软TTS、11Labs）、AI音乐（SunoAI）和AI音效三个方向，其中AI音效尚属较少被开发的领域。

**3) 风险/不足**
* **质量欠佳**：生成音效的真实感和声音清晰度较差。
* **语义理解弱**：对Prompt的语义理解不够精准，难以一次性满足复杂的细节要求。
* **商用成熟度低**：整体效果仍处于早期阶段（作者评价类似于Midjourney V2水平），目前无法达到真正的可商用和可交付标准。

## 正文

还记得在Sora在2月16号发布之后，AI声音届的巨头，11Labs，直接来了一次鬼才营销。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrndoUVRZJZzWmuSMjxtP8kg4ibibLfKmicF2pj10ib8WBAUKia3tD2dibahe1gKpPMldh5Wxuksv9qGGlQ/640?wx_fmt=png&from=appmsg)

他们把第一波的Sora视频，直接配上了音效，然后做了一个剪辑放了出来。

而最关键的，就是这个音效了。

全部是由11Labs的AI直出，这可能也是第一个正式踏入大家眼帘的AI音效产品。

其实坦率的讲，在我心里，音效设计，一直是一个非常重要、难度极高但又容易被大家忽视的领域。

一部片子或者游戏能让你沉浸进去，你可能更多的会夸他的剧情、画面、配乐，但是很少有人会去夸他的音效，比如夸你这个关门声关的真真实等等...除非你是比如战地或者PUBG这种，游戏体验很大比例是听枪声反馈的...

但是音效，是沉浸感中绝对重要的一环，而做一个优秀的音效，有时候难度更是超高，比如《哥斯拉》里面经典的吼声。

制作团队用了很多种方法去做哥斯拉的吼，比如用干冰升华时在金属通风管道中造成的震动和尖叫制作出了哥斯拉金属质感的长啸，比如他们在抛光过的地板上用大木箱拖动，拖出了那一阵阵令人毛骨悚然的胸腔共鸣。

这才有了这史上最著名的怪兽的惊鸿一瞥。

我说这些，是想告诉大家，好的音效设计，真的很难，也很贵。

而这，却正好让AI，有了用武之地。

在11Labs2月18号放出视频，并给出排队链接后，我当然是第一时间果断去排队了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrndoUVRZJZzWmuSMjxtP8k9sQX2EtsBzdUU0kvrQnQMFJiak4S6560icl34tfaD3cwn1K7IvfH3bmg/640?wx_fmt=png&from=appmsg)

网址在此：https://form.typeform.com/to/gg0xzZW4?typeform-source=t.co

然后就...石沉大海，毫无音讯了。。

直到今天，在隔了将近1个月之后，我终于收到了11Labs的邮件。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURrndoUVRZJZzWmuSMjxtP8kgUmq9wb9fSib0YGxSVdTRrAINnWXVRQSWUMVZy3FibHRbiaGaRgIguBGQ/640?wx_fmt=jpeg&from=appmsg)

终于有机会，来玩一玩，这个最强的AI声音公司11Labs的，AI音效了。

11Labs的官网在此：https://elevenlabs.io/

打开他们的页面，其实还是...挺简单的。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrndoUVRZJZzWmuSMjxtP8kBOW5UGNt9DjtIUoNOEdJTbVLspeTBbsVTBRyHxhyomic9S9RyWrwzJg/640?wx_fmt=png&from=appmsg)

一个Prompt输入框，就，啥也没了。。

随便写一句Prompt：

On the concrete floor, a big fat man walked from a distance, getting closer and closer（水泥地上，一个大胖子从远处走来，越走越近
）

大概不到10秒时间，音效就生成了，速度相当快。

11labs的做法也非常AI，一次性给你5个，你挑吧。反正都是要roll的，不如让你体验好一点。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrndoUVRZJZzWmuSMjxtP8kcXQqgjnOZbsB5zBzic03BfWD7ufXBzsAfb3eF78ZVPibbB6HxeCxdiaXw/640?wx_fmt=png&from=appmsg)

这一个prompt我roll了大概30条，个人感觉，勉强能用的比例大概在10%~20%左右，首先至少得是脚步声，再次是水泥地和大胖子，再次是越走越近。

有将近40%的比例我都听不出来是脚步声，更别提后面的两个细致要求了。

我大概放两条让大家感受一下。

我这种非专业选手，能用的比例都这么低，更别提一些专业选手了。。。所以如此看下来，11Labs选择一次性放5条还是有道理的。

但是成本确实是低，roll的很快。

于是，我决定，不如复刻一下11Labs自己的营销做法。

用几个Sora发布的最新视频，AI音效配个音，让大家直观感受一下，效果到底怎么样。

标准是，每个Prompt我roll20条，然后选我认为的最优音效。

首先是：

"一只狗快速敲击键盘"

"一辆F1赛车在赛道上飞驰"

"
用茶壶将水倒入水杯中
"

"外星人走在城市中，繁华的商业街，嘈杂的人群"&"汽车的鸣笛声"

我个人跑了2个多小时，最直观的感受就是，真实感、声音的清晰度度还是差了一些，Prompt的语义理解也不是那么的好，有时候需要把Prompt拆开去跑，最后合一下才能用，不过毕竟是叠音轨，拆开跑我觉得不是很严重的问题。

整体上，离真正的可商用可交付，我觉得还是有不少距离需要走。现在类似于MJV2左右的水平。

无独有偶，11Lbas除了在自己的产品上，推了这个AI音效的功能之外，也在积极的跟一些AI视频公司合作。

比如PIKA昨天就刚上了AI音效。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrndoUVRZJZzWmuSMjxtP8kj5yqvJMPrPP36KDlia8Fn4ibDIZcZIMb69J40lm66DTuJ3bgpJbYCbKQ/640?wx_fmt=png&from=appmsg)

虽然这次没说是用的哪家公司的API，但是猜也能猜到，大概率是接的11Labs的。

可以直接在生成视频的时候，带上音效，这个我觉得就非常非常的好用，且体验极佳。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrndoUVRZJZzWmuSMjxtP8k1qicaMjnd5F225ibzzyMngfLut3QHEwhsMN04XmoKDreWXFTmSZiaj8jw/640?wx_fmt=png&from=appmsg)

我随手跑了一个。

整体上，AI音效，我觉得还不成熟，但是当视频卷的飞起的视频，AI声音，这个非常重要的赛道，不可能不卷的。

首当其冲的就是三块：AI配音、AI音乐、AI音效。

AI配音前有微软TTS后有11Labs，一群大模型公司又开始进场卷的飞起；AI音乐也有SunoAI初步走出来；AI音效，倒是一个没怎么被人卷过的领域。

但是未来，那可就不好说了。

作为半个声控，我还是希望这个领域，能发光发热。

给我们带来一些，在音效上的。

小小的震撼。

。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
