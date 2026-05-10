'use client'

import { useState } from 'react'
import type { Recipe } from '@/constants/recipes/recipes'
import styled from 'styled-components'
import { useShoppingListStore } from '@/store/shoppingList'
import type { ShoppingListItemInput } from '@/store/shoppingList'

interface Ingredient {
  name: string
  count?: number | string
  gauge: string
  img?: string | null
  note?: string
}

const Container = styled.div`
  border-radius: 18px;
  background: white;
  overflow: hidden;
  box-shadow: 0 12px 36px rgba(44, 31, 20, 0.07);
`

const Header = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 56px;
  padding: 16px 18px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 17px;
  font-weight: 600;
  text-align: left;
  transition: background 0.2s;

  &:hover {
    background: #fffaf5;
  }
`

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const Title = styled.span`
  color: #241b14;
`

const Arrow = styled.span<{ $isOpen: boolean }>`
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  color: #333;
  transition: transform 0.3s;
  font-size: 20px;
`

const Content = styled.div<{ $isOpen: boolean }>`
  max-height: ${({ $isOpen }) => ($isOpen ? '2000px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;
`

const InnerContent = styled.div`
  padding: 18px;
  border-top: 1px solid #f1e8df;
`

const PortionControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
  padding: 12px;
  border-radius: 14px;
  background: #fffaf5;
`

const PortionLabel = styled.span`
  font-size: 14px;
  color: #7c6958;
`

const Counter = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

const CounterButton = styled.button<{ $disabled?: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #eadfd4;
  color: #6b3d08;
  background: white;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  font-size: 18px;
  font-weight: 500;
  transition: all 0.2s;
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};

  &:hover {
    background: ${({ $disabled }) => ($disabled ? 'white' : '#fff0dc')};
    border-color: ${({ $disabled }) => ($disabled ? '#eadfd4' : '#ffbf78')};
  }

  &:active {
    transform: ${({ $disabled }) => ($disabled ? 'none' : 'scale(0.95)')};
  }
`

const PortionValue = styled.span`
  font-size: 16px;
  font-weight: 700;
  min-width: 40px;
  text-align: center;
`

const IngredientsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 18px;
`

const IngredientItem = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  font-size: 14px;
  color: #3d352d;
  padding: 10px 6px;
  border-radius: 10px;
  transition: background 0.2s;

  &:hover {
    background: #fffaf5;
  }
`

const CheckboxContainer = styled.div`
  position: relative;
  width: 18px;
  height: 18px;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  cursor: pointer;
`

const StyledCheckbox = styled.div<{ $checked: boolean }>`
  width: 18px;
  height: 18px;
  border: 2px solid #ff8402;
  border-radius: 6px;
  background: ${({ $checked }) => ($checked ? '#ff8402' : 'white')};
  transition: all 0.2s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ $checked }) => ($checked ? '#ff8402' : '#fff5e8')};
  }
`

const Checkmark = styled.svg`
  width: 12px;
  height: 12px;
  fill: none;
  stroke: white;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`

const IngredientInfo = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const IngredientName = styled.span`
  font-weight: 500;
`

const IngredientAmount = styled.span`
  color: #666;
  font-size: 13px;
`

const AddButton = styled.button<{ $disabled: boolean }>`
  width: 100%;
  min-height: 46px;
  padding: 12px;
  background: ${({ $disabled }) => ($disabled ? '#f2ece6' : '#2f8f54')};
  color: ${({ $disabled }) => ($disabled ? '#9d8d80' : 'white')};
  border: none;
  border-radius: 14px;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  font-size: 14px;
  font-weight: 500;
  transition: background 0.2s;

  &:hover {
    background: ${({ $disabled }) => ($disabled ? '#f2ece6' : '#287a48')};
  }
`

export const IngredientsBlock = ({ data, recipeName }: { data: Recipe['ingredients']; recipeName: string }) => {
  const [isOpen, setIsOpen] = useState(true)
  const [portions, setPortions] = useState(2) // Начальное количество порций
  const [checkedItems, setCheckedItems] = useState<boolean[]>(Array.from({ length: data.length }, () => false))
  const addItems = useShoppingListStore(state => state.addItems)

  // Функция для расчета количества ингредиента
  const calculateAmount = (ingredient: Ingredient) => {
    if (!ingredient.count) return ingredient.gauge

    const baseCount = typeof ingredient.count === 'string' ? parseFloat(ingredient.count) : ingredient.count

    if (Number.isNaN(baseCount)) return ingredient.gauge

    const newCount = (baseCount / 2) * portions // Исходное количество на 2 порции
    const formattedCount = Number.isInteger(newCount) ? newCount : newCount.toFixed(1)

    return `${formattedCount} ${ingredient.gauge}`
  }

  const handlePortionChange = (delta: number) => {
    const newPortions = Math.max(1, portions + delta)
    setPortions(newPortions)
  }

  const handleCheckboxChange = (index: number) => {
    const newChecked = [...checkedItems]
    newChecked[index] = !newChecked[index]
    setCheckedItems(newChecked)
  }

  const createAmount = (ingredient: Ingredient) => {
    const amount = calculateAmount(ingredient)

    return ingredient.note ? `${amount} (${ingredient.note})` : amount
  }

  const handleAddToShoppingList = () => {
    const selectedItems = data.reduce<ShoppingListItemInput[]>((items, ingredient, index) => {
      if (!checkedItems[index]) return items

      items.push({
        name: ingredient.name,
        amount: createAmount(ingredient),
        recipeName,
      })

      return items
    }, [])

    addItems(selectedItems)
    setCheckedItems(Array.from({ length: data.length }, () => false))
  }

  const isAnyChecked = checkedItems.some(checked => checked)

  return (
    <Container>
      <Header onClick={() => setIsOpen(!isOpen)}>
        <HeaderLeft>
          <Title>Ингредиенты</Title>
        </HeaderLeft>
        <Arrow $isOpen={isOpen}>▼</Arrow>
      </Header>

      <Content $isOpen={isOpen}>
        <InnerContent>
          <PortionControl>
            <PortionLabel>Количество порций:</PortionLabel>
            <Counter>
              <CounterButton
                onClick={() => handlePortionChange(-1)}
                $disabled={portions === 1}
                disabled={portions === 1}
              >
                -
              </CounterButton>
              <PortionValue>{portions}</PortionValue>
              <CounterButton onClick={() => handlePortionChange(1)}>+</CounterButton>
            </Counter>
          </PortionControl>

          <IngredientsList>
            {data.map((ingredient, index) => (
              <IngredientItem
                key={`${ingredient.name}-${ingredient.count ?? ''}-${ingredient.gauge}-${ingredient.note ?? ''}`}
              >
                <CheckboxContainer>
                  <HiddenCheckbox checked={checkedItems[index]} onChange={() => handleCheckboxChange(index)} />
                  <StyledCheckbox $checked={checkedItems[index]}>
                    {checkedItems[index] && (
                      <Checkmark viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </Checkmark>
                    )}
                  </StyledCheckbox>
                </CheckboxContainer>
                <IngredientInfo>
                  <IngredientName>{ingredient.name}</IngredientName>
                  <IngredientAmount>{createAmount(ingredient)}</IngredientAmount>
                </IngredientInfo>
              </IngredientItem>
            ))}
          </IngredientsList>

          <AddButton type="button" $disabled={!isAnyChecked} disabled={!isAnyChecked} onClick={handleAddToShoppingList}>
            Добавить в список покупок
          </AddButton>
        </InnerContent>
      </Content>
    </Container>
  )
}
