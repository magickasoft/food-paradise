'use client'

import styled from 'styled-components'
import { memo, useCallback } from 'react'
import { useTranslations } from 'next-intl'
import { useMetrica } from '@artginzburg/next-ym'
import { maxDevice } from '@/styles/device'

const BUTTON_STYLES = {
  height: { default: 42, laptop: 36 },
  padding: { default: '0 20px', laptop: '0 16px' },
  fontSize: { default: 16, laptop: 14 },
  gradient: 'linear-gradient(90deg, #ff6f61 0%, #ff8a7a 50%, #ff6f61 100%)',
  shadow: '0 4px 12px rgba(255, 111, 97, 0.4)',
} as const

const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${BUTTON_STYLES.height.default}px;
  padding: ${BUTTON_STYLES.padding.default};
  font-size: ${BUTTON_STYLES.fontSize.default}px;
  font-weight: 500;
  color: #ffffff;
  background: ${BUTTON_STYLES.gradient};
  border-radius: 6px;
  transition: all 0.25s ease;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  background-size: 200% 100%;

  &:hover {
    background-position: 100% 0;
    transform: translateY(-2px);
    box-shadow: ${BUTTON_STYLES.shadow};
  }

  @media ${maxDevice.laptop} {
    height: ${BUTTON_STYLES.height.laptop}px;
    font-size: ${BUTTON_STYLES.fontSize.laptop}px;
    padding: ${BUTTON_STYLES.padding.laptop};
  }

  @media ${maxDevice.mobileL} {
    width: 100%;
    justify-content: center;
  }
`

export const SuggestRecipeButton = memo(function SuggestRecipeButton() {
  const t = useTranslations('suggestRecipe')
  const { reachGoal } = useMetrica()

  const handleClick = useCallback(() => {
    reachGoal?.('suggest_recipe')
  }, [reachGoal])

  const titleText = t('title')
  const href = t('href')

  return (
    <StyledButton
      onClick={handleClick}
      href={href}
      title={titleText}
      aria-label={titleText}
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      {titleText}
    </StyledButton>
  )
})
