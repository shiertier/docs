---
title: "AI绘图StableDiffusion最棒LoRA模型盘点 - 小样也能出奇迹"
发布日期: 2023-05-03
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647658430&idx=1&sn=93bee076b70fa71e984559bb222d4533&chksm=f18004e18549b7608bbdede717fb2b4a10cb18d7383895ab41decc32a7ae143993a035107614"
---

## 摘要

**1) 一句话总结**
本文科普了LoRA模型的基本原理与优势，并为Stable Diffusion用户盘点推荐了8款高质量的风格化LoRA模型。

**2) 关键要点**
* **LoRA技术原理**：全称大型语言模型的低秩适应（Low-Rank Adaptation），通过冻结原有大模型并在外部添加小插件进行微调，完成后再进行合并。
* **LoRA核心优势**：相比直接微调大模型，LoRA成本更低、速度更快，体积可缩小近一千倍，且支持即插即用，在固定AI绘画的画风或人物特征上表现极佳。
* **Korean-doll-likeness**：人物类LoRA中效果最稳定、最好用的首选模型。
* **墨心 MoXin**：主打中国水墨画风，在Civitai平台所有LoRA模型中下载量排名第4。
* **hanfu汉服**：主打中国汉服风格，在Civitai平台所有LoRA模型中下载量排名第7。
* **blindbox/大概是盲盒**：可生成极其精致逼真的泡泡玛特盲盒风格图像。
* **其他特色风格模型**：包括塔罗牌卡牌构图（Anime Tarot Card Art Style）、高达机甲风（Gundam RX78-2）、复古像素风（M_Pixel）以及塞尔达旷野之息游戏风（Breath of the Wild Style）。

**3) 风险/缺口**
* 人物类LoRA模型（如复刻明星等）存在游走于灰色地带的合规风险。
* 推荐的“Korean-doll-likeness”模型曾因舆论风波，于3月份被原作者直接删库放弃。

## 正文

上期盘点了一下StableDiffusion的我认为最强的大模型。

这期来盘点一下我心目中最有意思的LoRA模型。

LoRA模型就属于百花齐放了，因为他精致小巧的特性，有无数的LoRA都能达到不错的效果。其中特定人物的LoRA模型最多。

这里做个简单的小科普，LoRA模型到底是啥？

LoRA，全称
Low-Rank Adaptation of Large Language Models，LoRA取的就是
Low-Rank Adaptation这几个单词的开头，学名叫
大型语言模型的低秩适应，看名字也知道，这玩意
最先用在大语言模型上。

大语言模型动不动几百B几千B，为了让大语言模型执行特定任务，直接把这几百B的大模型拿来微调的话，贵+慢+重，性价比太低。所以出现了LoRA这种方式，直接把原来的大语言模型给冻结，在外面搞个额外的小插件来进行微调，不直接去动原有的大模型，弄完了再合并在一起。

又便宜又快体积还小，体积可以整整小一千倍。还跟插件一样，即插即用。

后来人们发现在绘画大模型上表现极好，拿来固定画风或者人物极其牛逼，于是一发不可收拾，直接起飞。

想更多的了解LoRA的，可以去读一读这篇论文：https://arxiv.org/abs/2106.09685

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo3Fk5oaWJ0lEibicKoROzEiaQZkBpKianQf0OKSrzUnjn1xBQHYRWddI4ZZiconOkRXtSb0qImTQNkxPw/640?wx_fmt=png)

回到我们的StableDiffusion上的LoRA模型盘点，我给大家推荐8个LoRA，基本都是偏风格向，人物的就不过多推荐了，看自己喜好去Civitai上扒拉吧，见仁见智。

这8个分别为：

1.
Korean-doll-likeness

2.墨心 MoXin

3.hanfu汉服

4.blindbox/大概是盲盒

5.
Anime Tarot Card Art Style 塔罗牌

6.Gundam RX78-2 outfit style 高达RX78-2外观风格

7.M_Pixel 像素人人

