import{_ as F,c as r,j as i,a,G as n,a3 as p,t as d,w as h,B as k,o as g}from"./chunks/framework.k_yU03aL.js";const u=JSON.parse('{"title":"样式美化","description":"","frontmatter":{"lastUpdated":true,"editLink":true},"headers":[],"relativePath":"components/common-component1.md","filePath":"components/common-component1.md","lastUpdated":1729438212000}'),c={name:"components/common-component1.md"};function E(t,s,y,o,C,B){const e=k("ArticleMetadata"),l=k("sapn");return g(),r("div",null,[s[3]||(s[3]=i("h1",{id:"样式美化",tabindex:"-1"},[a("样式美化 "),i("a",{class:"header-anchor",href:"#样式美化","aria-label":'Permalink to "样式美化"'},"​")],-1)),n(e),s[4]||(s[4]=p(`<blockquote><p>2024</p></blockquote><h2 id="主题目录-必看" tabindex="-1">主题目录(必看) <a class="header-anchor" href="#主题目录-必看" aria-label="Permalink to &quot;主题目录(必看)&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">说明</p><p>要修改样式，建议还是按此方式，无论怎样修改都不影响源文件</p></div><p>在 <code>.vitepress</code> 中新建文件夹<code> theme</code>，看目录</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .vitepress</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config.mts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> theme</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.mts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 或者</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.ts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node_modules</span></span></code></pre></div><p>然后在 <code>theme</code> 目录下新建 <code>index.ts</code> 并填入如下代码</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> DefaultTheme</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress/theme&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> default {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  extends:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> DefaultTheme,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  //</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ...DefaultTheme,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //或者这样写也可</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="主题美化" tabindex="-1">主题美化 <a class="header-anchor" href="#主题美化" aria-label="Permalink to &quot;主题美化&quot;">​</a></h2><h3 id="主题色" tabindex="-1">主题色 <a class="header-anchor" href="#主题色" aria-label="Permalink to &quot;主题色&quot;">​</a></h3><p>在 <code>theme</code> 目录下新建 <code>style</code> 文件夹，然后新建 <code>index.css</code> 和 <code>var.css</code></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .vitepress</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config.mts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> theme</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> style</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.css</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var.css</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node_modules</span></span></code></pre></div><p>分别复制代码并粘贴</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-ucULg" id="tab-F5tIyRx" checked><label data-title="index.css" for="tab-F5tIyRx">index.css</label><input type="radio" name="group-ucULg" id="tab-JLiMa5e"><label data-title="var.css" for="tab-JLiMa5e">var.css</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.css</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./var.css&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var.css</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:root</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --vp-c-brand-1:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #18794e;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --vp-c-brand-2:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #299764;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --vp-c-brand-3:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #30a46c;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.dark</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --vp-c-brand-1:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #3dd68c;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --vp-c-brand-2:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #30a46c;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --vp-c-brand-3:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #298459;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 以前的vp-c-brand已弃用</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:root</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  /*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hero标题渐变色</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --vp-home-hero-name-color:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> transparent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --vp-home-hero-name-background:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -webkit-linear-gradient(120deg,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #bd34fe, #41d1ff);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  /*hero</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> logo背景渐变色</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --vp-home-hero-image-background-image:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> linear-gradient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-45deg,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #bd34fe 50%, #47caff 50%);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --vp-home-hero-image-filter:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> blur</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">40px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 也可自行单独修改brand按钮</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :root</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --vp-button-brand-border:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #F6CEEC;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --vp-button-brand-text:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #F6CEEC;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --vp-button-brand-bg:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #D939CD;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --vp-button-brand-hover-border:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #F6CEEC;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --vp-button-brand-hover-text:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #fff;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --vp-button-brand-hover-bg:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #D939CD;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --vp-button-brand-active-border:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #F6CEEC;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} */</span></span></code></pre></div></div></div><p>然后将修改好的样式引入 <code>index.ts</code></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .vitepress/theme/index.ts</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> DefaultTheme</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress/theme&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./style/index.css&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> default {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  extends:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> DefaultTheme,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="h1标题颜色" tabindex="-1">H1标题颜色 <a class="header-anchor" href="#h1标题颜色" aria-label="Permalink to &quot;H1标题颜色&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">当然</p><p>同理，你也可以改H2-H6的标题，不过我感觉没必要，太花里胡哨了</p></div><p>最简单的修改就是，比如改成红色</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .vitepress/theme/style/var.css</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">h1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  color:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>但是这样并不太好看，我们可以弄一个渐变色</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .vitepress/theme/style/var.css</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">h1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  background:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -webkit-linear-gradient(10deg,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #bd34fe 5%, #e43498 15%);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  background-clip:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -webkit-background-clip:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -webkit-text-fill-color:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> transparent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">说明</p><p>background: 采用了一个线性渐变</p><p>background-clip: 使文本的背景颜色与渐变效果相同</p><p>text-fill-color：将文字透明</p></div><h2 id="链接下划线" tabindex="-1">链接下划线 <a class="header-anchor" href="#链接下划线" aria-label="Permalink to &quot;链接下划线&quot;">​</a></h2><p>新版本更新后，文字跳转链接就多了一个下划线</p><p>不习惯的可以修改，我们在 <code>var.css</code> 中添加下面代码就行了</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var.css</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.vp-doc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    text-decoration:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> none</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration" target="_blank" rel="noreferrer">参考：MDN Web Docs 社区</a></p><h2 id="其他美化" tabindex="-1">其他美化 <a class="header-anchor" href="#其他美化" aria-label="Permalink to &quot;其他美化&quot;">​</a></h2><p>太多了，可以参照源文件来进行修改</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node_modules\\vitepress\\dist\\client\\theme-default\\styles\\var.css</span></span></code></pre></div><h2 id="彩虹背景动画" tabindex="-1">彩虹背景动画 <a class="header-anchor" href="#彩虹背景动画" aria-label="Permalink to &quot;彩虹背景动画&quot;">​</a></h2><p>在 <a href="https://unocss.dev/" target="_blank" rel="noreferrer">UnoCSS</a> 首页中，它的hero标题和图片背景有类似彩虹的渐变色动画，其实也是通过修改css样式实现的</p><p>在 <code>theme/style</code> 新建 <code>rainbow.css</code> 文件</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .vitepress</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config.mts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> theme</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> style</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.css</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rainbow.css</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node_modules</span></span></code></pre></div><p>复制下面代码，粘贴到 <code>rainbow.css</code> 中</p><details class="details custom-block"><summary>点击查看代码</summary><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-poEpI" id="tab-nmaowxI" checked><label data-title="rainbow.css" for="tab-nmaowxI">rainbow.css</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 彩虹动画</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@keyframes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rainbow</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    0%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #009ff7;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #c76dd1;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    1.25%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #009dfa;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #cf69c9;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    2.5%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #009bfc;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #d566c2;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    3.75%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #0098fd;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #dc63ba;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    5%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #0096fd;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #e160b3;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    6.25%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #0093fd;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #e65eab;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    7.5%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #2e90fc;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #e95ca2;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    8.75%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #4d8dfa;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #ed5a9a;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    10%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #638af8;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #ef5992;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    11.25%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #7587f5;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #f15989;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    12.5%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #8583f1;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #f25981;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    13.75%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #9280ed;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #f25a79;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    15%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #9f7ce9;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #f25c71;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    16.25%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #aa78e3;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #f15e69;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    17.5%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #b574dd;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #ef6061;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    18.75%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #be71d7;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #ed635a;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    20%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #c76dd1;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #eb6552;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    21.25%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #cf69c9;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #e8694b;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    22.5%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #d566c2;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #e46c44;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    23.75%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #dc63ba;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #e06f3d;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    25%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #e160b3;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #db7336;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    26.25%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #e65eab;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #d77630;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    27.5%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #e95ca2;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #d17a2a;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    28.75%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #ed5a9a;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #cc7d24;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    30%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #ef5992;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #c6811e;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    31.25%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #f15989;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #bf8418;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    32.5%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #f25981;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #b98713;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    33.75%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #f25a79;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #b28a0f;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    35%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #f25c71;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #ab8d0c;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    36.25%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #f15e69;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #a3900b;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    37.5%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #ef6061;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #9c920d;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    38.75%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #ed635a;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #949510;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    40%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #eb6552;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #8b9715;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    41.25%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #e8694b;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #83991b;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    42.5%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #e46c44;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #7a9b21;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    43.75%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #e06f3d;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #719d27;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    45%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #db7336;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #679e2e;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    46.25%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #d77630;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #5da035;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    47.5%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #d17a2a;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #51a13c;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    48.75%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #cc7d24;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #44a244;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    50%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #c6811e;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #34a44b;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    51.25%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #bf8418;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #1ba553;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    52.5%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #b98713;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a65b;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    53.75%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #b28a0f;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a663;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    55%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #ab8d0c;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a76c;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    56.25%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #a3900b;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a874;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    57.5%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #9c920d;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a87d;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    58.75%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #949510;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a985;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    60%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #8b9715;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a98e;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    61.25%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #83991b;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a996;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    62.5%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #7a9b21;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a99f;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    63.75%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #719d27;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a9a7;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    65%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #679e2e;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a9b0;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    66.25%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #5da035;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a9b8;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    67.5%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #51a13c;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a9c0;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    68.75%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #44a244;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a8c7;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    70%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #34a44b;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a8cf;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    71.25%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #1ba553;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a7d5;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    72.5%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a65b;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a6dc;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    73.75%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a663;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a6e2;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    75%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a76c;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a4e7;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    76.25%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a874;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a3ec;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    77.5%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a87d;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a2f1;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    78.75%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a985;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a0f4;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    80%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a98e;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #009ff7;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    81.25%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a996;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #009dfa;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    82.5%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a99f;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #009bfc;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    83.75%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a9a7;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #0098fd;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    85%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a9b0;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #0096fd;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    86.25%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a9b8;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #0093fd;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    87.5%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a9c0;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #2e90fc;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    88.75%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a8c7;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #4d8dfa;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    90%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a8cf;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #638af8;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    91.25%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a7d5;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #7587f5;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    92.5%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a6dc;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #8583f1;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    93.75%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a6e2;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #9280ed;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    95%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a4e7;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #9f7ce9;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    96.25%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a3ec;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #aa78e3;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    97.5%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a2f1;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #b574dd;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    98.75%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #00a0f4;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #be71d7;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    100%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #009ff7;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #c76dd1;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 彩虹色卡</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:root,.dark</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --rainbow-prev:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #009ff7;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --rainbow-next:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #c76dd1;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    animation:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rainbow</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 8s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> linear</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> infinite</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:root</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    /*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hero标题渐变色</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --vp-home-hero-name-color:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> transparent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --vp-home-hero-name-background:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -webkit-linear-gradient(120deg,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--rainbow-prev</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">30%,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--rainbow-next</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    /*hero</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> logo背景渐变色</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --vp-home-hero-image-background-image:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> linear-gradient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-45deg,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--rainbow-prev</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">30%,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--rainbow-next</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --vp-home-hero-image-filter:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> blur</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">80px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@media</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (min-width: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">640px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    :root</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --vp-home-hero-image-filter:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> blur</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">120px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@media</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (min-width: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">960px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    :root</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        --vp-home-hero-image-filter:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> blur</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">120px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Safari</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> has</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> very</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bad</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> performance</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> on</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gradient</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> filter</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.browser-safari,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.browser-firefox</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --vp-home-hero-image-background-image:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> transparent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --vp-home-hero-image-filter:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div></details><p>然后在 <code>index.css</code> 中引入生效，回到主页看效果</p><details class="details custom-block"><summary>为什么我没有效果？</summary><ul><li>自身问题：请仔细检查代码颜色色卡，是否正确配置</li><li>电脑问题：我的电脑 - 右键 <code>属性</code> - <code>高级系统设置</code> - 在系统属性页卡中 <code>高级</code> - 性能 <code>设置</code>，默认为 调整为最佳外观，<code>将 窗口内的动画控件和元素</code> 打勾，确定（如果电脑字体变化，请调整为其他，只要确保勾选此项即可）</li></ul></details><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .vitepress/theme/style/index.css</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./style/rainbow.css&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="引用颜色" tabindex="-1">引用颜色 <a class="header-anchor" href="#引用颜色" aria-label="Permalink to &quot;引用颜色&quot;">​</a></h2><p>在Markdown中，我们常用的引用符号是 <code>&gt;</code>，我们可以稍微改动一下</p><p>在 <code>theme/style</code> 新建 <code>blockquote.css</code> 文件</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .vitepress</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config.mts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> theme</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> style</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.css</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> blockquote.css</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node_modules</span></span></code></pre></div><p>复制下面代码，粘贴到 <code>blockquote.css</code> 中</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-WWDGe" id="tab-66vAVYN" checked><label data-title="css" for="tab-66vAVYN">css</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .vitepress</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">heme</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">tyle</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">lockquote.css</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.vp-doc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> blockquote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    border-radius:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 10px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    padding:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 18px</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 20px</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 20px</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 15px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    position:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> relative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    background-color:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--vp-c-gray-soft</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    border-left:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 6px</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> solid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--vp-c-green-2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><p>然后在 <code>index.css</code> 中引入生效</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .vitepress/theme/style/index.css</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./style/blockquote.css&#39;</span></span></code></pre></div><p>输入：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 更新时间：2024年</span></span></code></pre></div><p>输出：</p><blockquote><p>更新时间：2024年</p></blockquote><h2 id="容器颜色" tabindex="-1">容器颜色 <a class="header-anchor" href="#容器颜色" aria-label="Permalink to &quot;容器颜色&quot;">​</a></h2><p>随着版本更新迭代，现在这 <code>tip</code> <code>warning</code> <code>danger</code> 颜色真的想吐槽，好丑！</p><p><a href="https://theme-hope.vuejs.press/zh/guide/markdown/stylize/hint.html#%E6%BC%94%E7%A4%BA" target="_blank" rel="noreferrer">Vuepress/hope主题的容器颜色 </a>就不错，参考着弄一下</p><p>在 <code>theme/style</code> 新建 <code>custom-block.css</code> 文件</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .vitepress</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config.mts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> theme</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> style</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.css</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> custom-block.css</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node_modules</span></span></code></pre></div><p>复制下面代码，粘贴到 <code>custom-block.css</code> 中</p><details class="details custom-block"><summary>custom-block.css</summary><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .vitepress/theme/style/custom-block.css</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 深浅色卡</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:root</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --custom-block-info-left:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #cccccc;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --custom-block-info-bg:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #fafafa;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --custom-block-tip-left:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #009400;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --custom-block-tip-bg:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #e6f6e6;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --custom-block-warning-left:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #e6a700;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --custom-block-warning-bg:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #fff8e6;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --custom-block-danger-left:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #e13238;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --custom-block-danger-bg:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #ffebec;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --custom-block-note-left:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #4cb3d4;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --custom-block-note-bg:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #eef9fd;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --custom-block-important-left:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #a371f7;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --custom-block-important-bg:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #f4eefe;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --custom-block-caution-left:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #e0575b;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --custom-block-caution-bg:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #fde4e8;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.dark</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --custom-block-info-left:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #cccccc;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --custom-block-info-bg:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #474748;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --custom-block-tip-left:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #009400;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --custom-block-tip-bg:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #003100;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --custom-block-warning-left:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #e6a700;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --custom-block-warning-bg:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #4d3800;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --custom-block-danger-left:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #e13238;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --custom-block-danger-bg:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #4b1113;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --custom-block-note-left:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #4cb3d4;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --custom-block-note-bg:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #193c47;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --custom-block-important-left:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #a371f7;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --custom-block-important-bg:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #230555;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --custom-block-caution-left:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #e0575b;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --custom-block-caution-bg:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #391c22;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 标题字体大小</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block-title</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    font-size:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 16px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> info容器:背景色、左侧</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.info</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    border-left:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 5px</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> solid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--custom-block-info-left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    background-color:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--custom-block-info-bg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> info容器:svg图</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [class*=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;custom-block-title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]::before {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    content:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    background-image:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;data:image/svg+xml;utf8,%3Csvg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 24 24&#39;%3E%3Cpath d=&#39;M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z&#39; fill=&#39;%23ccc&#39;/%3E%3C/svg%3E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    width:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 20px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    height:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 20px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    display:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> inline-block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    vertical-align:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> middle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    position:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> relative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    margin-right:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 4px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    left:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -5px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    top:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -1px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 提示容器:边框色、背景色、左侧</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.tip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    /*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> border-color:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--custom-block-tip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    border-left:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 5px</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> solid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--custom-block-tip-left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    background-color:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--custom-block-tip-bg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 提示容器:svg图</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.tip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [class*=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;custom-block-title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]::before {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    content:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    background-image:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;data:image/svg+xml;utf8,%3Csvg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 24 24&#39;%3E%3Cpath fill=&#39;%23009400&#39; d=&#39;M7.941 18c-.297-1.273-1.637-2.314-2.187-3a8 8 0 1 1 12.49.002c-.55.685-1.888 1.726-2.185 2.998H7.94zM16 20v1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1h8zm-3-9.995V6l-4.5 6.005H11v4l4.5-6H13z&#39;/%3E%3C/svg%3E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    width:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 20px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    height:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 20px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    display:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> inline-block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    vertical-align:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> middle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    position:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> relative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    margin-right:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 4px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    left:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -5px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    top:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -2px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 警告容器:背景色、左侧</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.warning</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    border-left:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 5px</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> solid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--custom-block-warning-left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    background-color:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--custom-block-warning-bg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 警告容器:svg图</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.warning</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [class*=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;custom-block-title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]::before {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    content:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    background-image:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;data:image/svg+xml;utf8,%3Csvg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 1024 1024&#39;%3E%3Cpath d=&#39;M576.286 752.57v-95.425q0-7.031-4.771-11.802t-11.3-4.772h-96.43q-6.528 0-11.3 4.772t-4.77 11.802v95.424q0 7.031 4.77 11.803t11.3 4.77h96.43q6.528 0 11.3-4.77t4.77-11.803zm-1.005-187.836 9.04-230.524q0-6.027-5.022-9.543-6.529-5.524-12.053-5.524H456.754q-5.524 0-12.053 5.524-5.022 3.516-5.022 10.547l8.538 229.52q0 5.023 5.022 8.287t12.053 3.265h92.913q7.032 0 11.803-3.265t5.273-8.287zM568.25 95.65l385.714 707.142q17.578 31.641-1.004 63.282-8.538 14.564-23.354 23.102t-31.892 8.538H126.286q-17.076 0-31.892-8.538T71.04 866.074q-18.582-31.641-1.004-63.282L455.75 95.65q8.538-15.57 23.605-24.61T512 62t32.645 9.04 23.605 24.61z&#39; fill=&#39;%23e6a700&#39;/%3E%3C/svg%3E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    width:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 20px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    height:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 20px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    display:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> inline-block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    vertical-align:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> middle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    position:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> relative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    margin-right:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 4px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    left:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -5px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 危险容器:背景色、左侧</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.danger</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    border-left:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 5px</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> solid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--custom-block-danger-left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    background-color:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--custom-block-danger-bg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 危险容器:svg图</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.danger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [class*=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;custom-block-title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]::before {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    content:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    background-image:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;data:image/svg+xml;utf8,%3Csvg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 24 24&#39;%3E%3Cpath d=&#39;M12 2c5.523 0 10 4.477 10 10v3.764a2 2 0 0 1-1.106 1.789L18 19v1a3 3 0 0 1-2.824 2.995L14.95 23a2.5 2.5 0 0 0 .044-.33L15 22.5V22a2 2 0 0 0-1.85-1.995L13 20h-2a2 2 0 0 0-1.995 1.85L9 22v.5c0 .171.017.339.05.5H9a3 3 0 0 1-3-3v-1l-2.894-1.447A2 2 0 0 1 2 15.763V12C2 6.477 6.477 2 12 2zm-4 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z&#39; fill=&#39;%23e13238&#39;/%3E%3C/svg%3E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    width:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 20px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    height:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 20px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    display:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> inline-block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    vertical-align:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> middle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    position:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> relative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    margin-right:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 4px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    left:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -5px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    top:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -1px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> NOTE容器:背景色、左侧</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.note</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    border-left:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 5px</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> solid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--custom-block-note-left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    background-color:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--custom-block-note-bg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> NOTE容器:svg图</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.note</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [class*=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;custom-block-title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]::before {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    content:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    background-image:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;data:image/svg+xml;utf8,%3Csvg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 24 24&#39;%3E%3Cpath d=&#39;M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z&#39; fill=&#39;%234cb3d4&#39;/%3E%3C/svg%3E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    width:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 20px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    height:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 20px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    display:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> inline-block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    vertical-align:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> middle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    position:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> relative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    margin-right:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 4px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    left:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -5px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    top:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -1px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> IMPORTANT容器:背景色、左侧</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.important</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    border-left:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 5px</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> solid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--custom-block-important-left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    background-color:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--custom-block-important-bg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> IMPORTANT容器:svg图</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.important</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [class*=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;custom-block-title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]::before {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    content:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    background-image:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;data:image/svg+xml;utf8,%3Csvg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 1024 1024&#39;%3E%3Cpath d=&#39;M512 981.333a84.992 84.992 0 0 1-84.907-84.906h169.814A84.992 84.992 0 0 1 512 981.333zm384-128H128v-42.666l85.333-85.334v-256A298.325 298.325 0 0 1 448 177.92V128a64 64 0 0 1 128 0v49.92a298.325 298.325 0 0 1 234.667 291.413v256L896 810.667v42.666zm-426.667-256v85.334h85.334v-85.334h-85.334zm0-256V512h85.334V341.333h-85.334z&#39; fill=&#39;%23a371f7&#39;/%3E%3C/svg%3E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    width:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 20px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    height:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 20px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    display:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> inline-block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    vertical-align:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> middle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    position:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> relative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    margin-right:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 4px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    left:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -5px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    top:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -1px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> CAUTION容器:背景色、左侧</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.caution</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    border-left:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 5px</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> solid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--custom-block-caution-left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    background-color:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--custom-block-caution-bg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> CAUTION容器:svg图</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.caution</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [class*=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;custom-block-title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]::before {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    content:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    background-image:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;data:image/svg+xml;utf8,%3Csvg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 24 24&#39;%3E%3Cpath d=&#39;M12 2c5.523 0 10 4.477 10 10v3.764a2 2 0 0 1-1.106 1.789L18 19v1a3 3 0 0 1-2.824 2.995L14.95 23a2.5 2.5 0 0 0 .044-.33L15 22.5V22a2 2 0 0 0-1.85-1.995L13 20h-2a2 2 0 0 0-1.995 1.85L9 22v.5c0 .171.017.339.05.5H9a3 3 0 0 1-3-3v-1l-2.894-1.447A2 2 0 0 1 2 15.763V12C2 6.477 6.477 2 12 2zm-4 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z&#39; fill=&#39;%23e13238&#39;/%3E%3C/svg%3E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    width:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 20px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    height:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 20px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    display:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> inline-block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    vertical-align:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> middle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    position:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> relative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    margin-right:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 4px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    left:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -5px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    top:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -1px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></details><p>以上是没有动画效果图的</p><p>看看效果</p>`,60)),i("p",null,d(t.$frontmatter.title),1),s[5]||(s[5]=p(`<div class="info custom-block"><p class="custom-block-title">INFO</p><p>This is an info box.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is a tip.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>这个是警告！！！！</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>这个很危险</p></div><details class="details custom-block"><summary>Details</summary><p>This is a details block.</p></details><p>可以加一个流体边框，类似跑马灯的效果</p><details class="details custom-block"><summary>点我查看代码</summary><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-iJtdz" id="tab-YYkrkxl" checked><label data-title="custom-block.css (复制，粘贴，覆盖原先的代码保存)" for="tab-YYkrkxl">custom-block.css (复制，粘贴，覆盖原先的代码保存)</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .vitepress/theme/style/custom-block.css</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 深浅色卡</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:root</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --custom-block-info-left:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #cccccc;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --custom-block-info-bg:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #fafafa;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --custom-block-tip-left:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #009400;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --custom-block-tip-bg:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #e6f6e6;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --custom-block-warning-left:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #e6a700;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --custom-block-warning-bg:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #fff8e6;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --custom-block-danger-left:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #e13238;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --custom-block-danger-bg:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #ffebec;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --custom-block-note-left:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #4cb3d4;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --custom-block-note-bg:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #eef9fd;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --custom-block-important-left:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #a371f7;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --custom-block-important-bg:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #f4eefe;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --custom-block-caution-left:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #e0575b;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --custom-block-caution-bg:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #fde4e8;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.dark</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --custom-block-info-left:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #cccccc;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --custom-block-info-bg:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #474748;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --custom-block-tip-left:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #009400;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --custom-block-tip-bg:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #003100;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --custom-block-warning-left:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #e6a700;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --custom-block-warning-bg:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #4d3800;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --custom-block-danger-left:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #e13238;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --custom-block-danger-bg:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #4b1113;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --custom-block-note-left:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #4cb3d4;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --custom-block-note-bg:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #193c47;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --custom-block-important-left:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #a371f7;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --custom-block-important-bg:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #230555;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --custom-block-caution-left:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #e0575b;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --custom-block-caution-bg:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #391c22;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 标题字体大小</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block-title</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  font-size:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 16px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> info容器:背景色、流体边框</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.info</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  border-left:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> none</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  background-color:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--custom-block-info-bg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  position:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> relative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  transition:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .3s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> info容器:svg图</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [class*=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;custom-block-title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]::before {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  content:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  background-image:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;data:image/svg+xml;utf8,%3Csvg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 24 24&#39;%3E%3Cpath d=&#39;M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z&#39; fill=&#39;%23ccc&#39;/%3E%3C/svg%3E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  width:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 20px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  height:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 20px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  display:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> inline-block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  vertical-align:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> middle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  position:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> relative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  margin-right:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 4px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  left:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -5px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  top:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -1px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> info容器:流体边框</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.info::before,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.info::after</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  content:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  position:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> absolute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  top:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -2px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  left:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -2px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  right:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -2px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  bottom:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -2px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  border:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 2px</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> solid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--custom-block-info-left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  transition:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .5s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  animation:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clippath</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 6s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> infinite</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> linear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  border-radius:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 10px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> info容器:流体边框动画</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.info::after</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  animation:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clippath</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 6s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> infinite</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -3s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> linear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TIP容器::背景色、流体边框</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.tip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  border-left:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> none</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  background-color:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--custom-block-tip-bg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  position:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> relative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  transition:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .3s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TIP容器:svg图</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.tip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [class*=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;custom-block-title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]::before {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  content:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  background-image:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;data:image/svg+xml;utf8,%3Csvg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 24 24&#39;%3E%3Cpath fill=&#39;%23009400&#39; d=&#39;M7.941 18c-.297-1.273-1.637-2.314-2.187-3a8 8 0 1 1 12.49.002c-.55.685-1.888 1.726-2.185 2.998H7.94zM16 20v1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1h8zm-3-9.995V6l-4.5 6.005H11v4l4.5-6H13z&#39;/%3E%3C/svg%3E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  width:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 20px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  height:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 20px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  display:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> inline-block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  vertical-align:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> middle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  position:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> relative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  margin-right:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 4px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  left:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -5px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  top:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -2px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TIP容器:流体边框</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.tip::before,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.tip::after</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  content:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  position:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> absolute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  top:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -2px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  left:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -2px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  right:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -2px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  bottom:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -2px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  border:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 2px</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> solid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--custom-block-tip-left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  transition:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .5s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  animation:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clippath</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 6s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> infinite</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> linear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  border-radius:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 10px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TIP容器:流体边框动画</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.tip::after</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  animation:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clippath</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 6s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> infinite</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -3s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> linear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> WARNING:背景色、流体边框</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.warning</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  border-left:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> none</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  background-color:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--custom-block-warning-bg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  position:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> relative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  transition:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .3s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> WARNING:svg图</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.warning</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [class*=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;custom-block-title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]::before {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  content:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  background-image:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;data:image/svg+xml;utf8,%3Csvg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 1024 1024&#39;%3E%3Cpath d=&#39;M576.286 752.57v-95.425q0-7.031-4.771-11.802t-11.3-4.772h-96.43q-6.528 0-11.3 4.772t-4.77 11.802v95.424q0 7.031 4.77 11.803t11.3 4.77h96.43q6.528 0 11.3-4.77t4.77-11.803zm-1.005-187.836 9.04-230.524q0-6.027-5.022-9.543-6.529-5.524-12.053-5.524H456.754q-5.524 0-12.053 5.524-5.022 3.516-5.022 10.547l8.538 229.52q0 5.023 5.022 8.287t12.053 3.265h92.913q7.032 0 11.803-3.265t5.273-8.287zM568.25 95.65l385.714 707.142q17.578 31.641-1.004 63.282-8.538 14.564-23.354 23.102t-31.892 8.538H126.286q-17.076 0-31.892-8.538T71.04 866.074q-18.582-31.641-1.004-63.282L455.75 95.65q8.538-15.57 23.605-24.61T512 62t32.645 9.04 23.605 24.61z&#39; fill=&#39;%23e6a700&#39;/%3E%3C/svg%3E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  width:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 20px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  height:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 20px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  display:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> inline-block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  vertical-align:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> middle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  position:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> relative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  margin-right:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 4px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  left:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -5px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> WARNING容器:流体边框</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.warning::before,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.warning::after</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  content:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  position:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> absolute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  top:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -2px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  left:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -2px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  right:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -2px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  bottom:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -2px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  border:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 2px</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> solid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--custom-block-warning-left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  transition:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .5s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  animation:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clippath</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 6s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> infinite</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> linear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  border-radius:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 10px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> WARNING容器:流体边框动画</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.warning::after</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  animation:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clippath</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 6s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> infinite</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -3s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> linear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> DANGER容器:背景色、流体边框</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.danger</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  border-left:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> none</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  background-color:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--custom-block-danger-bg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  position:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> relative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  transition:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .3s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> DANGER容器:svg图</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.danger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [class*=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;custom-block-title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]::before {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  content:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  background-image:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;data:image/svg+xml;utf8,%3Csvg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 24 24&#39;%3E%3Cpath d=&#39;M12 2c5.523 0 10 4.477 10 10v3.764a2 2 0 0 1-1.106 1.789L18 19v1a3 3 0 0 1-2.824 2.995L14.95 23a2.5 2.5 0 0 0 .044-.33L15 22.5V22a2 2 0 0 0-1.85-1.995L13 20h-2a2 2 0 0 0-1.995 1.85L9 22v.5c0 .171.017.339.05.5H9a3 3 0 0 1-3-3v-1l-2.894-1.447A2 2 0 0 1 2 15.763V12C2 6.477 6.477 2 12 2zm-4 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z&#39; fill=&#39;%23e13238&#39;/%3E%3C/svg%3E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  width:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 20px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  height:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 20px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  display:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> inline-block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  vertical-align:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> middle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  position:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> relative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  margin-right:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 4px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  left:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -5px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  top:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -1px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> DANGER容器:流体边框</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.danger::before,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.danger::after</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  content:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  position:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> absolute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  top:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -2px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  left:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -2px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  right:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -2px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  bottom:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -2px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  border:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 2px</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> solid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--custom-block-danger-left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  transition:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .5s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  animation:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clippath</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 6s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> infinite</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> linear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  border-radius:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 10px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> DANGER容器:流体边框动画</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.danger::after</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  animation:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clippath</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 6s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> infinite</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -3s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> linear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> GitHub风格警告</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> NOTE容器:背景色、流体边框</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.note</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  border-left:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> none</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  background-color:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--custom-block-note-bg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  position:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> relative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  transition:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .3s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> NOTE容器:svg图</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.note</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [class*=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;custom-block-title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]::before {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  content:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  background-image:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;data:image/svg+xml;utf8,%3Csvg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 24 24&#39;%3E%3Cpath d=&#39;M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z&#39; fill=&#39;%234cb3d4&#39;/%3E%3C/svg%3E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  width:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 20px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  height:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 20px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  display:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> inline-block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  vertical-align:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> middle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  position:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> relative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  margin-right:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 4px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  left:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -5px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  top:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -1px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> NOTE容器:流体边框</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.note.github-alert::before,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.note.github-alert::after</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  content:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  position:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> absolute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  top:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -2px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  left:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -2px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  right:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -2px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  bottom:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -2px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  border:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 2px</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> solid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--custom-block-note-left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  transition:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .5s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  animation:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clippath</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 6s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> infinite</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> linear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  border-radius:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 10px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> NOTE容器:流体边框动画</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.note.github-alert::after</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  animation:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clippath</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 6s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> infinite</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -3s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> linear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> IMPORTANT容器:背景色、流体边框</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.important</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  border-left:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> none</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  background-color:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--custom-block-important-bg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  position:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> relative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  transition:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .3s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> IMPORTANT容器:svg图</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.important</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [class*=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;custom-block-title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]::before {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  content:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  background-image:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;data:image/svg+xml;utf8,%3Csvg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 1024 1024&#39;%3E%3Cpath d=&#39;M512 981.333a84.992 84.992 0 0 1-84.907-84.906h169.814A84.992 84.992 0 0 1 512 981.333zm384-128H128v-42.666l85.333-85.334v-256A298.325 298.325 0 0 1 448 177.92V128a64 64 0 0 1 128 0v49.92a298.325 298.325 0 0 1 234.667 291.413v256L896 810.667v42.666zm-426.667-256v85.334h85.334v-85.334h-85.334zm0-256V512h85.334V341.333h-85.334z&#39; fill=&#39;%23a371f7&#39;/%3E%3C/svg%3E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  width:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 20px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  height:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 20px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  display:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> inline-block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  vertical-align:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> middle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  position:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> relative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  margin-right:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 4px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  left:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -5px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  top:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -1px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> IMPORTANT容器:流体边框</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.important.github-alert::before,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.important.github-alert::after</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  content:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  position:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> absolute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  top:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -2px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  left:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -2px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  right:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -2px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  bottom:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -2px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  border:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 2px</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> solid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--custom-block-important-left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  transition:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .5s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  animation:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clippath</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 6s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> infinite</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> linear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  border-radius:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 10px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> IMPORTANT容器:流体边框动画</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.important.github-alert::after</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  animation:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clippath</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 6s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> infinite</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -3s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> linear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> CAUTION容器:背景色、流体边框</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.caution</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  border-left:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> none</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  background-color:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--custom-block-caution-bg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  position:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> relative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  transition:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .3s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> CAUTION容器:svg图</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.caution</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [class*=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;custom-block-title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]::before {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  content:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  background-image:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;data:image/svg+xml;utf8,%3Csvg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 24 24&#39;%3E%3Cpath d=&#39;M12 2c5.523 0 10 4.477 10 10v3.764a2 2 0 0 1-1.106 1.789L18 19v1a3 3 0 0 1-2.824 2.995L14.95 23a2.5 2.5 0 0 0 .044-.33L15 22.5V22a2 2 0 0 0-1.85-1.995L13 20h-2a2 2 0 0 0-1.995 1.85L9 22v.5c0 .171.017.339.05.5H9a3 3 0 0 1-3-3v-1l-2.894-1.447A2 2 0 0 1 2 15.763V12C2 6.477 6.477 2 12 2zm-4 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z&#39; fill=&#39;%23e13238&#39;/%3E%3C/svg%3E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  width:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 20px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  height:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 20px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  display:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> inline-block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  vertical-align:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> middle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  position:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> relative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  margin-right:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 4px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  left:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -5px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  top:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -1px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> CAUTION容器:流体边框</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.caution.github-alert::before,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.caution.github-alert::after</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  content:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  position:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> absolute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  top:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -2px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  left:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -2px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  right:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -2px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  bottom:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -2px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  border:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 2px</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> solid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--custom-block-caution-left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  transition:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .5s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  animation:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clippath</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 6s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> infinite</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> linear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  border-radius:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 10px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> CAUTION容器:流体边框动画</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-block.caution.github-alert::after</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  animation:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clippath</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 6s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> infinite</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -3s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> linear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 流光边框</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 跑马灯</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@keyframes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clippath</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  0%,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  100%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    clip-path:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> inset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 90%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  25%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    clip-path:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> inset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 90%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  50%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    clip-path:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> inset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">90%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  75%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    clip-path:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> inset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 90%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div></details><h2 id="导航栏毛玻璃" tabindex="-1">导航栏毛玻璃 <a class="header-anchor" href="#导航栏毛玻璃" aria-label="Permalink to &quot;导航栏毛玻璃&quot;">​</a></h2><p>在 <code>theme/style</code> 文件夹，然后新建 <code>blur.css</code> 并填入如下代码</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .vitepress</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config.mts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> theme</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> style</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.css</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> blur.css</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node_modules</span></span></code></pre></div><p>在主题原始文件中， <code>VPNavBar.vue</code> 组件有其对应的属性</p><p>复制下面代码，粘贴到 <code>blur.css</code> 中，可以自行增减</p><details class="details custom-block"><summary>blur.css</summary><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/* .vitepress\\theme\\style\\blur.css */</span></span>
<span class="line"><span>:root {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 首页下滑后导航透明 */</span></span>
<span class="line"><span>    .VPNavBar:not(.has-sidebar):not(.home.top) {</span></span>
<span class="line"><span>        background-color: rgba(255, 255, 255, 0);</span></span>
<span class="line"><span>        backdrop-filter: blur(10px);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 搜索框透明 */</span></span>
<span class="line"><span>    .DocSearch-Button {</span></span>
<span class="line"><span>        background-color: rgba(255, 255, 255, 0);</span></span>
<span class="line"><span>        backdrop-filter: blur(10px);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* Feature透明 */</span></span>
<span class="line"><span>    .VPFeature {</span></span>
<span class="line"><span>        border: none;</span></span>
<span class="line"><span>        box-shadow: 0 10px 30px 0 rgb(0 0 0 / 15%);</span></span>
<span class="line"><span>        background-color: transparent;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 文档页侧边栏顶部透明 */</span></span>
<span class="line"><span>    .curtain {</span></span>
<span class="line"><span>        background-color: rgba(255, 255, 255, 0);</span></span>
<span class="line"><span>        backdrop-filter: blur(10px);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @media (min-width: 960px) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /* 文档页导航中间透明 */</span></span>
<span class="line"><span>        .VPNavBar:not(.home.top) .content-body {</span></span>
<span class="line"><span>            background-color: rgba(255, 255, 255, 0);</span></span>
<span class="line"><span>            backdrop-filter: blur(10px);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 移动端大纲栏透明 */</span></span>
<span class="line"><span>    .VPLocalNav {</span></span>
<span class="line"><span>        background-color: rgba(255, 255, 255, 0);</span></span>
<span class="line"><span>        backdrop-filter: blur(10px);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div></details><p>最后引入 <code>index.css</code> 中 即可看到效果</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/* style/index.css */</span></span>
<span class="line"><span>import &#39;./style/blur.css&#39;</span></span></code></pre></div><h2 id="隐藏横条" tabindex="-1">隐藏横条 <a class="header-anchor" href="#隐藏横条" aria-label="Permalink to &quot;隐藏横条&quot;">​</a></h2><p>文档中有各种横条，挡着占视野影响美观</p><p>在 <code>theme/style</code> 文件夹，然后新建 <code>hidden.css</code> 并填入如下代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ docs</span></span>
<span class="line"><span>│  ├─ .vitepress</span></span>
<span class="line"><span>│  │  └─ config.mts</span></span>
<span class="line"><span>│  │  └─ theme</span></span>
<span class="line"><span>│  │     └─ style</span></span>
<span class="line"><span>│  │        └─ index.css</span></span>
<span class="line"><span>│  │        └─ hidden.css</span></span>
<span class="line"><span>│  └─ index.md</span></span>
<span class="line"><span>└─ node_modules</span></span></code></pre></div><p>复制下面代码，粘贴到 <code>hidden.css</code> 中，可以自行增减</p><details class="details custom-block"><summary>hidden.css</summary><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/* .vitepress\\theme\\style\\hidden.css */</span></span>
<span class="line"><span>:root {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 文档页Logo出文字下横条 */</span></span>
<span class="line"><span>    @media (min-width: 960px) {</span></span>
<span class="line"><span>        .VPNavBarTitle.has-sidebar .title {</span></span>
<span class="line"><span>            border-bottom-color: transparent;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 页脚横条隐藏 */</span></span>
<span class="line"><span>    .VPFooter {</span></span>
<span class="line"><span>        border-top: none;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 手机端菜单栏顶部横条隐藏 */</span></span>
<span class="line"><span>    .VPNavBar.screen-open {</span></span>
<span class="line"><span>        border-bottom: none;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 手机端菜单栏菜单分割线隐藏 */</span></span>
<span class="line"><span>    .VPNavScreenMenuLink {</span></span>
<span class="line"><span>        border-bottom: none;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 手机端菜单组隐藏 */</span></span>
<span class="line"><span>    .VPNavScreenMenuGroup {</span></span>
<span class="line"><span>        border-bottom: none;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 手机端大纲栏横条隐藏 */</span></span>
<span class="line"><span>    .VPLocalNav {</span></span>
<span class="line"><span>        border-bottom: none;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 导航栏下划线隐藏 */</span></span>
<span class="line"><span>.divider {</span></span>
<span class="line"><span>    display: none;</span></span>
<span class="line"><span>}</span></span></code></pre></div></details><p>最后引入 <code>index.css</code> 中 即可看到效果</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/* style/index.css */</span></span>
<span class="line"><span>import &#39;./style/hidden.css&#39;</span></span></code></pre></div><h2 id="链接图标" tabindex="-1">链接图标 <a class="header-anchor" href="#链接图标" aria-label="Permalink to &quot;链接图标&quot;">​</a></h2><p>在 <a href="https://cn.vuejs.org/guide/quick-start" target="_blank" rel="noreferrer">Vuejs官网的快速上手</a> 中 链接前有个图标，怎么做到呢</p><p>在 <code>theme/style</code> 新建 <code>link.css</code> 文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ docs</span></span>
<span class="line"><span>│  ├─ .vitepress</span></span>
<span class="line"><span>│  │  └─ config.mts</span></span>
<span class="line"><span>│  │  └─ theme</span></span>
<span class="line"><span>│  │     └─ style</span></span>
<span class="line"><span>│  │        └─ index.css</span></span>
<span class="line"><span>│  │        └─ link.css</span></span>
<span class="line"><span>│  └─ index.md</span></span>
<span class="line"><span>└─ node_modules</span></span></code></pre></div><p>将下面代码，复制粘贴到 <code>link.css </code>中,分别增加了</p><p>油管链接图标：<a href="https://www.youtube.com/" target="_blank" rel="noreferrer">Youtube</a></p><p>B站链接图标：<a href="https://www.bilibili.com/" target="_blank" rel="noreferrer">哔哩哔哩</a></p><div class="tip custom-block"><p class="custom-block-title">SVG图形</p><ul><li>建议使用 32*32 的尺寸 iconfont、xicons、iconpark</li></ul></div><details class="details custom-block"><summary>link.css</summary><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/* .vitepress/theme/style/link.css */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* YouTube */</span></span>
<span class="line"><span>.vp-doc a[href^=&quot;https://www.youtube.com/&quot;]:before {</span></span>
<span class="line"><span>    content: &#39;&#39;;</span></span>
<span class="line"><span>    background-image: url(/svg/youtube.svg);</span></span>
<span class="line"><span>    width: 20px;</span></span>
<span class="line"><span>    height: 20px;</span></span>
<span class="line"><span>    display: inline-block;</span></span>
<span class="line"><span>    vertical-align: middle;</span></span>
<span class="line"><span>    position: relative;</span></span>
<span class="line"><span>    background-size: cover;</span></span>
<span class="line"><span>    margin-right: 4px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 哔哩哔哩 */</span></span>
<span class="line"><span>.vp-doc a[href^=&quot;https://www.bilibili.com/&quot;]:before {</span></span>
<span class="line"><span>    content: &#39;&#39;;</span></span>
<span class="line"><span>    background-image: url(/svg/bilibili.svg);</span></span>
<span class="line"><span>    width: 20px;</span></span>
<span class="line"><span>    height: 20px;</span></span>
<span class="line"><span>    display: inline-block;</span></span>
<span class="line"><span>    vertical-align: middle;</span></span>
<span class="line"><span>    position: relative;</span></span>
<span class="line"><span>    background-size: cover;</span></span>
<span class="line"><span>    top: -2px;</span></span>
<span class="line"><span>    margin-right: 4px;</span></span>
<span class="line"><span>}</span></span></code></pre></div></details><p>然后在 <code>index.css</code> 中引入生效</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/* .vitepress/theme/style/index.css */</span></span>
<span class="line"><span>import &#39;./style/link.css&#39;</span></span></code></pre></div><p>输入：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>油管链接图标：[Youtube](https://www.youtube.com/)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>B站链接图标：[哔哩哔哩](https://www.bilibili.com/)</span></span></code></pre></div><p>输出：</p><p>油管链接图标：<a href="https://www.youtube.com/" target="_blank" rel="noreferrer">Youtube</a></p><p>B站链接图标：<a href="https://www.bilibili.com/" target="_blank" rel="noreferrer">哔哩哔哩</a></p><h2 id="记号笔" tabindex="-1">记号笔 <a class="header-anchor" href="#记号笔" aria-label="Permalink to &quot;记号笔&quot;">​</a></h2><p>在某些整段的文字中，我们可以用记号笔，划出重点</p><p>在 <code>theme/style</code> 新建 <code>marker.css</code> 文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ docs</span></span>
<span class="line"><span>│  ├─ .vitepress</span></span>
<span class="line"><span>│  │  └─ config.mts</span></span>
<span class="line"><span>│  │  └─ theme</span></span>
<span class="line"><span>│  │     └─ style</span></span>
<span class="line"><span>│  │        └─ index.css</span></span>
<span class="line"><span>│  │        └─ marker.css</span></span>
<span class="line"><span>│  └─ index.md</span></span>
<span class="line"><span>└─ node_modules</span></span></code></pre></div><p>将下面代码，复制粘贴到 <code>marker.css</code> 中</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/* .vitepress/theme/style/marker.css */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 记号笔 不喜欢可自行调整 */</span></span>
<span class="line"><span>.marker-text {</span></span>
<span class="line"><span>    text-decoration: underline;</span></span>
<span class="line"><span>    text-decoration-thickness: 9px;</span></span>
<span class="line"><span>    text-decoration-color: rgba(255, 228, 0, 0.4);</span></span>
<span class="line"><span>    text-underline-offset: -4px;</span></span>
<span class="line"><span>    text-decoration-skip-ink: none;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>然后在 <code>index.css</code> 中引入生效</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/* .vitepress/theme/style/index.css */</span></span>
<span class="line"><span>import &#39;./style/link.css&#39;;</span></span></code></pre></div><p>输入：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;sapn class=&quot;marker-text&quot;&gt;这里是重重点&lt;/sapn&gt;</span></span></code></pre></div><p>输出:</p>`,50)),n(l,{class:"marker-text"},{default:h(()=>s[0]||(s[0]=[a("这里是重重点")])),_:1}),s[6]||(s[6]=p(`<p>还可以实现类似荧光笔的效果</p><details class="details custom-block"><summary>marker.css</summary><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/* .vitepress/theme/style/marker.css */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 荧光笔 不喜欢可自行调整*/</span></span>
<span class="line"><span>.marker-text-highlight {</span></span>
<span class="line"><span>    border-radius: 5px 5px;</span></span>
<span class="line"><span>    background: transparent;</span></span>
<span class="line"><span>    color: var(--vp-c-text-soft);</span></span>
<span class="line"><span>    background: linear-gradient(104deg, rgba(130, 255, 173, 0) 0.9%, rgba(130, 255, 173, 1.25) 2.4%, rgba(130, 255, 173, 0.5) 5.8%, rgba(130, 255, 173, 0.1) 93%, rgba(130, 255, 173, 0.7) 96%, rgba(130, 255, 1732, 0) 98%), linear-gradient(183deg, rgba(130, 255, 173, 0) 0%, rgba(130, 255, 173, 0.3) 7.9%, rgba(130, 255, 173, 0) 15%);</span></span>
<span class="line"><span>}</span></span></code></pre></div></details><p>输入</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;sapn class=&quot;marker-text-highlight&quot;&gt;这里是荧光笔&lt;/sapn&gt;</span></span></code></pre></div><p>输出</p>`,5)),n(l,{class:"marker-text-highlight"},{default:h(()=>s[1]||(s[1]=[a("这里是荧光笔")])),_:1}),s[7]||(s[7]=i("p",null,[i("strong",null,"还有另外一种")],-1)),n(l,{class:"marker-evy"},{default:h(()=>s[2]||(s[2]=[a("这里是尤雨溪的主页样式，鼠标放在我上面看效果")])),_:1}),s[8]||(s[8]=p(`<p>输入：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;sapn class=&quot;marker-evy&quot;&gt;这里是尤雨溪的主页样式，鼠标放在我上面看效果&lt;/sapn&gt;</span></span></code></pre></div><details class="details custom-block"><summary>marker-evy</summary><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/* .vitepress/theme/style/marker.css */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 尤雨溪 不喜欢可自行调整 */</span></span>
<span class="line"><span>.marker-evy {</span></span>
<span class="line"><span>    white-space: nowrap;</span></span>
<span class="line"><span>    position: relative;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.marker-evy:after {</span></span>
<span class="line"><span>    content: &#39;&#39;;</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    z-index: -1;</span></span>
<span class="line"><span>    top: 66%;</span></span>
<span class="line"><span>    left: 0em;</span></span>
<span class="line"><span>    right: 0em;</span></span>
<span class="line"><span>    bottom: 0;</span></span>
<span class="line"><span>    transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);</span></span>
<span class="line"><span>    background-color: rgba(79, 192, 141, 0.5);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.marker-evy:hover:after {</span></span>
<span class="line"><span>    top: 0%;</span></span>
<span class="line"><span>}</span></span></code></pre></div></details><h2 id="代码块" tabindex="-1">代码块 <a class="header-anchor" href="#代码块" aria-label="Permalink to &quot;代码块&quot;">​</a></h2><p>将代码组改成Mac风格，三个小圆点</p><p>在 <code>.vitepress/theme/style</code> 目录新建一个 <code>vp-code.css</code> 文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ docs</span></span>
<span class="line"><span>│  ├─ .vitepress</span></span>
<span class="line"><span>│  │  └─ config.mts</span></span>
<span class="line"><span>│  │  └─ theme</span></span>
<span class="line"><span>│  │     └─ style</span></span>
<span class="line"><span>│  │        └─ index.css</span></span>
<span class="line"><span>│  │        └─ vp-code.css</span></span>
<span class="line"><span>│  └─ index.md</span></span>
<span class="line"><span>└─ node_modules</span></span></code></pre></div><p>复制下面代码，粘贴到 <code>vp-code.css</code> 保存</p><details class="details custom-block"><summary>vp-code.css</summary><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/* .vitepress/theme/style/vp-code.css */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 代码块：增加留空边距 增加阴影 */</span></span>
<span class="line"><span>.vp-doc div[class*=language-] {</span></span>
<span class="line"><span>  box-shadow: 0 10px 30px 0 rgb(0 0 0 / 40%);</span></span>
<span class="line"><span>  padding-top: 20px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 代码块：添加macOS风格的小圆点 */</span></span>
<span class="line"><span>.vp-doc div[class*=language-]::before {</span></span>
<span class="line"><span>  content: &quot;&quot;;</span></span>
<span class="line"><span>  display: block;</span></span>
<span class="line"><span>  position: absolute;</span></span>
<span class="line"><span>  top: 12px;</span></span>
<span class="line"><span>  left: 12px;</span></span>
<span class="line"><span>  width: 12px;</span></span>
<span class="line"><span>  height: 12px;</span></span>
<span class="line"><span>  background-color: #ff5f56;</span></span>
<span class="line"><span>  border-radius: 50%;</span></span>
<span class="line"><span>  box-shadow: 20px 0 0 #ffbd2e, 40px 0 0 #27c93f;</span></span>
<span class="line"><span>  z-index: 1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 代码块：下移行号 隐藏右侧竖线 */</span></span>
<span class="line"><span>.vp-doc .line-numbers-wrapper {</span></span>
<span class="line"><span>  padding-top: 40px;</span></span>
<span class="line"><span>  border-right: none;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 代码块：重建行号右侧竖线 */</span></span>
<span class="line"><span>.vp-doc .line-numbers-wrapper::after {</span></span>
<span class="line"><span>  content: &quot;&quot;;</span></span>
<span class="line"><span>  position: absolute;</span></span>
<span class="line"><span>  top: 40px;</span></span>
<span class="line"><span>  right: 0;</span></span>
<span class="line"><span>  border-right: 1px solid var(--vp-code-block-divider-color);</span></span>
<span class="line"><span>  height: calc(100% - 60px);</span></span>
<span class="line"><span>}</span></span></code></pre></div></details><p>然后在 <code>index.css</code> 中引入生效</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/* .vitepress/theme/style/index.css */</span></span>
<span class="line"><span>import &#39;./style/vp-code.css&#39;;</span></span></code></pre></div><p>输入：</p><details class="details custom-block"><summary>输入</summary><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#默认有行号</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#关闭行号</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span></code></pre></div></details><h2 id="代码组" tabindex="-1">代码组 <a class="header-anchor" href="#代码组" aria-label="Permalink to &quot;代码组&quot;">​</a></h2><p>将代码组改成Mac风格，三个小圆点</p><p>在 <code>.vitepress/theme/style</code> 目录新建一个 <code>vp-code-group.css</code> 文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ docs</span></span>
<span class="line"><span>│  ├─ .vitepress</span></span>
<span class="line"><span>│  │  └─ config.mts</span></span>
<span class="line"><span>│  │  └─ theme</span></span>
<span class="line"><span>│  │     └─ style</span></span>
<span class="line"><span>│  │        └─ index.css</span></span>
<span class="line"><span>│  │        └─ vp-code-group.css</span></span>
<span class="line"><span>│  └─ index.md</span></span>
<span class="line"><span>└─ node_modules</span></span></code></pre></div><p>复制下面代码，粘贴到 <code>vp-code-group.css</code> 保存</p><details class="details custom-block"><summary>vp-code-group.css</summary><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/* .vitepress/theme/style/vp-code-group.css */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 代码组：tab间距 */</span></span>
<span class="line"><span>.vp-code-group .tabs {</span></span>
<span class="line"><span>  padding-top: 20px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 代码组：添加样式及阴影 */</span></span>
<span class="line"><span>.vp-code-group {</span></span>
<span class="line"><span>  color: var(--vp-c-black-soft);</span></span>
<span class="line"><span>  border-radius: 8px;</span></span>
<span class="line"><span>  box-shadow: 0 10px 30px 0 rgb(0 0 0 / 40%);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 代码组：添加macOS风格的小圆点 */</span></span>
<span class="line"><span>.vp-code-group .tabs::before {</span></span>
<span class="line"><span>  content: &#39; &#39;;</span></span>
<span class="line"><span>  position: absolute;</span></span>
<span class="line"><span>  top: 12px;</span></span>
<span class="line"><span>  left: 12px;</span></span>
<span class="line"><span>  height: 12px;</span></span>
<span class="line"><span>  width: 12px;</span></span>
<span class="line"><span>  background: #fc625d;</span></span>
<span class="line"><span>  border-radius: 50%;</span></span>
<span class="line"><span>  box-shadow: 20px 0 #fdbc40, 40px 0 #35cd4b;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 代码组：修正倒角、阴影、边距 */</span></span>
<span class="line"><span>.vp-code-group div[class*=&quot;language-&quot;].vp-adaptive-theme.line-numbers-mode {</span></span>
<span class="line"><span>  border-radius: 8px;</span></span>
<span class="line"><span>  box-shadow: none;</span></span>
<span class="line"><span>  padding-top: 0px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 代码组：隐藏小圆点 */</span></span>
<span class="line"><span>.vp-code-group div[class*=&quot;language-&quot;].vp-adaptive-theme.line-numbers-mode::before {</span></span>
<span class="line"><span>  display: none;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 代码组：修正行号位置 */</span></span>
<span class="line"><span>.vp-code-group .line-numbers-mode .line-numbers-wrapper {</span></span>
<span class="line"><span>  padding-top: 20px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 代码组：修正行号右侧竖线位置 */</span></span>
<span class="line"><span>.vp-code-group .line-numbers-mode .line-numbers-wrapper::after {</span></span>
<span class="line"><span>  top: 24px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 代码组（无行号）：修正倒角、阴影、边距 */</span></span>
<span class="line"><span>.vp-code-group div[class*=&quot;language-&quot;].vp-adaptive-theme {</span></span>
<span class="line"><span>  border-radius: 8px;</span></span>
<span class="line"><span>  box-shadow: none;</span></span>
<span class="line"><span>  padding-top: 0px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 代码组（无行号）：隐藏小圆点 */</span></span>
<span class="line"><span>.vp-code-group div[class*=&quot;language-&quot;].vp-adaptive-theme::before {</span></span>
<span class="line"><span>  display: none;</span></span>
<span class="line"><span>}</span></span></code></pre></div></details><p>然后在<code> index.css</code> 中引入生效</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/* .vitepress/theme/style/index.css */</span></span>
<span class="line"><span>import &#39;./style/vp-code-group.css&#39;;</span></span></code></pre></div><p>输入：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    :::</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> code-group</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    \`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> [pnpm]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #查询pnpm版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    pnpm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    \`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    \`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> [yarn]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #查询yarn版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    yarn</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    \`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    :::</span></span></code></pre></div><p>输出：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-gD2WG" id="tab-qN114Si" checked><label data-title="pnpm" for="tab-qN114Si">pnpm</label><input type="radio" name="group-gD2WG" id="tab-0W68o3E"><label data-title="yarn" for="tab-0W68o3E">yarn</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#查询pnpm版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#查询yarn版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span></code></pre></div></div></div><h2 id="代码精简" tabindex="-1">代码精简 <a class="header-anchor" href="#代码精简" aria-label="Permalink to &quot;代码精简&quot;">​</a></h2><p>当我们的内容多了，在 <code>config.mts</code> 中配置导航和侧边栏，翻就要半天了</p><p>所以那就来个简化导航栏，其他同理</p><p>在 <code>.vitepress</code> 目录新建 <code>config</code> 文件夹，并新建 <code>index.ts</code> 文件</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .vitepress</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config.mts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> configs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 配置文件夹</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.ts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node_modules</span></span></code></pre></div><p>然后复制粘贴到 <code>index.ts</code> 并保存下面代码</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> configs/index.ts</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> from </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./nav&#39;</span></span></code></pre></div><p>具体样式修改，详见<a href="https://vitepress.yiov.top/style.html" target="_blank" rel="noreferrer">vitepress教程</a></p>`,33))])}const v=F(c,[["render",E]]);export{u as __pageData,v as default};
