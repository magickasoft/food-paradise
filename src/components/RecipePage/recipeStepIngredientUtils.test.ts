import { describe, expect, test } from 'bun:test'

import { formatStepIngredient } from './recipeStepIngredientUtils'

describe('formatStepIngredient', () => {
  test('formats ingredient name before amount and unit for recipe step chips', () => {
    expect(formatStepIngredient({ count: 500, gauge: 'мл', name: 'молока' })).toBe('молока 500 мл')
    expect(formatStepIngredient({ count: 3, gauge: 'шт.', name: 'яиц' })).toBe('яиц 3 шт.')
    expect(formatStepIngredient({ count: 3, gauge: 'ч.л.', name: 'сахара' })).toBe('сахара 3 ч.л.')
    expect(formatStepIngredient({ count: 3, gauge: 'г', name: 'соли' })).toBe('соли 3 г')
  })

  test('does not require ingredient media fields to create a chip label', () => {
    expect(formatStepIngredient({ gauge: '', name: 'соль' })).toBe('соль')
  })
})
