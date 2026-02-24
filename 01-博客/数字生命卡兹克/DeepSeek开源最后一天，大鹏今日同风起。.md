---
title: "DeepSeek开源最后一天，大鹏今日同风起。"
发布日期: 2025-02-28
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647669102&idx=1&sn=9b19c79d44d82715ed54b7ccc52cb520&chksm=f1c644471499a81dd90cfc468d923118211f40c827663af76f0f7115611d87dc28e56e0a9bd3"
---

## 摘要

**1) 一句话总结**
DeepSeek在开源周最后一天发布了专为AI优化的分布式文件系统3FS及轻量级数据处理框架Smallpond，凭借极高的数据吞吐量进一步挖掘了底层硬件的性能潜力。

**2) 核心要点**
*   **开源周收官**：DeepSeek完成了连续5天的开源活动，最后一天发布了核心项目3FS（Fire-Flyer File System）和Smallpond（此前已开源FlashMLA、DeepGEMM等5个项目）。
*   **3FS定位与架构**：3FS是一个专为AI模型和推理设计的分布式文件系统，采用分离式架构（存储与计算分离），具备位置无感（locality-oblivious）特性，无需繁琐的地理位置调度。
*   **3FS底层技术**：深度结合并榨干了高速固态硬盘（NVMe SSDs）和光速网络（RDMA/200Gbps InfiniBand）的硬件优势。
*   **3FS极限吞吐量**：在180个存储节点、16个14TB NVMe SSD和双200Gbps网卡的集群测试中，3FS实现了高达 6.6 TiB/s 的数据吞吐量。
*   **KVCache性能**：针对大模型推理优化的KVCache读吞吐量可达 40 GiB/s，且在并发进行垃圾回收（GC IOPS）时依然能保持读取流畅，互不干扰。
*   **3FS配套文档**：官方提供了极度详尽的说明书，包含设计笔记、安装指南、API参考、详细参数表以及可供运行的测试集群。
*   **Smallpond框架**：基于DuckDB和3FS打造的轻量化数据处理工具，支持Python 3.8至3.12版本。
*   **Smallpond性能**：得益于3FS的高并发读写和DuckDB的SQL引擎，Smallpond能够快速、极简地处理PB级别（千万亿字节）的海量数据。
*   **硬件优化潜力**：此次开源证明了现有的英伟达GPU及底层硬件集群仍具有巨大的优化与挖掘空间。

## 正文

弄完OpenAI的GPT-4.5，已经是7点多了。

但是感觉我真的有罪，我居然熬夜就为了看这个大垃圾。

虽然很想睡觉，但，今天可是DeepSeek开源的最后一天。

之前，连续4天，5个硬核项目，
FlashMLA、DeepGEMM、DeepE、DualPipe、EPLB，
两万多个Github星星，这都是全世界开源小伙伴们的倾情贡献。

既然已经肝了4天了，那最后一天，我才不要错过。

等到早上9点，DeepSeek如期而至。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURryhAvm1EamqQic08J4qwomeCr0GVvRjRic5KldncOcYJIlVkRUutciabV8yn6R7wmzYcNBJ49uO30vg/640?wx_fmt=png&from=appmsg)

这次，他们开源的东西还是极度硬核：

3FS（Fire-Flyer
File System
）

链接在此：https://github.com/deepseek-ai/3FS

还给了一个基于3FS的数据处理框架：

Smallpond。

https://github.com/deepseek-ai/smallpond

先说3FS。

简单来说，3FS就是一个专门AI模型和推理做的文件系统，只不过，它是分布式的，性能太强了。

昨天是面包厂，那我今天，在用奶茶工厂来给大家举个例子。

比如，你是一个奶茶世家，经营着一家超大规模的超级奶茶原材料工厂，开的贼大，专门给喜茶、霸王茶姬、CoCo、茶百道、蜜雪冰城等等全国各大奶茶品牌供应原材料。

每天有上万家门店等待着你的各种果汁、茶汤、蔗糖、珍珠、椰果啥的全都得从你这儿以极快的速度输送过去。

