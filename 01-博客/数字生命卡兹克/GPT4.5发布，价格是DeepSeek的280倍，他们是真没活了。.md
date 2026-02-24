---
title: "GPT4.5发布，价格是DeepSeek的280倍，他们是真没活了。"
发布日期: 2025-02-28
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647669088&idx=1&sn=f7715cbaad7d12e7cc4fdc65d619240e&chksm=f1023c46703067a4de6edfeb828860cc1b91e254207c02ec8e923d2be64628c813cc664786d1"
---

## 摘要

**1) 一句话总结**
OpenAI低调发布了最后一代纯基座模型GPT-4.5，其在知识准确度和情商上有所提升，但定价极其高昂（输入成本约为DeepSeek的280倍），且在逻辑推理、生成速度和多模态功能上存在明显短板。

**2) 关键要点**
*   **发布形式**：GPT-4.5通过简短的直播低调发布，无高管出席及复杂的实机演示。
*   **定价高昂**：输入价格为75美元/百万token，输出为150美元/百万token；输入成本是Claude 3.7的25倍，是DeepSeek v3的约280倍。
*   **基准测试**：在AIME 2024评测中得分为36.7%（低于o3-mini的87.3%），代码能力测试中不及Claude 3.7 Sonnet。
*   **能力提升**：世界知识准确度提高，幻觉率降低（面对未知问题会直接承认不知道）；在处理人际关系等问题时，情商（EQ）表现优于GPT-4o。
*   **可用性**：目前支持识图、搜索和画布功能；已向200美元/月的Pro用户开放，即将向Plus和Team用户开放。
*   **未来规划**：官方确认GPT-4.5是最后一个纯基座模型，未来的GPT-5将是整合o3的混合模型。

**3) 风险与不足（基于原文明确指出）**
*   **功能缺失**：不支持GPT-4o已有的语音、视频和共享屏幕功能。
*   **系统Bug**：在回答史实性问题时，存在即使未开启搜索也会被强制触发搜索的Bug。
*   **逻辑能力下降**：在部分简单的逻辑测试中表现不及GPT-4o，多次重新生成均无法给出正确答案。
*   **生成性能差**：文本生成速度极慢，且写作质量被作者认为不如近期的GPT-4o、Claude 3.7、Grok3及R1等竞品。

## 正文

凌晨4点，OpenAI的GPT4.5专场直播，终于姗姗来迟。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoHuxVWU1JqCJU0iahwWtTnWmyhmOuC1W9CSphrBgH1XBRouzzYAbw0kP6XLicgBzKEVjEFUbADvppw/640?wx_fmt=png&from=appmsg)

大家对于GPT4.5有多期待，就不用我多说了吧。

毕竟，这曾经就是整个行业的天。

2023年3月15日，GPT4发布，要多惊艳有多惊艳，那时候，所有人都是统一的一句话：卧槽，太强了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoHuxVWU1JqCJU0iahwWtTnWOObSCCHTbnSOpHgUp2MVdgRibRXDGic0v1md4ZBxqB1Pr3vBvuR0sg5Q/640?wx_fmt=png&from=appmsg)

然后从2023年年末开始，整个行业都在预期下一代GPT模型要在2024年的年初发布。

果等了整整一年，多模态4o来了，全新的推理模型o1来了，可下一代GPT基座模型却迟迟没有身影。

而今天，将近隔了整整两年的时间，它来了。

在发布的规格上，也是着实有点惨淡，甚至连奥特曼都没来。更没有GPT4和GPT4o那种秀上天的演示。

只有跟去年十二天专场直播一样，一个朴实无华的小房间。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoHuxVWU1JqCJU0iahwWtTnWrCXVYNAb7vwbqhtGLSCUrWcmTt2cTlGzYoP4Wf5TBicuHQ9IkiawKKqQ/640?wx_fmt=png&from=appmsg)

突然想起当年GPT4刚发布时，布罗克曼那一段惊艳的多模态实机演示，给我带来了真的不小的震撼。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURoHuxVWU1JqCJU0iahwWtTnWI31P4lQF46UfXcIOsZPRjJ7J11PGT2sJicRRlMsEZ3YgSF6nOKyOV3Q/640?wx_fmt=gif&from=appmsg)

在本子上画了一个网站的草稿，拍照给了GPT-4，然后前端界面就做好了，带了HTML的代码。

那时候看，真的好惊艳啊。。。

时间一晃，页真的两年了啊。。。

回到今晚发布的GPT4.5。

