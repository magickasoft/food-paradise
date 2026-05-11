import { describe, expect, test } from 'bun:test'

import { GRILL } from '../grill'
import { LOSOS_NA_KEDROVOY_DOSKE_S_MEDOVO_GORCHICHNYM_SOUSOM } from './losos-na-kedrovoy-doske-s-medovo-gorchichnym-sousom'
import { SHASHLYK_IZ_BARANINY_S_ROZMARINOM } from './shashlyk-iz-baraniny-s-rozmarinom'

const getIngredientKey = (ingredient: { ingredientKey?: string; name?: string }) =>
  ingredient.ingredientKey ?? ingredient.name

describe('grill recipes', () => {
  test('do not recommend unsafe reuse of raw marinades or long room-temperature marinating', () => {
    const descriptions = GRILL.flatMap(recipe => recipe.cookingRecipe.map(step => step.description))

    expect(descriptions).not.toContain(
      'Накройте миску крышкой или пищевой пленкой и оставьте мясо мариноваться минимум на 4 часа при комнатной температуре или на ночь в холодильнике.',
    )
    expect(descriptions).not.toContain(
      'Разожгите мангал. Нанижите курицу на шампуры. Жарьте 10-12 минут, часто переворачивая и смазывая остатками маринада с помощью кисточки в последние 2 минуты.',
    )
    expect(descriptions).not.toContain(
      'Подавайте с дольками лимона, полив оставшимся чесночным маслом. Идеально сочетается с белым вином.',
    )
    expect(descriptions).not.toContain(
      'Жарьте на гриле 8-10 минут, переворачивая и смазывая остатками маринада. Не пересушите — индейка должна оставаться сочной.',
    )
    expect(descriptions.join(' ')).not.toContain('смазывая оставшимся маринадом')
  })

  test('cedar plank salmon timing includes soaking the plank', () => {
    expect(LOSOS_NA_KEDROVOY_DOSKE_S_MEDOVO_GORCHICHNYM_SOUSOM.preparation).toBeGreaterThanOrEqual(75)
  })

  test('lamb skewer timing includes long marinating', () => {
    expect(SHASHLYK_IZ_BARANINY_S_ROZMARINOM.preparation).toBeGreaterThanOrEqual(240)
  })

  test('main ingredient lists stay synchronized with cooking step ingredient lists', () => {
    for (const recipe of GRILL) {
      const mainIngredientKeys = new Set(recipe.ingredients.map(getIngredientKey))
      const stepIngredientKeys = new Set(recipe.cookingRecipe.flatMap(step => step.ingredients.map(getIngredientKey)))

      const extraStepIngredients = [...stepIngredientKeys].filter(key => !mainIngredientKeys.has(key))
      const unusedMainIngredients = [...mainIngredientKeys].filter(key => !stepIngredientKeys.has(key))

      expect(extraStepIngredients, `${recipe.key}: step ingredients must be present in main ingredients`).toEqual([])
      expect(unusedMainIngredients, `${recipe.key}: main ingredients must be used in cooking steps`).toEqual([])
    }
  })
})
