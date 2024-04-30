// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/google-fonts'
  ],
  eslint: {
    config: {
      standalone: true,
      stylistic: true ,
    },
  },
  googleFonts: {
    families: {
      Chivo: true,
      download: true,
      inject: true
    }
  }
})
