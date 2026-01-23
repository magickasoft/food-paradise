'use client'

import { memo, useCallback } from 'react'
import { useTranslations } from 'next-intl'
import { useMetrica } from '@artginzburg/next-ym'
import { debounce } from '@/helpers/debounce'

import { StyledButton } from './styles'

export const SupportProjectButton = memo(function SupportProjectButton() {
  // const t = useTranslations('suggestRecipe')
  // const { reachGoal } = useMetrica()

  // const handleClick = useCallback(
  //   debounce(() => {
  //     reachGoal?.('suggest_recipe')
  //   }, 1000),
  //   [reachGoal],
  // )

  // const title = t('title')

  return (
    <StyledButton
      // onClick={handleClick}
      // href={t('href')}
      title={'Поддержать проект'}
      aria-label={'Поддержать проект'}
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      {'Поддержать проект'}
    </StyledButton>
  )
})
