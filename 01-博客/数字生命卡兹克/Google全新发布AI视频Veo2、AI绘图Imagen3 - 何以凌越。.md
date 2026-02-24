---
title: "Google全新发布AI视频Veo2、AI绘图Imagen3 - 何以凌越。"
发布日期: 2024-12-17
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647667346&idx=1&sn=fd2f88eaeccabf58175f7077445c96f3&chksm=f1617d6ab909eff09bc17386fe07eeb0c53dd761f5b024db4efa631de74b790f25bd8fd5a885"
---

## 摘要

**1) 一句话总结**
Google低调发布了支持原生4K生成且在盲测中表现优异的AI视频模型Veo 2，以及具备创新交互体验的升级版AI绘图模型Imagen 3。

**2) 关键要点**
*   **Veo 2 视频生成能力**：具备极高的稳定性、真实质感及物理规律遵循能力，对拍摄风格、角度、运动等复杂Prompt语义理解极佳。
*   **Veo 2 特效变换**：支持通过Prompt对运动物体进行超级稳定的多轮材质/特效变换。
*   **Veo 2 盲测成绩**：在基于Meta MovieGenBench数据集（1003个数据）的盲测中，Veo 2在“整体偏好度”和“提示匹配度”上击败了Meta、可灵v1.5、Minimax和Sora Turbo（其中可灵v1.5为最强竞品）。
*   **Veo 2 规格与访问**：支持直出原生4K视频；目前需通过表单申请排队使用。
*   **Imagen 3 模型升级**：本次发布的是Imagen 3的第二代改进版（Imagen 3-002模型），在其内部评测中取得榜首成绩。
*   **Imagen 3 交互创新**：提供免费且免排队的访问；输入框具备自动分词功能，可将Prompt中的特定词汇（如物品、背景、姿势）提取为下拉菜单，供用户快速联想和替换。
*   **行业动态**：OpenAI近期营销活动引发负面反馈，且原Sora团队的核心贡献者已跳槽至Google DeepMind。

**3) 风险/不足（基于原文明确提及）**
*   **Veo 2 的运动一致性限制**：在复杂场景或具有复杂运动的场景中，创建真实、动态视频并保持完全一致性仍然是一项挑战。
*   **Imagen 3 的使用门槛**：模型出图质量高度依赖Prompt的编写水平（下限较低），Prompt不佳会导致生成图像质量差，不太适合纯新手使用。

## 正文

大半夜的，OpenAI的垃圾直播没任何看头，就发了个个性化的AI搜索。

但是，Google没有预告、没有营销，默默的在X上发了两个大货。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpfuwr0ZcByTMR3LsREVUymR66pQ0dfYiaz5BgS5mahNZ3aqHHLo9nypDmUMRLOI3f5Ch3UwlIwmew/640?wx_fmt=png&from=appmsg)

当今最先进的AI视频模型Veo 2，还有AI绘图模型Imagen 3改进版。

我们一群人，一边看效果，一边不断的惊呼卧槽。

我几乎从来不使用炸裂这个词，但是AI视频Veo 2的效果，真的让我有点想欢呼，甚至，有点像2月16号那个宿命的一夜，看Sora的感觉。

一个一个来说。

一. AI视频Veo 2

不说废话，先看视频。

说实话，这些视频，我都不愿意转成gif，而是直接传视频上来给大家看。

这个审美、这个稳定性、这个真实质感、这个物理规律，当得起当今最强的称号。

真的，物理之神，特别是那个切番茄的视频，我一度真的怀疑是实拍的，太恐怖了。

而且，我看了一圈Prompt，发现对
拍摄风格、角度、运动等等的语义理解，都极佳。

比如这个汽车飞驰的视频，Prompt里写的就是：

“
低角度跟踪镜头，18mm 镜头。
汽车漂移，留下光线和轮胎烟雾的轨迹，创造出视觉上引人注目且抽象的构图。
相机低位跟踪，
捕捉到流线型的橄榄绿色肌肉车驶向一个拐角。当汽车进行戏剧性的漂移时，
镜头变得更加风格化。
旋转的轮子和翻滚的轮胎烟雾，在周围城市灯光和镜头光晕的照射下，形成了在黑色沥青上划出的光线和色彩的条纹。城市景观--黄色出租车、霓虹灯和行人--变成了模糊的抽象背景。体积光照增加了深度和氛围，将场景转变为一个视觉上引人注目的运动、光线和城市能量的构图。”

