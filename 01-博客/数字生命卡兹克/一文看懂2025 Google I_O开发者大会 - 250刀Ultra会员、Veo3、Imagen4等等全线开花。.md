---
title: "一文看懂2025 Google I/O开发者大会 - 250刀Ultra会员、Veo3、Imagen4等等全线开花。"
发布日期: 2025-05-21
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647671348&idx=1&sn=7a5dc2b6a790955be692a33a9c2480a2&chksm=f107364ad1fb53cb6511d5b382b2ad50edf0f475027ad9e43bac2ebfadf34d24a2a6d318e881"
---

## 摘要

**1) 一句话总结**
2025年Google I/O开发者大会全面展示了谷歌在AI领域的强劲反击，重磅推出了涵盖底层大模型、视觉生成、AI搜索、智能体（Agent）及硬件生态的全线AI产品，并以全新的Google AI Ultra订阅服务整合了其核心AI能力。

**2) 核心要点**
*   **顶层战略与订阅服务**：推出每月249.99美元的Google AI Ultra超级会员（前三个月半价124.99美元），打包提供Gemini 2.5 Pro Deep Think、Veo 3、Project Mariner等所有最新AI产品。
*   **AI大模型全面升级**：发布全能旗舰模型Gemini 2.5 Pro（登顶LMArena）、主打速度与效率的Gemini 2.5 Flash，以及针对复杂数学和编程推理的Gemini 2.5 Pro Deep Think。
*   **多模态与Gemini产品线**：Gemini Live视觉问答功能全面上线iOS/Android；推出可跨应用（Gmail/Drive等）调用个人数据的Personal Context功能；发布可替用户自动执行网页任务的Gemini Agent Mode。
*   **视觉与视频生成突破**：发布AI电影制作工具Flow；推出支持**原生音频**（音效与角色对话同步）生成的视频大模型Veo 3；以及解决文字嵌入难题的图像模型Imagen 4。
*   **重构Google搜索**：推出端到端对话式AI搜索体验“AI Mode”，支持复杂长问题、深度研究（Deep Search，可同时发出上百个搜索请求）、数据可视化及虚拟试衣等功能，已向美国用户开放。
*   **Agent（智能体）系统**：发布网页自动化浏览器助手Project Mariner，支持同时监督10项并行任务及“示范并重复”的RPA功能；推出AI编程助手Jules。
*   **硬件与生态扩展**：展示了与三星合作的Project Moohan头显、支持实时翻译和视觉问答的Android XR智能眼镜、3D视频通话技术Google Beam，以及性能提升10倍的第七代TPU Ironwood。

**3) 风险与不足（基于原文明确提及）**
*   **功能限制与地域门槛**：AI电影工具Flow目前仅对美国开放，且图生视频功能暂不支持用户上传本地图片，只能使用内置Imagen生成；AI Mode也仅向美国用户开放。
*   **部分产品仍为“期货”**：Gemini 2.5 Pro Deep Think目前仅限受信任的测试者使用；Gemini Agent Mode仍处于实验阶段；Project Mariner需等到今年夏天才更大范围开放。
*   **使用成本高昂**：Veo 3 仅限Ultra会员使用，且消耗点数极快（单条视频需150点数，12500点数额度消耗迅速）。
*   **特定工具使用门槛**：AI编程助手Jules必须连接GitHub才能使用，对非开发人员不友好。

## 正文

今年，Google算是打了个翻身仗。

不断的掏出新东西，不断的让大家，感受到惊喜。

而万众期待的Google I/O开发者大会，终于在今天凌晨1点正式开始了。

这次的大货，真的持续轰炸了整整两个小时。。。

说个小插曲，本来我现在，人应该是在硅谷Google总部现场的，因为受到小红书和Google的邀请，喊我去现场看。。。

但...作为一个八百年不出门宅在家里的死宅，有一个非常严重的问题，就是，我没有美国签证。

就...一次都没去过。。。

