'use client'

import styled from 'styled-components'

const Title = styled.h2`
  font-size: 1.1rem;
  line-height: 1.4;
  font-weight: 700;
  margin-bottom: 0;
  width: 100%;
  color: #241b14;
  padding: 16px 18px 12px;
  border-bottom: 1px solid #f1e8df;
`

export function DetailsTitle({ children }: { children: React.ReactNode }) {
  return <Title>{children}</Title>
}
