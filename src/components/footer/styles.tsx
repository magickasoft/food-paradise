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
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: start;
  gap: 24px;
  background: #ffffff;
  color: #181818;
  min-height: 100px;

  padding: 24px 100px;
  font-size: 14px;
  border-top: 1px solid #eaeaea;

  @media ${maxDevice.laptop} {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 18px 20px;
  }
`

export const FooterDocuments = styled.div`
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 8px;
`

export const FooterSocial = styled.div`
  display: flex;
  justify-content: flex-end;

  @media ${maxDevice.laptop} {
    width: 100%;
    justify-content: center;
  }
`

export const FooterMeta = styled.div`
  grid-column: 1 / -1;
`
