'use client'

import { maxDevice } from '@/styles/device'

import { useEffect, useState } from 'react'
import { FiCheck } from 'react-icons/fi'
import { IoMdHeartEmpty } from 'react-icons/io'
import { LuShare2 } from 'react-icons/lu'
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

const Toast = styled.div<{ $visible: boolean }>`
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 1000;
  max-width: min(320px, calc(100vw - 32px));
  padding: 12px 16px;
  border-radius: 14px;
  background: #241b14;
  color: #ffffff;
  font-size: 14px;
  line-height: 1.4;
  box-shadow: 0 16px 34px rgba(36, 27, 20, 0.22);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: none;
  transform: translateY(${({ $visible }) => ($visible ? '0' : '10px')});
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;

  @media ${maxDevice.mobileL} {
    right: 16px;
    bottom: 16px;
    left: 16px;
  }
`

export const ControlBlock = () => {
  const [message, setMessage] = useState('')
  const [isLinkCopied, setIsLinkCopied] = useState(false)

  useEffect(() => {
    if (!message) return

    const timer = window.setTimeout(() => {
      setMessage('')
      setIsLinkCopied(false)
    }, 2500)

    return () => window.clearTimeout(timer)
  }, [message])

  const copyCurrentUrl = async () => {
    if (!navigator.clipboard) return false

    await navigator.clipboard.writeText(window.location.href)

    return true
  }

  const handleBookmark = async () => {
    const userAgent = navigator.userAgent
    const platform = navigator.platform || userAgent
    const isIOS = /iPhone|iPad|iPod/i.test(platform) || (/Mac/i.test(platform) && navigator.maxTouchPoints > 1)
    const isAndroid = /Android/i.test(userAgent)
    const isMobile = isIOS || isAndroid || /Mobi/i.test(userAgent)
    const isAppleDesktop = /Mac/i.test(platform)
    const shortcut = isAppleDesktop ? '⌘D' : 'Ctrl+D'
    const instruction = isIOS
      ? 'Нажмите «Поделиться» и выберите «Добавить в закладки».'
      : isAndroid
        ? 'Откройте меню браузера и выберите «Добавить в закладки».'
        : isMobile
          ? 'Откройте меню браузера и добавьте страницу в закладки.'
          : `Нажмите ${shortcut}, чтобы добавить рецепт в закладки браузера.`

    try {
      await copyCurrentUrl()
      setMessage(`Ссылка скопирована. ${instruction}`)
    } catch {
      setMessage(instruction)
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: window.location.href,
        })
      } catch {
        return
      }

      return
    }

    try {
      await copyCurrentUrl()
      setIsLinkCopied(true)
      setMessage('Ссылка скопирована в буфер обмена.')
    } catch {
      setMessage('Не удалось скопировать ссылку. Скопируйте адрес страницы из браузера.')
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
        {isLinkCopied ? <FiCheck /> : <LuShare2 />}
      </IconButton>
      <Toast $visible={!!message} role="status" aria-live="polite">
        {message}
      </Toast>
    </InfoContainer>
  )
}
