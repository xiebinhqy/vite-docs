# serv00搭建教程

[socks5-for-serv00](https://github.com/cmliu/socks5-for-serv00)

> 先声明下，此教程只是我个人做个笔记，不适合超级小白，有一定的基础或喜欢学习的朋友


::: warning 此方法为备用方法
因serv00会定期清理服务器运行进程，不建议使用在生产环境中使用，可作为备用应急使用
:::


这篇教程详细介绍了如何在 Serv00 和 CT8 机器上一步到位地安装和配置 SOCKS5 代理，并将其用于 [cmliu/edgetunnel](https://github.com/cmliu/edgetunnel) 项目，帮助解锁 ChatGPT 等服务。通过一键脚本实现代理安装，使用 Crontab 保持进程活跃，并借助 GitHub Actions 实现帐号续期与自动化管理，确保长期稳定运行。

 - 使用Crontab进行进程保活，每12分钟执行一次
 - 使用Github Actions进行帐号续期&Crontab保活，每天 早8:30 / 晚9:30 执行一次


## 事前准备

1. 一个电子邮箱
1. [WebSSH](https://webssh.090227.xyz/)-(害怕自己服务器信息泄露，可自行谷歌搜索下载Finalshell/WindTerm/ssh登录)


## 账号注册

这一步可自行在youtube上搜索"serv00注册"，一大推教程

## 如何使用？

1. 申请端口
1. 开启管理执行权限
1. 执行一键脚本
1. Fork [cmliu/socks5-for-serv00](https://github.com/cmliu/socks5-for-serv00)项目 开启Actions保活续期

## 步骤1.申请端口

1. 登录你帐号对应的 panel 面板
1. 面板左侧 `> Port reservation` > 选择 `Add port` 标签栏 > 勾选 `Random` > `＋Add`

![alt text](https://img.deattor.us.kg/file/1730640867338_20240821060338.png)

1. 选择 `Port list` 标签栏 > 记录你分配到的TCP端口号

![alt text](https://img.deattor.us.kg/file/1730640925027_2.png)


## 步骤2.开启管理执行权限

1. 登录你帐号对应的 panel 面板
1. 面板左侧 > 选择 `Run your own applications` 标签栏 > `Enabled` ; 使其`Status`变成 `✅Enabled`即可

![alt text](https://img.deattor.us.kg/file/1730641010338_3.png)

## 步骤3.执行一键脚本

```sh
bash <(curl -s https://raw.githubusercontent.com/cmliu/socks5-for-serv00/main/install-socks5.sh)
```

 - 注意：在输入socks5端口号时，输入申请端口时记录的TCP端口号即可，其余参数可以自行输入任意内容；

 ![alt text](https://img.deattor.us.kg/file/1730641102220_20240821061949.png)

 - 配置完成脚本后推荐添加 crontab 守护进程的计划任务，输入y后回车即可；

```sh
是否添加 crontab 守护进程的计划任务(Y/N 回车N): y
```

 - 查看crontab任务是否添加成功

![alt text](https://img.deattor.us.kg/file/1730641245799_20240821063234.png)

## 步骤4.开启Github Actions保活

 - Fork [cmliu/socks5-for-serv00](https://github.com/cmliu/socks5-for-serv00)
 - 添加 Secrets.`ACCOUNTS_JSON` 变量


![alt text](https://img.deattor.us.kg/file/1730641413336_6.png)

 - 帐号格式如下：

```sh
[
  {"username": "cmliusss", "password": "7HEt(xeRxttdvgB^nCU6", "panel": "panel4.serv00.com", "ssh": "s4.serv00.com"},
  {"username": "cmliussss2018", "password": "4))@cRP%HtN8AryHlh^#", "panel": "panel7.serv00.com", "ssh": "s7.serv00.com"},
  {"username": "4r885wvl", "password": "%Mg^dDMo6yIY$dZmxWNy", "panel": "panel.ct8.pl", "ssh": "s1.ct8.pl"}
]
```

1. 开启Actions保活

![alt text](https://img.deattor.us.kg/file/1730641506869_7.png)


到此为止，就可以正常使用了,以下是喜欢折腾的朋友可以尝试下

另外还有其他的脚本也可以使用

添加了**hysteria2**的天诚大佬版本：https://github.com/gshtwy/socks5-hysteria2-for-Serv00-CT8

一键脚本
```sh
bash <(curl -s https://raw.githubusercontent.com/gshtwy/socks5-for-serv00/main/install-socks5-hysteria.sh)
```

多协议多合一的老王版本：[https://github.com/eooce/Sing-box](https://github.com/eooce/Sing-box)


 - 必填环境变量：`VMESS_PORT` `HY2_PORT` `TUIC_PORT`
 - 可选环境变量：`UUID` `NEZHA_SERVER` `NEZHA_PORT` `NEZHA_KEY` `ARGO_DOMAIN` `ARGO_AUTH` `CFIP` `CFPORT`
 - ARGO_AUTH变量使用json时，ARGO_AUTH=‘json’ 需用英文输入状态下的单引号包裹，例如：`ARGO_AUTH='{"AccountTag":"123","TunnelSecret":"123","TunnelID":"123"}'`

```sh
VMESS_PORT=tcp端口 HY2_PORT=udp端口 TUIC_PORT=udp端口 bash <(curl -Ls https://raw.githubusercontent.com/eooce/sing-box/main/sb_00.sh)
```

Serv00|CT8一键三协议无交互安装脚本vless-reality|vmess-splithttp|vmess-splithttp-tls(argo)

 - 必填环境变量：`VLESS_PORT` `ARGO_PORT`
 - 可选环境变量：`UUID` `CFIP` `CFPORT` `NEZHA_SERVER` `NEZHA_PORT` `NEZHA_KEY` `ARGO_DOMAIN` `ARGO_AUTH`
 - ARGO_AUTH变量使用json时，ARGO_AUTH=‘json’ 需英文输入状态下的单引号包裹，例如：`ARGO_AUTH='{"AccountTag":"123","TunnelSecret":"123","TunnelID":"123"}'`

```sh
VLESS_PORT=TCP端口 ARGO_PORT=TCP端口 bash <(curl -Ls https://raw.githubusercontent.com/eooce/sing-box/test/x00.sh)
```

Serv00|CT8 hysteria2无交互一键安装脚本

 - 必填变量：`PORT=UDP端口`
 - 可选变量：`UUID` `NEZHA_SERVER` `NEZHA_PORT` `NEZHA_KEY`

```sh
PORT=UDP端口 bash <(curl -Ls https://github.com/eooce/Sing-box/releases/download/00/2.sh)
```

Serv00|CT8 tuic无交互一键安装脚本

 - 必填变量：`PORT=UDP端口`
 - 可选变量：`UUID` `NEZHA_SERVER` `NEZHA_PORT` `NEZHA_KEY`

```sh
PORT=UDP端口 bash <(curl -Ls https://github.com/eooce/Sing-box/releases/download/00/tu.sh)
```

Serv00|CT8 vmess-ws-tls(argo)一键脚本

 - 必填变量：`PORT=TCP端口`
 - 可选变量：`UUID` `NEZHA_SERVER` `NEZHA_PORT` `NEZHA_KEY` `CFIP` `CFPORT` `ARGO_DOMAIN` `ARGO_AUTH`


```sh
PORT=TCP端口 bash <(curl -Ls https://raw.githubusercontent.com/eooce/scripts/master/containers-shell/00_vmess.sh)
```

