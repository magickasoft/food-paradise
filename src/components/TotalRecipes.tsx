'use client'

import { memo, useMemo } from 'react'
import { useTranslations } from 'next-intl'
import styled from 'styled-components'
import { RECIPES_OBJ } from '@/constants/recipes/recipes'

const Box = styled.div`
  font-size: 12px;
  color: #333;
  margin-top: 4px;

  @media (min-width: 600px) {
    margin-top: 0;
  }
`

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

  const titleText = t('title', { count })

  return <Box>{titleText}</Box>
})
