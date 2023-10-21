import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    open: true,
    cors: true,
    proxy: {
      '/api': {
        target: "http://codercba.com:9000",
        changeOrigin: true,//开启跨域
        rewrite: path => path.replace(/^\/api/, ''),//去除前缀api

      }
    }
  }
})