按照惯例，我们先来看看一些参数数据吧。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoHuxVWU1JqCJU0iahwWtTnW6bfmxRbcp87fEglHZEFibuXsgRNANniaK3qxzpmMUjowbQy0XXyEcL3w/640?wx_fmt=png&from=appmsg)

看着好像都比4o强一些，但是我发现一个很诡异的事情，因为AIME 2024那个基准，我测过kimi1.5、智谱的zero等等，所以记的比较熟。

在这个评测里，AIME2024几个模型的得分分别为：

GPT4.5：36.7%，GPT4o：9.3%，o3-mini（high）：87.3%。

记住这几个数据。

03-mini（high）的数据是没问题的，跟之前发布o3-mini的时候得分一致。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoHuxVWU1JqCJU0iahwWtTnWic0mGvPL4ibPJE0KlvtBhRLOtb2xsA97IiaJ96YnuqiavQbiarbEGNLlicUg/640?wx_fmt=png&from=appmsg)

但是在o1发布的时候，我明明记得，对比图里的4o的AIME2024的得分，是13.4啊。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoHuxVWU1JqCJU0iahwWtTnWKoa6M0GCkK8EFdVUibaialiaaduqoYsmbCkLe0icEsBRibtVZlb7pzHA1fg/640?wx_fmt=png&from=appmsg)

怎么今天这发了个GPT4.5，GPT4o的评分还能掉4个点的，这也太抽象了。。。

然后就是一个他们引以为豪的
世界知识。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoHuxVWU1JqCJU0iahwWtTnWMwpJP0ibQZHGkzNM0vyhZ1pwCczKKhUxyXj53P80bxF1vAN7axF4j3Q/640?wx_fmt=png&from=appmsg)

第一个是准确度，第二个幻觉率，有一说一，这块确实不错，至少是OpenAI家最准的模型了。

他们自己列了一个还算比较好玩的题，让GPT-1到GPT-4.5全都答了一遍，这个世纪问题是这样的：

人类的第一种语言是什么？

GPT-1是这样的，非常抽象。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoHuxVWU1JqCJU0iahwWtTnWZMtKlaogkmaEUl4PqpAGtSKMvuL3LUgOYLRf5f5F5z65trdAvEHqhw/640?wx_fmt=png&from=appmsg)

GPT-2和GPT-3.5是这样的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoHuxVWU1JqCJU0iahwWtTnWrDlicPx6W5H27n8m0s6Qg69pBmmsnu5cWcXUqstAzNBoobqh3VY3rEg/640?wx_fmt=png&from=appmsg)

到了GPT-4，会好点，但不多。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoHuxVWU1JqCJU0iahwWtTnWnKiaic3Go8ogMAlVHb9U6tTAw2l1QYMmJuGCYZaPGxaWAla1jFjI9okw/640?wx_fmt=png&from=appmsg)

而GPT4.5，终于会诚实的告诉你，我不知道了，这是一个未解之谜。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoHuxVWU1JqCJU0iahwWtTnWpXSbkEH9ib2ET34gyq9MiaK6iaLXNUYuPHCANwib8Lg9M0dChFpZfziayKQ/640?wx_fmt=png&from=appmsg)

至于代码这块，本身也不是推理模型，所以也并没有指望特别多强。

不过根据三方的基准测试，就纯能力上，看着还行，打不过Claude
3.7
Sonnet也正常，再怎么说那也是Claude。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURoHuxVWU1JqCJU0iahwWtTnWkSaiaHE1qcedF0OnoA0cLJq344CFTjOE9PibemJljSkhX7drwzHRMtHA/640?wx_fmt=jpeg&from=appmsg)

X上有大佬也测了下那个经典的物理小球case，效果挺不错的。

但是，还有一点是不得不提的，就是抛开成本谈能力，那就是耍流氓。

GPT-4.5的价格，在我第一次看到的时候，我以为我眼睛出问题了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoHuxVWU1JqCJU0iahwWtTnWBaTn4BJqz1veTqJYgxev73GsT3GDv96X3qDPUSuZj9CtHibrBUGu81g/640?wx_fmt=png&from=appmsg)

每百万输入是75刀，每百万输出是150刀，哥，Claude 3.7百万输入才3美刀，百万输出才15美刀。

输入比别人贵25倍，输出比别人贵10倍。

你凭啥啊？谁给你的勇气啊？梁静茹吗？

我都不想拿DeepSeek跟你比，都是非推理模型，DeepSeek v3的价格你知道多少吗。

人百万输入人民币2块钱，相当于0.27美刀，输出是8块钱，相当于1.1美刀。