8.The Legend of Zelda: Breath of the Wild Style（旷野之息）

模型老规矩，我也都整合好了，关注我私信L，就有了。

一.
KoreanDolllikeness

人物LoRA领域，有无数。不错的，整活的，复刻明星的等等。比如
Makima、Lucy、Liyuu等等，也在各种灰色地带不断游走。

但是最好用效果最稳定的，我觉得还是
KoreanDolllikeness，
3月因为一些舆论风波，
KoreanDolllikeness被作者直接删库放弃。如今5月了，我依然首选
KoreanDolllikeness。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo3Fk5oaWJ0lEibicKoROzEiaQCwgSLVLWUyBQOqB6snpImrzDx9E0ibvpqEH8FOpzhibz4ibovTDz06mng/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo3Fk5oaWJ0lEibicKoROzEiaQ8I7lfNPSzsKfUBKuEjcMyKxlNXSqsNUiaqe198BrrJcyqnCxw43mRnA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo3Fk5oaWJ0lEibicKoROzEiaQd78p1gJ7fm00jKf6U5o7L4VTV74yiceJablMX4L9iaALfEcI5Ifhh1mw/640?wx_fmt=jpeg)

二.
墨心 MoXin

《墨心》—— 昔涓子《琴心》，王孙《巧心》，心哉美矣，故用之焉。

我心中年度最佳，最强模型，没有之一。

目前Civitai所有LoRA模型中下载排No.4，让世界都感受一下中国水墨！

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo3Fk5oaWJ0lEibicKoROzEiaQDGML2o7JP8EmdbIUzM7EfFfHOMNlSwh3gt0lnFuYx00hBRibFex3p6w/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo3Fk5oaWJ0lEibicKoROzEiaQ8tBdxyQR9E81eTqz9podibnKEoPC7jSibQnWn71wso3ib7U4hDp4micjYA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo3Fk5oaWJ0lEibicKoROzEiaQuu1eaGlLXqmGBCWAe5UDZvaChWrTRvNVuCPakA2zRp3pQjAiaIBibAog/640?wx_fmt=jpeg)

三.
hanfu汉服

目前Civitai所有LoRA模型中下载排No.7。

与墨心并驾齐驱，中国文化对外输出典范，中国的汉服，真的很美。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo3Fk5oaWJ0lEibicKoROzEiaQRiaH5VwolvLfrmbbFQvUXoH5akPmykhwULM94jPxdiaGpg8gT1zGZ3Uw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo3Fk5oaWJ0lEibicKoROzEiaQaVD80h0Azfjyb6BMg2Zhfic05EyJ2ibsBKTHMQePRdxX8FrDZOjIcLFA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo3Fk5oaWJ0lEibicKoROzEiaQA0smmeOzjOSgKzwPmG7Jk8680eJsib1icbs1auQ4lYVIAZ0eEBN45YBQ/640?wx_fmt=jpeg)

四.
blindbox/大概是盲盒

非常棒的盲盒LoRA，MJ的泡泡玛特风格火变了全网，带火了这种盲盒风格。

这是目前处理这种风格最好的LoRA模型，极其精致逼真，让你实现盲盒自由！

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo3Fk5oaWJ0lEibicKoROzEiaQ5KAHYy945hWyGNdYmjBTnL4rzpCkOAJqPgoCpYcWAxX09eGAvbAmPA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo3Fk5oaWJ0lEibicKoROzEiaQVnvLLqq69Z7HfjK30eNIOFv8t4RGExliazJ4Y8nDCWZIvppqgTRN6NA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo3Fk5oaWJ0lEibicKoROzEiaQVln88EA9zgUCyICZancHgnsW4mTyW5Yxpia7p6CK5a68GJy9EPaP7Jg/640?wx_fmt=jpeg)

五.
Anime Tarot Card Art Style 塔罗牌

