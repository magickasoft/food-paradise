'use client'

import styled from 'styled-components'
import { TipsList } from '../TipsList'
import { maxDevice } from '@/styles/device'
import { useEffect, useState } from 'react'
import { useDeviceDetector } from 'nice-react-device-detector'

const TipsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 1rem;
  background: #fffaf0;
  border-radius: 18px;
  box-shadow: inset 0 0 0 1px rgba(255, 204, 0, 0.16);
  line-height: 1.6;
  color: #5f554d;

  @media ${maxDevice.laptop} {
    flex-direction: column;
    padding: 0px;
    max-width: 100%;
  }
`

const Header = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 54px;
  padding: 15px 18px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  transition: background 0.2s;
  border-bottom: ${({ $isOpen }) => ($isOpen ? '1px solid rgba(255, 204, 0, 0.18)' : 'none')};

  &:hover {
    background: rgba(255, 255, 255, 0.42);
    border-radius: ${({ $isOpen }) => ($isOpen ? '18px 18px 0 0' : '18px')};
  }
`

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const Title = styled.span`
  color: #4f3a18;
`

const Arrow = styled.span<{ $isOpen: boolean }>`
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  color: #333;
  transition: transform 0.3s;
  font-size: 20px;
`

export function TipsBlock({ tips }: { tips: string[] }) {
  const isMobile = useDeviceDetector()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(!isMobile)
  }, [isMobile])

  if (tips && tips.length > 0) {
    return (
      <TipsContainer>
        <Header onClick={() => setIsOpen(!isOpen)} $isOpen={isOpen}>
          <HeaderLeft>
            <Title>Советы</Title>
          </HeaderLeft>
          <Arrow $isOpen={isOpen}>▼</Arrow>
        </Header>
        <TipsList isOpen={isOpen} tips={tips} />
      </TipsContainer>
    )
  }

  return null
}
