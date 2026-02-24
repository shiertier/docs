---
title: "实测豆包刚刚上线的新版深度思考，他们也向DeepSearch迈出了一步。"
发布日期: 2025-03-27
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647669963&idx=1&sn=83fd469aa9f3b12bc09f3e5f645d1150&chksm=f14bc568fc0e5b14985918450d7d57cd2437ef484cb320348dcecdde8712237904cd44a2a937"
---

## 摘要

**1) 一句话总结**
豆包新上线的“深度思考”功能将推理与搜索深度融合，采用多轮“思考-搜索”的Agent模式，在保证较快响应速度的同时提供免费无限次使用，填补了高性价比AI搜索的生态位。

**2) 核心要点**
*   **机制创新**：不同于传统AI搜索（先搜索后回答）或将思考与联网分开处理的模式，豆包将深度思考与搜索直接融合。
*   **Agent工作流**：采用类似DeepResearch的逻辑，先将复杂问题拆解为多个步骤，再进行“思考-搜索-思考-继续搜索”的多轮循环。
*   **响应效率**：单次任务通常包含2至3轮搜索，绝大多数回答在20多秒内生成，最长耗时约50秒。
*   **自我纠错能力**：在搜索过程中能自主评估信息完整度（如发现缺失部分数据），并主动发起新一轮搜索以补充增量信息。
*   **实测表现**：在复杂交叉查询（如对比两部剧的演员阵容）中，整体正确率可达80%左右，能准确抓取核心信息并优于部分竞品的单次搜索结果。
*   **市场定位与成本**：相比于OpenAI DeepResearch（耗时长、单次查询约2美元）和Grok DeeperSearch，豆包的输出质量中规中矩，但具备极高的响应速度和性价比。
*   **使用门槛**：该功能目前对用户完全免费且无限次使用，大幅降低了普通人使用高级Agent搜索的门槛。

**3) 风险与不足**
*   **细节幻觉**：在处理复杂细节时仍难以避免AI幻觉，例如在实测中出现了影视剧角色名称、所属阵营对应错误的现象。
*   **质量上限**：受限于模型基座和较短的搜索耗时，其最终输出质量属于“中规中矩”，尚未达到耗时更长、成本更高的顶尖模型（如OpenAI o3）的绝对深度。

## 正文

今天晚上，就在刚刚，豆包终于上了之前很多人期待的功能。

深度思考。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo3dCD1EWIpyxwEd2lQv9N6D4IAt9vC2yFDGdoMfX5V1saKicFdqkmTvuJTc5WMxKDsXs49tLNIjJA/640?wx_fmt=png&from=appmsg)

我之前用别人的账号体验过这功能，就是推理模型，而今天看到的第一刻，我以为的是，豆包的推理模型终于全量上线了。

但是当我体验了一下以后，发现他们这个深度思考，跟之前的推理模型、还有其他的AI联网还真的有点不太一样。

它不止是是个推理模型，还直接把思考和搜索，给融合在了一起，有点DeepSearch那个做法。

而不是像DeepSeek一样，把深度思考和搜索分开去处理，用户自己选择是否打开思考和联网。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8aTFIvtcIIGicu8Gatbofy2bdqnXhKw5h0MIEEOjy8SZJZuf7dTcAs7qw/640?wx_fmt=png&from=appmsg)

这个说法可能有点难理解，看个案例。

比如说，我最近有一部非常喜欢的情景喜剧在看，是《鹊刀门传奇2》，今天终于看到大结局了，还挺舍不得的。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8aP223kuTicf3T8Rl01SZjbpu9R9rxhZspqUGXojPFaicLKtzq4auH7WgA/640?wx_fmt=png&from=appmsg)

小声比比：我强烈安利所有没看过的人去看，真的超级无敌爆炸好看。

这里面的演员呢，其实很多都是赵家班的，我在弹幕上天天看到有人说，这人是《乡村爱情》里面的谁谁谁。

于是，我就想搜一下，
鹊刀门传奇2中的演员，在乡村爱情中分别出演过什么样的角色？

如果你把这个问题，问DeepSeek的话，他的做法和答案是这样的。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqttBqFBufy1WlOlonvRic8afBf3GI743nP9DnZBBicYpxz06A1Q1CxeDHfl6jdyEGc86IuoRfPFx5Q/640?wx_fmt=jpeg&from=appmsg)

