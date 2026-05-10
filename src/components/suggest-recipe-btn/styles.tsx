'use client'

import styled from 'styled-components'
import { maxDevice } from '@/styles/device'

const BUTTON_STYLES = {
  height: { default: 42, laptop: 44 },
  padding: { default: '0 18px', laptop: '0 16px' },
  fontSize: { default: 14, laptop: 14 },
  gradient: 'linear-gradient(135deg, #e75e02 0%, #ff8402 58%, #ffad3d 100%)',
  shadow: '0 12px 26px rgba(231, 94, 2, 0.22)',
} as const

export const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${BUTTON_STYLES.height.default}px;
  padding: ${BUTTON_STYLES.padding.default};
  font-size: ${BUTTON_STYLES.fontSize.default}px;
  font-weight: 700;
  color: #ffffff;
  background: ${BUTTON_STYLES.gradient};
  border-radius: 999px;
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
