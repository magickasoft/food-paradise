import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const isDevelopment = process.env.NODE_ENV === 'development'

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: './messages/ru.json',
  },
})

const config: NextConfig = {
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
  onDemandEntries: {
    maxInactiveAge: 1000 * 60 * 60,
    pagesBufferLength: 5,
  },
}

export default withNextIntl(config)
