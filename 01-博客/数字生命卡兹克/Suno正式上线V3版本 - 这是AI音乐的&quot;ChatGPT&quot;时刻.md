---
title: "Suno正式上线V3版本 - 这是AI音乐的&quot;ChatGPT&quot;时刻"
发布日期: 2024-03-22
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647661864&idx=1&sn=ebb837ec288c195b67441cf556f30a42&chksm=f1a1aafc38e3dfdfbebed382f3be16cc8e11b02956c03fbfb43baee3f711bf2243dd9e7ffe44"
---

## 摘要

**1) 一句话总结**
Suno正式上线V3版本，大幅提升了AI生成音乐的音质与节奏编排能力，标志着AI音乐领域迎来了“ChatGPT时刻”。

**2) 核心要点**
*   **版本升级对比**：相比此前因质量差被批评的早期版本（如《海贼王》贺曲），V3版本在音质、咬字和节奏编排上有了质的飞跃。
*   **生成模式**：提供“Custom Mode”（自定义歌词模式）和“Instrumental”（无歌词纯音乐模式）两种主要玩法。
*   **计费与额度**：每次生成会同时出2首歌，消耗10积分。免费用户每日有50积分（可生成10首歌）；付费订阅为10美元/月，包含2500积分。
*   **Prompt编写规范**：官方推荐的提示词需包含：音乐流派（如Kpop）、音乐风格（如Slow）、情绪、乐器、主题/场景、人声描述。
*   **歌词结构要求**：为了生成完整的歌曲，歌词需具备标准结构标签，如 `[Verse]`（主歌）、`[Chorus]`（副歌）、`[Bridge]`（桥段）、`[Outro]`（尾奏）等。
*   **AI辅助创作**：普通用户可通过大语言模型（如ChatGPT）输入特定Prompt，一键生成符合Suno要求的结构化歌词及英文音乐提示词，实现复制即用。
*   **后期拓展**：生成的音乐可结合SVC（歌声转换）技术进行人声分离与替换，实现更多自定义操作。

**3) 风险与不足**
*   **时长限制**：目前单次最多只能生成2分钟的音乐，超出时长会导致结尾被生硬截断。
*   **专业性局限**：对于专业歌手或制作人而言，该工具目前仍偏向“玩具”属性，存在可控性差、不易编辑等缺点。

## 正文

对于生成式AI，我一直是按照五个模态去进行分类的：

文本、图片、声音、视频、3D。

而声音领域，可能是在我的分类里，我最感兴趣也是最喜欢的一个。

在某一个路演的PPT上，我给声音又拆成了4个细分：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoqBsXibBmnKmJWlcuDLAeCcmodo28BLRibU5jojFHHnQNWSUrnMNajQJ36wrIsLuUz8v1wSPUtE3CQ/640?wx_fmt=png&from=appmsg)

TTS、SVC、AI音效，我都写过，也玩了很久，而生成式AI音乐，是我一直没写过的东西。

不是我没玩，是我觉得这玩意，真的还没到值得去写去推荐的地步。。。

整个AI生成式音乐的代表，那肯定就是SunoAI了。

而且这玩意其实也火过2波了。

第一波是去年3、4月的时候，有一个很火的开源项目叫Bark，就是出自Suno之手，拿了将近32k的星标。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoqBsXibBmnKmJWlcuDLAeCcSZ0nLH0icmmoAsSsnJGATicEYO36JoBFOpCoq2sEic4s20YroKyk9WRmA/640?wx_fmt=png&from=appmsg)

然后就是去年12月21号的时候，为了庆祝《海贼王》动画25周年，海贼王决定重制最开始的东海篇的那60集，然后尾田这货，给海贼王官方发了一首贺曲，叫《YO-HO-HOおれ達海賊》。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURoqBsXibBmnKmJWlcuDLAeCceI34dzPovJOQOqzHUDicdiaFpNs3k6nlLw5kniaCXEUOGtcpTXViaXiagzg/640?wx_fmt=jpeg&from=appmsg)

这事本身是个好事，但是好死不死的，这曲子是特么拿AI做的，就是用今天的主角Suno出的。。

这曲子大概就是这样，很糙，基本等于没法听的地步。

然后就被网友一通骂，你这个浓眉大眼的尾田怎么也用AI了。。。传着传着就变成《海贼王》重制版要用AI做了。。。于是骂的更凶了。。。

这个小插曲，还是挺有意思的，也间接的标明，当时的Suno的质量，是真的差。

直到今天，Suno终于上了V3版本。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoqBsXibBmnKmJWlcuDLAeCc40nBnzSawwB3Eic2g7E3ErjWSicclGzGRT4kyic3OJUXY7aqhRGtSrY6Q/640?wx_fmt=png&from=appmsg)

在我听了很多demo和自己也跑了二十几首后，我觉得，AI音乐的"ChatGPT"时刻，终于到来了。

