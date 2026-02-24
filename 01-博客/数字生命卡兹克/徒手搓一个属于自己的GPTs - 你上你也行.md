---
title: "徒手搓一个属于自己的GPTs - 你上你也行"
发布日期: 2023-11-10
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647660278&idx=1&sn=f8e73ef484e4a185137134e63622a764&chksm=f1c2fd584c98bd801152dd6f05188e6fda61250f1c56c19bdf1a0508a0c4b6a441db9b3cc246"
---

## 摘要

**1) 一句话总结**
OpenAI正式向ChatGPT Plus用户开放了GPTs功能，允许用户无需编写代码，仅通过自然语言即可创建、配置并分享集成了多种工具的专属AI助手。

**2) 核心要点**
*   **适用人群**：GPTs功能目前仅面向ChatGPT Plus会员开放，且分享的GPTs链接也仅限Plus会员使用。
*   **零代码构建**：用户通过自然语言对话即可提出需求，系统会自动生成GPT的名称、描述、核心Prompt（提示词）、开场问题及Logo。
*   **双面板操作**：操作界面分为“Create（创造/对话生成）”和“Configure（配置/手动调整）”两个标签页，右侧提供实时预览和测试界面。
*   **内置全能工具**：创建的GPTs默认集成“All Tools”能力，包括联网（Web Browsing）、绘图（DALL-E）和代码解释器（Code Interpreter）。
*   **支持外部知识库**：用户可以上传自定义文件（如PDF文档），让GPT基于上传的内容进行分析和问答。
*   **灵活的发布选项**：创建完成后，用户可根据数据隐私需求，将GPTs设置为仅自己可见、通过链接共享或完全公开。
*   **生态愿景**：OpenAI旨在通过降低大模型使用门槛，打造类似App Store的全新AI应用生态。

**3) 风险与不足**
*   **数据隐私风险**：在高级设置（Additional Settings）中，系统默认勾选“使用对话数据改进模型”的选项，存在将用户私有数据共享给OpenAI的风险（作者建议手动取消勾选）。
*   **严格的内容审查**：OpenAI对Prompt设置了严格的两道审核机制，若内容涉及敏感、攻击性或色情等违规信息，将直接无法保存或被弹窗拒绝发布。

## 正文

大清早的，奥特曼终于防住了匿名苏丹的攻击。

然后官宣GPTs正式向所有ChatGPT Plus会员开放。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpRqOBEhAuO8Lf1utrt4LOok5DGvEhv8kCT674fkAFGDq3bsPDicJYvTmfBBicRw8k97fjmbPeVIFVg/640?wx_fmt=png)

GPTs就是前几天OpenAI开发者大会所说的，那个无需代码，即可搭建自己的GPT的功能。

真的无需代码，直接自然语言构建你想要的GPT，
真正实现，你上你也行。

我也第一时间去试了一下，随手搭了一个好玩的GPT：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpRqOBEhAuO8Lf1utrt4LOosibSnYzDTnxmiaDicmSPk1z6PPNJ4sia74H3CyibeZn1MumznsE9VG3r9cQ/640?wx_fmt=png)

毕竟。。。谁不喜欢美女，谁不想给浩浩一个家呢哈哈哈哈。

其实GPTs本质上，就是一个更降低使用门槛的功能形式而已，我不知道大家有没有经历过3、4月份GPT套壳网站群魔乱骂的时代。那时候很多的小网站，都是基于GPT的API去做Prompt工程，号称是某一个领域的特异化助手。其实就是GPTs的雏形。

包括像文心一言的百宝箱，在产品设计思路的本质上也是类似的：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpRqOBEhAuO8Lf1utrt4LOoMtkVOGwU4AEOxwSFkSUm8ibBvHKc3ibwdFdkI6rS7WQInvXWSvbDHA8g/640?wx_fmt=png)

更进一步的降维，让更多用户都可以使用大模型，把大模型真正的变成自己的助手去提高效率，而不是上来问一句“你是谁”就跑了。

但是OpenAI在这个思路上，直接碾压文心一言和各类API套壳站了，基于自己恐怖的技术积累，使用自然语言构建AI助手，集成联网、绘图、代码解释器、外部API等等，领先同行2到3个世代。

目标也很明确，把自己继续做成生态，做成新时代的APP Store。

你搭建好的GPTs，自带ALL Tools，也就是在一个界面里，就能调用联网、绘图代码等等功能，还能分享给其他的用。

比如说：

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpRqOBEhAuO8Lf1utrt4LOoRHumKjibM3SyI5byoVFQt3dfhK4iajfOozavvcPAlVFpShgic9OJSYNVg/640?wx_fmt=jpeg)

...

我搭的这个虚拟女友的GPTs网址在此，有想试的可以随便去试着玩玩：

https://chat.openai.com/g/g-32QMy0msj-xu-ni-nu-you-lin-le-qing

徒手搞一个这个玩意非常简单。

ChatGPT新版本更新后（得先开通PLUS会员），在新界面上，有一个Explore。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpRqOBEhAuO8Lf1utrt4LOoKunXzgHKclP0ISKGYqBHy31rc9y62F1Msf4DkYyoZ6C1VAZg1HO7vw/640?wx_fmt=png)

