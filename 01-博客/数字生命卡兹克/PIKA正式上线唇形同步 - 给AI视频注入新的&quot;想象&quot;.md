---
title: "PIKA正式上线唇形同步 - 给AI视频注入新的&quot;想象&quot;"
发布日期: 2024-02-28
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647661584&idx=1&sn=305bc8064db0444a196161571ccf09b6&chksm=f194ec39dcfae3b3e81b72c93cc2d1c47663236a1caa31203abd6410686d1a3fb38469e3c4a7"
---

## 摘要

**1) 一句话总结**
PIKA正式上线了结合11Labs语音技术的唇形同步测试版功能，使AI视频人物能够实现动态对话，进一步提升了视频的叙事张力与沉浸感。

**2) 关键要点**
*   **更新方向**：PIKA在沉寂3个月后发布更新，未侧重模型或控制能力的内卷，而是聚焦于其1.0版本设定的“对话”目标。
*   **解决痛点**：此前PIKA生成的视频人物嘴部随机运动且无声，依赖第三方工具后期配音会导致唇形与发音不匹配，新功能直接解决了这一问题。
*   **技术集成**：内置了11Labs的TTS（文本转语音）技术，用户可选择发音人并输入文字生成语音，同时也支持直接上传自定义音频。
*   **使用方式**：用户上传图片或视频后即可调用“唇形驱动”功能。目前该功能处于Test（测试）版本，已向超级合作者开放。
*   **最佳实践**：实测建议先使用文/图生成带有运镜或动态背景的视频，再对视频进行唇形同步，效果优于直接使用静态图片驱动。
*   **竞品差异**：相比Heygen或奇妙元等基于静态照片的数字人工具，PIKA的“动态视频+唇形同步”能保留背景动态与复杂运镜，具备更强的表现力。

**3) 风险/不足（基于原文明确提及）**
*   **整体质量差距**：当前的唇形同步效果在精细度上仍落后于Heygen和奇妙元。
*   **角度限制**：目前仅支持正脸，侧脸驱动时画面容易崩溃。
*   **遮挡物干扰**：当人物面部存在遮挡物时，系统会出现识别错误。
*   **背景人脸误判**：若视频背景中存在其他人脸，会被系统一并识别并驱动。
*   **稳定性问题**：唇部生成不够稳定，经常出现抖动现象。
*   **画质问题**：部分情况下生成的唇部画面会出现模糊。

## 正文

本来又准备睡了...但是好死不死的，睡前又看了一眼几家AI产品的更新动态...

然后...

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURotujcQgIekj7KiavLZiaXXYDDGrW80BayiaicnmQWYnh0Wo2awUuQibN96aG5x4NA2kHSiciblUk4xgiaqHA/640?wx_fmt=png&from=appmsg)

PIKA在沉寂了3个月后，终于又更新了...

没有去卷模型，没有去卷控制，而是继续奔赴他们1.0最开始所设定的目标：

对话。

PIKA的模型，有一个跟所有的其他AI视频产品都不同的地方在于。

当你生成人物的时候，大概率会说话，也就是唇形会动起来，模拟人物正在对话的感觉。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURotujcQgIekj7KiavLZiaXXYDwparTjw2hMMAiauBicFdIyLgmnV2DZ9UUbveCfukNFEvqrNAibM3JHRKw/640?wx_fmt=gif&from=appmsg)

PIKA认为，这样的效果，才能更符合真正的"短片"效果，毕竟，一个短片，想要好看，人与人之间的对话那是必不可少的。

对话才有戏，冲突才有张力。

而如果是传统的Runway等等，做的镜头，都是空镜，对话很多时候都只能以旁白的形式去做。那样，观众在看片子的时候，沉浸感会大幅降低。

但是去年PIKA1.0上线的时候，其实是并没有跟语音打通的，意思是说，你只能跑出一个正在瞎特么动的嘴，但是没有声音。

声音你需要自己去11Labs或者魔音工坊里面跑。然后用剪映啥的，把你跑的语音和AI片段拼起来。

但是这就有一个问题是：唇形和发音，是不匹配的。

所以PIKA做唇形同步，是绝对的情理之中，他们一定会做，且必做。

这不，就来了。先看一眼PIKA的新预告片吧。

不过PIKA的预告片...你懂的。

还是得自己亲自上手试一下。

正好这个唇形同步，也对超级合作者开放了，于是，我就来测一下。

进入PIKA首页，传一段视频或者传一张图片后，你就能看到这么一个功能：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURotujcQgIekj7KiavLZiaXXYDVqS2OciayQXcrZUVeZQkLMFHumzIPwn2XSvXKMQzWFiaD1GDZ4U3BYEA/640?wx_fmt=png&from=appmsg)

这个就是唇形驱动。

点开以后，就能看到语音制作区域。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURotujcQgIekj7KiavLZiaXXYDEkLicOgheiaSh365h2npQlhuSsgZqBsfNzJ0ODAprUFrKYC86E000MbQ/640?wx_fmt=png&from=appmsg)

PIKA也跟11Labs合作了，把11Labs的TTS给拿了过来，上面的区域就可以选择特定的发音人，然后输入文字，变成语音。

当然，你也可以上传你自己的音频。

我还是习惯自己用11Labs或者魔音工坊跑音频出来，毕竟那两个玩意的可用性高一点。

传上去以后，就可以开始合成了。

我大概跑了几十个case，从1/2正面，测到1/5正面，从正脸测到侧脸，从写实跑到2D，从图片跑到视频...也算了测了个遍

先看几个我觉得效果还不错的例子：

但是
还有很多，是Bad
case。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURo9CCHN65pmHiaekGic1UQVXiaSKEfSOf2wgJWc7BEBy51uD0ofbZf8SXNFBXCccqVBqjpIlgcNf9ezw/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURo9CCHN65pmHiaekGic1UQVXiaSozw6oVaf6fdG0UgiaymNbiby6tnUBt4xyWBcHGibMPSic4q9VHFGGKI1A/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURo9CCHN65pmHiaekGic1UQVXiarlJrJpnlRmqrvVYn3xJyHumhj3a9eFXatqsUWYEvKg12qYicibJlwKRQ/640?wx_fmt=gif&from=appmsg)

整体上我实验下来，我更建议是先用文/图生成视频后，用视频再去进行唇形同步，而不是直接用图进行唇形同步。

因为两者效果大差不差，而用视频驱动的话，还能实现一些大运镜或者变动的背景。

PIKA上唇形同步，想象力一定是非常强的，因为不管是Heygen或者奇妙元，能做的都是静态的照片说话，在效果上，有一定的局限性，因为背景不会动。

比如很久之前我用奇妙元弄的这个特朗普。

而PIKA自身的AI视频再加上唇形同步，会做出一些以前实现起来非常复杂但是很有戏的效果，能给AI视频，带来一些新的想象力。

但是在唇形同步的效果上，坦率的讲，跟Heygen和奇妙元相比，还有一定的距离要走。

比如只支持正脸，侧脸一些就会崩。

比如面部有一些遮挡物的时候，就识别出错。

比如有一些背景人脸的时候，会一起识别出来。

比如唇部经常在抖不够稳定。

比如有时候唇部会糊。

等等。

但是毕竟PIKA这次的更新，还是Test版本，还没有向大众公开。

还有非常大的优化空间。

想想MJ的V1时刻，对吧。

我很期待PIKA后续在唇形同步上的优化，给AI视频，注入一些新的活力。

不过，我怎么有一种感觉。

11Labs，这个做AI配音的，反而是最大的赢家呢。。。

。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
