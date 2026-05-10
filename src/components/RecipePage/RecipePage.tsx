'use client'

import styled from 'styled-components'

import { PageWrapper } from '@/components/PageWrapper'

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
  display: grid;
  grid-template-columns: minmax(280px, 340px) minmax(0, 1fr);
  gap: 36px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  align-items: flex-start;

  @media ${maxDevice.laptop} {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`

const RecipePageShell = styled.main`
  background:
    radial-gradient(circle at top left, rgba(255, 132, 2, 0.08), transparent 34rem),
    linear-gradient(180deg, #fffaf5 0, #fff 420px);
`

const RecipeDetailsContainer = styled.section`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 0;
  position: sticky;
  top: 96px;

  @media ${maxDevice.laptop} {
    width: 100%;
    position: static;
  }
`

const RecipeStepsContainer = styled.section`
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 30px;

  @media ${maxDevice.laptop} {
    width: 100%;
  }
`

const Zero = styled.section`
  display: none;
`

const RecipePage = ({ recipe }: { recipe: Recipe | null }) => {
  const category = recipe?.categories?.[0]?.name

  const recipes = category ? RECIPES_OBJ[category]?.slice(0, 10) : []

  return (
    <RecipePageShell>
      <PageWrapper>
        {recipe?.warning ? <WarningBlock text={recipe.warning} /> : null}
        <HeaderBlock recipe={recipe} />
        {recipe && (
          <RecipeContainer>
            <RecipeDetailsContainer>
              <IngredientsBlock data={recipe.ingredients} recipeName={recipe.title} />
              <TipsBlock tips={recipe?.tips || []} />
              <VariationsBlock variations={recipe?.variations || []} />
              <HistoryBlock history={recipe?.historyDescription} />
            </RecipeDetailsContainer>
            <RecipeStepsContainer id="cooking-steps">
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
    </RecipePageShell>
  )
}
export default RecipePage
