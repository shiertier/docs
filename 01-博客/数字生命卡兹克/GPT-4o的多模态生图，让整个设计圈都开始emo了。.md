---
title: "GPT-4o的多模态生图，让整个设计圈都开始emo了。"
发布日期: 2025-03-28
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647670003&idx=1&sn=2bf0611dd76ec3b3d687480dbf27ddb0&chksm=f14e36041abb3b91a74ba766755fb658873494a3c4c131b28a2d76699d99c966c745bac5e7f2"
---

## 摘要

**1) 一句话总结**
GPT-4o的多模态生图功能大幅降低了图像设计门槛并冲击了初级设计岗位，但在对数据隐私、精确控制和复杂自动化有严格要求的专业工业级生产中，ComfyUI等开源工作流仍具不可替代的价值。

**2) 核心要点**
*   **应用场景广泛**：GPT-4o已在实际生产中落地，涵盖电商换装、UI样机展示、微信表情包、3D品牌海报、透明通道PNG直出、老照片修复及字体设计等复杂场景。
*   **行业冲击与岗位转型**：大幅降低了生图门槛与生产成本，将无差别替代初级执行职位及简单的AI图像工作流；部分设计师的工作重心将转向修补AI生成图的瑕疵或叠加细节。
*   **反哺开源生态**：GPT-4o生成的图像（如IP多角度视图）可作为辅助数据集，用于反向微调Flux等开源模型，推动开源生态效果提升。
*   **专业控制力差异**：专业设计需要精确规定重绘区域、调节风格与尺寸，纯对话式的GPT-4o界面无法满足此类复杂需求，而ComfyUI等工具能提供所需的可控性。
*   **自动化流程效率**：ComfyUI支持裁剪、抠图、语义识别及高低频修复等前后处理流程的自动化一键完成，在复杂任务中的效率优于GPT-4o的多轮对话。
*   **市场分化格局**：GPT-4o将主导C端和中小B端市场，取代大量低端重复性工作；而ComfyUI、Flux等开源生态将凭借精细、可控、可离线部署的特性，继续服务于高端客户或机密项目。

**3) 风险与不足**
*   **数据隐私风险**：GPT-4o为闭源模型，若将未公开的核心商业资产（如电影设定图、机密概念图）直接输入，存在被OpenAI用于后续模型训练的数据泄露风险。
*   **精准度与一致性缺陷**：在对比例、质感和细节要求极高的专业商业场景中（如特定IP形象、问界M9汽车等复杂产品展示），GPT-4o仍会产生结构变形等品牌方无法接受的Bug，目前尚达不到专业级水准。

## 正文

GPT4o的多模态生图前天上线之后。

经过两天的发酵，含金量还在不断提升。

在我的群里，已经能看到越来越多的，进入到实际生产环节的例子。

比如
@银海
的直接做商品图的翻译和合成，这是原来的算法，很难做的效果，但是现在，有手就行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo3dCD1EWIpyxwEd2lQv9N68RWYBzBOyaBibMAyRRNH2g9wFMOuafmoW1HfZV8h4C7YGGU7Zfn0vTg/640?wx_fmt=png&from=appmsg)

非常复杂的电商流程，一张原始图，换产品换脸换衣服。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo3dCD1EWIpyxwEd2lQv9N6dxH7R1hu1ziaibGN7ug6P9W48GBGyFaYMkCLU3Hyu6pvL2Wh19nlhrhQ/640?wx_fmt=png&from=appmsg)

比如
@
歸藏
的直接把UI图放样机里面的例子，如果做过UI或者产品设计的朋友肯定都知道，以前我们在做做展示，或者做汇报的时候，经常做样机做的挺痛苦的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo3dCD1EWIpyxwEd2lQv9N69g7ZRu0qPcdjKiak30moYRwsRg7q38LFIMiaia4eqDQWtEr00AmWaNJMw/640?wx_fmt=png&from=appmsg)

比如给他头像，画的两套表情包，是可以直接上架到微信表情商店的那种。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo3dCD1EWIpyxwEd2lQv9N6ajtpa9cquAvG1cAC77cS55umza7q3PD8woVzG7ficltME0anwqR2LAw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo3dCD1EWIpyxwEd2lQv9N6kjmPHScjREDicFyUtsPnsmWAthCGyibPjA2KThFj5ccUGJIEd12lfHTw/640?wx_fmt=png&from=appmsg)

来自设计大佬
@付遥
，用GPT-4o来直接做之前非常流行的3D品牌海报。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo3dCD1EWIpyxwEd2lQv9N6WthYDCQ1HMWVxCL1kUR7MiawUCWcpiarziaIEN9r8UnaAwGHMaDMmS1uQ/640?wx_fmt=png&from=appmsg)

