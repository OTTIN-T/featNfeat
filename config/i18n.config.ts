import en from '~/i18n/en.json'
import fr from '~/i18n/fr.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locales: ['fr', 'en'],
  defaultLocale: 'fr',
  locale: 'fr',
  fallbackLocale: 'en',
  globalInjection: true,
  messages: {
    fr,
    en,
  },
}))
