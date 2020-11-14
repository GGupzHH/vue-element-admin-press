const {blogSideBar, abstractSideBar} = require('./readdir')

module.exports = {
  title: 'vue-element-admin',
  description: '信永中和大数据部门',
  base: '/', // github
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  base: '/',
  extraWatchFiles: [
    '.vuepress/config.js',
  ],
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-135701184-2' 
      }
    ],
    [
      '@vssue/vuepress-plugin-vssue', 
      {
        locale: 'zh',
        platform: 'github',
        owner: 'imlinhe',
        repo: 'imlinhe.github.io',
        clientId: 'fae53e244022d47c67b5',
        clientSecret: '5e889a5769ce43575d4e0425ae63c5b97db4e720',
      }
    ],
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom'
  ],
  themeConfig: {
    activeHeaderLinks: false, // 默认值：true
    smoothScroll: true, // 启动页面滚动
    logo: '/linhe.jpg',
    nav:[
      { text: 'Home', link: '/'},
      { text: '博文', link: '/pages/blog/' }, // 内部链接 以docs为根目录
      { text: '摘要', link: '/pages/abstract/'},
      { text: 'GitHub', link: 'https://github.com/imlinhe'}  
    ],
    sidebar: {
      '/pages/blog/': blogSideBar,
      '/pages/abstract/': abstractSideBar
      //...可添加多个不同的侧边栏，不同页面会根据路径显示不同的侧边栏
    }
  }
}