// 平台无关， vue的核心代码入口

import Vue from './instance/index'
import { initGlobalAPI } from './global-api/index'
import { isServerRendering } from 'core/util/env'
import { FunctionalRenderContext } from 'core/vdom/create-functional-component'

// 定义Vue中的静态方法set, delete, nextTick, observable
// 定义vue.config
// 初始化Vue全局注册的components, filters, directives对象, 并注册keepalive对象
// 将Vue挂载在Vue.options._base上面
// 设置use, mixin, extend 静态方法
// use: 执行plugins.install或者plugin方法
// mixin: 将传入的mixin对象合并到Vue的全局options中
// extend: 生成渲染vue实例对象的构造函数
initGlobalAPI(Vue)

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
})

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
})

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
})

Vue.version = '__VERSION__'

export default Vue
