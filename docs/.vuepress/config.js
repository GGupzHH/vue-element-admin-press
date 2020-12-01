const { navBarData } = require('./data')
const { featuresSideBar } = require('./data/readdir')

module.exports = {
  base: '/vue-element-admin-press/',
  // 页面标题
  title: 'Vue-Element-admin',
  // 网页描述
  description: '记录日常所得   专注信手拈来',
  head: [
    // 页面icon
    ['link', { rel: 'icon', href: '/icon.png' }]
  ],
  // 端口号
  port: 3000,
  extraWatchFiles: [
    '.vuepress/data/*.js'
  ],
  markdown: {
    // 代码块行号
    lineNumbers: true
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom'
  ],
  themeConfig: {
    activeHeaderLinks: false, // 默认值：true
    smoothScroll: true, // 启动页面滚动
    lastUpdated: '最后更新时间', // 最后更新时间
    sidebar: 'auto', // 所有页面自动生成侧边栏
    repo: 'https://github.com/GGupzHH/vue-element-admin-press', // 仓库地址
    repoLabel: 'Github',  // 仓库链接label
    // 编辑链接
    // editLinks: true,
    // 编辑链接label
    // editLinkText: '编辑此页',
    nav: navBarData,
    sidebar: {
      '/pages/features/': featuresSideBar
    }
  },
  configureWebpack: {
    resolve: {
      // 静态资源的别名
      alias: {
        '@vuepress': '../../images/vuepress',
        '@vue': '../../images/vue'
      }
    }
  }
}