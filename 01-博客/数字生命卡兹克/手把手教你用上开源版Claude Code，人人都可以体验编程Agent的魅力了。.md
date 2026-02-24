---
title: "手把手教你用上开源版Claude Code，人人都可以体验编程Agent的魅力了。"
发布日期: 2026-01-12
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647678609&idx=1&sn=e6e901ad763ae3ebabdd47f16e99cdd6&chksm=f105610d957dd958b57742304b0d51b942103f1a3c4b7c59b70e0b043a54a4185cbb11b4ebdc"
---

## 摘要

**1) 一句话总结**
本文介绍了如何通过安装开源客户端OpenCode及oh-my-opencode插件，结合主流AI模型订阅或免费模型，构建低门槛且功能强大的AI编程Agent工作流以替代Claude Code。

**2) 关键要点**
*   **工具定位**：OpenCode是一款开源的AI编程客户端，提供直观的图形界面（支持Win/Mac/Linux及主流IDE），无需使用命令行（CLI）即可操作。
*   **OpenAI模型接入**：支持直接授权登录ChatGPT Pro/Plus会员账号，从而调用GPT-5.2-Codex等模型进行高准确性的逻辑与代码编写。
*   **Google/Claude模型接入**：通过在对话框输入指令安装`opencode-antigravity-auth`插件，可利用Google Antigravity调用Gemini 3 Pro和Claude Opus 4.5模型。
*   **免费模型支持**：对于无付费订阅的用户，OpenCode原生支持调用GLM 4.7或MiniMax 2.1等免费模型完成日常编程任务。
*   **核心插件配置**：强烈建议安装社区插件`oh-my-opencode`，该插件内置了分工明确的专家角色（如架构师、文档管理员、前端工程师等），并能根据任务自动调度最匹配的底层模型。
*   **插件安装方式**：所有插件的安装均采用“AI对话式”，只需将特定的安装Prompt和GitHub链接发送至OpenCode聊天界面即可自动完成配置。

**3) 风险与缺口**
*   **Anthropic封号风险**：Anthropic（Claude母公司）对账号管控极严（作者曾被封13个账号），且近期已封杀OpenCode等第三方调用Claude订阅套餐的通道。
*   **配置警告**：明确警告用户**绝对不要**通过Claude Max等官方订阅会员直接连接到OpenCode使用，否则会导致账号被封禁。

## 正文

相信很多朋友，都听过Claude Code的大名。

就连我这个一直很不喜欢Anthropic这家公司的人，也经常会说，Claude Code是我用过，最棒的Agent。

帮你写产品、帮你做流程、帮你写做数据分析等等。

甚至Google的首席工程师，都自己在X上夸Claude Code。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqu9NFebw5g8XejtIVgty3OQpbKicic0THoicexLtnpAoneY3z0RARUyAicsRoibiaUr0tzfS69MwLraaxQ/640?wx_fmt=png&from=appmsg)

但是相信大家都知道，这家公司封号都多猛，有多么反华，从23年为止到现在，封了我一共13个号，封的我现在都没有邮箱注册了，后来为了不封号，我甚至都是自己搭的魔法服务。

所以对于推荐别人用Claude Code，我一直都很谨慎。

更别提，他们现在越来越封闭了。

而现在，在我觉得用了几天之后，我觉得有一个产品组合，真的可以在我的日常使用中，替代掉Claude Code了，我也不想再忍受
Anthropic那恶心的一些破事了。

这个产品，就是OpenCode，而且，开源。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqu9NFebw5g8XejtIVgty3O1JOe5pEZj21HviadHpXVmKicDY2nWSHxowjnoMzpqaKYalwENJ2P1GrQ/640?wx_fmt=png&from=appmsg)

而OpenCode再加上神级插件
oh-my-opencode，那几乎就是我现在觉得，对普通用户来说，想尝试开始使用编程Agent，最棒的组合。

如果你跟我一样，本身还是200刀的ChatGPT Pro和250刀的Gemini Ultra的双料订阅用户。

