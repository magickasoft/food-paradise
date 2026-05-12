import { describe, expect, test } from 'bun:test'

import { HEALTHY } from '../healthy'
import type { RecipeEquipment } from '../recipeEquipments'

const byKey = new Map(HEALTHY.map(recipe => [recipe.key, recipe]))

const getRecipe = (key: string) => {
  const recipe = byKey.get(key)

  if (!recipe) {
    throw new Error(`Missing healthy recipe: ${key}`)
  }

  return recipe
}

const ingredientKeys = (ingredients: { ingredientKey?: string; name?: string }[]) =>
  ingredients.map(ingredient => ingredient.ingredientKey ?? ingredient.name)

const equipmentKeys = (equipments: RecipeEquipment[]) =>
  equipments.flatMap(equipment => ('equipmentKey' in equipment ? [equipment.equipmentKey] : []))

describe('healthy recipes data quality', () => {
  test('smuzi boul category and sugar claims match dairy and honey ingredients', () => {
    const recipe = getRecipe('smuzi-boul-s-chia')

    expect(recipe.categories.map(category => category.name)).not.toContain('vegan')
    expect(recipe.metaSeo.description).not.toContain('Без сахара')
    expect(recipe.metaSeo['og:description']).not.toContain('Без сахара')
  })

  test('tykvennyj sup includes every ingredient used in the instructions', () => {
    const recipe = getRecipe('tykvennyj-sup-s-imbirem')
    const mainIngredients = ingredientKeys(recipe.ingredients)
    const stepIngredients = recipe.cookingRecipe.map(step => ingredientKeys(step.ingredients))

    expect(mainIngredients).toEqual(expect.arrayContaining(['olivkovoeMaslo', 'water', 'solIPerets', 'pumpkinSeeds']))
    expect(stepIngredients[0]).toContain('olivkovoeMaslo')
    expect(stepIngredients[1]).toEqual(expect.arrayContaining(['water', 'kurkuma']))
    expect(stepIngredients[2]).toEqual(expect.arrayContaining(['kokosovoeMoloko', 'solIPerets', 'pumpkinSeeds']))
  })

  test('kinoa boul step ingredients and equipment match the written workflow', () => {
    const recipe = getRecipe('kinoa-boul-s-lososem')

    expect(recipe.metaSeo.title).not.toContain('за 20 минут')
    expect(recipe.metaSeo['og:title']).not.toContain('за 20 минут')
    expect(recipe.metaSeo.twitterTitle).not.toContain('за 20 минут')
    expect(equipmentKeys(recipe.equipments)).toEqual(expect.arrayContaining(['oven', 'pot', 'knife', 'cutBoard']))
    expect(equipmentKeys(recipe.equipments)).not.toContain('skovorodaGril')
    expect(ingredientKeys(recipe.cookingRecipe[0].ingredients)).toEqual(
      expect.arrayContaining(['olivkovoeMaslo', 'solIPerets']),
    )
  })

  test('farshirovannye pertsy step ingredients and equipment match the written workflow', () => {
    const recipe = getRecipe('farshirovannye-pertsy-s-kinoa')

    expect(equipmentKeys(recipe.equipments)).toEqual(
      expect.arrayContaining(['oven', 'pan', 'pot', 'knife', 'cutBoard']),
    )
    expect(ingredientKeys(recipe.cookingRecipe[0].ingredients)).toContain('olivkovoeMaslo')
    expect(ingredientKeys(recipe.cookingRecipe[1].ingredients)).toContain('solIPerets')
  })

  test('ragu social titles describe the ragu recipe', () => {
    const recipe = getRecipe('ragu-iz-kabachkov-v-smetane')

    expect(recipe.metaSeo['og:title']).toBe(recipe.metaSeo.title)
    expect(recipe.metaSeo.twitterTitle).toBe(recipe.metaSeo.title)
  })

  test('ovsyanoblin equipment includes the whisk used in the instructions', () => {
    const recipe = getRecipe('ovsyanoblin')

    expect(equipmentKeys(recipe.equipments)).toContain('whisk')
  })
})
