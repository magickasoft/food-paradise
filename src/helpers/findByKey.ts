import { type Recipe, getAllRecipes } from '../constants/recipes/recipes'

const RECIPE_MAP = createRecipeMap()

function createRecipeMap(): Map<string, Recipe> {
  const map = new Map<string, Recipe>()

  const allRecipes = getAllRecipes()

  for (const recipe of allRecipes) {
    if (!recipe.key) continue

    const normalizedKey = normalizeKey(recipe.key)
    if (!map.has(normalizedKey)) {
      map.set(normalizedKey, recipe)
    }
  }

  return map
}

function normalizeKey(key: string): string {
  return key.toLowerCase()
}

export const findByKey = async (key: string): Promise<Recipe | null> => {
  const normalizedKey = normalizeKey(key)
  return RECIPE_MAP.get(normalizedKey) ?? null
}
