---
title: "AI时代的生成式3D大模型全面评测 - “ChatGPT时刻”的前夜"
发布日期: 2023-12-24
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647660897&idx=1&sn=e0501c324c547c94412a9e93bb39e31f&chksm=f19066b4bf96dd64d11c13ef50216a95e38e25ae273a19c4e450bfa1345663ea15b9e309ef8b"
---

## 摘要

**1) 一句话总结**
本文评测了当前主流的AI生成3D大模型（图生3D与文生3D），指出Tripo和LumaAI目前处于行业领先地位，该技术正处于爆发前夜，未来有望大幅解放游戏、影视及元宇宙领域的3D建模生产力。

**2) 核心要点**
*   **主流玩家**：目前AI 3D领域主要有5个核心产品：Tripo、Meshy、sudoAI、CSM和LumaAI。
*   **核心痛点解决**：传统3D工作流中，建模环节极其枯燥且耗时（占总时长的30%~50%），AI 3D的核心价值在于大幅优化这一环节。
*   **图生3D评测**：Tripo处于断层式领先，能较好地处理模型结构与纹理；sudo、CSM和Meshy表现较差，存在严重的贴图崩坏或模型破洞。
*   **文生3D评测**：Tripo与LumaAI表现最佳，生成质量显著优于Meshy和sudoAI（注：CSM不支持文生3D）。
*   **生成效率**：多数工具生成较快，但CSM在图生3D时生成单个模型耗时近2小时，效率极低。
*   **行业发展阶段**：目前的AI 3D技术水平大约相当于AI绘画的Midjourney V2或V3阶段，被认为是“ChatGPT时刻”的前夜。
*   **应用前景**：AI 3D不仅能重塑游戏和影视的3D管线（涵盖建模、贴图、骨骼绑定等），更是未来构建元宇宙海量3D资产的核心基建引擎。

**3) 风险与不足（技术缺陷）**
*   **模型布线问题**：当前AI生成的3D模型普遍存在布线（Topology）较乱的情况。
*   **贴图与材质崩坏**：人物面部贴图大概率会崩坏；金属材质的渲染不够精致；部分产品（如Meshy、CSM）存在“正面精致、背面崩坏”的严重贴图差异。
*   **结构破损与粘连**：在处理复杂物体（如花朵、衣物、动物尾巴）时，模型容易出现破洞、多余的错误结构或部件粘连。

## 正文

在我过去的所有文章中，我一直把AI分成四个模态去进行分类：

AI文本（大语言模型）、AI绘图、AI声音、AI视频

而在我最近的交流和访谈中，有一个游离于这四模态之外的存在，被反复提起。

AI 3D。

12月20号，这个星期三的晚上，我在接受一个朋友的采访很开心的聊了一个小时，在结束之际，他突然问了一个大纲上没有问题：“你怎么看AI时代的3D？”

说实话我当时有点懵，这个问题我从来没去认真的想过，随便说了一点自己的理解就搪塞过去了。

但是，这不是第一个跟我交流这块的人，在最近一个月里，AI 3D在我各个信息渠道里，都被N次提起。

所以，我也决定写下这篇文章，来聊聊我心中的第五大模态：AI 3D，还有这个领域的现状。

话不多说，开始吧。

目前这个AI 3D这个领域大概有5个主流玩家：Tripo、Meshy、
su
doA
I、
CSM、LumaAI。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURprdiaSPhoF7RbC7Zcm9NZsv913Gjw0hiaJ4ooAeOgQFY2jhaHVOttUosROM8HibZfNoBVvkGNoTxWOA/640?wx_fmt=png&from=appmsg)

CSM和Luma是很老牌的公司了，
Luma之前主要做实景扫描的，我一直在玩，前段时间他们
搞了一个文生3D的产品Genie，目前还寄生在Discord上，暂不支持图生3D；
CSM搞了个实时绘图转3D，但是不支持文生3D。

Meshy做的也比较早，我记得7、8月份就出产品了。Tripo和sudo发的比较新，特别是Tripo，前几天12月21号才发的。

而去聊AI 3D的产品，那绕不过的核心功能和痛点，自然就是建模了。

我简单说一下3D这块的工作流程，让大家有个概念。大概是概念设计 - 3D建模 - 纹理贴图 - 骨骼绑定 - 动画制作 - 灯光 - 渲染 - 合成。

