(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,81055,e=>{var i=e.i(43476),a=e.i(97053),r=e.i(4529),n=e.i(5800),t=e.i(37828),o=e.i(1958),s=e.i(41582);let l=a.U.section.withConfig({componentId:"sc-69ffab43-0"})`
  max-width: 1280px;
  margin: 0 auto 56px;
  padding: 24px 0 0;

  @media ${r.R.tablet} {
    padding: 12px 16px 0;
  }
`,p=a.U.header.withConfig({componentId:"sc-69ffab43-1"})`
  max-width: 780px;
  margin-bottom: 42px;
`,m=a.U.h1.withConfig({componentId:"sc-69ffab43-2"})`
  margin: 0 0 14px;
  color: #211a15;
  font-size: clamp(2.1rem, 4vw, 4rem);
  line-height: 1.05;
  letter-spacing: 0;
`,d=a.U.p.withConfig({componentId:"sc-69ffab43-3"})`
  max-width: 680px;
  margin: 0;
  color: #65594f;
  font-size: 1.05rem;
  line-height: 1.75;

  @media ${r.R.tablet} {
    font-size: 0.95rem;
  }
`,c=a.U.div.withConfig({componentId:"sc-69ffab43-4"})`
  display: flex;
  flex-direction: column;
  gap: 44px;
`,g=a.U.section.withConfig({componentId:"sc-69ffab43-5"})`
  display: flex;
  flex-direction: column;
  gap: 18px;
`,x=a.U.h2.withConfig({componentId:"sc-69ffab43-6"})`
  margin: 0;
  color: #241b14;
  font-size: 1.35rem;
  line-height: 1.25;
  font-weight: 800;
`,f=a.U.div.withConfig({componentId:"sc-69ffab43-7"})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${({$featured:e})=>e?"320px":"260px"}, 1fr));
  gap: 18px;

  @media ${r.R.tablet} {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;e.s(["default",0,()=>{let e=t.d.filter(e=>"grill"!==e.key);return(0,i.jsx)(s.PageWrapper,{children:(0,i.jsxs)(l,{children:[(0,i.jsxs)(p,{children:[(0,i.jsx)(m,{children:"Категории рецептов"}),(0,i.jsx)(d,{children:"Выберите настроение, сезон или формат блюда: от быстрых завтраков до рецептов на мангале и домашних напитков."})]}),(0,i.jsxs)(c,{children:[(0,i.jsxs)(g,{children:[(0,i.jsx)(x,{children:"Сезонное"}),(0,i.jsx)(f,{$featured:!0,children:n.f.map(({key:e,...a})=>(0,i.jsx)(o.f,{...a,variant:"medium"},e))})]}),(0,i.jsxs)(g,{children:[(0,i.jsx)(x,{children:"Основные категории"}),(0,i.jsx)(f,{children:t.S.map(({key:e,...a})=>(0,i.jsx)(o.f,{...a,variant:"medium"},e))})]}),(0,i.jsxs)(g,{children:[(0,i.jsx)(x,{children:"Еще идеи"}),(0,i.jsx)(f,{children:e.map(({key:e,...a})=>(0,i.jsx)(o.f,{...a,variant:"medium"},e))})]})]})]})})}])},1958,e=>{var i=e.i(43476),a=e.i(97053),r=e.i(20133);let n={large:"250px",medium:"220px",small:"180px",slider:"290px"},t=a.U.div.withConfig({componentId:"sc-f5fb13c4-0"})`
  background-color: ${({color:e})=>e||"#f7f5f6"};
  background-image: ${({bgimage:e})=>e?`url(${e})`:"none"};
  background-size: ${({bgsize:e})=>e||"cover"};
  background-position: center;
  background-repeat: no-repeat;
  padding: ${({variant:e})=>"large"===e?"22px":"18px"};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: ${({variant:e})=>n[e]};
  min-width: 250px;
  border-radius: 22px;
  overflow: hidden;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease,
    opacity 0.3s ease;
  cursor: pointer;
  flex-shrink: 0;
  box-shadow: 0 12px 34px rgba(44, 31, 20, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(28, 18, 10, 0.05) 0%,
      rgba(28, 18, 10, 0.18) 46%,
      rgba(28, 18, 10, 0.68) 100%
    );
    z-index: 1;
  }

  &:hover {
    opacity: 1;
    transform: translateY(-4px) scale(1.01);
    box-shadow: 0 22px 48px rgba(44, 31, 20, 0.16);

    .card-title {
      font-weight: 700;
      transform: translateY(-2px);
    }
  }

  @media (max-width: 768px) {
    min-width: 220px;
    min-width: 0;
    height: ${({variant:e})=>"slider"===e?"260px":"large"===e?"220px":"190px"};
  }
`,o=a.U.div.withConfig({componentId:"sc-f5fb13c4-1"})`
  font-size: ${({variant:e})=>{switch(e){case"large":return"24px";case"medium":default:return"20px";case"small":return"18px";case"slider":return"22px"}}};
  font-weight: 600;
  line-height: 1.2;
  color: white;
  margin: 0;
  position: relative;
  z-index: 2;
  text-align: left;
  transition:
    transform 0.3s ease,
    font-weight 0.3s ease;
  padding: 0;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.32);

  @media (max-width: 768px) {
    font-size: ${({variant:e})=>{switch(e){case"large":case"slider":return"20px";case"medium":default:return"18px";case"small":return"16px"}}};
  }
`;e.s(["f",0,({img:e,label:a,color:n,name:s,variant:l="large",backgroundSize:p="cover"})=>(0,i.jsx)(r.L,{href:{pathname:"/categories/[name]",params:{name:s}},style:{textDecoration:"none"},children:(0,i.jsx)(t,{role:"link",color:n,variant:l,bgimage:e||void 0,bgsize:p,children:(0,i.jsx)(o,{className:"card-title",variant:l,children:a})})})])},41582,e=>{var i=e.i(43476),a=e.i(4529),r=e.i(97053);let n=r.U.header.withConfig({componentId:"sc-f6510fb7-0"})`
  display: flex;
  min-width: 0;
  margin: 76px 140px 60px 140px;

  @media ${a.R.tablet} {
    margin: 40px 0px 60px 0px;
  }

  @media ${a.R.mobileL} {
    margin: 40px 0px 50px 0px;
  }

  @media ${a.R.laptopL} {
    flex-direction: column;
  }
`,t=r.U.div.withConfig({componentId:"sc-f6510fb7-1"})`
  white-space: pre-line;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 48px;
  color: #000000;
  margin-bottom: 40px;

  @media ${a.R.mobileL} {
    margin-bottom: 30px;
    font-size: 30px;
    line-height: 36px;
  }
`,o=r.U.div.withConfig({componentId:"sc-f6510fb7-2"})`
  white-space: pre-line;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #777777;
  max-width: 760px;
`,s=r.U.div.withConfig({componentId:"sc-f6510fb7-3"})`
  width: 100%;
  min-width: 0;
  background-color: ${e=>e.backgroundColor||"transparent"};
`;e.s(["PageWrapper",0,({label:e,text:a,children:r,backgroundColor:l})=>(0,i.jsx)(n,{children:(0,i.jsxs)(s,{backgroundColor:l,children:[e&&(0,i.jsx)(t,{children:e}),a&&(0,i.jsx)(o,{children:a}),r]})})])},5800,37828,e=>{e.s(["f",0,[{key:"grill",name:"grill",label:"На мангале",img:"/optimize/categories-imgs/grill.webp",color:"#FFE0C2"},{key:"refreshing-drinks",name:"refreshing-drinks",label:"Освежающие напитки",img:"/optimize/categories-imgs/refreshingDrinks.webp",color:"#D7EEF4"},{key:"salads",name:"salads",label:"Салаты",img:"/optimize/categories-imgs/salads.webp",color:"#C1E1C1"}]],5800),e.s(["S",0,[{key:"breakfast",name:"breakfast",label:"Завтрак",img:"/optimize/categories-imgs/breakfast.webp",color:"#DCE6F2"},{key:"dinner",name:"dinner",label:"Обед",img:"/optimize/categories-imgs/dinner.webp",color:"#E9E4DF"},{key:"supper",name:"supper",label:"Ужин",img:"/optimize/categories-imgs/supper.webp",color:"#D8E0E3"},{key:"healthy",name:"healthy",label:"Здоровая еда",img:"/optimize/categories-imgs/healthy.webp",color:"#D9E7D0"},{key:"salads",name:"salads",label:"Салаты",img:"/optimize/categories-imgs/salads.webp",color:"#C1E1C1"},{key:"snacks",name:"snacks",label:"Закуски",img:"/optimize/categories-imgs/snacks.webp",color:"#ECEBE7"}],"d",0,[{key:"grill",name:"grill",label:"На мангале",img:"/optimize/categories-imgs/grill.webp",color:"#FFD8D8"},{key:"refreshing-drinks",name:"refreshing-drinks",label:"Освежающие напитки",img:"/optimize/categories-imgs/refreshingDrinks.webp",color:"#ECEBE7"}]],37828)}])})();