---
title: "起猛了，腾讯元宝接入DeepSeek了。"
发布日期: 2025-02-13
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647668538&idx=1&sn=b461d901745b5d3fed9de210f3b78a7c&chksm=f166c693a5a394774f52b90b7b4e0f10f974533d1c15771c20854c191705ed9597644c6ab1e8"
---

## 摘要

**1) 一句话总结**
腾讯旗下AI助手元宝正式接入DeepSeek R1模型，并结合其独有的微信公众号联网搜索能力，为用户提供了高质量的AI内容检索与推理体验。

**2) 核心要点**
* **首家接入**：腾讯元宝成为首家在C端AI助手应用中接入DeepSeek R1的大厂自有大模型产品。
* **功能入口**：用户更新应用后，可在元宝对话框顶部直接切换使用DeepSeek R1。
* **实测体验**：模型响应速度快且运行流畅，未出现官网卡顿现象（作者推测接入的为满血版R1而非蒸馏模型）。
* **核心护城河**：元宝的联网搜索功能可以独家抓取并引用微信公众号的高质量文章，这是其他AI搜索产品目前不具备的能力。
* **强强联合**：DeepSeek R1的强大推理能力与元宝的公众号内容生态相结合，大幅提升了信息检索与重组的质量（实测中成功精准引用9篇公众号攻略）。
* **开放策略**：此举延续了腾讯在AI领域的开放态度（此前已开源混元MoE及绘图、视频、3D等模型），体现了以用户需求为中心、合作共赢的产品导向。

**3) 风险/不足**
* 接入外部模型（DeepSeek）会给腾讯自有大模型（混元）的口碑带来压力，并可能面临外界的嘲讽。

## 正文

今天本来是想摸鱼一天不发文章了。

结果早上睡醒，准备更新一下应用商店，看到了一个让我觉得非常离谱的更新预览。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpUNuz2OKlczqsBvb7CkJeqibFovCjx8A9p7pMxVGXS4kmpz3GoicIkwRLc67iccZLqBsMicd38iatSSMQ/640?wx_fmt=png&from=appmsg)

啊？？？

这剧情，怎么感觉有点牛头人了？？？

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpUNuz2OKlczqsBvb7CkJeqnpyxot8hawWpp3ESPtc0ibibz5cJCXicuhIklxUQYVSwiaofzm8V8g5hjA/640?wx_fmt=png&from=appmsg)

立刻第一时间去找了我元宝的朋友，也确认，是真的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpUNuz2OKlczqsBvb7CkJeqTbb7RibQTkLjYpqfhXd0XL3bXcUl7rThyWC4NtsQsoNMIQS4r15mhQQ/640?wx_fmt=png&from=appmsg)

这应该是我知道的第一家有自己大模型的大厂，第一次在面向C端的AI助手应用中，第一次接入DeepSeek R1。

这个意义影响还是非常深远的，腾讯在AI这一步上，好像走的格外的开放，从之前的批量开源MoE、混元绘图模型、混元视频模型、混元3D模型，还有今天这神之一手接入DeepSeek R1。

感觉有点像一个饭店，厨房里本来有顶级大厨，却依然请了隔壁号称专业做川菜的厨师来驻店联合营业。

要么说明这家店就是真的对美食来者不拒，想把多种风味都做成招牌，要么就是他们非常清楚，自己在家玩自己的，在这个时代并不是最优解。

跟别人合力，什么好用我就把什么给用户，这好像，才是C端的王道。

更新完元宝，直接打开，一进来就是一个对话框，在最顶部，你们就可以切换到DeepSeek R1了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpUNuz2OKlczqsBvb7CkJeqMa9QHWC8UPCvPjvZDl34UzywocuXQlCqeYq7e7HF5uaDLmuretQcicw/640?wx_fmt=png&from=appmsg)

随手用一个我之前玩《燕云十六声》里面的猜谜题去测试一下：

