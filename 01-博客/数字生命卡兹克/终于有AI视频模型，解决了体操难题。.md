---
title: "终于有AI视频模型，解决了体操难题。"
发布日期: 2025-06-19
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647672447&idx=1&sn=9f5f29c97f47feb4bf3c145530f61149&chksm=f131cd7a5a8191aeb85d41ee0caccb1a6160e7d59bbaf9d52436e97728f2746db355babb5478"
---

## 摘要

**1) 一句话总结**
MiniMax正式上线了AI视频模型Hailuo 02（海螺02），该模型成功攻克了体操与杂技等复杂肢体动作生成的难题，并支持原生1080P分辨率。

**2) 关键要点**
*   **核心突破**：Hailuo 02解决了被视为AI视频“图灵测试”的体操和杂技动作生成难题，能够生成大幅度、高难度的连贯肢体动作。
*   **竞品对比**：在体操和倒立等复杂动作测试中，Veo3、可灵、即梦和Runway等模型均出现了严重的肢体扭曲、碎裂或违背物理规律的现象，而Hailuo 02表现流畅自然。
*   **物理规律与交互**：模型具备优秀的物理效果表现能力，例如能准确生成砸碎玻璃且玻璃渣掉落的连贯物理交互画面。
*   **情绪与表演**：在继承Hailuo 01优秀情绪表达能力的基础上，结合了大幅度的人物动作，进一步提升了整体表演效果。
*   **视频规格**：新增支持原生1080P分辨率视频生成。
*   **定价与消耗**：新用户注册赠送500免费积分；生成768P（6秒）需25积分，1080P（6秒）需80积分，768P（10秒）需50积分。

**3) 风险/不足（基于原文明确提及）**
*   **生成稳定性**：复杂动作（如体操）并非每次都能一次性成功，作者测试时需重试（roll）3次才得到理想效果。
*   **局部动作瑕疵**：部分视频中仍存在诡异的小动作，如起跳前的动作不自然，或在空中时手部出现抽搐。
*   **逻辑瑕疵**：在某些复杂杂技生成中，虽然物理规律和动作准确，但落点逻辑存在异常（如倒立直接落在另一位演员的头上）。

## 正文

前天MiniMax的M1文章里，我说MiniMax得掏一个视频模型出来吧。

于是，果然，前天深夜，他们发了Hailuo 02。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo60Axnj417n0HTHosHt74Xou1t5AW3u1CibiaTdzs7E4PqBTtMiaCXYf2UROYn5fRWGpwKwibpe81TJQ/640?wx_fmt=png&from=appmsg)

这个模型，前天深夜还不能用，还没正式上线，但是放了预告片。

他们的预告片，给我看的鸡皮疙瘩起来了，我给大家看一眼。

不是，这真的太离谱了，第一次，见到能生成杂技动作的AI视频模型，这个肢体表演和动作幅度，你们可以去Veo3之类的试试，是完全达不到的。

我转完朋友圈，朋友都惊了...

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo60Axnj417n0HTHosHt74XvSsviaA63Wic1QbibAtOlibicY48fac5gSdpjTsKEgnmGPZiba7DSv5IcDpw/640?wx_fmt=jpeg)

直接冲着所有视频模型的弱点开大。。。

所有人其实都知道，体操，被誉为AI视频的图灵时刻。

谁能解决体操的视频生成问题，谁就是真神。

而杂技的难度，也仅次于体操了。

所以昨天白天Hailuo 02上线了之后，我就直接做了一波新鲜的测试。

比如上周末，我二刷了《碟中谍8》。

虽然前面的文戏又臭又长让人犯困，但到了熟悉的动作戏段落，看到阿汤哥又是潜入深海又是高空扒飞机，我还是真情实感地喊出了牛逼。

一个六旬老人，兢兢业业跑了三十年，不顾安危，一直用血肉之躯挑战mission impossible，就为了让你在银幕上看到最炸裂的视觉效果，我想不出比这更热血的事了。

那时候我在电影院里还在感慨，扒飞机这样的动作，虽然危险，但还是得真人上，AI恐怕是做不来。

但是，当Hailuo 2上了之后。。。

