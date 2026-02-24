---
title: "我们也终于有了自己的开源AI绘图大模型，它叫，腾讯混元。"
发布日期: 2024-05-15
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647662622&idx=1&sn=ad405ba09a82a0c830a393004e34f0e1&chksm=f1b57fb9762056d0f62472ac2a0c8b1a0db7b4846196aaa073a2eb3e1b19813e255f77550ffe"
---

## 摘要

**1) 一句话总结**
腾讯正式全面开源了基于DiT架构且支持原生中文的AI绘图大模型“腾讯混元”，面向企业和个人开发者免费开放，填补了国内高质量开源AI绘图大模型的空白。

**2) 关键要点**
*   **全面开源免费**：腾讯混元AI绘图大模型面向企业和个人开发者完全免费，模型文件已在Hugging Face上线提供下载。
*   **采用DiT架构**：抛弃了传统的U-Net架构，采用了与Sora、SD3相同的DiT（Diffusion Transformer）架构，这也是未来多模态视觉生成的统一主流架构。
*   **原生中文驱动**：模型专为中文语境优化，能够精准理解和生成中国古诗词及中国文化特色的画面（如古风阁楼飞檐、中式美食等）。
*   **长文本与多轮对话能力**：得益于DiT架构，模型长文本理解能力大幅提升，并支持类似DALL-E的多轮对话修改，且能保持极高的图像一致性。
*   **提供在线免费体验**：普通用户无需本地部署，可直接通过“腾讯混元助手”小程序或网页端（hunyuan.tencent.com）免费在线使用AI绘图功能。
*   **持续的开源贡献**：在此大模型之前，腾讯已在AI图像领域开源了多个核心项目和插件，包括IPAdapter（主流风格/角色复刻插件）、Photomaker（写真定制）和InstantMesh（单视角生成3D）。

**3) 风险与不足（基于原文）**
*   **本地部署门槛较高**：目前官方开源的模型对于初级开发者（小白）来说本地部署难度过大，尚需等待开源社区提供WebUI或ComfyUI的适配。
*   **提示词（Prompt）句式敏感**：在实际使用中，采用“生成XXXX+特定风格”的句式效果较好；若仅输入“画一个XXX”，生成的图像风格可能会出现不可控的情况。
*   **海外竞品闭源趋势**：作为行业对比，Stability AI的SD3模型目前需通过Discord机器人付费开通会员才能使用，受限于其商业盈利压力，大概率将不再开源。

## 正文

坦率的讲，一直以来，我都很希望在AI绘图领域，有一个我们自己的开源的AI绘图大模型标杆的。

只属于我们国内的、中文驱动的AI绘图开源大模型。

然后我们如此蓬勃的创作者和开发者，
就像现在的Stable Diffusion一样，在这个基础上，缔造出繁荣的开源生态。

但是AI绘图大模型，好像一直是一个魔咒。

国内大模型出了无数，也出了无数的开源，但是国内的AI绘图大模型，却不足十不足一，更别提开源的了。

不过外面的情况也不是那么的好，自从Stability开源了SD XL之后，在AI绘图大模型上，好像再没动静了。

而全新DiT架构、炒的沸沸扬扬的SD3，在他们决定接给Discord的机器人
Stable Artisan之后
，需要普通用户付费开会员才能使用，我觉得也大概率不会开源了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrJXbxXqEAznibrge8xWFF2zS5vlYL55TVXNS8HkytHaKBQY8KlHyMKDibqsHRuuvPUc9Wl8IqKt0YQ/640?wx_fmt=png&from=appmsg)

毕竟，如果你开源，那对你整个Stability的盈利都是一个挺重的打击的，Stability的商业模式本来就很难看，整个团队的盈利也都饱受诟病，这要是还开源

AI绘图大模型的开源生态，好像被按下了暂停键。

直到昨天，我看到了腾讯混元，默默地开源了他们的AI绘图大模型，嗯，就那么的默默的开源了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrJXbxXqEAznibrge8xWFF2zoHp5KpcQribOy00frB2wk8OrO5x5pbuGibfyDo7u6wsR3IjxVgwHHEqw/640?wx_fmt=png&from=appmsg)

这很腾讯。

列几个关键词：DiT、中文原生。当然，最核心的是还是那条：

全面开源。

不管是企业还是个人开发者，全部免费可用。

坦率的讲，我对腾讯一直是有非常强的好感的。当然不是因为我主阵地在公众号，需要腾讯爸爸赏饭吃。

是因为腾讯在AI绘图开源领域，做出了巨大的贡献。

如果大家看最近海辛和阿文的一些项目内容，会发现他们大量的使用
ControlNet+AnimetaDiff+IPAdapter这个工作流。

ControlNET和AnimetaDiff这两个不提了，已经大名鼎鼎了，而这个IPAdapter，是能替代的LoRA的东西，一张图片，直接复刻角色或者风格，非常好的解决了一致性。已经基本快成为了现在整个AI转绘领域最主流的插件之一。

而这个
IPAdapter，就是腾讯搞出来的。
然后，开源。

不同于国内其他的一些厂商，腾讯一直就在默默地发项目，开源；发项目，开源。

比如前段时间一张照片就定制各种写真的项目Photomaker，腾讯搞的，然后开源。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrJXbxXqEAznibrge8xWFF2zKIwjtF1ASay0JodTuqfEmdBrsHNkILQayHU084pNkFntjZia4ibUF2cw/640?wx_fmt=png&from=appmsg)

