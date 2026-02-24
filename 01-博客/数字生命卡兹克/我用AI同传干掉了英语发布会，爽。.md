---
title: "我用AI同传干掉了英语发布会，爽。"
发布日期: 2025-07-30
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647673500&idx=1&sn=d84c2956a7c5b9237ea85c966bae0dbf&chksm=f1056b2c55071e246b907a77cf1a537919d5ab6c8faa17d139a24f3988e863b560c49c7c7b53"
---

## 摘要

**1) 一句话总结**
作者为解决观看英文发布会时的语言障碍与看字幕分心的痛点，利用豆包同声传译2.0 API与本地音频重定向技术，成功开发了一套专属的实时AI语音同传工具。

**2) 核心要点**
*   **痛点背景**：观看英文线上直播或线下演讲时，依赖字幕翻译会导致无法兼顾PPT画面，且无法一心二用。
*   **模型选择**：对比多家大模型后选用“豆包同声传译2.0”，核心优势为端到端模型、2~3秒低延迟，以及支持免样本复刻多说话人音色。
*   **成本与额度**：豆包API提供每天100分钟免费体验额度（单次5分钟，每天20次）；实际API调用消耗约1800 Tokens/分钟，折合成本约0.3元/分钟。
*   **开发受阻**：最初尝试开发浏览器插件，但因浏览器安全机制限制无法修改WebSocket请求头注入认证信息，方案被迫中止。
*   **最终技术方案**：采用“音频重定向”技术，通过安装虚拟音频设备（VB-CABLE），将浏览器播放的音频无损传输给本地Python程序。
*   **系统工作流**：浏览器视频音频流 → 虚拟扬声器 → Python程序捕获并调用豆包API → 实时翻译为中文 → 电脑真实扬声器播放，并配有简易Web界面控制启停与查看文本。
*   **线下场景替代方案**：针对线下会议，直接使用豆包官方提供的手机端H5体验版（单次上限10分钟）通过麦克风收音翻译。

**3) 风险与不足（基于原文明确提及）**
*   **开发文档缺失**：豆包官方接口文档仅提供Python、Java和Go的示例代码，缺乏JavaScript版本，增加了前端/插件开发难度。
*   **官方示例局限**：官方提供的Python示例代码仅支持将本地音频文件翻译并保存为文件，不支持实时音频流处理。
*   **浏览器环境限制**：在浏览器插件环境中调用WebSocket协议时，无法直接修改请求头以添加API Key/Token等认证信息。
*   **AI能力上限**：作者明确指出，目前任何AI同传在专业水准上仍难以企及经过反复磨炼的顶尖人工同传译员。

## 正文

我之前看各种什么OpenAI、Google等等的发布会，还有各种线下的英语演讲的时候，一直有一个痛点。

就是，我听不懂。

大多数的发布会是直播，所以Youtube上也没有原生字幕可以看，线下演讲更是这样，好一点的会务会给你准备同传翻译机或者搞个副屏，放AI字幕。

前几天我去参加WAIC的论坛就有这个同传翻译机。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqIJbwBHeB1BpLkBw3ewybC6uSho2WHBBUfuZ0CHEEzgXlham3vx5e3wmltRemRTgWicXNj0XHdGKA/640?wx_fmt=jpeg)

但是很多的时候，可能并没有这么好的条件，就是啥也没有，需要你自己听。

虽然我不太应该这么理直气壮，因为从小没好好学英语，导致我英语很烂，这确实是我自己不努力造成的= =

但是吧，到现在，因为自己一直在玩AI的原因，最高质量的AI信息和资讯，还是来自于英文世界。

这些AI知识我必须要去学才行。

坦诚的讲，虽然华裔面孔占据AI世界主流，但是主流语言还是英文。

这就导致我每次看发布会或者线下演讲，都只能软件开着字幕进行翻译。

线上看发布会就像这样。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqIJbwBHeB1BpLkBw3ewybCN0mjicgaEWX07PGmMEiboHjlfQglI4Ibe474ib8M3yBu5fuQOI1TErd5A/640?wx_fmt=png&from=appmsg)

