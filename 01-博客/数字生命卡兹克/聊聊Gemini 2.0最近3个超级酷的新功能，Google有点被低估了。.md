---
title: "聊聊Gemini 2.0最近3个超级酷的新功能，Google有点被低估了。"
发布日期: 2025-03-18
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647669720&idx=1&sn=8fff9ae5d7d96d9dc8e449e11eefb51d&chksm=f1a60d4125736d3291f166412b684b76e1f3165901164194003a7fd0c2eb32d25bbfb2c203bc"
---

## 摘要

**1) 一句话总结**
Google近期密集推出了Gemini 2.0的原生多模态语音改图、免费版Deep Research以及基于搜索历史的个性化回答三大核心功能，依托其搜索生态展现了被低估的AI产品竞争力。

**2) 核心要点**
*   **原生多模态“用嘴改图”**：已在Google AI Studio上线，支持用户通过语音指令直接进行图像编辑（如一键去水印、换衣服、换背景等）。
*   **Deep Research基座升级**：底层模型更新为Gemini 2.0 Flash Thinking Experimental，具备100万Token的上下文处理能力。
*   **Deep Research免费开放**：向免费用户开放使用（有未明确标注的月度次数限制），相比OpenAI高昂的付费门槛（20-200美元/月）更具普惠性。
*   **Deep Research运行机制**：采用Agent模式，执行“拆解目标规划 -> 大规模网络搜索（含YouTube等并展示思维过程） -> 合成产出报告”的工作流。
*   **学术与搜索生态优势**：得益于Google 30年的搜索积累及Google学术生态，其Deep Research在科研领域的搜索精准度优于OpenAI。
*   **Personalization（个性化）功能**：支持关联用户的Google账号，模型可根据用户过往的Google搜索记录提供定制化的专属回答。
*   **开源模型Gemma 3发布**：同期推出了27B参数的Gemma 3，在同等尺寸下性能击败了DeepSeek v3和o3-mini。

**3) 风险与不足**
*   **Deep Research报告整合能力较弱**：受限于底层模型能力，其最终生成的报告在深度和整合质量上不及OpenAI，难以达到“直出即可用”的水平。
*   **个性化功能存在语言Bug**：在使用Personalization功能时，若用户的中文提问中包含英文字母，模型会触发Bug并输出全英文回答。
*   **Deep Research起手式引导不足**：在任务初期的目标规划阶段，不会像OpenAI那样主动提问并动态补全用户未考虑到的研究范围。

## 正文

Google最近的动作真的多。

感觉就是趁着OpenAI存粮打完了，疯狂的撒豆子一样往外面撒更新。

昨天晚上11点多，他们又发了一个关于Gemini的更新（其实功能礼拜天就上了，我也不知道他们为啥今天才发推文）。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrqswov9ssEOl8ec1bbqMnTmX0EkUe8iaW8jscrz70ic5bC8SYDHNIC1bLXS6zst0oX5L5zHufrqNhQ/640?wx_fmt=png&from=appmsg)

就是这个东西。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrqswov9ssEOl8ec1bbqMnTpJxHKb4LOdIqVJ8W2SO0XQdiaoNhKZryvMJXicuGS52sfDU7iaappiatAQ/640?wx_fmt=png&from=appmsg)

这玩意，他会根据你的过往的所有Google搜索记录，来让模型更懂你，给你更加个性化的搜索的回答。

然后就是上周五，
Google又发了Deep Research的更新
，现在，底座换成了Gemini 2.0 Flash Thinking，基座比之前的1.5Pro能力还是强太多了。而且，是100w token的上下文。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrqswov9ssEOl8ec1bbqMnTGtRETCjsLZiaXAewWQXEf3naS7KqVmiaVicebic4TU8jHZKj40RrCHj99Q/640?wx_fmt=png&from=appmsg)

