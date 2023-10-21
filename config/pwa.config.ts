/* eslint-disable import/order */
import type { ModuleOptions } from '@vite-pwa/nuxt'
import process from 'node:process'

export const pwa: ModuleOptions = {
  registerType: 'autoUpdate',
  includeAssets: ['favicon.ico'],
  client: {
    installPrompt: true,
  },
  useCredentials: true,
  manifest: {
    id: '/',
    name: 'featNfeat',
    short_name: 'featNfeat',
    lang: 'fr',
    description: 'Trouvez qui feat avec qui !',
    background_color: '#F3F6FC',
    theme_color: '#ffffff',
    orientation: 'landscape',
    protocol_handlers: [
      {
        protocol: 'web+tea',
        url: '/tea?type=%s',
      },
      {
        protocol: 'web+coffee',
        url: '/coffee?type=%s',
      },
    ],
    // https://tools.crawlink.com/tools/pwa-icon-generator/
    icons: [
      {
        src: 'pwa/icons/icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'pwa/icons/icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'pwa/icons/icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'pwa/icons/icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'pwa/icons/icon-128x128.png',
        sizes: '128x128',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'pwa/icons/icon-128x128.png',
        sizes: '128x128',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'pwa/icons/icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'pwa/icons/icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'pwa/icons/icon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'pwa/icons/icon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'pwa/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'pwa/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'pwa/icons/icon-384x384.png',
        sizes: '284x284',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'pwa/icons/icon-384x384.png',
        sizes: '284x284',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'pwa/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'pwa/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    screenshots: [
      {
        src: 'pwa/screenshot/mobile-1.png',
        type: 'image/png',
        sizes: '322x357',
        form_factor: 'narrow',
      },
      {
        src: 'pwa/screenshot/desktop-1.png',
        type: 'image/png',
        sizes: '1883x944',
        form_factor: 'wide',
      },
    ],
  },
  devOptions: {
    enabled: process.env.PWA_DEV_ENABLED === 'true',
  },
  workbox: {
    sourcemap: true,
    globPatterns: process.env.NODE_ENV_NUXT === 'development' ? [] : ['**/*.{js,css,html,png,jpg,svg,ico,webp}'],
  },
}
