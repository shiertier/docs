---
title: "带你5分钟训练你的AI音频模型，并用文本生成声音 - 有手就行"
发布日期: 2023-05-10
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647658501&idx=1&sn=9dad46108ef15d21c7e2abac1e644839&chksm=f14facb29e608b7c7c15a35ad660deef697692d2138d07e5101cbbd88a5c04e25fdd1d1ef013"
---

## 摘要

### 1) 一句话总结
本文提供了一份基于百度飞桨PaddleSpeech的零基础TTS（文本生成音频）教程，指导用户通过准备少量干声音频并在云端算力平台上微调，快速训练并导出专属的AI语音模型。

### 2) 核心要点
*   **平台与工具**：项目基于百度飞桨AI Studio平台的PaddleSpeech开源项目，相比昂贵的商业TTS方案，该方案免费且操作门槛低。
*   **算力选择**：新用户可通过平台任务获取免费算力卡，运行项目时**必须选择 V100 32G 显卡**（不推荐A100因其消耗过快）。
*   **数据集要求**：需准备无杂音的优质干声，包含20段以上、单段时长在2到9秒之间的WAV格式音频，且采样率必须严格为24000Hz。
*   **音频预处理**：推荐使用在线工具转换格式与采样率，并使用Audio Slicer工具切分音频（设置Minimun Length为8000），完成后需手动删除低于2秒或超过9秒的片段。
*   **路径规范**：所有涉及的音频文件路径和命名，绝对不能包含中文或空格等特殊字符。
*   **模型训练**：核心参数为“训练步数”（范围100~20000）。建议先设置100步进行2分钟的快速测试，确认声音无异常后，再设置为10000~20000步进行高质量微调。
*   **推理与合成**：训练完成后点击导出模型，即可在界面中选择该模型并输入文本，数秒内即可合成目标语音。
*   **资源管理**：项目使用完毕后，必须手动点击停止运行，以免持续消耗算力。

### 3) 风险与不足
*   **合规与隐私风险**：绝对不能使用未经授权的声音进行训练，严禁将其用于涉及隐私或处于法律/道德灰色地带的行为。
*   **质量局限**：作者明确指出，相比微软、讯飞等成熟的商业封装TTS方案，该自训练模型的效果会“略显粗糙”。

## 正文

在上一篇文章中，我推荐了一个
SVC（Singing Voice Conversion）项目，歌声转换，也就是类似变声器的玩意，抽取一个人的声音作为训练数据，训练一个神经网络模型，学习他的声线；然后用模型在目标歌曲上做推理，即可实现用自己的声线唱目标歌曲：

我把我的声音训练成了AI模型，并让它唱了一首歌...（附超全面教程，你奶奶看了都会用）

这个项目的质量确实极高，但是太硬核，太麻烦。

这篇文章，我想介绍一个有手就行的超级傻瓜的
TTS（Text-to-Speech，文本生成音频）
项目。

微软、讯飞等等其实已经有非常成熟的TTS方案了，但是都是封装好的，没法去训练自己的声音（虽然他们有这个业务，但是普通人根本付不起那价格，就约等于没法训练）。

今天我们直接去训练自己的TTS，虽然效果略显粗糙，但是胜在有手就行，安心便捷。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqdNgRxWc9AaF0EkeXxSiakhib7UDgx30iblIaAzzbNRHQOUVrkp4bPs3HGtpAcnmaYQsalYa7l5G4sw/640?wx_fmt=png)

百度飞浆平台上的
PaddleSpeech项目，俗称有手就行。

步骤很简单：

准备数据集，十几段10秒以下的音频文件就可以。
上飞浆平台租显卡，训练。
TTS推理，完成。

在开始玩之前，推荐大家去完成百度飞浆的新手任务，能白嫖100算力卡，等于100小时的V100 32G，25小时的A100 40G。属实是香的一笔。

网址在此：https://aistudio.baidu.com/aistudio/newbie，也可以注册完在个人中心点左下角的新手礼包。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqdNgRxWc9AaF0EkeXxSiakhWvJq7C9O7pzEH3mUEhXw7pJQxuZbJxwgSpf8pbCibP3MGYaOxVNVjaQ/640?wx_fmt=png)

