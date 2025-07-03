import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base:'/codeify/',
  build: {
    chunkSizeWarningLimit: 1000, // Increase from 500KB to 1000KB
  }
  
})
