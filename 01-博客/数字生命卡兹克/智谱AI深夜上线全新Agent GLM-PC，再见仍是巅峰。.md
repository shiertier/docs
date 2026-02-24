---
title: "智谱AI深夜上线全新Agent GLM-PC，再见仍是巅峰。"
发布日期: 2025-01-23
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647668159&idx=1&sn=d275ab34d728c9f425adbc4494304a57&chksm=f133c355f122aff79528e815ac25a92ada70d4bf796b13559bc8c09b9d1350713686d0e4e7fc"
---

## 摘要

**1) 一句话总结**
智谱AI正式发布跨平台PC端智能体GLM-PC 1.1版本，通过引入“深度思考”与“代码机制”，大幅提升了复杂桌面任务的自动化拆解与执行能力。

**2) 核心要点**
*   **版本与平台**：GLM-PC 1.1正式版上线，全面支持Mac和Windows操作系统。
*   **执行效率**：操作速度接近人类，每步操作耗时基本控制在1.5秒以内，任务成功率较1.0内测版有显著提升。
*   **深度思考能力**：新增类似OpenAI o1的思考机制，在执行任务前会生成详细的思维链，进行步骤拆解，并在失败时进行自我反思。
*   **引入代码机制**：打破纯视觉方案的限制，采用“代码式思维链”（生成函数调用如`LAUNCH_APP`等），将严谨的代码逻辑与图形界面（GUI）结合，强化了推理与规划能力。
*   **底层模型**：基于智谱于2023年研发并开源的多模态GUI Agent模型CogAgent，能感知和理解交互界面中的视觉元素与布局。
*   **典型应用场景**：
    *   **自动化通讯**：可自动操作微信，为特定联系人或群成员发送定制化文本，并能直接调用智谱API生成图片和视频进行发送。
    *   **跨应用内容处理**：支持多步复杂任务，如自动打开小红书搜索特定内容、提取图文、扩写文章，并最终保存为桌面Word文档。

**3) 风险与不足（基于原文）**
*   **稳定性问题**：任务成功率并非100%，在某些逻辑不匹配的场景下（如飞书日历半点/整点匹配失败）会陷入死循环或报错。
*   **操作精准度**：偶尔会出现对着屏幕乱点的情况。
*   **硬件兼容性差**：对屏幕尺寸支持不完善，目前无法在带鱼屏等非标准比例显示器上使用，仅适配笔记本标准分辨率屏幕。
*   **能力边界限制**：目前尚无法完成如“剪映自动剪辑视频”或“Blender自动建模”等高度复杂的专业软件操作。

## 正文

年前AI圈混战，热闹程度不亚于23年3月，一个个都卷麻了。

OpenAI半泄漏半预热搞了半天的Agent产品Operator还没来。

智谱的新版Agent GLM-PC悄无声息的憋了个大的，直接先来了。

昨天夜里，智谱突然让我帮忙试一下他们的Agent。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo5w4eUzvpHLicGoDaug5icZicryZTcqYDhxMMPNhfwqZfmjQoIfqj2oMmabpml2icia5zy7xiaVoRESuvQ/640?wx_fmt=png&from=appmsg)

真的是夜里。。。

AI圈好热闹，但是作为一个自媒体，我的肝好想说：

求求了，大过年的，放过我吧。。。

没办法，为了首发，咋办呢，只能熬夜一个通宵，肝他娘的。

还好，在体验了一夜后，GLM-PC 1.1版本，没有让我失望。

虽然小问题还是有一些，但，前路已明。

可以说，如今AI领域，最让我兴奋、最让我觉得科幻的，也只有Agent了。

也给大家简单过一下他们Agent的历史。

2024年10月25日，智谱在
CNCC发布了第一款手机自主人工智能，AutoGLM，直接在行业内和金融市场上掀起了风暴。

2024年11月29日，智谱在Agent OpenDay上，宣布升级版的AutoGLM，还有电脑版本的自主人工智能，GLM-PC 1.0内测版。

