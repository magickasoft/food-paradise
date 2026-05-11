import { describe, expect, test } from 'bun:test'

import { BLINY } from './bliny'
import { OVSJANAJA_KASHA_S_JABLOKAMI_I_KORICEJ } from './ovsjanaja-kasha-s-jablokami-i-koricej'
import { SCRAMBLED_EGGS } from './scrambled-eggs'
import { SCRAMBLED_EGGS_SHAKSHUKA } from './scrambled-eggs-shakshuka'
import { SCRAMBLED_EGGS_WITH_BROCCOLI } from './scrambled-eggs-with-broccoli'
import { SCRAMBLED_EGGS_WITH_SAUSAGES_AND_BEANS } from './scrambled-eggs-with-sausages-and-beans'

describe('breakfast recipes', () => {
  test('broccoli scrambled eggs uses the same egg count in ingredients and steps', () => {
    const mainEggs = SCRAMBLED_EGGS_WITH_BROCCOLI.ingredients.find(ingredient => ingredient.ingredientKey === 'eggs')
    const stepEggs = SCRAMBLED_EGGS_WITH_BROCCOLI.cookingRecipe
      .flatMap(step => step.ingredients)
      .find(ingredient => ingredient.ingredientKey === 'eggs')

    expect(stepEggs?.count).toBe(mainEggs?.count)
  })

  test('english breakfast step amounts do not exceed main ingredient amounts', () => {
    const mainIngredients = new Map(
      SCRAMBLED_EGGS_WITH_SAUSAGES_AND_BEANS.ingredients.map(ingredient => [
        ingredient.ingredientKey,
        `${ingredient.count} ${ingredient.gauge}`,
      ]),
    )

    expect(mainIngredients.get('vegetableOil')).toBe('2 ст.л.')
    expect(mainIngredients.get('butter')).toBe('10 г')
    expect(mainIngredients.get('worcestershireSauce')).toBe('1 ч.л.')

    const stepIngredients = SCRAMBLED_EGGS_WITH_SAUSAGES_AND_BEANS.cookingRecipe.flatMap(step => step.ingredients)
    expect(stepIngredients.filter(ingredient => ingredient.ingredientKey === 'vegetableOil')).toEqual([
      expect.objectContaining({ count: 1, gauge: 'ст.л.' }),
      expect.objectContaining({ count: 1, gauge: 'ст.л.' }),
    ])
    expect(stepIngredients.filter(ingredient => ingredient.ingredientKey === 'butter')).toEqual([
      expect.objectContaining({ count: 5, gauge: 'г' }),
      expect.objectContaining({ count: 5, gauge: 'г' }),
    ])
  })

  test('bliny time includes batter rest and frying', () => {
    expect(BLINY.time).toBeGreaterThanOrEqual(60)
  })

  test('bliny text does not contradict the promised holes', () => {
    const blinyText = [
      BLINY.metaSeo.title,
      BLINY.metaSeo.description,
      BLINY.metaSeo['og:title'],
      BLINY.metaSeo['og:description'],
      BLINY.cookingRecipe.map(step => step.description).join(' '),
      BLINY.tips.join(' '),
    ].join(' ')

    expect(blinyText).toContain('дыроч')
    expect(blinyText).not.toContain('отсутствие дыр')
  })

  test('oatmeal with honey does not claim to be sugar-free or for weight loss', () => {
    const oatmealText = [
      OVSJANAJA_KASHA_S_JABLOKAMI_I_KORICEJ.metaSeo.description,
      OVSJANAJA_KASHA_S_JABLOKAMI_I_KORICEJ.metaSeo['og:description'],
      OVSJANAJA_KASHA_S_JABLOKAMI_I_KORICEJ.metaSeo.twitterDescription,
      OVSJANAJA_KASHA_S_JABLOKAMI_I_KORICEJ.description,
    ]
      .join(' ')
      .toLowerCase()

    expect(oatmealText).not.toContain('без сахара')
    expect(oatmealText).not.toContain('худеющ')
  })

  test('shakshuka uses gauge instead of misspelled guage', () => {
    const shakshukaIngredients = [
      ...SCRAMBLED_EGGS_SHAKSHUKA.ingredients,
      ...SCRAMBLED_EGGS_SHAKSHUKA.cookingRecipe.flatMap(step => step.ingredients),
    ]

    expect(shakshukaIngredients.some(ingredient => 'guage' in ingredient)).toBe(false)
    expect(
      shakshukaIngredients
        .filter(ingredient => ingredient.ingredientKey === 'vegetableOil')
        .every(ingredient => ingredient.gauge === 'ст.л.'),
    ).toBe(true)
  })

  test('scrambled eggs equipment matches the no-whisk instruction', () => {
    const equipmentKeys = SCRAMBLED_EGGS.equipments.map(equipment => equipment.equipmentKey)

    expect(equipmentKeys).toContain('fork')
    expect(equipmentKeys).not.toContain('whisk')
  })
})