极其简单的四步，几分钟就能搞定，约等于白给。

拿到算力卡之后，我们进入飞浆的AI studio的项目大厅。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqdNgRxWc9AaF0EkeXxSiakhel6XdUPktYqxVSTxlTo0iatMWiaJyviaEyf4qcVAtEwdXexcQgACf0X8A/640?wx_fmt=png)

直接搜索四个字：语音合成。

第一个【有手就行】开头的那个就是。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqdNgRxWc9AaF0EkeXxSiakh4rBicKGtRXRUeoKNHibSXUOS7990thEF2DmiaXiankeaghnEicrn6EsLiaAw/640?wx_fmt=png)

点进去，然后我们点击运行一下。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqdNgRxWc9AaF0EkeXxSiakhdLYOz3wFRL0biccXHjuIMicicAibicTtSa66a2nAelKsdUBy59F4ColCic1Q/640?wx_fmt=png)

等个一小会，就完成了，弹出让我们选显卡的弹窗，
此处一定要注意，必须！必须选择V100 32G！！！必须！没有的话就刷新，直到刷到有为止！（不推荐A100是因为太贵了）

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqdNgRxWc9AaF0EkeXxSiakhrCElXfKRoeI3X7ReXm9qZnwbbpaIc5cmiauYDMTXoT3n3me34GCXkug/640?wx_fmt=png)

进入项目以后，我们就能看到这个项目详情，跟上一篇的SVC项目其实很类似，但是会大幅简化。我们啥也不用管，点顶部第二个小图标就行。全部运行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqdNgRxWc9AaF0EkeXxSiakh34x5nhHFV0orDbXKAaDDWe0Wfx0RTTZZZyb7RwPMQ9zxcn6DlYQSsQ/640?wx_fmt=png)

点完了以后，你就会发现自动滑到了安装环境的位置，它就突突突的自己开始装环境了，你就等着就行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqdNgRxWc9AaF0EkeXxSiakh7PBKMfUyCcDD3BHeavEAOoiaN7wI8dU49wJLavcXjx2W9aFK53DDyaA/640?wx_fmt=png)

当看到这句，运行时长和结束时间后，就说明环境装完了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqdNgRxWc9AaF0EkeXxSiakhibAhSeNuhDZGu5pe51qBDlmpleGiaTjvqehqDNRsZgbp50ac2NuiaQvww/640?wx_fmt=png)

我们继续下一步。
在左侧找到文件 untitled.streamlit.py ，双击文件打开。然后找到红框位置图标，点击使用浏览器打开。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqdNgRxWc9AaF0EkeXxSiakh9RRUpKTrDA0EDdVLicjFdtOIDlpnAsARwR149iaChNQstIJKib6AP1IrQ/640?wx_fmt=png)

然后你就会在浏览器打开一个新的标签页，可能会白屏1分钟左右，别慌，等着就行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqdNgRxWc9AaF0EkeXxSiakhV77gn5BI2N3zkU1kz8mhycCcLmf3a9xq5yvEzeh6m7f0o6Wa1pZt8g/640?wx_fmt=png)

出现这个页面，就加载完成了，第一步当然是上传数据集啦，他们有几个要求，我给总结一下：

优质干声，不要有杂音，一定不要有。
20段以上的2到9秒的wav格式音频。
音频采样率必须在24000。

要求其实不多，你完全可以用手机录一个3到5分钟的音频，然后转成24000采样率的wav格式，用上一篇的
Audio Slicer（音频切分）去切出来。

这里转采样率和wav格式的我推荐一个在线免费网站：

https://audio.online-convert.com/convert-to-wav

把音频传上去后，直接在这个位置改成24000采样率，然后start下载下来就行。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqdNgRxWc9AaF0EkeXxSiakhgHF6RpLMS6AHnFqrA8lCQ5ZXJ32zkH2YQdfxEAxD1tFa9gvDy6AE9g/640?wx_fmt=png)

