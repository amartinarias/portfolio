import './assets/styles/main.css'
import './assets/styles/variables.css'

import { createApp } from 'vue'
import App from './views/App.vue'

createApp(App).mount('#app')

// router.js 
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./views/App.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { top: 0 }
    }
})

export default router
