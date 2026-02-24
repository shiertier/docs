---
title: "一招教你解决DeepSeek R1的卡顿问题。"
发布日期: 2025-02-05
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647668316&idx=1&sn=f75b4734edfc5ef47369ad6228d7cc7c&chksm=f1e165acb6a9cd576ccc90e7cc7ad0280cc9510d59e6ba34283a84adb88a6e55ce49b9d657f4"
---

## 摘要

**1) 一句话总结**
本文介绍了通过“硅基流动 API + Chatbox AI”客户端的组合方案，低成本且流畅地调用满血版 DeepSeek R1 模型，以解决官方服务频繁卡顿的问题。

**2) 核心要点**
*   **官方服务现状**：DeepSeek 官方服务因算力资源限制和用户量庞大，频繁出现“服务器繁忙”的卡顿报错。
*   **本地部署门槛高**：满血版 R1 模型（671B 参数）需约 1300GB 显存（相当于 16 张 A100 80G 显卡），普通消费级显卡通常只能运行体验较差的 7B 蒸馏版。
*   **第三方云服务替代**：百度云、腾讯云、华为云、阿里云及火山引擎等国内主流云厂商均已支持 DeepSeek API 调用。
*   **推荐方案**：采用“硅基流动（后端 API）+ Chatbox AI（前端界面）”的组合，体验流畅且成本极低（新注册硅基流动可获 14 元免费额度）。
*   **多端支持与功能**：Chatbox AI 支持 Mac、Windows、Android 和 iOS 四端，且能够完整展示 DeepSeek R1 的思考过程。
*   **配置步骤**：在硅基流动官网新建并复制 API 密钥；在 Chatbox AI 设置中将模型提供方选为“SiliconFlow API”，粘贴密钥并选择 DeepSeek R1 模型即可完成配置。

**3) 风险与不足**
*   **密钥泄露风险**：API Key 绝对不能泄露给他人，否则会导致账户内的资金/额度被恶意消耗。
*   **第三方平台偶发卡顿**：由于近期 DeepSeek 流量过大，硅基流动平台在高峰期偶尔也会出现卡顿情况（但整体优于官方服务）。

## 正文

整个过年，DeepSeek给我用的都卡炸了。

我自己在官方app和网页里，到现在也还是10条回复有8条是“服务器blabla，请稍后重试”。

每次见到这句话，我都想脑溢血。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqc9icp8P55Zn3icmefFuKSn2IgiaYo9Mp8F7QmS6W6d0NJf6r292oXBFSibu58pOrEKDB8r5GW072p5g/640?wx_fmt=png&from=appmsg)

坦率的讲，你指望DeepSeek官方来给你提供一个非常良好的体验服务，我觉得有点不现实，人的目标是AGI，不是云服务。所以宝贵的算力资源得用在探索模型上，而不是保障几亿用户的推理需求。

再加上DeepSeek R1本身就是开源的，人人皆可部署，所以啊，官方R1很卡，那我们不如换个思路，直接用别人部署的R1的第三方服务不就行了。

反正模型都是一个模型，没差。

这里可能有人会问，为啥不在我们自己电脑上部署一个，自己用多爽。

我想说，R1的模型参数是671B，差不多需要1300个G的显存，你才能跑得动满血版的R1，这是啥概念呢，我们普通人一般的显卡在这个时代，4060这种级别的偏多，这种显卡的显存只有6G。。。

即使你上A100 80G，也要16张卡才能部署的下来。

现在很多人所谓的本地运行R1教程，你可以理解为都是部署的7B的蒸馏版模型为主，那玩意说实话，如果跟满血R1比，用四个字评价就是：
又笨又慢。基本没法用。

所以，用第三方服务，几乎成了最优解。

现在国内几乎所有的云都支持了DeepSeek的API调用，比如百度云、腾讯云、华为云、阿里云等等，昨天下午，火山引擎也直接宣布加入战斗。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqc9icp8P55Zn3icmefFuKSn2tdQkSdFlNqq0iaeYkPHECe20OB5s6SMPreYwfobPdw2LkPRxS7Qt9pw/640?wx_fmt=png&from=appmsg)

但是，我觉得最好用、最适合小白的，还是
硅基流动+Chatbox AI
的组合。

真的，体验无敌，还约等于不要钱。

硅基流动负责部署完DeepSeek R1然后提供一个API key，属于后端。

Chatbox AI相当于前端的对话产品，你把硅基流动的API key输入进去，就可以对话了，而且它是目前唯一支持自定义API Key且有Mac、Win、安卓、IOS四端产品的。无敌好吧。

真的，
你需要准备的只有一部手机或者一台能跑扫雷的电脑、一个+86的手机号。就能得到一个
再也不断线的
满血DeepSeek
。

话不多说，直接开始教程。

一共两大步。

第一步，你需要搞到一个硅基流动的API key，第二步，下载Chatbox AI然后粘贴进去。完事。

是不是很简单。

一. 搞定硅基流动的API Key

