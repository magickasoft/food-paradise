'use client'

import { memo, useCallback } from 'react'
import { useTranslations } from 'next-intl'
import { useMetrica } from '@artginzburg/next-ym'
import { debounce } from '@/helpers/debounce'

import { StyledButton } from './styles'

export const SuggestRecipeButton = memo(function SuggestRecipeButton() {
  const t = useTranslations('suggestRecipe')
  const { reachGoal } = useMetrica()

  const handleClick = useCallback(
    debounce(() => {
      reachGoal?.('suggest_recipe')
    }, 1000),
    [reachGoal],
  )

  const title = t('title')

  return (
    <StyledButton
      onClick={handleClick}
      href={t('href')}
      title={title}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      {title}
    </StyledButton>
  )
})
