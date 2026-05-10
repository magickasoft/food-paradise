'use client'

import styled from 'styled-components'
import { maxDevice } from '@/styles/device'

const BUTTON_STYLES = {
  height: { default: 42, laptop: 44 },
  padding: { default: '0 18px', laptop: '0 16px' },
  fontSize: { default: 14, laptop: 14 },
  gradient: '#fffaf5',
  shadow: '0 12px 26px rgba(44, 31, 20, 0.12)',
} as const

export const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${BUTTON_STYLES.height.default}px;
  padding: ${BUTTON_STYLES.padding.default};
  font-size: ${BUTTON_STYLES.fontSize.default}px;
  font-weight: 700;
  color: #6b3d08;
  background: ${BUTTON_STYLES.gradient};
  border: 1px solid rgba(255, 132, 2, 0.16);
  border-radius: 999px;
  transition: all 0.25s ease;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  background-size: 200% 100%;

  &:hover {
    background: #fff0dc;
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
  z-index: 10000;
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
  display: flex;
  justify-content: center;
`

export const QRLink = styled.div`
  text-align: center;
  margin-top: 20px;

  a {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 18px;
    border-radius: 999px;
    border: 1px solid rgba(255, 132, 2, 0.28);
    background: #fffaf5;
    color: #6b3d08;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.3;
    text-decoration: none;
    transition:
      background 0.2s ease,
      border-color 0.2s ease,
      color 0.2s ease,
      box-shadow 0.2s ease,
      transform 0.2s ease;

    &:hover {
      background: #fff0dc;
      border-color: #ff8402;
      color: #e75e02;
      box-shadow: 0 10px 24px rgba(255, 132, 2, 0.14);
      transform: translateY(-1px);
    }
  }
`
