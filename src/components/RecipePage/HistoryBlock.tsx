'use client'

import styled from 'styled-components'
import { maxDevice } from '@/styles/device'
import { DishHistory } from '../DishHistory'
import { useState } from 'react'

const DetailsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: #fffbe6;
  border: 1px solid #ffcc00;
  border-radius: 12px;
  margin-bottom: 20px;
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
  border-bottom: ${({ $isOpen }) => ($isOpen ? '1px solid #ffcc00' : 'none')};

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

export function HistoryBlock({ history }: { history: string | undefined }) {
  const [isOpen, setIsOpen] = useState(false)

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