“猫科动物，线索是利爪，不是老虎，不是豹子，会游泳，生活在亚欧大陆和北美洲的森林里，吃小型哺乳动物，比如鼠类和野兔，这个动物可能是什么”

速度非常的快（当然也可能刚上线，还没人用）。

简单测了一些题，直觉上我觉得是满血版R1，99%不是蒸馏的小模型。

而且目前从来没有出现过那个官网糟心的卡顿现象，还是非常流畅的。

但是我体验了半个小时，最值得说的，还是联网。

真的，元宝的联网+DeepSeek，实在是骚起飞了。

在整个中文互联网圈，几乎有一个共识是：
公众号的整体内容质量，是文字平台中最高的。

几乎所有的能联网的AI，能抓到的都是公域信息，那些公域信息的内容质量，懂得都懂，垃圾漫天飞。

而公众号信息的整体质量，远超出一般的搜索引擎和新闻平台，基本上是我大多数时间的搜索引擎，有任何新东西或者我想研究某个选题，我第一时间一定会去微信搜。

大部分的内容，都有专业的人，给你掰开嚼碎，然后首发在公众号上。

但是没有一个AI搜索产品，能抓到公众号的文章。

嗯，一个都没有。只有元宝可以。

这就是内容生态，巨大的护城河。

而现在，DeepSeek R1的推理+元宝的联网搜索，我感觉这就是最强的结合体，没有之一。

打开左下角的联网搜索，变成点亮状态，就可以联网了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpUNuz2OKlczqsBvb7CkJeqq69pHuOqRDprTRhnfhGCDaLETkIK7RbOO0d7ficUiceOQUoLWlcVWhrA/640?wx_fmt=png&from=appmsg)

正好昨天写了飞书的多维表格+DeepSeek的用法，我们就直接问一下这个问题，还有哪些牛逼用法。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpUNuz2OKlczqsBvb7CkJeq2bHo2ZaNJpRJmSS2kb4QJBhJffialDPIGhQ74qf4cjia5Jx2icOnqKdbA/640?wx_fmt=png&from=appmsg)

可以看到，引用的9篇资料，全部都是公众号的创作者发的攻略，第一篇是歸藏
藏师傅的，第二篇，就是我自己昨天写的那篇。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpUNuz2OKlczqsBvb7CkJeqXHw2NePlSOTXqFofb2G3p5ic1rOrfLZZag7oxhGlibNLLzEbSRKtmKDw/640?wx_fmt=png&from=appmsg)

答案中，也有对于用户评论智能分析的部分，这强度和质量，直接拉满。

甚至我还可以让元宝，来用贴吧老哥的口吻，喷一下“数字生命卡兹克”。

毕竟，元宝一定是最懂我的。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpUNuz2OKlczqsBvb7CkJeqLoibyMxg4QuM9DAI0l8fgo2muPMrojVeUibMy1S1PZMKEl894r0ZNaUg/640?wx_fmt=png&from=appmsg)

差点给我干破防了。。。

说真的，说不定有朝一日，这个逐渐日落西山的公众号生态，里面海量的内容，会变成一个更加立体的知识库，被每一个AI用户挖掘得淋漓尽致，真正实现信息重组和深度利用。

这一波，我还是得佩服一下混元的魄力。

谁都知道，元宝接入DeepSeek，会给混元的口碑带来多大的压力，也一定会有各种嘲讽。

但是吧，从我自己的角度来说，产品的意义就是，能给C端用户带来更好的服务。

而DeepSeek R1+元宝内的公众号生态，这个组合拳，确实是现在的顶峰。

从产品层面看，这是一种以用户为中心的做法。

从产业层面看，也预示着AI大厂之间不一定是非要谁死谁活，合作共赢也能各取所长。

最后，我想起一句著名的话。

The times, they are a-changin’

拥抱开放，共创生态，让用户得到好处，这才是真正的双赢。

毕竟竞争归竞争，谁能真心把用户需求摆第一位。

谁就可能在这波AI浪潮里走得更远。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
