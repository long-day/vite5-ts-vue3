import { defineStore } from "pinia";
import { ref } from "vue";
// import defaultSettings from '@/configs/default/config.json';
import appDefaultSetting from "@/configs/app-default.ts";
import { AppState } from "./types";

const useAppStore = defineStore(
  "app",
  () => {
    // 状态变量
    const appConfig = ref<AppState>({ ...appDefaultSetting, appInfos: {} });
    const topMenuSelectedKeys = ref<string[]>([]);

    // 计算属性

    // 普通方法

    // 需要暴露出去的东西
    return { appConfig, topMenuSelectedKeys };
  },
  {
    persist: {
      key: "appConfig",
      storage: localStorage,
    },
  }
);

export default useAppStore;
