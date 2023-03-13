import { resolve } from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    root: 'src',
    publicDir: "../public",
    build: {
        outDir: '../dist',
        rollupOptions: {
            input: {
                popup: resolve('src', 'popup.html'),
                content: resolve('src', 'content.js'),
            },
            output: {
                entryFileNames: `assets/[name].js`,
                chunkFileNames: `assets/[name].js`,
                assetFileNames: `assets/[name].[ext]`
            }
        }
    }
})