再就是上周四，几乎全网火爆的Gemini 2.0原生多模态，被玩出了各种花来。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrqswov9ssEOl8ec1bbqMnTWuR72uzCJJjMzSJ2cmHIpcNl1g40OeIsbKZjoCNauyA050PhpCBYTQ/640?wx_fmt=png&from=appmsg)

更别提同样在上周开源的Gemma 3，以27B超小尺寸击败了DeepSeek v3、o3-mini等等。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrqswov9ssEOl8ec1bbqMnTliabQpkkgcSxlxxk11pHIX6PMZp7bLHuib8neAq0xlWElGtADHKeBjzA/640?wx_fmt=png&from=appmsg)

Google这一周的动作，密集的有点离谱了。

但是每一个更新，都是实打实的，都是值得OpenAI，开个20分钟直播发布会的玩意。

在体验了几天以后，我想说，Gemini 2.0，感觉还是被低估了，这波更新之后，已经成为我现在用的仅次于ChatGPT第二多的AI Chatbot产品。

因为，体验和生态。

这3个新功能，我们一个一个来说。

第一个就是上周四更新的那个Gemini2.0的用嘴改图
。我也写过一篇文章了：
Gemini 2.0的“用嘴改图”终于上线了，这是AI绘图的新范式。
就不过多赘述了，只能说特别强。

网址在此：https://aistudio.google.com/，记得开魔法。

给大家看两个好玩的case吧。

比如用嘴一键去水印。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURrqswov9ssEOl8ec1bbqMnT9TiabuW9NV4Picm1PPyMxC2ia3aV4lSib0pKIBDZtkXKKrXg1icyqj75GlQ/640?wx_fmt=jpeg&from=appmsg)

或者一键换衣服。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURrqswov9ssEOl8ec1bbqMnTqeibb96Y37C8x6t16FAISkOanfj925QOrDqSIeL9YMWXguauWtib7n3Q/640?wx_fmt=jpeg&from=appmsg)

甚至X上有一个贼好玩的，直接给自己换了个背景。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURrqswov9ssEOl8ec1bbqMnTk4Oqqr5XiaJSI6BHLr4ZKW6echbyYBcWfqyhxYFnnw5OnW0gXIX4Zibg/640?wx_fmt=jpeg&from=appmsg)

“
你已经上班迟到了，你甚至还没离开家……你没有借口，于是你拍了一张今天健身的照片，然后打开 Gemini 2.0 flash expremental输入如下指令：展示这位女士在 N 线 14 街站台的一张自拍照，她竖起大拇指点赞，背景中有一群沮丧的 MTA 工作人员正在维修轨道。头顶上方，一个小型 LED 屏幕显示日期：2025 年 3 月 13 日。”

就，看着非常有用。

然后就是更新的第二个功能，
Deep Research。

我也会用整篇文章，最大的篇幅，来聊这个功能。

我先表明态度，OpenAI的
Deep Research和o1 pro这两个功能，是我至今还愿意为它付费200刀/月如此高昂价格的原因。

当你用过
Deep Research后，我相信，你一定会被其做震撼。

我自己是金融行业出来的，也跟N多金融领域的行业研究员还有科研的朋友交流过，大家基本的反馈都是作为老手，自己也起码要干10个小时以上才能到达
Deep Research生产的研究报告的质量。

但是很多人可能不知道，
Deep Research这个功能，其实是Google去年12月份，第一个发的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrqswov9ssEOl8ec1bbqMnTaTrjYdsicsjials623o2lTciabTL7Lv7VvmvtibD0rcrVYa91Mn7xMMkIQ/640?wx_fmt=png&from=appmsg)

但是吧，当时的底座，用的是Gemini 1.5 pro，那个模型，真的太烂了= =效果完全不够看。

随后才是2月份，OpenAI基于o3微调了一个模型，抄了一个他们的
Deep Research，把效果打到了新的高度，也让
Deep Research这玩意，第一次跑了圈。

后面就是Preplyxity和Grok3，这两个虽然也推出了类似的功能，但是名字其实都叫
Deep Search，纯粹的AI搜索。跟
Deep Research几乎没啥关系。

