---
title: "虚拟换衣+全民舞王&quot;科目三&quot;，AI时代阿里的电商王朝要回来了？"
发布日期: 2024-01-05
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647660973&idx=1&sn=d14b255b21705585d5a04ec2040dc022&chksm=f100d2fd67393301c3d95cb2a1d70763019979a9f9424628af3bac4e057432aa605283b8f5ec"
---

## 摘要

**1) 一句话总结**
阿里巴巴凭借“全民舞王”（AnimateAnyone）和虚拟试穿（Outfit Anyone）两项前沿AI技术，成功在社交平台引发热潮，并展现出重塑电商购物体验与商品展示方式的巨大潜力。

**2) 核心要点**
*   **动态生成技术（AnimateAnyone）**：仅需一张人物静态图加上骨骼动画，即可生成流畅的人物动态视频。
*   **产品化与引流**：阿里未直接开源AnimateAnyone代码，而是将其作为“全民舞王”功能集成至通义千问APP中，带动了该应用数据的爆发式增长。
*   **虚拟试穿技术（Outfit Anyone）**：支持通过人物照片和服装图片生成试穿效果，Demo已在阿里的魔搭（ModelScope）平台上线。
*   **电商应用前景**：若将这两项技术结合并应用于淘宝/天猫，用户可实现“一键换衣”并观看专属的动态展示（如穿着指定服装跳舞），这将大幅降低退货率并节省商家的模特拍摄成本。
*   **竞品技术对比**：相比字节跳动同类AI动作视频项目（MagicAnimate）存在的脸部和手部大幅变形问题，阿里的技术在效果上具备明显优势。
*   **AI研发布局**：阿里通过GitHub账号“HumanAIGC”自2023年12月起密集发布了多个AI项目（包括照片音频驱动、3D服装、3D人物等），展现了深厚的AI技术底蕴（如2023年出圈的妙鸭相机亦属阿里系）。

**3) 风险与不足**
*   **生成瑕疵**：AnimateAnyone生成的动态视频在手部细节上仍存在轻微瑕疵。
*   **隐私限制**：Outfit Anyone的线上Demo因“隐私原因”，目前暂不支持用户上传个人真实照片，仅能使用官方提供的模特进行换衣测试。
*   **开源延迟**：相关技术在发布初期因迟迟未开源代码，曾被业内戏称为先占坑的“期货技术”。

## 正文

我相信最近很多朋友的朋友圈或者群，都被一些莫名其妙的"人"在跳莫名奇妙的"科目三"刷屏了。

比如这个玩意：

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURrvUTWtbRqdBoFYALMxxMZR1FLaicVGF5rBeX0s2pmDv6iaQPico9A5ML3rtGLIbSRlFFjhpBKIQqjaQ/640?wx_fmt=gif&from=appmsg)

兵马俑跳《科目三》，基本就是离谱他妈给离谱开门-离谱到家了。

其实背后就是12月初，阿里血洗AI届的那个期货技术：
AnimateAnyone。

我之前也写过一篇文章介绍过
AnimateAnyone
，想详细了解的可以去看看曾经的文章。

大概就是
一张人物静态图+一个骨骼动画，就能生成一段人物的动画。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURonkajEZKVB7CP1XJXFWzXjK6HgXx6SIrSHOPlnKR388zLS9Ln2fsGLxVOaW2HoQj91ntpbKzzprg/640?wx_fmt=gif&from=appmsg)

很屌炸天，但是为啥说是期货技术呢？

因为阿里这货说要开源代码，项目上线了一个月了，啥动静都没有。

所以圈内玩家戏称期货技术。先占坑再说。

不过左等右等，
AnimateAnyone也终于跟玩家们见面了，只是换了一种方式，阿里把他集成在了通义千问APP里，你对着通义千问发一句"全民舞王"，就能进入全民舞王的页面。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURrvUTWtbRqdBoFYALMxxMZRD8WcAqjYqAEjcw8FyAEUtXGPFVmXP0Op3via4ZJoib82lib4u28BHRMSA/640?wx_fmt=jpeg)

一张照片来跳舞，其实就是
AnimateAnyone。

选一个模板，传一个你自己的正面的全身照后，一段几秒的舞蹈就出来了。

比如我随手做的我鸡哥：

效果很好，除了手部有一点瑕疵，整体上符合预期。

阿里选择没有直接开源，而是先集成到了通义千问APP里，这司马昭的引流之心基本人人皆知了。但是热度也确实起飞。

看微信指数，这两天更是带着通义千问爆发式增长。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpzGic4slv3e9wR2xWiabjWQSRSI6ohOwTuKANJ54uIl2kfCK9hatDiaOF60dYpQ4ahKj8VQACtoC5pg/640?wx_fmt=jpeg)

全民舞王确实好玩，毕竟让马斯克让拿破仑跳科目三，那真是喜闻乐见。

但是我觉得除了全民舞王背后的
AnimateAnyone之外，我还想聊阿里的另一个在12月初发布，说要开源的期货项目：

Outfit Anyone，虚拟试穿。

简单的说，一张你的照片，再传个上衣或者下装，就能让你在家躺着也能试新衣服上身的效果。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrvUTWtbRqdBoFYALMxxMZRo3nA2OFaQ2rHWpSiboSW4nc3J510M0XyFpqwfBZEicuCo6mtLtdKics8A/640?wx_fmt=png&from=appmsg)

