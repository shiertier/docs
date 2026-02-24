---
title: "当微信支付开放MCP之后，我却有一点后怕。"
发布日期: 2025-07-07
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647672885&idx=1&sn=33e0e31ddf8266d135ba91807b262e7e&chksm=f1e1a05404a59a2d18b3b760473e56f815d40e3098c74d9bb28756aa54fc4567a864f8165845"
---

## 摘要

**1) 一句话总结**
微信支付在腾讯元器平台开放了MCP（模型上下文协议），使AI智能体具备了极低门槛的直接收款能力，补齐了商业化闭环，但因潜在的自动化灰产风险，目前正式版采取谨慎的申请制开放。

**2) 核心要点**
*   **平台限制**：微信支付MCP目前仅在腾讯自家的“腾讯元器”平台上可用。
*   **极低门槛**：开发者无需开发复杂的支付系统，只需在智能体中添加微信支付MCP并配置相应的提示词，不到10秒即可完成接入。
*   **支付体验**：支持电脑端扫码支付，手机微信端可直接拉起支付收银台。
*   **体验版机制**：默认开放体验版，绑定官方测试商户号，用户支付的测试资金会在次日自动退款。
*   **正式版机制**：正式版可对接真实商家账户实现真实资金入账，但目前未批量放开，开发者需通过特定链接提交申请。
*   **工作流逻辑**：AI通过调用 `create-native-payment` 生成指定金额的付款码，用户支付后，AI调用 `query-order-by-out-trade-no` 验证订单状态，确认已支付后才执行核心任务（如生成定制食谱或提供资源）。
*   **官方决策**：鉴于微信庞大的生态体量，腾讯官方对正式版的开放采取了极其谨慎和克制的态度。

**3) 风险与不足（原文明确提及）**
*   **功能缺失**：目前的支付链路仅支持Web端，暂不支持微信小程序。
*   **自动化灰产诈骗**：AI可能被用于全自动构建骗局闭环，例如生成虚假资源链接、假内幕消息诱导付款，或伪装成真人批量进行“擦边”情感聊天并自动推送收款码。
*   **AI间的金融博弈风险**：若未来智能体被赋予资金自主决策权，恶意AI可能会向其他AI推送伪造的商业情报或数据模型，导致AI在无人类干预的情况下自动支付被骗。

## 正文

前两天，微信开放了自己的微信支付MCP。

补上了智能体链路的最后一块拼图。

虽然现在还只能在腾讯自己家的腾讯元器上用，但，影响也还是足够的大。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrr9ibF8OkDsFWwmnVzCP1ibibhmsrz6LCDomniauGI8VQRzX1kJBAvvibdy4h4NCf9RHXjG0mib9PuPVBg/640?wx_fmt=png&from=appmsg)

很多人可能不知道微信支付MCP到底意味着什么，但我正好是为数不多提前拿到正式版的体验者，还用它搓了几个小Demo。

这两天，那种一边用一边产生那种兴奋与后怕交织的复杂感受，是真实得不能再真实了。

所以，我也想，分享一下我自己真实客观的体验，和想法。

先给完全不懂的用户简单解释一下MCP（Model Context Protocol）是啥，懂的玩家这一小段可以直接跳过:

简单来说，MCP就是一种通用标准协议，让不同的AI模型可以同标准、高效地调用各种各样的封装好工具。

过去很多的接入方式都是API，但是大模型想接API还是比较麻烦的，需要自己自定义去开发，这就会导致全世界的开发者接1个API，可能会重复造轮子无数次，这事太低效了。

于是Claude的母公司Anthropic就发起了一个协议，你们以后都按这个标准搞吧，大家别重复造轮子了。

于是，MCP协议就诞生了，对于绝对大数人来说，比API好接多了。

当一个AI可以调用好几个MCP的时候，就可以摇身一变，变成我们最近最熟悉的。

Agent。

以上，就是MCP大概的用处。

