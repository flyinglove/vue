import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'
// Vue构造函数
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

// 在Vue构造函数上挂载相关实例方法

// 挂载_init方法
// 将调用该方法的对象标记为vue对象， vm._isVue = true
// 将当前vue实例的option， vm构造函数的option, 以及当前vm合并之后作为当前vm的$options
// 设置vm._renderProxy
initMixin(Vue)
// $data, $props
// $set, $delete, $watch
stateMixin(Vue)
// 
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
