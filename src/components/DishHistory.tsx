'use client'

import { DetailsTitle } from './DetailsTitle'

import styled from 'styled-components'

const Description = styled.li<{ $isOpen: boolean }>`
  max-height: ${({ $isOpen }) => ($isOpen ? '2000px' : '0')};
  display: flex;
  overflow: hidden;
  flex-direction: column;
  padding: 0;
  margin: 0;
  padding: ${({ $isOpen }) => ($isOpen ? '12px 24px' : '0')};
  padding-bottom: ${({ $isOpen }) => ($isOpen ? '24px' : '0')};
  list-style: none;
  width: 100%;
  border-radius: 6px;
`

export function DishHistory({ isOpen, history }: { isOpen: boolean; history: string }) {
  return (
    <>
      <Description $isOpen={isOpen}>{history}</Description>
    </>
  )
}
