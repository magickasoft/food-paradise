import { PageWrapper } from '@/components/PageWrapper'
import { RECIPES_OBJ } from '@/constants/recipes/recipes'
import { use } from 'react' // Import the use hook
import { AdaptiveRecipeCard } from '@/components/Cards/AdaptiveRecipeCard'
import { Grid } from '@/components/Cards/Grid'

export default function CategoryPage({ params }: { params: Promise<{ name: string }> }) {
  const resolvedParams = use(params) // Unwrap the Promise
  const recipes = resolvedParams.name ? RECIPES_OBJ[resolvedParams.name] : []

  return (
    <PageWrapper>
      <Grid>
        {recipes?.map(({ key, ...current }) => {
          return <AdaptiveRecipeCard key={key} {...current} />
        })}
      </Grid>
    </PageWrapper>
  )
}
