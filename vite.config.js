import { defineConfig } from 'vite'

export default defineConfig({
  base: '/play_widget/',
  build: {
    outDir: 'dist',      
    minify: false,        
    rollupOptions: {
      input: 'index.html',
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      }
    }
  }
})
