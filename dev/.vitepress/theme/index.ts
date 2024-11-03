import DefaultTheme from 'vitepress/theme'
import 'virtual:group-icons.css'
import giscusTalk from 'vitepress-plugin-comment-with-giscus';

import MNavLinks from './components/MNavLinks.vue'
import Mycomponent from "./components/Mycomponent.vue"
import Linkcard from "./components/Linkcard.vue"
import update from "./components/update.vue"
import ArticleMetadata from "./components/ArticleMetadata.vue"
import { useLive2d } from 'vitepress-theme-website' //看板娘



import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
import { useData, useRoute } from 'vitepress';
import { h } from 'vue'



//样式导入
import './style/index.css'  //  H1文字渐变，链接下划线
//import './style/rainbow.css' //彩虹背景动画
import './style/blockquote.css' //引用颜色
import './style/custom-block.css' //容器颜色
import './style/blur.css' //导航栏毛玻璃
import './style/hidden.css' //隐藏横条
import './style/link.css' //链接图标
import './style/marker.css' //记号笔
import './style/vp-code.css' //代码块
import './style/vp-code-group.css' //代码组 
import HomeUnderline from "./components/HomeUnderline.vue" //首页文字下划线
import confetti from "./components/confetti.vue" //五彩纸屑
import backtotop from "./components/backtotop.vue"  //返回顶部
import notice from "./components/notice.vue" //公告


export default {
  extends: DefaultTheme,

  enhanceApp({app}) {
    // 注册组件
    app.component('MNavLinks' , MNavLinks)
    app.component('Mycomponent' , Mycomponent)
    app.component('Linkcard' , Linkcard)
    app.component('update' , update)
    app.component('ArticleMetadata' , ArticleMetadata)
    app.component('HomeUnderline' , HomeUnderline)
    app.component('confetti' , confetti)

  },
  setup() {
    // Get frontmatter and route
    const { frontmatter } = useData();
    const route = useRoute();

    // giscus配置
    giscusTalk({
      repo: 'xiebinhqy/docs-giscus', //仓库
      repoId: 'R_kgDONIkccg', //仓库ID
      category: 'Announcements', // 讨论分类
      categoryId: 'DIC_kwDONIkccs4Cj3MZ', //讨论分类ID
      mapping: 'pathname',
      inputPosition: 'bottom',
      lang: 'zh-CN',
      }, 
      {
        frontmatter, route
      },
      //默认值为true，表示已启用，此参数可以忽略；
      //如果为false，则表示未启用
      //您可以使用“comment:true”序言在页面上单独启用它
      true
    );
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
    //看板娘
    // useLive2d({
    //   enable: true,
    //   model: {
    //     url: 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/bilibili-22/index.json'
    //   },
    //   display: {
    //     position: 'right',
    //     width: '135px',
    //     height: '300px',
    //     xOffset: '35px',
    //     yOffset: '5px'
    //   },
    //   mobile: {
    //     show: true
    //   },
    //   react: {
    //     opacity: 0.8
    //   }
    // })
  },
  Layout: () => {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    return h(DefaultTheme.Layout, props,{
      'doc-footer-before': () => h(backtotop), // 使用doc-footer-before插槽 右下角置頂按鈕
      //'layout-top': () => h(notice), // 使用layout-top插槽-公告
    })
  },
}