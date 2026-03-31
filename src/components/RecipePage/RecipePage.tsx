'use client'

import styled from 'styled-components'

import { PageWrapper } from '@/components/PageWrapper'

import { DetailCard } from '@/components/Cards'

import { type Recipe, RECIPES_OBJ } from '@/constants/recipes/recipes'

import { HeaderBlock } from './HeaderBlock'
import { AnotherRecipesBlock } from './AnotherRecipesBlock'
import { TipsBlock } from './TipsBlock'
import { VariationsBlock } from './VariationsBlock'
import { maxDevice } from '@/styles/device'
import { HistoryBlock } from './HistoryBlock'
import CommentSection from '../CommentSection'
import CommentsList from '../CommentsList'
import { WarningBlock } from './WarningBlock'
import { IngredientsBlock } from './IngredientsBlock'
import { EquipmentsBlock } from './EquipmentsBlock'
import { RecipeCookingStepsBlock } from './RecipeCookingStepsBlock'

const RecipeContainer = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;

  margin: 0 auto;
  padding: 24px 0;
  align-items: flex-start;

  @media ${maxDevice.laptop} {
    flex-direction: column;
    padding: 16px;
  }
`

const RecipeDetailsContainer = styled.section`
  flex: 0 0 400px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;

  @media ${maxDevice.laptop} {
    max-width: 100%;
    width: 100%;
  }
`

const RecipeStepsContainer = styled.section`
  flex: 1;
  display: flex;
  min-width: 0;
  flex-direction: column;
  border-radius: 12px;
  gap: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  @media ${maxDevice.laptop} {
    padding: 16px;
  }
`

const Zero = styled.section`
  display: none;
`

const RecipePage = ({ recipe }: { recipe: Recipe | null }) => {
  const category = recipe?.categories?.[0]?.name

  const recipes = category ? RECIPES_OBJ[category]?.slice(0, 10) : []

  return (
    <main>
      <PageWrapper>
        {recipe?.warning ? <WarningBlock text={recipe.warning} /> : null}
        <HeaderBlock recipe={recipe} />
        {recipe && (
          <RecipeContainer>
            <RecipeDetailsContainer>
              <IngredientsBlock data={recipe.ingredients} />
              <TipsBlock tips={recipe?.tips || []} />
              <VariationsBlock variations={recipe?.variations || []} />
              <HistoryBlock history={recipe?.historyDescription} />
            </RecipeDetailsContainer>
            <RecipeStepsContainer>
              <EquipmentsBlock data={recipe.equipments} />
              <RecipeCookingStepsBlock stepsData={recipe.cookingRecipe} />
              <CommentsList list={recipe?.comments || []} />
              <CommentSection recipe={recipe.title} />
            </RecipeStepsContainer>
          </RecipeContainer>
        )}
        <AnotherRecipesBlock recipes={recipes} />
      </PageWrapper>
      <Zero>
        {recipe?.searchRequests?.map(query => {
          return <p key={query}>{query}</p>
        })}
      </Zero>
    </main>
  )
}
export default RecipePage
