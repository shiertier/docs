---
title: "OpenAI正式发布o3 - 通往AGI的路上，已经没有了任何阻碍。"
发布日期: 2024-12-21
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647667451&idx=1&sn=97fcefb90981c98200393155ef11fcbd&chksm=f15a8d2aa862413721a592d1ac289e7b7991ab58351da73548ef55650419640f7613783b5d04"
---

## 摘要

**1) 一句话总结**
OpenAI在12天发布活动的最后一天正式推出了o3模型，该模型在编程、高级数学和抽象推理等多个核心基准测试中取得了突破性成绩，大幅超越现有AI模型及人类平均水平。

**2) 关键要点**
*   **命名决策**：跳过“o2”直接命名为o3，原因是为避免与英国电信服务商O2产生版权或商标冲突。
*   **编程能力**：在软件工程基准测试（SWE-Bench Verified）中得分71.7%；在Codeforces编程竞赛中得分2727，位列榜单第175名，超越99.99%的人类选手。
*   **数学能力**：在AIME 2024数学竞赛中接近满分；在由顶尖数学家开发的原创难题基准FrontierMath中得分25.2%（此前GPT-4和Gemini 1.5 Pro得分不足2%）。
*   **抽象推理能力**：在ARC-AGI（测试模式识别与解决新问题能力）中得分高达87.5%，首次超越了85%的人类阈值分数（此前o1得分为32%，o1 Pro约为50%）。
*   **发布状态**：o3目前仅对红队（Red Team）开放以进行安全测试，用户需通过特定网址申请早期访问权限。
*   **衍生模型计划**：OpenAI基于o3训练了3个小尺寸模型，其中“o3-mini”预计将于1月底对外开放。
*   **12天活动回顾**：o3是OpenAI连续12天直播的压轴发布，此前的关键发布包括满血版o1、Sora、ChatGPT Canvas、ChatGPT Search全量开放以及o1 API等。

**3) 风险/不足**
*   **可用性限制**：o3目前尚未全面公测，仍处于仅限红队测试的“期货”状态。
*   **特定领域提升有限**：在博士级科学考试（GPQA Diamond）中的能力虽然有所进化，但提升幅度不如数学和编程领域显著。

## 正文

今天凌晨2点，OpenAI的12天直播，终于来到了最终章。

奥特曼，也在一片圣诞的气息中终于回归。

为大家带来了最后的压轴大戏。

OpenAI o3
。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqVBOlRXp2OzYxVy4NumPrO4HiazlS5IbrFDfficfAicut5XIry0Af1N4AFR02mzIcKDQ0BFK4VicYcfA/640?wx_fmt=png&from=appmsg)

又一次超群，又一次把模型的能力，推到了新的高度。

也向全世界证明了，OpenAI，依然在铁王座上牢不可摧。

我也想起了OpenAI研究员在发布o1之前的那句话：

“我们通往AGI的路上，已经没有任何阻碍了”

之所以OpenAI直接发布o3没有o2，原因也挺简单的。

因为跟
英国电信服务提供商O2可能存在版权或商标冲突，所以直接跳过了。。。

直接到o3。

而OpenAI直播一完，X上基本就沸腾了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqVBOlRXp2OzYxVy4NumPrOLqfCutRJ4ztWVDgAfKIyU5IlRYsicBSfiaialf8XGanNT22EKufRpKPiaQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqVBOlRXp2OzYxVy4NumPrOn8mzicIJFPa9etTN21u7dcPmylFPnycib9pUqvU0RpCibqkw5GTKrpeJA/640?wx_fmt=png&from=appmsg)

o3的能力，对现在所有模型，几乎都直接是降维打击。

看下o3的能力吧。

一些粗的评测集简单过一下。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqVBOlRXp2OzYxVy4NumPrOu8eNQQS9nvvH8iabqbuZyyESZ1UlFh752820kqIGofBbKlFhAK5cOmg/640?wx_fmt=png&from=appmsg)

