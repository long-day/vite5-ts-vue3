import { createRouter, createWebHistory } from 'vue-router';

import AppRouter from './routes/app.ts';
import NotFindRouter from './routes/not-find.ts';

const router = createRouter({
  history: createWebHistory(),
  routes: [AppRouter, NotFindRouter],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
