'use client'

import styled from 'styled-components'

const List = styled.div<{ $isOpen: boolean }>`
  max-height: ${({ $isOpen }) => ($isOpen ? '2000px' : '0')};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: ${({ $isOpen }) => ($isOpen ? '20px' : '0')};
  padding-top: ${({ $isOpen }) => ($isOpen ? '8px' : '0')};
  margin: 0;
  list-style: none;
  width: 100%;
`

const Item = styled.li`
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #f0f0f0;
  gap: 10px;
  padding: 12px 4px;
  border-radius: 6px;
  font-size: 0.92rem;
  line-height: 1.55;
  color: #5f554d;

  &:last-child {
    border-bottom: none;
  }
`

export function TipsList({ tips, isOpen }: { tips: string[]; isOpen: boolean }) {
  return (
    <>
      <List $isOpen={isOpen}>
        {tips.map((tip, index) => (
          <Item key={index}>{tip}</Item>
        ))}
      </List>
    </>
  )
}
