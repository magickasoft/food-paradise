import { defineRouting } from 'next-intl/routing'
import { locales, defaultLocale } from '@/i18n/constants'
import { pathnames } from '@/i18n/paths'

export const routing = defineRouting({
  localePrefix: 'as-needed',
  locales,
  defaultLocale,
  pathnames,
})
