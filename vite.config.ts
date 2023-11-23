import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// for ArcoDesign
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ArcoResolver } from 'unplugin-vue-components/resolvers';
import { vitePluginForArco } from '@arco-plugins/vite-vue';

// for Vue组件@引用
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ArcoResolver()],
    }),
    Components({
      resolvers: [
        ArcoResolver({
          sideEffect: true,
        }),
      ],
    }),
    vitePluginForArco({
      style: 'css',
    }),
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
