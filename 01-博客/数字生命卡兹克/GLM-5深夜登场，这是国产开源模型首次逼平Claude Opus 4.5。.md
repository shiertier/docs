---
title: "GLM-5深夜登场，这是国产开源模型首次逼平Claude Opus 4.5。"
发布日期: 2026-02-12
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647679966&idx=1&sn=f9e9c10dd4bcada2e8adba67b5f095eb&chksm=f17d341f79d6edafedc03f20990f957bbaca9a1210c6d8375609cc43327768f703b2a9dd4f6f"
---

## 摘要

**1) 一句话总结**
智谱正式开源GLM-5大模型，参数量提升至744B，在编程与Agent任务上首次逼平Claude Opus 4.5，并以极高的性价比成为国内AI编程的强力替代方案。

**2) 核心要点**
*   **模型规模**：参数量从355B（激活32B）扩展至744B（激活40B），上下文窗口保持200K输入和128K输出。
*   **基准测试表现**：在Artificial Analysis开源模型中排名第一；BrowseComp（联网搜索信息能力）得分75.9，超越GPT-5.2并逼近GPT-5.2 Pro；在长程复杂任务（Long-horizon）及SWE-bench、Terminal-Bench 2.0等Agent基准测试中对标Opus 4.5。
*   **极低使用成本**：API价格约为Claude Opus 4.5/4.6的七分之一；包月Coding套餐价格为Claude Max的2/3，但Token额度是其3倍，且实际运行中Token消耗效率极高（极省Token）。
*   **开发工具集成**：官方提供 `npx @z_ai/coding-helper` 命令行工具，支持将GLM-5快速接入Claude Code、OpenCode、Crush及Factory Droid等主流编码环境。
*   **实测开发能力**：在多个实际开发案例（Chrome分发插件、PC端图像识别记牌器、QQ农场复刻、yt-dlp技能封装）中，展现出优秀的系统规划、架构设计、本地存储调用（LocalStorage）及长任务执行能力。

**3) 风险与不足**
*   **极限Debug能力仍有差距**：在解决复杂或棘手的代码Bug时，仍落后于最顶级的GPT-5.3-codex（例如在Chrome插件开发中，正文提取缺失的Bug最终需依赖GPT-5.3-codex解决）。
*   **算力供应短缺**：由于销售过于火爆且算力不足，GLM-5 Coding包月套餐的前两个档位额度已被抢空。
*   **特定视觉识别局限**：在图像识别（如记牌器案例）中，由于图像灰度处理逻辑，模型无法准确区分颜色不同但字母相同的元素（如扑克牌中的大小王）。

## 正文

深夜，GLM-5来了。

还是老样子，发布即开源。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqVZbasolIictzavTl7DPK6fX7ibGwXyXRPem6PTP5uaohVQ4orxSib1TAyd6CIZ7DZnk5FKUSbnfEqytkibSLUOMIiakBTqXHAoggEw/640?wx_fmt=png&from=appmsg)

而且前几天，OpenRouter平台不是有一个Pony Alpha的匿名模型很火吗。

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqWxIr96hsw0FP9Ex8sSlicLGzMxQYZRFTmz0ia2H4jial7eRUeykhnxZdH6cxvtZ9ITcXzsGlJ6gtibgn7VnchicEZMBNvyctBPMsO4/640?wx_fmt=png&from=appmsg)

大家一度在猜是DeepSeek V4还是GLM-5，结果今天基本答案也揭晓了。

这大马，基本就是明示了。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqWo1GQvaxTpHjpiaicXx3iadqLx0cylyZJE6M8sMZaqmqyuYicB8dIKNeOEbx0wdPdCZ1OYnsic0NUeOaLeV2UE6GQkicSvfyFNW09uE/640?wx_fmt=png&from=appmsg)

到了今天，2026年的主旋律我觉得真的就已经就定下了，无论是国内还是海外。

Coding与视频齐飞，
人类共AI一色。

这应该就是2026年AI领域最核心的两个主航道了，在这两之上，其实就是Agent。

