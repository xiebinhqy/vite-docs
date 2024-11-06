# 甲骨云搭建

首先，使用甲骨云需要


总结一下几点吧

1.最好重装纯净系统ubuntu或者debian

DD系统方法

2.装宝塔纯净版官方版都行

纯净版地址：[宝塔纯净版_宝塔破解版_宝塔开心版_宝塔快乐版 (hostcli.com)](https://www.hostcli.com/)

官方版地址：[宝塔面板下载，免费全能的服务器运维软件 (bt.cn)](https://www.bt.cn/new/download.html)





3.宝塔内装nginx1.21

4.宝塔里安全选项内放行端口8443.2083.2053等

5.装xui，可用上面放行的端口。用IP加端口先登录测试

6.域名解析到服务器IP

7.建站无需FTP，数据库和PHP

8.申请SSL证书

9.反向代理到XUI端口地址

10.用HTTPS方式登录XUI

11.创建节点，tls填写域名的SSL证书信息 节点端口不要用443 用2083 2053 即可



注意点

ws协议可以开小云朵 

tcp协议不能开会连不上





代码相关

重装

```sh
bash <(wget --no-check-certificate -qO- 'https://moeclub.org/attachment/LinuxShell/InstallNET.sh') -d 11 -v 64 -a -firmware -p 123456
```


更新组件

```sh
apt update -y && apt install -y curl && apt install -y socat && apt install wget -y
```


BBR

```sh
wget -N --no-check-certificate "https://raw.githubusercontent.com/chiakge/Linux-NetSpeed/master/tcp.sh" && chmod +x tcp.sh && ./tcp.sh
```


装宝塔

```sh
wget -O install.sh http://v7.hostcli.com/install/install-ubuntu_6.0.sh && bash install.sh
```

XUI

```sh
bash <(curl -Ls https://raw.githubusercontent.com/FranzKafkaYu/x-ui/master/install.sh)
```




宝塔的证书路径【域名改成自己的】

公钥路径  /www/server/panel/vhost/cert/域名/fullchain.pem

私钥路径  /www/server/panel/vhost/cert/域名/privkey.pem



输入公钥私钥内容，续签后就不能用了，建议直接输入上面的路径.


**不过使用自签证书，有效期三个月，三个月过后，要重签**