Deep Research其实本质上是一个Agent产品，用户提出问题后，会跟Agent一样，先
拆解目标进行规划，最后进行搜索、合成，产出一篇报告。

所以你能看到，最核心最核心的一步，其实是第一步，
先
拆解目标进行规划，这个东西非常的考验模型的规划能力。

而规划能力，就是逻辑能力的反应，所以你也可以说，这就是在深度考验，模型的智能水平。

人OpenAI，用的是最牛逼最先进的o3微调，你Google，居然在2024年12月份，用的还是跟Sora同期的Gemini 1.5 pro，我都不知道用啥理由去理解Google，只能说都过去8个月了，他们还是忘不了当年被OpenAI狙击的痛，所以至今还对Gmini 1.5 pro耿耿于怀念念不忘。。。

但是这一次，Google终于反应过来了，把基座模型，换成了Gemini 2.0 Flash Thinking Experimental，他们目前最新的推理模型。

虽然我觉得他们应该用2.0 Pro Thinking甚至是2.5才对。。。

你现在可以在Gemini的官网用到：

https://gemini.google.com/

左上角切换到
Deep Research模型或者下面对话框那打开
Deep Research按钮，都行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrqswov9ssEOl8ec1bbqMnThcwyOib1Two4vj7hm4iazJgia7cXvZsnl7HVYgvp3FEHTP2Th2kBY9ic7Q/640?wx_fmt=png&from=appmsg)

现在有个比较牛逼的点是
，它免费。

OpenAI的
Deep Research贵到离谱，Plus会员（20刀/月）每个月智能用10次，产出10份报告，即使是Pro会员（200刀/月），每个月也只有150次。没氪金的用户，更是连体验资格都没有。

而这次，Google至少做了一个非常良心的事，即使你是免费用户，也可以体验到，真正的
Deep Research了，而不是那种垃圾
Deep Search。

每个免费用户，每个月可以用X次，具体次数我把他们网站翻了个遍，也没看到哪里写清楚了。

只有这么一句。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrqswov9ssEOl8ec1bbqMnTYYYAoyOzricPdVAM9JQaBCLMRCErT23ColZcQhuRToDjOZEK58CP4ibw/640?wx_fmt=png&from=appmsg)

反正可以白嫖，不行就换号大法启动嘛，多大点事。

也给大家看一下效果。

比如我最近其实对一直在研究电影工业，也有部分工作是做这一块，那么有一家公司是我一直想研究的，就是漫威。

所以我就把这段Prompt扔了进去。

“全面、系统地分析漫威（Marvel）在电影工业化进程中的布局与经验，涵盖历史背景、核心战略、制片体系、商业模式、营销策略、技术应用，以及它如何与迪士尼等合作方共同塑造全球化、跨媒体的超级英雄宇宙。通过多角度调研与论证，提炼漫威在现代电影工业发展的成功要素，并思考未来趋势与经验教训。”

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrqswov9ssEOl8ec1bbqMnTaprM8uFsAcHWyS2AicwicdhHpDWd1sfJRulWneAoQ4R6iamfQUk6yjqZQ/640?wx_fmt=png&from=appmsg)

跟OpenAI的
Deep Research的不同是，他会给你把框架和节奏拆完，让你清晰的看到后面它会执行哪些步骤，你点击开始研究之后，他才会去整个互联网上去搜索。而
OpenAI的
Deep Research，是会在搜索的过程中，动态调整目标的。

当然你也可以修改方案，点击以后用嘴改就行了。

而OpenAI的
Deep Research是会给你补全范围，提问题，来激发你没考虑到的部分。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrqswov9ssEOl8ec1bbqMnTjciaQwaI24ib4kUibnaSy1cRCrmiae14obHbTYb6PBzHHjJMeJAKYhnPRA/640?wx_fmt=png&from=appmsg)

在起手式上，OpenAI还是要强于Google的。