比如前段时间的一张单视角生成3D的项目
InstantMesh，腾讯搞的，然后开源。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrJXbxXqEAznibrge8xWFF2zcVjaI9IuqvtMwAKNhDbPzC7uRjlk3OIEy9FzxTuz4WSGk2aibyeL3JA/640?wx_fmt=png&from=appmsg)

还有很多很多。

所以可能不光是我，整个开源社区，对腾讯的情感，都是有一些情感的，开源开的这么勤快的公司，其实说实话，不多。

不过这一次，他们没有开源插件，但是选择开源了可能是这个AI时代，最重要的东西：

大模型。

项目地址在此：https://dit.hunyuan.tencent.com/

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURrJXbxXqEAznibrge8xWFF2zfrAtTFR6SnL3dtNfGMeT91U3WPcSEx46rFBC6qFqWAH6l4Y3XXl9vw/640?wx_fmt=jpeg&from=appmsg)

跟Sora、SD3同架构，也就是抛弃了传统U-Net架构，而使用了DiT架构的新模型。

今年2月16号Sora的横空出世，DiT架构，已经被大厂们共同认证了，这就是未来的主流。
未来，DiT架构大概率也会成为文生图、生视频、生3D等多模态视觉生成的统一架构。

模型目前已经可以直接去huggingface上下了，不过我去看了一眼，嗯。。。

对我这种开发小白来说，本地部署还是过于困难了。。。

但是他们自己的产品演示，看着还是非常有趣的。

很期待大佬们做的WebUI或者Comfyui的适配，当然，还有我最关心的微调，基于混元的AI绘图大模型上的繁荣生态，可能更让我期待。

不过我找了一圈，发现对普通的用户，腾讯混元也提供了在线的免费使用的方式，AI绘图直接集成在了他们的混元助手里。

可以在小程序和网页端用，小程序直接搜“腾讯混元助手”就行，网页端的网址在此：htt
ps://hunyuan.tencent.com/

我就去里面实际跑了下效果。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrJXbxXqEAznibrge8xWFF2zw5vyoAN4k5m8gr1qIBicUcC3tBrsVMg6XKjiaqCYLCAAUyZg43FIRBog/640?wx_fmt=png&from=appmsg)

效果还不错。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrJXbxXqEAznibrge8xWFF2zDo9eSaEpocKZBunuRpF3mACdFibwPtuJxLG80BHvWOTlzrhPRMyCzWg/640?wx_fmt=png&from=appmsg)

再来一个幻想风格的猫。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrJXbxXqEAznibrge8xWFF2zTR8Szgtz7Ej2NIfCZDXWOBqyU9Nhx52etVGkK4bDPeH9IW89mUOlwA/640?wx_fmt=png&from=appmsg)

在使用中，我发现腾讯混元的画图prompt，是用生成XXXX+特定风格效果是比较好的。

如果写画一个XXX，那个风格可能会有一点不可控。

既然都是原生中文模型了，那我们自然得再来试点适合中国宝宝体质的Prompt。

比如这一段Prompt：
生成一幅图：“落霞与孤鹜齐飞，秋水共长天一色”

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrJXbxXqEAznibrge8xWFF2zECvtOFOQQGyiaeoY1qHznOL7XHfjlLS1qibIHO7fUmfv1OAUJlhFzbWQ/640?wx_fmt=png&from=appmsg)

生成：
“
一座古风的楼阁，周围都是山峰。
”
（PS：终于又能把阁楼的
飞檐
画对的了！！！）

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrJXbxXqEAznibrge8xWFF2z3Pp2687QUicEhIDB0ib1AXkGajvdvBXhEt3ia8piakZ8fr07NXcWvq1JQQ/640?wx_fmt=png&from=appmsg)

生成照片：热气腾腾的烧麦，美食摄影风格

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrJXbxXqEAznibrge8xWFF2zCB1t5fPCtP1FdkO8wHTgJdeqBNXJaO9xPa5ksEgQBZkwBc4EtdgB1Q/640?wx_fmt=png&from=appmsg)

说实话，我还是喜欢用中文当Prompt的感觉。

毕竟，中文，才是最牛逼的。中国的古诗词，也才是最屌的。

而且得益于DiT的结构，长文本理解能力有了大幅的提升，并且，还支持类似于Dalle的多轮对话。

比如。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrJXbxXqEAznibrge8xWFF2zKIcwonHzrAicVCg7tjfxZOd5v42Ugy2BqXDlXWwGgXgHjKsNjBicN3PQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrJXbxXqEAznibrge8xWFF2z40q9WH7FUIHrzEpBx7f3JuvtXO8jF9MgDclGhuTicbicN5hjHNPwMhTQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrJXbxXqEAznibrge8xWFF2zrvsgpWyzAZkkWcBSQ5rTiamFV8Qibaezf2NAwXOWgUXooHhOR7Au1lUw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrJXbxXqEAznibrge8xWFF2zJEXZwJ0IZaVjiat9nx2bNCTax34peX6uxKcmouzDtYOO7gR40k9XGwQ/640?wx_fmt=png&from=appmsg)

嗯。。。人都搁病床上躺着了还不忘工作呢。。。

这种多轮对话的能力，非常有意思，而且一致性，保持的非常非常好。

我已经越来越期待，开源社区的大佬们，基于腾讯混元的AI绘图大模型进行的微调了。

会不会有Majic麦橘写实、DreamShaper这样级别的基于混元的微调定制大模型出来，说实话，我不知道。

但是我期待出现的那一天。

我们需要自己的AI绘图开源大模型，已经太久了。

现在，它来了。

那就，继续在AI这条路上，一路狂奔，发光发热吧。

风雨同舟，愿与诸君共勉。

。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
