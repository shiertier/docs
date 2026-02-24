---
title: "我用Midjourney的新功能，5分钟做了个一镜到底的炫酷视频..."
发布日期: 2023-06-26
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647658799&idx=1&sn=fe0eb60b09f0d33c64ed25f372c1619d&chksm=f163308c3dc67950721539b62df7e09e9a3810169f6cea41e04e936733645dbc268f9990b740"
---

## 摘要

**1) 一句话总结**
本文介绍了如何利用 Midjourney 5.2 版本的 Zoom Out（缩小扩图）功能，结合剪映等剪辑软件，快速制作“一镜到底”的无限缩放特效视频。

**2) 关键要点**
* **新功能机制**：Midjourney 5.2 推出 Zoom Out 功能，可在保持原图尺寸不变的前提下，由 AI 自动补全并扩充边缘画面。
* **功能分类**：分为默认扩充（Zoom Out 1.5x/2x，使用原提示词）和自定义扩充（Custom Zoom，可修改提示词和扩充倍数）。
* **素材生成**：先生成一张基础图，然后连续使用 Zoom Out 2x 提取并扩充图片（案例中总共使用了9张图：1张原图+8次扩充）。
* **提示词策略**：建议每扩充 2~3 次后，使用 Custom Zoom 修改提示词以控制背景内容，确保画面符合预期。
* **时间轴排列**：在剪映中将生成的图片素材按倒序排列（最后扩充出的全景图放在第1位，最初的原图放在最后1位）。
* **关键帧设置**：为每张图片（除最后一张外）设置缩放关键帧，将首帧缩放设为 100%，尾帧缩放设为 200%，以实现画面的无缝衔接。
* **消除边缘闪烁**：全选所有图片新建“复合片段”，并使用裁剪功能裁掉画面最边缘部分，以解决过渡时的闪烁问题。

**3) 风险/不足**
* **提示词失效风险**：如果连续多次扩图均使用相同的原始提示词，会导致外围背景生成稀奇古怪的图像。
* **边缘处理不一致**：Midjourney 在扩图的边缘处理上尚未达到完全一致的水准，直接拼接会导致视频过渡时四周出现闪烁现象（需依赖后期裁剪解决）。

## 正文

事情是这样的。

Midjourney前几天公布了5.2的更新，同时发布了一个新功能。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrX9w2ibjETg6vkI04jXzibPY3TibdNkDNsbSg4dcZboxYUoXMdEYWnleZ74ZZ0m56Nozy1c4rZx4eNg/640?wx_fmt=png)

ZoomOut。

翻译是缩小，其实就是把原来的图片扩充。比如你本来是个1000*1000的图片，现在直接给你放大到2000*2000，但是原图片尺寸不变，多出来的地方用AI给你补上。

这功能一出，我灵光一闪，既然无限放大，那以前做起来巨麻烦的一镜到底，不就可以玩起来了吗。

于是，我就做了一个炫酷的视频demo。

5分钟做完，有手就行。

比PS AI门槛低很多，毕竟，有多少人能装PS呢。。。。

我们先用Midjourney正常跑图，比如我随便弄个了咒语，先跑了一张图。

ラズリ, Android 18, namekusei planet background, Hyperdetailed, cinematic lighting , hdr, dtm, full hd, 8k, ultra detailed, by anna dittmann, by Yoshitaka Amano, by stefan gesell, realism, superb --niji 5

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrgWgicareDwH6RSuvn2YsCvgP3PCTtJoDFhhmuqdjX690QzErV2emacO0s6Hk5KVt9U0msR5dHeOg/640?wx_fmt=png)

直接U2放大我们此次案例的主角。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrgWgicareDwH6RSuvn2YsCvibNrNcM907kgMvGB4Ju3JRmReAkPfOeQaMNwnllibqkdia9UqicKV4umug/640?wx_fmt=png)

此时你就会发现，新功能出现了，Zoom Out和Custom Zoom，这两其实是一个玩意，Zoom Out就是用原来的咒语直接扩充2倍或视1.5倍，Custom Zoom就是自定义扩充，你可以修改
咒语
和自定义倍数。

我们直接Zoom Out 2x，用原来的那个
咒语
扩充两倍。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrgWgicareDwH6RSuvn2YsCvwY4RibrdxKXXLjaPic5ZWNOcn6NoquHz5Msdztn1HN2ou0XoNcG9kdRA/640?wx_fmt=png)

