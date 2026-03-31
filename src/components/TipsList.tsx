'use client'

import styled from 'styled-components'
import { DetailsTitle } from './DetailsTitle'
import { FiAlertCircle } from 'react-icons/fi'

const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-top: 0;
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
  font-size: 1rem;
  line-height: 1.4;

  &:last-child {
    border-bottom: none;
  }
`

export function TipsList({ tips }: { tips: string[] }) {
  return (
    <>
      <DetailsTitle>Советы</DetailsTitle>
      <List>
        {tips.map((tip, index) => (
          <Item key={index}>{tip}</Item>
        ))}
      </List>
    </>
  )
}
