'use client'

import styled from 'styled-components'

const Title = styled.h2`
  font-size: 1.2rem;
  line-height: 1.4;
  font-weight: 600;
  margin-bottom: 10px;
  width: 100%;
  color: #333;
  padding: 16px 20px;
  border-bottom: 1px solid #e0e0e0;
`

export function DetailsTitle({ children }: { children: React.ReactNode }) {
  return <Title>{children}</Title>
}
