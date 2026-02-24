---
title: "5分钟用AI做出一套专属微信表情包 - 实在太快了..."
发布日期: 2023-08-08
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647659138&idx=1&sn=8884bad87ac53523aa15e4436c4c2ba1&chksm=f18e4c4767c6128da2dcb7c56d458ba288cca472e4e45d298d2534c0727688356961dba02cf6"
---

## 摘要

**1) 一句话总结**
本文详细介绍了一套利用Midjourney、Clipdrop、pixian和MasterGo等工具，在几分钟内快速生成并制作符合微信规范的专属透明背景表情包的完整工作流。

**2) 关键要点**
*   **AI生图设置**：使用Midjourney生成基础图像，建议输入`/setting`切换至Niji5模型，并选择“original style”以获得最佳的2D均衡效果。
*   **提示词公式**：提示词需包含自定义IP名称（如杰尼龟），并结合动作、情绪（笑、生气、无语、悲伤）及插画风格（如Jean Julien、flatcolors、2d painting、pixel style cartoons等）的描述。
*   **生图操作流**：推荐的Midjourney操作步骤为：生成 -> 微调单张（V） -> 放大单张（U） -> Zoom Out 2x，重复此过程以积累足够的表情素材。
*   **画质放大**：使用Clipdrop（clipdrop.co/image-upscaler）将生成的图像免费无损放大2倍，以满足表情包的清晰度要求。
*   **背景抠图**：使用免费抠图网站pixian.ai剔除图像的白色背景，生成透明底图。
*   **排版与裁剪**：在MasterGo（mastergo.com）中新建8个尺寸为240*240的容器，按微信规范命名为01~08，将图片导入后裁剪出单个表情并放入对应容器。
*   **透明度处理与导出**：导出前必须全选所有容器并删除背景填充，确保最终导出的图片为透明底。
*   **平台上架**：最终成品需前往微信表情开放平台（sticker.weixin.qq.com）按官方要求完成上架。

**3) 风险与不足**
*   **画质限制**：Midjourney直接生成的图像分辨率较低（有点糊），不能直接作为表情包使用，必须经过第三方工具放大处理。
*   **教程留白**：文章未详细展开微信表情包平台的具体上架与审核流程，需用户自行前往官方网站查阅相关规范。

## 正文

故事是这样的。

最近有朋友送了我一个丑萌丑萌的巨型手办。它长这样。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo6ld67jn8C3Bt06WZpOmiaLzdibhMPAtfhMwYAzPWPGgpvx60EnBtm5zmedkbj6LgiaoxApzJW7K88A/640?wx_fmt=jpeg)

以致于我最近爱上了杰尼龟这个IP，找了一堆网上的骚图。

然后，突然有一个想法，不如我做个杰尼龟的可爱的表情包？

说干就干。

3、4年前，自己其实也设计过表情包，但是做8个表情能要了老命，毕竟那可是得一个一个画啊。

现在有了AI的加持，几分钟时间，直接生成一堆，选就完事了。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo6ld67jn8C3Bt06WZpOmiaLibSn8DGUgtVqrIYX4ZdNUic5ib5TJP84p5RibcfqMwT6Kflo1pFzFmpWmw/640?wx_fmt=jpeg)

流程也非常简单，
Midjourney生图，Clipdrop放大增强，pixian抠出PNG背景图，
MasterGo做成符合微信表情包商店的图。

听着是不是脑袋有点大了？别慌，
只是使用的工具稍微有点多，但是每个都非常简单，相信我。

一. Midjourney生图

打开Midjourney，输入/setting，
把模型切换到Niji5。

style这块可以选择original style，这是整体效果最均衡的一个，新版的Default style画出来的东西会更偏3D一些。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo6ld67jn8C3Bt06WZpOmiaL8kgEb0G7nKqictHMoJQfyfDrsAsJ8jyLGmDP2mZ2Hw36nhammnk8Ueg/640?wx_fmt=png)

然后输入提示词：

____________, Simple graphic features, thick and cute limbs, simple and cute movements, Jean Julien. four cute poses and expressions, laughing, angry, speechless, sad. different emotions, multiple poss and expressions, illustrations, flatcolors, simple line 2d painting, popular artstations, digital art, pixel style cartoons, lineworks, 8k

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo6ld67jn8C3Bt06WZpOmiaLfqbia1bLgxDDywfaeFaT0D9Qhf2icHDPWxtr6f8qaKoiaBIcepdLMQmkg/640?wx_fmt=png)

前面空出的位置可以根据自己想要的IP去定义，我就很简单的写了一个宝可梦，杰尼龟。

接下来就可以生图了，生图的步骤我推荐是这样的：

生成 - 微调单张 - 放大单张 - Zoom Out 2x。然后重复一遍。基本上就足够了。

比如我生成的，就选了我觉得还比较满意的V3微调一次。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo6ld67jn8C3Bt06WZpOmiaLYwF7O2gSE8IkGDesOvG7oMzDxNx5JkmX22fxsVGFDc4BjUbj9SrqVQ/640?wx_fmt=png)