有那么多的开车的AI视频镜头，而这，是我看过的最好的，没有之一。

还有，能直接对一个运动的物体，用Prompt来对其进行超级稳定的多轮材质变化。

稳定到起飞，这也是我第一次，能在AI视频里，见到如此稳定的特效变换的。

Google自己也做了一个人类观察者的评测，通过
Meta发布的基准数据集 MovieGenBench，
做了1003个数据，来让大家盲测，哪个效果更好。

最后得到的结果，是这样的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpfuwr0ZcByTMR3LsREVUymN11wlMC6xEIWFwW5LaxYuOR5jLVJpEET11dEYQfpeJ2Ow6R8M0owzw/640?wx_fmt=png&from=appmsg)

这块我稍微解释一下，有两个表，分为Overall Preference（整体偏好度）和Prompt Adherence（提示匹配度）。

每个图表的横轴表示不同的被对比模型，分别是Meta、可灵v1.5、Minimax、Sora Turbo。

Google做的是把Veo 2跟这些模型做点对点的盲测。真的，国产模型居然也能作为对比基准了，突然有一股热血涌上心头。。。

而每个柱由三个部分组成，颜色代表结果分类：

绿色部分（Veo）：评测者在对比中更偏好Veo输出的比例。

白色部分（Ties）：评测者认为两者不分上下，即没有明显偏好的比例。

粉色部分（Other preferred）：评测者更偏好另一模型（非Veo）的比例。

以Google DeepMind浓眉大眼的一贯作风，基本不会造假，所以能看到，Google的Veo 2在大多数情况下，取得了最优结果。

而在Google的评测里，除了Veo 2之外，另外四个模型里，最强的是可灵v1.5，这个结果也是挺有趣的。

而且，有一点是需要注意的，Veo 2，是可以直出4K视频的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpfuwr0ZcByTMR3LsREVUym8pvqnMjrrPy9sU3mQEZZR0p9wRrkztSnTLSN1UHicdM3ImQrN8ao6LA/640?wx_fmt=png&from=appmsg)

他们在Youtube上传的视频，也是原生4K，这个就非常的恐怖。

他们自己也说，目前最大的难点和限制，还是在运动上。

原话是：“
创建真实、动态或复杂的视频，并在复杂场景或具有复杂运动的场景中保持完全一致性仍然是一项挑战。
”

来看一下他们的Badcase。

说是Badcase，但是我感觉他们发出来的时候估计脸上也都带着笑，那意思就是：

给你们看看，爷的运动有多强。

有瑕疵，但是对比Sora这种，这运动质量，已经吊炸天了。

Veo 2网址在此：https://labs.google/fx/tools/video-fx

需要排队，直接填一份表单就好。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpfuwr0ZcByTMR3LsREVUymxV5gLrrhfK9j5uIibtMOtB0PvbK7WK0PkI55xsicjQZnR1FmIKAFEzmg/640?wx_fmt=png&from=appmsg)

按照Google的性格，排队肯定要不了多久，不是OpenAI那种纯粹耍猴的，绝不可能一等就是半年，应该很快就能用上。

OpenAI的这波12天直播，感觉彻底把路人缘败光了，之前Google一直被OpenAI恶心的头疼，而这次，直接彻底反击。

你喜欢狙我是吧，来来来，这次Gemini 2、Veo 2、Imagen 3我一个一个放，你不是喜欢抢热度吗？来啊，这次来抢啊，看谁抢谁啊小兔崽子。

老虎不发威，你还当我Google是病猫了？

二. AI绘图Imagen 3

除了Veo 2之外，Google这波还直接发了他们改进版的AI绘图Imagen 3模型，其实严格来说，是
Imagen 3-002模型，
Imagen 3的第二代
。

第一代Imagen 3是2024年5月14日，在谷歌的I/O开发者大会上发的。

