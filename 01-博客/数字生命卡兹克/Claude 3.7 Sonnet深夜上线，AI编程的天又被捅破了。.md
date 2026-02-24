---
title: "Claude 3.7 Sonnet深夜上线，AI编程的天又被捅破了。"
发布日期: 2025-02-25
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647668927&idx=1&sn=efe25f512e462d9a32626c75bbc950eb&chksm=f12363e8ce2d0102ce9d638bd2c8ca770b88c6c461720b2fe6b7237e0cd62efc11a904c56387"
---

## 摘要

**1) 一句话总结**
Anthropic正式发布了首个混合推理模型Claude 3.7 Sonnet以及官方AI编程工具Claude Code，在代码编写、数学逻辑和Agent（智能体）能力上实现了大幅跃升。

**2) 核心要点**
*   **混合推理架构**：Claude 3.7 Sonnet是Claude家族首个推理模型，提供“普通模式”（快速响应）和“扩展模式”（思维链深度推理）供用户切换使用。
*   **编程与理科能力突破**：在自主编码、遵循指令、数学和科学等复杂分析场景下表现优异，编程能力显著超越现有竞品（如o1）。
*   **强大的Agent能力**：在《宝可梦 红》游戏基准测试中，Claude 3.7 Sonnet成功挑战了三个道馆（前代3.0版本未能走出新手村）。
*   **API定价与规格**：输入价格为3美元/百万Token，输出为15美元/百万Token，最高支持128k上下文输出。
*   **成本与推理控制**：开发者可通过提示词缓存（节省高达90%）和批处理（节省50%）降低成本；同时支持设置“思维预算”，精确控制模型思考耗时。
*   **发布Claude Code**：推出基于命令行的官方AI编程工具，支持搜索阅读代码、编辑文件、运行测试及推送GitHub，目前开放限量预览。

**3) 风险与不足**
*   **交互体验割裂**：无法在同一个对话窗口内无缝切换普通模式和推理模式，切换模式必须开启新对话（New chat）。
*   **价格劣势**：虽然API定价优于OpenAI，但与DeepSeek等主打低价的模型相比仍有较大差距。
*   **账号封禁风险**：原文明确提及Claude平台存在封号现象。
*   **工具使用门槛**：Claude Code偏向命令行交互，对于无代码知识或刚接触AI编程的新手不够友好（作者建议新手使用Trae或Cursor）。

## 正文

AI这个行业真的卷生卷死，凌晨2点半，刚想早睡一点点，9点起来蹲DeepSeek的开源。

结果，Claude直接玩偷袭了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo6vK0f00YTZPxCQiaUkIfCT8ISc2MoHVSt2JcLgBcrpByYmU1XCjaOhxDnOmojic0yicB4PYlIIhudg/640?wx_fmt=png&from=appmsg)

Claude 3.7 Sonnet来了，也是Claude家族，第一个能推理的模型。

还掏出了他们自己的AI编程工具。

一个一个说吧。。。我真的很想睡觉啊。。。

一. Claude 3.7 Sonnet

Claude 3.7 Sonnet跟市面上的其他推理模型有点不一样，也印证了之前TheInformation的爆料，这一次的Claude 3.7
Sonnet，是一个混合推理模型。

简单的说，就是Claude 3.7 Sonnet即是一个普通的大模型，也是一个推理模型，你可以理解为把DeepSeek V3和R1直接揉在了一起。

切换模式使用下拉菜单去控制。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo6vK0f00YTZPxCQiaUkIfCTic7TMf0WCG2dSj2Av4SX8bYI3BKsrW8wNIpbIEKicM6d6u3VLCZ4M7ow/640?wx_fmt=png&from=appmsg)

分为普通模式和扩展（其实就是推理）模式。

普通模式下，它就是个升级版 Claude 3.5 Sonnet，回答迅速，跟以前一样流畅，牛逼了一些，没啥大区别。

如果你想让它认真思考，比如一些数学、物理、编程、复杂分析场景，就可以切换到扩展模式，这时它就会跟R1和o1一样，开始思维链展开，自己推理。

比如说我就用普通模式去问，会发现跟之前差不多。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo6vK0f00YTZPxCQiaUkIfCTEQJJ98SyaXcQiczpOrSavn1LbaFoicVma6CvjZlPUqtddtWzCIJSJ1wA/640?wx_fmt=png&from=appmsg)

但是切换到扩展模式，他就会开始思考了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo6vK0f00YTZPxCQiaUkIfCTrN11iapATS0Vr3k0PicW0Lk4rsxWAJkMicJJQqqFKq2Y9pM4lM4NhbgVg/640?wx_fmt=png&from=appmsg)

整体坦率的讲，在交互上跟其他的推理模型都一个样。

能力还是那些老能力，在
数学、物理、遵循指令、编码以及许多其他任务上的表现上会更强。

然后我还发现一个非常der比的事情，就是他都说自己是混合模型了，我以为我可以有无缝的体验，在一个对话窗口中可以实现普通模型和扩展模型来回切换的体验，甚至有一些黑科技加持。

结果。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo6vK0f00YTZPxCQiaUkIfCTmibRrCc9Ao3X5R5WZLRrQ8HgTwj91sWVHHmKtTA143t0rVOUgL9XMgg/640?wx_fmt=png&from=appmsg)

这个New chat看到没，一点就切换到一个新窗口了。。。

不是，DeepSeek都能在一个对话窗口上进行R1和V3的随时切换呢，你这是干啥啊。。。

