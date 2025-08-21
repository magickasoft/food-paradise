import { defineRouting } from 'next-intl/routing'
import { locales, defaultLocale } from './constants'

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/en': '/en',
    '/privacy-policy': {
      en: '/privacy-policy',
    },
    '/categories': {
      en: '/categories',
    },
    '/categories/[name]': {
      en: '/categories/[name]',
    },
    '/recipe/[name]': {
      en: '/recipe/[name]',
    },
    '/recipe/shashlyk-iz-svininy-na-kefire': {
      en: '/recipe/shashlyk-iz-svininy-na-kefire',
    },
    '/recipe/shashlyk-iz-kurinogo-bedra': {
      en: '/recipe/shashlyk-iz-kurinogo-bedra',
    },
    'recipe/shashlyk-iz-kurinyh-grudok': {
      en: '/recipe/shashlyk-iz-kurinyh-grudok',
    },
    'recipe/shashlyk-iz-kuritsy-v-kefirnom-marinade': {
      en: '/recipe/shashlyk-iz-kuritsy-v-kefirnom-marinade',
    },
    'recipe/shashlyk-iz-kuritsy-v-soevom-marinade': {
      en: '/recipe/shashlyk-iz-kuritsy-v-soevom-marinade',
    },
    'recipe/shashlyk-iz-svininy-v-granatovom-souse': {
      en: '/recipe/shashlyk-iz-svininy-v-granatovom-souse',
    },
    'recipe/shashlyk-iz-baraniny-s-rozmarinom': {
      en: '/recipe/shashlyk-iz-baraniny-s-rozmarinom',
    },
    'recipe/shashlyk-iz-indeyki-v-yogurtovom-marinade': {
      en: '/recipe/shashlyk-iz-indeyki-v-yogurtovom-marinade',
    },
    'recipe/ovoschi-gril-s-balzamisceskoy-glazuryu': {
      en: '/recipe/ovoschi-gril-s-balzamisceskoy-glazuryu',
    },
    'recipe/losos-na-kedrovoy-doske-s-medovo-gorchichnym-sousom': {
      en: '/recipe/losos-na-kedrovoy-doske-s-medovo-gorchichnym-sousom',
    },
    'recipe/krevetki-na-grile-s-chesnochnym-maslom': {
      en: '/recipe/krevetki-na-grile-s-chesnochnym-maslom',
    },
    'recipe/gril-sendvich-s-halloumi-i-ovoschami': {
      en: '/recipe/gril-sendvich-s-halloumi-i-ovoschami',
    },
    '/recipe/grecheskij-salat': {
      en: '/recipe/grecheskij-salat',
    },
    'recipe/salat-cezar-s-kuritsey': {
      en: '/recipe/salat-cezar-s-kuritsey',
    },
    'recipe/salat-s-avokado-i-krevetkami': {
      en: '/recipe/salat-s-avokado-i-krevetkami',
    },
    'recipe/salat-kapreze': {
      en: '/recipe/salat-kapreze',
    },
    'recipe/salat-s-tuntsom-i-yaitsom': {
      en: '/recipe/salat-s-tuntsom-i-yaitsom',
    },
    'recipe/teplyj-salat-s-govyadinoj': {
      en: '/recipe/teplyj-salat-s-govyadinoj',
    },
    'recipe/salat-nisuaz-s-tuntsom': {
      en: '/recipe/salat-nisuaz-s-tuntsom',
    },
    'recipe/salat-valdorf-s-kuritsey': {
      en: '/recipe/salat-valdorf-s-kuritsey',
    },
    'recipe/krabovyi-salat-s-kukuruzoi': {
      en: '/recipe/krabovyi-salat-s-kukuruzoi',
    },
    'recipe/salat-olivye-klassicheskii': {
      en: '/recipe/salat-olivye-klassicheskii',
    },
    'recipe/letnii-salat-s-klubnikoi': {
      en: '/recipe/letnii-salat-s-klubnikoi',
    },
    'recipe/gruzinskii-salat-lobio': {
      en: '/recipe/gruzinskii-salat-lobio',
    },
    'recipe/limonad-s-myatoj': {
      en: '/recipe/limonad-s-myatoj',
    },
    'recipe/ogurechnyj-detoks-napitok': {
      en: '/recipe/ogurechnyj-detoks-napitok',
    },
    'recipe/yagodnyj-mors': {
      en: '/recipe/yagodnyj-mors',
    },
    'recipe/arbuznyj-smuzi': {
      en: '/recipe/arbuznyj-smuzi',
    },
    'recipe/myatno-limonnij-detoks-napitok': {
      en: '/recipe/myatno-limonnij-detoks-napitok',
    },
    'recipe/imbirnyj-limonad-s-medom': {
      en: '/recipe/imbirnyj-limonad-s-medom',
    },
    'recipe/klubnichno-bazilikovyj-limonad': {
      en: '/recipe/klubnichno-bazilikovyj-limonad',
    },
    'recipe/tropicheskij-smuzi-s-mango': {
      en: '/recipe/tropicheskij-smuzi-s-mango',
    },
    'recipe/ogurechno-lajmovyj-spritser': {
      en: '/recipe/ogurechno-lajmovyj-spritser',
    },
    'recipe/malinovyj-chajnyj-fresh': {
      en: '/recipe/malinovyj-chajnyj-fresh',
    },
    'recipe/persikovyj-latte': {
      en: '/recipe/persikovyj-latte',
    },
    'recipe/inzhirnyj-koktejl': {
      en: '/recipe/inzhirnyj-koktejl',
    },
    '/recipe/scrambled-eggs': {
      en: '/recipe/scrambled-eggs',
    },
    '/recipe/scrambled-eggs-with-broccoli': {
      en: '/recipe/scrambled-eggs-with-broccoli',
    },
    '/recipe/ovsjanaja-kasha-s-jablokami-i-koricej': {
      en: '/recipe/ovsjanaja-kasha-s-jablokami-i-koricej',
    },
    'recipe/omlet-s-molokom': {
      en: '/recipe/omlet-s-molokom',
    },
    'recipe/bliny': {
      en: '/recipe/bliny',
    },
    'recipe/scrambled-eggs-with-sausages-and-beans': {
      en: '/recipe/scrambled-eggs-with-sausages-and-beans',
    },
    'recipe/scrambled-eggs-shakshuka': {
      en: '/recipe/scrambled-eggs-shakshuka',
    },
    'recipe/menemen': {
      en: '/recipe/menemen',
    },
    '/recipe/borshch-s-pampushkami': {
      en: '/recipe/borshch-s-pampushkami',
    },
    '/recipe/okroshka-na-kvase': {
      en: '/recipe/okroshka-na-kvase',
    },
    '/recipe/okroshka-na-kefire': {
      en: '/recipe/okroshka-na-kefire',
    },
    'recipe/classic-borscht': {
      en: '/recipe/classic-borscht',
    },
    'recipe/pumpkin-cream-soup': {
      en: '/recipe/pumpkin-cream-soup',
    },
    'recipe/pho-bo': {
      en: '/recipe/pho-bo',
    },
    'recipe/gazpacho': {
      en: '/recipe/gazpacho',
    },
    'recipe/cream-mushroom-soup': {
      en: '/recipe/cream-mushroom-soup',
    },
    'recipe/schi-iz-svezhey-kapusty': {
      en: '/recipe/schi-iz-svezhey-kapusty',
    },
    'recipe/uha-po-finski': {
      en: '/recipe/uha-po-finski',
    },
    'recipe/sup-pyure-iz-tykvy': {
      en: '/recipe/sup-pyure-iz-tykvy',
    },
    'recipe/kurinyy-bulon-s-lapshoy': {
      en: '/recipe/kurinyy-bulon-s-lapshoy',
    },
    '/recipe/rublenye-kotlety-iz-grudki-na-skovorode': {
      en: '/recipe/rublenye-kotlety-iz-grudki-na-skovorode',
    },
    '/recipe/stejk-ribaj-na-elektrogrile': {
      en: '/recipe/stejk-ribaj-na-elektrogrile',
    },
    '/recipe/mjaso-po-francuzski-s-pomidorami-i-syrom': {
      en: '/recipe/mjaso-po-francuzski-s-pomidorami-i-syrom',
    },
    '/recipe/uzbekskij-plov-s-govyadinoj': {
      en: '/recipe/uzbekskij-plov-s-govyadinoj',
    },
    'recipe/losos-v-medovo-gorchichnom-souse': {
      en: '/recipe/losos-v-medovo-gorchichnom-souse',
    },
    'recipe/kuritsa-gril-s-kinoa': {
      en: '/recipe/kuritsa-gril-s-kinoa',
    },
    'recipe/ratatui-s-baklazhanami': {
      en: '/recipe/ratatui-s-baklazhanami',
    },
    'recipe/lazanya-s-myasom-i-syrom': {
      en: '/recipe/lazanya-s-myasom-i-syrom',
    },
    'recipe/grechka-s-gribami-i-lukom': {
      en: '/recipe/grechka-s-gribami-i-lukom',
    },
    'recipe/kartofelnaya-zapekanka-s-farshem': {
      en: '/recipe/kartofelnaya-zapekanka-s-farshem',
    },
    'recipe/kurinye-grudki-v-slivocnom-souse': {
      en: '/recipe/kurinye-grudki-v-slivocnom-souse',
    },
    'recipe/losos-pod-syrnoy-korochkoy': {
      en: '/recipe/losos-pod-syrnoy-korochkoy',
    },
    'recipe/ratatuy-po-domashnemu': {
      en: '/recipe/ratatuy-po-domashnemu',
    },
    'recipe/govyadina-po-burgundski': {
      en: '/recipe/govyadina-po-burgundski',
    },
    'recipe/krevetki-v-chesnochnom-souse': {
      en: '/recipe/krevetki-v-chesnochnom-souse',
    },
    'recipe/kotlety-s-pyure': {
      en: '/recipe/kotlety-s-pyure',
    },
    'recipe/makarony-s-syrom': {
      en: '/recipe/makarony-s-syrom',
    },
    'recipe/rybnye-kotlety-s-pyure': {
      en: '/recipe/rybnye-kotlety-s-pyure',
    },
    'recipe/farshirovannye-pertsy': {
      en: '/recipe/farshirovannye-pertsy',
    },
    '/recipe/ragu-iz-kabachkov-v-smetane': {
      en: '/recipe/ragu-iz-kabachkov-v-smetane',
    },
    'recipe/ovsyanoblin': {
      en: '/recipe/ovsyanoblin',
    },
    'recipe/kinoa-boul-s-lososem': {
      en: '/recipe/kinoa-boul-s-lososem',
    },
    'recipe/tykvennyj-sup-s-imbirem': {
      en: '/recipe/tykvennyj-sup-s-imbirem',
    },
    'recipe/smuzi-boul-s-chia': {
      en: '/recipe/smuzi-boul-s-chia',
    },
    'recipe/farshirovannye-pertsy-s-kinoa': {
      en: '/recipe/farshirovannye-pertsy-s-kinoa',
    },
    '/recipe/chizkeik': {
      en: '/recipe/chizkeik',
    },
    'recipe/panna-cotta': {
      en: '/recipe/panna-cotta',
    },
    'recipe/chocolate-truffles': {
      en: '/recipe/chocolate-truffles',
    },
    'recipe/meringue-roll-s-lemon-curd': {
      en: '/recipe/meringue-roll-s-lemon-curd',
    },
    'recipe/klubnichnyy-pai-s-pesochnoy-kroschkoy': {
      en: '/recipe/klubnichnyy-pai-s-pesochnoy-kroschkoy',
    },
    'recipe/krem-bryule-s-vanilyu': {
      en: '/recipe/krem-bryule-s-vanilyu',
    },
    'recipe/morkovnyy-tort-s-gretskimi-orekhami': {
      en: '/recipe/morkovnyy-tort-s-gretskimi-orekhami',
    },
    'recipe/pirozhnoye-kartoshka': {
      en: '/recipe/pirozhnoye-kartoshka',
    },
    'recipe/tort-medovik': {
      en: '/recipe/tort-medovik',
    },
    'recipe/beze': {
      en: '/recipe/beze',
    },
    'recipe/lenivyy-napoleon': {
      en: '/recipe/lenivyy-napoleon',
    },
    'recipe/shu-s-kremom': {
      en: '/recipe/shu-s-kremom',
    },
    'recipe/apple-strudel': {
      en: '/recipe/apple-strudel',
    },
    'recipe/cherry-pie': {
      en: '/recipe/cherry-pie',
    },
    '/recipe/rulety-iz-vetchiny-s-syrnom-i-chesnokom': {
      en: '/recipe/rulety-iz-vetchiny-s-syrnom-i-chesnokom',
    },
    '/recipe/kartofelnye-chipsy-v-mikrovolnovke': {
      en: '/recipe/kartofelnye-chipsy-v-mikrovolnovke',
    },
    'recipe/sendvich-s-avokado-i-yaitsom-pashot': {
      en: '/recipe/sendvich-s-avokado-i-yaitsom-pashot',
    },
    'recipe/grecheskiy-sendvich-s-fetoy': {
      en: '/recipe/grecheskiy-sendvich-s-fetoy',
    },
    'recipe/sendvich-s-kuritsey-i-pesto': {
      en: '/recipe/sendvich-s-kuritsey-i-pesto',
    },
  } as const,
})
