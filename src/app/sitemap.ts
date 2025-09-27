import type { MetadataRoute } from 'next'
import { paths } from '@/i18n/paths'
import { locales } from '@/i18n/constants'
import { createUrl } from '@/i18n/createUrl'
import type { Href } from '@/i18n/createUrl'
import type { Locale } from 'next-intl'

export default function sitemap(): MetadataRoute.Sitemap {
  const values = Object.values(paths)

  return values.flatMap(obj =>
    Object.entries(obj)
      .map(([locale, href]) => ({
        url: createUrl({
          locale: locale as Locale,
          href: href as Href,
        }),
        lastModified: new Date().toISOString().split('T')[0],
        priority: 0.8,
        images: [],
        videos: [],
        alternates: {
          languages: Object.fromEntries(
            locales.map(cur => [
              cur,
              createUrl({
                locale: cur,
                href: href as Href,
              }),
            ]),
          ),
        },
      }))
      .flat(),
  )
}
