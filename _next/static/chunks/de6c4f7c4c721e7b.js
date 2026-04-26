(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,83685,e=>{"use strict";var t=e.i(43476),i=e.i(97053),n=e.i(41582),o=e.i(95631),d=e.i(4529);let a=i.default.div.withConfig({componentId:"sc-bb5602da-0"})`
  width: 90%;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 12px 0;
  margin: 8px 0;

  @media ${d.maxDevice.laptop} {
    width: 100%;
  }
`,r=i.default.div.withConfig({componentId:"sc-bb5602da-1"})`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  gap: 4px;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 70%;
    background-color: #e0e0e0;
  }
`,c=i.default.span.withConfig({componentId:"sc-bb5602da-2"})`
  font-size: 0.9rem;
  height: 20px;
  line-height: 20px;
  color: #999;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`,l=i.default.span.withConfig({componentId:"sc-bb5602da-3"})`
  font-size: 1.1rem;
  line-height: 16px;
  font-weight: bold;
  color: #333;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`,s=i.default.span.withConfig({componentId:"sc-bb5602da-4"})`
  font-size: 0.9rem;
  line-height: 14px;
  color: #999;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`,p=({rating:e,commentsCount:i,preparation:n,time:o,calories:d})=>{let p=[{icon:"⭐",value:e,gauge:`(${i})`},{icon:"🔪",value:n?`${n}`:"—",gauge:"мин"},{icon:"⏱️",value:`${o}`,gauge:"мин"},{icon:"🔥",value:d?`${d}`:"—",gauge:"ккал"}].filter(e=>"—"!==e.value);return(0,t.jsx)(a,{children:p.map((e,i)=>(0,t.jsxs)(r,{children:[(0,t.jsx)(c,{children:e.icon}),(0,t.jsx)(l,{children:e.value}),(0,t.jsx)(s,{children:e.gauge})]},i))})};var f=e.i(40141);function x(e){return(0,f.GenIcon)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M349.6 64c-36.4 0-70.7 16.7-93.6 43.9C233.1 80.7 198.8 64 162.4 64 97.9 64 48 114.2 48 179.1c0 79.5 70.7 143.3 177.8 241.7L256 448l30.2-27.2C393.3 322.4 464 258.6 464 179.1 464 114.2 414.1 64 349.6 64zm-80.8 329.3l-4.2 3.9-8.6 7.8-8.6-7.8-4.2-3.9c-50.4-46.3-94-86.3-122.7-122-28-34.7-40.4-63.1-40.4-92.2 0-22.9 8.4-43.9 23.7-59.3 15.2-15.4 36-23.8 58.6-23.8 26.1 0 52 12.2 69.1 32.5l24.5 29.1 24.5-29.1c17.1-20.4 43-32.5 69.1-32.5 22.6 0 43.4 8.4 58.7 23.8 15.3 15.4 23.7 36.5 23.7 59.3 0 29-12.5 57.5-40.4 92.2-28.8 35.7-72.3 75.7-122.8 122z"},child:[]}]})(e)}var h=e.i(53070);let g=i.default.div.withConfig({componentId:"sc-43faa96-0"})`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  margin: 8px 0;

  @media ${d.maxDevice.laptop} {
    width: 100%;
  }
`,m=42,u=36,b="0 20px",w="0 16px",j=16,v=14,C="0 4px 12px rgba(123, 123, 123, 0.4)",y=i.default.a.withConfig({componentId:"sc-43faa96-1"})`
  display: inline-flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  height: ${m}px;
  padding: ${b};
  font-size: ${j}px;
  font-weight: 500;
  color: #ffffff;
  background: ${"linear-gradient(90deg, #e75e02 0%, #ff8402 50%, #ff8302 100%);"};
  border-radius: 6px;
  transition: all 0.25s ease;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  background-size: 200% 100%;

  &:hover {
    background-position: 100% 0;
    transform: translateY(-2px);
    box-shadow: ${C};
  }

  @media ${d.maxDevice.laptop} {
    height: ${u}px;
    font-size: ${v}px;
    padding: ${w};
  }

  @media ${d.maxDevice.mobileL} {
    width: 100%;
    justify-content: center;
  }
`,I=i.default.button.withConfig({componentId:"sc-43faa96-2"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.25s ease;
  color: #666;

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

  @media ${d.maxDevice.laptop} {
    width: 36px;
    height: 36px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`,$=()=>(0,t.jsxs)(g,{children:[(0,t.jsx)(y,{href:"#cooking-steps",title:"Начать готовить","aria-label":"Начать готовить",rel:"noopener noreferrer nofollow",children:"Начать готовить"}),(0,t.jsx)(I,{onClick:()=>{},title:"Добавить в закладки","aria-label":"Добавить в закладки",disabled:!0,children:(0,t.jsx)(x,{})}),(0,t.jsx)(I,{onClick:()=>{navigator.share?navigator.share({title:document.title,url:window.location.href}):(navigator.clipboard.writeText(window.location.href),alert("Ссылка скопирована в буфер обмена"))},title:"Поделиться","aria-label":"Поделиться",disabled:!0,children:(0,t.jsx)(h.LuExternalLink,{})})]}),k=i.default.div.withConfig({componentId:"sc-2d704074-0"})`
  max-width: 1800px;
  margin: 0 auto;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
  overflow: hidden;
  padding-top: 20px;
  margin-bottom: 20px;
`,z=i.default.header.withConfig({componentId:"sc-2d704074-1"})`
  display: flex;
  max-height: 90vh;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;

  @media ${d.maxDevice.laptop} {
    flex-direction: column;
    max-height: none;
  }
`,D=i.default.article.withConfig({componentId:"sc-2d704074-2"})`
  width: 60%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20px 20px 20px;
  border-radius: 8px 0 0 8px;

  @media ${d.maxDevice.laptop} {
    width: 100%;
    border-radius: 8px 8px 0 0;
    padding: 16px;
    order: 2;
  }
`,S=i.default.article.withConfig({componentId:"sc-2d704074-3"})`
  width: 40%;
  display: flex;
  height: auto;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 8px;

  @media ${d.maxDevice.laptop} {
    width: 100%;
    border-radius: 0 0 8px 8px;
    aspect-ratio: 1.5 / 1;
    order: 1;
  }
`,E=i.default.img.withConfig({componentId:"sc-2d704074-4"})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0 8px 0 0;
`,O=i.default.article.withConfig({componentId:"sc-2d704074-5"})`
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, #f9f9f9, #ddd);
  color: #777;
  font-size: 1.2rem;
  font-weight: 500;
  font-style: italic;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 8px 0 0;
`,L=i.default.h1.withConfig({componentId:"sc-2d704074-6"})`
  width: 90%;
  margin-bottom: 10px;
  line-height: 1.2;
  text-align: left;
  font-size: 2rem;

  @media ${d.maxDevice.laptop} {
    width: 100%;
    font-size: 1.5rem;
  }
`,P=i.default.article.withConfig({componentId:"sc-2d704074-7"})`
  width: 90%;
  margin-bottom: 10px;
  font-size: 1rem;
  line-height: 1.6;
  text-align: justify;

  @media ${d.maxDevice.laptop} {
    width: 100%;
    font-size: 0.9rem;
  }
`;function A({recipe:e}){return(0,t.jsx)(k,{children:e?(0,t.jsxs)(z,{children:[(0,t.jsxs)(D,{children:[(0,t.jsx)(L,{children:e.title}),(0,t.jsx)(p,{rating:e.rating,commentsCount:e.comments?e.comments.length:0,preparation:e.preparation,time:e.time,calories:e.calories}),(0,t.jsx)($,{}),(0,t.jsx)(P,{children:e.description})]}),(0,t.jsx)(S,{children:e.img?(0,t.jsx)(E,{src:e.img,alt:e.name}):(0,t.jsx)(O,{children:"Нет изображения"})})]}):(0,t.jsx)(L,{children:"Recipe not found"})})}let F=i.default.h2.withConfig({componentId:"sc-7025c96b-0"})`
  font-size: 1.2rem;
  line-height: 1.4;
  font-weight: 600;
  margin-bottom: 10px;
  width: 100%;
  color: #333;
  padding: 16px 20px;
  border-bottom: 1px solid #e0e0e0;
`;function R({children:e}){return(0,t.jsx)(F,{children:e})}var B=e.i(60777),M=e.i(50506);let T=i.default.section.withConfig({componentId:"sc-776cbdbe-0"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  padding-bottom: 30px;
`;function N({recipes:e}){return void 0===e||e?.length===0?null:(0,t.jsxs)(T,{children:[(0,t.jsx)(R,{children:"Попробуйте также"}),(0,t.jsx)(B.RecipesScroll,{children:e.map(({key:e,name:i,...n})=>(0,t.jsx)(M.RecipeCard,{name:i,...n},e||i))})]})}let Y=i.default.div.withConfig({componentId:"sc-91da13b8-0"})`
  max-height: ${({$isOpen:e})=>e?"2000px":"0"};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: ${({$isOpen:e})=>e?"20px":"0"};
  padding-top: 0;
  margin: 0;
  list-style: none;
  width: 100%;
`,U=i.default.li.withConfig({componentId:"sc-91da13b8-1"})`
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #f0f0f0;
  gap: 10px;
  padding: 12px 4px;
  border-radius: 6px;
  font-size: 1rem;
  line-height: 1.4;

  &:last-child {
    border-bottom: none;
  }
`;function W({tips:e,isOpen:i}){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(Y,{$isOpen:i,children:e.map((e,i)=>(0,t.jsx)(U,{children:e},i))})})}var q=e.i(71645),G=function(e){var t=void 0===window.navigator?"":navigator.userAgent;if("true"===localStorage.getItem("debug-mobile")||"true"===new URLSearchParams(window.location.search).get("mobile"))return void e(!0);var i=!!t.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop|Mobile|mobile/i),n="ontouchstart"in window||navigator.maxTouchPoints>0,o=window.innerWidth<=480;e(i||n&&o)},K=function(){var e=(0,q.useState)(!1),t=e[0],i=e[1];return(0,q.useEffect)(function(){G(i);var e=function(){G(i)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}},[]),t};(0,q.createContext)(void 0);let J=i.default.section.withConfig({componentId:"sc-3f9d3770-0"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 20px;
  font-size: 1rem;
  background: #fffbe6;
  border: 1px solid #ffcc00;
  border-radius: 12px;
  line-height: 1.6;
  color: #333;

  @media ${d.maxDevice.laptop} {
    flex-direction: column;
    padding: 0px;
    margin-bottom: 0px;
    max-width: 100%;
  }
`,X=i.default.button.withConfig({componentId:"sc-3f9d3770-1"})`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  transition: background 0.2s;
  border-bottom: ${({$isOpen:e})=>e?"1px solid #ffcc00":"none"};

  &:hover {
    background: #f5f5f5;
    border-radius: ${({$isOpen:e})=>e?"12px 12px 0 0":"12px"};
  }
`,_=i.default.div.withConfig({componentId:"sc-3f9d3770-2"})`
  display: flex;
  align-items: center;
  gap: 12px;
`,H=i.default.span.withConfig({componentId:"sc-3f9d3770-3"})`
  color: #333;
`,Q=i.default.span.withConfig({componentId:"sc-3f9d3770-4"})`
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0deg)"};
  color: #333;
  transition: transform 0.3s;
  font-size: 20px;
`;function V({tips:e}){let i=K(),[n,o]=(0,q.useState)(!1);return((0,q.useEffect)(()=>{o(!i)},[i]),e&&e.length>0)?(0,t.jsxs)(J,{children:[(0,t.jsxs)(X,{onClick:()=>o(!n),$isOpen:n,children:[(0,t.jsx)(_,{children:(0,t.jsx)(H,{children:"Советы"})}),(0,t.jsx)(Q,{$isOpen:n,children:"▼"})]}),(0,t.jsx)(W,{isOpen:n,tips:e})]}):null}let Z=i.default.ul.withConfig({componentId:"sc-cfc4c557-0"})`
  max-height: ${({$isOpen:e})=>e?"2000px":"0"};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: ${({$isOpen:e})=>e?"20px":"0"};
  padding-top: 0;
  margin: 0;
  list-style: none;
  width: 100%;
`,ee=i.default.li.withConfig({componentId:"sc-cfc4c557-1"})`
  padding: 12px 4px;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`,et=i.default.strong.withConfig({componentId:"sc-cfc4c557-2"})`
  display: inline-block;
  background: #d0e1ff;
  padding: 2px 8px;
  border-radius: 4px;
  margin-bottom: 4px;
  font-size: 0.9rem;
`;function ei({variations:e,isOpen:i}){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(Z,{$isOpen:i,children:e.map((e,i)=>(0,t.jsxs)(ee,{children:[(0,t.jsx)(et,{children:e.name}),(0,t.jsx)("div",{children:e.changes})]},i))})})}let en=i.default.section.withConfig({componentId:"sc-bf2e0646-0"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-bottom: 20px;

  background: #f3f7ff;
  border: 1px solid #d0e1ff;
  border-radius: 12px;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;

  @media ${d.maxDevice.laptop} {
    flex-direction: column;
    padding: 0px;
    margin-bottom: 0px;
  }
`,eo=i.default.button.withConfig({componentId:"sc-bf2e0646-1"})`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  transition: background 0.2s;
  border-bottom: ${({$isOpen:e})=>e?"1px solid #d0e1ff":"none"};

  &:hover {
    background: #f5f5f5;
    border-radius: ${({$isOpen:e})=>e?"12px 12px 0 0":"12px"};
  }
`,ed=i.default.div.withConfig({componentId:"sc-bf2e0646-2"})`
  display: flex;
  align-items: center;
  gap: 12px;
`,ea=i.default.span.withConfig({componentId:"sc-bf2e0646-3"})`
  color: #333;
`,er=i.default.span.withConfig({componentId:"sc-bf2e0646-4"})`
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0deg)"};
  color: #333;
  transition: transform 0.3s;
  font-size: 20px;
`;function ec({variations:e}){let i=K(),[n,o]=(0,q.useState)(!1);return((0,q.useEffect)(()=>{o(!i)},[i]),e&&e.length>0)?(0,t.jsxs)(en,{children:[(0,t.jsxs)(eo,{onClick:()=>o(!n),$isOpen:n,children:[(0,t.jsx)(ed,{children:(0,t.jsx)(ea,{children:"Вариации"})}),(0,t.jsx)(er,{$isOpen:n,children:"▼"})]}),(0,t.jsx)(ei,{variations:e,isOpen:n})]}):null}let el=i.default.li.withConfig({componentId:"sc-8d123e7c-0"})`
  max-height: ${({$isOpen:e})=>e?"2000px":"0"};
  display: flex;
  overflow: hidden;
  flex-direction: column;
  padding: 0;
  margin: 0;
  padding: ${({$isOpen:e})=>e?"12px 24px":"0"};
  padding-bottom: ${({$isOpen:e})=>e?"24px":"0"};
  list-style: none;
  width: 100%;
  border-radius: 6px;
`;function es({isOpen:e,history:i}){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(el,{$isOpen:e,children:i})})}let ep=i.default.section.withConfig({componentId:"sc-5adc3107-0"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: #fffbe6;
  border: 1px solid #ffcc00;
  border-radius: 12px;
  margin-bottom: 20px;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;

  @media ${d.maxDevice.laptop} {
    flex-direction: column;
    padding: 0px;
    margin-bottom: 0px;
  }
`,ef=i.default.button.withConfig({componentId:"sc-5adc3107-1"})`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  transition: background 0.2s;
  border-bottom: ${({$isOpen:e})=>e?"1px solid #ffcc00":"none"};

  &:hover {
    background: #f5f5f5;
    border-radius: ${({$isOpen:e})=>e?"12px 12px 0 0":"12px"};
  }
`,ex=i.default.div.withConfig({componentId:"sc-5adc3107-2"})`
  display: flex;
  align-items: center;
  gap: 12px;
`,eh=i.default.span.withConfig({componentId:"sc-5adc3107-3"})`
  color: #333;
`,eg=i.default.span.withConfig({componentId:"sc-5adc3107-4"})`
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0deg)"};
  color: #333;
  transition: transform 0.3s;
  font-size: 20px;
`;function em({history:e}){let i=K(),[n,o]=(0,q.useState)(!1);return((0,q.useEffect)(()=>{o(!i)},[i]),e)?(0,t.jsxs)(ep,{children:[(0,t.jsxs)(ef,{onClick:()=>o(!n),$isOpen:n,children:[(0,t.jsx)(ex,{children:(0,t.jsx)(eh,{children:"История"})}),(0,t.jsx)(eg,{$isOpen:n,children:"▼"})]}),(0,t.jsx)(es,{isOpen:n,history:e})]}):null}function eu(e){return(0,f.GenIcon)({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(e)}let eb=i.default.div.withConfig({componentId:"sc-bf06a306-0"})`
  width: 100%;
  margin-top: 20px;
`,ew=i.default.h3.withConfig({componentId:"sc-bf06a306-1"})`
  font-size: 20px;
  font-weight: 700;
  color: #1c1c1c;
  margin-bottom: 16px;
`,ej=i.default.div.withConfig({componentId:"sc-bf06a306-2"})`
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`,ev=i.default.div.withConfig({componentId:"sc-bf06a306-3"})`
  display: flex;
  gap: 6px;
  margin-bottom: 16px;
`,eC=i.default.button.withConfig({componentId:"sc-bf06a306-4"})`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  svg {
    font-size: 22px;
    color: ${({active:e})=>e?"#FFA500":"#E0E0E0"};
    transition: color 0.2s ease;
  }

  &:hover svg {
    color: #ffb84d;
  }
`,ey=i.default.form.withConfig({componentId:"sc-bf06a306-5"})`
  display: flex;
  flex-direction: column;
  width: 100%;
`,eI=i.default.textarea.withConfig({componentId:"sc-bf06a306-6"})`
  width: 100%;
  height: 120px;
  background: #f7f7f7;
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 14px;
  font-size: 14px;
  color: #333;
  resize: none;
  outline: none;
  transition: all 0.2s ease;

  &::placeholder {
    color: #9b9b9b;
  }

  &:focus {
    background: #fff;
    border-color: #e0e0e0;
  }
`,e$=i.default.div.withConfig({componentId:"sc-bf06a306-7"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`,ek=i.default.div.withConfig({componentId:"sc-bf06a306-8"})`
  font-size: 12px;
  color: #9b9b9b;
`,ez=i.default.button.withConfig({componentId:"sc-bf06a306-9"})`
  background-color: #ff6f61;
  color: white;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: #ff8a7a;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,eD=i.default.input.withConfig({componentId:"sc-bf06a306-10"})`
  display: none;
`,eS=i.default.div.withConfig({componentId:"sc-bf06a306-11"})`
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
`,eE=({recipe:e})=>{let[i,n]=(0,q.useState)(0),[o,d]=(0,q.useState)(null),[a,r]=(0,q.useState)(""),[c,l]=(0,q.useState)("");(0,q.useEffect)(()=>{if(!c)return;let e=setTimeout(()=>{l("")},5e3);return()=>clearTimeout(e)},[c]);let s=async e=>{e.preventDefault(),n(0),r(""),l("Спасибо за ваш отзыв.")};return(0,t.jsxs)(eb,{children:[(0,t.jsx)(ew,{children:"Оцените рецепт"}),(0,t.jsxs)(ej,{children:[(0,t.jsx)(ev,{children:[1,2,3,4,5].map(e=>(0,t.jsx)(eC,{active:e<=(o??i),onClick:()=>n(e),onMouseEnter:()=>d(e),onMouseLeave:()=>d(null),children:(0,t.jsx)(eu,{})},e))}),(0,t.jsxs)(ey,{onSubmit:s,children:[(0,t.jsx)(eD,{type:"hidden",name:"recipe",value:e}),(0,t.jsx)(eI,{value:a,onChange:e=>r(e.target.value.slice(0,300)),placeholder:"Ваш комментарий поможет нам сделать рецепт лучше!"}),(0,t.jsxs)(e$,{children:[(0,t.jsxs)(ek,{children:["Осталось ",300-a.length]}),(0,t.jsx)(ez,{type:"submit",children:"Отправить"})]})]})]}),(0,t.jsx)(eS,{visible:!!c,children:c})]})},eO=i.default.div.withConfig({componentId:"sc-ccad5bb6-0"})`
  width: 100%;
  margin-top: 40px;
`,eL=i.default.h4.withConfig({componentId:"sc-ccad5bb6-1"})`
  font-size: 20px;
  font-weight: 700;
  color: #1c1c1c;
  margin-bottom: 16px;
`,eP=i.default.div.withConfig({componentId:"sc-ccad5bb6-2"})`
  background: #ffffff;
  border-radius: 12px;
  padding: 8px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`,eA=i.default.div.withConfig({componentId:"sc-ccad5bb6-3"})`
  display: flex;
  gap: 12px;
  padding: 16px 20px;

  &:not(:last-child) {
    border-bottom: 1px solid #eeeeee;
  }
`,eF=i.default.img.withConfig({componentId:"sc-ccad5bb6-4"})`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`,eR=i.default.div.withConfig({componentId:"sc-ccad5bb6-5"})`
  display: flex;
  flex-direction: column;
`,eB=i.default.div.withConfig({componentId:"sc-ccad5bb6-6"})`
  display: flex;
  align-items: center;
  gap: 10px;
`,eM=i.default.span.withConfig({componentId:"sc-ccad5bb6-7"})`
  font-weight: 600;
  color: #1c1c1c;
`,eT=i.default.div.withConfig({componentId:"sc-ccad5bb6-8"})`
  display: flex;
  gap: 2px;
`,eN=i.default.p.withConfig({componentId:"sc-ccad5bb6-9"})`
  font-size: 14px;
  color: #555;
  margin: 6px 0 0;
`,eY=i.default.div.withConfig({componentId:"sc-ccad5bb6-10"})`
  font-size: 16px;
  color: #777;
  background: #fafafa;
  border-radius: 10px;
  padding: 20px 30px;
  text-align: center;
`,eU=({list:e})=>(0,t.jsxs)(eO,{children:[(0,t.jsx)(eL,{children:"Комментарии"}),e&&e.length>0?(0,t.jsx)(eP,{children:e.map(e=>(0,t.jsxs)(eA,{children:[e.avatar?(0,t.jsx)(eF,{src:e.avatar,alt:e.name}):null,(0,t.jsxs)(eR,{children:[(0,t.jsxs)(eB,{children:[(0,t.jsx)(eM,{children:e.name}),(0,t.jsx)(eT,{children:[void 0,void 0,void 0,void 0,void 0].map((i,n)=>(0,t.jsx)(eu,{size:14,color:n<e.rating?"#FFA500":"#E0E0E0"},n))})]}),(0,t.jsx)(eN,{children:e.text})]})]},e.id))}):(0,t.jsx)(eY,{children:"Пока нет комментариев — будьте первым!"})]}),eW=i.default.p.withConfig({componentId:"sc-4ebe634-0"})`
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
`,eq=i.default.span.withConfig({componentId:"sc-4ebe634-1"})`
  font-size: 2.2rem;
  line-height: 2.4rem;
  text-transform: uppercase;
  color: #333;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`,eG=i.default.span.withConfig({componentId:"sc-4ebe634-2"})`
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
`,eK=({text:e})=>(0,t.jsxs)(eW,{children:[(0,t.jsx)(eq,{children:"Внимание!"}),(0,t.jsx)(eG,{children:e})]});var eJ=e.i(65191);let eX=i.default.div.withConfig({componentId:"sc-80ae5a18-0"})`
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background: white;
  overflow: hidden;
  margin-bottom: 20px;
`,e_=i.default.button.withConfig({componentId:"sc-80ae5a18-1"})`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  transition: background 0.2s;

  &:hover {
    background: #f5f5f5;
  }
`,eH=i.default.div.withConfig({componentId:"sc-80ae5a18-2"})`
  display: flex;
  align-items: center;
  gap: 12px;
`,eQ=i.default.span.withConfig({componentId:"sc-80ae5a18-3"})`
  color: #333;
`,eV=i.default.span.withConfig({componentId:"sc-80ae5a18-4"})`
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0deg)"};
  color: #333;
  transition: transform 0.3s;
  font-size: 20px;
