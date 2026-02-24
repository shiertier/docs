---
title: "实测完Runway深夜上线的最新模型Gen4，我觉得可灵还是No.1。"
发布日期: 2025-04-01
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647670122&idx=1&sn=b2a53bea00dc3a497646b0c041332237&chksm=f1b3236c4485bce18f59de4e6c1cb25fae7b3a3ca0e2f06866c74ba48bd85831f6440011e328"
---

## 摘要

**1) 一句话总结**
作者实测Runway最新发布的Gen4模型后指出，其主打的“多主体参考”等核心功能尚未上线，且当前仅支持的图生视频功能在物理规律与动作连贯性上明显落后于竞品可灵1.6。

**2) 核心要点**
*   **发布背景**：Runway在距离上一代模型（Gen3）发布9个月后，正式推出了最新视频生成模型Gen4。
*   **主打功能**：Gen4官方主打“多主体参考”功能，宣称无需微调LoRA，仅凭几张图即可固定场景、人物与风格，实现高可控性与一致性。
*   **当前可用状态**：目前Gen4仅开放了“图生视频”功能，生成界面功能单一。
*   **竞品对比结论**：作者通过多组中英文Prompt进行“一轮直出”测试，认为Gen4相比Gen3有进步，但整体生成质量不及可灵1.6，也落后于Google的Veo2。
*   **物理与逻辑表现**：在实测案例中，Gen4在物理碰撞（如人物穿过花海不产生互动）、动作连贯性（如汽车坠崖前动作不明）及指令理解（如将“向前冲锋”理解为“向镜头冲锋”）上表现较差。
*   **光影与细节表现**：Gen4在部分复杂场景（如水下古风舞蹈）中的光影处理比可灵1.6更为细腻，但最终动作走向容易失控（如跳舞演变为溺水状态）。

**3) 风险与缺口（Risks/Gaps）**
*   **功能未兑现（期货风险）**：官方演示的核心功能“多主体参考”及“文生视频”在发布时并未同步上线（提示为“很快推出”），具体可用时间未知。
*   **功能缺失**：当前版本的Gen4不支持相机控制（Camera Control）和Act-One功能。
*   **模型理解与生成缺陷**：模型对复杂动作和物理规律的解析存在严重偏差，实测中出现了无视重力（丝带乱飞）、动作逻辑崩坏（举枪动作变成展示腋窝）、以及人物穿模等明显错误。

## 正文

沉寂N久的Runway，昨晚突然就，发布他们的Gen4模型了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoC3PYLr0dHEciaicRL6M0HVaEZ3rruNuhUdfDxgDpCJJAC82rka6pYJfzsRDQNpEQWlibIKjcvWICCw/640?wx_fmt=png&from=appmsg)

这里给很多AI视频的新玩家稍微解释一下Runway。

真的，我对Runway其实一直有着非常特殊的情感。

这玩意，可以说是AI视频的鼻祖，很多人知道AI视频生成模型，可能是2023年11月爆火的PIKA，可能是2024年2月16号的Sora，可能是同年6月6号的国产之光可灵。

但是其实，AI视频视频生成第一次进入大众视野，是2023年7月的Gen2。

Gen1是个video to video模型，只能做视频风格的转绘，没法文生或图生视频，而Gen2，第一次支持文生和图生了。

那时候，我
我花了5个晚上，用
MidJourney生成了693张图，用Gen2生成了185个镜头，最后选出来了60个镜头，剪辑成了我最喜欢的，《流浪地球3》的AI预告片。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoC3PYLr0dHEciaicRL6M0HVaPsXxyS2nkx5ZiaqgTuOduRLXwsNCbuZAyfibdw2mgI96icp8H65gYnbcA/640?wx_fmt=png&from=appmsg)

就是这个玩意（23年8月的技术，纯粹的动态PPT，不要用现在的眼光来衡量，求勿喷）。

那时候，这个片子发出去后，火爆程度超乎我意料，不仅全网播放破千万，还引来了一个赛博魅魔。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoC3PYLr0dHEciaicRL6M0HVaJsbJO3myuzmOOEMkArTwO7lreibibhiavOvSASRwHIDDjWLsOe8GKQ8dQ/640?wx_fmt=png&from=appmsg)

这一个私信，开启了我人生的转折点。命运的齿轮，也开始缓缓转动。

后面，Runway一直也是AI视频行业的标杆，直到Sora的发布。

Runway一下子好像变成了旧时代的残党。

然后，就是国产大模型的混战，可灵、即梦、Pixverse、vidu、海螺。Runway在去年6月30日，也发了一个Gen3，追了一下，但是后续Gen3几乎就再也没更新过了。

整整9个月的时间，他们终于，掏出了新的模型，Gen4。

