---
title: "腾讯悄悄出了个插件版“Cursor”，还跟微信小程序打通了。"
发布日期: 2025-05-14
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647671081&idx=1&sn=142ab7baeed77e2dc875fa545f4e564c&chksm=f1b49290820df32c8d9a7225069d945007a3177bc578b4b08d61036194900d0214a7f8b1028c"
---

## 摘要

**1) 一句话总结**
腾讯云发布了插件版AI编程助手CodeBuddy 3.0，该产品不仅支持主流AI编程功能，还深度打通了微信开发者工具与生态知识库，使用户能够通过自然语言快速生成、调试并部署微信小程序。

**2) 核心要点**
*   **产品形态**：CodeBuddy 3.0 采用插件模式而非独立IDE，可安装在 VS Code、IDEA、Xcode 甚至 Cursor 等多种现有开发工具中，适应不同职位的原生工作流。
*   **基础功能**：支持当前主流的AI编程功能，包括代码补全、MCP（模型上下文协议）以及 Craft 智能体开发模式。
*   **微信生态打通**：深度集成至“微信开发者工具”，内置微信各方开发规范与知识库，支持直接调用小程序组件和API。
*   **需求澄清机制**：在 Craft 模式下开启“确认计划”后，AI 会像产品经理一样主动拆解任务、提问并查缺补漏，确认无误后再生成代码。
*   **开发效率**：通过自然语言提示词，可在约15分钟内自动生成完整的小程序代码（如记账本、BMI体重记录、AI推荐助手等）。
*   **一站式部署**：生成的代码可直接在微信开发者工具中进行热加载调试、生成二维码在手机微信预览，并支持一键上传发布。
*   **生态扩展潜力**：依托腾讯生态，该插件不仅支持小程序，还涵盖小游戏、微信支付及各类API的开发对接。

**3) 风险与不足（基于原文明确提及）**
*   **适配成本高**：作为插件，为了融入不同IDE（如IDEA、Xcode等），需要针对每个产品做高度专业化的定制版本，开发成本和维护麻烦程度较高。
*   **素材缺失导致报错**：AI 无法直接生成图标（Icon）等图片素材，可能导致模拟器启动失败，需要开发者手动下载图片并重命名放入对应文件夹。
*   **UI细节需微调**：AI 初次生成的界面（如卡片宽度）可能存在瑕疵，需要开发者进行二次 Prompt 调整。
*   **预览兼容性问题**：在生成二维码预览时偶尔会报错，需要手动在本地设置中开启“将 JS 编译成 ES5”以提升兼容性。

## 正文

昨天看到了一个挺有意思的产品发布。

是腾讯云自己家的代码助手，CodeBuddy，开了个直播，发了他们的3.0版本。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpqMOgBlXicNjmcFXbqhqkVIWibX16wygbqXCvNV1sQKAZGS2wR5dTAThiaicJbvrET679Vmcv7JNUHEQ/640?wx_fmt=png&from=appmsg)

这个产品可能很多人不知道，坦率的说，在过去市面上的名气，是没有Cursor、Trae这些AI编程产品的名气大的。

不过昨晚，我看了一下他们的直播，还发现了一个非常有趣的点。

就是跟微信的开发打通了。

腾讯的生态，微信的底蕴，还是太厚了。

先跟大家简单介绍一下
CodeBuddy这个产品吧。

官网网址在此：
https://copilot.tencent.com/

跟Cursor、Trae这些产品不太一样的点是，它是一个插件，而不是一个IDE产品。

也就是你不需要下一个软件，但是你可以在任何代码产品里，安装CodeBuddy用，比如你就可以在Cursor里安装CodeBuddy。。。虽然这事听着很NTR。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpqMOgBlXicNjmcFXbqhqkVIljQ5VGSzvTFzGhic6xqT1552TJCf6Lef9RhPDGNsBdzWhr5PN4P0icRQ/640?wx_fmt=png&from=appmsg)

但是插件这个事，其实在开发的真正工作流，相比于AI IDE产品，是更容易被大家所接受的。

这里也做个小小的科普，其实现在你们看到的几乎所有的AI编程产品，你会发现长的几乎都跟VS Code一样，是因为都是基于Code - OSS去改的，所以大家几乎长的都类似，插件生态也是一致的。

