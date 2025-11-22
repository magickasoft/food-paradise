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

  padding: 0 100px;
  font-size: 14px;
  border-top: 1px solid #eaeaea;

  @media ${maxDevice.laptop} {
    padding: 0 20px;
  }
`

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
`

export const Link = styled.a`
  color: #181818;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 8px 0;
  line-height: 1.5;
  display: inline-block;

  @media (pointer: coarse) {
    a {
      padding: 10px 6px;
    }
  }

  &:hover {
    text-decoration: underline;
  }
`
