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
  border-radius: 12px;
  border: 1px solid #eee;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: ${({ variant }) => (variant === 'base' ? '220px' : '100%')};
  min-height: 280px;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
  }
`

const ImageBlock = styled.div<{
  variant?: string
}>`
  position: relative;
  width: 100%;
  height: ${({ variant }) => (variant === 'full' ? '140px' : 'auto')};
  aspect-ratio: 1.3 / 1;
  background: #f5f3f3;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
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
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.4;
  color: #666;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const Characteristic = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  color: #444;
`

const CharItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

type RecipeCardProps = {
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
            <div
              style={{
                width: '100%',
                height: '100%',
                color: '#aaa',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              Нет изображения
            </div>
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