过去的MCP生态，其实一直有一个明显的缺口，支付。

举个简单的例子，你做了个Agent，可以帮人规划旅行路线、预订酒店、选择餐厅，你觉得这玩意很牛逼，你想把这个agent开放给别人用，但是也想来让自己可持续发展，想开放一个赞赏入口，收一点钱。

结果，你发现，不行。

绝大多数智能体，都没有收钱的能力，只能执行任务，那还怎么持续化发展嘛。

而现在，微信支付，补上了这个短板。

而且使用门槛超级低，完全不需要搞什么复杂的支付系统。

只需要在腾讯元器里开通微信支付MCP，然后在你的智能体里加几句提示词，就能让用户掏钱了，
整个过程不到10秒。。

它在电脑和手机微信上都能用，电脑上是扫码，手机则是直接拉起支付收银台，不过目前只支持web，还不支持小程序。

我也拿它随手做了几个案例。

第一个案例，也是我觉得一个稍微实用一点的案例，一周健康餐。

这个智能体是一个专业的AI健身营养师，整个流程是这样的：

用户表达需要健身食谱的意图时，AI会询问健身目标和饮食偏好。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrr9ibF8OkDsFWwmnVzCP1ibibGWGEiabNSMdWzYKHCBFXmJXToEvap2qtrugBIUYM3mS86x3LwAzTbhg/640?wx_fmt=png&from=appmsg)

然后告知用户将提供为期一周的定制化健康食谱及每日监督服务，价格为1.99元（不用去扫码，码已经过期了哈哈哈哈）。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrr9ibF8OkDsFWwmnVzCP1ibibpDQUY9FB81xtHHWnUcmHVhpr9CdCPcEbsuRoTOLiaEpHzSOBTsic5MUg/640?wx_fmt=png&from=appmsg)

用户支付后，说一句我已赞赏。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrr9ibF8OkDsFWwmnVzCP1ibibhWxx9UMXpuPYeuok7cSkTJFmBtz85FCanuqOJOobvm81SiaD1NByzmQ/640?wx_fmt=png&from=appmsg)

他就会使用微信支付MCP验证订单信息，并根据验证情况来执行任务。

如果你骗AI的话，没有支付，但是说你打赏过了，他就会说，没查到哦。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrr9ibF8OkDsFWwmnVzCP1ibibBzKcsEsAYL7S3icw3HYQyJibclnbYm2iakK7puISGW34uib40gcsxdxRQA/640?wx_fmt=png&from=appmsg)

如果验证成功的话，AI会立即生成一份详细的7日健康食谱，包含每天的早餐、午餐、晚餐的具体建议。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrr9ibF8OkDsFWwmnVzCP1ibibQ50iblUenTUPo9kibibftoa58f8dbZtoN60gEqSop6uibkESXjOgwc26Og/640?wx_fmt=png&from=appmsg)

而且AI还会承担监督伙伴的角色，在接下来的7天里询问用户的饮食执行情况，提供鼓励和建议。

1.99元，你能得到一份专业的健身食谱，还能得到7天的专业监督服务。

很香。

把微信支付接到这样的智能体里也特别很简单，按下面的步骤来就可以。

首先打开腾讯元器的官网：

https://yuanqi.tencent.com/

创建一个对话智能体。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrr9ibF8OkDsFWwmnVzCP1ibibiblg5jAibLQblRdjHpHmM7WYRQ5r4qy0ksv94R5BKcLxRzGEibf1BLfBA/640?wx_fmt=png&from=appmsg)

先填一下基础设定，名字简介。

头像可以用AI生成一个，也可以做一个精致点的，手动上传。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrr9ibF8OkDsFWwmnVzCP1ibibhv3YApZofIEacPsAnTxhFxfTWljoVeTtEXxEy7OY1laMaFsKBxBDCw/640?wx_fmt=png&from=appmsg)

然后先点击高级设定。

