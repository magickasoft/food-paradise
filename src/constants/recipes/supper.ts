import type { Recipe } from './recipes'
import RUBLENYE_KOTLETY_IZ_GRUDKI_NA_SKOVORODE from './supper/rublenye-kotlety-iz-grudki-na-skovorode.json'
import STEJK_RIBAJ_NA_ELEKTROGRILE from './supper/stejk-ribaj-na-elektrogrile.json'
import MJASO_PO_FRANCUZSKI_S_POMIDORAMI_I_SYROM from './supper/mjaso-po-francuzski-s-pomidorami-i-syrom.json'
import UZBEKSKIJ_PLOV_S_GOVYADINOJ from './supper/uzbekskij-plov-s-govyadinoj.json'
import LOSOS_V_MEDOVO_GORCHICHNOM_SOUSE from './supper/losos-v-medovo-gorchichnom-souse.json'
import KURITSA_GRIL_S_KINOA from './supper/kuritsa-gril-s-kinoa.json'
import RATATUI_S_BAKLAZHANAMI from './supper/ratatui-s-baklazhanami.json'
import LAZANYA_S_MYASOM_I_SYROM from './supper/lazanya-s-myasom-i-syrom.json'
import GRECHKA_S_GRIBAMI_I_LUKOM from './supper/grechka-s-gribami-i-lukom.json'
import KARTOFELNAYA_ZAPEKANKA_S_FARSHEM from './supper/kartofelnaya-zapekanka-s-farshem.json'
import KURINYE_GRUDKI_V_SLIVOCNOM_SOUSE from './supper/kurinye-grudki-v-slivocnom-souse.json'
import LOSOS_POD_SYRNOY_KOROCHKOY from './supper/losos-pod-syrnoy-korochkoy.json'
import RATATUY_PO_DOMASHNEMU from './supper/ratatuy-po-domashnemu.json'
import GOVYADINA_PO_BURGUNDSKI from './supper/govyadina-po-burgundski.json'
import KREVETKI_V_CHESNOCHNOM_SOUSE from './supper/krevetki-v-chesnochnom-souse.json'
import KOTLETY_S_PYURE from './supper/kotlety-s-pyure.json'
import MAKARONY_S_SYROM from './supper/makarony-s-syrom.json'
import RYBNYE_KOTLETY_S_PYURE from './supper/rybnye-kotlety-s-pyure.json'
import FARSHIROVANNYE_PERTSY from './supper/farshirovannye-pertsy.json'

import BEFSTROGANOV_SO_SMETANOY from './supper/befstroganov-so-smetanoy.json'
import GULYASH_IZ_GOVYADINY from './supper/gulyash-iz-govyadiny.json'
import CHAHOHBILI_IZ_KURITSY from './supper/chahohbili-iz-kuritsy.json'
import KURITSA_TERIYAKI_S_RISOM from './supper/kuritsa-teriyaki-s-risom.json'
import PASTA_KARBONARA from './supper/pasta-karbonara.json'
import SPAGETTI_BOLONEZE from './supper/spagetti-boloneze.json'
import RIZOTTO_S_BELYMI_GRIBAMI from './supper/rizotto-s-belymi-gribami.json'
import TEFTELI_V_TOMATNOM_SOUSE from './supper/tefteli-v-tomatnom-souse.json'
import GOLUBTSY_V_SMETANNO_TOMATNOM_SOUSE from './supper/golubtsy-v-smetanno-tomatnom-souse.json'
import LENIVYE_GOLUBTSY from './supper/lenivye-golubtsy.json'
import KURITSA_V_SOUSE_KARRI from './supper/kuritsa-v-souse-karri.json'
import SVININA_V_KISLO_SLADKOM_SOUSE from './supper/svinina-v-kislo-sladkom-souse.json'
import KURITSA_PO_KIEVSKI from './supper/kuritsa-po-kievski.json'
import PELMENI_DOMASHNIE from './supper/pelmeni-domashnie.json'
import VARENIKI_S_KARTOFELEM_I_LUKOM from './supper/vareniki-s-kartofelem-i-lukom.json'
import PASTUSHIY_PIROG from './supper/pastushiy-pirog.json'
import TRESKA_V_TOMATNOM_SOUSE from './supper/treska-v-tomatnom-souse.json'
import KURINYY_SHNITSEL from './supper/kurinyy-shnitsel.json'
import AZU_PO_TATARSKI from './supper/azu-po-tatarski.json'
import SVINYE_OTBIVNYE_V_GRIBNOM_SOUSE from './supper/svinye-otbivnye-v-gribnom-souse.json'

import { withAssetPath } from '@/lib/withAssetPath'

const toRecipes = (raw: readonly Recipe[]): Recipe[] => raw.map(item => withAssetPath<Recipe>(item))

export const SUPPER: Recipe[] = toRecipes([
  RUBLENYE_KOTLETY_IZ_GRUDKI_NA_SKOVORODE,
  STEJK_RIBAJ_NA_ELEKTROGRILE,
  MJASO_PO_FRANCUZSKI_S_POMIDORAMI_I_SYROM,
  UZBEKSKIJ_PLOV_S_GOVYADINOJ,
  LOSOS_V_MEDOVO_GORCHICHNOM_SOUSE,
  KURITSA_GRIL_S_KINOA,
  RATATUI_S_BAKLAZHANAMI,
  LAZANYA_S_MYASOM_I_SYROM,
  GRECHKA_S_GRIBAMI_I_LUKOM,
  KARTOFELNAYA_ZAPEKANKA_S_FARSHEM,
  KURINYE_GRUDKI_V_SLIVOCNOM_SOUSE,
  LOSOS_POD_SYRNOY_KOROCHKOY,
  RATATUY_PO_DOMASHNEMU,
  GOVYADINA_PO_BURGUNDSKI,
  KREVETKI_V_CHESNOCHNOM_SOUSE,
  KOTLETY_S_PYURE,
  MAKARONY_S_SYROM,
  RYBNYE_KOTLETY_S_PYURE,
  FARSHIROVANNYE_PERTSY,
  BEFSTROGANOV_SO_SMETANOY,
  GULYASH_IZ_GOVYADINY,
  CHAHOHBILI_IZ_KURITSY,
  KURITSA_TERIYAKI_S_RISOM,
  PASTA_KARBONARA,
  SPAGETTI_BOLONEZE,
  RIZOTTO_S_BELYMI_GRIBAMI,
  TEFTELI_V_TOMATNOM_SOUSE,
  GOLUBTSY_V_SMETANNO_TOMATNOM_SOUSE,
  LENIVYE_GOLUBTSY,
  KURITSA_V_SOUSE_KARRI,
  SVININA_V_KISLO_SLADKOM_SOUSE,
  KURITSA_PO_KIEVSKI,
  PELMENI_DOMASHNIE,
  VARENIKI_S_KARTOFELEM_I_LUKOM,
  PASTUSHIY_PIROG,
  TRESKA_V_TOMATNOM_SOUSE,
  KURINYY_SHNITSEL,
  AZU_PO_TATARSKI,
  SVINYE_OTBIVNYE_V_GRIBNOM_SOUSE,
])