现申请也来不及了，最后，只能让我团队的小伙伴@jojo过去了，她在现场看，给我拍素材，我在家里坐着一边看直播一边熬夜写。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjG9nVWibNW8h5wJVibVwoBz0dZXVXzmOIVia14ibsh9aBOtJ9nvO5xFumWg/640?wx_fmt=png&from=appmsg)

然后，她就跟皮查伊合影了。。。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo8jULIFue9dTC2cXt73WDjMmsdPZBKSxsLmt4FEXicXvoKO6lQAib3dGcus2pYfkhxcp3HEUbFYwbA/640?wx_fmt=jpeg&from=appmsg)

我也好想...去啊...

总之，还是非常非常非常感谢，小红书和Google的邀请。

接下来，我们详细的来看看，整个发布会的内容（并不是完整的按照时间线来）。

我一共分为
AI模型、Gemini产品、视觉生成、Google搜索、Agent、其他
，六大块来详述，一共23小项。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo8jULIFue9dTC2cXt73WDjX2qNbibwrBxD1sgt7KqqHE4gNlasb0sQ60NR0HLap5VzFW1j4NIhdvA/640?wx_fmt=jpeg&from=appmsg)

我说真的，Google在那kuku输出了2小时，我人都听麻了，就这俩小时的发布会光素材分类和整理就让我从凌晨3点半干到5点半，我特么。。。

那就，开始吧。

零. Google AI Ultra会员

会员发布其实比较晚，但是我依然想把它放在第一个，放在所有部分之前。

因为它代表着Google的整个战略。

这次，新加了一档249.99刀每月的超级会员，称为Google AI Ultra，还好他们没直接写250刀。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjfla83euXtYiazO7HjScK9D6PnscWPYpBmET325tdkHiaFs2abSYcEb5Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjrKUBk7GS6ldbyGxreukaREhxIGt0lErgYeh90ZG6mvSXeycfPFDo8Q/640?wx_fmt=png&from=appmsg)

几乎囊括了所有的这次新发布的产品，包括Gemini 2.5 Pro Deep Think、Veo3、Project Mariner等等，还把NotebookLM、Youtube等等的会员都包了进去。

从这个点来说，终于看到Google开始齐心协力、心往一处使了，从顶层开始发力。

目前前三个月半价，124.99刀每月。

没啥可说的，第一时间，先氪为敬。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDj4ZOQR3Mb3S1jBdiadTiccsXQTCBMoVRp5iaBkOv6Uo5UV7s5zlMBYWNPg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjVwNhjOG2473Q2WEDsNV6WWs9icvqbaicdp0YA7xlZltibZibWj1vXJLngw/640?wx_fmt=png&from=appmsg)

每月花销继续增加，AI博主真的是个太烧钱的职业。。。

一. AI模型

>/ 1.
Gemini 2.5 Pro

今年I/O大会的明星之一，让Google提前两周放出优化版，我当时就写过一篇评测文章：
用AI把一段视频变成可视化网页，Google的新模型又卷飞了。
绝对的亲儿子。

直接碾压了LMArena全部测试项，在语言、推理、代码等方面全线封神。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjsyMzd0yBcdJxibtdZeljw76bD7PQlJbfekRcSJDNnRwytreWoDd8DGA/640?wx_fmt=png&from=appmsg)

特别是WebDev编码测试里直接拿了个天花板级分数，足足比上代提升了 142点Elo，直接登顶。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjrmOe5TrTmm1H1zJs8nAGiaR0HhFaZhwGe7UgpLfib7hxMZOs7IsNBJZw/640?wx_fmt=png&from=appmsg)

官方还拿它玩了个彩蛋，让Gemini 2.5 Pro自己打通了《宝可梦：蓝》，八枚徽章收齐，四大天王+冠军全通。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjzwIJDNcsHoV0J3VNCnIOjAw3sjVb1Y50J6MGibIGdeEjbicb1fdJGtKQ/640?wx_fmt=png&from=appmsg)