然后老规矩，跟上一篇一样，使用
Audio Slicer（音频切分）去切音频，如果没有的话，关注我回复S，已经在整合包里了。

我们把Audio Slicer（音频切分）下载下来，解压后打开Slicer-gui。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpfC1RvIRlO2P2GllicqxRJCjRTqia1DFicLwJMMy3x3w38Xjn9RYNlibZjJYnPDicAgQjRwJoauBicib0yA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

然后把Minimun Length那一项改成8000，把我们需要处理的音频直接拖到左边窗口，在右下角选择输出路径。
同时此处注意，任何路径和文件命名，都一定不要带有中文和特殊的比如空格之类的字符！！！

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpfC1RvIRlO2P2GllicqxRJCCiaCpTA8UzibU86v4ZoCQEvV8baZ7VeVibIoaN1bAAuIDYJqjCOqy27aA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

扔进去以后，我们直接点最右下角的Start。速度非常块，十几秒就切割完了。我们去我们选择的输出路径就能看到我们的文件。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpfC1RvIRlO2P2GllicqxRJCfhvxD5WLTbI4HLgrg3MEx7vyAfvZBF2rEAD2StVuxk2eGqrBuGRYTQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

然后我们选择时长排序，把低于2秒的，超过9秒的都给删了。数据集就算是处理完毕了~

回到我们的【有手就行】项目，我们把数据集上传上去。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqdNgRxWc9AaF0EkeXxSiakhIXtOia2xSEO4EqHkuW6uN22fx28vdzlEdP4rMib61EmJEBic0KaUAkowQ/640?wx_fmt=png)

传完了后，我们校验一下数据集。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqdNgRxWc9AaF0EkeXxSiakh5OzrDF7X17m2pbmKOnxpW1v9ibWwWEIv9GhGxWoXb6h7fjhwnjiaI2Bg/640?wx_fmt=png)

校验完成以后，就会显示如下信息：

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqdNgRxWc9AaF0EkeXxSiakhGksGQIVcsLWaEsvlmiaYdLbO16g8JuzNK9Hic1UUY661reGj5ibnGKUhg/640?wx_fmt=png)

我们就可以开始训练了，是不是比SVC简单太多了哈哈~

这个训练只有1个参数，就是步数，100~20000的区间，基本可以理解为越高质量越好但是训练时间越长，他的速度非常快，
我的建议是先跑100步，看看模型有没有什么大问题，比如不是人声之类的，没大问题的话再上10000~20000步去跑。

准备好了我们就直接微调训练，我这里先跑100步的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqdNgRxWc9AaF0EkeXxSiakh6YloIGJKu5YfhsGibFKKz7SbRMg65VobOdjDftzpYWzC6dpdxGwDXAA/640?wx_fmt=png)

V100 32G跑起来很快，我30条数据集，100步基本2分钟就可以跑完~

训练完成以后，直接点导出模型。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqdNgRxWc9AaF0EkeXxSiakhSjeIYpU0np2icTbpjujDbq7Ficia2LqV8A7IOBGaicNsZs88yAxgfAI7RQ/640?wx_fmt=png)

导出完成以后，我们就可以在此处选择的自己的模型了~

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqdNgRxWc9AaF0EkeXxSiakhdKJsJTeE1ltHp6cUJD7VyaiaiaZZBbrZoq86rv75ibtL1MibH42wkPiaW1w/640?wx_fmt=png)

选完了以后，就可以输入文本，然后点击合成，非常块，几秒钟就能合成完~

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqdNgRxWc9AaF0EkeXxSiakhdY8n95EebFf3JUQf5UTqicRBZvaG34Owj7I7K2ged6ng37854iczVKYA/640?wx_fmt=png)

我们听听，效果没啥大问题的话，直接回去改步数，20000步走起~

最后，不用项目的时候，别忘了停止哦~

写在最后

AI孙燕姿最近热火朝天，有越来越热的倾向。

也带着AI音频走向风口浪尖。

AI虽好，但是绝对不要拿未经授权的声音去训练，绝对不要做涉及隐私走在灰色边缘的事情。

以上，创作不易，有用的话请点个关注和在看，并给个星标，感恩。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
