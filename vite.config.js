import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    base: "/min-portfolio/", // 여기에 Repository 경로를 추가
})
