module.exports = {
  // 页面标题
  title: 'Vue-Element-admin',
  // 网页描述
  description: '基于 Vue 和 Element UI，能够快速搭建起一个企业中后台产品原型',
  head: [
    // 页面icon
    ['link', { rel: 'icon', href: '/icon.png' }]
  ],
  // 端口号
  port: 3000,
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
    repo: '',
    // 仓库链接label
    repoLabel: 'Github',
    // 编辑链接
    editLinks: true,
    // 编辑链接label
    editLinkText: '编辑此页',
    // 导航
    nav: [
      { text: '前端面试之道',link: '/pages/interview/'},
      { text: '下拉', items: [
          { text: '下拉 1', link: '/pages/books/下拉1'}, 
          { text: '下拉 2', link: '/pages/books/下拉2'},
          { text: '下拉 3', link: '/pages/books/下拉3'}
        ]
      },
      { text: '数据结构和算法', link: '/pages/algorithm/'},
      { text: 'Vue.js', link: '/pages/vue/'},
      { text: 'Webpack',link: '/pages/webpack/'},
      { text: 'VuePress',link: '/pages/vuepress/'},
      { text: '基础配置功能',link: '/pages/common/'}
  ]},
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