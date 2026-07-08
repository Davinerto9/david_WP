import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/david_WP/',
  plugins: [react()],
  build: { //performance solution for a huge javascript chunk 500kb(1.12 MB rendered) down to individual file division
    rollupOptions: {
      output: {
        manualChunks(id){
          if(id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')){
            return 'react-core'
          }

          if(id.includes('node_modules')){
            return 'vendor'
          }
        }
      }
    }
  }
})
