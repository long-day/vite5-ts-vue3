import type { RouteRecordRaw } from 'vue-router';

const NotFound: RouteRecordRaw = {
  name: 'NotFound',
  path: '/:catchAll(.*)',
  component: () => import('@/views/static/NotFound.vue'),
  meta: {
    title: '未找到页面',
    requiresAuth: false,
  },
};

export default NotFound;
