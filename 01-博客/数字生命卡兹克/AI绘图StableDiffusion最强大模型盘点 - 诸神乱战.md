---
title: "AI绘图StableDiffusion最强大模型盘点 - 诸神乱战"
发布日期: 2023-05-02
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647658397&idx=1&sn=b545cddd6613e792d9a7c8df99c0dcf5&chksm=f1c6ea02694cd1670da2ea5a76c255fb4e6287450b5fe41f35b0080c181754b6499db97c6f54"
---

## 摘要

**1) 一句话总结**
本文盘点并推荐了五款表现最强的Stable Diffusion大模型，涵盖真人写实、2.5D、通用2D、复古日漫及华丽细节等不同绘画风格及具体使用参数。

**2) 核心要点**
*   **majicMIX（最佳真人模型）**：由KanPiroMix、XSMix与ChikMix三个模型融合而成，出图效果真实，接棒了已停更的ChillOutMix。
*   **GhostMix（最佳2.5D模型）**：出图上限极高，擅长处理分形、点描、波普等特殊风格，且对极难生成的“机甲”元素处理效果极佳，目前仍在快速迭代中。
*   **MIX-Pro（最通用2D模型）**：相比Counterfeit等模型出图更稳定、笔触更干净、可控性更强，支持所有画风及复杂场景，但需搭配VAE使用。
*   **啥玩意完犊子（复古日漫模型）**：主打扁平化的复古画风（类似早期《海贼王》《火影》），特点是线条粗且强弱显著、阴影和高光鲜明。
*   **Night Sky（最华丽2D模型）**：拥有极致的细节水平与华丽度，作为Pastel-Mix的上位替代，建议出图分辨率设置在1536x1024或更高。

**3) 风险/不足（原文提及）**
*   **模型停更风险**：知名真人模型ChillOutMix因舆论风波已被原作者放弃并停止更新；2D模型Pastel-Mix也已在C站（Civitai）上放弃更新。
*   **部分模型存在缺陷**：ChillOutMix直接出图效果一般，需搭配各种LoRA；Counterfeit等2D模型存在笔触不干净、细节脏以及可控性差的问题。
*   **特定元素生成难度大**：机甲是AI绘图中最难处理的元素之一，生成难度与手指骨骼并驾齐驱。

## 正文

玩了这么久的StableDiffusion，Civitai和HF上的各种大模型和LORA也都基本玩了个遍。

自己也一直想做一期盘点，选出我自己心中最好或者最有意思的那几个大模型。

毕竟每次看着模型库里几十个大模型，是个人都遭不住。

我在这篇文章中，会列举5个大模型，你们也都只留这5个，足矣。

分别是：

majicMIX（整体最好的真人大模型）

GhostMix（整体最好的2.5D大模型）

MIX-Pro（最通用的2D大模型）

啥玩意完犊子（很有特点的复古画风大模型）

Night Sky（最华丽的2D大模型）

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURorehb3QTBZ3VgGibIP5WapaopqkicYKCn6kFq0Q8nU9jGBDu5unV0VgXCxAyaibrPH7n0SzqkgdibWOQ/640?wx_fmt=jpeg)

这五个模型我也打包好了，关注我，后台回复M就有了。

一.
majicMIX

其实在真人大模型这块，传唱度最广的那必然是大名鼎鼎的ChillOutMix，但是ChillOutMix在2月份，被舆论推上了风口浪尖，直接导致作者放弃了模型，将其转给了Civitai。后续也放弃更新。

而ChillOutMix，也因为直接出图效果一般，需要搭配各种lora才能达到好的效果，也被很多人诟病。

