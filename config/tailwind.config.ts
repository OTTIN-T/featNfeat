import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>> {
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      default: ['Montserrat', 'sans-serif'],
    },
  },
}
