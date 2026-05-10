'use client'

import styled from 'styled-components'
import { maxDevice } from '@/styles/device'
import { DishHistory } from '../DishHistory'
import { useEffect, useState } from 'react'
import useDeviceDetector from 'nice-react-device-detector'

const DetailsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: #fbf7f1;
  border-radius: 18px;
  box-shadow: inset 0 0 0 1px rgba(91, 70, 47, 0.1);
  font-size: 1rem;
  line-height: 1.6;
  color: #5f554d;

  @media ${maxDevice.laptop} {
    flex-direction: column;
    padding: 0px;
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
  border-bottom: ${({ $isOpen }) => ($isOpen ? '1px solid rgba(91, 70, 47, 0.1)' : 'none')};

  &:hover {
    background: rgba(255, 255, 255, 0.45);
    border-radius: ${({ $isOpen }) => ($isOpen ? '18px 18px 0 0' : '18px')};
  }
`

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const Title = styled.span`
  color: #463322;
`

const Arrow = styled.span<{ $isOpen: boolean }>`
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  color: #333;
  transition: transform 0.3s;
  font-size: 20px;
`

export function HistoryBlock({ history }: { history: string | undefined }) {
  const isMobile = useDeviceDetector()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(!isMobile)
  }, [isMobile])

  if (history) {
    return (
      <DetailsContainer>
        <Header onClick={() => setIsOpen(!isOpen)} $isOpen={isOpen}>
          <HeaderLeft>
            <Title>История</Title>
          </HeaderLeft>
          <Arrow $isOpen={isOpen}>▼</Arrow>
        </Header>
        <DishHistory isOpen={isOpen} history={history} />
      </DetailsContainer>
    )
  }

  return null
}