线下我现在就是直接开个飞书妙记，去实时转录+翻译。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqIJbwBHeB1BpLkBw3ewybCgnH3BTkFEGYyM4yF1OU4nh8NFGNAqDUXQH9ZdIK4BUwBtTUNHLSzGg/640?wx_fmt=png&from=appmsg)

其实已经很好用了，对吧，但是字幕类的我自己用的还是不爽，因为这代表着，你感受不到对方的情绪和状态。

同时，你也没办法一心二用。

看发布会，你只能不断的盯着字幕，干不了任何别的事情。

在会场上听演讲也是，最der的就是。

你低头看翻译，你就看不了嘉宾和PPT，你抬头看嘉宾和PPT，你就听不懂他在说什么。。。

线上看直播一样也是这个道理。

这次WAIC现场里听的英文演讲，实在是让我太痛苦了。

当时在现场，我就在想，有没有什么方法，能手搓一个不需要我盯着看的AI同传小产品，来解决我的这些痛点。

回北京以后，说干就干。

大概思路特别简单，我做一个浏览器插件和一个小网页，然后接一个AI同传的API，就搞定了。

首先是同传API。

我基本上把全网都找遍了。

发现做AI同传大模型的也没几个。

讯飞、百度、豆包、腾讯、阿里、Gemini，好像就没了。。。

最后我选了豆包，因为我自己的一些服务都在火山引擎上，字节家的更顺，而且他们豆包同声传译2.0是刚发的，效果也确实是目前最棒的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqIJbwBHeB1BpLkBw3ewybCn9VNV1DAoqA1tSnDZVkYJibpVe9D9aKbrJgN9Y43WMmeMjUQ3iaFSUeA/640?wx_fmt=png&from=appmsg)

端到端模型，延迟大概2~3秒，基本一句话说完，对应的翻译就出来了。

整体翻译质量也是OK的。

还有一个非常屌的能力，是可以在不采集声音样本的情况下复刻说话人的音色，而且就算是多个人一起对话，
每一个人都可以保持自己的原色来进行同传，音色极其自然。

这个是传统的所有的机器翻译的模型所不具备的。

因为比如像现在OpenAI、Grok啥的发布会，每次都是好几个人在现场，我其实是需要知道到底是谁说了啥的。

而借助豆包同
传
2.0，这个问题被完美解决。

你也可以直接在这个地方体验一下，可以免费用5分钟，每天可以20次，也就是每天免费100分钟的额度。

https://console.volcengine.com/ark/region:ark+cn-beijing/experience/voice?type=SI

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqIJbwBHeB1BpLkBw3ewybCjxia1KpWn2j6rPPAC6NicOJLw52ZdPvQwD03rvNUXjCJVJAvybjJQib9w/640?wx_fmt=png&from=appmsg)

而API这块，价格也还OK。

实测下来，1分钟大概消耗了1800左右的Token。

按照官方价格换算，大概就是一分钟3毛钱，很便宜了。

模型有了，接下来，就是搓一个小浏览器插件和网页，然后把模型的API接进去。

这个过程，我本来以为非常轻松，毕竟一个浏览器插件和网页，这玩意vibe coding搞过N个了，没啥难的的，几个按钮，一个设置，能有一个填模型Key的地方，不就完事了吗。

在浏览器里直接抓取正在播放的视频音频，然后调用豆包同
传
2.
0
的API，实时翻译成中文，再播放出来。

听起来完美，对不对？

但是，噩梦开始了。。。

我真的感觉到了，当时什么叫无知者无畏。

我一开始就卡在了第一步，怎么在浏览器插件里调用豆包同传2.0模型的API？

要知道，这是同传模型，不是普通的那种对话的大模型。

这个API用的是WebSocket协议，还需要在请求头里加认证信息。。。

就是，你平时刷网页，大多是“问一句答一句”，就像发个短信一样，你发了个请求，“给我一个网页”，服务器回了你，“好的，这是你要的页面”。

之后呢？之后就各忙各的了。

如果你想要更新信息，那就得再发一次请求，再等一次回复。这就是普通的HTTP协议，简单但效率一般。

但有时候，我们不想每次都问一下才有回应，我们想要的是实时互动，比如你跟朋友打电话，不需要每次想说话的时候再拨一次号码。

