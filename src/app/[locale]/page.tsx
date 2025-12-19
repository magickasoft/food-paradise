import { setRequestLocale } from 'next-intl/server'
import type { Locale } from 'next-intl'
import { locales } from '@/i18n/constants'

import { use } from 'react'
import { SeasonalCategories } from '@/components/SeasonalCategories'
import { PopularCategories } from '@/components/PopularCategories'

type Props = {
  params: Promise<{ locale: Locale }>
}

export async function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

export default function IndexPage({ params }: Props) {
  const { locale } = use(params)

  setRequestLocale(locale)

  return (
    <>
      <SeasonalCategories />
      <PopularCategories />
    </>
  )
}
