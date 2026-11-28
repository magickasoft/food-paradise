import type { Recipe } from './recipes'
import LIMONAD_S_MYATOJ from './refreshing-drinks/limonad-s-myatoj.json'
import OGURECHNYJ_DETOKS_NAPITOK from './refreshing-drinks/ogurechnyj-detoks-napitok.json'
import YAGODNYJ_MORS from './refreshing-drinks/yagodnyj-mors.json'
import ARBUZNYJ_SMUZI from './refreshing-drinks/arbuznyj-smuzi.json'
import MYATNO_LIMONNIJ_DETOKS_NAPITOK from './refreshing-drinks/myatno-limonnij-detoks-napitok.json'
import IMBIRNYJ_LIMONAD_S_MEDOM from './refreshing-drinks/imbirnyj-limonad-s-medom.json'
import KLUBNICHNO_BAZILIKOVYJ_LIMONAD from './refreshing-drinks/klubnichno-bazilikovyj-limonad.json'
import TROPICHESKIJ_SMUZI_S_MANGO from './refreshing-drinks/tropicheskij-smuzi-s-mango.json'
import OGURECHNO_LAJMOVYJ_SPRITSER from './refreshing-drinks/ogurechno-lajmovyj-spritser.json'
import MALINOVYJ_CHAJNYJ_FRESH from './refreshing-drinks/malinovyj-chajnyj-fresh.json'
import PERSIKOVYJ_LATTE from './refreshing-drinks/persikovyj-latte.json'
import INZHIRNYJ_KOKTEJL from './refreshing-drinks/inzhirnyj-koktejl.json'
import LIMONAD_S_LAYMOM_I_BAZILIKOM from './refreshing-drinks/limonad-s-laymom-i-bazilikom.json'
import OGURECHNO_MYATNAYA_VODA from './refreshing-drinks/ogurechno-myatnaya-voda.json'
import KLUBNICHNYY_MORS_S_MYATOJ from './refreshing-drinks/klubnichnyy-mors-s-myatoj.json'
import MALINA_LAYM_SPRITTSER from './refreshing-drinks/malina-laym-sprittser.json'
import ARBUZNO_LAYMOVYY_FRESH from './refreshing-drinks/arbuzno-laymovyy-fresh.json'
import MANGO_KOKOSOVYY_SMUZI from './refreshing-drinks/mango-kokosovyy-smuzi.json'
import CHERNICHNYY_AYS_TI from './refreshing-drinks/chernichnyy-ays-ti.json'
import ZELENYY_CHAY_S_LAYMOM_I_MYATOJ from './refreshing-drinks/zelenyy-chay-s-laymom-i-myatoj.json'
import PERSIKOVYY_HOLODNYY_CHAY from './refreshing-drinks/persikovyy-holodnyy-chay.json'
import LIMONAD_S_YAGODAMI_I_BAZILIKOM from './refreshing-drinks/limonad-s-yagodami-i-bazilikom.json'
import KLYUKVENNYY_SPRITTSER_S_LAYMOM from './refreshing-drinks/klyukvennyy-sprittser-s-laymom.json'
import IMBIRNO_LAYMOVYY_LIMONAD from './refreshing-drinks/imbirno-laymovyy-limonad.json'
import OGURECHNO_BAZILIKOVYY_LIMONAD from './refreshing-drinks/ogurechno-bazilikovyy-limonad.json'
import KLUBNICHNO_MYATNYY_SMUZI from './refreshing-drinks/klubnichno-myatnyy-smuzi.json'
import ARBUZNO_OGURECHNYY_NAPITOK from './refreshing-drinks/arbuzno-ogurechnyy-napitok.json'
import MALINOVYY_LIMONAD_S_BAZILIKOM from './refreshing-drinks/malinovyy-limonad-s-bazilikom.json'
import YABLOCHNO_MYATNAYA_VODA from './refreshing-drinks/yablochno-myatnaya-voda.json'
import KOKOSOVYY_NAPITOK_S_MANGO_I_CHIA from './refreshing-drinks/kokosovyy-napitok-s-mango-i-chia.json'
import VINOGRADNO_LAYMOVYY_SPRITTSER from './refreshing-drinks/vinogradno-laymovyy-sprittser.json'
import CHERNICHNO_LIMONNYY_SMUZI from './refreshing-drinks/chernichno-limonnyy-smuzi.json'

