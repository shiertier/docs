---
title: "ChatGPT遭遇黑客攻击全线崩溃，在这之下我们能做些什么？"
发布日期: 2023-11-09
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647660245&idx=1&sn=c9f4036394b349ee2e64bc89612f99a4&chksm=f195495387a2d327accf8623eee71f39d1db11a001368f07791d528ab2651484cb5d5e488055"
---

## 摘要

**1) 一句话总结**
OpenAI在开发者大会后遭遇DDoS攻击导致服务器大面积崩溃，作者建议用户通过官方状态页获取实时运行信息，并呼吁自行注册账号以规避购买账号带来的封号风险。

**2) 关键要点**
*   **服务器崩溃与攻击确认**：OpenAI开发者大会后服务器性能急剧下降，官方状态页确认正遭受严重的DDoS攻击。
*   **黑客宣布负责**：黑客组织Anonymous Sudan（匿名苏丹）宣布对攻击负责，声称理由与以色列有关（作者认为实际原因可能是GPT大版本更新触动了他人利益）。
*   **用户误判**：服务器崩溃导致大批用户无法使用，许多用户误以为自己的账号被官方封禁。
*   **封号的唯一标识**：真正的封号提示仅为“账号已删除”（Account deleted），其他无法使用的情况多为OpenAI服务器崩溃或用户的网络代理节点存在问题。
*   **自注册账号安全性高**：用户自行注册的账号安全性极高（99.99%不会被封），即使频繁切换代理IP也不会导致封号。
*   **官方状态监控**：建议用户访问或使用邮箱订阅OpenAI官方监控地址（https://status.openai.com），以第一时间获取服务器实时的异常变动和运行状态。

**3) 风险/漏洞**
*   **购买账号的封号风险**：使用脚本批量注册的“购买号”存在极高的封号风险（早晚会被封禁），强烈建议不要购买账号。
*   **服务中断风险**：遭遇DDoS攻击等不可抗力事件时，会导致ChatGPT服务全线崩溃，普通用户面临完全无法使用该服务的风险。

## 正文

自从OpenAI开了开发者大会，要大版本升级之后。

服务器就崩成狗了。

可以从OpenAI官方的实时运行监控看出，这两天性能
急剧下降，
今天已经是极度严重的红色状态。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURquHAm2TWIDlbx5ZIcFT55xIfRqb2IMLLsCrWSwibqGUeKtOv1s0XicI3ufrb7gjCnQDUrU4TOCGVvA/640?wx_fmt=png&from=appmsg)

在页面顶部通知上，也明确的说明，正在遭受严重的DDoS攻击，导致服务器大面积崩溃。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURquHAm2TWIDlbx5ZIcFT55xqrGAePMqcsNIY6489siasqGY1x3SHibnXoqUBqhktbnkIonBsPVia8pbQ/640?wx_fmt=png&from=appmsg)

著名的黑客组织Anonymous Sudan (匿名苏丹)直接宣布对此次攻击事件负责。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURquHAm2TWIDlbx5ZIcFT55xfOvKImERl4x32e3Skgx2CAOWWdy6AbLz7KAHMsRUuhzYJUxibrSpE7w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURquHAm2TWIDlbx5ZIcFT55xtoB07DiaThDM81mDeJEcwjlCztA9NY7qvNYR3hy1wSj2iaIH3ZGCL4Rg/640?wx_fmt=png&from=appmsg)

理由很简单：
因为以色列。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURquHAm2TWIDlbx5ZIcFT55xFnEc27k7YrP4HwGCCMyoeUltl2PkMXfVbkmMoaNEU3DE1Ih92uBXJw/640?wx_fmt=png&from=appmsg)

不过这理由听听就得了，以色列这事都多久了，
Anonymous Sudan早不攻击晚不攻击，开完开发者大会后，开始了。要真是因为以色列，这反射弧也特么太长了。

主要还是GPT的这一波更新，动了太多人的奶酪了。

具体更新内容详见：

AI春晚OpenAI开发者大会一文汇总 - 迈向通用AGI的第一步

夺人财路，如同杀人父母。

但是神仙打架，导致ChatGPT崩溃，我们这群普通用户也跟着遭殃，大家几乎全部都无法用了。

然后群里就很多小伙伴慌了：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURquHAm2TWIDlbx5ZIcFT55xK7ibbxeSGxxWqnaPmpKGnwibeqQJib4rEZbMKKVk2rD1edfDhGflg6TfA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURquHAm2TWIDlbx5ZIcFT55xU8ibALqqmkIkBUMa5BhibKIFsycLXaYcQrCRg1siaoZyFH8yBp0tPZW0g/640?wx_fmt=png&from=appmsg)

我：。。。

虽然我知道这是一次非常严重的服务器崩溃，导致用户全面无法使用，但是大部分人还认为是自己号被封了。

可能是因为自己之前买的奸商的脚本注册号被封了导致一朝被蛇咬，十年怕井绳？

真的没必要。

首先我说一下，
只要是自己注册的号，99.99%不会被封
，即使是你每天开着魔法全世界遨游，也不会被封号。

只有在某一个IP上用脚本批量注册的那些脚本号，才会被封，而且是早封晚封的区别。所以我从来不建议任何人去买号。自己注册自己充值他不香吗？

教程我都写了7个月了，我保证你有手就行，注册个账号几分钟的事，成本就一个虚拟手机号，几毛钱：

ChatGPT账号傻瓜级注册指南 - 看完了你奶奶都能自己注册

如何体验GPT-4？ChatGPT-Plus会员傻瓜级开通指南

所以，
不要买号，不要买号，不要买号
。

重要的话我说三遍。

还有，也不要看到一个提示就慌不择路的以为号被封了，被封号只有这一种提示，叫做“账号已删除”：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURquHAm2TWIDlbx5ZIcFT55xIKkYGMbXj3yX7H1GxWtymzA6eiaxgtvFLcLcwOjQlPRGor87rLibUwWg/640?wx_fmt=png&from=appmsg)

其他所有情况都不是封号，要么是OpenAI服务器崩了，要么是你魔法脏了，自己换节点或者魔法去。

对于ChatGPT的服务器监控，看他们到底是不是崩了，有一个很好的办法，
就是订阅或者查看我在最上面展示的OpenAI官方监控地址：

https://status.openai.com。

官方会实时展示运行状态，有任何问题，这里都是第一时间公布。

并且OpenAI非常良心，支持邮箱订阅，直接
输入自己的邮箱地址去订阅，就能再不用管状态的事了。
一旦有异常变动，就会收到邮件提醒，不用打开邮件，只要收到提醒，基本就知道是运行状态出问题了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURquHAm2TWIDlbx5ZIcFT55xVPS3Ea9M0UQGY6lUm2B3C8dBwliaWaQNIkiaRde5FWX0mcSo1xiaMNplA/640?wx_fmt=png&from=appmsg)

这次
Anonymous Sudan (匿名苏丹)攻击OpenAI，算是一次天灾人祸，我们对与OpenAI的服务器修复，当然无能为力。

但是是一次很好的检验自己认知的机会。

不要人云亦云，不要随波逐流。

找到背后的原因，才能稳如泰山安心的睡个好觉。

当然，你也可以选择来找我（笑。

。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
