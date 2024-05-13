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
  // experimental: {
  //   renderBuiltUrl(filename, { hostId, hostType, type }) {
  //     console.info({filename, hostId, hostType, type})
  //     if (type === 'public') {
  //       return 'https://www.domain.com/' + filename
  //     } else if (extname(hostId) === '.js') {
  //       return { runtime: `window.__assetsPath(${JSON.stringify(filename)})` }
  //     } else {
  //       return 'https://cdn.domain.com/assets/' + filename
  //     }
  //   },
  // },
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
