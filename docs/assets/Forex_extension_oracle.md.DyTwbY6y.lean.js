import{_ as t,c as e,j as i,a as p,G as n,a6 as h,B as l,o as k}from"./chunks/framework.HlnzNVxZ.js";const y=JSON.parse('{"title":"甲骨云搭建","description":"","frontmatter":{},"headers":[],"relativePath":"Forex_extension/oracle.md","filePath":"Forex_extension/oracle.md","lastUpdated":null}'),r={name:"Forex_extension/oracle.md"};function d(F,s,c,o,g,C){const a=l("ArticleMetadata");return k(),e("div",null,[s[0]||(s[0]=i("h1",{id:"甲骨云搭建",tabindex:"-1"},[p("甲骨云搭建 "),i("a",{class:"header-anchor",href:"#甲骨云搭建","aria-label":'Permalink to "甲骨云搭建"'},"​")],-1)),n(a),s[1]||(s[1]=h('<p>首先，使用甲骨云需要</p><p>总结一下几点吧</p><p>1.最好重装纯净系统ubuntu或者debian</p><p>DD系统方法</p><p>2.装宝塔纯净版官方版都行</p><p>纯净版地址：<a href="https://www.hostcli.com/" target="_blank" rel="noreferrer">宝塔纯净版_宝塔破解版_宝塔开心版_宝塔快乐版 (hostcli.com)</a></p><p>官方版地址：<a href="https://www.bt.cn/new/download.html" target="_blank" rel="noreferrer">宝塔面板下载，免费全能的服务器运维软件 (bt.cn)</a></p><p>3.宝塔内装nginx1.21</p><p>4.宝塔里安全选项内放行端口8443.2083.2053等</p><p>5.装xui，可用上面放行的端口。用IP加端口先登录测试</p><p>6.域名解析到服务器IP</p><p>7.建站无需FTP，数据库和PHP</p><p>8.申请SSL证书</p><p>9.反向代理到XUI端口地址</p><p>10.用HTTPS方式登录XUI</p><p>11.创建节点，tls填写域名的SSL证书信息 节点端口不要用443 用2083 2053 即可</p><p>注意点</p><p>ws协议可以开小云朵</p><p>tcp协议不能开会连不上</p><p>代码相关</p><p>重装</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --no-check-certificate</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -qO-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;https://moeclub.org/attachment/LinuxShell/InstallNET.sh&#39;)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 11</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 64</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -firmware</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 123456</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>更新组件</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> curl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> socat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>BBR</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -N</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --no-check-certificate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://raw.githubusercontent.com/chiakge/Linux-NetSpeed/master/tcp.sh&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tcp.sh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./tcp.sh</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>装宝塔</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -O</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install.sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://v7.hostcli.com/install/install-ubuntu_6.0.sh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install.sh</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>XUI</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Ls</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://raw.githubusercontent.com/FranzKafkaYu/x-ui/master/install.sh)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>宝塔的证书路径【域名改成自己的】</p><p>公钥路径 /www/server/panel/vhost/cert/域名/fullchain.pem</p><p>私钥路径 /www/server/panel/vhost/cert/域名/privkey.pem</p><p>输入公钥私钥内容，续签后就不能用了，建议直接输入上面的路径.</p><p><strong>不过使用自签证书，有效期三个月，三个月过后，要重签</strong></p>',35))])}const m=t(r,[["render",d]]);export{y as __pageData,m as default};