这几天真的感觉过年一样，太热闹了，上周GPT-5.3 codex和Claude Opus 4.6中门对狙，后脚Seedance 2.0席卷全球，而现在，战场又拉回了Coding这边。

GLM-5，作为一个全新的大版本号，我想说，升级幅度还是很大的，真的可以比肩Claude Opus 4.5，我不开玩笑。

我其实已经提前三天拿到了GLM-5的API，这几天在我用Codex开发的时候，也把GLM-5同步接入到了Claude code里同步开发进行对比。

虽然作为智谱一直以来的拥簇，很想吹一下GLM-5跟Seedance 2.0一样全球第一，但是我觉得还是实事求是。

在我这几天的使用过程中，我个人体感是，GLM-5跟GPT-5.3-codex这种变态肯定还是有一些距离（后面有case会展示），但是在真正产品的开发和解决BUG的能力上，我觉得是能摸一下GPT-5.2-codex和Claude Opus 4.5了。

不要觉得这好像是一件很容易的事，Coding国内落后的其实一直都比较远，能追上Opus 4.5的能力，其实已经非常非常非常牛逼了。

前几天，在GPT-5.3-codex和Opus 4.6中门对狙的文章里，我在评论区里评论说，要是DeepSeek能赶上Opus 4.5，我高低得给它磕两个。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqWg0icTr1mQ6Na62xJyYahULn3UBHUpA5TParej5U579YXcyeWZumrefMc297GEfBLswS2VAC8T0IQZdnib2TWia6YYnt7DtumTP8/640?wx_fmt=png&from=appmsg)

我是没想到，我现在可能得给智谱磕两个了。

非常坦诚的讲，在我日常开发过程中，我可能还是会选择GPT-5.3-codex + codex的组合，但是，我也深刻的清楚，并不是所有人，都有条件去买ChatGPT的会员的。

那如果你用不了GPT-5.3-codex的话，那我无比真诚的建议你，不用犹豫，就用GLM-5就行，这就是国内，你现在能用上的，最好、最棒、性价比最高的大模型。

Claude Code + GLM-5，是你无需魔法，国内可用，最低门槛体验AI Coding魅力的组合。

先老规矩，看下跑分和性能。

首先，
GLM-5从355B（32B激活）扩展到744B参数（40B激活），参数量大了一倍，智能提升确实挺多，而且成本没有加特别多。

跑分上，目前在Artificial Analysis上仅次于那两个大爹，开源第1。

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqVT5BDaVfPG4oYKS7tvnjmAZsUR53nB84xbYEHtw2QEUVVXic6hMMEMW6fHBccZ5DqXaFjA3pZNyKEN84icdxIqL6tKXAUW86Gmo/640?wx_fmt=png&from=appmsg)

然后整体能力上。

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqWHvG8cYIIHoBlHJMmqmGVQeyrVZkOKCap28V0aayt4vsC7ricpQHtffBcaPsibHsqhnev8skicuLISZzj6TLPIQ6cLBiavwueicmfM/640?wx_fmt=png&from=appmsg)

相较于GLM-4.7，GLM-5全线能力基本都有了大幅提升，而且逼近Opus 4.5。

有一个比较有特点的，就是BrowseComp基准，这个我之前也说过，
测的是Agent在网上搜索信息的能力，
GLM-5得分75.9，直接超第二名普通的GPT-5.2有10个点，这个已经非常强了。

而另外两个最顶级的模型没放在里面，一个是GPT-5.2 Pro得分是77.9，Opus 4.6得分是84，GLM-5其实已经逼近最一线的水平了，能跟GPT-5.2 Pro打个平手，这事本身就挺强的了。

然后其他的，比如现实场景下改仓库代码的测试机SWE-bench，终端环境中agent能力的基准Terminal-Bench 2.0，agent工具使用的τ²-Bench，还有测试模型调用MCP能力的MCP-Atlas基准上，基本比Opus都只差那么临门一脚了。

