import DefaultTheme from 'vitepress/theme'

import MNavLinks from './components/MNavLinks.vue'

import { h } from 'vue'
import { useData } from 'vitepress'

//样式导入
import './style/index.css'  //  H1文字渐变，链接下划线
import './style/rainbow.css' //彩虹背景动画
import './style/blockquote.css' //引用颜色
import './style/custom-block.css' //容器颜色
import './style/blur.css' //导航栏毛玻璃
import './style/hidden.css' //隐藏横条
import './style/link.css' //链接图标
import './style/marker.css' //记号笔
import './style/vp-code.css' //代码块
import './style/vp-code-group.css' //代码组 




export default {
  extends: DefaultTheme,

  enhanceApp({app}) {
    // 注册组件
    app.component('MNavLinks' , MNavLinks)
  },

  Layout: () => {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    return h(DefaultTheme.Layout, props)
  },
}