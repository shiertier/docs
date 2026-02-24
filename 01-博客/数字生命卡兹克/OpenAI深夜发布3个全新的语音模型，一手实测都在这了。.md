---
title: "OpenAI深夜发布3个全新的语音模型，一手实测都在这了。"
发布日期: 2025-03-21
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647669807&idx=1&sn=58db526b68bbe8a0b5fa92f0ee862146&chksm=f1b3112a96c9f3b200c9c12f88456afeebf0c81b65adc506effab3926041405f81a7983e7f2a"
---

## 摘要

**1) 一句话总结**
OpenAI发布了三款全新的语音API模型，包括两款具备自动降噪功能的高性价比语音转文本（STT）模型，以及一款支持情绪自定义且成本极低的文本生成语音（TTS）模型。

**2) 关键要点**
*   **发布两款STT模型**：`gpt-4o-transcribe`（定价约$0.006/分钟）和参数更小的`gpt-4o-mini-transcribe`（定价约$0.003/分钟），实测显示mini版本性价比极高。
*   **STT性能与特性**：在FLEURS数据集上达到SOTA水平；具备自动清噪功能，能有效剔除背景音乐（BGM）和非主线人物的语音。
*   **发布一款TTS模型**：`gpt-4o-mini-tts`，定价仅为$0.015/分钟（约0.1元人民币/分钟），价格远低于11Labs和Minimax等竞品。
*   **TTS情绪自定义功能**：官方提供演示网站（openai.fm），用户可通过Prompt调整“VIBE”（情绪基调），支持自定义声音、标点、语速、措辞和语调5个参数。
*   **TTS语言表现**：在英文场景下发音纯正且效果良好，适合英文语音生成需求。
*   **开发者接入**：所有模型均已提供API接入方式，官方文档显示仅需约10行代码即可完成集成。

**3) 风险与不足**
*   **STT中文识别难度**：STT模型在处理中文时的词错率（WER）相比其他主流语言依然偏高。
*   **TTS中文/日文发音缺陷**：`gpt-4o-mini-tts`的中文发音极不自然（带有明显违和的口音），日文发音也略显怪异，不推荐在中文场景使用。
*   **TTS音色限制**：TTS模型仅提供固定的预设音色，不支持声音克隆和音色自定义。

## 正文

OpenAI最近总是喜欢搞突袭。

昨晚11点的时候突然发了一个预告，4秒钟的音频的大概意思，就是太平洋时间10点我们发个产品。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrSNRqXGZxc1erUoHIuN00dmhSy0OEcWWjHaXD0icuuicW50qpE1ykAX7zoKSrHaYPaT3mp0hefydlA/640?wx_fmt=png&from=appmsg)

然后就在北京时间凌晨1点，开了一场直播，发了一些新玩意。

总结一下就是：

2个比Whisper更好的语音转文本的STT模型：
gpt-4o-transcribe
和
gpt-4o-mini-transcribe
，1个文本生成语音的TTS模型 :
gpt-4o-mini-tts
。这些模型都
提供了API的接入方式。没了。

一个一个说。

1. STT模型：
gpt-4o-transcribe

gpt-4o-transcribe
和
gpt-4o-mini-transcribe
说是两个，其实也就是一个了，后者是前者的小参数版。

这个模型的作用跟当年的
Whisper是一样的，跟大家在剪映里用的一键生成字幕的作用也是一样的，就是把一段语音，转成对应的正确的文本。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrSNRqXGZxc1erUoHIuN00dFib3hRyNfNchPTS2yicxCgX7sGEfbupeJeddgRD33hcaChUtzQMzPI3g/640?wx_fmt=png&from=appmsg)

我们一般把他们称为，STT（Speech-to-Text）模型。

这个模型的核心，就是就是识别文字的准确率有多高，我相信大家在用剪映生成字幕的时候，一定会出现很多文字识别错误的情况，所以评判一个ASR模型效果咋样，就看正确率。

他们的跑分是这样的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrSNRqXGZxc1erUoHIuN00dT2P4cXiatsiaZx9RibRqgkYq3ia7tc44iaQ8ic1376z3xKj5Kr2VRpUfcxwQ/640?wx_fmt=png&from=appmsg)

