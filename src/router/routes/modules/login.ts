import type { RouteRecordRaw } from 'vue-router';

const Login: RouteRecordRaw = {
  name: 'Login',
  path: '/login',
  component: () => import('@/components/HelloWorld.vue'),
  meta: {
    title: '登录账号',
    requiresAuth: false,
  },
};

export default Login;
