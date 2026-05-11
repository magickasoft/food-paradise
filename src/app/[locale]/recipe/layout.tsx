import { getAllRecipes } from '@/constants/recipes/recipes'

export async function generateStaticParams() {
  const allRecipes = getAllRecipes()
  return allRecipes.map(recipe => ({
    name: recipe.key ?? recipe.name,
  }))
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
