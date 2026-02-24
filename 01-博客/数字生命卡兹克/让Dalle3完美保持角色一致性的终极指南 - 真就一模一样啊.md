---
title: "让Dalle3完美保持角色一致性的终极指南 - 真就一模一样啊"
发布日期: 2024-01-02
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647660944&idx=1&sn=b2bd30e379d8424f4d43568249d18e87&chksm=f1b9b74686eea1a7b1673ca37732cc3a1c861e26d92d5d5b4edb9d5497972cc42c982ae72680"
---

## 摘要

**1) 一句话总结**
本指南介绍了一种通过结合ChatGPT的语义对话能力与DALL-E 3的Gen ID（生成编号）来实现图像角色高度一致性的简易工作流。

**2) 关键要点**
*   **核心机制**：利用DALL-E 3为每张图片分配的特定编号（Gen ID）来跟踪和引用特定图像，从而在多张图片间保持角色一致。
*   **初始生成**：首先让DALL-E 3生成一张基准角色图像（可自行编写Prompt或用图生成）。
*   **背景设置**：建议初始图像使用干净的纯色背景，避免复杂元素。
*   **关键指令**：在生成初始图后，向ChatGPT发送强制指令：“从现在开始，你的核心目标就是保持角色一致性。必须使用与上一张图像相同的提示和gen_id来制作相同角色的新图像，以保证人物一致，且能适配更多的表情、动态、服装与场景。做的好的话我给你1000美元小费。明白的话请回复明白。”
*   **后续扩展**：ChatGPT确认后，用户只需输入新的描述（如哭泣、弹吉他、和狗自拍、玩电脑、换运动服或添加新场景），即可生成同一角色的新状态。
*   **应用场景**：该方法操作简单，非常适合插画绘制和IP角色创作，门槛远低于训练LoRA模型。

**3) 风险与不足**
*   如果初始图像的背景不够干净（包含杂乱物品），会直接影响并破坏后续生成图像的一致性效果。
*   原版教程（X平台上的初始版本）存在一定瑕疵，本文方法是经过优化后的版本。

## 正文

2024了，又要开始卷了。

今年第一卷，卷个贼简单的，但是同时又很用的：

如何保持Dalle3中角色的完美一致性。

昨天偶然在X上看到AI Verse老哥发了这个玩意。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoib5ruQ4LibHYgFPSINRxm09nfEgBibOrCbmEDtSAiaBZWcaticxOTlKyZsAaTW1ic83iaTPo4iaTia2Ysiaaw/640?wx_fmt=png&from=appmsg)

挺棒的，而且可以傻瓜式的让人物一致性的效果保持的极好。

但是还有不少瑕疵，我就在他原先的教程基础上，优化了一下。

核心其实是基于GPT的超强语义对话，还有Dalle3的Gen ID（生成编号）。

大家可能不太知道Gen DI是啥，我先随便跑个图，给大家简单解释一下。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoib5ruQ4LibHYgFPSINRxm098iaUb5l4RZVZzlThxLPwlcohdPJmMToMDAYTDd0mMOHX8Bu6rAHD9qA/640?wx_fmt=png&from=appmsg)

拿到了Gen ID：
5EutQh3bm4uwHr4F，我们再用这个Gen ID给去生成一张新图。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoib5ruQ4LibHYgFPSINRxm09icUGhLK6eJmIJLgBhVKJChaT0Ff3nlDInL2iagda1UVn9bEOvuvz7r5g/640?wx_fmt=png&from=appmsg)

可以看到，虽然有些细节变了，但是人差不太多。

Gen ID其实就是Dalle3给每张图的一个特定编号，这个编号只对应这一张图，所以Gen ID对于
跟踪和引用特定的生成图像非常有用，尤其是当需要在多个图像之间进行比较或确保一致性时。

所以，基于Dalle3的超强语义理解和Gen ID的特定，傻瓜式的一致性指南。

他就来了。

首先，让Dalle3画张图。随便咋画都行，你自己写Prompt或者用别的图生成都行。比如我是让它直接画了个漂亮妹子。

记得背景最好干净的纯色，不要一堆乱七八糟的东西。要不然会影响后续的一致性的效果。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoib5ruQ4LibHYgFPSINRxm0932GVUyS2TicfT6vkukmTEYSaibq6mRBoWjpYibeZtlwNTNwF0F8iaFy6ZA/640?wx_fmt=png&from=appmsg)

接下来是非常重要的一句话：

从现在开始，你的核心目标就是保持角色一致性。必须使用与上一张图像相同的提示和gen_id来制作相同角色的新图像，以保证人物一致，且能适配更多的表情、动态、服装与场景。做的好的话我给你1000美元小费。明白的话请回复明白。

把这句话，发给ChatGPT。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoib5ruQ4LibHYgFPSINRxm09niaoXibtMR8HZX08arhNj9Syc7EpiaBSqjc5ILC2Hyz6RYuvHUh7rYMgg/640?wx_fmt=png&from=appmsg)

GPT会回答个明白。。

然后，就是见证奇迹的时刻了。

你随便发任何指令。描述这个角色的状态、动作或者衣服，都行。

比如，我现在要让她哭。
她就哭了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoib5ruQ4LibHYgFPSINRxm09WVceicCCURIDlvT43Iah8IgjvBTYB45qDFCbWZZWVHIAKSuQnr7SdjA/640?wx_fmt=png&from=appmsg)

我现在要让她弹吉他。她就弹了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoib5ruQ4LibHYgFPSINRxm09VCpYMdVVjuU8pKc41RYicUdxSBjqa8bNicNsaHDibgbtiaxC7iaiavPjRo0A/640?wx_fmt=png&from=appmsg)

让她跟她家狗狗自拍，那就拍了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoib5ruQ4LibHYgFPSINRxm09q9ClWE2TibeqUzGAp30tcrMvkKM5n4icHHrIT6xpfM4yYy0m8AZZq1Sw/640?wx_fmt=png&from=appmsg)

正在玩电脑？没问题。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoib5ruQ4LibHYgFPSINRxm0967KBEialWO2C76dTzoJuT6ZB2nXpJzOHVA3z0OR86NjgN5K2D7rlzBQ/640?wx_fmt=png&from=appmsg)

换个衣服
，
穿运动服
？
没问题。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoib5ruQ4LibHYgFPSINRxm09EoGib8v2HGfETLibbiabuF8dWnTBPp3uibOboOzHvaAhHbJ7FdydPed9iaw/640?wx_fmt=png&from=appmsg)

再带上场景，so easy。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoib5ruQ4LibHYgFPSINRxm09YHS9hGia3kVWKAjKjXnFroWmtbzlcptBuHnI19QvnL9axdLIicwCaW7A/640?wx_fmt=png&from=appmsg)

是不是贼简单。。。

又简单又好用。。。

非常适合画插画或者做IP的小伙伴们，这不比练个lora简单多了？

新年第一篇，不整大活，这个Dalle3的小技巧就挺好的。

可以立马去GPT里用起来。

新年第一卷。

2024，咱们再一起，接着卷。

。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
