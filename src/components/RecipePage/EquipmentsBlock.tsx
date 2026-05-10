import { maxDevice } from '@/styles/device'
import styled from 'styled-components'
import { DetailsTitle } from '../DetailsTitle'
import { Recipe } from '@/constants/recipes/recipes'
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
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  background: ${props => props.$background || 'transparent'};
  justify-content: ${props => props.$justifyContent || 'flex-start'};
  margin-bottom: 20px;
  padding: 10px 20px;
  border-radius: 6px;
`

const EquipmentBrick = styled.span`
  flex: 0 0 auto;
  max-width: 220px;
  padding: 6px 11px;
  border: 1px solid #ffd9ad;
  border-radius: 6px;
  background: #fff7ed;
  box-shadow: 0 1px 3px rgba(255, 132, 2, 0.1);
  color: #6b3d08;
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition:
    background 0.2s,
    border-color 0.2s,
    color 0.2s;

  &:hover {
    border-color: #ffb45c;
    background: #fff0dc;
    color: #4f2c05;
  }
`

export const EquipmentsBlock = ({ data }: { data: Recipe['equipments'] }) => {
  return (
    <EquipmentsContainer>
      <DetailsTitle>Оборудование</DetailsTitle>
      {data.length ? (
        <DetailsCardsContainer $background="#fff">
          {data.map(equipment => (
            <EquipmentBrick key={equipment.name}>{equipment.name}</EquipmentBrick>
          ))}
        </DetailsCardsContainer>
      ) : (
        <NoList value="Список оборудования будет доступен позднее..." />
      )}
    </EquipmentsContainer>
  )
}
