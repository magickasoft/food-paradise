'use client'

import styled from 'styled-components'
import { DetailsTitle } from './DetailsTitle'
import { FiAlertCircle } from 'react-icons/fi'

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  margin: 0;
  list-style: none;
`

const Item = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  background: #fffbe6;
  border-left: 4px solid #ffcc00;
  padding: 12px 16px;
  border-radius: 6px;
  font-size: 1rem;
  line-height: 1.4;
`

export function TipsList({ tips }: { tips: string[] }) {
  return (
    <>
      <DetailsTitle>
        <FiAlertCircle size={20} style={{ marginRight: 8 }} />
        Советы
      </DetailsTitle>
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