让观众戏称，这尼玛绝对就是是“人工精灵宝可梦智能（API）”，这块可能是我英文不行，看了半天没理解这是一个什么梗。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjaDYBHicnicuqOoyyiawaoumpYeiaBibXfHJyfiaFFkrlUoe87zszN3HvliaSQ/640?wx_fmt=png&from=appmsg)

>/ 2.
Gemini 2.5 Flash

如果说2.5 Pro是全能冠军，那
2.5 Flash
就
是速度型选手。

谷歌把这玩意称为“最高效的劳模模型”。

发布会上发了新版，号称在推理、代码和长上下文等几乎每个维度都有提升，
在LMArena榜单上高居第二，综合表现仅次于旗舰的2.5 Pro。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjMAFVbH8xkib9JZM8hggzzEpSsxwflzve6vjcToy53Ix2tYiaF3oEO99g/640?wx_fmt=png&from=appmsg)

新的Flash模型大概会在6月上旬上线正式版。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjDhDhoMkgt7ibN4BiakibicPcicia5NA7icnBzbslrrO1ibr4xR4ko50jib5iaOTQ/640?wx_fmt=png&from=appmsg)

迫不及待的朋友现在就可以在 AI Studio、Vertex AI以及Gemini App先行体验预览版，比如AI Studio里，这个Gemini 2.5 Flash Preview 05-20就是。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjGUvdqkaXVGq8EnRxukGdia2sb8IhrjMwiaWqrn2v17EUZEBadhZQ9wDw/640?wx_fmt=png&from=appmsg)

>/ 3. Gemini 2.5 Pro Deep Think

Gemini 2.5 Pro本身就已经够厉害了，现在Google又给它加了个超强模式，Deep Think。

在超难的数学和编程
基准测试
中表现惊人。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjwjCKfKJ0wribicJnYSHs9qWQ2IFvSBDXHXbaDExOeocxh8fkyuic9ch5A/640?wx_fmt=png&from=appmsg)

这玩意其实大家对OpenAI很熟的话其实完全能找到对应的，就是那个至今依然是我主力模型的o1 pro，用将近几分钟的推理时长，来换取更高的质量。

o3 pro没发，结果Gemini 2.5 Pro Deep Think先发了，不过这两个哥们都是期货。

Google也还在搞安全评估，只会
先给信任的测试者用
。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjVChK626IGTwK02GJCLMiaX46uPQ8hOt181BvXHgFqAkHOKLQl9LicVew/640?wx_fmt=png&from=appmsg)

>/ 4. Gemini Diffusion

谷歌还秀出了一项前沿研究，一个实验性的文本扩散大模型。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjqKibWbjpSRFDREaWKysA7eDeMv3SXgFVXbzphicKBKCRU3ibKAjgRSt7Q/640?wx_fmt=png&from=appmsg)

不是传统的通过预测下一个Token来生成内容，而是通过逐步细化噪声来并行生成内容。

这种并行生成让它展现出惊人的低延迟，现场演示版本的 Gemini Diffusion 生成速度比2.0版的 Flash Lite快了五倍，代码任务质量却几乎相等。

二. Gemini产品

>/ 1. Gemini Live

今年他们展示了整合
多模态交互
的新功能
Gemini Live。

基本源
自去年的研究
Project Astra，它探索的是能理解你周围世界的通用 AI 助手。

目前
Project Astra被整合进
Gemini Live，用户可以对着手机摄像头或屏幕上的任何内容和 AI 助手对话。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDj9fEkPTG0dmQWWGm9MeCLNtPMkAKAZqnCic4FdZOJlcGILbtqdfelUAg/640?wx_fmt=png&from=appmsg)

现场还玩了个花活，测试者用摄像头对着街边乱指，Gemini Live不仅纠正了用户把垃圾车当成豪华敞篷车的错误认知，还顺道给用户科普了一下，路灯不是瘦高建筑物这种常识。

