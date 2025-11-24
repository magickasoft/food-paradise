'use client'

import styled from 'styled-components'
import { maxDevice } from '@/styles/device'

export const SmallText = styled.p`
  color: #918f8f;
  font-size: 10px;
  font-weight: 300;
  line-height: normal;
  margin-top: 4px;
`
export const StyledFooter = styled.footer`
  background: #ffffff;
  color: #181818;
  min-height: 100px;

  padding: 8px 100px;
  font-size: 14px;
  border-top: 1px solid #eaeaea;

  @media ${maxDevice.laptop} {
    padding: 8px 20px;
  }
`
