---
title: "阿里深夜开源推理模型QwQ-32B，性能比肩R1满血版。"
发布日期: 2025-03-06
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647669390&idx=1&sn=74ce419d8fdc8ea9e8f84c2e0bb17744&chksm=f10d8c66f2bd0697d74d4199fa5023fc7c3ed7b18619c9e3bce6958e0bbbe6b58fa6097cc3fa"
---

## 摘要

**1) 一句话总结**
阿里正式开源了320亿参数的推理模型QwQ-32B，其在数学和代码等核心能力上比肩671B的满血版DeepSeek R1，且大幅降低了算力与部署门槛。

**2) 关键要点**
*   **模型发布**：阿里凌晨正式开源全新推理模型QwQ-32B，主攻数学和代码方向。
*   **性能表现**：在几乎所有基准测试数据集中，性能与满血版DeepSeek R1（671B）相当，且跑分超越o1-mini。
*   **技术路线**：验证了强化学习（RLHF）路线的持续潜力，通过强化学习使模型学会了自我检查等关键“思考习惯”。
*   **开源与体验**：模型已在ModelScope和Hugging Face开源；官方网页端可通过选择Qwen2.5-Plus并开启Thinking（QwQ）模式直接体验。
*   **算力成本**：相比DeepSeek R1在FP16精度下需1400G显存，QwQ-32B仅需4张4090显卡即可本地运行，硬件门槛降低近15倍。
*   **逻辑与数学测试**：在复杂的“国庆调休”逻辑计算题测试中，QwQ-32B推理完全正确（同题测试中Grok3推理失败）。
*   **代码能力测试**：成功给出LeetCode困难级“解数独”算法题的最优解，代码执行用时仅127ms，击败了93%的提交者（平均用时约1691ms）。
*   **商业与生态价值**：为中小企业和开发者提供了极低部署壁垒的开源方案，支持在自有环境中进行调试、微调和二次开发。

## 正文

今夜，Manus发布之后，随之而来赶到战场的，是阿里。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURooZRibaxzle1BGawXJgTO2ppd6XonCMUIo2UEOLeJlQ3fKiaVDRERtotRciaibtLGSpWmdhMbC3GLSOg/640?wx_fmt=png&from=appmsg)

凌晨3点，阿里开源了他们全新的推理模型。

QwQ-32B。

本来还有点意识模糊，当看到他们发出来的性能比对图，我人傻了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURooZRibaxzle1BGawXJgTO2piaTL3Ou5689RWhCLjO3F7R4RfuiahqW7yHxU3QHQHbCO7v3Pib4PvTibIw/640?wx_fmt=png&from=appmsg)

不是，我没看懂，这特么是个什么怪物。

在几乎所有数据集里，QwQ-32B 都已经能跟满血版DeepSeek R1（671B）表现相当了。尤其是作为QwQ-32B 的主攻方向的数学和代码。

而且，QwQ-32B在基准测试上的性能跑分，几乎拉开o1-mini一个身位。

我人已傻。

今天这夜，对我的冲击有一点大。

GPT4.5刚刚证明传统的那套快撞墙了，转头阿里就来给你掏个大的，说，你看，强化学习还是能卷的，这条路，远远还没到头。

这么令人诧异的性能表现，其实也跟这两天在arxiv出来的一篇爆火论文互相印证了。

一堆斯坦福教授集中讨论，为什么Qwen-2.5-3B一开始就能自己检查自己的答案，Llama-3.2-3B却不行。

最后的原因还是落在了Qwen团队的强化学习上。因为，这能让模型自己学会一些关键的“思考习惯”。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURooZRibaxzle1BGawXJgTO2pa2HunzmwtQickY9T7eaicZqPnDHOktafT2icibxyLKO4fiar8xdI5nrC8QA/640?wx_fmt=png&from=appmsg)

没啥可说的，阿里NB。QwenNB。

QwQ-32B开源链接在此：

魔搭开源链接：
https://modelscope.cn/models/Qwen/QwQ-32B

huggingface开源链接：
https://huggingface.co/Qwen/QwQ-32B

当然如果想直接上手体验，官方也给出了在线体验的地址：

https://chat.qwen.ai/?models=Qwen2.5-Plus

左上角模型选择Qwen2.5-Plus，然后开启Thinking（QwQ），就能用QwQ-32B了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURooZRibaxzle1BGawXJgTO2pEJb2IicsyiaqpVjuuiaqYyFakiaag6A8iaicLbt4ffwEhafB5FNt03FjkBIw/640?wx_fmt=png&from=appmsg)

我这边也第一时间在AutoDL租了一台A800-80G的显卡，然后把模型下载了下来，并部署测试了一下这个怪物。综合体验下来，本地部署版和网页版其实是一样的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURooZRibaxzle1BGawXJgTO2pVYzbEnYmsicpDA3GwjtmS47ysxvBQI3wmrrtpEQdfHIqKrk7sapszFw/640?wx_fmt=png&from=appmsg)

性能曲线是这样的。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURooZRibaxzle1BGawXJgTO2pkvl4Fv8zAxzCrxExyLjongoOzzG1j9gJWg0cw8eb3fia1VJEibA6FUAA/640?wx_fmt=png&from=appmsg)

我也做了一些测试。

首先就是，我觉得赛博半仙易主了。这回的QwQ-32B真的能当八字算命大师了。