说实话，一个国产模型，还开源出去，能到这个水平，已经非常非常让人自豪了。

同时在我看好的系统工程能力、长任务能力，在跑分上也能得到印证。

比如下面图上的Long-horizon基准，也就是长链条复杂任务，就能充分体现模型自主进行Agent长程多步规划和执行的能力。

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqViczN7mhNfAYLfGj0FbjOyTacUTR6kLnMCwJibyDLrWhKYTKFCRcRTDIodpQrxk1ngk89uFeheV4WlDjDmCoSDBB2y6wAQKt1u0/640?wx_fmt=png&from=appmsg)

这个跑分看下来就很清晰了，也和我实测下来的感受一致，在真正需要做大开发的时候，它的长程任务上，确实是对标Opus 4.5的存在。

GLM-5的上下文窗口和GLM-4.7一样，目前还是200k的上下文窗口，输出是128K。

不过GLM-5有一个非常离谱的一点，就是这玩意我试下来，非常的省token，就是干活的感觉，非常精准，跟GPT-5.3-codex有的一拼，这点有多重要用过Opus 4.6的都懂，那上下文和消耗量，简直了。

然后就是价格上，一个是API价格，真的，国产模型，这价格便宜的让人心疼。

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqWgSmrKdLtyhePvIrFAbgokia3gEYD177yMQ7VDj8g97Z982NPBftCv7ibQkoYe4gjqRrfEs2W189oiatLk9FbPQPwDwEWJWbwXAU/640?wx_fmt=png&from=appmsg)

Opus 4.5和4.6，都是$5/$25每百万token（输入/输出）。

而GLM-5大概只有Claude的七分之一。

很香，真的香。

另一方面那自然是不得不提的Coding Plan了，也是现在玩Vibe Coding的主流用法，基本都是买包月套餐，对标Claude Max和ChatGPT Pro的。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqWCKz6eJmbYjxGDl5M3fWRLN7AetQDSqYempx7ibpNgFziaXDQaDFfYo8TNibG9BVgvlQ7VotYo8cuFOVTf9UXKHibntnE2pykDPWk/640?wx_fmt=png&from=appmsg)

价格是Claude Max套餐的2/3，Token额度是他们的3倍。

甚至因为卖的过于火爆，算力不够，前两个套餐额度，直接被抢空了。。。

没错，一个包月套餐，被抢空了。。。

这个太离谱了。

白天的时候大家可以蹲一蹲，网址在此：

https://bigmodel.cn/glm-coding

当你有了GLM-5的权限之后，想用的话，我最推荐的还是在Claude Code里面用。

因为Claude Code就是目前确实最通用的Coding Agent产品，Codex是单纯的例外，主要跟GPT适配的太好。

而在Claude code里接入GLM-5挺简单的。

这一点智谱做的很好，他们做了一个Coding Tool Helper工具就是可以快速将你的GLM编码套餐加载到你使用的编码工具中。

直接打开终端，然后输入：

# 进入命令行界面，执行如下运行 Coding Tool Helper
npx
@z_ai
/coding-helper

你就正常登录。

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqWtUZ4RpTGCaLFIITiaSy3ibHiaMFuzb04wfGFB6VBkMoiaFIZJ4ka6z1dZN7E4VpZ8oXRdCnox15IstToriawuQO4SceBicic4ckQjaE/640?wx_fmt=png&from=appmsg)

目前支持的编码工具 Claude Code、OpenCode、Crush、Factory Droid。

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqXgibTJGzibM0wdNVibEkMALsAYibF8fjyb1dmm6l98WibFOedqQk3JBxoqFsQeNSANXYau5lx60d80853xobGND55cFJfmBSv8G9kY/640?wx_fmt=png&from=appmsg)

跟着配置就好，配置好以后，我们运行Claude Code。

你就可以使用GLM-5了。

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqWMFV9z712fMcsRicD54uWblQTInQVBbPW5O2XIdcAo66s85stSxN9fKfQQxoznadicqXVkFib4j7p1r4krictfV4vGUQGxWXCDobk/640?wx_fmt=png&from=appmsg)

