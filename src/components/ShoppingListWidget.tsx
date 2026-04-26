'use client'

import { useEffect, useState } from 'react'
import { LuList, LuTrash2, LuX } from 'react-icons/lu'
import styled from 'styled-components'

import { maxDevice } from '@/styles/device'
import { useShoppingListStore } from '@/store/shoppingList'

const FloatingButton = styled.button`
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 10000;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 48px;
  padding: 0 18px;
  border: none;
  border-radius: 999px;
  background: linear-gradient(90deg, #e75e02 0%, #ff8402 100%);
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 8px 22px rgba(231, 94, 2, 0.35);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 26px rgba(231, 94, 2, 0.42);
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @media ${maxDevice.mobileL} {
    right: 14px;
    bottom: 14px;
    min-width: 48px;
    padding: 0 14px;
  }
`

const Counter = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 22px;
  height: 22px;
  padding: 0 6px;
  border-radius: 999px;
  background: #ffffff;
  color: #e75e02;
  font-size: 12px;
  font-weight: 700;
`

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10001;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 24px;
  background: rgba(0, 0, 0, 0.34);

  @media ${maxDevice.mobileL} {
    align-items: stretch;
    padding: 0;
  }
`

const Modal = styled.section`
  width: min(420px, 100%);
  max-height: min(640px, calc(100vh - 48px));
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.22);

  @media ${maxDevice.mobileL} {
    width: 100%;
    max-height: 100%;
    border-radius: 0;
  }
`

const ModalHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 18px 20px;
  border-bottom: 1px solid #eeeeee;
`

const ModalTitle = styled.h2`
  color: #333333;
  font-size: 20px;
  line-height: 1.2;
`

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const IconButton = styled.button`
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #ffffff;
  color: #555555;
  cursor: pointer;
  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;

  &:hover {
    color: #ff8402;
    border-color: #ff8402;
    background: #fff5e8;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  list-style: none;
`

const ListItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  align-items: start;
  padding: 14px 20px;
  border-bottom: 1px solid #f0f0f0;
`

const ItemCheckbox = styled.input.attrs({ type: 'checkbox' })`
  width: 18px;
  height: 18px;
  margin-top: 2px;
  accent-color: #ff8402;
  cursor: pointer;
`

const ItemInfo = styled.div<{ $checked: boolean }>`
  min-width: 0;
  color: ${({ $checked }) => ($checked ? '#888888' : '#333333')};
  text-decoration: ${({ $checked }) => ($checked ? 'line-through' : 'none')};
`

const ItemName = styled.div`
  font-size: 15px;
  font-weight: 600;
  overflow-wrap: anywhere;
`

const ItemMeta = styled.div`
  margin-top: 4px;
  color: #777777;
  font-size: 13px;
  line-height: 1.35;
`

export const ShoppingListWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const items = useShoppingListStore(state => state.items)
  const toggleItem = useShoppingListStore(state => state.toggleItem)
  const removeItem = useShoppingListStore(state => state.removeItem)
  const clearItems = useShoppingListStore(state => state.clearItems)
  const hasItems = items.length > 0
  const isModalOpen = isOpen && hasItems

  useEffect(() => {
    if (!isModalOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    const previousBodyOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousBodyOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isModalOpen])

  if (!hasItems) return null

  return (
    <>
      <FloatingButton type="button" onClick={() => setIsOpen(true)} aria-label="Открыть список покупок">
        <LuList />
        <span>Список</span>
        <Counter>{items.length}</Counter>
      </FloatingButton>

      {isModalOpen && (
        <Overlay onClick={() => setIsOpen(false)}>
          <Modal
            aria-modal="true"
            role="dialog"
            aria-labelledby="shopping-list-title"
            onClick={event => event.stopPropagation()}
          >
            <ModalHeader>
              <ModalTitle id="shopping-list-title">Список покупок</ModalTitle>
              <HeaderActions>
                <IconButton type="button" onClick={clearItems} aria-label="Очистить список" title="Очистить список">
                  <LuTrash2 />
                </IconButton>
                <IconButton type="button" onClick={() => setIsOpen(false)} aria-label="Закрыть список" title="Закрыть">
                  <LuX />
                </IconButton>
              </HeaderActions>
            </ModalHeader>

            <List>
              {items.map(item => (
                <ListItem key={item.id}>
                  <ItemCheckbox
                    checked={item.checked}
                    onChange={() => toggleItem(item.id)}
                    aria-label={`Отметить ${item.name} купленным`}
                  />
                  <ItemInfo $checked={item.checked}>
                    <ItemName>{item.name}</ItemName>
                    <ItemMeta>
                      {item.amount} · {item.recipeName}
                    </ItemMeta>
                  </ItemInfo>
                  <IconButton type="button" onClick={() => removeItem(item.id)} aria-label={`Удалить ${item.name}`}>
                    <LuTrash2 />
                  </IconButton>
                </ListItem>
              ))}
            </List>
          </Modal>
        </Overlay>
      )}
    </>
  )
}
