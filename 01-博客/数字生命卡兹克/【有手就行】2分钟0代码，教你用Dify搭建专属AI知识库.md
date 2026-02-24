---
title: "【有手就行】2分钟0代码，教你用Dify搭建专属AI知识库"
发布日期: 2023-06-12
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647658737&idx=1&sn=66d54195f97b6241cc8a9a755eabe97a&chksm=f1b498b74cb0fce375b709395e73a118a605ece79d609fbf95227fba50e342a6cfeb2d67e539"
---

## 摘要

**1) 一句话总结**
本文介绍了如何使用零代码LLMOps平台Dify，通过配置OpenAI密钥和上传本地文档，快速搭建基于大语言模型的专属AI对话知识库。

**2) 核心要点**
*   **知识库运行原理**：将文档转换为向量存入数据库，用户提问时检索最相似的文本向量，并将其嵌入给大模型（如GPT）生成回答，而非直接输入全文。
*   **平台简介**：Dify是一个可视化的LLMOps平台（https://cloud.dify.ai/），支持零代码创建AI应用，提供开箱即用的网页分享链接或后端API服务。
*   **创建应用**：通过Google账号登录后，在控制台选择创建“对话型应用”。
*   **配置模型**：需要在平台设置的“模型供应商”中，填入个人的OpenAI API Key。
*   **构建数据集**：在“数据集”模块上传本地文档，进行分段与清洗（无代码基础用户可直接选择“自动”与“高质量”模式）。
*   **编排与发布**：在“提示词编排”页面编写预设Prompt（如设定客服或顾问角色）并关联已处理的数据集，点击发布即可完成搭建。

**3) 风险/不足**
*   **数据格式限制**：目前Dify的数据集仅支持文本类文件上传（明确支持的格式为TXT、HTML、Markdown、PDF、XLSX）。

## 正文

自从ChatGPT发布以来，已经过去了8个月了。

而基于知识库的问答产品，ChatPDF的发布，也过去很多个月了。

随着越来越多人的接触到AI，
基于ChatGPT和私有数据，
搭建专属知识库的诉求越来越强。

毕竟，这玩意，可不是玩玩而已，是真的生产力啊。

比如
智能AI客服，
7*24小时在线沟通，百问百答，没任何脾气，可同时服务数千客户咨询；

比如
企业内部知识库，大家都做了那么多文档那么多SOP对吧，看那么多文件，脑袋都大了，这下好了，一句话全部解决。

比如你的搭建你的数字分身，学习、咨询一站式服务；

当然，还能搞垂直行业的AI咨询师，比如律师、比如金融等等。

三头六臂，直接起飞。

话不多说，今天带大家搭自己的知识库，用的项目是Dify。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpZibcpLP6ib0oicx45nPB7OEqJCHBnSoTaVtDKJwZcbwkEYWp5iaG409O0EGXb88L0hgKYHAkSfKTvMg/640?wx_fmt=png)

首先要理解一下搭知识库的基本原理。

知识库并不是将几百页的文档全灌给了GPT，而是将文档全部转成向量，存到向量数据库中，当用户发起提问时，就将这个问题的向量去向量数据库里查，找到最相近的文本，给它取出来，并
嵌入给GPT，让GPT根据这段取出来的文字进行回答。

这涉及到了很多知识，比如你要用API接入，你要做文本分割，你要做向量库，你要做嵌入等等...

你不会代码的话，直接就可以回家玩泥巴了。。。

而现在，Dify横空出世，无需代码，无需那些乱七八糟的知识，真正的实现，有手就行。

Dify 是一个易用的 LLMOps 平台，旨在让更多人可以创建可持续运营的原生 AI 应用。Dify 提供多种类型应用的可视化编排，应用可开箱即用，也能以“后端即服务”的 API 提供服务。

网址在此：https://cloud.dify.ai/

一进来是一个非常简单的登录页面，用Google登录就好。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpZibcpLP6ib0oicx45nPB7OEqtGqBibl5O1zZBtAibgvKntvicic1GibTCElJUSPHribhCMXfkQNIIncLvvhg/640?wx_fmt=png)

