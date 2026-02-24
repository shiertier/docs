---
title: "想用AI特效在万圣节“鬼混”，看这一篇就够了。"
发布日期: 2024-10-31
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647666312&idx=1&sn=fddbf9125d611e77ed006d439d0ecd71&chksm=f1ce4b492c5e81dd0e68f01169bc6c4f434bc568333686c220e58e342b0680ebc6a5af4e6d09"
---

## 摘要

**1) 一句话总结**
作者与PixVerse合作推出了万圣节“巫师帽”AI视频特效，并详细评测了PixVerse v3模型在特效模板、动态效果、中文语义理解及口型匹配方面的功能更新与平民化产品策略。

**2) 关键要点**
*   **推出“巫师帽”特效**：用户只需在PixVerse上传图片、选择“Wizard Hat”特效并修改Prompt中的主体名称（如cat/man），即可通过三步生成戴巫师帽的动态视频。
*   **上线特效模板功能**：除巫师帽外，v3版本还推出了“转身离开”（Alive Art）、AI捏捏、僵尸等特效，旨在降低普通用户的使用门槛。
*   **明确平民化产品策略**：借鉴Pika依靠特效模板实现访问量翻10倍的经验，PixVerse选择主打大众化和娱乐整活，避开与字节、快手等大厂在底层模型上的直接内卷。
*   **动态效果显著提升**：相比v2.5版本，v3模型摆脱了“PPT式”播放，在视频运动幅度和背景细节（如水波纹）上表现更佳。
*   **优秀的中文语义理解**：v3模型能够准确理解中文提示词，甚至能将中文成语“化干戈为玉帛”准确具象化为“握手”动作。
*   **新增LipSync口型匹配**：支持在PixVerse已生成的视频基础上，通过上传mp3或wav音频文件，生成自然的口型驱动视频。

**3) 风险/不足（原文明确提及）**
*   **生成稳定性问题**：特效偶尔会生成鬼畜或抽象的画面（尤其是原图较为抽象时）。
*   **肢体与细节崩坏**：在人物手部细节（如手指容易模糊）和肢体动作上容易崩坏，特别是“舞蹈”等大幅度动作表现较差。
*   **美学与特征局限**：画面整体美学水平与Runway、海螺等产品相比仍有一定差距，且生成的人物面孔大部分偏向欧洲人特征。

## 正文

今天终于万圣节了。

上周，我就跟PixVerse一起整了一个万圣节的大活，等了好几天，今天，也终于可以把这篇文章发出来了。

故事是这样的。

前段时间我就一直在想，万圣节了，该怎么整个万圣节的AI图或者AI视频的策划，最好操作还得简单，方便让大家不要钱、还能没有门槛的都玩起来。

正好那时候电影院重映了《哈利波特》，我去看了哈利波特魔法石的重映，当时看到分院帽的时候，脑子就有了一个点子，
如果万圣节，能用AI让所有人，都能实现戴巫师帽的效果呢？

那会不会很酷。

而且之前IG和小红书短视频上也火过一个很类似的效果，AI做的巫师猫咪。最火的AI视频能有一千多万浏览，效果长这样。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr9VtZia3TBDxCkNJwSK6WSHGsrVHdcHbaT2kQ7brgRh0qdibNXfuWTmbvqUyRP1qxCTLlgvqFTRaQw/640?wx_fmt=png&from=appmsg)

差不多就是这个意思，造型就是这种经典款尖顶巫师帽。

当时看完电影回来，我就直接开干，尝试了一下。

但其实用AI绘图给大家出一个带巫师帽的AI图片，也没啥意思，我更想实现那种偏视频的动态的效果，类似于施法后，一团烟雾啪的一下，这个角色把巫师帽给带上了，就跟魔法一样，这个就很酷，很万圣。

我本来想用一些AI视频的API搭个工作流，做个类似于模板的东西，大家只要上传图片就行，就能自动生成这一段视频。

但是问题来了，一是API太贵，一旦用户多点，我的账单就会爆炸，当年王登科做哄哄模拟器一天干没几千美金账单的故事还历历在目，第二就是那个AI视频用Prompt固定动态也不是很稳定。

尝试了两天，花了几百块钱以后，我觉得这事整不了，已经准备放弃了。

正当我打算换个方向的时候，有趣的事情来了。

PixVerse的朋友找到我，说他们v3版本快发了，让我帮忙测测看。

他们说，除了模型底座有大幅度更新之外，这次也跟PIKA一样，上线了特效模板功能。

