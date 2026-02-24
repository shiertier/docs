---
title: "DeepSeek开源第四天，一文看懂今天发的两个猛货。"
发布日期: 2025-02-27
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647669050&idx=1&sn=1b5161538a5538b8d23ec7e0b178676a&chksm=f1b0f28bba812e026fa477b37ca3b764182a6763af33e2a0c4185780f0e448c0a88926e83e80"
---

## 摘要

**1) 一句话总结**
DeepSeek在开源第四天发布了双向流水线并行算法DualPipe和专家并行负载均衡器EPLB，旨在极致压缩计算“气泡”并大幅优化专家模型的负载与通信效率。

**2) 关键要点**
*   **开源进展**：继FlashMLA、DeepEP和DeepGEMM之后，DeepSeek在第四天开源了DualPipe、EPLB以及一个性能分析数据库。
*   **DualPipe（双向流水线并行）**：该算法曾出现在DeepSeek v3论文中，主要用于解决传统单向流水线并行中的“气泡”（设备闲置等待时间）和数据搬运调度问题。
*   **DualPipe 核心优势**：通过双向并行调度，将流水线气泡和闲置时间降至最低，实现硬件计算效率的最大化。
*   **EPLB（专家并行负载均衡器）**：一种专门用于平衡各个“专家”任务工作量的调度器。
*   **EPLB 冗余机制**：根据历史统计数据预测繁忙的“专家”，并为其创建“复制人”（冗余专家）分散部署，以分担高频调用压力。
*   **EPLB 通信优化**：将经常协同工作的专家组分配在同一个节点（同一张卡或同节点GPU）上，利用节点内高带宽（如NVLink）减少跨节点（如IB）的大量数据通信。
*   **开发者支持**：DeepSeek为这两个项目提供了详细的开源代码、接口、使用示例以及分层负载均衡策略图，方便开发者直接复用。

**3) 风险/不足（基于原文明确提及）**
*   **资源消耗增加**：DualPipe在实现最高效率、最少浪费时间的同时，代价是占用了更多的硬件资源（参数翻倍，激活内存空间占用增加）。
*   **使用门槛**：DualPipe虽然提供了快速使用方法，但仍需要开发者进行一定的自定义配置。
*   **生态绑定**：DeepSeek开源的这些项目均基于英伟达生态构建，客观上可能会让使用者与英伟达的硬件生态绑定得更深。

## 正文

最近肝到爆，一直以为昨天是账号建立两周年。然后回溯了下历史，才发现原来是前天。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoHuxVWU1JqCJU0iahwWtTnW8RB8QicefRpc0BOicmnGRVSBuUYeWjmjQpgltIB8opL6k0cLqH1q74ZQ/640?wx_fmt=png&from=appmsg)

我说25号是什么黄道吉日呢。。。

发了这么多篇文章，唯独把我自己忘了。

感谢DeepSeek的开源连击，真的感谢。。。

从FlashMLA、DeepEP再到DeepGEMM，开源的世界里真就闯进来一位大神。

老黄辛辛苦苦多年建起来的商业护城河上，DeepSeek居然明目张胆地开始架桥了。。。

但是说实话，DeepSeek的所有开源的项目，全部都是基于英伟达的生态做的，虽然大家戏称说DeepSeek比老黄更懂显卡，但是这些项目开源出来，我咋感觉大家跟英伟达绑定的就更深了呢。。。

说回今天（第四天）。

他们又一口气开源了俩东西，还有一个性能分析数据库。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoHuxVWU1JqCJU0iahwWtTnWNcWJhShapmRTIfnAkSEc7lzjQNicBTbeWYSoqxt7IkSpSo1lGYUJVNw/640?wx_fmt=png&from=appmsg)

数据库就不提了，主要看另外两个。

一个能把硬件资源，再度榨干到极致的双头流水线DualPipe。

还有一个能平衡所有任务，把效率拉爆的EP调度器EPLB。

开源链接在此：

DualPipe

https://github.com/deepseek-ai/DualPipe?tab=readme-ov-file

EPLB

https://github.com/deepseek-ai/eplb

说DeepSeek牛逼已经说麻了，只能跪着给他们鼓掌了。。

先说DualPipe。

一.
DualPipe

这玩意儿是一种贼新的双向并行算法，在DeepSeek v3的论文里面其实已经出现过了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoHuxVWU1JqCJU0iahwWtTnWCpania84hC79IF0PnzUnpqVSkjsJN5ic6HwOzHicMbtpR228ddHb1JbSg/640?wx_fmt=png&from=appmsg)

