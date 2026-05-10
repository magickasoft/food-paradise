'use client'

import { memo } from 'react'
import { FaVk, FaYandex } from 'react-icons/fa'
import styled from 'styled-components'

const SocialContainer = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 0;
`

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: #fffaf5;
  color: #6b3d08;
  box-shadow: inset 0 0 0 1px rgba(255, 132, 2, 0.14);
  transition:
    transform 0.2s ease,
    color 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: #fff0dc;
    color: #ff8402;
    box-shadow:
      inset 0 0 0 1px rgba(255, 132, 2, 0.28),
      0 10px 24px rgba(255, 132, 2, 0.12);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`

const socialLinks = [
  {
    title: 'VK',
    href: '#',
    icon: <FaVk />,
  },
  {
    title: 'Яндекс Дзен',
    href: '#',
    icon: <FaYandex />,
  },
]

export const SocialLinks = memo(function SocialLinks() {
  return (
    <SocialContainer aria-label="Социальные сети">
      {socialLinks.map(({ title, href, icon }) => (
        <SocialLink key={title} href={href} aria-label={title} title={title}>
          {icon}
        </SocialLink>
      ))}
    </SocialContainer>
  )
})
