import { createApp } from 'vue'
import App from './App.vue'
import Router from '@/Router'
import Store from '@/Store'
import PrimeVue from'primevue/config';
import InputText from 'primevue/inputtext';
import Sidebar from 'primevue/sidebar';
import Button from 'primevue/button';
import 'bootstrap/dist/css/bootstrap.css'
import '/node_modules/primeflex/primeflex.css'
import 'primevue/resources/themes/lara-dark-purple/theme.css'     
import 'primevue/resources/primevue.min.css'                 
import 'primeicons/primeicons.css'

const app = createApp(App)
app.use(PrimeVue)
app.use(Router)
app.use(Store)
app.component('InputText', InputText)
app.component('SideBar', Sidebar)
app.component('BtnButton', Button)

app.mount('#app')

