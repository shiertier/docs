---
title: "GPT-4正式发布，ChatGPT迎来史诗级更新"
发布日期: 2023-03-15
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647657895&idx=1&sn=bb2d41ceb4cf590ed44ce577f8b4251f&chksm=f1cd9ee25c561847f1b82f0305c24ab50cb037ed00971ac7e9543c8a02817463feabb36d3930"
---

## 摘要

**1) 一句话总结**
OpenAI正式发布具备多模态能力的GPT-4模型，其在图像理解、逻辑推理及各类专业学术考试中实现了突破性的性能飞跃。

**2) 核心要点**
*   **多模态能力**：GPT-4从单模态升级为多模态模型，支持同时输入图像和文本，并输出文本。
*   **深度图像理解**：能够准确理解图像中的复杂逻辑与常识（如幽默元素）、总结论文截图，甚至能根据手绘的网站草图直接生成包含HTML代码的可用网页。
*   **逻辑与推理进化**：推理能力大幅提升，能够解析并解答以图片形式输入的复杂物理问题。
*   **标准化考试成绩优异**：在多项人类专业考试中表现拔尖，包括超越40%以上的数学竞赛考生、高分通过统一律师考试（Uniform Bar Exam），并在宏微观经济学、统计学等科目中取得满分（超过100%的考生）。
*   **NLP基准测试霸榜**：在HellaSwag和ARC常识推理任务中正确率达95%以上；在MMLU专业学术问答中，其小语种版本的准确率全面超越了谷歌PaLM模型的英语准确率（69.3%）。
*   **幻觉问题改善**：相比上一代GPT-3.5，GPT-4在生成错误事实（“胡说八道”）的情况上有大幅改善。
*   **研发时间线**：核心模型训练已于去年8月完成，OpenAI随后耗时6个月进行微调以对齐人类使用场景。
*   **获取渠道**：目前用户可通过付费升级ChatGPT Plus会员直接体验，或通过官网提交申请排队获取API访问权限。

**3) 风险/不足**
*   **职业与社会秩序冲击**：文中明确指出，此次技术革命将导致“旧秩序和职业消亡”。
*   **行业竞争压力**：GPT-4的发布给同行业其他公司（如即将发布大模型的百度）带来了极大的竞争压力。

## 正文

一觉醒来，各种微信群直接炸了。

OpenAI凌晨直接发布了GPT-4。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURptpsf1iakZ3CTeiaSdoC3f1DvtpgeSA1oBeDkl4P1HqibM91CKrO6Xnibia944mzicRYfskNEdHGNPEzfA/640?wx_fmt=png)

一通王炸，震的头皮发麻，用流浪地球的话来说：

“起初，没有人在意这一次革命，以为这不过是一次简单的技术迭代，直到跟每个人息息相关。”

现在，我最担心的不是我们自己，而是明天下午百度的文心一言发布会。。。已经不指望争气了，别太拉胯就行。。。

一、多模态模型

GPT-4是一个多模态模型，以前的GPT-3.5，只是单模态的，你输入文本，他输出文本，即使有些邪教手段让他调用别人的接口，单是他本质上还是没有那种能力。

GPT-4的多模态很简单，你给他输入图像和文本，他给你输出文字。听起来好像也就那样，但是这毕竟是GPT，是OpenAI的作品。直接用他们自己的演示的例子做展示吧。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURptpsf1iakZ3CTeiaSdoC3f1DeevTyE3IWAib3mkV7OsqNfM2H1XXmyvuI639LQpctAMbGn3k8eusB6w/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURptpsf1iakZ3CTeiaSdoC3f1D7AZQb38rKvYUQhMYku20ogMB7Cuj4ScRA04BELrHnQ2ia5Bww6GZFmg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURptpsf1iakZ3CTeiaSdoC3f1DeLbPpMpQFncibmSCVb6BtvRQZDkIZToLZ3Kib4qBvWPkHqic6Gl22IicLg/640?wx_fmt=png)

GPT-4对图的理解有了质的飞跃，已经不仅仅是理解图的含义了，什么识别猫识别狗这种简单的东西对GPT-4来说就是婴儿级别，他已经能正确理解理解符人类尝试、能正确理解什么叫搞笑。

你还可以直接把论文截图发给他，让他总结。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURptpsf1iakZ3CTeiaSdoC3f1DtqlFLlFAYPj98FCfNnqsOKDYxRldhWhblHwkLMBwMia2Dkib6hSK1ItA/640?wx_fmt=png)

然后他们在演示视频里还弄了一个骚操作，直接在本子上画了一个网站的草稿，拍照给了GPT-4

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURptpsf1iakZ3CTeiaSdoC3f1D7zpUMr86icAfNqUw3OOyjIKpuNOicD2aS45YcPs9Qtx8p4iaHJyboHwaw/640?wx_fmt=gif)

直接网站就做好了，还特么带了HTML的代码。。。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURptpsf1iakZ3CTeiaSdoC3f1DTLXWicx2ZpDHclRqAvic0OkeHiadpMwDicaZE4nicob7o3XFAm80nFVc7Vg/640?wx_fmt=gif)

