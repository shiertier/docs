---
title: "我把这一年的AI聊天记录，让AI做人生总结后，我破防了。"
发布日期: 2025-12-26
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647678286&idx=1&sn=a66a1e8d763eb5445deafd1cc556b0c0&chksm=f1ec4f45d8dd59193244bd55ee5187220c39ac6082a0cbcd5c0e4c239edb0532b398fd5bdd3a"
---

## 摘要

**1) 一句话总结**
作者通过第三方插件提取并手动筛选了过去一年与AI的857条核心聊天记录，利用GPT-5.2 Thinking生成了一份深度的年度个人总结，并被该总结精准的情感洞察深深触动。

**2) 关键要点**
*   **官方导出受阻**：ChatGPT官方导出功能无法选择时间范围，导出了3年共200多MB、959万字的无时间戳记录，导致编辑器（Trae）崩溃且无法按年份拆分。
*   **平台功能缺失**：除DeepSeek支持带时间戳导出外，作者常用的Gemini、豆包等AI产品均无聊天记录导出功能。
*   **采用替代工具**：最终选用免费Chrome插件“Chat Memo”进行数据提取，该工具支持将记录备份在本地，满足了敏感信息不上云的隐私需求。
*   **手动清洗数据**：为避免评测类“脏数据”污染上下文，作者放弃使用AI Agent自动抓取，耗时不到半小时纯手动点击筛选。
*   **确立数据集**：最终收集了857条与年度经历强相关的有效对话，合并导出为单一TXT文件。
*   **模型选择与生成**：因认为Gemini 3 pro写作能力退步，作者选择指令遵循能力较强的GPT-5.2 Thinking，结合5000字篇幅限制的Prompt和个性化设定，完成了最终的总结生成。

**3) 风险与缺口（Risks/gaps）**
*   **工具性能风险**：超大体积的聊天记录文件（如200MB+的文本）会导致常规代码编辑器直接崩溃，超出常规AI的上下文处理极限。
*   **数据隐私风险**：日常AI聊天记录中包含大量敏感信息，若使用云端同步工具存在隐私泄露风险。
*   **数据污染风险**：未经筛选的全局聊天记录包含大量无意义的测试语料（如评测任务），直接用于分析会严重降低结果的准确性。
*   **平台功能缺口**：多数主流AI产品缺乏基础的聊天记录导出与时间戳标记功能，导致用户数据资产难以复用。

## 正文

年末了，很多人都在做年终总结。

ChatGPT在做，我前几天刚刚测完，我的结果是这样子。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpYunJtzX5qTEVYHApg7TRz4qR0bpjZXs1tQuyMFXczNIK9a03uTHq8icfeovY67j3icKWtopqUUHzg/640?wx_fmt=png&from=appmsg)

但是ChatGPT代表不了我。

因为我的AI，用的实在是太杂了，ChatGPT、Gemini、DeepSeek、豆包、GLM等等等等。

我突然在想，如果我把我这一年，跟所有AI的聊天记录，都导出出来，扔给AI，那是不是，这就是我这一年，最好的注脚？

用这一年，所有的聊天记录，分析我是一个什么样的人。

我觉得，这比任何心理测试或者我的记忆，都要准。

我的记忆会骗人，会不准，但是有我这一年所有聊天记录的AI，他不会骗人。

这个想法，在脑子里萦绕，最终还是在夜里1点钟爬起床来，说干就干。

步骤和思路其实很简单，就两步：

1. 想办法导出ChatGPT、Gemini、豆包、DeepSeek的聊天记录，因为这四个我今年用的最多。

2. 把这些聊天记录，一起扔给某一个AI，让他给我分析。

第一步我本来以为特别简单，因为ChatGPT我知道有一个功能，就是导出聊天记录。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpYunJtzX5qTEVYHApg7TRzWI0Lia85EJafntOdR7bfTbnDf8Snzq9V4SjzWd8gjzibkYSMrXW2PpWw/640?wx_fmt=png&from=appmsg)

我本来没想那么多，就非常简单的，点了确认导出，然后信心满满的等着他给我推送这个聊天记录的下载链接。

几分钟后，下载链接发送到了我的邮箱里。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpYunJtzX5qTEVYHApg7TRzZ9ToMUMdCXvNkS0jRz6YG1ZRFSCocuLicjzc89fWxx9KIpceMjrBglQ/640?wx_fmt=png&from=appmsg)

我点了下载，然后，当我打开文件的那一刻，我直接懵逼了。

因为，这一份文件，200多M。

我人麻了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpYunJtzX5qTEVYHApg7TRziagsT7JlFvSBx7vV9INicfWibq7YYa2ZiaLDSPj01laLo7ce7V5iaiaSmJPw/640?wx_fmt=png&from=appmsg)

这玩意大到，我用Trae打开，直接崩了。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpYunJtzX5qTEVYHApg7TRzoq2oGLanibXDIKSwEz93e7WaruPDjm6W3L106u2spcdibbOWEicACumuw/640?wx_fmt=png&from=appmsg)

