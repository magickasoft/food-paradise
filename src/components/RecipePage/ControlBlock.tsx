'use client'

import { maxDevice } from '@/styles/device'

import { IoMdHeartEmpty } from 'react-icons/io'
import { LuExternalLink } from 'react-icons/lu'
import styled from 'styled-components'

const InfoContainer = styled.div`
  width: 100%;
  max-width: 680px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  padding: 8px 0 14px;
  margin: 0;

  @media ${maxDevice.laptop} {
    align-items: stretch;
  }
`

const BUTTON_STYLES = {
  height: { default: 54, laptop: 50 },
  padding: { default: '0 28px', laptop: '0 22px' },
  fontSize: { default: 16, laptop: 14 },
  gradient: 'linear-gradient(135deg, #e75e02 0%, #ff8402 58%, #ffad3d 100%);',
  shadow: '0 16px 30px rgba(231, 94, 2, 0.24)',
} as const

export const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  height: ${BUTTON_STYLES.height.default}px;
  padding: ${BUTTON_STYLES.padding.default};
  font-size: ${BUTTON_STYLES.fontSize.default}px;
  font-weight: 700;
  color: #ffffff;
  background: ${BUTTON_STYLES.gradient};
  border-radius: 16px;
  transition: all 0.25s ease;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  background-size: 200% 100%;

  &:hover {
    background-position: 100% 0;
    transform: translateY(-2px) scale(1.01);
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

export const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 54px;
  height: 54px;
  background: #fffaf5;
  border: 1px solid rgba(255, 132, 2, 0.16);
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.25s ease;
  color: #7c6958;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: ${BUTTON_STYLES.shadow};
    border-color: #ff8402;
    color: #ff8402;
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @media ${maxDevice.laptop} {
    width: 50px;
    height: 50px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`

export const ControlBlock = () => {
  const handleBookmark = () => {
    // Логика добавления в закладки
    console.log('Added to bookmarks')
  }

  const handleShare = () => {
    // Логика шаринга
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: window.location.href,
      })
    } else {
      // Fallback для браузеров, не поддерживающих Web Share API
      navigator.clipboard.writeText(window.location.href)
      alert('Ссылка скопирована в буфер обмена')
    }
  }

  return (
    <InfoContainer>
      <StyledButton
        href="#cooking-steps"
        title={'Начать готовить'}
        aria-label={'Начать готовить'}
        rel="noopener noreferrer nofollow"
      >
        {'Начать готовить'}
      </StyledButton>
      <IconButton onClick={handleBookmark} title="Добавить в закладки" aria-label="Добавить в закладки">
        <IoMdHeartEmpty />
      </IconButton>
      <IconButton onClick={handleShare} title="Поделиться" aria-label="Поделиться">
        <LuExternalLink />
      </IconButton>
    </InfoContainer>
  )
}
