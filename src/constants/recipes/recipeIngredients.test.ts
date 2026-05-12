import { describe, expect, test } from 'bun:test'
import { RECIPES_OBJ, getAllRecipes } from './recipes'
import { resolveRecipeIngredient } from './recipeIngredients'

const getIngredientKey = (ingredient: { ingredientKey?: string; name?: string }) =>
  ingredient.ingredientKey ?? ingredient.name

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

  test('step ingredients stay present in main recipe ingredients', () => {
    for (const recipe of getAllRecipes()) {
      const mainIngredientKeys = new Set(recipe.ingredients.map(getIngredientKey))
      const extraStepIngredients = recipe.cookingRecipe
        .flatMap(step => step.ingredients.map(getIngredientKey))
        .filter(ingredientKey => !mainIngredientKeys.has(ingredientKey))

      expect(extraStepIngredients, `${recipe.key}: step ingredients must be present in main ingredients`).toEqual([])
    }
  })

  test('recipes do not leave every cooking step without ingredient links', () => {
    const recipesWithoutStepIngredients = getAllRecipes()
      .filter(recipe => recipe.cookingRecipe.every(step => step.ingredients.length === 0))
      .map(recipe => recipe.key)

    expect(recipesWithoutStepIngredients).toEqual([])
  })

  test('recipe ingredient links include amount metadata', () => {
    for (const recipe of getAllRecipes()) {
      const allIngredients = [
        ...recipe.ingredients.map((ingredient, index) => ({ ingredient, location: `ingredients[${index}]` })),
        ...recipe.cookingRecipe.flatMap((step, stepIndex) =>
          step.ingredients.map((ingredient, ingredientIndex) => ({
            ingredient,
            location: `cookingRecipe[${stepIndex}].ingredients[${ingredientIndex}]`,
          })),
        ),
      ]

      const bareIngredients = allIngredients
        .filter(
          ({ ingredient }) =>
            getIngredientKey(ingredient) && ingredient.count === undefined && ingredient.gauge === undefined,
        )
        .map(({ ingredient, location }) => `${location}: ${getIngredientKey(ingredient)}`)

      expect(bareIngredients, `${recipe.key}: ingredient links must include count and/or gauge`).toEqual([])
    }
  })
})
