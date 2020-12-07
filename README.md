# 序

此仓库提供了一些常用的 VuePress配置案例

### 首页
![首页](https://ggupzhh.github.io/vue-element-admin-press/)

## 目录
```js
|-- docs
|--  |-- .vuepress
|--  |--  |   |--components
|--  |--  |   |   |--NavigationChunk.vue
|--  |--  |   |--data
|--  |--  |   |   |--index.js
|--  |--  |   |   |--readdir.js
|--  |--  |   |--public
|--  |--  |   |   |--icon.png
|--  |--  |   |   |--logo.jpg
|--  |--  |   |--styles
|--  |--  |   |   |--index.styl
|--  |--  |   |   |--palette.styl
|--  |--  |-- config.js
|--  |--  |-- style.styl
|--  |-- pages
|--  |--  |   |--feature
|--  |--  |   |   |--built-in
|--  |--  |   |   |  |-- basic.md
|--  |--  |   |   |--components
|--  |--  |   |   |  |-- 拖拽.md
|--  |--  |   |   |--utils
|--  |--  |   |   |  |-- 单例模式.md
|--  |--  |   |   |  |-- 国际化i18n.md
|--  |--  |   |   |  |-- 类型处理.md
|--  |--  |   |   |  |-- 全局路由搜索.md
|--  |--  |   |   |  |-- 驼峰命名处理.md
|--  |--  |   |   |  |-- 自定义指令.md
|--  |--  |   |   |  |-- cookie.md
|--  |--  |   |   |  |-- mock.md
|--  |--  |   |   |  |-- request.md
|--  |--  |   |   |--visual
|--  |--  |   |   |  |-- 折线图.md
|--  |--  |   |   |  |-- 柱状.md
|--  |--  |   |-- README.md
|--  |--  |-- README.md
|--  |-- .gitignore
|--  |-- README.md
|--  |-- package.json
|--  |-- yarn.lock
```

## 功能列表
# Vue-element-admin

## 简介

🌈 基于 Vue 和 Element UI，能够快速搭建起一个企业中后台产品原型，内置路由权限验证，高级列表，万能分页，引导动画等业务模型，方便扩展，极大提高生产力

## 内置功能

* 账户 User
  * [x] 登录
  * [ ] 注销
  * [ ] 注册
* 路由权限 Route Permission
  * [ ] 路由权限
  * [ ] 指令权限
  * [ ] 角色权限
* 导航 Navigation
  * [x] 顶部导航栏 NavBar
  * [x] 路由面包屑 NavBreadcrumb
  * [x] 侧边菜单栏 MenuBar (支持多级路由嵌套, ? 自适应收缩)
  * [ ] ? 路由标签切换选项卡
* 布局 Layout
  * [x] iconfont / font Awesome
  * [ ] 布局切换(导航, 流式/定宽)
  * [ ] 主题色，换肤
  * [ ] 风格切换(可预览)
* 反馈 Feedback
  * [ ] 加载进度条
  * [ ] 错误页 (404, 403, 500)
* 数据列表 List (header, content, footer)
  * [ ] 搜索列表(远程 remote)
  * [ ] 卡片列表(自适应; 无缝/留边)
  * [ ] 纯展示列表
  * [ ] 带筛选条件的列表
* 表单 Form
  * [ ] 基础表单
  * [ ] 组合表单
  * [ ] 分步表单
  * [ ] 表单详情(类似只读)
  * [ ] 表单 props rules Mixins 封装
* 图表 Chart (D3, Echarts...)
  * [x] 仪表盘
  * [x] 折线图
  * [x] 柱状图
  * [x] 饼图
  * [x] 散点图
  * [x] 架构图
  * [x] 雷达图
  * [ ] 混合图
* 工具 Tools
  * [x] axios 封装
  * [x] js-cookie
  * [x] 全局单例 Loading 封装
  * [ ] 全局路由搜索
  * [ ] mock api
  * [ ] 国际化 i18n
* 动画 Animation
* 高级模块
  * [ ] 万能分页(纯前端/后端接口分页)
  * [ ] 新手引导
  * [ ] 模态对话窗口
  * [ ] 懒加载/无限滚动/手动加载更多
  * [ ] 组合复选框(分组; 全选/取消全选; 未选中/未全部选中/选中)
  * [ ] 拖拽排序(水平/垂直)
  * [ ] 骨架屏
  * [ ] 日历
  * [ ] 富文本
  * [ ] 图片/文件上传

## 拓展
  * [ ] 命令行 cli 支持自定义安装哪种功能
  * [ ] 支持 Typescript
  * [ ] 实现 JSON 可配置化
  * [ ] 使用规范说明文档



## 参考(待补充)

## 安装、启动和打包
在使用前请先安装VuePress
  - 安装
  ```sh
  $ yarn 
  ```

  - 启动
  ```sh
  $ yarn serve
  ```

  - 打包
  ```sh
  $ yarn docs:build
  ```