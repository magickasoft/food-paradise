'use client'

import { memo, useMemo } from 'react'
import { useTranslations } from 'next-intl'
import { RECIPES_OBJ } from '@/constants/recipes/recipes'

import { SmallText } from './styles'

export const TotalRecipes = memo(function TotalRecipes() {
  const t = useTranslations('totalRecipes')

  const count = useMemo(
    () =>
      String(
        Object.values(RECIPES_OBJ).reduce((acc, recipes) => {
          return acc + recipes.length
        }, 0),
      ),
    [],
  )

  const title = t('title', { count })

  return <SmallText>{title}</SmallText>
})
