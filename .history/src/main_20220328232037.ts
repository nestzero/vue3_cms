import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { globalRegister } from './global'

// 注册element-plus/其他
app.use(globalRegister)

createApp(App).use(store).use(router).mount('#app')
