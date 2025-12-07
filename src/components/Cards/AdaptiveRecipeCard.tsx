'use client'

import { RecipeCard, RecipeCardProps } from '@/components/Cards/RecipeCard'
import { useIsMobile } from '@/components/hooks/useIsMobile.client'

export const AdaptiveRecipeCard = (props: RecipeCardProps) => {
  const isMobile = useIsMobile()
  const variant = isMobile ? 'full' : 'base'

  return <RecipeCard {...props} variant={variant} />
}
