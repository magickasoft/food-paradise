(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33750,(e,i,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e.r(71645),t=a&&"object"==typeof a&&"default"in a?a.default:a,o=e.r(76822),r=new o,s=r.getBrowser(),l=r.getCPU(),g=r.getDevice(),m=r.getEngine(),d=r.getOS(),u=r.getUA(),p=function(e){return r.setUA(e)},c=function(e){if(!e)return void console.error("No userAgent string was provided");var i=new o(e);return{UA:i,browser:i.getBrowser(),cpu:i.getCPU(),device:i.getDevice(),engine:i.getEngine(),os:i.getOS(),ua:i.getUA(),setUserAgent:function(e){return i.setUA(e)}}},f=Object.freeze({ClientUAInstance:r,browser:s,cpu:l,device:g,engine:m,os:d,ua:u,setUa:p,parseUserAgent:c});function b(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,a)}return n}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(){return(w=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,i){return(y=Object.setPrototypeOf||function(e,i){return e.__proto__=i,e})(e,i)}function v(e,i){if(null==e)return{};var n,a,t=function(e,i){if(null==e)return{};var n,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],i.indexOf(n)>=0||(t[n]=e[n]);return t}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(i.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function k(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e,i){(null==i||i>e.length)&&(i=e.length);for(var n=0,a=Array(i);n<i;n++)a[n]=e[n];return a}var j="mobile",C="tablet",I="smarttv",S="console",U="wearable",O="embedded",$=void 0,P={Chrome:"Chrome",Firefox:"Firefox",Opera:"Opera",Yandex:"Yandex",Safari:"Safari",InternetExplorer:"Internet Explorer",Edge:"Edge",Chromium:"Chromium",Ie:"IE",MobileSafari:"Mobile Safari",EdgeChromium:"Edge Chromium",MIUI:"MIUI Browser",SamsungBrowser:"Samsung Browser"},E={IOS:"iOS",Android:"Android",WindowsPhone:"Windows Phone",Windows:"Windows",MAC_OS:"Mac OS"},M={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},T=function(e){switch(e){case j:return{isMobile:!0};case C:return{isTablet:!0};case I:return{isSmartTV:!0};case S:return{isConsole:!0};case U:return{isWearable:!0};case $:return{isBrowser:!0};case O:return{isEmbedded:!0};default:return M}},A=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||i},q=function(){return"u">typeof window&&(window.navigator||navigator)},D=function(e){var i=q();return i&&i.platform&&(-1!==i.platform.indexOf(e)||"MacIntel"===i.platform&&i.maxTouchPoints>1&&!window.MSStream)},F=function(e){return e.type===j},V=function(e){return e.type===C},N=function(e){var i=e.type;return i===j||i===C},B=function(e){return e.type===I},W=function(e){return e.type===$},R=function(e){return e.type===U},L=function(e){return e.type===S},_=function(e){return e.type===O},K=function(e){return A(e.vendor)},G=function(e){return A(e.model)},Y=function(e){return A(e.type,"browser")},H=function(e){return e.name===E.Android},Z=function(e){return e.name===E.Windows},X=function(e){return e.name===E.MAC_OS},Q=function(e){return e.name===E.WindowsPhone},J=function(e){return e.name===E.IOS},ee=function(e){return A(e.version)},ei=function(e){return A(e.name)},en=function(e){return e.name===P.Chrome},ea=function(e){return e.name===P.Firefox},et=function(e){return e.name===P.Chromium},eo=function(e){return e.name===P.Edge},er=function(e){return e.name===P.Yandex},es=function(e){var i=e.name;return i===P.Safari||i===P.MobileSafari},el=function(e){return e.name===P.MobileSafari},eg=function(e){return e.name===P.Opera},em=function(e){var i=e.name;return i===P.InternetExplorer||i===P.Ie},ed=function(e){return e.name===P.MIUI},eu=function(e){return e.name===P.SamsungBrowser},ep=function(e){return A(e.version)},ec=function(e){return A(e.major)},ef=function(e){return A(e.name)},eb=function(e){return A(e.name)},eh=function(e){return A(e.version)},ew=function(){var e=q(),i=e&&e.userAgent&&e.userAgent.toLowerCase();return"string"==typeof i&&/electron/.test(i)},ex=function(e){return"string"==typeof e&&-1!==e.indexOf("Edg/")},ey=function(){var e=q();return e&&(/iPad|iPhone|iPod/.test(e.platform)||"MacIntel"===e.platform&&e.maxTouchPoints>1)&&!window.MSStream},ev=function(){return D("iPad")},ek=function(){return D("iPhone")},ez=function(){return D("iPod")},ej=function(e){return A(e)};function eC(e){var i=e||f,n=i.device,a=i.browser,t=i.os,o=i.engine,r=i.ua;return{isSmartTV:B(n),isConsole:L(n),isWearable:R(n),isEmbedded:_(n),isMobileSafari:el(a)||ev(),isChromium:et(a),isMobile:N(n)||ev(),isMobileOnly:F(n),isTablet:V(n)||ev(),isBrowser:W(n),isDesktop:W(n),isAndroid:H(t),isWinPhone:Q(t),isIOS:J(t)||ev(),isChrome:en(a),isFirefox:ea(a),isSafari:es(a),isOpera:eg(a),isIE:em(a),osVersion:ee(t),osName:ei(t),fullBrowserVersion:ep(a),browserVersion:ec(a),browserName:ef(a),mobileVendor:K(n),mobileModel:G(n),engineName:eb(o),engineVersion:eh(o),getUA:ej(r),isEdge:eo(a)||ex(r),isYandex:er(a),deviceType:Y(n),isIOS13:ey(),isIPad13:ev(),isIPhone13:ek(),isIPod13:ez(),isElectron:ew(),isEdgeChromium:ex(r),isLegacyEdge:eo(a)&&!ex(r),isWindows:Z(t),isMacOs:X(t),isMIUI:ed(a),isSamsungBrowser:eu(a)}}var eI=B(g),eS=L(g),eU=R(g),eO=_(g),e$=el(s)||ev(),eP=et(s),eE=N(g)||ev(),eM=F(g),eT=V(g)||ev(),eA=W(g),eq=W(g),eD=H(d),eF=Q(d),eV=J(d)||ev(),eN=en(s),eB=ea(s),eW=es(s),eR=eg(s),eL=em(s),e_=ee(d),eK=ei(d),eG=ep(s),eY=ec(s),eH=ef(s),eZ=K(g),eX=G(g),eQ=eb(m),eJ=eh(m),e0=ej(u),e1=eo(s)||ex(u),e2=er(s),e4=Y(g),e3=ey(),e5=ev(),e6=ek(),e8=ez(),e7=ew(),e9=ex(u),ie=eo(s)&&!ex(u),ii=Z(d),ia=X(d),it=ed(s),io=eu(s);function ir(e){return c(e||window.navigator.userAgent)}n.AndroidView=function(e){var i=e.renderWithFragment,n=e.children,o=v(e,["renderWithFragment","children"]);return eD?i?t.createElement(a.Fragment,null,n):t.createElement("div",o,n):null},n.BrowserTypes=P,n.BrowserView=function(e){var i=e.renderWithFragment,n=e.children,o=v(e,["renderWithFragment","children"]);return eA?i?t.createElement(a.Fragment,null,n):t.createElement("div",o,n):null},n.ConsoleView=function(e){var i=e.renderWithFragment,n=e.children,o=v(e,["renderWithFragment","children"]);return eS?i?t.createElement(a.Fragment,null,n):t.createElement("div",o,n):null},n.CustomView=function(e){var i=e.renderWithFragment,n=e.children,o=(e.viewClassName,e.style,e.condition),r=v(e,["renderWithFragment","children","viewClassName","style","condition"]);return o?i?t.createElement(a.Fragment,null,n):t.createElement("div",r,n):null},n.IEView=function(e){var i=e.renderWithFragment,n=e.children,o=v(e,["renderWithFragment","children"]);return eL?i?t.createElement(a.Fragment,null,n):t.createElement("div",o,n):null},n.IOSView=function(e){var i=e.renderWithFragment,n=e.children,o=v(e,["renderWithFragment","children"]);return eV?i?t.createElement(a.Fragment,null,n):t.createElement("div",o,n):null},n.MobileOnlyView=function(e){var i=e.renderWithFragment,n=e.children,o=(e.viewClassName,e.style,v(e,["renderWithFragment","children","viewClassName","style"]));return eM?i?t.createElement(a.Fragment,null,n):t.createElement("div",o,n):null},n.MobileView=function(e){var i=e.renderWithFragment,n=e.children,o=v(e,["renderWithFragment","children"]);return eE?i?t.createElement(a.Fragment,null,n):t.createElement("div",o,n):null},n.OsTypes=E,n.SmartTVView=function(e){var i=e.renderWithFragment,n=e.children,o=v(e,["renderWithFragment","children"]);return eI?i?t.createElement(a.Fragment,null,n):t.createElement("div",o,n):null},n.TabletView=function(e){var i=e.renderWithFragment,n=e.children,o=v(e,["renderWithFragment","children"]);return eT?i?t.createElement(a.Fragment,null,n):t.createElement("div",o,n):null},n.WearableView=function(e){var i=e.renderWithFragment,n=e.children,o=v(e,["renderWithFragment","children"]);return eU?i?t.createElement(a.Fragment,null,n):t.createElement("div",o,n):null},n.WinPhoneView=function(e){var i=e.renderWithFragment,n=e.children,o=v(e,["renderWithFragment","children"]);return eF?i?t.createElement(a.Fragment,null,n):t.createElement("div",o,n):null},n.browserName=eH,n.browserVersion=eY,n.deviceDetect=function(e){var i,n,a,t,o=e?c(e):f,r=o.device,s=o.browser,l=o.engine,g=o.os,m=o.ua,d=T(r.type),u=d.isBrowser,p=d.isMobile,h=d.isTablet,w=d.isSmartTV,x=d.isConsole,y=d.isWearable,v=d.isEmbedded;if(u)return{isBrowser:u,browserMajorVersion:A(s.major),browserFullVersion:A(s.version),browserName:A(s.name),engineName:A(l.name),engineVersion:A(l.version),osName:A(g.name),osVersion:A(g.version),userAgent:A(m)};if(w)return{isSmartTV:w,engineName:A(l.name),engineVersion:A(l.version),osName:A(g.name),osVersion:A(g.version),userAgent:A(m)};if(x)return{isConsole:x,engineName:A(l.name),engineVersion:A(l.version),osName:A(g.name),osVersion:A(g.version),userAgent:A(m)};if(p||h){return i=d,n=r,a=g,t=m,function(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?b(Object(n),!0).forEach(function(i){var a,t,o;a=e,t=i,o=n[i],t in a?Object.defineProperty(a,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[t]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}({},i,{vendor:A(n.vendor),model:A(n.model),os:A(a.name),osVersion:A(a.version),ua:A(t)})}return y?{isWearable:y,engineName:A(l.name),engineVersion:A(l.version),osName:A(g.name),osVersion:A(g.version),userAgent:A(m)}:v?{isEmbedded:v,vendor:A(r.vendor),model:A(r.model),engineName:A(l.name),engineVersion:A(l.version),osName:A(g.name),osVersion:A(g.version),userAgent:A(m)}:void 0},n.deviceType=e4,n.engineName=eQ,n.engineVersion=eJ,n.fullBrowserVersion=eG,n.getSelectorsByUserAgent=function(e){if(!e||"string"!=typeof e)return void console.error("No valid user agent string was provided");var i=c(e);return eC({device:i.device,browser:i.browser,os:i.os,engine:i.engine,ua:i.ua})},n.getUA=e0,n.isAndroid=eD,n.isBrowser=eA,n.isChrome=eN,n.isChromium=eP,n.isConsole=eS,n.isDesktop=eq,n.isEdge=e1,n.isEdgeChromium=e9,n.isElectron=e7,n.isEmbedded=eO,n.isFirefox=eB,n.isIE=eL,n.isIOS=eV,n.isIOS13=e3,n.isIPad13=e5,n.isIPhone13=e6,n.isIPod13=e8,n.isLegacyEdge=ie,n.isMIUI=it,n.isMacOs=ia,n.isMobile=eE,n.isMobileOnly=eM,n.isMobileSafari=e$,n.isOpera=eR,n.isSafari=eW,n.isSamsungBrowser=io,n.isSmartTV=eI,n.isTablet=eT,n.isWearable=eU,n.isWinPhone=eF,n.isWindows=ii,n.isYandex=e2,n.mobileModel=eX,n.mobileVendor=eZ,n.osName=eK,n.osVersion=e_,n.parseUserAgent=c,n.setUserAgent=function(e){return p(e)},n.useDeviceData=ir,n.useDeviceSelectors=function(e){var i=ir(e||window.navigator.userAgent);return[eC(i),i]},n.useMobileOrientation=function(){var e,i=function(e){if(Array.isArray(e))return e}(e=a.useState(function(){var e=90*(window.innerWidth>window.innerHeight);return{isPortrait:0===e,isLandscape:90===e,orientation:0===e?"portrait":"landscape"}}))||function(e){var i,n,a=null==e?null:"u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var t=[],o=!0,r=!1;try{for(a=a.call(e);!(o=(i=a.next()).done)&&(t.push(i.value),2!==t.length);o=!0);}catch(e){r=!0,n=e}finally{try{o||null==a.return||a.return()}finally{if(r)throw n}}return t}}(e)||function(e){if(e){if("string"==typeof e)return z(e,2);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return z(e,2)}}(e)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n=i[0],t=i[1],o=a.useCallback(function(){var e=90*(window.innerWidth>window.innerHeight),i={isPortrait:0===e,isLandscape:90===e,orientation:0===e?"portrait":"landscape"};n.orientation!==i.orientation&&t(i)},[n.orientation]);return a.useEffect(function(){return("u"<typeof window?"undefined":h(window))!==void 0&&eE&&(o(),window.addEventListener("load",o,!1),window.addEventListener("resize",o,!1)),function(){window.removeEventListener("resize",o,!1),window.removeEventListener("load",o,!1)}},[o]),n},n.withOrientationChange=function(e){return function(i){var n;if("function"!=typeof i&&null!==i)throw TypeError("Super expression must either be null or a function");function a(e){var i;if(!(this instanceof a))throw TypeError("Cannot call a class as a function");return(i=function(e,i){if(i&&("object"==typeof i||"function"==typeof i))return i;if(void 0!==i)throw TypeError("Derived constructors may only return object or undefined");return k(e)}(this,x(a).call(this,e))).isEventListenerAdded=!1,i.handleOrientationChange=i.handleOrientationChange.bind(k(i)),i.onOrientationChange=i.onOrientationChange.bind(k(i)),i.onPageLoad=i.onPageLoad.bind(k(i)),i.state={isLandscape:!1,isPortrait:!1},i}return a.prototype=Object.create(i&&i.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),i&&y(a,i),n=[{key:"handleOrientationChange",value:function(){this.isEventListenerAdded||(this.isEventListenerAdded=!0);var e=90*(window.innerWidth>window.innerHeight);this.setState({isPortrait:0===e,isLandscape:90===e})}},{key:"onOrientationChange",value:function(){this.handleOrientationChange()}},{key:"onPageLoad",value:function(){this.handleOrientationChange()}},{key:"componentDidMount",value:function(){("u"<typeof window?"undefined":h(window))!==void 0&&eE&&(this.isEventListenerAdded?window.removeEventListener("load",this.onPageLoad,!1):(this.handleOrientationChange(),window.addEventListener("load",this.onPageLoad,!1)),window.addEventListener("resize",this.onOrientationChange,!1))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onOrientationChange,!1)}},{key:"render",value:function(){return t.createElement(e,w({},this.props,{isLandscape:this.state.isLandscape,isPortrait:this.state.isPortrait}))}}],function(e,i){for(var n=0;n<i.length;n++){var a=i[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}(a.prototype,n),a}(t.Component)}},76822,(e,i,n)=>{!function(a){"use strict";var t="function",o="undefined",r="object",s="string",l="major",g="model",m="name",d="type",u="vendor",p="version",c="architecture",f="console",b="mobile",h="tablet",w="smarttv",x="wearable",y="embedded",v="Amazon",k="Apple",z="ASUS",j="BlackBerry",C="Browser",I="Chrome",S="Firefox",U="Google",O="Honor",$="Huawei",P="Microsoft",E="Motorola",M="Nvidia",T="OnePlus",A="Opera",q="OPPO",D="Samsung",F="Sharp",V="Sony",N="Xiaomi",B="Zebra",W="Facebook",R="Chromium OS",L="Mac OS",_=" Browser",K=function(e,i){var n={};for(var a in e)i[a]&&i[a].length%2==0?n[a]=i[a].concat(e[a]):n[a]=e[a];return n},G=function(e){for(var i={},n=0;n<e.length;n++)i[e[n].toUpperCase()]=e[n];return i},Y=function(e,i){return typeof e===s&&-1!==H(i).indexOf(H(e))},H=function(e){return e.toLowerCase()},Z=function(e,i){if(typeof e===s)return e=e.replace(/^\s\s*/,""),typeof i===o?e:e.substring(0,500)},X=function(e,i){for(var n,a,o,s,l,g,m=0;m<i.length&&!l;){var d=i[m],u=i[m+1];for(n=a=0;n<d.length&&!l&&d[n];)if(l=d[n++].exec(e))for(o=0;o<u.length;o++)g=l[++a],typeof(s=u[o])===r&&s.length>0?2===s.length?typeof s[1]==t?this[s[0]]=s[1].call(this,g):this[s[0]]=s[1]:3===s.length?typeof s[1]!==t||s[1].exec&&s[1].test?this[s[0]]=g?g.replace(s[1],s[2]):void 0:this[s[0]]=g?s[1].call(this,g,s[2]):void 0:4===s.length&&(this[s[0]]=g?s[3].call(this,g.replace(s[1],s[2])):void 0):this[s]=g||void 0;m+=2}},Q=function(e,i){for(var n in i)if(typeof i[n]===r&&i[n].length>0){for(var a=0;a<i[n].length;a++)if(Y(i[n][a],e))return"?"===n?void 0:n}else if(Y(i[n],e))return"?"===n?void 0:n;return i.hasOwnProperty("*")?i["*"]:e},J={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},ee={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[p,[m,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[p,[m,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[m,p],[/opios[\/ ]+([\w\.]+)/i],[p,[m,A+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[p,[m,A+" GX"]],[/\bopr\/([\w\.]+)/i],[p,[m,A]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[p,[m,"Baidu"]],[/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],[p,[m,"Maxthon"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,/(heytap|ovi|115)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[m,p],[/quark(?:pc)?\/([-\w\.]+)/i],[p,[m,"Quark"]],[/\bddg\/([\w\.]+)/i],[p,[m,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[p,[m,"UC"+C]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[p,[m,"WeChat"]],[/konqueror\/([\w\.]+)/i],[p,[m,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[p,[m,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[p,[m,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[p,[m,"Smart Lenovo "+C]],[/(avast|avg)\/([\w\.]+)/i],[[m,/(.+)/,"$1 Secure "+C],p],[/\bfocus\/([\w\.]+)/i],[p,[m,S+" Focus"]],[/\bopt\/([\w\.]+)/i],[p,[m,A+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[p,[m,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[p,[m,"Dolphin"]],[/coast\/([\w\.]+)/i],[p,[m,A+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[p,[m,"MIUI"+_]],[/fxios\/([\w\.-]+)/i],[p,[m,S]],[/\bqihoobrowser\/?([\w\.]*)/i],[p,[m,"360"]],[/\b(qq)\/([\w\.]+)/i],[[m,/(.+)/,"$1Browser"],p],[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],[[m,/(.+)/,"$1"+_],p],[/samsungbrowser\/([\w\.]+)/i],[p,[m,D+" Internet"]],[/metasr[\/ ]?([\d\.]+)/i],[p,[m,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[m,"Sogou Mobile"],p],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],[m,p],[/(lbbrowser|rekonq)/i,/\[(linkedin)app\]/i],[m],[/ome\/([\w\.]+) \w* ?(iron) saf/i,/ome\/([\w\.]+).+qihu (360)[es]e/i],[p,m],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[m,W],p],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/(daum)apps[\/ ]([\w\.]+)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[m,p],[/\bgsa\/([\w\.]+) .*safari\//i],[p,[m,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[p,[m,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[p,[m,I+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[m,I+" WebView"],p],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[p,[m,"Android "+C]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[m,p],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[p,[m,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[p,m],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[m,[p,Q,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[m,p],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[m,"Netscape"],p],[/(wolvic|librewolf)\/([\w\.]+)/i],[m,p],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[p,[m,S+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/\b(links) \(([\w\.]+)/i],[m,[p,/_/g,"."]],[/(cobalt)\/([\w\.]+)/i],[m,[p,/master.|lts./,""]]],cpu:[[/\b((amd|x|x86[-_]?|wow|win)64)\b/i],[[c,"amd64"]],[/(ia32(?=;))/i,/\b((i[346]|x)86)(pc)?\b/i],[[c,"ia32"]],[/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],[[c,"arm64"]],[/\b(arm(v[67])?ht?n?[fl]p?)\b/i],[[c,"armhf"]],[/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],[[c,"arm"]],[/((ppc|powerpc)(64)?)( mac|;|\))/i],[[c,/ower/,"",H]],[/ sun4\w[;\)]/i],[[c,"sparc"]],[/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],[[c,H]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[g,[u,D],[d,h]],[/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]((?!sm-[lr])[-\w]+)/i,/sec-(sgh\w+)/i],[g,[u,D],[d,b]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[g,[u,k],[d,b]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[g,[u,k],[d,h]],[/(macintosh);/i],[g,[u,k]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[g,[u,F],[d,b]],[/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],[g,[u,O],[d,h]],[/honor([-\w ]+)[;\)]/i],[g,[u,O],[d,b]],[/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],[g,[u,$],[d,h]],[/(?:huawei)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[g,[u,$],[d,b]],[/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,/\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],[[g,/_/g," "],[u,N],[d,h]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,/ ([\w ]+) miui\/v?\d/i],[[g,/_/g," "],[u,N],[d,b]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[g,[u,q],[d,b]],[/\b(opd2(\d{3}a?))(?: bui|\))/i],[g,[u,Q,{OnePlus:["304","403","203"],"*":q}],[d,h]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[g,[u,"Vivo"],[d,b]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[g,[u,"Realme"],[d,b]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[g,[u,E],[d,b]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[g,[u,E],[d,h]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[g,[u,"LG"],[d,h]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i,/\blg-?([\d\w]+) bui/i],[g,[u,"LG"],[d,b]],[/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,/lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],[g,[u,"Lenovo"],[d,h]],[/(nokia) (t[12][01])/i],[u,g,[d,h]],[/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,/nokia[-_ ]?(([-\w\. ]*))/i],[[g,/_/g," "],[d,b],[u,"Nokia"]],[/(pixel (c|tablet))\b/i],[g,[u,U],[d,h]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[g,[u,U],[d,b]],[/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[g,[u,V],[d,b]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[g,"Xperia Tablet"],[u,V],[d,h]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[g,[u,T],[d,b]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[g,[u,v],[d,h]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[g,/(.+)/g,"Fire Phone $1"],[u,v],[d,b]],[/(playbook);[-\w\),; ]+(rim)/i],[g,u,[d,h]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[g,[u,j],[d,b]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[g,[u,z],[d,h]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[g,[u,z],[d,b]],[/(nexus 9)/i],[g,[u,"HTC"],[d,h]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[u,[g,/_/g," "],[d,b]],[/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],[g,[u,"TCL"],[d,h]],[/(itel) ((\w+))/i],[[u,H],g,[d,Q,{tablet:["p10001l","w7001"],"*":"mobile"}]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[g,[u,"Acer"],[d,h]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[g,[u,"Meizu"],[d,b]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[g,[u,"Ulefone"],[d,b]],[/; (energy ?\w+)(?: bui|\))/i,/; energizer ([\w ]+)(?: bui|\))/i],[g,[u,"Energizer"],[d,b]],[/; cat (b35);/i,/; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],[g,[u,"Cat"],[d,b]],[/((?:new )?andromax[\w- ]+)(?: bui|\))/i],[g,[u,"Smartfren"],[d,b]],[/droid.+; (a(?:015|06[35]|142p?))/i],[g,[u,"Nothing"],[d,b]],[/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,/archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],[g,[u,"Archos"],[d,h]],[/archos ([\w ]+)( b|\))/i,/; (ac[3-6]\d\w{2,8})( b|\))/i],[g,[u,"Archos"],[d,b]],[/(imo) (tab \w+)/i,/(infinix) (x1101b?)/i],[u,g,[d,h]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,/; (hmd|imo) ([\w ]+?)(?: bui|\))/i,/(hp) ([\w ]+\w)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,/(oppo) ?([\w ]+) bui/i],[u,g,[d,b]],[/(kobo)\s(ereader|touch)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[u,g,[d,h]],[/(surface duo)/i],[g,[u,P],[d,h]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[g,[u,"Fairphone"],[d,b]],[/(u304aa)/i],[g,[u,"AT&T"],[d,b]],[/\bsie-(\w*)/i],[g,[u,"Siemens"],[d,b]],[/\b(rct\w+) b/i],[g,[u,"RCA"],[d,h]],[/\b(venue[\d ]{2,7}) b/i],[g,[u,"Dell"],[d,h]],[/\b(q(?:mv|ta)\w+) b/i],[g,[u,"Verizon"],[d,h]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[g,[u,"Barnes & Noble"],[d,h]],[/\b(tm\d{3}\w+) b/i],[g,[u,"NuVision"],[d,h]],[/\b(k88) b/i],[g,[u,"ZTE"],[d,h]],[/\b(nx\d{3}j) b/i],[g,[u,"ZTE"],[d,b]],[/\b(gen\d{3}) b.+49h/i],[g,[u,"Swiss"],[d,b]],[/\b(zur\d{3}) b/i],[g,[u,"Swiss"],[d,h]],[/\b((zeki)?tb.*\b) b/i],[g,[u,"Zeki"],[d,h]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[u,"Dragon Touch"],g,[d,h]],[/\b(ns-?\w{0,9}) b/i],[g,[u,"Insignia"],[d,h]],[/\b((nxa|next)-?\w{0,9}) b/i],[g,[u,"NextBook"],[d,h]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[u,"Voice"],g,[d,b]],[/\b(lvtel\-)?(v1[12]) b/i],[[u,"LvTel"],g,[d,b]],[/\b(ph-1) /i],[g,[u,"Essential"],[d,b]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[g,[u,"Envizen"],[d,h]],[/\b(trio[-\w\. ]+) b/i],[g,[u,"MachSpeed"],[d,h]],[/\btu_(1491) b/i],[g,[u,"Rotor"],[d,h]],[/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],[g,[u,M],[d,h]],[/(sprint) (\w+)/i],[u,g,[d,b]],[/(kin\.[onetw]{3})/i],[[g,/\./g," "],[u,P],[d,b]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[g,[u,B],[d,h]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[g,[u,B],[d,b]],[/smart-tv.+(samsung)/i],[u,[d,w]],[/hbbtv.+maple;(\d+)/i],[[g,/^/,"SmartTV"],[u,D],[d,w]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[u,"LG"],[d,w]],[/(apple) ?tv/i],[u,[g,k+" TV"],[d,w]],[/crkey/i],[[g,I+"cast"],[u,U],[d,w]],[/droid.+aft(\w+)( bui|\))/i],[g,[u,v],[d,w]],[/(shield \w+ tv)/i],[g,[u,M],[d,w]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[g,[u,F],[d,w]],[/(bravia[\w ]+)( bui|\))/i],[g,[u,V],[d,w]],[/(mi(tv|box)-?\w+) bui/i],[g,[u,N],[d,w]],[/Hbbtv.*(technisat) (.*);/i],[u,g,[d,w]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[u,Z],[g,Z],[d,w]],[/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],[g,[d,w]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[d,w]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[u,g,[d,f]],[/droid.+; (shield)( bui|\))/i],[g,[u,M],[d,f]],[/(playstation \w+)/i],[g,[u,V],[d,f]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[g,[u,P],[d,f]],[/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],[g,[u,D],[d,x]],[/((pebble))app/i,/(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],[u,g,[d,x]],[/(ow(?:19|20)?we?[1-3]{1,3})/i],[g,[u,q],[d,x]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[g,[u,k],[d,x]],[/(opwwe\d{3})/i],[g,[u,T],[d,x]],[/(moto 360)/i],[g,[u,E],[d,x]],[/(smartwatch 3)/i],[g,[u,V],[d,x]],[/(g watch r)/i],[g,[u,"LG"],[d,x]],[/droid.+; (wt63?0{2,3})\)/i],[g,[u,B],[d,x]],[/droid.+; (glass) \d/i],[g,[u,U],[d,x]],[/(pico) (4|neo3(?: link|pro)?)/i],[u,g,[d,x]],[/; (quest( \d| pro)?)/i],[g,[u,W],[d,x]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[u,[d,y]],[/(aeobc)\b/i],[g,[u,v],[d,y]],[/(homepod).+mac os/i],[g,[u,k],[d,y]],[/windows iot/i],[[d,y]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[g,[d,b]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[g,[d,h]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[d,h]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[d,b]],[/droid .+?; ([\w\. -]+)( bui|\))/i],[g,[u,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[p,[m,"EdgeHTML"]],[/(arkweb)\/([\w\.]+)/i],[m,p],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[p,[m,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[m,p],[/ladybird\//i],[[m,"LibWeb"]],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[p,m]],os:[[/microsoft (windows) (vista|xp)/i],[m,p],[/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],[m,[p,Q,J]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[p,Q,J],[m,"Windows"]],[/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[p,/_/g,"."],[m,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[m,L],[p,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[p,m],[/(ubuntu) ([\w\.]+) like android/i],[[m,/(.+)/,"$1 Touch"],p],[/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],[m,p],[/\(bb(10);/i],[p,[m,j]],[/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],[p,[m,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[p,[m,S+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[p,[m,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[p,[m,"watchOS"]],[/crkey\/([\d\.]+)/i],[p,[m,I+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[m,R],p],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[m,p],[/(sunos) ?([\w\.\d]*)/i],[[m,"Solaris"],p],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[m,p]]},ei=function(e,i){if(typeof e===r&&(i=e,e=void 0),!(this instanceof ei))return new ei(e,i).getResult();var n=typeof a!==o&&a.navigator?a.navigator:void 0,f=e||(n&&n.userAgent?n.userAgent:""),w=n&&n.userAgentData?n.userAgentData:void 0,x=i?K(ee,i):ee,y=n&&n.userAgent==f;return this.getBrowser=function(){var e,i={};return i[m]=void 0,i[p]=void 0,X.call(i,f,x.browser),i[l]=typeof(e=i[p])===s?e.replace(/[^\d\.]/g,"").split(".")[0]:void 0,y&&n&&n.brave&&typeof n.brave.isBrave==t&&(i[m]="Brave"),i},this.getCPU=function(){var e={};return e[c]=void 0,X.call(e,f,x.cpu),e},this.getDevice=function(){var e={};return e[u]=void 0,e[g]=void 0,e[d]=void 0,X.call(e,f,x.device),y&&!e[d]&&w&&w.mobile&&(e[d]=b),y&&"Macintosh"==e[g]&&n&&typeof n.standalone!==o&&n.maxTouchPoints&&n.maxTouchPoints>2&&(e[g]="iPad",e[d]=h),e},this.getEngine=function(){var e={};return e[m]=void 0,e[p]=void 0,X.call(e,f,x.engine),e},this.getOS=function(){var e={};return e[m]=void 0,e[p]=void 0,X.call(e,f,x.os),y&&!e[m]&&w&&w.platform&&"Unknown"!=w.platform&&(e[m]=w.platform.replace(/chrome os/i,R).replace(/macos/i,L)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return f},this.setUA=function(e){return f=typeof e===s&&e.length>500?Z(e,500):e,this},this.setUA(f),this};if(ei.VERSION="1.0.41",ei.BROWSER=G([m,p,l]),ei.CPU=G([c]),ei.DEVICE=G([g,u,d,f,b,w,h,x,y]),ei.ENGINE=ei.OS=G([m,p]),typeof n!==o)i.exports&&(n=i.exports=ei),n.UAParser=ei;else if(typeof define===t&&define.amd)e.r,void 0!==ei&&e.v(ei);else typeof a!==o&&(a.UAParser=ei);var en=typeof a!==o&&(a.jQuery||a.Zepto);if(en&&!en.ua){var ea=new ei;en.ua=ea.getResult(),en.ua.get=function(){return ea.getUA()},en.ua.set=function(e){ea.setUA(e);var i=ea.getResult();for(var n in i)en.ua[n]=i[n]}}}("object"==typeof window?window:e.e)},83685,e=>{"use strict";var i=e.i(43476),n=e.i(97053),a=e.i(41582),t=e.i(95631),o=e.i(4529),r=e.i(92199),s=e.i(53070);let l=n.U.div.withConfig({componentId:"sc-bb5602da-0"})`
  width: 100%;
  max-width: 680px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin: 0 0 10px;

  @media ${o.R.laptop} {
    gap: 8px;
  }
`,g=n.U.div.withConfig({componentId:"sc-bb5602da-1"})`
  min-height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding: 10px 13px;
  border-radius: 999px;
  background: #fffaf5;
  box-shadow: inset 0 0 0 1px rgba(255, 132, 2, 0.12);
  color: #6b3d08;
`,m=n.U.span.withConfig({componentId:"sc-bb5602da-2"})`
  width: 18px;
  height: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #ff8402;

  svg {
    width: 17px;
    height: 17px;
  }
`,d=n.U.span.withConfig({componentId:"sc-bb5602da-3"})`
  font-size: 0.92rem;
  line-height: 1;
  font-weight: 700;
  color: #2c2118;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`,u=n.U.span.withConfig({componentId:"sc-bb5602da-4"})`
  font-size: 0.82rem;
  line-height: 1;
  color: #8b7662;
`,p=({rating:e,commentsCount:n,preparation:a,time:t,calories:o})=>{let p=[{icon:(0,i.jsx)(r.q,{}),value:e,gauge:`(${n})`},{icon:(0,i.jsx)(s.V,{}),value:a?`${a}`:"—",gauge:"мин подготовки"},{icon:(0,i.jsx)(r.T,{}),value:`${t}`,gauge:"мин всего"},{icon:(0,i.jsx)(r.u,{}),value:o?`${o}`:"—",gauge:"ккал"}].filter(e=>"—"!==e.value);return(0,i.jsx)(l,{children:p.map((e,n)=>(0,i.jsxs)(g,{children:[(0,i.jsx)(m,{children:e.icon}),(0,i.jsx)(d,{children:e.value}),(0,i.jsx)(u,{children:e.gauge})]},n))})};var c=e.i(71645),f=e.i(40141);function b(e){return(0,f.f)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M349.6 64c-36.4 0-70.7 16.7-93.6 43.9C233.1 80.7 198.8 64 162.4 64 97.9 64 48 114.2 48 179.1c0 79.5 70.7 143.3 177.8 241.7L256 448l30.2-27.2C393.3 322.4 464 258.6 464 179.1 464 114.2 414.1 64 349.6 64zm-80.8 329.3l-4.2 3.9-8.6 7.8-8.6-7.8-4.2-3.9c-50.4-46.3-94-86.3-122.7-122-28-34.7-40.4-63.1-40.4-92.2 0-22.9 8.4-43.9 23.7-59.3 15.2-15.4 36-23.8 58.6-23.8 26.1 0 52 12.2 69.1 32.5l24.5 29.1 24.5-29.1c17.1-20.4 43-32.5 69.1-32.5 22.6 0 43.4 8.4 58.7 23.8 15.3 15.4 23.7 36.5 23.7 59.3 0 29-12.5 57.5-40.4 92.2-28.8 35.7-72.3 75.7-122.8 122z"},child:[]}]})(e)}let h=n.U.div.withConfig({componentId:"sc-43faa96-0"})`
  width: 100%;
  max-width: 680px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  padding: 8px 0 14px;
  margin: 0;

  @media ${o.R.laptop} {
    align-items: stretch;
  }
`,w=54,x=50,y="0 28px",v="0 22px",k=16,z=14,j="0 16px 30px rgba(231, 94, 2, 0.24)",C=n.U.a.withConfig({componentId:"sc-43faa96-1"})`
  display: inline-flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  height: ${w}px;
  padding: ${y};
  font-size: ${k}px;
  font-weight: 700;
  color: #ffffff;
  background: ${"linear-gradient(135deg, #e75e02 0%, #ff8402 58%, #ffad3d 100%);"};
  border-radius: 16px;
  transition: all 0.25s ease;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  background-size: 200% 100%;

  &:hover {
    background-position: 100% 0;
    transform: translateY(-2px) scale(1.01);
    box-shadow: ${j};
  }

  @media ${o.R.laptop} {
    height: ${x}px;
    font-size: ${z}px;
    padding: ${v};
  }

  @media ${o.R.mobileL} {
    width: 100%;
    justify-content: center;
  }
`,I=n.U.button.withConfig({componentId:"sc-43faa96-2"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 54px;
  height: 54px;
  background: #fffaf5;
  border: 1px solid rgba(255, 132, 2, 0.16);
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.25s ease;
  color: #7c6958;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: ${j};
    border-color: #ff8402;
    color: #ff8402;
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @media ${o.R.laptop} {
    width: 50px;
    height: 50px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`,S=n.U.div.withConfig({componentId:"sc-43faa96-3"})`
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 1000;
  max-width: min(320px, calc(100vw - 32px));
  padding: 12px 16px;
  border-radius: 14px;
  background: #241b14;
  color: #ffffff;
  font-size: 14px;
  line-height: 1.4;
  box-shadow: 0 16px 34px rgba(36, 27, 20, 0.22);
  opacity: ${({$visible:e})=>+!!e};
  pointer-events: none;
  transform: translateY(${({$visible:e})=>e?"0":"10px"});
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;

  @media ${o.R.mobileL} {
    right: 16px;
    bottom: 16px;
    left: 16px;
  }
`,U=()=>{let[e,n]=(0,c.useState)(""),[a,t]=(0,c.useState)(!1);(0,c.useEffect)(()=>{if(!e)return;let i=window.setTimeout(()=>{n(""),t(!1)},2500);return()=>window.clearTimeout(i)},[e]);let o=async()=>!!navigator.clipboard&&(await navigator.clipboard.writeText(window.location.href),!0),l=async()=>{let e=navigator.userAgent,i=navigator.platform||e,a=/iPhone|iPad|iPod/i.test(i)||/Mac/i.test(i)&&navigator.maxTouchPoints>1,t=/Android/i.test(e),r=a||t||/Mobi/i.test(e),s=/Mac/i.test(i),l=a?"Нажмите «Поделиться» и выберите «Добавить в закладки».":t?"Откройте меню браузера и выберите «Добавить в закладки».":r?"Откройте меню браузера и добавьте страницу в закладки.":`Нажмите ${s?"⌘D":"Ctrl+D"}, чтобы добавить рецепт в закладки браузера.`;try{await o(),n(`Ссылка скопирована. ${l}`)}catch{n(l)}},g=async()=>{if(navigator.share){try{await navigator.share({title:document.title,url:window.location.href})}catch{}return}try{await o(),t(!0),n("Ссылка скопирована в буфер обмена.")}catch{n("Не удалось скопировать ссылку. Скопируйте адрес страницы из браузера.")}};return(0,i.jsxs)(h,{children:[(0,i.jsx)(C,{href:"#cooking-steps",title:"Начать готовить","aria-label":"Начать готовить",rel:"noopener noreferrer nofollow",children:"Начать готовить"}),(0,i.jsx)(I,{onClick:l,title:"Добавить в закладки","aria-label":"Добавить в закладки",children:(0,i.jsx)(b,{})}),(0,i.jsx)(I,{onClick:g,title:"Поделиться","aria-label":"Поделиться",children:a?(0,i.jsx)(r.g,{}):(0,i.jsx)(s.x,{})}),(0,i.jsx)(S,{$visible:!!e,role:"status","aria-live":"polite",children:e})]})},O=n.U.div.withConfig({componentId:"sc-2d704074-0"})`
  max-width: 1280px;
  margin: 0 auto;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
  padding: 24px 0 42px;

  @media ${o.R.laptop} {
    padding: 12px 16px 30px;
  }

  @media ${o.R.mobileL} {
    padding: 12px 12px 28px;
  }
`,$=n.U.header.withConfig({componentId:"sc-2d704074-1"})`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(360px, 0.82fr);
  gap: 36px;
  align-items: center;

  @media ${o.R.laptop} {
    grid-template-columns: 1fr;
    gap: 22px;
  }
`,P=n.U.article.withConfig({componentId:"sc-2d704074-2"})`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 12px 0;

  @media ${o.R.laptop} {
    order: 2;
  }
`,E=n.U.article.withConfig({componentId:"sc-2d704074-3"})`
  position: relative;
  display: flex;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 24px;
  background: #f4eee6;
  box-shadow: 0 24px 60px rgba(48, 34, 24, 0.18);

  @media ${o.R.laptop} {
    aspect-ratio: 1.5 / 1;
    order: 1;
    width: calc(100% + 32px);
    margin: -12px -16px 0;
    border-radius: 0 0 20px 20px;
  }

  @media ${o.R.mobileL} {
    width: calc(100% + 24px);
    margin: -12px -12px 0;
    border-radius: 0 0 20px 20px;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 48%, rgba(42, 24, 10, 0.18) 100%);
    pointer-events: none;
  }
`,M=n.U.img.withConfig({componentId:"sc-2d704074-4"})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.01);
`,T=n.U.article.withConfig({componentId:"sc-2d704074-5"})`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #fff7ed, #ead9c7);
  color: #9a7954;
  font-size: 1.2rem;
  font-weight: 500;
  font-style: italic;
  display: flex;
  align-items: center;
  justify-content: center;
`,A=n.U.h1.withConfig({componentId:"sc-2d704074-6"})`
  max-width: 760px;
  margin-bottom: 18px;
  line-height: 1.05;
  text-align: left;
  font-size: clamp(2.15rem, 4vw, 4.5rem);
  letter-spacing: 0;
  color: #211a15;

  @media ${o.R.laptop} {
    max-width: 100%;
  }
`,q=n.U.article.withConfig({componentId:"sc-2d704074-7"})`
  max-width: 680px;
  margin-top: 8px;
  font-size: 1.05rem;
  line-height: 1.75;
  text-align: left;
  color: #65594f;

  @media ${o.R.laptop} {
    font-size: 0.9rem;
    line-height: 1.65;
  }
`;function D({recipe:e}){return(0,i.jsx)(O,{children:e?(0,i.jsxs)($,{children:[(0,i.jsxs)(P,{children:[(0,i.jsx)(A,{children:e.title}),(0,i.jsx)(p,{rating:e.rating,commentsCount:e.comments?e.comments.length:0,preparation:e.preparation,time:e.time,calories:e.calories}),(0,i.jsx)(U,{}),(0,i.jsx)(q,{children:e.description})]}),(0,i.jsx)(E,{children:e.img?(0,i.jsx)(M,{src:e.img,alt:e.name}):(0,i.jsx)(T,{children:"Нет изображения"})})]}):(0,i.jsx)(A,{children:"Recipe not found"})})}let F=n.U.h2.withConfig({componentId:"sc-7025c96b-0"})`
  font-size: 1.1rem;
  line-height: 1.4;
  font-weight: 700;
  margin-bottom: 0;
  width: 100%;
  color: #241b14;
  padding: 16px 18px 12px;
  border-bottom: 1px solid #f1e8df;
`;function V({children:e}){return(0,i.jsx)(F,{children:e})}var N=e.i(60777),B=e.i(50506);let W=n.U.section.withConfig({componentId:"sc-776cbdbe-0"})`
  width: 100%;
  max-width: 1280px;
  margin: 44px auto 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 28px 0 30px;
  padding-bottom: 30px;
`;function R({recipes:e}){return void 0===e||e?.length===0?null:(0,i.jsxs)(W,{children:[(0,i.jsx)(V,{children:"Попробуйте также"}),(0,i.jsx)(N.f,{children:e.map(({key:e,name:n,...a})=>(0,i.jsx)(B.f,{name:n,recipeKey:e,...a},e||n))})]})}let L=n.U.div.withConfig({componentId:"sc-91da13b8-0"})`
  max-height: ${({$isOpen:e})=>e?"2000px":"0"};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: ${({$isOpen:e})=>e?"20px":"0"};
  padding-top: ${({$isOpen:e})=>e?"8px":"0"};
  margin: 0;
  list-style: none;
  width: 100%;
`,_=n.U.li.withConfig({componentId:"sc-91da13b8-1"})`
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #f0f0f0;
  gap: 10px;
  padding: 12px 4px;
  border-radius: 6px;
  font-size: 0.92rem;
  line-height: 1.55;
  color: #5f554d;

  &:last-child {
    border-bottom: none;
  }
`;function K({tips:e,isOpen:n}){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(L,{$isOpen:n,children:e.map((e,n)=>(0,i.jsx)(_,{children:e},n))})})}var G=e.i(33750);let Y=n.U.section.withConfig({componentId:"sc-3f9d3770-0"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 1rem;
  background: #fffaf0;
  border-radius: 18px;
  box-shadow: inset 0 0 0 1px rgba(255, 204, 0, 0.16);
  line-height: 1.6;
  color: #5f554d;

  @media ${o.R.laptop} {
    flex-direction: column;
    padding: 0px;
    max-width: 100%;
  }
`,H=n.U.button.withConfig({componentId:"sc-3f9d3770-1"})`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 54px;
  padding: 15px 18px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  transition: background 0.2s;
  border-bottom: ${({$isOpen:e})=>e?"1px solid rgba(255, 204, 0, 0.18)":"none"};

  &:hover {
    background: rgba(255, 255, 255, 0.42);
    border-radius: ${({$isOpen:e})=>e?"18px 18px 0 0":"18px"};
  }
`,Z=n.U.div.withConfig({componentId:"sc-3f9d3770-2"})`
  display: flex;
  align-items: center;
  gap: 12px;
`,X=n.U.span.withConfig({componentId:"sc-3f9d3770-3"})`
  color: #4f3a18;
`,Q=n.U.span.withConfig({componentId:"sc-3f9d3770-4"})`
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0deg)"};
  color: #333;
  transition: transform 0.3s;
  font-size: 20px;
`;function J({tips:e}){let[n,a]=(0,c.useState)(!1);return((0,c.useEffect)(()=>{a(!G.isMobile)},[G.isMobile]),e&&e.length>0)?(0,i.jsxs)(Y,{children:[(0,i.jsxs)(H,{onClick:()=>a(!n),$isOpen:n,children:[(0,i.jsx)(Z,{children:(0,i.jsx)(X,{children:"Советы"})}),(0,i.jsx)(Q,{$isOpen:n,children:"▼"})]}),(0,i.jsx)(K,{isOpen:n,tips:e})]}):null}let ee=n.U.ul.withConfig({componentId:"sc-cfc4c557-0"})`
  max-height: ${({$isOpen:e})=>e?"2000px":"0"};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: ${({$isOpen:e})=>e?"20px":"0"};
  padding-top: ${({$isOpen:e})=>e?"8px":"0"};
  margin: 0;
  list-style: none;
  width: 100%;
`,ei=n.U.li.withConfig({componentId:"sc-cfc4c557-1"})`
  padding: 12px 4px;
  border-bottom: 1px solid #f0f0f0;
  color: #4c5563;
  font-size: 0.92rem;
  line-height: 1.55;

  &:last-child {
    border-bottom: none;
  }
`,en=n.U.strong.withConfig({componentId:"sc-cfc4c557-2"})`
  display: inline-block;
  background: #e9f0ff;
  padding: 3px 8px;
  border-radius: 999px;
  margin-bottom: 4px;
  font-size: 0.9rem;
  color: #233553;
`;function ea({variations:e,isOpen:n}){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(ee,{$isOpen:n,children:e.map((e,n)=>(0,i.jsxs)(ei,{children:[(0,i.jsx)(en,{children:e.name}),(0,i.jsx)("div",{children:e.changes})]},n))})})}let et=n.U.section.withConfig({componentId:"sc-bf2e0646-0"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: #f7faff;
  border-radius: 18px;
  box-shadow: inset 0 0 0 1px rgba(130, 162, 216, 0.2);
  font-size: 1rem;
  line-height: 1.6;
  color: #4c5563;

  @media ${o.R.laptop} {
    flex-direction: column;
    padding: 0px;
  }
`,eo=n.U.button.withConfig({componentId:"sc-bf2e0646-1"})`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 54px;
  padding: 15px 18px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  transition: background 0.2s;
  border-bottom: ${({$isOpen:e})=>e?"1px solid rgba(130, 162, 216, 0.2)":"none"};

  &:hover {
    background: rgba(255, 255, 255, 0.48);
    border-radius: ${({$isOpen:e})=>e?"18px 18px 0 0":"18px"};
  }
`,er=n.U.div.withConfig({componentId:"sc-bf2e0646-2"})`
  display: flex;
  align-items: center;
  gap: 12px;
`,es=n.U.span.withConfig({componentId:"sc-bf2e0646-3"})`
  color: #233553;
`,el=n.U.span.withConfig({componentId:"sc-bf2e0646-4"})`
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0deg)"};
  color: #333;
  transition: transform 0.3s;
  font-size: 20px;
`;function eg({variations:e}){let[n,a]=(0,c.useState)(!1);return((0,c.useEffect)(()=>{a(!G.isMobile)},[G.isMobile]),e&&e.length>0)?(0,i.jsxs)(et,{children:[(0,i.jsxs)(eo,{onClick:()=>a(!n),$isOpen:n,children:[(0,i.jsx)(er,{children:(0,i.jsx)(es,{children:"Вариации"})}),(0,i.jsx)(el,{$isOpen:n,children:"▼"})]}),(0,i.jsx)(ea,{variations:e,isOpen:n})]}):null}let em=n.U.li.withConfig({componentId:"sc-8d123e7c-0"})`
  max-height: ${({$isOpen:e})=>e?"260px":"0"};
  display: flex;
  overflow: auto;
  flex-direction: column;
  padding: 0;
  margin: 0;
  padding: ${({$isOpen:e})=>e?"12px 24px":"0"};
  padding-bottom: ${({$isOpen:e})=>e?"24px":"0"};
  list-style: none;
  width: 100%;
  border-radius: 6px;
  color: #5f554d;
  font-size: 0.92rem;
  line-height: 1.65;
`;function ed({isOpen:e,history:n}){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(em,{$isOpen:e,children:n})})}let eu=n.U.section.withConfig({componentId:"sc-5adc3107-0"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: #fbf7f1;
  border-radius: 18px;
  box-shadow: inset 0 0 0 1px rgba(91, 70, 47, 0.1);
  font-size: 1rem;
  line-height: 1.6;
  color: #5f554d;

  @media ${o.R.laptop} {
    flex-direction: column;
    padding: 0px;
  }
`,ep=n.U.button.withConfig({componentId:"sc-5adc3107-1"})`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 54px;
  padding: 15px 18px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  transition: background 0.2s;
  border-bottom: ${({$isOpen:e})=>e?"1px solid rgba(91, 70, 47, 0.1)":"none"};

  &:hover {
    background: rgba(255, 255, 255, 0.45);
    border-radius: ${({$isOpen:e})=>e?"18px 18px 0 0":"18px"};
  }
`,ec=n.U.div.withConfig({componentId:"sc-5adc3107-2"})`
  display: flex;
  align-items: center;
  gap: 12px;
`,ef=n.U.span.withConfig({componentId:"sc-5adc3107-3"})`
  color: #463322;
`,eb=n.U.span.withConfig({componentId:"sc-5adc3107-4"})`
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0deg)"};
  color: #333;
  transition: transform 0.3s;
  font-size: 20px;
`;function eh({history:e}){let[n,a]=(0,c.useState)(!1);return((0,c.useEffect)(()=>{a(!G.isMobile)},[G.isMobile]),e)?(0,i.jsxs)(eu,{children:[(0,i.jsxs)(ep,{onClick:()=>a(!n),$isOpen:n,children:[(0,i.jsx)(ec,{children:(0,i.jsx)(ef,{children:"История"})}),(0,i.jsx)(eb,{$isOpen:n,children:"▼"})]}),(0,i.jsx)(ed,{isOpen:n,history:e})]}):null}var ew=e.i(11152);let ex=n.U.div.withConfig({componentId:"sc-bf06a306-0"})`
  width: 100%;
  margin-top: 12px;
`,ey=n.U.h3.withConfig({componentId:"sc-bf06a306-1"})`
  font-size: 20px;
  font-weight: 700;
  color: #241b14;
  margin-bottom: 16px;

  @media ${o.R.laptop} {
    padding: 0 4px;
  }
`,ev=n.U.div.withConfig({componentId:"sc-bf06a306-2"})`
  background: #ffffff;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 14px 40px rgba(44, 31, 20, 0.08);
`,ek=n.U.div.withConfig({componentId:"sc-bf06a306-3"})`
  display: flex;
  gap: 6px;
  margin-bottom: 18px;
`,ez=n.U.button.withConfig({componentId:"sc-bf06a306-4"})`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  min-width: 44px;
  min-height: 44px;

  svg {
    font-size: 22px;
    color: ${({active:e})=>e?"#FFA500":"#E0E0E0"};
    transition: color 0.2s ease;
  }

  &:hover svg {
    color: #ffb84d;
  }
`,ej=n.U.form.withConfig({componentId:"sc-bf06a306-5"})`
  display: flex;
  flex-direction: column;
  width: 100%;
`,eC=n.U.textarea.withConfig({componentId:"sc-bf06a306-6"})`
  width: 100%;
  min-height: 132px;
  background: #fffaf5;
  border: 1px solid #efe2d6;
  border-radius: 16px;
  padding: 16px;
  font-size: 14px;
  line-height: 1.6;
  color: #333;
  resize: vertical;
  outline: none;
  transition: all 0.2s ease;

  &::placeholder {
    color: #9b9b9b;
  }

  &:focus {
    background: #fff;
    border-color: #ffbd76;
    box-shadow: 0 0 0 4px rgba(255, 132, 2, 0.1);
  }
`,eI=n.U.div.withConfig({componentId:"sc-bf06a306-7"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  margin-top: 12px;

  @media (max-width: 768px) {
    align-items: stretch;
    flex-direction: column;
  }
`,eS=n.U.div.withConfig({componentId:"sc-bf06a306-8"})`
  font-size: 12px;
  color: #9b9b9b;
`,eU=n.U.button.withConfig({componentId:"sc-bf06a306-9"})`
  min-height: 44px;
  background: linear-gradient(135deg, #e75e02, #ff8402);
  color: white;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 14px;
  padding: 10px 22px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 12px 26px rgba(231, 94, 2, 0.2);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,eO=n.U.input.withConfig({componentId:"sc-bf06a306-10"})`
  display: none;
`,e$=n.U.div.withConfig({componentId:"sc-bf06a306-11"})`
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%) translateY(${({visible:e})=>e?"0":"20px"});

  background: #1c1c1c;
  color: #fff;
  font-size: 14px;
  padding: 12px 20px;
  border-radius: 10px;

  opacity: ${({visible:e})=>+!!e};
  pointer-events: none;

  transition: all 0.3s ease;
  z-index: 1000;
`,eP=({recipe:e})=>{let[n,a]=(0,c.useState)(0),[t,o]=(0,c.useState)(null),[r,s]=(0,c.useState)(""),[l,g]=(0,c.useState)("");(0,c.useEffect)(()=>{if(!l)return;let e=setTimeout(()=>{g("")},5e3);return()=>clearTimeout(e)},[l]);let m=async e=>{e.preventDefault(),a(0),s(""),g("Спасибо за ваш отзыв.")};return(0,i.jsxs)(ex,{children:[(0,i.jsx)(ey,{children:"Оцените рецепт"}),(0,i.jsxs)(ev,{children:[(0,i.jsx)(ek,{children:[1,2,3,4,5].map(e=>(0,i.jsx)(ez,{active:e<=(t??n),onClick:()=>a(e),onMouseEnter:()=>o(e),onMouseLeave:()=>o(null),children:(0,i.jsx)(ew.H,{})},e))}),(0,i.jsxs)(ej,{onSubmit:m,children:[(0,i.jsx)(eO,{type:"hidden",name:"recipe",value:e}),(0,i.jsx)(eC,{value:r,onChange:e=>s(e.target.value.slice(0,300)),placeholder:"Ваш комментарий поможет нам сделать рецепт лучше!"}),(0,i.jsxs)(eI,{children:[(0,i.jsxs)(eS,{children:["Осталось ",300-r.length]}),(0,i.jsx)(eU,{type:"submit",children:"Отправить"})]})]})]}),(0,i.jsx)(e$,{visible:!!l,children:l})]})},eE=n.U.div.withConfig({componentId:"sc-ccad5bb6-0"})`
  width: 100%;
  margin-top: 18px;
`,eM=n.U.h4.withConfig({componentId:"sc-ccad5bb6-1"})`
  font-size: 20px;
  font-weight: 700;
  color: #241b14;
  margin-bottom: 16px;

  @media ${o.R.laptop} {
    padding: 0 4px;
  }
`,eT=n.U.div.withConfig({componentId:"sc-ccad5bb6-2"})`
  background: #ffffff;
  border-radius: 20px;
  padding: 8px;
  box-shadow: 0 14px 40px rgba(44, 31, 20, 0.08);
`,eA=n.U.div.withConfig({componentId:"sc-ccad5bb6-3"})`
  display: flex;
  gap: 12px;
  padding: 18px;
  border-radius: 16px;

  &:not(:last-child) {
    border-bottom: 1px solid #f3ece4;
  }
`,eq=n.U.img.withConfig({componentId:"sc-ccad5bb6-4"})`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`,eD=n.U.div.withConfig({componentId:"sc-ccad5bb6-5"})`
  display: flex;
  flex-direction: column;
`,eF=n.U.div.withConfig({componentId:"sc-ccad5bb6-6"})`
  display: flex;
  align-items: center;
  gap: 10px;
`,eV=n.U.span.withConfig({componentId:"sc-ccad5bb6-7"})`
  font-weight: 600;
  color: #1c1c1c;
`,eN=n.U.div.withConfig({componentId:"sc-ccad5bb6-8"})`
  display: flex;
  gap: 2px;
`,eB=n.U.p.withConfig({componentId:"sc-ccad5bb6-9"})`
  font-size: 14px;
  line-height: 1.6;
  color: #5f554d;
  margin: 8px 0 0;
`,eW=n.U.div.withConfig({componentId:"sc-ccad5bb6-10"})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 15px;
  color: #7c6958;
  background: #fffaf5;
  border-radius: 20px;
  padding: 28px;
  text-align: center;
  box-shadow: inset 0 0 0 1px rgba(255, 132, 2, 0.12);

  svg {
    width: 22px;
    height: 22px;
    color: #ff8402;
  }
`,eR=({list:e})=>(0,i.jsxs)(eE,{children:[(0,i.jsx)(eM,{children:"Комментарии"}),e&&e.length>0?(0,i.jsx)(eT,{children:e.map(e=>(0,i.jsxs)(eA,{children:[e.avatar?(0,i.jsx)(eq,{src:e.avatar,alt:e.name}):null,(0,i.jsxs)(eD,{children:[(0,i.jsxs)(eF,{children:[(0,i.jsx)(eV,{children:e.name}),(0,i.jsx)(eN,{children:[void 0,void 0,void 0,void 0,void 0].map((n,a)=>(0,i.jsx)(ew.H,{size:14,color:a<e.rating?"#FFA500":"#E0E0E0"},a))})]}),(0,i.jsx)(eB,{children:e.text})]})]},e.id))}):(0,i.jsxs)(eW,{children:[(0,i.jsx)(r.i,{}),(0,i.jsx)("span",{children:"Пока нет комментариев — будьте первым!"})]})]}),eL=n.U.p.withConfig({componentId:"sc-4ebe634-0"})`
  font-size: 2rem;
  line-height: 2.2;
  width: 100%;
  margin-top: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background-color: #fae7e5;
  border: 1px solid #ff7061;
  border-radius: 8px;
`,e_=n.U.span.withConfig({componentId:"sc-4ebe634-1"})`
  font-size: 2.2rem;
  line-height: 2.4rem;
  text-transform: uppercase;
  color: #333;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`,eK=n.U.span.withConfig({componentId:"sc-4ebe634-2"})`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`,eG=({text:e})=>(0,i.jsxs)(eL,{children:[(0,i.jsx)(e_,{children:"Внимание!"}),(0,i.jsx)(eK,{children:e})]});var eY=e.i(65191),eH=e.i(46077),eZ=e.i(99580),eX=e.i(44863),eQ=e.i(33149),eJ=e.i(26374),e0=e.i(83962),e1=e.i(88861),e2=e.i(52714),e4=e.i(65637),e3=e.i(53663),e5=e.i(18615),e6=e.i(97444),e8=e.i(82188),e7=e.i(62688),e9=e.i(6349),ie=e.i(48650),ii=e.i(11455),ia=e.i(69474),it=e.i(88112),io=e.i(71646),ir=e.i(7299),is=e.i(47248),il=e.i(55567),ig=e.i(78291),im=e.i(49132),id=e.i(14889),iu=e.i(73251),ip=e.i(51464),ic=e.i(63200),ib=e.i(30746),ih=e.i(58408),iw=e.i(63239),ix=e.i(16858),iy=e.i(58066),iv=e.i(37890),ik=e.i(59021),iz=e.i(87096),ij=e.i(13325),iC=e.i(38207),iI=e.i(1504),iS=e.i(20472),iU=e.i(2764),iO=e.i(16608),i$=e.i(23501),iP=e.i(57512),iE=e.i(17449),iM=e.i(85795),iT=e.i(11285),iA=e.i(90399),iq=e.i(25357),iD=e.i(54861),iF=e.i(84647),iV=e.i(8736),iN=e.i(94338),iB=e.i(56168),iW=e.i(95385),iR=e.i(60143),iL=e.i(80985),i_=e.i(25490),iK=e.i(32602),iG=e.i(29354),iY=e.i(29920),iH=e.i(60630),iZ=e.i(98107),iX=e.i(28359),iQ=e.i(44806),iJ=e.i(73940),i0=e.i(24097),i1=e.i(49976),i2=e.i(76939),i4=e.i(79609),i3=e.i(55331),i5=e.i(63667),i6=e.i(92440),i8=e.i(41336),i7=e.i(59028),i9=e.i(15565),ne=e.i(46446),ni=e.i(55263),nn=e.i(61937),na=e.i(563),nt=e.i(24798),no=e.i(47614),nr=e.i(71333),ns=e.i(14712),nl=e.i(65629),ng=e.i(23974),nm=e.i(19046),nd=e.i(16272),nu=e.i(56063),np=e.i(75388),nc=e.i(84308),nf=e.i(51611),nb=e.i(85883),nh=e.i(28368),nw=e.i(53468),nx=e.i(4494),ny=e.i(87946),nv=e.i(10018),nk=e.i(45003),nz=e.i(17936),nj=e.i(1762),nC=e.i(84531),nI=e.i(8193),nS=e.i(38781),nU=e.i(20410),nO=e.i(79818),n$=e.i(64873),nP=e.i(60646),nE=e.i(75146),nM=e.i(37273),nT=e.i(53041),nA=e.i(74099),nq=e.i(91449),nD=e.i(4385),nF=e.i(14646),nV=e.i(28458),nN=e.i(64845),nB=e.i(52198),nW=e.i(44297),nR=e.i(67535),nL=e.i(65879),n_=e.i(79904),nK=e.i(80243),nG=e.i(99812),nY=e.i(6412),nH=e.i(55650),nZ=e.i(20038),nX=e.i(94015),nQ=e.i(13647),nJ=e.i(52978),n0=e.i(13100),n1=e.i(98023),n2=e.i(30839),n4=e.i(98127),n3=e.i(70693),n5=e.i(58493),n6=e.i(85767),n8=e.i(76766),n7=e.i(52457),n9=e.i(53105),ae=e.i(44);let ai={porkNeck:iz.default,porkRibs:ij.default,chickenThighFillet:iv.default,chickenBreastFillet:ik.default,chickenBreast:ix.default,chickenWhole:iy.default,boiledSausage:iw.default,boiledPorkSausage:ih.default,milkSausages:nM.default,beef:nT.default,lard:nW.default,beefOnTheBone:nq.default,beefBones:nA.default,beefBrisket:nD.default,beefTenderloin:nN.default,groundBeef:nF.default,beefTongue:nV.default},an={salmonFillet:nH.default,salmonSalted:nZ.default,herringFillet:nX.default,crabSticks:nQ.default,cannedFish:nJ.default,redCaviar:n0.default},aa={greens:e8.default,dill:e5.default,parsley:e7.default,basil:e4.default,cilantro:e3.default,greenOnion:e6.default,spinach:e9.default,arugula:n_.default,beanSprouts:nG.default},at={eggplant:nK.default,zucchini:no.default,tomato:i6.default,cucumber:iJ.default,bellPepper:iH.default,beet:iY.default,carrot:iQ.default,onion:i2.default,radish:i3.default,redOnion:i5.default,potato:i4.default,pumpkin:nR.default,sweetPotato:nL.default,garlic:i0.default,cabbage:iX.default,broccoli:iZ.default,olives:i1.default,greenPepper:nb.default,chiliPepper:nO.default,tomatoPaste:nU.default,cannedBeans:nB.default,lemon:i8.default,ginger:i7.default,celery:i9.default,lime:nY.default,champignons:ne.default,chanterelles:ni.default,freshPorcini:nn.default,mushrooms:na.default,horseradishRoot:nt.default,pickledCucumbers:n6.default,greenPeas:n8.default,cannedCorn:n7.default,avocado:n9.default},ao={apple:n1.default,cranberry:n2.default,cherry:n4.default,cannedPineapple:n3.default},ar={water:ip.default,vodka:ic.default,hotWater:io.default,carbonatedMineralWater:ii.default,lemonJuice:il.default,milk:ig.default,kefir:ir.default,yogurt:ib.default,sourCream:im.default,cream20:ia.default,cream33:it.default,creamCheese:iT.default,breadKvass:ie.default,vinegar:id.default,sherryVinegar:iu.default,kefir32:is.default,worcestershireSauce:n$.default,honey:nP.default,coconutCream:nE.default},as={mustard:iE.default,fishSauce:iM.default,mayonnaise:ae.default},al={butter:iC.default,meltedButter:iI.default,refinedVegetableOil:i$.default,vegetableOil:iP.default,oliveOil:iS.default,truffleOil:iU.default,sunflowerOil:iO.default},ag={whiteBread:eX.default,lavash:eZ.default,flour:eH.default,yeast:eQ.default,bakingPowder:nr.default,croutons:ns.default,ciabatta:nl.default,tartlets:ng.default},am={fetaCheese:eJ.default,hardCheese:e0.default},ad={oreganoDry:iN.default,groundBlackPepper:iq.default,blackPepper:iD.default,whitePepper:iF.default,salt:iB.default,sugar:iW.default,powderedSugar:iR.default,vanillaSugar:iL.default,cinnamon:n5.default,bayLeaf:iA.default,soda:nc.default,redPepperFlakes:nf.default,driedMint:nh.default,smokedPaprika:nw.default,cumin:nS.default,muscatNut:nx.default,thyme:ny.default,starAnise:nv.default,cinnamonStick:nk.default,driedPorcini:iV.default,cloves:nz.default,provencalHerbs:nj.default,driedHerbs:nC.default,gingerGround:nI.default},au={sesameSeeds:i_.default,pumpkinSeeds:iK.default,corianderSeeds:iG.default},ap={eggs:e1.default,eggWhite:e2.default},ac={oatmeal:nm.default,riceNoodles:nd.default,eggNoodles:np.default,rice:nu.default},af={...an,...ai,...aa,...at,...ao,...ar,...as,...al,...ag,...am,...ad,...au,...ap,...ac},ab={arbuz:{name:"Арбуз (мякоть)",gauge:"г",img:null},bagetIliChiabatta:{name:"Багет или чиабатта",gauge:"шт.",img:null},bazilikSvezhiy:{name:"Базилик свежий",gauge:"г",img:null},balzamicheskiySous:{name:"Бальзамический соус",gauge:"ч.л",img:null},balzamicheskiyUksus:{name:"Бальзамический уксус",gauge:"ст.л",img:null},banan:{name:"Банан",gauge:"шт.",img:null},baranina:{name:"Баранина (окорок или корейка)",gauge:"г",img:null},bekon:{name:"Бекон",gauge:"г",img:null},bolgarskiePertsy:{name:"Болгарские перцы",gauge:"шт.",img:null},bolgarskiyPerets:{name:"Болгарский перец",gauge:"шт.",img:null},vanilnyyEkstrakt:{name:"Ванильный экстракт",gauge:"ч.л",img:null},vetchina:{name:"Ветчина",gauge:"г",img:null},vinnyyUksus:{name:"Винный уксус",gauge:"ст.л",img:null},vinograd:{name:"Виноград",gauge:"г",img:null},vishnya:{name:"Вишня (свежая или замороженная)",gauge:"г",img:null},voda:{name:"Вода (газированная или обычная)",gauge:"л",img:null},voda2:{name:"Вода (кипячёная)",gauge:"л",img:null},voda3:{name:"Вода (минеральная или фильтрованная)",gauge:"л",img:null},voda4:{name:"Вода (минеральная)",gauge:"мл",img:null},voda5:{name:"Вода (по необходимости)",gauge:"мл",img:null},voda6:{name:"Вода (фильтрованная)",gauge:"л",img:null},gazirovannayaVoda:{name:"Газированная вода",gauge:"мл",img:null},govyadina:{name:"Говядина (вырезка)",gauge:"г",img:null},govyadina2:{name:"Говядина (лопатка)",gauge:"г",img:null},govyazhiyFarsh:{name:"Говяжий фарш",gauge:"г",img:null},govyazhiyZhir:{name:"Говяжий жир",gauge:"г",img:null},govyazhiOtbivnye:{name:"Говяжьи отбивные",gauge:"г",img:null},goroshekKonservirovannyy:{name:"Горошек консервированный",gauge:"банка",img:null},gorchitsaDizhonskaya:{name:"Горчица дижонская",gauge:"ч.л",img:null},granatovyeZerna:{name:"Гранатовые зерна",gauge:"г",img:null},granatovyySous:{name:"Гранатовый соус (наршараб)",gauge:"мл",img:null},gretskieOrehi:{name:"Грецкие орехи",gauge:"г",img:null},grecheskiyYogurt:{name:"Греческий йогурт",gauge:"мл",img:null},grechnevayaKrupa:{name:"Гречневая крупа",gauge:"г",img:null},derevyannyeShpazhki:{name:"Деревянные шпажки",gauge:"шт.",img:null},dizhonskayaGorchitsa:{name:"Дижонская горчица",gauge:"ст.л",img:null},doktorskayaKolbasa:{name:"Докторская колбаса",gauge:"г",img:null},zelenyyLuk:{name:"Зеленый лук",gauge:"шт.",img:null},zelenyyChay:{name:"Зелёный чай",gauge:"ч.л",img:null},zira:{name:"Зира",gauge:"ч.л",img:null},izyum:{name:"Изюм",gauge:"г",img:null},imbir:{name:"Имбирь (свежий)",gauge:"см",img:null},inzhirSvezhiy:{name:"Инжир свежий",gauge:"шт.",img:null},yogurtNaturalnyy:{name:"Йогурт натуральный",gauge:"ст.л",img:null},kardamon:{name:"Кардамон (молотый)",gauge:"ч.л",img:null},kedrovayaDoska:{name:"Кедровая доска",gauge:"шт.",img:null},kedrovyeOrehi:{name:"Кедровые орехи",gauge:"г",img:null},kinzaSvezhaya:{name:"Кинза свежая",gauge:"пучок",img:null},kinoa:{name:"Киноа",gauge:"г",img:null},klubnika:{name:"Клубника",gauge:"г",img:null},kokosovoeMoloko:{name:"Кокосовое молоко",gauge:"мл",img:null},koriandrMolotyy:{name:"Кориандр молотый",gauge:"ч.л",img:null},korolevskieKrevetki:{name:"Королевские креветки",gauge:"г",img:null},krasnoeVino:{name:"Красное вино",gauge:"мл",img:null},krasnyyLuk:{name:"Красный лук",gauge:"шт.",img:null},krasnyyPeretsHlopyami:{name:"Красный перец хлопьями",gauge:"ч.л",img:null},krevetki:{name:"Креветки",gauge:"г",img:null},krupnyeKrevetki:{name:"Крупные креветки (тигровые)",gauge:"г",img:null},kukuruzaKonservirovannaya:{name:"Кукуруза консервированная",gauge:"банка",img:null},kukuruzaVPochatkah:{name:"Кукуруза в початках",gauge:"шт.",img:null},kukuruznyyKrahmal:{name:"Кукурузный крахмал",gauge:"ст.л",img:null},kunzhut:{name:"Кунжут",gauge:"ч.л",img:null},kunzhutnoeMaslo:{name:"Кунжутное масло",gauge:"ст.л",img:null},kurinayaGrudka:{name:"Куриная грудка",gauge:"г",img:null},kurinoeFile:{name:"Куриное филе",gauge:"г",img:null},kurinyeBedra:{name:"Куриные бедра",gauge:"г",img:null},kurkuma:{name:"Куркума",gauge:"ч.л",img:null},led:{name:"Лёд",gauge:"стакан",img:null},limonnayaTsedra:{name:"Лимонная цедра",gauge:"ч.л",img:null},listyLazani:{name:"Листы лазаньи",gauge:"г",img:null},listyaRomano:{name:"Листья романо",gauge:"г",img:null},losos:{name:"Лосось",gauge:"г",img:null},losos2:{name:"Лосось (стейки)",gauge:"г",img:null},luk:{name:"Лук",gauge:"шт.",img:null},malina:{name:"Малина (свежая или замороженная)",gauge:"г",img:null},mango:{name:"Манго (мякоть)",gauge:"г",img:null},mannayaKrupa:{name:"Манная крупа",gauge:"ст.л",img:null},medIliSiropAgavy:{name:"Мёд или сироп агавы",gauge:"ст.л",img:null},mindalnoeMoloko:{name:"Миндальное молоко",gauge:"мл",img:null},mindalnyeHlopya:{name:"Миндальные хлопья",gauge:"ст.л",img:null},molotyyKoriandr:{name:"Молотый кориандр",gauge:"ч.л",img:null},morskayaSol:{name:"Морская соль",gauge:"ч.л",img:null},motsarella:{name:"Моцарелла",gauge:"г",img:null},mukaPshenichnaya:{name:"Мука пшеничная",gauge:"г",img:null},myata:{name:"Мята (по желанию)",gauge:"г",img:null},myataSvezhaya:{name:"Мята свежая",gauge:"г",img:null},oguretsSvezhiy:{name:"Огурец свежий",gauge:"шт.",img:null},ogurtsyMarinovannye:{name:"Огурцы маринованные",gauge:"шт.",img:null},olivkovoeMaslo:{name:"Оливковое масло",gauge:"ст.л",img:null},oregano:{name:"Орегано",gauge:"ч.л",img:null},panirovochnyeSuhari:{name:"Панировочные сухари",gauge:"г",img:null},papikaSladkaya:{name:"Папика сладкая",gauge:"ч.л",img:null},paprikaSladkaya:{name:"Паприка сладкая",gauge:"ч.л",img:null},parmezan:{name:"Пармезан",gauge:"г",img:null},persiki:{name:"Персики",gauge:"шт.",img:null},pesto:{name:"Песто",gauge:"ст.л",img:null},pestoZelenyy:{name:"Песто зеленый",gauge:"ст.л",img:null},petrushkaSvezhaya:{name:"Петрушка свежая",gauge:"пучок",img:null},pechenePesochnoe:{name:"Печенье песочное",gauge:"г",img:null},pitaIliChiabatta:{name:"Пита или чиабатта",gauge:"шт.",img:null},pomidory:{name:"Помидоры",gauge:"шт.",img:null},pomidoryCherri:{name:"Помидоры черри",gauge:"г",img:null},pshenichnayaMuka:{name:"Пшеничная мука",gauge:"г",img:null},ribaySteyk:{name:"Стейк рибай",gauge:"г",img:null},rastitelnoeMaslo:{name:"Растительное масло",gauge:"ст.л",img:null},rozmarin:{name:"Розмарин",gauge:"веточка",img:null},svezhayaZelen:{name:"Свежая зелень (кинза/петрушка)",gauge:"пучок",img:null},svezhayaMyata:{name:"Свежая мята",gauge:"пучок",img:null},svezhiyBazilik:{name:"Свежий базилик",gauge:"пучок",img:null},svezhiyImbir:{name:"Свежий имбирь",gauge:"см",img:null},svezhiyRozmarin:{name:"Свежий розмарин",gauge:"веточка",img:null},svinayaSheya:{name:"Свиная шея",gauge:"г",img:null},svinoyFarsh:{name:"Свиной фарш",gauge:"г",img:null},selderey:{name:"Сельдерей (стебли)",gauge:"шт.",img:null},semenaChia:{name:"Семена чиа",gauge:"ст.л",img:null},slivochnoeMaslo:{name:"Сливочное масло",gauge:"г",img:null},smesPertsev:{name:"Смесь перцев",gauge:"ч.л",img:null},soevyySous:{name:"Соевый соус",gauge:"мл",img:null},solIPerets:{name:"Соль и перец",gauge:"по вкусу",img:null},solMorskaya:{name:"Соль морская",gauge:"ч.л",img:null},sousTsezar:{name:"Соус «Цезарь»",gauge:"ст.л",img:null},spagetti:{name:"Спагетти",gauge:"г",img:null},steviya:{name:"Стевия (по желанию)",gauge:"ч.л",img:null},steykLososya:{name:"Стейк лосося",gauge:"г",img:null},struchkovayaFasol:{name:"Стручковая фасоль",gauge:"г",img:null},syrFiladelfiya:{name:"Сыр Филадельфия",gauge:"г",img:null},syrHalumi:{name:"Сыр халуми",gauge:"г",img:null},tverdyySyr:{name:"Твердый сыр",gauge:"г",img:null},tomatnyySous:{name:"Томатный соус",gauge:"мл",img:null},tomatyCherri:{name:"Томаты черри",gauge:"шт.",img:null},tofu:{name:"Тофу",gauge:"г",img:null},tunetsVSobstvennomSoku:{name:"Тунец в собственном соку",gauge:"банка",img:null},tunetsSteyk:{name:"Тунец стейк",gauge:"г",img:null},ukropSvezhiy:{name:"Укроп свежий",gauge:"пучок",img:null},fasolKrasnaya:{name:"Фасоль красная (отварная)",gauge:"г",img:null},fileIndeyki:{name:"Филе индейки",gauge:"г",img:null},fileTreski:{name:"Филе трески",gauge:"г",img:null},hlebChiabatta:{name:"Хлеб чиабатта",gauge:"шт.",img:null},hmeliSuneli:{name:"Хмели-сунели",gauge:"ч.л",img:null},chernika:{name:"Черника",gauge:"г",img:null},chernyyPerets:{name:"Черный перец",gauge:"ч.л",img:null},chernyyPeretsGoroshkom:{name:"Черный перец горошком",gauge:"ч.л",img:null},shpinatSvezhiy:{name:"Шпинат свежий",gauge:"г",img:null},yabloki:{name:"Яблоки",gauge:"г",img:null},yagody:{name:"Ягоды (смородина/малина/клубника)",gauge:"г",img:null},yaytsa:{name:"Яйца",gauge:"шт.",img:null},yaytso:{name:"Яйцо",gauge:"шт.",img:null},apelsinovayaTsedra:{name:"Апельсиновая цедра",gauge:"ч.л",img:null},funduk:{name:"Фундук",gauge:"г",img:null},gorkiyShokolad:{name:"Горький шоколад (70%)",gauge:"г",img:null},kakaoPoroshok:{name:"Какао-порошок",gauge:"г",img:null},klubnikaSvezhaya:{name:"Клубника свежая",gauge:"г",img:null},kroshkaKorzhey:{name:"Крошка коржей",gauge:"г",img:null},malinaSvezhaya:{name:"Малина свежая",gauge:"г",img:null},maskarpone:{name:"Маскарпоне",gauge:"г",img:null},medGrechishnyy:{name:"Мед гречишный",gauge:"г",img:null},mindalnayaMuka:{name:"Миндальная мука",gauge:"г",img:null},ovsyanayaMuka:{name:"Овсяная мука",gauge:"г",img:null},pecheneYubileynoe:{name:"Печенье Юбилейное",gauge:"г",img:null},razryhlitel:{name:"Разрыхлитель",gauge:"ч.л",img:null},saharBelyy:{name:"Сахар белый",gauge:"г",img:null},saharnayaPudraDlyaUkrasheniya:{name:"Сахарная пудра для украшения",gauge:"г",img:null},saharTrostnikovyy:{name:"Сахар тростниковый",gauge:"г",img:null},sguschennoeMolokoVarenoe:{name:"Сгущенное молоко вареное",gauge:"г",img:null},slivochnoeMaslo2:{name:"Сливочное масло (холодное)",gauge:"г",img:null},sloenoeTestoBezdrozhzhevoe:{name:"Слоеное тесто бездрожжевое",gauge:"г",img:null},smetana2530:{name:"Сметана 25-30%",gauge:"г",img:null},sodaPischevaya:{name:"Сода пищевая",gauge:"ч.л",img:null},vanilnyyStruchok:{name:"Ванильный стручок",gauge:"шт.",img:null},yaichnyeBelki:{name:"Яичные белки",gauge:"шт.",img:null},yaichnyeZheltki:{name:"Яичные желтки",gauge:"шт.",img:null},zhelatinListovoy:{name:"Желатин листовой",gauge:"г",img:null},belyyShokolad:{name:"Белый шоколад",gauge:"г",img:null},konyak:{name:"Коньяк",gauge:"ст.л",img:null},koritsaMolotaya:{name:"Корица молотая",gauge:"ч.л",img:null},molochnyyShokolad:{name:"Молочный шоколад",gauge:"г",img:null},molotayaKoritsa:{name:"Молотая корица",gauge:"ч.л",img:null},pischevoyKrasitel:{name:"Пищевой краситель",gauge:"г",img:null}},ah=e=>{if("ingredientKey"in e){let i=af[e.ingredientKey]??ab[e.ingredientKey];if(!i)throw Error(`Unknown ingredient key: ${e.ingredientKey}`);return{name:i.name,count:e.count,gauge:e.gauge??i.gauge,img:i.img,note:e.note,optional:e.optional}}return e},aw=n.U.div.withConfig({componentId:"sc-80ae5a18-0"})`
  border-radius: 18px;
  background: white;
  overflow: hidden;
  box-shadow: 0 12px 36px rgba(44, 31, 20, 0.07);
`,ax=n.U.button.withConfig({componentId:"sc-80ae5a18-1"})`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 56px;
  padding: 16px 18px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 17px;
  font-weight: 600;
  text-align: left;
  transition: background 0.2s;

  &:hover {
    background: #fffaf5;
  }
`,ay=n.U.div.withConfig({componentId:"sc-80ae5a18-2"})`
  display: flex;
  align-items: center;
  gap: 12px;
`,av=n.U.span.withConfig({componentId:"sc-80ae5a18-3"})`
  color: #241b14;
`,ak=n.U.span.withConfig({componentId:"sc-80ae5a18-4"})`
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0deg)"};
  color: #333;
  transition: transform 0.3s;
  font-size: 20px;
`,az=n.U.div.withConfig({componentId:"sc-80ae5a18-5"})`
  max-height: ${({$isOpen:e})=>e?"2000px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease;
`,aj=n.U.div.withConfig({componentId:"sc-80ae5a18-6"})`
  padding: 18px;
  border-top: 1px solid #f1e8df;
`,aC=n.U.div.withConfig({componentId:"sc-80ae5a18-7"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
  padding: 12px;
  border-radius: 14px;
  background: #fffaf5;
`,aI=n.U.span.withConfig({componentId:"sc-80ae5a18-8"})`
  font-size: 14px;
  color: #7c6958;
`,aS=n.U.div.withConfig({componentId:"sc-80ae5a18-9"})`
  display: flex;
  align-items: center;
  gap: 4px;
`,aU=n.U.button.withConfig({componentId:"sc-80ae5a18-10"})`
  width: 32px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #eadfd4;
  color: #6b3d08;
  background: white;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  font-size: 18px;
  font-weight: 500;
  transition: all 0.2s;
  opacity: ${({$disabled:e})=>e?.5:1};

  &:hover {
    background: ${({$disabled:e})=>e?"white":"#fff0dc"};
    border-color: ${({$disabled:e})=>e?"#eadfd4":"#ffbf78"};
  }

  &:active {
    transform: ${({$disabled:e})=>e?"none":"scale(0.95)"};
  }
`,aO=n.U.span.withConfig({componentId:"sc-80ae5a18-11"})`
  font-size: 16px;
  font-weight: 700;
  min-width: 40px;
  text-align: center;
`,a$=n.U.div.withConfig({componentId:"sc-80ae5a18-12"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 18px;
`,aP=n.U.label.withConfig({componentId:"sc-80ae5a18-13"})`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  font-size: 14px;
  color: #3d352d;
  padding: 10px 6px;
  border-radius: 10px;
  transition: background 0.2s;

  &:hover {
    background: #fffaf5;
  }
`,aE=n.U.div.withConfig({componentId:"sc-80ae5a18-14"})`
  position: relative;
  width: 18px;
  height: 18px;
`,aM=n.U.input.attrs({type:"checkbox"}).withConfig({componentId:"sc-80ae5a18-15"})`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  cursor: pointer;
`,aT=n.U.div.withConfig({componentId:"sc-80ae5a18-16"})`
  width: 18px;
  height: 18px;
  border: 2px solid #ff8402;
  border-radius: 6px;
  background: ${({$checked:e})=>e?"#ff8402":"white"};
  transition: all 0.2s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({$checked:e})=>e?"#ff8402":"#fff5e8"};
  }
`,aA=n.U.svg.withConfig({componentId:"sc-80ae5a18-17"})`
  width: 12px;
  height: 12px;
  fill: none;
  stroke: white;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`,aq=n.U.div.withConfig({componentId:"sc-80ae5a18-18"})`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,aD=n.U.span.withConfig({componentId:"sc-80ae5a18-19"})`
  font-weight: 500;
`,aF=n.U.span.withConfig({componentId:"sc-80ae5a18-20"})`
  color: #666;
  font-size: 13px;
`,aV=n.U.button.withConfig({componentId:"sc-80ae5a18-21"})`
  width: 100%;
  min-height: 46px;
  padding: 12px;
  background: ${({$disabled:e})=>e?"#f2ece6":"#2f8f54"};
  color: ${({$disabled:e})=>e?"#9d8d80":"white"};
  border: none;
  border-radius: 14px;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  font-size: 14px;
  font-weight: 500;
  transition: background 0.2s;

  &:hover {
    background: ${({$disabled:e})=>e?"#f2ece6":"#287a48"};
  }
`,aN=({data:e,recipeName:n})=>{let[a,t]=(0,c.useState)(!0),[o,r]=(0,c.useState)(2),[s,l]=(0,c.useState)(Array.from({length:e.length},()=>!1)),g=(0,eY.f)(e=>e.addItems),m=e.map(ah),d=e=>{r(Math.max(1,o+e))},u=e=>{let i=(e=>{if(!e.count)return e.gauge;let i="string"==typeof e.count?parseFloat(e.count):e.count;if(Number.isNaN(i))return e.gauge;let n=i/2*o,a=Number.isInteger(n)?n:n.toFixed(1);return`${a} ${e.gauge}`})(e);return e.note?`${i} (${e.note})`:i},p=s.some(e=>e);return(0,i.jsxs)(aw,{children:[(0,i.jsxs)(ax,{onClick:()=>t(!a),children:[(0,i.jsx)(ay,{children:(0,i.jsx)(av,{children:"Ингредиенты"})}),(0,i.jsx)(ak,{$isOpen:a,children:"▼"})]}),(0,i.jsx)(az,{$isOpen:a,children:(0,i.jsxs)(aj,{children:[(0,i.jsxs)(aC,{children:[(0,i.jsx)(aI,{children:"Количество порций:"}),(0,i.jsxs)(aS,{children:[(0,i.jsx)(aU,{onClick:()=>d(-1),$disabled:1===o,disabled:1===o,children:"-"}),(0,i.jsx)(aO,{children:o}),(0,i.jsx)(aU,{onClick:()=>d(1),children:"+"})]})]}),(0,i.jsx)(a$,{children:m.map((e,n)=>(0,i.jsxs)(aP,{children:[(0,i.jsxs)(aE,{children:[(0,i.jsx)(aM,{checked:s[n],onChange:()=>{let e;(e=[...s])[n]=!e[n],l(e)}}),(0,i.jsx)(aT,{$checked:s[n],children:s[n]&&(0,i.jsx)(aA,{viewBox:"0 0 24 24",children:(0,i.jsx)("polyline",{points:"20 6 9 17 4 12"})})})]}),(0,i.jsxs)(aq,{children:[(0,i.jsx)(aD,{children:e.name}),(0,i.jsx)(aF,{children:u(e)})]})]},`${e.name}-${e.count??""}-${e.gauge}-${e.note??""}`))}),(0,i.jsx)(aV,{type:"button",$disabled:!p,disabled:!p,onClick:()=>{g(m.reduce((e,i,a)=>(s[a]&&e.push({name:i.name,amount:u(i),recipeName:n}),e),[])),l(Array.from({length:e.length},()=>!1))},children:"Добавить в список покупок"})]})})]})},aB=n.U.div.withConfig({componentId:"sc-f38e5315-0"})`
  margin: 0px;
`,aW=n.U.div.withConfig({componentId:"sc-f38e5315-1"})`
  white-space: pre-line;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.1;
  color: ${({color:e})=>e||"#181818"};
`,aR=({value:e})=>(0,i.jsx)(aB,{children:(0,i.jsx)(aW,{color:"gray",children:e})});var aL=e.i(17102),a_=e.i(5092),aK=e.i(71203),aG=e.i(68068),aY=e.i(48049),aH=e.i(76365),aZ=e.i(99897),aX=e.i(88687),aQ=e.i(98068),aJ=e.i(58899),a0=e.i(94198),a1=e.i(560),a2=e.i(20526),a4=e.i(72592),a3=e.i(46935),a5=e.i(41751),a6=e.i(81827),a8=e.i(42859),a7=e.i(60422),a9=e.i(59331),te=e.i(43690),ti=e.i(3047),tn=e.i(41339),ta=e.i(42132),tt=e.i(97323),to=e.i(80040),tr=e.i(72243),ts=e.i(9907),tl=e.i(47106),tg=e.i(94039),tm=e.i(24410),td=e.i(82585),tu=e.i(34562),tp=e.i(98850),tc=e.i(12984);let tf={microwave:aK.default,blender:aL.default,oven:aG.default,fridge:tm.default,handMixer:a_.default},tb={pan:aJ.default,bowl:aZ.default,plate:a0.default,pot:a1.default,colander:aX.default,bakingTray:aH.default,lid:aQ.default,sieve:tr.default,ladle:ts.default,mortar:tg.default,bottle:tu.default,jar:tp.default,cookieCutters:tc.default},th={...tf,...tb,spatula:tn.default,whisk:to.default,fork:a2.default,knife:a5.default,rollingPin:a8.default,parchment:a6.default,grater:a4.default,brush:te.default,cutBoard:aY.default,spoon:ta.default,woodenSpoon:tl.default,skimmer:td.default,measuringSpoon:a7.default,grill:a3.default,tongs:tt.default,paperTowel:a9.default,skewers:ti.default},tw={chaynik:{name:"Чайник",img:null},chesnokodavilka:{name:"Чеснокодавилка",img:null},chugunnyyKazan:{name:"Чугунный казан",img:null},derevyannayaLopatka:{name:"Деревянная лопатка",img:null},derevyannyeShampury:{name:"Деревянные шампуры",img:null},derevyannyeShpazhki:{name:"Деревянные шпажки",img:null},doskaDlyaNarezki:{name:"Доска для нарезки",img:null},folga:{name:"Фольга",img:null},formaDlyaVypechki:{name:"Форма для выпечки (24 см)",img:null},formaDlyaZapekaniya:{name:"Форма для запекания",img:null},glubokayaMiskaDlyaMarinovaniya:{name:"Глубокая миска для маринования",img:null},grilIliMangal:{name:"Гриль или мангал",img:null},grilIliSkovoroda:{name:"Гриль или сковорода",img:null},kartofelemyalka:{name:"Картофелемялка",img:null},kastryulyaDlyaKuritsy:{name:"Кастрюля для курицы",img:null},kastryulyaDlyaVarkiOvoschey:{name:"Кастрюля для варки овощей",img:null},kastryulyaDlyaYaits:{name:"Кастрюля для яиц",img:null},kastryulyaDlyaYaytsaPashot:{name:"Кастрюля для яйца пашот",img:null},kastryulyaSrednegoRazmera:{name:"Кастрюля среднего размера",img:null},kistochkaDlyaGlazuri:{name:"Кисточка для глазури",img:null},kistochkaDlyaMasla:{name:"Кисточка для масла",img:null},kistochkaDlyaSmazyvaniya:{name:"Кисточка для смазывания",img:null},kokteylnyeStakany:{name:"Коктейльные стаканы",img:null},konditerskiyMeshok:{name:"Кондитерский мешок",img:null},kuhonnoePolotentse:{name:"Кухонное полотенце",img:null},kuhonnyeSchiptsy:{name:"Кухонные щипцы",img:null},kuhonnyeVesy:{name:"Кухонные весы",img:null},kulinarnyeSchiptsy:{name:"Кулинарные щипцы",img:null},kuvshin:{name:"Кувшин",img:null},mangalIliGril:{name:"Мангал или гриль",img:null},marlyaIliSito:{name:"Марля или сито",img:null},melkayaTerka:{name:"Мелкая терка",img:null},mikser:{name:"Миксер",img:null},miskaDlyaMarinovaniya:{name:"Миска для маринования",img:null},miskaDlyaSmeshivaniya:{name:"Миска для смешивания",img:null},miskaDlyaZamesa:{name:"Миска для замеса",img:null},nasadkaDlyaMeshka:{name:"Насадка для мешка (круглая)",img:null},nasadkaZvezda:{name:"Насадка 'Звезда'",img:null},nozhDlyaMyasa:{name:"Нож для мяса",img:null},nozhDlyaNarezki:{name:"Нож для нарезки",img:null},nozhShefPovara:{name:"Нож шеф-повара",img:null},ovoschechistka:{name:"Овощечистка",img:null},pergamentnayaBumaga:{name:"Пергаментная бумага",img:null},plastikovyyKonteynerDlyaMarinovaniya:{name:"Пластиковый контейнер для маринования",img:null},pressDlyaChesnoka:{name:"Пресс для чеснока",img:null},pressDlyaSendvichey:{name:"Пресс для сэндвичей (опционально)",img:null},protivenDlyaVodyanoyBani:{name:"Противень для водяной бани",img:null},prozrachnyyStakanIliBoul:{name:"Прозрачный стакан или боул",img:null},razemnayaForma:{name:"Разъемная форма (24 см)",img:null},reshetkaDlyaGrilya:{name:"Решетка для гриля",img:null},reshetkaGril:{name:"Решетка гриль",img:null},salatnitsa:{name:"Салатница",img:null},schiptsyDlyaGrilya:{name:"Щипцы для гриля",img:null},shampuryIliReshetka:{name:"Шампуры или решетка",img:null},silikonovayaLopatka:{name:"Силиконовая лопатка",img:null},skovorodaDlyaOrehov:{name:"Сковорода для орехов",img:null},skovorodaGril:{name:"Сковорода-гриль",img:null},skovorodaSKryshkoy:{name:"Сковорода с крышкой",img:null},stakanyDlyaPodachi:{name:"Стаканы для подачи",img:null},stupkaDlyaChesnoka:{name:"Ступка для чеснока",img:null},stupkaDlyaSpetsiy:{name:"Ступка для специй",img:null},terkaDlyaImbirya:{name:"Терка для имбиря",img:null},termometrKuhonnyy:{name:"Термометр кухонный",img:null},toster:{name:"Тостер",img:null},blenderIliSkalka:{name:"Блендер или скалка",img:null},chistayaSuhayaMiska:{name:"Чистая сухая миска",img:null},dveKruglyeFormy:{name:"Две круглые формы (22 см)",img:null},formaDlyaKonfet:{name:"Форма для конфет (опционально)",img:null},formyDlyaPannaKotty:{name:"Формы для панна котты (4 шт.)",img:null},gazovayaGorelkaDlyaKaramelizatsii:{name:"Газовая горелка для карамелизации",img:null},kastryulyaDlyaKrema:{name:"Кастрюля для крема",img:null},kastryulyaDlyaVodyanoyBani:{name:"Кастрюля для водяной бани",img:null},konditerskayaLopatka:{name:"Кондитерская лопатка",img:null},konditerskiyMeshokOptional:{name:"Кондитерский мешок (опционально)",img:null},kuhonnyyTermometr:{name:"Кухонный термометр",img:null},mernyyStakan:{name:"Мерный стакан",img:null},miskaDlyaZamachivaniyaZhelatina:{name:"Миска для замачивания желатина",img:null},pischevayaPlenka:{name:"Пищевая пленка",img:null},protivenDlyaDuhovki:{name:"Противень для духовки",img:null},ramekiny:{name:"Рамекины (4 шт.)",img:null},soteynik:{name:"Сотейник",img:null},terkaDlyaMorkovi:{name:"Терка для моркови",img:null},termometr:{name:"Термометр",img:null}},tx=e=>{if("equipmentKey"in e){let i=th[e.equipmentKey]??tw[e.equipmentKey];if(!i)throw Error(`Unknown equipment key: ${e.equipmentKey}`);return i}return e},ty=n.U.section.withConfig({componentId:"sc-19274b0c-0"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 12px 36px rgba(44, 31, 20, 0.07);

  @media ${o.R.laptop} {
    width: 100%;
    padding-left: 0;
    text-align: start;
  }
`,tv=n.U.section.withConfig({componentId:"sc-19274b0c-1"})`
  width: ${e=>e.$width||"100%"};
  max-width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  background: ${e=>e.$background||"transparent"};
  justify-content: ${e=>e.$justifyContent||"flex-start"};
  margin-bottom: 0;
  padding: 12px 18px 18px;
  border-radius: 6px;
`,tk=n.U.span.withConfig({componentId:"sc-19274b0c-2"})`
  flex: 0 0 auto;
  max-width: 220px;
  padding: 6px 11px;
  border: 1px solid #ffd9ad;
  border-radius: 6px;
  background: #fff7ed;
  box-shadow: 0 1px 3px rgba(255, 132, 2, 0.1);
  color: #6b3d08;
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition:
    background 0.2s,
    border-color 0.2s,
    color 0.2s;

  &:hover {
    border-color: #ffb45c;
    background: #fff0dc;
    color: #4f2c05;
  }
`,tz=({data:e})=>{let n=e.map(tx);return(0,i.jsxs)(ty,{children:[(0,i.jsx)(V,{children:"Оборудование"}),n.length?(0,i.jsx)(tv,{$background:"#fff",children:n.map(e=>(0,i.jsx)(tk,{children:e.name},e.name))}):(0,i.jsx)(aR,{value:"Список оборудования будет доступен позднее..."})]})},tj=n.U.section.withConfig({componentId:"sc-71cd220b-0"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 22px;

  @media ${o.R.laptop} {
    width: 100%;
    border-left: none;
    padding-left: 0;
    text-align: start;
  }
`,tC=n.U.article.withConfig({componentId:"sc-71cd220b-1"})`
  width: 100%;
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr);
  gap: 18px;
  padding: 28px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 14px 40px rgba(44, 31, 20, 0.08);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 22px 55px rgba(44, 31, 20, 0.12);
  }

  @media ${o.R.laptop} {
    grid-template-columns: 40px minmax(0, 1fr);
    padding: 18px;
    gap: 12px;
  }
`,tI=n.U.div.withConfig({componentId:"sc-71cd220b-2"})`
  width: 48px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #fff0dc;
  color: #e75e02;
  font-size: 1rem;
  font-weight: 800;
  box-shadow: inset 0 0 0 1px rgba(255, 132, 2, 0.16);

  @media ${o.R.laptop} {
    width: 40px;
    height: 40px;
    font-size: 0.9rem;
  }
`,tS=n.U.div.withConfig({componentId:"sc-71cd220b-3"})`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,tU=n.U.article.withConfig({componentId:"sc-71cd220b-4"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,tO=n.U.div.withConfig({componentId:"sc-71cd220b-5"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media ${o.R.laptop} {
    gap: 8px;
  }
`,t$=n.U.section.withConfig({componentId:"sc-71cd220b-6"})`
  width: ${e=>e.$width||"100%"};
  max-width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  background: ${e=>e.$background||"transparent"};
  justify-content: ${e=>e.$justifyContent||"flex-start"};
  margin-bottom: 0;
  border-radius: 6px;

  @media ${o.R.laptop} {
    height: auto;
  }
`,tP=n.U.span.withConfig({componentId:"sc-71cd220b-7"})`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 8px 12px;
  border: 1px solid #e6dfd6;
  border-radius: 10px;
  background: #fffaf5;
  color: #3d352d;
  font-size: 0.85rem;
  line-height: 1.2;
  white-space: nowrap;

  &::before {
    content: '';
    width: 5px;
    height: 5px;
    flex: 0 0 auto;
    border-radius: 50%;
    background: #ff8402;
    opacity: 0.65;
  }
`,tE=n.U.h2.withConfig({componentId:"sc-71cd220b-8"})`
  font-size: 1.35rem;
  font-weight: 800;
  margin-bottom: 0;
  color: #241b14;
  letter-spacing: 0;

  @media ${o.R.laptop} {
    font-size: 1.2rem;
  }
`,tM=n.U.article.withConfig({componentId:"sc-71cd220b-9"})`
  width: 100%;
  font-size: 1rem;
  line-height: 1.75;
  color: #5f554d;
  max-width: 780px;

  @media ${o.R.laptop} {
    width: 100%;
    font-size: 0.85rem;
  }
`,tT=({stepsData:e})=>(0,i.jsx)(tj,{children:e?.map((e,n)=>(0,i.jsxs)(tC,{children:[(0,i.jsx)(tI,{children:n+1}),(0,i.jsxs)(tS,{children:[(0,i.jsxs)(tU,{children:[(0,i.jsx)(tE,{children:`Шаг ${n+1}`}),(0,i.jsx)(tM,{children:e.description})]}),(0,i.jsx)(tO,{children:e.ingredients?.length>0&&(0,i.jsx)(t$,{children:e.ingredients.map(e=>{let a=ah(e);return(0,i.jsx)(tP,{children:(({count:e,gauge:i,name:n})=>[n,e,i].filter(e=>null!=e&&String(e).trim().length>0).join(" "))(a)},`${n}-ingredient-${a.name}`)})})})]})]},n))}),tA=n.U.div.withConfig({componentId:"sc-18313306-0"})`
  display: grid;
  grid-template-columns: minmax(280px, 340px) minmax(0, 1fr);
  gap: 36px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  align-items: flex-start;

  @media ${o.R.laptop} {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`,tq=n.U.main.withConfig({componentId:"sc-18313306-1"})`
  background:
    radial-gradient(circle at top left, rgba(255, 132, 2, 0.08), transparent 34rem),
    linear-gradient(180deg, #fffaf5 0, #fff 420px);
`,tD=n.U.section.withConfig({componentId:"sc-18313306-2"})`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 0;
  position: sticky;
  top: 96px;

  @media ${o.R.laptop} {
    width: 100%;
    position: static;
  }
`,tF=n.U.section.withConfig({componentId:"sc-18313306-3"})`
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 30px;

  @media ${o.R.laptop} {
    width: 100%;
  }
`,tV=n.U.section.withConfig({componentId:"sc-18313306-4"})`
  display: none;
`;e.s(["default",0,({recipe:e})=>{let n=e?.categories?.[0]?.name,o=n?t.M[n]?.slice(0,10):[];return(0,i.jsxs)(tq,{children:[(0,i.jsxs)(a.PageWrapper,{children:[e?.warning?(0,i.jsx)(eG,{text:e.warning}):null,(0,i.jsx)(D,{recipe:e}),e&&(0,i.jsxs)(tA,{children:[(0,i.jsxs)(tD,{children:[(0,i.jsx)(aN,{data:e.ingredients,recipeName:e.title}),(0,i.jsx)(J,{tips:e?.tips||[]}),(0,i.jsx)(eg,{variations:e?.variations||[]}),(0,i.jsx)(eh,{history:e?.historyDescription})]}),(0,i.jsxs)(tF,{id:"cooking-steps",children:[(0,i.jsx)(tz,{data:e.equipments}),(0,i.jsx)(tT,{stepsData:e.cookingRecipe}),(0,i.jsx)(eR,{list:e?.comments||[]}),(0,i.jsx)(eP,{recipe:e.title})]})]}),(0,i.jsx)(R,{recipes:o})]}),(0,i.jsx)(tV,{children:e?.searchRequests?.map(e=>(0,i.jsx)("p",{children:e},e))})]})}],83685)},17102,(e,i,n)=>{i.exports={img:"/optimize/equipments/blender.webp",name:"Блендер"}},24410,(e,i,n)=>{i.exports={img:"/optimize/equipments/fridge.webp",name:"Холодильник"}},5092,(e,i,n)=>{i.exports={name:"Ручной миксер",img:"/optimize/equipments/hand-mixer.webp"}},71203,(e,i,n)=>{i.exports={img:"/optimize/equipments/microwave.webp",name:"Микроволновая печь"}},68068,(e,i,n)=>{i.exports={img:"/optimize/equipments/oven.webp",name:"Духовка"}},43690,(e,i,n)=>{i.exports={img:"/optimize/equipments/brush.webp",name:"Кулинарная кисть"}},48049,(e,i,n)=>{i.exports={img:"/optimize/equipments/cut-board.webp",name:"Разделочная доска"}},76365,(e,i,n)=>{i.exports={img:"/optimize/equipments/baking-tray.webp",name:"Противень"}},34562,(e,i,n)=>{i.exports={img:"/optimize/equipments/bottle.webp",name:"Бутылка"}},99897,(e,i,n)=>{i.exports={img:"/optimize/equipments/bowl.webp",name:"Миска"}},88687,(e,i,n)=>{i.exports={img:"/optimize/equipments/colander.webp",name:"Дуршлаг"}},12984,(e,i,n)=>{i.exports={name:"Формочки для печенья",img:"/optimize/equipments/cookie-cutters.webp"}},98850,(e,i,n)=>{i.exports={img:"/optimize/equipments/jar.webp",name:"Банка"}},9907,(e,i,n)=>{i.exports={img:"/optimize/equipments/ladle.webp",name:"Ковшик"}},98068,(e,i,n)=>{i.exports={img:"/optimize/equipments/lid.webp",name:"Крышка"}},94039,(e,i,n)=>{i.exports={img:"/optimize/equipments/mortar.webp",name:"Ступка с пестиком"}},58899,(e,i,n)=>{i.exports={img:"/optimize/equipments/frying-pan.webp",name:"Сковорода"}},94198,(e,i,n)=>{i.exports={img:"/optimize/equipments/plate.webp",name:"Тарелка"}},560,(e,i,n)=>{i.exports={img:"/optimize/equipments/pot.webp",name:"Кастрюля"}},72243,(e,i,n)=>{i.exports={img:"/optimize/equipments/sieve.webp",name:"Сито"}},20526,(e,i,n)=>{i.exports={img:"/optimize/equipments/fork.webp",name:"Вилка"}},72592,(e,i,n)=>{i.exports={img:"/optimize/equipments/grater.webp",name:"Тёрка"}},46935,(e,i,n)=>{i.exports={img:"/optimize/equipments/grill.webp",name:"Мангал"}},41751,(e,i,n)=>{i.exports={img:"/optimize/equipments/knife.webp",name:"Нож"}},60422,(e,i,n)=>{i.exports={img:"/optimize/equipments/measuring-spoon.webp",name:"Мерная ложка"}},59331,(e,i,n)=>{i.exports={img:"/optimize/equipments/paper-towel.webp",name:"Бумажное полотенце"}},81827,(e,i,n)=>{i.exports={name:"Бумага для выпечки",img:"/optimize/equipments/parchment.webp"}},42859,(e,i,n)=>{i.exports={name:"Скалка",img:"/optimize/equipments/rolling-pin.webp"}},3047,(e,i,n)=>{i.exports={img:"/optimize/equipments/skewers.webp",name:"Шампуры"}},82585,(e,i,n)=>{i.exports={img:"/optimize/equipments/skimmer.webp",name:"Шумовка"}},41339,(e,i,n)=>{i.exports={img:"/optimize/equipments/spatula.webp",name:"Лопатка"}},42132,(e,i,n)=>{i.exports={img:"/optimize/equipments/spoon.webp",name:"Ложка"}},97323,(e,i,n)=>{i.exports={img:"/optimize/equipments/tongs.webp",name:"Щипцы"}},80040,(e,i,n)=>{i.exports={img:"/optimize/equipments/whisk.webp",name:"Венчик"}},47106,(e,i,n)=>{i.exports={img:"/optimize/equipments/wooden-spoon.webp",name:"Деревянная ложка"}},71333,(e,i,n)=>{i.exports={name:"Разрыхлитель теста",gauge:"г",img:"/optimize/ingredients/baking-powder.webp"}},65629,(e,i,n)=>{i.exports={name:"Чиабатта",gauge:"г",img:"/optimize/ingredients/ciabatta.webp"}},14712,(e,i,n)=>{i.exports={name:"Гренки",gauge:"г",img:"/optimize/ingredients/croutons.webp"}},46077,(e,i,n)=>{i.exports={name:"Мука",gauge:"г",img:"/optimize/ingredients/flour.webp"}},99580,(e,i,n)=>{i.exports={name:"Лаваш",gauge:"шт.",img:"/optimize/ingredients/lavash.webp"}},23974,(e,i,n)=>{i.exports={name:"Тарталетки",gauge:"шт.",img:"/optimize/ingredients/tartlets.webp"}},44863,(e,i,n)=>{i.exports={name:"Белый хлеб",gauge:"г",img:"/optimize/ingredients/white-bread.webp"}},33149,(e,i,n)=>{i.exports={name:"Дрожжи",gauge:"г",img:"/optimize/ingredients/yeast.webp"}},75388,(e,i,n)=>{i.exports={name:"Яичная лапша",gauge:"г",img:"/optimize/ingredients/egg-noodles.webp"}},19046,(e,i,n)=>{i.exports={name:"Овсянка",gauge:"г",img:"/optimize/ingredients/oatmeal.webp"}},16272,(e,i,n)=>{i.exports={name:"Рисовая лапша",gauge:"г",img:"/optimize/ingredients/rice-noodles.webp"}},56063,(e,i,n)=>{i.exports={name:"Рис",gauge:"г",img:"/optimize/ingredients/rice.webp"}},26374,(e,i,n)=>{i.exports={name:"Сыр фета",gauge:"г",img:"/optimize/ingredients/feta-cheese.webp"}},83962,(e,i,n)=>{i.exports={name:"Сыр твёрдый",gauge:"г",img:"/optimize/ingredients/hard-cheese.webp"}},52714,(e,i,n)=>{i.exports={name:"Яичный белок",gauge:"шт.",img:"/optimize/ingredients/egg-white.webp"}},88861,(e,i,n)=>{i.exports={name:"Яйцо куриное",img:"/optimize/ingredients/egg.webp",gauge:"шт."}},52978,(e,i,n)=>{i.exports={name:"Рыбные консервы",gauge:"банка",img:"/optimize/ingredients/canned-fish.webp"}},13647,(e,i,n)=>{i.exports={name:"Крабовые палочки",gauge:"г.",img:"/optimize/ingredients/crab-sticks.webp"}},94015,(e,i,n)=>{i.exports={name:"Филе сельди",gauge:"г",img:"/optimize/ingredients/herring-fillet.webp"}},13100,(e,i,n)=>{i.exports={name:"Красная икра",gauge:"кг",img:"/optimize/ingredients/red-caviar.webp"}},55650,(e,i,n)=>{i.exports={name:"Филе лосося",gauge:"кг",img:"/optimize/ingredients/salmon-fillet.webp"}},20038,(e,i,n)=>{i.exports={name:"Солённый лосось",gauge:"кг",img:"/optimize/ingredients/salmon-salted.webp"}},98023,(e,i,n)=>{i.exports={name:"Яблоко",gauge:"шт.",img:"/optimize/ingredients/apple.webp"}},70693,(e,i,n)=>{i.exports={name:"Консервированный ананас",gauge:"г",img:"/optimize/ingredients/canned-pineapple.webp"}},98127,(e,i,n)=>{i.exports={name:"Вишня",gauge:"шт.",img:"/optimize/ingredients/cherry.webp"}},30839,(e,i,n)=>{i.exports={name:"Клюква",gauge:"шт.",img:"/optimize/ingredients/cranberry.webp"}},79904,(e,i,n)=>{i.exports={name:"Руккола",gauge:"пуч.",img:"/optimize/ingredients/arugula.webp"}},65637,(e,i,n)=>{i.exports={name:"Базилик",gauge:"пуч.",img:"/optimize/ingredients/bazil.webp"}},99812,(e,i,n)=>{i.exports={name:"Ростки фасоли",gauge:"пуч.",img:"/optimize/ingredients/bean-sprouts.webp"}},53663,(e,i,n)=>{i.exports={name:"Кинза",gauge:"пуч.",img:"/optimize/ingredients/cilantro.webp"}},18615,(e,i,n)=>{i.exports={name:"Укроп",gauge:"пуч.",img:"/optimize/ingredients/dill.webp"}},97444,(e,i,n)=>{i.exports={name:"Лук зелёный",gauge:"пуч.",img:"/optimize/ingredients/green-onion.webp"}},82188,(e,i,n)=>{i.exports={name:"Зелень",gauge:"пуч.",img:"/optimize/ingredients/greens.webp"}},62688,(e,i,n)=>{i.exports={name:"Петрушка",gauge:"пуч.",img:"/optimize/ingredients/parsley.webp"}},6349,(e,i,n)=>{i.exports={name:"Шпинат",gauge:"пуч.",img:"/optimize/ingredients/spinach.webp"}},48650,(e,i,n)=>{i.exports={name:"Хлебный квас",gauge:"л",img:"/optimize/ingredients/bread-kvass.webp"}},11455,(e,i,n)=>{i.exports={name:"Газированная минеральная вода",gauge:"мл",img:"/optimize/ingredients/carbonated-mineral-water.webp"}},75146,(e,i,n)=>{i.exports={name:"Кокосовые сливки",gauge:"мл",img:"/optimize/ingredients/coconut-cream.webp"}},69474,(e,i,n)=>{i.exports={name:"Сливки 20%",gauge:"мл",img:"/optimize/ingredients/cream.webp"}},88112,(e,i,n)=>{i.exports={name:"Сливки 33%",gauge:"мл",img:"/optimize/ingredients/cream.webp"}},60646,(e,i,n)=>{i.exports={name:"Мед",gauge:"г",img:"/optimize/ingredients/honey.webp"}},71646,(e,i,n)=>{i.exports={name:"Горячая вода",gauge:"мл",img:"/optimize/ingredients/water.webp"}},47248,(e,i,n)=>{i.exports={name:"Кефир 3.2%",gauge:"мл",img:"/optimize/ingredients/kefir.webp"}},7299,(e,i,n)=>{i.exports={name:"Кефир",gauge:"мл",img:"/optimize/ingredients/kefir.webp"}},55567,(e,i,n)=>{i.exports={name:"Лимонный сок",gauge:"мл",img:"/optimize/ingredients/lemon-juice.webp"}},78291,(e,i,n)=>{i.exports={name:"Молоко",gauge:"мл",img:"/optimize/ingredients/milk.webp"}},73251,(e,i,n)=>{i.exports={name:"Хересный уксус",gauge:"ст.л.",img:"/optimize/ingredients/sherry-vinegar.webp"}},49132,(e,i,n)=>{i.exports={name:"Сметана",gauge:"г",img:"/optimize/ingredients/sour-cream.webp"}},14889,(e,i,n)=>{i.exports={name:"Уксус",gauge:"ст.л.",img:"/optimize/ingredients/vinegar.webp"}},63200,(e,i,n)=>{i.exports={name:"Водка",gauge:"мл",img:"/optimize/ingredients/vodka.webp"}},51464,(e,i,n)=>{i.exports={name:"Вода",gauge:"мл",img:"/optimize/ingredients/water.webp"}},64873,(e,i,n)=>{i.exports={name:"Вустерширский соус",gauge:"л",img:"/optimize/ingredients/worcestershire-sauce.webp"}},30746,(e,i,n)=>{i.exports={name:"Йогурт",gauge:"мл",img:"/optimize/ingredients/yogurt.webp"}},74099,(e,i,n)=>{i.exports={name:"Говяжьи кости",gauge:"кг",img:"/optimize/ingredients/beef-bones.webp"}},4385,(e,i,n)=>{i.exports={name:"Говяжья грудинка",gauge:"кг",img:"/optimize/ingredients/beef-brisket.webp"}},91449,(e,i,n)=>{i.exports={name:"Говядина на кости",gauge:"кг",img:"/optimize/ingredients/beef-on-the-bone.webp"}},64845,(e,i,n)=>{i.exports={name:"Говяжья вырезка",gauge:"кг",img:"/optimize/ingredients/beef-tenderloin.webp"}},28458,(e,i,n)=>{i.exports={name:"Говяжий язык",gauge:"г",img:"/optimize/ingredients/beef-tongue.webp"}},53041,(e,i,n)=>{i.exports={name:"Говядина",gauge:"кг",img:"/optimize/ingredients/beef.webp"}},58408,(e,i,n)=>{i.exports={name:"Колбаса вареная свиная",gauge:"кг.",img:"/optimize/ingredients/boiled-pork-sausage.webp"}},63239,(e,i,n)=>{i.exports={name:"Колбаса вареная",gauge:"кг.",img:"/optimize/ingredients/boiled-sausage.webp"}},59021,(e,i,n)=>{i.exports={name:"Куриное филе грудки",gauge:"кг",img:"/optimize/ingredients/chicken-thigh-fillet.webp"}},16858,(e,i,n)=>{i.exports={name:"Куриное филе грудки",gauge:"кг",img:"/optimize/ingredients/chicken-breast.webp"}},37890,(e,i,n)=>{i.exports={name:"Куриное филе бедра",gauge:"кг",img:"/optimize/ingredients/chicken-thigh-fillet.webp"}},58066,(e,i,n)=>{i.exports={name:"Целая курица",gauge:"кг",img:"/optimize/ingredients/chicken-whole.webp"}},14646,(e,i,n)=>{i.exports={name:"Говяжья фарш",gauge:"кг",img:"/optimize/ingredients/ground-beef.webp"}},44297,(e,i,n)=>{i.exports={name:"Сало",gauge:"г",img:"/optimize/ingredients/lard.webp"}},37273,(e,i,n)=>{i.exports={name:"Молочные колбаски",gauge:"кг.",img:"/optimize/ingredients/milk-sausages.webp"}},87096,(e,i,n)=>{i.exports={name:"Шея свиная",gauge:"кг",img:"/optimize/ingredients/pork-neck.webp"}},13325,(e,i,n)=>{i.exports={name:"Свиные ребрышки",gauge:"кг",img:"/optimize/ingredients/pork-ribs.webp"}},38207,(e,i,n)=>{i.exports={name:"Масло сливочное",gauge:"г",img:"/optimize/ingredients/butter.webp"}},1504,(e,i,n)=>{i.exports={name:"Масло сливочное растопленное",gauge:"ст.л.",img:"/optimize/ingredients/melted-butter.webp"}},20472,(e,i,n)=>{i.exports={name:"Масло оливковое",gauge:"ст.л.",img:"/optimize/ingredients/olive-oil.webp"}},23501,(e,i,n)=>{i.exports={name:"Масло растительное рафинированное",gauge:"ст.л.",img:"/optimize/ingredients/refined-vegetable-oil.webp"}},16608,(e,i,n)=>{i.exports={name:"Масло подсолнечное",gauge:"ст.л.",img:"/optimize/ingredients/sunflower-oil.webp"}},2764,(e,i,n)=>{i.exports={name:"Масло трюфельное",gauge:"ст.л.",img:"/optimize/ingredients/truffle-oil.webp"}},57512,(e,i,n)=>{i.exports={name:"Масло растительное",gauge:"ст.л.",img:"/optimize/ingredients/vegetable-oil.webp"}},11285,(e,i,n)=>{i.exports={name:"Сливочный сыр",gauge:"г",img:"/optimize/ingredients/cream-cheese.webp"}},85795,(e,i,n)=>{i.exports={name:"Рыбный соус",gauge:"мл",img:"/optimize/ingredients/fish-sauce.webp"}},44,(e,i,n)=>{i.exports={name:"Майонез",gauge:"г",img:"/optimize/ingredients/mayonnaise.webp"}},17449,(e,i,n)=>{i.exports={name:"Горчица",gauge:"г",img:"/optimize/ingredients/mustard.webp"}},90399,(e,i,n)=>{i.exports={name:"Лавровый лист",gauge:"шт.",img:"/optimize/ingredients/bay-leaf.webp"}},54861,(e,i,n)=>{i.exports={name:"Перец чёрный горошек",gauge:"шт",img:"/optimize/ingredients/black-pepper.webp"}},45003,(e,i,n)=>{i.exports={name:"Палочка корицы",gauge:"шт.",img:"/optimize/ingredients/cinnamon-stick.webp"}},58493,(e,i,n)=>{i.exports={name:"Корица",gauge:"г.",img:"/optimize/ingredients/cinnamon.webp"}},17936,(e,i,n)=>{i.exports={name:"Гвоздика",gauge:"шт.",img:"/optimize/ingredients/cloves.webp"}},38781,(e,i,n)=>{i.exports={name:"Кумин",gauge:"г",img:"/optimize/ingredients/cumin.webp"}},84531,(e,i,n)=>{i.exports={name:"Сушёные травы",gauge:"ч.л.",img:"/optimize/ingredients/dried-herbs.webp"}},28368,(e,i,n)=>{i.exports={name:"Cушёная мята",gauge:"г",img:"/optimize/ingredients/dried-mint.webp"}},8736,(e,i,n)=>{i.exports={name:"Сушеные белые грибы",gauge:"г",img:"/optimize/ingredients/dried-porcini.webp"}},8193,(e,i,n)=>{i.exports={name:"Имбирь молотый",gauge:"ч.л.",img:"/optimize/ingredients/ginger-ground.webp"}},25357,(e,i,n)=>{i.exports={name:"Перец чёрный молотый",gauge:"г",img:"/optimize/ingredients/ground-black-pepper.webp"}},4494,(e,i,n)=>{i.exports={name:"Мускатный орех",gauge:"г",img:"/optimize/ingredients/muscat-nut.webp"}},94338,(e,i,n)=>{i.exports={name:"Орегано сушёный",gauge:"г",img:"/optimize/ingredients/oregano-dry.webp"}},60143,(e,i,n)=>{i.exports={name:"Сахарная пудра",gauge:"г",img:"/optimize/ingredients/powdered-sugar.webp"}},1762,(e,i,n)=>{i.exports={name:"Прованские травы",gauge:"ч.л.",img:"/optimize/ingredients/provencal-herbs.webp"}},51611,(e,i,n)=>{i.exports={name:"Перец красный хлопьями",gauge:"г",img:"/optimize/ingredients/red-pepper-flakes.webp"}},56168,(e,i,n)=>{i.exports={name:"Соль",gauge:"г",img:"/optimize/ingredients/salt.webp"}},53468,(e,i,n)=>{i.exports={name:"Копченая паприка",gauge:"г",img:"/optimize/ingredients/smoked-paprika.webp"}},84308,(e,i,n)=>{i.exports={name:"Сода",gauge:"г",img:"/optimize/ingredients/soda.webp"}},10018,(e,i,n)=>{i.exports={name:"Анис звездчатый",gauge:"шт.",img:"/optimize/ingredients/star-anise.webp"}},95385,(e,i,n)=>{i.exports={name:"Сахар",gauge:"г",img:"/optimize/ingredients/sugar.webp"}},87946,(e,i,n)=>{i.exports={name:"Тимьян",gauge:"г",img:"/optimize/ingredients/thyme.webp"}},80985,(e,i,n)=>{i.exports={name:"Ванильный сахар",gauge:"г",img:"/optimize/ingredients/vanilla-sugar.webp"}},84647,(e,i,n)=>{i.exports={name:"Перец белый",gauge:"г",img:"/optimize/ingredients/white-pepper.webp"}},29354,(e,i,n)=>{i.exports={name:"Тыквенные семечки",gauge:"г",img:"/optimize/ingredients/coriander-seeds.webp"}},32602,(e,i,n)=>{i.exports={name:"Тыквенные семечки",gauge:"г",img:"/optimize/ingredients/pumpkin-seeds.webp"}},25490,(e,i,n)=>{i.exports={name:"Кунжутные семечки",gauge:"г",img:"/optimize/ingredients/sesame-seeds.webp"}},53105,(e,i,n)=>{i.exports={name:"Авокадо",gauge:"шт.",img:"/optimize/ingredients/avocado.webp"}},29920,(e,i,n)=>{i.exports={name:"Свекла",gauge:"шт.",img:"/optimize/ingredients/beet.webp"}},60630,(e,i,n)=>{i.exports={name:"Перец сладкий",gauge:"шт.",img:"/optimize/ingredients/bell-pepper.webp"}},98107,(e,i,n)=>{i.exports={name:"Брокколи",gauge:"г",img:"/optimize/ingredients/broccoli.webp"}},28359,(e,i,n)=>{i.exports={name:"Капуста белокочанная",gauge:"коч.",img:"/optimize/ingredients/cabbage.webp"}},52198,(e,i,n)=>{i.exports={name:"Консервированная фасоль",gauge:"шт.",img:"/optimize/ingredients/canned-beans.webp"}},52457,(e,i,n)=>{i.exports={name:"Консервированная кукуруза",gauge:"г",img:"/optimize/ingredients/canned-corn.webp"}},44806,(e,i,n)=>{i.exports={name:"Морковь",gauge:"шт.",img:"/optimize/ingredients/carrot.webp"}},15565,(e,i,n)=>{i.exports={name:"Сельдерей",gauge:"шт.",img:"/optimize/ingredients/celery.webp"}},46446,(e,i,n)=>{i.exports={name:"Шампиньоны",gauge:"г",img:"/optimize/ingredients/champignons.webp"}},55263,(e,i,n)=>{i.exports={name:"Лисички",gauge:"г",img:"/optimize/ingredients/chanterelles.webp"}},79818,(e,i,n)=>{i.exports={name:"Чили перец",gauge:"г",img:"/optimize/ingredients/chili-pepper.webp"}},73940,(e,i,n)=>{i.exports={name:"Огурец",gauge:"шт.",img:"/optimize/ingredients/cucumber.webp"}},80243,(e,i,n)=>{i.exports={name:"Баклажан",gauge:"шт.",img:"/optimize/ingredients/eggplant.webp"}},61937,(e,i,n)=>{i.exports={name:"Свежие белые грибы",gauge:"г",img:"/optimize/ingredients/fresh-porcini.webp"}},24097,(e,i,n)=>{i.exports={name:"Чеснок",gauge:"зуб.",img:"/optimize/ingredients/garlic.webp"}},59028,(e,i,n)=>{i.exports={name:"Имбирь",gauge:"г",img:"/optimize/ingredients/ginger.webp"}},76766,(e,i,n)=>{i.exports={name:"зеленый горошек",gauge:"г",img:"/optimize/ingredients/green-peas.webp"}},85883,(e,i,n)=>{i.exports={name:"Зелёный перец",gauge:"шт.",img:"/optimize/ingredients/green-pepper.webp"}},24798,(e,i,n)=>{i.exports={name:"Корень хрена",gauge:"г",img:"/optimize/ingredients/horseradish-root.webp"}},41336,(e,i,n)=>{i.exports={name:"Лимон",gauge:"шт.",img:"/optimize/ingredients/lemon.webp"}},6412,(e,i,n)=>{i.exports={name:"Лайм",gauge:"шт.",img:"/optimize/ingredients/lime.webp"}},563,(e,i,n)=>{i.exports={name:"Грибы",gauge:"г.",img:"/optimize/ingredients/mushrooms.webp"}},49976,(e,i,n)=>{i.exports={name:"Оливки",gauge:"г",img:"/optimize/ingredients/olives.webp"}},76939,(e,i,n)=>{i.exports={name:"Лук репчатый",gauge:"шт.",img:"/optimize/ingredients/onion.webp"}},85767,(e,i,n)=>{i.exports={name:"Маринованные огурцы",gauge:"шт.",img:"/optimize/ingredients/pickled-cucumbers.webp"}},79609,(e,i,n)=>{i.exports={name:"Картофель",gauge:"шт.",img:"/optimize/ingredients/potato.webp"}},67535,(e,i,n)=>{i.exports={name:"Тыква",gauge:"г",img:"/optimize/ingredients/pumpkin.webp"}},55331,(e,i,n)=>{i.exports={name:"Редис",gauge:"шт.",img:"/optimize/ingredients/radish.webp"}},63667,(e,i,n)=>{i.exports={name:"Лук красный",gauge:"шт.",img:"/optimize/ingredients/red-onion.webp"}},65879,(e,i,n)=>{i.exports={name:"Батат",gauge:"г",img:"/optimize/ingredients/sweet-potato.webp"}},20410,(e,i,n)=>{i.exports={name:"Томатная паста",gauge:"г",img:"/optimize/ingredients/tomato-paste.webp"}},92440,(e,i,n)=>{i.exports={name:"Помидор",gauge:"шт.",img:"/optimize/ingredients/tomato.webp"}},47614,(e,i,n)=>{i.exports={name:"Кабачок",gauge:"шт.",img:"/optimize/ingredients/zucchini.webp"}}]);