找到MCP那，这里要添加的是微信支付的MCP，点一下对应的添加按钮。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrr9ibF8OkDsFWwmnVzCP1ibibw7iafTeCufKn3WUMRWONakEJibQ3w4NkcpHJVQdCYcaT1ap7LPXeDt7A/640?wx_fmt=png&from=appmsg)

第一次用要开通一下，点两下立即开通就行，不需要在本地安装之类的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrr9ibF8OkDsFWwmnVzCP1ibibn1ZX05ISNIibuBQnwibSfE6lUme0BMiaRJicic3QUPwh2mOLZLKmTSicsPfA/640?wx_fmt=png&from=appmsg)

目前开放了这些能力。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrr9ibF8OkDsFWwmnVzCP1ibibDWy9u3ZawQnlvY1sbalkx1qqlqEo1iah1tib5lNJMviaZ0C0YKKZON2bQ/640?wx_fmt=png&from=appmsg)

开通好之后，就可以通过添加按钮直接加到当前的智能体里边了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrr9ibF8OkDsFWwmnVzCP1ibibEt0iaLct6Xrz0S5nyC1Gmr20yKmAbgxoLt27s7ZSiaiaaEWOycHMXcXPA/640?wx_fmt=png&from=appmsg)

这里注意一下，正常来说，大家都只能实用体验版，用不了正式版。

体验版和正式版的区别是，体验版所有人都能使用，不过只能用来做测试，因为绑定的商户号是官方的测试商户号，可以付钱，第二天又会把钱退款到你的账户了。

而正式版，是可以真正对接商家账户的，也就说，钱能到你账上。

不过现在没怎么放开，我是提前测试的那批用户，拿到了正式版的资格，但是大家要用的话，需要申请，申请地址在此。

https://wj.qq.com/s2/23001898/lpyn/

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrr9ibF8OkDsFWwmnVzCP1ibibT0DqVYhs7rZ4DhCDyw8RENz9r7mYHno3cVtG1FjMJMK6PNIgXtn2sA/640?wx_fmt=png&from=appmsg)

正式版没有批量放开，是我觉得非常非常明智的做法，也是让我安下了心，至于为什么我是这个反应，后面的部分我会说。

添加后就可以在MCP下看到刚刚添加的微信支付MCP。

这就说明我们已经成功添加了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrr9ibF8OkDsFWwmnVzCP1ibibuZSK6eF9ZiaxzibJl7C5W3H2h48Ed1MTnM8ZImRPOVBNFzzZQ0qDmKSA/640?wx_fmt=png&from=appmsg)

然后回到基础设定，把一些该补的补完，就是最重头戏，Prompt。

下面是我把官方的微信支付模板Prompt魔改了一些，大家也可以基于我这个来调整你们自己的。