那你更相信我，你的这两会员，还可以在这个组合里，继续发光发热，直接把价值拉到最大。

所以，我也想把这个产品安利给大家，然后，手把手带大家上手玩起来。

这个产品和这个组合，让我觉得。

所有普通人也可以上手使用并且感受编程Agent魅力的时代，正式开启了。

那么，教程开始。

1. 安装OpenCode

第一步，当然就是先安装OpenCode了。

不同于ClaudeCode这种，你需要使用命令行。

OpenCode我觉得最棒的一点，就是它有专门的客户端，你不需要用看像A
ntigravity那样
复杂的IDE界面，也不需要去知道什么叫CLI什么叫各种命令。

你只需要，用一个最符合心智的界面，开始对话就可以。

OpenCode的下载链接在在此：

https://opencode.ai/download

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqu9NFebw5g8XejtIVgty3OTYGKd1iaoX5ucIpgt5lFiasIulfoHhLRmTw3oZuMwykfUN8rEVkUVDAg/640?wx_fmt=png&from=appmsg)

它支持所有客户端，无论你是Windows，还是Mac，都可以。

如果你是专业开发者，那用在Linux里用也行，也可以放到VS Code、Cursor、
A
ntigravity里，都没啥问题。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqu9NFebw5g8XejtIVgty3OCac9CickbzpXKcMXFh1aPIUS4bdbH2cJcGEuoJspkKcU5wdsHxDzKww/640?wx_fmt=png&from=appmsg)

我家里用的是Win，所以就直接把Windows版本下载下来，正常安装就OK。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqu9NFebw5g8XejtIVgty3OZxVKZRqamJbHh7YjFWbxzkdvU5qiao6icY6BY5chibxOgbt4LPhoyPj0Q/640?wx_fmt=png&from=appmsg)

安装完以后，直接运行，没一会了，你就能看到这个首页了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqu9NFebw5g8XejtIVgty3OQgZBU93t8jIldqPPp9OcOt1afRSvom6qsnzuACrhfmicwURYosT3LoQ/640?wx_fmt=png&from=appmsg)

看着空空如也，还不知道怎么用对吧。

不用慌。

我们先定把各个模型给OpenCode添加上。

2. 添加模型

我们在首页，点击左下角那个+号，先添加底层模型。

你能发现，里面有巨多的模型可以支持调用，几乎所有的模型全都支持。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqu9NFebw5g8XejtIVgty3O5IFvdGgowAaxoM2xH0yEiayPiayzVORTJ8aStBsv2FiasJJAAJzA4akog/640?wx_fmt=png&from=appmsg)

不仅可以用GPT、Gemini、Claude，甚至你划到后面，连GLM的Coding Plan计划都可以支持。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqu9NFebw5g8XejtIVgty3OvxyBEgUjARMkY11IdtPD1Zz1du0oj7s3spPasrmQR5H6nCsUVU0zdQ/640?wx_fmt=png&from=appmsg)

如果你跟我一样，是ChatGPT和Google的会员，直接跟我操作就行。

如果不是，那就直接用他们给的免费的GLM 4.7就可以，虽然能力上，肯定跟御三家还是有一点距离，但是对于绝大多数的场景，已经够用了。

第一个Claude会员稍微注意一下，即使你有，现在也别通过Claude Max这种订阅会员连到OpenCode上用了，绝对不要用。

Claude这个货现在非常的封闭，周末的时候，直接封杀了OpenCode之类的第三方调用Cladue Code订阅套餐的通道。

还直接疯了一批号。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpV8ww3u8wzg3LvvTG8brRPHs6d6R0VFdG40lu4QeibcPiaJFOe2orMyJFFEjXzb58qgEJaAU46Nlow/640?wx_fmt=png&from=appmsg)

引起了一片声讨。

