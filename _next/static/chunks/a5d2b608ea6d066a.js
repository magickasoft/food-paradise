(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,83685,e=>{"use strict";var a=e.i(43476),i=e.i(97053),n=e.i(41582),t=e.i(95631),l=e.i(4529),o=e.i(92199),d=e.i(53070);let r=i.default.div.withConfig({componentId:"sc-bb5602da-0"})`
  width: 100%;
  max-width: 680px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin: 0 0 10px;

  @media ${l.maxDevice.laptop} {
    gap: 8px;
  }
`,g=i.default.div.withConfig({componentId:"sc-bb5602da-1"})`
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
`,s=i.default.span.withConfig({componentId:"sc-bb5602da-2"})`
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
`,u=i.default.span.withConfig({componentId:"sc-bb5602da-3"})`
  font-size: 0.92rem;
  line-height: 1;
  font-weight: 700;
  color: #2c2118;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`,m=i.default.span.withConfig({componentId:"sc-bb5602da-4"})`
  font-size: 0.82rem;
  line-height: 1;
  color: #8b7662;
`,c=({rating:e,commentsCount:i,preparation:n,time:t,calories:l})=>{let c=[{icon:(0,a.jsx)(o.FiStar,{}),value:e,gauge:`(${i})`},{icon:(0,a.jsx)(d.LuChefHat,{}),value:n?`${n}`:"—",gauge:"мин подготовки"},{icon:(0,a.jsx)(o.FiClock,{}),value:`${t}`,gauge:"мин всего"},{icon:(0,a.jsx)(o.FiZap,{}),value:l?`${l}`:"—",gauge:"ккал"}].filter(e=>"—"!==e.value);return(0,a.jsx)(r,{children:c.map((e,i)=>(0,a.jsxs)(g,{children:[(0,a.jsx)(s,{children:e.icon}),(0,a.jsx)(u,{children:e.value}),(0,a.jsx)(m,{children:e.gauge})]},i))})};var f=e.i(71645),p=e.i(40141);function h(e){return(0,p.GenIcon)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M349.6 64c-36.4 0-70.7 16.7-93.6 43.9C233.1 80.7 198.8 64 162.4 64 97.9 64 48 114.2 48 179.1c0 79.5 70.7 143.3 177.8 241.7L256 448l30.2-27.2C393.3 322.4 464 258.6 464 179.1 464 114.2 414.1 64 349.6 64zm-80.8 329.3l-4.2 3.9-8.6 7.8-8.6-7.8-4.2-3.9c-50.4-46.3-94-86.3-122.7-122-28-34.7-40.4-63.1-40.4-92.2 0-22.9 8.4-43.9 23.7-59.3 15.2-15.4 36-23.8 58.6-23.8 26.1 0 52 12.2 69.1 32.5l24.5 29.1 24.5-29.1c17.1-20.4 43-32.5 69.1-32.5 22.6 0 43.4 8.4 58.7 23.8 15.3 15.4 23.7 36.5 23.7 59.3 0 29-12.5 57.5-40.4 92.2-28.8 35.7-72.3 75.7-122.8 122z"},child:[]}]})(e)}let x=i.default.div.withConfig({componentId:"sc-43faa96-0"})`
  width: 100%;
  max-width: 680px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  padding: 8px 0 14px;
  margin: 0;

  @media ${l.maxDevice.laptop} {
    align-items: stretch;
  }
`,y=54,b=50,w="0 28px",k="0 22px",v=16,j=14,C="0 16px 30px rgba(231, 94, 2, 0.24)",z=i.default.a.withConfig({componentId:"sc-43faa96-1"})`
  display: inline-flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  height: ${y}px;
  padding: ${w};
  font-size: ${v}px;
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
    box-shadow: ${C};
  }

  @media ${l.maxDevice.laptop} {
    height: ${b}px;
    font-size: ${j}px;
    padding: ${k};
  }

  @media ${l.maxDevice.mobileL} {
    width: 100%;
    justify-content: center;
  }
`,I=i.default.button.withConfig({componentId:"sc-43faa96-2"})`
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
    box-shadow: ${C};
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

  @media ${l.maxDevice.laptop} {
    width: 50px;
    height: 50px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`,$=i.default.div.withConfig({componentId:"sc-43faa96-3"})`
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

  @media ${l.maxDevice.mobileL} {
    right: 16px;
    bottom: 16px;
    left: 16px;
  }
`,S=()=>{let[e,i]=(0,f.useState)(""),[n,t]=(0,f.useState)(!1);(0,f.useEffect)(()=>{if(!e)return;let a=window.setTimeout(()=>{i(""),t(!1)},2500);return()=>window.clearTimeout(a)},[e]);let l=async()=>!!navigator.clipboard&&(await navigator.clipboard.writeText(window.location.href),!0),r=async()=>{let e=navigator.userAgent,a=navigator.platform||e,n=/iPhone|iPad|iPod/i.test(a)||/Mac/i.test(a)&&navigator.maxTouchPoints>1,t=/Android/i.test(e),o=n||t||/Mobi/i.test(e),d=/Mac/i.test(a),r=n?"Нажмите «Поделиться» и выберите «Добавить в закладки».":t?"Откройте меню браузера и выберите «Добавить в закладки».":o?"Откройте меню браузера и добавьте страницу в закладки.":`Нажмите ${d?"⌘D":"Ctrl+D"}, чтобы добавить рецепт в закладки браузера.`;try{await l(),i(`Ссылка скопирована. ${r}`)}catch{i(r)}},g=async()=>{if(navigator.share){try{await navigator.share({title:document.title,url:window.location.href})}catch{}return}try{await l(),t(!0),i("Ссылка скопирована в буфер обмена.")}catch{i("Не удалось скопировать ссылку. Скопируйте адрес страницы из браузера.")}};return(0,a.jsxs)(x,{children:[(0,a.jsx)(z,{href:"#cooking-steps",title:"Начать готовить","aria-label":"Начать готовить",rel:"noopener noreferrer nofollow",children:"Начать готовить"}),(0,a.jsx)(I,{onClick:r,title:"Добавить в закладки","aria-label":"Добавить в закладки",children:(0,a.jsx)(h,{})}),(0,a.jsx)(I,{onClick:g,title:"Поделиться","aria-label":"Поделиться",children:n?(0,a.jsx)(o.FiCheck,{}):(0,a.jsx)(d.LuShare2,{})}),(0,a.jsx)($,{$visible:!!e,role:"status","aria-live":"polite",children:e})]})},D=i.default.div.withConfig({componentId:"sc-2d704074-0"})`
  max-width: 1280px;
  margin: 0 auto;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
  padding: 24px 0 42px;

  @media ${l.maxDevice.laptop} {
    padding: 12px 16px 30px;
  }

  @media ${l.maxDevice.mobileL} {
    padding: 12px 12px 28px;
  }
`,P=i.default.header.withConfig({componentId:"sc-2d704074-1"})`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(360px, 0.82fr);
  gap: 36px;
  align-items: center;

  @media ${l.maxDevice.laptop} {
    grid-template-columns: 1fr;
    gap: 22px;
  }
`,M=i.default.article.withConfig({componentId:"sc-2d704074-2"})`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 12px 0;

  @media ${l.maxDevice.laptop} {
    order: 2;
  }
`,K=i.default.article.withConfig({componentId:"sc-2d704074-3"})`
  position: relative;
  display: flex;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 24px;
  background: #f4eee6;
  box-shadow: 0 24px 60px rgba(48, 34, 24, 0.18);

  @media ${l.maxDevice.laptop} {
    aspect-ratio: 1.5 / 1;
    order: 1;
    width: calc(100% + 32px);
    margin: -12px -16px 0;
    border-radius: 0 0 20px 20px;
  }

  @media ${l.maxDevice.mobileL} {
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
`,O=i.default.img.withConfig({componentId:"sc-2d704074-4"})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.01);
`,F=i.default.article.withConfig({componentId:"sc-2d704074-5"})`
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
`,B=i.default.h1.withConfig({componentId:"sc-2d704074-6"})`
  max-width: 760px;
  margin-bottom: 18px;
  line-height: 1.05;
  text-align: left;
  font-size: clamp(2.15rem, 4vw, 4.5rem);
  letter-spacing: 0;
  color: #211a15;

  @media ${l.maxDevice.laptop} {
    max-width: 100%;
  }
`,T=i.default.article.withConfig({componentId:"sc-2d704074-7"})`
  max-width: 680px;
  margin-top: 8px;
  font-size: 1.05rem;
  line-height: 1.75;
  text-align: left;
  color: #65594f;

  @media ${l.maxDevice.laptop} {
    font-size: 0.9rem;
    line-height: 1.65;
  }
`;function E({recipe:e}){return(0,a.jsx)(D,{children:e?(0,a.jsxs)(P,{children:[(0,a.jsxs)(M,{children:[(0,a.jsx)(B,{children:e.title}),(0,a.jsx)(c,{rating:e.rating,commentsCount:e.comments?e.comments.length:0,preparation:e.preparation,time:e.time,calories:e.calories}),(0,a.jsx)(S,{}),(0,a.jsx)(T,{children:e.description})]}),(0,a.jsx)(K,{children:e.img?(0,a.jsx)(O,{src:e.img,alt:e.name}):(0,a.jsx)(F,{children:"Нет изображения"})})]}):(0,a.jsx)(B,{children:"Recipe not found"})})}let L=i.default.h2.withConfig({componentId:"sc-7025c96b-0"})`
  font-size: 1.1rem;
  line-height: 1.4;
  font-weight: 700;
  margin-bottom: 0;
  width: 100%;
  color: #241b14;
  padding: 16px 18px 12px;
  border-bottom: 1px solid #f1e8df;
`;function R({children:e}){return(0,a.jsx)(L,{children:e})}var A=e.i(60777),G=e.i(50506);let N=i.default.section.withConfig({componentId:"sc-776cbdbe-0"})`
  width: 100%;
  max-width: 1280px;
  margin: 44px auto 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 28px 0 30px;
  padding-bottom: 30px;
`;function V({recipes:e}){return void 0===e||e?.length===0?null:(0,a.jsxs)(N,{children:[(0,a.jsx)(R,{children:"Попробуйте также"}),(0,a.jsx)(A.RecipesScroll,{children:e.map(({key:e,name:i,...n})=>(0,a.jsx)(G.RecipeCard,{name:i,...n},e||i))})]})}let Y=i.default.div.withConfig({componentId:"sc-91da13b8-0"})`
  max-height: ${({$isOpen:e})=>e?"2000px":"0"};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: ${({$isOpen:e})=>e?"20px":"0"};
  padding-top: ${({$isOpen:e})=>e?"8px":"0"};
  margin: 0;
  list-style: none;
  width: 100%;
`,Z=i.default.li.withConfig({componentId:"sc-91da13b8-1"})`
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
`;function U({tips:e,isOpen:i}){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(Y,{$isOpen:i,children:e.map((e,i)=>(0,a.jsx)(Z,{children:e},i))})})}var q=function(e){var a=void 0===window.navigator?"":navigator.userAgent;if("true"===localStorage.getItem("debug-mobile")||"true"===new URLSearchParams(window.location.search).get("mobile"))return void e(!0);var i=!!a.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop|Mobile|mobile/i),n="ontouchstart"in window||navigator.maxTouchPoints>0,t=window.innerWidth<=480;e(i||n&&t)},W=function(){var e=(0,f.useState)(!1),a=e[0],i=e[1];return(0,f.useEffect)(function(){q(i);var e=function(){q(i)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}},[]),a};(0,f.createContext)(void 0);let H=i.default.section.withConfig({componentId:"sc-3f9d3770-0"})`
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

  @media ${l.maxDevice.laptop} {
    flex-direction: column;
    padding: 0px;
    max-width: 100%;
  }
`,J=i.default.button.withConfig({componentId:"sc-3f9d3770-1"})`
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
`,X=i.default.div.withConfig({componentId:"sc-3f9d3770-2"})`
  display: flex;
  align-items: center;
  gap: 12px;
`,_=i.default.span.withConfig({componentId:"sc-3f9d3770-3"})`
  color: #4f3a18;
`,Q=i.default.span.withConfig({componentId:"sc-3f9d3770-4"})`
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0deg)"};
  color: #333;
  transition: transform 0.3s;
  font-size: 20px;
`;function ee({tips:e}){let i=W(),[n,t]=(0,f.useState)(!1);return((0,f.useEffect)(()=>{t(!i)},[i]),e&&e.length>0)?(0,a.jsxs)(H,{children:[(0,a.jsxs)(J,{onClick:()=>t(!n),$isOpen:n,children:[(0,a.jsx)(X,{children:(0,a.jsx)(_,{children:"Советы"})}),(0,a.jsx)(Q,{$isOpen:n,children:"▼"})]}),(0,a.jsx)(U,{isOpen:n,tips:e})]}):null}let ea=i.default.ul.withConfig({componentId:"sc-cfc4c557-0"})`
  max-height: ${({$isOpen:e})=>e?"2000px":"0"};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: ${({$isOpen:e})=>e?"20px":"0"};
  padding-top: ${({$isOpen:e})=>e?"8px":"0"};
  margin: 0;
  list-style: none;
  width: 100%;
`,ei=i.default.li.withConfig({componentId:"sc-cfc4c557-1"})`
  padding: 12px 4px;
  border-bottom: 1px solid #f0f0f0;
  color: #4c5563;
  font-size: 0.92rem;
  line-height: 1.55;

  &:last-child {
    border-bottom: none;
  }
`,en=i.default.strong.withConfig({componentId:"sc-cfc4c557-2"})`
  display: inline-block;
  background: #e9f0ff;
  padding: 3px 8px;
  border-radius: 999px;
  margin-bottom: 4px;
  font-size: 0.9rem;
  color: #233553;
`;function et({variations:e,isOpen:i}){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(ea,{$isOpen:i,children:e.map((e,i)=>(0,a.jsxs)(ei,{children:[(0,a.jsx)(en,{children:e.name}),(0,a.jsx)("div",{children:e.changes})]},i))})})}let el=i.default.section.withConfig({componentId:"sc-bf2e0646-0"})`
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

  @media ${l.maxDevice.laptop} {
    flex-direction: column;
    padding: 0px;
  }
`,eo=i.default.button.withConfig({componentId:"sc-bf2e0646-1"})`
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
`,ed=i.default.div.withConfig({componentId:"sc-bf2e0646-2"})`
  display: flex;
  align-items: center;
  gap: 12px;
`,er=i.default.span.withConfig({componentId:"sc-bf2e0646-3"})`
  color: #233553;
`,eg=i.default.span.withConfig({componentId:"sc-bf2e0646-4"})`
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0deg)"};
  color: #333;
  transition: transform 0.3s;
  font-size: 20px;
`;function es({variations:e}){let i=W(),[n,t]=(0,f.useState)(!1);return((0,f.useEffect)(()=>{t(!i)},[i]),e&&e.length>0)?(0,a.jsxs)(el,{children:[(0,a.jsxs)(eo,{onClick:()=>t(!n),$isOpen:n,children:[(0,a.jsx)(ed,{children:(0,a.jsx)(er,{children:"Вариации"})}),(0,a.jsx)(eg,{$isOpen:n,children:"▼"})]}),(0,a.jsx)(et,{variations:e,isOpen:n})]}):null}let eu=i.default.li.withConfig({componentId:"sc-8d123e7c-0"})`
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
`;function em({isOpen:e,history:i}){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(eu,{$isOpen:e,children:i})})}let ec=i.default.section.withConfig({componentId:"sc-5adc3107-0"})`
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

  @media ${l.maxDevice.laptop} {
    flex-direction: column;
    padding: 0px;
  }
`,ef=i.default.button.withConfig({componentId:"sc-5adc3107-1"})`
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
`,ep=i.default.div.withConfig({componentId:"sc-5adc3107-2"})`
  display: flex;
  align-items: center;
  gap: 12px;
`,eh=i.default.span.withConfig({componentId:"sc-5adc3107-3"})`
  color: #463322;
`,ex=i.default.span.withConfig({componentId:"sc-5adc3107-4"})`
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0deg)"};
  color: #333;
  transition: transform 0.3s;
  font-size: 20px;
`;function ey({history:e}){let i=W(),[n,t]=(0,f.useState)(!1);return((0,f.useEffect)(()=>{t(!i)},[i]),e)?(0,a.jsxs)(ec,{children:[(0,a.jsxs)(ef,{onClick:()=>t(!n),$isOpen:n,children:[(0,a.jsx)(ep,{children:(0,a.jsx)(eh,{children:"История"})}),(0,a.jsx)(ex,{$isOpen:n,children:"▼"})]}),(0,a.jsx)(em,{isOpen:n,history:e})]}):null}var eb=e.i(11152);let ew=i.default.div.withConfig({componentId:"sc-bf06a306-0"})`
  width: 100%;
  margin-top: 12px;
`,ek=i.default.h3.withConfig({componentId:"sc-bf06a306-1"})`
  font-size: 20px;
  font-weight: 700;
  color: #241b14;
  margin-bottom: 16px;

  @media ${l.maxDevice.laptop} {
    padding: 0 4px;
  }
`,ev=i.default.div.withConfig({componentId:"sc-bf06a306-2"})`
  background: #ffffff;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 14px 40px rgba(44, 31, 20, 0.08);
`,ej=i.default.div.withConfig({componentId:"sc-bf06a306-3"})`
  display: flex;
  gap: 6px;
  margin-bottom: 18px;
`,eC=i.default.button.withConfig({componentId:"sc-bf06a306-4"})`
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
`,ez=i.default.form.withConfig({componentId:"sc-bf06a306-5"})`
  display: flex;
  flex-direction: column;
  width: 100%;
`,eI=i.default.textarea.withConfig({componentId:"sc-bf06a306-6"})`
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
`,e$=i.default.div.withConfig({componentId:"sc-bf06a306-7"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  margin-top: 12px;

  @media (max-width: 768px) {
    align-items: stretch;
    flex-direction: column;
  }
`,eS=i.default.div.withConfig({componentId:"sc-bf06a306-8"})`
  font-size: 12px;
  color: #9b9b9b;
`,eD=i.default.button.withConfig({componentId:"sc-bf06a306-9"})`
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
`,eP=i.default.input.withConfig({componentId:"sc-bf06a306-10"})`
  display: none;
`,eM=i.default.div.withConfig({componentId:"sc-bf06a306-11"})`
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
`,eK=({recipe:e})=>{let[i,n]=(0,f.useState)(0),[t,l]=(0,f.useState)(null),[o,d]=(0,f.useState)(""),[r,g]=(0,f.useState)("");(0,f.useEffect)(()=>{if(!r)return;let e=setTimeout(()=>{g("")},5e3);return()=>clearTimeout(e)},[r]);let s=async e=>{e.preventDefault(),n(0),d(""),g("Спасибо за ваш отзыв.")};return(0,a.jsxs)(ew,{children:[(0,a.jsx)(ek,{children:"Оцените рецепт"}),(0,a.jsxs)(ev,{children:[(0,a.jsx)(ej,{children:[1,2,3,4,5].map(e=>(0,a.jsx)(eC,{active:e<=(t??i),onClick:()=>n(e),onMouseEnter:()=>l(e),onMouseLeave:()=>l(null),children:(0,a.jsx)(eb.FaStar,{})},e))}),(0,a.jsxs)(ez,{onSubmit:s,children:[(0,a.jsx)(eP,{type:"hidden",name:"recipe",value:e}),(0,a.jsx)(eI,{value:o,onChange:e=>d(e.target.value.slice(0,300)),placeholder:"Ваш комментарий поможет нам сделать рецепт лучше!"}),(0,a.jsxs)(e$,{children:[(0,a.jsxs)(eS,{children:["Осталось ",300-o.length]}),(0,a.jsx)(eD,{type:"submit",children:"Отправить"})]})]})]}),(0,a.jsx)(eM,{visible:!!r,children:r})]})},eO=i.default.div.withConfig({componentId:"sc-ccad5bb6-0"})`
  width: 100%;
  margin-top: 18px;
`,eF=i.default.h4.withConfig({componentId:"sc-ccad5bb6-1"})`
  font-size: 20px;
  font-weight: 700;
  color: #241b14;
  margin-bottom: 16px;

  @media ${l.maxDevice.laptop} {
    padding: 0 4px;
  }
`,eB=i.default.div.withConfig({componentId:"sc-ccad5bb6-2"})`
  background: #ffffff;
  border-radius: 20px;
  padding: 8px;
  box-shadow: 0 14px 40px rgba(44, 31, 20, 0.08);
`,eT=i.default.div.withConfig({componentId:"sc-ccad5bb6-3"})`
  display: flex;
  gap: 12px;
  padding: 18px;
  border-radius: 16px;

  &:not(:last-child) {
    border-bottom: 1px solid #f3ece4;
  }
`,eE=i.default.img.withConfig({componentId:"sc-ccad5bb6-4"})`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`,eL=i.default.div.withConfig({componentId:"sc-ccad5bb6-5"})`
  display: flex;
  flex-direction: column;
`,eR=i.default.div.withConfig({componentId:"sc-ccad5bb6-6"})`
  display: flex;
  align-items: center;
  gap: 10px;
`,eA=i.default.span.withConfig({componentId:"sc-ccad5bb6-7"})`
  font-weight: 600;
  color: #1c1c1c;
`,eG=i.default.div.withConfig({componentId:"sc-ccad5bb6-8"})`
  display: flex;
  gap: 2px;
`,eN=i.default.p.withConfig({componentId:"sc-ccad5bb6-9"})`
  font-size: 14px;
  line-height: 1.6;
  color: #5f554d;
  margin: 8px 0 0;
`,eV=i.default.div.withConfig({componentId:"sc-ccad5bb6-10"})`
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
`,eY=({list:e})=>(0,a.jsxs)(eO,{children:[(0,a.jsx)(eF,{children:"Комментарии"}),e&&e.length>0?(0,a.jsx)(eB,{children:e.map(e=>(0,a.jsxs)(eT,{children:[e.avatar?(0,a.jsx)(eE,{src:e.avatar,alt:e.name}):null,(0,a.jsxs)(eL,{children:[(0,a.jsxs)(eR,{children:[(0,a.jsx)(eA,{children:e.name}),(0,a.jsx)(eG,{children:[void 0,void 0,void 0,void 0,void 0].map((i,n)=>(0,a.jsx)(eb.FaStar,{size:14,color:n<e.rating?"#FFA500":"#E0E0E0"},n))})]}),(0,a.jsx)(eN,{children:e.text})]})]},e.id))}):(0,a.jsxs)(eV,{children:[(0,a.jsx)(o.FiMessageCircle,{}),(0,a.jsx)("span",{children:"Пока нет комментариев — будьте первым!"})]})]}),eZ=i.default.p.withConfig({componentId:"sc-4ebe634-0"})`
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
`,eU=i.default.span.withConfig({componentId:"sc-4ebe634-1"})`
  font-size: 2.2rem;
  line-height: 2.4rem;
  text-transform: uppercase;
  color: #333;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`,eq=i.default.span.withConfig({componentId:"sc-4ebe634-2"})`
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
`,eW=({text:e})=>(0,a.jsxs)(eZ,{children:[(0,a.jsx)(eU,{children:"Внимание!"}),(0,a.jsx)(eq,{children:e})]});var eH=e.i(65191),eJ=e.i(32557),eX=e.i(11992),e_=e.i(37),eQ=e.i(65783),e0=e.i(83481),e1=e.i(44930),e2=e.i(66362),e4=e.i(67859),e5=e.i(45792),e8=e.i(48929),e3=e.i(87708),e6=e.i(26408),e7=e.i(18475),e9=e.i(83115),ae=e.i(87973),aa=e.i(32401),ai=e.i(17401),an=e.i(36356),at=e.i(32505),al=e.i(36897),ao=e.i(75080),ad=e.i(26942),ar=e.i(48716),ag=e.i(15235),as=e.i(41086),au=e.i(74403),am=e.i(26911),ac=e.i(36847),af=e.i(67659),ap=e.i(11011),ah=e.i(94441),ax=e.i(88021),ay=e.i(94804),ab=e.i(19036),aw=e.i(69423),ak=e.i(81346),av=e.i(13208),aj=e.i(35778),aC=e.i(97021),az=e.i(24758),aI=e.i(30044),a$=e.i(43030),aS=e.i(7925),aD=e.i(48674),aP=e.i(24269),aM=e.i(74251),aK=e.i(29049),aO=e.i(84034),aF=e.i(47681),aB=e.i(59027),aT=e.i(56474),aE=e.i(45791),aL=e.i(48835),aR=e.i(66558),aA=e.i(30570),aG=e.i(94020),aN=e.i(70288),aV=e.i(45643),aY=e.i(38743),aZ=e.i(48882),aU=e.i(29323),aq=e.i(54081),aW=e.i(1918),aH=e.i(45138),aJ=e.i(21870),aX=e.i(49606),a_=e.i(26085),aQ=e.i(1474),a0=e.i(95526),a1=e.i(49602),a2=e.i(59552),a4=e.i(77858),a5=e.i(62719),a8=e.i(16732),a3=e.i(37769),a6=e.i(45142),a7=e.i(68527),a9=e.i(47886),ie=e.i(71219),ia=e.i(62048),ii=e.i(73611),it=e.i(94912),il=e.i(35772),io=e.i(73023),id=e.i(21387),ir=e.i(75802),ig=e.i(78317),is=e.i(1342),iu=e.i(82920),im=e.i(82502),ic=e.i(27419),ip=e.i(20137),ih=e.i(66241),ix=e.i(84181),iy=e.i(24722),ib=e.i(36172),iw=e.i(92714),ik=e.i(54490),iv=e.i(46128),ij=e.i(22537),iC=e.i(72892),iz=e.i(6262),iI=e.i(35725),i$=e.i(21957),iS=e.i(18839),iD=e.i(68915),iP=e.i(6685),iM=e.i(10662),iK=e.i(41503),iO=e.i(59381),iF=e.i(85549),iB=e.i(70017),iT=e.i(94235),iE=e.i(54850),iL=e.i(20849),iR=e.i(42394),iA=e.i(61736),iG=e.i(79584),iN=e.i(51577),iV=e.i(19849),iY=e.i(96124),iZ=e.i(16199),iU=e.i(2385),iq=e.i(24546),iW=e.i(37338),iH=e.i(46683),iJ=e.i(25769),iX=e.i(14879),i_=e.i(48990),iQ=e.i(26522),i0=e.i(70293),i1=e.i(92884),i2=e.i(46193),i4=e.i(42612),i5=e.i(31052),i8=e.i(27847),i3=e.i(16033),i6=e.i(63525),i7=e.i(91644),i9=e.i(94004),ne=e.i(32242),na=e.i(43984);let ni={porkNeck:av.default,porkRibs:aj.default,chickenThighFillet:aw.default,chickenBreastFillet:ak.default,chickenBreast:ay.default,chickenWhole:ab.default,boiledSausage:ax.default,boiledPorkSausage:ah.default,milkSausages:iF.default,beef:iB.default,lard:iV.default,beefOnTheBone:iE.default,beefBones:iT.default,beefBrisket:iL.default,beefTenderloin:iG.default,groundBeef:iR.default,beefTongue:iA.default},nn={salmonFillet:iJ.default,salmonSalted:iX.default,herringFillet:i_.default,crabSticks:iQ.default,cannedFish:i0.default,redCaviar:i1.default},nt={greens:e7.default,dill:e3.default,parsley:e9.default,basil:e5.default,cilantro:e8.default,greenOnion:e6.default,spinach:ae.default,arugula:iU.default,beanSprouts:iW.default},nl={eggplant:iq.default,zucchini:il.default,tomato:a8.default,cucumber:a_.default,bellPepper:aW.default,beet:aq.default,carrot:aX.default,onion:a1.default,radish:a4.default,redOnion:a5.default,potato:a2.default,pumpkin:iY.default,sweetPotato:iZ.default,garlic:aQ.default,cabbage:aJ.default,broccoli:aH.default,olives:a0.default,greenPepper:ix.default,chiliPepper:iP.default,tomatoPaste:iD.default,cannedBeans:iN.default,lemon:a3.default,ginger:a6.default,celery:a7.default,lime:iH.default,champignons:a9.default,chanterelles:ie.default,freshPorcini:ia.default,mushrooms:ii.default,horseradishRoot:it.default,pickledCucumbers:i6.default,greenPeas:i7.default,cannedCorn:i9.default,avocado:ne.default},no={apple:i2.default,cranberry:i4.default,cherry:i5.default,cannedPineapple:i8.default},nd={water:ac.default,vodka:af.default,hotWater:al.default,carbonatedMineralWater:ai.default,lemonJuice:ar.default,milk:ag.default,kefir:ao.default,yogurt:ap.default,sourCream:as.default,cream20:an.default,cream33:at.default,creamCheese:aO.default,breadKvass:aa.default,vinegar:au.default,sherryVinegar:am.default,kefir32:ad.default,worcestershireSauce:iM.default,honey:iK.default,coconutCream:iO.default},nr={mustard:aM.default,fishSauce:aK.default,mayonnaise:na.default},ng={butter:aC.default,meltedButter:az.default,refinedVegetableOil:aD.default,vegetableOil:aP.default,oliveOil:aI.default,truffleOil:a$.default,sunflowerOil:aS.default},ns={whiteBread:e_.default,lavash:eX.default,flour:eJ.default,yeast:eQ.default,bakingPowder:io.default,croutons:id.default,ciabatta:ir.default,tartlets:ig.default},nu={fetaCheese:e0.default,hardCheese:e1.default},nm={oreganoDry:aR.default,groundBlackPepper:aB.default,blackPepper:aT.default,whitePepper:aE.default,salt:aA.default,sugar:aG.default,powderedSugar:aN.default,vanillaSugar:aV.default,cinnamon:i3.default,bayLeaf:aF.default,soda:ip.default,redPepperFlakes:ih.default,driedMint:iy.default,smokedPaprika:ib.default,cumin:iS.default,muscatNut:iw.default,thyme:ik.default,starAnise:iv.default,cinnamonStick:ij.default,driedPorcini:aL.default,cloves:iC.default,provencalHerbs:iz.default,driedHerbs:iI.default,gingerGround:i$.default},nc={sesameSeeds:aY.default,pumpkinSeeds:aZ.default,corianderSeeds:aU.default},nf={eggs:e2.default,eggWhite:e4.default},np={oatmeal:is.default,riceNoodles:iu.default,eggNoodles:ic.default,rice:im.default},nh={...nn,...ni,...nt,...nl,...no,...nd,...nr,...ng,...ns,...nu,...nm,...nc,...nf,...np},nx={arbuz:{name:"Арбуз (мякоть)",gauge:"г",img:null},bagetIliChiabatta:{name:"Багет или чиабатта",gauge:"шт.",img:null},bazilikSvezhiy:{name:"Базилик свежий",gauge:"г",img:null},balzamicheskiySous:{name:"Бальзамический соус",gauge:"ч.л",img:null},balzamicheskiyUksus:{name:"Бальзамический уксус",gauge:"ст.л",img:null},banan:{name:"Банан",gauge:"шт.",img:null},baranina:{name:"Баранина (окорок или корейка)",gauge:"г",img:null},bekon:{name:"Бекон",gauge:"г",img:null},bolgarskiePertsy:{name:"Болгарские перцы",gauge:"шт.",img:null},bolgarskiyPerets:{name:"Болгарский перец",gauge:"шт.",img:null},vanilnyyEkstrakt:{name:"Ванильный экстракт",gauge:"ч.л",img:null},vetchina:{name:"Ветчина",gauge:"г",img:null},vinnyyUksus:{name:"Винный уксус",gauge:"ст.л",img:null},vinograd:{name:"Виноград",gauge:"г",img:null},vishnya:{name:"Вишня (свежая или замороженная)",gauge:"г",img:null},voda:{name:"Вода (газированная или обычная)",gauge:"л",img:null},voda2:{name:"Вода (кипячёная)",gauge:"л",img:null},voda3:{name:"Вода (минеральная или фильтрованная)",gauge:"л",img:null},voda4:{name:"Вода (минеральная)",gauge:"мл",img:null},voda5:{name:"Вода (по необходимости)",gauge:"мл",img:null},voda6:{name:"Вода (фильтрованная)",gauge:"л",img:null},gazirovannayaVoda:{name:"Газированная вода",gauge:"мл",img:null},govyadina:{name:"Говядина (вырезка)",gauge:"г",img:null},govyadina2:{name:"Говядина (лопатка)",gauge:"г",img:null},govyazhiyFarsh:{name:"Говяжий фарш",gauge:"г",img:null},govyazhiyZhir:{name:"Говяжий жир",gauge:"г",img:null},govyazhiOtbivnye:{name:"Говяжьи отбивные",gauge:"г",img:null},goroshekKonservirovannyy:{name:"Горошек консервированный",gauge:"банка",img:null},gorchitsaDizhonskaya:{name:"Горчица дижонская",gauge:"ч.л",img:null},granatovyeZerna:{name:"Гранатовые зерна",gauge:"г",img:null},granatovyySous:{name:"Гранатовый соус (наршараб)",gauge:"мл",img:null},gretskieOrehi:{name:"Грецкие орехи",gauge:"г",img:null},grecheskiyYogurt:{name:"Греческий йогурт",gauge:"мл",img:null},grechnevayaKrupa:{name:"Гречневая крупа",gauge:"г",img:null},derevyannyeShpazhki:{name:"Деревянные шпажки",gauge:"шт.",img:null},dizhonskayaGorchitsa:{name:"Дижонская горчица",gauge:"ст.л",img:null},doktorskayaKolbasa:{name:"Докторская колбаса",gauge:"г",img:null},zelenyyLuk:{name:"Зеленый лук",gauge:"шт.",img:null},zelenyyChay:{name:"Зелёный чай",gauge:"ч.л",img:null},zira:{name:"Зира",gauge:"ч.л",img:null},izyum:{name:"Изюм",gauge:"г",img:null},imbir:{name:"Имбирь (свежий)",gauge:"см",img:null},inzhirSvezhiy:{name:"Инжир свежий",gauge:"шт.",img:null},yogurtNaturalnyy:{name:"Йогурт натуральный",gauge:"ст.л",img:null},kardamon:{name:"Кардамон (молотый)",gauge:"ч.л",img:null},kedrovayaDoska:{name:"Кедровая доска",gauge:"шт.",img:null},kedrovyeOrehi:{name:"Кедровые орехи",gauge:"г",img:null},kinzaSvezhaya:{name:"Кинза свежая",gauge:"пучок",img:null},kinoa:{name:"Киноа",gauge:"г",img:null},klubnika:{name:"Клубника",gauge:"г",img:null},kokosovoeMoloko:{name:"Кокосовое молоко",gauge:"мл",img:null},koriandrMolotyy:{name:"Кориандр молотый",gauge:"ч.л",img:null},korolevskieKrevetki:{name:"Королевские креветки",gauge:"г",img:null},krasnoeVino:{name:"Красное вино",gauge:"мл",img:null},krasnyyLuk:{name:"Красный лук",gauge:"шт.",img:null},krasnyyPeretsHlopyami:{name:"Красный перец хлопьями",gauge:"ч.л",img:null},krevetki:{name:"Креветки",gauge:"г",img:null},krupnyeKrevetki:{name:"Крупные креветки (тигровые)",gauge:"г",img:null},kukuruzaKonservirovannaya:{name:"Кукуруза консервированная",gauge:"банка",img:null},kukuruznyyKrahmal:{name:"Кукурузный крахмал",gauge:"ст.л",img:null},kunzhut:{name:"Кунжут",gauge:"ч.л",img:null},kunzhutnoeMaslo:{name:"Кунжутное масло",gauge:"ст.л",img:null},kurinayaGrudka:{name:"Куриная грудка",gauge:"г",img:null},kurinoeFile:{name:"Куриное филе",gauge:"г",img:null},kurinyeBedra:{name:"Куриные бедра",gauge:"г",img:null},kurkuma:{name:"Куркума",gauge:"ч.л",img:null},led:{name:"Лёд",gauge:"стакан",img:null},limonnayaTsedra:{name:"Лимонная цедра",gauge:"ч.л",img:null},listyLazani:{name:"Листы лазаньи",gauge:"г",img:null},listyaRomano:{name:"Листья романо",gauge:"г",img:null},losos:{name:"Лосось",gauge:"г",img:null},losos2:{name:"Лосось (стейки)",gauge:"г",img:null},luk:{name:"Лук",gauge:"шт.",img:null},malina:{name:"Малина (свежая или замороженная)",gauge:"г",img:null},mango:{name:"Манго (мякоть)",gauge:"г",img:null},mannayaKrupa:{name:"Манная крупа",gauge:"ст.л",img:null},medIliSiropAgavy:{name:"Мёд или сироп агавы",gauge:"ст.л",img:null},mindalnoeMoloko:{name:"Миндальное молоко",gauge:"мл",img:null},mindalnyeHlopya:{name:"Миндальные хлопья",gauge:"ст.л",img:null},molotyyKoriandr:{name:"Молотый кориандр",gauge:"ч.л",img:null},morskayaSol:{name:"Морская соль",gauge:"ч.л",img:null},motsarella:{name:"Моцарелла",gauge:"г",img:null},mukaPshenichnaya:{name:"Мука пшеничная",gauge:"г",img:null},myata:{name:"Мята (по желанию)",gauge:"г",img:null},myataSvezhaya:{name:"Мята свежая",gauge:"г",img:null},oguretsSvezhiy:{name:"Огурец свежий",gauge:"шт.",img:null},ogurtsyMarinovannye:{name:"Огурцы маринованные",gauge:"шт.",img:null},olivkovoeMaslo:{name:"Оливковое масло",gauge:"ст.л",img:null},oregano:{name:"Орегано",gauge:"ч.л",img:null},panirovochnyeSuhari:{name:"Панировочные сухари",gauge:"г",img:null},papikaSladkaya:{name:"Папика сладкая",gauge:"ч.л",img:null},paprikaSladkaya:{name:"Паприка сладкая",gauge:"ч.л",img:null},parmezan:{name:"Пармезан",gauge:"г",img:null},persiki:{name:"Персики",gauge:"шт.",img:null},pesto:{name:"Песто",gauge:"ст.л",img:null},pestoZelenyy:{name:"Песто зеленый",gauge:"ст.л",img:null},petrushkaSvezhaya:{name:"Петрушка свежая",gauge:"пучок",img:null},pechenePesochnoe:{name:"Печенье песочное",gauge:"г",img:null},pitaIliChiabatta:{name:"Пита или чиабатта",gauge:"шт.",img:null},pomidory:{name:"Помидоры",gauge:"шт.",img:null},pomidoryCherri:{name:"Помидоры черри",gauge:"г",img:null},pshenichnayaMuka:{name:"Пшеничная мука",gauge:"г",img:null},ribaySteyk:{name:"Стейк рибай",gauge:"г",img:null},rastitelnoeMaslo:{name:"Растительное масло",gauge:"ст.л",img:null},rozmarin:{name:"Розмарин",gauge:"веточка",img:null},svezhayaZelen:{name:"Свежая зелень (кинза/петрушка)",gauge:"пучок",img:null},svezhayaMyata:{name:"Свежая мята",gauge:"пучок",img:null},svezhiyBazilik:{name:"Свежий базилик",gauge:"пучок",img:null},svezhiyImbir:{name:"Свежий имбирь",gauge:"см",img:null},svezhiyRozmarin:{name:"Свежий розмарин",gauge:"веточка",img:null},svinayaSheya:{name:"Свиная шея",gauge:"г",img:null},svinoyFarsh:{name:"Свиной фарш",gauge:"г",img:null},selderey:{name:"Сельдерей (стебли)",gauge:"шт.",img:null},semenaChia:{name:"Семена чиа",gauge:"ст.л",img:null},slivochnoeMaslo:{name:"Сливочное масло",gauge:"г",img:null},smesPertsev:{name:"Смесь перцев",gauge:"ч.л",img:null},soevyySous:{name:"Соевый соус",gauge:"мл",img:null},solIPerets:{name:"Соль и перец",gauge:"по вкусу",img:null},solMorskaya:{name:"Соль морская",gauge:"ч.л",img:null},sousTsezar:{name:"Соус «Цезарь»",gauge:"ст.л",img:null},spagetti:{name:"Спагетти",gauge:"г",img:null},steviya:{name:"Стевия (по желанию)",gauge:"ч.л",img:null},steykLososya:{name:"Стейк лосося",gauge:"г",img:null},struchkovayaFasol:{name:"Стручковая фасоль",gauge:"г",img:null},syrFiladelfiya:{name:"Сыр Филадельфия",gauge:"г",img:null},syrHalumi:{name:"Сыр халуми",gauge:"г",img:null},tverdyySyr:{name:"Твердый сыр",gauge:"г",img:null},tomatnyySous:{name:"Томатный соус",gauge:"мл",img:null},tomatyCherri:{name:"Томаты черри",gauge:"шт.",img:null},tofu:{name:"Тофу",gauge:"г",img:null},tunetsVSobstvennomSoku:{name:"Тунец в собственном соку",gauge:"банка",img:null},tunetsSteyk:{name:"Тунец стейк",gauge:"г",img:null},ukropSvezhiy:{name:"Укроп свежий",gauge:"пучок",img:null},fasolKrasnaya:{name:"Фасоль красная (отварная)",gauge:"г",img:null},fileIndeyki:{name:"Филе индейки",gauge:"г",img:null},fileTreski:{name:"Филе трески",gauge:"г",img:null},hlebChiabatta:{name:"Хлеб чиабатта",gauge:"шт.",img:null},hmeliSuneli:{name:"Хмели-сунели",gauge:"ч.л",img:null},chernika:{name:"Черника",gauge:"г",img:null},chernyyPerets:{name:"Черный перец",gauge:"ч.л",img:null},chernyyPeretsGoroshkom:{name:"Черный перец горошком",gauge:"ч.л",img:null},shpinatSvezhiy:{name:"Шпинат свежий",gauge:"г",img:null},yabloki:{name:"Яблоки",gauge:"г",img:null},yagody:{name:"Ягоды (смородина/малина/клубника)",gauge:"г",img:null},yaytsa:{name:"Яйца",gauge:"шт.",img:null},yaytso:{name:"Яйцо",gauge:"шт.",img:null},apelsinovayaTsedra:{name:"Апельсиновая цедра",gauge:"ч.л",img:null},funduk:{name:"Фундук",gauge:"г",img:null},gorkiyShokolad:{name:"Горький шоколад (70%)",gauge:"г",img:null},kakaoPoroshok:{name:"Какао-порошок",gauge:"г",img:null},klubnikaSvezhaya:{name:"Клубника свежая",gauge:"г",img:null},kroshkaKorzhey:{name:"Крошка коржей",gauge:"г",img:null},malinaSvezhaya:{name:"Малина свежая",gauge:"г",img:null},maskarpone:{name:"Маскарпоне",gauge:"г",img:null},medGrechishnyy:{name:"Мед гречишный",gauge:"г",img:null},mindalnayaMuka:{name:"Миндальная мука",gauge:"г",img:null},ovsyanayaMuka:{name:"Овсяная мука",gauge:"г",img:null},pecheneYubileynoe:{name:"Печенье Юбилейное",gauge:"г",img:null},razryhlitel:{name:"Разрыхлитель",gauge:"ч.л",img:null},saharBelyy:{name:"Сахар белый",gauge:"г",img:null},saharnayaPudraDlyaUkrasheniya:{name:"Сахарная пудра для украшения",gauge:"г",img:null},saharTrostnikovyy:{name:"Сахар тростниковый",gauge:"г",img:null},sguschennoeMolokoVarenoe:{name:"Сгущенное молоко вареное",gauge:"г",img:null},slivochnoeMaslo2:{name:"Сливочное масло (холодное)",gauge:"г",img:null},sloenoeTestoBezdrozhzhevoe:{name:"Слоеное тесто бездрожжевое",gauge:"г",img:null},smetana2530:{name:"Сметана 25-30%",gauge:"г",img:null},sodaPischevaya:{name:"Сода пищевая",gauge:"ч.л",img:null},vanilnyyStruchok:{name:"Ванильный стручок",gauge:"шт.",img:null},yaichnyeBelki:{name:"Яичные белки",gauge:"шт.",img:null},yaichnyeZheltki:{name:"Яичные желтки",gauge:"шт.",img:null},zhelatinListovoy:{name:"Желатин листовой",gauge:"г",img:null},belyyShokolad:{name:"Белый шоколад",gauge:"г",img:null},konyak:{name:"Коньяк",gauge:"ст.л",img:null},koritsaMolotaya:{name:"Корица молотая",gauge:"ч.л",img:null},molochnyyShokolad:{name:"Молочный шоколад",gauge:"г",img:null},molotayaKoritsa:{name:"Молотая корица",gauge:"ч.л",img:null},pischevoyKrasitel:{name:"Пищевой краситель",gauge:"г",img:null}},ny=e=>{if("ingredientKey"in e){let a=nh[e.ingredientKey]??nx[e.ingredientKey];if(!a)throw Error(`Unknown ingredient key: ${e.ingredientKey}`);return{name:a.name,count:e.count,gauge:e.gauge??a.gauge,img:a.img,note:e.note,optional:e.optional}}return e},nb=i.default.div.withConfig({componentId:"sc-80ae5a18-0"})`
  border-radius: 18px;
  background: white;
  overflow: hidden;
  box-shadow: 0 12px 36px rgba(44, 31, 20, 0.07);
`,nw=i.default.button.withConfig({componentId:"sc-80ae5a18-1"})`
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
`,nk=i.default.div.withConfig({componentId:"sc-80ae5a18-2"})`
  display: flex;
  align-items: center;
  gap: 12px;
`,nv=i.default.span.withConfig({componentId:"sc-80ae5a18-3"})`
  color: #241b14;
`,nj=i.default.span.withConfig({componentId:"sc-80ae5a18-4"})`
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0deg)"};
  color: #333;
  transition: transform 0.3s;
  font-size: 20px;
`,nC=i.default.div.withConfig({componentId:"sc-80ae5a18-5"})`
  max-height: ${({$isOpen:e})=>e?"2000px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease;
`,nz=i.default.div.withConfig({componentId:"sc-80ae5a18-6"})`
  padding: 18px;
  border-top: 1px solid #f1e8df;
`,nI=i.default.div.withConfig({componentId:"sc-80ae5a18-7"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
  padding: 12px;
  border-radius: 14px;
  background: #fffaf5;
`,n$=i.default.span.withConfig({componentId:"sc-80ae5a18-8"})`
  font-size: 14px;
  color: #7c6958;
`,nS=i.default.div.withConfig({componentId:"sc-80ae5a18-9"})`
  display: flex;
  align-items: center;
  gap: 4px;
`,nD=i.default.button.withConfig({componentId:"sc-80ae5a18-10"})`
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
`,nP=i.default.span.withConfig({componentId:"sc-80ae5a18-11"})`
  font-size: 16px;
  font-weight: 700;
  min-width: 40px;
  text-align: center;
`,nM=i.default.div.withConfig({componentId:"sc-80ae5a18-12"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 18px;
`,nK=i.default.label.withConfig({componentId:"sc-80ae5a18-13"})`
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
`,nO=i.default.div.withConfig({componentId:"sc-80ae5a18-14"})`
  position: relative;
  width: 18px;
  height: 18px;
`,nF=i.default.input.attrs({type:"checkbox"}).withConfig({componentId:"sc-80ae5a18-15"})`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  cursor: pointer;
`,nB=i.default.div.withConfig({componentId:"sc-80ae5a18-16"})`
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
`,nT=i.default.svg.withConfig({componentId:"sc-80ae5a18-17"})`
  width: 12px;
  height: 12px;
  fill: none;
  stroke: white;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`,nE=i.default.div.withConfig({componentId:"sc-80ae5a18-18"})`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,nL=i.default.span.withConfig({componentId:"sc-80ae5a18-19"})`
  font-weight: 500;
`,nR=i.default.span.withConfig({componentId:"sc-80ae5a18-20"})`
  color: #666;
  font-size: 13px;
`,nA=i.default.button.withConfig({componentId:"sc-80ae5a18-21"})`
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
`,nG=({data:e,recipeName:i})=>{let[n,t]=(0,f.useState)(!0),[l,o]=(0,f.useState)(2),[d,r]=(0,f.useState)(Array.from({length:e.length},()=>!1)),g=(0,eH.useShoppingListStore)(e=>e.addItems),s=e.map(ny),u=e=>{o(Math.max(1,l+e))},m=e=>{let a=(e=>{if(!e.count)return e.gauge;let a="string"==typeof e.count?parseFloat(e.count):e.count;if(Number.isNaN(a))return e.gauge;let i=a/2*l,n=Number.isInteger(i)?i:i.toFixed(1);return`${n} ${e.gauge}`})(e);return e.note?`${a} (${e.note})`:a},c=d.some(e=>e);return(0,a.jsxs)(nb,{children:[(0,a.jsxs)(nw,{onClick:()=>t(!n),children:[(0,a.jsx)(nk,{children:(0,a.jsx)(nv,{children:"Ингредиенты"})}),(0,a.jsx)(nj,{$isOpen:n,children:"▼"})]}),(0,a.jsx)(nC,{$isOpen:n,children:(0,a.jsxs)(nz,{children:[(0,a.jsxs)(nI,{children:[(0,a.jsx)(n$,{children:"Количество порций:"}),(0,a.jsxs)(nS,{children:[(0,a.jsx)(nD,{onClick:()=>u(-1),$disabled:1===l,disabled:1===l,children:"-"}),(0,a.jsx)(nP,{children:l}),(0,a.jsx)(nD,{onClick:()=>u(1),children:"+"})]})]}),(0,a.jsx)(nM,{children:s.map((e,i)=>(0,a.jsxs)(nK,{children:[(0,a.jsxs)(nO,{children:[(0,a.jsx)(nF,{checked:d[i],onChange:()=>{let e;(e=[...d])[i]=!e[i],r(e)}}),(0,a.jsx)(nB,{$checked:d[i],children:d[i]&&(0,a.jsx)(nT,{viewBox:"0 0 24 24",children:(0,a.jsx)("polyline",{points:"20 6 9 17 4 12"})})})]}),(0,a.jsxs)(nE,{children:[(0,a.jsx)(nL,{children:e.name}),(0,a.jsx)(nR,{children:m(e)})]})]},`${e.name}-${e.count??""}-${e.gauge}-${e.note??""}`))}),(0,a.jsx)(nA,{type:"button",$disabled:!c,disabled:!c,onClick:()=>{g(s.reduce((e,a,n)=>(d[n]&&e.push({name:a.name,amount:m(a),recipeName:i}),e),[])),r(Array.from({length:e.length},()=>!1))},children:"Добавить в список покупок"})]})})]})},nN=i.default.div.withConfig({componentId:"sc-f38e5315-0"})`
  margin: 0px;
`,nV=i.default.div.withConfig({componentId:"sc-f38e5315-1"})`
  white-space: pre-line;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.1;
  color: ${({color:e})=>e||"#181818"};
`,nY=({value:e})=>(0,a.jsx)(nN,{children:(0,a.jsx)(nV,{color:"gray",children:e})});var nZ=e.i(34274),nU=e.i(56887),nq=e.i(56923),nW=e.i(19980),nH=e.i(17333),nJ=e.i(49779),nX=e.i(5460),n_=e.i(49885),nQ=e.i(29020),n0=e.i(27202),n1=e.i(82929),n2=e.i(42974),n4=e.i(31580),n5=e.i(61531),n8=e.i(9419),n3=e.i(11928),n6=e.i(19691),n7=e.i(16249),n9=e.i(97232),te=e.i(29963),ta=e.i(2203),ti=e.i(78912),tn=e.i(63350),tt=e.i(20213),tl=e.i(6827),to=e.i(44913),td=e.i(97625),tr=e.i(39179),tg=e.i(15936),ts=e.i(94951),tu=e.i(61633),tm=e.i(4037),tc=e.i(30734),tf=e.i(23896),tp=e.i(46063);let th={microwave:nq.default,blender:nZ.default,oven:nW.default,fridge:tu.default,handMixer:nU.default},tx={pan:n0.default,bowl:nX.default,plate:n1.default,pot:n2.default,colander:n_.default,bakingTray:nJ.default,lid:nQ.default,sieve:td.default,ladle:tr.default,mortar:ts.default,bottle:tc.default,jar:tf.default,cookieCutters:tp.default},ty={...th,...tx,spatula:tn.default,whisk:to.default,fork:n4.default,knife:n3.default,rollingPin:n7.default,parchment:n6.default,grater:n5.default,brush:ta.default,cutBoard:nH.default,spoon:tt.default,woodenSpoon:tg.default,skimmer:tm.default,measuringSpoon:n9.default,grill:n8.default,tongs:tl.default,paperTowel:te.default,skewers:ti.default},tb={chaynik:{name:"Чайник",img:null},chesnokodavilka:{name:"Чеснокодавилка",img:null},chugunnyyKazan:{name:"Чугунный казан",img:null},derevyannayaLopatka:{name:"Деревянная лопатка",img:null},derevyannyeShampury:{name:"Деревянные шампуры",img:null},derevyannyeShpazhki:{name:"Деревянные шпажки",img:null},doskaDlyaNarezki:{name:"Доска для нарезки",img:null},folga:{name:"Фольга",img:null},formaDlyaVypechki:{name:"Форма для выпечки (24 см)",img:null},formaDlyaZapekaniya:{name:"Форма для запекания",img:null},glubokayaMiskaDlyaMarinovaniya:{name:"Глубокая миска для маринования",img:null},grilIliMangal:{name:"Гриль или мангал",img:null},grilIliSkovoroda:{name:"Гриль или сковорода",img:null},kartofelemyalka:{name:"Картофелемялка",img:null},kastryulyaDlyaKuritsy:{name:"Кастрюля для курицы",img:null},kastryulyaDlyaVarkiOvoschey:{name:"Кастрюля для варки овощей",img:null},kastryulyaDlyaYaits:{name:"Кастрюля для яиц",img:null},kastryulyaDlyaYaytsaPashot:{name:"Кастрюля для яйца пашот",img:null},kastryulyaSrednegoRazmera:{name:"Кастрюля среднего размера",img:null},kistochkaDlyaGlazuri:{name:"Кисточка для глазури",img:null},kistochkaDlyaMasla:{name:"Кисточка для масла",img:null},kistochkaDlyaSmazyvaniya:{name:"Кисточка для смазывания",img:null},kokteylnyeStakany:{name:"Коктейльные стаканы",img:null},konditerskiyMeshok:{name:"Кондитерский мешок",img:null},kuhonnoePolotentse:{name:"Кухонное полотенце",img:null},kuhonnyeSchiptsy:{name:"Кухонные щипцы",img:null},kuhonnyeVesy:{name:"Кухонные весы",img:null},kulinarnyeSchiptsy:{name:"Кулинарные щипцы",img:null},kuvshin:{name:"Кувшин",img:null},mangalIliGril:{name:"Мангал или гриль",img:null},marlyaIliSito:{name:"Марля или сито",img:null},melkayaTerka:{name:"Мелкая терка",img:null},mikser:{name:"Миксер",img:null},miskaDlyaMarinovaniya:{name:"Миска для маринования",img:null},miskaDlyaSmeshivaniya:{name:"Миска для смешивания",img:null},miskaDlyaZamesa:{name:"Миска для замеса",img:null},nasadkaDlyaMeshka:{name:"Насадка для мешка (круглая)",img:null},nasadkaZvezda:{name:"Насадка 'Звезда'",img:null},nozhDlyaMyasa:{name:"Нож для мяса",img:null},nozhDlyaNarezki:{name:"Нож для нарезки",img:null},nozhShefPovara:{name:"Нож шеф-повара",img:null},ovoschechistka:{name:"Овощечистка",img:null},pergamentnayaBumaga:{name:"Пергаментная бумага",img:null},plastikovyyKonteynerDlyaMarinovaniya:{name:"Пластиковый контейнер для маринования",img:null},pressDlyaChesnoka:{name:"Пресс для чеснока",img:null},pressDlyaSendvichey:{name:"Пресс для сэндвичей (опционально)",img:null},protivenDlyaVodyanoyBani:{name:"Противень для водяной бани",img:null},prozrachnyyStakanIliBoul:{name:"Прозрачный стакан или боул",img:null},razemnayaForma:{name:"Разъемная форма (24 см)",img:null},reshetkaDlyaGrilya:{name:"Решетка для гриля",img:null},reshetkaGril:{name:"Решетка гриль",img:null},salatnitsa:{name:"Салатница",img:null},schiptsyDlyaGrilya:{name:"Щипцы для гриля",img:null},shampuryIliReshetka:{name:"Шампуры или решетка",img:null},silikonovayaLopatka:{name:"Силиконовая лопатка",img:null},skovorodaDlyaOrehov:{name:"Сковорода для орехов",img:null},skovorodaGril:{name:"Сковорода-гриль",img:null},skovorodaSKryshkoy:{name:"Сковорода с крышкой",img:null},stakanyDlyaPodachi:{name:"Стаканы для подачи",img:null},stupkaDlyaChesnoka:{name:"Ступка для чеснока",img:null},stupkaDlyaSpetsiy:{name:"Ступка для специй",img:null},terkaDlyaImbirya:{name:"Терка для имбиря",img:null},termometrKuhonnyy:{name:"Термометр кухонный",img:null},toster:{name:"Тостер",img:null},blenderIliSkalka:{name:"Блендер или скалка",img:null},chistayaSuhayaMiska:{name:"Чистая сухая миска",img:null},dveKruglyeFormy:{name:"Две круглые формы (22 см)",img:null},formaDlyaKonfet:{name:"Форма для конфет (опционально)",img:null},formyDlyaPannaKotty:{name:"Формы для панна котты (4 шт.)",img:null},gazovayaGorelkaDlyaKaramelizatsii:{name:"Газовая горелка для карамелизации",img:null},kastryulyaDlyaKrema:{name:"Кастрюля для крема",img:null},kastryulyaDlyaVodyanoyBani:{name:"Кастрюля для водяной бани",img:null},konditerskayaLopatka:{name:"Кондитерская лопатка",img:null},konditerskiyMeshokOptional:{name:"Кондитерский мешок (опционально)",img:null},kuhonnyyTermometr:{name:"Кухонный термометр",img:null},mernyyStakan:{name:"Мерный стакан",img:null},miskaDlyaZamachivaniyaZhelatina:{name:"Миска для замачивания желатина",img:null},pischevayaPlenka:{name:"Пищевая пленка",img:null},protivenDlyaDuhovki:{name:"Противень для духовки",img:null},ramekiny:{name:"Рамекины (4 шт.)",img:null},soteynik:{name:"Сотейник",img:null},terkaDlyaMorkovi:{name:"Терка для моркови",img:null},termometr:{name:"Термометр",img:null}},tw=e=>{if("equipmentKey"in e){let a=ty[e.equipmentKey]??tb[e.equipmentKey];if(!a)throw Error(`Unknown equipment key: ${e.equipmentKey}`);return a}return e},tk=i.default.section.withConfig({componentId:"sc-19274b0c-0"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 12px 36px rgba(44, 31, 20, 0.07);

  @media ${l.maxDevice.laptop} {
    width: 100%;
    padding-left: 0;
    text-align: start;
  }
`,tv=i.default.section.withConfig({componentId:"sc-19274b0c-1"})`
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
`,tj=i.default.span.withConfig({componentId:"sc-19274b0c-2"})`
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
`,tC=({data:e})=>{let i=e.map(tw);return(0,a.jsxs)(tk,{children:[(0,a.jsx)(R,{children:"Оборудование"}),i.length?(0,a.jsx)(tv,{$background:"#fff",children:i.map(e=>(0,a.jsx)(tj,{children:e.name},e.name))}):(0,a.jsx)(nY,{value:"Список оборудования будет доступен позднее..."})]})},tz=i.default.section.withConfig({componentId:"sc-71cd220b-0"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 22px;

  @media ${l.maxDevice.laptop} {
    width: 100%;
    border-left: none;
    padding-left: 0;
    text-align: start;
  }
`,tI=i.default.article.withConfig({componentId:"sc-71cd220b-1"})`
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

  @media ${l.maxDevice.laptop} {
    grid-template-columns: 40px minmax(0, 1fr);
    padding: 18px;
    gap: 12px;
  }
`,t$=i.default.div.withConfig({componentId:"sc-71cd220b-2"})`
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

  @media ${l.maxDevice.laptop} {
    width: 40px;
    height: 40px;
    font-size: 0.9rem;
  }
`,tS=i.default.div.withConfig({componentId:"sc-71cd220b-3"})`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,tD=i.default.article.withConfig({componentId:"sc-71cd220b-4"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,tP=i.default.div.withConfig({componentId:"sc-71cd220b-5"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media ${l.maxDevice.laptop} {
    gap: 8px;
  }
`,tM=i.default.section.withConfig({componentId:"sc-71cd220b-6"})`
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

  @media ${l.maxDevice.laptop} {
    height: auto;
  }
`,tK=i.default.span.withConfig({componentId:"sc-71cd220b-7"})`
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
`,tO=i.default.h2.withConfig({componentId:"sc-71cd220b-8"})`
  font-size: 1.35rem;
  font-weight: 800;
  margin-bottom: 0;
  color: #241b14;
  letter-spacing: 0;

  @media ${l.maxDevice.laptop} {
    font-size: 1.2rem;
  }
`,tF=i.default.article.withConfig({componentId:"sc-71cd220b-9"})`
  width: 100%;
  font-size: 1rem;
  line-height: 1.75;
  color: #5f554d;
  max-width: 780px;

  @media ${l.maxDevice.laptop} {
    width: 100%;
    font-size: 0.85rem;
  }
`,tB=({stepsData:e})=>(0,a.jsx)(tz,{children:e?.map((e,i)=>(0,a.jsxs)(tI,{children:[(0,a.jsx)(t$,{children:i+1}),(0,a.jsxs)(tS,{children:[(0,a.jsxs)(tD,{children:[(0,a.jsx)(tO,{children:`Шаг ${i+1}`}),(0,a.jsx)(tF,{children:e.description})]}),(0,a.jsx)(tP,{children:e.ingredients?.length>0&&(0,a.jsx)(tM,{children:e.ingredients.map(e=>{let n=ny(e);return(0,a.jsx)(tK,{children:(({count:e,gauge:a,name:i})=>[i,e,a].filter(e=>null!=e&&String(e).trim().length>0).join(" "))(n)},`${i}-ingredient-${n.name}`)})})})]})]},i))}),tT=i.default.div.withConfig({componentId:"sc-18313306-0"})`
  display: grid;
  grid-template-columns: minmax(280px, 340px) minmax(0, 1fr);
  gap: 36px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  align-items: flex-start;

  @media ${l.maxDevice.laptop} {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`,tE=i.default.main.withConfig({componentId:"sc-18313306-1"})`
  background:
    radial-gradient(circle at top left, rgba(255, 132, 2, 0.08), transparent 34rem),
    linear-gradient(180deg, #fffaf5 0, #fff 420px);
`,tL=i.default.section.withConfig({componentId:"sc-18313306-2"})`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 0;
  position: sticky;
  top: 96px;

  @media ${l.maxDevice.laptop} {
    width: 100%;
    position: static;
  }
`,tR=i.default.section.withConfig({componentId:"sc-18313306-3"})`
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 30px;

  @media ${l.maxDevice.laptop} {
    width: 100%;
  }
`,tA=i.default.section.withConfig({componentId:"sc-18313306-4"})`
  display: none;
`;e.s(["default",0,({recipe:e})=>{let i=e?.categories?.[0]?.name,l=i?t.RECIPES_OBJ[i]?.slice(0,10):[];return(0,a.jsxs)(tE,{children:[(0,a.jsxs)(n.PageWrapper,{children:[e?.warning?(0,a.jsx)(eW,{text:e.warning}):null,(0,a.jsx)(E,{recipe:e}),e&&(0,a.jsxs)(tT,{children:[(0,a.jsxs)(tL,{children:[(0,a.jsx)(nG,{data:e.ingredients,recipeName:e.title}),(0,a.jsx)(ee,{tips:e?.tips||[]}),(0,a.jsx)(es,{variations:e?.variations||[]}),(0,a.jsx)(ey,{history:e?.historyDescription})]}),(0,a.jsxs)(tR,{id:"cooking-steps",children:[(0,a.jsx)(tC,{data:e.equipments}),(0,a.jsx)(tB,{stepsData:e.cookingRecipe}),(0,a.jsx)(eY,{list:e?.comments||[]}),(0,a.jsx)(eK,{recipe:e.title})]})]}),(0,a.jsx)(V,{recipes:l})]}),(0,a.jsx)(tA,{children:e?.searchRequests?.map(e=>(0,a.jsx)("p",{children:e},e))})]})}],83685)}]);