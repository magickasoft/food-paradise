export interface ShoppingListItem {
  id: string
  name: string
  amount: string
  recipeName: string
  checked: boolean
}

export type ShoppingListItemInput = Omit<ShoppingListItem, 'id' | 'checked'>

const createItemId = ({ name, recipeName }: ShoppingListItemInput) =>
  `${recipeName.trim().toLowerCase()}-${name.trim().toLowerCase()}`

export const mergeShoppingListItems = (
  currentItems: ShoppingListItem[],
  incomingItems: ShoppingListItemInput[],
): ShoppingListItem[] => {
  return incomingItems.reduce<ShoppingListItem[]>(
    (items, item) => {
      const id = createItemId(item)
      const existingIndex = items.findIndex(currentItem => currentItem.id === id)

      if (existingIndex === -1) {
        items.push({
          ...item,
          id,
          checked: false,
        })

        return items
      }

      items[existingIndex] = {
        ...items[existingIndex],
        amount: item.amount,
        checked: false,
      }

      return items
    },
    [...currentItems],
  )
}