至此，
majicMIX接棒，作者基于
KanPiroMix + XSMix + ChikMix三个模型融合而来，得到了更真实更棒的效果。
（当然，搞颜色的能力也极强。。。）

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURorehb3QTBZ3VgGibIP5WapazLiaE2nDlg9icmIxgeJ3o0NMo5fdaDUFYvlTdJVk4iafAY1ewrEaXFq6A/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURorehb3QTBZ3VgGibIP5Wapa7ZGPUGgt2g8MNqBUFZbPeaBhHtzyYekemPrh8vH1XFAo1bxYbrJL0g/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURorehb3QTBZ3VgGibIP5WapaYx7qJrMBfNNn0JJsw4MuWfibYppwyM27sOBh8wn7AL7oaicicgnrKQdFQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURorehb3QTBZ3VgGibIP5WapaiarGAQ6OKPdLwJXB5wks5Wk27NG7FRdCiarXFax7n0fYCImI6fxMAfBw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURorehb3QTBZ3VgGibIP5Wapa1ecvn6Se4QmKFwR8zoHeMibbb6J7IwqKd4GVoLZtK6ib0an3icn0uJPog/640?wx_fmt=jpeg)

推荐关键词：
Best quality, masterpiece, ultra high res, (photorealistic:1.4), 1girl

推荐参数:

Sampler: DPM++ 2M Karras

Steps: 20~40

Hires upscaler: R-ESRGAN 4x+ or 4x-UltraSharp

Hires upscale: 2

Hires steps: 15

Denoising strength: 0.2~0.5

CFG scale: 6-8

clip skip:
2

二.
GhostMix

让我极其惊艳的一个2.5D模型，出图效果上限极高，并且包容万物，对各种特殊风格的处理都非常棒，比如分形、点描、波普等等。

而且，作者可能对机甲非常偏爱，
导致这个模型对于机甲的处理极棒。此处多提一句，机甲是整个AI绘图里，最难处理的东西之一，难度跟手指骨骼并驾齐驱。

目前我认为最强的2.5D模型，当之无愧
，而且作者还在极速迭代中。就在我准备素材的时候，这货又迭代了。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURorehb3QTBZ3VgGibIP5WapaVInVvviaj8HrkcdQibyCVPV6xJK4SgzrLNL3OEEFmOQVc8MSUVWFE8mg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURorehb3QTBZ3VgGibIP5WaparI4le2zjRgOdx1ce7scrhsWAVrGod3tgyOYyoLy8SgN1pn4kxTFAYw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURorehb3QTBZ3VgGibIP5Wapa1QL6iaJ73XIOSG3icnpk0NsXvhwRtQ0rbLIX1IibnjjLekAn68kQKhBog/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURorehb3QTBZ3VgGibIP5WapanulZG1iallShgAViawsDpmOdq6he3TmqY5wFl2I7BJiaJVwEt2HQkibvEg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURorehb3QTBZ3VgGibIP5WapazHw7Sf2ULTicZ0YnbD5oibNmYRG0gTD75I8SXVamz62RJTa553bib2csQ/640?wx_fmt=jpeg)

Steps: 30

Hires upscaler:
R-ESRGAN 4x+ Anime6B

Hires steps: 20

Denoising strength: 0.5~0.6

CFG scale: 5

三.
MIX-Pro

目前为止，我认为最通用的2D大模型，相比于
Counterfeit、
Anythiny等等，出图更稳定，氛围和光影也到位，并且色彩更为明亮干净。

很多2D模型有个通病，笔触不干净，不够连贯，导致部分画面和细节很脏。而MIX-Pro是我使用过的所有2D大模型中最好的一个。并且可控性极强，不像
Counterfeit，好看是好看，但是不听话啊这玩意。

MIX-Pro完美的成为了我的2D大模型首选，能吃的下所有的画风，并且对场景支持一流，Nice！注：此模型需要搭配Vae使用，已整合在包里。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURorehb3QTBZ3VgGibIP5WapaBcdmR6HVIxn7fJfzEzzkROnJZ3LmaqEebOfqQmgiaoayrgxbf6pxtJQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURorehb3QTBZ3VgGibIP5WapaK3MlkBZg25B9slSOHcunKKUhQJWKiaLVExXUDtYSqQaHf8MlEds1K1w/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURorehb3QTBZ3VgGibIP5WapaMtlj5PevoYvLnQibbcLDrt8nVCeW3Vr8LCYOAQ4iavzMYOtcOQBQZTMQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURorehb3QTBZ3VgGibIP5Wapae0NHtExFkPEDRUaibYtKBLOPUY1MTRkndMdBB3d2q8IQYge6JdILvcw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURorehb3QTBZ3VgGibIP5WapaRF8a47m2iavsXsTAH3kAfEZEKISUnVOwan9AsEiaNpzDhiah2SnfZfiaMw/640?wx_fmt=jpeg)

