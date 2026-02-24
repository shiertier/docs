---
title: "【有手就行】5分钟教你把ChatGPT接入QQ，搭建你的专属聊天机器人"
发布日期: 2023-05-31
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647658666&idx=1&sn=1c5fd305d8b2a42f21ee714e9a01c709&chksm=f12f541364194633dfb8f3d06d6a6107366a97d064cc3a7b04b4f6413c69e15d8a3b3caa4ae9"
---

## 摘要

**1) 一句话总结**
本文提供了一份5分钟快速教程，指导用户通过开源项目 `chatgpt-mirai-qq-bot` 将 ChatGPT 接入 QQ，搭建支持私聊和群聊的专属聊天机器人。

**2) 关键要点**
* **核心开源项目**：使用 GitHub 项目 `ChatGPT for Bot`（lss233/chatgpt-mirai-qq-bot）。
* **前期准备**：需要准备网络代理环境、一个备用 QQ 号以及有效的 OpenAI API Key。
* **初始化生成**：下载整合包后运行初始化程序，输入机器人 QQ 号以生成基础配置文件。
* **核心配置修改**：需在配置文件中明确填写机器人 QQ 号（`qq`）、管理员 QQ 号（`manager_qq`）、OpenAI API Key（`api_key`）以及本地代理端口（如 `http://127.0.0.1:7890`）。
* **服务启动流程**：配置完成后，需依次双击运行“启动ChatGPT”和“启动go-cqhttp”两个程序，且运行期间不可关闭窗口。
* **协议与登录**：程序使用手表 QQ 协议，启动后需使用手机 QQ（备用号）扫描终端弹出的二维码完成登录。

**3) 风险/缺口**
* **账号封禁风险**：将 QQ 接入机器人存在一定的封号概率，明确建议必须使用备用小号，切勿使用主账号操作。

## 正文

最近OpenAI对魔法封的严重，而且ChatGPT用起来最近挺慢，没事还卡一卡，麻烦。

所以为了自己的顺畅体验，干脆直接把ChatGPT接进QQ里面去了。

用起来就轻松加愉快，私聊群聊都行~

大概就是这种效果：

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURq2XT5PWodd3hR2MiaxicFvMexhgVdsRBt35qPrHAbP7ib1zHug2B2DuIzcoUua55kaCrwpeP959OlOQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq2XT5PWodd3hR2MiaxicFvMe4ZyxcWIuuarpK0aNSoIz57sfl2Q0MMoNib7SOZwIZEJYsOtQTsy9nYg/640?wx_fmt=png)

接下来，就教大家徒手接一个，真的，有手就行，5分钟解决战斗。

我使用的项目是
ChatGPT for Bot，Github源址在此：

https://github.com/lss233/chatgpt-mirai-qq-bot

你需要准备的东西：

魔法（这个不解释了）
1个QQ号（别作死用自己的大号）
OpenAI的API key

OK，我们正式开始。

首先，你需要先下载这个项目的一个整合包。毕竟没程序跑个屁哈哈~

我也给大家准备好了，关注并私信我Q，就直接自动回复你下载链接了。

下载完解压到本地，我就直接解压到D盘的新建文件夹里了。可以看到包里有这么些东西。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq2XT5PWodd3hR2MiaxicFvMeycKsQewSCHiba4pfyfTu9FLkiauujwescFMVIDL0zm2HKHGXyicYxZ7bQ/640?wx_fmt=png)

我么直接双击运行初始化~

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq2XT5PWodd3hR2MiaxicFvMeHPIytJXokqCQMnD6AGUicntqibiblVoYq3sjniaCnIBpncaQXqjVUUdV0w/640?wx_fmt=png)

敲一下回车，就会让你输入你想配置的机器人的QQ号了，
再强调一下，别用自己的大号，虽然封号概率很低，但是万一封了就得不偿失了~

输入完QQ号后，再敲一下回车，就会开始跑脚本，嘟嘟嘟的几秒十几秒就完事了，此时会自动给你弹出一个长这样的文本文件。这就是我们需要修改一下的配置文件，也是最麻烦的一步，后面就一马平川了~

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq2XT5PWodd3hR2MiaxicFvMeC38XrY802KyveQLEoe8HIrYLlwWJPW1ZcJ5qtIn8xumOlPwfIxcoyQ/640?wx_fmt=png)

因为这次只接ChatGPT，所以模版我已经写好了。大家把我的代码复制进去，然后把我标注的地方给改成自己的就行~

# 这里是 ChatGPT for QQ 的所有配置文件