WebSocket协议就是为这个场景而生的。它更像一通电话，一旦你接通了，双方可以一直不停地实时说话，不用再挂掉重拨。

豆包这个API用的就是WebSocket协议，因为同声传译这个场景，恰好需要你不断地把音频数据发送过去，服务器一边接收一边实时返回翻译后的文字或音频，你一边说，它一边翻译，非常顺畅。

而最大的问题，在于你的插件在浏览器环境里调用WebSocket时，要往请求头里塞认证信息（比如API Key、Token什么的），但浏览器为了安全考虑，不允许插件随便修改WebSocket的请求头。

真的是磕了半天以后，才明白这个坑

![](https://res.wx.qq.com/t/wx_fed/we-emoji/res/assets/newemoji/Broken.png)

浏览器插件的环境里，想要往WebSocket的请求头里加认证信息，简直是地狱级别的难度。

更要命的是，我去看了下官方的接口文档，有Python、Java和Go的示例代码，没有JavaScript的版本。

我这种半吊子选手，就更是两眼一抹黑。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqIJbwBHeB1BpLkBw3ewybC3SCJMkcwUdOu7VnlaBt4Bm8zgJ6ZquySZ5vWXQDPibVkxNbR06kBdiaw/640?wx_fmt=png&from=appmsg)

折腾了两天，各种StackOverflow、GitHub翻了个遍，发现这条路基本上是死路，实现起来非常麻烦。

行吧，只能换思路。。。

既然浏览器环境搞不定API，那搞个曲线救国的方案，浏览器插件负责抓音频，然后把音频数据发给一个本地的Python程序，让这个程序去调用豆包API。

听起来非常合理。

我这就下载了豆包官方的Python示例代码，填了密钥信息，在电脑上跑了一遍，确实能运行。但是看了代码才发现，这玩意确实只是个示例，只能把一个本地的音频文件翻译成另一个语言，然后保存成文件。

不是我想要的实时处理。

更让我头疼的是，怎么从浏览器里把正在播放的Tab的音频流，稳定地传输给本地Python程序？

这个技术难度，比我想象的要高太多了。延迟、音质损失、断连...各种问题一堆堆的。

就在我快要放弃的时候，突然灵光一闪。

我为什么要这么复杂呢？

我直接搞个本地Python程序，然后用"音频重定向"的方法，不就行了吗？

这是一个我之前搞游戏直播的时候学到的方法。。。

音频重定向，说人话，就是给你的电脑戴上一个虚拟的耳机。

平时你电脑上的声音（比如看直播时的演讲声音、视频里的声音）都会通过系统默认的扬声器或耳机直接放出来，你的耳朵听到了，但你的程序却抓不到。

现在呢，我们给电脑装一个虚拟设备，就相当于再给它接一根虚拟的耳机线。

这根虚拟的耳机线它表面上看是个耳机，但实际上的作用是把你电脑里播放的所有声音拷贝一份出来，送给另一个程序去处理。

于是，我在电脑上装了一个叫VB-CABLE的虚拟音频设备。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqIJbwBHeB1BpLkBw3ewybCoGVrGM7Utia9wYONkktU2icKmChickgKpVSSbEfvsIPiacb5EibAPKR2wzQ/640?wx_fmt=png&from=appmsg)

然后，当我在浏览器里看视频的时候，我把浏览器的音频输出切换到这个虚拟扬声器。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqIJbwBHeB1BpLkBw3ewybC8CROhhLED8kMdZjaf1gibSy0oRfUudle7Iia1EhVY5Jy62ibsV9jf0Img/640?wx_fmt=png&from=appmsg)

这样，视频的声音就会进入这个虚拟设备，而我的真正的扬声器是听不到任何声音的。

接下来，我用AI修改了一下刚刚下载的程序，实现把这个虚拟扬声器当成麦克风来监听。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqIJbwBHeB1BpLkBw3ewybCoX6u8GG3fl6xJN914s1BOQmnxfCkXjsnV93LumMHGHGsKKiaxCDAfNA/640?wx_fmt=png&from=appmsg)

