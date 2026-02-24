---
title: "有手就行，5分钟教会你在QQ上玩转全网爆火的Clawdbot。"
发布日期: 2026-02-02
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647679508&idx=1&sn=0c7b5bdd23511797825f0a321bfe3b55&chksm=f1643a2a96c83b7dd236a93847bb011fad3f655ab8b5fa8630caafa499064a699a2f5d07fcb6"
---

## 摘要

**1) 一句话总结**
本文详细介绍了如何通过购买低成本云服务器部署 Clawdbot（OpenClaw），并将其与 QQ 机器人打通，从而实现低门槛的手机端 AI 对话体验。

**2) 关键要点**
*   **方案适用性**：相比本地部署+飞书，云服务器+QQ 方案门槛更低，适合没有多余电脑或非飞书重度用户的群体。
*   **云服务选择**：对接 QQ 推荐使用腾讯云（20元/月，2核2G，20M带宽）；对接飞书推荐使用火山引擎（9.9元/月，5M带宽）。
*   **模型配置建议**：目前强烈建议使用 Kimi k2.5 模型，暂不推荐使用混元模型。
*   **云端部署步骤**：在腾讯云完成实名认证并购买轻量应用服务器后，进入“应用管理”面板填入模型 API Key。
*   **QQ 开放平台注册**：不能直接使用 QQ 号快捷登录，必须先通过邮箱注册账号、设置超级管理员并完成个人认证。
*   **QQ 机器人沙箱测试**：创建机器人后，需在“沙箱配置”中添加自己的 QQ 号为成员，并通过扫码确认。
*   **网络与鉴权打通**：需将腾讯云服务器的 IP 地址复制到 QQ 机器人的“IP白名单”中；随后生成 AppID 和 AppSecret，并填回腾讯云的配置面板中完成最终绑定。

**3) 风险与缺口**
*   **数据与特性风险**：Clawdbot 主动性过强且存在数据风险，因此推荐使用云服务器或独立设备（如 Mac mini）运行。
*   **生态限制**：微信平台严防死守，目前无法实现微信端接入。
*   **配置报错风险**：配置模型 API Key 时，国内版与国际版的 Key 必须与所选版本严格对应，否则会报错。
*   **密钥丢失风险**：QQ 机器人的 AppSecret（机器人密钥）生成后仅显示一次，关闭弹窗后无法再次查看，未保存则只能重置。

## 正文

Clawdbot（现在改名叫OpenClaw了）有多火，就不用我多说了吧。

上周我写的Clawdbot部署教程，被转发了1.7万次。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRywIDdJVK43iaBqpUZHREdxIbP8nYS45Ojibq5XRXFjy9jdHrdFbOtMB6SB2T8uOuBfnkJhVCkWrg/640?wx_fmt=png&from=appmsg)

结果，这个周末，Clawdbot的热度因为人类禁行的AI社区Moltbook，又再次爆火了一次。

大家都纷纷让自己的胖比小龙虾，在Moltbook上进行发帖。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRywIDdJVK43iaBqpUZHREdNJ0hVTtYJTr9XwAelMmRbwkWib3CnE3LuWBI4MCKww4jZSw1RWuHPjw/640?wx_fmt=png&from=appmsg)

因为Clawdbot的特性，主动性过强以及有数据风险，所以，买一台mac mini或者上云，用手机随时随地的跟它进行对话，才是最方便的。

上周的教程里，教了大家怎么在本地部署+跟飞书打通，很多朋友纷纷跟我反馈说一步一步走下来全部搞定了。

但是也有更多的朋友跟我催更，说，他们没有飞书，而且也没钱买多余的电脑来玩，还能怎么体验。

所以，我觉得可以给大家带来一个门槛更低的使用教程。

那，就是云服务器+QQ。

直接可以在你的手机QQ上，跟Clawdbot进行对话。

就像这样。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRywIDdJVK43iaBqpUZHREd3EBmWz0wYXPVJf9f2dLia9B7daymhMoFhCn3rQmyGuJBedGhvmkiajdw/640?wx_fmt=png&from=appmsg)

要不是微信严防死守，一丁点口子都不开，说实话，我觉得其实微信+Clawdbot的体验，才是最牛逼的。。。

而想在QQ上用，只需要超级简单的2步：

1. 上云部署一个Clawdbot。

2. 在QQ上创建一个机器人，与腾讯云打通。

然后就完毕了，你就可以，快快乐乐的开始玩耍了。

一. 上云部署一个Clawdbot

因为要用QQ，所以云的选择上，自然就是腾讯云最方便了。

他们也把两边打通了，可以非常简单的就接上。

而如果你是飞书重度用户，我还是推荐你用火山引擎。

因为，火山比腾讯云便宜10块钱。

腾讯云地址在此：
https://cloud.tencent.com/act/pro/lighthouse-moltbot
#HW

非常推荐你先买这个20块钱1个月的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRywIDdJVK43iaBqpUZHREdazX1CvnQSwfWicjNI8JDvZ0icypnc63lWgEJ70uf4yHbJNskuT2oxknA/640?wx_fmt=png&from=appmsg)

