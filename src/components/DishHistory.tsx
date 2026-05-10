'use client'

import styled from 'styled-components'

const Description = styled.li<{ $isOpen: boolean }>`
  max-height: ${({ $isOpen }) => ($isOpen ? '260px' : '0')};
  display: flex;
  overflow: auto;
  flex-direction: column;
  padding: 0;
  margin: 0;
  padding: ${({ $isOpen }) => ($isOpen ? '12px 24px' : '0')};
  padding-bottom: ${({ $isOpen }) => ($isOpen ? '24px' : '0')};
  list-style: none;
  width: 100%;
  border-radius: 6px;
  color: #5f554d;
  font-size: 0.92rem;
  line-height: 1.65;
`

export function DishHistory({ isOpen, history }: { isOpen: boolean; history: string }) {
  return (
    <>
      <Description $isOpen={isOpen}>{history}</Description>
    </>
  )
}
