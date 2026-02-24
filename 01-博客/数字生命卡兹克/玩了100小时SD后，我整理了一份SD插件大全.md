---
title: "玩了100小时SD后，我整理了一份SD插件大全..."
发布日期: 2023-08-23
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647659246&idx=1&sn=2bee60b7a172a6f42136f02a101e801b&chksm=f119cd75a368b6c5dab434556d6c4d9cfbe0c2563b8c046bb18cd2027625aebc428637e33a5d"
---

## 摘要

**1) 一句话总结**
作者整理并分享了一份Stable Diffusion（SD）插件大全，重点介绍了用于图像控制和AI视频制作的四个核心插件，并提供了基础环境推荐与插件安装指南。

**2) 关键要点**
*   **资源获取**：作者整理了包含插件介绍、名称和安装地址的文档，可通过其公众号私信“SD插件”获取。
*   **基础环境**：推荐使用“秋叶”SD整合包（私信“SD”获取），该包已自带汉化、ControlNet、WD1.4 Tagger等主流功能。
*   **核心插件 - ControlNet**：实现SD图像生成自主可控的关键插件，是当前SD插件生态的基础。
*   **核心插件 - Prompt-all-in-one**：提升效率的提示词插件，支持直接输入中文并自动翻译为英文，且内置大量提示词。
*   **核心插件 - EbSynth**：用于AI视频制作的核心插件，能够生成自主可控、不抖不闪的视频效果。
*   **核心插件 - Deforum**：用于制作“瞬息全宇宙”风格的视觉效果及超级转场的视频插件。
*   **安装方法**：推荐在SD界面内直接搜索安装（路径：扩展 -> 加载扩展列表 -> 搜索插件名称 -> 点击安装）。
*   **后续计划**：作者计划推出基于SD的AI视频制作系列教程，涵盖真人转动漫、动漫转真人等玩法。

**3) 风险/不足**
*   **Deforum插件操作门槛高**：作者明确指出Deforum在实际使用中体验较差，其位移参数设置非常复杂（原文称“位移简直不是给人类写的”）。

## 正文

最近AI视频到了空前的热度，特别是京东的一个好物季视频更是直接炫技炫到飞起。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURpJTKibib4lFpIPOS71J2Rh0fO1Cqce2ylZPNicDha13723TA4C9pSn0J2m9TdwkP2ddJkNOsAogQjBg/640?wx_fmt=gif)

就en炫。

但是确实牛逼，在镜头语言上太秀了，毕竟AI只是一个效率工具，我觉得对于职业设计师来说，跟C4D、Blender之类工具我觉得没有本质区别。

在跟小伙伴聊这个视频时，发现很多人都还不知道怎么做的。

我说这就应该就是SD的插件Ebsynth还有Deforum做的呀。

小伙伴懵逼了：啊？SD还有这么牛逼的插件？

另一个小伙伴：啊？SD还能装插件？

我：啊？

后面我确实打算开一个AI视频的系列，来具体聊聊各种基于SD的视频玩法了，比如真人转动漫、动漫转真人之类賊稳定的方法，还有
Deforum的那种瞬息全宇宙的效果。

但在之前，我决定先做一个SD的插件大全，先把我用过的，觉得好用的SD插件安利给大家，都先装上，这是后面玩AI视频吃饭的玩意，没有这些插件怎么玩嘛！

而且还有很多稀奇古怪但是很好用的插件，比如在SD里用PS，比如直接在SD里生成骨骼。。。。还有解放生产力的中文提示词插件等等。

老规矩，文档不定时更新，对着公众号私信“SD插件”就有了。里面带了插件介绍、名称、安装地址。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp9P3BcvEpibDNicn4dicCjA0YwT2zGwJhrX0ibr3ed2iaK9KicKyBQUFrmEgZQV4YR3jaS4RQeCvqzqOJw/640?wx_fmt=png)

另外说一下，我用的是秋叶大佬的SD整合包，一些主流的汉化、C
ontrolNET、WD1.4 Tagger标签反推啥的已经自带了。我会在文档中标明，有“秋叶自带”标签的就不需要安装了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpJTKibib4lFpIPOS71J2Rh0fdvNWVgTcIY3tr6etqmPtyYFz3gnB84VcsW0YaVyGic9SltibQciaxkStQ/640?wx_fmt=png)

秋叶大佬的SD整合包如果没有的话，对着我公众号私信“SD”就有，链接自动发你。

我挑4个我觉得最重要的插件说下。

1.ControlNET

让SD自助可控的巨爹，让SD跟MJ平起平坐的推手，让SD插件生态原地起飞的神。

简单的说，没有ControlNET，就没有现在的SD插件生态。

曾经写过一篇文章，感兴趣的直接去看那篇文章就好，不多赘述了。

AI绘图傻瓜指南 - 5分钟教你用ControlNET让妹子摆出你想要的pose

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp9v2UBMCadDfYp9gUh6g33F8Mia0chLqonAHbQqzspUPr5oK6Oa9vjod6JwrbM5Ex7zRGJAdiagYiaA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

2.P
rompt-all-in-one

属于是救了我老命的一个插件，我的英语奇差无比，很久以前写Prompt都是打开Google翻译，写完，再复制粘贴到SD。

自从用上
P
rompt-all-in-one
之后，手也不疼了，脚也不酸了，脑子也不抽抽了，直接写中文，敲个回车，自动变成英文，轻松加愉快。

而且他还给内置了N多提示词，它不香嘛！

老外看了都眼馋。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpJTKibib4lFpIPOS71J2Rh0fic07hFGfIic2wTia47DSVSVYU9ykBFnwShvWrK3ibgSytWWia8A9LXkkzoQ/640?wx_fmt=png)

3.EbSynth

媲美ControlNET的另一个大爹，挽救SD的AI视频于水火。

让AI视频也终于来到了自主可控、不抖不闪的时代。

神中神。

后面写SD的AI视频的时候，也会详细的去写。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURpJTKibib4lFpIPOS71J2Rh0fMicyYdZIdFgDGnc3ibj0H89f1fSyernSFN7ibLokzia2pW3CAvKQib9ib9Jg/640?wx_fmt=gif)

4.D
eforum

火炸了的做类似瞬息全宇宙效果的插件。

一张图片直接进入一个光怪陆离的世界。

超级转场必备。

但是说实话，真用起来也挺特么的恶心，那个位移简直不是给人类写的。。。

后面细讲。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpJTKibib4lFpIPOS71J2Rh0fpaLJdRqvfY32xNSDJjffJljibyuspO1H7ia59afbpjPxicFv4J9gicrCKA/640?wx_fmt=png)

插件安装

插件的安装方法，主流的有两种，一种是从网址安装，一种是直接搜索安装，都行。

不过我还是比较推荐搜索安装。

打开SD，点击右上角扩展，点击加载扩展列表，然后在搜索框中搜索你想安装的插件名字。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpJTKibib4lFpIPOS71J2Rh0fhq59XKPKqFC2C2FxzyOLqiaOv0Pe7tuD6eTWBcVZUOW46TVGLeImSmA/640?wx_fmt=png)

比如我想安装一个C站插件
Civitai Helper
，我就直接在搜索框中搜索。

搜到以后，点击安装即可。看到这行提示，就安装成功了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpJTKibib4lFpIPOS71J2Rh0fFe0E7WbFRYuBRfswnjjB9KkpunkHrboib0pujgicUDukYe5xicjZDg0GQ/640?wx_fmt=png)

以上。

插件大全我整理好了，私信
“SD插件”即可。

后续我会着重笔墨来聊聊基于SD的AI视频制作~


## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
