---
title: "ChatGPT新功能Code Interpreter评测 - 何以为神"
发布日期: 2023-07-09
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647658922&idx=1&sn=f488caa467917c5b771f36e7707cc4ca&chksm=f1ad613b29775535123c28a81b43bcb68ab2c1b44325aa26c1eadb21f7a37834a1a0aa787bad"
---

## 摘要

**1) 一句话总结**
OpenAI向ChatGPT Plus会员全面开放了Code Interpreter（代码解释器）功能，该功能类似于基于Python的自主代理，能够通过自然语言指令高效执行数据分析、图表生成、图像处理及格式转换等多种实用任务。

**2) 核心要点**
*   **获取方式**：面向所有ChatGPT Plus会员开放，用户需在设置页的“Beta Features”中手动开启。
*   **产品定位**：类似于仅使用Python的AutoGPT，具备自主理解指令并完成任务的能力。
*   **数据分析**：支持直接上传原始Excel文件，可根据业务需求快速计算并输出分析结果（如计算阅读与分享的转化率）。
*   **数据可视化**：可一键生成热力图、散点图、折线图等复杂图表；在遇到执行错误时，具备自我纠错并提供替代方案的能力。
*   **OCR文字识别**：能够从英文扫描件或PDF图片中准确提取文本内容。
*   **图像处理**：无需专业设计软件，通过对话即可完成图片转灰度图、像素化、修改尺寸/分辨率及图片压缩等操作。
*   **文件格式转换**：支持跨媒介格式转换，包括视频转动图（MP4转GIF）、音频转换（WAV转24000采样率MP3）、图片转换（PNG转ICON）等。
*   **二维码生成**：支持将指定文本或语句直接转换为QR二维码。

**3) 风险与不足**
*   **中文字符显示缺陷**：在生成可视化图表时，存在无法正常显示中文字符的问题（但系统会尝试提供其他解决方案）。
*   **无联网能力**：当前环境无法联网调用外部API（例如无法调用外部翻译API对提取的文字进行翻译）。

## 正文

前几天，OpenAI直接甩出来一个王炸，Code Interpreter面向所有的ChatGPT Plus会员开放。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrUDQoQWSQe39K8bBIstMsuxPvVv2RIJbUuQ4bIIvlauALVpASaE2pYgle3eMHqXubNZQRvV6spfQ/640?wx_fmt=png)

当时我在上海参加WAIC，这两天只能断断续续的使用，但是使用过程中，心里的激动一浪高过一浪。

今天回到天津，终于有空坐在电脑面前，好好码码字，聊聊Code Interpreter。

Code Interpreter如果仅仅理解成代码解释器我觉得不太恰当，他更像是一个目前只能使用Python的AutoGPT，这是OpenAI在自主代理方面的全新的尝试。

我觉得它也可以对标另一个电影中的人工智能助手。

它的名字叫做，贾维斯。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURrUDQoQWSQe39K8bBIstMsuaiaEALpErvCdRJgFEPjKqWmrxXDShH82fdTcOyNI562fHylVVUElc2g/640?wx_fmt=jpeg)

我列出了6个这两天我自己使用的一些案例，用这6个案例，直观的告诉你他能做什么。以及未来它的上限有多恐怖。

当然，第一件事，你得先把这个功能打开。

只要你是ChatGPT Plus会员，点击左下角头像，进入设置页，找到Beta Features，把里面的
Code Interpreter打开就行了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrUDQoQWSQe39K8bBIstMsuJpQtibrvbFGmviaTe8WjECewmAWC9opwcm4icoXdKCmKfVR6UXM3doPjg/640?wx_fmt=png)

以下是我的6个案例：

1.数据分析

数据分析未来可能要被永久的改变了。

人人都能做数据分析，不是说说而已。扔给他一个原始Excel，然后你就可以根据你的业务需求随便分析。

比如我想看看每当我发文章，当天有多少用户看到我的文章会分享，你让我自己处理，还是挺麻烦的，现在，1分钟完事。直接得出我的结果，0.1，即
平均来说，每阅读100人，有大约10人会进行分享。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrUDQoQWSQe39K8bBIstMsuNbr7fallhxANvPxOYNFZdtIBbMmcrqJicMZqXibCvA416WQmgZJnq4gA/640?wx_fmt=png)

数据分析，从来没有如此的方便快捷！！！这特么是真正的生产力！！！

