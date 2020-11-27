const { navBarData } = require('./data')
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
  themeConfig: {
    // 最后更新时间
    lastUpdated: '最后更新时间',
    // 所有页面自动生成侧边栏
    sidebar: 'auto',
    // 仓库地址
    repo: 'https://github.com/GGupzHH/vue-element-admin-press',
    // 仓库链接label
    repoLabel: 'Github',
    // 编辑链接
    editLinks: true,
    // 编辑链接label
    // editLinkText: '编辑此页',
    // 导航
    nav: navBarData
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