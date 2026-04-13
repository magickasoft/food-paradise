'use client'

import { maxDevice } from '@/styles/device'

import { IoMdHeartEmpty } from 'react-icons/io'
import { LuExternalLink } from 'react-icons/lu'
import styled from 'styled-components'

const InfoContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  margin: 8px 0;
`

const BUTTON_STYLES = {
  height: { default: 42, laptop: 36 },
  padding: { default: '0 20px', laptop: '0 16px' },
  fontSize: { default: 16, laptop: 14 },
  gradient: 'linear-gradient(90deg, #e75e02 0%, #ff8402 50%, #ff8302 100%);',
  shadow: '0 4px 12px rgba(123, 123, 123, 0.4)',
} as const

export const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  width: 100%;
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

export const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.25s ease;
  color: #666;

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
    width: 36px;
    height: 36px;

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
      <IconButton onClick={handleBookmark} title="Добавить в закладки" aria-label="Добавить в закладки" disabled={true}>
        <IoMdHeartEmpty />
      </IconButton>
      <IconButton onClick={handleShare} title="Поделиться" aria-label="Поделиться" disabled={true}>
        <LuExternalLink />
      </IconButton>
    </InfoContainer>
  )
}
