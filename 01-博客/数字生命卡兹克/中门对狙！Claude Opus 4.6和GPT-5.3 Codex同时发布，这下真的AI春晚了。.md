---
title: "中门对狙！Claude Opus 4.6和GPT-5.3 Codex同时发布，这下真的AI春晚了。"
发布日期: 2026-02-06
作者: "数字生命卡兹克"
来源: "微信公众号"
原文链接: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647679769&idx=1&sn=b534c351bbed1859f31d312c004c81d6&chksm=f1f6ed64c24436aac29436dd0ea75d29d65d56ef585d4bac76c87e3bc837f902a990ef5b5498"
---

## 摘要

### 1) 一句话总结
Anthropic与OpenAI同日分别发布了Claude Opus 4.6和GPT-5.3 Codex，两款新模型在编程能力、Agent自主操作及长上下文处理方面均实现了显著的性能与功能跃升。

### 2) 关键要点
*   **Claude Opus 4.6 跑分表现**：在OSWorld（72.7%）、BrowseComp（84.0%）、GDPval-AA（1606 Elo）及ARC AGI 2（68.8%）等基准测试中表现优异，全面提升了电脑操作、搜索及流体智力能力。
*   **Claude 上下文与输出升级**：上下文窗口提升至100万Token（100万Token/8根针的大海捞针测试准确率达76%），单次输出上限翻倍至128K Token。
*   **Claude 新增核心功能**：内置上下文压缩（Context Compaction）以支持长任务不断联；新增自适应思考（Adaptive Thinking）与手动控制思考深度的Effort控制功能（分low、medium、high、max四档）。
*   **Claude 生态与B端集成**：推出Agent Teams功能，允许多个AI代理在各自上下文中协同工作与直接通信；发布Claude in Excel和Claude in PowerPoint插件，支持数据处理与幻灯片生成。
*   **Claude 定价策略**：常规API价格保持不变（输入$5/输出$25每百万Token），超过20万Token的上下文采用额外定价（输入$10/输出$37.50每百万Token）。
*   **GPT-5.3 Codex 核心突破**：成为OpenAI首个在自身开发过程（如调试训练过程、管理部署、评估）中发挥重要作用的模型。
*   **GPT-5.3 Codex 跑分与性能**：在Terminal-Bench 2.0中以77.3%领先；在更严格的OSWorld-Verified（64.7%）和SWE-bench Pro Public（56.8%）测试中表现强劲；单Token速度提升25%以上，且完成同任务所需Token数减少一半。
*   **GPT-5.3 Codex 交互与实践**：支持在模型生成过程中随时介入与调整方向；已具备在几天内自主迭代数百万Token，开发出完整Web游戏（如包含地图和道具的赛车、潜水游戏）的能力。

### 3) 风险与差距
*   **基准测试对比偏差**：两家模型使用的评测基准版本存在差异（如Claude使用原版OSWorld和SWE-bench Verified，而GPT使用更严格的OSWorld-Verified和SWE-bench Pro Public），导致跑分无法直接对等比较。
*   **跑分与实际体验的鸿沟**：模型跑分数据与实际使用体验之间存在差距，高分模型在特定场景下未必顺手。
*   **长上下文腐烂（Context Rot）**：大模型在处理极长上下文时，容易出现表现下降或遗忘关键信息的问题（业内普遍问题，Opus 4.6在此方面做了针对性优化）。
*   **GPT在B端生态的差距**：相比于Claude深入集成办公软件，GPT目前在B端和生产力端的体验与集成进度上相对落后。
*   **行业冲击风险**：随着AI模型Agent化和编程能力的快速提升，传统SaaS软件公司正面临巨大的竞争压力与范式转变风险。

## 正文

在全网翘首以盼的等了两天之后，在凌晨2点。

Anthropic的新模型Cluade Opus 4.6正式更新了。

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqVNubN4UYb397U2M8sW2ficPhcr9SOib75gvCCwY81fQeSd0e76n0ib2E4UwsLJKVFTRbMtNv170GFmmMHAKeqOmPBmc3Q53zPhOo/640?wx_fmt=png&from=appmsg)

