(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,41582,e=>{"use strict";var i=e.i(43476),a=e.i(4529),t=e.i(97053);let o=t.default.header.withConfig({componentId:"sc-f6510fb7-0"})`
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
`,r=t.default.div.withConfig({componentId:"sc-f6510fb7-1"})`
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
`,s=t.default.div.withConfig({componentId:"sc-f6510fb7-3"})`
  width: 100%;
  min-width: 0;
  background-color: ${e=>e.backgroundColor||"transparent"};
`;e.s(["PageWrapper",0,({label:e,text:a,children:t,backgroundColor:l})=>(0,i.jsx)(o,{children:(0,i.jsxs)(s,{backgroundColor:l,children:[e&&(0,i.jsx)(r,{children:e}),a&&(0,i.jsx)(n,{children:a}),t]})})])},5800,e=>{"use strict";e.s(["SEASONAL_CATEGORIES_ARR",0,[{key:"new-year",name:"new-year",label:"Новый Год",img:"/optimize/categories-imgs/newYear.webp",color:"#FFD8D8"},{key:"dessert",name:"dessert",label:"Десерты",img:"/optimize/categories-imgs/desserts.webp",color:"#FAE7C9"},{key:"homemade-alcohol",name:"homemade-alcohol",label:"Домашние настойки",img:"/optimize/categories-imgs/homemadeAlcohol.webp",color:"#ECEBE7"}]])},37828,e=>{"use strict";e.s(["CATEGORIES_ARR",0,[{key:"breakfast",name:"breakfast",label:"Завтрак",img:"/optimize/categories-imgs/breakfast.webp",color:"#DCE6F2"},{key:"dinner",name:"dinner",label:"Обед",img:"/optimize/categories-imgs/dinner.webp",color:"#E9E4DF"},{key:"supper",name:"supper",label:"Ужин",img:"/optimize/categories-imgs/supper.webp",color:"#D8E0E3"},{key:"healthy",name:"healthy",label:"Здоровая еда",img:"/optimize/categories-imgs/healthy.webp",color:"#D9E7D0"},{key:"salads",name:"salads",label:"Салаты",img:"/optimize/categories-imgs/salads.webp",color:"#C1E1C1"},{key:"snacks",name:"snacks",label:"Закуски",img:"/optimize/categories-imgs/snacks.webp",color:"#ECEBE7"}],"OTHER_CATEGORIES_ARR",0,[{key:"grill",name:"grill",label:"На мангале",img:"/optimize/categories-imgs/grill.webp",color:"#FFD8D8"},{key:"refreshing-drinks",name:"refreshing-drinks",label:"Освежающие напитки",img:"/optimize/categories-imgs/refreshingDrinks.webp",color:"#ECEBE7"}]])},1958,e=>{"use strict";var i=e.i(43476),a=e.i(97053),t=e.i(20133);let o={large:"250px",medium:"200px",small:"180px",slider:"290px"},r=a.default.div.withConfig({componentId:"sc-f5fb13c4-0"})`
  background-color: ${({color:e})=>e||"#f7f5f6"};
  background-image: ${({bgimage:e})=>e?`url(${e})`:"none"};
  background-size: ${({bgsize:e})=>e||"cover"};
  background-position: center;
  background-repeat: no-repeat;
  padding: ${({variant:e})=>"large"===e?"20px":"12px"};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: ${({variant:e})=>o[e]};
  min-width: 250px;
  border-radius: 16px;
  overflow: hidden;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease,
    opacity 0.3s ease;
  cursor: pointer;
  flex-shrink: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.1) 100%);
    z-index: 1;
  }

  &:hover {
    opacity: 1;
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);

    .card-title {
      font-weight: 700;
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    min-width: 220px;
    height: ${({variant:e})=>"slider"===e?"260px":"large"===e?"220px":"180px"};
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
  padding: 20px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: ${({variant:e})=>{switch(e){case"large":case"slider":return"20px";case"medium":default:return"18px";case"small":return"16px"}}};
    padding: 15px;
  }
`;e.s(["CategoryCard",0,({img:e,label:a,color:o,name:s,variant:l="large",backgroundSize:p="cover"})=>(0,i.jsx)(t.Link,{href:{pathname:"/categories/[name]",params:{name:s}},locale:"ru",children:(0,i.jsx)(r,{role:"link",color:o,variant:l,bgimage:e||void 0,bgsize:p,children:(0,i.jsx)(n,{className:"card-title",variant:l,children:a})})})])},81055,e=>{"use strict";var i=e.i(43476),a=e.i(97053),t=e.i(4529),o=e.i(5800),r=e.i(37828),n=e.i(1958),s=e.i(41582);let l=a.default.section.withConfig({componentId:"sc-69ffab43-0"})`
  background-color: #ffffff;
  min-height: 300px;
  max-width: 1920px;
  overflow: hidden;
  padding: 0px 100px;
  margin-bottom: 40px;

  @media ${t.maxDevice.tablet} {
    padding: 0 0 20px 0;
  }
`,p=a.default.div.withConfig({componentId:"sc-69ffab43-1"})`
  padding: 5px;
`,d=a.default.div.withConfig({componentId:"sc-69ffab43-2"})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 5px;
`;e.s(["default",0,()=>{let e=[...o.SEASONAL_CATEGORIES_ARR,...r.OTHER_CATEGORIES_ARR,...r.CATEGORIES_ARR];return(0,i.jsx)(s.PageWrapper,{children:(0,i.jsx)(l,{children:(0,i.jsx)(p,{children:(0,i.jsx)(d,{children:e.map(({key:e,...a})=>(0,i.jsx)(n.CategoryCard,{...a,variant:"medium"},e))})})})})}])}]);