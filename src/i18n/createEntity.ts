import { createUrl } from '@/i18n/createUrl'
import type { UrlArgs } from '@/i18n/createUrl'
import { createLanguages } from '@/i18n/createLanguages'

export const createEntity = ({ locale, href }: UrlArgs) => {
  const url = createUrl({ locale, href })
  const languages = createLanguages(href)
  return {
    url,
    lastModified: new Date().toISOString().split('T')[0],
    priority: 0.8,
    images: [],
    videos: [],
    alternates: {
      languages,
    },
  }
}
