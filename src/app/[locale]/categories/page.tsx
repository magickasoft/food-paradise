'use client'

import styled from 'styled-components'

import { maxDevice } from '@/styles/device'
import { SEASONAL_CATEGORIES_ARR } from '@/components/SeasonalCategories/constants'
import { CATEGORIES_ARR, OTHER_CATEGORIES_ARR } from '@/components/PopularCategories/constants'
import { CategoryCard } from '@/components/Cards/CategoryCard'
import { PageWrapper } from '@/components/PageWrapper'

const Container = styled.section`
  max-width: 1280px;
  margin: 0 auto 56px;
  padding: 24px 0 0;

  @media ${maxDevice.tablet} {
    padding: 12px 16px 0;
  }
`

const Hero = styled.header`
  max-width: 780px;
  margin-bottom: 42px;
`

const Title = styled.h1`
  margin: 0 0 14px;
  color: #211a15;
  font-size: clamp(2.1rem, 4vw, 4rem);
  line-height: 1.05;
  letter-spacing: 0;
`

const Description = styled.p`
  max-width: 680px;
  margin: 0;
  color: #65594f;
  font-size: 1.05rem;
  line-height: 1.75;

  @media ${maxDevice.tablet} {
    font-size: 0.95rem;
  }
`

const Sections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 18px;
`

const SectionTitle = styled.h2`
  margin: 0;
  color: #241b14;
  font-size: 1.35rem;
  line-height: 1.25;
  font-weight: 800;
`

const Grid = styled.div<{ $featured?: boolean }>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${({ $featured }) => ($featured ? '320px' : '260px')}, 1fr));
  gap: 18px;

  @media ${maxDevice.tablet} {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`

const CategoriesPage = () => {
  const otherCategories = OTHER_CATEGORIES_ARR.filter(category => category.key !== 'grill')

  return (
    <PageWrapper>
      <Container>
        <Hero>
          <Title>Категории рецептов</Title>
          <Description>
            Выберите настроение, сезон или формат блюда: от быстрых завтраков до рецептов на мангале и домашних
            напитков.
          </Description>
        </Hero>

        <Sections>
          <Section>
            <SectionTitle>Сезонное</SectionTitle>
            <Grid $featured>
              {SEASONAL_CATEGORIES_ARR.map(({ key, ...item }) => (
                <CategoryCard key={key} {...item} variant="medium" />
              ))}
            </Grid>
          </Section>

          <Section>
            <SectionTitle>Основные категории</SectionTitle>
            <Grid>
              {CATEGORIES_ARR.map(({ key, ...item }) => (
                <CategoryCard key={key} {...item} variant="medium" />
              ))}
            </Grid>
          </Section>

          <Section>
            <SectionTitle>Еще идеи</SectionTitle>
            <Grid>
              {otherCategories.map(({ key, ...item }) => (
                <CategoryCard key={key} {...item} variant="medium" />
              ))}
            </Grid>
          </Section>
        </Sections>
      </Container>
    </PageWrapper>
  )
}

export default CategoriesPage
