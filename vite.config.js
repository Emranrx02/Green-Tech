import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // ignore common editor/system files and build output so Vite doesn't restart repeatedly
    watch: {
      ignored: [
        '**/.DS_Store',
        '**/node_modules/**',
        '**/.git/**',
        'dist/**'
      ]
    }
  }
})