因为Clawdbot完全不吃性能，所以2核2G真的就够用了，带宽20M。

上面那个99块钱的，是一年的价格，讲道理是最便宜的，但是我依然建议是，你先玩一个月试试，你觉得真的有用了，再去买一年的，免得到时候变成了你的健身卡= =

而火山那边，就更便宜了：

https://www.volcengine.com/activity/clawdbot

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRywIDdJVK43iaBqpUZHREdnX02HTW4B3ubIIoWeGLtMDLYky2n7XwDjO9dib7ibgz1Nibnhm175oBdg/640?wx_fmt=png&from=appmsg)

一个月只要9.9，一年价格只要58，一个云服务器带回家。

不过火山的带宽是5M，腾讯云那边是20M。

大概就是这样，这两边可以根据你的需求选取，用QQ玩推荐腾讯云，用飞书玩推荐火山引擎。

我们还是用腾讯云举例子。

进入到网页以后，你就正常先登录，然后可能需要做一个实名认证，这是规矩，你就正常做一个个人认证就OK了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRywIDdJVK43iaBqpUZHREdGCMfFraAo1fUqiaKtT4lqhF0kLyKyn5N1JPxHIqkg5BwyQY6ABb4MYg/640?wx_fmt=png&from=appmsg)

然后回到我们刚才腾讯云的购买页。

点击20块钱那个服务器的立即购买，然后在右边的弹出窗口里，正常购买就行，有一个一年1块钱的存储，你可以勾一下，这个约等于白送。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRywIDdJVK43iaBqpUZHREdZS4WibQicyPEftfIUtS5QITfxiaPYcv3d6HAe1dibetnhM5WJIicUXXVPsw/640?wx_fmt=png&from=appmsg)

然后就会跳转到订单页，正常点击支付。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRywIDdJVK43iaBqpUZHREdozE0zugratGDF9Gjlm9cgb3m3tPUAODib6qQpb9mSCAWSPLe8icickFow/640?wx_fmt=png&from=appmsg)

支付成功，点击查看实例。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRywIDdJVK43iaBqpUZHREdg4oKj65qwfTM1J4cj6QzwLLNkMX0YHXvg1XlO20XImcbFEJEqb9DVQ/640?wx_fmt=png&from=appmsg)

就能看到这个看着就非常呆逼的胖比小龙虾服务器了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRywIDdJVK43iaBqpUZHREdkghcVchClCnxYECJlAvd3BU3X0DnXLDialuddflWcric3fia15klao9bA/640?wx_fmt=png&from=appmsg)

点这个卡片，进去，在顶部tab上点击第二个标签，应用管理，我们要开始配置模型了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRywIDdJVK43iaBqpUZHREdTy6ySia9rrZ6oND7XaRFJpSCux7D0evuReiaXiaE7icDHMsjdAHvofibr7Q/640?wx_fmt=png&from=appmsg)

模型这块呢，咱有一说一，目前就别用混元了，按照Clawdbot作者的说法以及我的测试，目前强烈建议大家使用Kimi k2.5。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRywIDdJVK43iaBqpUZHREdCllricjibPmK4cEhMzCEpicpTx4IHUCXvqUcicwL8eIdN54NxOx4dCOib0A/640?wx_fmt=png&from=appmsg)

这里稍微注意一下，你前面选了国内版的，就用国内版的key，选了国际版的，就用国际版的key，千万别弄混了，要不然会报错。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRywIDdJVK43iaBqpUZHREdpOlQDMrCAfyHiboJSnPOO6uSTTicEHa8dRAn1Ok8vxqS2OB9BbjRrmhA/640?wx_fmt=png&from=appmsg)

把这个key，粘贴回腾讯云的那个输入框里就行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRywIDdJVK43iaBqpUZHREddH2lARFpATxughCXK1Y6tUhIWnJWtvZBB6icZAjwskVric1jYdmcMakA/640?wx_fmt=png&from=appmsg)

好了，到这一步，你就先别动了，第二个框，咱们干完另一件事以后再回来填。

先别关，先别关，先别关。

重要的事说三遍。

你可以再新开一个网页。

二. 在QQ上创建一个机器人