然后找到一个你最满意的，U1，再Zoom Out 2x。就可以得到一套还不错的表情包图了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo6ld67jn8C3Bt06WZpOmiaL25JyeZoeBU65AFwoOkh5bgWAUpp89icCey2b64vjt5SU1hcrZKoKMCQ/640?wx_fmt=png)

但是此时表情数量还不够，因为我们需要进行挑选，所以再把上一步的微调 - 放大 - Zoom Out 2x再重复一遍。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo6ld67jn8C3Bt06WZpOmiaLmEsJPQ7IysNAX5yLvEfsMhkPAwnA2CmCmbpibhGSOyR7zU0xdAMXtoQ/640?wx_fmt=png)

这样，我们的表情包就处理完了。接下来，我们要做一下放大、抠图处理，然后扔到微信表情平台上。

二.
Clipdrop放大&
pixian抠图

Midjourney生成的图分辨率做成表情包还是有点糊，所以我们需要将他无损放大一下。

直接祭出我们的老朋友，ClipDrop：

https://clipdrop.co/image-upscaler

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo6ld67jn8C3Bt06WZpOmiaLpfCGjJcJI2vzxbyO8HqTMUhv9LPTe4iaWn5Sb4eTJ4V8n2bcyPhZMCg/640?wx_fmt=png)

直接传图上去，放大下载下来就可以了。不需要开会员，放大2倍就足够了。

放大完毕后，我们需要进行抠图。

因为表情包都是透明的嘛，这样才有代入感，肯定不能直接扔一个白底的上去，所以我们要把白色背景给剔除掉。

这有个免费的抠图网站：https://pixian.ai/

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo6ld67jn8C3Bt06WZpOmiaLqrl0oppIfT1qWMert1qHfT52iaAJQZ92GdibLu06oqbBNFibtCuscpkvA/640?wx_fmt=jpeg)

传图，下载，完事。

是不是很简单~

三.
MasterGo处理成可上架的表情包

这里懂设计的同学，或者懂PS、懂Sketch等设计工具的，可以自行按微信官方的要求去处理。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo6ld67jn8C3Bt06WZpOmiaLibf3Jr0yBCO6mVrpgpRF82BDY6dj2CbBMd2OzwFchaI1okFbj2qNjdQ/640?wx_fmt=png)

如果不懂的，可以使用这个简单的在线工具，
MasterGo。

网址：https://mastergo.com/

登录进去以后，直接点击右上角，新建文件。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo6ld67jn8C3Bt06WZpOmiaLTxMAuOwWmIp1M796Tul8BcoCPLATYSQ3Yfe4WGpKlF5wdcNp5iaNylQ/640?wx_fmt=png)

在新建的画板里，用左上角的“容器”拉一个240*240的容器，然后复制7个，命名按照微信规范改成01~08。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo6ld67jn8C3Bt06WZpOmiaLiaZEYWFgrB0Qttr6VsdYNzD4yibcaYIDpicqhAtJqS7EmLS4fTDmuDtsA/640?wx_fmt=png)

然后把我们处理好的那种表情包图片，导入到容器外的旁边。双击图片，在弹出的选项里选择剪裁。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo6ld67jn8C3Bt06WZpOmiaLccj1ZPvy9nia0leicDwmJEtmic8ImNEVWa4GjuPRgRctWtQe1QwXBFnbA/640?wx_fmt=png)

然后把图片范围剪裁到你想要的那个表情上。扔到容器里。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo6ld67jn8C3Bt06WZpOmiaLueLHfGShHdPncQ6x1qWbMswkzQKKTIQxibGyNnWrl7f5vHMt8Z7alZg/640?wx_fmt=png)

这个动作重复8次，就可以啦~

然后全选一下所有的容器，然后把右边的填充点一下删除，要不然导出的图会有白底，不是透明的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo6ld67jn8C3Bt06WZpOmiaL7j9mBGgD8pheqDTwQMMutibIgH9Vfico1ujMI4NiahZVibnu8xONOwAUTw/640?wx_fmt=png)

最后，导出就可以啦！

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo6ld67jn8C3Bt06WZpOmiaLRVlZhIFiacicUSkr94iciaRAWrJfVP3libTOH6A7GnDTNqTQsJicngCkryUg/640?wx_fmt=png)

后续的就是微信表情的上架流程了，这块微信有自己的非常详细的流程，我就不展开写了，大家直接去微信表情官网看就行，按他们的要求来：

https://sticker.weixin.qq.com/

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo6ld67jn8C3Bt06WZpOmiaLlsSyibxg7J3hQaiaofCBO6vm3Xia0kiaxEmwvXic04j43FCicelHafx3tasA/640?wx_fmt=png)

以上。

希望大家都能做出自己专属的IP~

都能做出自己专属的表情包，然后秀给朋友们看~

成为朋友中最靓的那个仔。

⭐吧，
感恩。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
