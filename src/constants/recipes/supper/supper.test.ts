import { describe, expect, test } from 'bun:test'

import { SUPPER } from '../supper'
import type { RecipeEquipment } from '../recipeEquipments'

const byKey = new Map(SUPPER.map(recipe => [recipe.key, recipe]))

const getRecipe = (key: string) => {
  const recipe = byKey.get(key)

  if (!recipe) {
    throw new Error(`Missing supper recipe: ${key}`)
  }

  return recipe
}

const ingredientKeys = (ingredients: { ingredientKey?: string; name?: string }[]) =>
  ingredients.map(ingredient => ingredient.ingredientKey ?? ingredient.name)

const equipmentKeys = (equipments: RecipeEquipment[]) =>
  equipments.flatMap(equipment => ('equipmentKey' in equipment ? [equipment.equipmentKey] : []))

const text = (values: string[]) => values.join(' ').toLowerCase()
type RecipeIngredientAmount = { ingredientKey?: string; count?: number | string }

const sumStepIngredientCount = (recipe: ReturnType<typeof getRecipe>, ingredientKey: string) =>
  recipe.cookingRecipe.reduce((total, step) => {
    const ingredients = step.ingredients as RecipeIngredientAmount[]
    const stepTotal = ingredients
      .filter(ingredient => ingredient.ingredientKey === ingredientKey)
      .reduce((sum, ingredient) => sum + Number(ingredient.count ?? 0), 0)

    return total + stepTotal
  }, 0)

describe('supper recipes data quality', () => {
  test('uzbekskij plov time accounts for soaking, cooking and resting', () => {
    const recipe = getRecipe('uzbekskij-plov-s-govyadinoj')

    expect(recipe.preparation ?? 0).toBeGreaterThanOrEqual(40)
    expect(recipe.time).toBeGreaterThanOrEqual(190)
  })

  test('vegan ratatui does not recommend dairy additions', () => {
    const recipe = getRecipe('ratatui-s-baklazhanami')
    const suggestions = text([
      ...(recipe.tips ?? []),
      ...(recipe.variations ?? []).flatMap(variation => [variation.name, variation.changes]),
    ])

    expect(suggestions).not.toContain('рикот')
    expect(suggestions).not.toContain('фет')
    expect(suggestions).not.toContain('пармезан')
    expect(suggestions).not.toContain('моцарел')
  })

  test('makarony s syrom step ingredients and equipment match the sauce and topping workflow', () => {
    const recipe = getRecipe('makarony-s-syrom')

    expect(equipmentKeys(recipe.equipments)).toContain('pan')
    expect(ingredientKeys(recipe.cookingRecipe[1].ingredients)).toEqual(
      expect.arrayContaining(['slivochnoeMaslo', 'garlic', 'solIPerets']),
    )
    expect(ingredientKeys(recipe.cookingRecipe[2].ingredients)).toEqual(
      expect.arrayContaining(['motsarella', 'parmezan']),
    )
  })

  test('kotlety s pyure includes frying oil, breading, seasoning and required equipment', () => {
    const recipe = getRecipe('kotlety-s-pyure')

    expect(ingredientKeys(recipe.ingredients)).toContain('rastitelnoeMaslo')
    expect(equipmentKeys(recipe.equipments)).toEqual(expect.arrayContaining(['pot', 'bowl']))
    expect(ingredientKeys(recipe.cookingRecipe[0].ingredients)).toEqual(
      expect.arrayContaining(['panirovochnyeSuhari', 'solIPerets']),
    )
    expect(ingredientKeys(recipe.cookingRecipe[1].ingredients)).toContain('rastitelnoeMaslo')
  })

  test('rybnye kotlety s pyure includes milk and all mince ingredients in steps', () => {
    const recipe = getRecipe('rybnye-kotlety-s-pyure')

    expect(ingredientKeys(recipe.ingredients)).toContain('milk')
    expect(ingredientKeys(recipe.cookingRecipe[0].ingredients)).toEqual(
      expect.arrayContaining(['yaytso', 'mannayaKrupa', 'solIPerets']),
    )
    expect(ingredientKeys(recipe.cookingRecipe[2].ingredients)).toContain('milk')
  })

  test('kuritsa gril s kinoa includes cooking, cutting and baking equipment plus seasoning in first step', () => {
    const recipe = getRecipe('kuritsa-gril-s-kinoa')

    expect(equipmentKeys(recipe.equipments)).toEqual(expect.arrayContaining(['pot', 'knife', 'cutBoard', 'bakingTray']))
    expect(ingredientKeys(recipe.cookingRecipe[0].ingredients)).toContain('solIPerets')
  })

  test('kartofelnaya zapekanka includes oil, seasoning and prep equipment', () => {
    const recipe = getRecipe('kartofelnaya-zapekanka-s-farshem')

    expect(equipmentKeys(recipe.equipments)).toEqual(expect.arrayContaining(['knife', 'cutBoard']))
    expect(ingredientKeys(recipe.cookingRecipe[0].ingredients)).toEqual(
      expect.arrayContaining(['rastitelnoeMaslo', 'solIPerets']),
    )
  })

  test('losos v medovo gorchichnom souse uses all oil and seasoning in steps', () => {
    const recipe = getRecipe('losos-v-medovo-gorchichnom-souse')

    expect(ingredientKeys(recipe.cookingRecipe[1].ingredients)).toContain('solIPerets')
    expect(sumStepIngredientCount(recipe, 'olivkovoeMaslo')).toBe(2)
  })

  test('ribay steak uses consistent thickness and doneness guidance', () => {
    const recipe = getRecipe('stejk-ribaj-na-elektrogrile')

    expect(recipe.description).toContain('2 см')
    expect(recipe.description).toContain('medium rare')
    expect(recipe.description).not.toContain('2,5 см')
    expect(recipe.description).not.toContain('medium (средняя)')
  })
})
