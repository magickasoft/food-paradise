import type { Recipe } from './recipes'
import SCRAMBLED_EGGS from './breakfast/scrambled-eggs.json'
import SCRAMBLED_EGGS_WITH_BROCCOLI from './breakfast/scrambled-eggs-with-broccoli.json'
import OVSJANAJA_KASHA_S_JABLOKAMI_I_KORICEJ from './breakfast/ovsjanaja-kasha-s-jablokami-i-koricej.json'
import OMLET_S_MOLOKOM from './breakfast/omlet-s-molokom.json'
import BLINY from './breakfast/bliny.json'
import SCRAMBLED_EGGS_WITH_SAUSAGES_AND_BEANS from './breakfast/scrambled-eggs-with-sausages-and-beans.json'
import SCRAMBLED_EGGS_SHAKSHUKA from './breakfast/scrambled-eggs-shakshuka.json'
import MENEMEN from './breakfast/menemen.json'
import OVSYANKA_S_BANANOM_I_CHIA from './breakfast/ovsyanka-s-bananom-i-chia.json'
import CHIA_PUDING_S_CHERNIKOY from './breakfast/chia-puding-s-chernikoy.json'
import YAICHNYE_MAFFINY_S_BROKKOLI from './breakfast/yaichnye-maffiny-s-brokkoli.json'
import TOST_S_AVOKADO_I_LOSOSEM from './breakfast/tost-s-avokado-i-lososem.json'
import GRECHNEVAYA_KASHA_S_GRIBAMI_I_YAYTSOM from './breakfast/grechnevaya-kasha-s-gribami-i-yaytsom.json'
import RISOVAYA_KASHA_S_YABLOKOM_I_KORITSEY from './breakfast/risovaya-kasha-s-yablokom-i-koritsey.json'
import OMLET_S_TUNTSOM_I_ZELENYM_LUKOM from './breakfast/omlet-s-tuntsom-i-zelenym-lukom.json'
import OVSYANYE_BLINY_S_YAGODAMI from './breakfast/ovsyanye-bliny-s-yagodami.json'
import SMUZI_BOUL_S_MANGO_I_CHIA from './breakfast/smuzi-boul-s-mango-i-chia.json'
import PITA_S_YAYTSOM_I_SHPINATOM from './breakfast/pita-s-yaytsom-i-shpinatom.json'
import KARTOFELNAYA_TORTILYA_S_ZELENYU from './breakfast/kartofelnaya-tortilya-s-zelenyu.json'
import TOFU_SKRAMBL_S_OVOSHCHAMI from './breakfast/tofu-skrambl-s-ovoshchami.json'
import ZAPEKANKA_IZ_OVSYANKI_S_YABLOKAMI from './breakfast/zapekanka-iz-ovsyanki-s-yablokami.json'
import YAICHNICA_S_FASOLYU_I_TOMATAMI from './breakfast/yaichnica-s-fasolyu-i-tomatami.json'
import OMLET_S_KUKURUZOY_I_ZELENYU from './breakfast/omlet-s-kukuruzoy-i-zelenyu.json'
import YOGURT_S_GRANOLA_I_YAGODAMI from './breakfast/yogurt-s-granola-i-yagodami.json'
import KINOA_KASHA_S_YAGODAMI from './breakfast/kinoa-kasha-s-yagodami.json'
import SENDVICH_S_AVOKADO_I_YAYTSOM from './breakfast/sendvich-s-avokado-i-yaytsom.json'
import ZELENYJ_OMLET_SO_SHPINATOM from './breakfast/zelenyj-omlet-so-shpinatom.json'
import YABLOCHNYE_OLADI_IZ_OVSYANOY_MUKI from './breakfast/yablochnye-oladi-iz-ovsyanoy-muki.json'

