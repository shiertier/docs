---
title: "FLUX.2开源了，但是我好像也看到了小公司的无力。"
发布日期: 2025-11-26
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647677197&idx=1&sn=c22b227574b5fe2a4634377487d175e8&chksm=f177eee4c97b6a351d92a04af289282f91627cdd1cb6a48fee308a164b2d8046819c4384bcbb"
---

## 摘要

**1) 一句话总结**
FLUX.2发布了包含开源与闭源版本的系列AI绘图模型，尽管为开发者提供了重要的开源基石，但在世界知识与复杂语义理解上与大厂模型（如Nano Banana Pro）存在明显差距，凸显了中小企业在AI算力与资源竞争中的劣势。

**2) 关键要点**
*   **模型发布矩阵**：FLUX.2共发布了4款基础模型和1个VAE模型。
*   **闭源策略**：性能最强大的两款模型（Pro和Flex）保持闭源。
*   **开源策略**：目前已在Hugging Face开源了`dev`版本，另一款蒸馏模型`klein`即将开源。
*   **使用渠道**：用户可通过官方Playground（需网络代理）使用，或等待liblib平台接入。
*   **底层技术**：FLUX.2背后的语言模型基座使用的是Mistral-3 24B，而竞品Nano Banana Pro使用的是Gemini 3 Pro。
*   **行业趋势变化**：AI生图已从单纯的美术问题转变为依赖多模态大模型的“世界认知”问题，核心竞争转变为数据、算力和资金的资源比拼。
*   **开源价值**：尽管面临大厂竞争，FLUX.2的开源仍为中小企业和个人开发者训练自有模型、搭建工作流提供了巨大的基石价值。

**3) 风险与不足（基于原文明确提及）**
*   **世界知识缺失**：FLUX.2缺乏对现实世界和特定IP的深度认知，无法准确生成特定动漫角色的复杂同框、战力排行信息图或执行逻辑续写（如生成下一张书页）。
*   **语义改图能力弱**：在执行“用自然语言修改图片”的指令时表现不佳，例如无法准确完成角色Cosplay换装或将二次元图像转换为真人照片。
*   **资源壁垒风险**：做模型的小公司在数据、算力和人才密度上无法与大厂抗衡，面临技术迭代跟不上、被大厂“降维打击”而掉队的风险。

## 正文

昨天，有一个挺有意思的产品开源了。

AI绘图圈的朋友们肯定都知道这个产品。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrNXibY86RG09JRbcJHtB8cOzOjIoRPxksCGiaTicP2dYvaE5Un7dbgcpljibfp5XA2Mh33xy71lp81icw/640?wx_fmt=png&from=appmsg)

FLUX。

曾经的AI绘图之王，几乎取代了曾经SD的生态，成为了最主流的基座模型。

可时过境迁，在如今Nano Banana Pro的轰炸之下，好像已经没有什么人在乎他们了，也几乎没什么热度。

真的挺惨的。

但是毕竟是AI绘图圈仅剩不多的火种了，所以我觉得，还是得来聊一聊。。。

这次，发布了4款基础模型和1个VAE模型，其中2款是不开源的。

分别是Pro和Flex，这两个最强大的模型，是闭源的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrNXibY86RG09JRbcJHtB8cOGs1VG5nXNh8zX2VJsrmbPew0TzDSDay3WBCpxjibX4DrAhzpghvTFOw/640?wx_fmt=png&from=appmsg)

而其中2款模型是开源的，一个dev，目前已经开源了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrNXibY86RG09JRbcJHtB8cOc4FFvPS0G1ADezPULcdr0icNGF40eZhOMPuibbX4ydjiavucK0u5ic5FOQ/640?wx_fmt=png&from=appmsg)

开源链接：

https://huggingface.co/black-forest-labs/FLUX.2-dev

然后另一款是klein，一个蒸馏模型，说即将开源。。。

