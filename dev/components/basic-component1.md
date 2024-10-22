---
lastUpdated: false
editLink: true
---

# Basic Component 1


<p class="under">此文本下方有一行线。</p>
<p class="over">此文本上面有一行线。</p>
<p class="line">此文本有一条线穿过它。</p>
<p>
  此<a class="plain" href="#">链接不会具有下划线</a
  >，因为链接默认加下划线。移除锚点上的文本装饰时要小心，因为用户通常依赖下划线来表示超链接
</p>
<p class="underover">此文本在其上方<em>和</em>下方都有线条。</p>
<p class="thick">在浏览器支持的情况下，此文本具有非常粗的紫色下划线。</p>
<p class="blink">此文本可能会为你闪烁，具体取决于你使用的浏览器。</p>


其他美化
太多了，可以参照源文件来进行修改

样式修改：path

node_modules\vitepress\dist\client\theme-default\styles\var.css


> 更新时间：2024年


组件介绍



{{ $frontmatter.title }}

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
这个是警告！！！！
:::

::: danger
这个很危险
:::

::: details
This is a details block.
:::


属性

油管链接图标：[Youtube](https://www.youtube.com/)

B站链接图标：[哔哩哔哩](https://www.bilibili.com/)

## 荧光笔

>   <sapn class="marker-text">这里是重重点</sapn>

>  <sapn class="marker-text-highlight">这里是重重点</sapn>

>  <sapn class="marker-evy">这里是尤雨溪的主页样式，鼠标放在我上面看效果</sapn>



插槽

## 代码块 

```sh
#默认有行号
pnpm -v
```

```sh:no-line-numbers
#关闭行号
pnpm -v
```

## 代码组

::: code-group

```sh [pnpm]
#查询pnpm版本
pnpm -v
```

```sh [yarn]
#查询yarn版本
yarn -v
```

:::




---
