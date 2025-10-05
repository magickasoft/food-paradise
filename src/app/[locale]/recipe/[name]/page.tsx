import { findByKey } from '@/helpers/findByKey'
import RecipePage from '../../../../components/RecipePage/RecipePage'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { createUrl } from '@/i18n/createUrl'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string; locale: string }>
}): Promise<Metadata> {
  const resolvedParams = await params

  const recipe = await findByKey(resolvedParams.name)

  if (!recipe) notFound()

  const meta = recipe.metaSeo ?? {}

  return {
    title: meta.title || 'Recipe not found',
    description: meta.description || 'Recipe not found',
    keywords: meta.keywords,
    alternates: {
      canonical: createUrl({ locale: resolvedParams.locale, href: `/recipe/${resolvedParams.name}` }),
    },
    openGraph: {
      title: meta['og:title'] || '',
      description: meta['og:description'] || '',
      url: meta['og:url'] || '',
      images: meta['og:image'] ? [meta['og:image']] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.twitterTitle || '',
      description: meta.twitterDescription || '',
      images: meta.twitterImage ? [meta.twitterImage] : [],
    },
    robots: meta.robots || 'index, follow',
    authors: [{ name: meta.author || 'Food-paradise' }],
  }
}

export default async function Page({ params }: { params: Promise<{ name: string; locale: string }> }) {
  const resolvedParams = await params

  const recipe = await findByKey(resolvedParams.name)

  if (!recipe) notFound()

  return <RecipePage recipe={recipe} />
}