而且他们正好，也在做万圣节的活动特效模板
。

这就属实巧了，真是山穷水复疑无路，柳暗花明又一村。

我把我那个巫师帽的想法和PixVerse的团队一说，对面说我靠可以啊，搞。

于是，我们一拍即合，也就有了现在，
线上的“巫师帽”特效
。

PixVerse v3模型前天也正式上线了，给大家看一眼他们的宣传视频。

而巫师帽特效，大家应该就都能在特效模板那块看到了。

效果也很好玩，是这个样子：

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURr9VtZia3TBDxCkNJwSK6WSHTpiax1s2pFW32O7lBPMF8z2wib0VSNycTUa0IGepwrY6ibDKYDUuS5YXA/640?wx_fmt=gif&from=appmsg)

一阵魔法烟雾之后，万物都会戴上可爱的巫师帽。
帽子还抖了几下，也非常的可爱。

而想做出这个“
戴
上巫师帽”的效果，也特别简单，就三步。

首先，登录PixVerse的官网：
https://app.pixverse.ai/create

现在一打开应该就能看到v3版的新模型。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr9VtZia3TBDxCkNJwSK6WSHVLVGobsEqKCP2bfTF2Ykawuj8E3ZiabOBq5ZltVndcLgkbRZCDFiaFxQ/640?wx_fmt=png&from=appmsg)

第一步，在PixVerse的视频生成界面点击【Image】图标，上传一张图。比如这一张非常万圣节的小猫照片。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURr9VtZia3TBDxCkNJwSK6WSH6NBhQ8xr9M1P4IgoyAmRIrEnUm0FQ5wCBYRMyhKyvYJh9bvxcmLs2g/640?wx_fmt=other&from=appmsg)

第二步，点开工具栏里的【Effect】按钮，选择里面的“Wizard Hat”效果。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr9VtZia3TBDxCkNJwSK6WSHWkx7JfB6D6d0K79Uumiaaiaia1q4t98ILfObx8siauIM3xeWh3RerxgSZg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr9VtZia3TBDxCkNJwSK6WSHn0ItTYowaiaZJcRbCaLBpwteAjic7pvEgr1G3P5sysfAUB7yuxl48y0w/640?wx_fmt=png&from=appmsg)

第三步，修改prompt。选择“Wizard Hat”之后Prompt栏会自动给你匹配这个效果的触发Prompt，只需要把其中的
[SUBJECT]
改成你上传图片的主体就可以。

传的图是猫就替换成cat，人就替换成man、woman啥的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr9VtZia3TBDxCkNJwSK6WSH3IFslB1MgfxL9mcfnficCS9FIYmWVo57savvg0qX5nl3sJz5lTpYhKw/640?wx_fmt=png&from=appmsg)

修改完prompt，点击【Create】等待生成就好了。

是的你没看错，简单三步你就能获得一个专属的魔法小猫视频。

我把roll出来的视频在剪映里加上了音乐，效果就是这样的：

一只“邪恶”的毛绒恶魔正在看着你，桀桀桀。。。

我太喜欢了。

终于，梦想变成现实，
人人都可以在PixVerse里，做这个可爱的巫师帽特效了。

门槛也被拉到无限低，你只需要上传一张图就行，我实在太太太太太感谢PixVerse了。

这就是我心中，最喜欢整活，也是最酷的AI公司。

当然，巫师帽特效也偶尔会roll出一些很鬼畜的东西。

信我，这个预制版“巫师帽”很适合在万圣节拿来恶搞好基友。

比如我给我的好基友@闲人一坤
戴
上巫师帽。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURr9VtZia3TBDxCkNJwSK6WSH1toicfS23w10jueOGBd5mb96KPkXBdfqIKuJGuZbNbptW2iaVibeLpDibA/640?wx_fmt=gif&from=appmsg)

坤哥直接被魔法攻击，
戴
上巫师帽以后瞬间成了快乐的麻瓜。

我roll出来最鬼畜的一条是向佐的，我承认也是有原图太抽象的原因。。。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURr9VtZia3TBDxCkNJwSK6WSHh9D2Q6rS3dRI5Eb4kXLibBDyM8mJsYqibPeuYb1Y5doHSOk3HeLVhpJA/640?wx_fmt=gif&from=appmsg)

原图的脸简直不像人，虽然很鬼畜，但是真的很有节目效果🌹。

而这次，除了这个我们一拍即合的巫师帽特效，他们这次的特效模板里还有很多其他的模板。

