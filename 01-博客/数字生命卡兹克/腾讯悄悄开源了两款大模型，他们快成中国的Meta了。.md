---
title: "腾讯悄悄开源了两款大模型，他们快成中国的Meta了。"
发布日期: 2024-11-05
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647666373&idx=1&sn=380b8b1b29645982091e05290911f676&chksm=f1c2bb94b77e884cc862fcf0503f5c11bde6b906ac3ab8d85a58998c5b70e57478a1d7082c47"
---

## 摘要

**1) 一句话总结**
腾讯近期正式开源了包含3890亿参数的MoE大模型“混元Large”与3D生成大模型“Hunyuan3D-1.0”，并宣布即将开源长文本评测数据集“企鹅卷轴”，以填补国内AI开源社区的多项空白。

**2) 关键要点**
* **全面开源**：腾讯在闭门发布会上宣布开源其核心模型，相关模型目前已全面上线Hugging Face和GitHub供下载。
* **混元Large定位**：目前开源领域中参数最大、性能最好的MoE（混合专家）大模型。
* **混元Large参数规格**：总参数量高达389B，激活参数量为52B，支持256K的超长上下文。
* **混元Large技术优势**：采用路由和专家机制，仅激活所需参数，在保证全科能力的同时大幅降低了推理成本。
* **Hunyuan3D-1.0功能**：支持“文生3D”和“图生3D”，属于目前开源领域处于T0梯队的AI 3D大模型。
* **Hunyuan3D-1.0版本**：开源了标准版和轻量版两个版本，其中轻量版仅需10秒即可生成一个3D模型。
* **企鹅卷轴（即将开源）**：针对当前大模型长文本能力缺乏明确评测标准的问题，腾讯即将开源专门的长文本评测数据集。

**3) 风险/不足**
* **3D生成质量差距**：Hunyuan3D-1.0 相比目前顶尖的闭源3D大模型（如TripoAI），在模型整体质量（特别是图生3D时的背面生成）、贴图质量以及脸部精细度等方面仍存在一定差距。

## 正文

今天，人在腾讯混元发布会的现场。

我就眼看着腾讯他们风尘仆仆的从深圳奔赴北京，开了一场非常私密的闭门发布会。

而整场的核心，就是一个词：

开源。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURonqcSuv0lpibVbgbUc58ATlCkRXbmZCbFAmQByS2KzHSFR4uEYQrscDZg08mO4Klk3XicwJNaVEeicQ/640?wx_fmt=png&from=appmsg)

而且不藏着掖着，直接开源了他们最好的模型，分别是
MoE模型“混元Large”、混元3D大模型“ Hunyuan3D-1.0”。

现在，这些模型已经全面上线
huggingface了，可以直接下载。

还有一个即将开源的长文本评测数据集“企鹅卷轴”。

我一个一个说。

一. 混元Large

可能是如今，开源出来的，参数最大、效果最好的MoE模型。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURonqcSuv0lpibVbgbUc58ATlia2eEjksFgkjVq8EQwmG1ibibUZ3gGmjbLCnccuGR7cC8eEY3nEESSBMQ/640?wx_fmt=jpeg&from=appmsg)

总参数量389B，激活参数量52B，上下文长度高达256K。实用性拉满。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURonqcSuv0lpibVbgbUc58ATlRPnUWdDMZxsE706YUv6n8xZhpUCYMY2wCExol3AkT4EYYj1VpE5lkw/640?wx_fmt=jpeg&from=appmsg)

要知道，这是MoE，训练起来本身就很麻烦，变量无数，混元能做到这么大，还能开源出来，这事本身就挺值得鼓励的。

在数据集的跑分上，效果也很好。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoL7ape0GibqrMkm4K88FSfibQlHt8S7DpfQTrja7zSum6swxzeIL1ZxrT6NFT4CxSnREiaoQloaRaag/640?wx_fmt=png&from=appmsg)

