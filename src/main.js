import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//boostrap files
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

//Fonts CSS
import "@/assets/fonts/main.css"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
