---
title: "让ChatGPT自己给自己写Prompt - 坐享其成"
发布日期: 2023-04-07
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647658151&idx=1&sn=8ec40800b2c62e30fa6dd6e3841ab4bf&chksm=f1cd3e06395192133fc14eb21fdccb9a38e477ef32555925817aa8c774715e46bbf68b1f749b"
---

## 摘要

**1) 一句话总结**
本文介绍了一种利用“Prompt Creator”模板让ChatGPT通过“提问-回答”的多轮对话机制，自动引导用户细化需求并生成高质量、可落地Prompt的方法。

**2) 关键要点**
*   传统的Prompt框架（如CRISPE）和提示词大全通常建立在用户已经明确具体需求和细节的基础上。
*   当用户只有大致方向而缺乏具体细节（如不了解具体业务诉求或内容形式）时，难以直接写出实用的Prompt。
*   作者在OpenAI的Discord社区中找到了由@gods_software创建的“Prompt Creator”通用模板，用于让ChatGPT自己生成Prompt。
*   该模板的运行机制为：用户输入初步需求 -> ChatGPT生成初始Prompt并提出多个问题 -> 用户回答 -> ChatGPT迭代出更完善的Prompt并继续提问。
*   通过这种不断循环的对话方式（实际应用中可达10轮以上），能够将模糊的需求逐步具体化和个性化。
*   在“手机宣传片视频脚本”的测试案例中，仅经过两轮对话迭代生成的Prompt，就成功让ChatGPT输出了包含分镜、场景、故事性和文案的完整脚本。
*   经过多轮迭代生成的Prompt基本能完美符合CRISPE等专业框架的标准。

## 正文

最近跟很多人交流Prompt。

无论是我之前整理的Prompt大全：
我花了100个小时，整理并撰写了一份ChatGPT的超实用prompt大全...
，还是刚写的
CRISPE的Prompt框架：
如何写出优雅的prompt？- 通用的万能框架

都解决不了一个问题是：

我只知道一个大的方向，可是我并没有细节的想法。所以我没有办法去实际落地。

无论是Prompt大全还是
CRISPE框架，都建立在你已经知道你想要什么的基础上。比如你明确的知道你有一篇文章，要把它转成小红书风格；你明确的知道你需要让ChatGPT一定要从哪些角度回答等等。

但是，并不是所有人所有事都是这样的。

例如今天刚有一个朋友问我说，我想写一个宣传片的视频脚本，有没有可以直接用的Prompt。

当时我走在街上，想了好一会，最后只能无奈的回答到，我并不了解你的具体业务诉求，也不了解宣传片这种形式，我也不知道怎么去写这种Prompt模板，抱歉。

可是在我的认知中，现在大家所认知的Prompt只是一种中间态，是人与机器之间沟通的语言，仅此而已。一定有一种方法，让写Prompt不这么困难，让所有人都能愉快的写出实用、自定义性强、可落地的Prompt。

ChatGPT可以根据一句话生成Midjourney的提示词。如果让ChatGPT自己写给自己的Prompt呢？

于是我去了OpenAI在Discord上的Prompt军火库里面找。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURokYcH3Y1ZhvDSXXKCvDrwAxiaTcOiaA4MtkXAMEhLhoOAAsRBeIZEkHAibuBgdunyKic1uTlq39fdIog/640?wx_fmt=png)

找啊找啊找啊找。

终于找到一个有趣的玩意。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURokYcH3Y1ZhvDSXXKCvDrwApbSnTbbtIB4X07qyOCptoqOCmWaAVy3Zb5zPVldYyFygj5QMCwPUJQ/640?wx_fmt=png)

Prompt Creator，提示创建者。由@
gods_software创建的通用性的模板。

作用就是你输入你的需求，然后通过“ChatGPT提问-你回答”的方式，把需求具体化和个性化，从而一步一步创建一个专业的、需求明确的prompt。

话不多说，直接开始举例子。

现在，我们需要写一个某手机的宣传片视频的脚本。直接先把Prompt Creator复制到ChatGPT里。让后简单的说一句我的要求：“
想让ChatGPT帮我写一个手机的宣传视频脚本
”

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURokYcH3Y1ZhvDSXXKCvDrwA82gdibicp2YxmhlchXeemjT2w0sBWJ2hsibSia2A6F2dHTzqvicibFbpTIyg/640?wx_fmt=png)

我其实并不知道要写一个手机的宣传片视频，我要从哪些方面去写，ChatGPT根据我的描述，直接给我生成了一个Prompt：

你正在为一款全新的手机制作宣传视频，希望ChatGPT能够为你提供一个完美的脚本。请使用你的想象力，为这款手机设计一个引人入胜的视频。脚本需要突出这款手机的特点、功能和优势，同时能够吸引受众的眼球并激发购买欲望。

讲道理，这个Prompt其实已经很棒了，但是对于细节，还是不够。ChatGPT提出了三个问题，以帮助我们丰富这个Prompt。我们回答它。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURokYcH3Y1ZhvDSXXKCvDrwAiaeOjdqtf8aDXqyKhBGKiaibCLZQMrstRUkMoYEVpzsequkOKxVGTMRMQ/640?wx_fmt=png)

ChatGPT根据我们的回答，帮我们生成了一个改进的新的Prompt。接着ChatGPT又继续提出了3个全新的问题，风格是什么？是否要强调特定功能？是否要突出？我们继续回答。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURokYcH3Y1ZhvDSXXKCvDrwAjUZM8LWwlClK2KuibqliayE5wLQt1ycmsBzvFA5fMCh9Z0AYGNZ1Gjibg/640?wx_fmt=png)

又生成了改进的Prompt，已经基本完美符合
CRISPE框架了。同样的，生成了3个新的问题，是我之前完全完全没有考虑到的，
实际应用中，你可以一直回答，一直改进，甚至可以来回10轮以上，直到你生成极其详细极其严谨可落地的Prompt。

因为文章篇幅原因，我们就在这里直接选择结束，拿现在仅仅对话两轮的Prompt新起一个窗口，去试试效果。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURokYcH3Y1ZhvDSXXKCvDrwAkts9Yy6cXEP7wHEYXMfBiaLezcsMibB3dubEg2eTZ7DPDwUMRIM7tOIw/640?wx_fmt=png)

带有分镜，所有的场景全部考虑到，还有故事性。配上文案，已经是妥妥的完全可用的状态了。

要注意：这仅仅只是对话了两轮，且我仅生成了1次的效果。

真正应用中，你们对话10轮，感受一下
Prompt Creator的威力吧。

Prompt很长，我直接放在了之前的Prompr大全文档里，后台回复“P”直接获取，第一条就是。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURokYcH3Y1ZhvDSXXKCvDrwAoib4E2HcTebO8wLcAyicBBzZJAkId3B6v0YMzedow6668bpIgmft7S9A/640?wx_fmt=png)

愿人人都能享受AI的魅力。

愿人人都能成为那完美的人。

以上，创作不易，有用的话请帮忙点个关注和在看，感恩。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
