'use client'

import styled from 'styled-components'

import { InfoBlock } from '@/components/RecipePage'
import { Recipe } from '@/constants/recipes/recipes'
import { maxDevice } from '@/styles/device'

const HeaderContainer = styled.div`
  max-width: 1800px;
  margin: 0 auto;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
  overflow: hidden;
  padding-top: 20px;
`

const Header = styled.header`
  display: flex;
  max-height: 90vh;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;

  @media ${maxDevice.laptop} {
    flex-direction: column;
    max-height: none;
  }
`

const TitleContainer = styled.article`
  width: 60%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20px 20px 20px;
  border-radius: 8px 0 0 8px;

  @media ${maxDevice.laptop} {
    width: 100%;
    border-radius: 8px 8px 0 0;
    padding: 16px;
    order: 2;
  }
`

const ImageContainer = styled.article`
  width: 40%;
  display: flex;
  height: auto;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 8px;

  @media ${maxDevice.laptop} {
    width: 100%;
    border-radius: 0 0 8px 8px;
    aspect-ratio: 1.5 / 1;
    order: 1;
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0 8px 0 0;
`

const Placeholder = styled.article`
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, #f9f9f9, #ddd);
  color: #777;
  font-size: 1.2rem;
  font-weight: 500;
  font-style: italic;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 8px 0 0;
`

const Title = styled.h1`
  width: 80%;
  margin-bottom: 10px;
  line-height: 1.2;
  text-align: left;
  font-size: 2rem;

  @media ${maxDevice.laptop} {
    width: 100%;
    font-size: 1.5rem;
  }
`

const Description = styled.article`
  width: 80%;
  margin-bottom: 10px;
  font-size: 1rem;
  line-height: 1.6;
  text-align: justify;

  @media ${maxDevice.laptop} {
    width: 100%;
    font-size: 0.9rem;
  }
`

const InfoContainer = styled.article`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-content: center;

  @media ${maxDevice.laptop} {
    flex-direction: row;
    gap: 8px;
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
            <Description>{recipe.description}</Description>
            <InfoContainer>
              {recipe.preparation && <InfoBlock name="Подготовка" value={recipe.preparation} gauge="мин" />}
              <InfoBlock name="Готовка" value={recipe.time} gauge="мин" />
              {recipe.calories && <InfoBlock name="Калорийность" value={recipe.calories} gauge="ккал" />}
            </InfoContainer>
          </TitleContainer>
          <ImageContainer>
            {recipe.img ? <Image src={recipe.img} alt={recipe.name} /> : <Placeholder>Нет изображения</Placeholder>}
          </ImageContainer>
        </Header>
      )}
    </HeaderContainer>
  )
}
