import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: require('@/components/login').default
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/menus',
      name: 'menus',
      component: require('@/components/menus').default
    },
  ]
})
