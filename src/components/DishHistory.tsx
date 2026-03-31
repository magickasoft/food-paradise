'use client'

import { DetailsTitle } from './DetailsTitle'

import styled from 'styled-components'

const Description = styled.li`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  padding: 12px 24px;
  padding-bottom: 24px;
  list-style: none;
  width: 100%;
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
