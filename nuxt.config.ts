// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['@/assets/scss/main.scss'],
  imports: {
    autoImport: true
  },
  features: {
    inlineStyles: false
  },

  ssr: true,

  modules: ['@nuxt/eslint', '@nuxt/icon'],
  nitro: {
    preset: 'node-server',
    serveStatic: true
  },

  routeRules: {
    '/**': {
      ssr: true,
      prerender: false
    }
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        'data-theme': 'light'
      }
    }
  },

  devServer: {
    https: false
  }
})
