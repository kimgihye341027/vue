import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 라우터 불러오기
//createApp(App).mount('#app')
const app = createApp(App)
app.mount("#app")
app.use(router)