在几个维度上，基本全面领先。

可能
混元Large有些东西你看着有点懵逼，
这里我正好借这个机会，简单科普一下啥是MoE。

打个比方，模型就是一个巨大的医院，我们每次对话，就像到医院里面去看病。

正常训练的大模型呢，比如Llama3.1，我们就把它称为第一羊驼医院吧，外面人说这个医院很牛逼，包治百病，但是这个医院里面有个特点。

就是你进去，你会发现只有一个医生坐在那接待。

这个医生是个神医，精通所有科室，牛逼到起飞，能解一切疑难杂症，每个病人来了他都能准确的给你回答。

这个第一羊驼医院的这个医生牛逼是牛逼，但是问题来了，每个病人这个神医都要接待啊，就他一人，压力太大太大了，效率也不咋地。

那MoE的大模型呢，比如混元
Large，我们就把它称为混元人民医院吧。这个医院同样的，名气很不错，包治百病。

但是当你走进去，这个医院跟第一羊驼医院就呈现出了完全不同的面貌，你第一眼看到的是导诊台。你先要去导诊台挂号，然后它会告诉你去哪个科室看病。

这就是MoE的特点，它的全称是混合专家模型，拥有路由和专家这个独特的机制。

当病人来到医院时（输入一个问题）：
导诊台先判断病人的情况（路由器决定），然后把病人转给最合适的专科医生（选择合适的专家），只有需要的医生会出诊（只激活需要的参数）。

所以，才会有了混元
Large
的两个参数，
总参数量389B，激活参数量52B。也就是这个医院虽然总医生数量有389个那么多，但是其实每次真正看病的医生，只需要52个，就能解决一切问题。

这个结果，其实就能看出来MoE的优势了，就是方便、快捷、推理成本低。

毕竟Llama3.1 405B那种怪兽，上来就是几百个G起步，这尼玛谁能用的起啊。

而现在，
混元Large，就是开源中，参数最大、性能最好的MoE模型了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURonqcSuv0lpibVbgbUc58ATlw2LiceUBeRGr2bhRJESuduN5rq0Wia5DficdbBcgRguGumtx7kSZPyrUw/640?wx_fmt=png&from=appmsg)

模型网址在此：https://github.com/Tencent/Hunyuan-Large

二.
Hunyuan3D-1.0

开源出来的AI 3D大模型，还真的是非常稀缺的。

在我印像中，上一次AI 3D开源有动静，还是TripoAI和StabilityAI联合开源的项目TripoSR，还有StabilityAI自己搞的那个SV3D。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoL7ape0GibqrMkm4K88FSfib7JPFxtZuAiayOXEjyRSXnpkHf4j7AuOG1ItIJ0nuk7iaUWIvoTfxc3qA/640?wx_fmt=png&from=appmsg)

但是这也都是6、7个月前的事了，
然后就再无动静。

而这次，腾讯混元终于补上了这块的空白，宣布了他们的AI 3D大模型
“ Hunyuan3D-1.0”，开源！

我爱腾讯，我爱混元。

Hunyuan3D-1.0支持文生3D和图生3D，
这次开源的版本是两个，一个标准版一个轻量版，轻量版10s就能直接生成一个3D模型。

我大概部署了一下，跑了跑看了下效果。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURoL7ape0GibqrMkm4K88FSfibptME4WdGZ0wUtVR0BgGtXPuVRcsBlcN2EdRSZ7CIyUQDcibS6wLHPZA/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURoL7ape0GibqrMkm4K88FSfibibHOyNw9fIE67h3rcdzh0NSQRqxX2S8y0ECIiazeUOjHvn2wdJOgSIOQ/640?wx_fmt=gif&from=appmsg)

不吹不黑，这是非常客观且真实的效果。