想要把AI视频，带向一个新的世代。

看他们说什么发什么，不重要，重要的，还是我们得自己亲手实际测一下。

在我第一时间，测了一夜的Gen4之后。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoC3PYLr0dHEciaicRL6M0HVaibhfEYFCvzQkEK3Dnyad5jFicJ0BibbYicGgLiaEIjdsy4nnw1UuJ81oJiaQ/640?wx_fmt=png&from=appmsg)

我想说。

Runway已经不是曾经的Runway了，也不再是那个曾经的领头羊大哥了。。。

我粗体验的结论就是，不仅画饼，放出来的模型质量还一般。

先说画饼。

这次Gen4主打的功能，其实是多主体参考。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoC3PYLr0dHEciaicRL6M0HVaCOE7ztBkMoSlc7rNHDSJpbRhz1r16AXFbqmCA78cU6XXNFEdKEkRjw/640?wx_fmt=png&from=appmsg)

大概意思就是，你不需要微调lora，只需要几张图，就可以固定场景、人物、风格，然后直接文生即可，有很强的可控性和一致性。

他们这次放出来的几个视频，有一个是我非常喜欢的，叫做《牛群》。质量极高，而且也能看出多主体参考的运用。

这个片子我几乎是一口子看完的，非常的精致，分镜、色调、节奏都很棒，人物也是全程统一，不会像以前一样，人物变来变去，一直让人出戏。

正是因为多主体参考的越发成熟，参考+文生可能未来会越来越主流，AI短剧也会越来越多。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoC3PYLr0dHEciaicRL6M0HVaUGkBQuUL965dA6AKf7qqicJViagOjHlEsWc0vegr5icYGaZxUerC1tgTw/640?wx_fmt=png&from=appmsg)

但是，这个功能，其实vidu早就上了，可灵和海螺也都上了，不过大家各有各的问题，比如会糊，比如一致性没那么好等等。

Runway Gen4从演示上来看，效果确实不错，如果能达到片子里的水平，那就是No.1。

但是，最大的问题，是个期货。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoC3PYLr0dHEciaicRL6M0HVaLOeYeayy4TYZ53xjym8CRNfPZ8KLe3YyXicNHnqfCJAWXbrfqicJ7lhg/640?wx_fmt=png&from=appmsg)

References很快会推出。。。你也不知道他啥时候推出。。。

不是哥们，现在OpenAI都知道不发期货了，GPT4o啥的全都是发布即上线，你咋还越玩越回去了。

所以，没有参考功能，Gen4的生成界面，就变成了光秃秃一坨，只有图生视频功能了。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoC3PYLr0dHEciaicRL6M0HVaDGPwib2Oc16XAvt8KgqrbVZTicUfJwxkgQ06alFDjCbV9lf5Hrr8qiccQ/640?wx_fmt=png&from=appmsg)

对，文生视频也没有，估计要跟着多主体参考一起出，现在能用的，就只有图生视频。

其他的，相机控制、Act-One，这两一个都没有。

其他的小功能，倒是还能用。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoC3PYLr0dHEciaicRL6M0HVa6LMrp690kzib0c2U98wQNNt0cHuFB9EgZHQrjsib9ciab4UiaVBvyNaAxw/640?wx_fmt=png&from=appmsg)

再说说图生视频模型。

就，相比于Gen3，有进步。

但是跟目前公认的图生视频最好的模型可灵1.6比，明显还差了一截，更别提跟Google那个牛逼炸的Veo2的文生视频出来的质量比了。

我自己测了很多的case。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoC3PYLr0dHEciaicRL6M0HVan5XHSm4Q57MicMulKFrT9heXdbeVanXyBxMzM1Ffa7jfXrE5Cxw1YyA/640?wx_fmt=png&from=appmsg)

给大家也直接看一些对比的case吧
（PS：所有的例子，都是一轮直出，可灵1.6用的中文prompt，RunwayGen4用的英文Prompt，飞书文档链接我也放到最后，不是刻意捧谁踩谁，这就是最直观的case对比）。

比如这张图。

1. Prompt：

主体缓缓走过花田。花朵在风中轻轻摇曳。微风拂过，花瓣在空中飘零。摄像机以柔和的手持拍摄方式跟在主体后方。具有电影质感、真实感和实景拍摄的感觉。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoC3PYLr0dHEciaicRL6M0HVatMBAPWN48GnptVXArWslZficuOoaGcuibXyATebA0y1AwJvzTyXOoRlA/640?wx_fmt=png&from=appmsg)

上面是RunwayGen4，下面是可灵1.6。

Runway走的更快些，但是完全是直接穿过花的，光影也有点问题，可灵1.6你是能明显看到人和花的物体碰撞的。而且Runway的花全糊了，细节也都丢了。

