---
title: "ChatGPT的联网插件Browsing评测 - 期望越大，失望越大"
发布日期: 2023-05-16
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647658536&idx=1&sn=94da7bfb8f6de0325dea5a51d70ced40&chksm=f1a22024e056bac919f4fd2f99a54d69f6722fee8b8e525e4ba629b34759090171315160c621"
---

## 摘要

**1) 一句话总结**
ChatGPT官方联网插件Browsing在发布初期的实际表现远不及预期，暴露出搜索逻辑不佳、响应速度极慢以及受反爬虫协议限制无法读取国内平台数据等显著问题。

**2) 核心要点**
*   **发布背景**：OpenAI在Claude 100k版本面世后，推出了ChatGPT官方联网插件Browsing。
*   **整体评价**：作者经过3天的深度测试，认为该插件目前仅为“大号玩具”，尚未达到可供用户正常使用的成熟阶段。
*   **搜索逻辑缺陷**：在未加特殊指令时，插件会将中文查询词（如“明天天津天气怎么样”）强制转换为英文进行搜索，导致多次抓取失败，需用户手动指定“请使用中文搜索”才能正常工作。
*   **响应速度极慢**：无论是中文天气查询还是英文股票查询（如特斯拉股票），单次搜索耗时高达1至5分钟，效率远低于传统搜索引擎。
*   **支持部分外网链接**：插件能够正常访问和读取如Twitter等部分无严格限制的外部实时链接。
*   **遵循爬虫道德约定**：OpenAI严格遵守`robots.txt`文件规则，主动避开禁止抓取的站点。
*   **国内平台数据封闭**：由于微信公众号、东方财富、小红书等国内平台存在严格的反爬虫限制（被称为“数据堡垒”），Browsing插件无法读取这些站点的链接内容。

**3) 风险与不足（Risks/gaps）**
*   **可用性差距**：搜索耗时过长（等待时间长达1到5分钟）且存在多余的语种转换逻辑，导致实际落地体验极差。
*   **信息获取盲区**：因严格遵守`robots.txt`及反爬虫协议，插件无法突破国内厂商的“数据堡垒”，导致大量国内主流平台的数据无法被抓取和解析。

## 正文

随着Claude的100k版本的面世，OpenAI也被逼的放出了他们手上的王炸——
ChatGPT plugins。

被誉为新世代的APP Store，要革世界的命。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqMczTgy8wkgQ5rWQ98WcC3w7ulhs26xd0bE277LgjMwibNN8ZAFHwdRTd9xJNjv0fMwSv5vlRjnAg/640?wx_fmt=jpeg)

随着他们宣布放开，已经过去了整整3天，在这3天里面，我也深度体验了无数次这个传说中的，能让ChatGPT能联网的，OpenAI自己研发的官方插件——
Browsing
。

然而每次使用，我都是满怀期待的打开，然后再连连叹气的退出来。

Browsing这个插件，别说跟NewBing掰掰手腕，这玩意，狗看了都摇头。

直接上个例子。

我问他“明天天津天气怎么样？”

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqMczTgy8wkgQ5rWQ98WcC330B1t0b0qgbLgljfXBlicA07rbWCbAkeuoppnibGFGhYMBBkiaPiblZfqQ/640?wx_fmt=png)

这货直接非要先把我的词语，转成英文去搜，这个智障程度就离了个大谱，我先说明，他并不是一定要用英文搜的，也支持中文搜索，但是先转英文属实是蚌埠住，这好歹是你OpenAI自己的插件啊大哥...

等待20秒后，这货还是爬链接了。

