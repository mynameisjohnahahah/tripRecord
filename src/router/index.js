import Vue from 'vue'
import Router from 'vue-router'
// import store from '../store/index.js'
import { Toast } from 'mand-mobile'
import Test from './moudle/test'
import Trip from './moudle/trip'
import User from './moudle/user'
import History from './moudle/history'

Vue.use(Router)

const commonRoutes = [
  { path: '/404', component: () => import('components/RouterError/404') },
  { path: '/401', component: () => import('components/RouterError/401') },
  { path: '*', redirect: '/404' },
  {
    path: '/',
    redirect: '/trip'
  }
]

/** 分模块的路由，合并传入Router */
let router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: commonRoutes.concat(Test, Trip, User, History)
})
export default router
