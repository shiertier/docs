---
title: "Midjourney全新模型V6 Beta版上手评测 - 终于到来的语义革命"
发布日期: 2023-12-21
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647660858&idx=1&sn=568c005100b5ce47530e62e058cbd8cb&chksm=f1ba71682b2ce2abd1c58db654fb0123e49f21614931b8e487ad7a1d485906ab30cee3edae9a"
---

## 摘要

**1) 一句话总结**
Midjourney正式推出V6 Beta（Alpha测试）版本，该模型在图像细节质量、长句语义理解、空间构图控制以及基础文本生成能力上实现了重大突破。

**2) 核心要点**
*   **版本状态**：V6 Beta版目前处于Alpha测试阶段，用户可通过 `/setting` 命令在模型选择框中开启使用。
*   **提示词逻辑重构**：彻底摒弃传统的标签堆砌式写法（如“4k, 8k”等无用词），转为自然语言长句描述。官方推荐结构为：场景 + 主体 + 细节 + 美学风格。
*   **图像质量大幅提升**：在细节密度、材质质感、光影表现和结构真实性上获得巨幅提升；在构图和色彩表现上有小幅优化。
*   **精准的语义与构图控制**：模型现能准确理解复杂的空间关系语义，可通过语言精确控制画面元素的相对位置（如左、中、右、背景）及主体细节（如服装材质、颜色）。
*   **新增文本绘制能力**：支持在图像中嵌入少量文本，需将文字放在英文双引号 `""` 内，配合 `--style raw` 或较低的 `--stylize` 值可提高成功率。
*   **放大器（Upscaler）升级**：新增 `subtle`（微妙）和 `creative`（创意）两种模式，支持将图像分辨率提升2倍。
*   **其他官方优化**：提升了模型的连贯性与知识储备，并改进了图像提示（Image Prompt）和重混（Remix）功能。

**3) 风险与不足（基于原文明确提及）**
*   **不稳定性**：作为Alpha测试版本，模型表现和功能在接下来的几周内会频繁发生变化，且官方不会另行通知。
*   **风格局限性**：目前模型对真实感图像的提升最为显著，但对其他艺术风格的加强表现并不明显。
*   **功能缺失**：当前V6 Beta版本仍有许多Midjourney的既有功能尚未提供支持。

## 正文

有点意外，Midjourney猝不及防，北京时间下午13:56，老美那边大概夜里10点，发布了新版的V6 Beta模型。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrGVvhk80NYW55ib8paVE33vMvkDswWBBibWM22BuvhCd17GPERiajibnZza7M1Un538JYKoFicdp4mrQA/640?wx_fmt=png&from=appmsg)

他们是想趁着还没回家过圣诞，赶紧先发了。然后让大家一边过圣诞，一边给他们打黑工帮他们测模型。

这一下子给我发的，是着实的有点猝不及防。

现在，你使用/setting命令，在模型选择框中，就可以看到V6 Beta版。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrGVvhk80NYW55ib8paVE33vb2DNibZM80k6lpjXu7uM4CXViaH4Srls172YDuV4FiasVzyW95z2OZ7eA/640?wx_fmt=png&from=appmsg)

按照Midjourney的话说：“
This is an alpha test. Things will change frequently and without notice
”

“这是一个阿尔法测试。事情会经常发生变化，恕不另行通知。”

包括提到了“
速度、图像质量、连贯性、提示跟随性和文本准确性将在接下来的几周内得到改善
”

我猜测模型完成度在85%左右，剩很多对齐工作没搞完。

官方说的目前V6 Beta的更新内容：

1. 更准确的提示跟随以及更长的提示。

2. 提高连贯性和模型知识。

3. 改进的图像提示和重新混合。

4.
较小的文本绘制能力（您必须将文本写在“引号”中，并且 --style raw 或较低的 --stylize 值可能会有所帮助）

5.
改进的升级器，具有 'subtle ' 和 'creative ' 模式（分辨率提高 2 倍）

有点太废话，我翻译成人话就是：能容纳更多的词语token了、语义理解更强了、图像质量更好了、能嵌入一点英文单词进去了、图像能放大更多了。

我跟上百个群友一起跑了三个多小时，整体感受最大的变化其实还是两部分：

图像质量的提升与语义理解的加强。

我拆开聊。

一. 图像质量的提升

图像质量我关注的是以下几个纬度：细节密度、材质质感、色彩表现、光影表现、构图表现、结构真实性。

Midjourney
V6 Beta在细节密度、材质质感、光影表现、结构真实性上，都有巨幅提升。构图表现和色彩表现有小幅提升。

直接放对比图，没啥可说的了，部分图片来源于好基友
@鲜虾包
、
@猫宅V酱
、
@大峰AI绘画
。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrGVvhk80NYW55ib8paVE33vHe5FjCt06fAFZGOBR8Tvx1t9AicyzbhSEwsHAtLWRmSibpicsql5t40Vw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrGVvhk80NYW55ib8paVE33vyJDguITaicxib1jY1bGJWnCoHtxWecf80CDd1Kpvqib2hDuia9hpWowncg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrGVvhk80NYW55ib8paVE33vdoxF8Vm6ibtDeY0UC1TZSh0Wc9ZSPtk9ghDXvia3jjibtsN4579ic6FwoQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrGVvhk80NYW55ib8paVE33v22nMibLwDmVYnl0iafSHYhKGDtKK2CnEb9sMbMQ0XLME2YcibuUzzCVuQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrGVvhk80NYW55ib8paVE33viaFAnPuEW38RydQlN8DqZCDo4frtvNhNKFQHicuPfUXNdiaV9Jg8qicODg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrGVvhk80NYW55ib8paVE33vGXqZ6fE2OtCmqXr65hHmCg7viaDHiaNIk8dvsNPy9oHNQuwJkpichdpjQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrGVvhk80NYW55ib8paVE33vQ6pODb2w4w3Fu4R4nom8RPWPbvSrdz4pwcwfWCGqgX6cPib2KSNMPMg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrGVvhk80NYW55ib8paVE33vAB7lF92s18AI02a48xHhicPWfj3xfAYqMCBcibvvicuAnOnV7CdE9RIiaQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURrGVvhk80NYW55ib8paVE33vsKMkaSibcVBGoetbDOJkPiaU2CsXXT3Dr9IkOK3PiaRHwJcQcTxVd9FBQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrGVvhk80NYW55ib8paVE33vYe7ya6FevibtnWEadvkBh3GDeZTX07HM3znzEiaZLjLTkkjx6rgjCYMg/640?wx_fmt=png&from=appmsg)

