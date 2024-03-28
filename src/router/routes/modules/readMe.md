# 描述

注意事项: 动态路由的加载应当交给登录管理器(LoginStore)来管理.因为只有在登录后才能得知这个用户拥有何种权限.

当前目录用于存放所有的业务路由,默认规则如下:

- 静态导出模块使用`ROLE_NONE[_路由名]`形式的导出名
  如:

  ```typescript
  export { ROLE_NONE };
  ```

- 需要权限才能加载的模块使用`ROLE_权限名[_路由名]`形式导出名
  如:

  ```typescript
  export { ROLE_ADMID };
  ```
