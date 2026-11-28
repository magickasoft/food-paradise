import type { Recipe } from './recipes'
import BORSHCH_S_PAMPUSHKAMI from './dinner/borshch-s-pampushkami.json'
import OKROSHKA_NA_KVASE from './dinner/okroshka-na-kvase.json'
import OKROSHKA_NA_KEFIRE from './dinner/okroshka-na-kefire.json'
import CLASSIC_BORSCHT from './dinner/classic-borscht.json'
import PUMPKIN_CREAM_SOUP from './dinner/pumpkin-cream-soup.json'
import PHO_BO from './dinner/pho-bo.json'
import GAZPACHO from './dinner/gazpacho.json'
import CREAM_MUSHROOM_SOUP from './dinner/cream-mushroom-soup.json'
import SCHI_IZ_SVEZHEY_KAPUSTY from './dinner/schi-iz-svezhey-kapusty.json'
import UHA_PO_FINSKI from './dinner/uha-po-finski.json'
import SUP_PYURE_IZ_TYKVY from './dinner/sup-pyure-iz-tykvy.json'
import KURINYY_BULON_S_LAPSHOY from './dinner/kurinyy-bulon-s-lapshoy.json'

import SUP_HARCHO_S_GOVYADINOY from './dinner/sup-harcho-s-govyadinoy.json'
import SOLYANKA_MYASNAYA_SBORNAYA from './dinner/solyanka-myasnaya-sbornaya.json'
import RASSOLNIK_S_PERLOVKOY from './dinner/rassolnik-s-perlovkoy.json'
import GOROHOVYY_SUP_S_KOPCHENYMI_REBRAMI from './dinner/gorohovyy-sup-s-kopchenymi-rebrami.json'
import SUP_S_FRIKADELKAMI from './dinner/sup-s-frikadelkami.json'
import SYRNYY_SUP_S_KURITSEY from './dinner/syrnyy-sup-s-kuritsey.json'
import MERDZHIMEK_TURETSKIY_CHECHEVICHNYY_SUP from './dinner/merdzhimek-turetskiy-chechevichnyy-sup.json'
import MINESTRONE_S_FASOLYU from './dinner/minestrone-s-fasolyu.json'
import FRANTSUZSKIY_LUKOVYY_SUP from './dinner/frantsuzskiy-lukovyy-sup.json'
import VISHISUAZ from './dinner/vishisuaz.json'
import TOM_YAM_S_KREVETKAMI from './dinner/tom-yam-s-krevetkami.json'
import MISO_SUP_S_TOFU from './dinner/miso-sup-s-tofu.json'
import LAGMAN_S_GOVYADINOY from './dinner/lagman-s-govyadinoy.json'
import SHURPA_S_BARANINOY from './dinner/shurpa-s-baraninoy.json'
import CHAUDER_S_KUKURUZOY_I_BEKONOM from './dinner/chauder-s-kukuruzoy-i-bekonom.json'
import KREM_SUP_IZ_BROKKOLI from './dinner/krem-sup-iz-brokkoli.json'
import SVEKOLNIK_HOLODNYY from './dinner/svekolnik-holodnyy.json'
import ZELENYE_SCHI_SO_SCHAVELEM from './dinner/zelenye-schi-so-schavelem.json'
import GRIBNOY_SUP_S_PERLOVKOY from './dinner/gribnoy-sup-s-perlovkoy.json'
import SUP_S_KLETSKAMI from './dinner/sup-s-kletskami.json'

import { withAssetPath } from '@/lib/withAssetPath'

const toRecipes = (raw: readonly Recipe[]): Recipe[] => raw.map(item => withAssetPath<Recipe>(item))

export const DINNER: Recipe[] = toRecipes([
  BORSHCH_S_PAMPUSHKAMI,
  OKROSHKA_NA_KVASE,
  OKROSHKA_NA_KEFIRE,
  CLASSIC_BORSCHT,
  PUMPKIN_CREAM_SOUP,
  PHO_BO,
  GAZPACHO,
  CREAM_MUSHROOM_SOUP,
  SCHI_IZ_SVEZHEY_KAPUSTY,
  UHA_PO_FINSKI,
  SUP_PYURE_IZ_TYKVY,
  KURINYY_BULON_S_LAPSHOY,
  SUP_HARCHO_S_GOVYADINOY,
  SOLYANKA_MYASNAYA_SBORNAYA,
  RASSOLNIK_S_PERLOVKOY,
  GOROHOVYY_SUP_S_KOPCHENYMI_REBRAMI,
  SUP_S_FRIKADELKAMI,
  SYRNYY_SUP_S_KURITSEY,
  MERDZHIMEK_TURETSKIY_CHECHEVICHNYY_SUP,
  MINESTRONE_S_FASOLYU,
  FRANTSUZSKIY_LUKOVYY_SUP,
  VISHISUAZ,
  TOM_YAM_S_KREVETKAMI,
  MISO_SUP_S_TOFU,
  LAGMAN_S_GOVYADINOY,
  SHURPA_S_BARANINOY,
  CHAUDER_S_KUKURUZOY_I_BEKONOM,
  KREM_SUP_IZ_BROKKOLI,
  SVEKOLNIK_HOLODNYY,
  ZELENYE_SCHI_SO_SCHAVELEM,
  GRIBNOY_SUP_S_PERLOVKOY,
  SUP_S_KLETSKAMI,
])
