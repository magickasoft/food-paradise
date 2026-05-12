import { describe, expect, test } from 'bun:test'

import { DESSERT } from '../dessert'
import CHIZKEIK from './chizkeik.json'
import KLUBNICHNYY_PAI_S_PESOCHNOY_KROSCHKOY from './klubnichnyy-pai-s-pesochnoy-kroschkoy.json'
import LENIVYY_NAPOLEON from './lenivyy-napoleon.json'
import PANNA_COTTA from './panna-cotta.json'
import PIROZHNOYE_KARTOSHKA from './pirozhnoye-kartoshka.json'

describe('dessert recipes', () => {
  test('panna cotta SEO describes panna cotta and includes chilling', () => {
    const seoText = [
      PANNA_COTTA.metaSeo.title,
      PANNA_COTTA.metaSeo.description,
      PANNA_COTTA.metaSeo['og:title'],
      PANNA_COTTA.metaSeo['og:description'],
      PANNA_COTTA.metaSeo.twitterTitle,
      PANNA_COTTA.metaSeo.twitterDescription,
    ].join(' ')

    expect(seoText).toContain('охлаждения')
    expect(seoText).not.toContain('карамельной короч')
    expect(seoText).not.toContain('готовится за 15 минут')
  })

  test('cheesecake time includes baking, cooling and chilling', () => {
    expect(CHIZKEIK.time).toBeGreaterThanOrEqual(555)
  })

  test('lazy napoleon uses vanilla sugar in cooking steps', () => {
    const stepIngredientKeys = LENIVYY_NAPOLEON.cookingRecipe.flatMap(step =>
      step.ingredients.map(ingredient => ingredient.ingredientKey),
    )

    expect(stepIngredientKeys).toContain('vanillaSugar')
  })

  test('potato cake search requests stay relevant', () => {
    const searchText = PIROZHNOYE_KARTOSHKA.searchRequests.join(' ').toLowerCase()

    expect(searchText).toContain('пирожное картошка')
    expect(searchText).not.toContain('трюфель')
    expect(searchText).not.toContain('фундук')
    expect(searchText).not.toContain('шоколадные конфеты')
  })

  test('strawberry pie does not promise missing ice cream serving', () => {
    expect(KLUBNICHNYY_PAI_S_PESOCHNOY_KROSCHKOY.description).not.toContain('морожен')
  })

  test('dessert content blocks are recipe-specific', () => {
    const dessertContent = DESSERT.flatMap(recipe => [
      recipe.historyDescription ?? '',
      ...(recipe.tips ?? []),
      ...(recipe.variations ?? []).flatMap(variation => [variation.name, variation.changes]),
    ]).join(' ')

    expect(dessertContent).not.toContain('пример десерта')
    expect(dessertContent).not.toContain('Точно взвешивайте ингредиенты')
    expect(dessertContent).not.toContain('Шоколадный акцент')
  })
})
