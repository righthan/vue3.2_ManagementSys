import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import '@/styles/index.scss'
import '@/mock/login'
import '@/mock/menus'
import '@/mock/users'
import store from './store'
import '@/router/permission'
import * as ELIcons from '@element-plus/icons-vue'
import i18n from '@/i18n'
import filters from './utils/filters'

const app = createApp(App)

// 注册图标组件
for (const iconName in ELIcons) {
    app.component(iconName, ELIcons[iconName])
}

filters(app)

app.use(router)
app.use(store)
app.use(i18n)

app.mount('#app')
