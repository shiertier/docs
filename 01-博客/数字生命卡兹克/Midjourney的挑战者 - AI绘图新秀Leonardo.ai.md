---
title: "Midjourney的挑战者 - AI绘图新秀Leonardo.ai"
发布日期: 2023-04-02
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647658122&idx=1&sn=3f965f1af5f0fdbcff6b6b8dad69c7eb&chksm=f1c5adc296ed6e614ccec799d7a97135aa80030df80b2bc7ae54314f9c8d1158c059e7d06e72"
---

## 摘要

**1) 一句话总结**
Leonardo.ai 是一款基于 Stable Diffusion 的免费 AI 绘图工具与社区，通过降低硬件与网络门槛，为用户提供特色微调模型、提示词扩展、姿势复刻及傻瓜式在线模型训练等一站式图像生成服务。

**2) 核心要点**
*   **低门槛与免费机制**：无需特殊网络（魔法）和高配显卡即可使用；实行免费代币制，每人每天发放 150 个 token（单张图渲染约耗费 3~8 token）。
*   **底层架构**：基于 Stable Diffusion 算法，深度集成了 ControlNet、局部重绘等 SD 插件功能，产品形态类似于 Civitai 社区与 SD 工具的结合体。
*   **专精微调模型**：提供大量基于 v1.5 和 v2.1 微调的特色专精模型（如像素风 Pixel Art、角色专精 RPG 4.0 等），支持一键调用。
*   **一键复刻（Remix）**：用户可直接查看社区优秀作品的模型、提示词（Prompt）和参数，并一键照抄复刻生成新图片。
*   **提示词扩展**：内置提示词生成插件，输入简单的基础想法（如“赛博朋克钢铁侠”），系统可自动扩展生成最多 25 个详细提示词。
*   **图像后期处理**：提供一键去背景功能（耗费 2 token 生成干净 PNG 图），以及支持构图补全（Outpainting）、局部重绘和消除的画板编辑工具。
*   **姿势复刻**：集成 ControlNet 的 Openpose 模型，通过“Pose to Image”功能上传参考图，即可提取骨骼并复刻人物动作。
*   **在线模型训练**：提供极简的专属模型训练功能，用户只需上传 20~40 张背景干净的图片集，约 30 分钟即可完成训练并收到邮件通知。

**3) 风险/不足**
*   **综合能力差距**：目前的整体生成能力和水平还远未达到可以与 Midjourney 正面抗衡的地步。
*   **自训练模型精度**：用户使用自定义数据集训练出来的专属模型，在生成图片的细节方面仍需要进一步调整和优化。

## 正文

现在的AI绘图主流基本被两个产品牢牢把控了。

Midjouney 和 Stable Diffusion WebUI。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqwbcSeotAsSCYEZPQXFrp3apktJictUFLtUmDq2MmwBxENLr2LbLUISYr0G1UbvSKsdfTHF4K7nUw/640?wx_fmt=jpeg)

但是，这两个产品对于大家来说，门槛都还是非常高。

Midjouney虽然用起来傻瓜，封神的V5模型也能应对绝大数需求，
但是使用需要魔法，同时每个月高昂的30美刀的价格也让很多人望而却步
。

而SD更别提了，
2060 6G显卡以上的Windows电脑，就这一条，卡死了无数的人。
而随后的上手难度，更是卡死了另一拨人，即使傻瓜式教程已经铺天盖地，但是还是难。

基于这些痛点，3月初机缘巧合的从朋友那听说了Leonardo.ai，在使用了近1个月左右，在此也想推荐给大家，因为他完美的解决了以上痛点。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqwbcSeotAsSCYEZPQXFrp3EBmrP0GFUmvPGuGlklichCc9t2qWGvh77zqQ7l9szOYo9sXkdIr50RQ/640?wx_fmt=png)

网址在此：https://leonardo.ai/，目前内测中。

Leonardo是一个AI绘图社区，同时也是一个绘图工具。对Stable Diffusion了解的比较多的人可能会知道一个Stable Diffusion的社区网站 - Civita。
而Leonardo更像是Civta和Stable Diffusion的集合体。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqwbcSeotAsSCYEZPQXFrp3sJsYdURWFLq9ZicsQK8keteqSwgICh64BS4gsFF31gIkSaViaFNTW0pQ/640?wx_fmt=png)

Leonardo是基于Stable Diffusion的网站，同时深度集成了Stable Diffusion的各种插件，比如ControlNET的openpose姿势参考、局部重绘、prompt提示等等，甚至还提供了傻瓜式在线训练自己模型的功能。

