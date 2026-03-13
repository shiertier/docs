---
title: 'Codex Security 研究预览版现已上线'
发布日期: 2026-03-06
来源: 'OpenAI'
原文链接: 'https://openai.com/index/codex-security-now-in-research-preview'
作者: 'OpenAI'
---

## 摘要

**1) 一句话总结**
OpenAI 推出了应用安全智能体 Codex Security 的研究预览版，该工具通过构建深层项目上下文和自动化验证来精准识别复杂漏洞并提供修复方案，从而显著降低误报率并提升安全评审效率。

**2) 关键要点**
* **产品发布与受众**：Codex Security（原名 Aardvark）研究预览版现已上线，将向 ChatGPT Enterprise、Business 和 Edu 客户陆续推送，并提供为期一个月的免费试用。
* **核心工作流**：通过分析代码仓库生成可编辑的威胁模型；在沙盒环境中对漏洞进行压测验证并生成漏洞证明（PoC）；最后结合全系统上下文提供修复建议。
* **显著降低误报**：在私测期间，该工具使信噪比提升了 84%，漏洞严重性虚标比例降低了 90% 以上，全量代码仓库的检出误报率下降了 50% 以上。
* **大规模扫描验证**：过去 30 天内扫描了超 120 万次提交，精准识别出 792 项严重发现（仅出现在不足 0.1% 的提交中）和 10,561 项高危发现。
* **持续学习机制**：系统能够根据用户对漏洞严重程度的调整反馈进行学习，不断优化威胁模型并提高后续的检测精度。
* **支持开源生态**：推出“Codex for OSS”计划，为开源维护者提供免费的 ChatGPT Pro/Plus 账户及 Codex Security 工具，目前已协助发现并分配了 14 个开源项目 CVE 编号（涉及 OpenSSH、GnuTLS 等）。

**3) 风险与缺口（基于原文明确提及）**
* **行业工具缺口**：目前大多数 AI 安全工具存在大量低影响发现和误报，导致安全团队耗费大量时间初筛，使安全评审日益成为软件开发中的核心瓶颈。
* **开源社区痛点**：开源项目维护者面临的主要挑战不是缺乏漏洞报告，而是低质量、推测性的漏洞报告泛滥，增加了不必要的处理负担。
* **代码修复的回归风险**：在自动修复漏洞时存在引发代码回归（Regression）的风险，系统需要依赖全系统上下文和周边代码行为分析来将此风险降至最低。

## 正文

Codex Security 研究预览版现已上线
========================

正在加载…

分享

今天我们正式推出应用安全智能体 Codex Security。它能构建关于项目的深层上下文，从而识别其他智能体工具遗漏的复杂漏洞，提供更高置信度的分析结果及其修复方案。这能切实提升系统安全性，同时避免琐碎缺陷带来的干扰。

在评估真实安全风险时，上下文至关重要，但目前大多数 AI 安全工具只会标记低影响的发现和误报，迫使安全团队耗费大量时间进行初筛。与此同时，智能体正在加速软件开发，这也使得安全评审日益成为开发中的核心瓶颈。

Codex Security 同时解决了这两大挑战。通过将前沿模型的智能体推理能力与自动化验证相结合，它能输出高置信度的分析结果和可执行的修复方案，使团队能够专注于核心漏洞，从而更快地交付安全代码。

