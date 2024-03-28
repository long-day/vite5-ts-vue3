import router from '../index.ts';
import RouteLocationNormalized from 'vue-router';
// import { useLoginStore } from '@/store';
// 全局路由钩子 前置
router.beforeEach((to, _from, next) => {
  if (isRedirectToLogin(to)) {
    next({ path: '/login' });
  } else {
    setPageTitle(to);
    next();
  }
});

/**
 * 是否跳转登录页面
 * @param to 要去往的路由页面
 */
const isRedirectToLogin = (
  to: RouteLocationNormalized.RouteLocationNormalized,
) => {
  // 登录路由直接放行,防止路由无限递归
  if (to.path === '/login') {
    return false;
  }

  // const isLogin = useLoginStore().isLogin();
  const isLogin = true;
  if (to.meta.requiresAuth) {
    return !isLogin;
  } else {
    if (to.name === 'NotFound' && !isLogin) {
      return true;
    }
    return false;
  }
};

const setPageTitle = (to: RouteLocationNormalized.RouteLocationNormalized) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    // 如果页面没有附件页面标题值,则采用默认值.
    document.title = "(●'◡'●)标题跑丢了···";
  }
};
