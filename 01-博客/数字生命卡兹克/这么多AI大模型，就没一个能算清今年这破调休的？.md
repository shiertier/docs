---
title: "这么多AI大模型，就没一个能算清今年这破调休的？"
发布日期: 2024-08-28
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647664908&idx=1&sn=99a425d3bbada83d9df8e0042e57d5ec&chksm=f11b2557ba267b70a492950429e0358da76e077f6407d9d3f12b7ff104305f28e84b1ca85f94"
---

## 摘要

**1) 一句话总结**
针对2024年中秋国庆复杂的调休安排，作者测试了12款主流AI大模型计算实际新增的休假天数，结果显示仅有Claude能准确算出正确答案（4天），其余模型全部计算错误。

**2) 关键要点**
*   **调休规则复杂**：2024年中秋与国庆假期涉及连续5周的调休，具体安排为“上6休3、上3休2、上5休1、上2休7、再上5休1”。
*   **测试变量与方法**：选取国内外12款主流AI大模型，提问“除正常周末外，实际多休息了几天”，每款模型通过新建对话的方式严格测试5次。
*   **标准答案**：实际仅多放了4天假（中秋节法定多1天，国庆节法定多3天）。
*   **Claude表现最佳**：Claude是唯一获得满分的AI模型，5次测试均准确给出了“4天”的正确答案并理清了计算逻辑。
*   **GPT-4o表现**：未能算对，给出了多放26天的错误答案。
*   **国内大模型表现**：全部计算错误。其中豆包回答8.5天，文心一言回答8天，智谱清言（唯一使用代码辅助计算）回答13天，腾讯混元甚至得出“-16天”（少休息16天）的结论。
*   **公众情绪反馈**：复杂的调休引发了广泛的社会讨论，公众表面上是在争论调休算术题，实质上表达了对拼凑假期和缺乏有效休息的不满。

**3) 风险/缺口**
*   **旷工风险**：调休安排过于复杂（如接连5周调休），容易导致员工记错日程，存在不留神导致旷工的风险。
*   **身心透支风险**：调休导致的连续工作（如连上6天班）会引发打工人的身心疲惫与过度透支，无法达到真正放松和休息的目的。

## 正文

虽然我人还在泰国跟红衣大叔周鸿祎在靶场开心的射击。

但是也知道
昨天（8月27日）的一条微博热搜爆了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr5PMWbZXwnSecm4KU0c5YJ2KYRxCAtRAM7CdeTy3ibMJbzTCffibWyV0zRxibSiakwkxAuIR7KKr3v7A/640?wx_fmt=png&from=appmsg)

这一大串看着“像代码”的文字，乍看莫名其妙，其实这说的是今年中秋节和国庆节的放假调休安排。。。

嗯，特酿的今年的中秋和国庆放假安排，
从9月9日开始，先是上6休3（中秋节），再是上3休2，接着上5休1，然后上2休7（国庆节），最后上5休1，接连5周调休。

我反复脑子就现在就有个唐僧在念经，这一连串的数字和中文字，我全部是左眼进右眼出。

这特么比我玩的双十一和618凑个满减都复杂。

一不留神你就得旷个工。

同时热搜上还有一个词条，叫 #调休 数学题# 。

被调休“逼疯”的打工人精神状态一览：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr5PMWbZXwnSecm4KU0c5YJ61AVzWmUoBL9vHIO7OUIVibIwU79El06kFxZKPHz7RuY2nWt1gTrLpA/640?wx_fmt=png&from=appmsg)

#上6休3上3休2上5休1上2休7再上5休1# 直接给当成
6-3+3-2+5-1+2-7+5-1 = 上7天班？

这是已经被这个调休给刺激的魔怔了，已经进阶到精神胜利法了。

这就跟想减肥的人吃肉一样，吃饭前先看一眼，外面没写热量那就是0卡。

我只能说，这位网友是会做数学题的，诺贝尔“数学奖”，实至名归
。

![](https://res.wx.qq.com/t/wx_fed/we-emoji/res/v1.3.10/assets/newemoji/Yellowdog.png)

不过说正经的，我也是真的想知道，这么乱的调休到底调了个啥。

在微博冲浪了半天，大家在广场调休来调休去，最后还是没看有谁解释明白：
除了本来就该放的周末，我们到底“多放了几天假”？

这一大串“调休代码”这对我这样N年没碰数学题的人，够有挑战性了。

来，大家一起来看看官方发布的调休日历，算算到底“多放几天”。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr5PMWbZXwnSecm4KU0c5YJ1v8ZdkzF8G8iaR9FLmiaQq2ExdVcQsUwmyCvlqZ1jmLqxrTNbuiatd21w/640?wx_fmt=png&from=appmsg)

