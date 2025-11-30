'use client'

import React from 'react'

import { Root, Content, Text, SuccessButton } from './CookieNotice.styles'
import { COOKIE_INFO_NAME } from './cookieInfo'
import useCookieBoolean from './useCookieBoolean'

const COOKIE_NOTICE_TEXT =
  'Мы используем файлы cookie для персонализации сервисов и повышения удобства работы с сайтом.\nЕсли вы не хотите использовать файлы cookie, измените настройки браузера.'

export const CookieNotice = () => {
  const [isAccepted, setIsAccepted, isReady] = useCookieBoolean(null, COOKIE_INFO_NAME)

  if (!isReady) return null
  if (isAccepted) return null

  const handleAccept = () => {
    setIsAccepted(true)
  }

  return (
    <Root>
      <Content>
        <Text>{COOKIE_NOTICE_TEXT}</Text>
        <SuccessButton onClick={handleAccept} aria-label="Хорошо">
          Принять
        </SuccessButton>
      </Content>
    </Root>
  )
}
