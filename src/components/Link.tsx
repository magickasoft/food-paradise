'use client'

import { memo, AnchorHTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'

const StyledLink = styled.a`
  color: #181818;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.2;

  &:hover {
    text-decoration: underline;
  }
`

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode
}

export const Link = memo(function Link({ children, ...props }: LinkProps) {
  const isExternal = /^https?:\/\//i.test(props?.href ?? '')
  const rel = isExternal ? 'noopener noreferrer nofollow' : undefined
  const target = isExternal ? '_blank' : undefined

  return (
    <StyledLink target={target} rel={rel} {...props}>
      {children}
    </StyledLink>
  )
})
