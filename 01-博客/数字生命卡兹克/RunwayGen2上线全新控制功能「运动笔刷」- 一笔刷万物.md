---
title: "RunwayGen2上线全新控制功能「运动笔刷」- 一笔刷万物"
发布日期: 2023-11-21
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647660448&idx=1&sn=1b3f83e1325c0ccdb54f6c688498adb0&chksm=f1679a86a770d4a39ce9860b9db0399df7e1d138c3e025d40e6569380a188cd25516453305e5"
---

## 摘要

**1) 一句话总结**
Runway Gen-2上线了全新的“运动笔刷”功能，允许用户通过涂抹框选特定物体并设置三维方向参数，从而实现对AI视频局部物体运动的精准控制。

**2) 关键要点**
*   **功能机制**：用户使用“运动笔刷”框选画面中的部分物体后，可通过调节左右、上下、前后（拉近推远）三个维度的参数来控制该物体的运动。
*   **解决痛点**：改善了此前AI视频生成语义理解差、缺乏局部控制、过度依赖随机生成（Roll）导致消耗大量资金和额度的问题。
*   **组合使用**：该功能可以与全局摄像机运动以及提示词（Prompt）叠加使用，以实现更复杂的运镜和细微动效。
*   **实际效果**：能够成功实现火箭升空、海中纸船航行、水滴进舱及特定变焦等以往难以精确控制的动态效果。
*   **行业影响**：AI视频可控性的提升使其成为专业影视从业者更高效的工具，越可控则创作上限越高。

**3) 风险/不足**
*   **轨迹控制缺失**：目前该功能仍被作者视为“半成品”，仅支持基础的上下左右及前后移动，尚无法像微软相关研究那样通过手绘箭头来控制复杂的运动轨迹。
*   **成功率与瑕疵**：生成的成功率依然不是百分之百，且部分生成画面（如火箭升空时的云层）仍存在轻微失真的情况。

## 正文

人麻了，刚发完四万字的长文

四万字长文带你了解为什么超级大佬们都如此警惕人工智能？Ilya到底在害怕什么？

回到家中，一边在X上吃着“草台班子”OpenAI的瓜，一边准备开把极地大乱斗然后11点赶紧睡觉。

OpenAI的瓜刷着刷着，我就刷到一条Runway的动态：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpz7ZqjX9dN6hSzE15iczia1h5rzIWvJsL19fZeKRicns3icrUkHCCAXWF0pibuYtQXOzMibuYJ1foy8pkA/640?wx_fmt=png&from=appmsg)

...

那还能怎么办？爬起来肝呗。

先放官方视频。

一笔刷万物。

精准控制运动物体。

从8月份开始，我就在各种场合表达过，AI视频现在最痛苦的点，是控制性极差。Gen2的语义理解本来就差，还几乎没有任何可控性，只有那几个镜头控制，剩下全靠roll。

但是你roll的，全是白花花的银子啊...

所以AI视频，急需类似AI绘画中的ControlNET类似的功能，增强可控性。

而这次更新的运动笔刷，就是基于此之下的产物，只不过就我看来，目前在“可控”一词上，还是个半成品，真正可用级别的控制，我认为应该是基于运动笔刷的轨迹控制。

微软之前有一篇关于轨迹控制的论文，我觉得非常认可这个路线：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpz7ZqjX9dN6hSzE15iczia1h3xsCSFibB51QyicOianDkMbTfYQnrlJImg0ggNfib47L3IW5rkvVqjTGiaA/640?wx_fmt=png&from=appmsg)

他的项目演示大概是这样的：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpz7ZqjX9dN6hSzE15iczia1hEibiclkwu20Po49CBZ6X4LBwUs1uhO9DK1tFua5qp5vk4wSz3KPnVBFA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpz7ZqjX9dN6hSzE15iczia1hsTugHgF54tHelNdAZ9at8XvEO8gib0SoGwR1o0Buq2dOOkwETvPc4oA/640?wx_fmt=png&from=appmsg)

直接手画一个箭头，直接控制物体运动轨迹。

而现在Gen2的运动笔刷，还不能够控制运动轨迹，只能框选部分物体，做上下左右以及摄像机的拉近推远运动，复杂的还是不太行。

![](https://mmbiz.qpic.cn/mmbiz_gif/YicUhk5aAGtBwE1ib7gIY5rBEHIrrT9KvoJATyHl2icple7WibDQ99JG7je8nYiaia6qVQC7kIOCsToXamSJlsXfichCQ/640?wx_fmt=gif&wxfrom=13&tp=wxpic)

所以我说，还是目前我心中的可控性的半成品。

但是有比没有好，现在已经是AI视频可控进化的一大步了。

打开Runway，可以看到页面上已经多了一个Montion Brush，这就是运动笔刷。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpz7ZqjX9dN6hSzE15iczia1hL0MZ1F92aVsFMBbXLlDnWOyqVsSaydfOkWMChNGg70uIAKlr18xgUw/640?wx_fmt=png&from=appmsg)

我随手扔了一个火箭上去，把我的火箭用笔刷刷了一波，再随便叠了个摄像机运动。
然后把上下运动拉到了8，毕竟希望火箭升天嘛。

三个参数，分别是左右移动，上下移动，向前向后移动。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpz7ZqjX9dN6hSzE15iczia1hXZ7041WHOlq8vhJzoG33Fod4Mea84huIy9FSE5j1WX8FPzp9d7gmaQ/640?wx_fmt=png&from=appmsg)

看看效果。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURpz7ZqjX9dN6hSzE15iczia1hHeTCLToFHoiaI2MuwjV4I01qQCQcotFM5TZyeHEVw3RyOUdHD11RBwg/640?wx_fmt=gif&from=appmsg)

。。。我的火箭终升天了，虽然两边的云还有点点假。。。但是，至少真的能升天了！！！鬼知道我之前做《三体》的时候这个镜头我roll了多少遍，花了我多少的额度！！！

海中航行的纸船。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURpz7ZqjX9dN6hSzE15iczia1hcF0icb5n9G2jawDItCuibG3KQxcVnf2HJ7SH4DQt6BNQQY7PoGiaHSMibQ/640?wx_fmt=gif&from=appmsg)

进舱的水滴。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURpz7ZqjX9dN6hSzE15iczia1hEfN0bYxOUCZ3k5ricNReblpaBtg1ibqqR5VEy5ia2nE39jaIiaMNCGibtHQ/640?wx_fmt=gif&from=appmsg)

还有这种变焦（笑。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURpz7ZqjX9dN6hSzE15iczia1hEI085len71sbHymvKI1wKcDLhuGP85nclr3yaH4JHtXGibJPaYsgVOQ/640?wx_fmt=gif&from=appmsg)

好些个以前做不了的效果，现在都可以实现了。
以上，随手测试的几个例子，还有更多的花活，时间有限，没玩那么多，仅抛砖引玉。
但是肉眼可见的，很多有趣的运镜都可以实现了，还有一些细微的动效，也可以小范围笔刷+Prompt去怼，虽然成功率依然不是百分百，但是至少比以前完全束手无措好。

随着AI视频的可控性越来越强，真正专业的影视从业人员，应该会越来越得心应手。

毕竟，AI这玩意，永远都是真正专业者的杠杆，越可控，上限越高。

人间一天，AI一年。

上次Gen2更新才多久啊。

真的太快了。。

努力跟上这个时代吧。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
