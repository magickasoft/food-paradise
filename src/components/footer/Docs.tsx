'use client'

import { memo } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/components/Link'
import styled from 'styled-components'

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0.5rem 0;
`

const list = ['doc1', 'doc2', 'doc3'] as const

export const Docs = memo(function Docs() {
  const t = useTranslations('docs')

  return (
    <StyledNav>
      {list.map(item => {
        const title = t(`${item}.title`)
        const href = t(`${item}.href`)

        return (
          <Link key={item} href={href} aria-label={title}>
            {title}
          </Link>
        )
      })}
    </StyledNav>
  )
})
