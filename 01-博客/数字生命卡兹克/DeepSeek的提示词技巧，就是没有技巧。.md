---
title: "DeepSeek的提示词技巧，就是没有技巧。"
发布日期: 2025-01-28
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647668247&idx=1&sn=c7898e4c2aa11703cd79011500f27f85&chksm=f1d48263af437ec79b16975b4e536623bafac4185b6fed8caf07ec7724d00f4caef7a9e74183"
---

## 摘要

**1) 一句话总结**
DeepSeek-R1 是一款性能媲美 OpenAI o1 的低成本开源深度推理大模型，其最佳提示词策略是放弃复杂的结构化模板，直接用自然语言清晰表达背景与目标。

**2) 核心要点**
*   **公司背景**：深度求索（DeepSeek）成立于2023年7月，背后由量化私募幻方基金支持，资金与算力充足（拥有万卡A100集群），不以短期盈利为导向。
*   **成本与定价**：DeepSeek-V3 训练成本仅为 557.6 万美元（约为海外大厂1/3）；DeepSeek-R1 的 API 价格仅为 OpenAI o1 的 3.7%。
*   **模型定位**：DeepSeek-R1 是深度推理模型，对标 OpenAI o1，而非 GPT-4o 这类多模态通用模型。
*   **使用方式**：网页端与APP端均免费开放，勾选“深度思考”即调用 R1 模型，不勾选则调用 V3 模型。
*   **提示词技巧（核心）**：放弃传统的结构化指令（如“按123步执行”），采用“你是谁 + 背景信息 + 你的目标”的极简句式，将任务交由 AI 自我推理。
*   **降维解释技巧**：若模型输出内容过于专业难懂，可在提示词前加入“我是一个小学生”，促使模型输出通俗易懂的白话解析。
*   **中文写作能力**：具备极强的中文写作与文风模仿能力，仅需一句话提示即可精准模仿特定作家或大V的风格（如鲁迅、李煜等）。
*   **联网推理能力**：与 OpenAI o1 不同，DeepSeek-R1 支持“推理+联网”功能，可搜索实时网页信息进行分析写作。
*   **算力市场影响**：虽然 R1 的低成本引发了短期算力股下跌，但基于“杰文斯悖论”，大模型成本下降长期看会推动 AI 应用繁荣，从而增加总算力需求。

**3) 风险与不足**
*   **服务稳定性**：由于近期用户增速过快，服务器偶尔会出现崩溃、断网或无法连接的问题。
*   **联网检索缺陷**：在联网资料的 RAG（检索增强生成）层面仍存在一些问题和不尽如人意之处。

## 正文

这两天，DeepSeek-R1火的飞起，在中日美三个Appstore榜上登顶。

昨晚，还直接干崩英伟达，盘前先死13个点，连带着台积电一起。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpPibFNQFT14D7mJeGVlibpEUgd0QmIYsWxuzdHUrZL28XXVcWIm6m6atxian8fJEicVTh1gb3vxPZ3zw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpPibFNQFT14D7mJeGVlibpEURrRuibrvxs5vLicEG0Ch2LNqp9S4j4icYm7jKCIOljmOFQvaZAyHFpiciag/640?wx_fmt=jpeg&from=appmsg)

几乎一夜之间，所有人都在关注DeepSeek，甚至我在老家，完全没用过AI的七大姑八大姨，都在问我，DeepSeek是什么，怎么用。

还有一些人体验了一下后，拿着8.11和8.9谁大谁小的截图跟我说，这玩意也不行啊。

感觉市面上，关于DeepSeek的信息还是很乱。

所以，今天除夕，龙年的最后一篇文章，献给DeepSeek，也献给我们自己。

我想用8个问题和答案，来让大家详细的了解，DeepSeek-R1这个模型，是什么，以及，提示词应该怎么写，到底怎么用。

话不多说，开始。

一. DeepSeek是什么？

