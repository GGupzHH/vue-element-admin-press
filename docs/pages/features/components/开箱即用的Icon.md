# 基于[Iconfont](https://www.iconfont.cn/) 封装的开箱即用的SVG实现方案

## 功能描述
```txt
  将Iconfont 的Symbol使用方式下载到本地，将其中的iconfont.js引入到全局
```

## 目录结构
  ```js
    |-- src
    |--  |-- assets
    |--  |--  |   |-- fonts
    |--  |--  |   |--  |-- iconfont.js
    |--  |-- components
    |--  |--  |   |-- IconFont
    |--  |--  |   |--  |-- index.vue
    |--  |-- main.js
  ```
## 使用
```vue
<template>
  <IconFont
    class="header-icon"
    :icon-class="'icon_clear'"
  />s
</template>
```

## [实现](https://github.com/GGupzHH/vue-element-admin/blob/master/src/assets/fonts)
```js
  // main.js
  import '@/assets/fonts'
```

```vue
  // IconFont/index.vue
  <template>
    <svg
      class="icon"
      aria-hidden="true"
      :class="getClassName"
      @click="handleClick()"
    >
      <filter
        id="drop-shadow"
        xmlns="http://www.w3.org/2000/svg"
      >
        <feGaussianBlur
          in="SourceAlpha"
          stdDeviation="2"
        />
        <feOffset
          dx="1"
          dy="1"
          result="offsetblur"
        />
        <feComponentTransfer>
          <feFuncA
            type="linear"
            slope="0.2"
          />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <g
        v-bind="getAttrs()"
      >
        <use :xlink:href="'#' + iconClass" />
      </g>
    </svg>
  </template>

  <script>

  export default {
    name: 'IconFont',
    props: {
      iconClass: {
        type: String,
        default: ''
      },
      shadow: {
        type: Boolean,
        default: false
      },
      verticalCenter: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      getClassName () {
        const className = []
        if (this.verticalCenter) {
          className.push('middle')
        }
        return className
      }
    },
    methods: {
      handleClick () {
        this.$emit('click')
      },
      getAttrs () {
        const attrs = {}
        this.shadow &&
        (attrs.filter = 'url(#drop-shadow)')
        return attrs
      }
    }
  }
  </script>

  <style lang="scss" scoped>
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    &.middle {
      vertical-align: middle;
    }
  }
  </style>

```