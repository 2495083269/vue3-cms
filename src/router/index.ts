import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

import LocalCache from '@/utils/cache'
import { mapMenusToRouter } from '@/utils/map-menus'
import { menuData } from '@/utils/menuData'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main', // 路由重定向
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/main',
    name: 'mian',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/main/main.vue'),
    // 动态添加路由
    // children: [{
    //   path: '/systemOverview/overView',
    //   name: 'overView',
    //   component: () => import('../views/main/systemOverview/overView.vue')
    // }]
  },
  // 路径错误的提示页面
  {
    path: '/:pahtMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/not-found/not-found.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 前置路由守卫
router.beforeEach((to) => {
  if (to.path !== '/login') {
    // 没有token则跳转到登录页
    const token = LocalCache.getCache('token') ?? ''
    if (!token) {
      console.log("没有token跳转到登录页")
      return '/login'
    }
  }
})

// 进行配置路由
const route = mapMenusToRouter(menuData)
route.forEach(item => {
  router.addRoute('amin',item)
})

console.log("获取到的路径",router)

export default router
