import { describe, expect, test } from 'bun:test'

import { getAllRecipes } from './recipes'

const longHourPattern = /(\d+(?:[,.]\d+)?)(?:[–-](\d+(?:[,.]\d+)?))?\s*(?:часа|часов|час\b)/gi

const toMinutes = (value: string) => Number(value.replace(',', '.')) * 60
const getRequiredStepDescription = (description: string) => description.split(/\(?лучше/i)[0]

const getExplicitHourMinutes = (description: string) => {
  const matches = [...getRequiredStepDescription(description).matchAll(longHourPattern)]

  return matches.map(match => toMinutes(match[1] ?? '0'))
}

const getMinimumStepMinutes = (descriptions: string[]) =>
  descriptions.reduce((maxMinutes, description) => Math.max(maxMinutes, ...getExplicitHourMinutes(description)), 0)

describe('recipe completeness', () => {
  test('all recipes expose main ingredients and equipment', () => {
    const recipes = getAllRecipes()
    const withoutIngredients = recipes.filter(recipe => recipe.ingredients.length === 0).map(recipe => recipe.key)
    const withoutEquipments = recipes.filter(recipe => recipe.equipments.length === 0).map(recipe => recipe.key)

    expect(withoutIngredients).toEqual([])
    expect(withoutEquipments).toEqual([])
  })

  test('all recipes expose content blocks', () => {
    const recipes = getAllRecipes()
    const withoutHistory = recipes.filter(recipe => !recipe.historyDescription?.trim()).map(recipe => recipe.key)
    const withoutTips = recipes.filter(recipe => !recipe.tips?.length).map(recipe => recipe.key)
    const withoutVariations = recipes.filter(recipe => !recipe.variations?.length).map(recipe => recipe.key)

    expect(withoutHistory).toEqual([])
    expect(withoutTips).toEqual([])
    expect(withoutVariations).toEqual([])
  })

  test('global recipe list exposes unique recipe keys', () => {
    const recipes = getAllRecipes()
    const recipeKeys = recipes.map(recipe => recipe.key)

    expect(new Set(recipeKeys).size).toBe(recipeKeys.length)
  })

  test('recipe total time is not shorter than explicit hour-long steps', () => {
    const recipesWithUndercountedTime = getAllRecipes()
      .filter(recipe => {
        const minimumStepMinutes = getMinimumStepMinutes(recipe.cookingRecipe.map(step => step.description))

        return recipe.time < minimumStepMinutes
      })
      .map(recipe => recipe.key)

    expect(recipesWithUndercountedTime).toEqual([])
  })
})
