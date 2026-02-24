---
title: "智谱AI刚刚把他们的Sora「清影」，正式开源了，我爱他们。"
发布日期: 2024-08-06
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647664276&idx=1&sn=5baac1ad019c4292294cf5fff96bff0d&chksm=f1e839080be6879d974de9abdc2adf5c599fbdf68e0c8f9d4a13e57a16df4f4889bd310eff8c"
---

## 摘要

**1) 一句话总结**
智谱AI正式开源了其视频生成产品“清影”的底层基模型CogVideoX-2B，为开发者和企业提供了可本地部署与微调的AI视频生成解决方案。

**2) 关键要点**
*   **开源主体**：智谱AI开源了视频生成基模型CogVideoX（即其旗下产品“清影”的底层模型），代码与模型已上线GitHub和Huggingface。
*   **模型版本**：本次开源的具体版本为CogVideoX-2B小模型。
*   **视频参数**：该模型支持生成长度为6秒、帧率为8帧/秒、分辨率为720*480的视频。
*   **推理算力要求**：本地推理需18GB显存（单张3090或4090显卡可运行），峰值显存会达到36GB，官方表示后续将进行优化。
*   **微调算力要求**：模型支持本地微调，微调需40GB显存（需使用如A6000级别的渲染卡）。
*   **应用价值**：支持微调意味着创作者和企业可以训练专属的个性化风格和角色模型，有助于解决文生视频中“风格一致性”和“角色一致性”的痛点。
*   **商业与生态意义**：开源大幅降低了初创企业和小公司的入局门槛，使其能在保护私有数据的前提下建立自主可控的视频生成工作流，有望催生类似Stable Diffusion的繁荣插件与微调生态。

**3) 风险/不足（基于原文明确提及）**
*   **生成质量差距**：目前该模型的视频生成效果与主流顶尖的闭源模型（如可灵、Runway）相比，仍存在一定差距。
*   **硬件门槛较高**：推理和微调的显存要求较高，普通消费级显卡（如8G显存的4060）无法运行，峰值36GB的推理显存大概率会导致普通显卡爆显存。

## 正文

大半夜的，大洋对岸不卷，国内公司卷起来了。

我真的想睡觉，真的。

起因是我睡觉之前，在看Github的时候，无意间看到THUKEG这个号，更新了一个项目。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp7vTXcOVib0FLf7zztyMCJ0GofOQc5dOaKLJ32wwib3cxEAYA92HZ20t9WiaOdPuRCrPPFPcgWw5Wpw/640?wx_fmt=png&from=appmsg)

CogVideoX
。

网址在此：https://github.com/THUDM/CogVideo

THUKEG算是智谱的官号，而
CogVideoX，则是前两周很火的智谱的第二世代AI视频清影的基模型。

用最通俗的话理解就是，CogVideoX等于GPT4o，而清影等于ChatGPT，你就可以简单的理解为，一个是模型，一个是基于模型做的产品，所以其实可以画个等号。

前两周，第二世代的AI视频大战，在已有的三幻神Runway、可灵、Luma的基础上，Pixverse上线了V2版本，Vidu的模型也千呼万唤始出来。

而作为大模型领域最明星的AI公司，智谱，也加入了这场AI视频的混战，发布了他们的DiT视频产品，清影。

这个产品，在他们的AI助手智谱清言上，就能用。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURp7vTXcOVib0FLf7zztyMCJ0boNE8q27djYCV2XZMhyZJ0kGqJ7ia37U3NxicLXDqoiaFT3D1mezU9iaWw/640?wx_fmt=jpeg&from=appmsg)

但是非常坦率的讲，我没有写它，是因为我觉得，在生成效果上，确实跟可灵、Runway，还是有一定的差距。

而在发布清影的两周后的今天，他们决定，把
CogVideoX，
开源了。

那就值得，吹一波了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp7vTXcOVib0FLf7zztyMCJ0Tf9cOuKhsiar5W0ZHYWw6x8zOWEC0CcAgkujUl4SCa0paH6BWlMOnrA/640?wx_fmt=png&from=appmsg)

CogVideoX模型下载地址：