我和团队的小朋友们也算了好久，中途我们自己都一度算错，差点就拍板说这五周的调休“多放了3天”。

就在一群人为计算结果争论不休的时候，我们打算把这个问题扔给AI。

我们把目前国内外
主流的12个
AI
大模型
，全都问了个遍，问题就是：

这是中国2024年9月9日（星期一）开始到10月13日的放假调休安排:上6休3上3休2上5休1上2休7再上5休1。

请你告诉我除了我本来该休的周末，我因为放假多休息了几天？

为了测试严谨，每个大模型我们都问了5次，每次都是“新建对话”减少记忆对回答的干扰。

并且为了让AI的表现好点，我还会给一些差生时不时添加一些能辅助它们理解的prompt。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr5PMWbZXwnSecm4KU0c5YJpHMbNNtT8P88bkOvqcBRhicq9wfiaXXL1bpaTiaOPQJO77w5WpIVTeF9g/640?wx_fmt=png&from=appmsg)

没想到它们看了半天，全都越看越蒙。不止是我这个“数学白痴”，AI大模型也被这个问题硬控了。

AI大模型的表现，真就是各有各的节目效果。。。

GPT
：26天。

本次“最爱放假的AI”奖，GPT-4o实至名归。

它直接给大家来了个“长长长～～～”假。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr5PMWbZXwnSecm4KU0c5YJn6ciaXgzjGj5VEJJvBL9prkGeewIv3HFfgLWpBTtTY2YdPnCkjRS5QQ/640?wx_fmt=png&from=appmsg)

看看，GPT多会体贴人。

26天，在放寒假和暑假中GPT选择给调休的各位送“秋假”。

要我说，虽然它数学题做得差，但是它知道心疼被调休的大家呀！

就是。。能不能把这26天假期送给我。

我也想休假，真的。

豆包：8.5天。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr5PMWbZXwnSecm4KU0c5YJu8VqV0X7HWUGy3pajsVWuX1HrJHmVxuo1KvOAFaTKAXdX2icTHw6vWA/640?wx_fmt=png&from=appmsg)

这绝对是我们测试里Drama程度前5名的回答。

这是我第五次问它获得的结果，我一度以为豆包这是被问烦了，摆烂了。别的AI回答错好歹还是整数，豆包这一串“0.5”到底哪来的？

精神状态遥遥领先所有AI哈哈哈哈。

于是豆包也喜提“AI数学错题集”选手表彰，5连错也是不容易：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr5PMWbZXwnSecm4KU0c5YJALKGtmG73e5CprR1XfSSKI3je8PX0QamAV84lXpLXGPIR1efCOUAhw/640?wx_fmt=png&from=appmsg)

文心一言：8天
，以及 ，
智谱清言：13天。

两位都是“越努力越心酸”选手。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr5PMWbZXwnSecm4KU0c5YJ7hibnHjsBO8Qictzx4pCtfdre8tV7SF0QsdeXXJ6PmsLUVDFZoJQKxDQ/640?wx_fmt=png&from=appmsg)

文心一言在我登陆的时候，突然给我的账号送了个一天的4.0turbo的会员，真会选日子啊～

但是很可惜，分析很用心，回答很错误。

智谱清言也差不多。它是所有AI模型里唯一被我试出了用代码做计算的，然而：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr5PMWbZXwnSecm4KU0c5YJyrFjYe7FauibBibOgT2KgllAbZszt7ayPic6t48w9qVBu8HURHNWlC1VQ/640?wx_fmt=png&from=appmsg)

这代码算半天，回答还是错的。

甚至最后的回答没有好好审题！

问的是“多休息几天”，回答全部的放假天数算咋回事？

扣分！直接扣分！

腾讯混元：-16天。

这位更是重量级啊。

要说上面这些还都不是最离谱的，毕竟它们都知道调休终究还是为了假期。

然而腾讯混元直接告诉我【你因为放假实际上少休息了16天】，直接给我颠覆“放假”的概念。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr5PMWbZXwnSecm4KU0c5YJIhA9haG7hcCufvicoU7tRia6otdsXM4cbtkRX7H8fhtmmGWBbM3PyTGg/640?wx_fmt=png&from=appmsg)

