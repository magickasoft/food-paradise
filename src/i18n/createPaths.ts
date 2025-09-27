import { locales } from '@/i18n/constants'

export type Paths = {
  [locale: string]: string
}

export const createPaths = (path: string): Paths => Object.fromEntries(locales.map(locale => [locale, path]))
