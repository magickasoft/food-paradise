(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,75696,e=>{var i=e.i(61745),o=e.i(43476);e.s(["default",0,function({locale:e,...r}){if(!e)throw Error(void 0);return(0,o.jsx)(i.R,{locale:e,...r})}])},25633,(e,i,o)=>{e.i(47167),Object.defineProperty(o,"__esModule",{value:!0});var r={default:function(){return y},defaultHead:function(){return d}};for(var a in r)Object.defineProperty(o,a,{enumerable:!0,get:r[a]});let n=e.r(55682),t=e.r(90809),s=e.r(43476),c=t._(e.r(71645)),p=n._(e.r(98879)),l=e.r(42732);function d(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function m(e,i){return"string"==typeof i||"number"==typeof i?e:i.type===c.default.Fragment?e.concat(c.default.Children.toArray(i.props.children).reduce((e,i)=>"string"==typeof i||"number"==typeof i?e:e.concat(i),[])):e.concat(i)}let h=["name","httpEquiv","charSet","itemProp"];function u(e){let i,o,r,a;return e.reduce(m,[]).reverse().concat(d().reverse()).filter((i=new Set,o=new Set,r=new Set,a={},e=>{let n=!0,t=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){t=!0;let o=e.key.slice(e.key.indexOf("$")+1);i.has(o)?n=!1:i.add(o)}switch(e.type){case"title":case"base":o.has(e.type)?n=!1:o.add(e.type);break;case"meta":for(let i=0,o=h.length;i<o;i++){let o=h[i];if(e.props.hasOwnProperty(o))if("charSet"===o)r.has(o)?n=!1:r.add(o);else{let i=e.props[o],r=a[o]||new Set;("name"!==o||!t)&&r.has(i)?n=!1:(r.add(i),a[o]=r)}}}return n})).reverse().map((e,i)=>{let o=e.key||i;return c.default.cloneElement(e,{key:o})})}let y=function({children:e}){let i=(0,c.useContext)(l.HeadManagerContext);return(0,s.jsx)(p.default,{reduceComponentsToState:u,headManager:i,children:e})};("function"==typeof o.default||"object"==typeof o.default&&null!==o.default)&&void 0===o.default.__esModule&&(Object.defineProperty(o.default,"__esModule",{value:!0}),Object.assign(o.default,o),i.exports=o.default)},65856,(e,i,o)=>{e.i(47167),Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"RouterContext",{enumerable:!0,get:function(){return r}});let r=(e.r(55682)._(e.r(71645))).default.createContext(null)},98879,(e,i,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"default",{enumerable:!0,get:function(){return s}});let r=e.r(71645),a="u"<typeof window,n=a?()=>{}:r.useLayoutEffect,t=a?()=>{}:r.useEffect;function s(e){let{headManager:i,reduceComponentsToState:o}=e;function s(){if(i&&i.mountedInstances){let e=r.Children.toArray(Array.from(i.mountedInstances).filter(Boolean));i.updateHead(o(e))}}return a&&(i?.mountedInstances?.add(e.children),s()),n(()=>(i?.mountedInstances?.add(e.children),()=>{i?.mountedInstances?.delete(e.children)})),n(()=>(i&&(i._pendingUpdate=s),()=>{i&&(i._pendingUpdate=s)})),t(()=>(i&&i._pendingUpdate&&(i._pendingUpdate(),i._pendingUpdate=null),()=>{i&&i._pendingUpdate&&(i._pendingUpdate(),i._pendingUpdate=null)})),null}},2971,e=>{var i=e.i(43476),o=e.i(97053),r=e.i(25164),a=e.i(71645),n=e.i(4529),t=e.i(20133),s=e.i(92199),c=e.i(18566),p=e.i(88674),l=e.i(61745);let d=o.U.div.withConfig({componentId:"sc-b54f3c63-0"})`
  position: relative;
  display: inline-block;
`,m=o.U.button.withConfig({componentId:"sc-b54f3c63-1"})`
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
`,h=o.U.div.withConfig({componentId:"sc-b54f3c63-2"})`
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
`,u=o.U.button.withConfig({componentId:"sc-b54f3c63-3"})`
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
`,y={ru:{label:"Руc",flag:"🇷🇺"},en:{label:"Eng",flag:"🇬🇧"}},k=(0,a.memo)(function(){let e=(0,l.X)(),o=(0,t.U)(),[r,n]=(0,a.useTransition)(),k=(0,t.x)(),f=(0,c.useParams)(),[g,b]=(0,a.useState)(!1);return(0,i.jsxs)(d,{children:[(0,i.jsxs)(m,{onClick:()=>b(e=>!e),children:[(0,i.jsx)(s.r,{size:18}),y[e]?.label]}),g&&(0,i.jsx)(h,{style:{minWidth:"40px"},children:p.V.filter(i=>i!==e).map(a=>(0,i.jsx)(u,{onClick:()=>{a===e||r||(n(()=>{localStorage.setItem("user-locale",a),o.replace({pathname:k,params:f},{locale:a})}),b(!1))},children:y[a]?.label},a))})]})});var f=e.i(46190),g=e.i(74080);let b=42,x=44,v="0 18px",j="0 16px",z=14,w=14,C=o.U.a.withConfig({componentId:"sc-f9149c5e-0"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${b}px;
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

  @media ${n.R.laptop} {
    height: ${x}px;
    font-size: ${w}px;
    padding: ${j};
  }

  @media ${n.R.mobileL} {
    width: 100%;
    justify-content: center;
  }
`,U=o.U.div.withConfig({componentId:"sc-f9149c5e-1"})`
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
`,$=o.U.div.withConfig({componentId:"sc-f9149c5e-2"})`
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

    @media ${n.R.laptop} {
      font-size: 22px;
      margin-bottom: 20px;
    }

    @media ${n.R.mobileL} {
      font-size: 20px;
      margin-bottom: 16px;
    }
  }

  @media ${n.R.laptop} {
    padding: 28px;
    max-width: 440px;
  }

  @media ${n.R.mobileL} {
    padding: 24px 20px;
    max-width: 95%;
    border-radius: 14px;
  }

  @media ${n.R.mobileM} {
    padding: 20px 16px;
  }
`,I=o.U.button.withConfig({componentId:"sc-f9149c5e-3"})`
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

  @media ${n.R.laptop} {
    top: 16px;
    right: 16px;
    font-size: 24px;
    width: 36px;
    height: 36px;
  }

  @media ${n.R.mobileL} {
    top: 12px;
    right: 12px;
    font-size: 22px;
    width: 32px;
    height: 32px;
    padding: 6px;
  }
`,L=o.U.div.withConfig({componentId:"sc-f9149c5e-4"})`
  display: flex;
  justify-content: center;
`,R=o.U.div.withConfig({componentId:"sc-f9149c5e-5"})`
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
`,P=(0,a.memo)(function(){let[e,o]=(0,a.useState)(!1),[n,t]=(0,a.useState)(!0),s=(0,a.useRef)(null);(0,a.useEffect)(()=>{if(e)return s.current?.focus(),document.body.style.overflow="hidden",()=>{document.body.style.overflow="unset"}},[e]),(0,a.useEffect)(()=>{let e=e=>{"Escape"===e.key&&o(!1)};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[]);let c=()=>o(!1),p=e&&"u">typeof document?(0,g.createPortal)((0,i.jsx)(U,{onClick:c,children:(0,i.jsxs)($,{ref:s,onClick:e=>e.stopPropagation(),role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",tabIndex:-1,children:[(0,i.jsx)(I,{"aria-label":"Закрыть",onClick:c,children:"×"}),(0,i.jsx)("h2",{id:"modal-title",children:"Поддержать проект"}),(0,i.jsxs)(L,{children:[n&&(0,i.jsx)("div",{children:"Загрузка QR кода..."}),(0,i.jsx)(r.default,{onLoad:()=>t(!1),src:"/optimize/qr-sber.webp",alt:"QR код для перевода в Сбербанк",width:300,height:300,priority:!0})]}),(0,i.jsx)(R,{children:(0,i.jsx)("a",{href:"https://www.sberbank.com/sms/pbpn?requisiteNumber=79537647035",target:"_blank",rel:"noopener noreferrer",children:"Или перейдите по ссылке для поддержки"})})]})}),document.body):null;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(C,{onClick:()=>o(!0),title:"Поддержать проект","aria-label":"Поддержать проект",children:"Поддержать проект"}),p]})}),_=o.U.header.withConfig({componentId:"sc-8b3b301-0"})`
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

  @media ${n.R.laptop} {
    height: 3.5rem;
    padding: 0 16px;
  }
`,E=o.U.div.withConfig({componentId:"sc-8b3b301-1"})`
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
`,S=o.U.nav.withConfig({componentId:"sc-8b3b301-2"})`
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

  @media ${n.R.laptop} {
    display: none;
  }
`,O=o.U.div.withConfig({componentId:"sc-8b3b301-3"})`
  display: flex;
  align-items: center;
  gap: 20px;

  @media ${n.R.laptop} {
    display: none;
  }
`,M=o.U.button.withConfig({componentId:"sc-8b3b301-4"})`
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

  @media ${n.R.laptop} {
    display: inline-flex;
  }
`,Y=o.U.div.withConfig({componentId:"sc-8b3b301-5"})`
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
`,T=o.U.div.withConfig({componentId:"sc-8b3b301-6"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 12px 30px rgba(44, 31, 20, 0.07);
`,N=o.U.span.withConfig({componentId:"sc-8b3b301-7"})`
  font-size: 12px;
  text-transform: uppercase;
  color: #9a7954;
  letter-spacing: 0.05em;
`,q=o.U.span.withConfig({componentId:"sc-8b3b301-8"})`
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

  @media ${n.R.laptop} {
    font-size: 19px;
  }

  @media ${n.R.mobileL} {
    font-size: 18px;
  }
`,A=(0,a.memo)(function(){let[e,o]=(0,a.useState)(!1),[n,c]=(0,a.useState)(!1),p=(0,t.x)();return(0,a.useEffect)(()=>{let e=()=>o(window.scrollY>0);return e(),window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,a.useEffect)(()=>{document.body.style.overflow=n?"hidden":"auto"},[n]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(_,{$scrolled:e,children:[(0,i.jsx)(E,{children:(0,i.jsxs)(t.L,{href:"/",children:[(0,i.jsx)(r.default,{src:"/optimize/logo.webp",alt:"logo",width:120,height:60,priority:!0}),(0,i.jsxs)(q,{children:["Всегда Готов",(0,i.jsx)("span",{children:"Ъ"})]})]})}),(0,i.jsxs)(S,{children:[(0,i.jsx)(t.L,{href:"/",className:"/"===p?"active":"",children:"Главная"}),(0,i.jsx)(t.L,{href:"/categories",className:p.startsWith("/categories")?"active":"",children:"Категории"})]}),(0,i.jsxs)(O,{children:[(0,i.jsx)(k,{}),(0,i.jsx)(f.f,{}),(0,i.jsx)(P,{})]}),(0,i.jsx)(M,{onClick:()=>c(e=>!e),children:n?(0,i.jsx)(s.V,{}):(0,i.jsx)(s.k,{})})]}),(0,i.jsxs)(Y,{$open:n,children:[(0,i.jsxs)(T,{children:[(0,i.jsx)(N,{children:"Навигация"}),(0,i.jsx)(t.L,{href:"/",onClick:()=>c(!1),children:"Главная"}),(0,i.jsx)(t.L,{href:"/categories",onClick:()=>c(!1),children:"Категории"})]}),(0,i.jsxs)(T,{children:[(0,i.jsx)(N,{children:"Действия"}),(0,i.jsx)(f.f,{}),(0,i.jsx)(P,{})]}),(0,i.jsxs)(T,{children:[(0,i.jsx)(N,{children:"Настройки"}),(0,i.jsx)(k,{})]})]})]})});e.s(["Header",0,A],2971)},16233,e=>{var i=e.i(43476),o=e.i(71645),r=e.i(53070),a=e.i(97053),n=e.i(4529),t=e.i(65191);let s=a.U.button.withConfig({componentId:"sc-23ae9a15-0"})`
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

  @media ${n.R.mobileL} {
    right: 14px;
    bottom: 14px;
    min-width: 48px;
    padding: 0 14px;
  }
`,c=a.U.span.withConfig({componentId:"sc-23ae9a15-1"})`
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
`,p=a.U.div.withConfig({componentId:"sc-23ae9a15-2"})`
  position: fixed;
  inset: 0;
  z-index: 10001;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 24px;
  background: rgba(0, 0, 0, 0.34);

  @media ${n.R.mobileL} {
    align-items: stretch;
    padding: 0;
  }
`,l=a.U.section.withConfig({componentId:"sc-23ae9a15-3"})`
  width: min(420px, 100%);
  max-height: min(640px, calc(100vh - 48px));
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.22);

  @media ${n.R.mobileL} {
    width: 100%;
    max-height: 100%;
    border-radius: 0;
  }
`,d=a.U.header.withConfig({componentId:"sc-23ae9a15-4"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 18px 20px;
  border-bottom: 1px solid #eeeeee;
`,m=a.U.h2.withConfig({componentId:"sc-23ae9a15-5"})`
  color: #333333;
  font-size: 20px;
  line-height: 1.2;
`,h=a.U.div.withConfig({componentId:"sc-23ae9a15-6"})`
  display: flex;
  align-items: center;
  gap: 8px;
`,u=a.U.button.withConfig({componentId:"sc-23ae9a15-7"})`
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
`,y=a.U.ul.withConfig({componentId:"sc-23ae9a15-8"})`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  list-style: none;
`,k=a.U.li.withConfig({componentId:"sc-23ae9a15-9"})`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  align-items: start;
  padding: 14px 20px;
  border-bottom: 1px solid #f0f0f0;
`,f=a.U.input.attrs({type:"checkbox"}).withConfig({componentId:"sc-23ae9a15-10"})`
  width: 18px;
  height: 18px;
  margin-top: 2px;
  accent-color: #ff8402;
  cursor: pointer;
`,g=a.U.div.withConfig({componentId:"sc-23ae9a15-11"})`
  min-width: 0;
  color: ${({$checked:e})=>e?"#888888":"#333333"};
  text-decoration: ${({$checked:e})=>e?"line-through":"none"};
`,b=a.U.div.withConfig({componentId:"sc-23ae9a15-12"})`
  font-size: 15px;
  font-weight: 600;
  overflow-wrap: anywhere;
`,x=a.U.div.withConfig({componentId:"sc-23ae9a15-13"})`
  margin-top: 4px;
  color: #777777;
  font-size: 13px;
  line-height: 1.35;
`;e.s(["ShoppingListWidget",0,()=>{let[e,a]=(0,o.useState)(!1),n=(0,t.f)(e=>e.items),v=(0,t.f)(e=>e.toggleItem),j=(0,t.f)(e=>e.removeItem),z=(0,t.f)(e=>e.clearItems),w=n.length>0,C=e&&w;return((0,o.useEffect)(()=>{0===n.length&&e&&a(!1)},[n.length,e]),(0,o.useEffect)(()=>{if(!C)return;let e=e=>{"Escape"===e.key&&a(!1)},i=document.body.style.overflow;return document.body.style.overflow="hidden",window.addEventListener("keydown",e),()=>{document.body.style.overflow=i,window.removeEventListener("keydown",e)}},[C]),w)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s,{type:"button",onClick:()=>a(!0),"aria-label":"Открыть список покупок",children:[(0,i.jsx)(r.W,{}),(0,i.jsx)("span",{children:"Список"}),(0,i.jsx)(c,{children:n.length})]}),C&&(0,i.jsx)(p,{onClick:()=>a(!1),children:(0,i.jsxs)(l,{"aria-modal":"true",role:"dialog","aria-labelledby":"shopping-list-title",onClick:e=>e.stopPropagation(),children:[(0,i.jsxs)(d,{children:[(0,i.jsx)(m,{id:"shopping-list-title",children:"Список покупок"}),(0,i.jsxs)(h,{children:[(0,i.jsx)(u,{type:"button",onClick:()=>{z(),a(!1)},"aria-label":"Очистить список",title:"Очистить список",children:(0,i.jsx)(r.i,{})}),(0,i.jsx)(u,{type:"button",onClick:()=>a(!1),"aria-label":"Закрыть список",title:"Закрыть",children:(0,i.jsx)(r.y,{})})]})]}),(0,i.jsx)(y,{children:n.map(e=>(0,i.jsxs)(k,{children:[(0,i.jsx)(f,{checked:e.checked,onChange:()=>v(e.id),"aria-label":`Отметить ${e.name} купленным`}),(0,i.jsxs)(g,{$checked:e.checked,children:[(0,i.jsx)(b,{children:e.name}),(0,i.jsxs)(x,{children:[e.amount," · ",e.recipeName]})]}),(0,i.jsx)(u,{type:"button",onClick:()=>j(e.id),"aria-label":`Удалить ${e.name}`,children:(0,i.jsx)(r.i,{})})]},e.id))})]})})]}):null}])},9009,e=>{var i=e.i(43476),o=e.i(71645),r=e.i(48148),a=e.i(95631),n=e.i(97053),t=e.i(4529);let s=n.U.p.withConfig({componentId:"sc-b043db05-0"})`
  color: #918f8f;
  font-size: 10px;
  font-weight: 300;
  line-height: normal;
  margin-top: 4px;
`,c=n.U.footer.withConfig({componentId:"sc-b043db05-1"})`
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

  @media ${t.R.laptop} {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 18px 20px;
  }
`,p=n.U.div.withConfig({componentId:"sc-b043db05-2"})`
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 8px;
`,l=n.U.div.withConfig({componentId:"sc-b043db05-3"})`
  display: flex;
  justify-content: flex-end;

  @media ${t.R.laptop} {
    width: 100%;
    justify-content: center;
  }
`,d=n.U.div.withConfig({componentId:"sc-b043db05-4"})`
  grid-column: 1 / -1;
`,m=(0,o.memo)(function(){let e=(0,r.f)("totalRecipes")("title",{count:(0,o.useMemo)(()=>String((0,a.D)().length),[])});return(0,i.jsx)(s,{children:e})}),h=(0,o.memo)(function(){let e=(0,r.f)("copyright"),o=new Date().getFullYear(),a=e("text",{url:String("food-paradise.ru"),text:String(o)});return(0,i.jsx)(s,{children:a})}),u=n.U.a.withConfig({componentId:"sc-68aa2ba3-0"})`
  color: #181818;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.2;

  &:hover {
    text-decoration: underline;
  }
`,y=(0,o.memo)(function({children:e,...o}){let r=/^https?:\/\//i.test(o?.href??"");return(0,i.jsx)(u,{target:r?"_blank":void 0,rel:r?"noopener noreferrer nofollow":void 0,...o,children:e})}),k=n.U.nav.withConfig({componentId:"sc-3904c4b2-0"})`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.55rem;
  padding: 0;
`,f=["doc1","doc2","doc3"],g=(0,o.memo)(function(){let e=(0,r.f)("docs");return(0,i.jsx)(k,{children:f.map(o=>{let r=e(`${o}.title`),a=e(`${o}.href`);return(0,i.jsx)(y,{href:a,"aria-label":r,children:r},o)})})});var b=e.i(11152);let x=n.U.nav.withConfig({componentId:"sc-73f6b35b-0"})`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 0;
`,v=n.U.a.withConfig({componentId:"sc-73f6b35b-1"})`
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
`,j=[{title:"VK",href:"#",icon:(0,i.jsx)(b.$,{})},{title:"Яндекс Дзен",href:"#",icon:(0,i.jsx)(b.b,{})}],z=(0,o.memo)(function(){return(0,i.jsx)(x,{"aria-label":"Социальные сети",children:j.map(({title:e,href:o,icon:r})=>(0,i.jsx)(v,{href:o,"aria-label":e,title:e,children:r},e))})}),w=(0,o.memo)(function(){return(0,i.jsxs)(c,{children:[(0,i.jsx)(p,{children:(0,i.jsx)(g,{})}),(0,i.jsx)(l,{children:(0,i.jsx)(z,{})}),(0,i.jsxs)(d,{children:[(0,i.jsx)(h,{}),(0,i.jsx)(m,{})]})]})});e.s(["Footer",0,w],9009)},88674,e=>{e.s(["J",0,"ru","V",0,["ru","en"]])},20133,e=>{var i=e.i(18566),o=e.i(71645),r=e.i(61745),a=o["use".trim()],n=e.i(49092),t=e.i(77105),s=e.i(89790),c=e.i(43476),p=e.i(33165),l=e.i(88674);let d=e=>Object.fromEntries(l.V.map(i=>[i,e])),m={"/":d("/"),"/categories":d("/categories")},h={"/categories/[name]":d("/categories/[name]"),"/recipe/[name]":d("/recipe/[name]")},u={"/recipe/shashlyk-iz-svininy-na-kefire":d("/recipe/shashlyk-iz-svininy-na-kefire"),"/recipe/shashlyk-iz-kurinogo-bedra":d("/recipe/shashlyk-iz-kurinogo-bedra"),"/recipe/shashlyk-iz-kurinyh-grudok":d("/recipe/shashlyk-iz-kurinyh-grudok"),"/recipe/shashlyk-iz-kuritsy-v-kefirnom-marinade":d("/recipe/shashlyk-iz-kuritsy-v-kefirnom-marinade"),"/recipe/shashlyk-iz-kuritsy-v-soevom-marinade":d("/recipe/shashlyk-iz-kuritsy-v-soevom-marinade"),"/recipe/shashlyk-iz-svininy-v-granatovom-souse":d("/recipe/shashlyk-iz-svininy-v-granatovom-souse"),"/recipe/shashlyk-iz-baraniny-s-rozmarinom":d("/recipe/shashlyk-iz-baraniny-s-rozmarinom"),"/recipe/shashlyk-iz-indeyki-v-yogurtovom-marinade":d("/recipe/shashlyk-iz-indeyki-v-yogurtovom-marinade"),"/recipe/ovoschi-gril-s-balzamisceskoy-glazuryu":d("/recipe/ovoschi-gril-s-balzamisceskoy-glazuryu"),"/recipe/losos-na-kedrovoy-doske-s-medovo-gorchichnym-sousom":d("/recipe/losos-na-kedrovoy-doske-s-medovo-gorchichnym-sousom"),"/recipe/krevetki-na-grile-s-chesnochnym-maslom":d("/recipe/krevetki-na-grile-s-chesnochnym-maslom"),"/recipe/gril-sendvich-s-halloumi-i-ovoschami":d("/recipe/gril-sendvich-s-halloumi-i-ovoschami"),"/recipe/svinye-rebryshki-v-medovo-gorchichnom-marinade":d("/recipe/svinye-rebryshki-v-medovo-gorchichnom-marinade"),"/recipe/svinaya-sheya-s-lukom-i-ziroy":d("/recipe/svinaya-sheya-s-lukom-i-ziroy"),"/recipe/govyazhiy-steyk-s-rozmarinom-na-mangale":d("/recipe/govyazhiy-steyk-s-rozmarinom-na-mangale"),"/recipe/govyazhi-otbivnye-v-vinnom-marinade":d("/recipe/govyazhi-otbivnye-v-vinnom-marinade"),"/recipe/kurinye-bedra-s-paprikoy-na-mangale":d("/recipe/kurinye-bedra-s-paprikoy-na-mangale"),"/recipe/kurinoe-file-s-limonom-i-chesnokom":d("/recipe/kurinoe-file-s-limonom-i-chesnokom"),"/recipe/file-indeyki-v-yogurtovom-marinade":d("/recipe/file-indeyki-v-yogurtovom-marinade"),"/recipe/baranina-s-ziroy-i-koriandrom":d("/recipe/baranina-s-ziroy-i-koriandrom"),"/recipe/lyulya-kebab-iz-govyazhiego-farsha":d("/recipe/lyulya-kebab-iz-govyazhiego-farsha"),"/recipe/shashlyk-iz-svininy-s-vinnym-uksusom":d("/recipe/shashlyk-iz-svininy-s-vinnym-uksusom"),"/recipe/losos-s-limonom-i-ukropom-na-reshetke":d("/recipe/losos-s-limonom-i-ukropom-na-reshetke"),"/recipe/steyk-tuntsa-s-kunzhutom":d("/recipe/steyk-tuntsa-s-kunzhutom"),"/recipe/treska-v-folge-s-ovoshchami":d("/recipe/treska-v-folge-s-ovoshchami"),"/recipe/krevetki-v-soevom-marinade-na-mangale":d("/recipe/krevetki-v-soevom-marinade-na-mangale"),"/recipe/steyki-lososya-s-rozmarinom":d("/recipe/steyki-lososya-s-rozmarinom"),"/recipe/tofu-gril-s-kunzhutnym-marinadom":d("/recipe/tofu-gril-s-kunzhutnym-marinadom"),"/recipe/halumi-s-tomatami-cherri-na-grile":d("/recipe/halumi-s-tomatami-cherri-na-grile"),"/recipe/shampinony-v-smetannom-marinade":d("/recipe/shampinony-v-smetannom-marinade"),"/recipe/kabachki-s-chesnokom-na-mangale":d("/recipe/kabachki-s-chesnokom-na-mangale"),"/recipe/baklazhany-s-pesto-na-grile":d("/recipe/baklazhany-s-pesto-na-grile"),"/recipe/kukuruza-v-pochatkah-s-maslom-na-mangale":d("/recipe/kukuruza-v-pochatkah-s-maslom-na-mangale"),"/recipe/kartofel-v-folge-s-ukropom":d("/recipe/kartofel-v-folge-s-ukropom"),"/recipe/pertsy-gril-s-bazilikom":d("/recipe/pertsy-gril-s-bazilikom"),"/recipe/ovoshchnye-shashlychki-s-halumi":d("/recipe/ovoshchnye-shashlychki-s-halumi"),"/recipe/chiabatta-na-grile-s-chesnokom":d("/recipe/chiabatta-na-grile-s-chesnokom"),"/recipe/lavash-s-syrom-na-reshetke":d("/recipe/lavash-s-syrom-na-reshetke"),"/recipe/tomaty-cherri-na-shpazhkah":d("/recipe/tomaty-cherri-na-shpazhkah"),"/recipe/kurinye-bedryshki-v-kefire-na-mangale":d("/recipe/kurinye-bedryshki-v-kefire-na-mangale"),"/recipe/burger-kotlety-na-mangale":d("/recipe/burger-kotlety-na-mangale"),"/recipe/banany-na-grile-s-medom-i-koritsej":d("/recipe/banany-na-grile-s-medom-i-koritsej"),"/recipe/grecheskij-salat":d("/recipe/grecheskij-salat"),"/recipe/salat-cezar-s-kuritsey":d("/recipe/salat-cezar-s-kuritsey"),"/recipe/salat-s-avokado-i-krevetkami":d("/recipe/salat-s-avokado-i-krevetkami"),"/recipe/salat-kapreze":d("/recipe/salat-kapreze"),"/recipe/salat-s-tuntsom-i-yaitsom":d("/recipe/salat-s-tuntsom-i-yaitsom"),"/recipe/teplyj-salat-s-govyadinoj":d("/recipe/teplyj-salat-s-govyadinoj"),"/recipe/salat-nisuaz-s-tuntsom":d("/recipe/salat-nisuaz-s-tuntsom"),"/recipe/salat-valdorf-s-kuritsey":d("/recipe/salat-valdorf-s-kuritsey"),"/recipe/krabovyi-salat-s-kukuruzoi":d("/recipe/krabovyi-salat-s-kukuruzoi"),"/recipe/salat-olivye-klassicheskii":d("/recipe/salat-olivye-klassicheskii"),"/recipe/letnii-salat-s-klubnikoi":d("/recipe/letnii-salat-s-klubnikoi"),"/recipe/gruzinskii-salat-lobio":d("/recipe/gruzinskii-salat-lobio"),"/recipe/limonad-s-myatoj":d("/recipe/limonad-s-myatoj"),"/recipe/ogurechnyj-detoks-napitok":d("/recipe/ogurechnyj-detoks-napitok"),"/recipe/yagodnyj-mors":d("/recipe/yagodnyj-mors"),"/recipe/arbuznyj-smuzi":d("/recipe/arbuznyj-smuzi"),"/recipe/myatno-limonnij-detoks-napitok":d("/recipe/myatno-limonnij-detoks-napitok"),"/recipe/imbirnyj-limonad-s-medom":d("/recipe/imbirnyj-limonad-s-medom"),"/recipe/klubnichno-bazilikovyj-limonad":d("/recipe/klubnichno-bazilikovyj-limonad"),"/recipe/tropicheskij-smuzi-s-mango":d("/recipe/tropicheskij-smuzi-s-mango"),"/recipe/ogurechno-lajmovyj-spritser":d("/recipe/ogurechno-lajmovyj-spritser"),"/recipe/malinovyj-chajnyj-fresh":d("/recipe/malinovyj-chajnyj-fresh"),"/recipe/persikovyj-latte":d("/recipe/persikovyj-latte"),"/recipe/inzhirnyj-koktejl":d("/recipe/inzhirnyj-koktejl"),"/recipe/scrambled-eggs":d("/recipe/scrambled-eggs"),"/recipe/scrambled-eggs-with-broccoli":d("/recipe/scrambled-eggs-with-broccoli"),"/recipe/ovsjanaja-kasha-s-jablokami-i-koricej":d("/recipe/ovsjanaja-kasha-s-jablokami-i-koricej"),"/recipe/omlet-s-molokom":d("/recipe/omlet-s-molokom"),"/recipe/bliny":d("/recipe/bliny"),"/recipe/scrambled-eggs-with-sausages-and-beans":d("/recipe/scrambled-eggs-with-sausages-and-beans"),"/recipe/scrambled-eggs-shakshuka":d("/recipe/scrambled-eggs-shakshuka"),"/recipe/menemen":d("/recipe/menemen"),"/recipe/ovsyanka-s-bananom-i-chia":d("/recipe/ovsyanka-s-bananom-i-chia"),"/recipe/chia-puding-s-chernikoy":d("/recipe/chia-puding-s-chernikoy"),"/recipe/yaichnye-maffiny-s-brokkoli":d("/recipe/yaichnye-maffiny-s-brokkoli"),"/recipe/tost-s-avokado-i-lososem":d("/recipe/tost-s-avokado-i-lososem"),"/recipe/grechnevaya-kasha-s-gribami-i-yaytsom":d("/recipe/grechnevaya-kasha-s-gribami-i-yaytsom"),"/recipe/risovaya-kasha-s-yablokom-i-koritsey":d("/recipe/risovaya-kasha-s-yablokom-i-koritsey"),"/recipe/omlet-s-tuntsom-i-zelenym-lukom":d("/recipe/omlet-s-tuntsom-i-zelenym-lukom"),"/recipe/ovsyanye-bliny-s-yagodami":d("/recipe/ovsyanye-bliny-s-yagodami"),"/recipe/smuzi-boul-s-mango-i-chia":d("/recipe/smuzi-boul-s-mango-i-chia"),"/recipe/pita-s-yaytsom-i-shpinatom":d("/recipe/pita-s-yaytsom-i-shpinatom"),"/recipe/kartofelnaya-tortilya-s-zelenyu":d("/recipe/kartofelnaya-tortilya-s-zelenyu"),"/recipe/tofu-skrambl-s-ovoshchami":d("/recipe/tofu-skrambl-s-ovoshchami"),"/recipe/zapekanka-iz-ovsyanki-s-yablokami":d("/recipe/zapekanka-iz-ovsyanki-s-yablokami"),"/recipe/yaichnica-s-fasolyu-i-tomatami":d("/recipe/yaichnica-s-fasolyu-i-tomatami"),"/recipe/omlet-s-kukuruzoy-i-zelenyu":d("/recipe/omlet-s-kukuruzoy-i-zelenyu"),"/recipe/yogurt-s-granola-i-yagodami":d("/recipe/yogurt-s-granola-i-yagodami"),"/recipe/kinoa-kasha-s-yagodami":d("/recipe/kinoa-kasha-s-yagodami"),"/recipe/sendvich-s-avokado-i-yaytsom":d("/recipe/sendvich-s-avokado-i-yaytsom"),"/recipe/zelenyj-omlet-so-shpinatom":d("/recipe/zelenyj-omlet-so-shpinatom"),"/recipe/yablochnye-oladi-iz-ovsyanoy-muki":d("/recipe/yablochnye-oladi-iz-ovsyanoy-muki"),"/recipe/borshch-s-pampushkami":d("/recipe/borshch-s-pampushkami"),"/recipe/okroshka-na-kvase":d("/recipe/okroshka-na-kvase"),"/recipe/okroshka-na-kefire":d("/recipe/okroshka-na-kefire"),"/recipe/classic-borscht":d("/recipe/classic-borscht"),"/recipe/pumpkin-cream-soup":d("/recipe/pumpkin-cream-soup"),"/recipe/pho-bo":d("/recipe/pho-bo"),"/recipe/gazpacho":d("/recipe/gazpacho"),"/recipe/cream-mushroom-soup":d("/recipe/cream-mushroom-soup"),"/recipe/schi-iz-svezhey-kapusty":d("/recipe/schi-iz-svezhey-kapusty"),"/recipe/uha-po-finski":d("/recipe/uha-po-finski"),"/recipe/sup-pyure-iz-tykvy":d("/recipe/sup-pyure-iz-tykvy"),"/recipe/kurinyy-bulon-s-lapshoy":d("/recipe/kurinyy-bulon-s-lapshoy"),"/recipe/rublenye-kotlety-iz-grudki-na-skovorode":d("/recipe/rublenye-kotlety-iz-grudki-na-skovorode"),"/recipe/stejk-ribaj-na-elektrogrile":d("/recipe/stejk-ribaj-na-elektrogrile"),"/recipe/mjaso-po-francuzski-s-pomidorami-i-syrom":d("/recipe/mjaso-po-francuzski-s-pomidorami-i-syrom"),"/recipe/uzbekskij-plov-s-govyadinoj":d("/recipe/uzbekskij-plov-s-govyadinoj"),"/recipe/losos-v-medovo-gorchichnom-souse":d("/recipe/losos-v-medovo-gorchichnom-souse"),"/recipe/kuritsa-gril-s-kinoa":d("/recipe/kuritsa-gril-s-kinoa"),"/recipe/ratatui-s-baklazhanami":d("/recipe/ratatui-s-baklazhanami"),"/recipe/lazanya-s-myasom-i-syrom":d("/recipe/lazanya-s-myasom-i-syrom"),"/recipe/grechka-s-gribami-i-lukom":d("/recipe/grechka-s-gribami-i-lukom"),"/recipe/kartofelnaya-zapekanka-s-farshem":d("/recipe/kartofelnaya-zapekanka-s-farshem"),"/recipe/kurinye-grudki-v-slivocnom-souse":d("/recipe/kurinye-grudki-v-slivocnom-souse"),"/recipe/losos-pod-syrnoy-korochkoy":d("/recipe/losos-pod-syrnoy-korochkoy"),"/recipe/ratatuy-po-domashnemu":d("/recipe/ratatuy-po-domashnemu"),"/recipe/govyadina-po-burgundski":d("/recipe/govyadina-po-burgundski"),"/recipe/krevetki-v-chesnochnom-souse":d("/recipe/krevetki-v-chesnochnom-souse"),"/recipe/kotlety-s-pyure":d("/recipe/kotlety-s-pyure"),"/recipe/makarony-s-syrom":d("/recipe/makarony-s-syrom"),"/recipe/rybnye-kotlety-s-pyure":d("/recipe/rybnye-kotlety-s-pyure"),"/recipe/farshirovannye-pertsy":d("/recipe/farshirovannye-pertsy"),"/recipe/ragu-iz-kabachkov-v-smetane":d("/recipe/ragu-iz-kabachkov-v-smetane"),"/recipe/ovsyanoblin":d("/recipe/ovsyanoblin"),"/recipe/kinoa-boul-s-lososem":d("/recipe/kinoa-boul-s-lososem"),"/recipe/tykvennyj-sup-s-imbirem":d("/recipe/tykvennyj-sup-s-imbirem"),"/recipe/smuzi-boul-s-chia":d("/recipe/smuzi-boul-s-chia"),"/recipe/farshirovannye-pertsy-s-kinoa":d("/recipe/farshirovannye-pertsy-s-kinoa"),"/recipe/batat-s-krasnoy-fasolyu-i-avokado":d("/recipe/batat-s-krasnoy-fasolyu-i-avokado"),"/recipe/treska-s-brokkoli-i-limonom":d("/recipe/treska-s-brokkoli-i-limonom"),"/recipe/teplyj-salat-s-kinoa-tykvoy-i-rukkoloy":d("/recipe/teplyj-salat-s-kinoa-tykvoy-i-rukkoloy"),"/recipe/tofu-s-ovoshchami-v-kunzhutnom-souse":d("/recipe/tofu-s-ovoshchami-v-kunzhutnom-souse"),"/recipe/ovoshchnoy-sup-s-fasolyu-i-shpinatom":d("/recipe/ovoshchnoy-sup-s-fasolyu-i-shpinatom"),"/recipe/indeyka-s-kabachkom-i-zelenyu":d("/recipe/indeyka-s-kabachkom-i-zelenyu"),"/recipe/salat-s-tuntsom-yaytsom-i-avokado":d("/recipe/salat-s-tuntsom-yaytsom-i-avokado"),"/recipe/ris-s-ovoshchami-i-krevetkami":d("/recipe/ris-s-ovoshchami-i-krevetkami"),"/recipe/zapekanka-iz-brokkoli-s-yaytsom":d("/recipe/zapekanka-iz-brokkoli-s-yaytsom"),"/recipe/smuzi-s-chernikoy-i-ovsyankoy":d("/recipe/smuzi-s-chernikoy-i-ovsyankoy"),"/recipe/chizkeik":d("/recipe/chizkeik"),"/recipe/panna-cotta":d("/recipe/panna-cotta"),"/recipe/chocolate-truffles":d("/recipe/chocolate-truffles"),"/recipe/meringue-roll-s-lemon-curd":d("/recipe/meringue-roll-s-lemon-curd"),"/recipe/klubnichnyy-pai-s-pesochnoy-kroschkoy":d("/recipe/klubnichnyy-pai-s-pesochnoy-kroschkoy"),"/recipe/krem-bryule-s-vanilyu":d("/recipe/krem-bryule-s-vanilyu"),"/recipe/morkovnyy-tort-s-gretskimi-orekhami":d("/recipe/morkovnyy-tort-s-gretskimi-orekhami"),"/recipe/pirozhnoye-kartoshka":d("/recipe/pirozhnoye-kartoshka"),"/recipe/tort-medovik":d("/recipe/tort-medovik"),"/recipe/beze":d("/recipe/beze"),"/recipe/lenivyy-napoleon":d("/recipe/lenivyy-napoleon"),"/recipe/shu-s-kremom":d("/recipe/shu-s-kremom"),"/recipe/apple-strudel":d("/recipe/apple-strudel"),"/recipe/cherry-pie":d("/recipe/cherry-pie"),"/recipe/rulety-iz-vetchiny-s-syrnom-i-chesnokom":d("/recipe/rulety-iz-vetchiny-s-syrnom-i-chesnokom"),"/recipe/kartofelnye-chipsy-v-mikrovolnovke":d("/recipe/kartofelnye-chipsy-v-mikrovolnovke"),"/recipe/sendvich-s-avokado-i-yaitsom-pashot":d("/recipe/sendvich-s-avokado-i-yaitsom-pashot"),"/recipe/grecheskiy-sendvich-s-fetoy":d("/recipe/grecheskiy-sendvich-s-fetoy"),"/recipe/sendvich-s-kuritsey-i-pesto":d("/recipe/sendvich-s-kuritsey-i-pesto"),"/recipe/brusketta-s-tomatami-i-bazilikom":d("/recipe/brusketta-s-tomatami-i-bazilikom"),"/recipe/ruletiki-iz-lavasha-s-lososem":d("/recipe/ruletiki-iz-lavasha-s-lososem"),"/recipe/farshirovannye-yajtsa-s-gorchicej":d("/recipe/farshirovannye-yajtsa-s-gorchicej"),"/recipe/kanape-iz-ogurtsa-s-lososem":d("/recipe/kanape-iz-ogurtsa-s-lososem"),"/recipe/tartaletki-s-krabovymi-palochkami":d("/recipe/tartaletki-s-krabovymi-palochkami"),"/recipe/shampinony-s-syrom-v-duhovke":d("/recipe/shampinony-s-syrom-v-duhovke"),"/recipe/ruletiki-iz-baklazhanov-s-fetoy":d("/recipe/ruletiki-iz-baklazhanov-s-fetoy"),"/recipe/syrnye-shariki-s-kunzhutom":d("/recipe/syrnye-shariki-s-kunzhutom"),"/recipe/kanape-s-seldyu-i-svekloy":d("/recipe/kanape-s-seldyu-i-svekloy"),"/recipe/kabachkovye-oladi-s-syrom":d("/recipe/kabachkovye-oladi-s-syrom"),"/recipe/lemoncello-vodka":d("/recipe/lemoncello-vodka"),"/recipe/cranberry-vodka":d("/recipe/cranberry-vodka"),"/recipe/cherry-vodka":d("/recipe/cherry-vodka"),"/recipe/hrenovukha":d("/recipe/hrenovukha"),"/recipe/salat-olivye":d("/recipe/salat-olivye"),"/recipe/krabovyy-salat":d("/recipe/krabovyy-salat"),"/recipe/selodka-pod-shuboy":d("/recipe/selodka-pod-shuboy"),"/recipe/salat-mimosa":d("/recipe/salat-mimosa"),"/recipe/salat-s-kuritsey-i-ananasami":d("/recipe/salat-s-kuritsey-i-ananasami"),"/recipe/salat-obzhorka":d("/recipe/salat-obzhorka"),"/recipe/salat-s-yazykom-i-gribami":d("/recipe/salat-s-yazykom-i-gribami"),"/recipe/salat-s-krasnoy-ryboy-i-avokado":d("/recipe/salat-s-krasnoy-ryboy-i-avokado"),"/recipe/zapechonnaya-kuritsa-tselikom":d("/recipe/zapechonnaya-kuritsa-tselikom"),"/recipe/tartaletki-s-ikroy":d("/recipe/tartaletki-s-ikroy"),"/recipe/tartaletki-s-kuritsey-i-gribami":d("/recipe/tartaletki-s-kuritsey-i-gribami"),"/recipe/novogodneye-pechenye-s-glazuryu":d("/recipe/novogodneye-pechenye-s-glazuryu")};({...m,...u});let y={...m,...h},{Link:k,getPathname:f,redirect:g,usePathname:b,useRouter:x}=function(e){let{Link:l,config:d,getPathname:m,...h}=function(e,r){var p,l,d;let m={...p=r||{},localePrefix:"object"==typeof(d=p.localePrefix)?d:{mode:d||"always"},localeCookie:!!((l=p.localeCookie)??1)&&{name:"NEXT_LOCALE",sameSite:"lax",..."object"==typeof l&&l},localeDetection:p.localeDetection??!0,alternateLinks:p.alternateLinks??!0},h=m.pathnames,u=(0,o.forwardRef)(function({href:i,locale:o,...r},s){let p,l;"object"==typeof i?(p=i.pathname,l=i.params):p=i;let d=(0,n.i)(i),u=e(),k=(0,n.p)(u)?a(u):u,f=d?y({locale:o||k,href:null==h?p:{pathname:p,params:l},forcePrefix:null!=o||void 0}):p;return(0,c.jsx)(t.default,{ref:s,href:"object"==typeof i?{...i,pathname:f}:f,locale:o,localeCookie:m.localeCookie,...r})});function y(e){let i,{forcePrefix:o,href:r,locale:a}=e;return null==h?"object"==typeof r?(i=r.pathname,r.query&&(i+=(0,s.P)(r.query))):i=r:i=(0,s.N)({locale:a,...(0,s.q)(r),pathnames:m.pathnames}),(0,s.L)(i,a,m,o)}function k(e){return function(i,...o){return e(y(i),...o)}}return{config:m,Link:u,redirect:k(i.redirect),permanentRedirect:k(i.permanentRedirect),getPathname:y}}(r.X,e);return{...h,Link:l,usePathname:function(){let e,a,t=(e=(0,i.usePathname)(),a=(0,r.X)(),(0,o.useMemo)(()=>{if(!e)return e;let i=e,o=(0,n.u)(a,d.localePrefix);if((0,n.C)(o,e))i=(0,n.z)(e,o);else if("never"!==d.localePrefix.mode&&d.localePrefix.prefixes){let o=(0,n.n)(a);(0,n.C)(o,e)&&(i=(0,n.z)(e,o))}return i},[d.localePrefix,a,e])),c=(0,r.X)();return(0,o.useMemo)(()=>t&&d.pathnames?(0,s.O)(c,t,d.pathnames):t,[c,t])},useRouter:function(){let e=(0,i.useRouter)(),a=(0,r.X)();return(0,o.useMemo)(()=>{function i(e){return function(i,o){let{locale:r,...n}=o||{},t=[m({href:i,locale:r||a,forcePrefix:null!=r||void 0})];Object.keys(n).length>0&&t.push(n),(0,p.f)(d.localeCookie,a,r),e(...t)}}return{...e,push:i(e.push),replace:i(e.replace),prefetch:i(e.prefetch)}},[a,e])},getPathname:m}}({localePrefix:"always",locales:l.V,defaultLocale:l.J,pathnames:y});e.s(["L",0,k,"x",0,b,"U",0,x],20133)},4529,e=>{let i="2560px",o=e=>({mobileS:`(${e}: 320px)`,mobileM:`(${e}: 375px)`,mobileL:`(${e}: 425px)`,tablet:`(${e}: 768px)`,laptop:`(${e}: 1024px)`,laptopL:`(${e}: 1440px)`,desktop:`(${e}: ${i})`,desktopL:`(${e}: ${i})`}),r=o("min-width"),a=o("max-width");e.s(["R",0,a,"k",0,r])}])})();