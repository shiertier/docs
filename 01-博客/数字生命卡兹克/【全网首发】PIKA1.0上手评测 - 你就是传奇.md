---
title: "【全网首发】PIKA1.0上手评测 - 你就是传奇"
发布日期: 2023-12-06
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647660666&idx=1&sn=0e9e2a11d5c06cd512479d35ca84bf3f&chksm=f11d48093d389235021c1e9e000b6874943f06e2e37a35d5d58760ee3a31d244977c10b87150"
---

## 摘要

**1) 一句话总结**
PIKA 1.0 推出了全新的网页端界面与底层模型，大幅提升了3D/2D动画的生成质量，并集成了视频扩展、局部修改、无损放大等强大的二次编辑功能。

**2) 核心要点**
*   **三大生成模式**：支持文生视频、图生视频和视频转视频三种基础生成方式。
*   **全新独立UI**：脱离Discord，网页端提供直观的设置面板，可直接调整画面比例、帧率、镜头控制、运动速度、负面提示词及提示词相关性（实测相关性建议设为5-15）。
*   **全新底层模型**：启用了全新模型，显著提升了画面的稳定性、语义理解能力和动作幅度，尤其在3D和2D动画（如皮克斯风格）的生成上表现优异。
*   **视频扩展（Expand canvas）**：支持将视频画面扩充至主流尺寸，用户可自由拖动原视频位置以补全特定方向的画面（如横向扩充或补全下半身），且保持高度的画面一致性。
*   **局部修改（Modify region）**：支持通过框选视频中的特定区域并输入提示词，精准替换或修改局部元素（如给人物添加墨镜、替换头部等）。
*   **视频延长与增强**：默认生成时长为4秒，支持一键继续延长4秒（Add 4s），以及一键将画面无损放大两倍（Upscale）。
*   **一键重试体验**：支持在同窗口内一键重新生成多个视频，避免了旧版操作中屏幕被废弃视频堆满的问题。

**3) 风险与不足**
*   在图生视频模式下，画面比例（Aspect ratio）设置会被禁用。
*   视频扩展（Expand canvas）功能目前只能扩充到系统限定的几个特定尺寸，无法完全自定义比例。
*   据实测反馈，其视频转视频（Video-to-video）功能的生成效果表现一般。

## 正文

PIKA1.0全网爆火后。

我作为PIKA的超级合作者，一直盼星星盼月亮，等他们的PIKA1.0。

等啊等，等啊等。

在内部渠道登记了我的邮箱后。又过了一天。

终于。

收到了来自PIKA的邮件。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqRSTbnNP0R0ia9uIC8e1wAicPjhIaGTQqRNZIUXerSmEM03IAKNbiaohug5bRXoKbveFbvb3InyS4hg/640?wx_fmt=jpeg)

瞬间激动的无以复加。

我应该算是国内最先拿到PIKA1.0资格的几个人了吧。

所以，PIKA1.0，我来了！！！

当然，没排队的，可以先去https://pika.art/排队。

说不定啥时候你也拿到资格了呢，笑。

一进入PIKA，你就能看到一个非常空旷的界面。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRSTbnNP0R0ia9uIC8e1wAictBBhX7tXbNJOibHAk35ya4sKFfGQXHs7gByGpDHibTt0rJPV9ibjS6iafQ/640?wx_fmt=png&from=appmsg)

上面那些都不重要，核心是下面的操作区。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRSTbnNP0R0ia9uIC8e1wAicaESaQnTZe5H07u6RLVowxj3Gr3p3FViaViaoBibcgicQWorU97AL4QNC9Q/640?wx_fmt=png&from=appmsg)

PIKA1.0支持3种方式生成视频：
文生视频、
图生视频、
视频转视频。

右下角是3个新的设置，以前在Disocrd里都要手输入，体验太差，现在全部都拎出来了，点吧点吧就能设置。体验极好。

第一个设置项可以选择比例（上传图片时比例设置禁用）和帧率。

第二个就是镜头控制和速度。

第三个是新增的负面提示以及提示词相关性。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRSTbnNP0R0ia9uIC8e1wAicDW5EIrfqpAqpqGhxE8HCaZXGeKEkfm7G37IrRIEGctGCCmLbR883sg/640?wx_fmt=png&from=appmsg)