import SYRNIKI_IZ_TVOROGA from './breakfast/syrniki-iz-tvoroga.json'
import PYSHNYE_OLADI_NA_KEFIRE from './breakfast/pyshnye-oladi-na-kefire.json'
import AMERIKANSKIE_PANKEYKI from './breakfast/amerikanskie-pankeyki.json'
import LENIVYE_VARENIKI_S_TVOROGOM from './breakfast/lenivye-vareniki-s-tvorogom.json'
import TVOROZHNAYA_ZAPEKANKA_S_IZYUMOM from './breakfast/tvorozhnaya-zapekanka-s-izyumom.json'
import DRANIKI_KARTOFELNYE from './breakfast/draniki-kartofelnye.json'
import FRANTSUZSKIE_TOSTY_S_KORITSEY from './breakfast/frantsuzskie-tosty-s-koritsey.json'
import PSHENNAYA_KASHA_S_TYKVOY from './breakfast/pshennaya-kasha-s-tykvoy.json'
import MANNAYA_KASHA_BEZ_KOMOCHKOV from './breakfast/mannaya-kasha-bez-komochkov.json'
import KUKURUZNAYA_KASHA_NA_MOLOKE from './breakfast/kukuruznaya-kasha-na-moloke.json'
import NOCHNAYA_OVSYANKA_S_ARAHISOVOY_PASTOY from './breakfast/nochnaya-ovsyanka-s-arahisovoy-pastoy.json'
import VENSKIE_VAFLI from './breakfast/venskie-vafli.json'
import HACHAPURI_PO_ADZHARSKI from './breakfast/hachapuri-po-adzharski.json'
import CHYLBYR_YAYTSA_S_YOGURTOM from './breakfast/chylbyr-yaytsa-s-yogurtom.json'
import YAYTSA_BENEDIKT_S_VETCHINOY from './breakfast/yaytsa-benedikt-s-vetchinoy.json'
import OMLET_S_SHAMPINONAMI_I_SYROM from './breakfast/omlet-s-shampinonami-i-syrom.json'
import GORYACHIE_TOSTY_KROK_MESE from './breakfast/goryachie-tosty-krok-mese.json'
import BANANOVYE_OLADI from './breakfast/bananovye-oladi.json'
import GRECHNEVYE_BLINY_NA_KEFIRE from './breakfast/grechnevye-bliny-na-kefire.json'
import YACHNEVAYA_KASHA_S_GRIBAMI from './breakfast/yachnevaya-kasha-s-gribami.json'

import { withAssetPath } from '@/lib/withAssetPath'

const toRecipes = (raw: readonly Recipe[]): Recipe[] => raw.map(item => withAssetPath<Recipe>(item))

export const BREAKFAST: Recipe[] = toRecipes([
  SCRAMBLED_EGGS,
  SCRAMBLED_EGGS_WITH_BROCCOLI,
  OVSJANAJA_KASHA_S_JABLOKAMI_I_KORICEJ,
  OMLET_S_MOLOKOM,
  BLINY,
  SCRAMBLED_EGGS_WITH_SAUSAGES_AND_BEANS,
  SCRAMBLED_EGGS_SHAKSHUKA,
  MENEMEN,
  OVSYANKA_S_BANANOM_I_CHIA,
  CHIA_PUDING_S_CHERNIKOY,
  YAICHNYE_MAFFINY_S_BROKKOLI,
  TOST_S_AVOKADO_I_LOSOSEM,
  GRECHNEVAYA_KASHA_S_GRIBAMI_I_YAYTSOM,
  RISOVAYA_KASHA_S_YABLOKOM_I_KORITSEY,
  OMLET_S_TUNTSOM_I_ZELENYM_LUKOM,
  OVSYANYE_BLINY_S_YAGODAMI,
  SMUZI_BOUL_S_MANGO_I_CHIA,
  PITA_S_YAYTSOM_I_SHPINATOM,
  KARTOFELNAYA_TORTILYA_S_ZELENYU,
  TOFU_SKRAMBL_S_OVOSHCHAMI,
  ZAPEKANKA_IZ_OVSYANKI_S_YABLOKAMI,
  YAICHNICA_S_FASOLYU_I_TOMATAMI,
  OMLET_S_KUKURUZOY_I_ZELENYU,
  YOGURT_S_GRANOLA_I_YAGODAMI,
  KINOA_KASHA_S_YAGODAMI,
  SENDVICH_S_AVOKADO_I_YAYTSOM,
  ZELENYJ_OMLET_SO_SHPINATOM,
  YABLOCHNYE_OLADI_IZ_OVSYANOY_MUKI,
  SYRNIKI_IZ_TVOROGA,
  PYSHNYE_OLADI_NA_KEFIRE,
  AMERIKANSKIE_PANKEYKI,
  LENIVYE_VARENIKI_S_TVOROGOM,
  TVOROZHNAYA_ZAPEKANKA_S_IZYUMOM,
  DRANIKI_KARTOFELNYE,
  FRANTSUZSKIE_TOSTY_S_KORITSEY,
  PSHENNAYA_KASHA_S_TYKVOY,
  MANNAYA_KASHA_BEZ_KOMOCHKOV,
  KUKURUZNAYA_KASHA_NA_MOLOKE,
  NOCHNAYA_OVSYANKA_S_ARAHISOVOY_PASTOY,
  VENSKIE_VAFLI,
  HACHAPURI_PO_ADZHARSKI,
  CHYLBYR_YAYTSA_S_YOGURTOM,
  YAYTSA_BENEDIKT_S_VETCHINOY,
  OMLET_S_SHAMPINONAMI_I_SYROM,
  GORYACHIE_TOSTY_KROK_MESE,
  BANANOVYE_OLADI,
  GRECHNEVYE_BLINY_NA_KEFIRE,
  YACHNEVAYA_KASHA_S_GRIBAMI,
])
