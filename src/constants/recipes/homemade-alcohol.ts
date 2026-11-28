import type { Recipe } from './recipes'
import LEMONCELLO_VODKA from './homemade-alcohol/lemoncello-vodka.json'
import CRANBERRY_VODKA from './homemade-alcohol/cranberry-vodka.json'
import HRENOVUKHA from './homemade-alcohol/hrenovukha.json'
import CHERRY_VODKA from './homemade-alcohol/cherry-vodka.json'

import NASTOYKA_NA_CHERNOY_SMORODINE from './homemade-alcohol/nastoyka-na-chernoy-smorodine.json'
import MALINOVAYA_NASTOYKA from './homemade-alcohol/malinovaya-nastoyka.json'
import KLUBNICHNYY_LIKER from './homemade-alcohol/klubnichnyy-liker.json'
import EZHEVICHNAYA_NASTOYKA from './homemade-alcohol/ezhevichnaya-nastoyka.json'
import SLIVOVAYA_NASTOYKA_BEZ_KOSTOCHEK from './homemade-alcohol/slivovaya-nastoyka-bez-kostochek.json'
import ABRIKOSOVYY_LIKER from './homemade-alcohol/abrikosovyy-liker.json'
import OBLEPIHOVAYA_NASTOYKA_S_MEDOM from './homemade-alcohol/oblepihovaya-nastoyka-s-medom.json'
import YABLOCHNAYA_NASTOYKA_S_KORITSEY from './homemade-alcohol/yablochnaya-nastoyka-s-koritsey.json'
import GRUSHEVAYA_NASTOYKA from './homemade-alcohol/grushevaya-nastoyka.json'
import APELSINOVYY_LIKER_NA_TSEDRE from './homemade-alcohol/apelsinovyy-liker-na-tsedre.json'
import KOFEYNYY_LIKER from './homemade-alcohol/kofeynyy-liker.json'
import SHOKOLADNYY_LIKER from './homemade-alcohol/shokoladnyy-liker.json'
import SLIVOCHNYY_LIKER_BEZ_YAITS from './homemade-alcohol/slivochnyy-liker-bez-yaits.json'
import KOKOSOVYY_LIKER from './homemade-alcohol/kokosovyy-liker.json'
import MYATNYY_LIKER from './homemade-alcohol/myatnyy-liker.json'
import IMBIRNAYA_NASTOYKA_S_LIMONOM from './homemade-alcohol/imbirnaya-nastoyka-s-limonom.json'
import PERTSOVKA_S_MEDOM from './homemade-alcohol/pertsovka-s-medom.json'
import BORODINSKAYA_NASTOYKA from './homemade-alcohol/borodinskaya-nastoyka.json'
import NASTOYKA_NA_CHERNOPLODNOY_RYABINE from './homemade-alcohol/nastoyka-na-chernoplodnoy-ryabine.json'
import GRANATOVAYA_NASTOYKA from './homemade-alcohol/granatovaya-nastoyka.json'

import { withAssetPath } from '@/lib/withAssetPath'

const toRecipes = (raw: readonly Recipe[]): Recipe[] => raw.map(item => withAssetPath<Recipe>(item))

export const HOMEMADE_ALCOHOL: Recipe[] = toRecipes([
  LEMONCELLO_VODKA,
  CRANBERRY_VODKA,
  HRENOVUKHA,
  CHERRY_VODKA,
  NASTOYKA_NA_CHERNOY_SMORODINE,
  MALINOVAYA_NASTOYKA,
  KLUBNICHNYY_LIKER,
  EZHEVICHNAYA_NASTOYKA,
  SLIVOVAYA_NASTOYKA_BEZ_KOSTOCHEK,
  ABRIKOSOVYY_LIKER,
  OBLEPIHOVAYA_NASTOYKA_S_MEDOM,
  YABLOCHNAYA_NASTOYKA_S_KORITSEY,
  GRUSHEVAYA_NASTOYKA,
  APELSINOVYY_LIKER_NA_TSEDRE,
  KOFEYNYY_LIKER,
  SHOKOLADNYY_LIKER,
  SLIVOCHNYY_LIKER_BEZ_YAITS,
  KOKOSOVYY_LIKER,
  MYATNYY_LIKER,
  IMBIRNAYA_NASTOYKA_S_LIMONOM,
  PERTSOVKA_S_MEDOM,
  BORODINSKAYA_NASTOYKA,
  NASTOYKA_NA_CHERNOPLODNOY_RYABINE,
  GRANATOVAYA_NASTOYKA,
])
