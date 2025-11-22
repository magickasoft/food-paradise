'use client'

import { memo } from 'react'
import { useTranslations } from 'next-intl'
import { URL } from '@/public_variables'

import { SmallText } from './styles'

export const Copyright = memo(function Copyright() {
  const t = useTranslations('copyright')

  const year = new Date().getFullYear()

  const text = t('text', { url: String(URL), text: String(year) })

  return <SmallText>{text}</SmallText>
})
