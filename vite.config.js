import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ai: resolve(__dirname, 'ai/index.html'),
        medtech: resolve(__dirname, 'medtech/index.html'),
        fullstack: resolve(__dirname, 'fullstack/index.html'),
        services: resolve(__dirname, 'services/index.html'),
        collaborate: resolve(__dirname, 'collaborate/index.html'),
        aiWorkflow: resolve(__dirname, 'ai-workflow/index.html'),
        orIntegration: resolve(__dirname, 'proof-of-work/or-integration/index.html'),
        clinicalEvidenceWorkflow: resolve(__dirname, 'medtech-ai-systems/clinical-evidence-workflow/index.html'),
      },
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
  },
})
