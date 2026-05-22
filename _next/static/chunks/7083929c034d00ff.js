(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33525,(e,i,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"warnOnce",{enumerable:!0,get:function(){return o}});let o=e=>{}},91915,(e,i,a)=>{"use strict";function o(e,i={}){if(i.onlyHashChange)return void e();let a=document.documentElement;if("smooth"!==a.dataset.scrollBehavior)return void e();let t=a.style.scrollBehavior;a.style.scrollBehavior="auto",i.dontForceLayout||a.getClientRects(),e(),a.style.scrollBehavior=t}Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"disableSmoothScrollDuringRouteTransition",{enumerable:!0,get:function(){return o}}),e.r(33525)},98879,(e,i,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"default",{enumerable:!0,get:function(){return s}});let o=e.r(71645),t="u"<typeof window,r=t?()=>{}:o.useLayoutEffect,n=t?()=>{}:o.useEffect;function s(e){let{headManager:i,reduceComponentsToState:a}=e;function s(){if(i&&i.mountedInstances){let e=o.Children.toArray(Array.from(i.mountedInstances).filter(Boolean));i.updateHead(a(e))}}return t&&(i?.mountedInstances?.add(e.children),s()),r(()=>(i?.mountedInstances?.add(e.children),()=>{i?.mountedInstances?.delete(e.children)})),r(()=>(i&&(i._pendingUpdate=s),()=>{i&&(i._pendingUpdate=s)})),n(()=>(i&&i._pendingUpdate&&(i._pendingUpdate(),i._pendingUpdate=null),()=>{i&&i._pendingUpdate&&(i._pendingUpdate(),i._pendingUpdate=null)})),null}},25633,(e,i,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o={default:function(){return h},defaultHead:function(){return d}};for(var t in o)Object.defineProperty(a,t,{enumerable:!0,get:o[t]});let r=e.r(55682),n=e.r(90809),s=e.r(43476),l=n._(e.r(71645)),c=r._(e.r(98879)),p=e.r(42732);function d(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function u(e,i){return"string"==typeof i||"number"==typeof i?e:i.type===l.default.Fragment?e.concat(l.default.Children.toArray(i.props.children).reduce((e,i)=>"string"==typeof i||"number"==typeof i?e:e.concat(i),[])):e.concat(i)}e.r(33525);let f=["name","httpEquiv","charSet","itemProp"];function m(e){let i,a,o,t;return e.reduce(u,[]).reverse().concat(d().reverse()).filter((i=new Set,a=new Set,o=new Set,t={},e=>{let r=!0,n=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){n=!0;let a=e.key.slice(e.key.indexOf("$")+1);i.has(a)?r=!1:i.add(a)}switch(e.type){case"title":case"base":a.has(e.type)?r=!1:a.add(e.type);break;case"meta":for(let i=0,a=f.length;i<a;i++){let a=f[i];if(e.props.hasOwnProperty(a))if("charSet"===a)o.has(a)?r=!1:o.add(a);else{let i=e.props[a],o=t[a]||new Set;("name"!==a||!n)&&o.has(i)?r=!1:(o.add(i),t[a]=o)}}}return r})).reverse().map((e,i)=>{let a=e.key||i;return l.default.cloneElement(e,{key:a})})}let h=function({children:e}){let i=(0,l.useContext)(p.HeadManagerContext);return(0,s.jsx)(c.default,{reduceComponentsToState:m,headManager:i,children:e})};("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),i.exports=a.default)},88674,e=>{"use strict";e.s(["defaultLocale",0,"ru","locales",0,["ru","en"]])},4529,e=>{"use strict";let i="2560px",a=e=>({mobileS:`(${e}: 320px)`,mobileM:`(${e}: 375px)`,mobileL:`(${e}: 425px)`,tablet:`(${e}: 768px)`,laptop:`(${e}: 1024px)`,laptopL:`(${e}: 1440px)`,desktop:`(${e}: ${i})`,desktopL:`(${e}: ${i})`}),o=a("min-width"),t=a("max-width");e.s(["maxDevice",0,t,"minDevice",0,o])},20133,e=>{"use strict";var i=e.i(18566),a=e.i(71645),o=e.i(61745),t=a["use".trim()],r=e.i(49092),n=e.i(77105),s=e.i(89790),l=e.i(43476),c=e.i(33165),p=e.i(88674);let d=e=>Object.fromEntries(p.locales.map(i=>[i,e])),u={"/":d("/"),"/categories":d("/categories")},f={"/categories/[name]":d("/categories/[name]"),"/recipe/[name]":d("/recipe/[name]")},m={"/recipe/shashlyk-iz-svininy-na-kefire":d("/recipe/shashlyk-iz-svininy-na-kefire"),"/recipe/shashlyk-iz-kurinogo-bedra":d("/recipe/shashlyk-iz-kurinogo-bedra"),"/recipe/shashlyk-iz-kurinyh-grudok":d("/recipe/shashlyk-iz-kurinyh-grudok"),"/recipe/shashlyk-iz-kuritsy-v-kefirnom-marinade":d("/recipe/shashlyk-iz-kuritsy-v-kefirnom-marinade"),"/recipe/shashlyk-iz-kuritsy-v-soevom-marinade":d("/recipe/shashlyk-iz-kuritsy-v-soevom-marinade"),"/recipe/shashlyk-iz-svininy-v-granatovom-souse":d("/recipe/shashlyk-iz-svininy-v-granatovom-souse"),"/recipe/shashlyk-iz-baraniny-s-rozmarinom":d("/recipe/shashlyk-iz-baraniny-s-rozmarinom"),"/recipe/shashlyk-iz-indeyki-v-yogurtovom-marinade":d("/recipe/shashlyk-iz-indeyki-v-yogurtovom-marinade"),"/recipe/ovoschi-gril-s-balzamisceskoy-glazuryu":d("/recipe/ovoschi-gril-s-balzamisceskoy-glazuryu"),"/recipe/losos-na-kedrovoy-doske-s-medovo-gorchichnym-sousom":d("/recipe/losos-na-kedrovoy-doske-s-medovo-gorchichnym-sousom"),"/recipe/krevetki-na-grile-s-chesnochnym-maslom":d("/recipe/krevetki-na-grile-s-chesnochnym-maslom"),"/recipe/gril-sendvich-s-halloumi-i-ovoschami":d("/recipe/gril-sendvich-s-halloumi-i-ovoschami"),"/recipe/svinye-rebryshki-v-medovo-gorchichnom-marinade":d("/recipe/svinye-rebryshki-v-medovo-gorchichnom-marinade"),"/recipe/svinaya-sheya-s-lukom-i-ziroy":d("/recipe/svinaya-sheya-s-lukom-i-ziroy"),"/recipe/govyazhiy-steyk-s-rozmarinom-na-mangale":d("/recipe/govyazhiy-steyk-s-rozmarinom-na-mangale"),"/recipe/govyazhi-otbivnye-v-vinnom-marinade":d("/recipe/govyazhi-otbivnye-v-vinnom-marinade"),"/recipe/kurinye-bedra-s-paprikoy-na-mangale":d("/recipe/kurinye-bedra-s-paprikoy-na-mangale"),"/recipe/kurinoe-file-s-limonom-i-chesnokom":d("/recipe/kurinoe-file-s-limonom-i-chesnokom"),"/recipe/file-indeyki-v-yogurtovom-marinade":d("/recipe/file-indeyki-v-yogurtovom-marinade"),"/recipe/baranina-s-ziroy-i-koriandrom":d("/recipe/baranina-s-ziroy-i-koriandrom"),"/recipe/lyulya-kebab-iz-govyazhiego-farsha":d("/recipe/lyulya-kebab-iz-govyazhiego-farsha"),"/recipe/shashlyk-iz-svininy-s-vinnym-uksusom":d("/recipe/shashlyk-iz-svininy-s-vinnym-uksusom"),"/recipe/losos-s-limonom-i-ukropom-na-reshetke":d("/recipe/losos-s-limonom-i-ukropom-na-reshetke"),"/recipe/steyk-tuntsa-s-kunzhutom":d("/recipe/steyk-tuntsa-s-kunzhutom"),"/recipe/treska-v-folge-s-ovoshchami":d("/recipe/treska-v-folge-s-ovoshchami"),"/recipe/krevetki-v-soevom-marinade-na-mangale":d("/recipe/krevetki-v-soevom-marinade-na-mangale"),"/recipe/steyki-lososya-s-rozmarinom":d("/recipe/steyki-lososya-s-rozmarinom"),"/recipe/tofu-gril-s-kunzhutnym-marinadom":d("/recipe/tofu-gril-s-kunzhutnym-marinadom"),"/recipe/halumi-s-tomatami-cherri-na-grile":d("/recipe/halumi-s-tomatami-cherri-na-grile"),"/recipe/shampinony-v-smetannom-marinade":d("/recipe/shampinony-v-smetannom-marinade"),"/recipe/kabachki-s-chesnokom-na-mangale":d("/recipe/kabachki-s-chesnokom-na-mangale"),"/recipe/baklazhany-s-pesto-na-grile":d("/recipe/baklazhany-s-pesto-na-grile"),"/recipe/kukuruza-v-pochatkah-s-maslom-na-mangale":d("/recipe/kukuruza-v-pochatkah-s-maslom-na-mangale"),"/recipe/kartofel-v-folge-s-ukropom":d("/recipe/kartofel-v-folge-s-ukropom"),"/recipe/pertsy-gril-s-bazilikom":d("/recipe/pertsy-gril-s-bazilikom"),"/recipe/ovoshchnye-shashlychki-s-halumi":d("/recipe/ovoshchnye-shashlychki-s-halumi"),"/recipe/chiabatta-na-grile-s-chesnokom":d("/recipe/chiabatta-na-grile-s-chesnokom"),"/recipe/lavash-s-syrom-na-reshetke":d("/recipe/lavash-s-syrom-na-reshetke"),"/recipe/tomaty-cherri-na-shpazhkah":d("/recipe/tomaty-cherri-na-shpazhkah"),"/recipe/kurinye-bedryshki-v-kefire-na-mangale":d("/recipe/kurinye-bedryshki-v-kefire-na-mangale"),"/recipe/burger-kotlety-na-mangale":d("/recipe/burger-kotlety-na-mangale"),"/recipe/banany-na-grile-s-medom-i-koritsej":d("/recipe/banany-na-grile-s-medom-i-koritsej"),"/recipe/grecheskij-salat":d("/recipe/grecheskij-salat"),"/recipe/salat-cezar-s-kuritsey":d("/recipe/salat-cezar-s-kuritsey"),"/recipe/salat-s-avokado-i-krevetkami":d("/recipe/salat-s-avokado-i-krevetkami"),"/recipe/salat-kapreze":d("/recipe/salat-kapreze"),"/recipe/salat-s-tuntsom-i-yaitsom":d("/recipe/salat-s-tuntsom-i-yaitsom"),"/recipe/teplyj-salat-s-govyadinoj":d("/recipe/teplyj-salat-s-govyadinoj"),"/recipe/salat-nisuaz-s-tuntsom":d("/recipe/salat-nisuaz-s-tuntsom"),"/recipe/salat-valdorf-s-kuritsey":d("/recipe/salat-valdorf-s-kuritsey"),"/recipe/krabovyi-salat-s-kukuruzoi":d("/recipe/krabovyi-salat-s-kukuruzoi"),"/recipe/salat-olivye-klassicheskii":d("/recipe/salat-olivye-klassicheskii"),"/recipe/letnii-salat-s-klubnikoi":d("/recipe/letnii-salat-s-klubnikoi"),"/recipe/gruzinskii-salat-lobio":d("/recipe/gruzinskii-salat-lobio"),"/recipe/limonad-s-myatoj":d("/recipe/limonad-s-myatoj"),"/recipe/ogurechnyj-detoks-napitok":d("/recipe/ogurechnyj-detoks-napitok"),"/recipe/yagodnyj-mors":d("/recipe/yagodnyj-mors"),"/recipe/arbuznyj-smuzi":d("/recipe/arbuznyj-smuzi"),"/recipe/myatno-limonnij-detoks-napitok":d("/recipe/myatno-limonnij-detoks-napitok"),"/recipe/imbirnyj-limonad-s-medom":d("/recipe/imbirnyj-limonad-s-medom"),"/recipe/klubnichno-bazilikovyj-limonad":d("/recipe/klubnichno-bazilikovyj-limonad"),"/recipe/tropicheskij-smuzi-s-mango":d("/recipe/tropicheskij-smuzi-s-mango"),"/recipe/ogurechno-lajmovyj-spritser":d("/recipe/ogurechno-lajmovyj-spritser"),"/recipe/malinovyj-chajnyj-fresh":d("/recipe/malinovyj-chajnyj-fresh"),"/recipe/persikovyj-latte":d("/recipe/persikovyj-latte"),"/recipe/inzhirnyj-koktejl":d("/recipe/inzhirnyj-koktejl"),"/recipe/scrambled-eggs":d("/recipe/scrambled-eggs"),"/recipe/scrambled-eggs-with-broccoli":d("/recipe/scrambled-eggs-with-broccoli"),"/recipe/ovsjanaja-kasha-s-jablokami-i-koricej":d("/recipe/ovsjanaja-kasha-s-jablokami-i-koricej"),"/recipe/omlet-s-molokom":d("/recipe/omlet-s-molokom"),"/recipe/bliny":d("/recipe/bliny"),"/recipe/scrambled-eggs-with-sausages-and-beans":d("/recipe/scrambled-eggs-with-sausages-and-beans"),"/recipe/scrambled-eggs-shakshuka":d("/recipe/scrambled-eggs-shakshuka"),"/recipe/menemen":d("/recipe/menemen"),"/recipe/ovsyanka-s-bananom-i-chia":d("/recipe/ovsyanka-s-bananom-i-chia"),"/recipe/chia-puding-s-chernikoy":d("/recipe/chia-puding-s-chernikoy"),"/recipe/yaichnye-maffiny-s-brokkoli":d("/recipe/yaichnye-maffiny-s-brokkoli"),"/recipe/tost-s-avokado-i-lososem":d("/recipe/tost-s-avokado-i-lososem"),"/recipe/grechnevaya-kasha-s-gribami-i-yaytsom":d("/recipe/grechnevaya-kasha-s-gribami-i-yaytsom"),"/recipe/risovaya-kasha-s-yablokom-i-koritsey":d("/recipe/risovaya-kasha-s-yablokom-i-koritsey"),"/recipe/omlet-s-tuntsom-i-zelenym-lukom":d("/recipe/omlet-s-tuntsom-i-zelenym-lukom"),"/recipe/ovsyanye-bliny-s-yagodami":d("/recipe/ovsyanye-bliny-s-yagodami"),"/recipe/smuzi-boul-s-mango-i-chia":d("/recipe/smuzi-boul-s-mango-i-chia"),"/recipe/pita-s-yaytsom-i-shpinatom":d("/recipe/pita-s-yaytsom-i-shpinatom"),"/recipe/kartofelnaya-tortilya-s-zelenyu":d("/recipe/kartofelnaya-tortilya-s-zelenyu"),"/recipe/tofu-skrambl-s-ovoshchami":d("/recipe/tofu-skrambl-s-ovoshchami"),"/recipe/zapekanka-iz-ovsyanki-s-yablokami":d("/recipe/zapekanka-iz-ovsyanki-s-yablokami"),"/recipe/yaichnica-s-fasolyu-i-tomatami":d("/recipe/yaichnica-s-fasolyu-i-tomatami"),"/recipe/omlet-s-kukuruzoy-i-zelenyu":d("/recipe/omlet-s-kukuruzoy-i-zelenyu"),"/recipe/yogurt-s-granola-i-yagodami":d("/recipe/yogurt-s-granola-i-yagodami"),"/recipe/kinoa-kasha-s-yagodami":d("/recipe/kinoa-kasha-s-yagodami"),"/recipe/sendvich-s-avokado-i-yaytsom":d("/recipe/sendvich-s-avokado-i-yaytsom"),"/recipe/zelenyj-omlet-so-shpinatom":d("/recipe/zelenyj-omlet-so-shpinatom"),"/recipe/yablochnye-oladi-iz-ovsyanoy-muki":d("/recipe/yablochnye-oladi-iz-ovsyanoy-muki"),"/recipe/borshch-s-pampushkami":d("/recipe/borshch-s-pampushkami"),"/recipe/okroshka-na-kvase":d("/recipe/okroshka-na-kvase"),"/recipe/okroshka-na-kefire":d("/recipe/okroshka-na-kefire"),"/recipe/classic-borscht":d("/recipe/classic-borscht"),"/recipe/pumpkin-cream-soup":d("/recipe/pumpkin-cream-soup"),"/recipe/pho-bo":d("/recipe/pho-bo"),"/recipe/gazpacho":d("/recipe/gazpacho"),"/recipe/cream-mushroom-soup":d("/recipe/cream-mushroom-soup"),"/recipe/schi-iz-svezhey-kapusty":d("/recipe/schi-iz-svezhey-kapusty"),"/recipe/uha-po-finski":d("/recipe/uha-po-finski"),"/recipe/sup-pyure-iz-tykvy":d("/recipe/sup-pyure-iz-tykvy"),"/recipe/kurinyy-bulon-s-lapshoy":d("/recipe/kurinyy-bulon-s-lapshoy"),"/recipe/rublenye-kotlety-iz-grudki-na-skovorode":d("/recipe/rublenye-kotlety-iz-grudki-na-skovorode"),"/recipe/stejk-ribaj-na-elektrogrile":d("/recipe/stejk-ribaj-na-elektrogrile"),"/recipe/mjaso-po-francuzski-s-pomidorami-i-syrom":d("/recipe/mjaso-po-francuzski-s-pomidorami-i-syrom"),"/recipe/uzbekskij-plov-s-govyadinoj":d("/recipe/uzbekskij-plov-s-govyadinoj"),"/recipe/losos-v-medovo-gorchichnom-souse":d("/recipe/losos-v-medovo-gorchichnom-souse"),"/recipe/kuritsa-gril-s-kinoa":d("/recipe/kuritsa-gril-s-kinoa"),"/recipe/ratatui-s-baklazhanami":d("/recipe/ratatui-s-baklazhanami"),"/recipe/lazanya-s-myasom-i-syrom":d("/recipe/lazanya-s-myasom-i-syrom"),"/recipe/grechka-s-gribami-i-lukom":d("/recipe/grechka-s-gribami-i-lukom"),"/recipe/kartofelnaya-zapekanka-s-farshem":d("/recipe/kartofelnaya-zapekanka-s-farshem"),"/recipe/kurinye-grudki-v-slivocnom-souse":d("/recipe/kurinye-grudki-v-slivocnom-souse"),"/recipe/losos-pod-syrnoy-korochkoy":d("/recipe/losos-pod-syrnoy-korochkoy"),"/recipe/ratatuy-po-domashnemu":d("/recipe/ratatuy-po-domashnemu"),"/recipe/govyadina-po-burgundski":d("/recipe/govyadina-po-burgundski"),"/recipe/krevetki-v-chesnochnom-souse":d("/recipe/krevetki-v-chesnochnom-souse"),"/recipe/kotlety-s-pyure":d("/recipe/kotlety-s-pyure"),"/recipe/makarony-s-syrom":d("/recipe/makarony-s-syrom"),"/recipe/rybnye-kotlety-s-pyure":d("/recipe/rybnye-kotlety-s-pyure"),"/recipe/farshirovannye-pertsy":d("/recipe/farshirovannye-pertsy"),"/recipe/ragu-iz-kabachkov-v-smetane":d("/recipe/ragu-iz-kabachkov-v-smetane"),"/recipe/ovsyanoblin":d("/recipe/ovsyanoblin"),"/recipe/kinoa-boul-s-lososem":d("/recipe/kinoa-boul-s-lososem"),"/recipe/tykvennyj-sup-s-imbirem":d("/recipe/tykvennyj-sup-s-imbirem"),"/recipe/smuzi-boul-s-chia":d("/recipe/smuzi-boul-s-chia"),"/recipe/farshirovannye-pertsy-s-kinoa":d("/recipe/farshirovannye-pertsy-s-kinoa"),"/recipe/batat-s-krasnoy-fasolyu-i-avokado":d("/recipe/batat-s-krasnoy-fasolyu-i-avokado"),"/recipe/treska-s-brokkoli-i-limonom":d("/recipe/treska-s-brokkoli-i-limonom"),"/recipe/teplyj-salat-s-kinoa-tykvoy-i-rukkoloy":d("/recipe/teplyj-salat-s-kinoa-tykvoy-i-rukkoloy"),"/recipe/tofu-s-ovoshchami-v-kunzhutnom-souse":d("/recipe/tofu-s-ovoshchami-v-kunzhutnom-souse"),"/recipe/ovoshchnoy-sup-s-fasolyu-i-shpinatom":d("/recipe/ovoshchnoy-sup-s-fasolyu-i-shpinatom"),"/recipe/indeyka-s-kabachkom-i-zelenyu":d("/recipe/indeyka-s-kabachkom-i-zelenyu"),"/recipe/salat-s-tuntsom-yaytsom-i-avokado":d("/recipe/salat-s-tuntsom-yaytsom-i-avokado"),"/recipe/ris-s-ovoshchami-i-krevetkami":d("/recipe/ris-s-ovoshchami-i-krevetkami"),"/recipe/zapekanka-iz-brokkoli-s-yaytsom":d("/recipe/zapekanka-iz-brokkoli-s-yaytsom"),"/recipe/smuzi-s-chernikoy-i-ovsyankoy":d("/recipe/smuzi-s-chernikoy-i-ovsyankoy"),"/recipe/chizkeik":d("/recipe/chizkeik"),"/recipe/panna-cotta":d("/recipe/panna-cotta"),"/recipe/chocolate-truffles":d("/recipe/chocolate-truffles"),"/recipe/meringue-roll-s-lemon-curd":d("/recipe/meringue-roll-s-lemon-curd"),"/recipe/klubnichnyy-pai-s-pesochnoy-kroschkoy":d("/recipe/klubnichnyy-pai-s-pesochnoy-kroschkoy"),"/recipe/krem-bryule-s-vanilyu":d("/recipe/krem-bryule-s-vanilyu"),"/recipe/morkovnyy-tort-s-gretskimi-orekhami":d("/recipe/morkovnyy-tort-s-gretskimi-orekhami"),"/recipe/pirozhnoye-kartoshka":d("/recipe/pirozhnoye-kartoshka"),"/recipe/tort-medovik":d("/recipe/tort-medovik"),"/recipe/beze":d("/recipe/beze"),"/recipe/lenivyy-napoleon":d("/recipe/lenivyy-napoleon"),"/recipe/shu-s-kremom":d("/recipe/shu-s-kremom"),"/recipe/apple-strudel":d("/recipe/apple-strudel"),"/recipe/cherry-pie":d("/recipe/cherry-pie"),"/recipe/rulety-iz-vetchiny-s-syrnom-i-chesnokom":d("/recipe/rulety-iz-vetchiny-s-syrnom-i-chesnokom"),"/recipe/kartofelnye-chipsy-v-mikrovolnovke":d("/recipe/kartofelnye-chipsy-v-mikrovolnovke"),"/recipe/sendvich-s-avokado-i-yaitsom-pashot":d("/recipe/sendvich-s-avokado-i-yaitsom-pashot"),"/recipe/grecheskiy-sendvich-s-fetoy":d("/recipe/grecheskiy-sendvich-s-fetoy"),"/recipe/sendvich-s-kuritsey-i-pesto":d("/recipe/sendvich-s-kuritsey-i-pesto"),"/recipe/brusketta-s-tomatami-i-bazilikom":d("/recipe/brusketta-s-tomatami-i-bazilikom"),"/recipe/ruletiki-iz-lavasha-s-lososem":d("/recipe/ruletiki-iz-lavasha-s-lososem"),"/recipe/farshirovannye-yajtsa-s-gorchicej":d("/recipe/farshirovannye-yajtsa-s-gorchicej"),"/recipe/kanape-iz-ogurtsa-s-lososem":d("/recipe/kanape-iz-ogurtsa-s-lososem"),"/recipe/tartaletki-s-krabovymi-palochkami":d("/recipe/tartaletki-s-krabovymi-palochkami"),"/recipe/shampinony-s-syrom-v-duhovke":d("/recipe/shampinony-s-syrom-v-duhovke"),"/recipe/ruletiki-iz-baklazhanov-s-fetoy":d("/recipe/ruletiki-iz-baklazhanov-s-fetoy"),"/recipe/syrnye-shariki-s-kunzhutom":d("/recipe/syrnye-shariki-s-kunzhutom"),"/recipe/kanape-s-seldyu-i-svekloy":d("/recipe/kanape-s-seldyu-i-svekloy"),"/recipe/kabachkovye-oladi-s-syrom":d("/recipe/kabachkovye-oladi-s-syrom"),"/recipe/lemoncello-vodka":d("/recipe/lemoncello-vodka"),"/recipe/cranberry-vodka":d("/recipe/cranberry-vodka"),"/recipe/cherry-vodka":d("/recipe/cherry-vodka"),"/recipe/hrenovukha":d("/recipe/hrenovukha"),"/recipe/salat-olivye":d("/recipe/salat-olivye"),"/recipe/krabovyy-salat":d("/recipe/krabovyy-salat"),"/recipe/selodka-pod-shuboy":d("/recipe/selodka-pod-shuboy"),"/recipe/salat-mimosa":d("/recipe/salat-mimosa"),"/recipe/salat-s-kuritsey-i-ananasami":d("/recipe/salat-s-kuritsey-i-ananasami"),"/recipe/salat-obzhorka":d("/recipe/salat-obzhorka"),"/recipe/salat-s-yazykom-i-gribami":d("/recipe/salat-s-yazykom-i-gribami"),"/recipe/salat-s-krasnoy-ryboy-i-avokado":d("/recipe/salat-s-krasnoy-ryboy-i-avokado"),"/recipe/zapechonnaya-kuritsa-tselikom":d("/recipe/zapechonnaya-kuritsa-tselikom"),"/recipe/tartaletki-s-ikroy":d("/recipe/tartaletki-s-ikroy"),"/recipe/tartaletki-s-kuritsey-i-gribami":d("/recipe/tartaletki-s-kuritsey-i-gribami"),"/recipe/novogodneye-pechenye-s-glazuryu":d("/recipe/novogodneye-pechenye-s-glazuryu")};({...u,...m});let h={...u,...f},{Link:y,getPathname:k,redirect:g,usePathname:x,useRouter:b}=function(e){let{Link:p,config:d,getPathname:u,...f}=function(e,o){var c,p,d;let u={...c=o||{},localePrefix:"object"==typeof(d=c.localePrefix)?d:{mode:d||"always"},localeCookie:!!((p=c.localeCookie)??1)&&{name:"NEXT_LOCALE",sameSite:"lax",..."object"==typeof p&&p},localeDetection:c.localeDetection??!0,alternateLinks:c.alternateLinks??!0},f=u.pathnames,m=(0,a.forwardRef)(function({href:i,locale:a,...o},s){let c,p;"object"==typeof i?(c=i.pathname,p=i.params):c=i;let d=(0,r.isLocalizableHref)(i),m=e(),y=(0,r.isPromise)(m)?t(m):m,k=d?h({locale:a||y,href:null==f?c:{pathname:c,params:p},forcePrefix:null!=a||void 0}):c;return(0,l.jsx)(n.default,{ref:s,href:"object"==typeof i?{...i,pathname:k}:k,locale:a,localeCookie:u.localeCookie,...o})});function h(e){let i,{forcePrefix:a,href:o,locale:t}=e;return null==f?"object"==typeof o?(i=o.pathname,o.query&&(i+=(0,s.serializeSearchParams)(o.query))):i=o:i=(0,s.compileLocalizedPathname)({locale:t,...(0,s.normalizeNameOrNameWithParams)(o),pathnames:u.pathnames}),(0,s.applyPathnamePrefix)(i,t,u,a)}function y(e){return function(i,...a){return e(h(i),...a)}}return{config:u,Link:m,redirect:y(i.redirect),permanentRedirect:y(i.permanentRedirect),getPathname:h}}(o.useLocale,e);return{...f,Link:p,usePathname:function(){let e,t,n=(e=(0,i.usePathname)(),t=(0,o.useLocale)(),(0,a.useMemo)(()=>{if(!e)return e;let i=e,a=(0,r.getLocalePrefix)(t,d.localePrefix);if((0,r.hasPathnamePrefixed)(a,e))i=(0,r.unprefixPathname)(e,a);else if("never"!==d.localePrefix.mode&&d.localePrefix.prefixes){let a=(0,r.getLocaleAsPrefix)(t);(0,r.hasPathnamePrefixed)(a,e)&&(i=(0,r.unprefixPathname)(e,a))}return i},[d.localePrefix,t,e])),l=(0,o.useLocale)();return(0,a.useMemo)(()=>n&&d.pathnames?(0,s.getRoute)(l,n,d.pathnames):n,[l,n])},useRouter:function(){let e=(0,i.useRouter)(),t=(0,o.useLocale)(),r=(0,i.usePathname)();return(0,a.useMemo)(()=>{function i(e){return function(i,a){let{locale:o,...n}=a||{},s=[u({href:i,locale:o||t,forcePrefix:null!=o||void 0})];Object.keys(n).length>0&&s.push(n),(0,c.default)(d.localeCookie,r,t,o),e(...s)}}return{...e,push:i(e.push),replace:i(e.replace),prefetch:i(e.prefetch)}},[t,r,e])},getPathname:u}}({localePrefix:"always",locales:p.locales,defaultLocale:p.defaultLocale,pathnames:h});e.s(["Link",0,y,"usePathname",0,x,"useRouter",0,b],20133)},95631,e=>{"use strict";var i,a=e.i(34602),o=e.i(44199),t=e.i(59209),r=e.i(69838),n=e.i(16686),s=e.i(5578),l=e.i(71553),c=e.i(18370),p=e.i(6664),d=e.i(21534),u=e.i(40290),f=e.i(24067),m=e.i(42569),h=e.i(10333),y=e.i(2388),k=e.i(33149),g=e.i(41470),x=e.i(76090),b=e.i(90969),v=e.i(32507),j=e.i(65123),z=e.i(56863),w=e.i(53720),C=e.i(73751),L=e.i(5231),I=e.i(41514),P=e.i(74799),$=e.i(47142);let S=[a.default,o.default,t.default,r.default,n.default,s.default,l.default,c.default,p.default,d.default,u.default,f.default,m.default,h.default,y.default,k.default,g.default,x.default,b.default,v.default,j.default,z.default,w.default,C.default,L.default,I.default,P.default,$.default];var E=e.i(33362),D=e.i(7426),R=e.i(29427),_=e.i(99830),O=e.i(77675),A=e.i(28174),M=e.i(85995),T=e.i(8900),Y=e.i(99866),N=e.i(59419),F=e.i(94334),U=e.i(60556),H=e.i(68189),B=e.i(62704);let K=[E.default,D.default,R.default,_.default,O.default,A.default,M.default,T.default,Y.default,N.default,F.default,U.default,H.default,B.default];var q=e.i(25547),W=e.i(38451),G=e.i(67758),X=e.i(14253),Q=e.i(14735),V=e.i(83575),J=e.i(66605),Z=e.i(59907),ee=e.i(69138),ei=e.i(75063),ea=e.i(19369),eo=e.i(10823);let et=[q.default,W.default,G.default,X.default,Q.default,V.default,J.default,Z.default,ee.default,ei.default,ea.default,eo.default];var er=e.i(81243),en=e.i(20257),es=e.i(20838),el=e.i(89006),ec=e.i(44853),ep=e.i(70525),ed=e.i(74790),eu=e.i(44333),ef=e.i(79478),em=e.i(98427),eh=e.i(38070),ey=e.i(61112),ek=e.i(82291),eg=e.i(50682),ex=e.i(78580),eb=e.i(59898),ev=e.i(99549),ej=e.i(70777),ez=e.i(15430),ew=e.i(7033),eC=e.i(69858),eL=e.i(83266),eI=e.i(96466),eP=e.i(92759),e$=e.i(40014),eS=e.i(28062),eE=e.i(20406),eD=e.i(3409),eR=e.i(36948),e_=e.i(38154),eO=e.i(36889),eA=e.i(24698);let eM=[er.default,en.default,es.default,el.default,ec.default,ep.default,ed.default,eu.default,ef.default,em.default,eh.default,ey.default,ek.default,eg.default,ex.default,eb.default,ev.default,ej.default,ez.default,ew.default,eC.default,eL.default,eI.default,eP.default,e$.default,eS.default,eE.default,eD.default,eR.default,e_.default,eO.default,eA.default];var eT=e.i(18064),eY=e.i(64902),eN=e.i(40340),eF=e.i(84033),eU=e.i(56849),eH=e.i(82559),eB=e.i(6416),eK=e.i(52635),eq=e.i(45307),eW=e.i(659),eG=e.i(8318),eX=e.i(47802),eQ=e.i(34384),eV=e.i(34763),eJ=e.i(1564),eZ=e.i(56228),e0=e.i(21285),e1=e.i(14988),e2=e.i(27467),e3=e.i(82832),e4=e.i(33612),e5=e.i(85093),e8=e.i(78164),e9=e.i(531),e6=e.i(26721),e7=e.i(13717),ie=e.i(52381),ii=e.i(27649),ia=e.i(12397),io=e.i(20959),it=e.i(47446),ir=e.i(94501),is=e.i(71610),il=e.i(71895),ic=e.i(65860),ip=e.i(81802),id=e.i(99920),iu=e.i(16653),im=e.i(8222),ih=e.i(31578),iy=e.i(73781),ik=e.i(46449);let ig=[eT.default,eY.default,eN.default,eF.default,eU.default,eH.default,eB.default,eK.default,eq.default,eW.default,eG.default,eX.default,eQ.default,eV.default,eJ.default,eZ.default,e0.default,e1.default,e2.default,e3.default,e4.default,e5.default,e8.default,e9.default,e6.default,e7.default,ie.default,ii.default,ia.default,io.default,it.default,ir.default,is.default,il.default,ic.default,ip.default,id.default,iu.default,im.default,ih.default,iy.default,ik.default];var ix=e.i(69509),ib=e.i(46913),iv=e.i(75646),ij=e.i(88616),iz=e.i(49030),iw=e.i(6793),iC=e.i(28137),iL=e.i(43435),iI=e.i(67960),iP=e.i(7724),i$=e.i(64542),iS=e.i(2846),iE=e.i(23944),iD=e.i(14625),iR=e.i(25587),i_=e.i(3408);let iO=[ix.default,ib.default,iv.default,ij.default,iz.default,iw.default,iC.default,iL.default,iI.default,iP.default,i$.default,iS.default,iE.default,iD.default,iR.default,i_.default];var iA=e.i(60820),iM=e.i(91188),iT=e.i(11337),iY=e.i(11646),iN=e.i(40504),iF=e.i(24369),iU=e.i(13741),iH=e.i(37181),iB=e.i(11308),iK=e.i(48809),iq=e.i(13385),iW=e.i(96633),iG=e.i(54877),iX=e.i(79952);let iQ=[iA.default,iM.default,iT.default,iY.default,iN.default,iF.default,iU.default,iH.default,iB.default,iK.default,iq.default,iW.default,iG.default,iX.default];var iV=e.i(44580),iJ=e.i(80595),iZ=e.i(20313),i0=e.i(90925),i1=e.i(95497),i2=e.i(64613),i3=e.i(16019),i4=e.i(31812),i5=e.i(94429),i8=e.i(11307),i9=e.i(25273),i6=e.i(83252),i7=e.i(93010),ae=e.i(35838),ai=e.i(94899),aa=e.i(63806),ao=e.i(43630);let at=[iV.default,iJ.default,iZ.default,i0.default,i1.default,i2.default,i3.default,i4.default,ae.default,i5.default,i9.default,ao.default,ai.default,i7.default,aa.default,i6.default,i8.default];var ar=e.i(52655),an=e.i(83423),as=e.i(41056),al=e.i(98786),ac=e.i(27792),ap=e.i(14636),ad=e.i(17427),au=e.i(20881),af=e.i(57238),am=e.i(94768),ah=e.i(67974),ay=e.i(32032),ak=e.i(12713),ag=e.i(59510),ax=e.i(29867),ab=e.i(97708),av=e.i(29151),aj=e.i(95799),az=e.i(69571);let aw=[ar.default,an.default,as.default,al.default,ac.default,ap.default,ad.default,au.default,af.default,am.default,ah.default,ay.default,ak.default,ag.default,ax.default,ab.default,av.default,aj.default,az.default];var aC=e.i(80580),aL=e.i(23593),aI=e.i(8837),aP=e.i(4024),a$=e.i(50354),aS=e.i(58721),aE=e.i(81449),aD=e.i(80491);let aR=[aP.default,aL.default,aE.default,iG.default,aS.default,aI.default,iX.default,a$.default,aD.default,i2.default,i3.default,aC.default];var a_=e.i(2724),aO=e.i(53300),aA=e.i(66263),aM=e.i(96683);let aT=[a_.default,aO.default,aA.default,aM.default];(i={}).BREAKFAST="breakfast",i.DINNER="dinner",i.SUPPER="supper",i.HEALTHY="healthy",i.DESSERT="dessert",i.SNACKS="snacks",i.GRILL="grill",i.NEW_YEAR="newYear",i.SALADS="salads",i.REFRESHING_DRINKS="refreshing-drinks",i.ALCOHOLIC_DRINKS="alcoholic-drinks",i.HOMEMADE_ALCOHOL="homemade-alcohol";let aY={breakfast:[...S],dinner:[...et],supper:[...aw],healthy:[...iO],dessert:[...K],snacks:[...at],grill:[...ig],"new-year":[...aR],salads:[...iQ],"homemade-alcohol":[...aT],"refreshing-drinks":[...eM]};e.s(["RECIPES_OBJ",0,aY,"getAllRecipes",0,()=>{let e=new Map;for(let i of Object.values(aY).flat())!i.key||e.has(i.key)||e.set(i.key,i);return[...e.values()]}],95631)},75696,e=>{"use strict";var i=e.i(61745),a=e.i(43476);function o({locale:e,...o}){if(!e)throw Error(void 0);return(0,a.jsx)(i.IntlProvider,{locale:e,...o})}e.s(["default",()=>o])},2971,e=>{"use strict";var i=e.i(43476),a=e.i(97053),o=e.i(57688),t=e.i(71645),r=e.i(4529),n=e.i(20133),s=e.i(92199),l=e.i(18566),c=e.i(88674),p=e.i(61745);let d=a.default.div.withConfig({componentId:"sc-b54f3c63-0"})`
  position: relative;
  display: inline-block;
`,u=a.default.button.withConfig({componentId:"sc-b54f3c63-1"})`
  min-height: 42px;
  background: #fffaf5;
  border: 1px solid rgba(255, 132, 2, 0.16);
  border-radius: 9999px;
  padding: 0 12px;
  color: #6b3d08;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
  transition:
    color 0.2s ease,
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #fff0dc;
    color: #ff8402;
    transform: translateY(-1px);
  }
`,f=a.default.div.withConfig({componentId:"sc-b54f3c63-2"})`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: white;
  border-radius: 14px;
  padding: 6px 0;
  display: flex;
  flex-direction: column;
  min-width: 80px;
  box-shadow: 0 14px 32px rgba(44, 31, 20, 0.12);
  z-index: 20;
`,m=a.default.button.withConfig({componentId:"sc-b54f3c63-3"})`
  background: none;
  border: none;
  padding: 8px 12px;
  color: #333;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  text-align: left;

  &:hover {
    background: #f5f5f5;
  }
`,h={ru:{label:"Руc",flag:"🇷🇺"},en:{label:"Eng",flag:"🇬🇧"}},y=(0,t.memo)(function(){let e=(0,p.useLocale)(),a=(0,n.useRouter)(),[o,r]=(0,t.useTransition)(),y=(0,n.usePathname)(),k=(0,l.useParams)(),[g,x]=(0,t.useState)(!1);return(0,i.jsxs)(d,{children:[(0,i.jsxs)(u,{onClick:()=>x(e=>!e),children:[(0,i.jsx)(s.FiGlobe,{size:18}),h[e]?.label]}),g&&(0,i.jsx)(f,{style:{minWidth:"40px"},children:c.locales.filter(i=>i!==e).map(t=>(0,i.jsx)(m,{onClick:()=>{t===e||o||(r(()=>{localStorage.setItem("user-locale",t),a.replace({pathname:y,params:k},{locale:t})}),x(!1))},children:h[t]?.label},t))})]})});var k=e.i(46190),g=e.i(74080);let x=42,b=44,v="0 18px",j="0 16px",z=14,w=14,C=a.default.a.withConfig({componentId:"sc-f9149c5e-0"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${x}px;
  padding: ${v};
  font-size: ${z}px;
  font-weight: 700;
  color: #6b3d08;
  background: ${"#fffaf5"};
  border: 1px solid rgba(255, 132, 2, 0.16);
  border-radius: 999px;
  transition: all 0.25s ease;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  background-size: 200% 100%;

  &:hover {
    background: #fff0dc;
    transform: translateY(-2px);
    box-shadow: ${"0 12px 26px rgba(44, 31, 20, 0.12)"};
  }

  @media ${r.maxDevice.laptop} {
    height: ${b}px;
    font-size: ${w}px;
    padding: ${j};
  }

  @media ${r.maxDevice.mobileL} {
    width: 100%;
    justify-content: center;
  }
`,L=a.default.div.withConfig({componentId:"sc-f9149c5e-1"})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: 16px;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,I=a.default.div.withConfig({componentId:"sc-f9149c5e-2"})`
  background: white;
  border-radius: 16px;
  padding: 32px;
  max-width: 480px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  animation: slideUp 0.3s ease;

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  h2 {
    margin: 0 0 24px 0;
    font-size: 24px;
    font-weight: 600;
    color: #333;
    text-align: center;
    padding-right: 24px;

    @media ${r.maxDevice.laptop} {
      font-size: 22px;
      margin-bottom: 20px;
    }

    @media ${r.maxDevice.mobileL} {
      font-size: 20px;
      margin-bottom: 16px;
    }
  }

  @media ${r.maxDevice.laptop} {
    padding: 28px;
    max-width: 440px;
  }

  @media ${r.maxDevice.mobileL} {
    padding: 24px 20px;
    max-width: 95%;
    border-radius: 14px;
  }

  @media ${r.maxDevice.mobileM} {
    padding: 20px 16px;
  }
`,P=a.default.button.withConfig({componentId:"sc-f9149c5e-3"})`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
  color: #999;
  padding: 8px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f5f5f5;
    color: #666;
    transform: rotate(90deg);
  }

  @media ${r.maxDevice.laptop} {
    top: 16px;
    right: 16px;
    font-size: 24px;
    width: 36px;
    height: 36px;
  }

  @media ${r.maxDevice.mobileL} {
    top: 12px;
    right: 12px;
    font-size: 22px;
    width: 32px;
    height: 32px;
    padding: 6px;
  }
`,$=a.default.div.withConfig({componentId:"sc-f9149c5e-4"})`
  display: flex;
  justify-content: center;
`,S=a.default.div.withConfig({componentId:"sc-f9149c5e-5"})`
  text-align: center;
  margin-top: 20px;

  a {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 18px;
    border-radius: 999px;
    border: 1px solid rgba(255, 132, 2, 0.28);
    background: #fffaf5;
    color: #6b3d08;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.3;
    text-decoration: none;
    transition:
      background 0.2s ease,
      border-color 0.2s ease,
      color 0.2s ease,
      box-shadow 0.2s ease,
      transform 0.2s ease;

    &:hover {
      background: #fff0dc;
      border-color: #ff8402;
      color: #e75e02;
      box-shadow: 0 10px 24px rgba(255, 132, 2, 0.14);
      transform: translateY(-1px);
    }
  }
`,E=(0,t.memo)(function(){let[e,a]=(0,t.useState)(!1),[r,n]=(0,t.useState)(!0),s=(0,t.useRef)(null);(0,t.useEffect)(()=>{if(e)return s.current?.focus(),document.body.style.overflow="hidden",()=>{document.body.style.overflow="unset"}},[e]),(0,t.useEffect)(()=>{let e=e=>{"Escape"===e.key&&a(!1)};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[]);let l=()=>a(!1),c=e&&"u">typeof document?(0,g.createPortal)((0,i.jsx)(L,{onClick:l,children:(0,i.jsxs)(I,{ref:s,onClick:e=>e.stopPropagation(),role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",tabIndex:-1,children:[(0,i.jsx)(P,{"aria-label":"Закрыть",onClick:l,children:"×"}),(0,i.jsx)("h2",{id:"modal-title",children:"Поддержать проект"}),(0,i.jsxs)($,{children:[r&&(0,i.jsx)("div",{children:"Загрузка QR кода..."}),(0,i.jsx)(o.default,{onLoad:()=>n(!1),src:"/optimize/qr-sber.webp",alt:"QR код для перевода в Сбербанк",width:300,height:300,priority:!0})]}),(0,i.jsx)(S,{children:(0,i.jsx)("a",{href:"https://www.sberbank.com/sms/pbpn?requisiteNumber=79537647035",target:"_blank",rel:"noopener noreferrer",children:"Или перейдите по ссылке для поддержки"})})]})}),document.body):null;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(C,{onClick:()=>a(!0),title:"Поддержать проект","aria-label":"Поддержать проект",children:"Поддержать проект"}),c]})}),D=a.default.header.withConfig({componentId:"sc-8b3b301-0"})`
  background: ${({$scrolled:e})=>e?"rgba(255, 255, 255, 0.92)":"rgba(255, 255, 255, 0.78)"};
  backdrop-filter: blur(18px);
  z-index: 9998;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 4.5rem;
  padding: 0 100px;

  border-bottom: ${({$scrolled:e})=>e?"1px solid rgba(241, 232, 223, 0.9)":"1px solid transparent"};
  box-shadow: ${({$scrolled:e})=>e?"0 12px 32px rgba(44, 31, 20, 0.08)":"none"};

  transition: all 0.3s ease;

  @media ${r.maxDevice.laptop} {
    height: 3.5rem;
    padding: 0 16px;
  }
`,R=a.default.div.withConfig({componentId:"sc-8b3b301-1"})`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
  }

  img {
    width: 62px;
    height: auto;
  }
`,_=a.default.nav.withConfig({componentId:"sc-8b3b301-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 5px;
  border-radius: 999px;
  background: #fffaf5;
  box-shadow: inset 0 0 0 1px rgba(255, 132, 2, 0.1);

  a {
    position: relative;
    min-height: 38px;
    display: inline-flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 999px;
    font-size: 15px;
    font-weight: 700;
    color: #59483a;
    text-decoration: none;
    transition:
      color 0.2s ease,
      background 0.2s ease,
      box-shadow 0.2s ease;

    &:hover {
      color: #e75e02;
      background: #fff0dc;
    }

    &.active {
      color: #e75e02;
      background: #ffffff;
      box-shadow: 0 6px 18px rgba(44, 31, 20, 0.08);
    }
  }

  @media ${r.maxDevice.laptop} {
    display: none;
  }
`,O=a.default.div.withConfig({componentId:"sc-8b3b301-3"})`
  display: flex;
  align-items: center;
  gap: 20px;

  @media ${r.maxDevice.laptop} {
    display: none;
  }
`,A=a.default.button.withConfig({componentId:"sc-8b3b301-4"})`
  display: none;
  width: 42px;
  height: 42px;
  align-items: center;
  justify-content: center;
  background: #fffaf5;
  border: 1px solid rgba(255, 132, 2, 0.14);
  border-radius: 14px;
  font-size: 1.5rem;
  cursor: pointer;
  color: #4a1f0f;
  transition:
    color 0.2s ease,
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    color: #ff8402;
    background: #fff0dc;
    transform: translateY(-1px);
  }

  @media ${r.maxDevice.laptop} {
    display: inline-flex;
  }
`,M=a.default.div.withConfig({componentId:"sc-8b3b301-5"})`
  position: fixed;
  top: 3.5rem;
  left: 0;
  right: 0;
  bottom: 0;

  background: rgba(255, 250, 245, 0.96);
  backdrop-filter: blur(18px);
  z-index: 9997;

  display: flex;
  flex-direction: column;
  gap: 18px;

  padding: 20px 16px 28px;

  transform: ${({$open:e})=>e?"translateY(0)":"translateY(-10px)"};
  opacity: ${({$open:e})=>+!!e};
  pointer-events: ${({$open:e})=>e?"auto":"none"};

  transition: all 0.25s ease;

  a {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    font-size: 18px;
    font-weight: 700;
    color: #241b14;
    text-decoration: none;
  }
`,T=a.default.div.withConfig({componentId:"sc-8b3b301-6"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 12px 30px rgba(44, 31, 20, 0.07);
`,Y=a.default.span.withConfig({componentId:"sc-8b3b301-7"})`
  font-size: 12px;
  text-transform: uppercase;
  color: #9a7954;
  letter-spacing: 0.05em;
`,N=a.default.span.withConfig({componentId:"sc-8b3b301-8"})`
  font-family: 'PT Serif', 'Times New Roman', serif;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0;
  white-space: nowrap;
  color: #4a1f0f;
  display: flex;
  align-items: center;
  line-height: 1;

  span:last-child {
    color: #f28c28;
  }

  @media ${r.maxDevice.laptop} {
    font-size: 19px;
  }

  @media ${r.maxDevice.mobileL} {
    font-size: 18px;
  }
`,F=(0,t.memo)(function(){let[e,a]=(0,t.useState)(!1),[r,l]=(0,t.useState)(!1),c=(0,n.usePathname)();return(0,t.useEffect)(()=>{let e=()=>a(window.scrollY>0);return e(),window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,t.useEffect)(()=>{document.body.style.overflow=r?"hidden":"auto"},[r]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(D,{$scrolled:e,children:[(0,i.jsx)(R,{children:(0,i.jsxs)(n.Link,{href:"/",children:[(0,i.jsx)(o.default,{src:"/optimize/logo.webp",alt:"logo",width:120,height:60,priority:!0}),(0,i.jsxs)(N,{children:["Всегда Готов",(0,i.jsx)("span",{children:"Ъ"})]})]})}),(0,i.jsxs)(_,{children:[(0,i.jsx)(n.Link,{href:"/",className:"/"===c?"active":"",children:"Главная"}),(0,i.jsx)(n.Link,{href:"/categories",className:c.startsWith("/categories")?"active":"",children:"Категории"})]}),(0,i.jsxs)(O,{children:[(0,i.jsx)(y,{}),(0,i.jsx)(k.SuggestRecipeButton,{}),(0,i.jsx)(E,{})]}),(0,i.jsx)(A,{onClick:()=>l(e=>!e),children:r?(0,i.jsx)(s.FiX,{}):(0,i.jsx)(s.FiMenu,{})})]}),(0,i.jsxs)(M,{$open:r,children:[(0,i.jsxs)(T,{children:[(0,i.jsx)(Y,{children:"Навигация"}),(0,i.jsx)(n.Link,{href:"/",onClick:()=>l(!1),children:"Главная"}),(0,i.jsx)(n.Link,{href:"/categories",onClick:()=>l(!1),children:"Категории"})]}),(0,i.jsxs)(T,{children:[(0,i.jsx)(Y,{children:"Действия"}),(0,i.jsx)(k.SuggestRecipeButton,{}),(0,i.jsx)(E,{})]}),(0,i.jsxs)(T,{children:[(0,i.jsx)(Y,{children:"Настройки"}),(0,i.jsx)(y,{})]})]})]})});e.s(["Header",0,F],2971)},9009,e=>{"use strict";var i=e.i(43476),a=e.i(71645),o=e.i(48148),t=e.i(95631),r=e.i(97053),n=e.i(4529);let s=r.default.p.withConfig({componentId:"sc-b043db05-0"})`
  color: #918f8f;
  font-size: 10px;
  font-weight: 300;
  line-height: normal;
  margin-top: 4px;
`,l=r.default.footer.withConfig({componentId:"sc-b043db05-1"})`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: start;
  gap: 24px;
  background: #ffffff;
  color: #181818;
  min-height: 100px;

  padding: 24px 100px;
  font-size: 14px;
  border-top: 1px solid #eaeaea;

  @media ${n.maxDevice.laptop} {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 18px 20px;
  }
`,c=r.default.div.withConfig({componentId:"sc-b043db05-2"})`
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 8px;
`,p=r.default.div.withConfig({componentId:"sc-b043db05-3"})`
  display: flex;
  justify-content: flex-end;

  @media ${n.maxDevice.laptop} {
    width: 100%;
    justify-content: center;
  }
`,d=r.default.div.withConfig({componentId:"sc-b043db05-4"})`
  grid-column: 1 / -1;
`,u=(0,a.memo)(function(){let e=(0,o.useTranslations)("totalRecipes")("title",{count:(0,a.useMemo)(()=>String((0,t.getAllRecipes)().length),[])});return(0,i.jsx)(s,{children:e})}),f=(0,a.memo)(function(){let e=(0,o.useTranslations)("copyright"),a=new Date().getFullYear(),t=e("text",{url:String("food-paradise.ru"),text:String(a)});return(0,i.jsx)(s,{children:t})}),m=r.default.a.withConfig({componentId:"sc-68aa2ba3-0"})`
  color: #181818;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.2;

  &:hover {
    text-decoration: underline;
  }
`,h=(0,a.memo)(function({children:e,...a}){let o=/^https?:\/\//i.test(a?.href??"");return(0,i.jsx)(m,{target:o?"_blank":void 0,rel:o?"noopener noreferrer nofollow":void 0,...a,children:e})}),y=r.default.nav.withConfig({componentId:"sc-3904c4b2-0"})`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.55rem;
  padding: 0;
`,k=["doc1","doc2","doc3"],g=(0,a.memo)(function(){let e=(0,o.useTranslations)("docs");return(0,i.jsx)(y,{children:k.map(a=>{let o=e(`${a}.title`),t=e(`${a}.href`);return(0,i.jsx)(h,{href:t,"aria-label":o,children:o},a)})})});var x=e.i(11152);let b=r.default.nav.withConfig({componentId:"sc-73f6b35b-0"})`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 0;
`,v=r.default.a.withConfig({componentId:"sc-73f6b35b-1"})`
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: #fffaf5;
  color: #6b3d08;
  box-shadow: inset 0 0 0 1px rgba(255, 132, 2, 0.14);
  transition:
    transform 0.2s ease,
    color 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: #fff0dc;
    color: #ff8402;
    box-shadow:
      inset 0 0 0 1px rgba(255, 132, 2, 0.28),
      0 10px 24px rgba(255, 132, 2, 0.12);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,j=[{title:"VK",href:"#",icon:(0,i.jsx)(x.FaVk,{})},{title:"Яндекс Дзен",href:"#",icon:(0,i.jsx)(x.FaYandex,{})}],z=(0,a.memo)(function(){return(0,i.jsx)(b,{"aria-label":"Социальные сети",children:j.map(({title:e,href:a,icon:o})=>(0,i.jsx)(v,{href:a,"aria-label":e,title:e,children:o},e))})}),w=(0,a.memo)(function(){return(0,i.jsxs)(l,{children:[(0,i.jsx)(c,{children:(0,i.jsx)(g,{})}),(0,i.jsx)(p,{children:(0,i.jsx)(z,{})}),(0,i.jsxs)(d,{children:[(0,i.jsx)(f,{}),(0,i.jsx)(u,{})]})]})});e.s(["Footer",0,w],9009)},16233,e=>{"use strict";var i=e.i(43476),a=e.i(71645),o=e.i(53070),t=e.i(97053),r=e.i(4529),n=e.i(65191);let s=t.default.button.withConfig({componentId:"sc-23ae9a15-0"})`
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 10000;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 48px;
  padding: 0 18px;
  border: none;
  border-radius: 999px;
  background: linear-gradient(90deg, #e75e02 0%, #ff8402 100%);
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 8px 22px rgba(231, 94, 2, 0.35);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 26px rgba(231, 94, 2, 0.42);
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @media ${r.maxDevice.mobileL} {
    right: 14px;
    bottom: 14px;
    min-width: 48px;
    padding: 0 14px;
  }
`,l=t.default.span.withConfig({componentId:"sc-23ae9a15-1"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 22px;
  height: 22px;
  padding: 0 6px;
  border-radius: 999px;
  background: #ffffff;
  color: #e75e02;
  font-size: 12px;
  font-weight: 700;
`,c=t.default.div.withConfig({componentId:"sc-23ae9a15-2"})`
  position: fixed;
  inset: 0;
  z-index: 10001;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 24px;
  background: rgba(0, 0, 0, 0.34);

  @media ${r.maxDevice.mobileL} {
    align-items: stretch;
    padding: 0;
  }
`,p=t.default.section.withConfig({componentId:"sc-23ae9a15-3"})`
  width: min(420px, 100%);
  max-height: min(640px, calc(100vh - 48px));
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.22);

  @media ${r.maxDevice.mobileL} {
    width: 100%;
    max-height: 100%;
    border-radius: 0;
  }
`,d=t.default.header.withConfig({componentId:"sc-23ae9a15-4"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 18px 20px;
  border-bottom: 1px solid #eeeeee;
`,u=t.default.h2.withConfig({componentId:"sc-23ae9a15-5"})`
  color: #333333;
  font-size: 20px;
  line-height: 1.2;
`,f=t.default.div.withConfig({componentId:"sc-23ae9a15-6"})`
  display: flex;
  align-items: center;
  gap: 8px;
`,m=t.default.button.withConfig({componentId:"sc-23ae9a15-7"})`
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #ffffff;
  color: #555555;
  cursor: pointer;
  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;

  &:hover {
    color: #ff8402;
    border-color: #ff8402;
    background: #fff5e8;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`,h=t.default.ul.withConfig({componentId:"sc-23ae9a15-8"})`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  list-style: none;
`,y=t.default.li.withConfig({componentId:"sc-23ae9a15-9"})`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  align-items: start;
  padding: 14px 20px;
  border-bottom: 1px solid #f0f0f0;
`,k=t.default.input.attrs({type:"checkbox"}).withConfig({componentId:"sc-23ae9a15-10"})`
  width: 18px;
  height: 18px;
  margin-top: 2px;
  accent-color: #ff8402;
  cursor: pointer;
`,g=t.default.div.withConfig({componentId:"sc-23ae9a15-11"})`
  min-width: 0;
  color: ${({$checked:e})=>e?"#888888":"#333333"};
  text-decoration: ${({$checked:e})=>e?"line-through":"none"};
`,x=t.default.div.withConfig({componentId:"sc-23ae9a15-12"})`
  font-size: 15px;
  font-weight: 600;
  overflow-wrap: anywhere;
`,b=t.default.div.withConfig({componentId:"sc-23ae9a15-13"})`
  margin-top: 4px;
  color: #777777;
  font-size: 13px;
  line-height: 1.35;
`;e.s(["ShoppingListWidget",0,()=>{let[e,t]=(0,a.useState)(!1),r=(0,n.useShoppingListStore)(e=>e.items),v=(0,n.useShoppingListStore)(e=>e.toggleItem),j=(0,n.useShoppingListStore)(e=>e.removeItem),z=(0,n.useShoppingListStore)(e=>e.clearItems),w=r.length>0,C=e&&w;return((0,a.useEffect)(()=>{0===r.length&&e&&t(!1)},[r.length,e]),(0,a.useEffect)(()=>{if(!C)return;let e=e=>{"Escape"===e.key&&t(!1)},i=document.body.style.overflow;return document.body.style.overflow="hidden",window.addEventListener("keydown",e),()=>{document.body.style.overflow=i,window.removeEventListener("keydown",e)}},[C]),w)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s,{type:"button",onClick:()=>t(!0),"aria-label":"Открыть список покупок",children:[(0,i.jsx)(o.LuList,{}),(0,i.jsx)("span",{children:"Список"}),(0,i.jsx)(l,{children:r.length})]}),C&&(0,i.jsx)(c,{onClick:()=>t(!1),children:(0,i.jsxs)(p,{"aria-modal":"true",role:"dialog","aria-labelledby":"shopping-list-title",onClick:e=>e.stopPropagation(),children:[(0,i.jsxs)(d,{children:[(0,i.jsx)(u,{id:"shopping-list-title",children:"Список покупок"}),(0,i.jsxs)(f,{children:[(0,i.jsx)(m,{type:"button",onClick:()=>{z(),t(!1)},"aria-label":"Очистить список",title:"Очистить список",children:(0,i.jsx)(o.LuTrash2,{})}),(0,i.jsx)(m,{type:"button",onClick:()=>t(!1),"aria-label":"Закрыть список",title:"Закрыть",children:(0,i.jsx)(o.LuX,{})})]})]}),(0,i.jsx)(h,{children:r.map(e=>(0,i.jsxs)(y,{children:[(0,i.jsx)(k,{checked:e.checked,onChange:()=>v(e.id),"aria-label":`Отметить ${e.name} купленным`}),(0,i.jsxs)(g,{$checked:e.checked,children:[(0,i.jsx)(x,{children:e.name}),(0,i.jsxs)(b,{children:[e.amount," · ",e.recipeName]})]}),(0,i.jsx)(m,{type:"button",onClick:()=>j(e.id),"aria-label":`Удалить ${e.name}`,children:(0,i.jsx)(o.LuTrash2,{})})]},e.id))})]})})]}):null}])}]);