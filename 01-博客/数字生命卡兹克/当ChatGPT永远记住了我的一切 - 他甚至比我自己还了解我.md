---
title: "当ChatGPT永远记住了我的一切 - 他甚至比我自己还了解我"
发布日期: 2024-05-03
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647662435&idx=1&sn=1e1c84a055c52bf638829430c920695f&chksm=f192313240384cd7fa2a19b5ae14a4ce4ff3c837d0d7e3f5a64ff3ed80f78276ab13d78f28a1"
---

## 摘要

**1) 一句话总结**
ChatGPT正式上线了“记忆（Memory）”功能，支持跨对话实时存储、管理用户偏好与短提示词，通过类似优化版RAG的技术解决了AI跨会话遗忘的痛点，实现了更智能的个性化体验。

**2) 关键要点**
*   **功能入口与管理**：用户可通过“设置 -> 个性化（Personalization） -> 记忆（Memory）”开启该功能，并在Manage面板中查看或手动删除已存储的记忆条目。
*   **触发与存储机制**：通过“请记住…”或“我希望…”等指令可触发记忆，成功后系统会提示“Memory updated”。
*   **跨对话能力**：突破了单次会话的上下文限制，在新开启的对话中依然能准确调用之前记住的用户信息。
*   **推理与独立判断**：AI不仅能直接调取记忆，还能基于记忆进行性格推测等复杂推理；若用户让其记住错误事实（如“2的平方等于-1”），AI在后续调用时仍会保持独立判断并予以纠正。
*   **短提示词复用**：支持将常用的简短提示词（如翻译指令）存入记忆，以便在日常对话中直接调用，免去重复输入或设置GPTs的繁琐。
*   **技术路线对比（vs 长上下文）**：相比Gemini（100万）或Kimi（200万）等不断拉长上下文窗口的做法，Memory功能解决了固定窗口超出后遗忘以及无法跨对话的问题。
*   **技术路线对比（vs 传统RAG）**：相比传统RAG（如Dify等需手动上传和更新外部知识库），Memory功能门槛更低，通过自然对话即可实时、自动地更新和扩充记忆库。

**3) 风险与不足**
*   **长提示词简化导致效果下降**：Memory功能无法完整存储超长或复杂的提示词。系统会自动对长提示词进行大幅简化（丢失详细要求和具体Case），导致AI部分能力缺失，最终输出效果相比完整提示词会有所下降。
*   **长上下文的安全隐患（技术背景风险）**：原文提及，单纯依赖提升长上下文长度（作为记忆替代方案）可能会导致模型越狱等安全问题。

## 正文

最近的OpenAI的风声和小道消息有点多。

比如OpenAI要自己做的类Perplexity的AI搜索引擎
SearchGPT，比如最近在无数
媒体号上闹得沸沸扬扬的gpt2-chatbot。

当然还有那一直期待着的GPT-4.5和GPT-5。

不过这一切都是捕风捉影，真正能用的新东西，也是一个我自己期待了很久的功能，终于在前两天正式上线了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURruz3lGdF4xcIpXnZ2sFzpEzFUtdgiaAiaBxlaRWWgr2ZocFCAnhiayibpYO4Xj6WzRDfjTUgiaNDXloVg/640?wx_fmt=png&from=appmsg)

Memory。

记忆。

之前在用AI的过程中，其实一直有一个痛点，就是他永远无法记得：我是谁，我喜欢什么，我是做什么的。

而如果真是你身边的好助理，他会不记得这些吗？别说你是谁了，你喜欢吃啥口味的菜，喜欢喝什么口味的奶茶，甚至她连你每天几点起床都知道的清清楚楚。

这才是一个优秀且称职的助手。

所以记忆功能，我一直很期待，它是刚需，是我觉得AI走向真正的AI助手，所必须踏出的那一步。

先看看怎么使用记忆的相关内容。

我们点击左下角，打开设置，找到“个性化（Personalization）”选项。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURruz3lGdF4xcIpXnZ2sFzpEib9tEVGcbOZzQYLYubqBOicTRnWNjicELsicicfAk1VdNiaLfb8CH7ghILhg/640?wx_fmt=png&from=appmsg)

