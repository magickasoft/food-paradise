'use client'

import styled from 'styled-components'
import { TipsList } from '../TipsList'
import { VariationsList } from '../VariationsList'

const DetailsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #f9f9f9;
  margin-bottom: 20px;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 16px;
  }
`

export function VariationsBlock({ variations }: { variations: { name: string; changes: string }[] }) {
  if (variations && variations.length > 0) {
    return (
      <DetailsContainer>
        <VariationsList variations={variations} />
      </DetailsContainer>
    )
  }

  return null
}