目前整体模型，等liblib接完应该就在liblib上可用，或者也可以去他们官网用，去官网的话记得上魔法。

https://playground.bfl.ai/

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrNXibY86RG09JRbcJHtB8cOeeyptMeqsWcnpInuv7SFfyibxCQZkPVoGKDVuf8ibWYP4QhgU9udJLGQ/640?wx_fmt=png&from=appmsg)

我也做了一些测试，坦诚的讲，当我用相同的Prompt，看到他跟Nano Banana Pro的对比，我还是很感慨的。

我直接放一下对比的图，大家也可以自己感受一下。

先看几个纯粹的生图效果。

Prompt：人类考古学家在金字塔挖掘现场发现一个旋转金属球的真实手持拍摄，手持纪录片现实主义，真实手持风格。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrNXibY86RG09JRbcJHtB8cOJyyRTQWvveJibbj1bPnsuHXGVptwibFQCAsl2dUldqndCBraQGmNZwibg/640?wx_fmt=png&from=appmsg)

Prompt：
一张平平无奇的iPhone照片，无精心构图和打光，日常快拍，松弛氛围感亚洲美女，穿着宽松厚毛衣与牛仔阔腿裤，舒适随性。肩上自然背着一只单肩包，款式简洁低调，增添生活气息。她随意站在街头或咖啡馆门口，身体微微侧身或靠在墙边，姿态松弛自然。双手可以插在裤袋里，或一只手轻扶单肩包带，整体动作不经意。头发自然散落，清爽不凌乱，眼神放空或带着淡淡笑意。环境为日常街景或室内阳光洒落的空间，光线柔和，画面像朋友用手机随手拍下的松弛瞬间。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrNXibY86RG09JRbcJHtB8cOTz9KaibHjbBNzQlBm9QjGx7ZibPIuucgs3UeyzTRtFTWOe3BmchjKCyw/640?wx_fmt=png&from=appmsg)

Prompt：
《龙珠 Z》中的神龙正看着眼前的龙珠，以酷炫的彩色铅笔风格，动态多彩的画面，带电的阴影。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrNXibY86RG09JRbcJHtB8cODmyZ7bgDcHmaOAUFVc1ljqImSFViaKFgdfujTvK6NMA8iaQ3s0ETuvAQ/640?wx_fmt=png&from=appmsg)

还有中文字海报：

动画电影《天书奇谭》艺术海报，中国山水画风格，工笔画细节，高级感，水墨晕染效果，传统青绿山水色系，连绵起伏的云雾缭绕的青山。山脉呈递进透视。有红色的仙鹤群点缀其间，营造出奇幻、磅礴、大气的意境，柔和而明亮的光线，高细节，电影级品质。主题为手写艺术字体“天书奇谭”，加入电影海报需要的其他小字以增加质感，全部文字清晰可辨认。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrNXibY86RG09JRbcJHtB8cOasry3qqwKtzIUeicSmHxPtQD9g5tFL5pUAcTcB7L63Cib1jOnNlwbBrQ/640?wx_fmt=png&from=appmsg)

好坏我就不评价了，大家可以自己对比。

然后就是用嘴改图的能力。

比如这张图。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURogp9O1PzUhR5Jt2oNyzzCzud2kOIqHetV2ElRXn8dA7a3pvrbQZbSFj0WriafTT1XLzsgD4xIdIiag/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=4)

我得Prompt：

让左边的人物cosplay右边的角色，服饰、妆容、道具和右边一致。

先看看Nano Banana Pro的。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURrNXibY86RG09JRbcJHtB8cOiarvtWhQSUrp1whiayPVYiaHzm0vaYfyN8axnDHibiau1tU4HiaKtYcnOqZg/640?wx_fmt=jpeg&from=appmsg)

整体还不错对吧，衣服头发辫子啥的都很好的还原了金克丝。

