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
  background: ${({ $scrolled }) => ($scrolled ? 'rgba(255, 255, 255, 0.92)' : 'rgba(255, 255, 255, 0.78)')};
  backdrop-filter: blur(18px);
  z-index: 9998;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 4.5rem;
  padding: 0 100px;

  border-bottom: ${({ $scrolled }) => ($scrolled ? '1px solid rgba(241, 232, 223, 0.9)' : '1px solid transparent')};
  box-shadow: ${({ $scrolled }) => ($scrolled ? '0 12px 32px rgba(44, 31, 20, 0.08)' : 'none')};

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
    gap: 8px;
    text-decoration: none;
  }

  img {
    width: 62px;
    height: auto;
  }
`

const DesktopNav = styled.nav`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 5px;
  border-radius: 999px;
  background: #fffaf5;
  box-shadow: inset 0 0 0 1px rgba(255, 132, 2, 0.1);

  a {
    position: relative;
    min-height: 38px;
    display: inline-flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 999px;
    font-size: 15px;
    font-weight: 700;
    color: #59483a;
    text-decoration: none;
    transition:
      color 0.2s ease,
      background 0.2s ease,
      box-shadow 0.2s ease;

    &:hover {
      color: #e75e02;
      background: #fff0dc;
    }

    &.active {
      color: #e75e02;
      background: #ffffff;
      box-shadow: 0 6px 18px rgba(44, 31, 20, 0.08);
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
  width: 42px;
  height: 42px;
  align-items: center;
  justify-content: center;
  background: #fffaf5;
  border: 1px solid rgba(255, 132, 2, 0.14);
  border-radius: 14px;
  font-size: 1.5rem;
  cursor: pointer;
  color: #4a1f0f;
  transition:
    color 0.2s ease,
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    color: #ff8402;
    background: #fff0dc;
    transform: translateY(-1px);
  }

  @media ${maxDevice.laptop} {
    display: inline-flex;
  }
`

const MobileMenu = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 3.5rem;
  left: 0;
  right: 0;
  bottom: 0;

  background: rgba(255, 250, 245, 0.96);
  backdrop-filter: blur(18px);
  z-index: 9997;

  display: flex;
  flex-direction: column;
  gap: 18px;

  padding: 20px 16px 28px;

  transform: ${({ $open }) => ($open ? 'translateY(0)' : 'translateY(-10px)')};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};

  transition: all 0.25s ease;

  a {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    font-size: 18px;
    font-weight: 700;
    color: #241b14;
    text-decoration: none;
  }
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 12px 30px rgba(44, 31, 20, 0.07);
`

const SectionTitle = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  color: #9a7954;
  letter-spacing: 0.05em;
`

const Text = styled.span`
  font-family: 'PT Serif', 'Times New Roman', serif;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0;
  white-space: nowrap;
  color: #4a1f0f;
  display: flex;
  align-items: center;
  line-height: 1;

  span:last-child {
    color: #f28c28;
  }

  @media ${maxDevice.laptop} {
    font-size: 19px;
  }

  @media ${maxDevice.mobileL} {
    font-size: 18px;
  }
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
            <Image src="/optimize/logo.webp" alt="logo" width={120} height={60} priority />
            <Text>
              Всегда Готов<span>Ъ</span>
            </Text>
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