二、理解能力的进化

而在推理和逻辑能力上，GPT-4也有了质的飞跃。

用一个简单的形象比喻：“GPT-3.5是高中生，那GPT-4就是名列前茅的研究生。”

例如给一个非常复杂的物理问题，直接以图片形式发给他。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURptpsf1iakZ3CTeiaSdoC3f1Ds6QfsXWQLJicbMA7OfFPpg6B3OF7gibMyTopQ1vVZcp5hgvHVeic2fm5g/640?wx_fmt=jpeg)

GPT-4回答的非常牛逼。这个推导过程给我看的一愣一愣的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURptpsf1iakZ3CTeiaSdoC3f1D0HKu4p6BmBO4YB7ibbCuQMLYsUaibsCHcwpic014kPj0lOHIicDdFtoCsg/640?wx_fmt=png)

这种回答个物理问题也是小儿科，GPT-4直接用非常量化的手法告诉你他有多牛逼。

这个量化方式叫：刷榜。

直接把奥赛、AP、各种乱七八糟的考试给你做一遍。

这个表意思就是GPT占考试排名的百分位，最左边是微积分，然后是全美数学竞赛。之前的基本0分，都在嘲笑聪明如ChatGPT，不识加减乘除123。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURptpsf1iakZ3CTeiaSdoC3f1D0JSZOEH71z5Xm2L8FrtSOPLE2KQKA9wMrIicQb1t7GaWm4e2Gj7XWSw/640?wx_fmt=png)

现在直接超过40%多的学生。注意，这特么可是数学竞赛，不是你理解的普通数学考试。

最重要的是从左往右数第六个那个一柱擎天的条，Unifom Bar Exam，统一律师考试。

这个考试对律师有多重要不用我赘述了吧，GPT-4直接给你干碎了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURptpsf1iakZ3CTeiaSdoC3f1DZ8rH8gpVBJ75UB1os2MA3M2Byiciayr7wa99Bq81tLQzk7RAhbiamEDFw/640?wx_fmt=png)

还有这个图里没写出来的课程，宏观经济学、微观经济学、统计学等等，全部满分，超过100%。

还有NLP的传统任务也全给你干碎一遍。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURptpsf1iakZ3CTeiaSdoC3f1DA2SWsU5kEsUcwFs7HPibdI4aR9RDOuBibCm4MJ47goRHfWX5Rtc09YjA/640?wx_fmt=png)

比如基于常识推理的
HellaSwag和
AI2 Reasoning Challenge (ARC)，正确率基本达到了95%以上，与真人无异，；基于专业知识学术问答的MMLU，直接爆锤现在世界上的其他模型。

然后还玩花的，把MMLU做成多语言版本，继续秀肌肉。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURptpsf1iakZ3CTeiaSdoC3f1DQxM9JLYdAdJkFy7llXktPJLcmD1wzWUSBqTdOMeaBpuHZjNecfCyZQ/640?wx_fmt=png)

这块还把谷歌的PaLM模型拿出来鞭尸，你英语模型的正确率才69.3%，我小语种都比你牛逼。。。全面爆锤谷歌。

而胡说八道的情况，相比GPT-3.5，也有的相当大的进步。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURptpsf1iakZ3CTeiaSdoC3f1DOibOribgZS7QicXdhibX0dRtz5ryBWz5iaicKRC1vul6hgBUMBW8xoqJ1jVQ/640?wx_fmt=png)

三、其他

按照OpneAI的说法，他们在去年底8月就已经完成了GPT-4的训练，他们花了整整6个月时间来为GPT-4做调教，让他们复合人类场景。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURptpsf1iakZ3CTeiaSdoC3f1DCGs9iaENiav5XCx6jpQDUJWMuLNkE9BiaY19jnwEDzbrurE3BeF85u1iaA/640?wx_fmt=png)

只能说，OpenAI的技术沉淀太恐怖了，去年8月就训练完成了，那时候，其他的公司在干啥呢。。。

现在想体验GPT-4，有两种方法，一种是直接付费升级到PLUS会员，可以直接用；另一种是排队，按照前端时间NewBing、NotionAI等等各种玩法，直接先排再说，也不知道要等到猴年马月。

排队网址在此：https://openai.com/waitlist/gpt-4-api

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURptpsf1iakZ3CTeiaSdoC3f1DUEe7N65pl20WhzqkJfvCvJuJROs6IB1AyuuGhMZ55I5uy55lHFhNow/640?wx_fmt=png)

进去网址以后把表填了就行了。

现在压力来到了各大公司面前。
但是我
估计最慌的应该是百度了
。
各种段子扑面而来

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURptpsf1iakZ3CTeiaSdoC3f1DXO54rgg7hkuVZSvP5bgc2o3ibBicLHtK484Eq2J2txYvgvFH7Xiauw46Q/640?wx_fmt=png)

怎么说呢，
GPT-4的诞生给行业又带
来了一次郑重的宣誓。

这就是第四次工业革命，旧秩序和职业消亡，新的秩序即将诞生。

最后，用《三体》叶文洁的一句经典台词作为结尾吧。

“这是，人类的落日”


## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