点开他，就能看到你的GPTs和官方的一些。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpRqOBEhAuO8Lf1utrt4LOoyccibK18IM5RUZWWoicQRLbKuMkTUQlt8EB5VFvRbueyAhhnyQwx8ic3g/640?wx_fmt=png)

点那个Create a GPT，就能去搭建一个你自己的GPT了。

左边是操作界面，有
两个Tab，一个叫Create（创造），一个叫Configure（配置）。
右边是预览界面。

做一个你的GPT非常简单，直接在Create下，对他说你的要求就行。比如我上传了几个PDF，说：我想做一个根据我上传的“吃瓜文档”进行分析问答的GPT助手（毕竟
你懂的，金融行业啥都不
多就是瓜多。
）

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpRqOBEhAuO8Lf1utrt4LOoLvMamdEpKaaGHVLXNlGsLnMO7nFs0WxxAXccKYjZciblrNOibgU8NnlA/640?wx_fmt=png)

发给他后，哐哐哐的没一会后，他就会跟你说，建好了，名字定为BalaBala，顺道给你做了个头像。你看看
行不行。右边的预览界面也实时变化了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpRqOBEhAuO8Lf1utrt4LOoUELrWUHJKD2ug3b8trok89bPDLwEK1HuaKya2te7dEIoFCHmtLYnLQ/640?wx_fmt=png)

你当然可以继续跟他对话去修改。
也可以直接在右边的界面
测试一下是不是你想要的效果。跟随你的心自由发挥。

这个自然语言创造的本质，就是他根据你的一句话要求，直接生成这个GPT应用的名字、描述、核心Prompt、开场问题。

我们点开另一个Tab
C
onfigure，就能看到这些生成的信息了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpRqOBEhAuO8Lf1utrt4LOoD6zldU3zeLDcbEl5V5vIQGEeEZO8sgZA7vEIz7aBomeCJDSf70U1lA/640?wx_fmt=png)

你可以在他生成的基础上，再进行手动调整。比如我把名字设置成吃瓜模拟器，描述和logo还有开场问题也都换一下。右边的预览界面就直接实时变换。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpRqOBEhAuO8Lf1utrt4LOo60k3etkib7MVC0gmURtaTtb4TpmDOasHbiaAIKoDEnhZ2rniaibqFfaiaRg/640?wx_fmt=png)

同时Prompt那块是核心，如果你是小白就别管了，大佬们当然可以自己进行重写替换～

同时，划到最下面你会看到几个高阶设置：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpRqOBEhAuO8Lf1utrt4LOoTOdy7X6m5T9CsKficuOCqR1wySouia9jyqWTX4ZMVhDIW7nPwlqQyAuQ/640?wx_fmt=png)

Web Browsing、Dalle、Code那三都是老熟人了，默认勾选不用管。主要是最下面那个，
Additional Settings，默认是收起的，你可能会注意不到，点开里面就一个选项，翻译过来的意思是：

使用GPT中的对话数据来改进我们的模型。

你就看这OpenAI心里的小九九吧，反正我是建议，一律别勾，别把自己的数据给OpenAI。（虽然鬼知道这玩意勾不勾是不是真的有用，反正看OpenAI的良心了。。。）

最后一切就绪，点击右上角的Save，就可以发布了，如果不是啥私有数据，可以直接选第三个选项直接公开，如果有敏感的数据就第一个或者第二个了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpRqOBEhAuO8Lf1utrt4LOorD8jdktYqwdWXbv9o9NIEjbXxqIKaWSdbaXcicJpykXd36ianUYEvjXw/640?wx_fmt=png)

这一次的GPTs，OpenAI对Prompt的审核非常严格，加了两道审核，比如你写一个沾边反动、攻击、色情之类的Prompt，直接无法保存，历经千辛万苦过了第一道保存的关，最后还有一道审查，如果被拒的话就会显示这个弹窗...不要问我做那个虚拟女友林乐清的时候，看了多少遍这玩意。。。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpRqOBEhAuO8Lf1utrt4LOoWuFb0ov0B0oxKMLKI7JgB6qLBMn6Plmcb82MKFPTsrCDqVibZ3EUlGQ/640?wx_fmt=jpeg)

最后，发布成功之后，你就可以愉快的体验这玩意了，当然，也可以把链接分享给你的朋友体验，不过你的朋友也必须是PLUS会员才行哦。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpRqOBEhAuO8Lf1utrt4LOogiaUrOb6icW5DL7v7a8MylhrtxtF9YWjKRoTsT3j59N0t87qFZzMwRMw/640?wx_fmt=png)

基于GPT-4超强的能力，和ALL Tool的超强AGI，GPTs已经以一个极其迅猛的速度在发展，一天就有超过上千GPTs建立。

这个生态，已经无人能及。

而另一边，就像马斯克对奥特曼说的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpRqOBEhAuO8Lf1utrt4LOoHeKp7d8O9xZtMsz6wsm2PwowniaabdDq60DGbUMqPNZZCsQ4NDm01Og/640?wx_fmt=png)

一将功成。

万骨枯。

。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
