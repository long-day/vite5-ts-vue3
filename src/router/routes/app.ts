import type { RouteRecordRaw } from 'vue-router';
import { ModuleRouter } from './modules/expose.ts';

const App: RouteRecordRaw = {
  name: 'App',
  path: '/',
  redirect: '/login',
  meta: {
    requiresAuth: false,
  },
  children: [...ModuleRouter],
};

export default App;
