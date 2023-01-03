import { createApp } from 'vue';
import './assets/style.css';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from '@/../router';

const app = createApp(App);
app.mount('#app');

app.use(ElementPlus);
app.use(router);
