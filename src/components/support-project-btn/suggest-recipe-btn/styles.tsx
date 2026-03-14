'use client'

import styled from 'styled-components'
import { maxDevice } from '@/styles/device'

const BUTTON_STYLES = {
  height: { default: 42, laptop: 36 },
  padding: { default: '0 20px', laptop: '0 16px' },
  fontSize: { default: 16, laptop: 14 },
  gradient: 'linear-gradient(90deg, #646464 0%, #86807f 50%, #bc9a97 100%)',
  shadow: '0 4px 12px rgba(123, 123, 123, 0.4)',
} as const

export const StyledButton = styled.a`
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

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 16px;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const ModalContent = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  max-width: 480px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  animation: slideUp 0.3s ease;

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  h2 {
    margin: 0 0 24px 0;
    font-size: 24px;
    font-weight: 600;
    color: #333;
    text-align: center;
    padding-right: 24px;

    @media ${maxDevice.laptop} {
      font-size: 22px;
      margin-bottom: 20px;
    }

    @media ${maxDevice.mobileL} {
      font-size: 20px;
      margin-bottom: 16px;
    }
  }

  @media ${maxDevice.laptop} {
    padding: 28px;
    max-width: 440px;
  }

  @media ${maxDevice.mobileL} {
    padding: 24px 20px;
    max-width: 95%;
    border-radius: 14px;
  }

  @media ${maxDevice.mobileM} {
    padding: 20px 16px;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
  color: #999;
  padding: 8px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f5f5f5;
    color: #666;
    transform: rotate(90deg);
  }

  @media ${maxDevice.laptop} {
    top: 16px;
    right: 16px;
    font-size: 24px;
    width: 36px;
    height: 36px;
  }

  @media ${maxDevice.mobileL} {
    top: 12px;
    right: 12px;
    font-size: 22px;
    width: 32px;
    height: 32px;
    padding: 6px;
  }
`

export const QRContainer = styled.div`
  width: 100%;
  max-width: 280px;
  margin: 0 auto;
  aspect-ratio: 1;
  background: #f8f8f8;
  border-radius: 16px;
  padding: 16px;
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.05);

  & > div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    font-size: 14px;
    color: #999;
  }

  @media ${maxDevice.laptop} {
    max-width: 240px;
    padding: 14px;
  }

  @media ${maxDevice.mobileL} {
    max-width: 200px;
    padding: 12px;
  }

  @media ${maxDevice.mobileM} {
    max-width: 180px;
    padding: 10px;
  }
`
