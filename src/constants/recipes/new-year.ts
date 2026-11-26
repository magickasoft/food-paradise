import type { Recipe } from './recipes'
import NOVOGODNEYE_PECHENYE_S_GLAZURYU from './desserts/novogodneye-pechenye-s-glazuryu.json'
import KRABOVYY_SALAT from './salads/krabovyy-salat.json'
import SALAT_MIMOSA from './salads/salat-mimosa.json'
import SALAT_OBZHORKA from './salads/salat-obzhorka.json'
import SALAT_OLIVYE from './salads/salat-olivye.json'
import SALAT_S_KRASNOY_RYBOY_I_AVOKADO from './salads/salat-s-krasnoy-ryboy-i-avokado.json'
import SALAT_S_KURITSEY_I_ANANASAMI from './salads/salat-s-kuritsey-i-ananasami.json'
import SALAT_S_YAZYKOM_I_GRIBAMI from './salads/salat-s-yazykom-i-gribami.json'
import SELODKA_POD_SHUBOY from './salads/selodka-pod-shuboy.json'
import TARTALETKI_S_IKROY from './snacks/tartaletki-s-ikroy.json'
import TARTALETKI_S_KURITSEY_I_GRIBAMI from './snacks/tartaletki-s-kuritsey-i-gribami.json'
import ZAPECHONNAYA_KURITSA_TSELIKOM from './supper/zapechonnaya-kuritsa-tselikom.json'
import UTKA_S_YABLOKAMI_I_APELSINAMI from './new-year/utka-s-yablokami-i-apelsinami.json'
import BUZHENINA_V_MEDOVO_GORCHICHNOY_GLAZURI from './new-year/buzhenina-v-medovo-gorchichnoy-glazuri.json'
import LOSOS_V_SLIVOCHNO_IKORNOM_SOUSE from './new-year/losos-v-slivochno-ikornom-souse.json'
import MYASNOY_RULET_S_CHERNOSLIVOM from './new-year/myasnoy-rulet-s-chernoslivom.json'
import ZHYULEN_S_KURITSEY_I_GRIBAMI from './new-year/zhyulen-s-kuritsey-i-gribami.json'
import KARTOFEL_GRATEN_DOFINUA from './new-year/kartofel-graten-dofinua.json'
import SALAT_GRANATOVYY_BRASLET from './new-year/salat-granatovyy-braslet.json'
import SALAT_STOLICHNYY_S_KURITSEY from './new-year/salat-stolichnyy-s-kuritsey.json'
import SALAT_S_KALMARAMI_OGURTSOM_I_YAYTSOM from './new-year/salat-s-kalmarami-ogurtsom-i-yaytsom.json'
import SALAT_S_PECHENYU_TRESKI from './new-year/salat-s-pechenyu-treski.json'
import SALAT_TIFFANI_S_VINOGRADOM from './new-year/salat-tiffani-s-vinogradom.json'
import SALAT_MUZHSKOY_KAPRIZ from './new-year/salat-muzhskoy-kapriz.json'
import SALAT_PODSOLNUH_S_KURITSEY_I_GRIBAMI from './new-year/salat-podsolnuh-s-kuritsey-i-gribami.json'
import PECHENOCHNYY_TORT from './new-year/pechenochnyy-tort.json'
import HOLODETS_IZ_GOVYADINY_I_KURITSY from './new-year/holodets-iz-govyadiny-i-kuritsy.json'
import ZALIVNOE_IZ_SUDAKA from './new-year/zalivnoe-iz-sudaka.json'
import RULET_IZ_LAVASHA_S_KRABOVYMI_PALOCHKAMI from './new-year/rulet-iz-lavasha-s-krabovymi-palochkami.json'
import PROFITROLI_S_KRASNOY_RYBOY from './new-year/profitroli-s-krasnoy-ryboy.json'
import SYRNYE_SHARIKI_TRI_VKUSA from './new-year/syrnye-shariki-tri-vkusa.json'
import BRUSKETTY_S_LOSOSEM_I_SLIVOCHNYM_SYROM from './new-year/brusketty-s-lososem-i-slivochnym-syrom.json'
import YAJTSA_FARSHIROVANNYE_PECHENYU_TRESKI from './new-year/yajtsa-farshirovannye-pechenyu-treski.json'
import KANAPE_S_KREVETKAMI_I_AVOKADO from './new-year/kanape-s-krevetkami-i-avokado.json'
import ZAPECENNYY_KAMAMBER_S_KLYUKVOY from './new-year/zapecennyy-kamamber-s-klyukvoy.json'
import KURINYY_PASHTET_S_KLYUKVENNYM_ZHELE from './new-year/kurinyy-pashtet-s-klyukvennym-zhele.json'
import MINI_KISHI_S_LOSOSEM_I_SHPINATOM from './new-year/mini-kishi-s-lososem-i-shpinatom.json'
import MANDARINOVAYA_PANNA_KOTTA from './new-year/mandarinovaya-panna-kotta.json'
import PAVLOVA_ROZHDESTVENSKIY_VENOK from './new-year/pavlova-rozhdestvenskiy-venok.json'
import SHOKOLADNYY_RULET_ROZHDESTVENSKOE_POLENO from './new-year/shokoladnyy-rulet-rozhdestvenskoe-poleno.json'
import TORT_MONASTYRSKAYA_IZBA from './new-year/tort-monastyrskaya-izba.json'
import MANDARINOVYY_TIRAMISU from './new-year/mandarinovyy-tiramisu.json'

