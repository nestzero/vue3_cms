import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
   path:'/',
   redirect:'/home'
  },
  {
    path:'/home',
    com
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