DeepSeek，是一家在2023年
7月17日成立的公司
深度求索
所开发的大模型名称。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpPibFNQFT14D7mJeGVlibpEUDLU39wicGv2UIk2vib3VgpZSWlTia6ug7aOkiacScrn3b8LAW2DaZy10TQ/640?wx_fmt=png&from=appmsg)

2024年1月5日，他们正式发布DeepSeek LLM，这是深度求索第一个发布的AI大模型。

2024年5月7日，他们发布DeepSeek-V2，正式打响中国大模型价格战，当时新发布的 DeepSeek-V2 的API价格只有 GPT-4o 的 2.7%，随后一周时间，国产厂商全部跟进，字节、阿里、百度、腾讯全部降价。

2024年12月26日，DeepSeek-V3正式发布且直接开源，而且训练成本仅为557.6万美元，剔除掉Meta、OpenAI等大厂的前期探索成本，大概是别人的三分之一，并且整体模型评测能力媲美闭源模型，震惊海外，自此，东方的神秘力量彻底坐实。

2025年1月20日，全新的推理模型DeepSeek-R1发布，同样发布并开源，效果媲美OpenAI o1，同时API价格仅为OpenAI o1的3.7%，再一次震惊海外，让Meta连夜成立四个研究小组，让全球算力暴跌，英伟达的神话都岌岌可危。

就是这么一家公司，而深度求索的背后，是著名量化私募幻方基金，而基金的盈利模式非常简单，跟管理规模绑定，固定收取管理规模的管理费和收益部分的提成资金，无论基金涨跌都能赚钱，真正的旱涝保收的行业。

所以，幻方不缺钱，当年赚了钱，在英伟达还没向中国禁售的时候，幻方直接能掏钱搭一个万卡A100集群。

这也让深度求索，让DeepSeek，不以盈利为导向，目标，就是AI的星辰大海。

二. DeepSeek-R1是什么？

DeepSeek-R1，就是最近爆火的主角了。

也是直接让各路美国AI大佬破防的始作俑者。

给奥特曼都在X上开始阴阳了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpPibFNQFT14D7mJeGVlibpEULhy83GG9CeSebSeGOibAI3KntqwMjJXAIic14LlMl3rdQZDGjAS55nSw/640?wx_fmt=png&from=appmsg)

很多人拿DeepSeek-R1和GPT4o比，其实是不对的。

首先，GPT4o是个多模态通用模型，可以理解图片、语音、视频，也可以输出语音。多模态往后做，更像Gemini 2，是一个多模态大一统模型，可以理解一切模态，也可以输出一切模态。

而DeepSeek-R1是一个深度推理模型，对标OpenAI的应该是OpenAI o1，而不是GPT4o，关于OpenAI o1曾经我首发写过一篇文章，可以去看，就不过多赘述了：
OpenAI全新发布o1模型 - 我们正式迈入了下一个时代。

现在回头看，当时这个副标题，还是很有前瞻性的。

我也让DeepSeek列个了4o和o1的对比表格，大家应该也能一目了然。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpPibFNQFT14D7mJeGVlibpEUvqYJk4NiaSY0ospkvUUdfsFPoppGUudPwicqlrrfJEhFHHtzodAIIckw/640?wx_fmt=png&from=appmsg)

而R1，可以直接类比o1，两者在跑分上，几乎相同。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpPibFNQFT14D7mJeGVlibpEUI1SX0xUGw4sZ26Re0MhV3vKDfJyVlicVOLxdu7UrIhicOichxB1G2J2rA/640?wx_fmt=png&from=appmsg)

并且已经开源。

HuggingFace 链接：https://huggingface.co/deepseek-ai

论文链接：https://github.com/deepseek-ai/DeepSeek-R1/blob/main/DeepSeek_R1.pdf

三.
DeepSeek-R1在哪用？

DeepSeek-R1除了面向开发者的开源模型和API，也有面向普通用户的C端版本。

网页版：https://chat.deepseek.com/

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpPibFNQFT14D7mJeGVlibpEUlhs4cJhglSMrFQ3S0LdScQaloHqwUUZfoHsUKLAyVSvV0hbhNyPx8A/640?wx_fmt=png&from=appmsg)

