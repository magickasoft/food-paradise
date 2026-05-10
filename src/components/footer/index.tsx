'use client'

import { memo } from 'react'
import { TotalRecipes } from './TotalRecipes'
import { Copyright } from './Copyright'
import { Docs } from './Docs'
import { SocialLinks } from './SocialLinks'

import { FooterDocuments, FooterMeta, FooterSocial, StyledFooter } from './styles'

export const Footer = memo(function Footer() {
  return (
    <StyledFooter>
      <FooterDocuments>
        <Docs />
      </FooterDocuments>
      <FooterSocial>
        <SocialLinks />
      </FooterSocial>
      <FooterMeta>
        <Copyright />
        <TotalRecipes />
      </FooterMeta>
    </StyledFooter>
  )
})