随后就是搜索阶段。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrqswov9ssEOl8ec1bbqMnTJJcO8OkCl3KLGD8nicEibucLbeibVjrG0Me2W50hicpYyiaZibHSoibUtqNkA/640?wx_fmt=png&from=appmsg)

Gemini会默认展示思维过程，而且会用了巨大的UI画幅去重点展示，搜了超级多的网站，甚至还有youtube。

在思考了10分钟之后，一份报告，就会放在你的面前。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrqswov9ssEOl8ec1bbqMnTxJ9WSgu89OFjEic5CwzJO9FIseYTEWPHmOKVujIDvsGDbPHgWtB2dQA/640?wx_fmt=png&from=appmsg)

非常坦诚的讲，这份电影工业化报告的质量，是没有OpenAI生产的详细和深度的。

搜索的很准，它搜了将近220个网站，我点进去看了一半，确实都很相关。但是最后的报告整合上，拉了胯了。

能解答我的一些疑惑，但是并没有到那种直出即可用的地步。

而OpenAI的
Deep Research，是可以达到这个程度的。

可能还是受限于底层模型的原因，但凡我觉得Google换成Gemini 2.0 Pro Thinking，效果都可能会大幅提升，不过那样的，可能又没法免费了。。。

不过我的做科研朋友告诉我，他觉得，在科研领域上，Google比OpenAI好用，得益于Google 30年的搜索积累，和在google学术上的布局，搜索的精准度上会比OpenAI强非常多，最后得到的报告，也比OpenAI要好。

但是科研这块我不懂，可能需要大家再去多测试一下，可以在评论区反馈。

总结就是，
Gemini
Deep Research模型能力拉了点，但是搜索能力很强，报告整合能力拉跨；OpenAI
Deep Research搜索的精准度中规中矩，但是基座模型太强，整合能力无敌。

我这里也非常客观的讲一句我的理解。

Deep Research这种东西，会极高极快速的拉高你获取高信息密度知识的上限，会大幅改变教育、研究的工作体系。

过往，无论是因为囊中羞涩，还是因为别的，没有用过
Deep Research，那我非常的真诚的建议你，Gemini的这个
Deep Research，趁着目前还免费。

薅秃它。真的。

无论是做行业报告、还是做书籍总结、还是科学研究等等等等。

先用起来。真的。你会感受到，另一片天地。

最后，用简短的篇幅，聊聊更新的第三个功能，
Personalization。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrqswov9ssEOl8ec1bbqMnTXicXptfibbyxfcgv58dm8FYzPUDCEgkRhnsgib5wzNWOZicXO0knicROxsQ/640?wx_fmt=png&from=appmsg)

当你第一次点进去的时候，会提示你，是否要跟你自己的Google账号相关联。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrqswov9ssEOl8ec1bbqMnTiaibXaAXuoB4mkF3XEbbMFmhTE9SmVaPelAfgF9YHH1b6xFawfiaGMw7A/640?wx_fmt=png&from=appmsg)

关联了以后，Gemini就可以根据你过往的搜索记录，来给你针对性的、个性化的回答了。

用Google搜索的越多，他就会越懂你，所以，你懂我什么意思把...

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrqswov9ssEOl8ec1bbqMnTe15j2Bb0YA7X4Iqbia2KwqJkP5yyEz6KPbaEF8jbP5o6GvkcrdqElWQ/640?wx_fmt=png&from=appmsg)

但是我发现了一个BUG，就是当我问题中有字母的时候，它的回答，就会变成英文，这个还让人挺懊恼的。

但是，从这点依然能看出，Google在做产品上，终于开始把自己过往30年的积累，逐渐的往Gemini中融入了。

这种巨头的生态积累，还是不容小觑的。

这一周密集的更新，个顶个都是很棒的功能，更别提Google手上还有个AI视频的王炸，Veo2。

Google，感觉还是有点被低估了。

AI还远未触及顶点。

人类也远未见识到它的极限。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
