'use client'

import styled from 'styled-components'
import { Link } from '@/i18n/navigation'
import { maxDevice } from '@/styles/device'
import { SeasonalCategories } from '@/components/SeasonalCategories'
import { PopularCategories } from '@/components/PopularCategories'
import { SuggestRecipeButton } from '@/components/suggest-recipe-btn'

const PageShell = styled.main`
  background:
    radial-gradient(circle at top left, rgba(255, 132, 2, 0.1), transparent 34rem),
    linear-gradient(180deg, #fffaf5 0, #ffffff 520px);
`

const Hero = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 132px 0 54px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.62fr);
  gap: 44px;
  align-items: center;

  @media ${maxDevice.laptop} {
    grid-template-columns: 1fr;
    padding: 96px 16px 38px;
  }
`

const HeroContent = styled.div`
  max-width: 760px;
`

const Eyebrow = styled.p`
  margin: 0 0 14px;
  color: #e75e02;
  font-size: 0.84rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

const Title = styled.h1`
  margin: 0;
  color: #211a15;
  font-size: clamp(2.6rem, 5vw, 5.6rem);
  line-height: 1;
  letter-spacing: 0;
`

const Description = styled.p`
  max-width: 660px;
  margin: 22px 0 0;
  color: #65594f;
  font-size: 1.08rem;
  line-height: 1.75;

  @media ${maxDevice.tablet} {
    font-size: 0.96rem;
  }
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
`

const PrimaryLink = styled(Link)`
  min-height: 52px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  border-radius: 16px;
  background: linear-gradient(135deg, #e75e02 0%, #ff8402 58%, #ffad3d 100%);
  color: #ffffff;
  font-weight: 800;
  text-decoration: none;
  box-shadow: 0 16px 30px rgba(231, 94, 2, 0.22);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 38px rgba(231, 94, 2, 0.28);
    text-decoration: none;
  }

  @media ${maxDevice.mobileL} {
    width: 100%;
  }
`

const HeroCard = styled.div`
  min-height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  border-radius: 28px;
  padding: 28px;
  background:
    linear-gradient(180deg, rgba(36, 27, 20, 0.02), rgba(36, 27, 20, 0.68)),
    url('/optimize/recipes/breakfast/bliny.webp') center / cover;
  box-shadow: 0 26px 64px rgba(44, 31, 20, 0.18);

  @media ${maxDevice.laptop} {
    min-height: 280px;
    border-radius: 22px;
  }
`

const HeroCardTitle = styled.div`
  max-width: 320px;
  color: #ffffff;
  font-size: 1.55rem;
  font-weight: 800;
  line-height: 1.12;
  text-shadow: 0 4px 18px rgba(0, 0, 0, 0.28);
`

const HeroCardText = styled.div`
  max-width: 320px;
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.95rem;
  line-height: 1.5;
`

const BottomCta = styled.section`
  max-width: 1280px;
  margin: 56px auto 72px;
  padding: 34px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  border-radius: 26px;
  background: #fffaf5;
  box-shadow:
    inset 0 0 0 1px rgba(255, 132, 2, 0.12),
    0 18px 44px rgba(44, 31, 20, 0.08);

  @media ${maxDevice.tablet} {
    margin: 42px 16px 56px;
    padding: 24px;
    align-items: stretch;
    flex-direction: column;
  }
`

const BottomCtaTitle = styled.h2`
  margin: 0 0 8px;
  color: #241b14;
  font-size: 1.6rem;
  line-height: 1.2;
`

const BottomCtaText = styled.p`
  margin: 0;
  color: #6d6258;
  line-height: 1.65;
`

export const HomePage = () => {
  return (
    <PageShell>
      <Hero>
        <HeroContent>
          <Eyebrow>Домашняя кухня без суеты</Eyebrow>
          <Title>Рецепты, к которым хочется возвращаться</Title>
          <Description>
            Собираем понятные пошаговые рецепты для завтраков, ужинов, десертов и сезонных блюд. Выбирайте категорию,
            открывайте рецепт и готовьте в своем темпе.
          </Description>
          <Actions>
            <PrimaryLink href="/categories" locale="ru">
              Смотреть категории
            </PrimaryLink>
            <SuggestRecipeButton />
          </Actions>
        </HeroContent>
        <HeroCard>
          <HeroCardTitle>Блины, салаты, гриль и домашние напитки</HeroCardTitle>
          <HeroCardText>Подборки для будней, выходных и тех самых “что бы приготовить?” моментов.</HeroCardText>
        </HeroCard>
      </Hero>
      <SeasonalCategories />
      <PopularCategories />
      <BottomCta>
        <div>
          <BottomCtaTitle>Не нашли любимый рецепт?</BottomCtaTitle>
          <BottomCtaText>Предложите блюдо, которое стоит добавить на сайт.</BottomCtaText>
        </div>
        <SuggestRecipeButton />
      </BottomCta>
    </PageShell>
  )
}
