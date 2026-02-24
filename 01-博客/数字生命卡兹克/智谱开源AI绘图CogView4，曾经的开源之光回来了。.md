---
title: "智谱开源AI绘图CogView4，曾经的开源之光回来了。"
发布日期: 2025-03-04
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647669286&idx=1&sn=d9cb118addf7dc3a9334e6f91e713666&chksm=f1693265bafb871b682e89cfde70de4737a4c6bf7706a70a71b4fa88253a2ee3f974da454f4f"
---

## 摘要

**1) 一句话总结**
智谱AI与清华团队联合开源了60亿参数的AI图像生成模型CogView4，该模型采用GLM4作为文本编码器，是首个支持中英文字生成的开源绘图模型。

**2) 关键要点**
*   **模型规格与协议**：模型参数量为6B，采用Apache 2.0开源协议。
*   **硬件门槛**：在BF16精度和batchsize=4d的情况下，最低仅需12GB显存的GPU即可运行。
*   **文字生成能力**：是目前开源AI绘图模型中，首个支持在图像中同时生成中文和英文文字的模型。
*   **语义理解升级**：文本编码器由T5替换为GLM4，大幅提升了对复杂Prompt（如多区域构图、长卷、细节描述）的准确还原能力。
*   **分辨率支持**：出图分辨率无特定比例限制，支持2048像素以下的无极调节。
*   **生态与工具支持**：官方后续将支持ComfyUI、ControlNet套件以及微调脚本，便于开发者将其作为基座模型进行微调。
*   **可用性与发布计划**：目前已在GitHub开源并在ModelScope提供在线体验，面向普通用户的版本将于3月13日上线“智谱清言”。
*   **商业与战略背景**：智谱近期获得10亿元融资，并将2025年定义为智谱的“开源年”。

**3) 风险与不足**
*   **审美与色彩差距**：受限于训练数据集，模型整体的画面审美和色彩表现目前仍不及市面主流的商业模型。
*   **中文错别字率较高**：由于模型未对文字进行单独提取处理，而是直接端到端生成，导致中文文字生成的错误率（错别字比例）明显高于英文。

## 正文

昨天连更两篇，今天想休息一下，结果。。。

真的快肝吐了，感觉自从DeepSeek开源统治地球之后。

开源的世界，迎来了究极繁荣。

上周DeepSeek连续5天开源硬核技术，阿里开源万相2.1，Qwen的推理模型推出预览版，但是肯定马上也要开源。

而今天，智谱这个曾经的开源之光，在昨天官宣拿了杭州10亿融资之后，在官宣文章里如此写道：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpMW6MVbdomAbyfEQicIwnXcjYMibezgic2w4iaFcEUT5oJQJYqTgqIViaFdicIofVtMOqloC4wibkia51H7A/640?wx_fmt=png&from=appmsg)

我知道智谱今年会大力开源，但是没想到，开源年的第一棒，来的如此之快，
就在第二天。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpbj9xtdNCicvwR8eqczP4csyjEX4Acm36fjhZykTOgoibCwzxfCwkibGUzpOicHOzz7wbebq4sMjKWeg/640?wx_fmt=png&from=appmsg)

我。。。不是，让我歇会吧。。。

今天智谱和清华团队直接开源了他们的AI绘图模型，CogView4。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpMW6MVbdomAbyfEQicIwnXcRWDccTX44RC7NqOicEsOGA8lms7uLOcoIWQoZ7X1jHp3tAMqZh3cJMw/640?wx_fmt=png&from=appmsg)

这下，真的快补上2025年开源届的拼图了。

模型链接在此：
https://github.com/THUDM/CogView4

模型尺寸6B，在
BF16和batchsize=4d的情况下，GPU需求如图。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpMW6MVbdomAbyfEQicIwnXcgQtUDia3Yia1AdZiaTNO9rbicfuvoQn5r5dhG02ibg9nZlaicosgpYc54BYw/640?wx_fmt=png&from=appmsg)

最低估计一张12G的显卡就能跑起来。

我们也在第一时间，把模型下载下来，反手在AutoDL上开了一台A800-80G的显存，部署测试了一下。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpMW6MVbdomAbyfEQicIwnXceh0rf1pdw9AmYl1SFlHmqwCQzCVT27jKCtwjMh2y8vN7VRmFHicQkHw/640?wx_fmt=png&from=appmsg)

我自己测试下来，一张1024*1024的图大概70s左右，AutoDL的云机器会慢一些，本地应该会快不少。

