import type { RouteRecordRaw } from 'vue-router';

const Root: RouteRecordRaw = {
    name: 'Root',
    path: '/',
    redirect: '/login',
    meta: {
        requiresAuth: false,
    }
}

export default Root;