你可以再新开一个网页。
然后前往QQ开放平台：
https://q.qq.com/#/
这里有一个我之前不知道的诡异的情况，就是我用我的QQ账号登录，一直发现再给我弹查询失败。
我当时以为我特么遭啥天谴了，在QQ上也能遇到BUG。
后来一查，才知道，原来这个地方，不能用直接用QQ号登录，得先注册才行。。。
点击注册，创建一个QQ开放平台账号。
填邮箱，填密码，然后，他会给你的邮箱发一个邮件，从邮件中的链接再点进去。
按步骤，设置一个超级管理员就行。
设置完以后，继续走个人认证流程。
最后，会回到首页，用你手机上那个QQ账号扫码登录就行。
我们在第二个位置，创建一个机器人。
正常填写信息，创建机器人。
我们就能看到，这个小卡被创建好了。
我们点头像进入机器人详情。
进入沙箱配置。
点击右边的添加成员。
然后把自己的QQ号加进去。
再点击扫码，进行确认。
你就可以把这个QQ机器人，添加到自己的QQ里面了。
这不过，这个时候，你们还没法对话。
因为这个机器人，现在还是个空壳，我们要把Clawdbot给他配置上。
在QQ机器人的开发管理，IP白名单这，我们要给他配置一个IP。
然后还记得我们没有关掉的腾讯云服务器吗。
我们回到那边。
把这串地址复制下来，复制。
回到QQ机器人那边，粘贴到IP白名单里，然后保存。
接着，我们在开发管理那个位置，找到AppID和
AppSecret(机器人密钥)。
我们在AppSecret那块，点生成。
用管理员QQ扫码之后，你就能看到，你想要的两个信息了。
一定要存下来，因为你点击关闭以后，你的机器人密钥，就再也看不到了，下次只能重置了。
再次回到我们没有关掉的腾讯云服务器那边。
我们把配置这块，选成QQ机器人，然后，把上一部QQ机器人的两个信息，填进去。
一切就绪。
点击应用，点确定。
在一顿loading之后。
他就会给你弹出，保存成功。
OK，这时候，回到你的QQ，随便给小卡发句消息。
他只要是AI的方式回复了，一切，就大功告成了。
你就可以，畅快的跟他一起玩耍了。
希望各位。
玩的愉快~
wzglyay@virxact.com

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRywIDdJVK43iaBqpUZHREd6WSIDlYgcSfeFwFqxot5QzfYib5nsRUX4HibYm8S1QxAR89wrbP88JtQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRywIDdJVK43iaBqpUZHREdo1M0cY1Dlt7kkFqxaZDL016uMeNCA1vDOKLUGeqSto3ButUZDRUnPw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRywIDdJVK43iaBqpUZHREdQxYlKWALaIM6VyL9o4FaJzs9Jwd0mdtqIcxzcyRlbVxdZC8X3s1CEg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRywIDdJVK43iaBqpUZHREd3ibYJjibicTlXHXicEbMR8GrrhXw9mSmfatIO87XkLZpARwMDOCUfpV9xw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRywIDdJVK43iaBqpUZHREdNI6ib2jt29EafdP4XaGCZbibleLtib6LOvJ5V1A3BeoMX83URoruLaljw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRywIDdJVK43iaBqpUZHREdWRicN2q8mEThKA6JMYUYFD18LHLE7ooaZq2XsWpK3UHzZaiayIriaJ34Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRywIDdJVK43iaBqpUZHREduLNsXWeiadsEXghBcy6CH26V1FNQFicr1EpfrYEvzRTzy6556go1mcEg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRywIDdJVK43iaBqpUZHREdjY82jnv69bwUrzqZk9uuuRH3Nmg3JCmqibXAVP3ceJZMNLMuT9OgticA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRywIDdJVK43iaBqpUZHREd5qUpXUicaRFLZd9JoBYaKySUOpnPp4viaTycptoyda4837TyPM8cia9jg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRywIDdJVK43iaBqpUZHREd7mWriaV83lQwkiba9rl8GpAjvOuMHJiaS7GiaBX0DtMgTjK0ibeJkFo08tA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRywIDdJVK43iaBqpUZHREd8G4ia5SrOIiczLNyt3nCkzkCULiaCwCyAtFIibuSlwFI3mib3xNBhSneB9w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRywIDdJVK43iaBqpUZHREdaUwPShS4oU1hIaqTLhWiaSDt4HCgicZ1kD4FhRC0EiaOy4Uhbm7SHjNeg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRywIDdJVK43iaBqpUZHREdo9EGicqCLibr5luabPFXb7b9cAZiaOZzSKZmm39EV8XBicvicrv7jbSMEDA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRywIDdJVK43iaBqpUZHREdXkMmJYBcyhF2Df7wmnKTFFPpM1Q0EAMYpiayry5fNzV8va9e0oGRERg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRywIDdJVK43iaBqpUZHREd1UlDz8AfTW2k7m0WJnGd3ic0qpOL1w7ur33sKya7zhq0N2LUX32Sqicw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRywIDdJVK43iaBqpUZHREdyibd7KeL6QAzfYLAEicMNBx0rNqawuKFUicticUkhv3pqQZbuHFNNrpHTw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRywIDdJVK43iaBqpUZHREdjubYkWs03St85CZicE8HYr4jHMxsGvSGCicwPSFobOsvnWpLE6GicaxmA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRywIDdJVK43iaBqpUZHREd0sp3m3lHiczT9WGm860XqSxhLqZmcVZDibfSqLdj8f6R3L8bNdBHgRcA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRywIDdJVK43iaBqpUZHREdbJo9sdnYKicpT5QW8pkBEOfqiccnu1g2XWGZXwBSgX5Q7nLFmNgtuL8w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqRywIDdJVK43iaBqpUZHREdk7pzGiak1utdianriaa3VF7UcpwicnIUuOJhOqHl4bs2kpsdlgu1nJIxMw/640?wx_fmt=png&from=appmsg)

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
