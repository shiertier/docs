---
title: "AI绘图傻瓜指南 - 5分钟带你生成你的专属AI妹子"
发布日期: 2023-02-28
作者: "卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647657700&idx=1&sn=5b873ca094b1b968de6964cd2045fdc3&chksm=f1af8a27395518080713db9172f8746df7a03782ef88779a5bd8fcc1a62d96a5670c66e99a4f"
---

## 摘要

**1) 一句话总结**
本文是一份面向新手的AI绘图教程，详细指导了如何在Windows环境下本地部署Stable Diffusion，并通过配置特定模型与提示词生成真人风格的图像。

**2) 关键要点**
*   **硬件要求**：需使用Windows操作系统，配备NVIDIA显卡，且显存需在6GB以上。
*   **工具选择**：选用Stable Diffusion（SD），相较于Midjourney，SD具有免费、开源、自定义能力强的优势。
*   **安装与升级**：使用第三方整合包（SD-webui-aki-v3），通过“A启动器”同意用户协议后，需在版本管理和扩展管理中一键升级SD版本及内置插件。
*   **模型配置**：需在模型管理中逐个手动添加下载好的渲染模型文件。生成真人照片需在界面左上角将主模型切换为`ChilloutMix`。
*   **提示词（Prompt）设置**：分为正向提示词（期望生成的画面内容，如`<lora:koreanDollLikeness_v15:0.66>`等基础画质词汇加自定义特征）和反向提示词（绝对不希望出现的元素，如低画质、素描等）。
*   **生成参数**：生成前需点击种子（Seed）旁边的骰子图标，将参数设置为`-1`（代表随机生成），随后点击“生成”按钮即可出图。

**3) 风险与缺漏**
*   **合规与法律风险**：明确警告不可将AI用于破坏社会秩序、侵犯版权或肖像权，严禁用于违法犯罪活动。

## 正文

AI绘图现在已经是非常成熟的方式了，很多大厂也引入了AI绘图的流程，也激发了很多人的创意（比如生成很多符合自己审美的妹子
）。

![](https://res.wx.qq.com/t/wx_fed/we-emoji/res/v1.3.10/assets/newemoji/Yellowdog.png)

想了解AI绘图的思考可以去看看我之前的文章：
关于ChatGPT的兄弟 - AI绘图的小思考

今天开始手把手教大家如何使用AI绘图生成自己的真人妹子，大概就是下图这样的（当然你可以随便自定义
）

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURraibxGuHz6cfRAR74OFy6ib8poXYFPxFG7NCh5ibPpbopwuw0QEphia6PXBxTmQMxz8DDDPkfRhNwibwA/640?wx_fmt=png)

我们使用的东西叫做stable-diffusion，一个开源的很牛逼的AI绘图模型。现在市面上主流的有两种，stable-diffusion和Midjourney，stable-diffusion的优势是免费、开源、自定义强，但是需要设置一下；Midjourney的优势是简单快捷，生成效果棒，但是需要付费，同时又局限性。

废话不多说，直接开始。

首先你一定要注意你是是
window电脑，显卡是
NVIDIA的，并且显存6G以上。（此处不懂的去百度一下，不是重点）

一. 安装stable-diffusion

私信我，回复SD，拿到傻瓜式整合包。

（此处向整合包的原作者B站赛博菩萨@
秋葉aaaki致以我最崇高的敬意）

下载好先把【SD-webui-aki-v3】这个压缩包解压到本地（文件包比较大，倒杯水
抽根烟
，咱别急）。解压完成以后，你就能在解压好的文件夹里看到这两个东西，A启动器和A用户协议。