坦率的讲，离我心中最好的闭源3D大模型TripoAI，肯定还有一些距离，包括但不限于模型质量(特别图生3D时候的背面）、贴图质量、脸部精细度等等。

但是，如果你不跟最好的TripoAI比，而是跟市面上其他的AI 3D比，那
Hunyuan3D-1.0大概可以排在T1.5梯队附近。

但是如果你在开源领域比，那不好意思，Hunyuan3D-1.0就是真正的T0，最屌的，没有之一。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURonqcSuv0lpibVbgbUc58ATla102EqerCDTd5b13PfBibdQib8xlhAv3lqFEDEgaj3QtU3Y7PJeZfPvA/640?wx_fmt=jpeg&from=appmsg)

而且AI 3D模型，开源后，可以想象的场景就太多了。

比如微调某一个游戏的AI 3D模型，比如微调一个科幻电影中的AI 3D模型，来进行一个在建模层面，定制化的全面的降本增效。

去年这个时间点，我就写过：

“
我极度看好AI 3D，并不是因为这个领域新，而是这玩意真的能切切实实解放内容创作者们的生产力，让他们用更多的精力，花在创作上，保护这些创作者的创作精力。
”

AI 3D对于创作者的意义，就是如此。

我在现场，腾讯混元还送了一个有趣的小玩具，是他们用这个3D大模型3D打印的小手办，还送了一盒丙烯颜料，可以让我们自己DIY，贼好玩。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURonqcSuv0lpibVbgbUc58ATlpHN6CXmLRUJvYVT6vq67bqkDhzVGfL2iajuE04ngLonGApnpXKasibdw/640?wx_fmt=jpeg&from=appmsg)

希望腾讯这个开源的
Hunyuan3D-1.0，能给这个AI 3D的模态，带来一些，不一样的火花。

网址在此：https://github.com/Tencent/Hunyuan3D-1

三.
企鹅卷轴

一个超级有趣的项目。

之前其实主流的评测集有很多了，有MATH这种专门评测数学的，有MMLU这种这种评测各种知识的，但是在长文本的评测上，一直没有一个明确的评测数据集。

大家都在说自己200K、300K、甚至一个亿，但是只字不提自己在长文本上的准确定性。

之前有一个去年11月火起来的大海捞针测试，用来评测长文本的衰减，但是其实也偏民间，在真正评测长文本的能力上，其实还是有点以偏概全。

而这次，混元马上要开源一个关于长文的评测集，命名也挺好玩的，叫“企鹅卷轴”。有一股子游戏道具的感觉。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURonqcSuv0lpibVbgbUc58ATlwOziaYozpicZX7Tnj9aJJkuW1icSgnbuibib838IicicshlKLiciaSjP4ibNctQQ/640?wx_fmt=png&from=appmsg)

这个我觉得还挺有趣的。

马上就会开源出来，后续我可能会基于这个评测集，来对市面上的这些长文本大模型，来做一个评测。

看看这些大模型的长文本能力，究竟如何。

写在最后

对于每一个愿意开源，让社会、让开源社区，百尺竿头更进一步的公司。

我都永远报以最崇高的敬意，和最大的善意。

穷则独善其身，达则兼济天下。

上一次，腾讯开源了混元DiT，让AI绘图这个领域，有了另一种全新的可能。

而这一次，混元Large、 Hunyuan3D-1.0，算是补上国内开源社区的一大空缺。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURonqcSuv0lpibVbgbUc58ATlJZN801iaYemSFicFdz3kDfAohbUXI3ibG6QGXlgFQV3lhYeJORmg9fJlg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURonqcSuv0lpibVbgbUc58ATllmNG2C7NBt8EarqUYPPg8icSW2r6M0DQlKAzw20FEDGYr0VFLsE0EEg/640?wx_fmt=jpeg&from=appmsg)

一个腾讯混元，一个智谱。

真是国内，最有趣的两家AI公司。

不断为着这开源社区，贡献自己的力量。

敬礼。

我永远爱他们。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
