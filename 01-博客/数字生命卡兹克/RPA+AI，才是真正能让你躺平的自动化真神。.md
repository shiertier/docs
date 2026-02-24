---
title: "RPA+AI，才是真正能让你躺平的自动化真神。"
发布日期: 2025-05-08
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647670903&idx=1&sn=1b434a9d73ab6d6c118aee51136a8424&chksm=f1e43b7f727d6f3c4112f63913ddf5bb05b0645b5bbf091094af10c931b09938daf13391bd4d"
---

## 摘要

**1) 一句话总结**
影刀RPA推出结合AI的“魔法指令”功能，允许用户通过自然语言构建稳定执行的网页与数据自动化流程，有效解决了传统RPA门槛高及纯AI Agent在长链路重复任务中错误率高的问题。

**2) 关键要点**
*   **Agent与RPA的场景差异**：AI Agent在执行多步复杂重复任务时稳定性差（例如：20个步骤若每步90%成功率，整体成功率仅约10%）；RPA则适用于需要高精度、重复且稳定运行的生产环境。
*   **传统RPA痛点**：传统RPA上手门槛极高，需要用户具备类似程序员的逻辑思维，进行画模块、定义变量等复杂操作。
*   **核心新功能（魔法指令）**：影刀RPA新增“新建PC自动化应用”功能，用户可通过自然语言对话直接生成RPA流程，实现技术降维。
*   **精准定位机制**：为保证执行准确度，用户需先使用“捕获元素区”功能（快捷键Ctrl+Shift+鼠标左键）精准框选网页元素（如搜索框、按钮），再输入自然语言指令。
*   **辅助与修复功能**：内置“优化提问”功能可自动规范Prompt格式以提高生成成功率；在运行出现Bug时，支持点击“智能修复”解决问题。
*   **实际应用案例1（数据抓取与处理）**：可实现自动打开小红书、搜索关键词、爬取前50篇笔记数据存入本地Excel、按公式筛选优质内容，并最终自动上传至飞书多维表格，支持定时触发运行。
*   **实际应用案例2（批量操作）**：可用于无API开放的新AI模型（如即梦），通过RPA实现自动化批量生图并同步至飞书。

**3) 风险与不足（原文明确提及）**
*   **功能范围限制**：目前的“魔法指令”仅支持生成网页和数据处理的RPA流程，暂不能生成桌面端跨软件（如微信）的RPA流程。
*   **界面依赖风险**：RPA流程的长期稳定运行前提是目标平台（如小红书）不修改网页前端界面。
*   **指令模糊风险**：如果仅输入自然语言Prompt而不配合“捕获元素区”明确指定操作对象，后续运行时可能会出现问题。
*   **环境配置要求**：使用前必须在工具设置中安装各种浏览器的自动化插件，否则会导致后续运行失败。

## 正文

想写关于RPA的话题很久了。

这次终于找到了一个机会，看到了一些转折点。

是因为昨天打开影刀RPA，想搓一个自动跑图的自动化RPA流程的时候，发现他们更新了一个新功能。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoaDOURDXeSbCunYTTAic66iauEXbNajhuQNsBruCA5hSmKKhd3v0HXyS4mg2PK39AH87NL9ZqKuUog/640?wx_fmt=png&from=appmsg)

魔法指令。

这个功能的作用非常简单，就是你现在可以通过AI，来用嘴搭建一套关于网页和数据的RPA流程了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoaDOURDXeSbCunYTTAic66iaib9fplrcxvx8h0icibgjEkRHZrxBKwSHRSqicYpFDj2fY9mGKEFgXJBfVQ/640?wx_fmt=png&from=appmsg)

这是我觉得，一个非常棒的转折点。

很多朋友可能不知道这意味着什么，也有可能完全不知道RPA是什么。

所以我觉得在给大家看这个魔法指令功能之前，
还是先跟不太了解RPA的朋友，说一下他跟Agent的区别和意义。

