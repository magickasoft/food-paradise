import { describe, expect, test } from 'bun:test'

import { SNACKS } from '../snacks'
import { KARTOFELNYE_CHIPSY_V_MIKROVOLNOVKE } from './kartofelnye-chipsy-v-mikrovolnovke'
import { RULETY_IZ_VETCHINY_S_SYRNOM_I_CHESNOKOM } from './rulety-iz-vetchiny-s-syrnom-i-chesnokom'
import { SENDVICH_S_AVOKADO_I_YAITSOM_PASHOT } from './sendvich-s-avokado-i-yaitsom-pashot'
import { TARTALETKI_S_IKROY } from './tartaletki-s-ikroy'
import { TARTALETKI_S_KURITSEY_I_GRIBAMI } from './tartaletki-s-kuritsey-i-gribami'
import { resolveRecipeIngredient } from '../recipeIngredients'
import { KANAPE_IZ_OGURTSA_S_LOSOSEM, KANAPE_S_SELDYU_I_SVEKLOY } from './quick-snacks'

const NEW_SNACK_KEYS = [
  'brusketta-s-tomatami-i-bazilikom',
  'ruletiki-iz-lavasha-s-lososem',
  'farshirovannye-yajtsa-s-gorchicej',
  'kanape-iz-ogurtsa-s-lososem',
  'tartaletki-s-krabovymi-palochkami',
  'shampinony-s-syrom-v-duhovke',
  'ruletiki-iz-baklazhanov-s-fetoy',
  'syrnye-shariki-s-kunzhutom',
  'kanape-s-seldyu-i-svekloy',
  'kabachkovye-oladi-s-syrom',
] as const

describe('snack recipes', () => {
  test('keeps microwave chips text, time and ingredients synchronized', () => {
    const stepDescriptions = KARTOFELNYE_CHIPSY_V_MIKROVOLNOVKE.cookingRecipe
      .map(({ description }) => description)
      .join(' ')
      .toLowerCase()

    expect(KARTOFELNYE_CHIPSY_V_MIKROVOLNOVKE.description).toContain('15 минут')
    expect(KARTOFELNYE_CHIPSY_V_MIKROVOLNOVKE.description).not.toContain('3 ингредиента, 5 минут')
    expect(KARTOFELNYE_CHIPSY_V_MIKROVOLNOVKE.ingredients).toHaveLength(3)
    expect(stepDescriptions).toContain('картоф')
    expect(stepDescriptions).not.toContain('котлет')
    expect(stepDescriptions).not.toContain('курин')
  })

  test('ham rolls expose ingredients and equipment', () => {
    expect(RULETY_IZ_VETCHINY_S_SYRNOM_I_CHESNOKOM.ingredients.length).toBeGreaterThan(0)
    expect(RULETY_IZ_VETCHINY_S_SYRNOM_I_CHESNOKOM.equipments.length).toBeGreaterThan(0)
    expect(
      RULETY_IZ_VETCHINY_S_SYRNOM_I_CHESNOKOM.ingredients.map(resolveRecipeIngredient).map(({ name }) => name),
    ).toContain('Ветчина')
  })

  test('poached egg sandwich includes vinegar for the poaching step', () => {
    expect(
      SENDVICH_S_AVOKADO_I_YAITSOM_PASHOT.ingredients.map(resolveRecipeIngredient).map(({ name }) => name),
    ).toContain('Уксус')
    expect(
      SENDVICH_S_AVOKADO_I_YAITSOM_PASHOT.cookingRecipe[1].ingredients
        .map(resolveRecipeIngredient)
        .map(({ name }) => name),
    ).toContain('Уксус')
  })

  test('new year tartlets are also visible in snacks', () => {
    const snackKeys = SNACKS.map(({ key }) => key)

    expect(TARTALETKI_S_IKROY.categories.map(({ name }) => name)).toContain('snacks')
    expect(TARTALETKI_S_KURITSEY_I_GRIBAMI.categories.map(({ name }) => name)).toContain('snacks')
    expect(snackKeys).toContain(TARTALETKI_S_IKROY.key)
    expect(snackKeys).toContain(TARTALETKI_S_KURITSEY_I_GRIBAMI.key)
  })

  test('new snack recipes are visible with placeholder images', () => {
    const snacksByKey = new Map(SNACKS.map(recipe => [recipe.key, recipe]))

    for (const key of NEW_SNACK_KEYS) {
      const recipe = snacksByKey.get(key)

      expect(recipe).toBeDefined()
      expect(recipe?.categories.map(({ name }) => name)).toContain('snacks')
      expect(recipe?.img).toBeNull()
      expect(recipe?.ingredients.length).toBeGreaterThan(0)
      expect(recipe?.equipments.length).toBeGreaterThan(0)
    }
  })

  test('new snack recipe details stay synchronized', () => {
    expect(KANAPE_IZ_OGURTSA_S_LOSOSEM.equipments.map(({ equipmentKey }) => equipmentKey)).toContain('paperTowel')
    expect(KANAPE_S_SELDYU_I_SVEKLOY.metaSeo.description).not.toContain('черном хлебе')
    expect(KANAPE_S_SELDYU_I_SVEKLOY.searchRequests).not.toContain('закуска на черном хлебе')
  })
})