很有趣的卡牌LoRA，把你的图片直接放在框里，让你有一种爱不释手的精致感，卡牌构图也是很经典的美。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo3Fk5oaWJ0lEibicKoROzEiaQCnriaVjg69KySCfJx9OENyZZEgBR8q0fvTFLlQ7VpbBrbLo2Esh3pTg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo3Fk5oaWJ0lEibicKoROzEiaQSOkK3aibxe5r3k707W9c2BicIPY01VxHicVZVzDqcp0R7BaESkUFgaMxg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo3Fk5oaWJ0lEibicKoROzEiaQpJ8W6GuvL6J5IoZPNcm2KNwwJa1gSbBdrrxLfeR26M8fbPtadqIfGg/640?wx_fmt=jpeg)

六.
Gundam RX78-2 outfit style 高达RX78-2外观风格

人人心中都有一个高达梦。谁不爱机甲，谁不爱高达呢！

机甲YYDS！高达YYDS！！

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo3Fk5oaWJ0lEibicKoROzEiaQicht8koJZH4PFOZR365ajgnQ9FF2UEibOjlvnaVIjOtB4l50oiaiaV2GQg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo3Fk5oaWJ0lEibicKoROzEiaQOVzhLicAIk7ycpVqMC0GzIwkhEhsckziaPBA1ibW0qBys8KxagCxhwY1g/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo3Fk5oaWJ0lEibicKoROzEiaQFc4JHrD9OiagL4FoDK9Fy790Z5pJesW1gNibEFiaIzX8qNHq2d0iaiamvCg/640?wx_fmt=jpeg)

七.
M_Pixel 像素人人

像素画起源于上世纪末，是机能不足下妥协的产物。21世纪后，3D技术大行其道，同时像素画也作为一种风格继承了下来，由于细节的缺失，反而给人一定的想象的空间。以《歧路旅人》为代表的HD2D则是其现代精神继任者。

这个LoRA，以此来缅怀那个像素艺术的黄金年代。最好的像素模型。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo3Fk5oaWJ0lEibicKoROzEiaQQkQWOrqezfjmNZOFDW0w7mXoBY8YRtaglV4X5DCCaFuSR8AzwCz5Ng/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo3Fk5oaWJ0lEibicKoROzEiaQ9t6On1KwaBFT4kc2ZajhPTu8JJLJQibVNBwuRNCURqwiaDibl3W7P4oMA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo3Fk5oaWJ0lEibicKoROzEiaQiaMYUbCEtRkicnHkLzUUz8UUROm19qfpW5CQBNeyHF7lfQj2icm7oIrQQ/640?wx_fmt=jpeg)

八.
The Legend of Zelda: Breath of the Wild Style

这个模型没什么好说的，我自己的私货。

作为一名任豚，作为一个塞尔达死忠粉，怎么能没有旷野之息那独特的风格模型呢！

塞尔达就是天！任天堂就是TMD的世界主宰！

5月12号的旷野之息2王国之泪，首发必须冲！

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo3Fk5oaWJ0lEibicKoROzEiaQC8cdfM8t36xN1D7zIiaAuUQssLa2KHOyD00zAsPKo1Y5N60ic92S7bcQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo3Fk5oaWJ0lEibicKoROzEiaQQBXRQpib2YgxmJB7rYZb2iaUmEVyy6bUEr7vXrUmBRsXmt1HMEnaNd6Q/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo3Fk5oaWJ0lEibicKoROzEiaQP7wY5ddCQSTjHibf0xJjibibzNbNZJt6Yxh43ormB3EsFSnHRMTtmuh4g/640?wx_fmt=jpeg)

写在最后

以上便是我目前最喜欢也是我现在最常用的LoRA模型啦。

也都放在了整合包里，关注我，后台回复L就有了。

模型的迭代快如闪电，后续这个感觉可以当成栏目，有好玩的模型出现，也第一时间推荐给大家，或者每隔一段时间做个盘点哈哈~

上期SD大模型盘点：
AI绘图StableDiffusion最强大模型盘点 - 诸神乱战

以上，创作不易，有用的话请点个关注并给个星标⭐，感恩。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