2.生成可视化图表

Code Interpreter可以生成任何类型的可视化图表。

以前生成可视化图表费死了劲，特别是一些复杂的，比如热力图、散点图，还得自己拿Python画，现在直接一键生成，还是用我上文的Excel的例子，我想看我阅读次数的折线图，以及渠道分布。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrUDQoQWSQe39K8bBIstMsu8CQRUuObceyIMVwGUfDbnvOe8tgeruZ0nRIgGQTyl4f210eJXzn0icw/640?wx_fmt=png)

虽然翻车了，因为中文并没有显示出来，但是我反而觉得更特么的牛逼了。
因为他会自己找出错误，当他发现自己解决不了这个问题时，会给你另一种解决方案，来确保你完成任务！

这特么的才是真正的人工智能！

3.从图片中提取文字（OCR）

我有很多论文PDF，全都是英文扫描件，导致我阅读起来极其不方便。

毕竟，我的英语真的很差。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrUDQoQWSQe39K8bBIstMsuAwGkEuGrD3EWx3AsIADuUa1ZaXA6ATSicGSguP41EpHdjZvImshib35Q/640?wx_fmt=png)

但是现在，我直接可以让
Code Interpreter给我提取出来，虽然我还想让他自己翻译，但是他自己去调用翻译API，然后发现自己没法联网调不了...

4.处理图片

对非设计人员来说，用
Code Interpreter处理图片简直好用到爆炸，你再也不用去下载恶心的PS，或者用那些蹩脚的设计工具了。比如我的这张图。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrUDQoQWSQe39K8bBIstMsuyqkq4NoSOVIfUicVr4pM1C5cjk1VQcNnmsuzwsTwtesySDjYRkxww2g/640?wx_fmt=png)

一句话，直接让
Code Interpreter处理成灰度图。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrUDQoQWSQe39K8bBIstMsuxicvFvD4ia4bOQRaZXPyhyRmraa8wOgth1H0CibpsP0FDBuyraibnuojpA/640?wx_fmt=png)

再让他处理成像素风格的图。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrUDQoQWSQe39K8bBIstMsu3iarrudYllhZ0ibibbqGtpL6dc3Lhib2SszborK34PDL8nmdZ1dav3Lqew/640?wx_fmt=png)

至于什么修改图片大小，修改分辨率，压缩等等，那更是手到擒来！

5
.转换格式

以前，改文件格式是我非常痛苦的一件事，比如MP4转GIF，比如MP3转WAV，比如PNG转ICON等等等等。

有了
Code Interpreter，那些智障的工具和网站我再也不会用了。

比如这个MP4转GIF。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrUDQoQWSQe39K8bBIstMsuEcqEWADvV1ksibA5fa4TcunnHWb5ELSZ2iauhd1nic5qoibhicibBTwyYc0g/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURrUDQoQWSQe39K8bBIstMsuiaiadWicm60nG8jxx9uGPKf8ia7r1TgbJ5Jd3ktibrvb2rThpYvpN4michmA/640?wx_fmt=gif)

比如这个WAV转24000采样率的MP3。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrUDQoQWSQe39K8bBIstMsukGmJanR6bIXG5U6hjlXlA9595m1eSsw7GrLVhlfFmLMYPh5PlazNPg/640?wx_fmt=png)

真的，喜极而泣。

6
.生成二维码

生成QR二维码就是OpenAI官推的一个案例。

比如，我要把一句话变成二维码。

直接发过去就完事。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrUDQoQWSQe39K8bBIstMsuUK8E6XmFFIicXEpunc4rGNwofe8CO47hUYcgDYrOAAjLm3u11je6u3Q/640?wx_fmt=png)

写在
最后。

好多个月没有这种感觉了，那种因为新东西，而兴奋的睡不着觉的感觉。

就像那些科幻电影中的情节，我们终于拥有了一个可以理解人类语言，还能按照我们的命令完成任务的智能助手。

终于，拥有了自己的贾维斯。

想无穷无尽的去发挥自己的想象，去探索自己做为人类的边界。

我的这几个案例，仅仅只是入门级别的冰山一角，但是希望能为大家抛砖引玉。

Code Interpreter。

是能够与ChatGPT并驾齐驱的产品。

是人工智能史上新写下的一串名字。

是从OpenAI手上，诞生出的又一个。

大师之作。

⭐吧，
感恩。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
