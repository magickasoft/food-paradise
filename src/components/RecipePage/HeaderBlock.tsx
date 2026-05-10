'use client'

import styled from 'styled-components'

import { InfoBlock } from '@/components/RecipePage'
import { Recipe } from '@/constants/recipes/recipes'
import { maxDevice } from '@/styles/device'
import { ControlBlock } from './ControlBlock'

const HeaderContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
  padding: 24px 0 42px;

  @media ${maxDevice.laptop} {
    padding: 12px 16px 30px;
  }

  @media ${maxDevice.mobileL} {
    padding: 12px 12px 28px;
  }
`

const Header = styled.header`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(360px, 0.82fr);
  gap: 36px;
  align-items: center;

  @media ${maxDevice.laptop} {
    grid-template-columns: 1fr;
    gap: 22px;
  }
`

const TitleContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 12px 0;

  @media ${maxDevice.laptop} {
    order: 2;
  }
`

const ImageContainer = styled.article`
  position: relative;
  display: flex;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 24px;
  background: #f4eee6;
  box-shadow: 0 24px 60px rgba(48, 34, 24, 0.18);

  @media ${maxDevice.laptop} {
    aspect-ratio: 1.5 / 1;
    order: 1;
    width: calc(100% + 32px);
    margin: -12px -16px 0;
    border-radius: 0 0 20px 20px;
  }

  @media ${maxDevice.mobileL} {
    width: calc(100% + 24px);
    margin: -12px -12px 0;
    border-radius: 0 0 20px 20px;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 48%, rgba(42, 24, 10, 0.18) 100%);
    pointer-events: none;
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.01);
`

const Placeholder = styled.article`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #fff7ed, #ead9c7);
  color: #9a7954;
  font-size: 1.2rem;
  font-weight: 500;
  font-style: italic;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  max-width: 760px;
  margin-bottom: 18px;
  line-height: 1.05;
  text-align: left;
  font-size: clamp(2.15rem, 4vw, 4.5rem);
  letter-spacing: 0;
  color: #211a15;

  @media ${maxDevice.laptop} {
    max-width: 100%;
  }
`

const Description = styled.article`
  max-width: 680px;
  margin-top: 8px;
  font-size: 1.05rem;
  line-height: 1.75;
  text-align: left;
  color: #65594f;

  @media ${maxDevice.laptop} {
    font-size: 0.9rem;
    line-height: 1.65;
  }
`

export function HeaderBlock({ recipe }: { recipe: Recipe | null }) {
  return (
    <HeaderContainer>
      {!recipe ? (
        <Title>Recipe not found</Title>
      ) : (
        <Header>
          <TitleContainer>
            <Title>{recipe.title}</Title>
            <InfoBlock
              rating={recipe.rating}
              commentsCount={recipe.comments ? recipe.comments.length : 0}
              preparation={recipe.preparation}
              time={recipe.time}
              calories={recipe.calories}
            />
            <ControlBlock />
            <Description>{recipe.description}</Description>
          </TitleContainer>
          <ImageContainer>
            {recipe.img ? <Image src={recipe.img} alt={recipe.name} /> : <Placeholder>Нет изображения</Placeholder>}
          </ImageContainer>
        </Header>
      )}
    </HeaderContainer>
  )
}