目前已经开放了demo，可以在阿里家自己的
魔搭平台上体验：

https://modelscope.cn/studios/DAMOXR/OutfitAnyone/summary

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrvUTWtbRqdBoFYALMxxMZRID1fbVQMlCs3hY6RdUdz4Jt2elh3hEbRic2jyJOQhPAVQTNjobEPzWw/640?wx_fmt=png&from=appmsg)

因为某些"隐私原因"，所以目前线上demo不支持上传照片，只能用他们的模特，但是衣服可以随便换。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrvUTWtbRqdBoFYALMxxMZRdlLEIYwQEzIfcfDxSGpolficV3elia5ia6FWHswO4LhljAjl8lcgRvM6g/640?wx_fmt=png&from=appmsg)

比如直接传一张看着还不错的裙子上去。

然后你就会发现，这裙子穿在身上怎么特么的这么丑！草，不买了。

当然，你也可以整一些稀奇古怪的活。

比如，要过年了，那穿个福字和春联？

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrvUTWtbRqdBoFYALMxxMZRAUSlXeNebyRwib4xvHSsoBUSxUBxLpbduYCw2mcRhvX7oXL7rxduvjQ/640?wx_fmt=png&from=appmsg)

比如，做一些很辣眼睛的脏东西...

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpzGic4slv3e9wR2xWiabjWQSCJ8odMqaBBZqecMw6icTmkOI9ciciaHyqRn4Q9eLY18xyxFSdHGM4hicIA/640?wx_fmt=png&from=appmsg)

试衣自由，不是说说而已。

Outfit Anyone这个技术，上到淘宝和天猫上，也就只是时间问题。
这玩意上到淘宝上去以后，你再也不用一次性拍个十件，回家一件一件试，然后不满意的再退了。

直接上传一张你的照片，一键换衣，非常轻松的就能看到这个衣服穿在你的身上合不合适。

对于普通用户来说，这绝对是AI技术的又一次大规模的痛点应用。

而当
Outfit Anyone跟
Anima
teAny
on
e相结合。

这火花的碰撞就不是1+1=2了。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURpzGic4slv3e9wR2xWiabjWQSlPAQmibg6mLjwbftWzedn9skmENjgWtl3wVsHfBgW8gsXppFHSM76ZQ/640?wx_fmt=gif&from=appmsg)

你可以在任何时刻、任何空间，穿着任何服装、做着任何动作。

需要的，仅仅是一张你的照片而已。

如果淘宝再激进一点，你点进去的每个服装产品，每个服装的详情页。可以
都是
你的
形象，穿着
店家的
衣服，跳着"科目三
"。

那画面要多美有多美。

店家也不需要模特去拍各种买家秀了，直接根据点进来的用户，现场用他的照片来合成详情嘛。主打一个AI时代，千人千面。

这种不限时间、不限空间、不限服装、不限动作的产品，在短视频传播上，也是门槛超低的病毒传播的典范。

还记得当年抖音是怎么干死小咖秀的吗？

15秒的音乐卡点视频，极低的创作门槛，直接把小咖秀闷在地上锤了一头包。

阿里的这套组合拳如果正式面世，我都能预想到在各大短视频平台引起什么样的风浪，甚至评论里一定会出现：

"集美集美，你这套衣服真不错，你快设计出来，我第一个买"

而讲道理，不管是行业还是基因，这次阿里的全民舞王，我很多朋友都会觉得，这应该是抖音先做出来再引起一波传播的啊。为什么会是阿里？为什么会是通义千问？

抖音错过了，错过的原因很简单，纯粹的是因为技术不达标。

在我之前的文章：
盘一下最近刷屏的3大AI视频项目
里，也提到过字节的AI动作视频项目：
MagicAnimate。

但是说实话，效果真的差强人意。

脸、手，都大幅度变形，基本处于不可用状态。

AI时代，是一个典型的学术或技术驱动的时代。你的产品效果好，用户就会用脚投票。

ChatGPT如此、POE如此、Midjourney如此、Runway亦是如此。

虽然阿里这个曾经的巨兽，现在看着已经日落西山，市值都已经被拼多多超了。但是他们这么多年在在创新在AI方面的积累，这个底蕴还是很强的。

如果我没记错的话，2023年几个出圈的AI产品，比如妙鸭等等，有半壁江山都是阿里系的。

他们在Github上也有个账号：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpzGic4slv3e9wR2xWiabjWQSxKU01icsRMxCibWhzWblyKYLIia3lAHS1gfOffrickpTtXyamYXWc0096Q/640?wx_fmt=png&from=appmsg)

名字取得很装逼，HumanAIGC。从23年12月开始，密集的发项目。

大名鼎鼎的
Outfit Anyone和
Anima
teAny
on
e就在其中。

另外三个分别是AI照片音频驱动，AI 3D服装，AI 3D人物。

很卷，卷到起飞。

说实话，虽然我一直对阿里这家公司无感。

但是对他们在AI时代的领先和研究，我还是很看好的。这可能是为数不多的嘴上没有说要All in AI，但是却是正儿八经在在AI道路上探索的最前沿最广泛的公司了。

毕竟，我从来没见过某XXX公司发过项目，哈哈哈哈哈哈。

阿里，这个曾经的巨兽。

我期待着他在即将到来的AI时代。

用正儿八经效果的研究成果，和更好的AI产品。

来重建，曾经属于自己的，超级王朝。

。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