左边的是
软件工程考试（SWE-Bench Verified），
这就像是一个考写程序的考试，比如你写一个软件要它快速、准确，还不能有 bug（小错误）。这是考察 o3 是否能像一流的软件工程师一样写出完美的代码。

o3 的成绩：71.7%，比o1还强了不少。

右边的那个基准比较猛，Codeforces，一个全球著名的编码竞赛平台。

o3的得分是2727，这个得分，相当于整个榜单的第175名，已经超越了99.99%的人类了。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURqVBOlRXp2OzYxVy4NumPrOe1hzXG7t5r5AUXrPXibqQRJuOuPnGFUia7EysnqYHEXB45rA1nvX6EKQ/640?wx_fmt=jpeg)

o1的代码能力已经强到爆炸了，而o3，又向AGI的山顶，前进了一大步。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqVBOlRXp2OzYxVy4NumPrOJrYRUia7WmJ1EY3Cib097gQwjqseR3OTyNnBdt3ONyby6SdpWBwx0yXA/640?wx_fmt=png&from=appmsg)

数学竞赛AIEM 2024和博士级科学考试GPQA Diamond。

AIEM 2024接近满分，如果我没记错的话，这应该也是第一次AI能达到有AIEM接近满分的水平。

博士级科学考试有进化，但没数学和编程进化的这么猛。

接下来的这个数学基准比较有趣一点。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqVBOlRXp2OzYxVy4NumPrOibM6sicpFmsmVFricasIwlsfiaw45oefLr6L9jsiaK0vg8vq0fzXhWo7o5A/640?wx_fmt=png&from=appmsg)

FrontierMath，
Epoch AI 开发的一个数学基准测试，由
60多位顶尖数学家的合作开发，
旨在评估人工智能在高级数学推理方面的能力。

而且为了避免数据污染，所有的题目都是原创的且从来没有发布过的新题目。

之前
GPT-4 和 Gemini 1.5 Pro这种模型去评估的时候，成功
功率不足2%，与其他传统数学基准（如 GSM-8K 和 MATH）中超过90%的成功率形成鲜明对比。

而这一次，
o3直接达到了25.2
。

当各大其他模型都还在卷传统数学基准的时候，o3真的已经进入了另一个世界了。。。

就像大家还在大斗师阶段互相卷，你是五星大斗师，我是八星大斗师。

两者争论不休，正准备要比试比试，忽然就看到一个斗宗强者踏空而行，留下一地的卧槽。

这还比个鬼。

然后，就是我觉得，整个基准里，最有趣的一个基准了：

ARC-AGI。

先说说这是个啥玩意。

ARC-AGI于2019年首次提出，旨在通过一系列抽象和推理任务来测试AI系统的能力。

主要是因为传统的技能测量方法并不能有效代表智能，因为它们往往依赖于先前知识和经验，而真正的智能应体现在广泛的适应能力和通用性上。

所以，ARC-AGI诞生了，里面的
这些任务要求AI识别模式并解决新问题，
每个任务由输入输出示例组成。这些任务以网格形式呈现，每个方块可以是十种颜色中的一种，网格的大小可以从1x1到30x30不等。参与者需要根据给定的输入生成正确的输出，测试其推理和抽象能力。

可以简单的理解成，找规律。

大概就是这样的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqVBOlRXp2OzYxVy4NumPrO1P9S3SEdbh4UtW4RWqSsHFTS0uhZXbpUOR78Q9uf99qnLabib3UL6ZQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqVBOlRXp2OzYxVy4NumPrOGJq4EiaAxnyZCXQINIXibeKap67PxmNHoMTV9icUYicsGb3xQyAJf7ib34w/640?wx_fmt=png&from=appmsg)

非常的难且抽象。

过去几代模型的评分在此：

* GPT-2 (2019): 0%

* GPT-3 (2020): 0%

* GPT-4 (2023): 2%

* GPT-4o (2024): 5%

* o1-preview (2024): 21%

* o1 (2024): 32%

* o1 Pro (2024): ~50%

但是今天，o3的分数，达到了恐怖的87.5%。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqVBOlRXp2OzYxVy4NumPrOic5viaJvIO25wzX14PjfIq42dokPiccRMJC6PfF5XncglCvziaEap1fUQg/640?wx_fmt=png&from=appmsg)

