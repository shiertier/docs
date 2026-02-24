---
title: "这才是现在最强的AI声音模型。"
发布日期: 2025-05-16
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647671156&idx=1&sn=6a10d5330574be1ee7a0265749be03a1&chksm=f1ce923f46cff97a245e9f6c8de18d8c722d89e28bc91050e3f6c0524281eb4481554a63877c"
---

## 摘要

**1) 一句话总结**
MiniMax发布了新一代AI声音模型Speech-02，在多语种发音准确率（WER）和音色相似度（SIM）上超越11Labs，支持32种语言并已开放API与MCP接入。

**2) 核心要点**
*   **性能指标领先**：在AI音频盲测竞技场登顶；其WER（词错误率）在主流语种及亚洲语种（日、越、泰等）平均保持在1~4之间，准确率优于11Labs。
*   **音色相似度提升**：SIM（相似度）指标在测试的32个语种中全面超越11Labs。
*   **多语种与混语能力**：支持语种从一代的12种扩展至32种，且在处理中、英、日、西等多语言混合文本时具备极高的区分度和流畅度。
*   **情感与语调自适应**：在讲故事场景中，使用单一克隆声音即可根据文本角色自动调整音调与情绪变化。
*   **克隆门槛与速度**：仅需上传10秒至5分钟（推荐30秒左右）的音频素材，十几秒即可完成声音模型克隆。
*   **使用额度**：免费用户可克隆3个声音，5美元/月的会员可克隆10个声音。
*   **开发者生态**：已同步上线API支持，并完成MCP（模型上下文协议）接入，可直接集成至各类Agent产品中。

**3) 风险与不足**
*   **可用性限制**：目前声音克隆功能仅在MiniMax海外版（hailuo.ai/audio）提供。
*   **克隆样本限制**：虽然最低支持10秒音频克隆，但样本量不够充分，官方/作者建议最好在30秒左右。
*   **混语发音瑕疵**：在处理极端复杂的长段多语种混合文本时，结尾的中文发音仍可能带有轻微的“翻译腔”。

## 正文

几个月前，我写过一篇MiniMax的AI声音模型。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpBjn7We3QNcX2ZZ3M8Ck9dBvrnbxaQpGj9Zcibm137KDkibg59LyKmMmvic69yZm1PKvN0lCdLT3VsQ/640?wx_fmt=png&from=appmsg)

我说，那就是当时最强的中文AI音频。数据也有点小爆。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpBjn7We3QNcX2ZZ3M8Ck9dYP53tsWB0o4oDlEyC0ufibjFVHpNs0HKRcbs7eXzFVoKGyFOq9CEic9g/640?wx_fmt=png&from=appmsg)

而在去年12月之后，至今将近半年时间，在AI声音模型这块，我觉得还是没有能超越MiniMax的。

直到昨天，我看到
MiniMax在X上发了他们新一代声音模型的技术报告，Speech-02来了。看来想突破Speech-01的上限，还是得他们自己。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpBjn7We3QNcX2ZZ3M8Ck9dibEBjNJ8GTNrUVuG0BqR3g2kBm1SetthpGFibbKrhDUSkD0RNa0nq1eg/640?wx_fmt=png&from=appmsg)

不过就是这数据是真的惨淡，看来大家最近关注的都是Agent、MCP，AI音频关注的人，是真的少。。。

我大概翻了一下，跑分确实牛逼不少，主要是WER和SIM这两数据。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpBjn7We3QNcX2ZZ3M8Ck9dMx916flI92EfyrYvaz38EjQKmlMChOiaiaSlzgHWfrd7W9YdsQhSJRkw/640?wx_fmt=png&from=appmsg)

两个维度，左边是WER，越低越好，代表这个模型讲出来的话，有多准确。右边是SIM，越高越好，代表这个模型讲出来的声音，有多像原声。

你可以简单的理解成，左边看的是AI说的对不对，右边看的是AI像不像本人。