比较令人激动的是，Sundar Pichai宣布Gemini Live的视觉问答功能，从今天开始即将在Android和iOS平台全面上线。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjF6L4sWEEZOuqGNMjL25icuwGQV384RtqlFOCLODNvicziaicRz5R6BBFVA/640?wx_fmt=png&from=appmsg)

>/ 2. Personal Context

一个非常个性化的功能。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjMvpwECe3D2NntwTL8ly9mqjHXplqqUS4FcWLCEbtiaZFd1ktbgRVg7w/640?wx_fmt=png&from=appmsg)

得到你授权后，Gemini能打通你的搜索历史、Gmail、Drive这些Google应用里的信息，真正懂你。

比如它知道，你物理考试快到了，它不仅提醒你，还能根据你的笔记、教授的材料，甚至手写笔记给你出个性化考题。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjncpjGic8FAVGic5rrEWnV3tNZoqanjv3IvpMyNYSTE4MnV3GVZqjic4pA/640?wx_fmt=png&from=appmsg)

>/ 3. DeepResearch和Canvas创作

Deep Research现在能上传你自己的文件来进行深度研究了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjVxF1lSPvrBRqEzazTuTbF9HtePTlFzicibib3mMgXKadMT5eW0icHXp1Bg/640?wx_fmt=png&from=appmsg)

Canvas也迎来了升级。

可以把研究报告一键转成网页、信息图，甚至45种语言的播客。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjlsBIQUPy6gC81gnCV9RKPnfG3ypnhPemQ6RDjkcdHyI1WRoQpd8nCA/640?wx_fmt=png&from=appmsg)

还能在Canvas里用前端预览写出来的代码，同时分享给你的朋友，这个其实上了有一段时间了。

>/ 4. Gemini现身Chrome

浏览网页时，Gemini能直接理解当前页面内容并回答你的问题，等于自带了一个AI总结的网页插件。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjpsJApYgAyNIm81WNUic3tYUa98zDxmyqqSTt5rwQJdtn8MWhn8ct9fw/640?wx_fmt=png&from=appmsg)

>/ 5. Gemini Agent Mode

针对C端用户，
谷歌在Gemini应用中引入了全新的
Agent Mode
（代理模式）。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjuLu1icvRGTuh08mG928zCjp5icxLAXk9POLyv9tNud2ya2UtKREcUu9A/640?wx_fmt=png&from=appmsg)

这是一个让普通用户也能支使 AI 去网上替自己办事的功能。

举个例子，你和室友想找房子，预算、需求一大堆，按以往你得刷无数网页，现在只需把这些要求一股脑告诉 Agent Mode。

然后你就可以
解放双手，让Gemini在背后替你上网找房源，
它会自动跑去 Zillow等房产网站搜索符合条件的房子，并调用Mariner帮你针对特定条件筛选。

当发现心仪房源时，它还能用自动表单提交帮你预约看房。更牛逼的是，这个智能代理
会持续替你刷更新的房源
，一直忙活到你喊它停为止。

不过，目前，Gemini应用中的Agent Mode仍在实验阶段
，谷歌说
很快向订阅用户推出实验版，又是一个饼。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjrIibaZyz4aHiclLS4CkDW52lopDOdo373ibic6kN3blX1YtJHNQJuDKpicw/640?wx_fmt=png&from=appmsg)

三. 视觉生成

>/ 1. Flow

Flow是这次Google憋出来的一个大招，一个全新的AI电影制作工具，直接把Veo、Imagen和Gemini的能力全揉进去了。

感觉，就是直接对标Sora。

你可以上传自己的图片，或者直接用内置的Imagen当场生成素材。然后用一个指令，就能生成一段非常屌的AI视频。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjvZPQ7qjOwgTaQ0yM4M56FMYgHZMnIZeLbqzyJJBU3p57ExX10Oehpg/640?wx_fmt=png&from=appmsg)

