import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio/', // ✅ Correct for GitHub Pages repo named 'Portfolio'
  plugins: [react()],
})