最关键的是，Leonardo这玩意，他不需要魔法，而且还免费。

平台采用代币制，每人每天150个token，渲染一张图大概3~8token不等，基本上如果不是高频式的疯狂用，一天绝对够了。我总结了关于Leonardo的几个特色和有趣的地方，大家也可以上去自己深度体验一下。

一. Leonardo的特色模型

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqwbcSeotAsSCYEZPQXFrp3g2MePAGcYgUHokt61qEe0EneuYDeJ8QyyNV7QfW8D3ia8PnsqmSBtXw/640?wx_fmt=png)

Leonardo最有趣的一点就在于，他们有很多非常精良的微调模型，都是基于v1.5和v2.1微调而来，在某一个领域极其专精，比如为对像素风专精的Pixel Art、对角色专精的RPG 4.0，甚至还有对专门做斧子的Battle Axes。这跟Midjouney的超大型V5走了两种完全不同的路。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqwbcSeotAsSCYEZPQXFrp3ia8UAKib95fm3y85kdMPIzlT9fOnA2haKUsWicwdRho0QPNcvuiaFeLmOQ/640?wx_fmt=png)

你可以直接点击button就可以调用此模型去生成自己的图片。每个模型下也都有用户创建的例子给予你做参考。

二. 快速抄作业

Leonardo借鉴
（
抄袭
）
了Civta的核心功能，当用户看到一张自己很喜欢的图时，点开，就可以直接看到这个图用了什么模型，使用了了什么prompt，你可以直接点击remix照抄再复刻一张，也可以把prompt给copy下来。这里看到一个非常可爱的小脑斧，我们试一下。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqwbcSeotAsSCYEZPQXFrp32BVUdxoPFypmH8wziasHFVL5gZZAgsPTM0beTicgVXRnibdMj34J4LnbQ/640?wx_fmt=png)

点击Remix。直接进到了生成页，把prompt和所用模型、使用参数给带了过去。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqwbcSeotAsSCYEZPQXFrp3YdMfKpxiaia3gicic1rQEGs7sAunL4sXMGWiawEhViaaemgsjiaicDb3VjNcwQ/640?wx_fmt=png)

我们只要无脑点击一下Generate，这个小脑斧还挺贵，生成居然会花费7个token。等待十几秒后，你专属的可爱的小脑斧就出现啦！

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqwbcSeotAsSCYEZPQXFrp3zoos4PozFDsIgFbLH1YaPWhEqhotnBnm8qE2zs5YEKONYsJe2B3h1g/640?wx_fmt=png)

三. 提示词扩展

相信大家都有写不出提示词的时候，或者只有
一个想法，比如“科幻世界的女武神”这种笼统的词语。在Midjouney的环境下，可能就需要接
触ChatGPT的prompt了，比如我写的这篇里的例子：
我花了100个小时，整理并撰写了一份ChatGPT的超实用prompt大全...

但是Leonardo借鉴
（
抄袭
）
了Stable Diffusion WebUI的提示词插件，可以直接将想法进行拓展。

比如我们想画一个“赛博朋克钢铁侠”，直接扔给Leonardo，他就可以帮我们生成至多25个prompt。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqwbcSeotAsSCYEZPQXFrp3hhBjLKbgqFmCnLkgcPzQTERrL1B2FWmNMCJk6J3ukzu1WTPibvNmm3A/640?wx_fmt=png)

我们选第二个去跑一下试试效果。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqwbcSeotAsSCYEZPQXFrp3D9iccBfrvmYA7FUpWGAXs2icQ3dsTehBUKXXgmibDfrP7nWuWkreB1cvQ/640?wx_fmt=png)

效果还不错~

四. 一键去背景

用我们刚才生成的小脑斧举个例子，在某些场景下，我们需要把主人物给抠出来，合成到别的背景上。扔到PS里去扣或者用别的工具，总归是很麻烦。

Leonardo提供了快捷的方式，点一下，花费2token，直接一键抠图。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqwbcSeotAsSCYEZPQXFrp33ZeRib2ZK8PPl2xia4LgHPwTNrasBIpvADh8RiaxvMzj9kvxc7YQJ4ksw/640?wx_fmt=png)

只需要点一下，我们就获得了超级干净的小脑斧PNG图，就是这么方便！

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqwbcSeotAsSCYEZPQXFrp3TfmLZZc5gEsQWic1esHdN6ziaRNy37o9Uzp7wO87EIlicgnECiapLnFa5Q/640?wx_fmt=png)

