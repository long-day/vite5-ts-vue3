import type { RouteRecordRaw } from 'vue-router';
import { CanMapIndexInterface } from '@/types/common/index.ts';

// 获取到当前文件夹下的所有ts文件
const CUR_DIR_ALL_MODULE = import.meta.glob<CanMapIndexInterface>('./**/*.ts', {
  eager: true,
});

// TODO 这里根据实际情况改变规则
// @ts-ignore
export function searchDynRouter(curUserRole: string | string[]) {
  const res: RouteRecordRaw[] = [];

  return res;
}

function searchStaticRouter() {
  const res: RouteRecordRaw[] = [];
  Object.values(CUR_DIR_ALL_MODULE).forEach((m) => {
    const dm = m['default'];
    if (!dm) {
      return;
    }
    Array.isArray(dm) ? res.push(...dm) : res.push(dm);
  });
  return res;
}

export const ModuleRouter: RouteRecordRaw[] = searchStaticRouter();
