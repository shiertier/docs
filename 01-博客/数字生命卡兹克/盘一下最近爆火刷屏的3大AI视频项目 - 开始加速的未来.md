---
title: "盘一下最近爆火刷屏的3大AI视频项目 - 开始加速的未来"
发布日期: 2023-12-05
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647660629&idx=1&sn=8b48960cd1cc48496bbb57faff2d4e1f&chksm=f1895154c63141c3786905d5a9f6ead31062371194f8a115dfee3bb1274737d340566aa145ff"
---

## 摘要

**1) 一句话总结**
继PIKA之后，阿里（Animate Anyone）、字节跳动（MagicAnimate）和微软（GAIA）相继推出三大AI视频项目，在静态图转骨骼动画及“照片说话”领域展现了极高的技术一致性与行业降本增效潜力。

**2) 核心要点**
*   **阿里 Animate Anyone**：通过“一张人物静态图 + 一个骨骼动画”即可生成高质量人物动画。
*   **阿里项目优势**：在人物一致性和画面稳定性上表现极佳，可省去传统3D动画中绑骨骼、刷权重等繁琐工作，大幅降低动漫、影视、游戏领域的成本。
*   **字节 MagicAnimate**：作为阿里的直接竞品，同样提供图像转动画功能，且支持多人同框生成。
*   **字节项目开源**：已完全公开源代码并提供在线 Demo（上线于 GitHub 和 Huggingface），允许用户直接上手体验和进行代码魔改。
*   **微软 GAIA**：主打“照片说话”功能，支持通过语音或视频来驱动静态照片生成动态视频，且嘴唇运动与语音高度同步。
*   **微软项目特性**：支持通过手工制作或提取的姿势来控制头部动作；支持通过纯文本提示（如“悲伤”、“惊喜”、“张开嘴”）直接生成并控制面部情绪。

**3) 风险与不足**
*   **可用性缺失（阿里）**：Animate Anyone 目前仅发布了宣传视频，未提供任何项目 Demo 或源代码。
*   **生成质量缺陷（字节）**：MagicAnimate 在面部和手部的生成上存在较大问题，整体视觉效果不如阿里的 Animate Anyone。
*   **可用性缺失（微软）**：GAIA 目前处于非公开状态，代码仅标注为“即将推出（Coming Soon）”。
*   **滥用风险（微软）**：GAIA 极其逼真的“照片说话”技术被明确指出存在被用于诈骗的风险。

## 正文

从PIKA爆火之后，AI视频项目开始井喷式爆发。

不管是学术界的，还是产品界的，都像在人们的眼光聚焦在AI视频上时，来推出自己的东西。

割韭菜的也有，但是学术真正牛逼的东西更多。

有3个令我映像非常深刻，也在我群里和朋友圈里刷屏的三个项目：

阿里的
Animate Anyone

字节跳动的
MagicAnimate

微软的GAIA

字节和阿里都是AI动画的项目，纯竞品，后面细说。微软的GAIA是照片说话。

一个一个说：

一. 阿里
Animate Anyone

阿里研究院上周四出的一个AI动画项目，一张人物静态图+一个骨骼动画，就能生成一段人物的动画。

这玩意我直接放图吧，放图比文字来的直观。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURonkajEZKVB7CP1XJXFWzXjA1ZvWqsBouk0v1n6XksnelZfsWibDBXhYXMbOibKvBnOvN5BIBhkicWiaQ/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURonkajEZKVB7CP1XJXFWzXjK6HgXx6SIrSHOPlnKR388zLS9Ln2fsGLxVOaW2HoQj91ntpbKzzprg/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURonkajEZKVB7CP1XJXFWzXjxfPicUP67107mW1ValDaXvyib7enqLKibyicRjrUSIicU7WBAP5NrRy7daw/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURonkajEZKVB7CP1XJXFWzXjqWTlONic0ePD7tibASJwl9XtDtK9TUNGyFnLmXfOwknOFXe6k4WfrKtg/640?wx_fmt=gif&from=appmsg)

我甚至都不用文字描述太多，应该都能看出来对动漫、影视、游戏领域冲击有多大吧？

特别是最后一个图。正常来说，你想做一个3维人物的动作，是需要绑骨骼、刷权重的，一堆恶心活。现在你直接拉个骨骼K个帧，渲一张人物的
T-pose静态图，AI一下，啪，完事了。。。

你可以想象到对这些行业的降本增效有多大？

而且，
Animate Anyone在人物的一致性和画面的稳定性上，表现极佳。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURonkajEZKVB7CP1XJXFWzXjZyl5CYTW3B6qFicMjgJEe0H35tGkNHAzk89FRrlOuBMSK9FT1JbnRHA/640?wx_fmt=gif&from=appmsg)

应该能看出来，这稳定性就挺离谱的。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURonkajEZKVB7CP1XJXFWzXjwK7SskJHZgVqlJqAibjh9cuHQsfcS4dNHd4gkyBXLFUfk8PAdibXytSg/640?wx_fmt=gif&from=appmsg)

但是。注意，但是来了。

阿里他吧。。。不提供项目demo也不提供代码。。。

他总是这样，甩了个宣传出来。。。然后就没有然后了。。。

