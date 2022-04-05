import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


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