什么，你说AI没法扒飞机？没法下潜艇？

尼玛。。。

你把这个片段把水印去掉，发给一个不是特别了解AI的人看，这谁看谁懵逼好吧。

而且这个动作的幅度、丝滑度，完全没有很多模型为了稳，其实做的全是慢动作的那种感觉，而是真的就像真实世界的表演一样。

我觉得普通的肢体表演，真的难不倒他了。

所以，直接上图灵测试吧。

跳体操。

先给大家看看一年前，第一个DiT架构的视频模型Luma AI上线的时候，生成的AI跳体操的视频。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURo60Axnj417n0HTHosHt74XzGFBexDl8t6C0XFWXrs6868dMtJSGtSVADkyVqN93nVUUMy4IjiarTQ/640?wx_fmt=gif&from=appmsg)

对，这是一年前。

视频里面，运动员的四肢在空中扭曲变形。这段由Luma生成的视频不仅让近百万网友围观，还让包括LeCun在内的AI大佬们吵得不可开交。

我们再来看看，一年以后，模型在进化到今天的时候，各家的跳体操。

英文版提示词：
A gymnast launches off the high bar, does two full spins, and catches the bar again. The camera whips and tilts to capture the
arc
.

中文版提示词： 一位选手从高杠跃出，完成两次空中旋转后再次抓杠。摄影机快速摇摄并倾斜捕捉轨迹。

前方高能预警（绝无拉踩之一，只是单case对比）。

这是Veo3。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURo60Axnj417n0HTHosHt74X6niaKgQdFWCQx15XVGLRMibS1CVCib6d5Qv7XXbaNoDu7UDdURXQelRHg/640?wx_fmt=gif&from=appmsg)

就很魔幻，运动员一碰到垫子就碎掉了，然后头变成脚，脚变成头。

这是可灵。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURo60Axnj417n0HTHosHt74XIeq9uXbueSheXmusAo0LoPMiba0QtJFP4ZLicPTxhFdZ1dLGoCqdhb5Q/640?wx_fmt=gif&from=appmsg)

运动员先是以一种反重力的方式上了杠，然后开始用魔法让杠变形变长。

这是即梦。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURo60Axnj417n0HTHosHt74X4Fe45Qbt6AX8DK6w3WzYc8ftBcs8qLpdC2L8b6oNK7R3PTXU6mD7dw/640?wx_fmt=gif&from=appmsg)

整体已经还好了，就是后面出现了，双头怪。

当然，上面几个都还没有那么离谱。

最离谱的是runway这个。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURo60Axnj417n0HTHosHt74XHIaKO2icRE6hZcic8PmFhG2atclRPVc1FcaicDtsISTY8lKzhreuApb5w/640?wx_fmt=gif&from=appmsg)

运动员的形体像面条一样拉长，然后在空中开始抻面。

不是，哥们，这也太抽象了。。。

接下来，有请主角登场，Hailuo 02。

只能用一个词评价，那就是优雅。

不过这里需要坦白的讲，这段视频，我roll了3次，才得到一个OK的效果。

但问题在于，我roll了3次，roll出来了。

像Veo3，我积分都roll烂了，是真roll不出来啊。。。

再来看一个好玩的，跳马。

我就直接把各家的，放到一起了，看看这不顾死活的美。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURo60Axnj417n0HTHosHt74XobyUf9SQbxS7SPSXXz7ROR85aibtJOM5ictNR3YiaqB300mxgIicicLQ4yw/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURo60Axnj417n0HTHosHt74XiaqE2ibucFu4hiaiaFbJNKgg11pnDRzyfyoxMpnJic4BESE0DLibQqNdiaI7A/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURo60Axnj417n0HTHosHt74XrCW4FHhSHl6CibmLibqHOTyxPLAV0R7hqxl3g7JpBibDTeJucHQ7EcH7A/640?wx_fmt=gif&from=appmsg)

再看看Hailuo 02。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURo60Axnj417n0HTHosHt74XNdQUKvcNaeNQc6N1Hl2TJJvtQx9QmbcEQm3SP9u0DJdnVnOO128wCw/640?wx_fmt=gif&from=appmsg)