坦率的讲，最近我听Agent已经听得耳朵旁有点起茧了，特别是MCP火了之后，突然感觉万物皆可Agent了。

听的我快有一点叛逆了。。。

当然，不是因为Agent不牛逼，我很喜欢Agent，Agent很牛逼，我也认为，必然是未来。

只不过当下的时间点，我觉得很多人都已经陷入了某种AI幻觉里，觉得在当下的时间里，在当前的模型能力下，一切都可以Agent，一切都该Agent，一切都是Agent牛逼。

但真的去做落地项目，做业务流程，做一些自动化任务的朋友都知道，你让Agent做着做着，就会从“卧槽牛逼哎，他自己看到错了自己去别的地方找哎”，变成“尼玛怎么又崩了？”、“怎么这一步又理解错了？”、“神经病吧。”

尤其是，越是复杂的流程，越是讲究高精度、不能出错、重复运行的业务，一旦Agent的推理链条超过十步，它有的时候就越来越像是在抽卡。

这个痛点，我在好几个访谈里都说过。

比如你现在做一个复杂、重复的操作流程，要Agent完成20个步骤，哪怕每一步成功率99%，那整体成功率是多少？

0.99的20次方，大概是82%。

听起来不低是吧？但是这个就代表着，每5次任务，就会有一次失败。

而且我给的是每一步99%的成功率，其实大家都知道，这个成功率很多时候是不可能的。

如果给到每一步90%的成功率呢。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoaDOURDXeSbCunYTTAic66iat0iavxuibOqDO7v7y26oRGrGgAuA8bXGwicnCBicnlpkBXDfeAMcz6o6ibQ/640?wx_fmt=png&from=appmsg)

10次只能成功一次。

你告诉我，这玩意在真正需要重复、自动化、稳定运行的生产环境里，咋用嘛。

这个逻辑，在今天很多人聊Agent的时候，是不被认真讨论的。

大家都沉迷在AI帮我做了一件很酷的事的表演性场景里，但是却并不在乎，这个事能不能每天执行100次、1000次、10000次，连续跑3个月不出错。

我之所以这么说，是因为，我真的有一堆浪费时间的重复性任务，是要交给程序自动跑的，是不是AI其实我根本不在乎，我只希望，能稳定、能十年如一日、不出错的运行。

所以，在这种场景上，根本就不应该用什么Agent，而是上，RPA。

RPA，Robotic Process Automation。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoaDOURDXeSbCunYTTAic66ia1VwpoRHwSic7liaqBSaQLyOurMnT87hpUKrNhtF4ibDju2jTD02ibFq2wQ/640?wx_fmt=png&from=appmsg)

我不知道大家有没有玩过一些手游，我自己十年前玩碧蓝航线和阴阳师的时候，每天都在里面肝肝肝，我还记得玩阴阳师的时候我还在上大学，为了刷升一个六星茨木童子，每天一边看剧一边刷狗粮。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURoaDOURDXeSbCunYTTAic66ia4vQChSl3A01Qa71yPjkyxiaWCF17lmnwArFiauCd5HGdsJr4JQRgOCcg/640?wx_fmt=jpeg)

狗粮就是要升级式神的素材，得到的途径很简单，就是刷副本。然后副本里面是可以开自动的，一把我记得可能几分钟，但是结算和重新开始，还是得手动点几下。

我刷了好几天，实在是烦炸了。

于是就装了一个类似于按键精灵的APP，具体名字我忘了，他的作用，就是记录我点了屏幕哪里，隔了多少时间后又点了什么，是按什么顺序点的。

从而实现，可以把我解放出来，完全自动化的刷狗粮。稳定、重复、日复一日的运行。

于是，在刷了将近一个月之后，我的式神质量突飞猛进，吊打身边一众朋友，甚至还能在我们那个区竞技场打到排行前十。。。

这个东西，我们一般称为脚本。

同时，也是RPA最最最最初级的用法。

