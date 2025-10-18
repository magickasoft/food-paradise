import type { Locale } from 'next-intl'
import { getPathname } from '@/i18n/navigation'
import { URL } from '@/variables'

export type Href = Parameters<typeof getPathname>[0]['href']

export interface UrlArgs {
  locale: Locale
  href: Href
}

export const createUrl = ({ locale, href }: UrlArgs): string => {
  const pathname = getPathname({ locale, href })
  return `https://${URL}${pathname}`
}