但是那时候，GLM-PC还是非常不成熟的，我也在当时的发布会现场写到：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo5w4eUzvpHLicGoDaug5icZicj8WRjuVHOAvy9ibCBpnl9B9QpmJ3W8NY7abauQibRZqldE6zHkPzlBfQ/640?wx_fmt=png&from=appmsg)

终于，两个月以后，GLM-PC 1.1正式版，来了。

复杂任务拆解能力大幅强化，任务成功率比1.0高太多太多了，操作速度直逼人类，每步操作几乎都在1.5s以内，虽然别看只是0.1版本的升级，但我觉得他们内部对比版本号命名还是保守了，其实完全可以叫2.0的，再不济1.5也是可以的。。。

而且，Mac和Windows，全都都可用了。

跨越时空
，智谱AI也完成了7年前，老罗在鸟巢那个“理解万岁”的梦。

也不知道，老罗看着如今的GLM-PC 1.1版本，会不会也摇着扇子，感慨到：我当年那个TNT也是很酷的啊，就是这么想的啊...如果我们晚做7年...可惜啊，没有如果。

网址在此：
https://cogagent.aminer.cn/home

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo5w4eUzvpHLicGoDaug5icZicKEfN6EHhibz9acmdpYIDpAniaAANxg8sltzl8Jiao3JGKIb8k7YQ8BAFw/640?wx_fmt=png&from=appmsg)

下载注册以后，就会来到首页。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo5w4eUzvpHLicGoDaug5icZic3lcnzzvwDKZDf3mx9fd91zvEKfnq6TSenFMV2Al2tia54icj9KqKczLA/640?wx_fmt=png&from=appmsg)

虽然我也不知道智谱他们为啥要给GLM-PC取名叫牛牛，可能，是因为GLM-PC作为新时代的Agent代表，可以堪称赛博牛马？...

这次最大的功能更新，是他们加入的深度思考。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo5w4eUzvpHLicGoDaug5icZicJ77AgZXs6YMqFStlQPkamDD5VgWhVj16QK7Hibw7ZPMLiaCcoAyf1Okw/640?wx_fmt=png&from=appmsg)

类似于OpenAI o1那种做法，你给GLM-PC发一个任务，他会给你先生成一套非常详细的思维链，自己给自己想明白以后，再去执行。

比如说给微信上的“熬夜测试”群的所有群成员发送2025年新春祝福语。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo5w4eUzvpHLicGoDaug5icZicL5Qq3nv9Gibo7Viao3owibPFQeEhA8w1peO1bRZWovHyxpq2lq0r8Mdiag/640?wx_fmt=png&from=appmsg)

他会一步一步思考、拆解、返回结果，即使失败了也会自己PUA自己来进行重新反思。

而且最特别的是，跟手机端的AutoGLM不一样，这次更新明显不只是纯视觉方案了，还引入了代码机制。

生成的内容，是函数，在上图中，能看到两个GLM-PC定义的函数LAUNCH_APP和CogAgent。

这个点非常有意思，代码是极度严谨、规范、正确率高的方式，他们抛弃了传统的思维链，而是使用代码式的思维链，在我几个小时的体验里，明显
能感觉到，在这套逻辑的加持下，GLM-PC对复杂任务的规划、推理、和反思的能力，得到了明显的强化。

之前GLM-PC 1.0版本的模型，
是智谱在2023年就开始做的多模态
GUI Agent - CogAgent，去年12月20他们也直接开源出去了，能感知和理解交互界面中的视觉元素与布局，模拟人类做出任意元操作，就比如点击、键盘输入、悬浮、拖拽那些。

而这次加入代码后，通过代码思维框架和图形界面的结合，有点像神经心理学理论中的左右脑，为右脑补齐了理性的左脑，成了一个真正完整的智能。

看看上面这个case的实际运行效果。
视频为了大家观感，我都做了2倍速处理。