就得到了扩充后的很帅的图，接下来我们继续选择我们想要的那张，提取出来，再进行扩充。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrgWgicareDwH6RSuvn2YsCvx6NGTyjCrbh4oDTM2nTEHLtNVqJYT9p5lFauicHMiaImULdKqxAeGCpA/640?wx_fmt=png)

当要扩充第三张的时候，我就建议大家换换
咒语
了，不要再用原来的
咒语
去扩充，这样效果不太好，所以我直接使用了Custom Zoom，会弹出一个窗。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrgWgicareDwH6RSuvn2YsCvBHWnP1OUFZbGyfk2V97Ft9IOliaftw2VuDFVx3rlxtXLhWlAZ239zrQ/640?wx_fmt=png)

我把咒语换成了：

namekusei planet background, Under siege, facing many opponents, neon lights, magic duel, Hyperdetailed, cinematic lighting , hdr, dtm, full hd, 8k, ultra detailed, by anna dittmann, by Yoshitaka Amano, by stefan gesell, realism, superb --niji 5 --ar 1:1 --zoom 2

这样就会让外面的背景按你想要的来，而不至于出现一些稀奇古怪的图。

我的视频，一共扩充了8次，加上第一次的图，一共9张。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrgWgicareDwH6RSuvn2YsCvzq1wLMF56lr0JQc0fcCO8PIQLM8ewDFh2gHsQo3jjUuTUkibsibFiaEaQ/640?wx_fmt=png)

这里我的建议是，每2~3次扩充后，重新修订一下咒语。

图片有了，那我们要怎么做视频么？

这时候就要祭出我们的萌新好工具 - 剪映了（当然你要有PR、AE、Runway啥的也没问题，这里主要针对萌新）。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrgWgicareDwH6RSuvn2YsCvHX3KWlRfQyVMRPYicWTvwOskh7apvNNZ3RxEeKpvMKAZCIicXNe1f79w/640?wx_fmt=png)

我们把所有的素材都拖到剪映泪，然后在时间轴上，倒着排列，也就是第一张生成的图在最后，最后扩充出来的图在第一张。

按我的顺序就是9~1。

接下来，我们选中把时间轴拖到第一张图片的第1帧，也就是最左边。点一下右边画面 - 基础 - 缩放，把那个小菱形点一下，变成绿色后，这就代表关键帧已经开了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrgWgicareDwH6RSuvn2YsCvr4sEJhK7ar2WRZkWO8iccAYnwfwC4qJ7dHJFxTKRU7PiaFU3lDQ89RyA/640?wx_fmt=png)

然后我们再把时间轴拖到第一张图片的最后一帧，把缩放这个位置改成200%，敲一下回车。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrgWgicareDwH6RSuvn2YsCvyAicyX3BMq9jJEdPiamxxWicOoxVoHuJZlN7TCQeG6hhPVMVLDY8qVgMQ/640?wx_fmt=png)

这个时候，你预览一下，就会发现第一张图片会从100%开始进行到200%的放大，再结束的时候，就能跟第二张图完美衔接上。

后面我就如法炮制，给每一张的第一帧都点一下缩放的菱形按钮激活关键帧，同时把这张图片的最后一帧改成200%。除了最后一张图片，因为他后面没有东西承接了。

全部完成以后，你会发现再过度时候四周还是有一闪一闪的情况，这是因为
Midjourney的扩充在边缘处理上还是没达到完全一致的水准。

所以我们可以全选所有图片，右键，新建复合片段。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrgWgicareDwH6RSuvn2YsCvSyBMXcwYLjSaBFKkNnXblTDoWSKaDs4DLOGFFuUlEU0IwKAsHvZrXA/640?wx_fmt=png)

然后点击剪裁。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrgWgicareDwH6RSuvn2YsCv6M5Cibex7SajsoZoA3rD3WUdib7Q1V0jo3C6pUzNzLxl8U6Viaib6micRfw/640?wx_fmt=png)

在弹窗上，把会删的那一点边缘给裁掉，这样就可以啦！

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrgWgicareDwH6RSuvn2YsCvUaaicqzhRFcw1szZq4WA455V6KxJmXH8jh1wtGMyY4soDtr0HfemCRg/640?wx_fmt=png)

OK，大功告成。

尽情的欣赏你做出来的一镜到底动画吧。如果你有耐心，做一个30张图片叠加的一镜到底，完全没有问题哦。

⭐吧，
感恩。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