你看到的那些影视特效，或者游戏里的场景，都是需要建模完做贴图然后渲染的。最开始的建模成品是一个素模，大概长这个样子。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURprdiaSPhoF7RbC7Zcm9NZsv7jKmHUWDdiaLgHDupeCZUYo0IsdtMoZZWnxOgb32b7620ScuqacTl2g/640?wx_fmt=png&from=appmsg)

有了模型以后，才能去做后面所有的事。

所以，建模是非常重要的，但是同时也是最费时的，很多时候甚至能占用总时长的30%~50%。
在3D领域也没有什么比建模更重要，更枯燥，更需要AI优化的东西了。

几家的产品在AI生成建模上，功能都差不多，文生3D和图生3D。

文生3D和图生3D其实非常好理解，跟AI视频的概念是一样的，只不过在AI视频里是用文或图生成1个4s的片段，而在AI 3D里是生成1个模型。

那衡量大家的标准就非常简单了：
生成的模型质量和精度到底怎么样
。

一般正常来说，我们用的最多的还是图生3D。

所以我先用MJ V6跑了一张图：

Basketball game assets, blender 3d model, obj fbx glb 3d model, default pose, PNG image with transparent background

篮球的游戏资产，Blender 3D 模型，obj fbx glb 3d 模型，默认姿势，具有透明背景的 PNG 图像

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURprdiaSPhoF7RbC7Zcm9NZsvfV1CvT95Yoh6tHAtoBW5KrXb8TUu1XXZzboLO0y0kArKcpqQH9FZgA/640?wx_fmt=png&from=appmsg)

（PS：我真不是因为鸡哥才选择先做的篮球）

然后我把这张图扔到了Tripo、Meshy、sudo、CSM里，因为luma现在不支持图生3D，所以不参与图生3D的对比了。

说实话，
我本身对AI 3D的预期其实就不高，所以我一开始才选择上篮球这种非常简单的玩意，结果效果除了Tripo外，另外三个真的差强人意，而且CSM我真忍不住要吐槽一句，生成1个模型要近2个小时。。。。我。。。

我把模型都下载下来了，在Blender里渲染成了动画的GIF，所有摄像机、HDR、参数均统一。大家可以直观的感受一下四家产品的对比。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqs45cgwgSvaITlP7pEiaMSc2fn7yFggpGDcemD60EUuMxzOMeugeBX6lDKKLt0q9J4bOziaWEZR8Tw/640?wx_fmt=gif&from=appmsg)

可以看到，只有Tripo一家真正的把篮球的纹理给连了起来，成为一个真正的篮球。Meshy和sudo明显看到贴图都崩了，而且这崩都不是忍一忍能用的崩，是彻底用不了的崩。CSM在背后也胡成了一坨。

再去Blender里看看建模细节。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqs45cgwgSvaITlP7pEiaMScHIQvLZAVD4MMuR7VgpODiaWD6SxibvDG6PUplU2RqtlMiaict7Sicwv9p8Q/640?wx_fmt=jpeg&from=appmsg)

CSM把篮球的凹槽做出来了一点细微的影子，Tripo和sudo的建模中规中矩就是一个不是特别圆的球，还有一些瑕疵，但是能用，Meshy是彻底崩的用不了。

就篮球这个case，Tripo处于遥遥领先的状态。

Tripo > CSM > sudo > Meshy。

再多试几个例子。

1.卡通小龙人，毕竟龙年了。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqs45cgwgSvaITlP7pEiaMScswduliaSecDHvQnGDicKWsIHDZ00AHbSVUicnDYSYVubPvkDHqP7JaZrg/640?wx_fmt=gif&from=appmsg)

Tripo继续很稳，Meshy的模型，有一堆洞。。。。sudo的贴图还行，但是下半身的建模和背后的尾巴结构全崩了。CSM转的那一下有两张脸，给我当时吓个半死，但是模型结构还行。。。

Tripo > CSM > sudo > Meshy

2.毛衣。毕竟做衣服是做建模里面逃不开的一环。。。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqs45cgwgSvaITlP7pEiaMSclFHrEkxoHmoxFNxxmFEjSWW5CuuwLDKRQ9aBxg1ticLFnibKFuicPun2g/640?wx_fmt=gif&from=appmsg)