我也做了几个case，给大家直观的感受一下，GLM-5的能力。

前天我拿到GLM-5的资格的时候，正好有个需求要开发，就是一个全平台分发文章的需求。

做自媒体的朋友们应该知道，文章写完不是真正的结束，而是刚刚开始。

我一般写完微信公众号文章需要把文章同步分发到其他平台，这是个很大的工作量，而且有的编辑器还不一样，会出现乱码，文本格式丢失问题，我真。。。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqVPiaY3W904ZyTldOeR70IGMCP6pomjdVEIX4otwMm1IMgLibX7R1aicW5Hl9f8l8vdO1PZibAiaeWtVVk7ERcDl4K7aojS96wibIenQ/640?wx_fmt=png&from=appmsg)

之前是用一个开源工具自己改的，但是其实没有那么好用，所以最近其实一直想自己开发一个。

所以，我当时就想，不如用GLM-5 Coding一个这样的全平台内容同步分发的这么个小产品吧。

开发完以后，发现效果居然还不错。

就是下面图中的这样，大概的功能就是把我微信公众号的文章链接放进去，然后点击想要同步的平台，就可以同步过去。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqXXaaNtChIV956MeopQ5n4icFnib3GVd8Mm6TYQRtwznd4THFibYcRmK0aMZ4h0us40LmG1Gm3m5F1aXryMEkz3xKTo0eyoOGkHks/640?wx_fmt=png&from=appmsg)

当时开发的时候其实Prompt给的巨简单。

开发一个全平台内容分发Chrome 扩展，实现：
点击插件后进入内容分发页面（独立页面，非小 popup）
输入微信公众号链接，自动提取标题、封面、正文，保留格式
右侧大尺寸富文本编辑器展示和编辑内容
底部平台复选列表（小红书、知乎等）
点击同步后，打开目标平台发布页面，自动填充内容

当时给过去以后，GLM-5的体感上，其实就比之前GLM-4.7强很多了。

按惯例，他先提供给我了一些关键设计让我去选择。

我也秉持着先开发一个最小MVP的原则去的。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/2jjfQoZLoqXeedUj8PaX0FUqbLq748v9rBViaOllYguHxwwfQahMEWxVFr6wliaYLAv77IicGf7WyTudWYsLJK8zqTwPicdgX44OVdDT4VfgG2A/640?wx_fmt=jpeg)

所以选的都比较谨慎。

接着GLM-5就给了超详细的规划。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2jjfQoZLoqV4FqqbIGmSibtq3XsPG9l8h0DbcSmyUttMnDcSXbebdKf5Stn3eUmGudp7xjEkU6DW4LRFgpdPziboqxLHe6Ic3ePViahM8OFcwo/640?wx_fmt=jpeg)

速度不慢，很快就搞定了。

总体的完成度和实用性很好，不过因为最开始最小MVP的原则，分发的平台有点少，后续我直接让他添加其他的平台，两轮就完成了。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/2jjfQoZLoqUtkIZGfoyrol7PCXg9hX33Fj3CT3U4rPmhAp7yiaSCHFtibwB829fMuZjVJFsvwhOAJbwRCfIJLqQIofy1lSlPgNhImsAaDggicE/640?wx_fmt=jpeg)

整体其实都还可以，但是在使用的时候，遇到了一个BUG。

就是我放入公众号链接后，让他提取标题、封面、正文，他标题和封面倒是可以成功提取出来，但是关键部分，也就是正文提取内容总是不全，会缺失一大截，图片也获取不到。

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqW3QFm1c8oMwHQUk07nCHajialFQaTGm3xJgNFiabo2GySdkiaKdlbqqBGANxmv6DwPibBkiaWMCrpYic5GHnIpOAmC2d3mfddVISQOI/640?wx_fmt=png&from=appmsg)

改了两三轮，还是有BUG，然后我上Opus 4.5，居然也没改成功。。。

