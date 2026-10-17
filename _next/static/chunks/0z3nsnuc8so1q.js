(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,50506,i=>{var e=i.i(43476),o=i.i(97053),t=i.i(25164),n=i.i(20133),r=i.i(4529),a=i.i(92199);let l=o.U.div.withConfig({componentId:"sc-3ce889b2-0"})`
  background: #fffdfa;
  border-radius: 18px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: ${({variant:i})=>"base"===i?"220px":"100%"};
  min-height: 300px;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 10px 28px rgba(44, 31, 20, 0.08);
  scroll-snap-align: start;

  &:hover {
    transform: translateY(-4px) scale(1.015);
    box-shadow: 0 18px 42px rgba(44, 31, 20, 0.14);
  }
`,c=o.U.div.withConfig({componentId:"sc-3ce889b2-1"})`
  position: relative;
  width: 100%;
  height: ${({variant:i})=>"full"===i?"140px":"auto"};
  aspect-ratio: 1.35 / 1;
  background: #f5f3f3;
`,s=o.U.div.withConfig({componentId:"sc-3ce889b2-2"})`
  width: 100%;
  height: 100%;
  color: #a08367;
  background: #fff7ed;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`,p=o.U.div.withConfig({componentId:"sc-3ce889b2-3"})`
  display: flex;
  flex-direction: column;
  padding: 14px;
  flex: 1;
`,d=o.U.div.withConfig({componentId:"sc-3ce889b2-4"})`
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
`,x=o.U.div.withConfig({componentId:"sc-3ce889b2-5"})`
  margin-top: 6px;
  font-size: 12px;
  line-height: 1.5;
  color: #6d6258;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,h=o.U.div.withConfig({componentId:"sc-3ce889b2-6"})`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  color: #5f554d;
`,f=o.U.div.withConfig({componentId:"sc-3ce889b2-7"})`
  display: flex;
  align-items: center;
  gap: 4px;
`,b=["Легко","Средне","Сложно"];i.s(["f",0,({recipeKey:i,img:o,title:r,description:g,time:m,level:w,variant:u="base"})=>(0,e.jsx)(n.L,{href:{pathname:"/recipe/[name]",params:{name:i}},style:{textDecoration:"none",color:"inherit"},children:(0,e.jsxs)(l,{variant:u,children:[(0,e.jsx)(c,{variant:u,children:o?(0,e.jsx)(t.default,{src:o,alt:r,fill:!0,style:{objectFit:"cover"},sizes:"220px"}):(0,e.jsx)(s,{children:"Нет изображения"})}),(0,e.jsxs)(p,{children:[(0,e.jsx)(d,{children:r}),(0,e.jsx)(x,{children:g}),(0,e.jsxs)(h,{children:[(0,e.jsxs)(f,{children:[(0,e.jsx)(a.T,{size:14})," ",m," мин"]}),(0,e.jsxs)(f,{children:[(0,e.jsx)(a.q,{size:14,color:"#f6a623"})," ",b[w-1]]})]})]})]})})])},41582,i=>{var e=i.i(43476),o=i.i(4529),t=i.i(97053);let n=t.U.header.withConfig({componentId:"sc-f6510fb7-0"})`
  display: flex;
  min-width: 0;
  margin: 76px 140px 60px 140px;

  @media ${o.R.tablet} {
    margin: 40px 0px 60px 0px;
  }

  @media ${o.R.mobileL} {
    margin: 40px 0px 50px 0px;
  }

  @media ${o.R.laptopL} {
    flex-direction: column;
  }
`,r=t.U.div.withConfig({componentId:"sc-f6510fb7-1"})`
  white-space: pre-line;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 48px;
  color: #000000;
  margin-bottom: 40px;

  @media ${o.R.mobileL} {
    margin-bottom: 30px;
    font-size: 30px;
    line-height: 36px;
  }
`,a=t.U.div.withConfig({componentId:"sc-f6510fb7-2"})`
  white-space: pre-line;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #777777;
  max-width: 760px;
`,l=t.U.div.withConfig({componentId:"sc-f6510fb7-3"})`
  width: 100%;
  min-width: 0;
  background-color: ${i=>i.backgroundColor||"transparent"};
`;i.s(["PageWrapper",0,({label:i,text:o,children:t,backgroundColor:c})=>(0,e.jsx)(n,{children:(0,e.jsxs)(l,{backgroundColor:c,children:[i&&(0,e.jsx)(r,{children:i}),o&&(0,e.jsx)(a,{children:o}),t]})})])},60777,i=>{var e=i.i(43476),o=i.i(97053);let t=o.U.div.withConfig({componentId:"sc-64c242a1-0"})`
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
`;i.s(["f",0,({children:i})=>(0,e.jsx)(t,{children:i})])}])})();