当你勾上深度思考功能，此时就是使用R1模型，当你不勾的时候，使用的是类GPT4o的v3模型。

当然他们也有APP版本，你直接在应用商店搜索DeepSeek就好。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpPibFNQFT14D7mJeGVlibpEUA1wNlkUKibJyrIF9KMe6moUzEdN8u20bM05RicVRx0XLFDGENfaSxlGw/640?wx_fmt=png&from=appmsg)

跟网页端交互基本一致。目前免费，就是用户增速过快，所以偶尔会有崩溃断网连不上问题，你可以在这个地方，来看DeepSeek的服务器状态。

https://status.deepseek.com/

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpPibFNQFT14D7mJeGVlibpEUib1y3C0Ij5D56VNLZSYxHvnXDfMY00UCgSKcVic505oiaibTm2PP11YgjQ/640?wx_fmt=png&from=appmsg)

四. 应该怎么跟R1对话？

首先，我想明确一点的是，DeepSeek-R1是推理模型，不是通用模型。

在几个月前OpenAI o1刚刚发布时，我用通用模型的方式跟o1对话，写了一堆的结构化提示词，得到了极差的效果，那时候我一度觉得这玩意是个垃圾。

而后面，我才发现，其实是我自己的思维惯性，这玩意跟4o不一样，这不是一个很傻的聊天模型。

这是一个能力很牛逼但不知道你想要什么的真实员工。

今年1月也有一篇海外的文章很火，叫《
o1 isn’t a chat model (and that’s the point)
》。

跟我是完全一样的看法。

所以，有一个点一定要注意，
明确你的目标，而不是给模型任务。

例如我们以前在写prompt的时候，总是会写你是一个XXX，现在我的任务是XXX，你要按照1、2、3步来给我执行balabala。

但是现在，请抛弃那些写法。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpPibFNQFT14D7mJeGVlibpEUzI1zZ7ojU2FOnNWZjZjGibXOvHVyficpdD4knrIZKvgO1Cb3GL8ex8tA/640?wx_fmt=png&from=appmsg)

把你的一切，交给AI，让它去进行自我推理，效果会更好。AI会自动填上那些你没说出口的话，会给你想出可能更好的解决方案。

有一个不得不承认的事实是，我是一个很普通的普通人，而像我一样的很多普通人们，现在大概率是不如AI博学和聪明的。

所以，不如说出你的目标，把他当作一个很牛逼的员工，让他，放手去做。

比如这个case。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpPibFNQFT14D7mJeGVlibpEU3rGqRbxtI2hraia5A8ewiabhGrmmvsU2GB3HFovXIHclFfxHc8BJjCoA/640?wx_fmt=png&from=appmsg)

只需要表达
你是谁+你的目标
就OK。

特别是
你是谁
这个背景信息，非常非常的有用。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpPibFNQFT14D7mJeGVlibpEUo5PRicIuAK7dv7viaUv4AOib06He6vQ1bKz8LGwAzX9DlbicXIQhRGVm4Q/640?wx_fmt=png&from=appmsg)

所以请抛弃掉一起过往所学习的结构化框架，如果真的需要有一个万能Prompt模板，那就是：

你是谁 + 背景信息 + 你的目标

背景信息给的越多越能让R1理解你的需求帮助你更好的完成任务。

时刻把他当成：

这是一个能力很牛逼但不知道你想要什么的员工。

最牛逼的提示词技巧，就是没有技巧。

大道至简，重剑无锋。

所以，千言万语汇聚成一句话就是：
用人话清晰的表达出你的需求
，这就够了。

五. R1输出的内容看不懂？

很多人在用“说人话”这三个字，来表达推理模型和通用模型不一样，这其实有点奇怪。

不过从实用角度来说，这确实是一个能让普通人看懂AI输出专业内容的小技巧。

不过这并不是一个推理模型才有的技巧，因为一直就存在，本质上就是对方不知道你是谁，不知道你的理解能力和你的学识能力是什么水平。