视频生成完成以后，你还能直接进行剪辑，还能延长、跳转下一个镜头。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjQLcRUlEaWkU7UDFjj9S8arYqH655rrdD7IyDXWQoo7N9mr2funGWLA/640?wx_fmt=png&from=appmsg)

比如你就可以点个点个“+”号
，直接
描述“在后座加一只10
英尺
高的鸡”，Flow也能给你整出来，而且角色、场景风格还能保持一致。

不过在我氪了125刀进去以后，发现有个功能还是饼。。。

就是你想要做图生视频啥的，目前只能用他们自己的Image生成，而不能自己上传。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDj0Iv8BKdcyv3X3Dv76FSkQScniamIKswVy8TPsosB0xDEjmIBqNoGYrQ/640?wx_fmt=png&from=appmsg)

这限制就有一点大了。

网址在此：
https://labs.google/fx/tools/flow

目前只对美国开放，所以想用的话，魔法记得调一下。

>/ 2. Veo3

谷歌去年
推出的Veo 2曾让业界惊叹不已，在文生视频这块真实感确实强到离谱。这一次，他们乘胜追击发布了新一代的
Veo 3。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjQFwfjEfvW0EBUH0PJyZTicdw789BLGGcaKy3Y2TT5Kmcer5y3jsXwrw/640?wx_fmt=png&from=appmsg)

它在画质和逼真度上更上一层楼，尤其对物理的理解更深厚了，比如重力、光照、材质这些现实规律。

然而
Veo 3 最大的突破
在于它首次加入了
原生音频生成。

也就是说，你让它生成的视频里不光有画面，还有背景音效、环境声甚至角色对话同步出现。

“让 AI 画两个森林里的动物聊天”这曾是天方夜谭，但现在 Veo 3 真能做到。

还有船长的表演和说话，自然的跟真人一样。

而且，好消息是，Veo 3
在发布当天即开放
使用，直接上线了上面的Flow平台。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjfP7cVmLiagHLG8fRfPdeXhckUVmK0w2jNfoc9ic05ChYug4FINRgx5yQ/640?wx_fmt=png&from=appmsg)

坏消息是，只有氪了125刀的Ultra会员才能用。。。

而且这玩意血贵，一条视频150点数，Ultra会员一个月也才12500好像，我随便跑了下，就只剩9000了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjCWib0ue5icEUM4OxMsicUIgsKJhGhy4iaCWQj3hppkfn4ibP199oyuI9aNw/640?wx_fmt=png&from=appmsg)

给大家看看我实测的几个效果，没太深入的测，都是随手跑的。

首先，确实能说话能表演有音效了，这个是真的牛逼。

Prompt：
A wide shot, post-apocalyptic setting: Dim industrial floodlights cast harsh shadows over a dusty underground hangar. A battle-scarred rebel commander stands atop a metal crate, addressing a crowd of grim-faced survivors. Commander: “This isn't just about survival anymore. Tonight, we take back Sector 9!”

物理规律史诗级进步，能落地能转能跑起来了，甚至，还能投篮了。

Prompt：
The robot in the high air lands, smashing stones and tumbling, quickly gets up to adjust its posture, locks onto the target, then bursts into accelerated running. The camera follows the action with rotation and sliding, the rhythm of movement is fast, the landing and rolling are smooth without cuts. The scene is a nighttime city alley, with neon lights reflecting off the metal body.

Prompt：
The girl jumps and shoots the basketball; the camera follows the ball as it flies from her hand, spinning into the net after soaring over the defender. The ball falls into the hoop's net and slowly bounces back. The audience erupts, cheering loudly. The camera finally zooms in on a close-up of the girl landing with a smile, evoking a passionate and inspiring mood.

>/ 3. Image4

Imagen 4
是他们最新一代的文本生成图像模型。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjXgdQCgnALHXerzDT1icMjasfkZEmvEmSJLeRxf1PrAb5iamDXA8SlibCw/640?wx_fmt=png&from=appmsg)