怎么个意思？这是什么牛马先锋思维，放个中秋国庆还得让人
多上16天班
？

好好好，你该不会是把调休当成了加班了吧
。

腾讯混元要是个人，绝对是个当资本家的好料子（bushi）。

好了好了，言归正传。

最后公布真正的正确答案：多放了
4天
。

而这么些AI里，唯一一个满分选手，是Claude。不愧为“AI界新王”。

只能说OpenAI这么多核心成员跳槽到Anthropic，确实是有很大成果的。

所有的测试中，
只有Claude的回答5次都正确
。而且看来是真的会，不是给我们瞎蒙了一个数。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr5PMWbZXwnSecm4KU0c5YJMCTYKsF9FXtFOw1K9EHOqc7gB1HVxyl6cibR7WzrPAwh2BCErVcFbjA/640?wx_fmt=png&from=appmsg)

这里放出来一个学霸的标准答案，帮大家理清一下思路。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr5PMWbZXwnSecm4KU0c5YJvDoPlXCicK0tlZAg0P0aNCM0SZSpJBjcMM7terSuVrMMH8kwqBWsJGg/640?wx_fmt=png&from=appmsg)

正确答案就是：多放了
4天假
（中秋节法定多1天假，国庆节法定多3天假）。

所以啊家人们，懂了吗，就为了这四天假，硬生生造了一个调休数学题啊，让几乎所有的大模型都全军覆没啊。

就这么一个调休放假的问题，测的时候真把我一天的乐子给笑完了，MD太艺术了。

各家AI大模型一顿操作猛如虎，结果全是“二百五”。

也就新王Claude牛逼点。

ChatGPT？洗洗睡吧。

这场不那么严谨的“AI调休数学竞赛”，不仅让我们重温了各家AI技术的花活，也证明了咱“中国特色调休文化”的魅力。。。“调休”，伟大的发明。

不得不佩服“专家们”的聪明才智。

他们总能在原本简单的日历上，编织出如此令人眼花缭乱的数学题，让广大群众在享受假期的同时，还能免费获得一次大脑升级的机会。

每到节假日，不仅要准备行李，还得准备好计算器，以防一不小心把假期“算丢了”。

网友们对调休的讨论越来越多，活也越来越多。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr5PMWbZXwnSecm4KU0c5YJyxz6pyeKPXI6AuNAthbF2qy9OVoLicOQlpdibyMTB8FK1xMvkmu8Bspw/640?wx_fmt=png&from=appmsg)

测试的时候我就在想，如果把这些调休规则编入教材，说不定能培养出一批数学天才。毕竟，能在这种复杂系统中找到最优解，绝对是一项值得“诺贝尔数学奖”的成就。

嗯，你懂我是什么意思。。。

以及，这么一个热搜词让人看到了用“魔法攻击魔法”的场面：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr5PMWbZXwnSecm4KU0c5YJTH8KexH6IE9FNa6xInIC8mEhdmiczFzGibJGg0BBicPUxicmicMnR3icoiciag/640?wx_fmt=png&from=appmsg)

不得不说，这是我最支持专家的一集。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr5PMWbZXwnSecm4KU0c5YJZDmo9akP7tGeDiadAichhJIfX7nML02vWsUfdAbAInwO1jZudbMqyXIA/640?wx_fmt=png&from=appmsg)

“调休”，这个看似善意的制度，究竟是福是祸？

表面上，它确实给了我们“更长”的假期。我们可以在中秋夜仰望同一轮明月，在国庆时把足迹遍布祖国大地。

但是我们在连续工作6天之后，那如此疲惫的身心呢？

表面争论的是调休，背后反感的是疯狂加班带来的身心俱疲；表面争取的是假期，背后渴望的是过度透支急需的有效休息。

打工牛马们其实要得不多，无非是被听见、被看见。

以及，被尊重。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr5PMWbZXwnSecm4KU0c5YJuR8GVzJibthBS02ZhuoElDqk9KhODFHnYPO9LXBmxZZgiavw6m63UHLg/640?wx_fmt=png&from=appmsg)

当我们为那几天“拼凑”出的假期欢呼雀跃时，也许应该停下来问问自己：

现在的“调休”，真的让我放假了吗？

真的让我，放松了吗？

最后，也不知道该怎么说了，我只能说，“既来之则安之”。

希望大家在即将到来的中秋国庆假期中，无论是工作还是休息。

都一定能玩得开心，过得充实。

这是我最微不足道、最真诚的祝愿。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