然后这货爬到了第一个链接，失败。再爬一个，又失败。开始爬第三个。
最后，我等了5分钟之后。
ChatGPT：“
对不起，我在查找明天（2023年5月17日）天津的天气预报时遇到了一些问题。多次尝试访问各种天气。”
我属实是没绷住。我们点进去看看它爬的那几个链接。
。。。
也是，这玩意好像没啥卵用，毕竟你不会自己换算。。。
再浪费了5分钟的宝贵时间后，被逼无奈，我们只能加一句：
请使用中文搜索：“明天天津天气怎么样”
行了，这次终于聪明了，知道上中文了。
等待1分钟之后，爬出来了。
效果还行，除了这等待时长过于磨叽，1分钟足够我去百度搜10回了。
我们再看开头那个中文转英文，简直就是脱裤子放屁，多此一举。
同时，不要觉得是国内的事，我们直接用英文问，也一个样。
比如我们问："
How has Tesla stock fared in the last month?"（特斯拉股票最近一个月的行情怎么样？）
在等待了2分钟之后，并没有什么区别。
在等待了5分钟之后，终于展示出来了。。。
一个字，慢。实在是太慢了。就目前这个阶段，纯按搜索能力的话，典型的大号玩具。我无从得知是基础能力缺陷还是网站的反爬虫。但是这样的产品，至少我认为还远远没有能扔给用户使用的阶段。
而联网的另一个能力，也是大家一直以来所期待的，读取实时链接。
随便找了个twitter的帖子来做演示。
问题不大。
再用国内的链接来测试一下。
以上三位，分别是微信公众号、东方财富、小红书。
OpenAI遵守道德约定，对那些拥有
爬虫限制、拥有 robots.txt 文件的站点，避开那些禁止抓取的内容，不去爬他们。
于是，形成了上述的世界名画。
国内厂商，各个都是数据堡垒。
写在最后。
营销号遍地走，3天里，无数文章都在宣传
Browsing这个东西改变世界啦，让ChatGPT起飞啦，等等。
诚然，我认同他的能力，作为基建的一环，他必不可少，也是新的想象，所以我非常激动，心中一团火，无数次夜以继日的翘首以盼。
但是，实际的落地上，不好就是不好，没什么可说的。
我从来不会一股脑的吹，也不会一股脑的骂。
只能说，期望越大，失望越大。
以上，创作不易，有用的话请点个关注并给个星标⭐，感恩。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqMczTgy8wkgQ5rWQ98WcC3xLQVaIoAVJha4TJFnic2hF8HLZ4vHRVsvXeSm7RNez6ibibv5srPdS8Ng/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqMczTgy8wkgQ5rWQ98WcC3ajWF1CtzsyE51VBkZhyV5arO1HhjuPT0ogv2yrcWtd2eu1Ll8c0r0w/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqMczTgy8wkgQ5rWQ98WcC3eozR8CO1zYAfyn6Kva2icBRUaMZkCqEiaheBGDwjaykibV9dpuh0jeguw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqMczTgy8wkgQ5rWQ98WcC3jMEJNyoiazj8dQmfJusicvCBg2uZHCN17l3BficYESic9xAUnMMX2yBJ3w/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqMczTgy8wkgQ5rWQ98WcC3ia6LxvkfcghEicHrdlPte4TELGLUiaWBiaIBztlbG0H6WjQTmfq4fcsbpg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqMczTgy8wkgQ5rWQ98WcC33T2jUdL38ke67AnMIJFpEZfCjs3pibeQkyAw6T3tR81aYjAK5VhlN1Q/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqMczTgy8wkgQ5rWQ98WcC3ZUdVomZoolchACsbFibVqvria4h5SGEmRge5Htr0JYKpoqXyJGx0jVSg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqMczTgy8wkgQ5rWQ98WcC3MyxjX4pwcKrvDjpGromLibga60W1P37RKMstwUUcHXV4LbCCic974BFA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqMczTgy8wkgQ5rWQ98WcC363FdYz5jqvv2S78FI6eyPlSybrdjyicQZDwXWnBicBBibLhJTpiarLiahEw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqMczTgy8wkgQ5rWQ98WcC3pFKqBBNF6p191UhZ0LhKqLu5yK3gibXibrH2PmbyrzdKo4QJvUzILnZA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqMczTgy8wkgQ5rWQ98WcC3mrg2u0uoZogppcB8Ws11enQEL3GkdYewGdzuic6X8zLEQZvO4h8g91Q/640?wx_fmt=png)

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
