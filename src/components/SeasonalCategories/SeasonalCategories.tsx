'use client'

import styled from 'styled-components'
import { CategoryCard } from '../Cards/CategoryCard'
import { SEASONAL_CATEGORIES_ARR } from './constants'
import { maxDevice } from '@/styles/device'

const Container = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  overflow: hidden;
  padding: 0;
  margin-bottom: 54px;

  @media ${maxDevice.tablet} {
    padding: 0 16px;
    margin-bottom: 42px;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;

  @media ${maxDevice.laptop} {
    grid-template-columns: 1fr;
  }
`

const Content = styled.div`
  padding: 0;
`

const Title = styled.h2`
  margin: 0 0 10px;
  color: #241b14;
  font-size: 1.55rem;
  line-height: 1.2;
  font-weight: 800;

  @media ${maxDevice.tablet} {
    font-size: 1.35rem;
  }
`

const Description = styled.p`
  max-width: 620px;
  margin: 0 0 22px;
  color: #6d6258;
  font-size: 0.98rem;
  line-height: 1.65;
`

export const SeasonalCategories = () => {
  return (
    <Container>
      <Content>
        <Title>Сезонные категории</Title>
        <Description>Подборки, которые особенно хочется открыть прямо сейчас.</Description>
        <Grid>
          {SEASONAL_CATEGORIES_ARR.map(({ key, ...item }) => (
            <CategoryCard key={key} {...item} variant="large" />
          ))}
        </Grid>
      </Content>
    </Container>
  )
}
