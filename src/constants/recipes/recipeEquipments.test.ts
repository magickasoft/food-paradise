import { describe, expect, test } from 'bun:test'

import { RECIPES_OBJ } from './recipes'
import { resolveRecipeEquipment } from './recipeEquipments'

describe('resolveRecipeEquipment', () => {
  test('resolves equipment data from equipmentKey', () => {
    expect(resolveRecipeEquipment({ equipmentKey: 'bowl' })).toEqual({
      name: 'Миска',
      img: '/optimize/equipments/bowl.webp',
    })
  })

  test('throws when equipmentKey is not present in the equipment registry', () => {
    expect(() => resolveRecipeEquipment({ equipmentKey: 'missing-equipment' })).toThrow(
      'Unknown equipment key: missing-equipment',
    )
  })

  test('resolves every equipmentKey used by recipes', () => {
    for (const recipes of Object.values(RECIPES_OBJ)) {
      for (const recipe of recipes) {
        for (const equipment of recipe.equipments) {
          expect(() => resolveRecipeEquipment(equipment), `${recipe.key} equipments`).not.toThrow()
        }
      }
    }
  })
})
