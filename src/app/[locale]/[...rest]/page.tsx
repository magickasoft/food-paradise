import { notFound } from 'next/navigation'
import { locales } from '@/i18n/constants'

export async function generateStaticParams() {
  return locales.map(locale => ({ locale, rest: [] }))
}

export default function CatchAllPage() {
  notFound()
}