这样，Python程序就能精确地捕获到浏览器播放的英文音频了。

然后程序调用豆包的同传模
型
2.0，把英文音频实时翻译成中文，再通过我的真正扬声器播放出来。

整个流程就是：浏览器视频 → 虚拟扬声器 → Python程序 → 豆包API → 真扬声器

流程清晰，逻辑简单，没有复杂的数据传输，也没有浏览器环境的限制。

最关键的是，效果特别棒。

我听不到任何英文原声的干扰，只能听到清晰的中文翻译。就像真的有个同传在我耳边翻译一样。

为了方便使用，我还搞了个简单的Web界面，可以启停翻译功能，还能实时看到API返回的原文和译文。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqIJbwBHeB1BpLkBw3ewybCktmPvyNM7iceOiaibCETs5OZQnpqzfmpcP6eccoSZribCNkW9qsl2jA9nA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqIJbwBHeB1BpLkBw3ewybCtRwSEGBocPKoCFzL3CwX4ic4IIJ4zPbmBEjxfIyOmN60w77WpK8Nzqw/640?wx_fmt=png&from=appmsg)

第一次成功测试的时候，我激动得差点跳起来。

我打开了一个英文的AI发布会录播，然后启动我的程序。当那个陌生的英语声音消失，取而代之的是流畅的中文翻译时，我真的有种终于把这个破事给搞定了的成就感。

当你排除千难万险，解决一个难题，把一个程序跑通的时候，那种爽感，就像你在打只狼，推一个卡了好几天的BOSS，血条只剩一丝的时候手都在抖，打出最后那一下平A，BOSS倒地但你还站着的那一瞬间，大脑一片空白，随即巨大的多巴胺如潮水般涌来。

这种爽感，带着一点劫后余生的庆幸，一点自我突破的自豪，还有一点征服世界的豪迈，让你忍不住想站起来仰天长啸。

终于搞定了！

虽然只是一个同传的小东西而已。

我终于可以一边刷着播客，一边听着优雅的中文翻译，不用再低头看字幕了。

那种感觉，就像是给自己找了一个随叫随到的高级翻译。

而且不止是一个人的音色，如果是5个人，那真的就可以0样本复刻5个人的音色来给你翻译，每一个人，都有自己的声线，你只需要听，就可以区分出所有的信息。

折腾了这么久，总算是把自己的这个痛点给解决了。

一个小白，能借助AI，徒手做出自己想要的东西，这感觉，还是很酷。

至于线下的场景，反而简单很多了，因为就调用一下麦克风做传输就行。

我本来想自己开发一个H5网页的，一想，豆包已经做了一个体验版本的，有没有手机版的？

就搜了一下。。。

发现，还真有。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqIJbwBHeB1BpLkBw3ewybCo7zicnJyWTVP04x2a7yfZDsiacooOb0HCPAraUqfia9VXhfaKZeV47zHw/640?wx_fmt=png&from=appmsg)

点进去以后，免费体验。

而且10分钟上限。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqIJbwBHeB1BpLkBw3ewybCibibUKYBliboZ4ziadhXPiaypam40nSoVVn0248okNEibQ905TjCofXIJv7A/640?wx_fmt=png&from=appmsg)

线下完全就可以直接用了。

最后，我想表达一下我对于同传这个行业，还有对译员的观点。

我是一个纯粹的外行，我做这个小东西，完全不是为了要去挑战或者取代那些真正专业的口译同传们。

会议现场，真正的译员们在大会现场，在同传和长交传领域反复磨炼，才有那种举重若轻、炉火纯青的能力，这种水准，目前任何AI都难以企及。

但技术的意义从来不止于取代。

更重要的是，它让那些像我一样普通而平凡的人，因为AI的发展，让我可以用低廉的价格，打破语言障碍，这是一个非常棒的事。

不再局限于语言的高墙，让每个人都能在更平等、更自由的条件下，找到自己想要的答案。

AI本就是为我们每一个人服务的。

它也本身就是个性的。

任何我们觉得不满意不爽的事情。

你都可以尝试着，用AI再做一遍。

然后，你就会发现。

一个更广阔的世界。


wzglyay@virxact.com

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
