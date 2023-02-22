import * as path from 'path';
import typescript2 from 'rollup-plugin-typescript2';
import dts from 'vite-plugin-dts';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssCodeSplit: true,
    lib: {
      entry: "src/components/index.ts",
      name: 'ua-elements-vue',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `ua-elements-vue.${format}.ts`
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "src/components/index.ts")
      },
      external: ["vue"],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'main.css') return 'ua-elements-vue.css';
          return assetInfo.name as string;
        },
        exports: "named",
        globals: {
          vue: 'Vue',
        },
      },
    }
  },
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
    typescript2({
      check: false,
      include: ["src/components/**/*.vue"],
      tsconfigOverride: {
        compilerOptions: {
          outDir: "dist",
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
      },
      exclude: ["vite.config.ts"]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  }
})
