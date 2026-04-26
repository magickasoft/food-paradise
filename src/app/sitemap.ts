import type { MetadataRoute } from 'next'
import { paths } from '@/i18n/paths'
import type { Href } from '@/i18n/createUrl'
import { createEntity } from '@/i18n/createEntity'
import { locales } from '@/i18n/constants'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const values = Object.values(paths)

  return values.flatMap(obj => locales.flatMap(locale => createEntity({ locale, href: obj[locale] as Href })))
}