这代模型他们说
画质有质的飞跃，
颜色更丰富、细节更精致，连光影质感和水滴等微小元素都栩栩如生。

过去让 AI 头疼的文字嵌入问题（比如在图上加句子常常变成乱码）在 Imagen 4 上也有重大改进，能准确生成文本内容，还能聪明地选择字体样式，比如把恐龙骨头做成字母、自动调整间距和版式等等，让 AI 生成的海报看起来更好看。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjahkSyBLyuAFOyNkJTMb3qP15SOqa0ISVA5a8NmwhPzaobvCyQZvpBA/640?wx_fmt=png&from=appmsg)

目前已经全量上线，普通用户在Whisk上可用。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjr8Z5OmUuLwUSauYFsXMfIw4dPNAam73PFILUhgx7sVXel88ja5rwBw/640?wx_fmt=png&from=appmsg)

网址在此：
https://labs.google/fx/zh/tools/whisk

四. Google搜索

>/ 1. AI Overviews

谷歌搜索去年引入的 AI 概览(AI Overviews)功能在今年 I/O 上交出了一份很牛逼的成绩单。

每月已有超过15亿用户
在消费搜索生成的AI摘要。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjUTnt2uGommD7WmOgrCaWwqic5UEI3eaL47Zq4vclv84vic3cxqYtd5fg/640?wx_fmt=png&from=appmsg)

AI Overviews会在你搜索时于结果顶部产出一个由Gemini模型生成的简述，还附带信息来源引用。

经过一年的打磨，这些AI概览的质量和相关性不断提高，而且随着最新Gemini 2.5系列模型的应用，生成结果
准确性更高
、覆盖面更广，并支持
更复杂的问题
了。

目前 AI 概览功能已经在包括美国、印度在内的40多个国家/地区上线，并支持多语种查询。

Google还放了一个数据，就是自从有了AI概览，用户在搜索上的投入度也有所提升，每日搜索量出现了额外两位数百分比的增长。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDj5RVKEMxzz6m61sZiaficEK0iavIamccurswLuQDPaiaxjXZicHPYemP6bKQ/640?wx_fmt=png&from=appmsg)

这个增长量，和Google这个体量，还是很恐怖的。

>/ 2. AI Mode

如果说AI概览还只是小试牛刀，那今天谷歌端上来的主菜，AI Mode，就
是对搜索体验的
全面重构。

Sundar Pichai 在台上宣布，谷歌正在推出一种
端到端的AI搜索体验。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjThP2EonumzRKqQ8BUMjaDn5ojRPqUwSxaPg95ob8LtWl1MBrUVhtuQ/640?wx_fmt=png&from=appmsg)

启用AI Mode后，你可以提出
更长更复杂的问题
，甚至不像以往那样非得精简成关键词。

Google，这个全世界最牛逼的搜索巨头，终于也全面拥抱AI搜索了。

大会现场直接宣布，
AI Mode当天起
作为实验新功能，向美国所有用户开放。

可以说，AI Mode是谷歌对搜索范式的一次重塑，他们也终于，从“搜索结果列表”转向“对话式报告”了。

有几个小的点。

个性化搜索结果：
AI Mode能根据你过去的搜索记录，
甚至接入Gmail信息（当然，你得同意）
，给出更贴心的建议。比如你搜旅游攻略，
它知道你喜欢户外，还会结合你邮件里的航班酒店信息，推荐行程
。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjo05icSGk07ueEjvfZN0BLVIA5nOQYj1kfTbzAwTI15LOibQlJx8tfojQ/640?wx_fmt=png&from=appmsg)

Deep Search（深度研究）：
对于需要深入研究的问题，
AI
Mode能同时发出几十甚至上百个搜索请求
，然后
把信息汇总成一份专家级的、带引用的报告，一个小型的DeepReaserch
。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjw1sBO4LKBAWgwFJNytHlvpP55xb6ibsU8lzMqEicGibsbKFbFVqaROGiag/640?wx_fmt=png&from=appmsg)

