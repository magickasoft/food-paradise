import { describe, expect, test } from 'bun:test'

import { CHERRY_VODKA } from './cherry-vodka'
import { CRANBERRY_VODKA } from './cranberry-vodka'
import { HRENOVUKHA } from './hrenovukha'
import { LEMONCELLO_VODKA } from './lemoncello-vodka'

const homemadeAlcoholRecipes = [LEMONCELLO_VODKA, CRANBERRY_VODKA, HRENOVUKHA, CHERRY_VODKA]

describe('homemade alcohol recipes', () => {
  test('use realistic total times for long infusions', () => {
    expect(CRANBERRY_VODKA.time).toBe(36000)
    expect(CHERRY_VODKA.time).toBe(50400)
  })

  test('do not describe vodka-based recipes as alcohol-free', () => {
    const searchableText = [
      LEMONCELLO_VODKA.metaSeo['og:description'],
      LEMONCELLO_VODKA.metaSeo.twitterDescription,
    ].join(' ')

    expect(searchableText.toLowerCase()).not.toContain('без спирта')
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
