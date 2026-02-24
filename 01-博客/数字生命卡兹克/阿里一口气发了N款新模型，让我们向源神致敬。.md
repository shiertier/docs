---
title: "阿里一口气发了N款新模型，让我们向源神致敬。"
发布日期: 2025-09-24
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647675372&idx=1&sn=5169bbe90488ee82f0c6ef39f09017e4&chksm=f13350c0ceedb85903185f4411f59092d3e4ccb1a0a6e0f7fe21a624b85d5adaf6ca79eb6247"
---

## 摘要

**1) 一句话总结**
阿里在云栖大会上集中发布了涵盖文本、视觉、音视频等全模态的多个新AI模型，包括万亿参数的Qwen3-Max、支持音画同出的视频模型Wan2.5以及多款开源模型，全面构建了从底层到应用层的AI生态。

**2) 关键要点**
*   **Qwen3-Max**：万亿参数MoE模型，使用36万亿token预训练，支持100万上下文。分为Instruct版（已上线，在多个代码和Agent评测中领先）和Thinking版（在AIME 25和HMMT数学推理测试中获满分，追平GPT-5 Pro）。
*   **Wan2.5**：全新的视频生成模型，首次支持音画同出特性。支持通过提示词或“图片+音频”直接生成视频，解决了音色一致性问题，适用于数字人和AI短剧。
*   **Qwen3-VL**：提前开源的视觉语言旗舰模型（Qwen3-VL-235B-A22B），原生支持256K并可扩展至100万上下文（支持长达2小时视频），具备强大的视觉Agent能力，可执行PC或手机端UI操作。
*   **Qwen3-Omni**：开源的端到端全模态模型，原生支持文本、图像、音频和视频输入。语音对话延迟仅211毫秒，支持119种文本语言及多种语音语言交互，支持Function Call和MCP。
*   **Qwen3-Next**：采用全新架构，总参数80B但仅激活3B，性能媲美235B旗舰模型，训练成本较32B密集模型降低超90%，长文本推理吞吐量提升10倍以上。
*   **Qwen3-Coder-Plus**：代码模型升级版，推理速度更快，所需token更少，且代码安全性得到增强。
*   **通义百聆语音家族**：发布语音识别大模型Fun-ASR（支持10多种语言实时处理）和语音合成大模型Fun-CosyVoice（提供上百种预制音色）。
*   **其他生态模型**：发布了实时多模态翻译模型Qwen3-LiveTranslate-Flas（延迟约3秒）、安全审核模型Qwen3Guard以及图像编辑模型Qwen-Image-Edit-2509。

**3) 风险/缺口**
*   Qwen3-Max 模型目前不开源。
*   Qwen3-Max 的 Thinking（深度思考）版本目前仅公布了测试成绩，尚未开放实际体验。

## 正文

阿里的早上这个发布会，给我看麻了。

一场阿里的云栖大会，我真的感觉，他们把家底全都掏出来了。。。

发了不知道多少个模型。

我虽然这次有事很可惜没去成现场，但是还是破天荒的8点多起床一下蹲了直播。

结果一直等到快10点才开始= =

过程中，我都看懵了，就一股脑子发啊，各种各样的模型，挨个掏。

我大概数了下， 纯今天新发布的新模型有两个，一个是整个Qwen系列最强的Qwen3-Max，另一个是爆火的Wan2.2的后续模型Wan2.5，这玩意支持跟Veo3一样的音画同出的特性，是有点东西的。

然后也正式发布了前几天为了预热提前发布的模型，比如目前Qwen里面最强的Qwen3-VL模型，还有一个全模态模型Qwen3-Omni，还有全新的模型架构带来的Qwen3-Next等等。

不知道为什么，总让我有一种Google的既视感。

一边开发布会，另一边，阿里的股票直接涨飞了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqH1OjjYzYJ6MkNVJiaxZqZ3ZvCHN1Yq8HEFaukVLK82H8PgfewPrDIjGCMbCt9YyiaP0rtScZiaoQBg/640?wx_fmt=png&from=appmsg)

我最快速度整理+体验了一波，给大家直接一文总结一下，来自阿里的全发布。

话不多说，我们，开始。

一. Qwen3-Max

最牛逼最新的，肯定就当属Qwen3-Max正式版了，直接对标GPT-5、Claude Opus 4这些世界顶尖模型。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqH1OjjYzYJ6MkNVJiaxZqZ3TsYQe8SBLoK8oc53r4T70icm17wNqnpTH2gxwewFtZhPicFSicaicDibrng/640?wx_fmt=png&from=appmsg)

上一次发Max还是今年1月29日除夕发布的，半年后，他们终于把Qwen3-Max掏出来了。

在LMArena上，之前的Qwen3-Max-Instruct的预览版，在这个全球最权威的匿名模型对战平台上，并列前三，直接把GPT-5-Chat都甩在了身后。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqH1OjjYzYJ6MkNVJiaxZqZ3qm5ibVG8McIqgKlAot6wCVRRXW47JabgJMTh9RBGk4jnIX4I2ibBLiaRQ/640?wx_fmt=png&from=appmsg)

