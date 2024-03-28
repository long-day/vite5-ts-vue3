import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// for auto import
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
// for and design
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
// for Vue组件@引用
import { resolve } from 'path';

// for unocss
import UnoCSS from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 56688,
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [AntDesignVueResolver()],
    }),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
    UnoCSS(),
  ],

  resolve: {
    // 设置文件./src路径为 @
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      },
    ],
  },

  css: {
    devSourcemap: true, // 开启 css 的sourceMap（文件索引）
    /* CSS 预处理器 */
    preprocessorOptions: {
      less: {
        // math: 'always',
        // charset: false,
        modifyVars: {
          'primary-color': '#2186FB',
          // 配置我们定义的less样式变量
          'hack': `true; @import "/src/styles/variable.less";`,
        },
        javascriptEnabled: true,
      },
    },
  },
});
