import { defineConfig, splitVendorChunkPlugin as vendor } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), vendor()],
  resolve: { alias: { '@': '/src' } },
  server: { port: 3000 },
  test: {
    watch: false,
    environment: 'jsdom',
    include: ['./src/**/*.test.ts', './src/**/*.test.tsx'],
    setupFilesAfterEnv: ['./tests/setup-tests.ts'],
    coverage: {
      all: true,
      reporter: ['cobertura', 'lcov', 'text'],
      include: [
        'src/**/*.ts',
        'src/**/*.tsx',
        '!tests/**/*',
        '!**/mocks/**/*.ts',
        '!**/mocks/**/*.tsx',
        '!**/constants.ts',
        '!**/messages.ts',
      ],
    },
  },
})