这个是OpenAI的几个STT模型在FLEURS数据集上的词错率（Word Error Rate, WER）的对比表现。纵坐标表示词错率，越低代表模型的转录准确性越高；横坐标代表不同语言。

词错率的意思就是用于衡量语音识别系统的准确性，它通过计算模型转录文本与人工参考文本之间的错误比例来得出，错得越少，WER越低，模型的表现也就越好。

中文是从左往右数第五个，cmn，可以看到突出了一个小山丘，错误率一下子就都上来了，比隔壁几个都要高一些，中文还是难。。。

最后那几个一柱擎天的语言都比较小众，比如bn是孟加拉语、mr是马拉地与、最高的那个ml是马拉雅拉姆语。。。

他们除了跟自己比外，又放了一个跟别人家模型相比的图。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrSNRqXGZxc1erUoHIuN00d8KmthVDsvg5fkF5DjhR2jFSXHrraOllR9XJwQh4CEiahmqziapB2YicYQ/640?wx_fmt=png&from=appmsg)

Gemini是google的，scribe是Anthropic的，在对比的这些里面，确实达到了SOTA，但是不知道没比的模型里面，有没有比OpenAI更强的。

我自己也做了一下实测，把我的两个口播视频去识别了一下，识别出来的效果在此，大家可以对比一下。标红的就是识别错误的地方。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrSNRqXGZxc1erUoHIuN00dnjCql7pkIiaNicqCUXhomSBJw5WpyQJeOHicns1ibTQLq9YxdtoPiblD21Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrSNRqXGZxc1erUoHIuN00dxm7iaFfTsuuknpA0Rb05jXiaEIEMOibIicNulqiaBepwlyKOJl6icZpfNVlQ/640?wx_fmt=png&from=appmsg)

其实都大差不差，这么一看，GPT-4o-
mini-
transcribe的性价比感觉非常突出。

GPT-4o-transcribe这个系列的两个模型，有一个蛮不错的特点，就是会自动清噪和去除非主线人物的语音识别。

比如这个案例。

这个片段是剪辑完的成片，所以有音乐，甚至在19秒以后，还有BGM里面的别人唱歌的声音，这些其实都是噪音，
GPT-4o-transcribe几乎全部剔除了，在整个转录里，我几乎没看到什么错误，除了把我的名字，卡兹克识别成了卡斯克。。。

我又试了一段粤语的，效果居然还可以，大致的好像是对的，就是细节这块我不太能验证了，有懂粤语的朋友可以看一下。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrSNRqXGZxc1erUoHIuN00delLbmEbPI8WAQu7clianm92EPaLpbjbkdtGr4Hz3icd6CN9Cch9jo4Dg/640?wx_fmt=png&from=appmsg)

最后价格这块提一下。

gpt-4o-transcribe是每分钟大概$0.006，也就是人民币0.04元/分钟；

gpt-4o-mini-transcribe是
每分钟大概$0.003，
也就是人民币0.02元/分钟.

整体不算贵了。

2. TTS模型：
gpt-4o-mini-tts

OpenAI的一个新的TTS模型。

在英语效果和声音上，听了下，还算不错，不过毕竟这是国内，所以其实我更关注的是中文的生成效果。

我随手跑了一个，就，你们听听这个效果。。。

情绪什么的其实讲道理，还可以的，就是这个中文发音，真的一股子大佐味，这到底用的什么数据集啊。。。

11Labs也有这个问题，中文根本没法听，太违和了。

对比一下海螺（现在产品也更名叫Minimax了），他们的Audio生成出来的同文字的中文是这个效果。

在发音上，根本就不是一个级别的，中国人的语音模型，还是得看中国制造。。。

英语上，感觉很纯正，日语发音上，也感觉有点怪怪的。。。

这次OpenAI给gpt-4o-mini-tts做了一个小小的功能演示网站，约等于免费给大家用了。

还挺有意思的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrSNRqXGZxc1erUoHIuN00dXcqb2gk5qJRSk4ARbiaP8MvhWmlQ2ZUicZsXCrlNTfAbAEP7GVkSPv3w/640?wx_fmt=png&from=appmsg)