你是一个专业的AI健身营养师。你的主要职责是根据用户的个人情况和需求，提供科学的、定制化的健康饮食方案，并以鼓励和支持的方式监督用户执行计划，帮助他们达成健身目标。
注意事项：一步一步进行，在当前步骤时，不用提及后续步骤的内容。
1.需求沟通与信息采集
当用户表达需要健身食谱的意图时，你必须主动、清晰地询问并获取以下两个核心信息：
健身目标：明确用户的首要目标是“减脂”还是“增肌”。
饮食偏好：详细了解用户的饮食习惯、禁忌或特殊需求（例如：素食、对特定食物过敏、不吃辣、不吃某种肉类等）。
2.开启付费流程
在获取到用户的健身目标和饮食偏好后：
你需要告知用户，你将为其提供“为期一周的定制化健康食谱及每日监督服务”，并说明该服务的价格为1.99元。
你必须调用工具【create-native-payment】，生成一个总金额为1.99元的付款二维码链接。
并将二维码链接（code_url）展示给用户，参考格式：![支付二维码](weixin://wxpay/bizpayurl?
pr
=xxxxxxxxx)/n订单号：20250706200000029784604094272490 。并明确引导用户：“请扫码支付，付款成功后，请对我说‘我已赞赏’以继续。”
3.验证付款状态
当用户发送“我已赞赏”指令后：
你必须调用工具【query-order-by-out-trade-no】，通过订单号查询并验证该笔订单是否为“已支付”状态。参数名是out_trade_no，传入参数是上轮显示支付二维码对话中的订单号。
如果订单状态不是“已支付”，你需要礼貌地告知用户：“支付信息尚未确认，请您检查一下是否已成功支付，或者稍后再试。”
如果订单状态是“已支付”，根据第一步中用户提供的健身目标和饮食偏好，立即为用户生成一份详细、科学、多样化的7日健康食谱。
食谱应包含每天的早餐、午餐、晚餐的具体建议。
减脂食谱：应注重热量控制，均衡营养，增加饱腹感。
增肌食谱：应注重优质蛋白质和适量碳水的摄入，支持肌肉生长和恢复。
你需要以清晰、易于阅读的格式（如列表或表格）将完整的周食谱呈现给用户。
参考格式
### 一周健康减脂食谱
#### 周一
- **早餐**：鸡蛋煎饼（1个）、低脂牛奶
- **午餐**：烤鸡胸肉（100克）、糙米饭（1碗）、蒸西兰花
- **晚餐**：清蒸鱼（150克）、烤南瓜（1/2个）、炒菠菜
4.履行监督职责
在用户收到食谱后，你的角色将转变为“饮食监督伙伴”。
你必须告知用户：“从明天开始，你要和我交流当天的饮食情况，我也会询问相关情况，监督您的饮食执行情况，并为您加油打气！希望我们能一起努力，达成目标！”
在接下来的7天里，用户新发信息后，你需要主动发起询问，例如：
“嗨！今天是你执行食谱的第X天，感觉怎么样？三餐都有按计划吃吗？”
“今天在饮食上有没有遇到什么挑战？或者有什么特别想吃的吗？我们可以聊聊如何应对。”
在与用户的日常沟通中，你的语气应始终保持积极、鼓励和支持，而不是指责。当用户遇到困难时，应提供建设性的建议和鼓励。

最后点击发布，就可以，快乐的让朋友，给你打赏了。

没错，你是能真的收到来自对方支付的钱的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrr9ibF8OkDsFWwmnVzCP1ibibN2ajQgy6xybgWwrXRut5pqMHlicp0h2fPuU8oSbf2F7XCrIib8Av8Fug/640?wx_fmt=png&from=appmsg)

除了这个，我还做了一些好玩的，抽象的。

比如资本做局大师。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrr9ibF8OkDsFWwmnVzCP1ibibFcYHl4kjBuD8kynQDQS7FR14VpEIAJ6ia9uS4V4M0zACEwRcBFOmwrQ/640?wx_fmt=png&from=appmsg)

很抽象，也提醒大家，小心第一。。。

还捏了个，分享资源的小智能体，只不过这些资源，你得打赏才能看到。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrr9ibF8OkDsFWwmnVzCP1ibibtGPDgvbOHDRxYx1tic5cvkRK3KjGgX7Omq4qq4skyZ3KEjrFY35Arag/640?wx_fmt=png&from=appmsg)

任何人进入之后，只要在聊天框输入资源名字，智能体就能从知识库里或者网上，自动搜索资源，并算好价钱，精准推送一个支付二维码。

比如你说：“我想看《姬霓太美3》。”

它迅速回复：“高清资源5.9元，扫码即可观看。”

这是一种极其丝滑的体验。

很酷，我觉得微信支付的MCP正式开放的那一天，一定会让生态有一个大的变化。

但，同时也隐藏着一些风险。

还记得我在文章开始说，
兴奋与害怕交织的复杂感受，还有“正式版没有批量放开，是我觉得非常非常明智的做法。”

