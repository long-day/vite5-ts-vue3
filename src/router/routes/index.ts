// @desc: 默认导出所有routes目录及其子目录下的所有ts文件导出的路由配置

import type { RouteRecordRaw } from 'vue-router';

const allModules = import.meta.glob('./**/*.ts', { eager: true });

/**
 *
 * @param _modules 入参 格式为 map(path:export_object)
 * @param result  出参
 * @returns RouteRecordRaw[]
 */
function formatModules(_modules: any, result: RouteRecordRaw[] = []) {
  Object.keys(_modules).forEach((key) => {
    const defaultModule = _modules[key].default;
    if (!defaultModule) {
      return;
    }
    const moduleList = Array.isArray(defaultModule)
      ? defaultModule
      : [defaultModule];
    result.push(...moduleList);
  });
  return result;
}

export const allRoutes: RouteRecordRaw[] = formatModules(allModules);
