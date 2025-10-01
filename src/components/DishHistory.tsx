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

const Title = styled.strong`
  display: inline-block;
  background: #d0e1ff;
  padding: 2px 8px;
  border-radius: 4px;
  margin-bottom: 4px;
  font-size: 0.9rem;
`

export function DishHistory({ history }: { history: string }) {
  return (
    <>
      <DetailsTitle>История</DetailsTitle>
      <Description>{history}</Description>
    </>
  )
}
