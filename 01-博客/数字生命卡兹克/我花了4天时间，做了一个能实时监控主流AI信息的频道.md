---
title: "我花了4天时间，做了一个能实时监控主流AI信息的频道...."
发布日期: 2023-09-19
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647659742&idx=1&sn=e0399ba289ca362dcbc56d93f8c5e7b3&chksm=f19e168657b7a5ad5bfac335d5a0e10d5471ef5debcd1eddb08d0d46b00dacf5f0956161bfde"
---

## 摘要

**1) 一句话总结**
作者耗时4天搭建并永久免费开放了一个基于Discord的全自动AI资讯实时监控频道，聚合了14个主流AI产品的官方公告与12个权威博客更新，以解决二手虚假消息泛滥的问题。

**2) 核心要点**
*   **开发初衷**：为避免被虚假的二手AI消息（如伪造的Midjourney V6更新）误导，作者决定建立一个只看官方一手消息的自动化监控渠道。
*   **方案调整**：最初计划抓取Twitter建立RSS源，但因Twitter生态封闭抓取困难，最终选择基于各大AI产品活跃的Discord平台搭建频道。
*   **产品动态监控**：集成了Stability、OpenAI、Leonardo、Runway、Pika、Wonder Studio等14个主流AI产品（涵盖4大模态）的Discord官方公告，实现自动推送。
*   **博客文章同步**：通过自制RSS源，实时同步了Google博客、OpenAI博客、英伟达博客、量子位、极客公园等12个国内外主流AI资讯博客的内容。
*   **获取方式**：该Discord监控频道向所有人永久免费开放，用户在作者公众号私信“D”即可获取邀请链接。
*   **辅助工具推荐**：针对频道内的英文资讯，作者建议使用网页版Discord，并安装Tampermonkey（篡改猴）插件及“翻译机”脚本，以实现英文内容的自动中文翻译。

**3) 风险与不足**
*   **数据源获取限制**：Twitter平台过于封闭，难以直接抓取信息制作RSS源，导致放弃了该平台的数据集成。
*   **语言阅读门槛**：监控频道内包含大量英文资讯，直接阅读存在语言障碍（需借助第三方翻译插件解决）。

## 正文

故事是这样的。

前几天在某些群里，看到这么一个视频。

突然这两天一些自媒体啥的就沸腾了，说MJ V6来啦。。。直觉上我觉得不可能，于是翻了半天MJ的discord、twitter，发现MJ官方从来没发过这玩意啊。

最后找了半天，在某twitter老哥下面发现这么一句话。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrtDRORialAR8szJBcV6xRLYOjxxN6TCBUbG3FYSTn7S31r3zzDGVwTw4K1cLIoRKbWR4HVW4lKGAw/640?wx_fmt=png)

。。。

属实是被二手消息恶心坏了。

于是，我突然有一个想法，我干脆自己做一个监控吧，只看所有的官方一手消息，比如MJ、Runway更新，比如OpenAI-Blog更新等等，把这些官方消息直接实时推送到我这。

以保证我的消息的准确性、及时性、领先性。

同时全自动化监控，让我可以彻底躺平。

说干就干。

最开始自己的想法是做一个巨型RSS，直接把官方的的所有twitter都集成到一个RSS阅读器里，但是Twitter实在太特么封闭了，扒起来过于恶心。。。。。

于是我想到了另一个主流AI产品们都在运营的地方。

Discord。

反正这些产品们没事都在Discord里面发更新，比如MJ。老Discord选手了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrtDRORialAR8szJBcV6xRLY2tyciarqaUpygnhapq7rIW66JlwTiaTrIUspLf0vtgUibq6XgkdzEvJUw/640?wx_fmt=png)

我干脆直接自己建立一个频道，把这些产品的Discord的公告全部集成到我自己这不就行了哈哈哈哈哈哈，他们只要一发公告，我这自动就推送了。

于是，我立刻监控了Stability、OpenAI、leonardo、runway、PIKA、wonder-studio等等，
这些产品只要一发公告，我都能第一时间知道
。

但是只看这些产品的公告信息，那属实也是有点单调...

要不然
把我常看的各大文章也都用RSS实时同步过来
？这样也省的我没事去他们官网翻，看看他们有没有更新了。

让躺平和全自动进行到底。

于是，我又一个一个做RSS源，把Google博客、OpenAI博客、英伟达博客、量子位、极客公园等等全部抓了过来。。。。

至此，
这个解放双手、实时监控AI产品更新动态和AI内容的频道就搞定了
。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrtDRORialAR8szJBcV6xRLYlJ6CXnwbhybRldeF1gCMcIfhMsNEYzptHIrENxoI4wyYaEhxSBbgeQ/640?wx_fmt=png)

目前，监控了12个主流国内外文章博客的内容更新；监控了4大模态14个主流AI产品的更新动态。

而做为一个AI良心博主，做完了这个东西，那我的决定必然是。

向所有人，全部，免费开放。

对着我公众号，私信D，就能拿到这个Discord频道的邀请链接
。直接加入就行。

最后，再说一个小技巧，因为里面很多是英文资讯。

所以我推荐大家使用网页版Discord，装一个油猴
（篡改猴）
的翻译机插件。这样，英文内容就全部自动翻译成中文了，
防止你看不懂。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrtDRORialAR8szJBcV6xRLYeicuxf0DgtoG4JuKwtvB1uibHxBIOkr9eqMYKbf4UUAbM3tNS81N0cOw/640?wx_fmt=png)

安装也很简单，打开Chrome的应用商店，搜索tampermonkey（篡改猴），安装这个插件。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrtDRORialAR8szJBcV6xRLYP37M2KQ1W6ia3GD2JQLCibHM4XXeBiaBGibIvvQib3VYDt9NoNUq9nFNhicg/640?wx_fmt=png)

装好以后，点开右上角的
油猴
插件，选获取新脚本。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrtDRORialAR8szJBcV6xRLYngyJJhpPSRm0hb0MqvSibLQBPuCo07nZibEF65KR262rlTBm2JprrR3w/640?wx_fmt=png)

然后搜索翻译机，安装这个脚本，就可以啦。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrtDRORialAR8szJBcV6xRLYvIOXsdKlibkuXcAX2jFhdibczBHJgAcsgfpYFkGJ6eyJV6fzicXpiaDucg/640?wx_fmt=png)

安装完以后。刷新一下所有界面，你就会发现你的Discord界面，英文会全部被自动翻译成中文啦。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrtDRORialAR8szJBcV6xRLY0T1MUDfwwZlQNtCKiavbDgcRyibRB5ZCwNzV9NdbGVGWVzf9qq7dsDIw/640?wx_fmt=png)

对这个Discord全自动监控频道感兴趣的，可以私信公众号D，就能拿到邀请链接直接加入了。

现在免费，未来也会，永远免费。

我只希望。

在这波AI浪潮里。

人人都能成为AI这第四次工业革命的，无畏先锋。

⭐～感
恩。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