再来看Flux.2的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrNXibY86RG09JRbcJHtB8cOQ8rhiaVcibl4XHhVkxRsZcZff3Vl7t53HKGYWe0kicFPrrCVqH6WLj0mg/640?wx_fmt=png&from=appmsg)

说实话，我不知道该如何评价，这都不知道给我干哪来了。

还有这个妹子。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrNXibY86RG09JRbcJHtB8cO9bSE0e186UhAHUNXOPX9dzc9a2KsAf3MKwEEFc4xZaBV1d9vzcmf1A/640?wx_fmt=png&from=appmsg)

我想把它变成真人，就用嘴说了一句：

变成真人照片。

这两效果是这样的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrNXibY86RG09JRbcJHtB8cOqU0evO4rlxD9ndI49F0DRnI3QnCqAVcYXGFWmGo79GPiaq1wLvzQfVw/640?wx_fmt=png&from=appmsg)

就。。。

但这些，毕竟不是重点。

真正的重点，我觉得还是，世界知识。

大家现在都知道，Nano Banana Pro背后，是Gemini 3 Pro，当今世界几乎最强的多模态大模型。

而Flux.2，背后用的，
是
Mistral-3 24B。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrNXibY86RG09JRbcJHtB8cOzm8vKdyZ8qaMiaCqWRAJDicgwgO9h6Nv4KTSsrhVOzmqrZ0rYD8nEWtw/640?wx_fmt=png&from=appmsg)

这个模型吧，我就不评价了。

我放一个我朋友的图。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURrNXibY86RG09JRbcJHtB8cOs3UF2nbHhOYU55FE8iaiaGeuiauibRLI3vg8npvqhhFUxeXpYcyLnTIW1g/640?wx_fmt=jpeg)

所以，我们来看看，在世界知识上的表现。

比如这个Prompt：
制作一份关于海贼王里战力排名的信息图。

Nano Banana Pro出来的效果，是这样的。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURrNXibY86RG09JRbcJHtB8cObKtUR7JLKoOgX69ZgCzCM4y58mqmLjecrbNeTibOWgcU7YPcQu7iaQ8A/640?wx_fmt=jpeg&from=appmsg)

效果非常好对吧，深刻的了解海贼王的知识，虽然我已经有一段时间没追过海贼王了，有些细节我没法判断是不是对的，但是至少，这一出来，还是很唬人的。

你能明白，对方是懂海贼王的，对吧。

而Flux.2。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrNXibY86RG09JRbcJHtB8cOvnHk2kU95vzxCf1uXAHBlGloFuhibnXfk06t5VsnzuZ1jA6g4hLrk4g/640?wx_fmt=png&from=appmsg)

这明显就不懂海贼王。

还有
@卡尔的AI沃兹
的一个非常经典的Prompt：

中国动画中的孙悟空和路飞、漩涡鸣人、炭治郎、御坂美琴、蕾姆、桐谷和人、明日香、草帽乔巴、鹿目圆、阿尼亚·福杰、黑崎一护、艾伦·耶格尔、灰原哀和初音未来和哪吒、李白、唐僧、海绵宝宝、蜡笔小新、迪士尼公主们站在一起，大杂烩式同框，集体大合照；背景是一望无际的草原、蓝天与白云，整体明亮清新的动漫风格。

这个基本对不懂世界知识的，就是致命的。

看看卡尔用
Nano Banana Pro
跑的图：

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURrNXibY86RG09JRbcJHtB8cODYJtcRsGia5BmUJvLGjVyhLpbGaT0uKF0FRl85Zq7XB65m7UicZz8ibYw/640?wx_fmt=jpeg&from=appmsg)

牛逼到爆炸，几乎全对。

还有一样是
@卡尔的AI沃兹
的Prompt：

生成下一张书页的内容。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURrNXibY86RG09JRbcJHtB8cO0tb9hKLcCxHOYwguKWSS45hndGS7Omyib2wVPMVpLfPElL54YEUibPjw/640?wx_fmt=jpeg&from=appmsg)

