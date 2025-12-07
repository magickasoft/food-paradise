import type { MetadataRoute } from 'next'
import { URL } from '@/public_variables'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*', '/_next/*'],
      },
    ],
    sitemap: [`https://${URL}/sitemap.xml`],
  }
}