所以我也想分享一个我自己这两年跟AI对话时用的最多的一个小技巧，也是
我自
己最常用的“人话”prompt：

我是一个小学生。

当你在跟AI对话时，把这句话往前一摆，自降身位，你就会发现，一切都通了，一切都能看的懂了。

比如我想让R1给我解释一下什么叫大模型中的RL用法。

如果不用这句话的话，就会得到这样的解释。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpPibFNQFT14D7mJeGVlibpEUib8Z4ljwx06Ul0xl4Qtme9vAGaP1bUeWJGdx8ibZMG2PdRP9uIeyQtXw/640?wx_fmt=png&from=appmsg)

我相信你看到一定脑壳疼。你就是不懂才需要让它给你解释，结果解释了个这。

但是，如果把那个神句加上呢？

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpPibFNQFT14D7mJeGVlibpEUZfTjcWOHnJhKkib8hQcicqFfJIW7a1ZouAtE0ACZ1orh8wicaNTqgNDAw/640?wx_fmt=png&from=appmsg)

反正我是一下子能看了，舒服了多了，可能我就真的是个小学生的水平。。。

当然如果你想稍微进阶一点，就可以说，我是一个初中生，或者，我是一个高中生，一点一点的可控升级。

我用了两年，非常好用，推荐给大家。

六. R1的写作很强吗？

R1除了能非常好的做常规推理模型都能做的数学题、代码等等，这次有一个非常非常特别的点是：

中文写作能力强到爆炸。

过往，大家都说，在写作能力上几乎所有的大模型都是众生平等的一坨屎，唯有Claude超出了一坨之外，独立于三界之上。

而这一次，DeepSeek-R1在中文写作和文笔上，已经是独一档的领先了。

而且对于文风的模拟，效果极佳。

比如我非常非常喜欢知乎上一个大V叫大师兄朱炫的文笔。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpPibFNQFT14D7mJeGVlibpEUOvm3cYlHoqlcoOOibR2e4f6oVWZoiapLbSkjcqo5zlfNjianm2MpdX5mw/640?wx_fmt=png&from=appmsg)

我甚至都不需要跟DeepSeek-R1说朱炫的文笔是什么样的，直接就说一句话：

以知乎大V朱炫的文风，来锐评一下爱情的求而不得，告诉大家，总会有人在等你。

来给大家看看成文：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpPibFNQFT14D7mJeGVlibpEUu9e9YmeeUOx7phcq1ia3VpzGBd2CyGkgX5XqiadWymNAa2QnuB6IBOsA/640?wx_fmt=png&from=appmsg)

虽然达不到朱炫那百分百的功力，达不到他那种多智而近妖的文笔，但是已经非常非常强了。

毕竟，只需要一句话而已。

再写一首，李煜风格的诗词。

“
以李煜的诗词风格，来写一首我回老家没有朋友玩的感觉
”

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpPibFNQFT14D7mJeGVlibpEUjAiaBwURvESIdcUDRvr42d7ibdI5icF5mapjibTSxBS7OKSa0e6TDH0KgA/640?wx_fmt=png&from=appmsg)

《虞美人·归乡感怀》
故园旧巷行人少，空有榆钱老。
秋千院落锁苍苔，偶见邻家黄犬过阶来。
重游往日嬉春处，蛛网斜阳驻。
笑谈声远柳风凉，唯剩一庭明月照空廊。

对仗、押韵全都到位了。

真的，非常的强。

七. R1可以联网吗？

众人皆知推理模型好，但是推理模型，几乎都不联网。

典型如OpenAI o1。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpPibFNQFT14D7mJeGVlibpEUwJ2fmFzqMYKECs0R6P4Fq6IuqQQD2hwqQ0jHwSiaBjicpsBNcfIibv9jg/640?wx_fmt=png&from=appmsg)

