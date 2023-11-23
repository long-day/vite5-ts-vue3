import router from "..";

router.beforeEach((to, _, next) => {
  // 全局路由钩子 前置
  if (to.meta.title) {
    document.title = to.meta.title + "";
  } else {
    // 如果页面没有附件页面标题值,则采用默认值.
    document.title = "(●'◡'●)标题跑丢了···";
  }
  next();
});