因为一旦原材料供不上，各家奶茶店就没法及时出茶，排队的顾客就得锤门店，门店就会来捶你。

而切大家的配方比例是要严格控制的，一旦某些配方仓库搞混数据，比如喜茶家的葡萄果肉和茶冻比例调错了，或
芭乐瓶里面的原料配比发错了
，又可能要被顾客捶。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURryhAvm1EamqQic08J4qwome6P3ibXjYGbhh5keUWbJJlcGgqBAP1aGy2tnAdoqpxDic2lxXESeaHNJg/640?wx_fmt=png&from=appmsg)

所以你可以想象，这工厂听着就很牛逼很复杂对吧。

所以你为了保持整套工厂是靠谱的、准确的，不会被各大家品牌方捶，你就需要一个无比宽敞、极度智能的流水线+库存网络。

这就是你的究极智能奶茶原料分发系统。

而3FS（Fire-Flyer File System），就是你的这个究极分发系统。

每天都有成千上万的奶茶店要来仓库调取、回传各种信息，比如店家库存不足时要申请更多原材料，原材料运到门店后又需要登记消耗情况，遇到新品上线还要紧急调度不同产线来增产。

所有这些海量数据读写都得在极短时间内完成，否则延时太高就会造成门店断供或生产线浪费。

3FS不仅能把所有的分发全部处理掉，而且延时极低。

核心技术就在于，我们在厂区里安插了大量全新的高速自动化储物柜（这就是SSD），这些储物柜随时能被调度，门店的所有配方、原材料需求等信息都是数字化的，一按按钮就能知道哪里还剩下多少牛奶，哪里的茶叶正处在发货阶段。

而且，我们还造了一堆的光速传送带（RDMA），不需要过多的中转，一旦原料从储物柜那边这边发出，直接可以到达对应的节点，而不用像传统的先装车，然后普通货车开一大圈，再交给搬运工二次处理。

效率拉满。

同时，我们这个工厂，把原材料加工区和原材料存储区分开，还把各种茶叶处理流水线和配料混合区都搞成了独立模块。

当某天喜茶或者蜜雪冰城研发了一个新品，门店突然给你下单了一个全新的配方，需要一种新的组合了，也没关系。

3FS让你不必关心这个原料是存在哪个仓库、由谁负责加工，因为在逻辑上，你可以看作整个工厂就是一个大同心圆，任何角落都能直接访问存储资源。这叫 locality-oblivious（不用再因为地理位置不同而做繁琐的调度），相当于你只要告诉工厂我要一批A茶叶和B奶盖，系统就能自动把所有加工、分发环节安排好。

对你来说几乎毫无感知，就像整个工厂是一个统一的池子。

这就是3FS的“分离式架构”。

现在再回去看DeepSeek给出的介绍，是不是就大概能看懂，知道这玩意是个啥了？

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURryhAvm1EamqQic08J4qwomeYMgQ1h1iaJJJhBpia277icePicwySuvZoRLFuchskXOv7j1gibE3ic4LfQWw/640?wx_fmt=png&from=appmsg)

再看看3FS的实际表现。

也比较炸裂，性能直接拉满。

现在我们假设，你家的这个奶茶工厂，有180个高速自动化储物柜（存储节点），16个超大容量（14TB）的冷冻箱（NVMe SSDs），还有两个超快的光速传送带（200Gbps InfiniBand网卡）。

那在3FS的加持下，这个奶茶工厂，它1秒钟能送出6.6TiB的原材料。。。（1 TiB约等于1.1TB，有个有个换算关系，1TiB=1024GiB，1TB=1000GB）

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURryhAvm1EamqQic08J4qwomeTFjniaXViaISdKDPhPzhCyqSlEq88t4zS5WmC3oAzrl7Gduibf8x3NzSg/640?wx_fmt=png&from=appmsg)

这吞吐量是啥概念呢？

约等于你可以一次性加载数千部高清乃至4K影片，一部 1080p 高清电影大小在2~3GB，4K电影大概10GB往上跑，以6.6TiB/s的吞吐来说，一秒钟就可以把几百到上千部电影打包塞进内存。