这次的Max，是真的把参数堆满了。

模型总参数超过了1万亿，用了36万亿的tokens进行预训练，突出一个量大管饱。

他们自己的Blog的标题也非常的苹果味。

大就是好。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqH1OjjYzYJ6MkNVJiaxZqZ3cfINgFZYnYduOtoWh39se0ZLAZym2AHWEaWnuGJlicwD3Zf72KuKRog/640?wx_fmt=png&from=appmsg)

MoE模型，1万亿的大小，支持100万Token的上下文。

这次发布的Qwen3-Max，也跟别家一样，分了两个版本，一个Instruct版，一个更猛的Thinking版。

Qwen3-Max-Instruct
这个版本，就是
我们现在能直接用到的，不带深度思考的。

主要是在代码和Agent能力上，还是非常强的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqH1OjjYzYJ6MkNVJiaxZqZ3ngftpdIzSrOqPhbLsJ14KhnYZ9ue64IkSsBBliae7gTLfUqp5gCRDyw/640?wx_fmt=png&from=appmsg)

AIME2025基本一骑绝尘，
在
LiveCodeBench v6这个强调复杂工程题、未公开题上的泛化能力的测试集上，也得到了不错的效果。

τ²-Bench这个新的强调AI在动态环境中的推理、工具使用、用户引导与协调能力的Agent评测集，Qwen3-Max也是最强的，
74.8分，直接干翻了Claude Opus 4和DeepSeek-V3.1。

SWE-Bench这个专门解决真实世界编程难题的测试集上，它拿了69.6分，也是稳稳的世界第一梯队。

不过感觉后面可以更多的看看
SWE-Bench Pro了。

Thinking版目前发了能力图，但是还没放出来。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqH1OjjYzYJ6MkNVJiaxZqZ3S1NArFFzyDm6eweNjYC2geynWiaeiaYb3W18aZFmAlFNGY2jZVvicaxqA/640?wx_fmt=png&from=appmsg)

在AIME 25和HMMT这两个地狱难度的数学推理竞赛题集上，Qwen3-Max-Thinking，拿了100分。

满分。

直接跟GPT-5 Pro打平了。

这玩意还是有点酷的，可惜，现在还体验不到。

目前Qwen3-Max-Instruct已经在官网上线了：

https://chat.qwen.ai/

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqH1OjjYzYJ6MkNVJiaxZqZ3QJTOWZD88Ilja7xfKwDoJ8tTmLjXA6phrwyILv6Ydj0vzgbhO6W2Cw/640?wx_fmt=png&from=appmsg)

可以看到深度推理那块是灰的，不过据说也快上线了。

大家可以去体验一下。

哦对了，Qwen3-Max目前不开源。

二. Wan-2.5