但是其实很多其他职位的开发，并不是用的VS Code，而是会用别的产品。

比如我认识的朋友们，他们Java用的是IDEA，IOS会用Xcode。

而这时候，作为一个代码插件，反而可以融入到，所有职位的工作流里，而不是只是用在类VS Code产品里。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpqMOgBlXicNjmcFXbqhqkVIlAY10OA7CPstkPiajT03vQZLlKE61Aic5bFt0MTIcuibF8XW22dZxjC0g/640?wx_fmt=png&from=appmsg)

当然，这带来的弊端也就是非常的专业化，而且未来要做好，就要针对每个产品去做定制化版本，会麻烦很多、成本也会高很多。

目前，
CodeBuddy 3.0，主流的功能几乎都支持，比如也有Craft开发智能体模式。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpqMOgBlXicNjmcFXbqhqkVIS7cw1ZzMvDL5cp9lYjibgvgOGuVYYiay4LtuKOj7To3Hy6iajTiafSJibyg/640?wx_fmt=png&from=appmsg)

比如也支持MCP、代码补全等等。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpqMOgBlXicNjmcFXbqhqkVIdcSOfoEel7cFKbGEspEoYbM9ftlXL35y5hekeNySQLTLkxjeVBOJiaw/640?wx_fmt=png&from=appmsg)

但是这些功能，坦率的讲，也比较常规了，其实其他的AI编程产品，也几乎都有。

最有意思的，我觉得还是，支持的IDE产品里面的，这个图标。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpqMOgBlXicNjmcFXbqhqkVIeh3tHMEfQ5VIdP0HPLI6NGMnW1vFN7icg4W2KiaJnAmOVPvJIOibkM62Q/640?wx_fmt=png&from=appmsg)

可能很多人不知道这是干啥的，这玩意，名字叫。

微信开发者工具。

专门用来做小程序的。

腾讯自己的
CodeBuddy+微信开发者工具。

这个组合，你懂的。

最直白的想象就是，
CodeBuddy知道所有的微信里面的开发规范，一件直出一个小程序。

在我体验完
CodeBuddy之后，我发现，这确实是他们想走的路。

因为我看到了这个东西。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpqMOgBlXicNjmcFXbqhqkVIa6K2STzwZSicicm12EcaSwM26UyThbRujoczLLWbvv1e4XgWv07DXeww/640?wx_fmt=png&from=appmsg)

直接在
CodeBuddy中，打通了微信各方的知识库。

这个宏图和野心，你懂的。

我也第一时间，下载了微信开发者工具，给大家看一看，怎么手搓一个小程序。

网址在此：

https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html

直接选稳定版，然后下载自己的系统的客户端，我这边下载的是Window 64版，如果你是Mac的话，M芯片就算ARM64就行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpqMOgBlXicNjmcFXbqhqkVIL3f41MS6FBlWcVGQN0DiaRTm8k5BEnHXK2NtyPQfdvud2dbEe5Kzwicw/640?wx_fmt=png&from=appmsg)

把微信开发者工具下载下来安装后，就能在启动页里看到创建小程序功能，点击使用测试号 - TS基础模板 - 创建，进入小程序编程主界面。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpqMOgBlXicNjmcFXbqhqkVIMpoYpNohHgdOQBoODEe1s6lQ406ebBGKIhmOuwzoFXRTuljJCOqTxw/640?wx_fmt=png&from=appmsg)

用测试账号会比较方便演示，当然你如果有自己的小程序ID，也可以直接选用，或者点测试号旁边的注册，填写完表单就可用获取一个。

CodeBuddy的安装入口在活动栏的那个插件入口 - 搜索CodeBuddy - 安装，它就出现在你的活动栏上了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpqMOgBlXicNjmcFXbqhqkVIpVK8jgia4MntmicwQNF9NkmU85U47fppQAQza8ecU073uj7zCdg0QcsA/640?wx_fmt=png&from=appmsg)

点击安装完的
CodeBuddy图标，就可以看到代码助手的界面。

在用之前，记得打开在Craft - 设置里的确认计划。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpqMOgBlXicNjmcFXbqhqkVIrXtnZj6S7Ioia8d4tnOGsWATF6xV3tkn34Fxd5yahJ9d3EWZ2cA05ag/640?wx_fmt=png&from=appmsg)

