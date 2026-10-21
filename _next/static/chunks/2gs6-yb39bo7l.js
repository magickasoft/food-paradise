(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1958,e=>{var i=e.i(43476),n=e.i(97053),t=e.i(20133);let a={large:"250px",medium:"220px",small:"180px",slider:"290px"},o=n.U.div.withConfig({componentId:"sc-f5fb13c4-0"})`
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
  height: ${({variant:e})=>a[e]};
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
`,r=n.U.div.withConfig({componentId:"sc-f5fb13c4-1"})`
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
`;e.s(["f",0,({img:e,label:n,color:a,name:s,variant:d="large",backgroundSize:c="cover"})=>(0,i.jsx)(t.L,{href:{pathname:"/categories/[name]",params:{name:s}},style:{textDecoration:"none"},children:(0,i.jsx)(o,{role:"link",color:a,variant:d,bgimage:e||void 0,bgsize:c,children:(0,i.jsx)(r,{className:"card-title",variant:d,children:n})})})])},50506,e=>{var i=e.i(43476),n=e.i(97053),t=e.i(25164),a=e.i(20133),o=e.i(4529),r=e.i(92199);let s=n.U.div.withConfig({componentId:"sc-3ce889b2-0"})`
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
`,d=n.U.div.withConfig({componentId:"sc-3ce889b2-1"})`
  position: relative;
  width: 100%;
  height: ${({variant:e})=>"full"===e?"140px":"auto"};
  aspect-ratio: 1.35 / 1;
  background: #f5f3f3;
`,c=n.U.div.withConfig({componentId:"sc-3ce889b2-2"})`
  width: 100%;
  height: 100%;
  color: #a08367;
  background: #fff7ed;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`,l=n.U.div.withConfig({componentId:"sc-3ce889b2-3"})`
  display: flex;
  flex-direction: column;
  padding: 14px;
  flex: 1;
`,p=n.U.div.withConfig({componentId:"sc-3ce889b2-4"})`
  font-size: 15px;
  font-weight: 600;
  color: #222;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media ${o.k.laptop} {
    font-size: 16px;
  }
`,g=n.U.div.withConfig({componentId:"sc-3ce889b2-5"})`
  margin-top: 6px;
  font-size: 12px;
  line-height: 1.5;
  color: #6d6258;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,x=n.U.div.withConfig({componentId:"sc-3ce889b2-6"})`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  color: #5f554d;
`,m=n.U.div.withConfig({componentId:"sc-3ce889b2-7"})`
  display: flex;
  align-items: center;
  gap: 4px;
`,f=["Легко","Средне","Сложно"];e.s(["f",0,({recipeKey:e,img:n,title:o,description:h,time:b,level:w,variant:u="base"})=>(0,i.jsx)(a.L,{href:{pathname:"/recipe/[name]",params:{name:e}},style:{textDecoration:"none",color:"inherit"},children:(0,i.jsxs)(s,{variant:u,children:[(0,i.jsx)(d,{variant:u,children:n?(0,i.jsx)(t.default,{src:n,alt:o,fill:!0,style:{objectFit:"cover"},sizes:"220px"}):(0,i.jsx)(c,{children:"Нет изображения"})}),(0,i.jsxs)(l,{children:[(0,i.jsx)(p,{children:o}),(0,i.jsx)(g,{children:h}),(0,i.jsxs)(x,{children:[(0,i.jsxs)(m,{children:[(0,i.jsx)(r.T,{size:14})," ",b," мин"]}),(0,i.jsxs)(m,{children:[(0,i.jsx)(r.q,{size:14,color:"#f6a623"})," ",f[w-1]]})]})]})]})})])},71359,e=>{var i=e.i(43476),n=e.i(97053),t=e.i(20133),a=e.i(4529),o=e.i(1958),r=e.i(5800);let s=n.U.section.withConfig({componentId:"sc-6ea18ef5-0"})`
  max-width: 1280px;
  margin: 0 auto;
  overflow: hidden;
  padding: 0;
  margin-bottom: 54px;

  @media ${a.R.tablet} {
    padding: 0 16px;
    margin-bottom: 42px;
  }
`,d=n.U.div.withConfig({componentId:"sc-6ea18ef5-1"})`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;

  @media ${a.R.laptop} {
    grid-template-columns: 1fr;
  }
`,c=n.U.div.withConfig({componentId:"sc-6ea18ef5-2"})`
  padding: 0;
`,l=n.U.h2.withConfig({componentId:"sc-6ea18ef5-3"})`
  margin: 0 0 10px;
  color: #241b14;
  font-size: 1.55rem;
  line-height: 1.2;
  font-weight: 800;

  @media ${a.R.tablet} {
    font-size: 1.35rem;
  }
`,p=n.U.p.withConfig({componentId:"sc-6ea18ef5-4"})`
  max-width: 620px;
  margin: 0 0 22px;
  color: #6d6258;
  font-size: 0.98rem;
  line-height: 1.65;
`,g=()=>(0,i.jsx)(s,{children:(0,i.jsxs)(c,{children:[(0,i.jsx)(l,{children:"Сезонные категории"}),(0,i.jsx)(p,{children:"Подборки, которые особенно хочется открыть прямо сейчас."}),(0,i.jsx)(d,{children:r.f.map(({key:e,...n})=>(0,i.jsx)(o.f,{...n,variant:"large"},e))})]})});var x=e.i(50506),m=e.i(37828),f=e.i(95631),h=e.i(60777);let b=n.U.section.withConfig({componentId:"sc-5c000b8d-0"})`
  max-width: 1280px;
  overflow: hidden;
  padding: 0;
  margin: 0 auto 40px;

  @media ${a.R.tablet} {
    padding: 0 16px;
  }
`,w=n.U.div.withConfig({componentId:"sc-5c000b8d-1"})`
  padding: 0;
`,u=n.U.h2.withConfig({componentId:"sc-5c000b8d-2"})`
  margin: 0 0 10px;
  color: #241b14;
  font-size: 1.55rem;
  line-height: 1.2;
  font-weight: 800;

  @media ${a.R.tablet} {
    font-size: 1.35rem;
  }
`,j=n.U.p.withConfig({componentId:"sc-5c000b8d-3"})`
  max-width: 680px;
  margin: 0 0 28px;
  color: #6d6258;
  font-size: 0.98rem;
  line-height: 1.65;
`,v=n.U.div.withConfig({componentId:"sc-5c000b8d-4"})`
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  align-items: stretch;
  margin-bottom: 30px;
  gap: 18px;

  @media ${a.R.tablet} {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`,k=n.U.div.withConfig({componentId:"sc-5c000b8d-5"})`
  flex-shrink: 0;

  @media ${a.R.tablet} {
    width: 100%;
  }
`,C=n.U.div.withConfig({componentId:"sc-5c000b8d-6"})`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,y=(0,n.U)(t.L).withConfig({componentId:"sc-5c000b8d-7"})`
  align-self: flex-start;
  color: #e75e02;
  font-size: 0.92rem;
  font-weight: 800;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,z=()=>(0,i.jsx)(b,{children:(0,i.jsxs)(w,{children:[(0,i.jsx)(u,{children:"Популярные рецепты по категориям"}),(0,i.jsx)(j,{children:"Быстрый вход в самые востребованные подборки: выберите категорию или сразу откройте рецепт."}),m.S.map(({name:e,key:n,...t})=>{let a=f.M[e]?.slice(0,6)||[];return(0,i.jsxs)(v,{children:[(0,i.jsx)(k,{children:(0,i.jsx)(o.f,{name:e,...t,variant:"slider"},n||e)}),a.length>0&&(0,i.jsxs)(C,{children:[(0,i.jsx)(h.f,{children:a.map(({key:e,name:n,...t})=>(0,i.jsx)(x.f,{name:n,recipeKey:e,...t},e||n))}),(0,i.jsx)(y,{href:{pathname:"/categories/[name]",params:{name:e}},locale:"ru",children:"Все рецепты категории"})]})]},n||e)})]})});var U=e.i(46190),I=e.i(57086);let $=n.U.main.withConfig({componentId:"sc-c815964a-0"})`
  background:
    radial-gradient(circle at top left, rgba(255, 132, 2, 0.1), transparent 34rem),
    linear-gradient(180deg, #fffaf5 0, #ffffff 520px);
`,E=n.U.section.withConfig({componentId:"sc-c815964a-1"})`
  max-width: 1280px;
  margin: 0 auto;
  padding: 132px 0 54px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.62fr);
  gap: 44px;
  align-items: center;

  @media ${a.R.laptop} {
    grid-template-columns: 1fr;
    padding: 96px 16px 38px;
  }
`,R=n.U.div.withConfig({componentId:"sc-c815964a-2"})`
  max-width: 760px;
`,D=n.U.p.withConfig({componentId:"sc-c815964a-3"})`
  margin: 0 0 14px;
  color: #e75e02;
  font-size: 0.84rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,F=n.U.h1.withConfig({componentId:"sc-c815964a-4"})`
  margin: 0;
  color: #211a15;
  font-size: clamp(2.6rem, 5vw, 5.6rem);
  line-height: 1;
  letter-spacing: 0;
`,L=n.U.p.withConfig({componentId:"sc-c815964a-5"})`
  max-width: 660px;
  margin: 22px 0 0;
  color: #65594f;
  font-size: 1.08rem;
  line-height: 1.75;

  @media ${a.R.tablet} {
    font-size: 0.96rem;
  }
`,T=n.U.div.withConfig({componentId:"sc-c815964a-6"})`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
`,B=(0,n.U)(t.L).withConfig({componentId:"sc-c815964a-7"})`
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

  @media ${a.R.mobileL} {
    width: 100%;
  }
`,Y=n.U.div.withConfig({componentId:"sc-c815964a-8"})`
  min-height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  border-radius: 28px;
  padding: 28px;
  background:
    linear-gradient(180deg, rgba(36, 27, 20, 0.02), rgba(36, 27, 20, 0.68)),
    url('${(0,I.f)("/optimize/recipes/breakfast/bliny.webp")}') center / cover;
  box-shadow: 0 26px 64px rgba(44, 31, 20, 0.18);

  @media ${a.R.laptop} {
    min-height: 280px;
    border-radius: 22px;
  }
`,K=n.U.div.withConfig({componentId:"sc-c815964a-9"})`
  max-width: 320px;
  color: #ffffff;
  font-size: 1.55rem;
  font-weight: 800;
  line-height: 1.12;
  text-shadow: 0 4px 18px rgba(0, 0, 0, 0.28);
`,P=n.U.div.withConfig({componentId:"sc-c815964a-10"})`
  max-width: 320px;
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.95rem;
  line-height: 1.5;
`,S=n.U.section.withConfig({componentId:"sc-c815964a-11"})`
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

  @media ${a.R.tablet} {
    margin: 42px 16px 56px;
    padding: 24px;
    align-items: stretch;
    flex-direction: column;
  }
`,A=n.U.h2.withConfig({componentId:"sc-c815964a-12"})`
  margin: 0 0 8px;
  color: #241b14;
  font-size: 1.6rem;
  line-height: 1.2;
`,O=n.U.p.withConfig({componentId:"sc-c815964a-13"})`
  margin: 0;
  color: #6d6258;
  line-height: 1.65;
`;e.s(["HomePage",0,()=>(0,i.jsxs)($,{children:[(0,i.jsxs)(E,{children:[(0,i.jsxs)(R,{children:[(0,i.jsx)(D,{children:"Домашняя кухня без суеты"}),(0,i.jsx)(F,{children:"Рецепты, к которым хочется возвращаться"}),(0,i.jsx)(L,{children:"Собираем понятные пошаговые рецепты для завтраков, ужинов, десертов и сезонных блюд. Выбирайте категорию, открывайте рецепт и готовьте в своем темпе."}),(0,i.jsxs)(T,{children:[(0,i.jsx)(B,{href:"/categories",children:"Смотреть категории"}),(0,i.jsx)(U.f,{})]})]}),(0,i.jsxs)(Y,{children:[(0,i.jsx)(K,{children:"Блины, салаты, гриль и домашние напитки"}),(0,i.jsx)(P,{children:"Подборки для будней, выходных и тех самых “что бы приготовить?” моментов."})]})]}),(0,i.jsx)(g,{}),(0,i.jsx)(z,{}),(0,i.jsxs)(S,{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(A,{children:"Не нашли любимый рецепт?"}),(0,i.jsx)(O,{children:"Предложите блюдо, которое стоит добавить на сайт."})]}),(0,i.jsx)(U.f,{})]})]})],71359)},60777,e=>{var i=e.i(43476),n=e.i(97053);let t=n.U.div.withConfig({componentId:"sc-64c242a1-0"})`
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
`;e.s(["f",0,({children:e})=>(0,i.jsx)(t,{children:e})])},5800,37828,e=>{var i=e.i(57086);let n=[{key:"grill",name:"grill",label:"На мангале",img:(0,i.f)("/optimize/categories-imgs/grill.webp"),color:"#FFE0C2"},{key:"refreshing-drinks",name:"refreshing-drinks",label:"Освежающие напитки",img:(0,i.f)("/optimize/categories-imgs/refreshingDrinks.webp"),color:"#D7EEF4"},{key:"salads",name:"salads",label:"Салаты",img:(0,i.f)("/optimize/categories-imgs/salads.webp"),color:"#C1E1C1"}];e.s(["f",0,n],5800);let t=[{key:"breakfast",name:"breakfast",label:"Завтрак",img:(0,i.f)("/optimize/categories-imgs/breakfast.webp"),color:"#DCE6F2"},{key:"dinner",name:"dinner",label:"Обед",img:(0,i.f)("/optimize/categories-imgs/dinner.webp"),color:"#E9E4DF"},{key:"supper",name:"supper",label:"Ужин",img:(0,i.f)("/optimize/categories-imgs/supper.webp"),color:"#D8E0E3"},{key:"healthy",name:"healthy",label:"Здоровая еда",img:(0,i.f)("/optimize/categories-imgs/healthy.webp"),color:"#D9E7D0"},{key:"salads",name:"salads",label:"Салаты",img:(0,i.f)("/optimize/categories-imgs/salads.webp"),color:"#C1E1C1"},{key:"snacks",name:"snacks",label:"Закуски",img:(0,i.f)("/optimize/categories-imgs/snacks.webp"),color:"#ECEBE7"}],a=[{key:"grill",name:"grill",label:"На мангале",img:(0,i.f)("/optimize/categories-imgs/grill.webp"),color:"#FFD8D8"},{key:"refreshing-drinks",name:"refreshing-drinks",label:"Освежающие напитки",img:(0,i.f)("/optimize/categories-imgs/refreshingDrinks.webp"),color:"#ECEBE7"}];e.s(["S",0,t,"d",0,a],37828)}])})();