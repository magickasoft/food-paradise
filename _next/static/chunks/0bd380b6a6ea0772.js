(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,41582,e=>{"use strict";var i=e.i(43476),a=e.i(4529),t=e.i(97053);let r=t.default.header.withConfig({componentId:"sc-f6510fb7-0"})`
  display: flex;
  min-width: 0;
  margin: 76px 140px 60px 140px;

  @media ${a.maxDevice.tablet} {
    margin: 40px 0px 60px 0px;
  }

  @media ${a.maxDevice.mobileL} {
    margin: 40px 0px 50px 0px;
  }

  @media ${a.maxDevice.laptopL} {
    flex-direction: column;
  }
`,o=t.default.div.withConfig({componentId:"sc-f6510fb7-1"})`
  white-space: pre-line;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 48px;
  color: #000000;
  margin-bottom: 40px;

  @media ${a.maxDevice.mobileL} {
    margin-bottom: 30px;
    font-size: 30px;
    line-height: 36px;
  }
`,n=t.default.div.withConfig({componentId:"sc-f6510fb7-2"})`
  white-space: pre-line;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #777777;
  max-width: 760px;
`,l=t.default.div.withConfig({componentId:"sc-f6510fb7-3"})`
  width: 100%;
  min-width: 0;
  background-color: ${e=>e.backgroundColor||"transparent"};
`;e.s(["PageWrapper",0,({label:e,text:a,children:t,backgroundColor:s})=>(0,i.jsx)(r,{children:(0,i.jsxs)(l,{backgroundColor:s,children:[e&&(0,i.jsx)(o,{children:e}),a&&(0,i.jsx)(n,{children:a}),t]})})])},5800,37828,e=>{"use strict";e.s(["SEASONAL_CATEGORIES_ARR",0,[{key:"grill",name:"grill",label:"На мангале",img:"/optimize/categories-imgs/grill.webp",color:"#FFE0C2"},{key:"dessert",name:"dessert",label:"Десерты",img:"/optimize/categories-imgs/desserts.webp",color:"#FAE7C9"},{key:"homemade-alcohol",name:"homemade-alcohol",label:"Домашние настойки",img:"/optimize/categories-imgs/homemadeAlcohol.webp",color:"#ECEBE7"}]],5800),e.s(["CATEGORIES_ARR",0,[{key:"breakfast",name:"breakfast",label:"Завтрак",img:"/optimize/categories-imgs/breakfast.webp",color:"#DCE6F2"},{key:"dinner",name:"dinner",label:"Обед",img:"/optimize/categories-imgs/dinner.webp",color:"#E9E4DF"},{key:"supper",name:"supper",label:"Ужин",img:"/optimize/categories-imgs/supper.webp",color:"#D8E0E3"},{key:"healthy",name:"healthy",label:"Здоровая еда",img:"/optimize/categories-imgs/healthy.webp",color:"#D9E7D0"},{key:"salads",name:"salads",label:"Салаты",img:"/optimize/categories-imgs/salads.webp",color:"#C1E1C1"},{key:"snacks",name:"snacks",label:"Закуски",img:"/optimize/categories-imgs/snacks.webp",color:"#ECEBE7"}],"OTHER_CATEGORIES_ARR",0,[{key:"grill",name:"grill",label:"На мангале",img:"/optimize/categories-imgs/grill.webp",color:"#FFD8D8"},{key:"refreshing-drinks",name:"refreshing-drinks",label:"Освежающие напитки",img:"/optimize/categories-imgs/refreshingDrinks.webp",color:"#ECEBE7"}]],37828)},1958,e=>{"use strict";var i=e.i(43476),a=e.i(97053),t=e.i(20133);let r={large:"250px",medium:"220px",small:"180px",slider:"290px"},o=a.default.div.withConfig({componentId:"sc-f5fb13c4-0"})`
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
  height: ${({variant:e})=>r[e]};
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
`,n=a.default.div.withConfig({componentId:"sc-f5fb13c4-1"})`
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
`;e.s(["CategoryCard",0,({img:e,label:a,color:r,name:l,variant:s="large",backgroundSize:d="cover"})=>(0,i.jsx)(t.Link,{href:{pathname:"/categories/[name]",params:{name:l}},style:{textDecoration:"none"},children:(0,i.jsx)(o,{role:"link",color:r,variant:s,bgimage:e||void 0,bgsize:d,children:(0,i.jsx)(n,{className:"card-title",variant:s,children:a})})})])},81055,e=>{"use strict";var i=e.i(43476),a=e.i(97053),t=e.i(4529),r=e.i(5800),o=e.i(37828),n=e.i(1958),l=e.i(41582);let s=a.default.section.withConfig({componentId:"sc-69ffab43-0"})`
  max-width: 1280px;
  margin: 0 auto 56px;
  padding: 24px 0 0;

  @media ${t.maxDevice.tablet} {
    padding: 12px 16px 0;
  }
`,d=a.default.header.withConfig({componentId:"sc-69ffab43-1"})`
  max-width: 780px;
  margin-bottom: 42px;
`,m=a.default.h1.withConfig({componentId:"sc-69ffab43-2"})`
  margin: 0 0 14px;
  color: #211a15;
  font-size: clamp(2.1rem, 4vw, 4rem);
  line-height: 1.05;
  letter-spacing: 0;
`,c=a.default.p.withConfig({componentId:"sc-69ffab43-3"})`
  max-width: 680px;
  margin: 0;
  color: #65594f;
  font-size: 1.05rem;
  line-height: 1.75;

  @media ${t.maxDevice.tablet} {
    font-size: 0.95rem;
  }
`,p=a.default.div.withConfig({componentId:"sc-69ffab43-4"})`
  display: flex;
  flex-direction: column;
  gap: 44px;
`,g=a.default.section.withConfig({componentId:"sc-69ffab43-5"})`
  display: flex;
  flex-direction: column;
  gap: 18px;
`,x=a.default.h2.withConfig({componentId:"sc-69ffab43-6"})`
  margin: 0;
  color: #241b14;
  font-size: 1.35rem;
  line-height: 1.25;
  font-weight: 800;
`,f=a.default.div.withConfig({componentId:"sc-69ffab43-7"})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${({$featured:e})=>e?"320px":"260px"}, 1fr));
  gap: 18px;

  @media ${t.maxDevice.tablet} {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;e.s(["default",0,()=>{let e=o.OTHER_CATEGORIES_ARR.filter(e=>"grill"!==e.key);return(0,i.jsx)(l.PageWrapper,{children:(0,i.jsxs)(s,{children:[(0,i.jsxs)(d,{children:[(0,i.jsx)(m,{children:"Категории рецептов"}),(0,i.jsx)(c,{children:"Выберите настроение, сезон или формат блюда: от быстрых завтраков до рецептов на мангале и домашних напитков."})]}),(0,i.jsxs)(p,{children:[(0,i.jsxs)(g,{children:[(0,i.jsx)(x,{children:"Сезонное"}),(0,i.jsx)(f,{$featured:!0,children:r.SEASONAL_CATEGORIES_ARR.map(({key:e,...a})=>(0,i.jsx)(n.CategoryCard,{...a,variant:"medium"},e))})]}),(0,i.jsxs)(g,{children:[(0,i.jsx)(x,{children:"Основные категории"}),(0,i.jsx)(f,{children:o.CATEGORIES_ARR.map(({key:e,...a})=>(0,i.jsx)(n.CategoryCard,{...a,variant:"medium"},e))})]}),(0,i.jsxs)(g,{children:[(0,i.jsx)(x,{children:"Еще идеи"}),(0,i.jsx)(f,{children:e.map(({key:e,...a})=>(0,i.jsx)(n.CategoryCard,{...a,variant:"medium"},e))})]})]})]})})}])}]);