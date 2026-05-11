import { INGREDIENTS } from '@/constants/ingredients'
import type { IngredientKey } from '@/constants/ingredients'
import { ADDITIONAL_RECIPE_INGREDIENTS } from './additionalRecipeIngredients'

export type RecipeIngredientRef = {
  ingredientKey: string
  count?: number | string
  gauge?: string
  note?: string
  optional?: boolean
}

export type CustomRecipeIngredient = {
  name: string
  count?: number | string
  gauge: string
  img?: string | null
  note?: string
  optional?: boolean
}

export type RecipeIngredient = RecipeIngredientRef | CustomRecipeIngredient

export type ResolvedRecipeIngredient = {
  name: string
  count?: number | string
  gauge: string
  img?: string | null
  note?: string
  optional?: boolean
}

export const resolveRecipeIngredient = (ingredient: RecipeIngredient): ResolvedRecipeIngredient => {
  if ('ingredientKey' in ingredient) {
    const ingredientData =
      INGREDIENTS[ingredient.ingredientKey as IngredientKey] ??
      ADDITIONAL_RECIPE_INGREDIENTS[ingredient.ingredientKey as keyof typeof ADDITIONAL_RECIPE_INGREDIENTS]

    if (!ingredientData) {
      throw new Error(`Unknown ingredient key: ${ingredient.ingredientKey}`)
    }

    return {
      name: ingredientData.name,
      count: ingredient.count,
      gauge: ingredient.gauge ?? ingredientData.gauge,
      img: ingredientData.img,
      note: ingredient.note,
      optional: ingredient.optional,
    }
  }

  return ingredient
}
