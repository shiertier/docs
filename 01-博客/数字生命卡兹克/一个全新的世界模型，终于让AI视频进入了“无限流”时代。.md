---
title: "一个全新的世界模型，终于让AI视频进入了“无限流”时代。"
发布日期: 2026-01-14
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647678727&idx=1&sn=4c692dffc1554a5777eb600b95f97a41&chksm=f18f7cb63f9db61248c2d8f6f986b298973a27d9abc331f1dd140df7a1a9f97ab7d9b4434994"
---

## 摘要

**1) 一句话总结**
AI视频公司PixVerse发布了下一代实时世界生成模型PixVerse R1，支持用户通过实时输入提示词（Prompt）无缝干预剧情，从而生成无限、连续的视频流。

**2) 关键要点**
*   **核心功能**：PixVerse R1能够进行无限、连续的视觉流式传输。在无干预情况下AI会自动推演剧情，用户也可随时通过文本或语音输入Prompt改变视频走向。
*   **响应速度**：用户输入Prompt后，系统大约有2秒的延迟即可让视频画面随之发生变化。
*   **行业定位**：文章将PixVerse R1归类为世界模型的“第四个方向”（实时视频生成），与Google Genie 3（视频类动态世界）、World Labs Marble（3D交互世界）和英伟达Cosmos（物理仿真基础模型）并列。
*   **测试平台**：官方已上线实测Demo（realtime.pixverse.ai），目前提供6个预设模板（如卡通、1944、赛博朋克等），并支持用户完全自定义初始世界观和Prompt。
*   **交互方式**：除文字输入外，系统支持语音模式，以解决打字速度跟不上剧情演进速度的问题。
*   **未来愿景**：该技术展示了未来娱乐形态的可能性——影视和游戏不再是固定时长的文件，而是可以由观众通过交互改变走向的流动时间线。

**3) 风险/不足（基于原文明确提及）**
*   **算力成本极高**：由于“太烧算力”，目前Demo处于邀请码内测阶段，且单次体验窗口被严格限制为最高5分钟。
*   **生成质量有待提升**：作为一个实验性的全新物种，目前的画面生成质量仍有很强的进步空间。
*   **存在交互延迟**：每次输入指令后，剧情变化前约有2秒左右的延迟。

## 正文

昨晚夜里快12点，AI视频公司PixVerse毫无预兆的发了一个项目。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURria7axBjw2O7QImicLcxEtRB6SCI4f3cWOA6QdKUicBTX4EJia38hBwdhCdKcC0OO31b79ibQFeT3EL6A/640?wx_fmt=png&from=appmsg)

PixVerse R1，下一代实时世界生成模型。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURria7axBjw2O7QImicLcxEtRBmTpxiahjv5S3ibnXicySpu4kqR2NN3fAmAVhSf7gbryHg5zIwh0poQXkg/640?wx_fmt=png&from=appmsg)

这玩意你看文字，可能不是很好理解，我直接放一个官方的demo视频，大家的感觉应该会强一些。

上面是视频，下面是实时输入的Prompt。

整个过程，都是AI一直连续不断的生成视频，你可以在过程中用Prompt修改视频的进程，比如开头第一句Promtp，是士兵躺在雪山上，然后躺着躺着，你就输入了一个Prompt，说一只黑乌鸦飞过，飞完了以后，这个视频准备自己去做一些决策了自己去演后续的剧情了，你又有了新想法，于是，你又发了一段Prompt过去：

巡逻队发现了士兵。

每次你输入Prompt延迟2秒左右之后，你会发现，这个世界的剧情，就随着你的不断输入，不断的进行变化。

如果你不给Prompt干涉的话，他会自己一直演下去，最长的时间，在官方的技术报告里，写的是：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURria7axBjw2O7QImicLcxEtRB7GwM5FzYYaL6PnAxHVnLKcWSJiaIvvlhkULxHt4EnicdQ9VDnibF2QHnA/640?wx_fmt=png&from=appmsg)

无限、连续的视觉流式传输。

PixVerse将其称为，实时世界生成模型。

网址在此：https://pixverse.ai/en/blog/pixverse-r1-next-generation-real-time-world-model

项目报告我也看了一下。

还是蛮有意思的。

但是在实际给大家看这个项目之前，我觉得还是需要我们先统一一下，大家对于世界模型的定义，这样才更好去聊。

