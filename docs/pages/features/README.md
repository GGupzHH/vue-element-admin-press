<template>
  <div>
    <NavigationChunk :routerInfo="componentsRouterInfo">组件</NavigationChunk>
    <NavigationChunk :routerInfo="utilsRouterInfo">工具</NavigationChunk>
    <NavigationChunk :routerInfo="visualRouterInfo">可视化</NavigationChunk>
    <NavigationChunk :routerInfo="builtInRouterInfo">基础配置</NavigationChunk>
  </div>
</template>

<script>
const componentsContext = require.context( './components/', false, /.md$/)
const utilsContext = require.context( './utils/', false, /.md$/)
const visualContext = require.context( './visual/', false, /.md$/)
const builtInContext = require.context( './built-in/', false, /.md$/)
  
function routeInfo(context, folder) {
  const keys = context.keys()
  return keys.map(item => {
    const fileName = item.split('/')[1].split('.')[0]
    const path = `./${folder}/${fileName}.html`
    return { path, fileName }
  })
}

export default {
  name: "VueElementAdminDocument",
  data () {
    return {
      componentsRouterInfo: routeInfo(componentsContext, 'components'),
      utilsRouterInfo: routeInfo(utilsContext, 'utils'),
      visualRouterInfo: routeInfo(visualContext, 'visual'),
      builtInRouterInfo: routeInfo(builtInContext, 'builtIn'),
    }
  },
  created () {
    console.log(componentsContext)
  }
}
</script>