import DOMASHNIY_TARHUN from './refreshing-drinks/domashniy-tarhun.json'
import GRUSHEVYY_LIMONAD_DYUSHES from './refreshing-drinks/grushevyy-limonad-dyushes.json'
import LIMONAD_KREM_SODA from './refreshing-drinks/limonad-krem-soda.json'
import BEZALKOGOLNYY_MOHITO from './refreshing-drinks/bezalkogolnyy-mohito.json'
import BEZALKOGOLNAYA_SANGRIYA from './refreshing-drinks/bezalkogolnaya-sangriya.json'
import HOLODNYY_CHAY_S_KARKADE_I_APELSINOM from './refreshing-drinks/holodnyy-chay-s-karkade-i-apelsinom.json'
import HOLODNYY_MATCHA_LATTE from './refreshing-drinks/holodnyy-matcha-latte.json'
import KOFE_TONIK from './refreshing-drinks/kofe-tonik.json'
import AYS_LATTE_S_KARAMELYU from './refreshing-drinks/ays-latte-s-karamelyu.json'
import MOLOCHNYY_KOKTEYL_S_KLUBNIKOY from './refreshing-drinks/molochnyy-kokteyl-s-klubnikoy.json'
import BANANOVO_SHOKOLADNYY_MOLOCHNYY_KOKTEYL from './refreshing-drinks/bananovo-shokoladnyy-molochnyy-kokteyl.json'
import MANGOVYY_LASSI from './refreshing-drinks/mangovyy-lassi.json'
import AYRAN_S_UKROPOM from './refreshing-drinks/ayran-s-ukropom.json'
import KOMPOT_IZ_SUHOFRUKTOV from './refreshing-drinks/kompot-iz-suhofruktov.json'
import OBLEPIHOVYY_LIMONAD from './refreshing-drinks/oblepihovyy-limonad.json'
import BRUSNICHNYY_MORS from './refreshing-drinks/brusnichnyy-mors.json'
import LIMONAD_S_MARAKUYEY from './refreshing-drinks/limonad-s-marakuyey.json'
import VISHNEVYY_HOLODNYY_CHAY from './refreshing-drinks/vishnevyy-holodnyy-chay.json'
import ARBUZNAYA_AKVA_FRESKA from './refreshing-drinks/arbuznaya-akva-freska.json'
import REVENEVYY_LIMONAD from './refreshing-drinks/revenevyy-limonad.json'

import { withAssetPath } from '@/lib/withAssetPath'

const toRecipes = (raw: readonly Recipe[]): Recipe[] => raw.map(item => withAssetPath<Recipe>(item))

export const REFRESHING_DRINKS: Recipe[] = toRecipes([
  LIMONAD_S_MYATOJ,
  OGURECHNYJ_DETOKS_NAPITOK,
  YAGODNYJ_MORS,
  ARBUZNYJ_SMUZI,
  MYATNO_LIMONNIJ_DETOKS_NAPITOK,
  IMBIRNYJ_LIMONAD_S_MEDOM,
  KLUBNICHNO_BAZILIKOVYJ_LIMONAD,
  TROPICHESKIJ_SMUZI_S_MANGO,
  OGURECHNO_LAJMOVYJ_SPRITSER,
  MALINOVYJ_CHAJNYJ_FRESH,
  PERSIKOVYJ_LATTE,
  INZHIRNYJ_KOKTEJL,
  LIMONAD_S_LAYMOM_I_BAZILIKOM,
  OGURECHNO_MYATNAYA_VODA,
  KLUBNICHNYY_MORS_S_MYATOJ,
  MALINA_LAYM_SPRITTSER,
  ARBUZNO_LAYMOVYY_FRESH,
  MANGO_KOKOSOVYY_SMUZI,
  CHERNICHNYY_AYS_TI,
  ZELENYY_CHAY_S_LAYMOM_I_MYATOJ,
  PERSIKOVYY_HOLODNYY_CHAY,
  LIMONAD_S_YAGODAMI_I_BAZILIKOM,
  KLYUKVENNYY_SPRITTSER_S_LAYMOM,
  IMBIRNO_LAYMOVYY_LIMONAD,
  OGURECHNO_BAZILIKOVYY_LIMONAD,
  KLUBNICHNO_MYATNYY_SMUZI,
  ARBUZNO_OGURECHNYY_NAPITOK,
  MALINOVYY_LIMONAD_S_BAZILIKOM,
  YABLOCHNO_MYATNAYA_VODA,
  KOKOSOVYY_NAPITOK_S_MANGO_I_CHIA,
  VINOGRADNO_LAYMOVYY_SPRITTSER,
  CHERNICHNO_LIMONNYY_SMUZI,
  DOMASHNIY_TARHUN,
  GRUSHEVYY_LIMONAD_DYUSHES,
  LIMONAD_KREM_SODA,
  BEZALKOGOLNYY_MOHITO,
  BEZALKOGOLNAYA_SANGRIYA,
  HOLODNYY_CHAY_S_KARKADE_I_APELSINOM,
  HOLODNYY_MATCHA_LATTE,
  KOFE_TONIK,
  AYS_LATTE_S_KARAMELYU,
  MOLOCHNYY_KOKTEYL_S_KLUBNIKOY,
  BANANOVO_SHOKOLADNYY_MOLOCHNYY_KOKTEYL,
  MANGOVYY_LASSI,
  AYRAN_S_UKROPOM,
  KOMPOT_IZ_SUHOFRUKTOV,
  OBLEPIHOVYY_LIMONAD,
  BRUSNICHNYY_MORS,
  LIMONAD_S_MARAKUYEY,
  VISHNEVYY_HOLODNYY_CHAY,
  ARBUZNAYA_AKVA_FRESKA,
  REVENEVYY_LIMONAD,
])
