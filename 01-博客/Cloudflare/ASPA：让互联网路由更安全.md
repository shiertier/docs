---
title: "ASPA：让互联网路由更安全"
发布日期: 2026-02-27
作者: "Cloudflare"
来源: "Cloudflare"
原文链接: "https://blog.cloudflare.com/aspa-secure-internet/"
译注: "根据原文整理"
---

## 摘要

**一句话总结**
ASPA 是建立在 RPKI 之上的 BGP 路径验证标准，目标是让运营商能够核验 `AS_PATH` 中的上游授权关系，减少路由泄露与部分伪造源劫持带来的风险。

**关键要点**
* 与 ROA 的分工：ROA 验证前缀起源是否合法，ASPA 验证流量经过的路径是否合法。
* 检测边界：ASPA 能发现不少 route leak 和 forged-origin hijack，但仍无法覆盖某些由上游伪造对等关系的场景。
* 落地进展：RIPE 与 ARIN 已支持创建 ASPA 对象，Cloudflare Radar 新增了跨 RIR 趋势、AS 级记录检索与变更时间线。
* 运行前提：ASPA 真正发挥作用还依赖 RPKI 生态、RTR 软件、BGP 实现，以及 RFC9234 BGP roles 等配套支持。

## 正文

文章聚焦互联网路由安全中的一个长期问题：BGP 可以借助 ROA 验证“前缀是谁宣布的”，但仍难验证“流量实际经过了哪些被授权的网络”。Cloudflare 将 ASPA 描述为对 RPKI 的延伸：网络可以发布自己认可的上游提供商列表，接收方再结合 `AS_PATH` 判断一条路由是否沿着被授权的关系链传播，从而识别 route leak。

文中还说明了 ASPA 的实际能力边界。它能有效提升对路由泄露和部分 forged-origin hijack 的识别能力，但并不能覆盖所有伪造路径场景，尤其是涉及提供商伪造对等关系时仍会失效。要让 ASPA 真正在互联网中产生价值，除了签发 ASPA 对象，还需要 RPKI relying party、签名器、RTR 软件和 BGP 实现跟进，并配合 RFC9234 定义的 BGP roles 使用。

Cloudflare 同步在 Radar 中上线了 ASPA 部署监测功能，用于查看五个 RIR 的采用趋势、检索 AS 级 ASPA 记录、查看某个 AS 已授权的上游提供商，以及追踪 ASPA 变更时间线。这让 ASPA 不只是一个标准草案，而是可以被网络运营者和研究者持续观察、核验和运维的公开数据面。

## 相关文档

- [[01-博客/Cloudflare/提升后量子、加密消息与路由安全的透明度|提升后量子、加密消息与路由安全的透明度]]；关联理由：同一事件；说明：该文是 Cloudflare 同日发布的 Radar 安全透明度总览文章，其中一部分介绍了 ASPA 监测能力，而本文专门展开解释 ASPA 的工作原理、能力边界与部署前提。

## 关联主题

- [[00-元语/cloudflare]]
- [[00-元语/observability]]
- [[00-元语/protocol]]
- [[00-元语/security]]
