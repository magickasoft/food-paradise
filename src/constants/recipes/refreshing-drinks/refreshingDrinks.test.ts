import { describe, expect, test } from 'bun:test'

import { REFRESHING_DRINKS } from '../refreshing-drinks'
import type { RecipeEquipment } from '../recipeEquipments'

const byKey = new Map(REFRESHING_DRINKS.map(recipe => [recipe.key, recipe]))

const getRecipe = (key: string) => {
  const recipe = byKey.get(key)

  if (!recipe) {
    throw new Error(`Missing refreshing drink recipe: ${key}`)
  }

  return recipe
}

const ingredientKeys = (ingredients: { ingredientKey?: string; name?: string }[]) =>
  ingredients.map(ingredient => ingredient.ingredientKey ?? ingredient.name)

const equipmentKeys = (equipments: RecipeEquipment[]) =>
  equipments.flatMap(equipment => ('equipmentKey' in equipment ? [equipment.equipmentKey] : []))

const hasCountAndGauge = (value: { count?: unknown; gauge?: unknown }) =>
  typeof value.count === 'number' && typeof value.gauge === 'string' && value.gauge.length > 0

const text = (values: Array<string | undefined>) => values.filter(Boolean).join(' ').toLowerCase()

const NEW_REFRESHING_DRINK_KEYS = [
  'limonad-s-laymom-i-bazilikom',
  'ogurechno-myatnaya-voda',
  'klubnichnyy-mors-s-myatoj',
  'malina-laym-sprittser',
  'arbuzno-laymovyy-fresh',
  'mango-kokosovyy-smuzi',
  'chernichnyy-ays-ti',
  'zelenyy-chay-s-laymom-i-myatoj',
  'persikovyy-holodnyy-chay',
  'limonad-s-yagodami-i-bazilikom',
  'klyukvennyy-sprittser-s-laymom',
  'imbirno-laymovyy-limonad',
  'ogurechno-bazilikovyy-limonad',
  'klubnichno-myatnyy-smuzi',
  'arbuzno-ogurechnyy-napitok',
  'malinovyy-limonad-s-bazilikom',
  'yablochno-myatnaya-voda',
  'kokosovyy-napitok-s-mango-i-chia',
  'vinogradno-laymovyy-sprittser',
  'chernichno-limonnyy-smuzi',
] as const

describe('refreshing drinks data quality', () => {
  test('new refreshing drinks are complete category recipes with placeholder images', () => {
    for (const key of NEW_REFRESHING_DRINK_KEYS) {
      const recipe = getRecipe(key)

      expect(recipe.img, key).toBeNull()
      expect(
        recipe.categories.map(category => category.name),
        key,
      ).toContain('refreshingDrinks')
      expect(recipe.ingredients.every(hasCountAndGauge), key).toBe(true)
      expect(
        recipe.equipments.every(equipment => 'equipmentKey' in equipment),
        key,
      ).toBe(true)
      expect(
        recipe.cookingRecipe.every(step => step.ingredients.length > 0),
        key,
      ).toBe(true)
      expect(recipe.cookingRecipe.flatMap(step => step.ingredients).every(hasCountAndGauge), key).toBe(true)
      expect(recipe.historyDescription?.length, key).toBeGreaterThan(0)
      expect(recipe.tips?.length, key).toBeGreaterThan(0)
      expect(recipe.serving?.length, key).toBeGreaterThan(0)
      expect(recipe.variations?.length, key).toBeGreaterThan(0)
    }
  })

  test('drink descriptions avoid medical detox and immunity claims', () => {
    const content = text(
      REFRESHING_DRINKS.flatMap(recipe => [
        recipe.metaSeo.title,
        recipe.metaSeo.description,
        recipe.metaSeo['og:title'],
        recipe.metaSeo['og:description'],
        recipe.metaSeo.twitterTitle,
        recipe.metaSeo.twitterDescription,
        recipe.title,
        recipe.description,
        ...(recipe.tips ?? []),
      ]),
    )

    expect(content).not.toContain('выводит токсины')
    expect(content).not.toContain('очищ')
    expect(content).not.toContain('детокс-эффект')
    expect(content).not.toContain('укрепляет иммунитет')
    expect(content).not.toContain('для иммунитета')
    expect(content).not.toContain('антипростуд')
  })

  test('vegan refreshing drinks do not use honey', () => {
    for (const recipe of REFRESHING_DRINKS.filter(item =>
      item.categories.some(category => category.name === 'vegan'),
    )) {
      expect(ingredientKeys(recipe.ingredients), recipe.key).not.toContain('honey')
    }
  })

  test('malinovyj tea fresh reflects green tea caffeine and includes brewing water', () => {
    const recipe = getRecipe('malinovyj-chajnyj-fresh')

    expect(recipe.metaSeo.description).not.toContain('без кофеина')
    expect(recipe.description).not.toContain('без кофеина')
    expect(ingredientKeys(recipe.ingredients)).toContain('voda4')
    expect(ingredientKeys(recipe.cookingRecipe[0].ingredients)).toContain('voda4')
  })

  test('ogurechnyj drink blender step links the ingredients it blends', () => {
    const recipe = getRecipe('ogurechnyj-detoks-napitok')

    expect(ingredientKeys(recipe.cookingRecipe[1].ingredients)).toEqual(
      expect.arrayContaining(['cucumber', 'lime', 'myataSvezhaya']),
    )
  })

  test('drink equipment covers cutting, grating and straining workflows', () => {
    expect(equipmentKeys(getRecipe('limonad-s-myatoj').equipments)).toEqual(
      expect.arrayContaining(['knife', 'cutBoard', 'grater']),
    )
    expect(equipmentKeys(getRecipe('arbuznyj-smuzi').equipments)).toEqual(expect.arrayContaining(['knife', 'cutBoard']))
    expect(equipmentKeys(getRecipe('tropicheskij-smuzi-s-mango').equipments)).toEqual(
      expect.arrayContaining(['knife', 'cutBoard']),
    )
    expect(equipmentKeys(getRecipe('persikovyj-latte').equipments)).toEqual(expect.arrayContaining(['knife']))
    expect(equipmentKeys(getRecipe('inzhirnyj-koktejl').equipments)).toEqual(expect.arrayContaining(['knife']))
    expect(equipmentKeys(getRecipe('malinovyj-chajnyj-fresh').equipments)).toContain('sieve')
  })

  test('imbirnyj lemonade time accounts for cooling the hot infusion', () => {
    const recipe = getRecipe('imbirnyj-limonad-s-medom')

    expect(recipe.time).toBeGreaterThanOrEqual(50)
  })
})
