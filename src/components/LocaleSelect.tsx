'use client'

import React, { memo, useState, useTransition } from 'react'
import { useParams } from 'next/navigation'
import { usePathname, useRouter } from '@/i18n/navigation'
import { locales } from '@/i18n/constants'
import { type Locale, useLocale } from 'next-intl'
import styled from 'styled-components'
import { FiGlobe } from 'react-icons/fi'

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`

const CurrentLocaleButton = styled.button`
  min-height: 42px;
  background: #fffaf5;
  border: 1px solid rgba(255, 132, 2, 0.16);
  border-radius: 9999px;
  padding: 0 12px;
  color: #6b3d08;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
  transition:
    color 0.2s ease,
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #fff0dc;
    color: #ff8402;
    transform: translateY(-1px);
  }
`

const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: white;
  border-radius: 14px;
  padding: 6px 0;
  display: flex;
  flex-direction: column;
  min-width: 80px;
  box-shadow: 0 14px 32px rgba(44, 31, 20, 0.12);
  z-index: 20;
`

const LocaleOption = styled.button`
  background: none;
  border: none;
  padding: 8px 12px;
  color: #333;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  text-align: left;

  &:hover {
    background: #f5f5f5;
  }
`

const localeLabels: Record<Locale, { label: string; flag: string }> = {
  ru: { label: 'Руc', flag: '🇷🇺' },
  en: { label: 'Eng', flag: '🇬🇧' },
}

export const LocaleSelect = memo(function LocaleSelect() {
  const currentLocale = useLocale()
  const router = useRouter()
  const [disabled, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()
  const [open, setOpen] = useState(false)

  type ReplaceOptions = Parameters<typeof router.replace>[1] & { locale?: string }

  const handleChange = (nextLocale: Locale) => {
    if (nextLocale === currentLocale || disabled) return

    startTransition(() => {
      localStorage.setItem('user-locale', nextLocale)
      router.replace(
        { pathname, params } as unknown as Parameters<typeof router.replace>[0],
        { locale: nextLocale } as ReplaceOptions,
      )
    })

    setOpen(false)
  }

  return (
    <Wrapper>
      <CurrentLocaleButton onClick={() => setOpen(prev => !prev)}>
        <FiGlobe size={18} />
        {/* {localeLabels[currentLocale as Locale]?.flag} */}
        {localeLabels[currentLocale as Locale]?.label}
      </CurrentLocaleButton>
      {open && (
        <Dropdown style={{ minWidth: '40px' }}>
          {locales
            .filter(locale => locale !== currentLocale)
            .map(locale => (
              <LocaleOption key={locale} onClick={() => handleChange(locale as Locale)}>
                {/* {localeLabels[locale as Locale]?.flag}  */}
                {localeLabels[locale as Locale]?.label}
              </LocaleOption>
            ))}
        </Dropdown>
      )}
    </Wrapper>
  )
})
