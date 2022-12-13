import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    environment: "jsdom",
    reporters: ["verbose", "junit"],
    outputFile: "build/js-test-results/test-results.xml",
  },
})
