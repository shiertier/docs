---
title: "AI春晚OpenAI开发者大会一文汇总 - 迈向通用AGI的第一步"
发布日期: 2023-11-07
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647660224&idx=1&sn=dbb602d0883edb502e36e3baeb590414&chksm=f17c877e35341bf7b8a644e493959107160b2964e2893cad065504626d49a2ebc7efb19be815"
---

## 摘要

**1) 一句话总结**
2023年首届OpenAI开发者大会推出了支持128k上下文且价格更低的GPT-4 Turbo模型、Assistants API以及零代码自定义应用GPTs，全面升级了开发者生态与ChatGPT用户体验。

**2) 核心要点**
*   **用户与生态数据**：OpenAI目前拥有约200万开发者，近1亿周活跃用户，92%的财富500强企业已使用GPT改善工作流。
*   **GPT-4 Turbo发布**：支持128k上下文窗口（约300页文档），知识库更新至2023年4月；API输入价格降至$0.01/1k tokens（便宜3倍），输出价格降至$0.03/1k tokens（便宜2倍）。
*   **开发者功能增强**：支持一次性调用多个函数；新增JSON输出模式（`response_format`）以生成语法正确的JSON对象；新增`seed`参数以实现可重现的输出结果。
*   **模型定制与微调**：开放GPT-4微调功能，推出“自定义模型（Custom models）”计划，允许特定企业深度参与训练专属的领域模型。
*   **GPT-3.5升级与隐私承诺**：GPT-3.5 Turbo默认支持16K上下文并全面降价；OpenAI明确承诺不会使用API传入的数据进行模型训练，以保护开发者并避免版权纠纷。
*   **API能力扩展**：全面开放多模态、DALL·E 3（图像生成）和TTS（文本转语音）API。
*   **Assistants API**：推出助力开发者构建Agent的新API，内置代码解释器（Code Interpreter）、知识库检索（Retrieval）和函数调用（Function calling）功能。
*   **开源模型更新**：开源语音转文字模型Whisper v3，以及用于替代Stable Diffusion VAE的图像解码器Consistency Decoder。
*   **ChatGPT体验升级**：整合AI Tools，用户在单一窗口即可让模型自主调用代码解释器、联网和DALL·E 3等工具；推出零代码自定义应用“GPTs”，并计划上线GPT Store供创作者分享与变现。

**3) 风险/缺口**
*   **行业竞争风险**：OpenAI官方能力的全面升级（如GPTs和Assistants API的推出）形成了巨大的行业杠杆，文中明确指出这可能导致无数中小AI创业公司面临消亡的风险。

## 正文

在
2023年这个AI爆发的
元年，OpenAI作为这轮AI浪潮真正的奠基者，任何动作都一定是万众瞩目的。

11月7号凌晨2点，有史以来第一次的OpenAI开发者大会，更被戏称为AI春晚，在奥特曼预告了好几个月之后，终于正式开始了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURooPm74zoFAGVQsRx4pOfic7GhdrBCFtqg5pZLIdtDm8OyiaWMYeID1CVmRLSRWC49u4pmdOHCLibfrg/640?wx_fmt=png&from=appmsg)

干货和新消息非常多，核心是
GPT4-
Turb
o
模型和Agents，我分成了
三趴：

新的GPT4-Turbo模型，功能更强大、更便宜、支持token更长。
开放更多的API，包括视觉、图像创建（DALL·E 3） 和文本转语音
（TTS）
，
新出了
Assistants API
，
可以帮助开发者构建在自己的应用程序中构建Agent。
ChatGPT的更新，官宣AI Tools，发布用户可自定义的GPTs。

ChatGPT用户数

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURooPm74zoFAGVQsRx4pOfic7BHHHEvpytaxChj7OASledbPvbNrJyW7ribUmOVHC6r0z7vu73wAXrQQ/640?wx_fmt=png)

