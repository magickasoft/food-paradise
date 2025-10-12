'use client'

import styled from 'styled-components'
import { DetailsTitle } from './DetailsTitle'
import { FiAlertCircle } from 'react-icons/fi'

const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  list-style: none;
  background: #fffbe6;
  width: 100%;
  border: 1px solid #ffcc00;
  border-radius: 6px;
`

const Item = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;

  padding: 12px 16px;
  border-radius: 6px;
  font-size: 1rem;
  line-height: 1.4;
`

export function TipsList({ tips }: { tips: string[] }) {
  return (
    <>
      <DetailsTitle>Советы</DetailsTitle>
      <List>
        {tips.map((tip, index) => (
          <Item key={index}>
            <FiAlertCircle size={18} color="#ffcc00" />
            {tip}
          </Item>
        ))}
      </List>
    </>
  )
}
