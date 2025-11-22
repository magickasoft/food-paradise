'use client'

import { memo } from 'react'
import { TotalRecipes } from './TotalRecipes'
import { Copyright } from './Copyright'

import { StyledFooter, StyledNav, Link } from './styles'

export const Footer = memo(function Footer() {
  const policyLinks = [
    {
      label: 'Политика в отношении обработки персональных данных',
      url: 'https://docs.google.com/document/d/1cpOXQMNeexyKuseOEj7wemK7fRfGrccXJLRmgiDGfUA',
    },
    {
      label: 'Пользовательское соглашение',
      url: 'https://docs.google.com/document/d/1V7UjGl5E73HLNgArQi8uUGCxVUiH1_56g28HEB_ZwYU',
    },
    {
      label: 'Политика обработки файлов cookie',
      url: 'https://docs.google.com/document/d/1fyIAFDSN-4LnDZbdQq4r82ghddvpsZkwO49Sb4Yga_Y',
    },
  ]

  return (
    <StyledFooter>
      <StyledNav>
        {policyLinks.map(({ label, url }) => {
          const isExternal = /^https?:\/\//i.test(url)
          const rel = isExternal ? 'noopener noreferrer nofollow' : undefined
          const target = isExternal ? '_blank' : undefined
          return (
            <Link key={url} href={url} target={target} rel={rel} aria-label={label}>
              {label}
            </Link>
          )
        })}
      </StyledNav>
      <Copyright />
      <TotalRecipes />
    </StyledFooter>
  )
})