比如那个全网爆火的AI捏捏，还有稍微恐怖风一点的僵尸特效。

但是我觉得他们做的最好玩的，
是这个“转身离开”。

这个特效PixVerse写的名字是“Alive Art”，原本是“让人/动物走出画框”的设计。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURr9VtZia3TBDxCkNJwSK6WSHTnZJ5dkQIwPoVm10vCLibfJ3qLRf2gQ1wZWdrs1anBhnhz7zYfXK8tg/640?wx_fmt=gif&from=appmsg)

但我实际测试完，感觉它更适合叫做“已罢工”、“已跑路”。

比如，我给朋友
@大聪明
的头像做了个动起来的效果。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURr9VtZia3TBDxCkNJwSK6WSH59zq0ca9ZvECY4icGnzq23Bx6yicaP4D8MibrJPUPX6icNJVU6OfEXgABA/640?wx_fmt=gif&from=appmsg)

我当时看到真的笑的不行，这个蹦跶的小短腿太有喜感了。

当然我给自己也做了一个：卡兹克·跑路版。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURr9VtZia3TBDxCkNJwSK6WSHibaXPibp6bJ5XJy9R9nlLe2qraOC7LqiaqVvWibg3icgYtib4WboxFGZbBXA/640?wx_fmt=gif&from=appmsg)

万圣节聚会玩累了，分分钟来一个“遗憾离场.gif”。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr9VtZia3TBDxCkNJwSK6WSHhCgwBskosagrS2TiadJiagyF6g6teiamvuyXvb13OtdtnUHea9IuVDEAg/640?wx_fmt=png&from=appmsg)

说起来，在Pika用特效模板火了之后，大家都开始尝试做模版这条路了。最近就连美图秀秀也把“捏捏”特效给学走了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr9VtZia3TBDxCkNJwSK6WSHYrFLLmIk4aMWiaQvwGTzXa8Qia3IMv03O6lcPgE9J7mgv60TXtFfKGFw/640?wx_fmt=png&from=appmsg)

去年这个时候做一个吃面条的视频就能把Runway干崩。现在海螺、可灵啥的各种运镜、表演已经能做到在短视频里以假乱真的程度了。

在各家AI视频狂卷的浪潮下，大家开始发现，为普通人做一些有趣的方便的效果。

可能更重要。

毕竟做专业的影片和那种超级精美的分镜的人，相比普罗大众，还是偏少数。

PIKA这波靠着特效模板，直接把访问量翻了10倍，这个成绩，说大家不羡慕，也不可能。

说白了，大部分用户也根本没有闲心关注你用了什么高大上的模型架构，他们最想要的，就是整活。

有趣且有用，可能会更开心。

Pika这个月的增长数据就是最好的证明。

不过除了特效，这次PixVerse的v3更新，在底座模型上，也更新了很多的东西。

比如和上一个版本比，现在V3在视频的动态效果里进步显著。

同一个Prompt，v2.5跑的还是个ppt，v3就已经能做到不错的运动效果了。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURr9VtZia3TBDxCkNJwSK6WSHR7k72yKjcT19Mcxjqewtxu3bKjF7hP3iaPskPl9DWOZUBia5cBGAYX5g/640?wx_fmt=gif&from=appmsg)

v3甚至背景里的水和浪花也都不错，乍一看没大毛病。

语义理解上，v3的文生图表现也很好。比如这个case：
男人喝了一口咖啡，然后放下，一个女人从背后走来
。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURr9VtZia3TBDxCkNJwSK6WSH2Rmntye8scr3WS4DpQjGKic9iaD7CZJSxQiaORrqLp5ctTLuAqsiaglZPg/640?wx_fmt=gif&from=appmsg)

我直接用的中文prompt，PixVerse的理解非常OK。稍微有点bug的就是手指的细节，会容易有点糊，整体已经非常不错了。

再比如这个case：
老人，特写镜头，细腻的皱纹，侧脸
。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURr9VtZia3TBDxCkNJwSK6WSHItTzhdQwxBmCRibkH2uTdXaC5gibYjMXqFgSVVSfF2RfUcb3fbw72qhQ/640?wx_fmt=gif&from=appmsg)

这视频效果直接摆出来，真不用我多评价什么。画面的质量、动作、清晰度，进步太大了。

更牛的是，我脑子当时抽了一下，写了一句中文典故：
"
化干戈为玉帛
"
，来文生视频。

这个prompt在其他AI视频产品生成的结果，最好的也只能生成个"一个人穿着丝绸衣服举着刀"。海外的AI产品更不用说，毕竟他们日常的中文处理都费劲。

