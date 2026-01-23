'use client'

import { memo } from 'react'

import { StyledButton } from './styles'

export const SupportProjectButton = memo(function SupportProjectButton() {
  return (
    <StyledButton
      title={'Поддержать проект'}
      aria-label={'Поддержать проект'}
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      {'Поддержать проект'}
    </StyledButton>
  )
})
