'use client'

import { DetailsTitle } from './DetailsTitle'

import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
  background: #f3f7ff;
  border: 1px solid #d0e1ff;
  border-radius: 6px;
`

const Item = styled.li`
  padding: 12px 16px;
`

const Title = styled.strong`
  display: inline-block;
  background: #d0e1ff;
  padding: 2px 8px;
  border-radius: 4px;
  margin-bottom: 4px;
  font-size: 0.9rem;
`

export function VariationsList({ variations }: { variations: { name: string; changes: string }[] }) {
  return (
    <>
      <DetailsTitle>Вариации</DetailsTitle>
      <List>
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
