//main.js是入口文件
import Vue from 'vue'
import App from './App.vue'
//router是路由配置，在router.js
import router from './router'
import store from './store'
/**
 * 将静态文件reset.css引入到项目入口
 * 不能放到index.html里
 */
import './assets/styles/reset.css'
/**
 * border.css 解决移动端1像素边框解决方案
 * 可以看6-5.html笔记
 */
import './assets/styles/border.css'
/**
 * 引入fastclick解决移动端单击延迟300毫秒的问题
 * attach()方法绑定到document页面中
 */
import fastClick from 'fastclick'
fastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  /********************路由*****************
   * 可以这样理解：
   * 路由就是根据网址的不同，返回不同的url内容给用户
   * 跟App局部组建一样：router:router
   * es6写法
   */
  router,
  store,
  /**
   * 项目里用到了局部组件，叫APP
   * 最外部调用的时候，也叫APP
   * 完整：
   * render: h => h(App:App)
   * 在es6里，如果键值一样，只需要写一个就OK
   * 然后在render渲染APP局部组件
   * APP局部组建在 ./App.vue
   * 项目名以 .vue 结尾的时候，叫单文件组件
   */
  render: h => h(App)
  /*挂在到 public/index.html 中的app的div元素*/
}).$mount('#app')
