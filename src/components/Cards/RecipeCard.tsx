'use client'

import styled from 'styled-components'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { minDevice } from '@/styles/device'
import { FiClock, FiStar } from 'react-icons/fi'

const Card = styled.div<{
  variant?: string
}>`
  background: #fffdfa;
  border-radius: 18px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: ${({ variant }) => (variant === 'base' ? '220px' : '100%')};
  min-height: 300px;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 10px 28px rgba(44, 31, 20, 0.08);
  scroll-snap-align: start;

  &:hover {
    transform: translateY(-4px) scale(1.015);
    box-shadow: 0 18px 42px rgba(44, 31, 20, 0.14);
  }
`

const ImageBlock = styled.div<{
  variant?: string
}>`
  position: relative;
  width: 100%;
  height: ${({ variant }) => (variant === 'full' ? '140px' : 'auto')};
  aspect-ratio: 1.35 / 1;
  background: #f5f3f3;
`

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  color: #a08367;
  background: #fff7ed;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px;
  flex: 1;
`

const Title = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #222;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media ${minDevice.laptop} {
    font-size: 16px;
  }
`

const Description = styled.div`
  margin-top: 6px;
  font-size: 12px;
  line-height: 1.5;
  color: #6d6258;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const Characteristic = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  color: #5f554d;
`

const CharItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

export type RecipeCardProps = {
  name: string
  img: string | null
  title: string
  description: string
  time: number
  level: number
  variant?: 'full' | 'base'
}

const levels = ['Легко', 'Средне', 'Сложно']

export const RecipeCard = ({ name, img, title, description, time, level, variant = 'base' }: RecipeCardProps) => {
  return (
    <Link
      href={{
        pathname: '/recipe/[name]',
        params: { name },
      }}
      locale="ru"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <Card variant={variant}>
        <ImageBlock variant={variant}>
          {img ? (
            <Image src={img} alt={title} fill style={{ objectFit: 'cover' }} sizes="220px" />
          ) : (
            <Placeholder>Нет изображения</Placeholder>
          )}
        </ImageBlock>
        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Characteristic>
            <CharItem>
              <FiClock size={14} /> {time} мин
            </CharItem>
            <CharItem>
              <FiStar size={14} color="#f6a623" /> {levels[level - 1]}
            </CharItem>
          </Characteristic>
        </Content>
      </Card>
    </Link>
  )
}