就不放太多了，反正核心思想就一个：图像质量up up 还是up。

知道在
细节密度、材质质感、光影表现、结构真实性上，都有巨幅提升
就行了。

下面一趴的语义理解才是最核心的重点。

二.
语义理解的加强

我重点来聊聊语义理解这块的变化。

我曾经毫不避讳的骂过
Midjour
ney，他的语义理解就是一坨屎。让我在做过往的AI作品时，无数次的带上痛苦面具想砸电脑。

但是这一次，
Midjour
ney
V6 Beta对于语义理解的加强，终于到了中上游可用的地步，注意我用的词是“可用”。跟Dalle3这种逆天的还没发比。

首先请忘掉所有的SD式的写法，不要写tag，不要写“
photorealistic, 4k, 8k
”之类的垃圾词，他们对于新版V6 Beta没有任何蛋用。

不要写tag，不要写tag，不要写tag，重要的话我说3遍。

更别直接用v5.2的prompt直接拿来复制粘贴，请重新学习新版V6的写法。

整体上，我觉得更强调把细节说清楚的能力。我推荐的结构是：

场景+主体+细节+美学风格。

比如我的这段Prompt：

三个不同的美女朋友坐在沙滩上面向镜头微笑。中间的是一个开朗的金发白人女性，穿着短裤和红色背心。左边的朋友是一个黑发美国女孩，穿着比基尼和透明的裙子。右边的朋友是一个红发英国女孩，穿着比基尼。背景可以看到海，海上有船和飞翔的海鸥。Agfa Vista 200拍摄的中景镜头。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrGVvhk80NYW55ib8paVE33vMfF584O5I0H6JA8kPU1Rw4ibho64bnZPD9OwoX0pib8XBa5lr1JjEtJw/640?wx_fmt=png&from=appmsg)

非常复杂，但是我几乎都是以长句子去写的，清晰的描述场景和主体以及部分衣服细节。

再看看v5.2，可以就语义理解上，做一个清晰的对比。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrGVvhk80NYW55ib8paVE33vib9kbF7gCGUn5fz8Y8GQV7O1qicTIZfjPzsJfQsVj6pkY3ZET8PcBAibA/640?wx_fmt=png&from=appmsg)

在新版prompt的写法上，我说一些我认为有趣的技巧：

1. 你可以指定任何细节。

不要吝啬你的想象力，更不要吝啬你的笔墨，用一切有逻辑、有结构的语言，把你想要的细节指定出来。她穿了什么衣服、衣服是什么材质、什么颜色。写明白，写明白比一切都重要。

比如：

漫威黑寡妇的半身特写镜头。黑寡妇穿着蜘蛛侠的黑色紧身衣，她的左手拿着美国队长的盾牌，右手拿着雷神之锤，她很悲伤。--ar 16:9

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrGVvhk80NYW55ib8paVE33v8C1rE6kbAYHquDDZPFwXiccj0XIB6ThjzdSNHBpUVH8LnkV1obY0icCQ/640?wx_fmt=png&from=appmsg)

2.
你可以使用语言控制构图。

在V6中，现在很容易用语义去定位事物之间以及与相机的关系。这个在V5中几乎是难以想象的。

现在我们可以
用短语描述一个通用的图像，以这个通用图像为焦点。围绕它填充细节。

客厅的桌子上有三个装满水果的篮子。中间的篮子里装有草莓。左边的篮子装满了橘子。右边的篮子装满了芒果。背景是一个带有圆形窗户的空白蓝绿色墙壁。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrGVvhk80NYW55ib8paVE33v0vjsia5BMw904uHFH1Kmcm6wMc1yGuuiajovglzTFqBwBxrD2piafFICQ/640?wx_fmt=png&from=appmsg)

3.
你可以向你的图像中添加文本
。

Dalle3的老传统了。
可以给你图像添加文本，将需要嵌入图片的文字放在 “引号”内，并且保证你描述的画面上适合嵌入文本。比如你非说要在她鼻子上写个“shabi”，那写不上去你也不能怪MJ对吧。

特朗普在苹果发布会上的特写镜头。他在人群中举着一块写着“SHABI”的牌子。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrGVvhk80NYW55ib8paVE33v4GGjg8k9ZWAKR6vHxO0mp0hOXNDcfBPbE08NM93n2Tv58icOIIOG0xw/640?wx_fmt=png&from=appmsg)

写在最后

Midjourney V6 Beta带来的有趣是一定的，对真实感和图像质量的加强，基本到了现在所有AI绘图的颠峰，再配上独一档的审美，以及史诗级的语义增强。

可以看到，
Midjourney未来正式版V6的推出，一定又会开始“遥遥领先。”

诚然，问题还很多，比如对于其他的风格加强好像并不明显。

比如很多功能都还不支持。

但是瑕不掩瑜。

Midjourney
V6 不是AI绘图的最后一步。

而是又一次AI历史长河中的丰碑。

。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