毕竟，世界模型这个词，这一两年，出现的太多了，以至于大家，好像完全不知道世界模型到底指向的是什么了。

我心中的世界模型，因为这一波23年到25年的生成式浪潮，所以其实是一个非常泛的定义：

能用一个可持续的内部状态，去预测世界接下来会怎样变化，并且能被交互和验证。

这也是为什么同一个词，经常会同时被拿来形容三类东西：

视频生成模型、可交互的生成世界、面向机器人和自动驾驶的物理仿真基础模型。

只要满足这个条件的，在目前的大众语境里，都可以被统称为，世界模型。

目前已有的世界模型代表，基本可以用几个项目，代表3个方向：

1. Google的Genie 3和Odyssey。

以Genie 3举例子。

我之前也写过文章：
Google重磅上线通用世界模型Genie 3 - 此即未来。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr0HOMXq3WKOds1gqhQkuPFoCDFtBNtaRjdjtuRXbial9wlA2ZYPA4SIwHMMQpvAIzNWYpXYJ6o63g/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=0)

大概就是给一个文本提示，就能生成你可以实时导航的动态世界，24fps，720p，一致性可以维持到分钟级。

我极度极度看好世界模型，之前也极度的看好Genie的项目，我曾经甚至说，没有把Genie 3写火，让很多人关注到这个项目，是我们这些做AI内容的不专业和失职。

它代表的，是一次生成，然后可以在里面操控方向进行简单交互的视频类动态世界模型。

2. 李飞飞World Labs的Marble和
混元3D世界模型
。

以Marble举例子。

一个以三维空间智能为中心的多模态世界模型，

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURria7axBjw2O7QImicLcxEtRBJ04esL662eK9A1o9uicKNibLwib9vgvbXow2c4VwI9D8dnuZTL95SH5pQ/640?wx_fmt=png&from=appmsg)

World Labs给Marble的定义重点在3D，世界模型需要重建、生成、模拟三维世界，同时允许人和智能体在其中交互，这类路线的核心难点变成3D 表示和空间一致性，视频画面只是表层输出。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURria7axBjw2O7QImicLcxEtRB8ibgygeiaDP7FY9YQodycb4ZOfnW9BveiamniaficWfcnSvuXnfZGQFvvEQ/640?wx_fmt=png&from=appmsg)

它代表的，是一次生成，然后可以在里面进行简单交互的3D类世界模型。

3. 英伟达Cosmos。

一个非常纯粹的，为物理AI服务的世界基础模型平台。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURria7axBjw2O7QImicLcxEtRBxGg9fF11ZfBibibgca7Ig5GcQx7upMp3QToa5JnAhq5EGaIia5anax8dA/640?wx_fmt=png&from=appmsg)

Cosmos的定位是面向自动驾驶、机器人、视频分析agent的WFM平台，强调数据处理、tokenizer、guardrails 和把世界模型用于高保真、物理相关的合成数据与后训练。

这条路线的评价标准更偏物理正确性、可控性、可用于训练与验证。

它代表的，是为训练具身智能和自动驾驶而生的世界模型。

这几个方向，基本就是现在世界模型方向的主流。

现在，相信大家也对世界模型，有了基本的差异化了解了，其他这玩意还是比较泛的，并没有一个特别明确的定义，路线又挺多，场景也挺多。

而这次，PixVerse的这个新的项目，为世界模型，补上了第四个方向，也是我自己过去一直期待的方向。

实时视频生成。

他们也上线了一个可以实测的demo版本可以玩。

网址在此：
https://realtime.pixverse.ai/

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURria7axBjw2O7QImicLcxEtRB4sRL6eL46iaLCRFKr5ZY1aRiclTdoVjrKXWNHWpHwK3NXjKSMic2Q2Law/640?wx_fmt=png&from=appmsg)

里面已经给了6个预设的模板，感觉后面还会更新更多。

我点了一下，发现，要邀请码。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURria7axBjw2O7QImicLcxEtRBRbxuOOavibCdqrgTPJcTCI3AOOsYYk76OI6bYKW5BeqM1B32yEVA4icw/640?wx_fmt=png&from=appmsg)

我就跑去问PixVerse的朋友，问他们为啥这年头了还要搞邀请码这事。

他们是这么说的：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURria7axBjw2O7QImicLcxEtRB2iaIVibgXSeTh8BzOvd3gQvicBwojv1dalTmCMYxFbMdBEEzbWC4DXtnA/640?wx_fmt=png&from=appmsg)

