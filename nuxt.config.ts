import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/google-fonts'],
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-regular-svg-icons',
      '@fortawesome/free-brands-svg-icons',
    ],
  },
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],
  eslint: {
    config: {
      standalone: true,
      stylistic: true,
    },
  },
  googleFonts: {
    families: {
      Chivo: true,
      download: true,
      inject: true,
    },
  },
})