Tripo表现几乎完美，不管是建模还是贴图，你要是硬挑刺，那就是袖口那没开两个洞（笑。Meshy的建模一如既然的有破洞，而且他们的贴图我发现有一个很大的问题就是，永远是正面精致，但是背面有点崩了。sudo衣服模型的两侧依然有洞，且有不该出现的链接。CSM的贴图和Meshy一个问题，背面和前面差异巨大。

3.一只玫瑰花。花的建模是最恶心的之一，基本对现在的AI 3D来说是最难的级别，用玫瑰花来给图生3D做个收尾。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqs45cgwgSvaITlP7pEiaMScJLuw9A1aR26CXADgDtzNicbU3lwnFdpibUxicF7CZQ26Wa4kyFNxbQyEQ/640?wx_fmt=gif&from=appmsg)

Tripo花的正反面模型结构合理，但是叶子的模型粘连崩了，多出了一些奇怪的东西。Meshy依然是面子工程，正面看着感觉还挺惊艳，一转过去就又是破洞了。sudo花朵上的细节崩了，基本看不到花的结构了。

至于CSM。。。。。。真的别问我那一坨是什么东西，我也不知道，但我知道那玩意一定不是花。

从这四个例子看下来，至少
在图生3D这块，Tripo是断层式领先。

整体Tripo > sudo >
CSM = Meshy。

再看一下文生3D，文生3D这块CSM不支持，但是LumaAI的Genie支持文生3D，所以这波对比只对比Tripo、Meshy、sudoAI、LumaAI这四家。

文生3D就真的很吃模型本身的底子了，毕竟图生3D这玩意，图是别人的图，所以展现的更多的是大模型的一个包容能力或者通用能力，你图生3D做的不好，可以有理由说MJ生成的图片风格，跟你3D大模型不契合，所以效果不好。而文生3D，就是扎扎实实看你的底子了，都是自己体系里的东西，再做不好那就是真的不太行了。

文生3D这块的流程有点像Runway的文生视频，runway是给一个prompt后会出4个第一帧，然后你选用哪个图去生成后面的视频。

而文生3D是会先用十几秒时间，根据你的prompt生成4个粗糙的预览模型，你可以自己决定用哪个去后后面的
refine（精炼）。大概长这样。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqs45cgwgSvaITlP7pEiaMScwOjYqXrKoNWKBGIRh3Famwg0spX0YdqN3dwAJ22UxSncqbNNqTKkxA/640?wx_fmt=png&from=appmsg)

前置的预览模型会比较粗糙，但是可以让你大概去选自己想要的造型。

我先试第一个Prompt，毕竟马上圣诞了，给大家整个活：

spiderman dressed in christmas style with a christmas hat，highest quality（蜘蛛侠穿着圣诞风格，戴着圣诞帽，最高品质）

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqs45cgwgSvaITlP7pEiaMScbNoakmQeW0Kh4OPsyB0wlOuialgeYoloUWu2OhtaalY8Fibyhnc6AMfg/640?wx_fmt=gif&from=appmsg)

Tripo和Luma的效果都非常好，Tripo整体更偏写实，Luma会偏一些卡通，Luma唯一的瑕疵就是膝盖多出来两块莫名奇妙的白斑。meshy
干成葫芦娃了。。。sudo的贴图精度不太行，而且帽子衔接处有BUG。

Tripo > Luma > sudo > Meshy。

再做一个猫女，毕竟，做3D怎么能缺了美女呢：

an anime catgirl（动漫猫女孩）

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqs45cgwgSvaITlP7pEiaMSckszmAMIW3xalpxMZ2VtpWnp1J9HoJez4BCsG9gMo0dPntEBiaWUKbqg/640?wx_fmt=gif&from=appmsg)

Tripo和Luma依然稳如老狗。Meshy，有点诡异，感觉这个贴图完全没有质感跟纸一样。。。sudo直接做了个抱枕。。。我特么。。。。

Tripo > Luma > Meshy > sudo

最后一个case，做个游戏的3D资产吧，黄金手枪：

