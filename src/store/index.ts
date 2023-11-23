import { createPinia, storeToRefs } from "pinia";
import useDictStore from "./modules/dict";
import useLoginStore from "./modules/login";
import useAppStore from "./modules/app/index";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
export { storeToRefs, useDictStore, useLoginStore, useAppStore };
export default pinia;
