import { loadEnv } from 'vite'
const envScript = (process.env as any).npm_lifecycle_script.split(' ')
const envName = envScript[envScript.length - 1]
const envData = loadEnv(envName, 'env')

export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true
  },
  runtimeConfig: {
    public: envData
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@pinia/nuxt'],
  vite: {
    envDir: 'env'
  },
  css: ['element-plus/dist/index.css'],
  build: {
    transpile: ['element-plus/es']
  },
  i18n: {
    langDir: 'locales',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json'
      },
      {
        code: 'zh-tw',
        iso: 'zh-TW',
        file: 'zh-tw.json'
      },
      {
        code: 'zh-tw',
        iso: 'zh-TW',
        file: 'zh-cn.json'
      }
    ],
    defaultLocale: 'zh-tw',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  }
})
