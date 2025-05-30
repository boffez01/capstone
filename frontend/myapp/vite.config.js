import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/styles/main.scss";`
      }
    }
  },
  server: {
    proxy: {
      "/api": { 
        target: "http://localhost:8080/", 
        changeOrigin: true, 
      },
    },
  },
});