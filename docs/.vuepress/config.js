// const {blogSideBar, abstractSideBar} = require('./readdir')

module.exports = {
  title: 'vue-element-admin',
  description: '基于 Vue 和 Element UI，能够快速搭建起一个企业中后台产品原型',
  base: '/', // github
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  base: '/', // 这是部署到github相关的配置
  port: 3000,
  markdown: {
    lineNumbers: false
  },
  extraWatchFiles: [
    '.vuepress/config.js', // 使用相对路径
  ],
  themeConfig: {
    lastUpdated: '最后更新时间',
    activeHeaderLinks: false, // 默认值：true
    smoothScroll: true, // 启动页面滚动
    logo: '/home.png',
    nav:[
      { text: 'Home', link: '/'},
      { text: '功能', link: '/pages/case'},
      { text: 'GitHub', link: 'https://github.com/GGupzHH'}  
    ],
    sidebar: {
      '/pages/case/': {
        title: 'Webpack',
        collapsable: false,
        children: [
          '/webpack/',
          '/webpack/source.md',
          '/webpack/install.md',
          '/webpack/start.md',
          '/webpack/static.md',
          '/webpack/core.md',
          '/webpack/advanced.md',
          '/webpack/case.md',
          '/webpack/optimization.md',
          '/webpack/loader.md',
          '/webpack/plugin.md'
        ]
      }
    }
  }
}