Steps: 20

Hires upscaler:
R-ESRGAN 4x+

Hires steps: 8

Denoising strength: 0.4

CFG scale: 7

四.
啥玩意完犊子

我之前一直在寻找能稳定出图复古风日漫的大模型，特点是
总体的线条会比较粗，线条强弱会很显著，阴影和高光会非常鲜明，同时整体不同于现在的偏写实，整体很扁平，代表作就是当年的《海贼王》《火影》等漫画。

而啥玩意完犊子满足了我对复古日漫画风的所有幻想，这是极其有意思的一个模型，传闻这是作者的失败品，以为是个事故，结果出了这么一个超级棒的模型。

看这模型的名字，就知道作者当初觉得有多“失败”了，但是好东西，藏不住，最近以火箭的速度飙升，也成了我最喜欢的大模型之一。

梦回绍和。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURorehb3QTBZ3VgGibIP5WapaTDajDpXdriaGFXIAM84ickjicFPImjkpJ4EoLvGtBuBXZjjhDV9eUno5A/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURorehb3QTBZ3VgGibIP5WapasElpPQG7GzCfNvI7wOcBcxqAzDrpmLK79KKhkAjKSXJG20OVibkH7Yw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURorehb3QTBZ3VgGibIP5WapaRYKxM1vicCjHfMwtulEzbskzlcWhydYeP6MPmHqI8Jlu59oE7TDu7CA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURorehb3QTBZ3VgGibIP5Wapa9JQhdfXmptFrMI4nAPeMAKnJUybSMU0UkxCOFafvKLyLt3ZGibU9zFg/640?wx_fmt=jpeg)

Steps: 10

Hires steps: 10

Denoising strength: 0.5

五.Night Sky

论2D中最华丽的画风，我只服
Night Sky，
拥有最极致的细节水平
。

对的，极致。

在之前，其实我挺喜欢用
Pastel-Mix的，也是因为他的细节水平和华丽度，但是这个作者吧，噶韭菜去了，在C站上也放弃了更新，一度我还很懊恼，直到看到Night Sky，吊打
Pastel-Mix。

无语伦比的美轮美奂，无法用文字描述，看图吧。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURorehb3QTBZ3VgGibIP5WaparEn6yBh47eGFAFYtngXDtwLzDnJia1lF9BSwq916PXYgZH6j783o7Lw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURorehb3QTBZ3VgGibIP5WapaaNUPb7Cow1btPOJMPqqg3b4spLgrXS8vYPjIxmJw1dIiaFKCtU1liaeQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURorehb3QTBZ3VgGibIP5WapaW0XxhAPcgOn41Jtc575gNefHgZQxAZuduaL1FByB1lUOKh2icDnNqug/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURorehb3QTBZ3VgGibIP5WapaL9tu3M57pGOGHyIYsX3x0blor6T7QrIPOIPnmmOP6CiczkLQm8Y5VWQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURorehb3QTBZ3VgGibIP5WapalX0HJC38TVGOnB599F82Dg6TJK3uDGR1sfhOo2xT7WqGHtvGynmGvA/640?wx_fmt=jpeg)

Clip skip：2

分辨率：1536 x 1024或更高分辨率。

写在最后

以上便是我目前最喜欢也是我现在认为最强的5个SD的大模型啦。

也都放在了整合包里，
关注我，后台回复M就有了。

下期看看情况，再来给大家推荐我目前用的最多的LORA模型，大家如果有比较好的想推荐的模型，也欢迎留言~

以上，创作不易，有用的话请点个关注并给个星标⭐，感恩。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