golden pistol, unreal engine, highest quality（黄金手枪，虚幻引擎，最高品质）

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURqs45cgwgSvaITlP7pEiaMSc8P4CZpaMsek5eOg54dPxfZc3We0F8DZricCIZR5E22QR4lrzEWwGXLg/640?wx_fmt=gif&from=appmsg)

手枪的细节具体的我就不评价了，大家自己看吧。Luma和Tripo还是强，枪口的细节上，Luma比Tripo精致一些些。

Luma > Tripo > Meshy > sudo

文生3D，目前整体看下来，Tripo和Luma基本是断层式领先，在一些细节上，Tripo会优于Luma。

而在图生3D和文生3D整体上，Tripo是目前绝对的王者。

Tripo网址在此：https://www.tripo3d.ai/

Luma的文生3D想体验的也可以直接去Discord里面，搜他们频道加入体验就行。

另外三个我就不推荐大家去试了，没太大意义。

但是你像Tripo和Luma，目前也依然有不少瑕疵，比如模型的布线有点乱、比如人物面部贴图大概率会崩、比如金属材质的渲染不够精致等等。

不过我相信时间会解决一切，你像Tripo，一个刚出来3天的第一代产品，你指望他一步登天也不可能，更别提AI 3D这个领域也才刚刚开始卷。

目前看下来，AI 3D的进程，以Tripo和Luma为首，大概等于AI绘图的
Midjourney
V2或者V3，其他家还处于V1的水平。

而Midjourney的大爆发，也是以V4为标志，开始颠覆整个行业，直到前几天的V6，爆杀全场。

AI 3D，现在就是GPT时刻的前夜。

爆发来临的那一天，可能比你我想象的都更快。

写在最后

2019年的时候，我曾经做了一幅3D作品，以纪念我一个游戏伙伴的离职。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqs45cgwgSvaITlP7pEiaMSc740bkS63zHbibRx8ibwgLSia9yZwtYr0FbtpMpgRribJkSwWRlGyhxWQAA/640?wx_fmt=jpeg&from=appmsg)

当时我是这么说的：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqs45cgwgSvaITlP7pEiaMScj91U4jzYU9Y8UVfnw31OPic1Ryd6UVvOvwj8RT6ZOMImXG8uVd39eCg/640?wx_fmt=png&from=appmsg)

我做这张图，整整花了1月的晚上和周末。

里面90%的模型，都是我自己徒手建模的，那个工作量，非常非常痛苦，建模耗去了我整体70%的时间。

如果再让我来一次，我一定不会再去做了，我不想再经历一次那样的折磨。

这只是我，一个不专业的设计师而已。

而你知道在游戏中，在影视中，有多少需要建模的东西吗？

《艾尔登法环》为例，有上百个BOSS，还有无数的场景，无数场景里有无数的3D资产，大到BOSS、城堡，小到武器、盔甲、蜡烛、桌子。

以
From Software的业界上游生产力和工业化水平，整整做了5年时间，才将老头环掏出来。

《博德之门3》，拉瑞安最顶峰时400人团队，开发了6年。

《流浪地球2》，全流程制作周期，3年。

我也跟很多影视后期从业者都聊过一个问题，他们现在最需要AI来优化的步骤是什么，答案出乎意料的统一：

建模。

我极度看好AI 3D，并不是因为这个领域新，而是这玩意真的能切切实实解放内容创作者们的生产力，让他们用更多的精力，花在创作上，保护这些创作者的创作精力。

建模只是其中一个环节，还有AI纹理贴图、AI绑定骨骼、AI动捕等等等等。

当用AI来重塑整个3D管线，打通全流程，那效率，起飞了。

而且并不是只有游戏和影视这种专业者需要。

还有一个更大的家伙，3D资产是其中的基建，没有超高效率的AI 3D流程，没有AI的辅助建设，这玩意基本很难实现。

这玩意就是：元宇宙。

我从来不认为元宇宙是个噶韭菜的东西，他是我坚信的未来，只不过现在还离得有点太远，因为基建和产能跟不上，世界都没搭起来，元宇宙个屁啊。

AI 3D，就是元宇宙最好的创作引擎。

我一直相信未来的3D会内容无限扩大，每个人都可以成为超级创作者，像神一样创造新的世界，创作你自己的元宇宙。

那一天，不会太远。

明年，我们估计就能见证，AI 3D那加速的未来。

。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
