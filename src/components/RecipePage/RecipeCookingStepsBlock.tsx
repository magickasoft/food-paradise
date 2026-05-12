import { maxDevice } from '@/styles/device'
import styled from 'styled-components'
import { Recipe } from '@/constants/recipes/recipes'
import { resolveRecipeIngredient } from '@/constants/recipes/recipeIngredients'
import { formatStepIngredient } from './recipeStepIngredientUtils'

const RecipeCookingStepsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 22px;

  @media ${maxDevice.laptop} {
    width: 100%;
    border-left: none;
    padding-left: 0;
    text-align: start;
  }
`

const RecipeStep = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr);
  gap: 18px;
  padding: 28px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 14px 40px rgba(44, 31, 20, 0.08);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 22px 55px rgba(44, 31, 20, 0.12);
  }

  @media ${maxDevice.laptop} {
    grid-template-columns: 40px minmax(0, 1fr);
    padding: 18px;
    gap: 12px;
  }
`

const StepBadge = styled.div`
  width: 48px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #fff0dc;
  color: #e75e02;
  font-size: 1rem;
  font-weight: 800;
  box-shadow: inset 0 0 0 1px rgba(255, 132, 2, 0.16);

  @media ${maxDevice.laptop} {
    width: 40px;
    height: 40px;
    font-size: 0.9rem;
  }
`

const StepContent = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const InfoWrapper = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const DetailsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media ${maxDevice.laptop} {
    gap: 8px;
  }
`

const DetailsCardsContainer = styled.section<{
  $width?: string
  $justifyContent?: string
  $background?: string
}>`
  width: ${props => props.$width || '100%'};
  max-width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  background: ${props => props.$background || 'transparent'};
  justify-content: ${props => props.$justifyContent || 'flex-start'};
  margin-bottom: 0;
  border-radius: 6px;

  @media ${maxDevice.laptop} {
    height: auto;
  }
`

const StepIngredientChip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 8px 12px;
  border: 1px solid #e6dfd6;
  border-radius: 10px;
  background: #fffaf5;
  color: #3d352d;
  font-size: 0.85rem;
  line-height: 1.2;
  white-space: nowrap;

  &::before {
    content: '';
    width: 5px;
    height: 5px;
    flex: 0 0 auto;
    border-radius: 50%;
    background: #ff8402;
    opacity: 0.65;
  }
`

const RecipeTitle = styled.h2`
  font-size: 1.35rem;
  font-weight: 800;
  margin-bottom: 0;
  color: #241b14;
  letter-spacing: 0;

  @media ${maxDevice.laptop} {
    font-size: 1.2rem;
  }
`

const RecipeDescription = styled.article`
  width: 100%;
  font-size: 1rem;
  line-height: 1.75;
  color: #5f554d;
  max-width: 780px;

  @media ${maxDevice.laptop} {
    width: 100%;
    font-size: 0.85rem;
  }
`

export const RecipeCookingStepsBlock = ({ stepsData }: { stepsData: Recipe['cookingRecipe'] }) => {
  return (
    <RecipeCookingStepsContainer>
      {stepsData?.map((step, index) => (
        <RecipeStep key={index}>
          <StepBadge>{index + 1}</StepBadge>
          <StepContent>
            <InfoWrapper>
              <RecipeTitle>{`Шаг ${index + 1}`}</RecipeTitle>
              <RecipeDescription>{step.description}</RecipeDescription>
            </InfoWrapper>
            <DetailsWrapper>
              {step.ingredients?.length > 0 && (
                <DetailsCardsContainer>
                  {step.ingredients.map(ingredient => {
                    const resolvedIngredient = resolveRecipeIngredient(ingredient)

                    return (
                      <StepIngredientChip key={`${index}-ingredient-${resolvedIngredient.name}`}>
                        {formatStepIngredient(resolvedIngredient)}
                      </StepIngredientChip>
                    )
                  })}
                </DetailsCardsContainer>
              )}
            </DetailsWrapper>
          </StepContent>
        </RecipeStep>
      ))}
    </RecipeCookingStepsContainer>
  )
}
