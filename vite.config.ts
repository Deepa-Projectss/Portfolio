import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio/', // 👈 Set to your GitHub repo name
  plugins: [react()],
})
