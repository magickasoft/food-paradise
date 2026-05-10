'use client'

import styled from 'styled-components'
import { VariationsList } from '../VariationsList'
import { maxDevice } from '@/styles/device'
import { useEffect, useState } from 'react'
import useDeviceDetector from 'nice-react-device-detector'

const DetailsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: #f7faff;
  border-radius: 18px;
  box-shadow: inset 0 0 0 1px rgba(130, 162, 216, 0.2);
  font-size: 1rem;
  line-height: 1.6;
  color: #4c5563;

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
  border-bottom: ${({ $isOpen }) => ($isOpen ? '1px solid rgba(130, 162, 216, 0.2)' : 'none')};

  &:hover {
    background: rgba(255, 255, 255, 0.48);
    border-radius: ${({ $isOpen }) => ($isOpen ? '18px 18px 0 0' : '18px')};
  }
`

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const Title = styled.span`
  color: #233553;
`

const Arrow = styled.span<{ $isOpen: boolean }>`
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  color: #333;
  transition: transform 0.3s;
  font-size: 20px;
`

export function VariationsBlock({ variations }: { variations: { name: string; changes: string }[] }) {
  const isMobile = useDeviceDetector()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(!isMobile)
  }, [isMobile])

  if (variations && variations.length > 0) {
    return (
      <DetailsContainer>
        <Header onClick={() => setIsOpen(!isOpen)} $isOpen={isOpen}>
          <HeaderLeft>
            <Title>Вариации</Title>
          </HeaderLeft>
          <Arrow $isOpen={isOpen}>▼</Arrow>
        </Header>
        <VariationsList variations={variations} isOpen={isOpen} />
      </DetailsContainer>
    )
  }

  return null
}