![](https://res.wx.qq.com/t/wx_fed/we-emoji/res/v1.3.10/assets/Expression/Expression_58@2x.png)

![](https://res.wx.qq.com/t/wx_fed/we-emoji/res/v1.3.10/assets/Expression/Expression_96@2x.png)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrIcXBTiag1o1wbqvvIqWmk18uYOJ9zCzvgNjusPlsHABmOgWgSH76gfRZpMKQ3iaREbe1iamPtKiaibtQ/640?wx_fmt=png)

我们打开A用户协议，把【我已阅读并同意用户协议】复制到下面的位置

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrIcXBTiag1o1wbqvvIqWmk16YTm0Z52klFTLZRq6ootC5pHHyKg1z5n7cLXmfBBcCD8YvA4bE8Libw/640?wx_fmt=png)

复制过去以后，Ctrl+S保存，不放心可以多按几下，然后关闭记事本。打开A启动器。第一次启动得等一会。于是我们就看到了这个页面。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrIcXBTiag1o1wbqvvIqWmk1DUJNs70ozFibdvPpQO35yh6O4QHhQkUok8mVx1YL294Rh6pezu9Gf7w/640?wx_fmt=png)

先升级一下，点击版本管理，一键升级，把咱们的stable-diffusion更新到最新版本。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrIcXBTiag1o1wbqvvIqWmk1Z7uce7IZfUv66UQL2a9ketFNic61EngiaFyCF0icjAwQP8zlDZicLFuuFw/640?wx_fmt=png)

再点扩展管理，一键升级内置插件。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrIcXBTiag1o1wbqvvIqWmk1iaFWHXZYWVLWvw7W77NReEic7D0zC5qGuYljOaZ976Ch9WFMZMAT4UZA/640?wx_fmt=png)

马上就好了，咱们再来安装两个模型，因为咱们需要生成特定的真人妹子嘛，所以咱们需要特殊的渲染模型才可以，如果用stable-diffusion原本自己的，那就完全出不来感觉了。点击模型管理，添加模型。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrIcXBTiag1o1wbqvvIqWmk1eMlTs9BEFAGJQ7SKSUyicrywLhVvYA2n9yI1P4nuGOjwm73LgzEJNJA/640?wx_fmt=png)

还记得咱们还下了一个模型包文件不，再弹出的窗口中，找到下载的模型包，把里面的那两个文件点击打开添加进去，要一个一个添加，不支持批量。如果出现弹窗不用管内容，直接点击“是”

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrIcXBTiag1o1wbqvvIqWmk1u0TAuCuib2icibAQmeiaSDndvlaHpO4Gj4EdEJUwfhKOibBwlyFXGa8eFpw/640?wx_fmt=png)

然后回到一键启动，点击右下角的一键启动，大功告成！你的本地化部署就完事了，是不是很简单！

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrIcXBTiag1o1wbqvvIqWmk12gJ98W59cGibtqhjDOS54Bg6hMM254SBZpib5UfFNIHP6IIz10LXKnUw/640?wx_fmt=png)

然后会出现一个代码窗口，不要慌不要怕，跑程序呢，等等，第一次运行时间也是有点长，需要个几分钟，去倒杯水抽根烟尿泡尿。直到过一会你的浏览器就会自动打开一个stable-diffusion的窗口，运行成功！

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrIcXBTiag1o1wbqvvIqWmk1AwM4AZHypEPpXZwHQcAjcYDx9D2IIfxq6SGkSbfl7LlpXcDlicfjj4Q/640?wx_fmt=png)

二
. 生成AI图

stable-diffusion启动成功，接下来咱们愉快的开始生成你的专属AI妹子~

咱们先把左上角的模型选成
ChilloutMix，这个就是专门生成真人照片用的模型。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrIcXBTiag1o1wbqvvIqWmk1NGW9wzWNibCQENqiaV3RooDLq1Z7n1lnESL6Kibygyco8QuZvzVOicxatg/640?wx_fmt=png)

当然，
stable-diffusion的世界里还有很多很多各种模型，比如能生成很多很多风格的Anythin4.5，比如能生成逼真3D幻想风格的
DreamShaper，这个大家以后可以自己探索~这篇先教大家生成AI妹子。

然后我这里直接给大家一组关键词

