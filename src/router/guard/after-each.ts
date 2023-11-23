import router from "..";
import { useAppStore, storeToRefs } from "@/store";

router.afterEach((to) => {
  // 全局路由钩子 后置
  const appStore = useAppStore();
  const { topMenuSelectedKeys } = storeToRefs(appStore);
  topMenuSelectedKeys.value = [to.fullPath.match(/\/([^/?]+)/)?.[1] ?? ""];
  console.log(to.fullPath);
});
