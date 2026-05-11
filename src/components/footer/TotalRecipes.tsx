'use client'

import { memo, useMemo } from 'react'
import { useTranslations } from 'next-intl'
import { getAllRecipes } from '@/constants/recipes/recipes'

import { SmallText } from './styles'

export const TotalRecipes = memo(function TotalRecipes() {
  const t = useTranslations('totalRecipes')

  const count = useMemo(() => String(getAllRecipes().length), [])

  const title = t('title', { count })

  return <SmallText>{title}</SmallText>
})