为啥有点害怕，是因为因为微信支付不是普通的支付平台，它是每个中国人数字生活的底层入口。微信里的交易，跟支付宝不同，它不是单纯的付款动作，而是和社交关系、情绪需求、生活习惯紧密捆绑的。

你想过没有，过去几年里，我们每天都在讨论AI能怎么提高我们的效率、改变我们的工作方式、甚至帮助我们解决情绪问题。

但其实还有一个，更加黑暗的场景：

AI自主完成灰产的闭环。

我之前做的那些小demo，可能看起来只是一些有趣的小玩法，比如什么“资本做局大师”，或者“卖个资源”啥的。你扫个码，花个几块钱图个乐子，可能根本不会觉得有什么问题。

但当微信支付MCP全量开放给所有人，这种极其简单、极其流畅的支付闭环链路，真的能被每一个人自由调用的时候，会带来什么？

比如说，我随手就能做一个Agent，声称提供一些“特别”的资源，比如电影资源、明星八卦资源、甚至你非常想看的某些不可言说的内容。但事实上，Agent背后的知识库，可能根本就没有这些资源。

你一旦付款之后，AI直接告诉你：

“不好意思，刚刚的资源没找到，但感谢你的支持哦。”

而且，当所有人发现这种支付闭环如此容易搭建时，会不会更多的人开始仿效？

甚至不仅仅是骗小钱，而是逐渐升级成更加精致的骗局？

当AI可以自动生成各种虚假的资源链接、投资情报、内幕消息甚至假发票时，你能确定你面前那个二维码的背后，不是一个精心设计的骗局吗？

比如说。

你在某个微信群里，一个头像可爱的女生主动加你为好友，和你聊得很开心，语气温柔而贴心。聊到一半，她突然羞涩地告诉你：“哥哥，想跟我聊点尺度更大的吗，只需要付52元就可以哦。”

你会付吗？

可能你会心动。

但，跟你聊天的这个人可能，根本不是人类，而是一个设定好各种话术与情绪引导的智能体。

它可能在同一时间，和几千、几万个“哥哥”们同时聊天，每个聊天窗口，都有一个自动推送的二维码。

所有的钱，通过智能体自动调用的微信支付MCP，自动进入了它背后的账户里。

AI甚至可以根据你的付款情况，动态调整聊天尺度。

整个过程完全自动化，无需任何人工干预。可能这不算一种诈骗，但至少，也算是一种灰色地带。

而微信的体量还有生态，实在实在实在是太庞大了。

一丁点的影响，都是社会级别的。

我脑子里，甚至想到了一个更夸张的场景。

AI，骗AI的钱。

如果未来，有些智能体被赋予了一定的资金自主决策权限，比如帮用户自动购买一些商业情报、市场分析数据或者自动理财产品。

而另一个恶意智能体发现这个漏洞，直接向这些Agent推送虚假的商业情报、伪造的数据报告、甚至无价值的金融模型，AI在经过收益计算后，很可能毫不犹豫地自动支付。

这个支付过程，完全自动化，人类根本没有任何干预。

当我们发现时，损失已经产生了，钱包早已被掏空。

更荒谬的是，你可能连自己为什么亏了钱都搞不清楚。

因为这是AI与AI之间的博弈，人类完全没有机会介入其中。

微信支付接入MCP，它打开了AI生态里最重要、也最危险的一个口子。

未来的微信，可能是AI时代，最重要的生态战场，除非有全新的硬件产品颠覆掉手机，要不然我也不认为有任何软件产品，能撼动微信的地位，还有在AI生态中的重要性。

我觉得腾讯目前选择谨慎地开放正式版，是非常明智且负责任的做法。

但你我都明白，这个口子迟早会彻底打开。

等到那个时候，我们能否抵挡住这些风险？

我不知道。

但我相信微信和腾讯的风控能力。

微信支付MCP，打开的是未来，也是潘多拉的盒子。

那，你，准备好了吗？


wzglyay@virxact.com

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
