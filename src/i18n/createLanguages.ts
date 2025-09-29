import { locales } from '@/i18n/constants'
import { createUrl } from '@/i18n/createUrl'
import type { Href } from '@/i18n/createUrl'
import type { Paths } from '@/i18n/createPaths'

export const createLanguages = (href: Href): Paths =>
  Object.fromEntries(locales.map(locale => [locale, createUrl({ locale, href })]))
