(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1958,e=>{"use strict";var i=e.i(43476),t=e.i(97053),a=e.i(20133);let n={large:"250px",medium:"220px",small:"180px",slider:"290px"},o=t.default.div.withConfig({componentId:"sc-f5fb13c4-0"})`
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
  padding: 0;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.32);

  @media (max-width: 768px) {
    font-size: ${({variant:e})=>{switch(e){case"large":case"slider":return"20px";case"medium":default:return"18px";case"small":return"16px"}}};
  }
`;e.s(["CategoryCard",0,({img:e,label:t,color:n,name:s,variant:d="large",backgroundSize:l="cover"})=>(0,i.jsx)(a.Link,{href:{pathname:"/categories/[name]",params:{name:s}},style:{textDecoration:"none"},children:(0,i.jsx)(o,{role:"link",color:n,variant:d,bgimage:e||void 0,bgsize:l,children:(0,i.jsx)(r,{className:"card-title",variant:d,children:t})})})])},5800,37828,e=>{"use strict";e.s(["SEASONAL_CATEGORIES_ARR",0,[{key:"grill",name:"grill",label:"На мангале",img:"/optimize/categories-imgs/grill.webp",color:"#FFE0C2"},{key:"dessert",name:"dessert",label:"Десерты",img:"/optimize/categories-imgs/desserts.webp",color:"#FAE7C9"},{key:"homemade-alcohol",name:"homemade-alcohol",label:"Домашние настойки",img:"/optimize/categories-imgs/homemadeAlcohol.webp",color:"#ECEBE7"}]],5800),e.s(["CATEGORIES_ARR",0,[{key:"breakfast",name:"breakfast",label:"Завтрак",img:"/optimize/categories-imgs/breakfast.webp",color:"#DCE6F2"},{key:"dinner",name:"dinner",label:"Обед",img:"/optimize/categories-imgs/dinner.webp",color:"#E9E4DF"},{key:"supper",name:"supper",label:"Ужин",img:"/optimize/categories-imgs/supper.webp",color:"#D8E0E3"},{key:"healthy",name:"healthy",label:"Здоровая еда",img:"/optimize/categories-imgs/healthy.webp",color:"#D9E7D0"},{key:"salads",name:"salads",label:"Салаты",img:"/optimize/categories-imgs/salads.webp",color:"#C1E1C1"},{key:"snacks",name:"snacks",label:"Закуски",img:"/optimize/categories-imgs/snacks.webp",color:"#ECEBE7"}],"OTHER_CATEGORIES_ARR",0,[{key:"grill",name:"grill",label:"На мангале",img:"/optimize/categories-imgs/grill.webp",color:"#FFD8D8"},{key:"refreshing-drinks",name:"refreshing-drinks",label:"Освежающие напитки",img:"/optimize/categories-imgs/refreshingDrinks.webp",color:"#ECEBE7"}]],37828)},50506,e=>{"use strict";var i=e.i(43476),t=e.i(97053),a=e.i(57688),n=e.i(20133),o=e.i(4529),r=e.i(92199);let s=t.default.div.withConfig({componentId:"sc-3ce889b2-0"})`
  background: #fffdfa;
  border-radius: 18px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: ${({variant:e})=>"base"===e?"220px":"100%"};
  min-height: 300px;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 10px 28px rgba(44, 31, 20, 0.08);
  scroll-snap-align: start;

  &:hover {
    transform: translateY(-4px) scale(1.015);
    box-shadow: 0 18px 42px rgba(44, 31, 20, 0.14);
  }
`,d=t.default.div.withConfig({componentId:"sc-3ce889b2-1"})`
  position: relative;
  width: 100%;
  height: ${({variant:e})=>"full"===e?"140px":"auto"};
  aspect-ratio: 1.35 / 1;
  background: #f5f3f3;
`,l=t.default.div.withConfig({componentId:"sc-3ce889b2-2"})`
  width: 100%;
  height: 100%;
  color: #a08367;
  background: #fff7ed;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`,c=t.default.div.withConfig({componentId:"sc-3ce889b2-3"})`
  display: flex;
  flex-direction: column;
  padding: 14px;
  flex: 1;
`,p=t.default.div.withConfig({componentId:"sc-3ce889b2-4"})`
  font-size: 15px;
  font-weight: 600;
  color: #222;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media ${o.minDevice.laptop} {
    font-size: 16px;
  }
`,m=t.default.div.withConfig({componentId:"sc-3ce889b2-5"})`
  margin-top: 6px;
  font-size: 12px;
  line-height: 1.5;
  color: #6d6258;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,g=t.default.div.withConfig({componentId:"sc-3ce889b2-6"})`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  color: #5f554d;
`,x=t.default.div.withConfig({componentId:"sc-3ce889b2-7"})`
  display: flex;
  align-items: center;
  gap: 4px;
`,f=["Легко","Средне","Сложно"];e.s(["RecipeCard",0,({name:e,img:t,title:o,description:h,time:b,level:u,variant:w="base"})=>(0,i.jsx)(n.Link,{href:{pathname:"/recipe/[name]",params:{name:e}},style:{textDecoration:"none",color:"inherit"},children:(0,i.jsxs)(s,{variant:w,children:[(0,i.jsx)(d,{variant:w,children:t?(0,i.jsx)(a.default,{src:t,alt:o,fill:!0,style:{objectFit:"cover"},sizes:"220px"}):(0,i.jsx)(l,{children:"Нет изображения"})}),(0,i.jsxs)(c,{children:[(0,i.jsx)(p,{children:o}),(0,i.jsx)(m,{children:h}),(0,i.jsxs)(g,{children:[(0,i.jsxs)(x,{children:[(0,i.jsx)(r.FiClock,{size:14})," ",b," мин"]}),(0,i.jsxs)(x,{children:[(0,i.jsx)(r.FiStar,{size:14,color:"#f6a623"})," ",f[u-1]]})]})]})]})})])},60777,e=>{"use strict";var i=e.i(43476),t=e.i(97053);let a=t.default.div.withConfig({componentId:"sc-64c242a1-0"})`
  display: flex;
  overflow-x: auto;
  gap: 16px;
  padding: 4px 0 14px;
  max-width: 100%;
  align-items: stretch;
  scroll-snap-type: x proximity;

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
`;e.s(["RecipesScroll",0,({children:e})=>(0,i.jsx)(a,{children:e})])},71359,e=>{"use strict";var i=e.i(43476),t=e.i(97053),a=e.i(20133),n=e.i(4529),o=e.i(1958),r=e.i(5800);let s=t.default.section.withConfig({componentId:"sc-6ea18ef5-0"})`
  max-width: 1280px;
  margin: 0 auto;
  overflow: hidden;
  padding: 0;
  margin-bottom: 54px;

  @media ${n.maxDevice.tablet} {
    padding: 0 16px;
    margin-bottom: 42px;
  }
`,d=t.default.div.withConfig({componentId:"sc-6ea18ef5-1"})`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;

  @media ${n.maxDevice.laptop} {
    grid-template-columns: 1fr;
  }
`,l=t.default.div.withConfig({componentId:"sc-6ea18ef5-2"})`
  padding: 0;
`,c=t.default.h2.withConfig({componentId:"sc-6ea18ef5-3"})`
  margin: 0 0 10px;
  color: #241b14;
  font-size: 1.55rem;
  line-height: 1.2;
  font-weight: 800;

  @media ${n.maxDevice.tablet} {
    font-size: 1.35rem;
  }
`,p=t.default.p.withConfig({componentId:"sc-6ea18ef5-4"})`
  max-width: 620px;
  margin: 0 0 22px;
  color: #6d6258;
  font-size: 0.98rem;
  line-height: 1.65;
`,m=()=>(0,i.jsx)(s,{children:(0,i.jsxs)(l,{children:[(0,i.jsx)(c,{children:"Сезонные категории"}),(0,i.jsx)(p,{children:"Подборки, которые особенно хочется открыть прямо сейчас."}),(0,i.jsx)(d,{children:r.SEASONAL_CATEGORIES_ARR.map(({key:e,...t})=>(0,i.jsx)(o.CategoryCard,{...t,variant:"large"},e))})]})});var g=e.i(50506),x=e.i(37828),f=e.i(95631),h=e.i(60777);let b=t.default.section.withConfig({componentId:"sc-5c000b8d-0"})`
  max-width: 1280px;
  overflow: hidden;
  padding: 0;
  margin: 0 auto 40px;

  @media ${n.maxDevice.tablet} {
    padding: 0 16px;
  }
`,u=t.default.div.withConfig({componentId:"sc-5c000b8d-1"})`
  padding: 0;
`,w=t.default.h2.withConfig({componentId:"sc-5c000b8d-2"})`
  margin: 0 0 10px;
  color: #241b14;
  font-size: 1.55rem;
  line-height: 1.2;
  font-weight: 800;

  @media ${n.maxDevice.tablet} {
    font-size: 1.35rem;
  }
`,v=t.default.p.withConfig({componentId:"sc-5c000b8d-3"})`
  max-width: 680px;
  margin: 0 0 28px;
  color: #6d6258;
  font-size: 0.98rem;
  line-height: 1.65;
`,C=t.default.div.withConfig({componentId:"sc-5c000b8d-4"})`
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  align-items: stretch;
  margin-bottom: 30px;
  gap: 18px;

  @media ${n.maxDevice.tablet} {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`,j=t.default.div.withConfig({componentId:"sc-5c000b8d-5"})`
  flex-shrink: 0;

  @media ${n.maxDevice.tablet} {
    width: 100%;
  }
`,k=t.default.div.withConfig({componentId:"sc-5c000b8d-6"})`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,y=(0,t.default)(a.Link).withConfig({componentId:"sc-5c000b8d-7"})`
  align-self: flex-start;
  color: #e75e02;
  font-size: 0.92rem;
  font-weight: 800;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,I=()=>(0,i.jsx)(b,{children:(0,i.jsxs)(u,{children:[(0,i.jsx)(w,{children:"Популярные рецепты по категориям"}),(0,i.jsx)(v,{children:"Быстрый вход в самые востребованные подборки: выберите категорию или сразу откройте рецепт."}),x.CATEGORIES_ARR.map(({name:e,key:t,...a})=>{let n=f.RECIPES_OBJ[e]?.slice(0,6)||[];return(0,i.jsxs)(C,{children:[(0,i.jsx)(j,{children:(0,i.jsx)(o.CategoryCard,{name:e,...a,variant:"slider"},t||e)}),n.length>0&&(0,i.jsxs)(k,{children:[(0,i.jsx)(h.RecipesScroll,{children:n.map(({key:e,name:t,...a})=>(0,i.jsx)(g.RecipeCard,{name:t,...a},e||t))}),(0,i.jsx)(y,{href:{pathname:"/categories/[name]",params:{name:e}},locale:"ru",children:"Все рецепты категории"})]})]},t||e)})]})});var z=e.i(46190);let E=t.default.main.withConfig({componentId:"sc-c815964a-0"})`
  background:
    radial-gradient(circle at top left, rgba(255, 132, 2, 0.1), transparent 34rem),
    linear-gradient(180deg, #fffaf5 0, #ffffff 520px);
`,R=t.default.section.withConfig({componentId:"sc-c815964a-1"})`
  max-width: 1280px;
  margin: 0 auto;
  padding: 132px 0 54px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.62fr);
  gap: 44px;
  align-items: center;

  @media ${n.maxDevice.laptop} {
    grid-template-columns: 1fr;
    padding: 96px 16px 38px;
  }
`,$=t.default.div.withConfig({componentId:"sc-c815964a-2"})`
  max-width: 760px;
`,D=t.default.p.withConfig({componentId:"sc-c815964a-3"})`
  margin: 0 0 14px;
  color: #e75e02;
  font-size: 0.84rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,A=t.default.h1.withConfig({componentId:"sc-c815964a-4"})`
  margin: 0;
  color: #211a15;
  font-size: clamp(2.6rem, 5vw, 5.6rem);
  line-height: 1;
  letter-spacing: 0;
`,S=t.default.p.withConfig({componentId:"sc-c815964a-5"})`
  max-width: 660px;
  margin: 22px 0 0;
  color: #65594f;
  font-size: 1.08rem;
  line-height: 1.75;

  @media ${n.maxDevice.tablet} {
    font-size: 0.96rem;
  }
`,O=t.default.div.withConfig({componentId:"sc-c815964a-6"})`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
`,F=(0,t.default)(a.Link).withConfig({componentId:"sc-c815964a-7"})`
  min-height: 52px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  border-radius: 16px;
  background: linear-gradient(135deg, #e75e02 0%, #ff8402 58%, #ffad3d 100%);
  color: #ffffff;
  font-weight: 800;
  text-decoration: none;
  box-shadow: 0 16px 30px rgba(231, 94, 2, 0.22);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 38px rgba(231, 94, 2, 0.28);
    text-decoration: none;
  }

  @media ${n.maxDevice.mobileL} {
    width: 100%;
  }
`,T=t.default.div.withConfig({componentId:"sc-c815964a-8"})`
  min-height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  border-radius: 28px;
  padding: 28px;
  background:
    linear-gradient(180deg, rgba(36, 27, 20, 0.02), rgba(36, 27, 20, 0.68)),
    url('/optimize/recipes/breakfast/bliny.webp') center / cover;
  box-shadow: 0 26px 64px rgba(44, 31, 20, 0.18);

  @media ${n.maxDevice.laptop} {
    min-height: 280px;
    border-radius: 22px;
  }
`,_=t.default.div.withConfig({componentId:"sc-c815964a-9"})`
  max-width: 320px;
  color: #ffffff;
  font-size: 1.55rem;
  font-weight: 800;
  line-height: 1.12;
  text-shadow: 0 4px 18px rgba(0, 0, 0, 0.28);
`,B=t.default.div.withConfig({componentId:"sc-c815964a-10"})`
  max-width: 320px;
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.95rem;
  line-height: 1.5;
`,L=t.default.section.withConfig({componentId:"sc-c815964a-11"})`
  max-width: 1280px;
  margin: 56px auto 72px;
  padding: 34px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  border-radius: 26px;
  background: #fffaf5;
  box-shadow:
    inset 0 0 0 1px rgba(255, 132, 2, 0.12),
    0 18px 44px rgba(44, 31, 20, 0.08);

  @media ${n.maxDevice.tablet} {
    margin: 42px 16px 56px;
    padding: 24px;
    align-items: stretch;
    flex-direction: column;
  }
`,G=t.default.h2.withConfig({componentId:"sc-c815964a-12"})`
  margin: 0 0 8px;
  color: #241b14;
  font-size: 1.6rem;
  line-height: 1.2;
`,P=t.default.p.withConfig({componentId:"sc-c815964a-13"})`
  margin: 0;
  color: #6d6258;
  line-height: 1.65;
`;e.s(["HomePage",0,()=>(0,i.jsxs)(E,{children:[(0,i.jsxs)(R,{children:[(0,i.jsxs)($,{children:[(0,i.jsx)(D,{children:"Домашняя кухня без суеты"}),(0,i.jsx)(A,{children:"Рецепты, к которым хочется возвращаться"}),(0,i.jsx)(S,{children:"Собираем понятные пошаговые рецепты для завтраков, ужинов, десертов и сезонных блюд. Выбирайте категорию, открывайте рецепт и готовьте в своем темпе."}),(0,i.jsxs)(O,{children:[(0,i.jsx)(F,{href:"/categories",children:"Смотреть категории"}),(0,i.jsx)(z.SuggestRecipeButton,{})]})]}),(0,i.jsxs)(T,{children:[(0,i.jsx)(_,{children:"Блины, салаты, гриль и домашние напитки"}),(0,i.jsx)(B,{children:"Подборки для будней, выходных и тех самых “что бы приготовить?” моментов."})]})]}),(0,i.jsx)(m,{}),(0,i.jsx)(I,{}),(0,i.jsxs)(L,{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(G,{children:"Не нашли любимый рецепт?"}),(0,i.jsx)(P,{children:"Предложите блюдо, которое стоит добавить на сайт."})]}),(0,i.jsx)(z.SuggestRecipeButton,{})]})]})],71359)}]);