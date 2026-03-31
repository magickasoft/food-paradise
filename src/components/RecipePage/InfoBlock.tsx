'use client'

import styled from 'styled-components'

// Общий контейнер для всего блока
const InfoWrapper = styled.div`
  width: 90%;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 12px 0;
  margin: 8px 0;
`

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  gap: 4px;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 70%;
    background-color: #e0e0e0;
  }
`

const InfoBlockTitle = styled.span`
  font-size: 0.9rem;
  height: 20px;
  line-height: 20px;
  color: #999;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

const InfoBlockValue = styled.span`
  font-size: 1.1rem;
  line-height: 16px;
  font-weight: bold;
  color: #333;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

const InfoBlockGauge = styled.span`
  font-size: 0.9rem;
  line-height: 14px;
  color: #999;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
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
      icon: '⭐',
      value: rating,
      gauge: `(${commentsCount})`,
    },
    {
      icon: '🔪',
      value: preparation ? `${preparation}` : '—',
      gauge: 'мин',
    },
    {
      icon: '⏱️',
      value: `${time}`,
      gauge: 'мин',
    },
    {
      icon: '🔥',
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
