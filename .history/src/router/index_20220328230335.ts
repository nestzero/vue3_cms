import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import type {}


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => ("@/views/home/Home")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
