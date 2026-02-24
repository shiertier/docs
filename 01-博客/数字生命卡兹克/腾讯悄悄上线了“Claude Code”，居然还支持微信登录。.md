---
title: "腾讯悄悄上线了“Claude Code”，居然还支持微信登录。"
发布日期: 2025-09-10
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647674948&idx=1&sn=65794d618744b81526644989a94f6ce5&chksm=f1fdff1acb8d36c75ed38bb33af3ef1d47e9f494f16a31e8c6d6b019550312eedb144d2dc36f"
---

## 摘要

**1) 一句话总结**
腾讯正式上线了支持微信登录的AI命令行编程Agent“CodeBuddy Code”，允许用户通过自然语言指令实现代码生成、依赖安装及调试的全自动化开发。

**2) 核心要点**
*   **产品定位**：一款AI CLI（命令行界面）编程Agent，对标Claude Code。
*   **核心功能**：用户在命令行输入自然语言需求，工具可自动完成从生成代码、安装依赖、运行测试到Debug的完整动作。
*   **开放状态与登录**：目前已全面开放，无需邀请码。国内版支持微信扫码登录，国际版支持Google/GitHub登录。
*   **模型支持**：国内版目前支持DeepSeek V3（后续计划接入V3.1、K2、GLM4.5），用户可通过输入 `/config` 命令快速切换默认模型。
*   **安装与运行**：基于Node.js环境，通过命令 `npm install -g @tencent-ai/codebuddy-code` 安装，输入 `codebuddy` 即可运行。
*   **实测表现**：作者在15分钟内通过单句指令，全自动成功开发了一个用于图像生成与编辑的MCP（Model Context Protocol）服务。
*   **应用场景**：结合生成的MCP，可实现本地图片免上传编辑、批量生成指定姿势图片、批量设计周边产品等复杂任务。

**3) 风险与不足**
*   **默认路径逻辑瑕疵**：在初次生成生图程序时，默认将文件保存到了程序自身的文件夹中，需要用户追加指令才能修改为指定目录。
*   **上下文与稳定性问题**：在后续尝试增加新功能（如多图参考）时出现稳定性波动，未能正确读取本地相关文件，并丢失上下文（反问用户正在使用的语言和框架）。

## 正文

昨晚，腾讯发了他们的CodeBuddy Code，正式也加入命令行编程Agent战场。

说实话，CodeBuddy这产品，真的有点玄学在身上的。

我之前就当个新闻写，写了两次，一次插件，一次IDE，两次都快10w+，尼玛。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURom5kzM2picWWDl4iafaz4HeTFps2EBQY65ibnRaYGe83gfKHXOsrRMh3ShDaw156fqFToDgxhSQtNlw/640?wx_fmt=png&from=appmsg)

给我整不会了。

然后，昨晚，他们悄悄上线了“Claude Code”，也就是CodeBuddy Code。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURom5kzM2picWWDl4iafaz4HeTCBFg2WTib6Xfpkhc6SChTsx13tmYX1JUb9iaW51PHtU2cxibrFSeZHIWg/640?wx_fmt=png&from=appmsg)

我说实话，腾讯在这个节点，发了他们的编程Agent产品，这个节奏是真的挺懂的。

我现在举双手双脚支持国产编程Agent产品，主要还是因为那个智障Anthropic。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURom5kzM2picWWDl4iafaz4HeToMHWtZwXIRCeGbtW3Mm8YWlFsLsYEzkf9u3aQAPths99FwSXQsPrGQ/640?wx_fmt=jpeg&from=appmsg)

Claude Code确实好用，但是吧，我只能说，我个人单方面制裁Claude。

真的，有些东西，还是得靠我们自己发展起来。

腾讯他们给这个产品的定位，就是AI CLI。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURom5kzM2picWWDl4iafaz4HeTH0aVyPeIk9makIrcTmr3DMCFLn7NVVo4c7iaPiczUtJmd2BR9h0nkt8Q/640?wx_fmt=png&from=appmsg)

