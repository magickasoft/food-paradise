(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,83685,e=>{"use strict";var i=e.i(43476),t=e.i(97053),n=e.i(41582),o=e.i(95631),a=e.i(4529),d=e.i(92199),r=e.i(53070);let s=t.default.div.withConfig({componentId:"sc-bb5602da-0"})`
  width: 100%;
  max-width: 680px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin: 0 0 10px;

  @media ${a.maxDevice.laptop} {
    gap: 8px;
  }
`,c=t.default.div.withConfig({componentId:"sc-bb5602da-1"})`
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
`,l=t.default.span.withConfig({componentId:"sc-bb5602da-2"})`
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
`,p=t.default.span.withConfig({componentId:"sc-bb5602da-3"})`
  font-size: 0.92rem;
  line-height: 1;
  font-weight: 700;
  color: #2c2118;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`,f=t.default.span.withConfig({componentId:"sc-bb5602da-4"})`
  font-size: 0.82rem;
  line-height: 1;
  color: #8b7662;
`,x=({rating:e,commentsCount:t,preparation:n,time:o,calories:a})=>{let x=[{icon:(0,i.jsx)(d.FiStar,{}),value:e,gauge:`(${t})`},{icon:(0,i.jsx)(r.LuChefHat,{}),value:n?`${n}`:"—",gauge:"мин подготовки"},{icon:(0,i.jsx)(d.FiClock,{}),value:`${o}`,gauge:"мин всего"},{icon:(0,i.jsx)(d.FiZap,{}),value:a?`${a}`:"—",gauge:"ккал"}].filter(e=>"—"!==e.value);return(0,i.jsx)(s,{children:x.map((e,t)=>(0,i.jsxs)(c,{children:[(0,i.jsx)(l,{children:e.icon}),(0,i.jsx)(p,{children:e.value}),(0,i.jsx)(f,{children:e.gauge})]},t))})};var g=e.i(71645),h=e.i(40141);function m(e){return(0,h.GenIcon)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M349.6 64c-36.4 0-70.7 16.7-93.6 43.9C233.1 80.7 198.8 64 162.4 64 97.9 64 48 114.2 48 179.1c0 79.5 70.7 143.3 177.8 241.7L256 448l30.2-27.2C393.3 322.4 464 258.6 464 179.1 464 114.2 414.1 64 349.6 64zm-80.8 329.3l-4.2 3.9-8.6 7.8-8.6-7.8-4.2-3.9c-50.4-46.3-94-86.3-122.7-122-28-34.7-40.4-63.1-40.4-92.2 0-22.9 8.4-43.9 23.7-59.3 15.2-15.4 36-23.8 58.6-23.8 26.1 0 52 12.2 69.1 32.5l24.5 29.1 24.5-29.1c17.1-20.4 43-32.5 69.1-32.5 22.6 0 43.4 8.4 58.7 23.8 15.3 15.4 23.7 36.5 23.7 59.3 0 29-12.5 57.5-40.4 92.2-28.8 35.7-72.3 75.7-122.8 122z"},child:[]}]})(e)}let u=t.default.div.withConfig({componentId:"sc-43faa96-0"})`
  width: 100%;
  max-width: 680px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  padding: 8px 0 14px;
  margin: 0;

  @media ${a.maxDevice.laptop} {
    align-items: stretch;
  }
`,b=54,w=50,j="0 28px",v="0 22px",C=16,y=14,$="0 16px 30px rgba(231, 94, 2, 0.24)",I=t.default.a.withConfig({componentId:"sc-43faa96-1"})`
  display: inline-flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  height: ${b}px;
  padding: ${j};
  font-size: ${C}px;
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
    box-shadow: ${$};
  }

  @media ${a.maxDevice.laptop} {
    height: ${w}px;
    font-size: ${y}px;
    padding: ${v};
  }

  @media ${a.maxDevice.mobileL} {
    width: 100%;
    justify-content: center;
  }
`,k=t.default.button.withConfig({componentId:"sc-43faa96-2"})`
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
    box-shadow: ${$};
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

  @media ${a.maxDevice.laptop} {
    width: 50px;
    height: 50px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`,z=t.default.div.withConfig({componentId:"sc-43faa96-3"})`
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

  @media ${a.maxDevice.mobileL} {
    right: 16px;
    bottom: 16px;
    left: 16px;
  }
`,D=()=>{let[e,t]=(0,g.useState)(""),[n,o]=(0,g.useState)(!1);(0,g.useEffect)(()=>{if(!e)return;let i=window.setTimeout(()=>{t(""),o(!1)},2500);return()=>window.clearTimeout(i)},[e]);let a=async()=>!!navigator.clipboard&&(await navigator.clipboard.writeText(window.location.href),!0),s=async()=>{let e=navigator.userAgent,i=navigator.platform||e,n=/iPhone|iPad|iPod/i.test(i)||/Mac/i.test(i)&&navigator.maxTouchPoints>1,o=/Android/i.test(e),d=n||o||/Mobi/i.test(e),r=/Mac/i.test(i),s=n?"Нажмите «Поделиться» и выберите «Добавить в закладки».":o?"Откройте меню браузера и выберите «Добавить в закладки».":d?"Откройте меню браузера и добавьте страницу в закладки.":`Нажмите ${r?"⌘D":"Ctrl+D"}, чтобы добавить рецепт в закладки браузера.`;try{await a(),t(`Ссылка скопирована. ${s}`)}catch{t(s)}},c=async()=>{if(navigator.share){try{await navigator.share({title:document.title,url:window.location.href})}catch{}return}try{await a(),o(!0),t("Ссылка скопирована в буфер обмена.")}catch{t("Не удалось скопировать ссылку. Скопируйте адрес страницы из браузера.")}};return(0,i.jsxs)(u,{children:[(0,i.jsx)(I,{href:"#cooking-steps",title:"Начать готовить","aria-label":"Начать готовить",rel:"noopener noreferrer nofollow",children:"Начать готовить"}),(0,i.jsx)(k,{onClick:s,title:"Добавить в закладки","aria-label":"Добавить в закладки",children:(0,i.jsx)(m,{})}),(0,i.jsx)(k,{onClick:c,title:"Поделиться","aria-label":"Поделиться",children:n?(0,i.jsx)(d.FiCheck,{}):(0,i.jsx)(r.LuShare2,{})}),(0,i.jsx)(z,{$visible:!!e,role:"status","aria-live":"polite",children:e})]})},S=t.default.div.withConfig({componentId:"sc-2d704074-0"})`
  max-width: 1280px;
  margin: 0 auto;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
  padding: 24px 0 42px;

  @media ${a.maxDevice.laptop} {
    padding: 12px 16px 30px;
  }

  @media ${a.maxDevice.mobileL} {
    padding: 12px 12px 28px;
  }
`,E=t.default.header.withConfig({componentId:"sc-2d704074-1"})`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(360px, 0.82fr);
  gap: 36px;
  align-items: center;

  @media ${a.maxDevice.laptop} {
    grid-template-columns: 1fr;
    gap: 22px;
  }
`,O=t.default.article.withConfig({componentId:"sc-2d704074-2"})`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 12px 0;

  @media ${a.maxDevice.laptop} {
    order: 2;
  }
`,F=t.default.article.withConfig({componentId:"sc-2d704074-3"})`
  position: relative;
  display: flex;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 24px;
  background: #f4eee6;
  box-shadow: 0 24px 60px rgba(48, 34, 24, 0.18);

  @media ${a.maxDevice.laptop} {
    aspect-ratio: 1.5 / 1;
    order: 1;
    width: calc(100% + 32px);
    margin: -12px -16px 0;
    border-radius: 0 0 20px 20px;
  }

  @media ${a.maxDevice.mobileL} {
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
`,P=t.default.img.withConfig({componentId:"sc-2d704074-4"})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.01);
`,L=t.default.article.withConfig({componentId:"sc-2d704074-5"})`
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
`,A=t.default.h1.withConfig({componentId:"sc-2d704074-6"})`
  max-width: 760px;
  margin-bottom: 18px;
  line-height: 1.05;
  text-align: left;
  font-size: clamp(2.15rem, 4vw, 4.5rem);
  letter-spacing: 0;
  color: #211a15;

  @media ${a.maxDevice.laptop} {
    max-width: 100%;
  }
`,M=t.default.article.withConfig({componentId:"sc-2d704074-7"})`
  max-width: 680px;
  margin-top: 8px;
  font-size: 1.05rem;
  line-height: 1.75;
  text-align: left;
  color: #65594f;

  @media ${a.maxDevice.laptop} {
    font-size: 0.9rem;
    line-height: 1.65;
  }
`;function T({recipe:e}){return(0,i.jsx)(S,{children:e?(0,i.jsxs)(E,{children:[(0,i.jsxs)(O,{children:[(0,i.jsx)(A,{children:e.title}),(0,i.jsx)(x,{rating:e.rating,commentsCount:e.comments?e.comments.length:0,preparation:e.preparation,time:e.time,calories:e.calories}),(0,i.jsx)(D,{}),(0,i.jsx)(M,{children:e.description})]}),(0,i.jsx)(F,{children:e.img?(0,i.jsx)(P,{src:e.img,alt:e.name}):(0,i.jsx)(L,{children:"Нет изображения"})})]}):(0,i.jsx)(A,{children:"Recipe not found"})})}let R=t.default.h2.withConfig({componentId:"sc-7025c96b-0"})`
  font-size: 1.1rem;
  line-height: 1.4;
  font-weight: 700;
  margin-bottom: 0;
  width: 100%;
  color: #241b14;
  padding: 16px 18px 12px;
  border-bottom: 1px solid #f1e8df;
`;function B({children:e}){return(0,i.jsx)(R,{children:e})}var Y=e.i(60777),N=e.i(50506);let U=t.default.section.withConfig({componentId:"sc-776cbdbe-0"})`
  width: 100%;
  max-width: 1280px;
  margin: 44px auto 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 28px 0 30px;
  padding-bottom: 30px;
`;function W({recipes:e}){return void 0===e||e?.length===0?null:(0,i.jsxs)(U,{children:[(0,i.jsx)(B,{children:"Попробуйте также"}),(0,i.jsx)(Y.RecipesScroll,{children:e.map(({key:e,name:t,...n})=>(0,i.jsx)(N.RecipeCard,{name:t,...n},e||t))})]})}let q=t.default.div.withConfig({componentId:"sc-91da13b8-0"})`
  max-height: ${({$isOpen:e})=>e?"2000px":"0"};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: ${({$isOpen:e})=>e?"20px":"0"};
  padding-top: ${({$isOpen:e})=>e?"8px":"0"};
  margin: 0;
  list-style: none;
  width: 100%;
`,K=t.default.li.withConfig({componentId:"sc-91da13b8-1"})`
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
`;function G({tips:e,isOpen:t}){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(q,{$isOpen:t,children:e.map((e,t)=>(0,i.jsx)(K,{children:e},t))})})}var H=function(e){var i=void 0===window.navigator?"":navigator.userAgent;if("true"===localStorage.getItem("debug-mobile")||"true"===new URLSearchParams(window.location.search).get("mobile"))return void e(!0);var t=!!i.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop|Mobile|mobile/i),n="ontouchstart"in window||navigator.maxTouchPoints>0,o=window.innerWidth<=480;e(t||n&&o)},J=function(){var e=(0,g.useState)(!1),i=e[0],t=e[1];return(0,g.useEffect)(function(){H(t);var e=function(){H(t)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}},[]),i};(0,g.createContext)(void 0);let X=t.default.section.withConfig({componentId:"sc-3f9d3770-0"})`
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

  @media ${a.maxDevice.laptop} {
    flex-direction: column;
    padding: 0px;
    max-width: 100%;
  }
`,Z=t.default.button.withConfig({componentId:"sc-3f9d3770-1"})`
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
`,_=t.default.div.withConfig({componentId:"sc-3f9d3770-2"})`
  display: flex;
  align-items: center;
  gap: 12px;
`,Q=t.default.span.withConfig({componentId:"sc-3f9d3770-3"})`
  color: #4f3a18;
`,V=t.default.span.withConfig({componentId:"sc-3f9d3770-4"})`
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0deg)"};
  color: #333;
  transition: transform 0.3s;
  font-size: 20px;
`;function ee({tips:e}){let t=J(),[n,o]=(0,g.useState)(!1);return((0,g.useEffect)(()=>{o(!t)},[t]),e&&e.length>0)?(0,i.jsxs)(X,{children:[(0,i.jsxs)(Z,{onClick:()=>o(!n),$isOpen:n,children:[(0,i.jsx)(_,{children:(0,i.jsx)(Q,{children:"Советы"})}),(0,i.jsx)(V,{$isOpen:n,children:"▼"})]}),(0,i.jsx)(G,{isOpen:n,tips:e})]}):null}let ei=t.default.ul.withConfig({componentId:"sc-cfc4c557-0"})`
  max-height: ${({$isOpen:e})=>e?"2000px":"0"};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: ${({$isOpen:e})=>e?"20px":"0"};
  padding-top: ${({$isOpen:e})=>e?"8px":"0"};
  margin: 0;
  list-style: none;
  width: 100%;
`,et=t.default.li.withConfig({componentId:"sc-cfc4c557-1"})`
  padding: 12px 4px;
  border-bottom: 1px solid #f0f0f0;
  color: #4c5563;
  font-size: 0.92rem;
  line-height: 1.55;

  &:last-child {
    border-bottom: none;
  }
`,en=t.default.strong.withConfig({componentId:"sc-cfc4c557-2"})`
  display: inline-block;
  background: #e9f0ff;
  padding: 3px 8px;
  border-radius: 999px;
  margin-bottom: 4px;
  font-size: 0.9rem;
  color: #233553;
`;function eo({variations:e,isOpen:t}){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(ei,{$isOpen:t,children:e.map((e,t)=>(0,i.jsxs)(et,{children:[(0,i.jsx)(en,{children:e.name}),(0,i.jsx)("div",{children:e.changes})]},t))})})}let ea=t.default.section.withConfig({componentId:"sc-bf2e0646-0"})`
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

  @media ${a.maxDevice.laptop} {
    flex-direction: column;
    padding: 0px;
  }
`,ed=t.default.button.withConfig({componentId:"sc-bf2e0646-1"})`
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
`,er=t.default.div.withConfig({componentId:"sc-bf2e0646-2"})`
  display: flex;
  align-items: center;
  gap: 12px;
`,es=t.default.span.withConfig({componentId:"sc-bf2e0646-3"})`
  color: #233553;
`,ec=t.default.span.withConfig({componentId:"sc-bf2e0646-4"})`
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0deg)"};
  color: #333;
  transition: transform 0.3s;
  font-size: 20px;
`;function el({variations:e}){let t=J(),[n,o]=(0,g.useState)(!1);return((0,g.useEffect)(()=>{o(!t)},[t]),e&&e.length>0)?(0,i.jsxs)(ea,{children:[(0,i.jsxs)(ed,{onClick:()=>o(!n),$isOpen:n,children:[(0,i.jsx)(er,{children:(0,i.jsx)(es,{children:"Вариации"})}),(0,i.jsx)(ec,{$isOpen:n,children:"▼"})]}),(0,i.jsx)(eo,{variations:e,isOpen:n})]}):null}let ep=t.default.li.withConfig({componentId:"sc-8d123e7c-0"})`
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
`;function ef({isOpen:e,history:t}){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(ep,{$isOpen:e,children:t})})}let ex=t.default.section.withConfig({componentId:"sc-5adc3107-0"})`
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

  @media ${a.maxDevice.laptop} {
    flex-direction: column;
    padding: 0px;
  }
`,eg=t.default.button.withConfig({componentId:"sc-5adc3107-1"})`
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
`,eh=t.default.div.withConfig({componentId:"sc-5adc3107-2"})`
  display: flex;
  align-items: center;
  gap: 12px;
`,em=t.default.span.withConfig({componentId:"sc-5adc3107-3"})`
  color: #463322;
`,eu=t.default.span.withConfig({componentId:"sc-5adc3107-4"})`
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0deg)"};
  color: #333;
  transition: transform 0.3s;
  font-size: 20px;
`;function eb({history:e}){let t=J(),[n,o]=(0,g.useState)(!1);return((0,g.useEffect)(()=>{o(!t)},[t]),e)?(0,i.jsxs)(ex,{children:[(0,i.jsxs)(eg,{onClick:()=>o(!n),$isOpen:n,children:[(0,i.jsx)(eh,{children:(0,i.jsx)(em,{children:"История"})}),(0,i.jsx)(eu,{$isOpen:n,children:"▼"})]}),(0,i.jsx)(ef,{isOpen:n,history:e})]}):null}var ew=e.i(11152);let ej=t.default.div.withConfig({componentId:"sc-bf06a306-0"})`
  width: 100%;
  margin-top: 12px;
`,ev=t.default.h3.withConfig({componentId:"sc-bf06a306-1"})`
  font-size: 20px;
  font-weight: 700;
  color: #241b14;
  margin-bottom: 16px;

  @media ${a.maxDevice.laptop} {
    padding: 0 4px;
  }
`,eC=t.default.div.withConfig({componentId:"sc-bf06a306-2"})`
  background: #ffffff;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 14px 40px rgba(44, 31, 20, 0.08);
`,ey=t.default.div.withConfig({componentId:"sc-bf06a306-3"})`
  display: flex;
  gap: 6px;
  margin-bottom: 18px;
`,e$=t.default.button.withConfig({componentId:"sc-bf06a306-4"})`
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
`,eI=t.default.form.withConfig({componentId:"sc-bf06a306-5"})`
  display: flex;
  flex-direction: column;
  width: 100%;
`,ek=t.default.textarea.withConfig({componentId:"sc-bf06a306-6"})`
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
`,ez=t.default.div.withConfig({componentId:"sc-bf06a306-7"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  margin-top: 12px;

  @media (max-width: 768px) {
    align-items: stretch;
    flex-direction: column;
  }
`,eD=t.default.div.withConfig({componentId:"sc-bf06a306-8"})`
  font-size: 12px;
  color: #9b9b9b;
`,eS=t.default.button.withConfig({componentId:"sc-bf06a306-9"})`
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
`,eE=t.default.input.withConfig({componentId:"sc-bf06a306-10"})`
  display: none;
`,eO=t.default.div.withConfig({componentId:"sc-bf06a306-11"})`
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
`,eF=({recipe:e})=>{let[t,n]=(0,g.useState)(0),[o,a]=(0,g.useState)(null),[d,r]=(0,g.useState)(""),[s,c]=(0,g.useState)("");(0,g.useEffect)(()=>{if(!s)return;let e=setTimeout(()=>{c("")},5e3);return()=>clearTimeout(e)},[s]);let l=async e=>{e.preventDefault(),n(0),r(""),c("Спасибо за ваш отзыв.")};return(0,i.jsxs)(ej,{children:[(0,i.jsx)(ev,{children:"Оцените рецепт"}),(0,i.jsxs)(eC,{children:[(0,i.jsx)(ey,{children:[1,2,3,4,5].map(e=>(0,i.jsx)(e$,{active:e<=(o??t),onClick:()=>n(e),onMouseEnter:()=>a(e),onMouseLeave:()=>a(null),children:(0,i.jsx)(ew.FaStar,{})},e))}),(0,i.jsxs)(eI,{onSubmit:l,children:[(0,i.jsx)(eE,{type:"hidden",name:"recipe",value:e}),(0,i.jsx)(ek,{value:d,onChange:e=>r(e.target.value.slice(0,300)),placeholder:"Ваш комментарий поможет нам сделать рецепт лучше!"}),(0,i.jsxs)(ez,{children:[(0,i.jsxs)(eD,{children:["Осталось ",300-d.length]}),(0,i.jsx)(eS,{type:"submit",children:"Отправить"})]})]})]}),(0,i.jsx)(eO,{visible:!!s,children:s})]})},eP=t.default.div.withConfig({componentId:"sc-ccad5bb6-0"})`
  width: 100%;
  margin-top: 18px;
`,eL=t.default.h4.withConfig({componentId:"sc-ccad5bb6-1"})`
  font-size: 20px;
  font-weight: 700;
  color: #241b14;
  margin-bottom: 16px;

  @media ${a.maxDevice.laptop} {
    padding: 0 4px;
  }
`,eA=t.default.div.withConfig({componentId:"sc-ccad5bb6-2"})`
  background: #ffffff;
  border-radius: 20px;
  padding: 8px;
  box-shadow: 0 14px 40px rgba(44, 31, 20, 0.08);
`,eM=t.default.div.withConfig({componentId:"sc-ccad5bb6-3"})`
  display: flex;
  gap: 12px;
  padding: 18px;
  border-radius: 16px;

  &:not(:last-child) {
    border-bottom: 1px solid #f3ece4;
  }
`,eT=t.default.img.withConfig({componentId:"sc-ccad5bb6-4"})`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`,eR=t.default.div.withConfig({componentId:"sc-ccad5bb6-5"})`
  display: flex;
  flex-direction: column;
`,eB=t.default.div.withConfig({componentId:"sc-ccad5bb6-6"})`
  display: flex;
  align-items: center;
  gap: 10px;
`,eY=t.default.span.withConfig({componentId:"sc-ccad5bb6-7"})`
  font-weight: 600;
  color: #1c1c1c;
`,eN=t.default.div.withConfig({componentId:"sc-ccad5bb6-8"})`
  display: flex;
  gap: 2px;
`,eU=t.default.p.withConfig({componentId:"sc-ccad5bb6-9"})`
  font-size: 14px;
  line-height: 1.6;
  color: #5f554d;
  margin: 8px 0 0;
`,eW=t.default.div.withConfig({componentId:"sc-ccad5bb6-10"})`
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
`,eq=({list:e})=>(0,i.jsxs)(eP,{children:[(0,i.jsx)(eL,{children:"Комментарии"}),e&&e.length>0?(0,i.jsx)(eA,{children:e.map(e=>(0,i.jsxs)(eM,{children:[e.avatar?(0,i.jsx)(eT,{src:e.avatar,alt:e.name}):null,(0,i.jsxs)(eR,{children:[(0,i.jsxs)(eB,{children:[(0,i.jsx)(eY,{children:e.name}),(0,i.jsx)(eN,{children:[void 0,void 0,void 0,void 0,void 0].map((t,n)=>(0,i.jsx)(ew.FaStar,{size:14,color:n<e.rating?"#FFA500":"#E0E0E0"},n))})]}),(0,i.jsx)(eU,{children:e.text})]})]},e.id))}):(0,i.jsxs)(eW,{children:[(0,i.jsx)(d.FiMessageCircle,{}),(0,i.jsx)("span",{children:"Пока нет комментариев — будьте первым!"})]})]}),eK=t.default.p.withConfig({componentId:"sc-4ebe634-0"})`
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
`,eG=t.default.span.withConfig({componentId:"sc-4ebe634-1"})`
  font-size: 2.2rem;
  line-height: 2.4rem;
  text-transform: uppercase;
  color: #333;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`,eH=t.default.span.withConfig({componentId:"sc-4ebe634-2"})`
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
`,eJ=({text:e})=>(0,i.jsxs)(eK,{children:[(0,i.jsx)(eG,{children:"Внимание!"}),(0,i.jsx)(eH,{children:e})]});var eX=e.i(65191);let eZ=t.default.div.withConfig({componentId:"sc-80ae5a18-0"})`
  border-radius: 18px;
  background: white;
  overflow: hidden;
  box-shadow: 0 12px 36px rgba(44, 31, 20, 0.07);
`,e_=t.default.button.withConfig({componentId:"sc-80ae5a18-1"})`
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
`,eQ=t.default.div.withConfig({componentId:"sc-80ae5a18-2"})`
  display: flex;
  align-items: center;
  gap: 12px;
`,eV=t.default.span.withConfig({componentId:"sc-80ae5a18-3"})`
  color: #241b14;
`,e0=t.default.span.withConfig({componentId:"sc-80ae5a18-4"})`
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0deg)"};
  color: #333;
  transition: transform 0.3s;
  font-size: 20px;
`,e1=t.default.div.withConfig({componentId:"sc-80ae5a18-5"})`
  max-height: ${({$isOpen:e})=>e?"2000px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease;
`,e2=t.default.div.withConfig({componentId:"sc-80ae5a18-6"})`
  padding: 18px;
  border-top: 1px solid #f1e8df;
`,e4=t.default.div.withConfig({componentId:"sc-80ae5a18-7"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
  padding: 12px;
  border-radius: 14px;
  background: #fffaf5;
`,e5=t.default.span.withConfig({componentId:"sc-80ae5a18-8"})`
  font-size: 14px;
  color: #7c6958;
`,e8=t.default.div.withConfig({componentId:"sc-80ae5a18-9"})`
  display: flex;
  align-items: center;
  gap: 4px;
`,e3=t.default.button.withConfig({componentId:"sc-80ae5a18-10"})`
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
`,e6=t.default.span.withConfig({componentId:"sc-80ae5a18-11"})`
  font-size: 16px;
  font-weight: 700;
  min-width: 40px;
  text-align: center;
`,e7=t.default.div.withConfig({componentId:"sc-80ae5a18-12"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 18px;
`,e9=t.default.label.withConfig({componentId:"sc-80ae5a18-13"})`
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
`,ie=t.default.div.withConfig({componentId:"sc-80ae5a18-14"})`
  position: relative;
  width: 18px;
  height: 18px;
`,ii=t.default.input.attrs({type:"checkbox"}).withConfig({componentId:"sc-80ae5a18-15"})`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  cursor: pointer;
`,it=t.default.div.withConfig({componentId:"sc-80ae5a18-16"})`
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
`,io=t.default.svg.withConfig({componentId:"sc-80ae5a18-17"})`
  width: 12px;
  height: 12px;
  fill: none;
  stroke: white;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`,ia=t.default.div.withConfig({componentId:"sc-80ae5a18-18"})`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,id=t.default.span.withConfig({componentId:"sc-80ae5a18-19"})`
  font-weight: 500;
`,ir=t.default.span.withConfig({componentId:"sc-80ae5a18-20"})`
  color: #666;
  font-size: 13px;
`,is=t.default.button.withConfig({componentId:"sc-80ae5a18-21"})`
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
`,ic=({data:e,recipeName:t})=>{let[n,o]=(0,g.useState)(!0),[a,d]=(0,g.useState)(2),[r,s]=(0,g.useState)(Array.from({length:e.length},()=>!1)),c=(0,eX.useShoppingListStore)(e=>e.addItems),l=e=>{d(Math.max(1,a+e))},p=e=>{let i=(e=>{if(!e.count)return e.gauge;let i="string"==typeof e.count?parseFloat(e.count):e.count;if(Number.isNaN(i))return e.gauge;let t=i/2*a,n=Number.isInteger(t)?t:t.toFixed(1);return`${n} ${e.gauge}`})(e);return e.note?`${i} (${e.note})`:i},f=r.some(e=>e);return(0,i.jsxs)(eZ,{children:[(0,i.jsxs)(e_,{onClick:()=>o(!n),children:[(0,i.jsx)(eQ,{children:(0,i.jsx)(eV,{children:"Ингредиенты"})}),(0,i.jsx)(e0,{$isOpen:n,children:"▼"})]}),(0,i.jsx)(e1,{$isOpen:n,children:(0,i.jsxs)(e2,{children:[(0,i.jsxs)(e4,{children:[(0,i.jsx)(e5,{children:"Количество порций:"}),(0,i.jsxs)(e8,{children:[(0,i.jsx)(e3,{onClick:()=>l(-1),$disabled:1===a,disabled:1===a,children:"-"}),(0,i.jsx)(e6,{children:a}),(0,i.jsx)(e3,{onClick:()=>l(1),children:"+"})]})]}),(0,i.jsx)(e7,{children:e.map((e,t)=>(0,i.jsxs)(e9,{children:[(0,i.jsxs)(ie,{children:[(0,i.jsx)(ii,{checked:r[t],onChange:()=>{let e;(e=[...r])[t]=!e[t],s(e)}}),(0,i.jsx)(it,{$checked:r[t],children:r[t]&&(0,i.jsx)(io,{viewBox:"0 0 24 24",children:(0,i.jsx)("polyline",{points:"20 6 9 17 4 12"})})})]}),(0,i.jsxs)(ia,{children:[(0,i.jsx)(id,{children:e.name}),(0,i.jsx)(ir,{children:p(e)})]})]},`${e.name}-${e.count??""}-${e.gauge}-${e.note??""}`))}),(0,i.jsx)(is,{type:"button",$disabled:!f,disabled:!f,onClick:()=>{c(e.reduce((e,i,n)=>(r[n]&&e.push({name:i.name,amount:p(i),recipeName:t}),e),[])),s(Array.from({length:e.length},()=>!1))},children:"Добавить в список покупок"})]})})]})},il=t.default.div.withConfig({componentId:"sc-f38e5315-0"})`
  margin: 0px;
`,ip=t.default.div.withConfig({componentId:"sc-f38e5315-1"})`
  white-space: pre-line;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.1;
  color: ${({color:e})=>e||"#181818"};
`,ix=({value:e})=>(0,i.jsx)(il,{children:(0,i.jsx)(ip,{color:"gray",children:e})}),ig=t.default.section.withConfig({componentId:"sc-19274b0c-0"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 12px 36px rgba(44, 31, 20, 0.07);

  @media ${a.maxDevice.laptop} {
    width: 100%;
    padding-left: 0;
    text-align: start;
  }
`,ih=t.default.section.withConfig({componentId:"sc-19274b0c-1"})`
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
`,im=t.default.span.withConfig({componentId:"sc-19274b0c-2"})`
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
`,iu=({data:e})=>(0,i.jsxs)(ig,{children:[(0,i.jsx)(B,{children:"Оборудование"}),e.length?(0,i.jsx)(ih,{$background:"#fff",children:e.map(e=>(0,i.jsx)(im,{children:e.name},e.name))}):(0,i.jsx)(ix,{value:"Список оборудования будет доступен позднее..."})]}),ib=t.default.section.withConfig({componentId:"sc-71cd220b-0"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 22px;

  @media ${a.maxDevice.laptop} {
    width: 100%;
    border-left: none;
    padding-left: 0;
    text-align: start;
  }
`,iw=t.default.article.withConfig({componentId:"sc-71cd220b-1"})`
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

  @media ${a.maxDevice.laptop} {
    grid-template-columns: 40px minmax(0, 1fr);
    padding: 18px;
    gap: 12px;
  }
`,ij=t.default.div.withConfig({componentId:"sc-71cd220b-2"})`
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

  @media ${a.maxDevice.laptop} {
    width: 40px;
    height: 40px;
    font-size: 0.9rem;
  }
`,iv=t.default.div.withConfig({componentId:"sc-71cd220b-3"})`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,iC=t.default.article.withConfig({componentId:"sc-71cd220b-4"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,iy=t.default.div.withConfig({componentId:"sc-71cd220b-5"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media ${a.maxDevice.laptop} {
    gap: 8px;
  }
`,i$=t.default.section.withConfig({componentId:"sc-71cd220b-6"})`
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

  @media ${a.maxDevice.laptop} {
    height: auto;
  }
`,iI=t.default.span.withConfig({componentId:"sc-71cd220b-7"})`
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
`,ik=t.default.h2.withConfig({componentId:"sc-71cd220b-8"})`
  font-size: 1.35rem;
  font-weight: 800;
  margin-bottom: 0;
  color: #241b14;
  letter-spacing: 0;

  @media ${a.maxDevice.laptop} {
    font-size: 1.2rem;
  }
`,iz=t.default.article.withConfig({componentId:"sc-71cd220b-9"})`
  width: 100%;
  font-size: 1rem;
  line-height: 1.75;
  color: #5f554d;
  max-width: 780px;

  @media ${a.maxDevice.laptop} {
    width: 100%;
    font-size: 0.85rem;
  }
`,iD=({stepsData:e})=>(0,i.jsx)(ib,{children:e?.map((e,t)=>(0,i.jsxs)(iw,{children:[(0,i.jsx)(ij,{children:t+1}),(0,i.jsxs)(iv,{children:[(0,i.jsxs)(iC,{children:[(0,i.jsx)(ik,{children:`Шаг ${t+1}`}),(0,i.jsx)(iz,{children:e.description})]}),(0,i.jsx)(iy,{children:e.ingredients?.length>0&&(0,i.jsx)(i$,{children:e.ingredients.map(e=>(0,i.jsx)(iI,{children:(({count:e,gauge:i,name:t})=>[t,e,i].filter(e=>null!=e&&String(e).trim().length>0).join(" "))(e)},`${t}-ingredient-${e.name}`))})})]})]},t))}),iS=t.default.div.withConfig({componentId:"sc-18313306-0"})`
  display: grid;
  grid-template-columns: minmax(280px, 340px) minmax(0, 1fr);
  gap: 36px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  align-items: flex-start;

  @media ${a.maxDevice.laptop} {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`,iE=t.default.main.withConfig({componentId:"sc-18313306-1"})`
  background:
    radial-gradient(circle at top left, rgba(255, 132, 2, 0.08), transparent 34rem),
    linear-gradient(180deg, #fffaf5 0, #fff 420px);
`,iO=t.default.section.withConfig({componentId:"sc-18313306-2"})`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 0;
  position: sticky;
  top: 96px;

  @media ${a.maxDevice.laptop} {
    width: 100%;
    position: static;
  }
`,iF=t.default.section.withConfig({componentId:"sc-18313306-3"})`
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 30px;

  @media ${a.maxDevice.laptop} {
    width: 100%;
  }
`,iP=t.default.section.withConfig({componentId:"sc-18313306-4"})`
  display: none;
`;e.s(["default",0,({recipe:e})=>{let t=e?.categories?.[0]?.name,a=t?o.RECIPES_OBJ[t]?.slice(0,10):[];return(0,i.jsxs)(iE,{children:[(0,i.jsxs)(n.PageWrapper,{children:[e?.warning?(0,i.jsx)(eJ,{text:e.warning}):null,(0,i.jsx)(T,{recipe:e}),e&&(0,i.jsxs)(iS,{children:[(0,i.jsxs)(iO,{children:[(0,i.jsx)(ic,{data:e.ingredients,recipeName:e.title}),(0,i.jsx)(ee,{tips:e?.tips||[]}),(0,i.jsx)(el,{variations:e?.variations||[]}),(0,i.jsx)(eb,{history:e?.historyDescription})]}),(0,i.jsxs)(iF,{id:"cooking-steps",children:[(0,i.jsx)(iu,{data:e.equipments}),(0,i.jsx)(iD,{stepsData:e.cookingRecipe}),(0,i.jsx)(eq,{list:e?.comments||[]}),(0,i.jsx)(eF,{recipe:e.title})]})]}),(0,i.jsx)(W,{recipes:a})]}),(0,i.jsx)(iP,{children:e?.searchRequests?.map(e=>(0,i.jsx)("p",{children:e},e))})]})}],83685)}]);