我说实话，我是真的最近因为AI圈这些模型和产品，熬夜熬的有点扛不住了。

但其实最颠最绝望的是，20分钟之后，OpenAI也发了新模型。。。

GPT 5.3 Codex也来了。

这尼玛，真的是中门对狙了。

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqVqmPiacDWiciad3f8AibOWyUZv0c62udlC0dRogshEaRX4honCjbEPvq1W6AYGQ3oxX5yowdtGX6vhPJgkS2j5nb8LQATKxlicZiarg/640?wx_fmt=png&from=appmsg)

要了亲命了。。。

这两模型都还是得看，因为之前GPT和Claude几乎就是我最常用的维二最主力的模型，GPT-5.2用来做各种各样的搜索和事实核查还有研究还有编程改BUG，Opus 4.5做创作和主力编程。

现在，两个都来了。

太刺激了。

一个一个说吧。

一. Claude Opus 4.6

这次
Anthropic其实不止发了Claude Opus 4.6，还有一个很好玩的东西，Agent Teams，还有关于Excel和PPT插件的更新。
先说Claude Opus 4.6。
每次有新模型发布，大家第一反应就是看跑分。
这次Opus 4.6的跑分确实很漂亮，我挑几个重点说说。
首先是Terminal-Bench 2.0，这是一个测试AI在终端环境下编程能力的评估，Opus 4.6拿了65.4%，是所有模型里最高的（没看到GPT-5.3 codex之前）。
GPT-5.2是64.7%，Gemini 3 Pro是56.2%。
让我比较惊讶的是
OSWorld
这个评估，测的是AI操作电脑的能力，Opus 4.6拿了72.7%，比Opus 4.5的66.3%高了不少。
这就意味着Claude越来越会用电脑了，它能更好地操作鼠标、点击按钮、在不同应用之间切换，在Coding能力提升的同时，电脑操作的能力也有大幅提升，这是真的要奔着全面Agent化去了。
还有一个
BrowseComp
，也是让我意外的，测的是Agent在网上搜索信息的能力，Opus 4.6拿了84.0%，远超其他模型。
第二名GPT-5.2 Pro是77.9%，差了6个多点。
因为我自己其实一直把GPT-5.2 Pro当作是我最牛逼的研究报告生成引擎去用的，他比DeepResearch还要强，精准度极高幻觉率极低，现在Opus 4.6比它还要搞6个点，说实话有点离谱了。
然后就是
GDPval-AA
这个评估，这个评估测的是AI在真实工作任务中的表现，包括金融、法律等领域的知识工作。Opus 4.6拿了1606的Elo分，比GPT-5.2高了144分，比自己的前代Opus 4.5高了190分。
144分的Elo差距还是挺大的，也就是说，在干活这件事上，Opus 4.6确实是目前最强的，Cluade是真的把自己的编程能力，开始逐渐泛化到其他的工作场景里面去了。
然后最离谱的是这个，
ARC AGI 2
，68.8%，吊打一切。。。
我之前在GPT-5.2发布时候的文章里科普过这玩意，就是下面这种题。
这种能力，现在称为流体智力
（Fluid Intelligence），意思就是指不依赖于已有的知识，在全新情境下进行逻辑推理、识别模式和解决问题的能力。
说白了，就是你的
悟性
和
开窍的能力。
之前在ARC-AGI-2上，GPT-5.1的得分是17.6%，而GPT-5.2 Pro，直接飙到了50%多。
这一次，Claude Opus 4.6，直接干到了68.8%，是有点离谱的，差点摸到7字头了。
从上面这些跑分看，除了一些世界知识和问答上，Claude Opus 4.6还弱于GPT-5.2，其他的几乎已经全面领先。
当之无愧的SOTA。
说实话，我对跑分一直有点复杂的感情。
一方面，跑分确实能说明一些问题，但另一方面，跑分和实际使用体验之间，往往有一道很深的鸿沟。
很多模型跑分很高，但用起来就是不顺手，反过来，有些模型你看着整体跑分一般，但在某些场景下就是还挺好用的。
所以我更关注的，是这次更新在产品层面做了什么。
第一个：1M token的上下文窗口。
普天同庆！！！Claude Opus系列，终于有1M上下文啦！！！
Opus 4.6终于支持100万token的上下文了！！！
真的，做Coding的朋友们都知道，上下文容量有多重要。。。
之前只有200K的小窗口，这次整整翻了5倍！！！现在再也不用担心这个问题了！！！
而且我要说一个很重要的点，就是上下文窗口大，不等于模型能真正用好这么大的上下文。
很多模型虽然支持很长的上下文，但你真的塞进去很多内容之后，模型的表现会明显下降，会变得很蠢。
这个问题在业内叫"context rot"，上下文腐烂，也就是你用的越久，模型能力开始变得越差。
而这次，Claude Opus 4.6，在MRCR v2的测试上做了实验，这个测试是大海捞针类的，就是在一大堆文本里藏几个关键信息，看模型能不能找到。
在100万token、藏8根针的测试里，Opus 4.6直接拿了76%，而Sonnet 4.5只有18.5%，太牛逼了！
而且上下文推理上，也傲视群雄。
这对很多实际场景来说真的非常有用，也是我最最最喜欢的升级点，不只是coding，其实比如你想让Claude帮你审查一份几百页的法律文件，或者分析一个大公司的财报，现在大概率也是可以一次性搞定了。
第二个：输出上限提升到128K。
以前Claude的输出上限都是64K，这次直接翻倍了。
也算是一个相当不错的利好。
这个改进听起来不起眼，但对于实际使用来说真的很重要。
第三个：Context Compaction，上下文压缩。
这个功能其实Claude Code已经实现很久了，但我觉得还是很有必要说一下，因为它解决了一个很现实的问题。
当你跟AI聊了很久，或者让AI执行一个很长的任务，对话内容会越来越多，最终会超过上下文窗口的限制。以前遇到这种情况，要么任务失败，要么得手动清理对话历史。
现在有了Context Compaction，Claude可以自动把旧的对话内容压缩成摘要，腾出空间给新的内容。
这样Claude就能执行更长时间的任务，而不会因为上下文溢出而中断。
这对于那些需要Claude长时间自主工作的场景来说，是一个很实用的改进。
以前是在Claude Code里使用工程实现的，现在直接模型自带了。
第四个：Adaptive Thinking和Effort控制
以前Claude有一个"extended thinking"功能，就是让它在回答之前先深度思考一会儿。
这个功能开启之后，Claude的回答质量会提升，但速度会变慢，成本也会增加。
问题是，以前这个功能是要么开要么关，没有中间状态。有些简单问题，你开了深度思考，就有点杀鸡用牛刀了。
现在有了两个新功能来解决这个问题。
一个是Adaptive Thinking，自适应思考。开启之后，Claude会自己判断这个问题需不需要深度思考。简单问题就快速回答，复杂问题就多想一会儿。
另一个是Effort控制，让你可以手动设置Claude的思考程度。有四个档位：low、medium、high、max，默认是high。
这两个功能加起来，让Claude的使用变得更灵活了。
你可以根据实际需求，在速度、成本、质量之间找到平衡点。
然后还有一个，是Claude Code里面很重要的更新，叫做Agent Teams。
以前你用Claude Code，是一个Claude在干活，你给它一个任务，它自己去做，做完了给你看结果。
现在有了Agent Teams不一样了，你可以让一个会话充当团队负责人，协调工作、分配任务并综合结果。
然后启动团队成员独立工作，各自在自己的上下文窗口中，并彼此直接通信。
比如假设你要做一个代码审查，需要看前端代码、后端代码、还有数据库相关的代码。以前你可能要分三次让Claude看，每次看一部分。
现在你可以说"帮我审查这个代码库"，然后Claude会自动启动3个团队成员，一个看前端，一个看后端，一个看数据库，三个同时进行，最后把结果汇总给你。
而且这些团队成员不是完全独立的，它们可以相互沟通。比如后端代理发现一个API的变更，它可以告诉前端代理，让前端代理检查一下调用这个API的地方有没有问题，而且他们也可以互相质疑、互相挑战、互相发现。
跟Claude Code里面之前subagents也就是子代理不同的点在于，子代理在单个会话中运行，只能向主代理报告结果，而Agent Teams是一个团队，团队成员可以直接与各个团队成员互动，无需通过负责人。
他们自己也做了一个非常明确的图表来进行区分。
当你需要快速、专注的工作人员进行反馈时，使用子代理。当团队成员需要共享发现、相互挑战和自主协调时，使用Agent Teams。
然后就是两个小的更新，一个是Claude in Excel这个插件将Claude Opus 4.6直接集成到了excel里面。
现在还支持数据透视表编辑、图表修改、条件格式设置、排序和筛选、数据验证以及金融级格式设置。
还添加了可用性改进，包括长对话的自动压缩和拖放多文件支持等等。
然后还发了一个Claude in PowerPoint。
将Claude集成到了PowerPoint侧边栏中，让它在创建新内容之前读取现有的布局、字体和母版。
Claude也可以根据客户模板构建演示文稿、对现有幻灯片进行针对性编辑。
Anthropic真的凭借着Claude，在B端领域，真的开始大杀四方了。
GPT说实话，现在整个B端和生产力端的体验，稍微落后的有点多了。
最后说一下价格。
API价格保持不变，还是$5/$25每百万token（输入/输出）。
如果用超过20万token的上下文，会有额外定价，是$10/$37.50每百万token。
目前，Claude网页版和Claude Code上，Claude Opus 4.6均以全面上线，已经可以快乐的玩耍起来了。
二. GPT-5.3 Codex
终于聊完了Claude的东西，然后到了GPT这边。
说实话，我自己对GPT一直也是有自己的情感的，他依然是我现在在任何时候想到问题，第一个去问的模型，想要要验证某一个事的时候，第一个去问的模型。
而且，虽然我不是一个专业的编程大佬，但是在我有限的Vibe Coding的经验里，我觉得GPT-5.2 Codex在解决BUG和难点的问题上，是要强于Claude Opus 4.5的。
特别是GPT-5.2 Codex+Codex的改BUG体验，是要比Claude Opus 4.5+Claude Code要更强的。
所以我自己经常的工作流，经常是用Claude code写一个大的，然后用codex接手后续进行调整。
所以我刚好，还真是这两玩意的用户。。。
所以GPT-5.3 Codex的更新，我自然也非常的开心。
两者中门对狙，开心的自然是我们用户。
这次GPT-5.3 Codex，其实最让我惊讶的东西，不是跑分，是他们博客里的一句话：
"GPT-5.3 Codex是我们第一个在创造自己的过程中发挥重要作用的模型。"
OpenAI说，他们的Codex团队在开发GPT-5.3的过程中，用早期版本的模型来debug自己的训练过程、管理部署、诊断测试结果和评估。
用人话说就是，AI参与了自己的开发。
这个事情听起来有点科幻，但其实逻辑上是通的。
AI模型的开发过程，本质上也是一堆代码，训练脚本是代码，部署流程是代码，测试框架也是代码。
既然AI已经coding能力已经这么牛逼了，那让AI来帮忙写这些代码，也是顺理成章的事。
但顺理成章和真的做到了说实话，是两码事。
OpenAI的团队说，他们被Codex能够加速自身开发的程度震惊了。
如果AI能够越来越多地参与自己的开发，那AI进化的速度会不会变得更快？这个问题，可能比任何跑分都重要。
这个世界，真的都在疯狂的加速啊。
然后老规矩，再看下跑分。
GPT-5.3 Codex在几个关键的编程评测上都拿到了最高分。
这时候，你肯定会问了，
GPT-5.3 Codex和Claude Opus 4.6，到底哪个跑分更牛逼一点？？？
说实话，因为两家的评测基准，还是有很多细节差异，所以，完全没法直接进行对比。。。
唯一一个对齐的基准是Terminal-Bench 2.0，这是一个由89个复杂真实任务组成的基准，这些任务都在终端环境中执行，每个任务运行在独立Docker容器内。
2.0版本于2025年11月7日发布。
Claude Opus 4.6得分65.4%，GPT-5.3 Codex得分77.3%，OpenAI领先11.9个百分点。
在这个唯一相同的基准里，GPT更胜一筹，而且是大胜，符合我对Codex系列的认知。
然后是OSWorld，评估AI agent操作真实计算机的能力，人类基线为72.36%。
关键区别在于，Claude Opus 4.6报告的是原版OSWorld（72.7%），而 GPT-5.3 Codex报告的是OSWorld-Verified（64.7%）。
OSWorld-Verified于2025年7月28日发布，是一次全面重构，修复了原版中300+已识别问题，包括失效 URL、反爬 CAPTCHA、不稳定 HTML 结构、含糊指令，以及过严/过松的评测脚本。
所以说，别看这个评测看着Claude更强，但是两个分数衡量的并不是同一件事。
OSWorld-Verified 提供了更严格、更可控的信号，也一般被认为更难，所以严格意义上来说，
GPT-5.3 Codex的
64.7%
甚至是要强于
Claude Opus 4.6的
72.7%的。
然后是GDPVal，这个事在美国GDP贡献最大的9个行业中，覆盖44种职业、1320个真实知识工作任务。
任务要求产出真实职业交付物，如文档、表格、演示、图表，平均相当于7小时专家工作量。
可比性问题在这里最明显。
GPT-5.3 Codex的“GDPval wins or ties: 70.9%”，使用的是 OpenAI 自己的方法，由职业人类评审盲评 AI 产出与人类专家产出，判断 AI 版本是否“与人类一样好或更好”，分母是固定的人类标准。
Claude Opus 4.6的“GDPval-AA Elo: 1606”，这是独立评测机构Artificial Analysis的体系，使用其自有Stirrup agent框架（具备 shell 与网页浏览能力）跑模型，再由Gemini 3 Pro做两两比较评判，最终用Bradley-Terry模型拟合Elo评分，并以GPT-5.1的1000 为锚点。
所以这个是太难换算了，我也不太清楚两边哪个更牛逼。。。
然后就是SWE-bench，SWE-bench测试AI是否能通过生成代码补丁修复真实 GitHub issue。
SWE-bench Verified（Claude Opus 4.6使用，80.8%）是500题、人工验证、仅Python的子集，由OpenAI Preparedness团队在2024年8月发布。
93位职业开发者验证了每道题都具备明确问题描述和公平单测，顶级模型已超过70%，该基准接近饱和。
SWE-bench Pro Public（GPT-5.3 Codex 使用，56.8%）是731题、多语言基准，由Scale AI创建。它覆盖Python、Go、JavaScript、TypeScript等，横跨41个仓库。参考解平均107.4行、4.1个文件，明显比 Verified常见的单文件补丁更复杂。
它还纳入copyleft与专有代码库，专门降低数据污染风险。
所以说，Claude Opus 4.6在Verified的80.8%与GPT-5.3 codex在Pro Public的56.8%不能直接比较。
但说实话Pro明显更难，发布时GPT-5和Claude Opus 4.1在Pro上都只有约23%，不到其Verified分数的三分之一。
所以说，其实整体跑分上，虽然看着GPT-5.3 Codex的得分好像都低一点。
但是含金量更足，如果非要我说的话，结合着我过去的测试印象，单开发这一块，可能会是GPT-5.3 Codex会更强更实用一点。
当然，还有一个最关键的一点是，GPT...他不封号呀= =
然后跑分是一回事，能做什么是另一回事。
OpenAI在博客里展示了两个用GPT-5.3 Codex做的游戏，一个赛车游戏和一个潜水游戏。
这两个游戏都不只是那种我们随处可见简单的demo，而是完整的、可玩的游戏。
赛车游戏有不同的赛车、八张地图、还有道具系统。
潜水游戏有不同的珊瑚礁可以探索、有氧气和压力管理系统、还有危险要素。
关键是，这些游戏全都是GPT-5.3 Codex自己做的。
OpenAI说，他们在Codex产品了里，用这个模型和一个叫develop web game的Skills，加上一些通用的跟进提示（比如"修复这个bug"或者"改进这个游戏"），让GPT-5.3 Codex在几天的时间里，自主迭代了数百万个token，最终做出了这些游戏。
说实话，有点牛逼的。
而且这次有一个很棒的更新点。
就是你可以在GPT-5.3 Codex工作的时候跟它互动，可以随时介入，随时调整方向了。。。
终于不用先停止了，这个小能力还挺香的。
目前已经在Codex上上线，我已经开始用起来了。
而且直观感受，在Codex上运行GPT-5.3 codex真的快了非常非常多。
在博客里没有这块数据，不过奥特曼自己的X上写出来了。
“完成相同任务所需的令牌数不到 5.2-Codex 的一半，且单令牌速度快 25% 以上！”
非常推荐大家下载个Codex试试，真的蛮好用的。
写在最后
这篇稿子又写了个通宵，基本上把我对这两个模型的理解都写进去了，应该没啥漏的了，应该是最全的一篇了。
至于实际测试，希望大家见谅，这么一点点时间实在测不出来，可能我得需要一整个周末的时候，正儿八经的开发几个产品，才能感受到明显的差异。
不过有一点就是，现在的模型几乎都是奔着Coding和Agent去的，所以这块的提升基本都很明显，跟手机一样，用新不用旧。
直觉上我的工作流还是不太会变，Claude Opus 4.6 + Claude code打草稿，GPT-5.3 Codex + Codex进行后续精准开发。
最后。
今天真的是AI行业的大日子。
Anthropic发了Opus 4.6，OpenAI发了GPT-5.3 Codex。
两家头部AI公司在同一天放出大招，这在历史上也是罕见的。
现在就等着Gemini还能玩出什么花活了。
从模型能力上看，两家都在快速进步，差距在缩小。
从产品形态上看，两家都在押注Agent，但侧重点有所不同。
从行业影响上看，传统SaaS公司开始感到压力，软件行业绝对正在经历一场从诞生以来最大的一次范式转变。
我不知道一年后这个行业会变成什么样。
但我知道，现在，绝对是一个需要密切关注、积极学习的时期。
错过这一波，可能就真的错过了。
如果你还没用过Claude Code，没用过Codex，现在是一个很好的开始时机。
毕竟，未来已经来了。
只是，还没均匀分布。
wzglyay@virxact.com

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqXAeXpK3zy3IDicUEYsTwLoWtViaye9XibxSw7cMZDd5HQeoX75fm7CK3u2H4RzblI0ATdGChrTicpL8LNLZfAA3V3lfxt2SGf1TNw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqUeAyefUxjm9ZZAgxqBpJWDslTM7yCjOia6r3BRAJVatlpnOwicbDB31F46ibO20lRzmJH8PeTvIfXNadNSYZwxOQe0KicPgSbseGQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURpt00laood3o4toybvmby6zpn27wia3MA4HNQdt1SCwVJPC4dXU8ImsONP0CyK9NKnA7qDouGLzT5Q/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=6)

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqWDGcibO64jfMESagj4mibypIQM4fL2CBibbk6fp1l3WemLR4EWHRE0Tfd8rWYnqptKw7F6nKy8xv4ic8tUfAgNWk0rdibpBMC4xibls/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqXY3CeBsuhiaB0Aw7jMQLGNfNfNDnP8JaYDD7O36LfZntHibl8CwcVR9YCG7t7vlb0p7CSMiakcG1U4qbbA9dUClIMPa0qgjN1amY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqWFa7DQGIt2q8zNXeGjcpJIqLyTLGhvtwO4YXUXeAenWFydzf7FLbdTicfMcjKP7c8SxxL3xVMZC1rkLfH3DkLPdQicEc9d1N2KU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqUskkegT7nm7e5o20P9ozBwdt5ohgkJPYaoIk7fgoDfZRGPotvw3P5hQqbUtBlCUMfpLqhMMFQtwNngeG64Uom9AmkPcm2qfzU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqWos0JiaWbKX97w4yDtCWK7oRdaGEOaAkDZzdIia9oOeOKicSfWQW44Nu8Z44QncjB553cUtvSbwlLNBAiblKeEyZmTZMbYsA0pKA8/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqWXhvibeC6B7ibuk5icq42jZG2ZqL0ic4yibiaEFibicib9VYbCL10fmKRe8YqicaoOt914n9ZexdGZ9ZgZhPyJ7NvzAgy4R828nSibB6mHqA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqUNLgicD0Wj8Sy7Fn1oO10jpsPsSaxUp0473maqMePeiaClLGznp5W1pibIUbKIV11siazFyJhdLNc32CFImSdePsLUFmdH7mXRIp8/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqWvEUe7njPcvV2Z1bI9XtgOM1STrV9oUx6yUR2icTH040Xo0UYFN4p5XEukaePRtG9u2ClPgncShptrFibmbBut31b6miaUcefCfE/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqXJLcTichPGicXPen8vaNoAWTpZudInc193MvPl3DIYSNjYEMEK1fLR6ibRbI7XptsprSMstQECBzupVFJkymvwV9HAyAxQMbDhD0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqVGMCeO0LeTVWPN90nCOq6oTicib6rtKR9EFoORxkLaJY0R98MzvzJLJdoPHT5VO8cGso1KFiaBQq7M8amoq8BpGfhf8koozckm9U/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqXwydYt24IYicGCpwfN31CSza0kOsENftbBSVKoYnkze7G4HljZ4BRbVDW1Cu6RbCmHT5ddKUQ2H18Dr6FibNugyOlyx4zsyoA20/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqWIVibuQd8Uquk80jhMMwhN23JgYfFp7qRShPYGd9kkxGVJw6sRMe9FbdvPQVhjYCm9b09XicviaeqXjibOXeH0tApJjRBEdwTpLias/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqVL8bDiaibklrN3y686qHjaia6u9RTUlzicIfhv2ic35RVFHWh5iadAicFAluiclNCkXkaJxh3Saxn2akSnXN7oTY1oCzkyH0UaRR9lLDU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqVhmbtxRibGicDb8v6YOZWLiaia9IjVyzqOPPXn8zxt9o93fmW3LGDPv6FkLkxj93niccLeIq9S0hUiahicPhb7xMfw5X7llPKKrP7XtA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqWowy7k97Rx5E5ibG3Nuqbrg4RNxwnibrKibLumgWszKrEVSIttljfxf80niaXg0kXMWaVhfk4VVosKOesSvc3VoebWibKdYK9TjDYk/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqWIrL5j52b3nzcfS76y9NIPv93MHYJMTu7OiaA4auleYVbgz86tMsjOrXwobicklbItgtWTqI7Sqo26MqFaksPkiaO1EnMEib5q2P8/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqUxp64bexoOJX4sR3hkUnA4268Tq8IZdd42iavkCLeULUN8DKBFs97g0plUVhzSrRoOheiaCvkukDbCsb3aXicta2MpmthPNm7dm0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqV4ZnqSqvB0E6M4B3cF18PAjlLuiaGcuCPgvTyq3Q5Av8XfNj0dnRTcAuPSxQum8wTskc5vhFcPLzwIFWXUm8b5kicFx58fzaPgI/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqVQGbKCzcpuZvdwwuVxSgUWib9n1W7BahiadShDfTozjgktJoDTrsFfPJF7wVjfoz3A0Sx1QPMtBRglDFCk5VmicSXjiaUEYexjbI0/640?wx_fmt=png&from=appmsg)

## 关联主题

- [[00-元语/数字生命卡兹克]]
- [[00-元语/AI]]
- [[00-元语/llm]]
