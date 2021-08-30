import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"

// axios.defaults.baseURL = 'http://localhost:8000/api/'
axios.defaults.baseURL = 'https://stud.vv.si//api/'
createApp(App).use(router).mount('#app')
