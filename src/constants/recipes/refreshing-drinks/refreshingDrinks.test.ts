import { describe, expect, test } from 'bun:test'

import { REFRESHING_DRINKS } from '../refreshing-drinks'

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

const equipmentKeys = (equipments: { equipmentKey: string }[]) => equipments.map(equipment => equipment.equipmentKey)

const text = (values: string[]) => values.join(' ').toLowerCase()

describe('refreshing drinks data quality', () => {
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
        ...recipe.tips,
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
