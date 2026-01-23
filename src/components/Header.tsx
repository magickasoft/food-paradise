'use client'

import styled from 'styled-components'
import Image from 'next/image'
import { useEffect, useState, memo } from 'react'
import { maxDevice } from '@/styles/device'
import { Link, usePathname } from '@/i18n/navigation'
import { FiMenu, FiX } from 'react-icons/fi'

import { LocaleSelect } from '@/components/LocaleSelect'
import { SuggestRecipeButton } from '@/components/suggest-recipe-btn'
import { SupportProjectButton } from './support-project-btn/suggest-recipe-btn'

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

  border-bottom: ${({ $scrolled }) => ($scrolled ? '1px solid #e5e5e5' : 'transparent')};
  box-shadow: ${({ $scrolled }) => ($scrolled ? '0 2px 6px rgba(0,0,0,0.05)' : 'none')};

  transition: all 0.3s ease;

  @media ${maxDevice.laptop} {
    height: 3.5rem;
    padding: 0 16px;
  }
`

const LeftBlock = styled.div`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
  }
`

const DesktopNav = styled.nav`
  display: flex;
  gap: 24px;
  align-items: center;

  a {
    position: relative;
    font-size: 18px;
    font-weight: 600;
    color: #333;
    text-decoration: none;
    padding-bottom: 6px;
    transition: color 0.2s ease;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: #ff6f61;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.25s ease;
    }

    &:hover {
      color: #ff6f61;
    }

    &:hover::after {
      transform: scaleX(1);
    }

    &.active {
      color: #ff6f61;
    }

    &.active::after {
      transform: scaleX(1);
    }
  }

  @media ${maxDevice.laptop} {
    display: none;
  }
`

const RightBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media ${maxDevice.laptop} {
    display: none;
  }
`

const BurgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: #333;

  @media ${maxDevice.laptop} {
    display: block;
  }
`

const MobileMenu = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 3.5rem;
  left: 0;
  right: 0;
  bottom: 0;

  background: #ffffff;
  z-index: 9997;

  display: flex;
  flex-direction: column;
  gap: 24px;

  padding: 24px;

  transform: ${({ $open }) => ($open ? 'translateY(0)' : 'translateY(-10px)')};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};

  transition: all 0.25s ease;

  a {
    font-size: 18px;
    font-weight: 600;
    color: #333;
    text-decoration: none;
  }
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const SectionTitle = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  color: #999;
  letter-spacing: 0.05em;
`

export const Header = memo(function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto'
  }, [menuOpen])

  return (
    <>
      <Container $scrolled={scrolled}>
        <LeftBlock>
          <Link href="/" locale="ru">
            <Image src="/static/logo.png" alt="logo" width={42} height={42} priority />
          </Link>
        </LeftBlock>

        <DesktopNav>
          <Link href="/" locale="ru" className={pathname === '/' ? 'active' : ''}>
            Главная
          </Link>

          <Link href="/categories" locale="ru" className={pathname.startsWith('/categories') ? 'active' : ''}>
            Категории
          </Link>
        </DesktopNav>

        <RightBlock>
          <LocaleSelect />
          <SuggestRecipeButton />
          <SupportProjectButton />
        </RightBlock>

        <BurgerButton onClick={() => setMenuOpen(prev => !prev)}>{menuOpen ? <FiX /> : <FiMenu />}</BurgerButton>
      </Container>

      <MobileMenu $open={menuOpen}>
        <Section>
          <SectionTitle>Навигация</SectionTitle>
          <Link href="/" locale="ru" onClick={() => setMenuOpen(false)}>
            Главная
          </Link>
          <Link href="/categories" locale="ru" onClick={() => setMenuOpen(false)}>
            Категории
          </Link>
        </Section>

        <Section>
          <SectionTitle>Действия</SectionTitle>
          <SuggestRecipeButton />
          <SupportProjectButton />
        </Section>

        <Section>
          <SectionTitle>Настройки</SectionTitle>
          <LocaleSelect />
        </Section>
      </MobileMenu>
    </>
  )
})
