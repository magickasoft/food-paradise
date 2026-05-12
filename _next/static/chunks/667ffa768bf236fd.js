(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33525,(e,i,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"warnOnce",{enumerable:!0,get:function(){return t}});let t=e=>{}},91915,(e,i,a)=>{"use strict";function t(e,i={}){if(i.onlyHashChange)return void e();let a=document.documentElement;if("smooth"!==a.dataset.scrollBehavior)return void e();let o=a.style.scrollBehavior;a.style.scrollBehavior="auto",i.dontForceLayout||a.getClientRects(),e(),a.style.scrollBehavior=o}Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"disableSmoothScrollDuringRouteTransition",{enumerable:!0,get:function(){return t}}),e.r(33525)},98879,(e,i,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"default",{enumerable:!0,get:function(){return s}});let t=e.r(71645),o="u"<typeof window,r=o?()=>{}:t.useLayoutEffect,n=o?()=>{}:t.useEffect;function s(e){let{headManager:i,reduceComponentsToState:a}=e;function s(){if(i&&i.mountedInstances){let e=t.Children.toArray(Array.from(i.mountedInstances).filter(Boolean));i.updateHead(a(e))}}return o&&(i?.mountedInstances?.add(e.children),s()),r(()=>(i?.mountedInstances?.add(e.children),()=>{i?.mountedInstances?.delete(e.children)})),r(()=>(i&&(i._pendingUpdate=s),()=>{i&&(i._pendingUpdate=s)})),n(()=>(i&&i._pendingUpdate&&(i._pendingUpdate(),i._pendingUpdate=null),()=>{i&&i._pendingUpdate&&(i._pendingUpdate(),i._pendingUpdate=null)})),null}},25633,(e,i,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t={default:function(){return m},defaultHead:function(){return d}};for(var o in t)Object.defineProperty(a,o,{enumerable:!0,get:t[o]});let r=e.r(55682),n=e.r(90809),s=e.r(43476),l=n._(e.r(71645)),c=r._(e.r(98879)),p=e.r(42732);function d(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function u(e,i){return"string"==typeof i||"number"==typeof i?e:i.type===l.default.Fragment?e.concat(l.default.Children.toArray(i.props.children).reduce((e,i)=>"string"==typeof i||"number"==typeof i?e:e.concat(i),[])):e.concat(i)}e.r(33525);let f=["name","httpEquiv","charSet","itemProp"];function h(e){let i,a,t,o;return e.reduce(u,[]).reverse().concat(d().reverse()).filter((i=new Set,a=new Set,t=new Set,o={},e=>{let r=!0,n=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){n=!0;let a=e.key.slice(e.key.indexOf("$")+1);i.has(a)?r=!1:i.add(a)}switch(e.type){case"title":case"base":a.has(e.type)?r=!1:a.add(e.type);break;case"meta":for(let i=0,a=f.length;i<a;i++){let a=f[i];if(e.props.hasOwnProperty(a))if("charSet"===a)t.has(a)?r=!1:t.add(a);else{let i=e.props[a],t=o[a]||new Set;("name"!==a||!n)&&t.has(i)?r=!1:(t.add(i),o[a]=t)}}}return r})).reverse().map((e,i)=>{let a=e.key||i;return l.default.cloneElement(e,{key:a})})}let m=function({children:e}){let i=(0,l.useContext)(p.HeadManagerContext);return(0,s.jsx)(c.default,{reduceComponentsToState:h,headManager:i,children:e})};("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),i.exports=a.default)},88674,e=>{"use strict";e.s(["defaultLocale",0,"ru","locales",0,["ru","en"]])},4529,e=>{"use strict";let i="2560px",a=e=>({mobileS:`(${e}: 320px)`,mobileM:`(${e}: 375px)`,mobileL:`(${e}: 425px)`,tablet:`(${e}: 768px)`,laptop:`(${e}: 1024px)`,laptopL:`(${e}: 1440px)`,desktop:`(${e}: ${i})`,desktopL:`(${e}: ${i})`}),t=a("min-width"),o=a("max-width");e.s(["maxDevice",0,o,"minDevice",0,t])},20133,e=>{"use strict";var i=e.i(18566),a=e.i(71645),t=e.i(61745),o=a["use".trim()],r=e.i(49092),n=e.i(77105),s=e.i(89790),l=e.i(43476),c=e.i(33165),p=e.i(88674);let d=e=>Object.fromEntries(p.locales.map(i=>[i,e])),u={"/":d("/"),"/categories":d("/categories")},f={"/categories/[name]":d("/categories/[name]"),"/recipe/[name]":d("/recipe/[name]")},h={"/recipe/shashlyk-iz-svininy-na-kefire":d("/recipe/shashlyk-iz-svininy-na-kefire"),"/recipe/shashlyk-iz-kurinogo-bedra":d("/recipe/shashlyk-iz-kurinogo-bedra"),"/recipe/shashlyk-iz-kurinyh-grudok":d("/recipe/shashlyk-iz-kurinyh-grudok"),"/recipe/shashlyk-iz-kuritsy-v-kefirnom-marinade":d("/recipe/shashlyk-iz-kuritsy-v-kefirnom-marinade"),"/recipe/shashlyk-iz-kuritsy-v-soevom-marinade":d("/recipe/shashlyk-iz-kuritsy-v-soevom-marinade"),"/recipe/shashlyk-iz-svininy-v-granatovom-souse":d("/recipe/shashlyk-iz-svininy-v-granatovom-souse"),"/recipe/shashlyk-iz-baraniny-s-rozmarinom":d("/recipe/shashlyk-iz-baraniny-s-rozmarinom"),"/recipe/shashlyk-iz-indeyki-v-yogurtovom-marinade":d("/recipe/shashlyk-iz-indeyki-v-yogurtovom-marinade"),"/recipe/ovoschi-gril-s-balzamisceskoy-glazuryu":d("/recipe/ovoschi-gril-s-balzamisceskoy-glazuryu"),"/recipe/losos-na-kedrovoy-doske-s-medovo-gorchichnym-sousom":d("/recipe/losos-na-kedrovoy-doske-s-medovo-gorchichnym-sousom"),"/recipe/krevetki-na-grile-s-chesnochnym-maslom":d("/recipe/krevetki-na-grile-s-chesnochnym-maslom"),"/recipe/gril-sendvich-s-halloumi-i-ovoschami":d("/recipe/gril-sendvich-s-halloumi-i-ovoschami"),"/recipe/grecheskij-salat":d("/recipe/grecheskij-salat"),"/recipe/salat-cezar-s-kuritsey":d("/recipe/salat-cezar-s-kuritsey"),"/recipe/salat-s-avokado-i-krevetkami":d("/recipe/salat-s-avokado-i-krevetkami"),"/recipe/salat-kapreze":d("/recipe/salat-kapreze"),"/recipe/salat-s-tuntsom-i-yaitsom":d("/recipe/salat-s-tuntsom-i-yaitsom"),"/recipe/teplyj-salat-s-govyadinoj":d("/recipe/teplyj-salat-s-govyadinoj"),"/recipe/salat-nisuaz-s-tuntsom":d("/recipe/salat-nisuaz-s-tuntsom"),"/recipe/salat-valdorf-s-kuritsey":d("/recipe/salat-valdorf-s-kuritsey"),"/recipe/krabovyi-salat-s-kukuruzoi":d("/recipe/krabovyi-salat-s-kukuruzoi"),"/recipe/salat-olivye-klassicheskii":d("/recipe/salat-olivye-klassicheskii"),"/recipe/letnii-salat-s-klubnikoi":d("/recipe/letnii-salat-s-klubnikoi"),"/recipe/gruzinskii-salat-lobio":d("/recipe/gruzinskii-salat-lobio"),"/recipe/limonad-s-myatoj":d("/recipe/limonad-s-myatoj"),"/recipe/ogurechnyj-detoks-napitok":d("/recipe/ogurechnyj-detoks-napitok"),"/recipe/yagodnyj-mors":d("/recipe/yagodnyj-mors"),"/recipe/arbuznyj-smuzi":d("/recipe/arbuznyj-smuzi"),"/recipe/myatno-limonnij-detoks-napitok":d("/recipe/myatno-limonnij-detoks-napitok"),"/recipe/imbirnyj-limonad-s-medom":d("/recipe/imbirnyj-limonad-s-medom"),"/recipe/klubnichno-bazilikovyj-limonad":d("/recipe/klubnichno-bazilikovyj-limonad"),"/recipe/tropicheskij-smuzi-s-mango":d("/recipe/tropicheskij-smuzi-s-mango"),"/recipe/ogurechno-lajmovyj-spritser":d("/recipe/ogurechno-lajmovyj-spritser"),"/recipe/malinovyj-chajnyj-fresh":d("/recipe/malinovyj-chajnyj-fresh"),"/recipe/persikovyj-latte":d("/recipe/persikovyj-latte"),"/recipe/inzhirnyj-koktejl":d("/recipe/inzhirnyj-koktejl"),"/recipe/scrambled-eggs":d("/recipe/scrambled-eggs"),"/recipe/scrambled-eggs-with-broccoli":d("/recipe/scrambled-eggs-with-broccoli"),"/recipe/ovsjanaja-kasha-s-jablokami-i-koricej":d("/recipe/ovsjanaja-kasha-s-jablokami-i-koricej"),"/recipe/omlet-s-molokom":d("/recipe/omlet-s-molokom"),"/recipe/bliny":d("/recipe/bliny"),"/recipe/scrambled-eggs-with-sausages-and-beans":d("/recipe/scrambled-eggs-with-sausages-and-beans"),"/recipe/scrambled-eggs-shakshuka":d("/recipe/scrambled-eggs-shakshuka"),"/recipe/menemen":d("/recipe/menemen"),"/recipe/borshch-s-pampushkami":d("/recipe/borshch-s-pampushkami"),"/recipe/okroshka-na-kvase":d("/recipe/okroshka-na-kvase"),"/recipe/okroshka-na-kefire":d("/recipe/okroshka-na-kefire"),"/recipe/classic-borscht":d("/recipe/classic-borscht"),"/recipe/pumpkin-cream-soup":d("/recipe/pumpkin-cream-soup"),"/recipe/pho-bo":d("/recipe/pho-bo"),"/recipe/gazpacho":d("/recipe/gazpacho"),"/recipe/cream-mushroom-soup":d("/recipe/cream-mushroom-soup"),"/recipe/schi-iz-svezhey-kapusty":d("/recipe/schi-iz-svezhey-kapusty"),"/recipe/uha-po-finski":d("/recipe/uha-po-finski"),"/recipe/sup-pyure-iz-tykvy":d("/recipe/sup-pyure-iz-tykvy"),"/recipe/kurinyy-bulon-s-lapshoy":d("/recipe/kurinyy-bulon-s-lapshoy"),"/recipe/rublenye-kotlety-iz-grudki-na-skovorode":d("/recipe/rublenye-kotlety-iz-grudki-na-skovorode"),"/recipe/stejk-ribaj-na-elektrogrile":d("/recipe/stejk-ribaj-na-elektrogrile"),"/recipe/mjaso-po-francuzski-s-pomidorami-i-syrom":d("/recipe/mjaso-po-francuzski-s-pomidorami-i-syrom"),"/recipe/uzbekskij-plov-s-govyadinoj":d("/recipe/uzbekskij-plov-s-govyadinoj"),"/recipe/losos-v-medovo-gorchichnom-souse":d("/recipe/losos-v-medovo-gorchichnom-souse"),"/recipe/kuritsa-gril-s-kinoa":d("/recipe/kuritsa-gril-s-kinoa"),"/recipe/ratatui-s-baklazhanami":d("/recipe/ratatui-s-baklazhanami"),"/recipe/lazanya-s-myasom-i-syrom":d("/recipe/lazanya-s-myasom-i-syrom"),"/recipe/grechka-s-gribami-i-lukom":d("/recipe/grechka-s-gribami-i-lukom"),"/recipe/kartofelnaya-zapekanka-s-farshem":d("/recipe/kartofelnaya-zapekanka-s-farshem"),"/recipe/kurinye-grudki-v-slivocnom-souse":d("/recipe/kurinye-grudki-v-slivocnom-souse"),"/recipe/losos-pod-syrnoy-korochkoy":d("/recipe/losos-pod-syrnoy-korochkoy"),"/recipe/ratatuy-po-domashnemu":d("/recipe/ratatuy-po-domashnemu"),"/recipe/govyadina-po-burgundski":d("/recipe/govyadina-po-burgundski"),"/recipe/krevetki-v-chesnochnom-souse":d("/recipe/krevetki-v-chesnochnom-souse"),"/recipe/kotlety-s-pyure":d("/recipe/kotlety-s-pyure"),"/recipe/makarony-s-syrom":d("/recipe/makarony-s-syrom"),"/recipe/rybnye-kotlety-s-pyure":d("/recipe/rybnye-kotlety-s-pyure"),"/recipe/farshirovannye-pertsy":d("/recipe/farshirovannye-pertsy"),"/recipe/ragu-iz-kabachkov-v-smetane":d("/recipe/ragu-iz-kabachkov-v-smetane"),"/recipe/ovsyanoblin":d("/recipe/ovsyanoblin"),"/recipe/kinoa-boul-s-lososem":d("/recipe/kinoa-boul-s-lososem"),"/recipe/tykvennyj-sup-s-imbirem":d("/recipe/tykvennyj-sup-s-imbirem"),"/recipe/smuzi-boul-s-chia":d("/recipe/smuzi-boul-s-chia"),"/recipe/farshirovannye-pertsy-s-kinoa":d("/recipe/farshirovannye-pertsy-s-kinoa"),"/recipe/batat-s-krasnoy-fasolyu-i-avokado":d("/recipe/batat-s-krasnoy-fasolyu-i-avokado"),"/recipe/treska-s-brokkoli-i-limonom":d("/recipe/treska-s-brokkoli-i-limonom"),"/recipe/teplyj-salat-s-kinoa-tykvoy-i-rukkoloy":d("/recipe/teplyj-salat-s-kinoa-tykvoy-i-rukkoloy"),"/recipe/tofu-s-ovoshchami-v-kunzhutnom-souse":d("/recipe/tofu-s-ovoshchami-v-kunzhutnom-souse"),"/recipe/ovoshchnoy-sup-s-fasolyu-i-shpinatom":d("/recipe/ovoshchnoy-sup-s-fasolyu-i-shpinatom"),"/recipe/indeyka-s-kabachkom-i-zelenyu":d("/recipe/indeyka-s-kabachkom-i-zelenyu"),"/recipe/salat-s-tuntsom-yaytsom-i-avokado":d("/recipe/salat-s-tuntsom-yaytsom-i-avokado"),"/recipe/ris-s-ovoshchami-i-krevetkami":d("/recipe/ris-s-ovoshchami-i-krevetkami"),"/recipe/zapekanka-iz-brokkoli-s-yaytsom":d("/recipe/zapekanka-iz-brokkoli-s-yaytsom"),"/recipe/smuzi-s-chernikoy-i-ovsyankoy":d("/recipe/smuzi-s-chernikoy-i-ovsyankoy"),"/recipe/chizkeik":d("/recipe/chizkeik"),"/recipe/panna-cotta":d("/recipe/panna-cotta"),"/recipe/chocolate-truffles":d("/recipe/chocolate-truffles"),"/recipe/meringue-roll-s-lemon-curd":d("/recipe/meringue-roll-s-lemon-curd"),"/recipe/klubnichnyy-pai-s-pesochnoy-kroschkoy":d("/recipe/klubnichnyy-pai-s-pesochnoy-kroschkoy"),"/recipe/krem-bryule-s-vanilyu":d("/recipe/krem-bryule-s-vanilyu"),"/recipe/morkovnyy-tort-s-gretskimi-orekhami":d("/recipe/morkovnyy-tort-s-gretskimi-orekhami"),"/recipe/pirozhnoye-kartoshka":d("/recipe/pirozhnoye-kartoshka"),"/recipe/tort-medovik":d("/recipe/tort-medovik"),"/recipe/beze":d("/recipe/beze"),"/recipe/lenivyy-napoleon":d("/recipe/lenivyy-napoleon"),"/recipe/shu-s-kremom":d("/recipe/shu-s-kremom"),"/recipe/apple-strudel":d("/recipe/apple-strudel"),"/recipe/cherry-pie":d("/recipe/cherry-pie"),"/recipe/rulety-iz-vetchiny-s-syrnom-i-chesnokom":d("/recipe/rulety-iz-vetchiny-s-syrnom-i-chesnokom"),"/recipe/kartofelnye-chipsy-v-mikrovolnovke":d("/recipe/kartofelnye-chipsy-v-mikrovolnovke"),"/recipe/sendvich-s-avokado-i-yaitsom-pashot":d("/recipe/sendvich-s-avokado-i-yaitsom-pashot"),"/recipe/grecheskiy-sendvich-s-fetoy":d("/recipe/grecheskiy-sendvich-s-fetoy"),"/recipe/sendvich-s-kuritsey-i-pesto":d("/recipe/sendvich-s-kuritsey-i-pesto"),"/recipe/brusketta-s-tomatami-i-bazilikom":d("/recipe/brusketta-s-tomatami-i-bazilikom"),"/recipe/ruletiki-iz-lavasha-s-lososem":d("/recipe/ruletiki-iz-lavasha-s-lososem"),"/recipe/farshirovannye-yajtsa-s-gorchicej":d("/recipe/farshirovannye-yajtsa-s-gorchicej"),"/recipe/kanape-iz-ogurtsa-s-lososem":d("/recipe/kanape-iz-ogurtsa-s-lososem"),"/recipe/tartaletki-s-krabovymi-palochkami":d("/recipe/tartaletki-s-krabovymi-palochkami"),"/recipe/shampinony-s-syrom-v-duhovke":d("/recipe/shampinony-s-syrom-v-duhovke"),"/recipe/ruletiki-iz-baklazhanov-s-fetoy":d("/recipe/ruletiki-iz-baklazhanov-s-fetoy"),"/recipe/syrnye-shariki-s-kunzhutom":d("/recipe/syrnye-shariki-s-kunzhutom"),"/recipe/kanape-s-seldyu-i-svekloy":d("/recipe/kanape-s-seldyu-i-svekloy"),"/recipe/kabachkovye-oladi-s-syrom":d("/recipe/kabachkovye-oladi-s-syrom"),"/recipe/lemoncello-vodka":d("/recipe/lemoncello-vodka"),"/recipe/cranberry-vodka":d("/recipe/cranberry-vodka"),"/recipe/cherry-vodka":d("/recipe/cherry-vodka"),"/recipe/hrenovukha":d("/recipe/hrenovukha"),"/recipe/salat-olivye":d("/recipe/salat-olivye"),"/recipe/krabovyy-salat":d("/recipe/krabovyy-salat"),"/recipe/selodka-pod-shuboy":d("/recipe/selodka-pod-shuboy"),"/recipe/salat-mimosa":d("/recipe/salat-mimosa"),"/recipe/salat-s-kuritsey-i-ananasami":d("/recipe/salat-s-kuritsey-i-ananasami"),"/recipe/salat-obzhorka":d("/recipe/salat-obzhorka"),"/recipe/salat-s-yazykom-i-gribami":d("/recipe/salat-s-yazykom-i-gribami"),"/recipe/salat-s-krasnoy-ryboy-i-avokado":d("/recipe/salat-s-krasnoy-ryboy-i-avokado"),"/recipe/zapechonnaya-kuritsa-tselikom":d("/recipe/zapechonnaya-kuritsa-tselikom"),"/recipe/tartaletki-s-ikroy":d("/recipe/tartaletki-s-ikroy"),"/recipe/tartaletki-s-kuritsey-i-gribami":d("/recipe/tartaletki-s-kuritsey-i-gribami"),"/recipe/novogodneye-pechenye-s-glazuryu":d("/recipe/novogodneye-pechenye-s-glazuryu")};({...u,...h});let m={...u,...f},{Link:k,getPathname:y,redirect:g,usePathname:x,useRouter:b}=function(e){let{Link:p,config:d,getPathname:u,...f}=function(e,t){var c,p,d;let u={...c=t||{},localePrefix:"object"==typeof(d=c.localePrefix)?d:{mode:d||"always"},localeCookie:!!((p=c.localeCookie)??1)&&{name:"NEXT_LOCALE",sameSite:"lax",..."object"==typeof p&&p},localeDetection:c.localeDetection??!0,alternateLinks:c.alternateLinks??!0},f=u.pathnames,h=(0,a.forwardRef)(function({href:i,locale:a,...t},s){let c,p;"object"==typeof i?(c=i.pathname,p=i.params):c=i;let d=(0,r.isLocalizableHref)(i),h=e(),k=(0,r.isPromise)(h)?o(h):h,y=d?m({locale:a||k,href:null==f?c:{pathname:c,params:p},forcePrefix:null!=a||void 0}):c;return(0,l.jsx)(n.default,{ref:s,href:"object"==typeof i?{...i,pathname:y}:y,locale:a,localeCookie:u.localeCookie,...t})});function m(e){let i,{forcePrefix:a,href:t,locale:o}=e;return null==f?"object"==typeof t?(i=t.pathname,t.query&&(i+=(0,s.serializeSearchParams)(t.query))):i=t:i=(0,s.compileLocalizedPathname)({locale:o,...(0,s.normalizeNameOrNameWithParams)(t),pathnames:u.pathnames}),(0,s.applyPathnamePrefix)(i,o,u,a)}function k(e){return function(i,...a){return e(m(i),...a)}}return{config:u,Link:h,redirect:k(i.redirect),permanentRedirect:k(i.permanentRedirect),getPathname:m}}(t.useLocale,e);return{...f,Link:p,usePathname:function(){let e,o,n=(e=(0,i.usePathname)(),o=(0,t.useLocale)(),(0,a.useMemo)(()=>{if(!e)return e;let i=e,a=(0,r.getLocalePrefix)(o,d.localePrefix);if((0,r.hasPathnamePrefixed)(a,e))i=(0,r.unprefixPathname)(e,a);else if("never"!==d.localePrefix.mode&&d.localePrefix.prefixes){let a=(0,r.getLocaleAsPrefix)(o);(0,r.hasPathnamePrefixed)(a,e)&&(i=(0,r.unprefixPathname)(e,a))}return i},[d.localePrefix,o,e])),l=(0,t.useLocale)();return(0,a.useMemo)(()=>n&&d.pathnames?(0,s.getRoute)(l,n,d.pathnames):n,[l,n])},useRouter:function(){let e=(0,i.useRouter)(),o=(0,t.useLocale)(),r=(0,i.usePathname)();return(0,a.useMemo)(()=>{function i(e){return function(i,a){let{locale:t,...n}=a||{},s=[u({href:i,locale:t||o,forcePrefix:null!=t||void 0})];Object.keys(n).length>0&&s.push(n),(0,c.default)(d.localeCookie,r,o,t),e(...s)}}return{...e,push:i(e.push),replace:i(e.replace),prefetch:i(e.prefetch)}},[o,r,e])},getPathname:u}}({localePrefix:"always",locales:p.locales,defaultLocale:p.defaultLocale,pathnames:m});e.s(["Link",0,k,"usePathname",0,x,"useRouter",0,b],20133)},95631,e=>{"use strict";var i,a=e.i(34602),t=e.i(44199),o=e.i(59209),r=e.i(69838),n=e.i(16686),s=e.i(5578),l=e.i(71553),c=e.i(18370);let p=[a.default,t.default,o.default,r.default,n.default,s.default,l.default,c.default];var d=e.i(33362),u=e.i(7426),f=e.i(29427),h=e.i(99830),m=e.i(77675),k=e.i(28174),y=e.i(85995),g=e.i(8900),x=e.i(99866),b=e.i(59419),v=e.i(94334),j=e.i(60556),w=e.i(68189),z=e.i(62704);let C=[d.default,u.default,f.default,h.default,m.default,k.default,y.default,g.default,x.default,b.default,v.default,j.default,w.default,z.default];var L=e.i(25547),I=e.i(38451),P=e.i(67758),$=e.i(14253),S=e.i(14735),E=e.i(83575),D=e.i(66605),R=e.i(59907),_=e.i(69138),O=e.i(75063),A=e.i(19369),M=e.i(10823);let T=[L.default,I.default,P.default,$.default,S.default,E.default,D.default,R.default,_.default,O.default,A.default,M.default];var Y=e.i(81243),N=e.i(20257),F=e.i(20838),U=e.i(89006),H=e.i(44853),B=e.i(70525),K=e.i(74790),q=e.i(44333),W=e.i(79478),G=e.i(98427),X=e.i(38070),Q=e.i(61112);let V=[Y.default,N.default,F.default,U.default,H.default,B.default,K.default,q.default,W.default,G.default,X.default,Q.default];var J=e.i(18064),Z=e.i(64902),ee=e.i(40340),ei=e.i(84033),ea=e.i(56849),et=e.i(82559),eo=e.i(6416),er=e.i(52635),en=e.i(45307),es=e.i(659),el=e.i(8318),ec=e.i(47802);let ep=[J.default,Z.default,ee.default,ei.default,ea.default,et.default,eo.default,er.default,en.default,es.default,el.default,ec.default];var ed=e.i(69509),eu=e.i(46913),ef=e.i(75646),eh=e.i(88616),em=e.i(49030),ek=e.i(6793),ey=e.i(28137),eg=e.i(43435),ex=e.i(67960),eb=e.i(7724),ev=e.i(64542),ej=e.i(2846),ew=e.i(23944),ez=e.i(14625),eC=e.i(25587),eL=e.i(3408);let eI=[ed.default,eu.default,ef.default,eh.default,em.default,ek.default,ey.default,eg.default,ex.default,eb.default,ev.default,ej.default,ew.default,ez.default,eC.default,eL.default];var eP=e.i(60820),e$=e.i(91188),eS=e.i(11337),eE=e.i(11646),eD=e.i(40504),eR=e.i(24369),e_=e.i(13741),eO=e.i(37181),eA=e.i(11308),eM=e.i(48809),eT=e.i(13385),eY=e.i(96633),eN=e.i(54877),eF=e.i(79952);let eU=[eP.default,e$.default,eS.default,eE.default,eD.default,eR.default,e_.default,eO.default,eA.default,eM.default,eT.default,eY.default,eN.default,eF.default];var eH=e.i(44580),eB=e.i(80595),eK=e.i(20313),eq=e.i(90925),eW=e.i(95497),eG=e.i(64613),eX=e.i(16019),eQ=e.i(31812),eV=e.i(94429),eJ=e.i(11307),eZ=e.i(25273),e0=e.i(83252),e1=e.i(93010),e2=e.i(35838),e3=e.i(94899),e5=e.i(63806),e4=e.i(43630);let e8=[eH.default,eB.default,eK.default,eq.default,eW.default,eG.default,eX.default,eQ.default,e2.default,eV.default,eZ.default,e4.default,e3.default,e1.default,e5.default,e0.default,eJ.default];var e9=e.i(52655),e6=e.i(83423),e7=e.i(41056),ie=e.i(98786),ii=e.i(27792),ia=e.i(14636),it=e.i(17427),io=e.i(20881),ir=e.i(57238),is=e.i(94768),il=e.i(67974),ic=e.i(32032),ip=e.i(12713),id=e.i(59510),iu=e.i(29867),ih=e.i(97708),im=e.i(29151),ik=e.i(95799),iy=e.i(69571);let ig=[e9.default,e6.default,e7.default,ie.default,ii.default,ia.default,it.default,io.default,ir.default,is.default,il.default,ic.default,ip.default,id.default,iu.default,ih.default,im.default,ik.default,iy.default];var ix=e.i(80580),ib=e.i(23593),iv=e.i(8837),ij=e.i(4024),iw=e.i(50354),iz=e.i(58721),iC=e.i(81449),iL=e.i(80491);let iI=[ij.default,ib.default,iC.default,eN.default,iz.default,iv.default,eF.default,iw.default,iL.default,eG.default,eX.default,ix.default];var iP=e.i(2724),i$=e.i(53300),iS=e.i(66263),iE=e.i(96683);let iD=[iP.default,i$.default,iS.default,iE.default];(i={}).BREAKFAST="breakfast",i.DINNER="dinner",i.SUPPER="supper",i.HEALTHY="healthy",i.DESSERT="dessert",i.SNACKS="snacks",i.GRILL="grill",i.NEW_YEAR="newYear",i.SALADS="salads",i.REFRESHING_DRINKS="refreshing-drinks",i.ALCOHOLIC_DRINKS="alcoholic-drinks",i.HOMEMADE_ALCOHOL="homemade-alcohol";let iR={breakfast:[...p],dinner:[...T],supper:[...ig],healthy:[...eI],dessert:[...C],snacks:[...e8],grill:[...ep],"new-year":[...iI],salads:[...eU],"homemade-alcohol":[...iD],"refreshing-drinks":[...V]};e.s(["RECIPES_OBJ",0,iR,"getAllRecipes",0,()=>{let e=new Map;for(let i of Object.values(iR).flat())!i.key||e.has(i.key)||e.set(i.key,i);return[...e.values()]}],95631)},75696,e=>{"use strict";var i=e.i(61745),a=e.i(43476);function t({locale:e,...t}){if(!e)throw Error(void 0);return(0,a.jsx)(i.IntlProvider,{locale:e,...t})}e.s(["default",()=>t])},2971,e=>{"use strict";var i=e.i(43476),a=e.i(97053),t=e.i(57688),o=e.i(71645),r=e.i(4529),n=e.i(20133),s=e.i(92199),l=e.i(18566),c=e.i(88674),p=e.i(61745);let d=a.default.div.withConfig({componentId:"sc-b54f3c63-0"})`
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
`,h=a.default.button.withConfig({componentId:"sc-b54f3c63-3"})`
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
`,m={ru:{label:"Руc",flag:"🇷🇺"},en:{label:"Eng",flag:"🇬🇧"}},k=(0,o.memo)(function(){let e=(0,p.useLocale)(),a=(0,n.useRouter)(),[t,r]=(0,o.useTransition)(),k=(0,n.usePathname)(),y=(0,l.useParams)(),[g,x]=(0,o.useState)(!1);return(0,i.jsxs)(d,{children:[(0,i.jsxs)(u,{onClick:()=>x(e=>!e),children:[(0,i.jsx)(s.FiGlobe,{size:18}),m[e]?.label]}),g&&(0,i.jsx)(f,{style:{minWidth:"40px"},children:c.locales.filter(i=>i!==e).map(o=>(0,i.jsx)(h,{onClick:()=>{o===e||t||(r(()=>{localStorage.setItem("user-locale",o),a.replace({pathname:k,params:y},{locale:o})}),x(!1))},children:m[o]?.label},o))})]})});var y=e.i(46190),g=e.i(74080);let x=42,b=44,v="0 18px",j="0 16px",w=14,z=14,C=a.default.a.withConfig({componentId:"sc-f9149c5e-0"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${x}px;
  padding: ${v};
  font-size: ${w}px;
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
    font-size: ${z}px;
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
`,E=(0,o.memo)(function(){let[e,a]=(0,o.useState)(!1),[r,n]=(0,o.useState)(!0),s=(0,o.useRef)(null);(0,o.useEffect)(()=>{if(e)return s.current?.focus(),document.body.style.overflow="hidden",()=>{document.body.style.overflow="unset"}},[e]),(0,o.useEffect)(()=>{let e=e=>{"Escape"===e.key&&a(!1)};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[]);let l=()=>a(!1),c=e&&"u">typeof document?(0,g.createPortal)((0,i.jsx)(L,{onClick:l,children:(0,i.jsxs)(I,{ref:s,onClick:e=>e.stopPropagation(),role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",tabIndex:-1,children:[(0,i.jsx)(P,{"aria-label":"Закрыть",onClick:l,children:"×"}),(0,i.jsx)("h2",{id:"modal-title",children:"Поддержать проект"}),(0,i.jsxs)($,{children:[r&&(0,i.jsx)("div",{children:"Загрузка QR кода..."}),(0,i.jsx)(t.default,{onLoad:()=>n(!1),src:"/optimize/qr-sber.webp",alt:"QR код для перевода в Сбербанк",width:300,height:300,priority:!0})]}),(0,i.jsx)(S,{children:(0,i.jsx)("a",{href:"https://www.sberbank.com/sms/pbpn?requisiteNumber=79537647035",target:"_blank",rel:"noopener noreferrer",children:"Или перейдите по ссылке для поддержки"})})]})}),document.body):null;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(C,{onClick:()=>a(!0),title:"Поддержать проект","aria-label":"Поддержать проект",children:"Поддержать проект"}),c]})}),D=a.default.header.withConfig({componentId:"sc-8b3b301-0"})`
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
`,F=(0,o.memo)(function(){let[e,a]=(0,o.useState)(!1),[r,l]=(0,o.useState)(!1),c=(0,n.usePathname)();return(0,o.useEffect)(()=>{let e=()=>a(window.scrollY>0);return e(),window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,o.useEffect)(()=>{document.body.style.overflow=r?"hidden":"auto"},[r]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(D,{$scrolled:e,children:[(0,i.jsx)(R,{children:(0,i.jsxs)(n.Link,{href:"/",children:[(0,i.jsx)(t.default,{src:"/optimize/logo.webp",alt:"logo",width:120,height:60,priority:!0}),(0,i.jsxs)(N,{children:["Всегда Готов",(0,i.jsx)("span",{children:"Ъ"})]})]})}),(0,i.jsxs)(_,{children:[(0,i.jsx)(n.Link,{href:"/",className:"/"===c?"active":"",children:"Главная"}),(0,i.jsx)(n.Link,{href:"/categories",className:c.startsWith("/categories")?"active":"",children:"Категории"})]}),(0,i.jsxs)(O,{children:[(0,i.jsx)(k,{}),(0,i.jsx)(y.SuggestRecipeButton,{}),(0,i.jsx)(E,{})]}),(0,i.jsx)(A,{onClick:()=>l(e=>!e),children:r?(0,i.jsx)(s.FiX,{}):(0,i.jsx)(s.FiMenu,{})})]}),(0,i.jsxs)(M,{$open:r,children:[(0,i.jsxs)(T,{children:[(0,i.jsx)(Y,{children:"Навигация"}),(0,i.jsx)(n.Link,{href:"/",onClick:()=>l(!1),children:"Главная"}),(0,i.jsx)(n.Link,{href:"/categories",onClick:()=>l(!1),children:"Категории"})]}),(0,i.jsxs)(T,{children:[(0,i.jsx)(Y,{children:"Действия"}),(0,i.jsx)(y.SuggestRecipeButton,{}),(0,i.jsx)(E,{})]}),(0,i.jsxs)(T,{children:[(0,i.jsx)(Y,{children:"Настройки"}),(0,i.jsx)(k,{})]})]})]})});e.s(["Header",0,F],2971)},9009,e=>{"use strict";var i=e.i(43476),a=e.i(71645),t=e.i(48148),o=e.i(95631),r=e.i(97053),n=e.i(4529);let s=r.default.p.withConfig({componentId:"sc-b043db05-0"})`
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
`,u=(0,a.memo)(function(){let e=(0,t.useTranslations)("totalRecipes")("title",{count:(0,a.useMemo)(()=>String((0,o.getAllRecipes)().length),[])});return(0,i.jsx)(s,{children:e})}),f=(0,a.memo)(function(){let e=(0,t.useTranslations)("copyright"),a=new Date().getFullYear(),o=e("text",{url:String("food-paradise.ru"),text:String(a)});return(0,i.jsx)(s,{children:o})}),h=r.default.a.withConfig({componentId:"sc-68aa2ba3-0"})`
  color: #181818;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.2;

  &:hover {
    text-decoration: underline;
  }
`,m=(0,a.memo)(function({children:e,...a}){let t=/^https?:\/\//i.test(a?.href??"");return(0,i.jsx)(h,{target:t?"_blank":void 0,rel:t?"noopener noreferrer nofollow":void 0,...a,children:e})}),k=r.default.nav.withConfig({componentId:"sc-3904c4b2-0"})`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.55rem;
  padding: 0;
`,y=["doc1","doc2","doc3"],g=(0,a.memo)(function(){let e=(0,t.useTranslations)("docs");return(0,i.jsx)(k,{children:y.map(a=>{let t=e(`${a}.title`),o=e(`${a}.href`);return(0,i.jsx)(m,{href:o,"aria-label":t,children:t},a)})})});var x=e.i(11152);let b=r.default.nav.withConfig({componentId:"sc-73f6b35b-0"})`
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
`,j=[{title:"VK",href:"#",icon:(0,i.jsx)(x.FaVk,{})},{title:"Яндекс Дзен",href:"#",icon:(0,i.jsx)(x.FaYandex,{})}],w=(0,a.memo)(function(){return(0,i.jsx)(b,{"aria-label":"Социальные сети",children:j.map(({title:e,href:a,icon:t})=>(0,i.jsx)(v,{href:a,"aria-label":e,title:e,children:t},e))})}),z=(0,a.memo)(function(){return(0,i.jsxs)(l,{children:[(0,i.jsx)(c,{children:(0,i.jsx)(g,{})}),(0,i.jsx)(p,{children:(0,i.jsx)(w,{})}),(0,i.jsxs)(d,{children:[(0,i.jsx)(f,{}),(0,i.jsx)(u,{})]})]})});e.s(["Footer",0,z],9009)},16233,e=>{"use strict";var i=e.i(43476),a=e.i(71645),t=e.i(53070),o=e.i(97053),r=e.i(4529),n=e.i(65191);let s=o.default.button.withConfig({componentId:"sc-23ae9a15-0"})`
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
`,l=o.default.span.withConfig({componentId:"sc-23ae9a15-1"})`
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
`,c=o.default.div.withConfig({componentId:"sc-23ae9a15-2"})`
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
`,p=o.default.section.withConfig({componentId:"sc-23ae9a15-3"})`
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
`,d=o.default.header.withConfig({componentId:"sc-23ae9a15-4"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 18px 20px;
  border-bottom: 1px solid #eeeeee;
`,u=o.default.h2.withConfig({componentId:"sc-23ae9a15-5"})`
  color: #333333;
  font-size: 20px;
  line-height: 1.2;
`,f=o.default.div.withConfig({componentId:"sc-23ae9a15-6"})`
  display: flex;
  align-items: center;
  gap: 8px;
`,h=o.default.button.withConfig({componentId:"sc-23ae9a15-7"})`
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
`,m=o.default.ul.withConfig({componentId:"sc-23ae9a15-8"})`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  list-style: none;
`,k=o.default.li.withConfig({componentId:"sc-23ae9a15-9"})`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  align-items: start;
  padding: 14px 20px;
  border-bottom: 1px solid #f0f0f0;
`,y=o.default.input.attrs({type:"checkbox"}).withConfig({componentId:"sc-23ae9a15-10"})`
  width: 18px;
  height: 18px;
  margin-top: 2px;
  accent-color: #ff8402;
  cursor: pointer;
`,g=o.default.div.withConfig({componentId:"sc-23ae9a15-11"})`
  min-width: 0;
  color: ${({$checked:e})=>e?"#888888":"#333333"};
  text-decoration: ${({$checked:e})=>e?"line-through":"none"};
`,x=o.default.div.withConfig({componentId:"sc-23ae9a15-12"})`
  font-size: 15px;
  font-weight: 600;
  overflow-wrap: anywhere;
`,b=o.default.div.withConfig({componentId:"sc-23ae9a15-13"})`
  margin-top: 4px;
  color: #777777;
  font-size: 13px;
  line-height: 1.35;
`;e.s(["ShoppingListWidget",0,()=>{let[e,o]=(0,a.useState)(!1),r=(0,n.useShoppingListStore)(e=>e.items),v=(0,n.useShoppingListStore)(e=>e.toggleItem),j=(0,n.useShoppingListStore)(e=>e.removeItem),w=(0,n.useShoppingListStore)(e=>e.clearItems),z=r.length>0,C=e&&z;return((0,a.useEffect)(()=>{0===r.length&&e&&o(!1)},[r.length,e]),(0,a.useEffect)(()=>{if(!C)return;let e=e=>{"Escape"===e.key&&o(!1)},i=document.body.style.overflow;return document.body.style.overflow="hidden",window.addEventListener("keydown",e),()=>{document.body.style.overflow=i,window.removeEventListener("keydown",e)}},[C]),z)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s,{type:"button",onClick:()=>o(!0),"aria-label":"Открыть список покупок",children:[(0,i.jsx)(t.LuList,{}),(0,i.jsx)("span",{children:"Список"}),(0,i.jsx)(l,{children:r.length})]}),C&&(0,i.jsx)(c,{onClick:()=>o(!1),children:(0,i.jsxs)(p,{"aria-modal":"true",role:"dialog","aria-labelledby":"shopping-list-title",onClick:e=>e.stopPropagation(),children:[(0,i.jsxs)(d,{children:[(0,i.jsx)(u,{id:"shopping-list-title",children:"Список покупок"}),(0,i.jsxs)(f,{children:[(0,i.jsx)(h,{type:"button",onClick:()=>{w(),o(!1)},"aria-label":"Очистить список",title:"Очистить список",children:(0,i.jsx)(t.LuTrash2,{})}),(0,i.jsx)(h,{type:"button",onClick:()=>o(!1),"aria-label":"Закрыть список",title:"Закрыть",children:(0,i.jsx)(t.LuX,{})})]})]}),(0,i.jsx)(m,{children:r.map(e=>(0,i.jsxs)(k,{children:[(0,i.jsx)(y,{checked:e.checked,onChange:()=>v(e.id),"aria-label":`Отметить ${e.name} купленным`}),(0,i.jsxs)(g,{$checked:e.checked,children:[(0,i.jsx)(x,{children:e.name}),(0,i.jsxs)(b,{children:[e.amount," · ",e.recipeName]})]}),(0,i.jsx)(h,{type:"button",onClick:()=>j(e.id),"aria-label":`Удалить ${e.name}`,children:(0,i.jsx)(t.LuTrash2,{})})]},e.id))})]})})]}):null}])}]);