复杂
数据分析
与可视化：
问棒球运动员的数据，
AI
Mode不仅能列表格
，
还能直接生成图表给你看
。 然后大概在今年夏天，会上线更详细的体育和金融问题的分析。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjeB8zZWdNlDfsibib7LjXic2wPtWU004icxNdljqia5QcM4ujQzPWwen48Fg/640?wx_fmt=png&from=appmsg)

AI
帮你办事儿：
整合了Project Mariner的能力，AI Mode能帮你搞定一些实际操作。
比如你想买球赛门票，告诉它你的要求，它能帮你搜遍各大网站，比较价格和座位，最后直接把你引到付款页面。以后订餐厅、预约服务也能用。

AI
购物更爽：
找地毯？AI Mode能根据你的描述（比如家里有四个熊孩子），推荐耐用、易清洗的款式，还会给出购买链接和注意事项。
最绝的是
虚拟试衣
功能，上传你的照片，就能看衣服上身效果，背后是专门为时尚训练的图像
生成模型
。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjFtZIibp5ib2b14ISF2q0WIzO6dAMW71AX8fJ2ZafwSL2Pj0iafkQ55ZaQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDj5icnHL7df5iaiccYy7BicDib76WXtfbQrqd9nEepbv2wboGOtqxv7jibdvOg/640?wx_fmt=png&from=appmsg)

五. Agent系统

>/ 1. Project Mariner

今年绝对是Agent大年。

Agent技术方面，谷歌发了
Project Mariner。

这个研究项目可以看作是 AI 驱动的自动化浏览器助手，就是那种
一个能在网络上代替你执行操作的Agent。

去
年12月作为早期原型推出以来，Mariner 进步神速，现在它已经学会了
多任务处理
，
能同时监督多达10项任务
并行
执行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjT1RbFh5vuqEPu80DFhXeUREhWYK9AiavXTaibVlMHkLuiap6snH0Astqw/640?wx_fmt=png&from=appmsg)

还引入了一个非常酷炫的“
示范并重复 (Teach and Repeat)
”功能，就是你示范一次，它便学会流程，以后遇到类似任务就能直接上手。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjNX10EtOubqkkR6d5rZlfjE5phWgxAhrtib6wstLut0LjpZzMY4993Hg/640?wx_fmt=png&from=appmsg)

这是我第一次在Agent产品上，看到了RPA的影子。

这才是王道嘛。

之前的那篇关于RPA的文章，含金量还在增加：
RPA+AI，才是真正能让你躺平的自动化真神。

Mariner已开始通过Gemini API向开发者提供其用电脑的能力。

大概今年夏天，会
更大范围开放
这一能力供开发者。

>/ 2.
Jules

发布会之前就提前发的一个AI编程Agent，目前全球测试中。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDj3xxu5fdkQ8rHf8L3YTNxcx1licwOfedms9hAwtrVFAJoSjThKrABgBw/640?wx_fmt=png&from=appmsg)

谁都能用，每天5次免费额度。

它可以连接 GitHub，自动拉取和提交代码等等。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjTLsXfyXyrohdgFGdfs60PBS0GYt2S7nIaiacedrfUYKxPGicy8uicS27A/640?wx_fmt=png&from=appmsg)

不过必须接Github才能用，对我这种开发小白还是非常的不友好。。

六. 其他

>/ 1. NotebookLM

去年和今年最火的项目之一，掀起了AI播客的潮流。

这次在 I/O 大会上谷歌宣布将其正式推出独立应用，并登陆
Android 和 iOS 平台
。现在，无论是在手机还是网页上，你都可以随时随地调用 NotebookLM 来整理笔记和知识。

>/ 2. Gemini融入安卓全家桶