最后打开了GPT-5.3-codex，一轮，完成了。。。

GLM-5跟Opus 4.5的差距没那么大，其实是有道理的。

说实话，主要还是，GPT-5.3-codex这玩意真的强的有点变态。

所以这个case，其实就是GLM-5做的整体规划和方案设计，然后最后遇到一个棘手的BUG上Codex解决的，整体体验上，我录制了一遍效果展示的视频，总体体验下来还是挺不错的。

然后还有另一个我觉得特别好玩的case。

就是，看到公司同事终于在用电脑模拟器，打欢乐斗地主。。。

当时他吐槽说，要是有记牌器就好了。。。

于是，我就想，这是个好思路，虽然不会帮他作弊，但是可以试一下大模型的能力。

上GLM-5试了一下，这个开发过程，还真的有点意思。

用的提示词很简单，就一句话。

“我正在我的电脑上玩欢乐斗地主PC模拟器版本，帮我写一个记牌插件。”

反正我是完全不知道怎么实现，更不知道怎么跟PC模拟器打通。。。

我就说了这么一个需求，GLM-5，他会自己进行更深入的咨询，包括识别方式、技术路线、功能需求，都会一一和我确认。

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqWlk3UgJg0nKF8zpdicmuNrq4h7wdPtm4F0a6orGGOrCCRWNHa7yeiboOSuGvXXmgBMeaAhB2MKsX2R370JlJXelG3y87vwzLOSc/640?wx_fmt=png&from=appmsg)

比如在实现方式上，他提供自动识别记牌、手动点击记牌等方案让我选择，每个方案还会给出不同的技术实现路线。

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqXCZ5VHvO6UjKgnmqHVUeVMQDLDcSyb5wCtbvgveKSMRh5spNrviaRO9VPmJSPSrySOgDicEnlJCBwIrdN6pQoC1ic7eJVh3F3EM8/640?wx_fmt=png&from=appmsg)

还有功能需求的确定，我这里选择了基础记牌。

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqXUMhcx3qsuocgsFKnVa6EicPGuMeQr0PFgKEMmdKiaMB3iaqSFnL7adaTH6iaAWUOiaDib8lGFAqicnnGHDPVuTaU9jg1aKmpdd6w5Gs/640?wx_fmt=png&from=appmsg)

第一轮对话下来，记牌器整体框架都搭建好了。

虽然我选择的是自动识别模式，但他很贴心地把自动开发和手动开发两种模式都做了。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqU0cqWIehrGIEiaTGaWlPpk63h9TB9YeBFb1PGtahLhic92VuXXPGouhePb5v2t6AtYaoz9rqnBVD4mkqiapGOBFe1Np2Wf7sQqR8/640?wx_fmt=png&from=appmsg)

手动模式第一轮其实就直接开发完了，就可以用了。

它的使用逻辑是需要我自己去看对方出什么牌，我就点击那张牌，牌数会自动减一。

但是这个逻辑太蠢了，一点都不自动，一点也不AI。

对方打一个牌，我还得手动点点点，这也太呆逼了。

所以我还是想要用自动识别模式，但第一轮对话后自动识别功能并没成功。

他这里自动识别的操作逻辑是这样的。

游戏开始的时候，我手动勾选出牌区域，他就会自动识别这个区域出的所有牌，并自动记牌。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqVrRQy6jZQal2kiben10W9sJsBEWXJ8G1K48XkWPMBgPgEPH8HaGAPb4aKuUFGhXFD0icbxprHUy97Fgiaic03tflx6tFEXnq1Rnc0/640?wx_fmt=png&from=appmsg)

但实际上，我选中出牌区域后，它没法识别出的牌。明明这边都打起来了，它这边一直等待识别。。。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqUIkVkcRGI0NQGJfDZLM3nq997cRViaFmma58naNlFPWcmW0xcw38c9QfAsDyb1tiaSD1XDibiaWGWJoCwYSJqvK7hEUeDyJGfoDVc/640?wx_fmt=png&from=appmsg)

