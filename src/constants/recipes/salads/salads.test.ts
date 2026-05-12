import { describe, expect, test } from 'bun:test'

import { NEW_YEAR } from '../new-year'
import { SALADS } from '../salads'
import type { RecipeEquipment } from '../recipeEquipments'

const byKey = new Map([...SALADS, ...NEW_YEAR].map(recipe => [recipe.key, recipe]))

const getRecipe = (key: string) => {
  const recipe = byKey.get(key)

  if (!recipe) {
    throw new Error(`Missing salad recipe: ${key}`)
  }

  return recipe
}

const ingredientKeys = (ingredients: { ingredientKey?: string; name?: string }[]) =>
  ingredients.map(ingredient => ingredient.ingredientKey ?? ingredient.name)

const equipmentKeys = (equipments: RecipeEquipment[]) =>
  equipments.flatMap(equipment => ('equipmentKey' in equipment ? [equipment.equipmentKey] : []))

const stepIngredientKeys = (recipe: ReturnType<typeof getRecipe>) =>
  recipe.cookingRecipe.flatMap(step => ingredientKeys(step.ingredients))

type RecipeIngredientAmount = { ingredientKey?: string; count?: number | string }

describe('salad recipes data quality', () => {
  test('all recipes tagged as salads are included in the salads category list', () => {
    const saladKeys = new Set(SALADS.map(recipe => recipe.key))
    const taggedSaladKeys = [...SALADS, ...NEW_YEAR]
      .filter(recipe => recipe.categories.some(category => category.name === 'salads'))
      .map(recipe => recipe.key)

    expect([...saladKeys].sort((left, right) => left.localeCompare(right))).toEqual(
      [...new Set(taggedSaladKeys)].sort((left, right) => left.localeCompare(right)),
    )
  })

  test('grecheskij salad ingredients match the bell pepper promised in the description', () => {
    const recipe = getRecipe('grecheskij-salat')

    expect(recipe.description).toContain('болгарский перец')
    expect(ingredientKeys(recipe.ingredients)).toContain('bellPepper')
    expect(stepIngredientKeys(recipe)).toContain('bellPepper')
  })

  test('cezar uses all listed lemon, oil and seasoning ingredients in cooking steps', () => {
    const recipe = getRecipe('salat-cezar-s-kuritsey')

    expect(stepIngredientKeys(recipe)).toEqual(expect.arrayContaining(['lemonJuice', 'solIPerets']))

    const oilTotal = recipe.cookingRecipe
      .flatMap(step => step.ingredients as RecipeIngredientAmount[])
      .filter(ingredient => ingredient.ingredientKey === 'olivkovoeMaslo')
      .reduce((total, ingredient) => total + Number(ingredient.count ?? 0), 0)

    expect(oilTotal).toBe(3)
  })

  test('seasoning is linked to the step that asks to salt and pepper salads', () => {
    const recipes = [
      'salat-s-avokado-i-krevetkami',
      'salat-kapreze',
      'salat-s-tuntsom-i-yaitsom',
      'teplyj-salat-s-govyadinoj',
      'salat-nisuaz-s-tuntsom',
      'salat-valdorf-s-kuritsey',
      'krabovyi-salat-s-kukuruzoi',
      'salat-olivye-klassicheskii',
      'letnii-salat-s-klubnikoi',
      'gruzinskii-salat-lobio',
    ]

    for (const key of recipes) {
      expect(stepIngredientKeys(getRecipe(key)), key).toContain('solIPerets')
    }
  })

  test('salad equipment covers cutting, mixing and frying workflows', () => {
    expect(equipmentKeys(getRecipe('salat-s-avokado-i-krevetkami').equipments)).toEqual(
      expect.arrayContaining(['knife', 'cutBoard']),
    )
    expect(equipmentKeys(getRecipe('teplyj-salat-s-govyadinoj').equipments)).toEqual(
      expect.arrayContaining(['knife', 'cutBoard', 'salatnitsa']),
    )
    expect(equipmentKeys(getRecipe('salat-nisuaz-s-tuntsom').equipments)).toEqual(
      expect.arrayContaining(['knife', 'cutBoard', 'salatnitsa']),
    )
    expect(equipmentKeys(getRecipe('salat-valdorf-s-kuritsey').equipments)).toEqual(
      expect.arrayContaining(['cutBoard', 'bowl']),
    )
    expect(equipmentKeys(getRecipe('krabovyi-salat-s-kukuruzoi').equipments)).toEqual(
      expect.arrayContaining(['cutBoard', 'bowl']),
    )
    expect(equipmentKeys(getRecipe('salat-olivye-klassicheskii').equipments)).toEqual(
      expect.arrayContaining(['cutBoard', 'bowl']),
    )
    expect(equipmentKeys(getRecipe('letnii-salat-s-klubnikoi').equipments)).toContain('pan')
  })

  test('lobio uses already cooked beans consistently with the ingredient registry and timing', () => {
    const recipe = getRecipe('gruzinskii-salat-lobio')

    expect(recipe.cookingRecipe[0].description).not.toContain('отварите до мягкости')
    expect(recipe.time).toBeLessThanOrEqual(30)
  })
})
