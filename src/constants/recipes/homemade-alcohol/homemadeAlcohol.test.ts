import { describe, expect, test } from 'bun:test'

import { CHERRY_VODKA } from './cherry-vodka'
import { CRANBERRY_VODKA } from './cranberry-vodka'
import { HRENOVUKHA } from './hrenovukha'
import { LEMONCELLO_VODKA } from './lemoncello-vodka'

const homemadeAlcoholRecipes = [LEMONCELLO_VODKA, CRANBERRY_VODKA, HRENOVUKHA, CHERRY_VODKA]

describe('homemade alcohol recipes', () => {
  test('use realistic total times for long infusions', () => {
    expect(CRANBERRY_VODKA.time).toBe(36000)
    expect(HRENOVUKHA.time).toBe(8640)
    expect(CHERRY_VODKA.time).toBe(50400)
  })

  test('do not describe vodka-based recipes as alcohol-free', () => {
    const searchableText = [
      LEMONCELLO_VODKA.metaSeo.description,
      LEMONCELLO_VODKA.metaSeo['og:description'],
      LEMONCELLO_VODKA.metaSeo.twitterDescription,
      LEMONCELLO_VODKA.searchRequests.join(' '),
    ].join(' ')

    expect(searchableText.toLowerCase()).not.toContain('без спирта')
  })

  test('avoid health claims for alcoholic tinctures', () => {
    const hrenovukhaText = [
      HRENOVUKHA.description,
      HRENOVUKHA.historyDescription,
      HRENOVUKHA.metaSeo['og:description'],
      HRENOVUKHA.metaSeo.twitterDescription,
    ].join(' ')

    expect(hrenovukhaText.toLowerCase()).not.toContain('придаст сил')
    expect(hrenovukhaText.toLowerCase()).not.toContain('укрепляет дух и тело')
    expect(hrenovukhaText.toLowerCase()).not.toContain('согревающим эффектом')
  })

  test('do not call long infusions quick in SEO text', () => {
    expect(CRANBERRY_VODKA.metaSeo.description.toLowerCase()).not.toContain('быстро')
  })

  test('list equipment used by cranberry preparation steps', () => {
    expect(CRANBERRY_VODKA.equipments.map(equipment => equipment.equipmentKey)).toContain('spoon')
  })

  test('keep comments specific to the recipe', () => {
    expect(LEMONCELLO_VODKA.comments.map(comment => comment.text).join(' ')).not.toContain('клюквовка')
  })

  test('do not expose unreliable macro data for tinctures', () => {
    for (const recipe of homemadeAlcoholRecipes) {
      expect(recipe.used).toBeNull()
    }
  })
})