我让它进一步修改。但是这样的bug它并没有一次改出来，改了一版后同样报错。

这个时候，它自己选择添加了调试功能。

我看了一下，应该是这个功能实现的链路主要有两部分，屏幕勾选区域截图，截图扑克牌识别，所以他需要调试确定哪个环节出了问题。

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqWH61COAGUuDQCvSk9LNIuPF4f4zFhyxibWKj85ibQkRso24kPibjeWv6xKBVtZ3t5hoWRhFjeUbX6mtZFJiaGlWqpU0UfIgus7toQ/640?wx_fmt=png&from=appmsg)

这一步，可能是模拟器的原因，还涉及到比较复杂的跟屏幕的交互和监控，所以我得帮他一起测试一下。

他显示出我勾选区域的截图，也有OCR结果，这样我一下就能明白到底是哪个环节出了问题。

然后我就发现，每隔半秒截图的功能没问题，核心问题是，OCR一直识别不出结果。

bug找到了，后面的活就方便了，我就交给他直接搞了。

GLM-5自己开发了一套方案，他给出的识别方案是这样的，给每张牌都上传模板。

就像这样。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqU5l6YYRP4qLVSmTTwwCFzcPA6J302dzPTM6TWUNkpHGLNhV9uGzIRHJty5yAnehuF2BPmSm6Nev4vx9MnV3DKY1Dm3ZhCoEBY/640?wx_fmt=png&from=appmsg)

然后他会对游戏页面截图进行灰度处理、二值化，然后和模板进行模式匹配，从而实现识别。

这个灰度处理和二值化，说实话我没听懂，我也怕GLM-5给我的不是最优解，所以打开了Opus 4.6和GPT-5.3-codex，让他们也同时出一套解决方案看看有没有更优解。

没想到跟GLM-5出的方案，是一模一样的，搞得还真没毛病。

这突然一下显得我有点小肚鸡肠，不信任GLM-5了= =

模板处理完之后，很快，他就把这个系统开发完了。

由于我注册的是新号，估计新手村对面是人机，出牌特别快。我本来还担心识别速度会跟不上。

没想到，识别效果出乎意料的好。除了大小王识别有点问题，其他全都能准确识别，哪怕是接连出顺子，也能精准识别。

相当牛逼了。。。

要知道，这真的不是那种普通的前端网页，这个实现方式，还是稍微有那么点复杂的。

GLM-5，完成的非常的好。

大小王的识别问题我初步想了一下，是因为上传的模板中，字母是一样的，只是颜色不一样。

图片经过灰度处理后大小王不就一样了吗，那肯定分不清。不过大小王还是比较好记的，所以也没管这个。

而且，这是我一两个小时不到就做出来的东西，而且是已经可以实战用上的东西，这个效率，还是相当恐怖的。。。

同时，这里我也提醒大家上网打牌的时候，特别是现在这个阶段，在网上用真钱去做一些游戏的时候，真的要谨慎一点，因为你不知道对面会不会像我一样，随手Vibe Coding一个外挂。。。

除了这两个之外，我还随手，复刻了一个QQ农场。

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqUVvMqzvfAEHwrLYFUm3od7bSnOwZsI7GhnNdYONXm5aiaTOQibxA5CDeTSTkS5Eg1tZ3EclbPZVYb5iaDIObiarv0U4TtRMgA0JDA/640?wx_fmt=png&from=appmsg)

而且还有很多细节，比如如果我不收已经熟了的作物他会枯萎，然后农场里还会随机长出杂草、虫子。

相当有意思。

在数据存储上，还知道用浏览器LocalStorage作为数据存储，这是一个典型的前端单机游戏存储方案，很适合这种轻量级项目，大概的流程就是下面这个样子。

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqXtMKzEx9IRIl4FX13yqe0NE2SoXAs0wWE0Kib8PTEWGibCFzPiciahpH8mjoHtGaeHalnvcFS7QRmGKibpb7w7PNkNU2fNRSTy11kA/640?wx_fmt=png&from=appmsg)

