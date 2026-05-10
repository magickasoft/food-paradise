'use client'

import { maxDevice } from '@/styles/device'
import { FiClock, FiStar, FiZap } from 'react-icons/fi'
import { LuChefHat } from 'react-icons/lu'
import styled from 'styled-components'

const InfoWrapper = styled.div`
  width: 100%;
  max-width: 680px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin: 0 0 10px;

  @media ${maxDevice.laptop} {
    gap: 8px;
  }
`

const InfoContainer = styled.div`
  min-height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding: 10px 13px;
  border-radius: 999px;
  background: #fffaf5;
  box-shadow: inset 0 0 0 1px rgba(255, 132, 2, 0.12);
  color: #6b3d08;
`

const InfoBlockTitle = styled.span`
  width: 18px;
  height: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #ff8402;

  svg {
    width: 17px;
    height: 17px;
  }
`

const InfoBlockValue = styled.span`
  font-size: 0.92rem;
  line-height: 1;
  font-weight: 700;
  color: #2c2118;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

const InfoBlockGauge = styled.span`
  font-size: 0.82rem;
  line-height: 1;
  color: #8b7662;
`

export const InfoBlock = ({
  rating,
  commentsCount,
  preparation,
  time,
  calories,
}: {
  rating: number
  commentsCount: number
  preparation: number | null
  time: number
  calories: number | null
}) => {
  const infoItems = [
    {
      icon: <FiStar />,
      value: rating,
      gauge: `(${commentsCount})`,
    },
    {
      icon: <LuChefHat />,
      value: preparation ? `${preparation}` : '—',
      gauge: 'мин подготовки',
    },
    {
      icon: <FiClock />,
      value: `${time}`,
      gauge: 'мин всего',
    },
    {
      icon: <FiZap />,
      value: calories ? `${calories}` : '—',
      gauge: 'ккал',
    },
  ].filter(info => info.value !== '—')

  return (
    <InfoWrapper>
      {infoItems.map((info, index) => (
        <InfoContainer key={index}>
          <InfoBlockTitle>{info.icon}</InfoBlockTitle>
          <InfoBlockValue>{info.value}</InfoBlockValue>
          <InfoBlockGauge>{info.gauge}</InfoBlockGauge>
        </InfoContainer>
      ))}
    </InfoWrapper>
  )
}