https://huggingface.co/THUDM/CogVideoX-2b

现在主流的AI视频，全都是闭源的，有一个开源的Open-Sora，但是说实话，效果也差强人意。

而清影，效果虽然跟主流的闭源模型尚有差距，但是在跑一些内容上，至少是可用的状态。

这一次开源的，我大概翻了下，开源的是一个
CogVideoX-2B的小模型。

推理需要18G显存
，也就是说，在有单卡3090或者4090的时候，就可以直接本地跑视频了，不需要再烧钱了，不过看峰值会到36G，大概率会爆显存。

不过他们自己也说了，马上就会优化。

不过我只有一张小垃圾4060，显存就8G，你优化完我也跑不动。4090，说实话，也真的没钱买= =

啥时候AI视频模型，也跟SD1.5一样，能普惠众生人人皆可跑就好了。

这个2B的模型，
视频长度是6秒，帧率为8帧/秒，视频分辨率为720*480
。

这参数，有一股子即梦初代的那感觉了。

我放几个他们官方的case（其实你去清影上跑几个是差不多的）

一艘精致的木制玩具船，桅杆和船帆上雕刻着复杂的图案，在模拟海浪的蓝色长毛绒地毯上平稳地滑行。船身漆成浓郁的棕色，并带有小窗户。地毯柔软而有质感，提供了一个完美的背景，就像一片广阔的海洋。船的周围环绕着各种玩具和儿童用品，暗示着一个充满童趣的环境。这个场景捕捉到了童年的天真和想象力，玩具船的旅程象征着在异想天开的室内环境中的无尽冒险。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURp7vTXcOVib0FLf7zztyMCJ0Twjzn9kOH3SGHjbeNEh2lX23C7icDXFkh63KRAn9ehTJSeyeNsuSMyw/640?wx_fmt=gif&from=appmsg)

镜头跟在一辆白色复古越野车后面，车顶有黑色行李架，越野车在陡峭的山坡上沿着松树环绕的陡峭土路快速行驶，轮胎上的尘土飞扬，阳光照在越野车上，越野车在土路上快速行驶，给整个场景投下了温暖的光辉。土路缓缓弯向远方，看不到其他车辆。道路两旁的树木都是红杉，还有零星的绿色植物。从后方看，汽车轻松地沿着弯道行驶，仿佛在崎岖的地形上行驶。土路本身被陡峭的丘陵和山脉环绕，头顶是晴朗的蓝天和飘渺的白云。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURp7vTXcOVib0FLf7zztyMCJ0XUIfsRUKSApvRWuvAe7iaPA3cpQ7UhzGXBGdnlp0haGDSlicvtAgxG7g/640?wx_fmt=gif&from=appmsg)

在一个饱受战争蹂躏的城市，废墟和残垣断壁诉说着满目疮痍，在这个令人心碎的背景下，一个凄美的特写镜头定格了一个年轻的女孩。她的脸上沾满了灰烬，无声地证明着周围的混乱。她的眼睛里闪烁着悲伤和坚韧，捕捉到了这个因冲突而失去天真世界的原始情感。

![](https://mmbiz.qpic.cn/mmbiz_gif/OjgKEXmLURp7vTXcOVib0FLf7zztyMCJ0mrN2SWlibqqL7dF7jgTGqCzjG7l1LcGCtRu1VDjgz0nicJo7uGcrygog/640?wx_fmt=gif&from=appmsg)

推理大概是这样，但是开源出来，我更期待的，其实是微调和插件的生态。

比如现在大家都在用的AI绘图SD的1.5模型，基模其实做的就跟一坨屎一样，但是毕竟是开源的，一堆大神基于SD1.5，做出了非常牛逼的模型，比如Majic、DreamShaper、Anything等等。

而
CogVideoX，也是可以微调的。

想起了在WAIC上，阶跃星辰跟上影做的AI视频模型，他们用了200分钟的葫芦娃素材，就调了一个葫芦娃大模型。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp7vTXcOVib0FLf7zztyMCJ0v6iaEd6ibvmGc9QvCAPVpDCbaJs4PMNvoniaNlviaBaMa7F5hEHN75W5nQ/640?wx_fmt=png&from=appmsg)

