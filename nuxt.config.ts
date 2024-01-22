import { loadEnv } from 'vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const envScript = (process.env as any).npm_lifecycle_script.split(' ')
const envName = envScript[envScript.length - 1]
const envData = loadEnv(envName, 'env')

export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true
  },
  devServer: {
    port: 9527, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  runtimeConfig: {
    public: envData
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@pinia/nuxt'],
  vite: {
    envDir: 'env',
    plugins: [
      Components({
        dts: true,
        resolvers: [ElementPlusResolver()]
      })
    ]
  },
  build: {
    transpile: ['element-plus/es']
  },
  css: ['element-plus/dist/index.css'],
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
