import type { Recipe } from './recipes'
import RAGU_IZ_KABACHKOV_V_SMETANE from './healthy/ragu-iz-kabachkov-v-smetane.json'
import OVSYANOBLIN from './healthy/ovsyanoblin.json'
import KINOA_BOUL_S_LOSOSEM from './healthy/kinoa-boul-s-lososem.json'
import TYKVENNYJ_SUP_S_IMBIREM from './healthy/tykvennyj-sup-s-imbirem.json'
import SMUZI_BOUL_S_CHIA from './healthy/smuzi-boul-s-chia.json'
import FARSHIROVANNYE_PERTSY_S_KINOA from './healthy/farshirovannye-pertsy-s-kinoa.json'
import BATAT_S_KRASNOY_FASOLYU_I_AVOKADO from './healthy/batat-s-krasnoy-fasolyu-i-avokado.json'
import TRESKA_S_BROKKOLI_I_LIMONOM from './healthy/treska-s-brokkoli-i-limonom.json'
import TEPLYJ_SALAT_S_KINOA_TYKVOY_I_RUKKOLOY from './healthy/teplyj-salat-s-kinoa-tykvoy-i-rukkoloy.json'
import TOFU_S_OVOSHCHAMI_V_KUNZHUTNOM_SOUSE from './healthy/tofu-s-ovoshchami-v-kunzhutnom-souse.json'
import OVOSHCHNOY_SUP_S_FASOLYU_I_SHPINATOM from './healthy/ovoshchnoy-sup-s-fasolyu-i-shpinatom.json'
import INDEYKA_S_KABACHKOM_I_ZELENYU from './healthy/indeyka-s-kabachkom-i-zelenyu.json'
import SALAT_S_TUNTSOM_YAYTSOM_I_AVOKADO from './healthy/salat-s-tuntsom-yaytsom-i-avokado.json'
import RIS_S_OVOSHCHAMI_I_KREVETKAMI from './healthy/ris-s-ovoshchami-i-krevetkami.json'
import ZAPEKANKA_IZ_BROKKOLI_S_YAYTSOM from './healthy/zapekanka-iz-brokkoli-s-yaytsom.json'
import SMUZI_S_CHERNIKOY_I_OVSYANKOY from './healthy/smuzi-s-chernikoy-i-ovsyankoy.json'

import BULGUR_S_NUTOM_I_OVOSCHAMI from './healthy/bulgur-s-nutom-i-ovoschami.json'
import SALAT_TABULE_S_BULGUROM from './healthy/salat-tabule-s-bulgurom.json'
import POKE_S_TUNTSOM_I_BURYM_RISOM from './healthy/poke-s-tuntsom-i-burym-risom.json'
import KURINYE_KOTLETY_NA_PARU from './healthy/kurinye-kotlety-na-paru.json'
import GRECHKA_S_INDEYKOY_V_DUHOVKE from './healthy/grechka-s-indeykoy-v-duhovke.json'
import LOSOS_S_CHECHEVITSEY from './healthy/losos-s-chechevitsey.json'
import PERLOVKA_S_OVOSCHAMI from './healthy/perlovka-s-ovoschami.json'
import FRITTATA_S_TSVETNOY_KAPUSTOY from './healthy/frittata-s-tsvetnoy-kapustoy.json'
import SKUMBRIYA_S_OVOSCHAMI_V_PERGAMENTE from './healthy/skumbriya-s-ovoschami-v-pergamente.json'
import CHECHEVICHNYE_KOTLETY_V_DUHOVKE from './healthy/chechevichnye-kotlety-v-duhovke.json'
import KURITSA_S_OVOSCHAMI_NA_PROTIVNE from './healthy/kuritsa-s-ovoschami-na-protivne.json'
import TVOROZHNYY_DESERT_S_YAGODAMI from './healthy/tvorozhnyy-desert-s-yagodami.json'
import KUSKUS_S_OVOSCHAMI_I_FETOY from './healthy/kuskus-s-ovoschami-i-fetoy.json'
import FASOL_S_TOMATAMI_I_SHPINATOM from './healthy/fasol-s-tomatami-i-shpinatom.json'
import BOUL_S_GRECHKOY_I_YAYTSOM from './healthy/boul-s-grechkoy-i-yaytsom.json'
import SUP_IZ_BELOY_FASOLI_S_ROZMARINOM from './healthy/sup-iz-beloy-fasoli-s-rozmarinom.json'
import TYKVA_S_NUTOM_I_YOGURTOM from './healthy/tykva-s-nutom-i-yogurtom.json'
import KURINYE_RULETIKI_SO_SHPINATOM from './healthy/kurinye-ruletiki-so-shpinatom.json'
import BAKLAZHANY_S_CHECHEVITSEY from './healthy/baklazhany-s-chechevitsey.json'
import PALTUS_S_ZELENOY_FASOLYU from './healthy/paltus-s-zelenoy-fasolyu.json'

import { withAssetPath } from '@/lib/withAssetPath'

const toRecipes = (raw: readonly Recipe[]): Recipe[] => raw.map(item => withAssetPath<Recipe>(item))

export const HEALTHY: Recipe[] = toRecipes([
  RAGU_IZ_KABACHKOV_V_SMETANE,
  OVSYANOBLIN,
  KINOA_BOUL_S_LOSOSEM,
  TYKVENNYJ_SUP_S_IMBIREM,
  SMUZI_BOUL_S_CHIA,
  FARSHIROVANNYE_PERTSY_S_KINOA,
  BATAT_S_KRASNOY_FASOLYU_I_AVOKADO,
  TRESKA_S_BROKKOLI_I_LIMONOM,
  TEPLYJ_SALAT_S_KINOA_TYKVOY_I_RUKKOLOY,
  TOFU_S_OVOSHCHAMI_V_KUNZHUTNOM_SOUSE,
  OVOSHCHNOY_SUP_S_FASOLYU_I_SHPINATOM,
  INDEYKA_S_KABACHKOM_I_ZELENYU,
  SALAT_S_TUNTSOM_YAYTSOM_I_AVOKADO,
  RIS_S_OVOSHCHAMI_I_KREVETKAMI,
  ZAPEKANKA_IZ_BROKKOLI_S_YAYTSOM,
  SMUZI_S_CHERNIKOY_I_OVSYANKOY,
  BULGUR_S_NUTOM_I_OVOSCHAMI,
  SALAT_TABULE_S_BULGUROM,
  POKE_S_TUNTSOM_I_BURYM_RISOM,
  KURINYE_KOTLETY_NA_PARU,
  GRECHKA_S_INDEYKOY_V_DUHOVKE,
  LOSOS_S_CHECHEVITSEY,
  PERLOVKA_S_OVOSCHAMI,
  FRITTATA_S_TSVETNOY_KAPUSTOY,
  SKUMBRIYA_S_OVOSCHAMI_V_PERGAMENTE,
  CHECHEVICHNYE_KOTLETY_V_DUHOVKE,
  KURITSA_S_OVOSCHAMI_NA_PROTIVNE,
  TVOROZHNYY_DESERT_S_YAGODAMI,
  KUSKUS_S_OVOSCHAMI_I_FETOY,
  FASOL_S_TOMATAMI_I_SHPINATOM,
  BOUL_S_GRECHKOY_I_YAYTSOM,
  SUP_IZ_BELOY_FASOLI_S_ROZMARINOM,
  TYKVA_S_NUTOM_I_YOGURTOM,
  KURINYE_RULETIKI_SO_SHPINATOM,
  BAKLAZHANY_S_CHECHEVITSEY,
  PALTUS_S_ZELENOY_FASOLYU,
])