网址在此：
https://www.openai.fm/

最上面的VOICE是固定的音色，音色你是没办法克隆也没办法自定义的，所以只能选这些。

下面的VIBE比较有意思，大概的意思就是情绪基调，有N多的预设模板，同时你也可以用Prompt自己捏。

OpenAI给了官方模板，是这个样子的：

Voice
:
High-energy, upbeat, and encouraging, projecting enthusiasm and motivation.
Punctuation
:
Short, punchy sentences with strategic pauses to maintain excitement and clarity.
Delivery
:
Fast-paced and dynamic, with rising intonation to build momentum and keep engagement high.
Phrasing
:
Action-oriented and direct, using motivational cues to push participants forward.
Tone
:
Positive, energetic, and empowering, creating an atmosphere of encouragement and achievement.

翻译过来就是：

声音（Voice）
：充满活力、热情洋溢且积极鼓励，声音要能传递出热情与动力。

标点（Punctuation）
：使用短小有力的句子，并通过适当停顿，保持兴奋感和清晰度。

语速（Delivery）
：语速较快、富有变化，并用升调增加节奏感与吸引力，确保听众持续投入。

措辞（Phrasing）
：直接明了、强调行动，使用鼓励性的语言来推动听众积极参与。

语调（Tone）
：积极向上、充满能量与力量感，营造鼓励与成功的氛围。

所以我们是能看到，有5个可以自己去捏的参数。你可以随便自定义。

但是这玩意，说实话写起来也非常麻烦，我试了一下后，不如直接交给AI，这玩意谁特么手搓啊= =

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrSNRqXGZxc1erUoHIuN00dzvqpycWgRe59GTOzrje8jqXERibfzp6udNEHxjUB5Eb2Qib9G4sqa0xA/640?wx_fmt=png&from=appmsg)

几秒钟，一段定制好的prompt就OK了，我们扔到之前的网页里。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrSNRqXGZxc1erUoHIuN00dLWZBbprBL4kuSzJLbVIYibHUKAO4LhpoibFKoGtiaEaBbc5KiaSWu4muibQ/640?wx_fmt=png&from=appmsg)

再用一段我很喜欢的《反叛的鲁鲁修》里面的台词去试一下。

大家自己判别吧。

在价格上，
gpt-4o-mini-tts是$0.015/分钟，大概1毛钱人名币1分钟，说实话，已经几乎是最低价了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrSNRqXGZxc1erUoHIuN00dWC0NicZoKnOO7dN4XCCXKJo8Kx4JJtXicUu45UoxB71K6QEEwpLSohgQ/640?wx_fmt=png&from=appmsg)

11labs的价格大概是每分钟1块3人民币。

Minimax已经算是价格屠夫了，大概也要1毛8人民币1分钟。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrSNRqXGZxc1erUoHIuN00dTkC5Mz9b5BJpmxocAicGcpqajzPfQLlkPJgaBuF3uMicbN6FlyE4Yd8Q/640?wx_fmt=png&from=appmsg)

写在最后

这就是OpenAI今天的发布了。

如果你是开发者，想知道怎么接入，一切都在他们的API文档里。

https://platform.openai.com/docs/guides/audio

这次还蛮方便的，10行代码就可以接了。

STT模型
gpt-4o-mini-transcribe
我还是蛮推荐用的，实测下来感觉性价比最高，差距不是很大，价格还低一半。

TTS模型
gpt-4o-mini-tts
如果你是做英文场景的语音，还是值得一用的，毕竟便宜是真便宜，效果也还不错，中文的话不推荐用，因为没法用，中文我还是无脑推荐Minimax的Audio模块，不仅中文效果好，性价比高，海外版还可以语音克隆。

网址在此：
https://www.minimax.io/audio

很久以前我也首发安利过一次，现在依然有效：
30秒就能完美复刻你的声音，这就是当今最强的中文AI语音克隆。

以上就是这一次OpenAI的全部发布了，熬夜肝完，为大家带来最新鲜的实测。

好了，我要去睡两小时了，预约的早上9点医院做手术
...

![](https://res.wx.qq.com/t/wx_fed/we-emoji/res/assets/newemoji/Hurt.png)

大家晚安~

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
