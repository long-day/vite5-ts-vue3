import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import store from './store';
import router from './router';
import i18n from './locale';
import '@/utils/request';
// 路由守卫配置 先放这
import '@/router/guard/after-each.ts';
import '@/router/guard/before-each.ts';

// for unocss
import 'virtual:uno.css';
createApp(App).use(store).use(router).use(i18n).mount('#app');