这段时间，开源的Wan2.2已经爆了。
你在X上，随处可以那种做人物动画迁移拿到百万观看的帖子。
阿里直接趁热打铁，把Wan2.5掏了出来。
一些升级到1080P、能跑10s时长这种基础参数啥的我就不说了。
有一个很好玩的东西，是我觉得可以一提的，就是他们的新能力。
音画同出。
听到这个词是不是很陌生？但是如果我说是是Veo3的那个原生的输出带角色音频的视频，你们应该就会有印象了。
而这次，Wan2.5，也是第一次支持这个能力，不仅可以跟Veo3一样，用Prompt控制，而且，还可以上传图片+音频直出。
你可以在通义万相上玩：
https://tongyi.aliyun.com/
我直接给大家放一个例子。
直接一张图+1段音频，就可以跑出表演还不错的视频。
很酷。
还有更好玩的。
真的，能玩起来的花活实在太多了。
得益于音画同步直出的能力，在数字人和人物表演上，能力大幅加强。
而且解决了Veo3一直以来一个很尴尬的问题，就是没法保持音色一致性。
但是现在，Wan2.5可以支持上传音频驱动了。
那保持一致性，就太简单了。
这可能给AI短剧，又带来一波很酷的飞跃。
三. Qwen3-VL
Qwen3-VL今天凌晨提前开源了。
目前是Qwen 系列中最强大的视觉语言模型，原生支持256K token上下文，还能扩展到100万上下文，大概支持长达2小时的视频。
这次开源的是VL系列的旗舰模型Qwen3-VL-235B-A22B，有Instruct与Thinking两个版本，带推理和不带推理的。
在跑分上是有点东西的，在一些能力上，甚至优于Gemini2.5 Pro了。
这里也放一下他们的片子，我觉得这种视觉模型，一定得配视觉化的看起来才爽。
而且有几个特点我觉得是有点牛逼的。
一个是有视觉Agent能力，能理解按钮、调用工具等等，在PC或者手机上完成一些Agent任务。
这个还是挺强的。
各种识别+推理能力也是非常的牛逼，我的好基友@刘聪NLP测了不少这块的Case。
比如有一个很坑的题：
找到2024年GDP值最大的省份，并且计算占全国GDP的百分之多少？
而Qwen3-VL-235B-A22B，都没开推理，也是一次就对了。
四. Qwen3-Omni
Qwen3-Omni是一个开源的全模态模型，阿里的盘子真的铺的太大了，模型也真的太全了。
这个是昨天凌晨提前发了，但是在今天的云栖大会上，正式发布了。
这是一个纯粹的端到端模型，Qwen3-Omni在训练的时候学习了很多跨模态的数据，原生支持文本、图像、音频和视频的输入，支持119种文本语言交互、19种语音理解语言与10种语音生成语言。
对，你可以直接进行端到端语音对话，延迟只有211毫秒。
还支持function call和MCP，能非常方便的和现有工具结合。
我直接用它，来识别歌曲。
还是挺好玩的。
五. 其他
还没完，嗯。。
还有Qwen3-Coder-Plus，推理速度更快，使用更少的
token
可达到更优的效果，代码安全性增强。
还有Qwen3-Next，总参数
80B
仅激活
3B
，性能就可媲美千问
3
旗舰版
235B
模型，训练成本较密集模型
Qwen3-32B
大降超
90%
，长文本推理吞吐量提升
10
倍以上，就离谱。
还有全新的语音模型家族通义百聆，涵盖语音识别大模型Fun-ASR、语音合成大模型Fun-CosyVoice。
Fun-ASR基于数千万小时真实语音数据训练而成，具备强大的上下文理解能力与行业适应性，能实时处理10多种语言。
Fun-CosyVoice可提供上百种预制音色，完全可以拿去做各种客服、有声书、AI玩具啥的。
还有Qwen3-LiveTranslate-Flas，实时多模态翻译，只有3秒多的延迟。。
还有Qwen3Guard，专为全球实时AI安全构建的Qwen3基础安全审核模型，非常适合做RL奖励建模。
还有图片编辑模型Qwen-Image-Edit-2509。。。
阿里，真的，就离谱。。。
开源给我人开傻了。
写在最后
总而言之，阿里这次发布会给我的感觉就是四个字。
倾其所有。
为了这个繁荣昌盛的AI生态。
几乎是构建了一个从底层模型到上层应用，覆盖文本、视觉、音频、视频的全模态、全场景的超级生态。
而且我看了下数据，现在，开源届，现在真的就是Qwen一统江湖了。
这个肌肉，秀的是真的6。
不得不夸一句。
今天的光，属于阿里。
wzglyay@virxact.com

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqH1OjjYzYJ6MkNVJiaxZqZ3JibzemT2sVqCUfyDficiaecsRQ668SJbFZxRCv6vNWqB1m4Zr38gHLW0A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqH1OjjYzYJ6MkNVJiaxZqZ3O2tDwDCCwotPXicQzFAwc0sqjkaCb3UuqlibKZr2SBmEyYUpTFfvVEZw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqH1OjjYzYJ6MkNVJiaxZqZ3egOrh6MbrfY1XVhib2ELzsFOMELKOB8gYkc7X3tWV3zVwyUGYYpYdBg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqH1OjjYzYJ6MkNVJiaxZqZ3icWUb9x2850uogrdH5yibexuaiafreicsrw2cmSDH2W9lZtASjkXiayQtfQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqH1OjjYzYJ6MkNVJiaxZqZ3awFJ1KiaJwAwOicpPVB5ZVFvAoV8aVSrvFOxwIj63KzHH5kh4iaJ1ZcAA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqH1OjjYzYJ6MkNVJiaxZqZ3KUDeCxbTqocOHruMDAmJJSnDdsibqqYicIjzD0c2vuVOhdogmjdnvNDw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/iceGibVicRfib5lxmkKCJAA8Kn1m5iax1KmQaE4P5cTXGiabfuLK2FwvTp03osRbxubjDk7js8ckDjuTRu4Z3DTiaMThg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=13)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqH1OjjYzYJ6MkNVJiaxZqZ3EeGKvQeib1ZxdDWUuJyChb9Ughsv1Qickiau8eZibhX7HibmtoRml8jNOuQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqH1OjjYzYJ6MkNVJiaxZqZ3RuJWnkiawGOfHnIia9HlXF4Qhh7elD6mCepODKJwnRl4OkXXhLketPtQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqH1OjjYzYJ6MkNVJiaxZqZ3WusOPyvt5HqOV18WIg7EWjDUI8KcZdqQKNcBOK4ib5rn11K9YLxnGuQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqH1OjjYzYJ6MkNVJiaxZqZ3ERNa5QQmtiau64qlwbUBWufVLc8b0frHMz9ErA0ltuE6c7iaiahly4BOA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqH1OjjYzYJ6MkNVJiaxZqZ3zOYhWAfPG0435q0x5QJmSurLVqWRibDmeYel9Bs42bRTxMuozohF2Ag/640?wx_fmt=png&from=appmsg)

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
