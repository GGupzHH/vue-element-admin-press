# vue-protagonisths

## Project setup

```
npm install 
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### 添加 vuex 中小型项目不推荐 vuex,坑比较多,可以使用 eventBus

```
vue add vuex
```

### 添加 axios

```
vue add axios
```

### 实现多环境打包,分别打包到不同的文件夹中

- public_dist 打包命令

```
npm run buildpublic
```

- dist 打包命令

```
npm run build
```

### 引入 commitizen 插件

- git cz

- commit 规范

- npm install -g commitizen

- npm install -g commitizen conventional-changelog conventional-changelog-cli conventional-commits-detector conventional-recommended-bump@0.3.0

- 在 .git 的目录下执行commitizen init cz-conventional-changelog --save --save-exact

> 具体的配置可以查看.env.build .env.buildpublic package.json 文件