所以虽然刷屏了，但是也就看看得了，有兴趣的可以收藏一下他们的Github，没事跟踪一下。万一这货出产品了呢？

地址：https://github.com/HumanAIGC/AnimateAnyone

二. 字节
MagicAnimate

你看这名字，你都能看出来，是
Animate Anyone的竞品了吧？

而且这玩意最骚的一点在于：

他，放，demo，了！

对你没看错，他娘的他放demo和代码了！

字节打阿里，哎你放宣传片是吧，那我就让大家直接上手用，哎我就恶心你。

当然享福的那肯定就是用户了。

说实话，这玩意效果也挺离谱的。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURonkajEZKVB7CP1XJXFWzXjlyzyZ3WvVwxCO0BaFVVy6k3iahU90J8HyOJMdeosXVhBctsibrwRQkzQ/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURonkajEZKVB7CP1XJXFWzXjJzjRefRq7RIoUehEicNyGg5NpOUZ8BSCAWMSAzUVgJkWMk6DvvH3rXQ/640?wx_fmt=gif&from=appmsg)

支持多人，但是咋说呢，面部和手部问题挺大，效果不如阿里的
AnimateAnyone。

再放一点网友的整活：

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURonkajEZKVB7CP1XJXFWzXjgnhibIMtJCz29OeZKvpoDd8eO6j6IBCBg1zTxPGpLSyRpgWsQTJtqTQ/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURonkajEZKVB7CP1XJXFWzXj3QR8aia4l1SPColSCFAfV36ic3bNavmWTUBG7o8FpfuZkjTiavDrLomEQ/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURonkajEZKVB7CP1XJXFWzXjBAGGmZNWv0wicc58pS5NxNOaRXHkzojK4mut200HicKRFxOeiaLtrW7Lg/640?wx_fmt=gif&from=appmsg)

优点就是代码放出来了，可能会有大佬去魔改，同时可以体验。

Kohya Tech是这么评价阿里和字节的这两个项目的：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURonkajEZKVB7CP1XJXFWzXjp0nfDHIlvP29wvxS5yOQnFF3QfJTjo4D5Eiar8aNJxlcb6E2E9eEGLg/640?wx_fmt=png&from=appmsg)

笑。

MagicAnimate的地址：
https://github.com/magic-research/magic-animate

Huggingface上的在线测试地址：
https://huggingface.co/spaces/zcxu-eric/magicanimate

三. 微软
GAIA

上周五的一个相当惊喜的项目，类似奇妙元、Heygen、D-ID，
让“照片说话”的东西。

但是整体效果非常惊艳。直接放图。

比如直接照片+语音驱动。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURonkajEZKVB7CP1XJXFWzXjuYI2p7W0GHibrxjanF8VZc5ianqjxiacJ6uOKvegRJ76xYZo9JFBMu2QQ/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURonkajEZKVB7CP1XJXFWzXjwaHpiaiaZgr34YUOqKIn74ibCz4YLAgCYic9ns1IicuHBDJDeicibh9xDYETQ/640?wx_fmt=gif&from=appmsg)

然后是直接照片+视频驱动。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURonkajEZKVB7CP1XJXFWzXjm0q85d6JMGfWc8iaDMGHNFibEI6cZD6h7ofAjQ5BYEQ8t7fURoWHEicjw/640?wx_fmt=gif&from=appmsg)

他们还支持控制头部，
通过用手工制作的姿势或从另一个视频中提取的姿势来
控制头部姿势吗，
同时嘴唇运动与语音内容同步。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURonkajEZKVB7CP1XJXFWzXjnJOiaSveESJOZqKbeD82KGebn4YM7wgb20YjwmeJcU3R3NzdEE6deGA/640?wx_fmt=gif&from=appmsg)

接下来是最屌的部分，他居然支持文字生成脸部情绪！

比如“悲伤”、“张开嘴”或“惊讶”等文字提示来指导视频生成。

悲伤：

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURonkajEZKVB7CP1XJXFWzXjo9KxgGQvhFj0GcdblJKsKaATzBdXLHdcjX83FpI8AWVzyeBl1gEa5Q/640?wx_fmt=gif&from=appmsg)

惊喜：

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURonkajEZKVB7CP1XJXFWzXjRDXXdjibOI54ZzdicUk5VUUia3oVcW1icQgpp0Aric5K34IIIu0zhudGSog/640?wx_fmt=gif&from=appmsg)

相当离谱的效果。你可以想象一下，以后再影视、短剧等等的应用场景里面，这种技术会有多离谱的应用。

当然，还有诈骗。

这是我目前看到的最牛逼效果最好的照片说话项目。但跟阿里一样，目前弊端就是：非公开。

但是在项目的主页上也写了：
Code (Coming Soon)，也就是代码即将推出。估计很快就能试用了。

项目地址：https://microsoft.github.io/GAIA/

写在最后

作为一名AI发烧友和创作者。

这应该是第一次看到AI视频类项目极其密集的喷涌而出，逐渐接近的未来，正在加速。

一天一变，这真不是空话。

你看AI，才能感受到，这个行业变化的有多块。

相连的未来，那个疯狂的未来，你已经能看见一些雏形了。

不要被时代甩下。

然后重返过去。

多看看，也并没有什么坏处。

。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