而且这个QQ农场消耗的token，也就十三万。。。

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqUD1jyy4ekUAYEEcKiaEIViaI27iaZMm8FDZRVJn9rpqURYiaDds4HxQMXQDp9OibfrMekS8n6sNGMAf8YnDb4KLwWWSw2XPZdYtRUs/640?wx_fmt=png&from=appmsg)

太离谱了。

从这些case其实已经非常客观的能看出来，GLM-5的开发能力，还是很强的，在一些规划、架构能力上，是真的可以比肩Opus 4.5的，虽然在精准的BUG修改上，离现在最变态的GPT-5.3-codex还有一些差距，但是我已经非常非常开心了。

而且还有个场景，GLM-5做的也很好，就是构建Skills。

这个其实也挺考验模型的理解和执行能力的。

我很喜欢用咱们的老演员yt-dlp测试GLM-5打包Skills的能力。

帮我把这个开源工具
https
:
//github.com/yt-dlp/yt-dlp打包成一个Skill，只要我后续给出视频链接，就可以帮我下载视频。

GLM-5封装的基本没有任何问题，一轮效果，B站视频就能成功下载了。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqXgXBe0qIVXtJzIKqqqgAdMKuztlIiaW022H0yhI60EgQb9mSPH4Zjm6UqWFJTm7u9KJHiagjeys5g8RUhrNsWLKicVSicOtibJopWo/640?wx_fmt=png&from=appmsg)

而下载youtube视频，它也精准的提出了，需要我给一个Cookies，他才能帮我下载，我依稀记得，当时用Opus 4.5打包这个Skills，对话了6、7轮，改了N版，他也没告诉我要Cookies这事，就在那自己傻逼兮兮的告诉我改好了，可以下了，一下又报错。。。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqVUnNSwWS0VT5sQM85OUkAXAnOggkYta21EiaoiaF5JTp2YmwTLPJIOs8uq35Uv2n4Rrl1ZDR7AduJVUjCc1vY8yiaKolYU1RZgh8/640?wx_fmt=png&from=appmsg)

看着此情此景，回想半年前。

那时候，如果你问我，国产大模型能不能在Coding领域跟OpenAI和Anthropic正面刚，我会说很难。

差距太大了，不是一点半点，是那种让人绝望的差距。

但现在，GLM-5出来了，确实能摸到Opus 4.5的水平。虽然跟最新的Opus 4.6和GPT-5.3-codex还有差距，但这个差距已经从代差缩小到了可以追赶的范围。

这是一个很重要的变化。

而且更重要的是，GLM-5是开源的，价格更是Claude的N分之1。

能力接近，开源免费，价格便宜。

而开源，更是意味着，B端能用上，企业能用上。

AI编程这件事，在国内，门槛真的，正在急剧降低。

以前你想用顶级的AI编程能力，得买ChatGPT的会员，得有魔法，得付得起那个价格。

现在不用了。

GLM-5给了你一个平替选择，虽然在全球领域，他距离那个老变态，他还不是最好的，但已经是跻身T1行列了，而且人人也都能用得起。

这会让更多人开始尝试AI编程，会让更多人感受到AI的魅力。

而当更多人用起来之后，社区会更活跃，反馈会更多，模型会迭代更快。

这是一个正向循环。

这也代表，我们在人才、在算力、在资金各方面都缺少的地不是，是能追上的。

当然，追上不代表胜利。

OpenAI和Anthropic还在快速迭代，下一个版本可能又把差距拉开。

但至少，我们已经进入了同一个赛道，在同一个维度上竞争。

这就是进步。

我非常非常推荐大家，去试试GLM-5吧，真的还不错。

站在今天这个节点，我其实很想说跟冯骥一样的话：

我真的很庆幸，这个开源模型。

来自智谱，来自中国。

在ds和sd之后的另外一个Coding世界里，也有了中国身位。

惟愿。

国运昌隆。

林机梦逗、tashi

wzglyay@virxact.com

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