首先，注册and登陆硅基流动官网。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqc9icp8P55Zn3icmefFuKSn2iaWRrM63ZibfNmTNdP17Or3bYQbC0t90mRVd6ZWriaGhHX3N7o0XRUfkA/640?wx_fmt=png&from=appmsg)

这里注意一下，
硅基流动正在搞活动，你
可以直接用我的邀请链接注册，这样咱俩都可以白嫖14块钱的额度，几乎够你高频使用2周到1个月了（不是广告）：

https://cloud.siliconflow.cn/i/dcAIgVea

登陆之后，直接就进入【模型广场】了。排在第一位的模型就是R1。

但是你不用管，直接看最左边的导航栏，找到【API密钥】，点进去，再点右上角的新建API密钥。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqc9icp8P55Zn3icmefFuKSn2Q5xvgUBYGmwb7RgGhVspzwHicgWHutOLKU2ykyj3YIUNAFibyVfDSWKw/640?wx_fmt=png&from=appmsg)

密钥描述这块可以随便写，你可以建多个密钥，别忘了这个密钥是干啥的就行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqc9icp8P55Zn3icmefFuKSn2QNg2QHJ4TxOkpIBo0JhVuClia14yLMr6U20ItymXxHLIkEDt1dicvDQA/640?wx_fmt=png&from=appmsg)

新建完成之后，你就会得到一个看着是加密的API Key了，这就是你的密钥，点击密码那块就能复制。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqc9icp8P55Zn3icmefFuKSn2ztnPVch95d4OsdicwjdBKQ4YKia9muB8fBgjx23icB210BvmGdsOgDF0Q/640?wx_fmt=png&from=appmsg)

至此，你的API key就到手了，可以开始进行下一步了。

这里我也提醒一下，这个API key绝对不要给别人，绝对绝对绝对不要。要不然你会发现你账户里的钱怎么一会直接干光了。。。

二. 下载Chatbox AI

一个我自己非常喜欢、很棒的AI神器。

网址在此：https://chatboxai.app/zh#download

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqc9icp8P55Zn3icmefFuKSn2RKic4OB0ibIwTWuen1sh3rb2NiaZ4ibMFCvRrkTWHia4zte0k2ZSEBfQt9w/640?wx_fmt=png&from=appmsg)

你可以直接下载你需要的客户端，比如我自己手机和两台电脑就全装了。苹果用户直接去AppStore下载就好，其他的记得来官网下载。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqc9icp8P55Zn3icmefFuKSn2Hr51nhRknzpVmxZcyanXpNG37SvsCicNSnfpwYW5I9T1RNicsicMiahCsg/640?wx_fmt=png&from=appmsg)

这里我用mac客户端举例（手机上的都是一样的，操作没区别）。

打开以后，你就能看到一个非常熟悉的空白对话界面。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqc9icp8P55Zn3icmefFuKSn22UZGGPqb6L4JuuqjNpFRVgXd4DzDrrqBiao1uFmKuZicMXWUDGxVIeicw/640?wx_fmt=png&from=appmsg)

不用管，直接点击左下角的设置按钮。

在模型提供方里，找到这个SiliconFlow API，这个就是硅基流动的英文名。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqc9icp8P55Zn3icmefFuKSn2NIC926tCCxkbiaRYTiaXFNVPz4Y1HHVcmj9YQLG0UnmvgfgjgYAPOrtg/640?wx_fmt=png&from=appmsg)

在API密钥里，输入上一步咱们复制下来的API key，直接粘贴进去，粘贴完以后，下面模型下拉框就会出现一堆数据了，全部都是硅基流动部署的模型，我们直接拉到后面选DeepSeek R1模型就行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqc9icp8P55Zn3icmefFuKSn2Zabr2TaP5iajOruPA0qYl9drAmkmW0ALIEkBfDyE7CUpENtFZYKNUdA/640?wx_fmt=png&from=appmsg)

然后保存。

你没看错，这就算全部完事了。

我们就可以随便问一句来测试一下，比如：

“用LOL祖安老哥的方式给我描述一下特朗普”

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqc9icp8P55Zn3icmefFuKSn2sQC6YYrYGS4s68ibr7cAJdK0GUruY3bZHoRzNw9xsy1g7FXwAd3ge1A/640?wx_fmt=png&from=appmsg)

完美出现，而且最难能可贵的是，ChatBox AI的界面，是带有思考过程的。。。喜极而泣。

至此，你就拥有了一个你专属的DeepSeek。

妈妈再也不用担心我的DeepSeek断线了。

三. 写在最后

DeepSeek实在太火了。

火到这两天流量甚至把硅基流动都有点冲爆了，偶尔也会出现卡顿的情况。不过总体我体验下来，还是能比官网那个卡顿好接受的多。

感谢硅基流动和华为，在春节期间不眠不休的加班加点。

未来我相信，也许还能有更多云厂商和算力租赁加入战场，让这些开源模型，跑得更稳、更快。

好啦，教程也说完了，剩下的就交给你去冲浪了。

上班的第一天。

记得用AI摸鱼哦。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
