import type { RouteRecordRaw } from 'vue-router';

// @ts-ignore
const Test: RouteRecordRaw = {
  name: 'TestAxios',
  path: '/test',
  redirect: '/test/axios',
  children: [],
};

export { Test };