Banana Pro是真的强。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURrNXibY86RG09JRbcJHtB8cOQyfueqVoY0WIDZ1K0TniaH2ZKsY9IrkNGoWEq9MgGnCibCxjrVWicJgWQ/640?wx_fmt=jpeg&from=appmsg)

但是Flux.2呢。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrNXibY86RG09JRbcJHtB8cOIXgtcaO9FFLUeBrO9zw9CqBYIN4MTlDCGDXh92Dwib5OSKFyZrBaiajA/640?wx_fmt=png&from=appmsg)

直接在原图上变成了一堆乱码。

一声长长的叹息。

从Flux.2其实越来越能看出，现在的一个趋势。

在大厂反应过来以后，资源的All in下，做模型的小厂、小公司。

开始变得越来越跟不上、越来越掉队了。

在Google上一周一路狂飙的背后，有人惊喜，有人沉默。

而Flux的工程师们，
我想，大概率是后者。

我几乎能想象到那个画面。

在某个灯火通明的办公室里，一群极度聪明的工程师，可能桌上还堆着喝完的红牛和咖啡杯。

他们花了无数个日夜，去优化FLux的细节，去研究如何让模型的笔触更加细腻，他们抠每一个参数，都像是匠人在打磨一件艺术品。

他们坚信，只要把绘图这件事做到极致，就能赢得用户的尊重和市场。

然后，他们满怀期待地准备发布，这时候，Google发布了。

Google拿出来的Nano Banana Pro，就像一艘从天而降的青铜时代号，用引力波把他们精心打造的马车压得粉碎。

他们突然发现，自己一直在精心磨一把全世界最锋利的宝剑，可对手直接开着高达来了。

这真的，有一点像，降维打击。

因为AI生图，早就不是一个单纯的美术问题了。

它已经变成了一个认知问题，一个世界模型的问题。

你的模型不仅要会画画，它得先认识这个世界。

它得知道海贼王里四皇是谁，得知道路飞和鸣人是不同动漫里的主角，得知道初音未来是个虚拟偶像，得知道天书奇谭这四个字背后的中式美学意境。

这种知识，不是从几张图片里学来的。

是从海量的文本、视频、代码、对话里来的，是从一个像Gemini 3 Pro这样的超级多模态模型里面来的的。

而支撑这个体系运转的，
是数据、算力、人才密度。

说白了，就是钱。

是白花花的钱，是成吨成吨的钱。

真的，看着Flux.2生成的那些略显笨拙的图，我心里真的没有过去看到一些跟不上时代的或者抽象产品的嘲笑，只有一种深深的惋惜。

当然了，Flux.2的开源，本身就是一种伟大的姿态。

对绝大多数中小企业，甚至对我们个人开发者来说，这绝对是有巨大价值的。

它是火种，是基石，让我们可以在它的基础上，去训练自己的模型，去搭建自己的工作流，去探索AI的可能性。

从这个角度看，他们是英雄。

但这种英雄，却带着一种堂吉诃德式的悲壮。

AI时代，真的是最好的时代，也是最坏的时代。

说它好，是因为技术的普及让每个人都有机会参与其中，创造前所未有的东西。

说它坏，是因为当牌局进入深水区，你会发现，最终能决定胜负的，似乎又回到了那个最古老、最朴素的规则。

拼资源。

技术理想主义的光芒，在绝对的资源壁垒面前，有的时候，显得那么脆弱。

当然，那些真正伟大的颠覆时代的创新，都在那个壁垒之下的黑暗里，在慢慢生长。

我只是觉得，这个时代的创业者，好像比互联网时代、还有移动互联网时代，难太多了。

我也在创业，那种难，真的感同身受。

但无论怎样。

也衷心的祝愿所有的创业者，也祝愿我自己。

不仅是这个时代最勇敢的探路者。

也一定都能，到达那个最远的彼岸。

风雨同舟。

愿与诸君共勉。


wzglyay@virxact.com

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