然后，反手就是OpenAI的Codex直接宣布支持OpenCode。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpV8ww3u8wzg3LvvTG8brRP2VM4oISy7aulfsicRftInCzBRXnzsc6ecCn7zAwmvBhzeO5FJk69C8Q/640?wx_fmt=png&from=appmsg)

几乎几个小时之后，OpenCode就支持使用ChatGPT的订阅套餐，直接授权了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpV8ww3u8wzg3LvvTG8brRPWJjaVaVpstK4HNEVlcJ4GPX88ClmRkyoibias3qOVjSSK3dL6Ub1XIcw/640?wx_fmt=png&from=appmsg)

商战，就是如此的朴实无华。

回到OpenCode，我们可以先点击OpenAI，你会发现，添加模型有两种模式。

分别是ChatGPT会员和API。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqu9NFebw5g8XejtIVgty3O6Ic8WicgTGgicnfNF2BUicS0SQOaYkHMWyWDD2Xv1mKHjNh6Th295psBA/640?wx_fmt=png&from=appmsg)

这里说一下区别，API Key对AI稍微了解一点朋友肯定都知道了，就是你用多少，就付多少的钱。

而ChatGPT Pro/Plus，其实就是我们自己在ChatGPT官网上，订阅的会员。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqu9NFebw5g8XejtIVgty3OqxVHe8CHzX1YibRtLWfD1AqKjMGdtAjgR8dOM4oHTja8aeX8IKDZt8g/640?wx_fmt=png&from=appmsg)

这个会员呢，其实除了你能在ChatGPT官网上，有各种各样的新功能使用之外，其实还有一个非常重要的东西，就是你的专门为了开发的Codex额度，其实有非常非常多。

而GPT‑5.2‑Codex，虽然究极磨叽，但是写逻辑和代码的准确性，真的强的非常的离谱。

所以，如果你开了ChatGPT的会员，这里直接点击就行。

然后就会出来一个弹窗。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpV8ww3u8wzg3LvvTG8brRPyZEYEicKfniaiaWWXNkTaSQib4JKub90lgp6rcyTOnzVmDaGEbhicic1VEsA/640?wx_fmt=png&from=appmsg)

点击那个this link的链接，然后进入ChatGPT登录界面，正常登录，然后授权。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpV8ww3u8wzg3LvvTG8brRPaCleoMRdBiaTOaWE1NSCP6aTs00U7sEGicy264OQ972WY3ltUDkeCNpw/640?wx_fmt=png&from=appmsg)

回来以后就OK了，你就能发现，已经有OpenAI的那几个模型了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpV8ww3u8wzg3LvvTG8brRPK8OGaKfiaMk72rgkzYKGicwibicQfMeiaG5EGf9nMrnkxjOBYKvsRR1YqtQ/640?wx_fmt=png&from=appmsg)

直接爽用。

Gemini会稍微麻烦一点点，需要装一个插件，然后通过插件，把Antigravity里面的Gemini 3 Pro和Claude Opus 4.5的额度给拽出来。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpV8ww3u8wzg3LvvTG8brRPuYxxTjmnaduIaQltx0mLibbDb25n9CsK6s6kB8iaBdxvQVjx6I397Gdw/640?wx_fmt=png&from=appmsg)

没想到吧，Google家的
Antigravity，支持Claude Opus 4.5。

所以，其实你想用最顶级的模型来帮你做开发，在OpenCode上，只需要开ChatGPT和Gemini的会员就可以，开这两个会员，就能直接用御三家的所有最顶级模型。

我们先去装插件，这个插件的名字叫：

opencode-antigravity-auth

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpV8ww3u8wzg3LvvTG8brRPLAKqj6HIticqJPribKofvNLG82qicGuribt7ufuBnaEDx4S6Q6zydNgagQ/640?wx_fmt=png&from=appmsg)

安装特别简单，打开OpenCode，直接把这行Prompt话发过去：

