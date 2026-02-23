---
title: "acme.sh：纯 Shell 编写的 ACME 协议客户端"
对象: "GitHub 项目"
项目主页: "https://github.com/acmesh-official/acme.sh"
Stars快照: "3758"
官方网站: "https://acme.sh"
主要语言: "Shell"
开源协议: "GPL-3.0"
---

## 摘要

**1) 一句话总结**
acme.sh 是一个纯 Shell 编写的轻量级 ACME 客户端，无需外部依赖即可跨平台实现 SSL/TLS 证书的全自动申请、安装与续期。

**2) 关键要点**
* **技术栈与热度**：完全使用 Unix Shell（兼容 Bash、dash、sh）编写，采用 GPL-3.0 协议，在 GitHub 拥有超 4.5 万 Stars。
* **零外部依赖与低权限**：无需安装 Python 等外部环境，常规使用场景下不需要 `root` 或 `sudo` 权限。
* **默认配置**：默认使用 ZeroSSL 作为证书颁发机构（支持 Let's Encrypt 等），默认签发 ECC (ECDSA) 证书，默认每 30 天自动续期。
* **多模式验证**：支持 Webroot、Standalone（内置 80/443 端口 Web 服务器）、Apache/Nginx（自动修改并还原配置）、DNS 及无状态（Stateless）等多种验证模式。
* **广泛兼容性**：支持数十种操作系统（各类 Linux、macOS、BSD、OpenWRT 等）、Docker 容器以及 IPv6 网络。
* **自动化部署**：通过 `--install-cert` 命令将证书导出至生产环境，并支持配置 `reloadcmd` 自动重载 Web 服务器（如 Nginx/Apache）以应用新证书。

**3) 风险与注意事项**
* **内部目录风险**：严禁直接使用 `~/.acme.sh/` 目录下的证书文件配置 Web 服务器（目录结构随时可能变动），必须通过 `--install-cert` 命令导出。
* **重载配置失效风险**：若在安装证书时未正确配置 `reloadcmd`，证书在后台自动续期后，Web 服务器将无法加载新证书。
* **特定模式的权限与端口限制**：使用 Standalone 模式必须确保 80 或 443 端口未被占用且需 root/sudo 权限；使用 Apache/Nginx 模式也需要 root/sudo 权限以临时修改配置。
* **Windows 环境限制**：在 Windows 系统下无法原生运行，必须依赖 Cygwin 环境（且需包含 curl、openssl 和 crontab）。

## 功能与定位

acme.sh 是一个完全使用 Unix Shell 语言编写的 ACME 协议客户端，旨在为用户提供简单、轻量且强大的 SSL/TLS 证书自动化管理工具。它能够通过单一脚本自动完成证书的申请、续期和安装。

## 典型使用场景

* 为单域名、多域名（SAN）或泛域名（Wildcard）自动申请免费 SSL 证书。
* 在各种操作系统（Linux、macOS、Windows/Cygwin、BSD 系列等）及 Docker 容器中进行轻量级证书管理。
* 配合 Nginx、Apache 等 Web 服务器实现证书的自动部署与服务重载。

## 核心功能

* **全自动证书管理**：支持一键签发、安装证书，并默认每 30 天自动续期。
* **多 CA 机构支持**：默认使用 ZeroSSL，同时支持 Let's Encrypt、SSL.com、Google Public CA、Actalis 以及任何兼容 RFC8555 标准的证书颁发机构。
* **多模式验证**：
  * **Webroot 模式**：利用现有的网站根目录进行验证。
  * **Standalone 模式**：内置 Web 服务器（支持 80 端口 HTTP 或 443 端口 TLS/ALPN）进行验证。
  * **Apache / Nginx 模式**：自动配置 Web 服务器进行验证（验证后自动还原配置，不破坏原有文件）。
  * **DNS 模式**：通过 DNS TXT 记录、DNS 别名（DNS alias）进行验证。
  * **无状态模式（Stateless）**：支持无状态验证。
* **现代证书支持**：默认签发 ECC 证书，支持 ECDSA 算法。
* **自动化通知**：支持通过 Cron 任务发送续期或错误通知。

## 特色与差异点

* **零外部依赖**：纯 Shell 脚本实现，兼容 Bash、dash 和 sh，完全不需要依赖 Python 等外部环境。
* **权限要求极低**：常规使用不需要 `root` 或 `sudo` 权限（部分特定模式除外）。
* **极广的兼容性**：经过测试支持数十种操作系统（包括各类 Linux 发行版、macOS、FreeBSD、OpenBSD、Solaris、OpenWRT 等），支持 IPv6。

## 使用方式概览

* **安装部署**：可通过在线脚本（curl/wget）或 Git 克隆进行安装。安装过程会自动在用户主目录创建别名，并添加每日执行的 Cron 任务用于定期检查和续期证书。
* **签发证书**：通过指定域名和验证方式（如指定网站根目录路径）生成证书。
* **安装与部署**：使用专用的 `--install-cert` 命令将生成的证书和密钥复制到生产环境（如 Apache 或 Nginx 的配置目录），并配置重载命令（`reloadcmd`）以使证书生效。

## 限制与注意事项

* **内部目录限制**：严禁直接使用 `~/.acme.sh/` 目录下的证书文件配置 Web 服务器。该目录仅供内部使用，结构可能随时变动，必须通过 `--install-cert` 命令将证书导出到目标路径。
* **端口与权限要求**：
  * 使用 Standalone 模式时，必须确保 80 或 443 端口未被占用，且需要 root/sudo 权限。
  * 使用 Apache 或 Nginx 模式时，需要 root/sudo 权限以交互和临时修改服务器配置。
* **重载配置至关重要**：在安装证书时必须正确配置 `reloadcmd`（如 `service nginx force-reload`），否则证书在后台自动续期后，Web 服务器无法加载新证书。
* **Windows 环境要求**：在 Windows 下使用需要依赖 Cygwin（需包含 curl、openssl 和 crontab）。

## 链接

- 仓库：https://github.com/acmesh-official/acme.sh
- 官网：https://acme.sh

## 关联主题

- [[00-元语/tool]]
- [[00-元语/github]]
- [[00-元语/cli]]
- [[00-元语/desktop-client]]
- [[00-元语/workflow]]
