import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/importados28-7/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
