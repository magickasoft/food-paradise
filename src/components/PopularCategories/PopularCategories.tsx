'use client'

import styled from 'styled-components'

import { Link } from '@/i18n/navigation'
import { RecipeCard } from '../Cards/RecipeCard'
import { CATEGORIES_ARR } from './constants'
import { CategoryCard } from '../Cards/CategoryCard'
import { RECIPES_OBJ } from '@/constants/recipes/recipes'
import { maxDevice } from '@/styles/device'
import { RecipesScroll } from '../RecipesScroll'

const Container = styled.section`
  max-width: 1280px;
  overflow: hidden;
  padding: 0;
  margin: 0 auto 40px;

  @media ${maxDevice.tablet} {
    padding: 0 16px;
  }
`

const Wrapper = styled.div`
  padding: 0;
`

const Title = styled.h2`
  margin: 0 0 10px;
  color: #241b14;
  font-size: 1.55rem;
  line-height: 1.2;
  font-weight: 800;

  @media ${maxDevice.tablet} {
    font-size: 1.35rem;
  }
`

const Description = styled.p`
  max-width: 680px;
  margin: 0 0 28px;
  color: #6d6258;
  font-size: 0.98rem;
  line-height: 1.65;
`

const CategoryRow = styled.div`
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  align-items: stretch;
  margin-bottom: 30px;
  gap: 18px;

  @media ${maxDevice.tablet} {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`

const CategoryCardWrapper = styled.div`
  flex-shrink: 0;

  @media ${maxDevice.tablet} {
    width: 100%;
  }
`

const RecipesColumn = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const CategoryLink = styled(Link)`
  align-self: flex-start;
  color: #e75e02;
  font-size: 0.92rem;
  font-weight: 800;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const PopularCategories = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Популярные рецепты по категориям</Title>
        <Description>
          Быстрый вход в самые востребованные подборки: выберите категорию или сразу откройте рецепт.
        </Description>

        {CATEGORIES_ARR.map(({ name, key, ...category }) => {
          const recipes = RECIPES_OBJ[name]?.slice(0, 6) || []

          return (
            <CategoryRow key={key || name}>
              <CategoryCardWrapper>
                <CategoryCard key={key || name} name={name} {...category} variant="slider" />
              </CategoryCardWrapper>

              {recipes.length > 0 && (
                <RecipesColumn>
                  <RecipesScroll>
                    {recipes.map(({ key, name, ...recipe }) => (
                      <RecipeCard name={name} key={key || name} {...recipe} />
                    ))}
                  </RecipesScroll>
                  <CategoryLink href={{ pathname: '/categories/[name]', params: { name } }} locale="ru">
                    Все рецепты категории
                  </CategoryLink>
                </RecipesColumn>
              )}
            </CategoryRow>
          )
        })}
      </Wrapper>
    </Container>
  )
}