这个东西的作用，就是在计划
模式下，你的Prompt即使写的很der比，AI也会询问很多东西，就像是一个产品经理与开发者的需求澄清，拆解需求任务，对于不清楚的问题，他会提问给你，你只需要回答即可。。

跟DeepResearch的那个提问很像，我自己很喜欢这种方式，能帮你查缺补漏。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpqMOgBlXicNjmcFXbqhqkVI29Wu1hHMDNdAtFjRDkTbDJ1YFT05ficQicDm2mbwCniaXHI7p57ibzzoqQ/640?wx_fmt=png&from=appmsg)

比如说，我看到群里今天有朋友说，AI博主在AI产品上的消费，很恐怖。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpqMOgBlXicNjmcFXbqhqkVI9BL30pk9V6BMSdo99UuI2AhDiblZLibic0icQgltOP1mvCsaDcFfqfm3xg/640?wx_fmt=png&from=appmsg)

我自己一算其实也发现，确实。。。

ChatGPT每月200倒，Gemini忘了多少刀，X一个月11刀，Midjourney一年2000多，还有可灵、即梦、海螺、Cnavas、Vigggle、11labs、suno等等等等。

我都不知道我每个月在AI产品上自动订阅花了多少钱。

看到卡尔发的账单app，我就想着说，我不如直接搓一个微信小程序吧，给我自己做个统计吧。

正好也试试，
CodeBuddy跟小程序的联动。

我自己的Prompt是：

“我想做一个记账本小程序，用于记录各种软件的付费情况，帮我写个提示词。”

我先在Chat界面，调用了小程序的知识库，先让他给我丰富了一下Prompt，因为我实在不知道小程序用的啥语言，一些组件怎么用。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpqMOgBlXicNjmcFXbqhqkVIows7gLzBXicrVRlLEuWSlQtfqSv4aNpMwx2s9bWaTXRXbtxPfdKJHKQ/640?wx_fmt=png&from=appmsg)

很快，一个Prompt就给我生成好了。这里注意一下，当你调用知识库后，他总是会默认给你一些代码，你可以额外加一句：“不需要提供示例代码。”

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpqMOgBlXicNjmcFXbqhqkVIzHoHvgE2fxMS3qjSw3ldBeZvrXL2knGbSibManyQzya1FhHCau9om1Q/640?wx_fmt=png&from=appmsg)

开发一个订阅服务记账本小程序，主要功能包括:
1.添加/管理订阅服务(名称、价格、周期、下次扣款日)
2.按月/年统计订阅支出
3.扣款日前提醒功能
4.支出分类和数据分析
5.支持多账户管理
要求采用微信小程序技术栈，使用TypeScript开发，界面简洁易用。

然后，我们接着把刚刚生成的提示词复制下来，在Craft模式发送。

你会发现它真的很智能，先主动看了文件夹里已经有哪些文件，然后还列了一些要核对的细节。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpqMOgBlXicNjmcFXbqhqkVIJWKScq7lYo8HINJsBwicfQnqFaZiadgy4lCicnc2R4b3usP50zbVpC7lw/640?wx_fmt=png&from=appmsg)

我把要确定的内容都确认了一下，输入进去了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpqMOgBlXicNjmcFXbqhqkVIvldJnQvesr6iazU7dYsOjW0Ymia8VArhliaI44BmEV7OPnnsusyfFiaEmA/640?wx_fmt=png&from=appmsg)

我发送具体的要求后，CodeBuddy立马给了一个非常清晰的实施计划。

CodeBuddy有时会问你是否继续，你只需要点一下继续就行，当然，你也可以在设置里，把这些选项全都打开。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpqMOgBlXicNjmcFXbqhqkVIAA910lPWLhooEERkKyJiaSD6Y7JxxDnCEFqia0jFra8j87E9PicYp9Ijg/640?wx_fmt=png&from=appmsg)

然后他就开始写了，我也没咋看，他真的，写了好久好久，估计得有15分钟。

然后，CodeBuddy终于把所有代码都写好了。

生成了一堆文件，已经到了我完全看不懂的程度，但是感觉很完整。

