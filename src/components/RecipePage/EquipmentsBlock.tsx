import { maxDevice } from '@/styles/device'
import styled from 'styled-components'
import { DetailsTitle } from '../DetailsTitle'
import { useState } from 'react'
import { Recipe } from '@/constants/recipes/recipes'
import { DetailCard } from '../Cards'
import { NoList } from '../NoList'

const EquipmentsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;

  @media ${maxDevice.laptop} {
    width: 100%;
    border-left: none;
    padding-left: 0;
    text-align: start;
  }
`

const DetailsCardsContainer = styled.section<{
  $width?: string
  $justifyContent?: string
  $background?: string
}>`
  width: ${props => props.$width || '100%'};
  max-width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  background: ${props => props.$background || 'transparent'};
  justify-content: ${props => props.$justifyContent || 'flex-start'};
  overflow-x: auto;
  margin-bottom: 20px;
  border-radius: 6px;

  @media ${maxDevice.laptop} {
    height: auto;
  }
`

export const EquipmentsBlock = ({ data }: { data: Recipe['equipments'] }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <EquipmentsContainer>
      <DetailsTitle>Оборудование</DetailsTitle>
      {data.length ? (
        <DetailsCardsContainer $background="#fff">
          {data.map(equipment => (
            <DetailCard key={equipment.name} name={equipment.name} img={equipment?.img || null} variant="short" />
          ))}
        </DetailsCardsContainer>
      ) : (
        <NoList value="Список оборудования будет доступен позднее..." />
      )}
    </EquipmentsContainer>
  )
}
