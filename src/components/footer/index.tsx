'use client'

import { memo } from 'react'
import { TotalRecipes } from './TotalRecipes'
import { Copyright } from './Copyright'
import { Docs } from './Docs'

import { StyledFooter } from './styles'

export const Footer = memo(function Footer() {
  return (
    <StyledFooter>
      <Docs />
      <Copyright />
      <TotalRecipes />
    </StyledFooter>
  )
})
