'use client'

import styled from 'styled-components'

const List = styled.ul<{ $isOpen: boolean }>`
  max-height: ${({ $isOpen }) => ($isOpen ? '2000px' : '0')};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: ${({ $isOpen }) => ($isOpen ? '20px' : '0')};
  padding-top: 0;
  margin: 0;
  list-style: none;
  width: 100%;
`

const Item = styled.li`
  padding: 12px 4px;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`

const Title = styled.strong`
  display: inline-block;
  background: #d0e1ff;
  padding: 2px 8px;
  border-radius: 4px;
  margin-bottom: 4px;
  font-size: 0.9rem;
`

export function VariationsList({
  variations,
  isOpen,
}: {
  variations: { name: string; changes: string }[]
  isOpen: boolean
}) {
  return (
    <>
      <List $isOpen={isOpen}>
        {variations.map((variation, index) => (
          <Item key={index}>
            <Title>{variation.name}</Title>
            <div>{variation.changes}</div>
          </Item>
        ))}
      </List>
    </>
  )
}