比如我一个很喜欢的小红书AI博主
@
Rico有三猫
，用GPT-4o给她做小红书封面。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo3dCD1EWIpyxwEd2lQv9N62YSbUlbwOLicKQ1pP6W4iaUAUPRvAyBnLXRiaicibNEianLvqMQqs6bpGeDA/640?wx_fmt=png&from=appmsg)

也用GPT-4o直接做商品图翻译出海。

群友
@
默月佥
在用GPT-4o出蜜蜂的解剖科普图。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo3dCD1EWIpyxwEd2lQv9N6jOtpw1PNQDKkLGLECNNdqaszVhI4cOnAtMSN9YGkdhe55X77j4Te3w/640?wx_fmt=png&from=appmsg)

一个很专业的公众号AI博主
@
阿真lrene
，不仅用GPT-4o生成复杂的漫画，还能抠图，一键直出透明通道的PNG图。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo3dCD1EWIpyxwEd2lQv9N6up09xo6xqmBRpeu0HF9GaIo7xwjXVJ0INuIxAcCGW1OWibE9McSg3uw/640?wx_fmt=png&from=appmsg)

干死各种抠图软件的不是更牛逼的抠图软件，而是大模型。。。

还有朋友
@
不知名网友虎子哥
，用GPT-4o给他自己家的房子装修。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo3dCD1EWIpyxwEd2lQv9N6N8LYWrEv0n1iccwpdnLo9capjSsUAq3icUQSIjo9obH2uJicWWkFuic2EQ/640?wx_fmt=png&from=appmsg)

还有一些我确实不知道源头的但是被传播的蛮广的例子（如有作者，欢迎评论区认领）。

给几个家具做一个展示图，这个场景在电商领域无敌。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo3dCD1EWIpyxwEd2lQv9N6UkfunPzelqxgr7cbQc9SrgXfAn02KOib6iaHFWFhMZGZzgQvo8mLnLGw/640?wx_fmt=jpeg&from=appmsg)

之前我写可灵的AI模特的时候，很多人问，能不能让模特带首饰？现在，可以了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo3dCD1EWIpyxwEd2lQv9N6NcjOEXGbw1x2aDUXWyHicNgRRV4OPdkArZJb77yGFHeBCeOK7n528HQ/640?wx_fmt=png&from=appmsg)

还用它，直接P图，消除人物。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo3dCD1EWIpyxwEd2lQv9N6zf77hOYYuAxE8bca1qMfzpkXmfqzvRBnvric9Ilj9icZ3Wb2kRategDw/640?wx_fmt=png&from=appmsg)

老照片一键修复+上色。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo3dCD1EWIpyxwEd2lQv9N6fKicDANb03prpIsmvgGXkYu12U8rERH8zFNwKzNtMoKQRwko2al2ghQ/640?wx_fmt=png&from=appmsg)

甚至，还可以模仿字体做自体设计。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo3dCD1EWIpyxwEd2lQv9N6mzET0MCicVia0bNY1S6un84aFRgYj5tI0u5kSgyia9dc8F0CK7wiaJeGTQ/640?wx_fmt=png&from=appmsg)

在GPT-4o的冲击下，N多的设计师和创业者，都有点emo了。

比如就有大佬在X上感叹道：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo3dCD1EWIpyxwEd2lQv9N6lPHUFp9EvibzevkpZIsgkOFt4lbove3DicWUQs88ou6dHDEibTTFZ2Qcg/640?wx_fmt=png&from=appmsg)

朋友圈里还看到了一张图，是glif的老板，在X上发的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo3dCD1EWIpyxwEd2lQv9N68zpGLicrwY9ia5c9UIQUia6qQa8yYkqVukJpdRTRN5UibiahibFwQOibjhYtg/640?wx_fmt=png&from=appmsg)

纪念ComfyUI，纪念一切的AI图像工作流。

OpenAI的一次更新，又屠杀了一堆公司。

又一次深刻的阐明了那句《三体》中的经典台词：

我消灭你，与你无关。

GPT-4o的冲击当然是有，但是，他的上限在哪？能做到什么地步？真的能彻底替代ComfyUI的AI图像工作流吗？

我想弄清楚这个答案。

首先我觉得我还是要跟大家非常简单的用一两句话解释一下ComfyUI，让大家知道这玩意是个啥，我们才好继续往下聊。

ComfyUI是一个非常专业的工作流工具，不局限于AI绘图，AI视频啥的也都可以往里面接。他的界面大概是这样的，很像电路板。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo3dCD1EWIpyxwEd2lQv9N640pXEaz3RHqMy4G9sVqdao4xe8FVicHiaeblHibdADoXBMUInqfrmex4g/640?wx_fmt=png&from=appmsg)

这个就是在Liblib上搭的ComfyUI工作流。