我用一个做面包的例子给大家解释一下这玩意到底干啥用。

比如说你家里是开面包店的，叫X利来，每天都要卖好吃的面包给大家吃大家也很喜欢你。

你家里呢，有一条面包生产线，就像工厂里那种流水线一样。

面包从揉面、发酵、整形、烘烤到包装，需要很多道工序，而且每道工序都要排队依次进行。

如果是那种单向的传统的流水线就会有一个非常der的问题：比如说一个人先把面揉好然后送给下一个人发酵，等发酵好了再送给下一个人烤，烤好了再送给下一个人包装。。。

这就导致每个人在等待之前那道工序结束的时候，可能都要等上一会儿。如果有几道工序比较耗时，那么后边的人就只能干等，没法同时干点别的，这就拖慢了整体产量。

所以为了提高效率，你就就会想，能不能让前面的操作和后面的操作同时进行？比如这个人一边揉面，另一边又有人可以烤前一批次的面包，不至于让所有人都卡在同一个步骤上面。

这其实就类似最基本的流水线并行思想，也是现在很多工厂的流水线方式，简称，工业化。

可是，这样也会产生一种所谓的“气泡”，就比方说等你揉面的人实在太多了，而烘烤那边一时没得可烤，或者反过来，烘烤还没结束，就阻塞了包装，一来一回会浪费一些时间空档。

这个浪费的空档，形象点说就像流水线上两个工序之间充了空气的“气泡”，它还是没有完美的提升效率，会让人有摸鱼的“气泡”空间。

普通的流水线并行，还会遇到一个问题，就是你的搬运。

比如说你家工厂太大，揉面机在一楼，烤炉在八楼，中间还没电梯。有时候揉面好了要送到烤炉，这个来回搬运也得干死个人，但是又不得不做。

所以，你还在加上搬运的工序，也就是在搬运的同时，炉子、揉面机啥的也都不能闲着。

你现在可以歇一会，来考虑一下他们的计算量，是不是非常的恐怖。

但是相比于大模型的计算，面包厂这个case的复杂度，就是小巫见大巫了。

而DeepSeek掏出来的DualPipe，就是解决这个问题的，就是如果带入我们自己的话，你就可以把它想象成一个非常黑心但又非常聪明的资本家。。。

DualPipe这东西，中文可以叫“双管并行”或“双向流水线”，它直接把整套的逻辑和计算设计，都给你做完了，找到了最优解，你不用想着每个工序怎么安排了，你直接用就完了。

它就是，调度之神。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoHuxVWU1JqCJU0iahwWtTnW2squGhSeyvENvQ4wPx3fdc3BWVicdejbTgMfJILcj1DKS7ZB6DYTfzA/640?wx_fmt=png&from=appmsg)

所以，DualPipe到底能把干活的人发呆的时间，降到什么程度？

来看下面这个表。

DeepSeek真是把一切数据都开源。

这其实就是一个干活效率对比表。

主要有几个数据：流水线气泡（浪费的时间）和参数（用的资源）、激活（额外用的内存）。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoHuxVWU1JqCJU0iahwWtTnWFZNGQm5bfoquIOSOGWYd3EicUNiaaHxNSMEwsf3QlSlKyHwzdkwTehtw/640?wx_fmt=png&from=appmsg)

能看得出来，效率最高，浪费时间最少。但用了更多资源（参数翻倍，空间多占一点）。

可能是为了适合需要超快速度的大任务，代价就是资源稍微多点。

快速使用方法，也给出来了，不过需要自定义一下。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoHuxVWU1JqCJU0iahwWtTnWkVqQf4JAAFxw0LyAS0DkQpGKxQ2qdWenicIgwsqbbgamhYDdA9LlM7Q/640?wx_fmt=png&from=appmsg)

我还记得老黄说自己是全世界最好的CEO。确实，一路给市值干到顶峰的人物。

但现在，DeepSeek要冲上山，走一条之前无人问津的羊肠小道，拔下那把勇者的宝剑了。

AI的世界，变化就是这么快。

没有谁是必须打到的怪物。

但挡在路上的永远不会是下山的神。

