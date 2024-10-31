import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin, localIconLoader } from 'vitepress-plugin-group-icons'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "一武智能辅助文档",
  description: "A VitePress Site",
  lang: 'cn-ZH',
  head: [["link", { rel: "icon", href: "/vite-docs/jilu.png" }]],
  outDir: "../docs", //build输出路径
  base: "/vite-docs/", //github-路径
  lastUpdated: true, //最后更新时间显示
  cleanUrls:false, //开启纯净链接
  ignoreDeadLinks: false, //关闭忽略死链，不配置即可，非常不建议设置为true
  //组件引入
  markdown: {
    // 组件插入h1标题下
    config: (md) => {
      md.use(groupIconMdPlugin) //代码组图标
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
          let htmlResult = slf.renderToken(tokens, idx, options);
          if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`; 
          return htmlResult;
      }
    },
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
    //行号显示
    lineNumbers:true, //false关闭
  },
  vite:{
    css: {
      preprocessorOptions:  {
        scss: {
          api: "modern-compiler" // or 'modern'
        }
      }
    },
    plugins: [
      groupIconVitePlugin({
        customIcon:{
          ts:localIconLoader(import.meta.url, '../public/svg/ts.svg'), ////本地ts图标导入自定义图标
          js: 'logos:javascript', //js图标自定义图标
          md: 'logos:markdown', //markdown图标自定义图标
          css: 'logos:css-3', //css图标自定义图标
        }
      }) //代码组图标
    ],
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outlineTitle:"目录",
    outline:[2,6],
    logo:'/logo.png',
    siteTitle:'技术文档',
    //手机端深浅模式文字修改
    darkModeSwitchLabel: '深浅模式',
    //侧边栏文字更改(移动端)
    sidebarMenuLabel:'目录', 
    //返回顶部文字修改
    returnToTopLabel:'返回顶部', 
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
      pattern: 'https://github.com/xiebinhqy/vite-docs/tree/main/docs:path',
      text: 'Edit this page on GitHub',
    },

    nav: [
      //{ text: '导航', link: '/nav/' },
      {
        text:'导航',
        items: [
          { text: 'DEA导航', link: '/dea_nav/' },
          { text: '技术导航', link: '/websites/' },
          { text: '原有导航', link: '/nav/' },
        ]
      },
      {text: "指南",link: '/guide/'},
      {text: "前端",link: '/backend/index'},
      { text: 'Extension', link: '/Forex_extension' },
      {
        text:'Dropdown Menu',
        items: [
          { text: '货币对冲', link: '/currency_hedging/' },
          { text: '趋势策略', link: '/rend_strategy/' },
          { text: 'XAU交易策略', link: '/xau_ea/' },
        ]
      },
      {
        text:'Index Menu',
        items: [
          { text: '货币对冲', link: '/currency_hedging/' },
          { text: '趋势策略', link: '/rend_strategy/' },
          { text: 'XAU交易策略', link: '/xau_ea/' },
        ]
      },
      {text: "文档教程",link: '/components/basic-component1'},
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
          text: '基础配置',
          collapsed: false,
          items: [
            {text:'快速上手',link: '/components/basic-component1'},
            {text:'配置',link: '/components/basic-component2'},
            {text:'页面',link: '/components/basic-component3'},
          ]
        },
        {
          text: '文档教程',
          collapsed: false,
          items: [
            {text:'功能展示',link: '/components/common-component4'},
            {text:'样式美化',link: '/components/common-component1'},
            {text:'Frontmatter',link: '/components/common-component3'},
            {text:'页面导航搭建',link: '/components/common-component2'},
          ]
        },
        {
          text: '进阶扩展',
          collapsed: false,
          items: [
            {text:'Markdown',link: '/components/pro-component4'},
            {text:'团队',link: '/components/team'},
            {text:'组件',link: '/components/pro-component1'},
            {text:'布局插槽',link: '/components/pro-component2'},
            {text:'插件',link: '/components/pro-component3'},
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
            {text:'货币对对冲系统',link: '/currency_hedging/item-3'},
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
      '/rend_strategy': [
        {
          text:'趋势策略',
          collapsed: false,
          items:[
            {text:'shouye',link: '/rend_strategy/index'},
            {text:'基本常识',link: '/rend_strategy/basic-common-sense'},
            {text:'front-two',link: '/rend_strategy/item-2'},
            {text:'货币对对冲系统',link: '/rend_strategy/item-3'},
          ]
        },
        {
          text:'晋升通道',
          collapsed: true,
          items:[
            {text:'晋升通道首页',link: '/rend_strategy/jinsheng_index'},
            {text:'front-one',link: '/rend_strategy/jinsheng_item_1'},
            {text:'front-two',link: '/rend_strategy/jinsheng_item_2'},
            {text:'front-three',link: '/rend_strategy/jinsheng_item_3'},
          ]
        },
      ],
      '/xau_ea': [
        {
          text:'XAU交易策略',
          collapsed: false,
          items:[
            {text:'shouye',link: '/xau_ea/index'},
            {text:'基本常识',link: '/xau_ea/basic-common-sense'},
            {text:'front-two',link: '/xau_ea/item-2'},
            {text:'货币对对冲系统',link: '/xau_ea/item-3'},
          ]
        },
        {
          text:'晋升通道',
          collapsed: true,
          items:[
            {text:'晋升通道首页',link: '/xau_ea/jinsheng_index'},
            {text:'front-one',link: '/xau_ea/jinsheng_item_1'},
            {text:'front-two',link: '/xau_ea/jinsheng_item_2'},
            {text:'front-three',link: '/xau_ea/jinsheng_item_3'},
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
      message: 'Released under the MIT License...',
      copyright:'Copyright © 2023-present Deattor Bin',
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