CLI（Command-line interface
）就是命令行的意思。

AI CLI，说白了，就是把编程Agent放进命令行，跟Claude Code一个性质。

你在命令行里面用最自然的语言告诉它你要干啥，它就会自动帮你完成后续的一系列动作，从生成代码、安装依赖、运行测试到自动debug，就全都一步到位了。

本来我就想用Claude Code搓一个小东西，只不过一直还没来得及，正好，这次就直接扔到CodeBuddy Code上，看看它的水平行不行。

我的任务，是用CodeBuddy Code造个能调用Nano banana的MCP，有了这个MCP，其实我就能在所有的支持MCP的软件里用上banana了，实现一句话就能完成复杂的图片处理任务，扔掉所有的P图软件。

本来想给昨天发的即梦图片4.0也搓一个的，但是火山上还没上他们的API，有点可惜。

我安装好CodeBuddy之后，选了国内版，基模用DeepSeek，没用Claude，直接对CodeBuddy说了一句：

"做一个生成图片用的mcp sever，用户可以调用它生成图片，可以传入图片进行图片编辑任务。调用的模型是gemini-2.5-flash-image-preview。用python开发，参考代码：https://ai.google.dev/gemini-api/docs/image-generation?hl=zh-cn
#python
"

CodeBuddy开始嘟嘟嘟地干活了，它列了一个详细的计划，感觉还是挺靠谱的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURom5kzM2picWWDl4iafaz4HeTNPaHwK142p19hWFmvsCPiaibeOiaO64hr1g8RBYvBz8Q4tiaSRTrLJibx6w/640?wx_fmt=png&from=appmsg)

然后我就去开会去了。

大概不到15分钟，我回来收菜，发现，一个功能齐全的MCP服务就搭好了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURom5kzM2picWWDl4iafaz4HeTwfcyZUWkqcWQjdVEF9Jz6pdsKo1TDHYDWztFkGKBs6f3ib7LhItQRzQ/640?wx_fmt=png&from=appmsg)

这个过程真的极快，而且我真的什么也没管，一个MCP就开发完了。

但是这玩意，还是得测试一下效果怎么样。

为了测试，我就没用CodeBuddy Code接这个MCP了，直接用的Chatwise接的，其实这种编程Agent接MCP也是完全没有问题的。

我先试了一下基础功能，用DeepSeek V3.1调Banana MCP让它生成了几张梵高风格的油画。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURom5kzM2picWWDl4iafaz4HeTfJZw05icjpeWLwJic1ibY4gJ7TxhCqFACGQ65XLduZ4gUryiahQGdP0V6Q/640?wx_fmt=png&from=appmsg)

成功了，但文件保存路径还是有点奇怪，保存到了它自己的程序文件夹里。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURom5kzM2picWWDl4iafaz4HeT3YLKgvPFzaC4dmNWic30IvGcMOJvOApRnRso1UM8mAncq8uRyibwEBicQ/640?wx_fmt=png&from=appmsg)

于是我又回去，跟CodeBuddy Code说了一声，让它帮忙加上保存到指定目录的功能。

速度非常快，一会就搞定了，现在可以直接实现自动生图并保存到指定目录了。

贼好玩。

除了生图之外，还试了一下对着本地的文件的修图功能，让他帮忙把图片里的人物去除，效果也很不错。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURom5kzM2picWWDl4iafaz4HeT59Tbh2xzWCYhdloNDwwQhq28NELshlMwsSmMQcpQScY9HYdekDic1sA/640?wx_fmt=png&from=appmsg)

你也不用去那个需要魔法的官网了，也不用上传图片，直接在本地，扔一张图片，直接处理，非常的爽。

但这个MCP真正的威力，是一些需要批量处理图片的场景。

比如我让他帮我生成5张不同姿势的图片。

它立刻理解了我的需求，开始调用刚才CodeBuddy Code做的这个Banana MCP工具。

