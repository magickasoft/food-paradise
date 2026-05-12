import { describe, expect, test } from 'bun:test'

import CHERRY_PIE from './cherry-pie.json'

describe('CHERRY_PIE', () => {
  test('keeps cooking steps consistent with equipment and filling handling', () => {
    const equipmentKeys = CHERRY_PIE.equipments.map(equipment => equipment.equipmentKey)
    const descriptions = CHERRY_PIE.cookingRecipe.map(step => step.description).join(' ')

    expect(equipmentKeys).toContain('grater')
    expect(equipmentKeys).toContain('parchment')
    expect(descriptions).toContain('морозилку')
    expect(descriptions).toContain('лишний сок')
    expect(descriptions).toContain('Разогрейте духовку')
  })
})
