import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/3practic4sem/tree/gh-pages",
  plugins: [react()],
})
