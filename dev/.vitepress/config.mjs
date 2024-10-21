import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "一武智能辅助文档",
  description: "A VitePress Site",
  lang: 'cn-ZH',
  head: [["link", { rel: "icon", href: "/vite-docs/logo.png" }]],
  outDir: "../docs", //build输出路径
  base: "/vite-docs/", //github-路径
  lastUpdated: true, //最后更新时间显示
  //组件引入
  // markdown: {
  //   theme: {
  //     light: 'vitesse-light',
  //     dark: 'vitesse-dark'
  //   },
  //   lineNumbers: true,
  //   config(md) {
  //     md.use(componentPreview)
  //     md.use(containerPreview)
  //   }
  // },
  vite:{
    css: {
      preprocessorOptions:  {
        scss: {
          api: "modern-compiler" // or 'modern'
        }
      }
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outlineTitle:"目录",
    outline:[2,6],
    logo:'/logo.png',
    siteTitle:'官方文档',
    //允许自定义上次更新文本和日期格式
    lastUpdated:{
      text:'Updated at',
      formatOptions:{
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    //自定义出现上一页和下一页链接上方文本
    docFooter:{
      prev: 'pagina prior',
      next: 'proxima pagina',
    },
    // 底部添加链接文本
    editLink:{
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    nav: [
      { text: '导航', link: '/nav/' },
      {text: "指南",link: '/guide/'},
      {text: "组件",link: '/components/basic-component1'},
      {text: "前端",link: '/backend/index'},
      { text: 'Examples', link: '/markdown-examples' },
      {
        text:'Dropdown Menu',
        items: [
          { text: '货币对冲', link: '/currency_hedging/' },
          { text: '趋势策略', link: '/rend_strategy/' },
          { text: 'XAU交易策略', link: '/xau_ea/' },
        ]
      },
    ],

    sidebar: {
      '/guide': [
        {
          text:'指南',
          items:[
            {text:'组件库介绍',link: '/guide/'},
            {text:'快速开始',link: '/guide/quickstart'},
            //{text:'快速部署',link: '/guide/home-work'},
            {
              text:'快速部署',
              items:[
                {text:'下一步首页',link: '/guide/xiayiji'},
                {text:'下级第一步',link: '/guide/xiayiji/diyibu'},
                {text:'下级第二部',link: '/guide/xiayiji/dierbu'},
              ],
            }
          ]
        }
      ],
      '/backend': [
        {
          text:'前端',
          items:[
            {text:'最开始介绍',link: '/backend/'},
            {text:'入门',link: '/backend/rabbitmq入门'},
            {text:'精通',link: '/backend/rocketmq精通'},
          ]
        }
      ],
      '/components': [
        {
          text: '通用基础组件',
          collapsed: false,
          items: [
            {text:'基础组件 1',link: '/components/basic-component1'},
            {text:'基础组件 2',link: '/components/basic-component2'},
          ]
        },
        {
          text: '通用业务组件',
          collapsed: true,
          items: [
            {text:'通用组件 1',link: '/components/common-component1'},
            {text:'通用组件 2',link: '/components/common-component2'},
          ]
        },
        {
          text: '高级业务组件',
          collapsed: true,
          items: [
            {text:'高级组件 1',link: '/components/pro-component1'},
            {text:'高级组件 2',link: '/components/pro-component2'},
          ]
        }
      ],
      '/currency_hedging': [
        {
          text:'货币对冲',
          collapsed: false,
          items:[
            {text:'shouye',link: '/currency_hedging/index'},
            {text:'基本常识',link: '/currency_hedging/basic-common-sense'},
            {text:'front-two',link: '/currency_hedging/item-2'},
            {text:'front-three',link: '/currency_hedging/item-3'},
          ]
        },
        {
          text:'晋升通道',
          collapsed: true,
          items:[
            {text:'晋升通道首页',link: '/currency_hedging/jinsheng_index'},
            {text:'front-one',link: '/currency_hedging/jinsheng_item_1'},
            {text:'front-two',link: '/currency_hedging/jinsheng_item_2'},
            {text:'front-three',link: '/currency_hedging/jinsheng_item_3'},
          ]
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: 'https://github.com/vuejs/vitepress' },
    ],
    //底部配置
    footer: {
      message: 'Released under the MIT License.',
      copyright:'Copyright © 2023-present Evan You',
    },
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  }
})