2. Prompt：

一辆汽车从悬崖边缘坠落。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoC3PYLr0dHEciaicRL6M0HVaicSrVEpIYobzkY1kNds4bs63hptMQJmB3ODMPHqicQsBrbq4ku9Udicyg/640?wx_fmt=png&from=appmsg)

这个对比应该很明显，可灵1.6的车是轮子在悬崖上疯狂转疯狂抢救自己，最后感觉撑不住了，掉下去了，物理规律虽说有点超现实，但是至少是连贯的。反观Runway，你也不知道它前两秒到底在干啥。

3. Prompt：

女孩身着汉服翩翩起舞，舞动着双臂，优雅地旋转着身体。她转过身，再次面向镜头，然后对着镜头点头微笑。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoC3PYLr0dHEciaicRL6M0HVamZIwGcUnCxhlk9vrt5Bic8fhGx1Pyr4v32DxxA22zcFzB6mfDAk1f0Q/640?wx_fmt=png&from=appmsg)

这题就比谁错的更狠，可灵1.6的丝带也崩了，跟衣服融为一体了，有点问题，但是人好歹翩翩起舞了。但是Runway吧，连圈都不给你转一个，直直的做了个体操，丝带也直接让牛顿棺材板都压不住了。

4. Prompt：

士兵们手持盾牌向前冲锋。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoC3PYLr0dHEciaicRL6M0HVaiamS5EEt1SSvluDk57uaU8tiaS2JrdHr01vLVzLT1HQW1rS2iaUvTtOrQ/640?wx_fmt=png&from=appmsg)

说了向前冲锋向前冲锋，Runway直接抄起盾牌向我冲锋。

5. Prompt：

男人犹豫了一下，试探性地伸手撑着墙，然后一步一步地走上楼梯，一边抬头一边环顾四周。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoC3PYLr0dHEciaicRL6M0HVazpecXGyDeKdaBW7g9EUdH513Rvv1sJgPZraQtouXaoGdjP1q0Yw6Jw/640?wx_fmt=png&from=appmsg)

非常经典的《楚门的世界》的最后截图，两边在prompt理解上都有问题，手没撑强，但是可灵1.6至少是一步一步走的，Gen4我也不知道为啥跟投胎生孩子一样跑那么快，最后脑门还撞柱子上了。。。

6. Prompt：

洛神水下起舞，衣袂飘飘。舞者优雅而大气地挥动水袖，美极了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoC3PYLr0dHEciaicRL6M0HVaRf9A7Xv7HvK3kGcSu3ycm0koJHNabLmmibSyTY9UdHYWibHckfRu0NicA/640?wx_fmt=png&from=appmsg)

非常地狱级别的难度，中国古风，全是丝带，还在水下，还要跳舞。

可灵1.6真的会在水下给你跳一支舞，虽然丝带是噩梦也有BUG，但是整体很棒。RunwayGen4的光影比可灵1.6要细腻很多，这个优点确实牛逼，就是最后人是跳舞，它感觉跳着跳着人在水里溺亡躺尸了。。。

7. Prompt：

右边的男子往后退了一步，举起枪，将枪口对准了左边男子的额头。镜头迅速拉远，捕捉到他们站在屋顶上的画面。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoC3PYLr0dHEciaicRL6M0HVaJVQOjOkhoay6xPoYsrZg38gSaNv5U9s27IgPWbPnqr312JiaHDcOy8g/640?wx_fmt=png&from=appmsg)

最后这个case，我必须要给你们看个好玩的，当时夜里跑完的时候，我差点没笑晕过去。

这是可灵1.6的：

整体还不错对吧。

我们再看RunwayGen4的，前方高能，注意不要笑出声。

我真的，完全预料不到故事的发展。你以为我用枪制服你？不，来看看爹的腋窝吧。。。

太特么有毒了。

我跑的case，都放在这个文档里面了，也公开分享给大家，有兴趣看更多的，可以点进去看：

https://datakhazix.feishu.cn/base/JB8Cboxt6aOkFFsUpehc2M19n2e?from=from_copylink

2年前，在《流浪地球3》AI预告片的那篇文章的结尾。

我写下了这么一段话。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoC3PYLr0dHEciaicRL6M0HVa36FPfyJABRU30ouKJsmTAyuXJFdBR8w1iapqk9zIuV6AOy1wicC6puNg/640?wx_fmt=png&from=appmsg)

现在，我们知道了。

那时候我也没想到，原来给2年后埋下的彩蛋，打开是这个样子。

就像一位迟到的艺术家。

慢慢走进一个全新的舞台，却发现聚光灯早已偏向别人。

那份自豪与失落，也许都将成为脚下的浪花。

风雨同舟，与诸君共勉。


wzglyay@virxact.com

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
