---
title: "聊聊AI产品做算法备案这件事"
发布日期: 2023-09-06
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647659623&idx=1&sn=d463d7e37a4c60cbff1d44a2b6da1b45&chksm=f179df08d7a0c58fd02e5389ab210f0f8e0039f04d3b770713bca6c439ae1fbb841c078c1f95"
---

## 摘要

**1) 一句话总结**
本文介绍了国内AI产品进行算法备案的政策背景、具体流程与注意事项，强调完成备案是AI应用向公众开放和商业化的法定前提。

**2) 关键要点**
*   **备案必要性**：AI应用必须取得算法备案，否则无法向全社会开放、收费及商用。
*   **官方定义与政策**：全称为“深度合成（生成合成）服务算法”，受《互联网信息服务深度合成管理规定》及《生成式人工智能服务管理暂行办法》（8月15日实施）监管。
*   **备案步骤**：分为两步。第一步为公司主体备案（需提交承诺书等，约1周出结果）；第二步为产品及算法备案（材料较复杂）。
*   **角色区分**：备案分为“服务技术支持者”（如提供底层大模型的企业）和“服务提供者”（如直接面向用户的AI应用，或接入第三方API开发应用的企业）。
*   **第三方API要求**：使用第三方大模型API的公司，在备案时需补充提供第三方技术佐证材料。
*   **产品功能强制要求**：依据新规，AI产品内必须建立健全的投诉、举报机制，并设置便捷的入口。
*   **审核周期与结果**：审核分为资质初审、线上二审、线下核查、线上终审，通常耗时3～4个月；通过后会收到短信通知并获得唯一的备案编号。

**3) 风险/缺口**
*   **合规风险**：未拿到备案即进行全面开放及商业化属于违法行为。
*   **时间延误风险**：若提交的备案资料被驳回修改，会导致原本3～4个月的审核时间进一步延长。
*   **产品设计遗漏风险**：开发者极易忽略在产品上设置投诉举报功能，从而违反新规第十五条的要求。

## 正文

最近很多人来问我AI算法备案这事。

发现还是有很多对AI算法备案不了解的人，甚至有人都完全不知道做AI应用产品需要做算法备案的。。。

群里有一个大佬总结的很形象：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURolYVSeWItaCqib75cxtd3miaoeU9vibnZb2u00SJaKCNjqCwZJuoOW8vdtaUndB6icc72u7ibjPRXorsQ/640?wx_fmt=png)

AI应用也是一样，你没拿到备案，你就没办法向全社会开放，也没办法收费没办法商用。

因为我们近期也拿到了AI算法备案，所以也想分享一些自己的经验，至少你要知道在AI这块，国家规定是什么样的，别做违法的事。

AI算法备案，全称：
深度合成（生成合成）服务算法。

最早要追溯到去年12月11日，《
互联网信息服务深度合成管理规定》首次发布。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURolYVSeWItaCqib75cxtd3miae9wOakRXYrSrV13JUqJxkWibiaOvOkCS3T3xVHdiccjMicWP1ujez5x5nQ/640?wx_fmt=jpeg)

同时，里面首次提到：
具有舆论属性或者社会动员能力的深度合成服务提供者，应当按照《互联网信息服务算法推荐管理规定》履行备案和变更、注销备案手续。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURolYVSeWItaCqib75cxtd3miaCQ7ZdSviao0icvib0L8NfCstdJdxjbY8TsyGwbR8EyCrLBJGXqz3pHEIg/640?wx_fmt=png)

而今年7月13日发布并于8月15号正式实施的《
生成式人工智能服务管理暂行办法》，再次明确算法备案一事。

虽然两份文件描述不一样，一个是深度合成算法，一个是生成合成算法，但是在备案系统里，这两被归为一类，就是一个东西。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURolYVSeWItaCqib75cxtd3miaaYRYcb58t8aq4qibvLibqj4wCiaX7KWoSThbhcZ2mUeicHccuReoJYwobQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURolYVSeWItaCqib75cxtd3miaLGo7QY6licvn5ehyLicM0Cpne07EJZqiamefLCCP5fazmaFbNgqvO7Abg/640?wx_fmt=png)

所以AI算法备案可以说，就是你做AI产品的入市门槛，你没这个门票，你就没有“营业执照”。

算法备案官网在此：

https://beian.cac.gov.cn/#/home

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURolYVSeWItaCqib75cxtd3miaUo9VkD91AszJGGL6TRbjjqRic9Opxp08TTXFhRHWT0Sjtf9fibfAjJ1Q/640?wx_fmt=png)

AI算法备案分为两步，第一步是公司主体备案， 第二步才是产品及算法备案。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURolYVSeWItaCqib75cxtd3mia1e2SatzW0s9NfMPRQtrA3iam1Bkib3icicMhAegUrnlmBfXHyv38tNlicuQ/640?wx_fmt=png)

公司主体备案稍微简单一些，按规定提交好资料，写好《算法备案承诺书》和《
落实算法安全主体责任基本情况》，
1个礼拜就会有审核结果。

当通过公司主体之后，就是材料非常复杂的算法备案信息登记了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURolYVSeWItaCqib75cxtd3miaZGKHTExxVlgiccUichcWymMuISz418mNwm6I9Kph29D39fhq5GeVUCJg/640?wx_fmt=png)

这块需要注意AI算法是有角色区分的。

分为服务技术支持者和
服务提供者
。

这块我用智谱AI来举个例子你们就能明白了。

北京智谱华章科技有限公司是公司主体，GLM-130B是大模型，本身不是任何产品，这就是服务技术支持者，给别的产品做支持的。

而ChatGLM（现在改名叫智谱清言）了，是一个也是一个APP，是GLM-130B这个大模型的产品应用，这就是服务提供者。

而一些小企业，接别人大模型的API，在这个API之上做自己的AI应用，这也就是服务提供者。

这么讲应该能明白吧？

而后续的材料这块就不方便多说了，根据备案系统要求挨个填就行。

该找法务把关的就去找法务，该要产品流程图的就去画产品流程图。

额外提醒一下，
如果是是用第三方大模型API的公司，需要补充提供第三方技术佐证材料。

并且在8月15号之后，新规中第十五条：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURolYVSeWItaCqib75cxtd3miaKibSEiafibN3pc5lFticQbm23ofP1viaXuU7fVEOlHeYcEwY4zdvhN3U0Lw/640?wx_fmt=png)

提供者应当建立健全投诉、举报机制，设置便捷的投诉、举报入口，公布处理流程和反馈时限，及时受理、处理公众投诉举报并反馈处理结果。

这一条很容易被忽略。
一定要在产品上做一个投诉举报的功能。

在提交完成之后。

就静静地等待吧。

一般情况下，分为资质初审、线上二审、线下核查、线上终审，历经
3～4个月
左右的时间，万一资料被驳回修改，时间还会延长。

当你通过的时候，会给你发短信通知，且产品也能获得唯一的备案编号。

这便是AI算法备案的的全部流程。

希望我的这篇文章，能让做AI产品这块的朋友有一些了解。

莫有侥幸，一定要拿到备案以后，再考虑全面开放以及商业化事宜。

毕竟，违法行为不是开玩笑的。

⭐吧，
感恩。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
