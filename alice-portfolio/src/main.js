import './assets/styles/main.css'
import './assets/styles/variables.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Import the router

// Use the router when creating the app
createApp(App)
    .use(router) // This line is crucial!
    .mount('#app')