它是以节点方式，把各个工具、各个模型给串起来，形成一整套的工作流，比如一张图进去，经过各种节点和插件，输出一个完全风格不同的AI视频，这都是OK的。

坦率的讲，我不是ComfyUI的专家的，做过的工作流也不多，我觉得在这个领域，我并没有那么强的发言权，所以。

我去请教了一下我的1个好朋友，AI绘图大神
@炼丹师忠忠
。

我想听听，他的看法。

首先是，GPT-4o对电商设计的冲击到底有多大？

我跟忠忠聊了很久。

最后得到的结论，跟我自己在设计行业里感受到的水温差不多。

对于普通水平的电商设计师，肯定是有打击的，他们原有的技能水平也就只能产出跟gpt4o差不多的图，相对来说意义不大了。

上游的运营专员可以自己操作工具来生产一样质量的图。跟被冲击的插画师类似，可能会变为帮忙修补gpt4o产出的图的bug，还有叠加原图部分细节上去加强细节还原（类似于高低频修复流程）。

生产成本降低后，需求量会变大，原本用不起各种华丽背景图包装的商家，现在也用的起了。

从效果上极简操作就能生图的工具有美图设计室等一堆工具，GPT4o只是在某些效果方面更进一步而已，对于专业级的实际商业生产的影响可能没有那么大。

而从视觉设计角度，对现有的整个开源生态，反而是利好作用。

忠忠举了自己设计的公司IP的例子。

现在，可以一句话把IP的3D模型，直出到品牌海报上，不需要走以前的3D建模+渲染了，大大节省了时间。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo3dCD1EWIpyxwEd2lQv9N6XSgpW8KyUkjL6IUw8NpzWNPf6v8jxFwvoOWQUiaXeBVCmQZsPUYgglg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo3dCD1EWIpyxwEd2lQv9N68xGASUre6Tibuibbc6fiaQJx2SOp3X483XlG7yhO6PxS4ibmI6eMuKnZhw/640?wx_fmt=png&from=appmsg)

同时，更有趣的一点是，GPT-4o可以根据一张IP草图，来生成这个IP的各角度视图。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo3dCD1EWIpyxwEd2lQv9N69FzScdGMGzGbbnNJERelItzwo3RlJ9Hn2icy0bWAJWDXEBjiayRPsAiaA/640?wx_fmt=png&from=appmsg)

而这些图，
会进一步推动flux等开源模型的微调版本的效果。

你可能会问，都有GPT-4o了，为什么还要去微调flux，在ComfyUI搭工作流用呢？这不是脱裤子放屁多此一举呢？

其实有两个原因。

数据隐私性和精准性。

数据隐私很好解释，就是GPT-4o是一个闭源的模型，后面最多最多也就是开放一个API，让大家接到ComfyUI里面去用，但是，就OpenAI这个尿性，我们给过去的东西，大概率就成他后续的训练素材了。

举个例子，《流浪地球3》2027年上映，要是现在美术组把核心概念图或者设定图直接灌给GPT-4o做一些处理，到时候，《流浪地球3》电影还没上映，设定图你可以直接在GPT-5o里面让它画出来，这特么就炸了。。。

所以，数据隐私性至关重要，在真正的生产环境里，特别是一些大厂里，必须只能用本地的ComfyUI搭，真正的输出，必须是本地环境，用开源的模型。

所以，这个时候，我们就可以用一些不敏感的信息，扔给GPT-4o，来辅助生成数据集，反过来微调自己的flux模型，这个点，真的很有用。

精准性其实也很简单，我们回过头来看忠忠用GPT-4o输出的自己家IP的海报。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo3dCD1EWIpyxwEd2lQv9N6h9fZEeFRU88HmyOQTCfxjx6V7MSXYFfq3TpOzD6jBkDx2oZonIsA6g/640?wx_fmt=png&from=appmsg)

先不说其他的细节了，这几处，你是能发现一些明显的BUG的。

这其实在生产环境里，这种BUG是品牌方觉得不可能接受的，就想你给一个手机产品做广告，你把人手机弄变形了，你跟人说不行AI出得就是这样的，你看对面会不会把你挂在电风扇上转着打。

而这个时候，用Flux专门微调的Lora，是可以完美的解决这种精准性和一致性的问题的。

这其实就是普通设计场景和专业设计场景的区别。

GPT-4o当然可以替代大部分的普通工作流，会让ComfyUI里一大批的工作流失去价值，但是这就不代表，ComfyUI失去价值了。

很简单的一点是，在专业的设计工作里，纯对话式的简单界面满足不了复杂专业的需求的。

就像你问一个专业设计师，为什么设计是用PS做设计，而不用美图秀秀来做设计，对方只会把你当傻子。