你已经可以通过电源按钮快速启动Gemini了。未来几个月，Gemini还会登陆你的智能手表、汽车仪表盘甚至电视。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDj5kB1y9OmeveoXwwtiapoKZn0AQ8dmOj0zicuD4R4WicSbJk3Y7Y0kuX7w/640?wx_fmt=png&from=appmsg)

>/ 3. Project Moohan头显

跟三星联合打造的Project Moohan头显，也是第一款 Android XR设备。今年晚些时候就能买到。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDj2uOrX75W6ibXq2FTYCF8EC9ZhbpicViarQtVnFMKMRGKpmibQgz0ic4567g/640?wx_fmt=png&from=appmsg)

>/ 4. Android XR智能眼镜

轻便、适合全天佩戴，内置摄像头、麦克风、扬声器，甚至可选的镜内显示屏。

现场演示了戴着眼镜，Gemini就能识别你看到的东西（比如墙上的乐队照片），回答你的问题，播放音乐，导航，甚至识别之前喝过的咖啡品牌并找到咖啡店。

还有实时翻译功能，两人用不同母语交流，眼镜能实时显示翻译字幕。

一上来就演示就直接炸场了。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo8jULIFue9dTC2cXt73WDjIj3emvmcX8RsNrBCId3DktS7ZVrFRuOabhfOuvKOH4ErxMgAribfSxw/640?wx_fmt=jpeg&from=appmsg)

还搞了联名，Gentle Monster和Warby Parker是首批合作伙伴，Google这么多年还是爱眼镜的啊。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjWsjw5P87RYuTdicW4PcDiaJfHbsT5BcrIbQa1AWuZC4BROhczBfibXicQA/640?wx_fmt=png&from=appmsg)

>/ 4. Google Beam

还记得之前Google那个让你感觉对方真人就在眼前的3D视频通话技术吗？现在它叫Google Beam。

它用一个包含6个摄像头的阵列从不同角度捕捉你
，然后通过AI将这些视频流融合成逼真的3D体验，显示在3D光场显示器上，还能毫米级精度、每秒60帧实时追踪头部。

今年晚些时候，惠普将推出首批Google Beam设备。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjIEwwr0qIicfCSh17CFfOYLUPj6XeKPBEBV0xd32HGT3ic1ficv9qusibjw/640?wx_fmt=png&from=appmsg)

>/ 5.Google Meet实时语音翻译

这
项技术能让不同语言的人进行自然流畅的对话，翻译能匹配说话者的语气、语速甚至表情
。 现在已经可以直接在Google Meet里用上了，目前支持英语和西班牙语，更多语言和企业版会陆续推出。

>/ 6.TPU Ironwood

第七代TPU
，专门为AI的思考和推理大规模应用而设计，性
能比上一代提升10倍。今年晚些时候会上线Google Cloud。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjjibpDX7X1CQbFZX5Tl9PZ8JUOPCrg5scvUKXk9mscxUPOvPqGBPkNibg/640?wx_fmt=png&from=appmsg)

>/ 7.SynthID数字水印

为了应对AI生成内容难以辨别的问题，Google升级了SynthID，
新的SynthID Detector能检测图片、音频、文本或视频中是否包含SynthID标记，哪怕只是一小部分。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo8jULIFue9dTC2cXt73WDjYzM0hB1LiapxWMzt5lNSXVBG6wZcIXXbbEU7YnsrK7PmhWEKScvQ4lQ/640?wx_fmt=png&from=appmsg)

写在最后

终于把这个发布会，总结完了。。。

Google这个量，实在是太吓人了。

真的叫量大管饱。

很多非常有趣的东西，比如Flow、比如Veo3、比如Gemini、比如AI mode等等。

时间关系，今天完全没法深度体验和评测。

毕竟，优先第一时间把这篇总结，送到大家手里，才最重要。

后面抽空，可能会继续写单个功能的深度体验稿。

最后容我感慨一句：

Google，好像真的回来了。


wzglyay@virxact.com

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
