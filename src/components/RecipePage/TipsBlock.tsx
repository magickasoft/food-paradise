'use client'

import styled from 'styled-components'
import { TipsList } from '../TipsList'
import { maxDevice } from '@/styles/device'

const TipsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 20px;
  font-size: 1rem;
  background: #fffbe6;
  border: 1px solid #ffcc00;
  border-radius: 12px;
  line-height: 1.6;
  color: #333;

  @media ${maxDevice.laptop} {
    flex-direction: column;
    padding: 0px;
    margin-bottom: 20px;
  }
`

export function TipsBlock({ tips }: { tips: string[] }) {
  if (tips && tips.length > 0) {
    return (
      <TipsContainer>
        <TipsList tips={tips} />
      </TipsContainer>
    )
  }

  return null
}
