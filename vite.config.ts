import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Thêm dòng này

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: { // Thêm khối này
    alias: {
      '@reown/appkit/styles': path.resolve(__dirname, 'node_modules/@reown/appkit/dist/styles.css'),
    }
  }
})