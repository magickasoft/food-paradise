import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Geist, Geist_Mono } from 'next/font/google'
import { notFound } from 'next/navigation'
import { hasLocale, NextIntlClientProvider } from 'next-intl'

import { getMessages, setRequestLocale } from 'next-intl/server'
import { YandexMetricaProvider } from '@artginzburg/next-ym'
import { routing } from '@/i18n/routing'
import { Header } from '@/components/Header'
import { Footer } from '@/components/footer'
import { YANDEX_METRICA_ID } from '@/public_variables'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Food-paradise — вкусные рецепты на каждый день',
  description:
    'Food-paradise — сайт с простыми и вкусными рецептами на каждый день. Завтраки, обеды, ужины, десерты и напитки — готовьте с удовольствием!',
  keywords: [
    'рецепты',
    'кулинария',
    'готовим дома',
    'домашняя еда',
    'пошаговые рецепты',
    'рецепты с фото',
    'рецепты с видео',
    'простые рецепты',
    'быстрые рецепты',
    'завтраки',
    'обеды',
    'ужины',
    'десерты',
    'закуски',
    'напитки',
    'праздничные блюда',
    'диетические блюда',
    'кулинарные лайфхаки',
    'вкусные рецепты',
    'food-paradise',
  ].join(', '),
}

export interface LocaleLayoutProps {
  children: ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }))
}

export default async function LocaleLayout({ children, params }: Readonly<LocaleLayoutProps>) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) notFound()

  setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="max-image-preview:large" />
        <meta name="yandex-verification" content="2e7fe2a2d1794de6" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <YandexMetricaProvider tagID={YANDEX_METRICA_ID}>
            <Header />
            {children}
            <Footer />
          </YandexMetricaProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
