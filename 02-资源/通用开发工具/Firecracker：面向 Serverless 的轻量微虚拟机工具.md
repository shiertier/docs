---
title: Firecracker：面向 Serverless 的轻量微虚拟机工具
对象: GitHub 仓库
来源: firecracker-microvm/firecracker
仓库链接: https://github.com/firecracker-microvm/firecracker
项目主页: https://firecracker-microvm.github.io
许可证: Apache-2.0
---

## 摘要

Firecracker 是由 AWS 开发的开源轻量微虚拟机管理器（VMM），基于 Linux KVM，面向 Serverless 与多租户场景，在保持虚拟化隔离能力的同时追求容器级启动速度与资源效率。

- 核心定位：为函数计算和容器负载提供更小攻击面与更低运行开销的隔离层。
- 性能特征：在 1 vCPU 与 128 MiB 典型配置下，VMM 开销较低，启动延迟短，并给出接近裸机的计算与网络/存储性能目标。
- 安全模型：默认 seccomp 过滤，生产环境建议配合 jailer（cgroup、namespace、降权）实现多层隔离。
- 使用方式：通过 HTTP API 在启动前配置 vCPU、内存、块设备、网络和元数据服务，然后启动 microVM。
- 适用边界：依赖 Linux 与 KVM 环境，部分硬件/内核组合存在支持差异，且高级网络编排与分布式存储能力需由外部系统提供。

## 功能与定位

Firecracker 是面向 Serverless 运行模型设计的微虚拟机技术。它以单进程对应单 microVM 的方式运行，通过最小化设备模型与来宾可见功能，减少资源占用与攻击面。

项目核心目标是让容器和函数工作负载在多租户环境中获得更强隔离，同时保持快速启动和高密度部署能力。该项目已用于 AWS Lambda、AWS Fargate 一类场景，并可作为其他容器运行时的底层隔离组件。

## 典型使用场景

- 函数计算平台：为短生命周期、弹性突发的函数任务提供隔离执行环境。
- 多租户容器平台：在同一宿主机上运行来自不同租户的负载并降低相互影响。
- 高密度计算节点：在有限硬件上批量调度 microVM，提高资源利用率。
- 运行时隔离增强：作为 Kata Containers、Flintlock 等体系中的虚拟化隔离层。

## 特色与差异点

- 极简架构：围绕 KVM + 最小设备模型构建，减少不必要功能暴露。
- API 驱动：通过 OpenAPI 定义的接口管理 microVM 生命周期与资源配置。
- 安全分层：KVM 虚拟化边界叠加 seccomp、jailer、cgroup 与 namespace 隔离。
- 指标可量化：规格文档公开了启动、内存开销、吞吐与延迟等可测目标。
- 发布策略清晰：采用语义化版本，文档给出支持窗口与补丁维护规则。

## 使用方式概览

- 环境前提：Linux 宿主机，具备 KVM（`/dev/kvm`）访问能力。
- 运行形态：每个 Firecracker 进程承载一个 microVM。
- 配置流程：启动进程后通过 API 设置 vCPU、内存、网络、块设备、启动参数等。
- 生产建议：优先使用 `jailer` 启动以强化隔离与最小权限运行。

## 限制与注意事项

- 平台约束：支持范围与宿主机内核版本、CPU 架构组合相关，需按官方 kernel policy 与 release policy 核对。
- 已知限制：aarch64 下 `pl031` RTC 中断能力有限，依赖 RTC 告警的程序可能受影响。
- 观测边界：日志与指标通过命名管道输出，管道拥塞时可能出现数据丢失。
- 能力边界：Firecracker 侧重虚拟化隔离，不直接提供完整网络编排或分布式存储系统能力。

## 链接

- 仓库主页：https://github.com/firecracker-microvm/firecracker
- 官方网站：https://firecracker-microvm.github.io
- README：https://github.com/firecracker-microvm/firecracker/blob/main/README.md
- 设计文档：https://github.com/firecracker-microvm/firecracker/blob/main/docs/design.md
- 规格文档：https://github.com/firecracker-microvm/firecracker/blob/main/SPECIFICATION.md
- 发布策略：https://github.com/firecracker-microvm/firecracker/blob/main/docs/RELEASE_POLICY.md
- Releases：https://github.com/firecracker-microvm/firecracker/releases

## 相关文档

- [[02-资源/AI-模型与推理基础设施/Firecracker：轻量安全微虚拟机引擎|Firecracker：轻量安全微虚拟机引擎]]；关联理由：解说；说明：同一项目在另一资源分类下的条目，可用于交叉核对定位和来源信息。
- [[01-博客/微信公众平台/Agent sandbox 可能的选型以及 unikernel 的机会|Agent sandbox 可能的选型以及 unikernel 的机会]]；关联理由：上下游；说明：该文讨论 Firecracker 在 Agent Sandbox 中的落地取舍，补充了本条目的应用上下游场景。

## 关联主题

- [[00-元语/serverless]]
- [[00-元语/security]]
- [[00-元语/tool]]
