'use client'

import type { ReactNode } from 'react'
import GlobalStyle from '@/components/styled-components/global-style'
import StyledComponentsRegistry from '@/components/styled-components/registry'
import { CookieNotice } from '@/components/CookieNotice'
import { CookiesProvider } from 'react-cookie'

export const dynamic = 'force-static'

export interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning>
        <CookiesProvider>
          <GlobalStyle />
          <StyledComponentsRegistry>
            <>{children}</>
            <CookieNotice />
          </StyledComponentsRegistry>
        </CookiesProvider>
      </body>
    </html>
  )
}