预告片里很炫的视频扩展（Expand canvas）和Modify region（区域修改），在生成视频后的二次编辑里就有，还有一个额外的放大增强和增加4s。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRSTbnNP0R0ia9uIC8e1wAicyia4DibVDKobZMO3wOQwfgeibMzFc4EeuZhCv0scPKiajwMvXUhQ6U155w/640?wx_fmt=png&from=appmsg)

界面大概浏览完了，一个一个来说。

一. PIKA1.0新模型

能明显感受到，PIKA1.0是启用了一个全新的模型，甚至我感觉不是基于旧有的迭代，而是完全重新做的一个全新的模型。

强非常非常多。3D和2D的动画效果更是吊炸天。

所以他们的新模型，我会多花一些篇幅和笔墨，来展现一下。

首先，文生视频的
质量得到了大幅度的提升。我直接写了一段：

Prompt：
Cinematic, happy laughing girl in office, Pixar style

瞬间，匹配皮克斯水平的镜头就出来了。要知道，我只花了1分钟。
这效果，我说实话，太特么吓人了。。。。。。
而且，这稳定性，这神情。。。爆杀市面上所有的AI视频。
再来！
A cat flying a plane,Cartoon style
在文生图这块，PIKA1.0的新模型稳定的令人害怕。
Cinematic, extreme close-up of cars on the road in a jungle, 3D rendering
不规则构图的汽车行驶在道路上，这个前进的镜头依然稳定的可怕，车上的光影更是表现的极好。
无敌。
真的无敌。
同时，有两个小技巧是，右下角第三个设置里，负面提示（
Negative prompt
）可以常驻：blurry, out of focus, twisted, deformed。提示词相关性别设太高，可以5～15之间，自己实测下来效果最好。
再来说图生视频。
图生视频这块，效果也依旧棒。放几个case。（这里因为GIF图比较大所以只能放了每秒10帧的GIF，所以看起来可能有一些卡，这并不是PIKA的原因。）
说实话，Runway原本剩的唯一优势就画质好+一致性强点了。。。
但是你看看现在的PIKA1.0。。。。。。人的一致性已经逆天了，再加上它强到爆的语义理解，以及幅度巨大的动作。。。。咋比啊。。。
这PIKA1.0新模型的质量，特别是它最擅长的3D和3D的动画的质量，真的让人激动到无以复加。
二. 视频扩展
因为手边没啥现成的视频素材，于是我先用PIKA1.0随手生成了皮克斯风格的女孩。
再点这个Edit编辑。
然后使用视频扩展功能，来给她女孩扩充一下。PIKA1.0的扩充，是只能扩充到它自己限定的那几个尺寸，不过也都是非常主流且常见的尺寸。
原视频是可以在这个框中随意拖动的，比如我就想让这个女孩补充一下下半身（笑。
我就把原视频拖到了最顶部，下面空出来了。
然后，我们来看看，PIKA的扩充效果。
还有啥可说的。。。。这一致性，这细节。。。。。
我们再离谱点，再在这个基础上，做一个超大幅度的横向扩充。
。。。
还有啥好说的呢。
PIKA，牛逼！
PIKA，你就是传奇！
三.
区域修改
压抑着激动的心情，我开始
测试区域修改。
为了效果，我只能贡献出我自己的视频了。
。于是，我
在公司现场录了一个。
。
。
这人长这样，大家将就下，别嫌丑，实在没素材了。。。。
先给眼镜换个墨镜。
上传视频后，就点开区域修改功能，在你要修改的地方，拉个框，然后写上prompt：墨镜。
就。。。成了。。。。
再给我自己换个猫头？
好的，现在面对你的是猫兹克了。
或者。。我变个性？说来就来！
泪目了，受制于时间和篇幅，我没法大幅度的开发出PIKA的潜力，但是我相信，所有人都能看出来，PIKA1.0有多强。
上面列出的3个大点，我相信是大家最关心的。
当然，还有很多很多其他的功能，比如延长4s和一键增强。
Add 4s：PIKA默认出来的是4s，你可以用这个功能继续延长4s。AI视频标配。
Upscale：增强，直接原地放大两倍。类似MJ的无损放大，效果很好。
还有类似Gen1的视频转视频，这个我觉得效果就一般般了。
当然，还有我最喜欢的体验极佳的一键重试。
点一下就能直接在同窗口生成多个视频，你可以开心的roll起来，而不用当心你的屏幕被roll的垃圾堆满。这体验不比狗屎Runway好太多了！！！
四. 最后总结
受制于时间和PIKA海量更新的关系，我这一篇文章，肯定没有办法做到全面的评测。
但是先给大家解渴，以及破了PIKA1.0是来骗钱的谣言，我觉得是没有问题。
PIKA1.0，就是我现在用过的所有AI视频工具里面。
最牛逼的，体验最好的，效果最好的AI。
没有之一！！！
我相信随着越来越多的体验者，拿到PIKA1.0资格之后，真正用起来后，会有更多的玩法和黑科技出来。
我期待着那一天。
PIKA1.0，在我心中。
你就是传奇。
。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqRSTbnNP0R0ia9uIC8e1wAicuGhyFAz0LKkOY9xFiaCe9WlgicRYtqic84icDWBEiaeUrvy7EWODksiaibbCQ/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqRSTbnNP0R0ia9uIC8e1wAicBgjY2cR7a9eotTCJMj5YYMNlqCKRoaNdKrw5KFUpqjDXt5bKkIEUww/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqRSTbnNP0R0ia9uIC8e1wAickib4Z7icxakUz7omTsGzibPzWfgpJIZ2M7EAovcWcJlicEIQk5kD30NFpA/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqRSTbnNP0R0ia9uIC8e1wAicQGMRoUsdbpkTQsOT08TZADvlibZ6mbGhl6fqW7XqNqnPyvaQNPV6kng/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqRSTbnNP0R0ia9uIC8e1wAicUhRvJxbDQo4gdAlB1OS0xFItso2rIxGdA1YbVrVK3mllZ0B3sBDWicg/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqRSTbnNP0R0ia9uIC8e1wAicUrqapY2oM8QqZFv4Lia5XwnHSkmFnWIlKmHZIHmQhhQSR8FYJqKUyRg/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqRSTbnNP0R0ia9uIC8e1wAic4gr6Ennslgb91xAdbc92vovF0Y3rN7tQicISGTH1OCiad7J9HjK4ax4w/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRSTbnNP0R0ia9uIC8e1wAicOtpaicUL2R38O8wxuXjV6q2icUY2EIl23sz32eaBQibg08niaib6icogj7Fg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRSTbnNP0R0ia9uIC8e1wAic7lWH5CSL9rMBGnzZNha08VbDpTZL2IVr6SWWUW7oIu2RgaSbsj2sHQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqRSTbnNP0R0ia9uIC8e1wAicAqhDywJHwKG5612ZjlBHx73BxJibfBBeXCJibU7ib6bmXXJkuMviajsruw/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRSTbnNP0R0ia9uIC8e1wAic7pOic1oF7UD6Q8StT8NeRFn2p289pLMaGFZdMfNKwMtJVIebz9NRNew/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqRSTbnNP0R0ia9uIC8e1wAicDCVppfoPFIKC9viciaLyzAONX0ibMOHlcic1TsThMXqewLEaFIlicVOicFUA/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqRSTbnNP0R0ia9uIC8e1wAicM1Xvp3GtY5S9JmpRicWI9rZWvIrjbA26BMicmjOsWjdfRyPdsPZOnGdA/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRSTbnNP0R0ia9uIC8e1wAicZlQVg9jNXazDVo66OYMT0M4WuBmnxIebmHhR2RpIgKRibE7eiaNquD0g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqRSTbnNP0R0ia9uIC8e1wAicIicoepDicK6vL8AvzANvyxEG3ibaaLUtRwILzJpckPj3zgMgRJg3Ypo8Q/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqRSTbnNP0R0ia9uIC8e1wAic4fhxlObG15DwwLpnouuj2snDj5GcJ9P0Oach4l52JoSDG0I7bqr9VA/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqRSTbnNP0R0ia9uIC8e1wAiccqQH4n8XD525RZ5LXMn1PtL6Obk3W77VEcfyzvJGJbuiba4fHS29FicA/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRSTbnNP0R0ia9uIC8e1wAicXhg2ErIyibGDOfVZZktrDeYjA7zaDCBgQNI2Fs8ia9EibR5b6FGwPTX2Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRSTbnNP0R0ia9uIC8e1wAichOU7Sf7jSUhzGX4eg38tcwHN2Q0F4UZGibG4n6WqnwrEibyWytdsAH6w/640?wx_fmt=png&from=appmsg)

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
