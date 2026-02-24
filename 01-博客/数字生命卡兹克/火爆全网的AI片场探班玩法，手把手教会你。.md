---
title: "火爆全网的AI片场探班玩法，手把手教会你。"
发布日期: 2025-12-25
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647678248&idx=1&sn=4cab9208d66e7b05175f4c8808b9882a&chksm=f178956e9f8d8128658e1d874bbeb39e4d5f648b969b8d0d09cd4ad1c0c68274259f6502f060"
---

## 摘要

**1) 一句话总结**
本文详细介绍了一种利用AI生图、首尾帧生视频及后期剪辑技术，制作与经典影视或游戏角色“片场探班合影”视频的三步工作流。

**2) 关键要点**
*   **核心工作流**：整个制作过程分为三步：用提示词生成图片、用首尾帧生成视频、用剪辑软件（剪映）拼接并添加特效音效。
*   **提示词生成**：无需购买付费提示词，可直接使用Gemini生成包含“场景与地点、人物与角色、光线与氛围”三大模块的初始提示词，或让其根据需求反推提示词。
*   **国外模型生图**：Nano Banana Pro具备强大的世界知识，只需在提示词中输入影片、角色和场景即可生成高质量的欧美明星或国际知名IP场景图。
*   **亚洲人脸修正**：针对国外模型生成亚洲人脸效果差的问题，工作流中采用即梦（Seedream 4.5模型）配合参考图进行面孔替换，以提升人物一致性。
*   **国产IP生图**：对于《武林外传》等国产经典IP，需直接使用即梦，配合网上搜集的人物和场景参考图以及Gemini生成的提示词进行生成，还原度可达80%。
*   **视频生成工具**：使用具备首尾帧功能的AI视频模型（如即梦3.5 Pro或可灵O1），将生成的两张图片分别作为首尾帧。
*   **视频动作控制**：在视频生成阶段，通过输入简单的动作提示词（如“人物从图一走到图二”）来驱动画面，并根据生成结果反复微调提示词以修正动作细节。

**3) 风险与不足（原文明确提及）**
*   **人脸一致性风险**：Nano Banana Pro等国外模型在处理亚洲人脸时一致性极差，容易出现面部特征变形或失真的情况。
*   **本土知识库缺失**：国外AI模型缺乏对国产经典影视IP（如《武林外传》）的认知，无法准确还原相关场景和角色形象。
*   **视频生成不可控性**：AI视频生成过程中容易出现幻觉或瑕疵（如人物凭空变出手机、走路速度过快等），需要通过增加约束性提示词并多次重试（roll）来解决。

## 正文

AI视频玩法又进化了。

最近这一周，小红书上和X上铺天盖地的都是AI片场探班的视频，点开视频一看，大家都在跟各路明星、角色合影，非常热闹。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrraicyoZwbBDPIS1XbQNjH8LwbGicTF6HLia7WUtN3DwvndF160jCLPU1YStshsX2PbWUic4TNKaOcdw/640?wx_fmt=png&from=appmsg)

我看到这个玩法之后，也立刻随手做了个小东西。

我跟我最喜欢的游戏制作人和主角们，在游戏世界中合影的小片段。

老规矩，教程也给你们奉上。

小红书上还有在卖提示词的，我是觉得，没有必要。。。

整个过程真的很简单，就三步：

用提示词生图，用首尾帧生视频，用剪辑软件把视频拼起来。

先说提示词这一步。

一开始本来我觉得，做个一劳永逸的提示词喂给Nano Banana Pro，让它直接就处理掉图片这一步部分。

毕竟大家都知道，Nano Banana Pro的世界知识能力强的离谱，所以理论上，只要我输入影片、角色和场景，它就能get到我想要的是啥。

于是，我就把我的需求和Gemini说了一通，做出来这样一套初始提示词，主要分为场景、人物、光线氛围这三块。

场景与地点：
还原经典影视作品的拍摄现场。这是一个正在拍摄的片场环境，拍摄现场包含大型电影电影摄影机、灯光设备、轨道车、吊杆录音设备、部分入镜的工作人员，以及场景中的重要道具。
人物与角色:
参考图中的人物，保持面部特征、五官、发型和衣着100%一致。
站在旁边的是影片中的角色，呈现角色在影片拍摄期间的装扮、发型和衣着。
两人站在一起，看向镜头，在影片拍摄的休息时间里，随机抓拍一张自然放松的幕后合影。
光线与氛围:
专业级影棚照明，捕捉到角色和设备的所有细节。
展现幕后制作的真实感，氛围捕捉到温馨但不被人看到的幕后时刻，两个人物的互动欢乐自然。
影片：，角色：，场景：。