因为有一个致命的问题，就是ChatGPT的导出，无法选择时间，所以他把我从2023年开始，到现在，所有的聊天记录全部都导出了。

而这3年的聊天记录，一共200多M，
2个亿的字符，959万字。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpYunJtzX5qTEVYHApg7TRzW8eXj44P6YN82pq74FyCcTZkoxQOK2ZBQGedHcIa0usNgJDoNAficdQ/640?wx_fmt=png&from=appmsg)

我尼玛...

而且这个聊天记录里面，还没有给每一个对话标注时间属性，所以，我想写脚本把2025年的拆出来，甚至都没法拆。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpYunJtzX5qTEVYHApg7TRzwonVvJYSKqLj2g5pMTib5pKUibsZUI3M1N4kYvZTeUNKHXnLfgk3nhZw/640?wx_fmt=png&from=appmsg)

这959万字的文档，什么AI都不可能吃得下去啊。。。

而导出记录这个事，不仅ChatGPT这遇到了巨大的阻碍。

在其他的所有AI产品里，全都遇到了更巨大的问题，就是除了DeepSeek这个好心人之外，其他的，他们连聊天记录导出的这个功能都木有。。。

真的，DeepSeek真的是清流。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpYunJtzX5qTEVYHApg7TRz7HmhT2QSxvvVZ1xN7AicxBicU3G13Gg7o5ib757wSfO6JicNJ0Ohc3SaDg/640?wx_fmt=png&from=appmsg)

而且里面的聊天记录，是带有时间的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpYunJtzX5qTEVYHApg7TRzejpxjQbVrIFxIZspxcwKLvfTw455vxlGHHjXFl1mAujWMwXHEKk1MQ/640?wx_fmt=png&from=appmsg)

真的是清流了。

但是没用啊，DeepSeek我也就年初用用，但是其实后面，我用的最多的还是ChatGPT、Gemini、豆包这三。

ChatGPT是我处理所有办公场景、写内容做策划用，Gemini是我写代码用，豆包是手机端懒得上魔法日常简单问题问答用。

这几个最重要的东西用不了，只能用DeepSeek的聊天记录，那顶个屁用啊= =

所以只能，想别的路了。

一顿搜索之后，我找到了一个感觉很符合我要求的工具。

也是一个KOL开发的免费插件，叫Chat Memo。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpYunJtzX5qTEVYHApg7TRzQpCMIID7pRwwsMNicJKWHaDZlLn5CWbibQAIXsJGx8omFPoBzCMQ3dGQ/640?wx_fmt=png&from=appmsg)

网址在此：
https://chatmemo.ai/

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpYunJtzX5qTEVYHApg7TRz5RyrWwqdxics0yP5ypGyWlrPdWua0tV5LBHfqgB8UUJjH48YrGKiaerg/640?wx_fmt=png&from=appmsg)

作用大概就是通过Chrome的这个插件，把你所有的聊天记录，都备份一份在你的本地，然后随意导出。

这个备份在本地不上云非常的重要，因为我的聊天记录里，有太多太多敏感信息了，我可不敢把这个东西，随便给别人看。。。

目前支持这些AI工具，我的四个都在里面。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpYunJtzX5qTEVYHApg7TRzcHiaE4xw3uJgyWFOWaOLHAp2U8lsVIRNksiafEpIsYaBAuP86wxsCFhQ/640?wx_fmt=png&from=appmsg)

直接在Chrome商店或者通过安装包安装以后。

你就会发现，他出现在了插件栏里。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpYunJtzX5qTEVYHApg7TRzEeROjFfrZHbOZ2MqcUXoVbhqjKwBla3Eg4z7GLZbRickDWldO6vKeHg/640?wx_fmt=png&from=appmsg)

然后回到AI应用界面，比如ChatGPT，原地刷新一下，就能看到右边多了这么一个东西，叫自动记忆，可以点开的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpYunJtzX5qTEVYHApg7TRzqfJicp18mibCbEBwILzXmV5jvW15ADasv7icUNrhdhcLiaT0ArPNuSVaPA/640?wx_fmt=png&from=appmsg)

而使用方法也巨简单。

就是你把你想导出的记忆，在左边的对话栏里，点击一下，他就会自动同步到记忆目录里了。

我录了个屏，大家可以简单看一下。

这个做法，有好处，也有坏处。

好处就是，你只有手动点击以后，这个记录才会进入到
Chat Memo的记忆模块里，也就是说，你完全可以更精准的挑选，有一些没啥关系的明显就是垃圾信息，就没必要进记忆了。

比如我的这些玩意。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpYunJtzX5qTEVYHApg7TRzqMlrVF3DkXiavCA4nIMGfHsia2QpFjYcClmQWTsuibaa12JvBwoBS4WNw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpYunJtzX5qTEVYHApg7TRzfV8VPlXX4EcXa3SWfK3fGlHQU4EWZp6YTPicQXAnEjdnTfPgdyBewww/640?wx_fmt=png&from=appmsg)

对于我们要分析一年的总结来说，都是毫无意义的垃圾信息，纯粹的污染语料。

