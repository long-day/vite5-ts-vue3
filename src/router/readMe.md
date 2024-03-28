# 关于路由

路由守卫管理于`guard`目录、路由管理于`routes`目录。总路由在`@/router/index.ts`之中。总路由中只添加了AppRouter`(@/router/routes/app.ts)`, NotFindRouter`(@/router/routes/not-find.ts)`两个模块。其中NotFindRouter是用于兜底的路由，所有的非法路由导航都将会到达这里。AppRouter是所有的正常业务路由配置。AppRouter中的配置主要取决于App.vue的情况(其中的`RouterView`的情况)。AppRouter会导入`(@/router/routes/modules/expose.ts)`导出的路由配置信息。

## 关于`@/router/routes/modules/expose.ts`

`@/router/routes/modules/expose.ts`会自动收集所有modules目录下的导出信息。文件默认导出的路由会被认为是静态路由，这些路由无需任何权限，随便进入。文件非默认导出的配置信息会被任务是需要权限才可访问的路由。根据相应规则进行动态添加。

### 动态路由自动收集应当遵循的规则

- 导出对象的名称(如示例：`ROLE_ADVERTISER`)需要是角色管理常量对象`(@/enums/auth/role.ts#AUTH_ROLES)`的key。

### 动态路由判定添加的规则

- 使用导出文件名(如示例：`ROLE_ADVERTISER`)获取对应的角色信息，将其于用户所拥有的角色信息通过`@/`进行比对。

示例:

```typescript
// SomeRouter.ts
import type { RouteRecordRaw } from 'vue-router';
// ROLE_ADVERTISER 为角色常量池中的一个值
const ROLE_ADVERTISER: RouteRecordRaw = {
  name: 'Name',
  path: '/path',
  component: () => import('@/path/to/SomeView.vue'),
  meta: {
    title: 'Title',
    requiresAuth: true,
  },
};
export { ROLE_ADVERTISER };

// 角色常量池 role.ts (简略)

export const AUTH_ROLES: AuthEnumPool = {
  ROLE_ADVERTISER: {
    id: 10,
    guid: 0x1, // 0b0000_0000_0000_0000_0000_0000_0000_0001
    key: 'ADVERTISER',
    text: '广告主',
  },
  ROLE_DEVELOPER: {
    id: 0,
    guid: 0x2, // 0b0000_0000_0000_0000_0000_0000_0000_0010
    key: 'DEVELOPER',
    text: '开发者',
  },
  ROLE_ADMIN: {
    id: 20,
    guid: 0xffffffff, // 0b1111_1111_1111_1111_1111_1111_1111_1111
    key: 'ADMIN',
    text: '超管',
  },
};
```

```t

```

## 静态路由