丝滑，一种奇妙的爽感。

还有体操，不是原地起跳一下，而是有助跑，有谢幕动作。镜头运动也很到位。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURo60Axnj417n0HTHosHt74XN2jHxriajaI7icOb0ibKpTYkicibKayONvp57fLpXbTb9bpj32XRGgic4NhA/640?wx_fmt=gif&from=appmsg)

虽然有些小动作还是比较诡异的，比如开头的小跳，还有空中的时候手也抽了一下，但是整体效果，已经好很多了。

还有双杠倒立，真的酷。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURo60Axnj417n0HTHosHt74XeymnhIQ48iaETbeh4bqoOMW7nCwHGATqNzzOLNX6bjzDTcK3jHjBLJw/640?wx_fmt=gif&from=appmsg)

在复杂动作上的肢体表现上，真的吊打一众视频模型。

这真的是第一次，有AI视频，解决了体操这个图灵测试了。

我之前一直在说AI视频的难点不是画面，而是运动。

静态画面谁都能出奇制胜，但让一个动作真实发生，并且被流畅捕捉，这是另一个维度的挑战。

不止体操，杂技，我也让它生成了一些。

比如这个小丑在大球上抛球然后倒立的动作，只有海螺能够做到，先抛球，然后，真正完成一个倒立的动作。

我先给大家看个这个动作最抽象的，来自Runway Gen4，先确保你没有在喝水或者吃东西，再往下看，我怕你呛着自己。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURo60Axnj417n0HTHosHt74XRRjvBGh3KbT8Ir2OicQ8axTPKb9BG2Wd2NtGpIJVe9xSLbP2Rt5fXyg/640?wx_fmt=gif&from=appmsg)

不是，Runway这玩意，怎么这么烂啊。。

真的太抽象了。

hailuo则稳的一笔。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURo60Axnj417n0HTHosHt74XLc4Giax2rAGKpFia71mLxsa0e4AN9GTFDtKIo1EGkNTtqZ8Wfpicndhew/640?wx_fmt=gif&from=appmsg)

其实我试这个case之前没觉得倒立有这么难，毕竟又没有像体操一样需要高速移动，没想到试出这么神奇的结果。

以后做复杂动作测评，要加上倒立这一项了。

然后是猴子走钢丝。

给它的动作设定是：先走完钢丝，然后从柱子上爬下来，最后站在舞台上，观众鼓掌。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURo60Axnj417n0HTHosHt74XSwhiar9XX8GRBqEB52HNMTgTmIzpQrtc0FdUTxibpNLRlTlXKrJqicz9A/640?wx_fmt=gif&from=appmsg)

每一个动作，它都完成了，没有落下什么。

海狮顶球，然后跃入水中。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURo60Axnj417n0HTHosHt74XPeDicjfic2icwNCqN7iaffl9L0ibAGdZMVwJrYcuFIF5clDhBeOtquFmgqg/640?wx_fmt=gif&from=appmsg)

一个杂技演员拿着纸伞，在钢丝绳上轻盈地走着。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURo60Axnj417n0HTHosHt74XMlFeogEMvTs8xhh5YLkr5iaQCP6DKTdcvJ79K2CvXmBV8pKIZUzosZw/640?wx_fmt=gif&from=appmsg)

一个杂技演员在跳板上完成一系列动作之后，准确地倒立在另一个演员之上。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURo60Axnj417n0HTHosHt74XxRu1zxe7rotNEl7EMmZsulh7FhzkIjgG43kjRryT0bAGmz8NbibCK5g/640?wx_fmt=gif&from=appmsg)

准确是非常准确，物理规律也非常的到位，就是你最后称的地方。。。

哥们的头是真铁啊= =

以上，基本上都是文生视频，roll也没有超过3次，就能达到这个效果。

除了这次整个人物肢体动作的史诗级进化之外，hailuo的表演，也一直是所有模型领域里，独树一帜的。

当年hailuo 01的时候，在全球一统江湖，就是因为他们超级牛逼的情绪表演。

而这一次，在表演的基础上，加上巨幅的人物动作，超牛逼的物理效果，hailuo的表演，真的达到了登峰造极的水平。