所以当PixVerse给我生成了这个效果，我是真的有点惊喜。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURr9VtZia3TBDxCkNJwSK6WSHZ5eFx8ib2mibQIG7jRzne7kVFxr4wIyFmBXXToqQmWQVuNRx5pNcic7Wg/640?wx_fmt=gif&from=appmsg)

PixVerse不仅能理解"化干戈为玉帛"的含义，还能用"握手"这个动作来表达。

这可能，就是我们自己的，中文大模型的力量。也只有我们的模型，能理解这种文化。

更新后的PixVerse还加了一个口型匹配功能"LipSync"，效果也挺有意思。我也小小玩了一下梗。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURr9VtZia3TBDxCkNJwSK6WSH1WYIVicsX9g5aICW9gibPZXEMtgDZnI39icnJWWGYJ7PUrdtDNtBUWzYg/640?wx_fmt=jpeg&from=appmsg)

v3的口型匹配目前只能从你的PixVerse过往视频里生成。所以要先跑一个基础视频。

上传一张我要做“说话”效果的图像，比如我自己的照片。然后在Pormpt栏输入"the man is speaking"。先跑出这样一个动起来的我。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURr9VtZia3TBDxCkNJwSK6WSH1JdyFUnEziaplk5Q98HHJaJJWya6yxxIUYmwT4NgrTGxKL3zCENLMqg/640?wx_fmt=gif&from=appmsg)

面部的表情和头的晃动都挺自然。当然，口型现在就是随机的啥也没有。

然后在这个生成的这条视频下面选择【LipSync】，上传说话的mp3或者wav音频文件。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURr9VtZia3TBDxCkNJwSK6WSHH9z924LBSfw4kEHv7mVGQYeDmh56UibbOX4bXrmOibTLqeFJJHC8kFBA/640?wx_fmt=jpeg&from=appmsg)

匹配完音频之后，我就获得了这样一条视频。

"谁说这视频糙啊，这视频可太棒了"。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURr9VtZia3TBDxCkNJwSK6WSHENZTNeutpQ0CWOddmpJw808yzXISqemjaBAYcdDcRRibF07UNgibTwRA/640?wx_fmt=png&from=appmsg)

他们这个
LipSync，可能是现在最好的口型驱动。

图/文生视频、AI特效、口型匹配、风格化视频等等，v3版的PixVerse现在应该是国内目前功能最丰富的AI视频生成平台了，后面他们再把v2.5的运动笔刷加上，就一键起飞。

对小白极度友好，我就非常喜欢这种产品。

当然你要说缺点，肯定也有，比如PixVerse目前在人物的手部和肢体动作上，有点容易崩。比如前面喝咖啡的男人。以及“舞蹈”这种动作幅度大的，表现就差一些。

比如这个prompt：
赛博朋克酒吧，人们随着摇滚音乐跳舞
。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURr9VtZia3TBDxCkNJwSK6WSHZQGSThP32ZsibicjHjeediaX314G4twfnsoFEYnoCib3PcicwbkennWcN9g/640?wx_fmt=gif&from=appmsg)

以及PixVerse的画面美学水平。非常坦率的讲，比起runway、海螺，还是会有一些差距。

而且人物大部分都是欧洲人面孔。

不过问题不大，以PixVerse这个进化速度，我觉得他们走上了一条专属于自己的路。

坦率的讲，你在国内做AI视频的基座模型，想去卷字节，卷快手，还是很难的。

而现在，PixVerse给出来了在这个版本之下的解。

平民化，大众化。用这些特效模板、对口型、风格预设等等，让普通人感受，做AI视频的乐趣。

AI视频的赛道里，要么质量足够精良，要么足够好玩抽象。两边总得占一头。

说白了还是做产品的那一套，找到自己特色和打法才能卷出头。

视频模型提高底模能力是必须的。但能玩起来，能让用户乐呵也不失为一个产品的路线。

就像能让大家玩儿得开心的万圣节，也是好节。

我依然觉得AI视频最有魅力的，就是可以把我们的梦变得离现实近一点。

想当哈利波特了，我就可以做个魔法帽视频；想跨次元拥抱任何人，AI也可以搞定。

不需要万圣节的传说，现在，我们就能与神奇的世界融合。

希望这次我们整的活，能让大家玩得开心！

值此万圣佳节。

不给点赞，就捣蛋。

嘿嘿嘿嘿嘿嘿嘿。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
