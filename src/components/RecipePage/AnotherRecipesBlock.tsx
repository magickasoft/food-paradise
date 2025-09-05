'use client'

import { Recipe } from '@/constants/recipes/recipes'
import styled from 'styled-components'
import { DetailsTitle } from '../DetailsTitle'
import { RecipesScroll } from '../RecipesScroll'
import { RecipeCard } from '../Cards/RecipeCard'

const AnotherRecipesContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  padding-bottom: 30px;
`

export function AnotherRecipesBlock({ recipes }: { recipes: Recipe[] }) {
  if (recipes?.length === 0) {
    return null
  }

  return (
    <AnotherRecipesContainer>
      <DetailsTitle>Попробуйте также</DetailsTitle>
      <RecipesScroll>
        {recipes.map(({ key, name, ...recipe }) => (
          <RecipeCard name={name} key={key || name} {...recipe} />
        ))}
      </RecipesScroll>
    </AnotherRecipesContainer>
  )
}