接下来，进入“记忆（Memory）”设置。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURruz3lGdF4xcIpXnZ2sFzpEcgvmgoQicUkuBZXY2tUfOTlE7VLaicN5Dg5VgticFxaxkicd5IFibKdtcPQ/640?wx_fmt=png&from=appmsg)

最开始点击Manage是空的，他是没有记住任何信息的

我们试着更新一下记忆部分。

一般触发词是：
请记住XXXX、我希望XXXX
。

比如我先让他记几个我自己的信息。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURruz3lGdF4xcIpXnZ2sFzpEjALV3a3wLlkETQt5RvCILwRFmeibNLHdfpPFlW1sTkpibHNXhR884hMA/640?wx_fmt=png&from=appmsg)

如果出现了Memory updated，则代表会把这条信息给记下了，存在ChatGPT的"脑子"里了。

这时候我们再回到
“记忆（Memory）”的设置，
点击Manage则可以看到我让他记住的所有信息。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURruz3lGdF4xcIpXnZ2sFzpEanexwhXBn5vWt7EqBFu7b4wkOXNIzT012Cic1arNEBZnmLOC5XAw4sQ/640?wx_fmt=png&from=appmsg)

你要是觉得记错了，或者这条想重录，右侧也可以删除掉这条记忆信息。

接着我们新开一个对话，
这样Chatgpt就无法用上下文提示，按从前的方法，肯定是一问三不知。

而这次有了记忆之后，我们再来试试。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURruz3lGdF4xcIpXnZ2sFzpEzwu2cXjYdfkWlOf3YPQ6zKicia7Ylb2TPBTfQpofiaKu0szj1z6VXx9sg/640?wx_fmt=png&from=appmsg)

都非常正确。

最后一点，我问Chatgpt，我是什么样的人？

它不仅正确调取了记忆，并且根据记忆推测出我是一个
多才多艺且热衷于技术和游戏的人
，Nice哈哈哈哈哈。

不过记忆直接调取有些简单。

我又测试了基于记忆的更复杂的推理和应用。

比如我经常用ChatGPT来做一些翻译。

虽然那个Prompt不长，但是每次我去搜索或者复制啥的都很麻烦，而搞个GPTs那我觉得就更麻烦更笨了。。。我更希望的是像记忆这样直接调用，所以我把那段Prompt直接扔了过去，希望ChatGPT给我记下来：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURruz3lGdF4xcIpXnZ2sFzpEEwx4XKxo4dIvuqB4mWzYGOpNddjLouYFRzhQtUe9lPZRNjCILo2ndQ/640?wx_fmt=png&from=appmsg)

他记完了之后，我新起一个对话，扔了莎士比亚一段我很喜欢的台词过去。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURruz3lGdF4xcIpXnZ2sFzpE0G9JP4uibeYz1qtzKqsKFiaZx1wTp1gzLs75fQwm3HlzqMtf1WAMfSgw/640?wx_fmt=png&from=appmsg)

舒服到起飞。

但是注意一点，
Memory里面无法存超长的Prompt，这种短的翻译的还行，但是一些复杂的超长的Prompt会被简化，从而导致最终效果会略有下降。

比如有个文言文翻译的神级Prompt：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURruz3lGdF4xcIpXnZ2sFzpEggL2od5OyV6RiaBZqMRycQlzNDY13FRkfFULDER4KwjrIBu1GSUUgjQ/640?wx_fmt=png&from=appmsg)

我让ChatGPT记完后，去
Memory里看，会发现大幅简化了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURruz3lGdF4xcIpXnZ2sFzpEzTVlNEVK1xibhP42IedDmd90xrIiaRshowY1dTkicp61dcicQibwnv8FTkQ/640?wx_fmt=png&from=appmsg)