五.画板编辑

我们生成了自己想要的图片，但是很有可能，这些图的细节距离我们想要的，还是有一些距离，Leonardo也提供了一个有趣的能力，去画板中编辑。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqwbcSeotAsSCYEZPQXFrp3MFB2cO11o5enia5lWNTNbTrqashpibVIqP8U1GSnAqiavibplgaRK01zAw/640?wx_fmt=png)

在画板中，比如我们现在觉得这张生成图的构图不太好，人物太贴边了，我们想在左边再额外渲染一些背景把构图补全，我们只要把图片拖到渲染框中，把需要格外渲染额地方给空出来，Leonardo就可以自动补齐。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqwbcSeotAsSCYEZPQXFrp37DZlx3qLbD48d6zuMPLUsYzOQ9cl9NMribQkf9a44ta4oQX00HPjtuA/640?wx_fmt=png)

当然，画板中还有其他很多有趣的小工具，比如局部重绘、消除等等，就留给大家自己去探索啦。

六.姿势复刻

在我的这篇文章中：
AI绘图傻瓜指南 - 5分钟教你用ControlNET让妹子摆出你想要的pose
，详细的介绍了Stable Diffusion的神级插件ControNET，他有个最强的模型叫Openpose，可以抽取参考图的骨骼，让新生成的图片按照骨骼去去复刻人物姿势。

而Leonardo借鉴
（
抄袭
）
了这一点，集成到了自己的产品中，在我们将图片上传到Image to Image后，就能看到Pose to Image，开启他，就能完美复刻人物的动作啦。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqwbcSeotAsSCYEZPQXFrp3hec1VCPEV70bjFs8xIonleYySuoLQzEBnGGkMBFjcV9xLGp0d63FuQ/640?wx_fmt=png)

七.训练自己的模型

这个应该是Leonardo的王炸了，在其他的任何产品上，训练自己的模型都不是一件容易的事。

Midjouney直接不支持，而Stable Diffusion则需要非常专业的知识，麻烦的要死。

现在，Leonardo提供了极其快捷的方式，去训练我们自己的模型。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqwbcSeotAsSCYEZPQXFrp355zBFaBEvmFLNAicVxiaV5u28kdd1GNHOghyrREMkbABEsv0Zlj4OqxA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqwbcSeotAsSCYEZPQXFrp3qo4Oyj467g2woQIwwflyRAIHaZEgpB3uNAgaJxictBwJQ3wPvo1zc5g/640?wx_fmt=png)

我们创建一个新的模型，取名就叫我最喜欢的最终幻想吧。

我们准备好训练集，20~40张背景干净的图片就可以。这里我选用的最终幻想画师大佬的立绘。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqwbcSeotAsSCYEZPQXFrp3naSJYRwTXVZMVIugSWVcAWUIrknmSRFsUHArbkcDTLW9xOteNJBGww/640?wx_fmt=png)

我们把这些训练集给传上去，直接右下角训练模型就好。最后补完一些信息，直接start，大概等30分钟左右就OK，训练完成了，会直接给邮箱发通知。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqwbcSeotAsSCYEZPQXFrp3jO29exgeE1kE8ibPLLjicia8futLlZQpjwYmyAOhaO9xhZ769AWicrvo0g/640?wx_fmt=png)

训练完成以后，我们可以在“你的模型”中找到你训练好的模型。最后跑一下

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqwbcSeotAsSCYEZPQXFrp3eIzlMs2eSELsOF7ndwunDAIVdEqGibMDTpRyQxOnHibfj8tWrHqfhGSg/640?wx_fmt=png)

跟训练集的画风完全一样（细节还是需要调整）~

最后。

大家想用的话，直接在官网https://leonardo.ai/，点击右上角启动app，然后点击我已在白名单中，直接注册账号，就可以进了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr59m9dTicMsM9ibL3nnnCxxVj2jVMe8M3ZHmXB6folnC9OK1iaUNH3icEZhtibtFnQCUbG5Wlg7HYnrMg/640?wx_fmt=png)

希望大家都能加入AI绘图的阵营。

诚然，Leonardo目前还远没有能到达跟Midjouney掰掰手腕的地步，但是，别忘了，
Leonardo的背后可是Stable Diffusion，这是一个开源的算法，全球百万人共建的算法和产品，全世界进化速度最快的AI绘图，没有之一。

未来的
Leonardo
，会变成什么样子呢？

我们拭目以待。

以上，创作不易，有用的话请帮忙点个关注和在看，感恩。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
