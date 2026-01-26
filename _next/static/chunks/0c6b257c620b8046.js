(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,83685,e=>{"use strict";var i=e.i(43476),t=e.i(97053),n=e.i(41582);let o=t.default.div.withConfig({componentId:"sc-a74ca435-0"})`
  width: 120px;
  min-width: 120px;
  height: ${({variant:e})=>"short"===e?"140px":"180px"};
  min-height: ${({variant:e})=>"short"===e?"140px":"180px"};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;
  padding-top: 16px;
  border-radius: 8px;
  gap: 10px;
  background-color: ${({$backgroundColor:e})=>e||"#ffffff"};
`,d=t.default.div.withConfig({componentId:"sc-a74ca435-1"})`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`,a=t.default.img.withConfig({componentId:"sc-a74ca435-2"})`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
`,r=t.default.div.withConfig({componentId:"sc-a74ca435-3"})`
  width: 50px;
  height: 50px;
  background-color: #dddddd;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.4rem;
  color: #999;
`,c=t.default.div.withConfig({componentId:"sc-a74ca435-4"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,l=t.default.p.withConfig({componentId:"sc-a74ca435-5"})`
  font-size: 0.9rem;
  line-height: 1.2;
  font-weight: bold;
  margin: 5px 0;
  color: #333;
`,s=t.default.h2.withConfig({componentId:"sc-a74ca435-6"})`
  font-size: 0.7rem;
  font-weight: normal;
  margin: 5px 0;
  text-align: center;
  color: #777;

  ${({$variant:e})=>"short"===e&&`
      display: -webkit-box;
      -webkit-line-clamp: 2; /* количество строк */
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`,f=({name:e,text:t,img:n,backgroundColor:f,variant:p="default"})=>(0,i.jsxs)(o,{$backgroundColor:f,variant:p,children:[(0,i.jsx)(d,{children:n?(0,i.jsx)(a,{src:n,alt:e}):(0,i.jsx)(r,{children:"No image"})}),(0,i.jsxs)(c,{children:[t&&(0,i.jsx)(l,{children:t}),(0,i.jsx)(s,{$variant:p,children:e})]})]}),p=t.default.div.withConfig({componentId:"sc-f38e5315-0"})`
  margin: 0px;
`,x=t.default.div.withConfig({componentId:"sc-f38e5315-1"})`
  white-space: pre-line;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.1;
  color: ${({color:e})=>e||"#181818"};
`,m=({value:e})=>(0,i.jsx)(p,{children:(0,i.jsx)(x,{color:"gray",children:e})});var g=e.i(95631);let h=t.default.h2.withConfig({componentId:"sc-7025c96b-0"})`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
`;function u({children:e}){return(0,i.jsx)(h,{children:e})}let b=t.default.p.withConfig({componentId:"sc-bb5602da-0"})`
  font-size: 1rem;
  line-height: 1.2;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
`,w=t.default.span.withConfig({componentId:"sc-bb5602da-1"})`
  font-size: 0.9rem;
  color: #999;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`,j=t.default.span.withConfig({componentId:"sc-bb5602da-2"})`
  font-size: 1.1rem;
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
`,v=({name:e,value:t,gauge:n})=>(0,i.jsxs)(b,{children:[(0,i.jsx)(w,{children:e}),(0,i.jsxs)(j,{children:[t,n]})]});var y=e.i(4529);let C=t.default.div.withConfig({componentId:"sc-2d704074-0"})`
  max-width: 1800px;
  margin: 0 auto;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
  overflow: hidden;
  padding-top: 20px;
`,I=t.default.header.withConfig({componentId:"sc-2d704074-1"})`
  display: flex;
  max-height: 90vh;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;

  @media ${y.maxDevice.laptop} {
    flex-direction: column;
    max-height: none;
  }
`,z=t.default.article.withConfig({componentId:"sc-2d704074-2"})`
  width: 60%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20px 20px 20px;
  border-radius: 8px 0 0 8px;

  @media ${y.maxDevice.laptop} {
    width: 100%;
    border-radius: 8px 8px 0 0;
    padding: 16px;
    order: 2;
  }
`,$=t.default.article.withConfig({componentId:"sc-2d704074-3"})`
  width: 40%;
  display: flex;
  height: auto;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 8px;

  @media ${y.maxDevice.laptop} {
    width: 100%;
    border-radius: 0 0 8px 8px;
    aspect-ratio: 1.5 / 1;
    order: 1;
  }
`,k=t.default.img.withConfig({componentId:"sc-2d704074-4"})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0 8px 0 0;
`,D=t.default.article.withConfig({componentId:"sc-2d704074-5"})`
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
`,S=t.default.h1.withConfig({componentId:"sc-2d704074-6"})`
  width: 80%;
  margin-bottom: 10px;
  line-height: 1.2;
  text-align: left;
  font-size: 2rem;

  @media ${y.maxDevice.laptop} {
    width: 100%;
    font-size: 1.5rem;
  }
`,R=t.default.article.withConfig({componentId:"sc-2d704074-7"})`
  width: 80%;
  margin-bottom: 10px;
  font-size: 1rem;
  line-height: 1.6;
  text-align: justify;

  @media ${y.maxDevice.laptop} {
    width: 100%;
    font-size: 0.9rem;
  }
`,B=t.default.article.withConfig({componentId:"sc-2d704074-8"})`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-content: center;

  @media ${y.maxDevice.laptop} {
    flex-direction: row;
    gap: 8px;
  }
`;function F({recipe:e}){return(0,i.jsx)(C,{children:e?(0,i.jsxs)(I,{children:[(0,i.jsxs)(z,{children:[(0,i.jsx)(S,{children:e.title}),(0,i.jsx)(R,{children:e.description}),(0,i.jsxs)(B,{children:[e.preparation&&(0,i.jsx)(v,{name:"Подготовка",value:e.preparation,gauge:"мин"}),(0,i.jsx)(v,{name:"Готовка",value:e.time,gauge:"мин"}),e.calories&&(0,i.jsx)(v,{name:"Калорийность",value:e.calories,gauge:"ккал"})]})]}),(0,i.jsx)($,{children:e.img?(0,i.jsx)(k,{src:e.img,alt:e.name}):(0,i.jsx)(D,{children:"Нет изображения"})})]}):(0,i.jsx)(S,{children:"Recipe not found"})})}var A=e.i(60777),L=e.i(50506);let M=t.default.section.withConfig({componentId:"sc-776cbdbe-0"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  padding-bottom: 30px;
`;function P({recipes:e}){return void 0===e||e?.length===0?null:(0,i.jsxs)(M,{children:[(0,i.jsx)(u,{children:"Попробуйте также"}),(0,i.jsx)(A.RecipesScroll,{children:e.map(({key:e,name:t,...n})=>(0,i.jsx)(L.RecipeCard,{name:t,...n},e||t))})]})}var T=e.i(92199);let q=t.default.ul.withConfig({componentId:"sc-91da13b8-0"})`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  list-style: none;
  background: #fffbe6;
  width: 100%;
  border: 1px solid #ffcc00;
  border-radius: 6px;
`,E=t.default.li.withConfig({componentId:"sc-91da13b8-1"})`
  display: flex;
  align-items: flex-start;
  gap: 10px;

  padding: 12px 16px;
  border-radius: 6px;
  font-size: 1rem;
  line-height: 1.4;
`;function O({tips:e}){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u,{children:"Советы"}),(0,i.jsx)(q,{children:e.map((e,t)=>(0,i.jsxs)(E,{children:[(0,i.jsx)(T.FiAlertCircle,{size:18,color:"#ffcc00"}),e]},t))})]})}let G=t.default.section.withConfig({componentId:"sc-3f9d3770-0"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #f9f9f9;
  margin-bottom: 20px;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;

  @media ${y.maxDevice.laptop} {
    flex-direction: column;
    padding: 0px;
    margin-bottom: 20px;
  }
`;function K({tips:e}){return e&&e.length>0?(0,i.jsx)(G,{children:(0,i.jsx)(O,{tips:e})}):null}let U=t.default.ul.withConfig({componentId:"sc-cfc4c557-0"})`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
  background: #f3f7ff;
  border: 1px solid #d0e1ff;
  border-radius: 6px;
`,J=t.default.li.withConfig({componentId:"sc-cfc4c557-1"})`
  padding: 12px 16px;
`,N=t.default.strong.withConfig({componentId:"sc-cfc4c557-2"})`
  display: inline-block;
  background: #d0e1ff;
  padding: 2px 8px;
  border-radius: 4px;
  margin-bottom: 4px;
  font-size: 0.9rem;
`;function W({variations:e}){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u,{children:"Вариации"}),(0,i.jsx)(U,{children:e.map((e,t)=>(0,i.jsxs)(J,{children:[(0,i.jsx)(N,{children:e.name}),(0,i.jsx)("div",{children:e.changes})]},t))})]})}let _=t.default.section.withConfig({componentId:"sc-bf2e0646-0"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #f9f9f9;
  margin-bottom: 20px;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;

  @media ${y.maxDevice.laptop} {
    flex-direction: column;
    padding: 0px;
    margin-bottom: 10px;
  }
`;function H({variations:e}){return e&&e.length>0?(0,i.jsx)(_,{children:(0,i.jsx)(W,{variations:e})}):null}let Q=t.default.li.withConfig({componentId:"sc-8d123e7c-0"})`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  padding: 12px 16px;
  list-style: none;
  background: #fffbe6;
  width: 100%;
  border: 1px solid #ffcc00;
  border-radius: 6px;
`;function V({history:e}){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u,{children:"История"}),(0,i.jsx)(Q,{children:e})]})}let X=t.default.section.withConfig({componentId:"sc-5adc3107-0"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #f9f9f9;
  margin-bottom: 20px;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;

  @media ${y.maxDevice.laptop} {
    flex-direction: column;
    padding: 0px;
    margin-bottom: 10px;
  }
`;function Y({history:e}){return e?(0,i.jsx)(X,{children:(0,i.jsx)(V,{history:e})}):null}var Z=e.i(71645),ee=e.i(40141);function ei(e){return(0,ee.GenIcon)({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(e)}let et=t.default.div.withConfig({componentId:"sc-bf06a306-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  text-align: center;
`,en=t.default.h3.withConfig({componentId:"sc-bf06a306-1"})`
  font-size: 32px;
  font-weight: 700;
  color: #1c1c1c;
  margin-bottom: 32px;
`,eo=t.default.div.withConfig({componentId:"sc-bf06a306-2"})`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`,ed=t.default.button.withConfig({componentId:"sc-bf06a306-3"})`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 42px;
  color: ${({active:e})=>e?"#ff6f61":"#c4c4c4"};
  transition: color 0.2s ease;

  &:hover {
    color: #ff8a7a;
  }
`,ea=t.default.form.withConfig({componentId:"sc-bf06a306-4"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 620px;
`,er=t.default.textarea.withConfig({componentId:"sc-bf06a306-5"})`
  width: 100%;
  height: 140px;
  background: #f6f6f6;
  border: none;
  border-radius: 10px;
  padding: 16px;
  font-size: 18px;
  color: #333;
  resize: none;
  outline: none;
  margin-bottom: 8px;

  &::placeholder {
    color: #6b6b6b;
  }
`,ec=t.default.div.withConfig({componentId:"sc-bf06a306-6"})`
  align-self: flex-start;
  font-size: 12px;
  color: #6b6b6b;
  margin-bottom: 20px;
`,el=t.default.button.withConfig({componentId:"sc-bf06a306-7"})`
  background-color: #ff6f61;
  color: white;
  font-size: 20px;
  font-weight: 600;
  border: none;
  border-radius: 40px;
  padding: 14px 40px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover:not(:disabled) {
    background-color: #ff8a7a;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,es=t.default.div.withConfig({componentId:"sc-bf06a306-8"})`
  margin-top: 16px;
  font-size: 18px;
  color: #ff6f61;
`,ef=t.default.input.withConfig({componentId:"sc-bf06a306-9"})`
  display: none;
`,ep=({recipe:e})=>{let[t,n]=(0,Z.useState)(0),[o,d]=(0,Z.useState)(null),[a,r]=(0,Z.useState)(""),[c,l]=(0,Z.useState)(""),s=async e=>{e.preventDefault(),n(0),r(""),l("Спасибо за ваш отзыв.")};return(0,i.jsxs)(et,{children:[(0,i.jsx)(en,{children:"Оцените рецепт"}),(0,i.jsx)(eo,{children:[1,2,3,4,5].map(e=>(0,i.jsx)(ed,{active:e<=(o??t),onClick:()=>n(e),onMouseEnter:()=>d(e),onMouseLeave:()=>d(null),children:(0,i.jsx)(ei,{})},e))}),(0,i.jsxs)(ea,{onSubmit:s,children:[(0,i.jsx)(ef,{type:"hidden",name:"recipe",value:e}),(0,i.jsx)(er,{value:a,onChange:e=>r(e.target.value.slice(0,300)),placeholder:"Ваш комментарий поможет нам сделать рецепт лучше!"}),(0,i.jsxs)(ec,{children:["Осталось ",300-a.length," символов"]}),(0,i.jsx)(el,{type:"submit",children:"'Отправить'"}),c&&(0,i.jsx)(es,{children:c})]})]})},ex=t.default.div.withConfig({componentId:"sc-ccad5bb6-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  width: 100%;
`,em=t.default.h4.withConfig({componentId:"sc-ccad5bb6-1"})`
  font-size: 26px;
  font-weight: 700;
  color: #1c1c1c;
  margin-bottom: 24px;
  text-align: center;
`,eg=t.default.div.withConfig({componentId:"sc-ccad5bb6-2"})`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: #f9f9f9;
  border-radius: 12px;
  padding: 16px 20px;
  width: 100%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 14px;
  transition: background 0.2s ease;

  &:hover {
    background: #f2f2f2;
  }
`,eh=(0,t.default)(function(e){return(0,ee.GenIcon)({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"},child:[]}]})(e)}).withConfig({componentId:"sc-ccad5bb6-3"})`
  color: #ff6f61;
  font-size: 32px;
  flex-shrink: 0;
`,eu=t.default.p.withConfig({componentId:"sc-ccad5bb6-4"})`
  font-size: 16px;
  color: #333;
  margin: 0;
  word-wrap: break-word;
  white-space: pre-wrap;
`,eb=t.default.div.withConfig({componentId:"sc-ccad5bb6-5"})`
  font-size: 16px;
  color: #777;
  background: #fafafa;
  border-radius: 10px;
  padding: 20px 30px;
  text-align: center;
`,ew=({list:e})=>(0,i.jsxs)(ex,{children:[(0,i.jsx)(em,{children:"Комментарии"}),e.length>0?e.map((e,t)=>(0,i.jsxs)(eg,{children:[(0,i.jsx)(eh,{}),(0,i.jsx)(eu,{children:e})]},t)):(0,i.jsx)(eb,{children:"Пока нет комментариев — будьте первым!"})]}),ej=t.default.p.withConfig({componentId:"sc-4ebe634-0"})`
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
`,ev=t.default.span.withConfig({componentId:"sc-4ebe634-1"})`
  font-size: 2.2rem;
  line-height: 2.4rem;
  text-transform: uppercase;
  color: #333;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`,ey=t.default.span.withConfig({componentId:"sc-4ebe634-2"})`
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
`,eC=({text:e})=>(0,i.jsxs)(ej,{children:[(0,i.jsx)(ev,{children:"Внимание!"}),(0,i.jsx)(ey,{children:e})]}),eI=t.default.section.withConfig({componentId:"sc-18313306-0"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #f9f9f9;
  margin-bottom: 20px;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;

  @media ${y.maxDevice.laptop} {
    flex-direction: column;
    padding: 16px;
  }
`,ez=t.default.section.withConfig({componentId:"sc-18313306-1"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 0 20px;

  @media ${y.maxDevice.laptop} {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #ddd;
    padding-right: 0;
    padding-left: 0;
    padding-bottom: 20px;
  }
`,e$=t.default.section.withConfig({componentId:"sc-18313306-2"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;

  @media ${y.maxDevice.laptop} {
    width: 100%;
    border-left: none;
    padding-left: 0;
    text-align: start;
  }
`,ek=t.default.section.withConfig({componentId:"sc-18313306-3"})`
  width: ${e=>e.width||"100%"};
  display: flex;
  flex-direction: row;
  gap: 10px;
  background: ${e=>e.$background||"transparent"};
  justify-content: ${e=>e.$justifyContent||"flex-start"};
  overflow-x: auto;
  margin-bottom: 20px;
  border-radius: 6px;

  @media ${y.maxDevice.laptop} {
    height: auto;
  }
`,eD=t.default.section.withConfig({componentId:"sc-18313306-4"})`
  width: 100%;
  max-width: 100%;
  display: flex;
  gap: 20px;
  flex-direction: row;

  @media ${y.maxDevice.laptop} {
    flex-direction: column;
  }
`,eS=t.default.section.withConfig({componentId:"sc-18313306-5"})`
  width: calc(30% - 10px);
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: auto;
  border-radius: 8px;

  @media ${y.maxDevice.laptop} {
    width: 100%;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`,eR=t.default.section.withConfig({componentId:"sc-18313306-6"})`
  width: calc(70% - 10px);
  display: flex;
  padding: 20px;
  flex-direction: column;
  border-radius: 8px;
  background-color: #fff;

  @media ${y.maxDevice.laptop} {
    width: 100%;
    margin-top: 0px;
    margin-bottom: 20px;
  }
`,eB=t.default.article.withConfig({componentId:"sc-18313306-7"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 10px;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;

  @media ${y.maxDevice.laptop} {
    padding: 15px;
    margin-bottom: 10px;
  }
`,eF=t.default.h2.withConfig({componentId:"sc-18313306-8"})`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;

  @media ${y.maxDevice.laptop} {
    margin-bottom: 5px;
    font-size: 1.2rem;
  }
`,eA=t.default.article.withConfig({componentId:"sc-18313306-9"})`
  width: 80%;
  margin-bottom: 30px;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  text-align: left;

  @media ${y.maxDevice.laptop} {
    width: 100%;
    font-size: 0.85rem;
  }
`,eL=t.default.section.withConfig({componentId:"sc-18313306-10"})`
  display: none;
`;e.s(["default",0,({recipe:e})=>{let t=e?.categories?.[0]?.name,o=t?g.RECIPES_OBJ[t]?.slice(0,10):[];return(0,i.jsxs)("main",{children:[(0,i.jsxs)(n.PageWrapper,{children:[e?.warning?(0,i.jsx)(eC,{text:e.warning}):null,(0,i.jsx)(F,{recipe:e}),e&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(eI,{children:(0,i.jsxs)(ez,{children:[(0,i.jsx)(u,{children:"Ингредиенты"}),e.ingredients.length?(0,i.jsx)(ek,{children:e.ingredients.map(e=>(0,i.jsx)(f,{name:e.name,text:e.count&&e.gauge?`${e.count} ${e.gauge}`:"",img:e?.img||null},e.name))}):(0,i.jsx)(m,{value:"Список ингредиентов будет доступен позднее..."})]})}),(0,i.jsxs)(eD,{children:[(0,i.jsxs)(eS,{children:[(0,i.jsxs)(e$,{children:[(0,i.jsx)(u,{children:"Оборудование"}),e.equipments.length?(0,i.jsx)(ek,{$background:"#fff",children:e.equipments.map(e=>(0,i.jsx)(f,{name:e.name,img:e?.img||null,variant:"short"},e.name))}):(0,i.jsx)(m,{value:"Список оборудования будет доступен позднее..."})]}),(0,i.jsx)(K,{tips:e?.tips||[]}),(0,i.jsx)(H,{variations:e?.variations||[]}),(0,i.jsx)(Y,{history:e?.historyDescription})]}),(0,i.jsxs)(eR,{children:[e.cookingRecipe?.map((e,t)=>(0,i.jsxs)("div",{children:[(0,i.jsxs)(eB,{children:[(0,i.jsx)(eF,{children:`Шаг ${t+1}`}),(0,i.jsx)(eA,{children:e.description})]}),e.ingredients?.length>0&&(0,i.jsx)(ek,{width:"100%",children:e.ingredients.map(e=>(0,i.jsx)(f,{name:e.name,text:e.count&&e.gauge?`${e.count} ${e.gauge}`:"",img:e?.img||null,backgroundColor:"#f9f9f9"},`${t}-ingredient-${e.name}`))})]},t)),(0,i.jsx)(ew,{list:e?.comments||[]}),(0,i.jsx)(ep,{recipe:e.title})]})]})]}),(0,i.jsx)(P,{recipes:o})]}),(0,i.jsx)(eL,{children:e?.searchRequests?.map(e=>(0,i.jsx)("p",{children:e},e))})]})}],83685)}]);