在开发者那一栏，还有个非常好玩的是，真大佬亲自下场了。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoHuxVWU1JqCJU0iahwWtTnWbRIXwuPW0ZficBGhXY3iclcCiapA27mNswd24tw1XHmXMMOc3wsicfPsPQ/640?wx_fmt=png&from=appmsg)

二.EPLB

再说今天
DeepSeek给的第二份大礼：
EPLB。

Expert Parallelism Load Balancer，翻译过来可以叫“专家并行负载均衡器”，你也可以说是EP调度器。

还是举例子吧。

比如说一个学校，现在要一起办2周年学校庆典。

一旦搞起这个庆典，我相信大家懂得都懂，就很繁琐。

会涉及到不少项目：布置会场、教室卫生、文艺汇演彩排、音响灯光调试、食堂伙食安排、礼仪接待……

各个项目可能都由不同的老师或同学去负责。要是这些项目的难度或工作量不一样，有些老师就会被忙得不可开交，而另一些可能比较清闲，这就不公平，也不高效。

那么这个所谓的“专家并行”就意味着，每个老师或同学都可以看作某个“专家”，专门负责一部分工作。

比如语文老师可能负责写文案，音乐老师负责排练合唱等等。

可是总会有一些专家特别抢手，比如PPT做的好的老师，那你肯定懂的，这绝壁是最抢手的专家。

于是这个专家就累死累活。要是能再安排两个PPT专家，这样就可以分担一部分压力，这个就叫“冗余专家”。

EPLB做的事情就是，根据统计到的每个专家最近一段时间的工作量，推测哪几个专家可能会特别繁忙，然后赶紧给它们“复制”一下，也就是直接给PPT大拿来几个复制人。

这样当需要调用这个专家时，一部分请求可以排到复制人那里执行，大家就不用都挤在同一个人那里里，工作可以被分散出去。

这就是影分身之术。

然后还得考虑你的学校有不同的教学楼对吧，教学楼之间的距离比较远（类似节点之间用IB连接）。

同一个教学楼里的人肯定近的多（类似节点内用NVLink），所以让同楼里老师之间的合作肯定比跨楼去合作更方便。

EPLB就希望那些经常一起合作的“专家组”能放在同一个楼里，避免来回跑的浪费。比如有几个老师最常交流合作，那就得把他们都排在一个楼层，就能减少在楼间奔跑。

相当于在DeepSeek里就可以减少节点间的数据通信。

所以，总结一下，学校庆典马上开始了，EPLB会先数一数每个专家上个庆典忙了多少，比如看历史统计，某个专家被调用了100次，另一个才10次，差距很大，就说明前者更忙，需要复制，直接就火速复制10个数字人。

然后它要决定这些复制的专家该放到哪张GPU卡上。如果有两张卡特别空闲，就把繁忙专家的复制人放到这两张卡上，以便一旦有请求过来，不管发到哪张卡都能快速处理。

它也会尽量把同一组的专家都放到同一个节点（同一个楼），减少跨节点的大量通信。

这，就是
EPLB。

超级调度器。

同样，DeepSeek并不只为了开源而开源，还给出来详细的接口和例子。

下面这串代码，就是这群聪明人，怎么安排工人干活的。

复制就行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoHuxVWU1JqCJU0iahwWtTnWVIqPhgYpreBV8NHaav3wb7Ma3huez7qliaY2NobXYZufEAItz0Y390Q/640?wx_fmt=png&from=appmsg)

下面这个图就是他们，在专家少的情况下，做调度的策略（分层负载均衡策略）。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoHuxVWU1JqCJU0iahwWtTnWKBmqexvMG23mUYz4jhgiaZ4eaT4GPE0fxUVqpSfaDI9d8QGiaibWQCnkQ/640?wx_fmt=png&from=appmsg)

写在最后

早上这两发完以后，
看到这，一堆在技术中摸排滚打的群友坐不住了。。。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURoHuxVWU1JqCJU0iahwWtTnWictx8pbQBnkEs7oYpdGXUsXn0QVUUHV5clU76O7gDDeic9lHVSOxVjsw/640?wx_fmt=jpeg&from=appmsg)

已经懵逼。

DeepSeek这群人。

其实就像DeepSeek在X上的官方签名：

用好奇心解开AGI的奥秘，用长期主义回答本质问题。

DeepSeek开源的魅力就是。

能让所有人都品尝到AI这颗大树上开出的果子。

花木逢春。

中国，要春暖花开了。

感谢DeepSeek。

谢谢你。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
