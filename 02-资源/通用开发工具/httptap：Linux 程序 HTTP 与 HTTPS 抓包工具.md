---
title: httptap：Linux 程序 HTTP 与 HTTPS 抓包工具
对象: GitHub 仓库
项目主页: https://github.com/monasticacademy/httptap
来源: README、LICENSE、GitHub Releases
开源协议: MIT License
---

## 摘要

httptap 是一个面向 Linux 的命令行抓包工具，用于观察指定程序发起的 HTTP 与 HTTPS 请求。它通过网络命名空间与 TUN 设备隔离目标进程流量，并在进程作用域内实现 HTTPS 可观测能力，适合排查 CLI 或脚本的真实网络调用路径。相较于依赖系统级代理或全局抓包的方案，它强调对单个进程生效、对系统其他进程影响较小，并支持将会话导出为 HAR 供可视化分析。

## 功能与定位

httptap 的核心定位是“按进程抓取 HTTP/HTTPS 流量”。它主要用于开发调试与可观测分析，而不是网络攻防工具链的一部分。

其能力重点包括：
- 观察目标命令发起的 HTTP/HTTPS 请求与响应状态。
- 提供请求头与报文体级别的可见性。
- 支持会话导出为 HAR，用于后续复盘或可视化。
- 处理会派生后台子进程的场景，降低抓包中断概率。

## 典型使用场景

- 排查命令行工具的真实 API 调用链路与重定向行为。
- 分析脚本程序的外部依赖接口、请求失败位置与返回模式。
- 对接第三方 HAR 分析工具，做调用性能与行为回放。
- 在不改动系统级网络配置的前提下，对单个程序做临时抓包定位。

## 特色与差异点

- 聚焦 Linux 进程级抓包，边界清晰。
- 以静态 Go 二进制分发，部署负担较低。
- 侧重“运行时可观测”而非系统全局代理改造。
- 能覆盖 HTTPS 请求可见性与 HAR 导出两个常见调试诉求。

## 使用方式概览

常见流程是让目标程序在 httptap 管理的运行环境中启动，然后查看标准输出中的请求摘要或导出的 HAR 结果。若目标程序会在前台启动后继续派生后台进程，可切换到持续代理模式避免抓包提前结束。对非标准 HTTPS 端口的服务，可按工具提供的端口规则进行声明。

## 限制与注意事项

- 当前仅支持 Linux，依赖 Linux 网络命名空间机制。
- 运行环境需要具备对 `/dev/net/tun` 的访问条件。
- 在部分发行版（如默认收紧非特权用户命名空间策略的环境）中，可能需要额外系统配置才能正常运行。
- 目标进程在该模式下不适合承担入站监听类任务。
- 仅应在合法授权范围内进行流量观测，并避免记录或扩散敏感数据。

## 链接

- GitHub 仓库：https://github.com/monasticacademy/httptap
- Go 文档：https://pkg.go.dev/github.com/monasticacademy/httptap
- Releases：https://github.com/monasticacademy/httptap/releases/latest

## 关联主题

- [[00-元语/cli]]
- [[00-元语/observability]]
- [[00-元语/protocol]]
- [[00-元语/github]]