真正的RPA，比这玩意高级多了，涉及到各种数据的处理和流转、规则的判断、自动化点击操作等等。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoaDOURDXeSbCunYTTAic66iaAkSb3yh3PUnL2FajN1ZiaqDdh8kPGtKJz4hBgUOIy2o71iazgmdYtBsQ/640?wx_fmt=png&from=appmsg)

过去大家一提RPA就觉得老、慢、土、企业服务感太强，觉得AI才是未来。

但现在你回头看，Agent像是带情绪的实习生，做事随机、有创意、有想法，但经常会搞砸一些细节。

而RPA，像是老成稳重的机器人工人，没啥脑子，但给个流程它就一遍遍照着跑，重复、稳定、精准、不多想。

国内我一直觉得最有代表性的RPA产品，就是影刀。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoaDOURDXeSbCunYTTAic66iaGIbn57EHIULibtu7sUW9JjEp5zMClwnlLNP1UP6uqHOiagGWyJNwADZQ/640?wx_fmt=png&from=appmsg)

网址在此：
https://www.yingdao.com/

他们自己也总结了一个图，这个图我深表赞同。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoaDOURDXeSbCunYTTAic66iamYJYNEMvpI1Tu9bBvtDNMlPDoBxhZF4rX9YO91mXCqvUEwqhNBpv5A/640?wx_fmt=png&from=appmsg)

Agent非常酷，像Manus、DeepResearch等等，几乎都是我最常用的产品，特别是OpenAI那个
DeepResearch，每个月150次现在甚至都不够我用，我吹了无数次，200刀Pro会员最大的价值所在，我非常的尊敬他们，我也觉得它们很强。

但是场景不一样，在重复性场景上，他们还是太有个性，太聪明了。

在很多时候，自动化真正需要的，是
更稳、更可控、更可复用
。

而不是更聪明。

毕竟，做这种极度重复性的工作，我要的就是你稳定的十年如一日的运行，你要聪明干嘛，你聪明但不靠谱，还不如不聪明。

但是RPA，我认为一直有一个非常大的问题。

就是上手太难了。

你即使不懂AI，不懂编程，你依然还是可以用Cursor、Trae搓出一个小产品，还是可以用DeepResearch给你生成一篇很牛逼的几万字的报告。

但是RPA这玩意，你不会，那就是真不会。

比如我们想做一个网页的自动化，你打开界面，你如果没用过，你是真的有可能懵逼的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoaDOURDXeSbCunYTTAic66iaEzE5ylgGicsKLcu8Sd1ZFJqMmPC8lLXYyBzylo91mRibetkdIImAeAtQ/640?wx_fmt=png&from=appmsg)

你想从抖音扒个评论，这是RPA做好的详细流程，别说搭了，大概率，你看都看不懂。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoaDOURDXeSbCunYTTAic66iauPQicNYVnMldiau3K7XDEEhhOpTUOJVA6IYXGyuac0I5CSudlMF3ERRw/640?wx_fmt=png&from=appmsg)

你要搭流程，要画模块，要定义变量，要像程序员一样思考流程逻辑。

后来影刀这么多年一直都在努力降低门槛，加入了更多可视化、模块化、拖拽式逻辑配置。

但，还是太复杂了。

你本质上还是在做开发。

只是形式换了。

这两年，AI Coding飞速发展，我其实一直想看到，像影刀这种产品，能出一个用AI来搭建RPA流程的功能。

AI本质上就是降维，就是技术平权，RPA很有用，但是太难，大家用不会搭不来，那为什么不能有，用嘴来跟AI提需求，然后转变成RPA的流程呢？

直到现在，在等了半年多以后，我终于看到了。

虽然他现在还是只能用AI生成网页和数据处理的RPA流程，还不能生成桌面端跨软件比如微信的RPA流程，但是至少，我看到了一个非常棒的转折点。

RPA+AI，才是自动化任务的YYDS。

你们把影刀下载下来安装，就能在主界面上看到新建，点击新建 - 新建PC自动化应用，进入到流程搭建页面。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFibb8uj2MT2icjguVxwOCQFRd3ccnPem9nh6zeb4DmEBIu6liaxLCWTsqCQ/640?wx_fmt=png&from=appmsg)

