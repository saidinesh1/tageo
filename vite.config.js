import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  server:{
    allowedHosts:['affb05d37bcf.ngrok-free.app ']
  }
})
