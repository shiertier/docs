---
title: "ZeroOmega：多代理配置与切换客户端工具"
对象: "GitHub 仓库 `zero-peak/ZeroOmega`"
来源: "GitHub README 与仓库公开信息"
原文链接: "https://github.com/zero-peak/ZeroOmega"
开源协议: "GPLv3"
---

## 摘要

ZeroOmega 是一个基于 SwitchyOmega 分支并兼容 Manifest V3 的开源浏览器扩展，定位于多代理配置管理与快速切换。

- 支持在 Chromium 系浏览器与 Firefox 中以 WebExtension 方式使用。
- 核心目标是统一管理多个代理配置，并在不同配置间快速切换。
- 项目包含 `omega-pac`（PAC 生成）、`omega-target`（配置与应用逻辑）和 `omega-web`（Web 配置界面）等模块。
- README 明确提供官方扩展商店入口与 GitHub Releases 离线包入口。
- 项目声明不与代理商、VPN 提供商、ISP 合作，且不提供网络连接或代理技术支持。
- 仓库最近一次可见提交信息为 `release 3.4.5`（提交日期 `2025-10-07`，基于本地浅克隆结果）。

## 功能与定位

ZeroOmega 的定位是浏览器侧代理配置管理工具，用于维护和切换多个代理情景配置，而不是提供代理网络本身。

## 典型使用场景

- 在同一浏览器中维护多套代理配置并按需切换。
- 在 Chromium 与 Firefox 之间使用相近的代理管理体验。
- 在团队或个人环境中统一管理代理规则与 PAC 配置逻辑。

## 特色与差异点

- 以 SwitchyOmega 分支为基础，重点适配 Manifest V3。
- 模块划分清晰：PAC 生成、选项管理、Web 配置界面相对解耦。
- 同时提供 Chrome、Edge、Firefox 的官方扩展入口。
- 支持社区翻译协作（Weblate）。

## 使用方式概览

项目以浏览器扩展形态提供能力，使用入口以官方扩展商店和仓库发布页为主；具体配置细节应以仓库 README/Wiki 的最新说明为准。

## 限制与注意事项

- 本项目是配置与切换工具，不提供代理节点、网络线路或连通性保障。
- 该类工具涉及网络访问与合规边界，使用前应确认本地法律法规、组织政策与服务条款。
- 本仓库仅做信息归档，不复述可直接执行的规避限制类操作细节。

## 链接

- 仓库主页：https://github.com/zero-peak/ZeroOmega
- README：https://github.com/zero-peak/ZeroOmega/blob/master/README.md
- Releases：https://github.com/zero-peak/ZeroOmega/releases
- Issues：https://github.com/zero-peak/ZeroOmega/issues
- Chrome Web Store：https://chromewebstore.google.com/detail/pfnededegaaopdmhkdmcofjmoldfiped
- Microsoft Edge Addons：https://microsoftedge.microsoft.com/addons/detail/zeroomegaproxy-switchy-/dmaldhchmoafliphkijbfhaomcgglmgd
- Firefox Add-on：https://addons.mozilla.org/en-US/firefox/addon/zeroomega/
- Weblate：https://hosted.weblate.org/engage/switchyomega/?utm_source=widget

## 关联主题

- [[00-元语/github]]
- [[00-元语/tool]]
- [[00-元语/protocol]]
- [[00-元语/compliance]]
- [[00-元语/risk]]
