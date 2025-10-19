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
    padding: 8px 4px;
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
    <Container>
      <Links>
        {policyLinks.map(({ label, url }) => {
          const isExternal = /^https?:\/\//i.test(url)
          const rel = isExternal ? 'noopener noreferrer nofollow' : undefined
          const target = isExternal ? '_blank' : undefined
          return (
            <a key={url} href={url} target={target} rel={rel} aria-label={`${label} (открывается в новой вкладке)`}>
              {label}
            </a>
          )
        })}
      </Links>
      <FooterCounter>{`Всего рецептов: ${recipesCount}`}</FooterCounter>
    </Container>
  )
}