然后上传我的照片，并在提示词里头填上，影片：怪奇物语，角色：demogorgon，场景：upsidedown。

照片和提示词都给到Nano Banana Pro之后，它就会给我生成一张符合描述的图片了。。。

我本来都喝了一口茶，等着美滋滋的收一张图。

结果，事实上我得到的结果是这样的。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrraicyoZwbBDPIS1XbQNjH8lQTQyDBtB3jYCr9wib4HoNtiaxr6fdQdSpBmbjKhCTjvtq34RauNWdog/640?wx_fmt=png&from=appmsg)

乍一看好像是我，但放大脸部仔细看就不大对劲。

像韩国人。。。

还有这样的。

公司小伙伴瞟了一眼我的电脑，直接问我，你是在用faker做图吗？

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrraicyoZwbBDPIS1XbQNjH8n4cfINNN9WP8Z9ib6iapeeO5FW4LIMOc60tTRf0Fhx7ukOT9H6laiaPdw/640?wx_fmt=png&from=appmsg)

。。。。。。

也是越级碰瓷上了。

然后我一通试，发现，用我的脸，屡战屡败，亲妈不认，但朱迪兔碧昂丝邓紫棋周杰伦什么的，效果又不错。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrraicyoZwbBDPIS1XbQNjH8tjPCgibdYvuicAfjKFoYoTMFw85WGGLJp7850ZSb4iap2HXBVGkUNumUQ/640?wx_fmt=png&from=appmsg)

只能说
Nano Banana Pro
的世界知识确实很齐全，但是吧，又是国外模型的通病，针对亚洲人脸的一致性，还是太差了。

那没办法，只能换别的了了。

因为生图只是第一步，后面还要生视频，视频的一致性本来就不如图片可控，如果图片的一致性不好，那就真的是从地基开始崩坏了。

于是只能扭头转战即梦。

但我没有直接用即梦从头生图。

因为提示词里输入影片和角色就能出图，算是大香蕉的独门技，还挺方便的，出来的图光影构图啥的也都不错。所以，我只需要用即梦把我的脸变得更像我自己就行了。

用的模型是Seedream 4.5，也就是图片4.5。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrraicyoZwbBDPIS1XbQNjH8WUP8PuYfOtzzy7Ho4eHEr44Yg18NG0UPRWKicwrmTmF6kRK4EHWbMzg/640?wx_fmt=png&from=appmsg)

在亚洲人脸上，效果确实还是强太多了，就很适合我这个改图的场景。

于是我给了即梦我的参考图和另一串提示词，让它把图片里的面孔替换掉。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrraicyoZwbBDPIS1XbQNjH8E6GfzvJBpSSRrkwxQRZkHx0GGQhjJibwBI3nAWuqxmwrJiaXIU4kAUgA/640?wx_fmt=png&from=appmsg)

终于得到了这样一张，能认得出来是我自己的图片。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrraicyoZwbBDPIS1XbQNjH8eHAMtCsXlVC0WZZVUW4rMoElWyA80JtzdndClNrH1045b9GJtgTibvg/640?wx_fmt=png&from=appmsg)

看着舒服多了。。。

生图的第一个问题，人脸解决了，就来到第二个问题：如果不是电影场景，比如我开头展示的那种游戏场景，提示词要咋改。

我用的方法其实非常的懒癌，就是，也别自己写了，就还是，直接让Gemini干活吧。。。

把我的初始提示词扔给它，让它根据这个提示词反推。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrraicyoZwbBDPIS1XbQNjH8O4ia3ZNqoM9tC4H1WqVia6Jo277oN6W1qiahNrdNDaeibcIBJMMgp2V7JA/640?wx_fmt=png&from=appmsg)

然后，直接把它给我的提示词们复制到Banana里，就可以得到。

跟宫本茂和马里奥的合影。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrraicyoZwbBDPIS1XbQNjH8OLoC4QGD3qT8t9MhGcq1bMb7xUX033XlsyGiceBKpHNOoGET5mKj9QQ/640?wx_fmt=png&from=appmsg)

跟英雄联盟主创和主角的合影。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrraicyoZwbBDPIS1XbQNjH8SkesbExmwS9z1pg0ia2Jw7bXeeJDKWSCDw3jEhzl9J8wu79wHiaznBGQ/640?wx_fmt=png&from=appmsg)