多说无益，直接给大家，看一些超级棒的例子。

一个大型机甲从天而降，胸口写着hailuo2。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURo60Axnj417n0HTHosHt74XSc0pHuT9stflBxQ8rj4y89jKPQPxALk9hFxIQwyH07KNyIcZ8F1R3g/640?wx_fmt=gif&from=appmsg)

浓烟中，消防员登上梯子，砸破窗户。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURo60Axnj417n0HTHosHt74XoRlhv3l2IjbM4ibia0epZSKj55oKUV5wu4hc4FalJxKyAnicPxvEYSpXA/640?wx_fmt=gif&from=appmsg)

这个case是最离谱的，因为，我没想到，他真的砸碎了玻璃，玻璃渣还掉了下来，我当时看到，我人都麻了。

我真的想说：

啊？？？？？？？？？？？？

一个小偷被人发现，狼狈逃窜，还摔了一跤。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURo60Axnj417n0HTHosHt74XjZZLBchkSMgKERVW76clbX7E6k7OfBJnJgmseZr59vkXgsIciazicicbQ/640?wx_fmt=gif&from=appmsg)

最后真的摔了一跤，是我万万没想到的。。。

两个舞女展示"hailuo2.0"字样。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURo60Axnj417n0HTHosHt74XiaibvbwI3yiakAKw2cKeZZfvuHgRc4HCS42wIsIcfNickDI3GjxwCe7pjw/640?wx_fmt=gif&from=appmsg)

从一个女人悲伤的瞳孔中看到了战火连天。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURo60Axnj417n0HTHosHt74XfME6wOYl81d7pz9bY8c40JA5Bsy16bOiaBBCqWHRNSI2JUib0CNlicryg/640?wx_fmt=gif&from=appmsg)

一名拉拉队员将队友抛向空中，队友翻转两次后完美接住。镜头向右平移并向上倾斜。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURo60Axnj417n0HTHosHt74XfIKkZpg4ImOB6PXkjR1KBmN0YByXjN35bTb3EicmTEXewYick7wjab1Q/640?wx_fmt=gif&from=appmsg)

一名棒球投手投出快速曲线球。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURo60Axnj417n0HTHosHt74XKCSKNUjk3pUwPxPFAM8nl3CQicsIhnccnLWib1O4ATAAfOzpYxeuykLw/640?wx_fmt=gif&from=appmsg)

这可能是最近两个月以来，我用的，最心潮澎湃的AI视频模型。

太爽了。

你让它在同一场景下连续做几个动作，再配上镜头运动，它也能满足你。

网址在此：

https://hailuoai.com/

在下方生成的时候，选用Hailuo 02模型就行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo60Axnj417n0HTHosHt74X8x9sPribLMtlSKSOysYmVnNUgHsBYlYeH5RcqMF64b8DK046cOOxl5g/640?wx_fmt=png&from=appmsg)

而且，也终于支持原生1080P了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo60Axnj417n0HTHosHt74X7yjvHZLGLicNOict1h4icrvPfTtIYE9NmMdiaFyLJibuf6LibeGicPDwXibWicg/640?wx_fmt=png&from=appmsg)

最主要的是，Hailuo也是真的便宜。

新人有500的免费积分，而生成一个768p的六秒视频只需要25积分，1080p也只需要80积分，768p的10秒视频是50积分。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo60Axnj417n0HTHosHt74XnicZEbjxBibDLSJ6APczeNMj9pvU8rHSMzV9Fv4GT2r6giay6DwJicwibLA/640?wx_fmt=png&from=appmsg)

只能说，便宜又大碗。

作为第一个通过AI视频领域的体操难题的玩家，这个价格，我只能说。

海螺，牛逼，minimax，牛逼。

人终有老去的一天。

阿汤哥三十年的职业精神，成就了电影史上的传奇。

而如今，AI也许同样可以用自己的方式，以另一种传奇书写历史。

那些我们曾经以为AI不可能攻克的视觉难题，一个接一个地被打破。

人间一天，AI一年。

这样的时代，真好。


wzglyay@virxact.com

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
