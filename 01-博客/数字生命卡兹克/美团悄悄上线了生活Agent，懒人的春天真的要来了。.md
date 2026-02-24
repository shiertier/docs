---
title: "美团悄悄上线了生活Agent，懒人的春天真的要来了。"
发布日期: 2025-09-12
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647675083&idx=1&sn=be6ea160e8b060d7d4485a89e0b6bc07&chksm=f136f47797ae533cb88ff1f55be25916219c22dc0658256979ebe700f046021b5ae9b14732d3"
---

## 摘要

**1) 一句话总结**
美团开启了其首个生活类AI Agent“小美”的内测，用户可通过自然语言对话实现快速点外卖、跨城代点、设置定时自动下单以及获取本地生活推荐等功能。

**2) 关键要点**
*   **产品状态**：美团首个生活类Agent“小美”目前处于内测阶段，使用需授权地理位置信息。
*   **极简交互与闭环支付**：支持自然语言指令（如“点一份之前吃过的粉”），对话界面内设有巨大的“OK”确认键，且支付流程直接在Agent内闭环完成，无需跳转，最快30秒内可完成下单。
*   **记忆与复购能力**：系统能记住用户的历史订单和地址簿，支持在10秒内精准调出历史常点餐品。
*   **跨地域下单**：支持异地/跨城点单，只要地址库中存有信息，即可直接为其他城市的朋友下单。
*   **多业务线打通**：除餐饮外卖，还支持美团闪购（购买日用品、药品等）以及酒店预订。
*   **定时任务（核心功能）**：支持设置周期性自动下单任务（如工作日早10点自动点咖啡、每月自动买卫生纸、每晚自动轮换点外卖等）。
*   **生活顾问服务**：可根据用户口述需求，提供健康食谱规划、餐厅/酒吧推荐及路线导航。

**3) 风险与不足（基于原文）**
*   **服务覆盖不全**：目前不支持打车服务（仅能提供导航），且不支持预订电影票、机票和火车票。
*   **复杂任务处理生硬**：在处理多步骤或复杂规划任务时逻辑较呆板（如让其规划三天菜谱，结果安排了连续喝3天蛋白粉）。
*   **优惠券使用缺陷**：系统虽会自动使用基础神券，但不支持优惠券“膨胀”功能，会导致用户损失部分优惠金额。

## 正文

啊？今天早上9点多的时候。

美团上线了他们的首个生活类Agent。

名字，叫小美。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqHJq9KeGX5oT8EQeTej7735JkMdBQwFCKk2zYFQyiaAgsCy7EeeSjOSB24hlbficByIM84XpAnINkA/640?wx_fmt=png&from=appmsg)

大厂们卷疯了。

这战场，真的从WAIMAI打到了AI了我靠。

而且还真的居然被我猜中了。

我上周写过美团的
开源大模型LongCat
，我当时的标题就是：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrj3QKXuGwib2IAnhU7TqqyRRvHXUbTvt5DpJOSsqbBRBh52dH39dZlbj3VdwFdbZ46wqePZTtFXpg/640?wx_fmt=png&from=appmsg)

我对天发誓，我在写那一篇的时候我完全不知道他们的任何产品规划，只是从他们的推理速度、Agent跑分、还有小的功能来猜，他们可能是为Agent服务的。

结果，一语成谶。

我也第一时间，把产品下载了下来，然后发现是内测。

又火速找到美团的朋友，化缘了邀请码，顺利的进了去。

又火速体验了一番，用最快的速度，把这篇体验文章，送到你们的面前。

聊聊小美。

整个的设计还是挺简洁的。

打开小美以后，她上来第一个问题是问我，应该怎么称呼我。

我本来想写卡兹克，但是灵机一动，我就写了一个：爹。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqHJq9KeGX5oT8EQeTej773cItoXF3ibjJic9cDW4Clg0lCWfbInvzsZzASMvWK4FF6pNTZlpEiamEmw/640?wx_fmt=jpeg&from=appmsg)

于是，我就拥有了一个每天叫我爹的小美。

然后，小美会找你要权限，记得一定要给，别手滑，这种生活类产品你懂的，没有地理位置就废了。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURrj3QKXuGwib2IAnhU7TqqyRdribNib5XzBBwhpibV1ItZzbj4XmLMOxUatdKzMXwvL6o84eqPbTUU7HQ/640?wx_fmt=jpeg)

给完权限以后，我进去的第一件事，就是让他点外卖。

我当时正好在从家去公司打车的路上。

我就随手试了一下，让他给我往公司点一份外卖，中午了，想吃和府捞面家的鸡丝拌面了，这里也给大家推荐一下，是真的好吃又减肥。

我就直接说了一句：

给我点一份和府捞面的鸡丝凉面，加个大师溏心蛋。

速度超快，就给我点完了，流程极度丝滑，我一定要给大家看一下。

全程我0加速，这就是最原本的速度。

不到30秒，完成发送点单支付。

