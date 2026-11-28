import type { Recipe } from './recipes'
import GRECHESKIJ_SALAT from './salads/grecheskij-salat.json'
import SALAT_CEZAR_S_KURITSEY from './salads/salat-cezar-s-kuritsey.json'
import SALAT_S_AVOKADO_I_KREVETKAMI from './salads/salat-s-avokado-i-krevetkami.json'
import SALAT_KAPREZE from './salads/salat-kapreze.json'
import SALAT_S_TUNTSOM_I_YAITSOM from './salads/salat-s-tuntsom-i-yaitsom.json'
import TEPLYJ_SALAT_S_GOVYADINOJ from './salads/teplyj-salat-s-govyadinoj.json'
import SALAT_NISUAZ_S_TUNTSOM from './salads/salat-nisuaz-s-tuntsom.json'
import SALAT_VALDORF_S_KURITSEY from './salads/salat-valdorf-s-kuritsey.json'
import KRABOVYI_SALAT_S_KUKURUZOI from './salads/krabovyi-salat-s-kukuruzoi.json'
import SALAT_OLIVYE_KLASSICHESKII from './salads/salat-olivye-klassicheskii.json'
import LETNII_SALAT_S_KLUBNIKOI from './salads/letnii-salat-s-klubnikoi.json'
import GRUZINSKII_SALAT_LOBIO from './salads/gruzinskii-salat-lobio.json'
import SALAT_MIMOSA from './salads/salat-mimosa.json'
import SALAT_S_YAZYKOM_I_GRIBAMI from './salads/salat-s-yazykom-i-gribami.json'

import VINEGRET_S_KVASHENOY_KAPUSTOY from './salads/vinegret-s-kvashenoy-kapustoy.json'
import KOUL_SLOU from './salads/koul-slou.json'
import NEMETSKIY_KARTOFELNYY_SALAT from './salads/nemetskiy-kartofelnyy-salat.json'
import PANTSANELLA from './salads/pantsanella.json'
import SHOPSKIY_SALAT from './salads/shopskiy-salat.json'
import SALAT_S_VETCHINOY_I_FASOLYU from './salads/salat-s-vetchinoy-i-fasolyu.json'
import SALAT_S_KURITSEY_I_KOREYSKOY_MORKOVYU from './salads/salat-s-kuritsey-i-koreyskoy-morkovyu.json'
import SALAT_KRASNOE_MORE from './salads/salat-krasnoe-more.json'
import SALAT_S_PECHENOY_TYKVOY_I_FETOY from './salads/salat-s-pechenoy-tykvoy-i-fetoy.json'
import SALAT_S_RUKKOLOY_GRUSHEY_I_GOLUBYM_SYROM from './salads/salat-s-rukkoloy-grushey-i-golubym-syrom.json'
import SALAT_IZ_SVEKLY_S_CHERNOSLIVOM from './salads/salat-iz-svekly-s-chernoslivom.json'
import SALAT_S_KURINOY_PECHENYU_I_YABLOKOM from './salads/salat-s-kurinoy-pechenyu-i-yablokom.json'
import SALAT_S_FUNCHOZOY_I_OVOSCHAMI from './salads/salat-s-funchozoy-i-ovoschami.json'
import SALAT_S_NUTOM_I_TUNTSOM from './salads/salat-s-nutom-i-tuntsom.json'
import SALAT_S_ROSTBIFOM_I_GORCHICHNOY_ZAPRAVKOY from './salads/salat-s-rostbifom-i-gorchichnoy-zapravkoy.json'
import SALAT_S_PERLOVKOY_I_OGURTSAMI from './salads/salat-s-perlovkoy-i-ogurtsami.json'
import SALAT_IZ_KRASNOKOCHANNOY_KAPUSTY_S_APELSINOM from './salads/salat-iz-krasnokochannoy-kapusty-s-apelsinom.json'
import SALAT_S_KOPCHENOY_SKUMBRIEY from './salads/salat-s-kopchenoy-skumbriey.json'
import SALAT_DAMSKIY_KAPRIZ_S_CHERNOSLIVOM from './salads/salat-damskiy-kapriz-s-chernoslivom.json'
import SALAT_S_POMELO_I_KREVETKAMI from './salads/salat-s-pomelo-i-krevetkami.json'

import { withAssetPath } from '@/lib/withAssetPath'

const toRecipes = (raw: readonly Recipe[]): Recipe[] => raw.map(item => withAssetPath<Recipe>(item))

export const SALADS: Recipe[] = toRecipes([
  GRECHESKIJ_SALAT,
  SALAT_CEZAR_S_KURITSEY,
  SALAT_S_AVOKADO_I_KREVETKAMI,
  SALAT_KAPREZE,
  SALAT_S_TUNTSOM_I_YAITSOM,
  TEPLYJ_SALAT_S_GOVYADINOJ,
  SALAT_NISUAZ_S_TUNTSOM,
  SALAT_VALDORF_S_KURITSEY,
  KRABOVYI_SALAT_S_KUKURUZOI,
  SALAT_OLIVYE_KLASSICHESKII,
  LETNII_SALAT_S_KLUBNIKOI,
  GRUZINSKII_SALAT_LOBIO,
  SALAT_MIMOSA,
  SALAT_S_YAZYKOM_I_GRIBAMI,
  VINEGRET_S_KVASHENOY_KAPUSTOY,
  KOUL_SLOU,
  NEMETSKIY_KARTOFELNYY_SALAT,
  PANTSANELLA,
  SHOPSKIY_SALAT,
  SALAT_S_VETCHINOY_I_FASOLYU,
  SALAT_S_KURITSEY_I_KOREYSKOY_MORKOVYU,
  SALAT_KRASNOE_MORE,
  SALAT_S_PECHENOY_TYKVOY_I_FETOY,
  SALAT_S_RUKKOLOY_GRUSHEY_I_GOLUBYM_SYROM,
  SALAT_IZ_SVEKLY_S_CHERNOSLIVOM,
  SALAT_S_KURINOY_PECHENYU_I_YABLOKOM,
  SALAT_S_FUNCHOZOY_I_OVOSCHAMI,
  SALAT_S_NUTOM_I_TUNTSOM,
  SALAT_S_ROSTBIFOM_I_GORCHICHNOY_ZAPRAVKOY,
  SALAT_S_PERLOVKOY_I_OGURTSAMI,
  SALAT_IZ_KRASNOKOCHANNOY_KAPUSTY_S_APELSINOM,
  SALAT_S_KOPCHENOY_SKUMBRIEY,
  SALAT_DAMSKIY_KAPRIZ_S_CHERNOSLIVOM,
  SALAT_S_POMELO_I_KREVETKAMI,
])
