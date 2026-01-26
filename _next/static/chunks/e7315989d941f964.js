(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1958,e=>{"use strict";var i=e.i(43476),t=e.i(97053),a=e.i(20133);let o={large:"250px",medium:"200px",small:"180px",slider:"290px"},n=t.default.div.withConfig({componentId:"sc-f5fb13c4-0"})`
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
`,r=t.default.div.withConfig({componentId:"sc-f5fb13c4-1"})`
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
`;e.s(["CategoryCard",0,({img:e,label:t,color:o,name:s,variant:l="large",backgroundSize:c="cover"})=>(0,i.jsx)(a.Link,{href:{pathname:"/categories/[name]",params:{name:s}},locale:"ru",children:(0,i.jsx)(n,{role:"link",color:o,variant:l,bgimage:e||void 0,bgsize:c,children:(0,i.jsx)(r,{className:"card-title",variant:l,children:t})})})])},5800,e=>{"use strict";e.s(["SEASONAL_CATEGORIES_ARR",0,[{key:"new-year",name:"new-year",label:"Новый Год",img:"/static/categories-imgs/newYear.jpeg",color:"#FFD8D8"},{key:"dessert",name:"dessert",label:"Десерты",img:"/static/categories-imgs/desserts.jpeg",color:"#FAE7C9"},{key:"homemade-alcohol",name:"homemade-alcohol",label:"Домашние настойки",img:"/static/categories-imgs/homemadeAlcohol.jpeg",color:"#ECEBE7"}]])},37828,e=>{"use strict";e.s(["CATEGORIES_ARR",0,[{key:"breakfast",name:"breakfast",label:"Завтрак",img:"/static/categories-imgs/breakfast.jpeg",color:"#DCE6F2"},{key:"dinner",name:"dinner",label:"Обед",img:"/static/categories-imgs/dinner.jpeg",color:"#E9E4DF"},{key:"supper",name:"supper",label:"Ужин",img:"/static/categories-imgs/supper.jpeg",color:"#D8E0E3"},{key:"healthy",name:"healthy",label:"Здоровая еда",img:"/static/categories-imgs/healthy.jpeg",color:"#D9E7D0"},{key:"salads",name:"salads",label:"Салаты",img:"/static/categories-imgs/salads.jpeg",color:"#C1E1C1"},{key:"snacks",name:"snacks",label:"Закуски",img:"/static/categories-imgs/snacks.jpeg",color:"#ECEBE7"}],"OTHER_CATEGORIES_ARR",0,[{key:"grill",name:"grill",label:"На мангале",img:"/static/categories-imgs/grill.jpeg",color:"#FFD8D8"},{key:"refreshing-drinks",name:"refreshing-drinks",label:"Освежающие напитки",img:"/static/categories-imgs/refreshingDrinks.jpeg",color:"#ECEBE7"}]])},50506,e=>{"use strict";var i=e.i(43476),t=e.i(97053),a=e.i(57688),o=e.i(20133),n=e.i(4529),r=e.i(92199);let s=t.default.div.withConfig({componentId:"sc-3ce889b2-0"})`
  background: #fffdfa;
  border-radius: 12px;
  border: 1px solid #eee;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: ${({variant:e})=>"base"===e?"220px":"100%"};
  min-height: 280px;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
  }
`,l=t.default.div.withConfig({componentId:"sc-3ce889b2-1"})`
  position: relative;
  width: 100%;
  height: ${({variant:e})=>"full"===e?"140px":"auto"};
  aspect-ratio: 1.3 / 1;
  background: #f5f3f3;
`,c=t.default.div.withConfig({componentId:"sc-3ce889b2-2"})`
  display: flex;
  flex-direction: column;
  padding: 12px;
  flex: 1;
`,d=t.default.div.withConfig({componentId:"sc-3ce889b2-3"})`
  font-size: 15px;
  font-weight: 600;
  color: #222;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media ${n.minDevice.laptop} {
    font-size: 16px;
  }
`,p=t.default.div.withConfig({componentId:"sc-3ce889b2-4"})`
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.4;
  color: #666;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,g=t.default.div.withConfig({componentId:"sc-3ce889b2-5"})`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  color: #444;
`,x=t.default.div.withConfig({componentId:"sc-3ce889b2-6"})`
  display: flex;
  align-items: center;
  gap: 4px;
`,m=["Легко","Средне","Сложно"];e.s(["RecipeCard",0,({name:e,img:t,title:n,description:h,time:f,level:b,variant:u="base"})=>(0,i.jsx)(o.Link,{href:{pathname:"/recipe/[name]",params:{name:e}},locale:"ru",style:{textDecoration:"none",color:"inherit"},children:(0,i.jsxs)(s,{variant:u,children:[(0,i.jsx)(l,{variant:u,children:t?(0,i.jsx)(a.default,{src:t,alt:n,fill:!0,style:{objectFit:"cover"},sizes:"220px"}):(0,i.jsx)("div",{style:{width:"100%",height:"100%",color:"#aaa",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:500},children:"Нет изображения"})}),(0,i.jsxs)(c,{children:[(0,i.jsx)(d,{children:n}),(0,i.jsx)(p,{children:h}),(0,i.jsxs)(g,{children:[(0,i.jsxs)(x,{children:[(0,i.jsx)(r.FiClock,{size:14})," ",f," мин"]}),(0,i.jsxs)(x,{children:[(0,i.jsx)(r.FiStar,{size:14,color:"#f6a623"})," ",m[b-1]]})]})]})]})})])},60777,e=>{"use strict";var i=e.i(43476),t=e.i(97053);let a=t.default.div.withConfig({componentId:"sc-64c242a1-0"})`
  display: flex;
  overflow-x: auto;
  gap: 12px;
  padding-bottom: 8px;
  max-width: 94vw;
  align-items: stretch;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    transition: background 0.3s;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.35);
  }
