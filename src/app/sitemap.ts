import type { MetadataRoute } from 'next'
import type { Locale } from 'next-intl'
import { paths } from '@/i18n/paths'
import type { Href } from '@/i18n/createUrl'
import { createEntity } from '@/i18n/createEntity'

export default function sitemap(): MetadataRoute.Sitemap {
  const values = Object.values(paths)

  return values.flatMap(obj =>
    Object.entries(obj)
      .map(([locale, href]) => createEntity({ locale: locale as Locale, href: href as Href }))
      .flat(),
  )
}