输入是DeepSeek v3的280倍，输出是150倍，不是，我真的不理解啊。

OpenAI到底凭啥啊。。。

服了。

目前，GPT-4.5已经对200刀的Pro会员开放，预计这几天就对Plus和Team用户开放。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoHuxVWU1JqCJU0iahwWtTnWCaicfwegDdXuablwKddfHPXHRrcDN29ZNO9aakXKYJ4xmBjmc6lBXPQ/640?wx_fmt=png&from=appmsg)

我自然也是第一时间拿到了GPT-4.5的体验资格。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoHuxVWU1JqCJU0iahwWtTnWOw3Vh8R2JdL6Nlsd42TNppY0OaRmkpZ1C05WUu0sf097picDkpTXvFw/640?wx_fmt=png&from=appmsg)

目前识图、搜索、画布啥的都支持，但是4o的语音、视频、共享屏幕啥的都没有，算是个退步。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoHuxVWU1JqCJU0iahwWtTnWI0ojx9J08WzF9HRU0y9Miaf5msMe90FRHzkrpRgTTGYefiavicq6we3icQ/640?wx_fmt=png&from=appmsg)

而且有BUG，就是在问一些史实性的问题的时候，我明明没开搜索，非要给我强制开搜索去回答，就非常的离谱。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoHuxVWU1JqCJU0iahwWtTnWpCDcRbdLVqibkyJKfpW2t0YI6uiaOoJdSbQnKJj5A9nlraqLX0pOxduA/640?wx_fmt=png&from=appmsg)

相比于4o，他们所说的情商能力，确实有了一些进步。

比如这个问题：
朋友总是爽约，我想发短信表达愤怒但又不想绝交，我该怎么回复他。

如果是4o的回答，就会很der比，一股子没脑子没情商的人机味。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoHuxVWU1JqCJU0iahwWtTnWlCgknnribUBibu8KndiaocSPYF1D9GH1MpwToe5Uha9Bye8VPtD1Kpiaxg/640?wx_fmt=png&from=appmsg)

GPT-4.5在这方面就好的多。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoHuxVWU1JqCJU0iahwWtTnW9cVYtFG4XWV9HjWkXCwcv22oCnZrNzdLb5nfZlj8D6aCNw8UbYsu0w/640?wx_fmt=png&from=appmsg)

然后我又问了一个小小的逻辑问题，GPT-4o能理解。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoHuxVWU1JqCJU0iahwWtTnWv7SqenMjlxdWeVuqARP03uCSd70zLOFh609mbqNtoUQLYp21sdGZIA/640?wx_fmt=png&from=appmsg)

GPT-4.5直接懵逼了，一直在理解情绪，这情商高的把智商干没了？

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoHuxVWU1JqCJU0iahwWtTnWr8ibDsOibU3icydSr4iciaeZDm606Pd4IS87R4vLv1oxEuXkJaorU7EYaAg/640?wx_fmt=png&from=appmsg)

我roll了5次，没一次对的。

这事也是挺抽象的。。。

然后就是写作能力了，我自己测了几个常用的写作故事case，感觉...好像也不是那么尽人意，而且超级慢，慢的我想吐，感觉回到了GPT-4的年代了，一个字一个字的往外面蹦跶。

我都不说跟Claude 3.7和Grok3还有R1比，我真的觉得，还不如前段时间迭代后的GPT4o写的好，真的稀碎。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoHuxVWU1JqCJU0iahwWtTnW1OXztv7PQ1kFUqVbuLIqIun9e10WAYPDibibHZXhFSsicbq9AUsiagjfWQ/640?wx_fmt=png&from=appmsg)

坦率的讲，对OpenAI期待有多大，失望就有多大。

就现在的状况，我觉得你永远可以相信DeepSeek。

但是永远可以对OpenAI保持低预期。

疲态尽显。

奥特曼也说，这是他们最后一个基座模型了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoHuxVWU1JqCJU0iahwWtTnWL3ZAunGYth53BGu9Gx47AiaM9K9OFRwYCOqia4zgfsVMQ2M8T0Xiazzmg/640?wx_fmt=png&from=appmsg)

未来GPT-5是整合了o3的模型，也是混合模型了。

希望下次还能看到OpenAI觉醒，或者……

AI就是一段漫长的长跑。

你但凡慢一点，或者停下，身边的竞争者，就会呼啸而过。

要真有实力和诚意，用户自然买单。

要是只会营销和摆谱，必定会被淘汰。

这，就是AI圈的生存法则。

祝好。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
