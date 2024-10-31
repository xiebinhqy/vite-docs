---
lastUpdated: true
editLink: true
comment: true
---

# 快速上手
<!-- <update /> -->

<Linkcard url="https://stackblitz.com/edit/vite-qpxcyc?file=docs%2Findex.md" title="在线体验及调试（StackBlitz 驱动）" description="https://vitepress.new/" logo="https://img.deattor.us.kg/file/1730012057796_markdown.png"/>

## 前期工作

::: tip 说明
已经安装 或者 熟练了，可以不用看此步骤
:::


::: details 必备工具
 - 必装：安装[nodejs](https://yiov.top/website/nodejs.html)
 - 建议安装：安装[vscode](https://yiov.top/website/VSCode.html)
 - 可选安装：安装[git](https://yiov.top/website/pages/git.html)
:::

::: code-group

```sh [pnpm]
#安装pnpm
npm install -g pnpm
#查看版本号
pnpm -v
```

```sh [yarn]
#安装yarn
npm install -g yarn
#查看版本号
yarn -v
```
```sh [bun]
#安装yarn
npm install -g bun
#查看版本号
bun -v
```
:::


::: details 创建目录
`win键+R`键，输入 `cmd`，打开命令终端
![alt text](https://img.deattor.us.kg/file/1730181138044_cmd-01.png)
先进入任意盘符，比如 `F` 盘
```sh
#盘符可以自定义 回车进入
f:
```
![alt text](https://img.deattor.us.kg/file/1730181380184_cmd-02.png)

再创建文件夹名并进入

```sh
#创建目录并进入文件夹
mkdir vitepress && cd vitepress
```
这样我的目录路径为 F:\vitepress
我们先关闭cmd，一会介绍快捷进入的方法

![alt text](https://img.deattor.us.kg/file/1730181438738_cmd-03.png)
:::

## 安装

### 安装依赖

在项目目录上方的地址栏，上输入 `cmd` 回车可以快捷打开

![alt text](https://img.deattor.us.kg/file/1730181550917_cmd-04.png)

![alt text](https://img.deattor.us.kg/file/1730181548648_cmd-05.png)

然后我们安装`vitepress`

::: code-group

```sh [pnpm]
pnpm add -D vitepress
```

```sh [yarn]
yarn add -D vitepress
```

```sh [npm]
npm i -D vitepress
```

```sh [bun]
bun add -D vitepress
```
:::

![alt text](https://img.deattor.us.kg/file/1730181633254_cmd-06.png)

### 初始化向导

::: code-group

```sh [pnpm]
pnpm vitepress init
```

```sh [yarn]
yarn vitepress init
```

```sh [npm]
npx vitepress init
```

```sh [bun]
bunx vitepress init
```
:::


::: details 文件发位置放在 `./docs`
文件夹名新手请参照下面，老手可以自己改
如果你直接回车，则是放在了根目录 `./`，那你的 `脚本命令` 也要修改一下
:::

```sh
T   Welcome to VitePress!
|
o  Where should VitePress initialize the config?
|  ./docs
|
o  Site title:
|  My Awesome Project
|
o  Site description:
|  A VitePress Site
|
o  Theme:
|  Default Theme
|
o  Use TypeScript for config and theme files?
|  Yes
|
o  Add VitePress npm scripts to package.json?
|  Yes
|
—  Done! Now run npm run docs:dev and start writing.
```
::: tip Vue 作为对等依赖
如果您打算使用 Vue 组件或 API 进行自定义，您还应该显式 [安装 Vue](https://vitepress.yiov.top/components.html#%E5%AE%89%E8%A3%85) 作为对等依赖项
如果你不懂，我们先暂时不看，我们后面会详细说
:::

## 脚本命令

默认不用改，在 `package.json` 中可以查看