这给我带来了非常的多的困扰，要知道，OpenAI o1的知识库还是24年，很多东西都不知道，更别提一些所谓的实事了，你想用它来梳理分析一些最近的数据，比如美元指数、比如最近的财报等等，它完全不知道，甚至还传不了PDF，就非常的der比。

而DeepSeek，是为数不多的，推理+联网的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpPibFNQFT14D7mJeGVlibpEUVcOpvQ30A0lCzPHxv3rwNZNWT3jIvJmYrHYmruALaW3ytMiaXX1d2DQ/640?wx_fmt=png&from=appmsg)

我们来试试这句话：
我想用鲁迅的文风写一篇2000字的公众号文章，分析一下2025春节档哪几部电影能爆，不要结构化。

DeepSeek去网上搜了50个网页，然后思考了半天。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpPibFNQFT14D7mJeGVlibpEUhlkYibCDVC5LicYzeyMwB7StSD8oPw2uEj3ZT4DpBPPbACV6r0rc5lTg/640?wx_fmt=png&from=appmsg)

用鲁迅的文风，成了一篇文。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpPibFNQFT14D7mJeGVlibpEUhNVRyGW0uIkLPKic4EGT2Ltr2fLFSY8fb7gJU10sBvns5iaicyzia3YJXA/640?wx_fmt=png&from=appmsg)

效果非常好。

虽然整体测下来，在联网资料的RAG层面还有一些问题和不尽如意，但是已经非常强了，至少，能听懂我的话，知道我想要的是鲁迅风格。

再给一些时间。

八. 算力神话崩盘了吗？

最后，我想说一下算力的问题。

昨天，A股算力和美股算力都崩了，大家几乎都把原因归结到DeepSeek很便宜，所以未来不需要那么多算力，算力神话崩塌了。

但是我觉得这个思路不太对。

在第一次工业革命的时候，有一个经济学里面非常著名的悖论，是由威廉·斯坦利·杰文斯提出来的，叫做Jevons 悖论。

当时，英国的工业革命正在加速发展，蒸汽机的效率也在不断提高。人们普遍认为，蒸汽机会越来越节能，也越来越会减少煤炭消耗。

但实际情况却打了所有人的脸。

因为，更高效的蒸汽机降低了使用煤炭的成本，结果导致蒸汽机被更广泛应用，煤炭消耗总量反而大幅增加。

原因大概是这样的：

假设新技术让汽车的燃油效率提高了 50%（比如每加仑能跑 30 公里变成 45 公里）。
照理来说，这应该减少燃油总消耗，但现实可能是：

由于油耗更低，开车的成本下降，人们更愿意开车，开车里程增加。

购车门槛降低，更多人买车。

物流成本下降，商家扩大运输量。

最终
，
油耗效率提高后，燃油消耗的总量可能不降反升
。

跟现在算力逻辑是一摸一样，如果你要把DeepSeek对与算力的影响带入的话，那其实就会导致：

因为大模型需要的训练和推理算力成本下降，反而会推动AI应用和生态的繁荣，端侧、个人级别大模型逐渐成熟，算力的总需求反而越来越大。

至于股市算力崩盘，我想说的是，涨多了就是原罪。

而且美元指数都崩成什么样了，直接破了60日均线，纳斯达克和英伟达不崩才奇怪好吧。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpPibFNQFT14D7mJeGVlibpEURAPysCP3Sbn6BbMs5HpBHgBK9X3ialSrfgIefLv6mobaL6QYu5f5w5Q/640?wx_fmt=jpeg&from=appmsg)

只能说，DeepSeek有短期驱动效应，但是核心还是内身问题，DeepSeek踩中了这个节点，天时地利人和。

此刻的DeepSeek，就是众望所归的，
天命人
。

写在最后

昨天，冯骥的微博说，DeepSeek是国运。

我想说，是，也不是。

国运不是单一的点，而是一群点而连成的面。

流浪地球、新能源车、黑神话悟空、六代机、TikTok、DeepSeek等等等等。

这些点连起来的面，才是真正的国运。

泱泱中华五千年。

无论多少风雨。

未来也必定。

国运昌隆。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
