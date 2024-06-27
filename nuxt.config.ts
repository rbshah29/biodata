import type { Config } from 'tailwindcss'

export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {
        content: [
          "./components/**/*.{js,vue,ts}",
          "./layouts/**/*.vue",
          "./pages/**/*.vue",
          "./plugins/**/*.{js,ts}",
          "./nuxt.config.{js,ts}",
          "./app.vue",
        ],
        theme: {
          extend: {},
        },
        plugins: [],
      } as Partial<Config>,
      autoprefixer: {},
    },
  },
})