先恭喜OpenAI，目前有大概200万开发者，在500强中有92%用了GPT改善工作流，周活有将近1亿用户。

GPT-4 Turbo

1.GPT-4 Turbo 支持 128k 的上下文窗口，大概相当于300多页的文档。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURooPm74zoFAGVQsRx4pOfic7gYQfYcnCgrc3PaTSpnBPVaMYsOUTWvhg5icLlqXz6fX7aM6DxO7Cecw/640?wx_fmt=png)

2.
函数调用
更强了，
可以一次性调
用多个函数，
准确性也更高。
还有
新的输出json模式，在这个模式下，
新的API参数response_format使模型能够约束模型输出，以生成语法正确的 JSON 对象。还有一个新的seed参数，能
使模型在大多数时间返回一致的完成来实现可重现的输出。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURooPm74zoFAGVQsRx4pOfic7ibFEOKib3fcZbmCzLXuPDzN3tVOEfEYkZvIicf1UrAS9k9KLPQ8UDzXicg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURooPm74zoFAGVQsRx4pOfic7IsOI5XI0gdJ0aHtnwMwyMKaV0tCJxqxtfFUGjyABianPJ05rXwyEaIA/640?wx_fmt=png&from=appmsg)

3.
知
识库更新到了2023年4月。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURooPm74zoFAGVQsRx4pOfic78FWgkA0KDDssB9CUibLPpTa9NH2uibdcPKpIAwYBXonX4v6NjoUHdFaQ/640?wx_fmt=png)

4.GPT4开放微调，并且OpenAI还开放了一个叫做
Custom models(自定义模型）的功能，
让选定的公司能跟 OpenAI 合作，针对他们的特定领域训练定制 GPT-4。支持修改模型训练过程的每个步骤，并且训练好后的模型是公司专属。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURooPm74zoFAGVQsRx4pOfic7K9lBPz95EE41grlbqqZlicXg6AOT16MOorrTq3GzLBhEfNxcjibGO4rg/640?wx_fmt=png)

5.GPT4的API价格更便宜了，
GPT-4 Turbo 输入代币比 GPT-4 便宜 3 倍，为 0.01 美元，输出代币便宜 2 倍，为 0.03 美元。

顺带手把GPT-3.5 Turbo也给升级了，
新版本GPT-3.5 Turbo默认支持16K了
，版本的的价格也给砍了。

GPT-3.5 Turbo 4K 模型输入token减少 4 倍至 0.003 美元，输出token便宜 2.7 倍，至 0.006 美元。
GPT-3.5 Turbo
16K版本输入
便宜 3 倍，为 0.001 美元，输出便宜 2 倍，为 0.002 美元。

并且OpenAI承诺不会拿API过来的数据进行训练，以保护开发者，避免版权纠纷。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURooPm74zoFAGVQsRx4pOfic7iaH3POxeSBE3XXKBZfzo8hiaSfD7XYgFgu8wGF4EbNtCHTBakKAVUMJw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURooPm74zoFAGVQsRx4pOfic7Lc9UfasITU0mhOJiaGkGBSeibRrxwrqD10lLkx2h4N1oqjeDA1UMHW1A/640?wx_fmt=png)

开放API

1.多模态、
Dalle3、TTS都开放API，后面可以接入了
。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURooPm74zoFAGVQsRx4pOfic7zhAa2jMHwY4fHwqXpiaEeaeyib8tn1lkv70zrwQxpTLibAibjYrWjYToRQ/640?wx_fmt=png)

2.新的Assistants API，可以帮助开发者构建在自己的应用程序中构建Agent，Assistants API 包含Code Interpreter（代码解释器）、Retrieval（知识库）、Function calling（函数调用）。

具体的API文档可以看OpenAI的官方文档：

https://platform.openai.com/docs/assistants/overview

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURooPm74zoFAGVQsRx4pOfic7q8iaSJCu7cUQvU8jKhTNZQwNL3mu4FqS3J99ZgrY0hRlXj7zNmf8CEA/640?wx_fmt=png)