WER的数据，除了一些欧美的小语种，主流语种几乎都压了目前世界公认最被推崇的11Labs一头，特别是周边的亚洲国家，日本、越南、泰国，几乎都是纯碾压姿态，所有语种的WER指标几乎平均都在1~4之间，很牛逼，他们这是正儿八经在多语种上发力了

而音色相似度上，上一代其实做的没有11labs好，海外的很多反馈都是声音没有11Labs像，但是这一次，实现了全面超越，32个语种，每一个在跑分上都比11Labs要强，我自己实测，也能明显感觉到，相似度已经比11labs好了。

我又去看了一下AI音频领域的盲测竞技场。

意外的发现。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpBjn7We3QNcX2ZZ3M8Ck9d1IEjBzmO9VBLx76yaJibq6o6t7pzhgOme8NN6bWVXhpcv0ruEE4YMiag/640?wx_fmt=png&from=appmsg)

MiniMax这个新模型。

登顶了。。。

现在，这个新模型，
MiniMax
Speech-02，已经可以在
MiniMax官网用了，目前只有海外版有声音克隆，别问我为什么只有海外版有。

网址在此：
https://www.hailuo.ai/audio

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpBjn7We3QNcX2ZZ3M8Ck9dVam09ODek38zHMhp35MH8gmHUCWyeh5LKf8CdyptSShLFicthhYLSng/640?wx_fmt=png&from=appmsg)

我随手用
MiniMax+即梦大师版，搓了一个有趣的郭小纲动画，给大家直观的感受一下，
MiniMax的
Speech-02有多强。

我就扔了一段不到1分钟的原声进去复刻，说实话，这音调，这起伏，这音色，强的有点不像话了。

我第一次听到的时候，真的感觉真假难分。

不仅郭小纲，还能让，周小伦，来夸一夸我。

太像了。

你闭着眼睛，你是真的能感觉到，是周董，在你面前挥舞着手臂，用那独特的强调跟你说，你还挺屌的。

还有之前万艾尔登法环，预告片里面菈妮的配音我一直很喜欢。

我也让
MiniMax复刻了一下。

这是上一代Speech-01-hd的效果。

而这是，
Speech-02-hd的效果。

我相信，一定能非常轻松的感受到，情绪的差距。

说说咋用。

进入Minimax的Audio官网后，点击左边的Voices。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpBjn7We3QNcX2ZZ3M8Ck9dYATUqa7n2vvoAcryFg5veIYibccTdXW10sicJBuELMz46JtesibSQficnw/640?wx_fmt=png&from=appmsg)

免费用户，可以免费克隆3个声音。

我是开了5刀的会员，所以可以创建10个。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpBjn7We3QNcX2ZZ3M8Ck9dHql9lqMEYK9DyiarNwiaUmTqjsxKsvw1pia6E4oArFQZcvbiacOpmqnIfQ/640?wx_fmt=png&from=appmsg)

点进去以后，直接上传你的素材，然后正常命名，选素材的主语言就行，超级简单。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpBjn7We3QNcX2ZZ3M8Ck9dqzX1BxlBQ9ugIic7ATQI3VeACVB0wqdvgbrBgqRribA2sy1ONKOGs2UA/640?wx_fmt=png&from=appmsg)

上传的语音最少上传10s的音频片段就可以克隆了，不过这个样本其实不是特别够，
所以我一般推荐音频素材最好在30s左右
，当然你也可以更长，不过一般不需要超过5分钟。

然后只需要十几秒，一个新鲜的声音模型，就克隆好了。

后续使用的时候，直接在右边的声音选择界面里面找到自己的tab，正常使用就行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpBjn7We3QNcX2ZZ3M8Ck9dzO6h3AoVNA2QUYwxKpwnqQLmFI3iad3EKiadXgqYNktrhSibtmEzXX9Rw/640?wx_fmt=png&from=appmsg)

一代的时候，这个声音模型，只支持12种语言，分别是：

中文、
粤语、
英语、韩语、日语、印尼语、西语、葡语、法语、意大利语、俄语、德语。

但是这一次的2代，支持了32种语言。

而且在混合语种上，有更好的效果了。

