import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tsconfigPaths from 'vite-tsconfig-paths';
import {extname} from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  build:{
    rollupOptions:{
      output:{
        entryFileNames: 'assets/wvn-drink.js',
      }
    }
  },
  experimental: {
    renderBuiltUrl(filename) {
      return `https://20.wavenet.be/${filename.replace('assets/', '')}`;
    },
  },
  plugins: [
    tsconfigPaths(),
    svelte({
      compilerOptions:{
        customElement: true,
      },
      emitCss:false,
    })
  ],
})
