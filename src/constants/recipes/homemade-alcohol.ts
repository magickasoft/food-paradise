import type { Recipe } from './recipes'
import LEMONCELLO_VODKA from './homemade-alcohol/lemoncello-vodka.json'
import CRANBERRY_VODKA from './homemade-alcohol/cranberry-vodka.json'
import HRENOVUKHA from './homemade-alcohol/hrenovukha.json'
import CHERRY_VODKA from './homemade-alcohol/cherry-vodka.json'

import { withAssetPath } from '@/lib/withAssetPath'

const toRecipes = (raw: readonly Recipe[]): Recipe[] => raw.map(item => withAssetPath<Recipe>(item))

export const HOMEMADE_ALCOHOL: Recipe[] = toRecipes([LEMONCELLO_VODKA, CRANBERRY_VODKA, HRENOVUKHA, CHERRY_VODKA])
