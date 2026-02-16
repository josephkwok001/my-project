import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-project/', // required for GitHub Pages (site is at username.github.io/my-project/)
})
