import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const isDevelopment = process.env.NODE_ENV === 'development'

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: './messages/ru.json',
  },
})

const config: NextConfig = {
  // Включаем статический экспорт
  output: 'export',
  // Опциональные настройки для чистых URL
  trailingSlash: true, // @5
  // Отключаем оптимизацию изображений для статического экспорта
  images: {
    unoptimized: true, // @5
  },

  reactStrictMode: true,
  compiler: {
    removeConsole: !isDevelopment ? { exclude: ['error', 'warn'] } : false,
    reactRemoveProperties: { properties: ['^data-test$'] },
    styledComponents: {
      ssr: false,
      displayName: isDevelopment,
      minify: true,
    },
  },
  // onDemandEntries несовместим со статическим экспортом
  // onDemandEntries: {
  //   maxInactiveAge: 1000 * 60 * 60,
  //   pagesBufferLength: 5,
  // },
}

export default withNextIntl(config)
