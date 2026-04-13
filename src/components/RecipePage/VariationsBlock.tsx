'use client'

import styled from 'styled-components'
import { VariationsList } from '../VariationsList'
import { maxDevice } from '@/styles/device'
import { useState } from 'react'

const DetailsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-bottom: 20px;

  background: #f3f7ff;
  border: 1px solid #d0e1ff;
  border-radius: 12px;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;

  @media ${maxDevice.laptop} {
    flex-direction: column;
    padding: 0px;
    margin-bottom: 10px;
  }
`

const Header = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  transition: background 0.2s;
  border-bottom: ${({ $isOpen }) => ($isOpen ? '1px solid #d0e1ff' : 'none')};

  &:hover {
    background: #f5f5f5;
    border-radius: ${({ $isOpen }) => ($isOpen ? '12px 12px 0 0' : '12px')};
  }
`

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const Title = styled.span`
  color: #333;
`

const Arrow = styled.span<{ $isOpen: boolean }>`
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  color: #333;
  transition: transform 0.3s;
  font-size: 20px;
`

export function VariationsBlock({ variations }: { variations: { name: string; changes: string }[] }) {
  const [isOpen, setIsOpen] = useState(false)

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
