import App from './App.vue';
import { createApp } from 'vue';
import store from './store.js';

const app = createApp(App);
app.use(store);

app.mount('#app');
