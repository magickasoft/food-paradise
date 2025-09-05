'use client'

import styled from 'styled-components'

import { PageWrapper } from '@/components/PageWrapper'

import { DetailCard } from '@/components/Cards'

import { NoList } from '@/components/NoList'

import { type Recipe, RECIPES_OBJ } from '@/constants/recipes/recipes'

import { DetailsTitle } from '../DetailsTitle'
import { HeaderBlock } from './HeaderBlock'
import { AnotherRecipesBlock } from './AnotherRecipesBlock'
import { TipsBlock } from './TipsBlock'
import { VariationsBlock } from './VariationsBlock'
import { maxDevice } from '@/styles/device'

const DetailsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #f9f9f9;
  margin-bottom: 20px;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;

  @media ${maxDevice.laptop} {
    flex-direction: column;
    padding: 16px;
  }
`

const IngredientsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 0 20px;

  @media ${maxDevice.laptop} {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #ddd;
    padding-right: 0;
    padding-left: 0;
    padding-bottom: 20px;
  }
`

const EquipmentsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;

  @media ${maxDevice.laptop} {
    width: 100%;
    border-left: none;
    padding-left: 0;
    text-align: start;
  }
`

const DetailsCardsContainer = styled.section<{
  width?: string
  $justifyContent?: string
  $background?: string
}>`
  width: ${props => props.width || '100%'};
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

const RecipeStepsContainer = styled.section`
  width: 100%;
  max-width: 100%;
  display: flex;
  gap: 20px;
  flex-direction: row;

  @media ${maxDevice.laptop} {
    flex-direction: column;
  }
`

const RecipeDetailsBlock = styled.section`
  width: calc(30% - 10px);
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: auto;
  border-radius: 8px;

  @media ${maxDevice.laptop} {
    width: 100%;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`

const RecipeStepBlock = styled.section`
  width: calc(70% - 10px);
  display: flex;
  padding: 20px;
  flex-direction: column;
  border-radius: 8px;
  background-color: #fff;

  @media ${maxDevice.laptop} {
    width: 100%;
    margin-top: 0px;
    margin-bottom: 20px;
  }
`

const RecipeStep = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 10px;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;

  @media ${maxDevice.laptop} {
    padding: 15px;
    margin-bottom: 10px;
  }
`

const RecipeTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;

  @media ${maxDevice.laptop} {
    margin-bottom: 5px;
    font-size: 1.2rem;
  }
`

const RecipeDescription = styled.article`
  width: 80%;
  margin-bottom: 30px;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  text-align: left;

  @media ${maxDevice.laptop} {
    width: 100%;
    font-size: 0.85rem;
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
        <HeaderBlock recipe={recipe} />
        {recipe && (
          <>
            <DetailsContainer>
              <IngredientsContainer>
                <DetailsTitle>Ингредиенты</DetailsTitle>
                {recipe.ingredients.length ? (
                  <DetailsCardsContainer>
                    {recipe.ingredients.map(ingredient => (
                      <DetailCard
                        key={ingredient.name}
                        name={ingredient.name}
                        text={ingredient.count && ingredient.gauge ? `${ingredient.count} ${ingredient.gauge}` : ''}
                        img={ingredient?.img || null}
                      />
                    ))}
                  </DetailsCardsContainer>
                ) : (
                  <NoList value="Список ингредиентов будет доступен позднее..." />
                )}
              </IngredientsContainer>
            </DetailsContainer>
            <RecipeStepsContainer>
              <RecipeDetailsBlock>
                <EquipmentsContainer>
                  <DetailsTitle>Оборудование</DetailsTitle>
                  {recipe.equipments.length ? (
                    <DetailsCardsContainer $background="#fff">
                      {recipe.equipments.map(equipment => (
                        <DetailCard
                          key={equipment.name}
                          name={equipment.name}
                          img={equipment?.img || null}
                          variant="short"
                        />
                      ))}
                    </DetailsCardsContainer>
                  ) : (
                    <NoList value="Список оборудования будет доступен позднее..." />
                  )}
                </EquipmentsContainer>
                <TipsBlock tips={recipe?.tips || []} />
                <VariationsBlock variations={recipe?.variations || []} />
              </RecipeDetailsBlock>
              <RecipeStepBlock>
                {recipe.cookingRecipe?.map((step, index) => (
                  <div key={index}>
                    <RecipeStep>
                      <RecipeTitle>{`Шаг ${index + 1}`}</RecipeTitle>
                      <RecipeDescription>{step.description}</RecipeDescription>
                    </RecipeStep>
                    {step.ingredients?.length > 0 && (
                      <DetailsCardsContainer width="100%">
                        {step.ingredients.map(ingredient => (
                          <DetailCard
                            key={ingredient.name}
                            name={ingredient.name}
                            text={ingredient.count && ingredient.gauge ? `${ingredient.count} ${ingredient.gauge}` : ''}
                            img={ingredient?.img || null}
                            backgroundColor="#f9f9f9"
                            variant="short"
                          />
                        ))}
                      </DetailsCardsContainer>
                    )}
                  </div>
                ))}
              </RecipeStepBlock>
            </RecipeStepsContainer>
          </>
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