import { withAssetPath } from '@/lib/withAssetPath'

const toRecipes = (raw: readonly Recipe[]): Recipe[] => raw.map(item => withAssetPath<Recipe>(item))

export const NEW_YEAR: Recipe[] = toRecipes([
  SALAT_OLIVYE,
  KRABOVYY_SALAT,
  SELODKA_POD_SHUBOY,
  SALAT_MIMOSA,
  SALAT_S_KURITSEY_I_ANANASAMI,
  SALAT_OBZHORKA,
  SALAT_S_YAZYKOM_I_GRIBAMI,
  SALAT_S_KRASNOY_RYBOY_I_AVOKADO,
  ZAPECHONNAYA_KURITSA_TSELIKOM,
  TARTALETKI_S_IKROY,
  TARTALETKI_S_KURITSEY_I_GRIBAMI,
  NOVOGODNEYE_PECHENYE_S_GLAZURYU,
  UTKA_S_YABLOKAMI_I_APELSINAMI,
  BUZHENINA_V_MEDOVO_GORCHICHNOY_GLAZURI,
  LOSOS_V_SLIVOCHNO_IKORNOM_SOUSE,
  MYASNOY_RULET_S_CHERNOSLIVOM,
  ZHYULEN_S_KURITSEY_I_GRIBAMI,
  KARTOFEL_GRATEN_DOFINUA,
  SALAT_GRANATOVYY_BRASLET,
  SALAT_STOLICHNYY_S_KURITSEY,
  SALAT_S_KALMARAMI_OGURTSOM_I_YAYTSOM,
  SALAT_S_PECHENYU_TRESKI,
  SALAT_TIFFANI_S_VINOGRADOM,
  SALAT_MUZHSKOY_KAPRIZ,
  SALAT_PODSOLNUH_S_KURITSEY_I_GRIBAMI,
  PECHENOCHNYY_TORT,
  HOLODETS_IZ_GOVYADINY_I_KURITSY,
  ZALIVNOE_IZ_SUDAKA,
  RULET_IZ_LAVASHA_S_KRABOVYMI_PALOCHKAMI,
  PROFITROLI_S_KRASNOY_RYBOY,
  SYRNYE_SHARIKI_TRI_VKUSA,
  BRUSKETTY_S_LOSOSEM_I_SLIVOCHNYM_SYROM,
  YAJTSA_FARSHIROVANNYE_PECHENYU_TRESKI,
  KANAPE_S_KREVETKAMI_I_AVOKADO,
  ZAPECENNYY_KAMAMBER_S_KLYUKVOY,
  KURINYY_PASHTET_S_KLYUKVENNYM_ZHELE,
  MINI_KISHI_S_LOSOSEM_I_SHPINATOM,
  MANDARINOVAYA_PANNA_KOTTA,
  PAVLOVA_ROZHDESTVENSKIY_VENOK,
  SHOKOLADNYY_RULET_ROZHDESTVENSKOE_POLENO,
  TORT_MONASTYRSKAYA_IZBA,
  MANDARINOVYY_TIRAMISU,
])