# 请注意：以 "#" 开头的文本均为注释

# 不会被程序读取

# 如果你想要使用某个设置，请确保前面没有 "#" 号

########################

# 配置文件编写教程：

# https://chatgpt-qq.lss233.com/

[onebot]

qq=请填写机器人的 QQ 号

manager_qq = 请修改为机器人管理员的QQ号

# ==== OpenAI 部分开始

[openai]

# OpenAI 相关设置

# 自定义 OpenAI 的 API 接口基础地址

api_endpoint = "https://chatgpt-proxy.lss233.com/v1/"

# 以下是 GPT3(.5) 和 GPT4 的模型参数

# 在使用 API 调用时有效

[openai.gpt3_params]

temperature = 1.0

max_tokens = 4000

top_p = 1.0

presence_penalty = 0.5

frequency_penalty = 0.5

min_tokens = 1000

[[openai.accounts]]

# 你的 API key，可以在这里看：https://platform.openai.com/account/api-keys

api_key="sk-xxxxx"

# 如果你在国内，需要配置代理（端口写成自己的）

proxy="http://127.0.0.1:7890"

#支持的变量：{session_id} - 此对话对应的上下文 ID，若产生在好友中，则为好友 QQ 号，若产生在群聊中，则为群号

title_pattern="qq-{session_id}"

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq2XT5PWodd3hR2MiaxicFvMedwWhVkXWdt18zcn2BQq7mklbwGLh8pLNzl3E1WgB3YNp6N4Crf0ZsQ/640?wx_fmt=png)

这几个地方需要更改。QQ就不说了。

OpenAI的API Key如果忘了的话，去这个网址：

https://platform.openai.com/account/api-keys

登录后，新建一个Key，以前的key你也没法复制，就新建一个存下来。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq2XT5PWodd3hR2MiaxicFvMenTuZNcPzT3JfCoIJUKsLGzOrEVTYcwiadAMjAb2QCvaTjDuHps8LJGw/640?wx_fmt=png)

而端口那块，打开你的魔法，我的这个7890就是，每个人的可能都不一样，默认的一般就是7890。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq2XT5PWodd3hR2MiaxicFvMelWlLCzKyzwcB64jQhQVIOK32nCI1tibJdUgvyiatr3UvQ8zX0YydwUnQ/640?wx_fmt=png)

全部设置好以后，我们把配置文件和刚才的窗口都关了。最难的一步完事了！

我们找到
根目录中的启动ChatGPT。双击运行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq2XT5PWodd3hR2MiaxicFvMe0vyCGrg0lHM7icniaWgk4EcPoyMLBewbfk9zad6x8NI0ewBIRibmXPYAA/640?wx_fmt=png)

看到这些消息后，说明ChatGPT启动成功。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq2XT5PWodd3hR2MiaxicFvMeZzKVu9fkM8WmUosHcGf808nsxNArwqA5fqnY8twfFJlgSibmSEicyxSA/640?wx_fmt=png)

这个窗口千万别关。我们回到文件夹里，再找到启动go-cqhttp，双击运行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq2XT5PWodd3hR2MiaxicFvMeJBjHfsFc13ia7rbfpibPOU1n6FzcmjhLrD94NibopL7lFm2ibc3bVAZBCA/640?wx_fmt=png)

弹出一个窗口，等个几秒以后，就会出现一个巨大的二维码，此时，打开你的手机QQ，登上你的小号，直接扫码登录。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq2XT5PWodd3hR2MiaxicFvMe2NbRvAItFp5AL72sT2mEEicbwiconSmbDEd9jlbZOwO15h29sqcotU2w/640?wx_fmt=png)

提示登录的是手表QQ，没毛病，因为用的就是手表QQ的协议，
直接手机确认登录。看到这些提示后，就说明登录成功，

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq2XT5PWodd3hR2MiaxicFvMeKZbyJlbkk3T6y20yG8PZrVzzR4DoCWk7bY7TGOeIIh41J5tbdQHs0A/640?wx_fmt=png)

所有程序全部完成。QQ接入ChatGPT成功，我们去对话一下试试~

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURq2XT5PWodd3hR2MiaxicFvMeoj5K6ibhLRTCDqmsLXev7TgzuoAlcMPE4qNN0XHgibDsGNRPGNvUnWTg/640?wx_fmt=png)

一切都没毛病，
愉快的玩耍起来吧~

关注并私信我Q，就直接自动回复你整合包啦。

另，明天儿童节啦，祝大家六一快乐~

以上，创作不易，有用的话请点个在看并给我设个星标⭐，感恩。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