Install the opencode-antigravity-auth plugin and add the Antigravity model definitions to ~/.config/opencode/opencode.json by following: https://raw.githubusercontent.com/NoeFabris/opencode-antigravity-auth/dev/README.md

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpV8ww3u8wzg3LvvTG8brRP6k8esmibPdf47hxBicIDYId7fgEJ7GuDEry1cbewe5JUlrRYn1cSsImw/640?wx_fmt=png&from=appmsg)

AI时代了，安装插件的方式，也得AI一点。

一会的功夫，就跑完了。

然后，你在之前加号那，选择Google。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpV8ww3u8wzg3LvvTG8brRPT6sY1R4B44tyibTHgnTZQQsE2ssQZTswlibprzUl03ogTghD2Q3upKPQ/640?wx_fmt=png&from=appmsg)

就能发现，多出来了个OAuth with Google（Antigravity），如果没看到的话，就把OpenCode退出了重进。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpV8ww3u8wzg3LvvTG8brRPRFo6RO0dwa9qMhsUKeRTdpvxZCyVoziawpEbFK3LwFI5ICGKksyoaZg/640?wx_fmt=png&from=appmsg)

流程跟OpenAI的一模一样，进到链接里面去，授权，登录。

成功以后，你就能看到，所有的模型了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpV8ww3u8wzg3LvvTG8brRP3nrZKVMPxjXTOdw6Uiafad0007uKN4v67j01ibSSfuA1V12pnctdZapw/640?wx_fmt=png&from=appmsg)

Claude和Gemini全都在。

Ok，御三家模型已经全部安装完毕，你现在拥有几乎全世界最豪华的Coding模型阵容了。

当然，如果你没有任何订阅的话，但是也想体验AI Coding的魅力，可以直接在模型区域选择GLM 4.7或者MiniMax 2.1。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpV8ww3u8wzg3LvvTG8brRPADN0oDHHBNqYKNJPX4nFWX2Een78SGqy4zHrsnxCnG1c4KL0WY59bQ/640?wx_fmt=png&from=appmsg)

目前这两全部都是免费可用。

做普通的任务，完全够用了。

现在OpenCode装完，模型也添加完毕了，那接下来，就是我们安装oh-my-opencode插件了。

3. 安装
oh-my-opencode

oh-my-opencode是一个源自社区的插件，几乎是我认为你用OpenCode必装的东西。

你可以理解为，这是一个游戏的mod。

就像很多年以前，我们玩《上古卷轴5》，你不装身形mod，你怎么玩怎么不得劲，就像前段时间爆火的《逃离鸭科夫》，你倒是可以不装任何插件自己硬玩，但是你要是装个物品价值稀有度的mod，基本就能极大幅度的改善原来的游戏体验。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpV8ww3u8wzg3LvvTG8brRPvncXDWGxxC7b2NvPtAbNpiaIh4gzwjSa0sasyOESGahEdlWI3sGCibGA/640?wx_fmt=png&from=appmsg)

oh-my-opencode就是我认为，几乎让OpenCode焕发终极生命力的，能让所有小白全都能上手使用编程Agent的，究极插件。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpV8ww3u8wzg3LvvTG8brRPUqdYWsDakwpYcJxMJuMQp2IZQIzKhX2tAXDYQ3JBezEdQkiaIhG5VFg/640?wx_fmt=png&from=appmsg)

他们在文档里这样写到：

还记得第一次从 Windows 换到 Linux，兴奋地折腾各种配置的感觉吗？ 在这个"黑客精神"似乎日渐稀缺的年代，OpenCode 把它带回来了。 如果你热爱编程、热爱计算机，OpenCode 带来的就是那种"终于摆脱 Windows 束缚"的爽快感。
但坑在什么地方？门槛高、要学的东西多、配置复杂，而你的时间很值钱。
这事儿我搞定了。 即使你不是硬核 Hacker，花几分钟，就能让你的技能和生产力原地起飞。
https://github.com/code-yeongyu/oh-my-opencode

你不用再花大量时间去学配置，去猜哪个模型适合干哪个活，

