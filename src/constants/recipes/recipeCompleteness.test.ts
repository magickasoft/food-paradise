import { describe, expect, test } from 'bun:test'

import { RECIPES_OBJ } from './recipes'

describe('recipe completeness', () => {
  test('all recipes expose main ingredients and equipment', () => {
    const recipes = Object.values(RECIPES_OBJ).flat()
    const withoutIngredients = recipes.filter(recipe => recipe.ingredients.length === 0).map(recipe => recipe.key)
    const withoutEquipments = recipes.filter(recipe => recipe.equipments.length === 0).map(recipe => recipe.key)

    expect(withoutIngredients).toEqual([])
    expect(withoutEquipments).toEqual([])
  })

  test('all recipes expose content blocks', () => {
    const recipes = Object.values(RECIPES_OBJ).flat()
    const withoutHistory = recipes.filter(recipe => !recipe.historyDescription?.trim()).map(recipe => recipe.key)
    const withoutTips = recipes.filter(recipe => !recipe.tips?.length).map(recipe => recipe.key)
    const withoutVariations = recipes.filter(recipe => !recipe.variations?.length).map(recipe => recipe.key)

    expect(withoutHistory).toEqual([])
    expect(withoutTips).toEqual([])
    expect(withoutVariations).toEqual([])
  })
})