整体上，一气呵成，直接给我测试群里四个人，全部发了一个新春祝贺，甚至还是定制化的，每个人都写了名字，内容还不一样。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo5w4eUzvpHLicGoDaug5icZiclpIjmYAgUzzMyVya7PnspS7rbHkYy8KqaibiaB6rBGskGsiajbNPicsPhA/640?wx_fmt=png&from=appmsg)

我还能说什么好呢？

真的，玩AI这么久，体验了几百款AI产品，我已经很久没有被AI所震撼了。

但是当这种任务，在电脑上，AI理解我的意图后，自动化完美的处理完成的时候，我才真真切切的感受到。

科幻变成现实的感觉。

全世界，智谱，是第一个做到的。

这一刻，怎么吹国产AI，我觉得都不为过。

2025，必是真正的Agent之年。

我也希望，是属于智谱Agent，璀璨的一年。

除了单纯的发微信文字消息，你还可以让AI，给你制作图片和视频，自动发送过去。

比如，我想让GLM-PC，
给微信上的“鲜虾包”发送2025年新春祝福语，再给他制作一个新春图片和一个新春祝贺视频，发送给他。

不止发文字，GLM-PC还直接调用智谱自己的接口，创作了图和视频，发给了鲜虾包。

太太太太牛逼了。

这个图片和视频的美感虽然确实有点不太好看，但是不妨碍作为Agent的这个能力，直接酷到爆炸好吧。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo5w4eUzvpHLicGoDaug5icZic3qhMtekibzA8m40cBweIMS6jmYHFmbfGnIvwnzGDrZkrial8DVxgtBVA/640?wx_fmt=png&from=appmsg)

又比如我还可以让它：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo5w4eUzvpHLicGoDaug5icZicoAD5s1OpLxxyF8OtuSL0IRUxjPWJtmq5DRltkaltRcLDwiaSicmCsCJQ/640?wx_fmt=png&from=appmsg)

直接一气呵成。

虽然最后出现了BUG，一直卡死在时间循环那了，因为调用错了时间，且飞书日历只有半点和整点，时间匹配不上，所以没能成功。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURo5w4eUzvpHLicGoDaug5icZickCqBuKmhKNcjibe3eX9OwY1iaEZjGqYXiaHeichVLKDyiaE2zcEgNaA8fuQ/640?wx_fmt=png&from=appmsg)

但是在我看来，依然瑕不掩瑜。

整体测试上，在多步任务上表现还算是比较稳定的。

比如马上春节了，我们可以让它：打开小红书，在小红书搜索春节习俗，获取前三篇的图片和文字介绍，扩写成一篇文章，保存到桌面Word文件。

可以看到，这些任务都执行的很好，把前三篇的文章都保存下来了，还能扩写，word文件也保存的很好。

你什么都不需要干，只需要一句话，一篇word就完事了。

这一瞬间，我感觉，我看见了未来。

我脑子里莫名其妙想到的一个场景。

我穿越回到了1976年，在加州那个著名的车库里，我面前站着乔布斯和沃兹尼亚克，看着他们正在焊那个具有革命意义的Apple I，我拉着他们走到旁边，说：

嘿，给你们看一个神迹。

这叫，人工智能。

你看，我也见证了一个新的时代，见证了人机交互的又一次变革。

GLM-PC 1.1的出现，固然还有很多不足之处，比如任务成功率不是百分百，有时候也会陷入死循环。
还会对着屏幕乱点，屏幕尺寸的支持也不是很好，我的带鱼屏直接没法用，只能拔了外接屏幕用我的笔记本标准分辨率的屏幕。

甚至，在我们的幻想里，真正的Agent，应该是可以打开剪映给我们自动剪个片子，打开Blendr自动建个模，它应该是个无所不能的超人。

当然，今天，AI还没有达到这一步。

但是永远不要怀疑，AI的潜力。

凌晨5点，我合上电脑，关灯入眠。

隐约中，我仿佛看到了一束光。

想来，当它再次亮起的时候。

我或许会跟着它一起，走得更远，更深。

走向那个，与现在相连的未来。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