懂得都懂，AI自媒体人的命也是命，它掐指一算，就知道我经常熬大夜，狂肝文章。下半年家里那些鸡毛蒜皮的事就别提了，为了搭我的摄影棚，把景深弄得更到位，我是真得搬家啊。。。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpPCVqw0sjLDbMHLoM6FNA3qC6HyNVVcibLZQndXGYRYGaibaf8AtUGKprfGA7WFwlQbDicwT9nOSZYw/640?wx_fmt=png&from=appmsg)

当然，AI算命只能算是个开胃菜，接下来还是得认真测下QwQ-32B的数学能力。

然后就是拿我的著名的国庆调休题来难为下这类推理模型了：

这是中国2024年9月9日（星期一）开始到10月13日的放假调休安排:上6休3上3休2上5休1上2休7再上5休1。请你告诉我除了我本来该休的周末，我因为放假多休息了几天？

比如Grok3这种，开了推理还是直接炸了。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURooZRibaxzle1BGawXJgTO2pn2jpl6IhiaG1ia78ia9coBGddXtTC1034WQicibToK07WuicpjHMHLgxus2Q/640?wx_fmt=png&from=appmsg)

答案明明是4天，你咋独自加了3天。。。

而看看QwQ-32B，在一顿小推理之后。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURooZRibaxzle1BGawXJgTO2pra9s2mrd8fjEpgibfUYfBkGSspw1n7jjiaG9oMkOMO2OG1nkN1ibtutSw/640?wx_fmt=png&from=appmsg)

最后答案，完全正确。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURooZRibaxzle1BGawXJgTO2pjQphn9DfagJfkYXmCcliahPNAVsliaibALWS05ib6Vdw3Jp5UIiaGeqetAw/640?wx_fmt=png&from=appmsg)

要知道，这可只是一个32B的小模型啊。。

然后我还试了一下代码能力。我就直接去Leetcode找了一道困难级别的算法题，解数独。

可能有人不知道Leetcode是啥，LeetCode 是一个全球知名的在线编程练习平台，这个平台有大量不同难度的算法题库，从简单到困难的各种编程题都有。

我直接把解数独的题目还有代码模板丢给QwQ-32B，让它给出最优解的代码：

编写一个程序，通过填充空格来解决数独问题。

数独的解法需遵循如下规则：

数字 1-9 在每一行只能出现一次。

数字 1-9 在每一列只能出现一次。

数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）

数独部分空格内已填入了数字，空白格用 '.' 表示。

然后给定你一个类，给我一个比较好的方案：

class Solution(object):

def solveSudoku(self, board):

"""

:type board: List[List[
str
]]

:rtype: None Do not return anything, modify board in-place instead.

经过几分钟的思考，这道题的完整最优解代码也是被QwQ-32B成功给出。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURooZRibaxzle1BGawXJgTO2p4AUxPpicdWPOY8SsAH4iaWXDHDtDO89dCo6lDysUr0DsPowjeWYU28dA/640?wx_fmt=png&from=appmsg)

我把这段代码粘贴到了Leetcode平台上，直接提交，没想到这段代码竟然完美的通过了全部测试用例吗，而且执行用时才127ms，击败了93%的在这个算法题库做尝试的人。

说实话，这个结果让我挺惊讶的，毕竟127ms的用时，看平均的用时基本都在1691ms左右。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURooZRibaxzle1BGawXJgTO2p1ibtJbTOUYrDQnXQNI4neLlqqmgibHGE5iaG6SouXP593wlJ1C7QABcdQ/640?wx_fmt=png&from=appmsg)

很强，但是我觉得最强的，还是它未来的生态。

32B和671B，对于本地算力的要求，或者是云服务的成本来说，差别实在是太大太大了。

671B，在FP16精度下需要1400G的显存，这个门槛有多高大家懂得都懂。

而现在，32B的QwQ，4张4090就能跑，这是将近15倍的差距。

而且，智能水平差不多。

这也意味着很多普通企业还有普通开发者，可以直接拿到一个足以对标DeepSeek R1的逻辑推理、数学推理、代码思考能力的大模型，而且还开源，能在自家环境中任意调试、微调、二次开发。

更何况，阿里云上的资源、ModelScope、Hugging Face镜像都能对接，瞬间就把部署壁垒降到几乎为零。

对于那些创新型创业者、小型团队，或者想要做专业AI应用的公司而言，我说实话，这就是天降神兵。

对于大多数的企业垂直场景，一个优秀的32B的模型真的已经足以应付很很多，没必要非得上600多亿参数、又烧又贵的巨无霸。

这波QwQ-32B开源的意义，还是非常强的。

它用实力证明RLHF路线还能玩出花，打破了一些人对GPT4.5撞墙后的过度悲观。

用中等规模却拿到高级性能，给开源界注入了强大信心，你也不必搞那种天价设备和超大规模，也有机会跟国际巨头同场竞技。

真的，昨夜爆火的Manus，在技术架构上，也是Claude+很多微调的Qwen小模型。

那这次QwQ-32B，又是一次智能的提升。

每个大厂、每个团队都在全力冲刺，新的风暴还会一个接一个出现。

睡前一抬头，日历翻到新的数字。

又是个不眠之夜。

阿里NB，QwenNB。

我们中国的团队。

就是NB。

愿我们都能见证更多奇迹。

晚安，或者早安吧。

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
