'use client'

import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { mergeShoppingListItems } from './shoppingListUtils'
import type { ShoppingListItem, ShoppingListItemInput } from './shoppingListUtils'

interface ShoppingListState {
  items: ShoppingListItem[]
  addItems: (items: ShoppingListItemInput[]) => void
  toggleItem: (id: string) => void
  removeItem: (id: string) => void
  clearItems: () => void
}

export const useShoppingListStore = create<ShoppingListState>()(
  persist(
    set => ({
      items: [],
      addItems: incomingItems =>
        set(state => ({
          items: mergeShoppingListItems(state.items, incomingItems),
        })),
      toggleItem: id =>
        set(state => ({
          items: state.items.map(item => (item.id === id ? { ...item, checked: !item.checked } : item)),
        })),
      removeItem: id =>
        set(state => ({
          items: state.items.filter(item => item.id !== id),
        })),
      clearItems: () => set({ items: [] }),
    }),
    {
      name: 'food-paradise-shopping-list',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export type { ShoppingListItem, ShoppingListItemInput }