你出的所有的东西，都是葫芦娃风格，你也不用费劲巴拉的去搞什么角色一致性了，我输入大娃，那就出来的就是大娃，我写爷爷和蛇精在一起哈啤酒，那就是他两。

而现在，
CogVideoX开源，我们可以微调的情况下，一些用AI做短剧和长剧集的，完全可以试着微调一个自己的视频大模型，来个性化风格和角色。

因为我自己一直觉得，文生视频的上限和表演动态，是比图生视频要高很多的，但是两个最大的坎是风格一致性和角色一致性，如果可以微调，那也是有很多办法可以去解决了。

CogVideoX-2B的微调，需要的显存是40G，普通的显卡不行了，得上A6000这种渲染卡了。

不过毕竟是视频模型，不说普惠到普通大众，但是对于一些初创公司和小企业，这门槛几乎就是约等于0。

因为，这是开源的，他们不需要再从0开始花费无数资金去做一个自己的大模型，去趟这一趟坑，他们只需要，买点本地的卡，加起来也就几万十几万，然后，就可以本地微调了。

我也一直相信，开源的未来，一定比闭源强。

扎克伯格在前段时间发LLaMa3.1 405B的那天晚上，在Facebook上发了一封万字公开信。

其中有一段话让我印象很深刻。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp7vTXcOVib0FLf7zztyMCJ0qk7x0U9sQKAKuXibPu6PsrvkvFWGJIF5RgVdwiaibWqljOsNS7X2kBQJg/640?wx_fmt=png&from=appmsg)

翻译过来是：

我坚信开源是实现积极AI未来的必要条件。AI相比任何现代技术都有更大的潜力提升人类的生产力、创造力和生活质量，并加速经济增长，同时推动医疗和科学研究的进步。开源将确保世界上更多的人能够享受AI带来的益处和机会，防止权力集中在少数公司手中，使得这项技术能够更加均衡、安全地在全社会推广。

防止权力集中在少数公司手中，使得这项技术能够更加
均衡、安全地在全社会推广
。

开源，就是最好的手段，闭源并不会带来技术平权，但是开源会，因为AI不是一个娱乐工具，他是生产力工具，他的推动，主要都来自于公司、研究机构等等。

而每个公司，在使用AI时，都有三个很大的痛：

1. 他们需要训练、微调和提炼他们自己的模型。

2. 他们需要保护他们的私有数据。

3. 他们希望把自己的AI变成长期标准的生态系统。

这一切，汇总起来，就一句话：

我们需要能控制自己的命运，而不是把命交给别人。

而在国内，智谱是我觉得很特别的公司，它很像OpenAI，又有着Meta的气质。

要知道Meta的商业模式，和一些大模型公司比如OpenAI的商业模式完全不一样，他们不靠卖大模型的使用权收钱，所以开源其实对于Meta来说，并没有多大的影响。

但是智谱不一样，智谱是一家大模型公司。

但是在这样的考量下，他们依然，毅然决然的开源了。

可能他们也像Meta一样，为了那个很崇高的信仰：“使得这项技术能够更加均衡、安全地在全社会推广。”

除了
CogVideoX外，他们还开源过N多东西。

去他们的Github上翻一下，你就会发现很多惊喜：

https://github.com/THUDM

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURp7vTXcOVib0FLf7zztyMCJ06mxGd3UKJVicYBsMaibBOUibYpCwUYC2lgU0Wt8EYJEHDXF8Xtbc3ib7Bw/640?wx_fmt=png&from=appmsg)

我爱每一个愿意开源的公司。

我期待未来某一天，无数的开发者在CogVideoX的基础上，开发出了各种各样的插件和微调模型，每一个影视、短剧、广告等等等各种跟视频有关的行业的公司，也都有自己N多的模型和各种各样的视频生成工作流。

就像SD在各家企业里，繁荣昌盛。

我佩服智谱。

这不仅是一个技术的决定，更是一种信念的传递。

大洋对岸的灯光渐渐熄灭。

而我们这边的黎明。

正在冉冉升起。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