<lora:koreanDollLikeness_v15:0.66>, best quality, ultra high res, (photorealistic:1.4), 1girl, beige sweater, smile, laughing, bare shoulders, solo focus, (full body), (platinum pink hair:1), ((puffy eyes)), looking at viewer, facing front, closeup
Negative prompt: paintings, sketches, (worst quality:2), (low quality:2), (normal quality:2), lowres, normal quality, ((monochrome)), ((grayscale)), skin spots, acnes, skin blemishes, age spot, glans
Steps: 28, Sampler: DPM++ SDE Karras, CFG scale: 7, Seed: 1735215259, Size: 640x768, Model hash: fc2511737a, Model: chilloutmix_NiPrunedFp32Fix, Denoising strength: 0.75, Clip skip: 2, Mask blur: 4

先不用管是什么意思，直接复制，然后粘贴到
stable-diffusion的这个位置

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrIcXBTiag1o1wbqvvIqWmk1WrgGWA0SqfEpu0eN5RPloLBXUH5HWndjFCC0xT7xqs0JKrKVFyh18g/640?wx_fmt=png)

然后点击这个小箭头

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrIcXBTiag1o1wbqvvIqWmk14cWxmF1VryAonbbmNXIloGyCicB2iczr3z9HHwttgxnNFiaqAZtfYYafw/640?wx_fmt=png)

就能看到字段变啦，大家先只要知道上面两个输入框是什么意思就行了

第一个框：提示词，Prompt，我们的图片会按照你的提示词来生成，每个提示词用逗号隔开，比如我们这次输入的提示词

<lora:koreanDollLikeness_v15:0.66>, best quality, ultra high res, (photorealistic:1.4), 1girl, beige sweater, smile, laughing, bare shoulders, solo focus, (full body), (platinum pink hair:1), ((puffy eyes)), looking at viewer, facing front, closeup

翻译过来就是

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrIcXBTiag1o1wbqvvIqWmk1n2I1fq4Gcqdu4Qic0wOibOUsSCLmbjYvb2ibfibJib3ibFlhvKvVqcCucibiaQ/640?wx_fmt=png)

<lora:koreanDollLikeness_v15:0.66>, best quality, ultra high res, (photorealistic:1.4),
这一部分大家可以不要动，无脑使用，而后面的提示词可以根据你的喜好随意更换。

第二个框：反向提示词，Negative prompt，意思就是你输入的词绝对不会出现，比如咱们这次输入的

paintings, sketches, (worst quality:2), (low quality:2), (normal quality:2), lowres, normal quality, ((monochrome)), ((grayscale)), skin spots, acnes, skin blemishes, age spot, glans

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrIcXBTiag1o1wbqvvIqWmk1G98d06aiaWkHHHC4a8e9clxrybWotflaF8U50PHVA1kdIo4gg4RpPicQ/640?wx_fmt=png)

输完以后，咱们把种子这块的小骰子点一下，让左边的参数变成-1

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrIcXBTiag1o1wbqvvIqWmk1ibvg8ljuOzEfXBPoya8NlrT6Yic8ia5XYoCvVas9ciafQ5AXqjpD1wWf8Q/640?wx_fmt=png)

全部完成以后，咱们愉快的点击右上角那个巨大的生成！

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrIcXBTiag1o1wbqvvIqWmk1jicVHdRwm2vN4xRRLYW9H5sy7sQ7Dq2wDWvcgPojozOKdNGLLa2lNQg/640?wx_fmt=png)

嘟嘟嘟的跑起来后，你就可以看到自己生成的虚拟小姐姐啦。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURrIcXBTiag1o1wbqvvIqWmk1aDiczloDR0df7Mntt3YVxgA99gCKRL30boUr0Zy823TMGz0qF0IsCxg/640?wx_fmt=png)

想生成不同风格图，直接换后面的提示词就可以，开心的玩起来吧~

下一期，我再详细给教大家不同风格的模型用法、神器级别的可以控制动作插件controlnet。大家帮忙点个关注给个赞吧哈哈。

写在最后。

AI无容置疑，已经到了一个危险和机遇共存的时间点。

AI好玩，但是绝对不要用来做任何影响社会秩序、侵犯版权肖像权的事情，更不要用来违法犯罪！

以上，创作不易，有用的话请帮忙点个在看，感恩。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