过程中我一度非常担心，支付会要跳到美团那边去，结果全部丝滑的在小美上完成了，是有点东西的。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURrj3QKXuGwib2IAnhU7TqqyRREWXDOcQUvTbTYN2VgZc4R5j70OlibqkrJRGHC2UhOiaibSmUI6Y3icADQ/640?wx_fmt=jpeg)

而且他们还有个很有趣的点，就是你会看到，右下角有一个巨大的OK。

这个设计确实是非常好的，因为在跟小美对话中，我除了开头的话之外，其他的时候，最多的好像确实就是点OK确认。

我又打开了美团外卖，想验证一下，是不是真点了。

结果，真有，外面小哥正在取餐中。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrj3QKXuGwib2IAnhU7TqqyRKiaQyogy1N7icwKicYJT3l0Y3QCuXD8sj5u2cEibMicRJfaImIzk7cSD49w/640?wx_fmt=png&from=appmsg)

半小时以后，我真的收到了，这一份小美帮我点的鸡丝拌面。

而我的同事，就比较有意思了，他当时正干活干的焦头烂额，但是也用小美点了份外卖，我问他，你发的啥。

他说，我写了一句，
帮我点个我之前点过的越南牛肉粉。

然后不到十秒，小美就把他前两天点过的粉拎了出来。

他就说了句ok，点了下付款，然后直接坐等开吃。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqHJq9KeGX5oT8EQeTej773hJqIIAGxwLtExlXzd95Jhv9ZZjfz9p6CNy3PtmgAqBDVH8loHxoKGw/640?wx_fmt=jpeg&from=appmsg)

是有点爽的。

而且他这个用法，我觉得其实更适合我。。。

因为我是那种觉得点餐很麻烦的人，不愿在这上面花太多精力，什么菜对我口味，我能吃到它家店倒闭。

就跟你觉得一个理发店，你觉得他还凑合的话，从此，他们店里每个月就都会固定的刷新出来你这个NPC。。。

所以我的外卖订单非常单一，都是之前吃过的店。

真的，两个月，40单，有一半都是这5家店。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrj3QKXuGwib2IAnhU7TqqyRsyGzOw4bYNRHh6gP6z0t82gFXCLufukWyA4MG1sDBobnTficY8GWEIQ/640?wx_fmt=png&from=appmsg)

之前没有小美，我每次就是去搜之前的订单，然后点再来一单，以此类推。

但因为我除了买饭还经常和公司小伙伴一起点咖啡点奶茶，还会在美团闪购上自己买药买生活用品啥的，就导致我的订单很杂乱，经常得往下翻一阵才能翻到我点过的饭。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURrj3QKXuGwib2IAnhU7TqqyR4uDBica8ricgqkO78nygPibS9FXjVSjQaFqqcPMSAU7Scxv6oTQGqk8nA/640?wx_fmt=jpeg&from=appmsg)

真的，奇奇怪怪，啥都有。

所以这个点外卖的这个过程，就有点烦。

但小美，能直接记得我大前天点了汉堡，上上周宵夜吃了大腰子，完胜。

不只能记住我之前点过啥，它还能，记得我的收货地址。

所以，我不只可以一句话把外卖点到家或者公司。

只要是你地址薄里面有的，它都能给你送到，甚至可以跨省跨区。

比如，我在北京，但往深圳和杭州点一杯喜茶，毫无压力。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqHJq9KeGX5oT8EQeTej773XTqepEfI8Z39AZE0slRGqehFp0ynbyoRjDrALq8TtvFdRXghO66Cuw/640?wx_fmt=jpeg&from=appmsg)

这也就意味着，你不仅可以给自己点，还可以随时给你的朋友一个惊喜，或者让你的朋友给你一个惊喜。

都不用很详细的说出这个地址在哪，就告诉它，是哪个城市哪个区哪条街，它已经能给你对号入座了。

当然，前提是你的地址库里曾经录过这些朋友的详细地址，比如这样的：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrj3QKXuGwib2IAnhU7TqqyRGC2dmZicf92Ry4tkQuTfkjJl3uV4QibkyYria1JiaNFLDGn7yNcOuHP9qg/640?wx_fmt=png&from=appmsg)

要不然它就会让你补充或者新建一个地址。

一会被我投喂到的这两个朋友，不用感谢我，请谢谢小美。

然后我又随手往公司美团闪购点了一堆吃的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrj3QKXuGwib2IAnhU7TqqyRCicUo0J0NsK5DtHdIkNghDC8lQ4YVYZ9Ic6icsMmrVI5ARvCiaT8tu27w/640?wx_fmt=png&from=appmsg)

刚出新手村，我又发现了一个新的华点。

这可能是我认为，最重要的功能，就是，小美还可以设置定时。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqHJq9KeGX5oT8EQeTej7734iaLwhibPvlcTGYg9esXFvicsEY5rDDaqargdlYqib5ZCyde01ECeN4icIg/640?wx_fmt=png&from=appmsg)

而这个提醒可以跟任务结合。

