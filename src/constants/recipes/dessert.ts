import type { Recipe } from './recipes'
import CHIZKEIK from './desserts/chizkeik.json'
import PANNA_COTTA from './desserts/panna-cotta.json'
import CHOCOLATE_TRUFFLES from './desserts/chocolate-truffles.json'
import MERINGUE_ROLL_S_LEMON_CURD from './desserts/meringue-roll-s-lemon-curd.json'
import KLUBNICHNYY_PAI_S_PESOCHNOY_KROSCHKOY from './desserts/klubnichnyy-pai-s-pesochnoy-kroschkoy.json'
import KREM_BRYULE_S_VANILYU from './desserts/krem-bryule-s-vanilyu.json'
import MORKOVNYY_TORT_S_GRETSKIMI_OREKHAMI from './desserts/morkovnyy-tort-s-gretskimi-orekhami.json'
import PIROZHNOYE_KARTOSHKA from './desserts/pirozhnoye-kartoshka.json'
import TORT_MEDOVIK from './desserts/tort-medovik.json'
import BEZE from './desserts/beze.json'
import LENIVYY_NAPOLEON from './desserts/lenivyy-napoleon.json'
import SHU_S_KREMOM from './desserts/shu-s-kremom.json'
import APPLE_STRUDEL from './desserts/apple-strudel.json'
import CHERRY_PIE from './desserts/cherry-pie.json'

import SHARLOTKA_S_YABLOKAMI from './desserts/sharlotka-s-yablokami.json'
import SHOKOLADNYY_BRAUNI from './desserts/shokoladnyy-brauni.json'
import TIRAMISU_S_KOFE from './desserts/tiramisu-s-kofe.json'
import PECHENE_OVSYANOE_S_IZYUMOM from './desserts/pechene-ovsyanoe-s-izyumom.json'
import PECHENE_KUKIS_S_SHOKOLADOM from './desserts/pechene-kukis-s-shokoladom.json'
import LIMONNYY_KEKS from './desserts/limonnyy-keks.json'
import BANANOVYY_HLEB from './desserts/bananovyy-hleb.json'
import KLAFUTI_S_VISHNEY from './desserts/klafuti-s-vishney.json'
import YABLOCHNYY_KRAMBL from './desserts/yablochnyy-krambl.json'
import SHOKOLADNYY_FONDAN from './desserts/shokoladnyy-fondan.json'
import EKLERY_S_ZAVARNYM_KREMOM from './desserts/eklery-s-zavarnym-kremom.json'
import SMETANNIK_DOMASHNIY from './desserts/smetannik-domashniy.json'
import TORT_ZEBRA from './desserts/tort-zebra.json'
import PESOCHNYE_KOLTSA_S_ARAHISOM from './desserts/pesochnye-koltsa-s-arahisom.json'
import TVOROZHNYE_ROGALIKI from './desserts/tvorozhnye-rogaliki.json'
import PROFITROLI_SO_SLIVOCHNYM_KREMOM from './desserts/profitroli-so-slivochnym-kremom.json'
import GALETA_SO_SLIVAMI from './desserts/galeta-so-slivami.json'
import RISOVYY_PUDING_S_VANILYU from './desserts/risovyy-puding-s-vanilyu.json'
import PECHENYE_YABLOKI_S_TVOROGOM from './desserts/pechenye-yabloki-s-tvorogom.json'
import KOKOSOVYE_MAKARUNY from './desserts/kokosovye-makaruny.json'

import { withAssetPath } from '@/lib/withAssetPath'

const toRecipes = (raw: readonly Recipe[]): Recipe[] => raw.map(item => withAssetPath<Recipe>(item))

export const DESSERT: Recipe[] = toRecipes([
  CHIZKEIK,
  PANNA_COTTA,
  CHOCOLATE_TRUFFLES,
  MERINGUE_ROLL_S_LEMON_CURD,
  KLUBNICHNYY_PAI_S_PESOCHNOY_KROSCHKOY,
  KREM_BRYULE_S_VANILYU,
  MORKOVNYY_TORT_S_GRETSKIMI_OREKHAMI,
  PIROZHNOYE_KARTOSHKA,
  TORT_MEDOVIK,
  BEZE,
  LENIVYY_NAPOLEON,
  SHU_S_KREMOM,
  APPLE_STRUDEL,
  CHERRY_PIE,
  SHARLOTKA_S_YABLOKAMI,
  SHOKOLADNYY_BRAUNI,
  TIRAMISU_S_KOFE,
  PECHENE_OVSYANOE_S_IZYUMOM,
  PECHENE_KUKIS_S_SHOKOLADOM,
  LIMONNYY_KEKS,
  BANANOVYY_HLEB,
  KLAFUTI_S_VISHNEY,
  YABLOCHNYY_KRAMBL,
  SHOKOLADNYY_FONDAN,
  EKLERY_S_ZAVARNYM_KREMOM,
  SMETANNIK_DOMASHNIY,
  TORT_ZEBRA,
  PESOCHNYE_KOLTSA_S_ARAHISOM,
  TVOROZHNYE_ROGALIKI,
  PROFITROLI_SO_SLIVOCHNYM_KREMOM,
  GALETA_SO_SLIVAMI,
  RISOVYY_PUDING_S_VANILYU,
  PECHENYE_YABLOKI_S_TVOROGOM,
  KOKOSOVYE_MAKARUNY,
])
