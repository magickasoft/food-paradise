import { describe, expect, test } from 'bun:test'

import { GRILL } from '../grill'
import { LOSOS_NA_KEDROVOY_DOSKE_S_MEDOVO_GORCHICHNYM_SOUSOM } from './losos-na-kedrovoy-doske-s-medovo-gorchichnym-sousom'
import { KREVETKI_NA_GRILE_S_CHESNOCHNYM_MASLOM } from './krevetki-na-grile-s-chesnochnym-maslom'
import { SHASHLYK_IZ_BARANINY_S_ROZMARINOM } from './shashlyk-iz-baraniny-s-rozmarinom'
import { SHASHLYK_IZ_KURINOGO_BEDRA } from './shashlyk-iz-kurinogo-bedra'
import { SHASHLYK_IZ_KURINYH_GRUDOK } from './shashlyk-iz-kurinyh-grudok'

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

  test('long chicken marinating happens in the fridge', () => {
    expect(SHASHLYK_IZ_KURINYH_GRUDOK.cookingRecipe[1].description).toContain('уберите в холодильник')
    expect(SHASHLYK_IZ_KURINOGO_BEDRA.cookingRecipe[2].description).toContain('в холодильник')
  })

  test('wooden shrimp skewers are equipment and are soaked before grilling', () => {
    const ingredientKeys = KREVETKI_NA_GRILE_S_CHESNOCHNYM_MASLOM.ingredients.map(getIngredientKey)
    const equipmentKeys = KREVETKI_NA_GRILE_S_CHESNOCHNYM_MASLOM.equipments.map(equipment => equipment.equipmentKey)

    expect(ingredientKeys).not.toContain('derevyannyeShpazhki')
    expect(equipmentKeys).toContain('derevyannyeShpazhki')
    expect(KREVETKI_NA_GRILE_S_CHESNOCHNYM_MASLOM.cookingRecipe[2].description).toContain('замочите в воде')
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
