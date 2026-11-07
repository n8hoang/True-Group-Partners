import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // forward form submissions to the Express server during `npm run dev`
    proxy: {
      '/send-message': 'http://localhost:3001',
      '/send-employment': 'http://localhost:3001',
      '/api': 'http://localhost:3001',
    },
  },
})
