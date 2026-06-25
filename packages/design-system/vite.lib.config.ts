import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// Library-bygge: paketerar komponenterna till dist/ för konsumtion i appar.
// React hålls externt (peer dependency) så appen använder sin egen React.
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: () => 'index.js',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        // Samlad CSS-fil: dist/npa-design-system.css
        assetFileNames: 'npa-design-system.[ext]',
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
})