半年过去，Google对Imagen 3进行了一次大幅的进化，推出了改进版的第二代，他们自己的评测上，直接屠榜。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpfuwr0ZcByTMR3LsREVUymkk1RexzoCTgTo9nPc7VMrTEwESBb9wtWWfeRnzmNSvHcRlzpgrtQqg/640?wx_fmt=png&from=appmsg)

网址在此：https://labs.google/fx/zh/tools/image-fx

目前无需排队，可以直接玩，而且，免费。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpfuwr0ZcByTMR3LsREVUymsfCqkRI0RDI8TEHkf5TH6fSQwlrhhWUSXEeBKPib29wVx2iaicdD7PFew/640?wx_fmt=png&from=appmsg)

直接在输入框里写Prompt，就可以开始玩。

他们这个Prompt的设计，也很有意思，你可以输入各种奇奇怪怪的一大串Prompt，他会自动给你拆解分词，有点像老罗当年那个胶囊大爆炸的感觉，把一些词分出来后，给你变成下拉框，自动联想几个其他的选项。

比如我的prompt是：

一个穿着巴斯光年服装的小黄人，身穿带翅膀的太空游侠套装，站在一个五彩缤纷的玩具店里，指着天空，仿佛准备起飞，背景是满满的玩具架，生动而富有活力的风格，中景。

一个非常简单的Prompt，我们翻译成英文后，扔到Imagen 3里。

你会发现它在运行之后，会给你选中一些词变成下拉。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpfuwr0ZcByTMR3LsREVUymFx07lno0VQl68BckCBu0WgpU0nW4iaLIh6GTmAVQEFreQQgygKfpO6Q/640?wx_fmt=png&from=appmsg)

比如它把wings单独拎了出来，你点下拉后。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpfuwr0ZcByTMR3LsREVUym6wYWMiaIJDTc6Tl3C1kK0gHJ1EE6CP902BgzOyxPCo6ocVeaEahpHUw/640?wx_fmt=png&from=appmsg)

可以自动替换成喷气背包、火箭助推器、滑板车等等，非常有意思。

我们按照它的联想，把背饰换成喷气背包、背景换成电子游戏机房、姿势改成挥手告别，再跑一张看看。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpfuwr0ZcByTMR3LsREVUymXjNV1po85n9f90BJTqibNT64BTsVnnsj90DlaicWHkBIKxBQBL9TZjrw/640?wx_fmt=png&from=appmsg)

这个交互，真的很通人性。我太喜欢了。

再放一些我跑的图。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpfuwr0ZcByTMR3LsREVUym37hf3iaib74oV2mA1W8MibQCcHzj3noYiaIxdpKL2M8tOW6UyJFzvXLSxQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpfuwr0ZcByTMR3LsREVUymrxcCaaJ7ibFiaoXXYaDGSg9gQSDKgdHymcI3hLMSW03q5cGC8bO5UfHA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpfuwr0ZcByTMR3LsREVUymRGxuauDpEukbFyuSmBSpicxQibExMKPoyXE4JHuR0PO2v0JG5gylzLRg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpfuwr0ZcByTMR3LsREVUymUGcxBKWlg7QGWwkraICMmYhTa5GuQS1mCwhdY7bvOXecJvvXDX9W8w/640?wx_fmt=png&from=appmsg)

整体看下来，有一种感觉就是，下限贼低，很吃Prompt，要是Prompt写不好，那其实也会出不少很丑的图。

但是语义理解真的挺不错的，上限目前没太测出来，可能还不错。

但是不太适合新手玩。

写在最后

OpenAI这段时间的直播，彻底把人缘败干净了。

看了一圈，几乎都在骂。

不管是国内，还是国外。

再遥想今年2月16号，Google的Gemini1.5 Pro被OpenAI的Sora淹的彻底没了声量，而现在，整个局势，好像反了过来。

甚至，很多人都没发现，之前Sora的大功臣，都已经跳槽到Google DeepMind了。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpfuwr0ZcByTMR3LsREVUymLa3IUyZT1UljzqtYfkOT1aia3nHziaGHw16uz19YYBy4u820QMoPzELw/640?wx_fmt=png&from=appmsg)

营销这事，真的是一把双刃剑。

现在这OpenAI的局面，真的都是自己造的。

万物皆轮回。

不要把自己作没了。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