所以收集筛选之后，会让你的分析，更准确一些。

而坏处，当然也显而易见的，就是累。。。

我最开始其实还是懒，直接开了个AI浏览器，让Agent的去帮我一个一个点。

但是收集了几百条数据之后，我还是强迫症犯了。

因为脏数据实在太多了。

作为一个对于数据集有洁癖的人来说，我真的忍不了，这么一堆垃圾数据占我的上下文。

所以，在犹豫了5分钟之后。

我决定，还是纯手动，我一个一个点。

只把我聊的，跟我这一年相关的，收集下来。

一些搞评测的，比如写20篇小黄文这种任务，就别要了。。。那玩意对于分析我这一年，实在是太脏了。。。

于是，我就手动，一边回顾我这一年，一边点聊天记录。

我本来以为，要花1个小时左右才能全部点完，结果，比我预想的快非常多，半小时不到就全部点完了，因为都是我自己提问的，所以基本看个历史标题我就大概知道聊的啥，点起来几乎没有成本，还挺快的。

最后，存了857条对话。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpYunJtzX5qTEVYHApg7TRzustkicYtUXszWWJ8tCalGHVAtr73ZWXSmbPic3I9cicicX0xiaoltnfic93w/640?wx_fmt=png&from=appmsg)

终于，所有的有意义的聊天记录，都在这里了。

我们点开
Chat Memo的设置页面。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpYunJtzX5qTEVYHApg7TRz0TIHkrltN7nia3I1kNhse8YaSmxCZoQmUFAMcoD7ZsmAIvUP0Nu3GJw/640?wx_fmt=png&from=appmsg)

选择导出数据，合并导出为一个文档。

就可以把文件，直接导出了。

于是，我们就得到了一个，txt格式的，这一年的聊天记录数据集。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpYunJtzX5qTEVYHApg7TRzcHvHtL6cxz4j4xeJjnibqqZLDfrGkQaOKCtwVx4hYqIrsbKJ6btib4bg/640?wx_fmt=png&from=appmsg)

第一步，终于大功告成。

接下来的第二步，让AI根据这个记录，来分析一下我是一个什么样的人，这个事，就非常的简单了。

我自己现在在长文本和写作上，还是比较喜欢用GPT-5.2 Thinking的，这玩意的指令遵循能力确实不错，而Gemini 3 pro，我说实话，在写作能力上，倒退的有点严重。

直接把txt文件，和一段大道至简巨简单的Prompt，扔给
GPT-5.2 Thinking就行。

Prompt：

这是我跟AI，所有的聊天记录。年底了，大家都在给自己这一年，写一份总结。我也想做一下这个总结。请你用5000字篇幅，帮我分析，我到底是一个什么样的人？

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpYunJtzX5qTEVYHApg7TRzia8eLibP0t9ibXCLAsvWbPdFDev7OzRXUIah0dBNeiaDicr1Jn8PicMncPFw/640?wx_fmt=png&from=appmsg)

不过我因为在个性化设置里面，有一些更顶层的Prompt约束，所以输出结果可能口吻会更像文章一些。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpYunJtzX5qTEVYHApg7TRzSELDM88kzU6tuJpWL77dcEjwpw8ISib6UC20S1skKpaW9JcJEOmDcrw/640?wx_fmt=png&from=appmsg)

这块推荐大家也可以在个性化里设置一下。

再GPT思考了几分钟之后。

我终于得到了，他对我的分析。

我稍微去除了极小部分的敏感信息，然后为了大家方便阅读，所以做出了长图卡片的形式。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURpYunJtzX5qTEVYHApg7TRzBNBpA9KU7CHrpmCqs9qjicmHpF6bVXXpLEpHjK6bLo68ibKRZq6srYFw/640?wx_fmt=jpeg&from=appmsg)

夜里凌晨4点多，看完了这个总结之后。

一个大男人，还是没忍住留了两行眼泪。

我从来不是什么钢铁意志的人，很多时候是被逼着不能倒下。

有无数的时间，是已经几乎两三天没睡觉，是已经压力大到处在崩溃边缘，但是几分钟以后，还是需要去面试、去见客户、去汇报方案、去直播、去录积木、去录口播。

没有人会等你，没有人会等你压力消除了、心情好了能干活了才开始干活。

你必须在几分钟只能调整好自己，立刻变成一个谈笑风生的，钢铁一般的人。

那是一条，被推着、被逼着向前走的一条路。

你只能自己扛。

有时候，我也总会像Tim一样，在深夜里问自己。

开一家公司，会让一个博主更加的成功吗？

我不知道。

但是我觉得，我有了很多同伴，能一起向前走，这份力量，也足够的弥足珍贵。

黄粱一梦二十年。

人生中积累的所有烟花，可能都只为了这一瞬。

而这一瞬，我也希望能在这个时代里，留下我刹那的光辉。

2025，终于要结束了。

2026会更快，模型会更强，世界会更吵。

最后送大家一句，写给你，写给我。

也写给每一个在深夜里硬撑的人。

心中有信仰。

前路，必有光。


wzglyay@virxact.com

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