从0%到5%，整整花了5年的时间，而如今，从5%到87.5%，仅仅只花了半年。

而对应的，人类的阈值分数，是85%。

我们通往AGI的路上，已经没有任何阻碍了。

不过o3强归强，但是又是一个期货，OpenAI目前只对红队开放，如果是巨佬的话，可以去申请试试。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqVBOlRXp2OzYxVy4NumPrOUplEoJ8XJsAcBJu0YP6hksGse1wEfxQvrGuNeGJPSo4znlib65XPhfA/640?wx_fmt=png&from=appmsg)

网址在此：https://openai.com/index/early-access-for-safety-testing/

目前不知道o3什么时候放出，但是OpenAI又基于o3，训了3个小尺寸的o3模型。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqVBOlRXp2OzYxVy4NumPrOlRn0MPltnAQvQ6Xt6fHWb1AvgTtTM09Eek2SqsjnOgTaq5cibYxCg2Q/640?wx_fmt=png&from=appmsg)

目前o3-mimi，预估在1月底可以对外开放，但是感觉到时候，肯定又是pro会员专属的模型了。

我越来越期待，2025年AI行业的进化了。

推理模型、Agent、AI硬件、世界模型。

每一个都是比这个中间态的2024，都更让人兴奋的东西。

2025，必是AI行业，真正的星辰大海。

我们也在最后，回顾一下这12天的直播吧。

Day 1：满血o1上线，ChatGPT Pro会员上线，o1 pro推出。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2icSMc1VBIYriaB5diby4CAzgNMPJ2DtrIicyQoaaHKALP4OdLOrSzjTsO5CZj4icpn9zHsT4K3ehSHza3PE5ralksw/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

Day 2：基于o1的强化微调。

Day 3：Sora正式发布。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqVBOlRXp2OzYxVy4NumPrO8NNsoDajJGwlibx2aBTgfIyicVGHEicfom4Ka9YIR5d4cN1CcI2KSDmMQ/640?wx_fmt=png&from=appmsg)

Day 4：ChatGPT Canvas全员开放以及小功能更新。

Day 5：给苹果站台，宣传苹果全系接入GPT。

Day 6：4o的实时视频理解上线。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoFqUGTII5XiaBicRMxge8m6cXot1CmxWlx3MqvRxk5Wka2yzgboTTas2khliaR5LCbulTwvia3CGJ7vQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

Day 7：ChatGPT发布新建文件夹“项目”功能。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqVBOlRXp2OzYxVy4NumPrOOSuR10Vpt44TI5PbacbgRhnsybevGeJ0a87kTFFMZaFAHuV4zniabsw/640?wx_fmt=png&from=appmsg)

Day 8：ChatGPT Search全量开放，搜索体验大幅优化。

Day 9：发布了o1的API、更新了实时语音的API、发布了偏好微调能力（PFT）。

Day 10：物理意义上的可以给ChatGPT打电话了。

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYpibCEqXANsHzic6BTpaM3rVty6w1fwbDxjm2icf9Zy8FP13IGbs0ZJRqhdl3BYfq7GcHePeo0wPJVvQ/640?wx_fmt=png&from=appmsg&wxfrom=13&tp=wxpic)

Day 11：
炒冷饭，ChatGPT 桌面版能读到别的应用。

Day 12：OpenAI o3正式发布
。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURqVBOlRXp2OzYxVy4NumPrOR47rXs7L6kHfnFH56jZTicrravvDYAKBVZ8XrMvJpAKJtyibX5SVdj2A/640?wx_fmt=png&from=appmsg)

这12天，稍微有点惊喜的日子大概只有2、3天，其他都是垃圾时间。

还好，今天的大货，补上了之前的阴霾。

最后，还是忍不住感叹一声。

这12天，像一场漫长的马拉松。

我们经历了深夜中数不胜数的垃圾时间。

却也迎来了最后的高光时刻。

这感觉。

还挺AI的。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