可以看到详细的要求、Case全都没了，从而导致部分能力缺失，效果离完全体的prompt会差一点，但是依然是能用且不错。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURruz3lGdF4xcIpXnZ2sFzpExC0Q2RDn41kAAU3rMEqia589MZVAyL3J5qXOMChW9Ad2Uib73ZbibicLwQ/640?wx_fmt=png&from=appmsg)

所以在定义Prompt时，我建议还是预设一些短的比较好。

最后我还我想知道，如果我告诉他错误的事实，他会有怎样的反应

这里我让他记住 2的平方等于-1。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURruz3lGdF4xcIpXnZ2sFzpE69IcQWVUibxn7FfBYO2IR4uw6EHgT0sJhNLIOGwmslCmGm37uiaibpIRA/640?wx_fmt=png&from=appmsg)

嗯，他记住了，然后我新开一个对话，问：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURruz3lGdF4xcIpXnZ2sFzpEOtFiaEfjkpXDiaRKV4daicSpmgX3dd1ibBtBllKg9RFzwWnXibjlNzhJtCw/640?wx_fmt=png&from=appmsg)

事实证明，他会给我纠正，会基于这些记忆信息有自己的判断。

而不是做一只无脑的舔狗。

整体来看，Chatgpt已经可以说具备一定的记忆能力了，并且可以基于记忆力做出更为个性化的回答。

换句话说，他更懂你了，并且它也
不是一股脑记住信息而不做判断。

其实大模型记忆能力本身这件事情，其实很多模型开发商都在努力。

比如
各家都在卷的上下文本长度，Gemini到了100万，kimi甚至达到了将近200万的上下文长度，虽然可以再
提
升，但我觉得但终归不是解决记忆力的最佳方式。

因为这些即便再长，也都是一个固定的上下文长度，你总不能是无限的吧。超过之后，就会遗忘之前的信息。

而且我之前也写过了一篇Claude他们发的论文，在长上下文长度的提升的同时，还可能导致模型越狱等一堆乱七八糟的安全问题。

最核心的是，这些模型在单次会话中不能记住早先的交互。一旦对话结束，所有的上下文信息都会丢失，不会
被转移到下一次会话。

无法跨对话，这才是最难受的。

而另一种方式，
引入外部向量数据库，做RAG检索增强。ChatGPT这次的
Memory其实就这个RAG的优化版。

传统的RAG虽然方便模型获得信息，但这样的方式也有较大的缺陷。

首先上手难度比较大，对普通人来说，很难无法做日常对话使用，以Dify为例，上传知识库，了解参数，普通人直接懵逼了：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURruz3lGdF4xcIpXnZ2sFzpEpth9KnfdSaqbianj3ob9PPHEH8unYyFwd50wjG6VichG0K021y4QGZRA/640?wx_fmt=png&from=appmsg)

而且每一次更新知识库里面的信息，都超级麻烦。

Chatgpt的
Memory这次做了超级优化
，他可以其实通过在与用户的对话中，
Chatgpt会把相关的一些关键信息一条条存储在记忆信息库中。

相比较传统RAG，他具有实时性。

也就是说随着与我们的互动增多，Chatgpt的记忆库会不断更新和扩
充，使得他能更好地适应和预测用户的需求和偏好。

这种长期的适应和学习能力是建立在持续互动基础
上的，与传统RAG每次都要上传知识库，更新起来麻烦的要死的体验相比，可能更加有效。

毕竟，现实生活中，
我们对彼此的了解，不也正是通过一次次的交流逐渐加深的吗？

这才是最符合人类直觉的方式。

这也才是，新造的人。

每一份独特的记忆，构成的才是每一个独一无二的我们。

在过往，AI拥有的只是短期记忆，每一个对话窗口，都是那短暂的一瞬。

这一次，我记得你，下一次，我们从新认识吧。

你的对面仿佛像一只只有7秒记忆的鱼。

而人之所以是人，是人有长期记忆，有长期记忆固化后而形成的永久记忆。然后从这些记忆中，抽象出"虚构"的能力。

现在，大模型，也有了自己的长期记忆。

随着时间的推演，他一定会成为一个真正的非常懂你的助手。

也会逐渐成为，那一个。

新造的"人"。

。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
