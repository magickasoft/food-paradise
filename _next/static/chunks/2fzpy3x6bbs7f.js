(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,13159,e=>{var i=e.i(43476),t=e.i(71645),n=e.i(50506);let o=(0,t.memo)(function(e){let o=((e=768)=>{let[i,n]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{let i=()=>{n(window.innerWidth<e)};return i(),window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[e]),i})();return(0,i.jsx)(n.f,{...e,variant:o?"full":"base"})});e.s(["AdaptiveRecipeCard",0,o],13159)},67933,e=>{var i=e.i(97053);let t=i.U.div.withConfig({componentId:"sc-c563041a-0"})`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 10px;
  box-sizing: border-box;
  overflow-x: hidden;
`;e.s(["Grid",0,t])},50506,e=>{var i=e.i(43476),t=e.i(97053),n=e.i(25164),o=e.i(20133),r=e.i(4529),a=e.i(92199);let s=t.U.div.withConfig({componentId:"sc-3ce889b2-0"})`
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
`,l=t.U.div.withConfig({componentId:"sc-3ce889b2-1"})`
  position: relative;
  width: 100%;
  height: ${({variant:e})=>"full"===e?"140px":"auto"};
  aspect-ratio: 1.35 / 1;
  background: #f5f3f3;
`,d=t.U.div.withConfig({componentId:"sc-3ce889b2-2"})`
  width: 100%;
  height: 100%;
  color: #a08367;
  background: #fff7ed;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`,c=t.U.div.withConfig({componentId:"sc-3ce889b2-3"})`
  display: flex;
  flex-direction: column;
  padding: 14px;
  flex: 1;
`,p=t.U.div.withConfig({componentId:"sc-3ce889b2-4"})`
  font-size: 15px;
  font-weight: 600;
  color: #222;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media ${r.k.laptop} {
    font-size: 16px;
  }
`,x=t.U.div.withConfig({componentId:"sc-3ce889b2-5"})`
  margin-top: 6px;
  font-size: 12px;
  line-height: 1.5;
  color: #6d6258;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,f=t.U.div.withConfig({componentId:"sc-3ce889b2-6"})`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  color: #5f554d;
`,h=t.U.div.withConfig({componentId:"sc-3ce889b2-7"})`
  display: flex;
  align-items: center;
  gap: 4px;
`,m=["Легко","Средне","Сложно"];e.s(["f",0,({recipeKey:e,img:t,title:r,description:g,time:b,level:w,variant:u="base"})=>(0,i.jsx)(o.L,{href:{pathname:"/recipe/[name]",params:{name:e}},style:{textDecoration:"none",color:"inherit"},children:(0,i.jsxs)(s,{variant:u,children:[(0,i.jsx)(l,{variant:u,children:t?(0,i.jsx)(n.default,{src:t,alt:r,fill:!0,style:{objectFit:"cover"},sizes:"220px"}):(0,i.jsx)(d,{children:"Нет изображения"})}),(0,i.jsxs)(c,{children:[(0,i.jsx)(p,{children:r}),(0,i.jsx)(x,{children:g}),(0,i.jsxs)(f,{children:[(0,i.jsxs)(h,{children:[(0,i.jsx)(a.T,{size:14})," ",b," мин"]}),(0,i.jsxs)(h,{children:[(0,i.jsx)(a.q,{size:14,color:"#f6a623"})," ",m[w-1]]})]})]})]})})])},41582,e=>{var i=e.i(43476),t=e.i(4529),n=e.i(97053);let o=n.U.header.withConfig({componentId:"sc-f6510fb7-0"})`
  display: flex;
  min-width: 0;
  margin: 76px 140px 60px 140px;

  @media ${t.R.tablet} {
    margin: 40px 0px 60px 0px;
  }

  @media ${t.R.mobileL} {
    margin: 40px 0px 50px 0px;
  }

  @media ${t.R.laptopL} {
    flex-direction: column;
  }
`,r=n.U.div.withConfig({componentId:"sc-f6510fb7-1"})`
  white-space: pre-line;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 48px;
  color: #000000;
  margin-bottom: 40px;

  @media ${t.R.mobileL} {
    margin-bottom: 30px;
    font-size: 30px;
    line-height: 36px;
  }
`,a=n.U.div.withConfig({componentId:"sc-f6510fb7-2"})`
  white-space: pre-line;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #777777;
  max-width: 760px;
`,s=n.U.div.withConfig({componentId:"sc-f6510fb7-3"})`
  width: 100%;
  min-width: 0;
  background-color: ${e=>e.backgroundColor||"transparent"};
`;e.s(["PageWrapper",0,({label:e,text:t,children:n,backgroundColor:l})=>(0,i.jsx)(o,{children:(0,i.jsxs)(s,{backgroundColor:l,children:[e&&(0,i.jsx)(r,{children:e}),t&&(0,i.jsx)(a,{children:t}),n]})})])}])})();