你会看到，流程是先根据我的问题，去联网查询，查到了所有的内容以后，再根据这些搜到的内容和我的问题，来给我进行回答。

而最后的回答是这样的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8aI9BANYypNzXdfKNKZPpI4Rc1UIQsMgv2bWLF4XFLH1WjFW4TentBYA/640?wx_fmt=png&from=appmsg)

我当时脸都看懵了，一半是配角，一半是未透露。

不是，那几个主角，你是一句没提啊。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8aITVa6jmiav1MuJejIIXFJibzoDf1Vnf17EwbKDUQZy8Ep6oLL6j6q3lQ/640?wx_fmt=png&from=appmsg)

这个其实就是现在很多AI搜索的弊端，在一些稍微复杂一点的问题上，根本就不够准确。

而像我一直狂吹的OpenAI的DeepResearch之所以效果那么好，是因为他除了底模是o3强到爆炸之外，也是一个Agent，不是上来对着这句话先搜，而是先思考，先规划，规划完了再去一点一点搜索，得到答案。

豆包这个深度思考，是一样的逻辑。

比如我把刚才那句话，问豆包。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8aYDYJJRAsBJAKWG5MsCxQusNZQ8hEfqq61zxLLttd6yq5fOSWsE3B1w/640?wx_fmt=png&from=appmsg)

你会看到，跟DeepSeek的搜索不一样的是，豆包的深度推理是先思考，再搜索。

先把问题拆成了4步：

搜索《鹊刀门传奇 2》的主要演员名单。
对每个演员，搜索他们在《乡村爱情》系列中饰演的角色。
整理这些信息，确保每个演员的对应角色正确无误。
注意可能的重复角色或演员替换情况，避免错误。

然后才去搜索相关资料。

在过程中，也不是搜索一次以后就结束了，而是思考 - 搜索 - 思考 - 继续搜索。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8axlspBgXFy9FWohfcFDDGz4aKZxibD0Znn6rT0nhrzRY5BkrhEiaDE6EA/640?wx_fmt=png&from=appmsg)

所以你会看到，在一次任务中，可能会出现好几次搜索。

我的这个任务，在豆包经历了两次搜索之后，给出了一篇答案。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8aQtCl4KqEbMVfjPBhWTBCI7Kom6GhhaxGBsz84013sl8eY3Uw9uNMGg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqttBqFBufy1WlOlonvRic8aNpzYw0ZKbr4uB5eBhGAIDlHaerRXXSMWcFRdMnJJDNb5j0wq3eSocw/640?wx_fmt=png&from=appmsg)

主角都抓出来了，回答质量上也好不少，整体的正确率能达到80%。

当然，一些细节的错误也有，就单说鹊刀门传奇2的角色。

比如高大毛并不是鹊刀门的弟子，他是天池帮的；比如唐鉴军老师在鹊刀门传奇2中饰演的角色是绝绝子，不是公孙丽蓉，公孙丽蓉是张小英老师演的；比如王小虎饰演的是王公公，并不是任我翔。

细节的幻觉部分还是难以避免。

除了这个两部戏的演员关联，我也测了一些其他的例子。

比如我有一个很有意思的prompt，是：

《哈利·波特》系列电影中，每部电影出现但被大多数观众忽略的关键细节分别是什么？

豆包想了很久，整整搜索了3轮。

第一轮搜索，豆包把任务拆完分步骤以后，知道了大概的隐藏细节是什么样子的，知道纯靠自己估计答不好，需要去参考影迷社区的讨论。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqaEkeorWUn1JxGbBqg9taXic4RAcEz8gVzJ86ponbg7DqEQnCWZxicagkGjLn0bbQaMoRCYEzvrdAg/640?wx_fmt=png&from=appmsg)

可以在右边看到，搜索的还是很精准的，几乎都是精准的细节帖子。

在第一轮搜索结束之后，其实已经拿到不少内容了。但是豆包自己PUA自己了一圈以后，发现怎么只有第一、三、四、七部的，哈利波特总共8部的，缺了另外4部的一些内容，然后，它又开始了第二轮搜索。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqaEkeorWUn1JxGbBqg9taXcyGj9m16IRib33AroRT68aq491OQwba16J1fdZyZXYkbH7EIIt5wLTw/640?wx_fmt=png&from=appmsg)

