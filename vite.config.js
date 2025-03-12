import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/ PAGINA DI CONFIGURAZIONE DI REACT E TAILWIND

export default defineConfig({
  plugins: [react(),tailwindcss(),],
})
