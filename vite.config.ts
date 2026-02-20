import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@app': resolve(__dirname, 'src/app'),
      '@theme': resolve(__dirname, 'src/theme'),
      '@routes': resolve(__dirname, 'src/routes'),
      '@api': resolve(__dirname, 'src/api'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@layouts': resolve(__dirname, 'src/layouts'),
      '@i18n': resolve(__dirname, 'src/i18n'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@ui': resolve(__dirname, 'src/ui'),
      '@services': resolve(__dirname, 'src/services'),
      '@components': resolve(__dirname, 'src/components'),
      '@store': resolve(__dirname, 'src/store'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@features': resolve(__dirname, 'src/features'),
      '@constants': resolve(__dirname, 'src/constants'),
      '@lib': resolve(__dirname, 'src/lib'),
      '@interfaces': resolve(__dirname, 'src/interfaces'),
    },
  },
})