价格这块，
Code interpreter
单次0.003美元，
Retrieval 是
0.20 美元/GB/助理/天，这些在11月17号前免费，17号后开始收费。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURooPm74zoFAGVQsRx4pOfic7NA1g8INeIsOGp9VQMAqemEEicCiczEsRYcbdLiazbJSddSMKHMamO17Dw/640?wx_fmt=png)

最后演示的时候挺搞笑的，他们现场做了一个，然后给在座的所有人都发了500美元的API额度。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURooPm74zoFAGVQsRx4pOfic7NianZJuUibYWRFgUNEoLicmV1vuia03uIfVrAw9fcxDmSHz56zyicF8rV9Q/640?wx_fmt=png)

3.开源了Whisper v3 和 Consistency Decoder。Whisper是大名鼎鼎的语音转文字的标杆，这次开源了V3版本，马上还要开放Whisper v3的API。Consistency Decoder是Stable Diffusion VAE的替代品，该解码器改进了与 Stable Diffusion 1.0+ VAE 兼容的所有图像，在文本、面部等方面有显着改进。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURooPm74zoFAGVQsRx4pOfic7ElKOU8icvVTOvqx7SzVLa4myu7I8LQ5osVNkyCDeSmHFTicF5t8IOZgQ/640?wx_fmt=png)

ChatGPT相关

1.正式发布AI Tools，GPT-4用户不用再点模型的各种下拉菜单了，以后只有一个窗口，模型可以自主调用代码解释器、联网工具、Dalle3等等，走上了通用AGI的第一步。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURooPm74zoFAGVQsRx4pOfic7EuNMcEXBHDhOUoD57NfoFPMHic8RJrDAPNmrXOQEcssiczIcmmxd8qGw/640?wx_fmt=png)

2.GPTs。ChatGPT 的自定义版本，用户为他的特定任务创建定制版本的 ChatGPT ，且无需编写任何代码行。也就是说，没有任何开发经验的用户，都可以在ChatGPT创作自己的Agents应用。

跟
Assistants API不同的是，
Assistants API是将GPT的Agent能力集成在他自己的应用程序上，而GPTs是活在ChatGPT上。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURooPm74zoFAGVQsRx4pOfic78FxwUKTUgibC23ygkfRkR2XdDZNBBa6n40RR5mgyHibcTAljHC8wicHEw/640?wx_fmt=png)

而且用户做完的GPTs，还可以跟朋友分享，本月晚些时候，OpenAI将推出 GPT 商店，甚至还可以根据使用你创作的 GPT 的人数来赚钱。这个影响挺深远的，这就是AI时代的真正的GPTs store。生态会真正的起来。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURooPm74zoFAGVQsRx4pOfic7Ecg0KibHAyibaFB7Z1miao847Xic0iavBJ03NagMT4f37w90qBLicVcfXn4Q/640?wx_fmt=png)

这个GPTs自定义性非常强，用户可以将GPT 连接到 API 以执行任务，例如管理数据库、电子邮件、发短信等等。

这里有一个演示视频可以看一下：

最后

这张图应该能说明很多东西了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURooPm74zoFAGVQsRx4pOfic7eSicV2IPaAvgibTm7FSnrBBQCp7ecrblcGFkAHymUhw9Tf5OKzlLwn4Q/640?wx_fmt=png)

OpenAI在迈向通用AGI的路上，正式开始了第一步，推出了GPTs、推出了
A
ssistants API，还发布新版本的GPT-4 Turbo，再把价格巨幅降低。

我一边看到的是AI行业的狂欢，这是AI春晚也好不为过。

而另一方面，看到的是无数中小AI创业公司的消亡。

AI实在是一个巨大的杠杆。

今晚的OpenAI仿佛在重复着《三体》中的一句话：

“
我消灭你，与你无关”

。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
