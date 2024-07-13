import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {
      VITE_APP_EMAILJS_SERVICE_ID: JSON.stringify(
        process.env.VITE_APP_EMAILJS_SERVICE_ID
      ),
      VITE_APP_EMAILJS_TEMPLATE_ID: JSON.stringify(
        process.env.VITE_APP_EMAILJS_TEMPLATE_ID
      ),
      VITE_APP_EMAILJS_PUBLIC_KEY: JSON.stringify(
        process.env.VITE_APP_EMAILJS_PUBLIC_KEY
      ),
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
})