当然如果你们想直接体验，也可以用智谱官方自己搭好的在线服务：

https://modelscope.cn/studios/ZhipuAI/CogView4

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpMW6MVbdomAbyfEQicIwnXcHCARqby43F4orLdDWQV7ib8dTMbUqzsapqT1q43yAdjS6tEbu1radMg/640?wx_fmt=png&from=appmsg)

在跑了一小时后，我觉得CogView4，有两个比较有意思的点。

一个一个说。

第一个点就是，
CogView4支持中英文字直接生成
，跟我之前写过的即梦2.1还挺像的，但是智谱的CogView4，是开源的。

这也是开源的AI绘图模型里，第一个支持同时生成中英文字的。

我跑了些case，大家可以直接看看。

比如这些Promtp：

1. 一只布偶猫举着牌子，牌子上写着中文字体的“起来嗨’。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpbj9xtdNCicvwR8eqczP4csVWDvcdPEeQVXKSicMYr8jUIQOjHS4mdVPYl3dgibVJjzU6uLy8BpFTFA/640?wx_fmt=png&from=appmsg)

2.
一幅极简主义风格的冬季插画，以"小雪"节气为主题。画面采用清新的浅蓝色调，上方用简约的白色中文字体写着"小雪"二字。构图主要分为三个层次：天空、雪山和铁路。背景是连绵起伏的雪山剪影，呈现出柔和的曲线；中间是一列橙红色的火车，在茫茫雪原上形成鲜明的视觉对比；整个画面点缀着飘落的雪花。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpbj9xtdNCicvwR8eqczP4csHLiaHsx3MsfTT60KWVdZyzicZP8XCUc1SfXsIJOTwP546xl2R9YTic7WA/640?wx_fmt=png&from=appmsg)

3. 电影宣传海报，画面中间是韦小宝，四周是宫女，标题文字“重生之我是韦小宝”。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpbj9xtdNCicvwR8eqczP4csic2QNGov4ds6DvJB73jKnx4bkSA7cg8JthmUTcs0Y1IuHEBQZCtEuPQ/640?wx_fmt=png&from=appmsg)

4. 画面顶部英文标题：“I NEED YOU”，复古美漫动漫，画面中央是一个小孩在电视机前玩游戏的背影。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpbj9xtdNCicvwR8eqczP4csodajHfXAmcIuXicYx7c1S5ZTEwkvThRmHjzWkwCARjhRHA4ZG5vgIRw/640?wx_fmt=png&from=appmsg)

非常坦率的讲，整体效果和审美，是没有市面一些主流模型好的，中文字的错误率很高比英文大不少，审美和色彩，也有一点差距。

我测下来，感觉他们是没有把文字拎出来单独做处理，而是非常实诚的直接塞给模型直接处理了，所以中文错别字比例会高一些。

但是优点也很突出。

那就是，这玩意开源啊！唯一一个能生文字的开源。

就智谱的Cogview4的效果来看，我觉得，他们技术肯定是没问题，最大的问题，还是数据集这块，审美确实差不少，但是如果你就把它当个底座，来重搞数据集，微调一个很牛逼的电影海报设计模型，那真的不是不可能。

第二个特点，就是它的语义理解，还是真的有点东西的。

比如这些Prompt：

1.
8K超宽幅画卷，分四区域：
左侧：
唐代城门，朱红城墙，商队骆驼穿行，匾额题“朱雀门”；
中左：
西市胡商集市，丝绸瓷器摊位，人群熙攘；
中右：
曲江池畔，仕女泛舟，柳树垂岸；
右侧：
大明宫殿群，飞檐斗栱，晨雾缭绕。
整体风格为工笔重彩，绢布质感。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpbj9xtdNCicvwR8eqczP4csNYgktuKFeWbnyvxVJTMO1X0aib96EiavggpDjBDYx3FKSJlHCr0cWQgA/640?wx_fmt=png&from=appmsg)

2. 一幅横向长卷，从左到右依次是远古狩猎营地、古埃及金字塔群、中世纪市场、工业革命工厂、当代摩天楼、未来垂直花园城。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpbj9xtdNCicvwR8eqczP4cs7FvGooIliaAu1lDicBmUSsXWbl2YBaYo2n4J2kvqqVhdS3c7DeZsCenA/640?wx_fmt=png&from=appmsg)