Codex Security 原名 [Aardvark⁠](https://openai.com/zh-Hans-CN/index/introducing-aardvark/)，自去年起在一小部分客户中开展私测。在早期内部部署中，它发现了一个真实的 SSRF（服务端请求伪造）漏洞、一个关键的跨租户身份验证漏洞以及许多其他隐患，我们的安全团队在数小时内便完成了补丁修复。通过与外部测试者的早期合作，我们优化了用户提供相关产品上下文的方式，缩短了从接入系统到实现代码安全防护的周期。在私测期间，分析质量也得到了显著提升：对同一代码仓库的持续扫描显示，检测精度不断提高。在某案例中，信噪比自初始发布以来提升了 84%。我们将漏洞严重性虚标 (Over-reported severity) 的比例降低了 90% 以上，全量代码仓库的检出误报率下降了 50% 以上。这些改进使 Codex Security 能够让报告的严重程度更贴近真实风险，减轻安全团队不必要的初筛负担。随着研发投入的持续增加，我们预计信噪比将进一步提升。

即日起，Codex Security 将通过 Codex 网页版向 ChatGPT Enterprise、Business 和 Edu 客户陆续推送，并提供为期一个月的免费使用。

Codex Security 工作原理
-------------------

Codex Security 基于 OpenAI 的前沿模型和 Codex 智能体构建。它通过将漏洞发现、验证和补丁修复植根于系统特定的上下文中，从而降低干扰并加速修复进程。

1.   **构建系统上下文并创建可编辑的威胁模型：**配置扫描后，它会分析代码仓库以理解系统的安全相关架构，并生成特定于项目的威胁模型。该模型能够记录系统功能、信任边界以及最易受攻击的薄弱环节。你可以对威胁模型进行编辑，使智能体与团队的评审标准保持一致。
2.   **优先级排序与漏洞验证：**它以威胁模型为上下文搜索漏洞，并根据系统预计会受到的实际影响对发现的问题进行分类。在条件允许的情况下，它会在沙盒验证环境中对漏洞进行压测 (Pressure-test)，以区分真实风险信号与干扰噪声。用户可以在“已验证发现”中查看此类分析。当 Codex Security 配置了适配项目的环境后，它可以在运行系统的上下文中直接验证潜在问题。这种深度验证能进一步降低误报率，并生成有效的漏洞证明 (PoC)，为安全团队提供更强有力的证据以及更明确的修复路径。
3.   **基于全系统上下文修复漏洞：**最后，Codex Security 会针对发现的问题提出修复建议，并确保补丁符合系统设计意图及周边代码行为。这能实现在提升安全性的同时，将回归风险 (Regression) 降至最低，使补丁的评审与合入更加安全。用户可以对分析结果进行过滤，以便集中精力处理对团队最核心、且对安全性影响最大的漏洞。

Codex Security 还能通过用户的持续反馈来提升分析质量。当你调整某个发现的严重程度 (Criticality) 时，它会利用该反馈来优化威胁模型，并在后续运行中提高检测精度；通过这种方式，它能学习并识别你所在架构及风险态势 (Risk posture) 中的核心关键点。

该系统旨在实现大规模运行，并输出高置信度的分析结果及易于采纳的补丁。在过去的 30 天内，Codex Security 扫描了私测群体外部代码库中超过 120 万次提交 (Commit)，共识别出 792 项严重发现和 10,561 项高危发现。严重问题仅出现在不足 0.1% 的已扫描提交中，这证明了系统有能力从海量代码中识别具有安全影响的问题，同时最大限度地减少了评审人员面对的干扰噪声。

NETGEAR vLLM Raptive

> “作为一家高度重视产品安全的公司，NETGEAR 很高兴能加入早期体验计划，其实际效果超出了我们的预期。Codex Security 能够无缝融入我们稳健的安全开发环境，显著提升了安全审计的效率与深度。其分析结果清晰、详尽，往往让我们感觉到有一位资深的产品安全专家在并肩作战。”

— Chandan Nandakumaraiah，NETGEAR 产品安全负责人兼 CVE 董事会成员

支持开源社区
------

开源软件构成了现代系统（包括我们自身系统）的基础。我们一直使用 Codex Security 扫描我们高度依赖的开源代码仓库，并将识别出的高影响安全发现分享给维护者，以协助增强这些基础系统的安全性。

在与维护者的沟通中，我们发现了一个普遍现象：挑战不在于缺乏漏洞报告，而在于低质量报告泛滥。维护者表示，他们需要减少误报，以可持续的方式来发现真实的安全问题，且这种方式不能增加额外的初筛负担。这些对话决定了我们利用 Codex Security 支持开源社区的方式：我们并不生成海量的推测性发现，而是构建一个能够优先处理高置信度问题、且便于维护者快速采取行动的系统。

作为这项工作的一部分，我们向多个广泛使用的开源项目报告了严重漏洞，包括 [OpenSSH⁠（在新窗口中打开）](https://github.com/openssh/openssh-portable/commit/c991273c18afc490313a9f282383eaf59d9c13b9)、[GnuTLS⁠（在新窗口中打开）](https://lists.gnupg.org/pipermail/gnutls-help/2025-July/004883.html)、[GOGS⁠（在新窗口中打开）](https://github.com/gogs/gogs/security/advisories/GHSA-p6x6-9mx6-26wj)、[Thorium⁠（在新窗口中打开）](https://www.cve.org/CVERecord?id=CVE-2025-35430)、libssh、PHP 和 Chromium 等。目前已分配了 14 个 CVE 编号，其中两项为重复报告 — 我们在附录中分享了一些示例。

最近，我们开始邀请首批开源维护者加入“Codex for OSS”计划；该计划通过提供免费的 ChatGPT Pro 和 Plus 帐户、代码评审以及 Codex Security 工具来支持开源生态。vLLM 等项目已经开始使用 Codex Security，并将其作为常规工作流的一部分来发现并修复问题。

我们计划在未来几周扩大该计划的规模，为更多维护者打造提升安全性、强化评审工作流，以及获取开源支持的直接路径。如果你是开源维护者并对此感兴趣，[请与我们联系⁠](https://openai.com/form/codex-for-oss)。

开始使用
----

我们将在未来几天内逐步向 ChatGPT Enterprise、Business 和 Edu 客户开放 Codex Security 的访问权限。详情参阅[我们的文档⁠（在新窗口中打开）](https://developers.openai.com/codex/security)，了解如何为你的团队配置 Codex Security。

附录
--

*   GnuTLS certtool 堆缓冲区溢出（单字节越界）— [CVE-2025-32990⁠（在新窗口中打开）](https://www.cve.org/CVERecord?id=CVE-2025-32990)
*   GnuTLS SCT 扩展解析堆缓冲区越界读取 — [CVE-2025-32989⁠（在新窗口中打开）](https://www.cve.org/CVERecord?id=CVE-2025-32989)
*   GnuTLS otherName SAN 导出过程中的双重释放 — [CVE-2025-32988⁠（在新窗口中打开）](https://www.cve.org/CVERecord?id=CVE-2025-32989)
*   GOGS 二步验证绕过 — [CVE-2025-64175⁠（在新窗口中打开）](https://github.com/advisories/GHSA-p6x6-9mx6-26wj)
*   GOGS 未授权访问绕过 — [CVE-2026-25242⁠（在新窗口中打开）](https://github.com/advisories/GHSA-p6x6-9mx6-26wj)
*   路径穿越（任意文件写入）— download_ephemeral, download_children (agent) — [CVE-2025-35430⁠（在新窗口中打开）](https://www.cve.org/CVERecord?id=CVE-2025-35430)
*   LDAP 注入（Filters 与 DN）— LdapUserMap::new / get_unix_info / basic_auth_ldap — [CVE-2025-35431⁠（在新窗口中打开）](https://www.cve.org/CVERecord?id=CVE-2025-35430)
*   未授权 DoS 与邮件滥用 — resend_email_verification — [CVE-2025-35432⁠（在新窗口中打开）](https://www.cve.org/CVERecord?id=CVE-2025-35432) , [CVE-2025-35436⁠（在新窗口中打开）](https://nvd.nist.gov/vuln/detail/CVE-2025-35436)
*   密码修改后 Session 未轮转 — User::update_user — [CVE-2025-35433⁠（在新窗口中打开）](https://www.cve.org/CVERecord?id=CVE-2025-35433)
*   TLS 验证被禁用 — Elasticsearch 客户端 — [CVE-2025-35434⁠（在新窗口中打开）](https://www.cve.org/CVERecord?id=CVE-2025-35433)
*   除零导致的拒绝服务 (DoS) — /api/streams/depth/.../{split} — [CVE-2025-35435⁠（在新窗口中打开）](https://www.cve.org/CVERecord?id=CVE-2025-35435)
*   gpg-agent 栈缓冲区溢出：通过 PKDECRYPT --kem=CMS (ECC KEM) 触发 — [CVE-2026-24881⁠（在新窗口中打开）](https://www.cve.org/CVERecord?id=CVE-2026-24881)
*   TPM2 PKDECRYPT 栈缓冲区溢出：RSA 与 ECC 密文长度校验缺失 — [CVE-2026-24882⁠（在新窗口中打开）](https://www.cve.org/CVERecord?id=CVE-2026-24881)
*   CMS/PKCS7 AES-GCM ASN.1 参数栈缓冲区溢出 — [CVE-2025-15467⁠（在新窗口中打开）](https://www.cve.org/CVERecord?id=CVE-2026-24881)
*   PKCS#12 PBMAC1 PBKDF2 keyLength 溢出 + MAC 绕过 — [CVE-2025-11187⁠（在新窗口中打开）](https://www.cve.org/CVERecord?id=CVE-2025-11187)

*   [2026 年](https://openai.com/news/?tags=2026)
*   [Codex](https://openai.com/news/?tags=codex)

作者
--

[OpenAI](https://openai.com/news/?author=openai#results)

继续阅读
----

[查看全部](https://openai.com/news/product/)

![Image 1: Designing AI agents to resist prompt injection > Cover Image](https://images.ctfassets.net/kftzwdyauwt9/1RDYuyU2BwlcY8yLsH8Ba8/cdea28b67da58dd9ab0e7d236bd149a4/OAI_Designing_AI_agentsto_resist_prompt_injection_Art_Card_1x1.png?w=3840&q=90&fm=webp)

[优化 AI 智能体设计：提升对“提示注入”的免疫力 安全防护 2026年3月11日](https://openai.com/index/designing-agents-to-resist-prompt-injection/)

![Image 2: Learning Blocks ArtCard 1x1](https://images.ctfassets.net/kftzwdyauwt9/91H3WwMZWgZwhG890LVLR/b3da0d856865e08c37d78bee7fb2f73a/Learning_Blocks_ArtCard_1x1.png?w=3840&q=90&fm=webp)

[New ways to learn math and science in ChatGPT 产品 2026年3月10日](https://openai.com/index/new-ways-to-learn-math-and-science-in-chatgpt/)

![Image 3: 5.4 Thinking Art Card](https://images.ctfassets.net/kftzwdyauwt9/5HSBM48XFBkni6rNv5CAbR/46fe1d133c1440563245262a5fa59c79/5.4_Thinking_Art_Card.png?w=3840&q=90&fm=webp)

[GPT-5.4 震撼登场 产品 2026年3月5日](https://openai.com/index/introducing-gpt-5-4/)

我们的研究
*   [研究概览](https://openai.com/zh-Hans-CN/research/)
*   [研究驻留](https://openai.com/zh-Hans-CN/residency/)
*   [OpenAI for Science](https://openai.com/zh-Hans-CN/science/)
*   [经济研究](https://openai.com/zh-Hans-CN/signals/)

最新进展
*   [GPT-5.3 Instant](https://openai.com/zh-Hans-CN/index/gpt-5-3-instant/)
*   [GPT-5.3-Codex](https://openai.com/zh-Hans-CN/index/introducing-gpt-5-3-codex/)
*   [GPT-5](https://openai.com/zh-Hans-CN/gpt-5/)
*   [Codex](https://openai.com/zh-Hans-CN/index/introducing-gpt-5-3-codex/)

安全
*   [安全措施](https://openai.com/zh-Hans-CN/safety/)
*   [安全与隐私](https://openai.com/zh-Hans-CN/security-and-privacy/)
*   [信任与透明度](https://openai.com/zh-Hans-CN/trust-and-transparency/)

ChatGPT
*   [探索 ChatGPT（在新窗口中打开）](https://chatgpt.com/overview)
*   [Business 版](https://chatgpt.com/business/business-plan)
*   [Enterprise 版](https://chatgpt.com/business/enterprise)
*   [Education 版](https://chatgpt.com/business/education)
*   [定价（在新窗口中打开）](https://chatgpt.com/pricing)
*   [下载（在新窗口中打开）](https://chatgpt.com/download)

Sora
*   [Sora 概览](https://openai.com/sora/)
*   [功能](https://openai.com/sora/#features)
*   [定价](https://openai.com/sora/#pricing)
*   [Sora 登录（在新窗口中打开）](https://sora.com/)

API 平台
*   [平台概览](https://openai.com/zh-Hans-CN/api/)
*   [定价](https://openai.com/zh-Hans-CN/api/pricing/)
*   [API 登录（在新窗口中打开）](https://platform.openai.com/login)
*   [文档（在新窗口中打开）](https://developers.openai.com/api/docs)
*   [开发者论坛（在新窗口中打开）](https://community.openai.com/)

商业应用
*   [解决方案](https://openai.com/zh-Hans-CN/solutions/)
*   [联系销售团队](https://openai.com/contact-sales/)

公司
*   [关于我们](https://openai.com/zh-Hans-CN/about/)
*   [我们的宪章](https://openai.com/zh-Hans-CN/charter/)
*   [基金会](https://openai.com/zh-Hans-CN/foundation/)
*   [工作机会](https://openai.com/zh-Hans-CN/careers/)
*   [品牌](https://openai.com/zh-Hans-CN/brand/)

支持
*   [帮助中心（在新窗口中打开）](https://help.openai.com/)

更多
*   [新闻](https://openai.com/zh-Hans-CN/news/)
*   [客户案例](https://openai.com/zh-Hans-CN/stories/)
*   [直播](https://openai.com/zh-Hans-CN/live/)
*   [播客](https://openai.com/zh-Hans-CN/podcast/)
*   [RSS](https://openai.com/news/rss.xml)

条款与政策
*   [使用条款](https://openai.com/zh-Hans-CN/policies/terms-of-use/)
*   [隐私政策](https://openai.com/zh-Hans-CN/policies/privacy-policy/)
*   [其他政策](https://openai.com/zh-Hans-CN/policies/)

[（在新窗口中打开）](https://x.com/OpenAI)[（在新窗口中打开）](https://www.youtube.com/OpenAI)[（在新窗口中打开）](https://www.linkedin.com/company/openai)[（在新窗口中打开）](https://github.com/openai)[（在新窗口中打开）](https://www.instagram.com/openai/)[（在新窗口中打开）](https://www.tiktok.com/@openai)[（在新窗口中打开）](https://discord.gg/openai)

OpenAI © 2015–2026 管理 Cookie

中文 中国

## 关联主题

- [[00-元语/AI]]
- [[00-元语/Agent]]
- [[00-元语/Codex]]
- [[00-元语/security]]
- [[00-元语/code-review]]
