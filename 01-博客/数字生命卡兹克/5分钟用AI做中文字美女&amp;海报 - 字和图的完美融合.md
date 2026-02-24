---
title: "5分钟用AI做中文字美女&amp;海报 - 字和图的完美融合"
发布日期: 2023-07-15
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647658954&idx=1&sn=1816b61e0702f3d7536f23879fe31a90&chksm=f12c7cd830c43d94fd77ad2fbdc27817988de081662bf6aff172e0bf2b4d20e9aa9f51a67ef2"
---

## 摘要

**1) 一句话总结**
本文提供了一份使用Stable Diffusion结合ControlNet插件，将文字与图像完美融合以制作创意AI绘图和中文海报的实操教程。

**2) 关键要点**
*   **核心工具**：使用Stable Diffusion（SD）配合ControlNet插件直接出图。
*   **前期准备**：需预先制作一张文字图（白底黑字或黑底白字均可，作为明暗贴图），可使用PS、Sketch或美图秀秀等任意制图工具。
*   **尺寸建议**：推荐使用 512*768 的图像尺寸，这是AI生成效果最通用且最佳的尺寸。
*   **大模型选择**：推荐使用 `MajicMIX`（具体为 `majicmixRealistic_v6`）作为生成真人图像的基础模型。
*   **ControlNet模型**：指定使用 `tile` 模型，该模型能保留原图构图，忽略全局提示词并根据局部图像内容生成全新细节。
*   **参数设置**：ControlNet的“权重（Control Weight）”和“引导终止时机（Ending Control Step）”建议均设置为 0.6，用户可根据需求自行微调。
*   **应用场景**：该技术不仅适用于制作在缩略图（如微信聊天窗口）中显现隐藏文字的创意人像，也同样适用于制作中文海报。

## 正文

AI绘图跌跌撞撞，蓬勃发展已经快一年了。

创意也越来越变得重要。

自艺术二维码火了之后，最近又有一种新的形式跳入大众视野。

把字和图进行完美的融合。

比如这种东西。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURplVicqope3pk4bU7WnUWjtX4LdSAgSa1iagOvwBUibC9CK2ibgpyEhy7JxAGOwtfoicD7QaibCzlwOnJAg/640?wx_fmt=png)

可能在大图上看不出啥。

但是当我们来到微信环境，在聊天窗口看到这张图时。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURplVicqope3pk4bU7WnUWjtX3NLpMeZRpicdCfgWqakQrZUC8icEicibrUpfR7XWdspzImerUcAOqNVcUg/640?wx_fmt=png)

满本都写着两个字“牛批”。

做法也非常简单，跟上一期的艺术二维码相似，都是使用SD+ControlNET直接出图。

AI绘图傻瓜指南 - 5分钟教你做出绝美的AI二维码

如果对SD和ControlNET不了解的话，去看我2月写的傻瓜教程。

首先，我们需要准备一张文字图，你可以拿PS做，拿SKetch做，拿美图秀秀做，什么都行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURplVicqope3pk4bU7WnUWjtXRatISJ4Lvoc1U0g0hIT7tI7MA2GlrSPQ7fEr2aJP2F9X0F0IjTiaPZQ/640?wx_fmt=png)

建议尺寸：512*768
，AI效果最通用效果最好的尺寸。

可以是白底黑字，也可以是黑底白字，都行。其实就是类似明暗贴图的东西。

文字图做完以后，我们老规矩，打开SD。

顶上正常的写你自己喜欢的Prompt，我这边直接用的MajicMIX，最好的真人模型，前面的模型推荐里吹过无数次了，
AI绘图StableDiffusion6月模型盘点 - 群星闪耀
，想要模型的可以去这篇文章里下载。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURplVicqope3pk4bU7WnUWjtXcv7tAbQa8WjyMe9hKDL3CJtCxXN1N7SRjfaJW7RicExMTpnUuPtkFgw/640?wx_fmt=png)

这是我的Prompt，可以直接复制拿走去用：

1girl,Best quality, masterpiece, ultra high res, (photorealistic:1.4), raw photo, cyberpunk edgerunners, solo, lucy \(cyberpunk\), bare shoulders, blue eyes, looking at viewer, smile, medium breasts, off-shoulder jacket, red eyeliner, short hair, solo, turtleneck leotard, white hair, ((masterpiece)), cyberpunk, neon trim, street, white hair,
Negative prompt: NSFW, (worst quality:2), (low quality:2), (normal quality:2), lowres, normal quality, ((monochrome)), ((grayscale)), skin spots, acnes, skin blemishes, age spot, (ugly:1.331), (duplicate:1.331), (morbid:1.21), (mutilated:1.21), (tranny:1.331), mutated hands, (poorly drawn hands:1.5), blurry, (bad anatomy:1.21), (bad proportions:1.331), extra limbs, (disfigured:1.331), (missing arms:1.331), (extra legs:1.331), (fused fingers:1.61051), (too many fingers:1.61051), (unclear eyes:1.331), lowers, bad hands, missing fingers, extra digit,bad hands, missing fingers, (((extra arms and legs))), ng_deepnegative_v1_75t, badhandv4,
Steps: 30, Sampler: Euler a, CFG scale: 7, Seed: 3024811145, Size: 512x768, Model hash: e4a30e4607, Model: majicmixRealistic_v6, Denoising strength: 0.3, Clip skip: 2,

下面这块是ControlNET参数：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURplVicqope3pk4bU7WnUWjtXvfPRicGCtnw79p9L7nlg4t2c5ZxuT6FEQapAibpIFNHfLibOrVt1Wxqhw/640?wx_fmt=png)

这块多说一句，我用的是tile模型，这个模型极其强大，

官方说明是：忽略图像中已有的细节并生成新的细节。
如果局部内容和提示词不匹配，会忽略全局提示，使用局部图像内容。

如果跟以前的ControlNET模型对比的话，加强版的OpenPose，
另类版的refuonly，保留原图构图，生成全新的细节去匹配。

如果没有tile模型的，直接去装个最新的ControlNET，或者对着公众号后台私信SD，拿到链接，下载装个最新的秋叶的SD整合包。

权重和引导终止我的习惯都是0.6和0.6，你们可以根据自己的需求去微调。

直接开跑。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURplVicqope3pk4bU7WnUWjtXA6WB98TTCJLb3LJzNFNX7mp3XHpouEuqS7dpvZ0BOcHsQ9Z7ibAlMYg/640?wx_fmt=png)

大功告成。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURplVicqope3pk4bU7WnUWjtXGzBkRRlibrpeaibMfUDHZsiajqL8PHiceVG6OTkcqok6FryntVBl3XykYw/640?wx_fmt=png)

你们自己去玩起来吧。当然，这方法可不止做美女，做中文海报也是一绝。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURplVicqope3pk4bU7WnUWjtXDlDGL6Jre8Iic7vpDRdxpicGz6kdc79nuXb8icpzJVoyyy6wY3gSL8G1A/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURplVicqope3pk4bU7WnUWjtXoDavC3ZciaUUT0x72x4JzmAXqPlBfpiaSQQ9UCu73UVbRYBPMaYd7mfw/640?wx_fmt=png)

原理一样，方法一样。

大胆打开你们所有的脑洞吧。

⭐吧，
感恩。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
