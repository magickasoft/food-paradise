'use client'

import styled from 'styled-components'
import Image from 'next/image'
import { useEffect, useState, memo } from 'react'
import { useTranslations } from 'next-intl'
import { maxDevice } from '@/styles/device'
import { Link } from '@/i18n/navigation'
import { FiMenu, FiX } from 'react-icons/fi'
import { type Locale, useLocale } from 'next-intl'
import { defaultLocale, en } from '@/i18n/constants'

import { LocaleSelect } from '@/components/LocaleSelect'

const Container = styled.header<{ $scrolled: boolean }>`
  background: #ffffff;
  z-index: 9998;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.75rem;
  padding: 0 100px;
  border-bottom: ${({ $scrolled }) => ($scrolled ? '1px solid #d0d0d0' : 'transparent')};
  box-shadow: ${({ $scrolled }) => ($scrolled ? '0 2px 6px rgba(0,0,0,0.05)' : 'none')};
  transition: all 0.3s ease;

  @media ${maxDevice.laptop} {
    padding: 0 20px;
    height: 3.5rem;
  }
`

const LeftBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  a {
    display: flex;
    align-items: center;
  }
`

const CenterBlock = styled.nav<{ $menuOpen?: boolean }>`
  display: flex;
  gap: 24px;
  align-items: center;

  a {
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
    color: #333333;
    transition: color 0.2s ease;

    &:hover {
      color: #ff6f61;
    }
  }

  @media ${maxDevice.laptop} {
    display: ${({ $menuOpen }) => ($menuOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 3.5rem;
    left: 0;
    right: 0;
    background: #fff;
    padding: 20px;
    border-bottom: 1px solid #ddd;
    gap: 16px;
  }
`

const BurgerMenu = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: #333;

  @media ${maxDevice.laptop} {
    display: block;
  }
`

const RightBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  padding: 0 20px;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  background: linear-gradient(90deg, #ff6f61 0%, #ff8a7a 50%, #ff6f61 100%);
  border-radius: 6px;
  transition: all 0.25s ease;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  background-size: 200% 100%;

  &:hover {
    background-position: 100% 0;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 111, 97, 0.4);
  }

  /* Альтернативный вариант с более выраженным градиентом */
  /* background: linear-gradient(90deg, #ff5e4d 0%, #ff7c6b 50%, #ff5e4d 100%); */

  @media ${maxDevice.laptop} {
    height: 36px;
    font-size: 14px;
    padding: 0 16px;
  }

  @media ${maxDevice.mobileL} {
    width: 100%;
    justify-content: center;
  }
`

const externalForm: Record<Locale, string> = {
  [defaultLocale]: 'https://forms.yandex.ru/u/691ac78c9029026ef94eb5d4',
  [en]: 'https://forms.gle/n6mF4WvC64UKyEW37',
}

export const Header = memo(function Header() {
  const t = useTranslations('header')
  const currentLocale = useLocale()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Container $scrolled={scrolled}>
      <LeftBlock>
        <Link href="/" locale="ru">
          <Image src="/static/logo.png" alt="logo" width={50} height={50} priority />
        </Link>
      </LeftBlock>

      <CenterBlock $menuOpen={menuOpen}>
        <Link href="/" locale="ru">
          Главная
        </Link>
        <Link href="/categories" locale="ru">
          Категории
        </Link>
      </CenterBlock>

      <RightBlock>
        <LocaleSelect />
        <StyledButton href={externalForm[currentLocale]} target="_blank" rel="noopener noreferrer nofollow">
          {t('btn')}
        </StyledButton>
        <BurgerMenu onClick={() => setMenuOpen(prev => !prev)}>{menuOpen ? <FiX /> : <FiMenu />}</BurgerMenu>
      </RightBlock>
    </Container>
  )
})