你就能在标准指令里面，看到这个彩色的魔法指令。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoaDOURDXeSbCunYTTAic66iab7AM6Q5TUAaEKtpOfOynKZxz8NxqWXMhJgtOj6xRiaxvQB4NyrsHickA/640?wx_fmt=png&from=appmsg)

这个就是用嘴搭流程的功能。

不过在用之前，一定记得现在主界面 - 头像 - 工具 - 自动化插件那。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFibONXffzSw8AMJCeotpc0e9xLPG9qhDe7I6Ux9dicWiaePvVPOQNkkfWTg/640?wx_fmt=png&from=appmsg)

先把各种浏览器的插件给装上，要不然后续运行不成功。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoaDOURDXeSbCunYTTAic66iaHoh9JtgpSTo0tSnpqeCYwpxp6U52icEr12stxXH12NzYepoZkhS8Rfg/640?wx_fmt=png&from=appmsg)

现在，我们举个小例子，比如，想做一个自动化流程用于我自己的学习。

流程是每天在小红书上搜索关键词“AI”，然后把前50个笔记都爬下来，存到一个excel里，再按照一定的数据公式，找出优质内容，把那部分优质的笔记提取出来存储，最后扔到飞书的多位表格里。

我们直接就可以点开魔法指令，然后直接点击进入浮窗。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoaDOURDXeSbCunYTTAic66iaKlLibibl4fTpIsh5uQVSSngzqM6en19Kf2nVTBxI1KdxibEuuXibhaFTMg/640?wx_fmt=png&from=appmsg)

你就会发现，她变小了，然后缩到屏幕的一边了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoaDOURDXeSbCunYTTAic66iaAY7nNUCQq402Yr01UedFPPcJNUZFfXgibfN7aic37Xor7c7X1wLRI1Qw/640?wx_fmt=png&from=appmsg)

默认就是网页自动化，所以我们不需要修改，然后打开浏览器（推荐还是Chrome），打开小红书的网页。

现在，你的界面应该长这个样子，左边是小红书的网页，右边是影刀的魔法指令浮窗。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoaDOURDXeSbCunYTTAic66iadua9FTXiaZibVBeBK4qylENry3RQxDImEaIpACGo6oSApHuzjc9LaM0g/640?wx_fmt=png&from=appmsg)

然后，我们就直接用嘴，来写我们的指令。

不过影刀跟所有的AI产品都有一个不一样的点，就是他有一个必须的步骤，叫做捕获元素区。

比如我们说，在搜索栏里输入AI，然后点击搜索按钮。

这个Prompt其实不够精准，可能后续运行时会出现一些问题，所以，你需要先捕获元素区，非常明确的告诉它，这是搜索栏，这是搜索按钮。

我们直接点击左下角这个icon。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoaDOURDXeSbCunYTTAic66iaibaeoC7xoQia4gxhoRC2ysUVxrKTmkpxUrsiaexOY8kaAnJrEicZia5BKCw/640?wx_fmt=png&from=appmsg)

你就会发现，你的屏幕变绿了，你可以，在页面上框选各种区域了。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURoaDOURDXeSbCunYTTAic66iaqPPmjPN4uxsUz0dHvNk100UfYFQvNJJZVEj2Pnt4tm20P2hH6bfQHw/640?wx_fmt=gif&from=appmsg)

我们把鼠标放在搜索框的选区上，然后按下Ctrl+Shift再加鼠标左键单击，它就会给你个确认，你点对勾就行。

然后你就会发现，这个选区，出现在你的对话框里面了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoaDOURDXeSbCunYTTAic66iaLxOmuMic4jxJh0wiab2cwJeUYaQvSCR5HXAB4tagg1Oiajic4en5JWA8aQ/640?wx_fmt=png&from=appmsg)

这个就是一个元素块，我们现在，可以用嘴，来告诉AI，应该对这个元素块进行什么操作了。

