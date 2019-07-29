import Vue from 'vue'
import Router from 'vue-router'
//把 Home.vue 组件导入到路由中
import Home from './views/Home.vue'
//把 List.vue 组件导入到路由中
import List from './views/list/List.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      /**
       * 当访问根目录的时候，返回的是 Home 组件
       * 可以去 Home.vue 查看
       */
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //如果不想在头文件中导入组件，就可以按照下面方式导入组件
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      /**
       * 当访问 List 组件添加路由
       * 可以去 ./views/list/List.vue 查看
       * 这里的list是测试，与项目无关
       */
      path: '/list',
      name: 'list',
      component: List
    }
  ]
})