不过我还是舔着老脸，深夜要了一个邀请码过来。

实际去体验了一下。

这个体验的结果，我说实话，可能是我最近，体验的最快乐的产品了。

你们看完就知道，为啥快乐了。。。

拿到邀请码进去以后，我先随手点了最后一个那个卡通的模板。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURria7axBjw2O7QImicLcxEtRB1KLmx1aOgbkZNgn0vCdwAsmBSmqiaHxxnsnbxqZFPZLicL7lCbWlo09g/640?wx_fmt=png&from=appmsg)

在页面上，你就会发现，有一个倒计时，大概意思就是，你只能在这个live里，体验五分钟，体验五分钟之后，就得新起一个窗口重来了。

核心原因，还是这玩意太烧算力了。

我点了进去。

一进去，这魔性的音乐，噔噔噔噔噔的，差点给我洗脑了。。。

然后，一双脚，就开始瞪着跑起来了。

我一定要给你们看看这个抽象的画面，我真的，凌晨2点多，在家里笑的嘎嘎的。

说实话，我硬生生看着小人跑了2分钟，我愣是一句话没发出去。。。

因为实在是太欢乐了，我就一直看着它跑，跑着跑着2分钟过去了，我都忘了我是可以随时更改剧情的。。。

然后，我又点开了他们那个1944的模板，疯狂的开始互动，这一次，我在家里笑出了猪叫，特别是最后，我让它从黑洞中穿梭，尽头是卡皮巴拉的时候。

我感觉我的大脑褶皱都抚平了。

真的，非常坦率的讲，PixVerse R1作为一个实验性的全新物种，在生成质量上，肯定还是有很强的进步空间的。

但是，作为一个全新的物种，它的实时生成，他的随时可交互。

这个快乐，如果不亲身体验一下的话，你是绝对感受不到的。

那是一种，你完全未知的快乐，但是你就是期待着，下一秒，他会发生什么。

你就是会期待着，你的那句话，会对这个屏幕里的小人，产生什么样的影响。

还有这个赛博朋克，也很好玩。

真的，我们看了太多太多套路话的故事，那种千篇一律没有新意的故事，这种实时生成的AI，由AI所造出的世界。

好像，会更让我惊喜，会更让我期待。

更别提，我还能用嘴，来指挥后续的动作了。

这里我强烈建议大家使用这个语音模式。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURria7axBjw2O7QImicLcxEtRB1dMQvQqGozq1r1n7GvJlQhxdCvVTbuSpPUud1dgHQmzkd2K0TjGdAg/640?wx_fmt=png&from=appmsg)

相信我，你在玩的时候的卡点，可能是是打字速度跟不上你想要的剧情速度。

除了这些预设好的模板之外。

你当然，也可以去自定义。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURria7axBjw2O7QImicLcxEtRBPZfV44W91u0uA90dELXKglHr0ibDDTZngzibKbTC5kGefvySjmx58amg/640?wx_fmt=png&from=appmsg)

第一个想到的demo，其实就是一个我还满喜欢的游戏，无人深空，因为这个游戏，跟实时生成实在太契合了。

我直接直接发了个起始Prompt过去：

这是一个正在运行的科幻探索类游戏画面，不是被摄像机拍摄的影像。
画面以稳定的游戏视角呈现，不存在摄影机跟随、推拉或电影化运镜。世界由程序生成并持续运行，角色只是世界中的一部分，画面变化来自世界状态的演化。

然后，这个探索，就开始了。

非常的酷非常的有意思。

还有，街霸PK。

真的，太好玩了。

好久没有用AI，这么纯粹的快乐了。

我非常开心，能见到我们未来的娱乐形态，可能又会多一种非常好玩的方式。

也许再过几年，所谓的电影、综艺、游戏，根本就不再是固定时长的文件，而是一条条永远流动着的世界时间线。

创作者给一个起点，给一些世界观设定，剩下的交给世界模型自己往前长，观众进来以后，用一句话、一个表情、一次选择，把剧情轻轻拽偏一点。

所有人看到的，都是同一个宇宙，但却是不同的一条时间支线。

虽然让人人创造内容，是一种奢望。

但，在人的本源里，我觉得，每个人还是享受，创造的乐趣的。

这一天。

可能是AI模型历史上，会标红的一页。

很新，很有趣，但同时。

也很未来。


wzglyay@virxact.com

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
