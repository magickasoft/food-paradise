import { maxDevice } from '@/styles/device'
import styled from 'styled-components'
import { Recipe } from '@/constants/recipes/recipes'
import { DetailCard } from '../Cards'

const RecipeCookingStepsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 16px;

  @media ${maxDevice.laptop} {
    width: 100%;
    border-left: none;
    padding-left: 0;
    text-align: start;
  }
`

const RecipeStep = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media ${maxDevice.laptop} {
    padding: 12px;
    gap: 8px;
  }
`

const InfoWrapper = styled.article`
  width: 100%;
  display: flex;
  padding: 16px;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 8px;
`

const DetailsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;

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
  gap: 10px;
  background: ${props => props.$background || 'transparent'};
  justify-content: ${props => props.$justifyContent || 'flex-start'};
  overflow-x: auto;
  margin-bottom: 20px;
  border-radius: 6px;

  @media ${maxDevice.laptop} {
    height: auto;
  }
`

const RecipeTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
  border-bottom: 1px solid #eee;
  padding-bottom: 8px;

  @media ${maxDevice.laptop} {
    margin-bottom: 5px;
    font-size: 1.2rem;
  }
`

const RecipeDescription = styled.article`
  width: 100%;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  padding-bottom: 16px;
  border-bottom: 1px solid #eee;

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
          <InfoWrapper>
            <RecipeTitle>{`Шаг ${index + 1}`}</RecipeTitle>
            <RecipeDescription>{step.description}</RecipeDescription>
          </InfoWrapper>
          <DetailsWrapper>
            {step.ingredients?.length > 0 && (
              <DetailsCardsContainer>
                {step.ingredients.map(ingredient => (
                  <DetailCard
                    key={`${index}-ingredient-${ingredient.name}`}
                    name={ingredient.name}
                    text={ingredient.count && ingredient.gauge ? `${ingredient.count} ${ingredient.gauge}` : ''}
                    img={ingredient?.img || null}
                    backgroundColor="#f9f9f9"
                  />
                ))}
              </DetailsCardsContainer>
            )}
          </DetailsWrapper>
        </RecipeStep>
      ))}
    </RecipeCookingStepsContainer>
  )
}