你记得清除一下缓存，要不然可能会显示模板的内容，而不是代码助手新写的内容。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpqMOgBlXicNjmcFXbqhqkVIcm9lXW9GpsemB8f7v72rGpTDNoBQUHztEAv8BX1TzPjljQakMHccwg/640?wx_fmt=png&from=appmsg)

因为模拟器开了热加载，
在左边模拟器的界面里，有时候会有一个启动失败的提示，这时候不要慌。仔细看其实是会发现是少了几个图标的素材。

不过图标素材确实是个问题，让AI生成起来会很麻烦。

这时候最简单的方式，其实还是我们自己去下载，你可以在一些图标素材网址去搜索下载对应的图片。

这里推荐一个我自己一直用的icon下载网址。

https://www.iconfont.cn/

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpqMOgBlXicNjmcFXbqhqkVIRq6CthwHP6ozI18NJeGxseTCiakDNcpE0C0qxduZz3ZmhLBLQZiaOM3g/640?wx_fmt=png&from=appmsg)

然后在对应的文件夹里放入刚刚下载的图片，并重命名成报错提示里对应的文件名。

返回小程序开发工具，你就会惊喜的发现小程序已经成功运行了。

但卡片的宽度有些问题，这时候可以模仿开始时的流程，让CodeBuddy稍微调整一下，改完的效果就很理想。

就这样，一个小程序小产品，就搞定了。

现在点预览按钮就可以生成一个二维码，你只要扫一下这个二维码就可以在自己的微信里使用了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpqMOgBlXicNjmcFXbqhqkVIl4HjFwV6c4GF56rhG6RAuMpD8vTmbZm0W0njvaE5StTFThSLibpf9Uw/640?wx_fmt=png&from=appmsg)

有时候预览会有报错，可以打开详情 - 本地设置 - 将JS编译成ESS，提升兼容性。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpqMOgBlXicNjmcFXbqhqkVIuZ5gqcsCBzkzjhAhiaQX3GtEEPfWazZ07Fv8MwDZ8HcyX3sQiaU33N1Q/640?wx_fmt=png&from=appmsg)

如果要发布小程序，可以在开发工具里点击上传按钮，然后去小程序的管理网页填写相关的内容。

很酷，很喜欢。

这个东西，一共就花了不到半小时。

如果是平时，即使你用别的AI IDE产品辅助，搬到这边的微信开发者工具里面来，还是会需要很多时间，还没法直接调试和上传。

接着我又随手写了一个常用的小程序，记体重。

它真的非常智能，比如它写完了基础记录功能后，我只是提示一句帮我写一下BMI计算逻辑，并添加一个展示组件，它不仅写了算法，还知道选用合适的样式展现，并加了注释。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpqMOgBlXicNjmcFXbqhqkVIr3Kia1rAs94b4oYAbiaLHoqDIkB8txF2z2RWM96c8cptZRrcNekibNiblA/640?wx_fmt=png&from=appmsg)

我还做了一款小程序，它是吃什么AI小助手。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpqMOgBlXicNjmcFXbqhqkVI8bZ5X6AXFgFMMnv9uBR6XibR7gvTQHBjxDSYUpsfSvDCcdmNjJZWwcw/640?wx_fmt=png&from=appmsg)

它有 AI，有推荐逻辑，属于那种有点开发难度的产品。

以前做这种需求，至少要一个产品经理写 PRD，一个设计师搞图，一个前端写 UI，一个后端搞逻辑，一个测试验接口。

但是现在，用嘴就能直接搞个小程序了。

我觉得腾讯最大的生态护城河，就在于此。

CodeBuddy里面，不止有小程序，还有小游戏，还有微信支付，还有各种API，等等等等。

微信，它是我们熟悉的社交，是我们每天用的支付，是我们和世界对话的界面，是我们和身边人、和陌生人、和生活场景链接的总线。

而当一个AI代码助手，能和微信的小程序体系、消息体系、支付体系、入口体系全面打通的时候，

它就不再只是个开发工具了。

当他再简单，再便捷一些。

这就是一个全新的，创造通道，以及，分发渠道。

能把普通人的想法，变成能触达他人的作品。

我越来越期待看到。

腾讯在AI时代。

那恐怖的生态护城河。

会绽放出多艳丽的花了。


wzglyay@virxact.com

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