它内置了很多分工明确的专家角色，比如负责架构和审阅的oracle（GPT 5.2 Medium），负责翻文档找实现的librarian（glm-4.7），负责快速扫代码库的explore（Grok Code），负责UI设计与前端的前端工程师（Gemini 3 Pro）。

然后主Agent（Claude Opus 4.5 High）会按需调度它们，并且很多任务可以在后台并行跑。

还兼容了Claude Code，Command、Agent、Skill、MCP、Hook（PreToolUse、PostToolUse、UserPromptSubmit、Stop）啥的全都有。。。

还有自带的精选过的MCP，还支持完整的LSP。

真菩萨...

安装
oh-my-opencode也特别简单，跟前面的opencode-antigravity-auth流程一样。

在OpenCode中，新起一个对话。

然后直接把这个Prompt发过去：

Install
and
configure
by
following the instructions here https:
//raw.githubusercontent.com/code-yeongyu/oh-my-opencode/refs/heads/master/README.md

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpV8ww3u8wzg3LvvTG8brRPtjFKrXj0WR4A4tgFIAuDZ50SwichKz8knia4mk60XiaJQYucib3ucyLV7A/640?wx_fmt=png&from=appmsg)

对，就这么简单。

没过一会，他就会给你发一段话：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpV8ww3u8wzg3LvvTG8brRPDmXPjCqiaDneb9DBXtRXx7uZG0fyYWBAHjW9kQiaAm7DO3AuwIPefXMQ/640?wx_fmt=png&from=appmsg)

意思就是问你有没有御三家的订阅，你要是看不懂，也没事，直接回一句，我看不懂英文，用中文给我回复。

就OK了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpV8ww3u8wzg3LvvTG8brRPiaFTpVg8giclI3m52nyaZxQX0fLmC7xEQMia56DCIiac6uGWjomcfJbf7g/640?wx_fmt=png&from=appmsg)

我们前面已经全部配置好了，你就按照你的情况回答就行，像我有ChatGPT订阅和Gemini订阅，我就直接说：

1. 没有Claude，但是我用的opencode-antigravity-auth，可以用Google上的Clude模型。

2. 有，我已经配置好了。

3. 用，我也配置好了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpV8ww3u8wzg3LvvTG8brRPbrawEyAg0pFGibVNBibEZvxqNTftKf5Rk85b5GhlcgmQFrf3k9TCysNQ/640?wx_fmt=png&from=appmsg)

大家也可以直接复制粘贴过去。

再过了一会以后，oh-my-opencode就装好了。

你会发现，每个Agent背后，都是对于的最佳模型了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpV8ww3u8wzg3LvvTG8brRPHibic2tN6YVlIQEdMZM8iaWXM3bY8DVRiblp0w2FZnB0Cq3IG9yiaKnribzw/640?wx_fmt=png&from=appmsg)

而如果你没有订阅的话，这时候，所有的Agent，默认模型都会是GLM-4.7。

至此，一切就大功告成！

你可以愉快的使用OpenCode +
oh-my-opencode，开始你的Vibe Coding之旅了。

后续你想继续精进，把OpenCode玩的更深更透的话，也非常推荐大家去看官方文档：

https://opencode.ai/docs

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpV8ww3u8wzg3LvvTG8brRPVV1crD0tnPcS2vFkfSiamqponhk7P3yennZkAMy3y2aQWGWjBf4kz9A/640?wx_fmt=png&from=appmsg)

相信我，Vibe Coding没有那么难。

在过去，你只是没有一个趁手的工具。

而Claude Code对于国人来说，门槛又太高。

OpenCode +
oh-my-opencode这个组合。

就是我认为，所有普通人，开始接触Vibe Coding最棒的组合。

感谢OpenCode和
oh-my-opencode。

这是非常优秀的产品，也谢谢他们为这个世界。

做出的开源贡献。

后续我也会出一些有趣又有用的Coding教程。

希望大家点个赞点个关注。

更希望，能对大家有所帮助。

那就这样，我们，下期再见👋。


wzglyay@virxact.com

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