比如我就会说。在输入框中输入“AI”。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFibiaZAZAMmP1wVsQDANdFGFYiar3ManUHyUkXeMgv1gxvSicleS3qrPawTA/640?wx_fmt=png&from=appmsg)

输入完以后，下一步就是点击搜索按钮进行搜索了。我们继续如法炮制。选中选区。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFib6AvGo2ibRMGIZfhBQYAn0rd40icwjzXViaGcG8GWLeliaRibXLxIDOR34Gw/640?wx_fmt=png&from=appmsg)

然后在prompt里面写，点击块元素（就是搜索按钮）进行搜索。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFibtC6tXSOdur5iaUic8W88Cj8B2R4CYhndTTqtFvS5UXTtJ4EgT4iaYlRsA/640?wx_fmt=png&from=appmsg)

后面就都是一样的流程了，圈中整个笔记区，让他按照笔记链接、作者、标题、正文、点赞数、收藏数、评论数等等来进行爬取，给我存到一个本地的excel里。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFibuP1zY0BicgPyPHLbPbIXIvaSygjuXx7HUXdtoA47bsSvTFvbxB0ssqA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFibUFkoXQqZc5SUjxrCn6TD7McBicIna78p8SgtnRB3RMZ4hlRunKIs1iaw/640?wx_fmt=png&from=appmsg)

这样，一个用AI生成RPA的Prompt就写完了，会跟你直接对话，有一点不一样。写完以后，我们可以再点击一下，他们自己的优化提问，提高成功率。

优化完以后，就会变成这个格式，正规很多。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFibxkorK6zmNbPRzIfy2AZ5p7QddF5C8PEGZVqDTKe92mWAWlkNufvuuQ/640?wx_fmt=png&from=appmsg)

一切完毕，我们把他，发送出去就行。

过了一会，就会生成魔法指令的窗口，有提示需要安装依赖库的，你就点击安装就行。

这个基本就代表了，RPA流程已经生成完了，哪些选项可以不用管，保存到本地的文件夹路径，是可以手动修改的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFibaA8hicqpibAUf39tOKz9qHOdbGibgtvfL8rLPrJlNNlDiablcmo2bE4lmw/640?wx_fmt=png&from=appmsg)

我手动改成到了D盘。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFibYWqHfPBY3mEe3Tlq94RgXiaODXFVw66KiaBbKytSpN1N1HfKTNibdIheg/640?wx_fmt=png&from=appmsg)

然后，我们点击左下角的那个，运行指令，测试一下。

一次，直接完美的成功了。我直接放我的原始未加速录屏，大家可以感受一下。

真的，看RPA干活，是一种享受。

再来看看本地excel结果。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFibPd0eu9r8It7IgKibC5USTtVDZCcUWFX8sA4OzoibLhbugnG9q3Q5G3Jg/640?wx_fmt=png&from=appmsg)

完美无瑕。

而且，这个东西，是保存了以后，可以十年稳定如一日的运行的（前提是小红书不改界面），做一次，以后可以一直用。

而且不只是10个，我们完全可以让他存50个笔记，100个笔记，200个笔记。每天抓取一次，这个对于自己学习作用有多大，不言而喻。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFibUxSjTwz4goiawjzX52BEKlZ8Nf20RD2cVRWxLibib6nFU4GXFG0NILxVA/640?wx_fmt=png&from=appmsg)

生成完的流程，大家一定要记得，点击确定，因为他只是流程，还不算应用。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFib0MPVumurSOicVXiaeRIVL9ptXiaNiaAQmBLrxU4VbGZcUdqExyq1pFnUMw/640?wx_fmt=png&from=appmsg)

点击确定后，就会回到我们的主界面。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFibL1aYzXcUTgghgcZ8YJ1FOgt3Yl03vbRuDibfBVWJxooh4v5zs6pfCLA/640?wx_fmt=png&from=appmsg)

