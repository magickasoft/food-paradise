import { describe, expect, test } from 'bun:test'

import { mergeShoppingListItems } from './shoppingListUtils'
import type { ShoppingListItemInput } from './shoppingListUtils'

describe('mergeShoppingListItems', () => {
  test('updates an existing recipe ingredient instead of adding a duplicate', () => {
    const existing = [
      {
        id: 'борщ-соль',
        name: 'Соль',
        amount: '1 ч. л.',
        recipeName: 'Борщ',
        checked: true,
      },
    ]

    const incoming: ShoppingListItemInput[] = [
      {
        name: 'Соль',
        amount: '2 ч. л.',
        recipeName: 'Борщ',
      },
    ]

    expect(mergeShoppingListItems(existing, incoming)).toEqual([
      {
        id: 'борщ-соль',
        name: 'Соль',
        amount: '2 ч. л.',
        recipeName: 'Борщ',
        checked: false,
      },
    ])
  })

  test('keeps the same ingredient from another recipe as a separate item', () => {
    const existing = [
      {
        id: 'borshch-salt',
        name: 'Соль',
        amount: '1 ч. л.',
        recipeName: 'Борщ',
        checked: false,
      },
    ]

    const incoming: ShoppingListItemInput[] = [
      {
        name: 'Соль',
        amount: 'по вкусу',
        recipeName: 'Омлет',
      },
    ]

    expect(mergeShoppingListItems(existing, incoming)).toHaveLength(2)
  })
})