3.
一笼刚出笼的上海小笼包，皮薄馅嫩，汤汁丰富，摆放在精致的竹制蒸笼中。
旁边是一碟香醋和一双竹筷，背景是木质的餐桌和一壶绿茶，体现出江南的细腻和雅致风格。
江南风味，精致，雅致

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpbj9xtdNCicvwR8eqczP4csKnoOyUokr0NEV39HiaJWKfml3yLhS7KU36U5NKTn0OL548QxQWp73tQ/640?wx_fmt=webp&from=appmsg)

4.
野径云俱黑，江船火独明。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpbj9xtdNCicvwR8eqczP4cswhGUO4RJPZVjU3ic3h10qicAuYnc1E9x3JpU9zliarow7WkTWkZ6mZ4cQ/640?wx_fmt=png&from=appmsg)

5. 一张照片级真实感的奇幻毛茸茸汽车，车身完全覆盖着厚实柔软的白色绒毛，明亮灵动的车灯宛如一双友善的大眼睛，轮胎隐藏在浓密蓬松的毛发之中，夜晚散发出温暖柔和的光晕，呈现出魔法生物般的风格，细节精致，质感极度逼真，充满梦幻气息与温馨感，电影级灯光效果

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpbj9xtdNCicvwR8eqczP4csiaMXW2KiaFSj29kicDicPGqnvApsUjvvHEYZf8NAygHwd4EZZCCSP3TYMg/640?wx_fmt=png&from=appmsg)

可以看到，美不美的另说，但是画的，是真的准确。

这块还是得益于，他们把T5换成了GLM4，这个还是爽多了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpMW6MVbdomAbyfEQicIwnXcHJ7o4rzHGaZdt5uCIviag93ErccEhiaPeiaw4aOO8gfBibs30mwCwIjjjA/640?wx_fmt=png&from=appmsg)

目前他们在出图的分辨率上，也没限制特定比例，2048以下几乎都可以无极调节，这一点还是比较爽的。

后续，他们也会支持ComfyUI和ControlNET套件，还有微调的脚本。这个还是比较重要的，用CogView4来当基座模型微调的话，应该能玩出不少的花活。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpbj9xtdNCicvwR8eqczP4cs3ddBgYNYOczk6lxdncPBiaxdzlHpOibMY5S68Aiba6Ycuh1qmI8PRfXwA/640?wx_fmt=png&from=appmsg)

目前开源的这个模型支持Apache2.0协议，而给普通用户用的版本，也会在3月13日上线在智谱清言上，到时候可以蹲一下。

最后，我想聊聊智谱这个公司。

国内我之前有一个非常主观不客观的评价，我把五家公司放在一起，并称为开源五虎。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpbj9xtdNCicvwR8eqczP4csN2Euwl3eC8edtwRv6GHLUtWA75ypmcX8GCJP8sjqDZkMTg1ia63XpiaQ/640?wx_fmt=png&from=appmsg)

其实在DeepSeek还没成立的时候，智谱就已经在kuku开源模型了。

如果是2023年就开始玩大模型玩AI的，应该见过这个风靡一时的基座模型，ChatGLM-6B。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpbj9xtdNCicvwR8eqczP4csH5KhIGVoSX2pVBWPcswicLNW5IWczno6Y5FSFpicQ3desmaDjRRgdFgg/640?wx_fmt=png&from=appmsg)

4w的星标，在Github上意味着啥相信大家懂得都懂。

那个时候，我还在公司里面做项目，微调了好几个不同的GLM6B，串成工作流来执行任务。

后续，他们又开源了非常非常非常多的模型，比如GLM-4、GLM-4-Voice、
CogVideoX v1.5、
CogAgent
等等等等。

时光匆匆，一晃眼，两年了。

这两年，感觉到了智谱的纠结、智谱的挣扎，还有他们的摇摆。

虽然在2024年的后半程，他们靠着AutoGLM和智能体，在整个AI圈杀出了一条自己的血路，但是在开源世界的声量，好像也被通义和DeepSeek压了过去。

老骥伏枥，志在千里。

在今天CogView4的仓库里面有这么一张官方生成的Demo图。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpbj9xtdNCicvwR8eqczP4csNmwloDDYNkT7R1U2ico8Sn3tSyx6J9CLcFkJObH9EBBArjtoFTl8dcg/640?wx_fmt=png&from=appmsg)

他们把2025年，定义为智谱AI自己的开源年。

不破不立，破而后立。

期待智谱拿下更多超级融资的同时，也能在开源路上越走越远。

毕竟，对我们所有人而言，每一家厂商的进步，都是让中国AI越发闪耀的灯火。

祝愿这片风云激荡的江湖，燃得更盛吧。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
