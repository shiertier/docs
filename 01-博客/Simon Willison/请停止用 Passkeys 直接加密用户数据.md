---
title: "请停止用 Passkeys 直接加密用户数据"
发布日期: 2026-02-27
作者: "Simon Willison"
来源: "Simon Willison"
原文链接: "https://simonwillison.net/2026/Feb/27/passkeys/#atom-everything"
译注: "根据原文整理"
---

## 摘要

**一句话总结**
不要把 Passkeys 当作直接加密用户数据的钥匙，因为用户经常会丢失 Passkeys，而这会把数据一并锁死成不可恢复状态。

**关键要点**
* 核心警告：Passkeys 适合做身份验证，不适合作为直接加密用户数据的唯一前提。
* 风险重点：一旦用户丢失 Passkeys，且系统没有恢复机制，被其加密的数据可能永久无法找回。
* 设计启发：涉及不可逆数据后果的方案，必须把恢复路径和用户认知成本一并纳入设计判断。

## 正文

本文基于 Simon Willison 在 2026-02-27 发布的内容整理，核心观点是不要把 Passkeys 直接当作用户数据的加密钥匙。

文章强调的问题不在于 Passkeys 本身，而在于把它们误用为不可恢复数据的唯一加密前提。用户会丢失 Passkeys，也未必理解这会让自己的数据永久无法解密，因此这种设计把认证能力和数据恢复能力错误地绑定在了一起。

> 原文摘录：Please, please, please stop using passkeys for encrypting user data ( via ) Because users lose their passkeys all the time , and may not understand that their data has been irreversibly encrypted using them and can no longer be recovered.

这篇文章的价值在于把一个看似“更安全”的实现选择，明确指出为高代价且难以回退的风险决策。凡是涉及凭证、密钥与用户数据恢复路径的方案，都需要先区分“登录验证”和“数据解密”这两类能力，再决定是否共用同一机制。

## 关联主题

- [[00-元语/security]]
- [[00-元语/risk]]
- [[00-元语/decision-making]]