在真正的专业的AI设计工作里，可控性，很多时候非常的重要。

需要精确的规定重绘区域，需要精确的调节风格效果，出图尺寸比例等，所以在专业生产中需要精确调节的细节，不能指望OpenAI全做成功能。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo3dCD1EWIpyxwEd2lQv9N6IDD9jYVBE1Hs6XxyENibNq7wsvD6wX2n4NRKoZ7hS8DNQM7EQicgEcQw/640?wx_fmt=png&from=appmsg)

还有前后处理流程，比如说前置的裁剪，抠图，语义识别，后置的比如对图片的放大，贴回原图细节（高低频修复），再接入其他工作流继续处理等。

自动化一键完成的效率要比多轮对话高很多。

包括在一些精准度要求高的产品和场景上，GPT-4o目前还达不到专业级的水准。

看个例子。

比如我们要把问界M9这款车，换到另一个场景里。车这种产品，跟笔、戒指、香水等等要求的精细度，完全不一样。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo3dCD1EWIpyxwEd2lQv9N6zgXf3eqsdeGVSAL8qMPviawtag8KvGqLy1IYIpiaF0MuFzeFTiaL2px8Q/640?wx_fmt=png&from=appmsg)

这是GPT-4o出的图。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo3dCD1EWIpyxwEd2lQv9N6HK83Tr3qbu8C81yRb8OfxOajpYLH72YH3Hxfu25AicDSwRwufxYNKHw/640?wx_fmt=png&from=appmsg)

而如果我们用大佬的牛逼工作流呢？

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo3dCD1EWIpyxwEd2lQv9N6nF6wMp5m4eTlze6EzmPg2b2X8BO9NRctg6c4PrEo8mRTPl4BLRrYMA/640?wx_fmt=png&from=appmsg)

生成出来的效果在整体比例和质感上，是更好的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo3dCD1EWIpyxwEd2lQv9N6RKf6pqVK19TVR1ylCmjbjO2qK6icmF5AAjeltzW0W4Ypw8Lcmlc3jzQ/640?wx_fmt=png&from=appmsg)

对比应该非常直观了。

这里我要给自己叠个甲，我并不是在这里鼓吹，GPT-4o不行，ComfyUI的效果可以吊打GPT-4o。

如果是这样的话，我也不会连更两篇，来给大家看一看，GPT-4o，有多酷，有多强。

我想说的是，GPT-4o，跟当年的SD、Midjorney、Runway、可灵等等AI工具是一样的。

会无差别替代所有这个行业里面的初级执行职位。

屠杀所有曾经在工程层面对大模型进行的一些优化。

然后，一点一点侵蚀更上层的建筑。

它更像是一层层汹涌上涨的潮水，将整个AI图像领域原有的边界打得支离破碎。

都说做AI产品，要看到大模型的边界，在边界之外的安全地带做。

但是现在，你根本不知道边界在何方。

那些看似高耸的技术壁垒与工作流程，如果只是基于简单组装或者初级执行的逻辑，正在被GPT-4o以近乎暴力的方式消解。

绝大多数机械式的制作工作，一旦被强大的多模态理解与生成替代，就会像那些轰然倒塌的围墙一样，被历史的风尘轻易覆盖。

有没有一种第一次工业革命时候，机器代替手工劳动的即视感？

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo3dCD1EWIpyxwEd2lQv9N672cqI1licon3YYJVZuNypLXAVCs2hxzKYwh5cnKENJftcjBlQZiaG4Sg/640?wx_fmt=jpeg&from=appmsg)

历史总是在不断的重复。

可一如上文所言，这绝不代表ComfyUI之流就会被完全淘汰。

在工业级、专业级的深度工作流里，人们对数据安全、设计精度、可控度的需求不可能凭空消失。

那种图像与视频的多次处理、分层输出、版本管理、脚本化批量运行、自动化节点衔接，只要是大型企业或核心团队，都会很在意。

GPT-4o会在C端和中小B端市场里摧枯拉朽，取代了大量低端或者重复性工作。

而ComfyUI、Flux、ControlNet等开源生态则在更专业的领域继续进化，利用它们精细、可控、可离线部署的特性，为高端客户或机密项目提供服务。

这气势就像云端办公与本地办公的关系一样，前者无限便捷，后者安全可控。

也如同家用轿车与顶级跑车的分别，各自目标用户并不冲突。

GPT-4o也一定会不断进化，去扩大自己的边界蚕食更多的场景。

开源生态也会有各种可以复刻效果的模型、产品出来，从而进行私有化。

没什么能够阻止浪潮向前。

要么成为浪潮的追随者，要么成为浪潮的推手。

这二者，都肯定比做一块沉在海底的礁石，要精彩得多。

你说是吗。


wzglyay@virxact.com

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