比如我之前看到一个非常有意思的挑战。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpBjn7We3QNcX2ZZ3M8Ck9dibl10icmbVxEff4oeOibIYkz93B6L9l9vDrKlly4zIJ7OwkcbO9GlL0xw/640?wx_fmt=png&from=appmsg)

文字是这样的：

“皆さん，我在网络上面看到有someone把三个国家的 language 混在一起去 speak 。我看到之后 be like これは我じゃないか，私も try one try です”。

非常离谱。

我克隆了我自己的声音，然后去试着念了一下。

这是上一代
Speech-01-hd：

我保证，你听完以后也不知道它到底念了个啥，我就听到一个Speak。。。

再来听听2代的。

虽然日文那还有一点奇怪，但是，已经是能完整的区分出来念的明明白白的了好吧，这已经是，史诗级进步了。

我又搞了一个更复杂的，小皇四郎。

文本是这样的：

“妈的，最烦装逼的人了。刚回国，问他论文咋样，他说：
“我要 restructure 一下 framework。”
我翻了个白眼，结果他又来一句：
“Ah non, pas de sucre, merci~”
然后切日语：「これはマジでイラっとするわ〜」
再来西语：“¡Qué pesado! Pero suena perfecto.”
最后还补一句英语：“Seriously. Stop pretending you’re special.”
我都想说：你到底是人，还是 AI？
哦，他是 MiniMax Speech two，新模型。”

真的，实在太好玩了。

虽然最后的中文，念的还是冒出了翻译腔，但是进步已经巨大了。

而且，还有一个超级屌的点是，他们在讲故事的场景中，如果你只用一个声音的话，在一些不同角色那里，它甚至会有不同的音调变化和情绪变化。

这是我的一份故事文稿。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpBjn7We3QNcX2ZZ3M8Ck9djh30WxWBfEgB5n5icveJhgu1DAxMeia6DLCPQBoaicefchgyPPqRkB0fA/640?wx_fmt=png&from=appmsg)

我直接让
Speech-02-hd一键直出，然后我自己稍微剪了下，加了点音效，大家可以听一听这个情绪，还有角色的变化。

文稿中标黄的那几句，大家应该能明显的听出来，是刻意压低了音调，改了情绪。这可不是我处理的，是
MiniMax直出的，这就非常牛逼了。

除了C端产品之外，我看了一眼API，发现，他们已经第一时间把
Speech-02给支持了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpBjn7We3QNcX2ZZ3M8Ck9dmkYZFamk8f9suENoJYGmZtnqOsts7ZwHPWBZ0rS1GANcoJicWRicia6Jw/640?wx_fmt=png&from=appmsg)

甚至，MCP也弄好了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpBjn7We3QNcX2ZZ3M8Ck9diacT4lO7iaw3F6zAhPhcR0tqBe0YRgiciciaQQic3LIwaflEolYfrklDjiamA/640?wx_fmt=png&from=appmsg)

现在，你可以在任何Agent产品里，也可以接入这个逼真到爆炸的语音模型了。

我们也可以自豪的说一声。

之前，中文AI语音，我们做到了世界最强，但是现在，可以把中文去掉了，整体上，我们都已经做到了世界最强。

这是一个被所有人低估的战场。

大家都在盯着谁做出第一个像人一样思考的Agent，却没看到，那些AI说话的声音，其实早已变得越来越跟真人无异。

而且，这一次，还是我们做出来的。

在12月份的那边
MiniMax AI音频的文章中，我在最后写道：

“也许，这就是属于中文世界的AI时代的序章。而这一切，才刚刚开始。”

然后就是波浪壮阔的春节。

随后的故事，大家也都知道了。

一语成箴。

现在的AI世界，再也不是英语的独角戏了。

我们从配角，走向主角。

然后不仅仅止步于起。

像MiniMax，也用AI，给世界，尽可能的带来语言平权。

那些过去没被在意的语言，过去只能在家族里、在小巷里、在庙宇里才能听到的声音，现在终于有机会，能被世界听见了。

AI没有带来统治。

反而是把人类的多样性。

放进了未来。


wzglyay@virxact.com

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
