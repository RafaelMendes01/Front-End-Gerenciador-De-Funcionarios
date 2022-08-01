import { createApp } from 'vue'
import ConfirmationService from 'primevue/confirmationservice';
import Avatar from 'primevue/avatar';
import ToastService from 'primevue/toastservice';
import App from './App.vue';
import Router from '@/Router';
import Store from '@/Store';
import Dropdown from 'primevue/dropdown';
import PrimeVue from'primevue/config';
import InputText from 'primevue/inputtext';
import Sidebar from 'primevue/sidebar';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ConfirmDialog from 'primevue/confirmdialog';
import Toast from 'primevue/toast';
import Tooltip from 'primevue/tooltip';
import Menu from 'primevue/menu';
import Password from 'primevue/password';
import 'bootstrap/dist/css/bootstrap.css'
import '/node_modules/primeflex/primeflex.css'
import 'primevue/resources/themes/lara-dark-purple/theme.css'     
import 'primevue/resources/primevue.min.css'                 
import 'primeicons/primeicons.css'

const app = createApp(App)
app.use(PrimeVue,  {ripple: true})
app.use(ConfirmationService)
app.use(ToastService)
app.use(Router)
app.use(Store)
app.component('InputText', InputText)
app.component('SideBar', Sidebar)
app.component('BtnButton', Button)
app.component('DataTable', DataTable)
app.component('PColumn', Column)
app.component('ConfirmDialog', ConfirmDialog)
app.component('PToast', Toast)
app.component('PDropdown', Dropdown)
app.component('BAvatar', Avatar)
app.component('BMenu', Menu)
app.component('PPassword', Password)
app.directive('tooltip', Tooltip)

app.mount('#app')