然后你会发现，你现在没有任何应用，是空空如也的状态。我们点击左上角，创建应用。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpZibcpLP6ib0oicx45nPB7OEqYxp5HMb7Q4EicQsAGEPYtUsewsffQMhxm4JlmWCxqI0AaibPsU6ias3Ew/640?wx_fmt=png)

在弹出的框中，选择对话型应用，毕竟我们是要做一个对话知识库嘛。然后名字按照真实场景随便填。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpZibcpLP6ib0oicx45nPB7OEqibWD40TjuyibEyq6FXMuK4zkpictKKWvWhlg66FeDSjorltIyTBiahGGibw/640?wx_fmt=png)

进入到一个数据统计页面后，说明我们的应用已经创建完成了，是不是很迅速？但是不急，我们还需要做两步操作，输入我们的OpenAI的Key，再上传我们的数据集。

我们先点头像右上角，点击设置。在弹窗里找到模型供应商，把OpenAI这块的Key，改成自己的账号的Key。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpZibcpLP6ib0oicx45nPB7OEqv7PbpYfXCgsQjVLq6l6pDbJFk1dWnEgPkHyoC1IBVh2DzQSsJKY0Xw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpZibcpLP6ib0oicx45nPB7OEqWz8jxHxiceRCjEDjiafPxKLmxNt4ryVI6WyS8xUsnPV6OR1gmSEdZADA/640?wx_fmt=png)

然后，我们点击数据集这个tab。再创建一个自己的数据集。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpZibcpLP6ib0oicx45nPB7OEqtcxmPToQEzydd1f7Cs9TdUfX8tQQNLib0pK2uA1ic9wktZTXn6KmLC0A/640?wx_fmt=png)

目前Dify的数据集只支持文本上传，已支持TXT，HTML，Markdown，PDF，XLSX。对本地的文档支持的很全面了。
你要是有多个文件，就一个一个传。

我随便弄了一个文档传上去了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpZibcpLP6ib0oicx45nPB7OEqmTxiaIXjdFibv9asftxh4zWZgwZKGGiap7jo8tNtJWwFbUv6hwfMpqoOQ/640?wx_fmt=png)

然后这个分段与清洗的设置页面，如果你不太懂文本切割，你就无脑选自动和高质量就行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpZibcpLP6ib0oicx45nPB7OEqrKeENFAeTwxCYPCJ83gbU1Dbia68JwibS2PeGegkw9wSdBXAMr16NU3A/640?wx_fmt=png)

然后我们保存并处理，很快就好啦。

处理完成之后，我们回到刚才所创建的应用页面。点击提示词编排。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpZibcpLP6ib0oicx45nPB7OEqXH3aeqIlLgusZmbXHAW5Hew6HKLpBg2vzS6dv6gkpsVAiaQyibibRGt0g/640?wx_fmt=png)

对话前的预设Prompt我就随便写了两句，大家可以根据自己的实际情况去写，比如智能客服跟法律顾问的Prompt肯定是不一样的。

在上下文关联那，把自己的数据集给添加进去。

我们点击发布！
大功告成！

回到概览页，我们就可以把这个链接分享给朋友，或者懂代码的话，也可以直接接这个API。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpZibcpLP6ib0oicx45nPB7OEqPibq0llEpHJX00llOL07vtHIe44ADcNYTP775QhbCbIibTF65WRUbQCw/640?wx_fmt=png)

我们打开网页，来问一下我上传的文档内容来试试看。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpZibcpLP6ib0oicx45nPB7OEqR9JTQ8xS5QrLIcClp5Y8OfWS8uXic1WH8L63lcE0mXctXIWyvzZxkDg/640?wx_fmt=png)

当然，
Dify的功能还不止于此。知识库只是冰山一角。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpZibcpLP6ib0oicx45nPB7OEqy4InCYAvbBEYdtGicThopicXkapHAwuyibeBDtrjFDiaMdcsiabYH9sVGGQ/640?wx_fmt=png)

大家对他们还感兴趣的话，以后可以慢慢写。

以上，

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