但是有一说一，Claude的文笔是真的好啊，在推理能力的加持下，感觉写出来的内容，味道更正，更真人了，甚至，剧情的逻辑都更顺了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo6vK0f00YTZPxCQiaUkIfCTKHusCeaevOsBUKK0zW9IDXYa5Ic2ibeJpBu5YxDkibbN6eshod9mfSUA/640?wx_fmt=png&from=appmsg)

不过，这些都不重要，Claude最牛逼的东西，还是它的编程。

非推理模型加持下的Claude 3.5，就能跟o1打的有来有回，甚至至今还是cursor他们认为最优的模型。

而Claude 3.7，直接就是属于断档式把其他人按在地上摩擦了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo6vK0f00YTZPxCQiaUkIfCTfdibKhYAibYbXwfQictpia07HaM3Qh4xM3vkiabPicFBfmO3WeGNQCiaG1jVQ/640?wx_fmt=png&from=appmsg)

在遵循指令、一般推理、多模态能力和自主编码方面的表现都很牛逼，特别是加了推理之后，在数学和科学方面也是一飞冲天。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo6vK0f00YTZPxCQiaUkIfCTJdLwCpuZFqMvS8gIhLh6YdXblLzaKvZtgsniaxeLBeflfxaUvOeXOMA/640?wx_fmt=png&from=appmsg)

然后有一个是我觉得最骚的基准，就是他们让Claude 3.7 Sonnet，玩宝可梦红。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo6vK0f00YTZPxCQiaUkIfCTcskiaFZpqZy96Vib1pib8x6ko9xjBR8aHmK7UPnG3LwibQ8DWhibLqcrByQ/640?wx_fmt=png&from=appmsg)

一款非常老但是非常经典的游戏，整个宝可梦系列的第一世代。

他们给了Claude
配备了基本的内存、屏幕像素输入和按键操作功能，让Claude开着扩展思维去玩宝可梦，最后结果是这样的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo6vK0f00YTZPxCQiaUkIfCTctNec6zQ6cZiaeTR5WlEibMdGIb7ftFv2gzWT1t3Jq4ianeqVS0Tpo0KQ/640?wx_fmt=png&from=appmsg)

之前的版本在游戏早期就直接废了，Claude 3.0 Sonnet 甚至没能出新手村。。。

但是Claude 3.7 Sonnet的AI代理（Agent）的能力就非常强，成功挑战了三个道馆的馆主，赢了他们的徽章。

非常的有意思，可以非常直观的看出来，Claude 3.7
Sonnet在编程、代理、数学等等的能力上，几乎有了质的飞跃。

AI编程这个领域，看来又要前进一大步了。

在API的定价上，Claude 3.7 Sonnet每百万输入是3美刀，美百万输出是15美刀，最长能干到128k的输出，
通过
prompt caching
可节省高达90%的成本，通过
batch processing
可节省50%的成本，整体还是稍微良心一点的。

不过跟DeepSeek这种价格屠夫比起来，还是有不少距离，但是也比OpenAI好了。。。

主要还是DeepSeek实在太便宜了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo6vK0f00YTZPxCQiaUkIfCTB7RP9ZBFfnLjAQzttIlSiaTQQxb8WgQjictUS8hdByzr8xqo3NLbTticg/640?wx_fmt=png&from=appmsg)

在推理控制上，开发者还是比较自由的，甚至可以设置“思维预算”，精确控制Claude在一个问题上花费的时间。

整体来说，Claude 3.7 Sonnet还是非常香的。

当然，如果他不封号且格局不是那么小的话，会更好。。。

二. Claude Code

他们自己的类似于Cursor的AI编程工具。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURo6vK0f00YTZPxCQiaUkIfCTEpgMvZNmSm8mXkficrsuz21YSPxjxErfkmJte1gz7eAYmgia5grhwrNg/640?wx_fmt=webp&from=appmsg)

可以搜索和阅读代码，编辑文件，编写和运行测试，提交并推送代码到 GitHub，并使用命令行工具。

他们自己的界面，也非常的命令行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo6vK0f00YTZPxCQiaUkIfCTIvhGlwOGH5ENPxtgMZfyiaAc1DbOPeiaw3CxToBn7u2xlAyFWMOlZpTA/640?wx_fmt=png&from=appmsg)

目前开放了限量预览，有兴趣的可以去这个地方查看所有的详情：

https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo6vK0f00YTZPxCQiaUkIfCTYicnRpHYj9rOoKf8icX5wLHnvPW2NhbKOcXmuxy5ErcHv6uGOzbOwuGQ/640?wx_fmt=png&from=appmsg)

整个手册已经写的非常详细了，我就不过多赘述了。

但是对于一些刚开始我那AI编程的或者是没代码知识的，我还是无脑建议Trae或者Cursor。

三. 写在最后

AI圈的进化速度实在是太快了，前脚马斯克的Grok3地球最聪明的称号屁股还没坐热，Claude 3.7 Sonnet直接杀出来了。

而且把模型的上限，再一次拔高了一个台阶。

这就是AI的江湖啊，深刻的感觉到了连睡觉都是罪过。

早上9点还要起来蹲DeepSeek的开源。

你们就卷吧，AI公司肯定没啥事，第一个卷死的一定是AI自媒体。。。

但这就是AI时代最刺激的部分。

没得觉睡，也开心。

毕竟，每天都在见证历史。

你说呢。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
