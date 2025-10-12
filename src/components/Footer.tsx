'use client'

import { RECIPES_OBJ } from '@/constants/recipes/recipes'
import styled from 'styled-components'

const Container = styled.footer`
  background: #ffffff;
  color: #181818;
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  font-size: 14px;
  flex-wrap: wrap; /* чтобы на мобильных элементы переносились */
  border-top: 1px solid #eaeaea;
`

const Links = styled.nav`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  a {
    color: #181818;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }
`

const FooterCounter = styled.div`
  font-size: 12px;
  color: #333;
  margin-top: 4px;

  @media (min-width: 600px) {
    margin-top: 0;
  }
`

export const Footer = () => {
  const recipesCount = Object.values(RECIPES_OBJ).reduce((acc, recipes) => {
    return acc + recipes.length
  }, 0)

  const policyLinks = [
    { label: 'Политика конфиденциальности', url: '/privacy' },
    { label: 'Пользовательское соглашение', url: '/terms' },
    { label: 'Cookies', url: '/cookies' },
  ]

  return (
    <Container>
      <Links>
        {policyLinks.map(({ label, url }) => (
          <a key={url} href={url} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        ))}
      </Links>
      <FooterCounter>{`Всего рецептов: ${recipesCount}`}</FooterCounter>
    </Container>
  )
}
