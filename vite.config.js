import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración para Vercel
export default defineConfig({
  plugins: [react()],
})