6.6 TiB/s已经属于往里塞东西时，硬盘都来不及转，网络都快成瓶颈的级别。

在现实的大规模分布式集群里能跑到这种速度，说明它已经把SSD和 RDMA网络的优势榨到极致，远超一般人日常认知的网速或存储吞吐。

然后还有一个
KVCache，
其实就是优化大模型推理过程的技术
。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURryhAvm1EamqQic08J4qwome9icDPhcyxXrAhQ4ibaB6XiacRW8iaMMgqJp15MSpnwcoFKohOtTicWAhclQ/640?wx_fmt=png&from=appmsg)

KVCache 的读吞吐能飙到40GiB/s，也就意味着，当大量门店需要不断查询某些关键库存或实时交易数据时，3FS依然能挺住。

不至于像传统系统那样面对上万次请求就卡死。对比之下，其他系统要么没有足够的带宽，要么在同时进行移除垃圾或归档时会大幅拖慢读取速度。但在3FS这套工厂体系里，即使一边有人清理过期原材料（GC IOPS），另一边的订单读操作也能流畅进行，互不掣肘。

如果只看平均速度，那也稳的不能再稳了。这玩意儿最可怕的是，上下限都极高。

整个3FS就像DeepSeek开源的老作风，他们把所有使用教程统统给了出来，真是生怕我们不会用。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURryhAvm1EamqQic08J4qwomemvAPicMxtQ1wjyibYkc3bahTLSeUZia3y6PPqicLHHAqCNgp9TNicVWz0uA/640?wx_fmt=png&from=appmsg)

我还发现个好玩的，除了上面这个使用操作，还有个说明书大礼包。

就在这。设计笔记、安装指南、API参考、详细参数表都一应俱全。

安装指南这部分，还给了一个测试集群，随便运行。

我甚至以为DeepSeek，不想把日子过下去了。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURryhAvm1EamqQic08J4qwome5t4haGDkRmZQxMpfpEibBVJzpAb9uUQkNKib0ibbBjMrBqNwnZO0x8UCQ/640?wx_fmt=png&from=appmsg)

再回过头，提一嘴开源的另一个东西，
Smallpond。

简单来说，这是一个特别轻量化的、但确实厉害的数据处理工具，基于DuckDB和3FS打造的。

比如，你可能想知道，哪些门店最喜欢什么口味？要从几十TB的销售记录里跑SQL查询统计，这在过去可能得搭Spark、Hadoop又或者别的大型分布式系统。

但现在，smallpond就能搞定了。

特点一共三个：

处理数据太快了。

能处理PB级（也就是千万亿字节那种牛逼的级别）的数据。

用起来确实省心，操作简单不费脑子。

它背后最大的功臣，还是3FS提供的高并发读写和存储共享能力，以及 DuckDB提供的高效SQL执行引擎。

所以，smallpond+3FS就是绝配，一个负责调度数据加工，一个负责高速数据通道，让PB级别的数据处理变得像做一杯奶茶那么轻松，真的。

Python 3.8到3.12版本就能用。DeepSeek一并把操作链接放下面了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURryhAvm1EamqQic08J4qwomefZCXHBQtgfZLNyLgoOlCOEvLJiahlal62Vtp6hfIJgH5hRl3vicPJypA/640?wx_fmt=png&from=appmsg)

总结下这几天。

这几天，DeepSeek对老黄的GPU，下多少猛料了？

在V3刚出来时，本来大家觉得。

一张好卡，是不是没那么重要了？

马斯克在孟菲斯的万卡集群是不是不用搞了？

但你回过头来看，会发现：

DeepSeek跟老黄的命运，扯的太深了。

英伟达的卡，尼玛有无穷的优化潜力啊。

这下，为期五天的DeepSeek开源节正式华丽落幕了。

但是，新的英雄之旅说不定现在才刚刚开始。

路漫漫其修远兮。

吾将上下而求索。

深度求索DeepSeek。

想必也是抱着这个信念。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