`,eZ=i.default.div.withConfig({componentId:"sc-80ae5a18-5"})`
  max-height: ${({$isOpen:e})=>e?"2000px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease;
`,e0=i.default.div.withConfig({componentId:"sc-80ae5a18-6"})`
  padding: 20px;
  border-top: 1px solid #e0e0e0;
`,e1=i.default.div.withConfig({componentId:"sc-80ae5a18-7"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f0f0f0;
`,e2=i.default.span.withConfig({componentId:"sc-80ae5a18-8"})`
  font-size: 14px;
  color: #666;
`,e3=i.default.div.withConfig({componentId:"sc-80ae5a18-9"})`
  display: flex;
  align-items: center;
  gap: 12px;
`,e4=i.default.button.withConfig({componentId:"sc-80ae5a18-10"})`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  color: #333;
  background: white;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  font-size: 18px;
  font-weight: 500;
  transition: all 0.2s;
  opacity: ${({$disabled:e})=>e?.5:1};

  &:hover {
    background: ${({$disabled:e})=>e?"white":"#f5f5f5"};
    border-color: ${({$disabled:e})=>e?"#e0e0e0":"#ccc"};
  }

  &:active {
    transform: ${({$disabled:e})=>e?"none":"scale(0.95)"};
  }
`,e6=i.default.span.withConfig({componentId:"sc-80ae5a18-11"})`
  font-size: 16px;
  font-weight: 500;
  min-width: 40px;
  text-align: center;
`,e5=i.default.div.withConfig({componentId:"sc-80ae5a18-12"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
`,e8=i.default.label.withConfig({componentId:"sc-80ae5a18-13"})`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  padding: 8px;
  border-radius: 8px;
  transition: background 0.2s;

  &:hover {
    background: #f9f9f9;
  }
`,e7=i.default.div.withConfig({componentId:"sc-80ae5a18-14"})`
  position: relative;
  width: 18px;
  height: 18px;
`,e9=i.default.input.attrs({type:"checkbox"}).withConfig({componentId:"sc-80ae5a18-15"})`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  cursor: pointer;
`,te=i.default.div.withConfig({componentId:"sc-80ae5a18-16"})`
  width: 18px;
  height: 18px;
  border: 2px solid #ff8402;
  border-radius: 4px;
  background: ${({$checked:e})=>e?"#ff8402":"white"};
  transition: all 0.2s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({$checked:e})=>e?"#ff8402":"#fff5e8"};
  }
`,tt=i.default.svg.withConfig({componentId:"sc-80ae5a18-17"})`
  width: 12px;
  height: 12px;
  fill: none;
  stroke: white;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`,ti=i.default.div.withConfig({componentId:"sc-80ae5a18-18"})`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,tn=i.default.span.withConfig({componentId:"sc-80ae5a18-19"})`
  font-weight: 500;
`,to=i.default.span.withConfig({componentId:"sc-80ae5a18-20"})`
  color: #666;
  font-size: 13px;
`,td=i.default.button.withConfig({componentId:"sc-80ae5a18-21"})`
  width: 100%;
  padding: 12px;
  background: ${({$disabled:e})=>e?"#f0f0f0":"#4caf50"};
  color: ${({$disabled:e})=>e?"#999":"white"};
  border: none;
  border-radius: 8px;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  font-size: 14px;
  font-weight: 500;
  transition: background 0.2s;

  &:hover {
    background: ${({$disabled:e})=>e?"#f0f0f0":"#45a049"};
  }
`,ta=({data:e,recipeName:i})=>{let[n,o]=(0,q.useState)(!0),[d,a]=(0,q.useState)(2),[r,c]=(0,q.useState)(Array(e.length).fill(!1)),l=(0,eJ.useShoppingListStore)(e=>e.addItems),s=e=>{a(Math.max(1,d+e))},p=e=>{let t=(e=>{if(!e.count)return e.gauge;let t="string"==typeof e.count?parseFloat(e.count):e.count;if(isNaN(t))return e.gauge;let i=t/2*d,n=Number.isInteger(i)?i:i.toFixed(1);return`${n} ${e.gauge}`})(e);return e.note?`${t} (${e.note})`:t},f=r.some(e=>e);return(0,t.jsxs)(eX,{children:[(0,t.jsxs)(e_,{onClick:()=>o(!n),children:[(0,t.jsx)(eH,{children:(0,t.jsx)(eQ,{children:"Ингредиенты"})}),(0,t.jsx)(eV,{$isOpen:n,children:"▼"})]}),(0,t.jsx)(eZ,{$isOpen:n,children:(0,t.jsxs)(e0,{children:[(0,t.jsxs)(e1,{children:[(0,t.jsx)(e2,{children:"Количество порций:"}),(0,t.jsxs)(e3,{children:[(0,t.jsx)(e4,{onClick:()=>s(-1),$disabled:1===d,disabled:1===d,children:"-"}),(0,t.jsx)(e6,{children:d}),(0,t.jsx)(e4,{onClick:()=>s(1),children:"+"})]})]}),(0,t.jsx)(e5,{children:e.map((e,i)=>(0,t.jsxs)(e8,{children:[(0,t.jsxs)(e7,{children:[(0,t.jsx)(e9,{checked:r[i],onChange:()=>{let e;(e=[...r])[i]=!e[i],c(e)}}),(0,t.jsx)(te,{$checked:r[i],children:r[i]&&(0,t.jsx)(tt,{viewBox:"0 0 24 24",children:(0,t.jsx)("polyline",{points:"20 6 9 17 4 12"})})})]}),(0,t.jsxs)(ti,{children:[(0,t.jsx)(tn,{children:e.name}),(0,t.jsx)(to,{children:p(e)})]})]},i))}),(0,t.jsx)(td,{type:"button",$disabled:!f,disabled:!f,onClick:()=>{l(e.reduce((e,t,n)=>r[n]?[...e,{name:t.name,amount:p(t),recipeName:i}]:e,[])),c(Array(e.length).fill(!1))},children:"Добавить в список покупок"})]})})]})},tr=i.default.div.withConfig({componentId:"sc-a74ca435-0"})`
  width: 120px;
  min-width: 120px;
  height: ${({variant:e})=>"short"===e?"130px":"150px"};
  min-height: ${({variant:e})=>"short"===e?"130px":"150px"};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;
  padding-top: 8px;
  border-radius: 8px;
  gap: 6px;
  background-color: ${({$backgroundColor:e})=>e||"#ffffff"};
`,tc=i.default.div.withConfig({componentId:"sc-a74ca435-1"})`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`,tl=i.default.img.withConfig({componentId:"sc-a74ca435-2"})`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`,ts=i.default.div.withConfig({componentId:"sc-a74ca435-3"})`
  width: 50px;
  height: 50px;
  background-color: #dddddd;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.4rem;
  color: #999;
`,tp=i.default.div.withConfig({componentId:"sc-a74ca435-4"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,tf=i.default.p.withConfig({componentId:"sc-a74ca435-5"})`
  font-size: 0.9rem;
  line-height: 1.2;
  font-weight: bold;
  margin: 5px 0;
  color: #333;
`,tx=i.default.h2.withConfig({componentId:"sc-a74ca435-6"})`
  font-size: 0.7rem;
  font-weight: normal;
  margin: 5px 0;
  text-align: center;
  color: #777;

  ${({$variant:e})=>"short"===e&&`
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`,th=({name:e,text:i,img:n,backgroundColor:o,variant:d="default"})=>(0,t.jsxs)(tr,{$backgroundColor:o,variant:d,children:[(0,t.jsx)(tc,{children:n?(0,t.jsx)(tl,{src:n,alt:e}):(0,t.jsx)(ts,{children:"No image"})}),(0,t.jsxs)(tp,{children:[i&&(0,t.jsx)(tf,{children:i}),(0,t.jsx)(tx,{$variant:d,children:e})]})]}),tg=i.default.div.withConfig({componentId:"sc-f38e5315-0"})`
  margin: 0px;
`,tm=i.default.div.withConfig({componentId:"sc-f38e5315-1"})`
  white-space: pre-line;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.1;
  color: ${({color:e})=>e||"#181818"};
`,tu=({value:e})=>(0,t.jsx)(tg,{children:(0,t.jsx)(tm,{color:"gray",children:e})}),tb=i.default.section.withConfig({componentId:"sc-19274b0c-0"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;

  @media ${d.maxDevice.laptop} {
    width: 100%;
    padding-left: 0;
    text-align: start;
  }
`,tw=i.default.section.withConfig({componentId:"sc-19274b0c-1"})`
  width: ${e=>e.$width||"100%"};
  max-width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  background: ${e=>e.$background||"transparent"};
  justify-content: ${e=>e.$justifyContent||"flex-start"};
  overflow-x: auto;
  margin-bottom: 20px;
  border-radius: 6px;

  @media ${d.maxDevice.laptop} {
    height: auto;
  }
`,tj=({data:e})=>(0,t.jsxs)(tb,{children:[(0,t.jsx)(R,{children:"Оборудование"}),e.length?(0,t.jsx)(tw,{$background:"#fff",children:e.map(e=>(0,t.jsx)(th,{name:e.name,img:e?.img||null,variant:"short"},e.name))}):(0,t.jsx)(tu,{value:"Список оборудования будет доступен позднее..."})]}),tv=i.default.section.withConfig({componentId:"sc-71cd220b-0"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 16px;

  @media ${d.maxDevice.laptop} {
    width: 100%;
    border-left: none;
    padding-left: 0;
    text-align: start;
  }
`,tC=i.default.article.withConfig({componentId:"sc-71cd220b-1"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media ${d.maxDevice.laptop} {
    padding: 12px;
    gap: 8px;
  }
`,ty=i.default.article.withConfig({componentId:"sc-71cd220b-2"})`
  width: 100%;
  display: flex;
  padding: 16px;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 8px;
`,tI=i.default.div.withConfig({componentId:"sc-71cd220b-3"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;

  @media ${d.maxDevice.laptop} {
    gap: 8px;
  }
`,t$=i.default.section.withConfig({componentId:"sc-71cd220b-4"})`
  width: ${e=>e.$width||"100%"};
  max-width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  background: ${e=>e.$background||"transparent"};
  justify-content: ${e=>e.$justifyContent||"flex-start"};
  overflow-x: auto;
  margin-bottom: 20px;
  border-radius: 6px;

  @media ${d.maxDevice.laptop} {
    height: auto;
  }
`,tk=i.default.h2.withConfig({componentId:"sc-71cd220b-5"})`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
  border-bottom: 1px solid #eee;
  padding-bottom: 8px;

  @media ${d.maxDevice.laptop} {
    margin-bottom: 5px;
    font-size: 1.2rem;
  }
`,tz=i.default.article.withConfig({componentId:"sc-71cd220b-6"})`
  width: 100%;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  padding-bottom: 16px;
  border-bottom: 1px solid #eee;

  @media ${d.maxDevice.laptop} {
    width: 100%;
    font-size: 0.85rem;
  }
`,tD=({stepsData:e})=>(0,t.jsx)(tv,{children:e?.map((e,i)=>(0,t.jsxs)(tC,{children:[(0,t.jsxs)(ty,{children:[(0,t.jsx)(tk,{children:`Шаг ${i+1}`}),(0,t.jsx)(tz,{children:e.description})]}),(0,t.jsx)(tI,{children:e.ingredients?.length>0&&(0,t.jsx)(t$,{children:e.ingredients.map(e=>(0,t.jsx)(th,{name:e.name,text:e.count&&e.gauge?`${e.count} ${e.gauge}`:"",img:e?.img||null,backgroundColor:"#f9f9f9"},`${i}-ingredient-${e.name}`))})})]},i))}),tS=i.default.div.withConfig({componentId:"sc-18313306-0"})`
  display: flex;
  gap: 24px;
  width: 100%;
  margin: 0 auto;
  align-items: flex-start;

  @media ${d.maxDevice.laptop} {
    flex-direction: column;
  }
`,tE=i.default.section.withConfig({componentId:"sc-18313306-1"})`
  flex: 0 0 300px;
  max-width: 400px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;

  @media ${d.maxDevice.laptop} {
    width: 100%;
    padding: 10px;
    max-width: 100%;
  }
`,tO=i.default.section.withConfig({componentId:"sc-18313306-2"})`
  flex: 1;
  display: flex;
  min-width: 0;
  flex-direction: column;
  border-radius: 12px;
  gap: 16px;

  @media ${d.maxDevice.laptop} {
    max-width: 100vw;
    width: inherit;
    padding: 0 10px;
  }
`,tL=i.default.section.withConfig({componentId:"sc-18313306-3"})`
  display: none;
`;e.s(["default",0,({recipe:e})=>{let i=e?.categories?.[0]?.name,d=i?o.RECIPES_OBJ[i]?.slice(0,10):[];return(0,t.jsxs)("main",{children:[(0,t.jsxs)(n.PageWrapper,{children:[e?.warning?(0,t.jsx)(eK,{text:e.warning}):null,(0,t.jsx)(A,{recipe:e}),e&&(0,t.jsxs)(tS,{children:[(0,t.jsxs)(tE,{children:[(0,t.jsx)(ta,{data:e.ingredients,recipeName:e.title}),(0,t.jsx)(V,{tips:e?.tips||[]}),(0,t.jsx)(ec,{variations:e?.variations||[]}),(0,t.jsx)(em,{history:e?.historyDescription})]}),(0,t.jsxs)(tO,{id:"cooking-steps",children:[(0,t.jsx)(tj,{data:e.equipments}),(0,t.jsx)(tD,{stepsData:e.cookingRecipe}),(0,t.jsx)(eU,{list:e?.comments||[]}),(0,t.jsx)(eE,{recipe:e.title})]})]}),(0,t.jsx)(N,{recipes:d})]}),(0,t.jsx)(tL,{children:e?.searchRequests?.map(e=>(0,t.jsx)("p",{children:e},e))})]})}],83685)}]);