这是我的一个demo。

弊端就是Suno最多只能生成2分钟的音乐，所以可以听到最后，会戛然而止直接截断，但是已经比V2好很多了。

但是这个音质、咬字、节奏编排啥的，也都好太多太多了。

发给朋友听，她回了一句是：卧槽，还是好听的。

网址在此：https://app.suno.ai/

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoqBsXibBmnKmJWlcuDLAeCcgRTBN3RsPQ9pqKFBiaIXvtnm2LngXqhVD0PdJO4JjxsibvlRLf9hCCTw/640?wx_fmt=png&from=appmsg)

点Create就是生成的主页。

主要用两种模式，一个是打开的"
Custom Mode
"，这个是自定义模式，可以自己自定义歌词。

第二种是
Instrumental
，这个打开后就只会生成没有歌词的纯音乐了。

roll一次是同时出2首歌，一首消耗5积分，所以一次消耗10积分。

免费用户每天有50积分可以玩，可以roll5次出10首歌。

你要是氪金的话也挺便宜，10刀一个月，给2500积分，能玩很久很久。

要生成音乐的话，第一步肯定是写prompt，第二步（纯音乐没有）就是写歌词。

prompt这块，我比较推荐的写法就是：

音乐流派（如
Kpop、
Heavy Metal
）
、音乐风
格（如Slow、
Broadway
）、
情绪（如悲伤、愤怒）、乐器（如钢琴、吉他）
、
主题
或场景、人声描述（如愤怒的男声、忧伤的女声）

但是说实话，写音乐的prompt对于不懂音乐的人来说，真的难，毕竟什么音乐流派、音乐风格很多都不懂，你咋写啊= =

歌词其实一样的道理，一首歌，正常是有结构的，比如有
Verse（主歌）、
Chorus（副歌）、有
Bridge（快结束的时候经常那个不一样的部分）等等，普通人很多时候再写的时候也一脸懵逼，这特么咋写。。

别说大家，其实我去年刚玩Suno的时候，一样也是一脸懵逼。

让大家去现学我觉得也不现实。。。

那AI的方式，就必须用AI去解决，你说对吧。

所以，我就随手写了一个Prompt，让大模型来给你写歌曲Prompt和歌词。

什么玩意都给你弄好，你自己复制即用。就像这样：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoqBsXibBmnKmJWlcuDLAeCcbjpSDRKb8gZZawPu7x0eZ2a1qt7FXFfmEnoicECGFIVhicmt1cG8ArAQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoqBsXibBmnKmJWlcuDLAeCcmNQ6jiaZJYkTDicnWA5Yujic6plFylbGUUQObfQDREBKiajM8ibdR5SuunA/640?wx_fmt=png&from=appmsg)

这个Prompt长这样：

#01 你是歌词大师XX，现在，我需要你帮我写一段XX歌词，描述的是一个XX故事，整体歌曲时长2分钟以内，要押韵，要有文学气质，副歌部分要进行跨行重复。请按以下结构帮我创作：

"""

[instrumental intro]

[Verse 1]

<歌词>

[Chorus]

[Verse 2]

[Bridge]

[Guitar solo]

[Outro]

[End]

#02 输出歌词以后，再根据歌词和故事内容，以英文词组的形式再给出歌曲的prompt。

请按以下格式帮我输出英文prompt：

"""<音乐流派（如Kpop、Heavy Metal）>、<音乐风格（如Slow、Broadway）>、<情绪（如悲伤、愤怒）>、<乐器（如钢琴、吉他）>、<主题或场景>、<人声描述（如愤怒的男声、忧伤的女声）>"""

直接拿去复制开箱即可用。

然后就直接把出来的结果，全都复制粘贴进去，当然，你也可以自己改吧改吧。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoqBsXibBmnKmJWlcuDLAeCcrqWgF0RiazXB26k7vNycP6X67mIv60iaef8msrF600Zyviacvqn3dDo8g/640?wx_fmt=png&from=appmsg)

都扔进去之后，点那个黄的btn，直接开跑，速度挺快的，大概几十秒就出来了。

说实话，这个出来男声，让我有点心动了。。。。

当然，出来的歌，你不仅可以拿去直接发，你还可以玩一些骚操作，比如配合SVC，分离换声，换成自己的，可以参考这篇教程：

AI唱歌之终极喂饭教程 - SVC的极限就在这了

更多的歌，大家可以自己去Suno上跑着玩，体验一下AI音乐的魅力，这种直出的感觉，还是非常爽的。

虽然对很多专业歌手或者专业制作人来说，可能觉得还偏玩具，可控性差，不好编辑等等。

但至少，一定达到了大多数普通人的水准。

且这个趋势，一定是一个不可逆的未来。

这股子风，现在，终于到了音乐。

AI音乐的"ChatGPT"时刻，我觉得，终于到来了。

。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