还有我私心最喜欢的，跟黑猴还有冯骥老师的合影。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrraicyoZwbBDPIS1XbQNjH84fb3YkCJ2IgEia3lnK9O7opsMzAX4WICR4IC2rCqJK737boRRehfe3Q/640?wx_fmt=png&from=appmsg)

所以说，不用背提示词，更不用去买，善用Gemini就行。

到这里，其实你已经可以让Gemini帮你自由出图了，只要你想，万物皆可摄影棚。

但是这一趴其实还没结束。

因为我在试一个我童年时代就很喜欢的电视剧合影，武林外传的时候，翻车了。。。

我悲催地发现，Nano Banana Pro的能力，在武林外传上面彻底歇菜了。

甚至在我给了它佟掌柜的参考形象之后，出来的结果依然有些灾难。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrraicyoZwbBDPIS1XbQNjH8S6JPh72uuAhjkwSqJ09BsjovUJsZlA5OHM9heiasPpS6Eex0iaVEvK7g/640?wx_fmt=png&from=appmsg)

你会发现，Nano Banana Pro既不具备对武林外传的知识，也无法准确地还原参考形象。

所以，类似于武林外传这样的经典国产剧，确实没有办法，还是得祭出国产模型才行。

所以我又回到了即梦，去网上找了人物参考和场景参考，然后用Gemini生成的提示词和参考图在即梦上一起roll。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrraicyoZwbBDPIS1XbQNjH8AddiaaQgjQCvbsNaaXVqOI9fvQTR78WYvGazNErwFhwC6osHXZ2EOfw/640?wx_fmt=png&from=appmsg)

最后，总算是把武林外传的这些人，以及我自己都做到了80%的还原。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrraicyoZwbBDPIS1XbQNjH8kZ3J6YrlX1Vfc7ll2q5zJ11dEzBWjhiaDNEumhN6uIa2C6ztyXKKa8A/640?wx_fmt=png&from=appmsg)

总的来说，生图这一步是最坎坷的，因为训练集和人物一致性的原因，所以经常会在Nano Banana Pro和即梦之间来回转战，力求画面构图没问题的同时，人物一致性也要达标。

而到了生视频这里，一切就简单多了，只要这个模型有首尾帧功能就行，比如可灵O1，或者即梦3.5 Pro，都行。

因为图最后都是在即梦里面出的，所以我图方便，用的还是即梦。

只需要把生成的前后两张图贴在首尾帧上，然后给一句提示词，让人物从图一走到图二就行。

巨简单。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrraicyoZwbBDPIS1XbQNjH8rKU5AG51ibGicy4Nwpq9ic5GicWxia27nIgnOpCrncicWibRqewxCzSXkmLQA/640?wx_fmt=png&from=appmsg)

但是，要是仔细看的话你会发现我的提示词其实经历了很多缝缝补补，因为我发现它很容易从虚空中掏出手机，就取消了手机。发现人物走路速度容易过快，就加了提示词约束，等等等。

所以也没必要完全遵循这个提示词本身，可以根据出来的结果再做调整。

而在roll了n次以后，我也拥有了全部素材。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrraicyoZwbBDPIS1XbQNjH8UFibbF4hmY6guWroqWgJ8SEK1CkvMcbfK7x02wMp83zhgIk1cBuZ9MQ/640?wx_fmt=png&from=appmsg)

这时，只要把它们导到剪映里加工一下，再加点拍照的特效和音效。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrraicyoZwbBDPIS1XbQNjH8Yy4E3p1s7kdqDO2Rxn2rvAHqJCicBwqIUeSOiakO3RibIpaVf9Tw8jG2w/640?wx_fmt=png&from=appmsg)

一条视频，就做完了。

接下来，集中给你们看一下我都做了哪些case。

比如最近阿凡达很火，我就去潘多拉星球转了一圈，碰见了男女主，还有反派。

还去了趟怪奇物语片场，遇见了几个主角，还和张着大嘴的魔王花合照了一张。

穿越到三国，遇见了一个拍三国纪录片的剧组，跟刘关张曹操都见了一面。

最后，还跟我的童年回忆同框了一回。

看着这个小片子，我想起了十岁那会儿，守在电视机前等待《武林外传》播出的日子。

当时那个仰着头看电视的小孩可能也想不到，快要二十年过去，他可以走进那个熟悉的片场，和他喜欢的人物来一张合影。

这可能是我这个月最喜欢的AI玩法。

也希望，你们能够用它。

走进那个你心中最经典的回忆里。


wzglyay@virxact.com

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