5种不同的姿势，非常完美，整个过程我就说了一句话。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURom5kzM2picWWDl4iafaz4HeT9TY6BbdPkPv24E6ENzLDF7shYen5UUhPKRWCLxFopfgiaYmXGfHTdow/640?wx_fmt=png&from=appmsg)

真的，以前我要是完成这个任务，要么上Lovart，要么就去google那，一张一张生成，下载并整理到本地文件夹。

现在，一句话搞定。

既然都是MCP了，我决定试试更好玩的玩法。

让它帮我做一套带有公司logo的周边，T恤，帽子、水杯等各种设计。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURom5kzM2picWWDl4iafaz4HeTVyauuELXTevS7L3cAeVNawBHiaGoQPw90ygLic0uAcfick7pDcE8Q0VDw/640?wx_fmt=png&from=appmsg)

都非常的完美。

你还可以，把这个MCP接回到CodeBuddy Code里面，手搓一个小产品，里面可以接入这个MCP，批量去水印、批量跑表情包等等等等。

非常的爽。

说下怎么用CodeBuddy Code，其实非常简单，而且现在这玩意直接全面开放，不需要邀请码，随便用。

第一步
确保你的电脑装了Node.js，如果不知道是啥的话，你就甭管了，直接去官网下载安装。

https://nodejs.org/zh-cn/download

安装好以后，打开你的终端，运行下面这行命令就能安装上了。

npm
install -g
@tencent
-ai/codebuddy-code

安装完成后，直接输入运行 codebuddy

第一次运行会让你登录账号，分国内国外两个版本，主要区别是模型不同。

用微信登录的是国内版本，Google/Github则是国外版，可以按需选择。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURom5kzM2picWWDl4iafaz4HeT75ZH2UUKC6S4LDDJa8wlQap6mFWZkSZubJ5cf2KQ7niclRVEDlGKAVA/640?wx_fmt=png&from=appmsg)

对，你没看错，这玩意是可以用微信扫码登录的。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURom5kzM2picWWDl4iafaz4HeTdckw5xicD9kd5gYEqlgDXNy4CMH6TW70YwU7tiap5iamB37YqHB3JCTeg/640?wx_fmt=png&from=appmsg)

突然有一种莫名的亲切是怎么个回事。。。

登录上了以后，你就可以切换模型，这事也很方便，先输入/config。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURom5kzM2picWWDl4iafaz4HeTg2icu66xGtSFTc4QSAcpXXeWSibvG7y60n5vISOnhnIPLjwfzbhOn8Dw/640?wx_fmt=png&from=appmsg)

回车后找到Model，就可以切换默认模型，不需要配置链接之类的复杂操作。

国内版现在只支持DeepSeek v3，后面会支持V3.1还有K2、GLM4.5。

国际版是这些。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURom5kzM2picWWDl4iafaz4HeT3FnCpEFvp4GlT0Vm8ib8jajYJsD8Jkcc1ej1vibib2O9qQ6YCR0hBicx0w/640?wx_fmt=png&from=appmsg)

一切弄完后，你就可以，开开心心的发布你的指令了。

不过，可能是刚发布的原因，MCP虽然我一次成功了，但是后面又跑了一些东西，还是发现了一些稳定性的问题的。

比如我想在原有的基础上加上多图参考的功能。

结果它没有读取相关文件，而是直接来问我用的什么语言，什么框架。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURom5kzM2picWWDl4iafaz4HeT5N2cMFFibnKzWo8VyeLw9B62FS1dakcO60ts8fof6jzVERPaibZxbJEg/640?wx_fmt=png&from=appmsg)

突然一下子就尬住了。

感觉还是可以优化一下的。

不过整体上，还是挺有潜力的。

编程Agent这个方向，肯定是所有家都想进军的领域。

腾讯肯定也是不会放手的。

CodeBuddy我已经写了三次了，每次都有新的惊喜。

最后，希望CodeBuddy继续加油，把产品做得更好。

如果你也想试试这种动手的快乐。

不妨安装一个，开始Vide Coding吧。


wzglyay@virxact.com

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