`;e.s(["RecipesScroll",0,({children:e})=>(0,i.jsx)(a,{children:e})])},15866,e=>{"use strict";var i=e.i(43476),t=e.i(97053),a=e.i(1958),o=e.i(5800),n=e.i(4529);let r=t.default.section.withConfig({componentId:"sc-6ea18ef5-0"})`
  min-height: 300px;
  max-width: 1920px;
  margin: 0 auto;
  overflow: hidden;
  padding: 0px 100px;
  margin-bottom: 20px;

  @media ${n.maxDevice.tablet} {
    padding: 0 0 20px 0;
  }
`,s=t.default.div.withConfig({componentId:"sc-6ea18ef5-1"})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
`,l=t.default.div.withConfig({componentId:"sc-6ea18ef5-2"})`
  padding: 10px;
  padding-top: 100px;
`,c=t.default.h2.withConfig({componentId:"sc-6ea18ef5-3"})`
  margin-bottom: 24px;
  font-size: 24px;

  @media ${n.maxDevice.tablet} {
    font-size: 20px;
    text-align: center;
  }
`;e.s(["SeasonalCategories",0,()=>(0,i.jsx)(r,{id:"techStacks",children:(0,i.jsxs)(l,{children:[(0,i.jsx)(c,{children:"СЕЗОННЫЕ КАТЕГОРИИ"}),(0,i.jsx)(s,{children:o.SEASONAL_CATEGORIES_ARR.map(({key:e,...t})=>(0,i.jsx)(a.CategoryCard,{...t,variant:"large"},e))})]})})])},89938,e=>{"use strict";var i=e.i(43476),t=e.i(97053),a=e.i(50506),o=e.i(37828),n=e.i(1958),r=e.i(95631),s=e.i(4529),l=e.i(60777);let c=t.default.section.withConfig({componentId:"sc-5c000b8d-0"})`
  min-height: 300px;
  max-width: 1920px;
  overflow: hidden;
  padding: 0px 100px;
  margin: 0 auto 40px;

  @media ${s.maxDevice.tablet} {
    padding: 0 0 20px 0;
  }
`,d=t.default.div.withConfig({componentId:"sc-5c000b8d-1"})`
  padding: 10px;

  @media ${s.maxDevice.tablet} {
    padding: 16px 12px;
  }
`,p=t.default.h2.withConfig({componentId:"sc-5c000b8d-2"})`
  margin-bottom: 24px;
  font-size: 24px;

  @media ${s.maxDevice.tablet} {
    font-size: 20px;
    text-align: center;
  }
`,g=t.default.div.withConfig({componentId:"sc-5c000b8d-3"})`
  display: flex;
  align-items: flex-start;
  margin-bottom: 32px;
  gap: 24px;

  @media ${s.maxDevice.tablet} {
    flex-direction: column;
    gap: 4px;
  }
`,x=t.default.div.withConfig({componentId:"sc-5c000b8d-4"})`
  flex-shrink: 0;

  @media ${s.maxDevice.tablet} {
    width: 100%;
  }
`;e.s(["PopularCategories",0,()=>(0,i.jsx)(c,{id:"techStacks",children:(0,i.jsxs)(d,{children:[(0,i.jsx)(p,{children:"ПОПУЛЯРНЫЕ КАТЕГОРИИ"}),o.CATEGORIES_ARR.map(({name:e,key:t,...o})=>{let s=r.RECIPES_OBJ[e]?.slice(0,10)||[];return(0,i.jsxs)(g,{children:[(0,i.jsx)(x,{children:(0,i.jsx)(n.CategoryCard,{name:e,...o,variant:"slider"},t||e)}),s.length>0&&(0,i.jsx)(l.RecipesScroll,{children:s.map(({key:e,name:t,...o})=>(0,i.jsx)(a.RecipeCard,{name:t,...o},e||t))})]},t||e)})]})})])}]);