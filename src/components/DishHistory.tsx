'use client'

import { DetailsTitle } from './DetailsTitle'

import styled from 'styled-components'

const Description = styled.li`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  padding: 12px 16px;
  list-style: none;
  background: #fffbe6;
  width: 100%;
  border: 1px solid #ffcc00;
  border-radius: 6px;
`

export function DishHistory({ history }: { history: string }) {
  return (
    <>
      <DetailsTitle>История</DetailsTitle>
      <Description>{history}</Description>
    </>
  )
}
