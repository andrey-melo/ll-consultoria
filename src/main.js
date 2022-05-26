import { createApp, VueElement } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import App from './App.vue'
import mitt from 'mitt'
import './index.css'



const router = createRouter({
    routes,
    history: createWebHistory()
})

const app = createApp(App)
const emitter = mitt()
app.config.globalProperties.emitter = emitter;

app.use(router)
app.mount('#app')