所以这就意味着，我跟她说，
周一到周四的早上，每天早上10点都给我点一杯星巴克的冰美式送到公司。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqHJq9KeGX5oT8EQeTej773KmQ1KaRK3aqHy8KicacNKGDROhibUa7TwJZicHW05Svo0kYYpJTvBkkwg/640?wx_fmt=png&from=appmsg)

挖槽，以后我的定时任务，直接解决了，这个太爽了！

太爽了太爽了！！！

对我这种懒逼，实在是太方便了！！！

AI定时任务+美团外卖+美团闪购，卧槽，这才是懒比的真正福音！！！

我直接定时了好几个任务。

比如把买外星人和火腿肠还有阳光玫瑰直接设个定时自动下单。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrj3QKXuGwib2IAnhU7TqqyRq5svPZzjaDmaqkNsH65Wib2qk1diafZ6VQX5iacGjSE83iconTlxHbenhg/640?wx_fmt=png&from=appmsg)

每个月给我买卫生纸。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrj3QKXuGwib2IAnhU7TqqyRYXvQ0a31P74c4XibSFIIXYzcs5yTUxUjEfDEGudaYBibO3V2tx3Lnibog/640?wx_fmt=png&from=appmsg)

甚至每天晚上给我点外卖，直接自动轮换。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrj3QKXuGwib2IAnhU7TqqyRj8v8RtlEgUTXmwoZuByze1oqsXdgOmYyTZT6WLz3sPbBULGhEqA7hw/640?wx_fmt=png&from=appmsg)

懒逼今天站起来了！！！

AI改变生活，从点外卖开始。

但是定完了以后，忽然又冷静下来了。。。

要是让它执行这个任务一周，我这段时间减下来的几斤肉，全长回来了。

不行，还是要自律。。。

所以我又把小美变成了我的，私人健康顾问。

我让小美给我规划一下未来三天的食谱，然后让它根据这些食谱，帮我采购一些健康食品。

它完成的很好，买来了一堆我看着就不想吃，可以在我家冰箱里放到地老天荒的食物。

果然，健康是特么反人类的。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURrj3QKXuGwib2IAnhU7TqqyRPM4JNoXpHvEH65kI0hE5XTy7IMc9BbDyhGOC0RLgbGfEqLFAhgFLVA/640?wx_fmt=jpeg)

除了健康顾问，你还可以让小美当你的吃喝顾问，玩乐顾问，出游顾问，团建顾问。。。

比如i人想去找个小酒吧喝两杯，就可以让小美推荐适合一个人喝酒的地方。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqHJq9KeGX5oT8EQeTej773K2iaUkoCOuvKfOWh5BOUQUMHTnsmfVcv3ibliaI3nsib6RDB1Gp5MSCib9g/640?wx_fmt=png&from=appmsg)

还能问问他，好基友开的那个AGI Bar怎么样。

顺带给我导个航。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrj3QKXuGwib2IAnhU7TqqyRZqneibhZmPa38tC0ibJlQcos6IQeYNw5mGPeiczFEhhm3OHjML1ptNUVQ/640?wx_fmt=png&from=appmsg)

想要请客吃饭呢，也是直接和它口述你的需求就行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrj3QKXuGwib2IAnhU7TqqyR0OBYhRGYVktqblcLdY0dNKFlrSUvkFZHehHFssvaqTVRg4bbGkH3FQ/640?wx_fmt=png&from=appmsg)

不过，目前小美在餐饮和生活上，虽然有一些便利，但是不足之处，我还是要说一下的。

比如打车，它就办不到，只能帮你导航，这个不支持，就挺难受的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrj3QKXuGwib2IAnhU7TqqyRSWvS02zYia6HtKQY5LIMErIO9zSoL7LjVczcqs5cDiaB2LIQp4V91hqw/640?wx_fmt=png&from=appmsg)

订各种票也还不支持，比如电影票、机票、火车票这些目前也还不支持。

不过订酒店是OK的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqHJq9KeGX5oT8EQeTej773MPsPQnfQEokfC4R6RuHLZAZ8NCgL04EcMQFPyAaHvf1qXwRjylg2Sg/640?wx_fmt=png&from=appmsg)

所以，那些能力，感觉就是美团，单纯的还没来得及做。。。

还有就是在稍微复杂的任务步骤上，会有点呆，比如我让点三天的菜，它让我喝3天蛋白粉- -

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqHJq9KeGX5oT8EQeTej773foI02XOrPrTzvshVP4zvcUjSxPiazLDeC8pcmItdwmHibG8ibcibllbicTg/640?wx_fmt=png&from=appmsg)

然后还有一个非常呆逼的BUG。

就是，小美虽然自己确实会用神券，但是。。。

它不会自己膨胀啊魂淡。

好几单加起来，血亏我十几块大洋。。

不过总之，我觉得，还是瑕不掩瑜。

毕竟这玩意才刚刚上线。

小美小美，这名字我觉得取得是真好。

简单的美好生活。

又有，小而美之姿。

我还挺期待美团下一步要怎么玩的。

毕竟这家公司的基因里。

可是有两个AI。


wzglyay@virxact.com

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
