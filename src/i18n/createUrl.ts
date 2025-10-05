import type { Locale } from 'next-intl'
import { getPathname } from '@/i18n/navigation'
import { URL } from '@/variables/url'
import { defaultLocale } from '@/i18n/constants'

export type Href = Parameters<typeof getPathname>[0]['href']

export interface UrlArgs {
  locale: Locale
  href: Href
}

export const createUrl = ({ locale, href }: UrlArgs): string => {
  const pathname = getPathname({ locale, href })
  return `https://${URL}${pathname}`
}

export interface CanonicalUrlArgs {
  locale: string
  name: string
}

export const createCanonicalUrl = ({ locale, name }: CanonicalUrlArgs): string => {
  if (locale === defaultLocale) {
    return `https://${URL}/recipe/${name}`
  }
  return `https://${URL}/${locale}/recipe/${name}`
}
