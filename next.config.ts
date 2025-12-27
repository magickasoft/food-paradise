import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const isDevelopment = process.env.NODE_ENV === 'development'
const isGithubActions = process.env.GITHUB_ACTIONS === 'true'

const repoName = 'food-paradise'

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: './messages/ru.json',
  },
})

const config: NextConfig = {
  output: 'export', // Включаем статический экспорт
  basePath: isGithubActions ? `/${repoName}` : '', // Задает путь для GitHub Pages
  assetPrefix: isGithubActions ? `/${repoName}/` : '', // Гарантирует правильную загрузку ресурсов
  trailingSlash: true, // Опциональные настройки для чистых URL
  images: {
    unoptimized: true, // Отключаем оптимизацию изображений для статического экспорта
  },

  reactStrictMode: true,
  compiler: {
    removeConsole: !isDevelopment ? { exclude: ['error', 'warn'] } : false,
    reactRemoveProperties: { properties: ['^data-test$'] },
    styledComponents: {
      ssr: true,
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