拿了不少关于魂器和凤凰社的信息。

而第三轮搜索，则是给自己，继续补充细节。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqaEkeorWUn1JxGbBqg9taXELIUpJyB6ibWs5CXO6MSib6WeSiaLbpKiaXX1SNXgvBVnhpA78B6cJ9b6Q/640?wx_fmt=png&from=appmsg)

最后，豆包自己感觉，信息基本都够了，再搜可能没啥增量信息了，决定停了，也差不多了，可以整合整合给用户回答了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqaEkeorWUn1JxGbBqg9taXAMlFamF0Fp0ClF0HcX2aHiaDSalNauNQmNFARicsF8O10fF0CoibWkesw/640?wx_fmt=png&from=appmsg)

最后，回答的效果是这样的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqaEkeorWUn1JxGbBqg9taXl35cO5T0RtQ9QAzVmUictMXNwtR768YUHzw3OYaiafBG8bLGGIKUSXqQ/640?wx_fmt=png&from=appmsg)

很全面，很细节，又勾起了我的很多的回忆。

比如我最近想买一个数码相机，学一学摄影。我是这么问豆包的：

我想买一台数码相机，预算1万左右，主要用途是旅游拍照和短视频拍摄。请你先在国内外评测网站搜索该价位区间内画质、视频防抖表现都不错的机型，然后再比较这些机型在镜头群、重量和售后服务方面的优劣。根据实际使用场景给出购买建议。

同样，也搜索了3轮，自己想了N多的回答。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqaEkeorWUn1JxGbBqg9taXfe5PxzEC60A94aAxWrqEs5PhxU6yJGnrvmCf0QgIEAJMAM3vEAIUyg/640?wx_fmt=png&from=appmsg)

最后，给我列了一个对比表。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqaEkeorWUn1JxGbBqg9taXACjPFoDiaKdjRC6iazpCaZRkxhWsqceiaFpWCBBcw89awltgBVSl69MXQ/640?wx_fmt=png&from=appmsg)

对比了一通后，非常推荐我
富士 X-T4 单机身，说是
搭配二手镜头是最优解；若能接受小幅超支，
佳能 EOS R8
的综合性能更值得投资。

不知道有没有懂摄影的朋友，来看看豆包这个推荐的怎么样。

目前从我的测试来看，大多数的回答，都回在2~3轮会结束，时间最长在50秒左右，大多数情况在20多秒的时候都能出回答。

我个人对豆包的新版深度思考的评价是：

最终质量中规中矩，但是补上了一个生态位。

现在所有跟AI搜索相关的功能（包括AI搜索、深度思考、DeepResearch、DeeperSearch等等），其实可以列成一个四象限。

横轴是最后搜索结果的质量，从一般到高；纵轴是消耗时长（也可以说是成本）从高到低。

我自己也做了一下评测，然后做了一张图。（叠个甲：根据我自己日常使用场景进行测试，纯个人主观，如果不同意见勿喷。）

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo3dCD1EWIpyxwEd2lQv9N6haxPhQ143xLqicBth6LeqCy8GB7OSqJkxVwkQIVJZ4xmymbFIK4KCFA/640?wx_fmt=png&from=appmsg)

单从输出质量看，T0肯定是OpenAI的DeepResearch，但是消耗时间也最高，十几分钟是长有的事，也是最贵的模型，一次查询就是2美刀。

他们强就强在是一个极度完整的Agent，拥有最强基座o3模型。

其次就是Grok前几天更新的DeeperSearch，拥有X独特的资源，同时也大幅增加了搜索的时长，效果比之前牛逼很多。

而豆包的生态，就在于质量还不错，同时拥有最快的速度。性价比最高，
而且，还无限免费用。

从这也能看出各家的打法，坦率的讲，DeepResearch原来就没法给国内的普通人用。

即使Gemini的DeepResearch可以一个月用5次，但是还是不够平权。

而豆包的深度思考，边想边搜的模式，有了Agent的雏形，同时把成本打得足够低，人人都能免费用的上。

而且是免费无限用。

这一点，我觉得他的意义更加重要。

再牛逼的东西，高高在上，处于云端之间，只可远观，虚无缥缈，那还有什么意思呢？

愿更多人。

与触手可及的宝刀相遇。

然后屠龙。


wzglyay@virxact.com

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
