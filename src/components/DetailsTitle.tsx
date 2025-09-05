'use client'

import styled from 'styled-components'

const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
`

export function DetailsTitle({ children }: { children: React.ReactNode }) {
  return <Title>{children}</Title>
}