记得先拖一个网页自动化里的打开网页，到主流程中，以后一运行，就会自动打开小红书了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFibbKNXAQCufdzuiaL6cqkYhQH1x621FppxaGp98PkFZprnw0d5XGJO7ibw/640?wx_fmt=png&from=appmsg)

刚才保存下来的内容，我们如果想自动再让RPA帮我们做一轮数据筛选。就可以继续点击魔法指令，但是这一会，用数据处理，帮我们搞excel。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFibdQQO1ib3Oo8GkOgiceLjsJdoSAOQmxQoiaCkL1CwUEwdu4EBYC1lyc5hA/640?wx_fmt=png&from=appmsg)

在得到结果之后，把输出文件可以自定义一个。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFibWcupmPkeILibgjOfJjckBlguHpryEtMqIiayFlGrwJNbJVh2z74qsNcA/640?wx_fmt=png&from=appmsg)

我们再运行测试一下。结果出现了BUG，但是不用慌，直接点击智能修复就行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFibP6UNQRcwyOg3UrYTrrXY2PbGYC80ZdMq3Us3VPDkibsP5Kry7GkO0HQ/640?wx_fmt=png&from=appmsg)

然后继续，成功了，筛选出来了22条，Nice。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFibOxb9PiacIyg2VBZHOgdPg7vNChG5icNnnicyV6qqdKNC6icpSwicGibnIoCw/640?wx_fmt=png&from=appmsg)

最后，你甚至可以，把这些处理完的数据，直接自动化的，上传到飞书多维表格里。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFibQVYrduqkvAibTtgOEAbl5TzLgZ5aG2yf3pQaISt9VRRb1AtbID3Z8DQ/640?wx_fmt=png&from=appmsg)

以后，每天，你只要需要打开影刀，运行一下，你就有了，全新的AI领域的小红书爆款内容。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFibARAfIe4bgUJCwN0efVMibS6FzUhO1uyWw4yZFFG8icN6ckeGbiaYDFOyg/640?wx_fmt=png&from=appmsg)

你甚至还可以进一步当个懒癌，跟触发器打通，每天定时自动运行。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFibXEopYp9yCHJRxQvez5oOcx2XOl7H3gEYyu0pibIyOdGqwxiaUEHKUSZw/640?wx_fmt=png&from=appmsg)

除了这个小红书自动爬取之外。

我们还手搓了几个其他的流程，比如每次新生图模型出来，我用我的excel测试集去测，都巨麻烦，因为新模型几乎不可能开放API。

那现在，直接可以用嘴搓个自动生图流程，比如我就搓了个即梦的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFibzkxXaE8eM5K71gQuAW10LiaryuCibiaoib0QfxOWmeIcMDYJjW8G1bIicfA/640?wx_fmt=png&from=appmsg)

直接批量生图。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFibQ7ys4QktMW7Jy0hTbpWxnTwP0TSqfNxOXAwm5Qz98WDtSVo0gnpZKQ/640?wx_fmt=png&from=appmsg)

然后塞到飞书里，甚至我打算，把生视频的也做了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr4BX6hVrOYe83JoXc4icYFibTYOq0GNYnJ0NbqBricY7iboPud0Qh3sDYuA7biaicZS6mFg979r16UN4IA/640?wx_fmt=png&from=appmsg)

这样以后，真的解放双手好吧。。。

写到这里，我真的是发自内心想说一句：

我们这两年，很多时候，都在追问AI能不能干人干不了的事。

但其实，那些重复的、琐碎的、机械的、你知道流程却不想动手的任务。

我更希望，AI能把他，
干得更好。

这就是我眼里，AI+RPA的价值。

它不是AI更强，也不是RPA更流弊。

而是合而为一，绽放出更平权的价值。

也许自动化的终点，不是酷炫，而是悄无声息地，替你干完你根本不想碰的那一堆破事。

你都忘了它在工作。

但它一直都在干活。

这可能，就是魔法。

也愿我们每个人。

都能拥有魔法。


wzglyay@virxact.com

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
