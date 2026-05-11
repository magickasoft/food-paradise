import { describe, expect, test } from 'bun:test'
import { RECIPES_OBJ } from './recipes'
import { resolveRecipeIngredient } from './recipeIngredients'

describe('resolveRecipeIngredient', () => {
  test('resolves ingredient data from ingredientKey and preserves recipe-specific amount', () => {
    expect(resolveRecipeIngredient({ ingredientKey: 'milk', count: 500 })).toEqual({
      name: 'Молоко',
      count: 500,
      gauge: 'мл',
      img: '/optimize/ingredients/milk.webp',
    })
  })

  test('allows recipe-specific gauge to override the ingredient default gauge', () => {
    expect(resolveRecipeIngredient({ ingredientKey: 'eggs', count: 3, gauge: 'шт.' })).toMatchObject({
      name: 'Яйцо куриное',
      count: 3,
      gauge: 'шт.',
    })
  })

  test('throws when ingredientKey is not present in the ingredient registry', () => {
    expect(() => resolveRecipeIngredient({ ingredientKey: 'missing-ingredient' })).toThrow(
      'Unknown ingredient key: missing-ingredient',
    )
  })

  test('resolves every ingredientKey used by recipes and cooking steps', () => {
    for (const recipes of Object.values(RECIPES_OBJ)) {
      for (const recipe of recipes) {
        for (const ingredient of recipe.ingredients) {
          expect(() => resolveRecipeIngredient(ingredient), `${recipe.key} main ingredients`).not.toThrow()
        }

        for (const step of recipe.cookingRecipe) {
          for (const ingredient of step.ingredients) {
            expect(() => resolveRecipeIngredient(ingredient), `${recipe.key} cooking steps`).not.toThrow()
          }
        }
      }
    }
  })
})
