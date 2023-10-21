import process from 'node:process'
import { pwa } from './config/pwa.config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  vue: {
    defineModel: true,
    propsDestructure: true,
  },
  googleFonts: {
    families: {
      Montserrat: true,
      Roboto: true,
    },
    display: 'swap',
  },
  vitest: {
    startOnBoot: false,
    logToConsole: true,
    vitestConfig: {
      config: '~/config/vitest.config.ts',
    },
  },
  site: {
    url: 'https://featnfeat.com',
    autoI18n: true,
    name: 'featNfeat',
    defaultLocale: 'fr',
    currentLocale: 'fr',
    identity: {
      type: 'Organization',
    },
    description: 'Trouvez qui feat avec qui !',
  },
  delayHydration: {
    debug: process.env.NODE_ENV_NUXT === 'development',
    mode: 'mount',
  },
  security: {
    headers: {
      crossOriginEmbedderPolicy: process.env.NODE_ENV === 'development' ? 'unsafe-none' : 'require-corp',
    },
  },
  pwa,
  ui: {
    global: true,
    icons: ['heroicons'],
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: '~/config/tailwind.config.ts',
  },
  i18n: {
    /* module options */
    vueI18n: '~/config/i18n.config.ts', // if you are using custom path, default
  },
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    'nuxt-vitest',
    'nuxt-simple-sitemap',
    'nuxt-schema-org',
    '@vite-pwa/nuxt',
    'nuxt-delay-hydration',
    '@nuxtjs/fontaine',
    'nuxt-security',
    'nuxt-simple-robots',
    'nuxt-og-image',
    // 'nuxt-link-checker',
    'nuxt-seo-experiments',
    '@nuxt/ui',
    '@nuxtjs/i18n',
  ],
})
