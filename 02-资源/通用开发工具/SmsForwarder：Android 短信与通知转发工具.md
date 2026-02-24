---
title: "SmsForwarder：Android 短信与通知转发工具"
对象: "GitHub 仓库 pppscn/SmsForwarder"
项目主页: "https://github.com/pppscn/SmsForwarder"
开源协议: "BSD-2-Clause"
来源: "README、README_en、PRIVACY、GitHub Releases"
---

## 摘要

SmsForwarder 是一款开源的 Android 消息监控与转发工具，可按自定义规则把短信、来电和应用通知转发到多种外部渠道，并提供远程控制与自动化能力。项目当前主线为 v3.x，README 标注兼容 Android 4.4 至 13.0；v2.x（Java 版）已归档。使用上应重点关注其仓库声明的用途边界与隐私说明。

## 功能与定位

SmsForwarder 面向 Android 设备的消息转发与远程协同场景。根据仓库 README，它可监控短信、来电、应用通知，并基于规则执行转发动作；同时提供主动控制能力，用于远程查询或操作部分设备通信相关信息。

## 典型使用场景

- 备用机消息集中：把短信和通知转发到常用协作渠道，减少频繁查看备用机。
- 远程状态查看：在授权场景下远程查看短信、通话或设备状态信息。
- 例行流程自动化：通过自动任务和快捷指令减少重复手工操作。

## 特色与差异点

- 兼容范围覆盖较广：README 标注 v3.x 支持 Android 4.4 到 13.0。
- 渠道支持类型较多：支持企业通信机器人、Webhook、邮件、Push 服务、短信等常见路径。
- 发布节奏可追踪：GitHub Releases 提供正式版本，另有 Weekly Build 入口用于预览构建。

## 使用方式概览

1. 先阅读项目 README 与 Wiki，确认支持范围、版本状态和使用边界。
2. 通过 Releases 获取版本后，在应用内完成监控项与转发规则配置。
3. 在正式使用前，结合自身场景完成权限、通知、网络与告警链路验证。

## 限制与注意事项

- 仓库声明该项目仅用于测试与学习研究，并明确禁止商业用途。
- 仓库隐私文件声明不收集隐私数据，但提到启动与手动检查更新时会发送版本相关信息。
- 本仓库仅做项目定位与能力归纳，不复述可能被滥用的可操作细节。

## 链接

- 仓库主页：https://github.com/pppscn/SmsForwarder
- 中文 README：https://raw.githubusercontent.com/pppscn/SmsForwarder/master/README.md
- 英文 README：https://raw.githubusercontent.com/pppscn/SmsForwarder/master/README_en.md
- 隐私说明：https://raw.githubusercontent.com/pppscn/SmsForwarder/master/PRIVACY
- Releases：https://github.com/pppscn/SmsForwarder/releases
- 最新版本（示例）：https://github.com/pppscn/SmsForwarder/releases/tag/v3.5.0

## 关联主题

- [[00-元语/github]]
- [[00-元语/tool]]
- [[00-元语/security]]
- [[00-元语/compliance]]
