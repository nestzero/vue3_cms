import { createRouter, createWebHashHistory} from 'vue-router'
import { RouteRecordRaw } from 'vue-router'


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => ("@/views/home")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router