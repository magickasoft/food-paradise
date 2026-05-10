(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,41582,e=>{"use strict";var i=e.i(43476),t=e.i(4529),o=e.i(97053);let n=o.default.header.withConfig({componentId:"sc-f6510fb7-0"})`
  display: flex;
  min-width: 0;
  margin: 76px 140px 60px 140px;

  @media ${t.maxDevice.tablet} {
    margin: 40px 0px 60px 0px;
  }

  @media ${t.maxDevice.mobileL} {
    margin: 40px 0px 50px 0px;
  }

  @media ${t.maxDevice.laptopL} {
    flex-direction: column;
  }
`,a=o.default.div.withConfig({componentId:"sc-f6510fb7-1"})`
  white-space: pre-line;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 48px;
  color: #000000;
  margin-bottom: 40px;

  @media ${t.maxDevice.mobileL} {
    margin-bottom: 30px;
    font-size: 30px;
    line-height: 36px;
  }
`,l=o.default.div.withConfig({componentId:"sc-f6510fb7-2"})`
  white-space: pre-line;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #777777;
  max-width: 760px;
`,r=o.default.div.withConfig({componentId:"sc-f6510fb7-3"})`
  width: 100%;
  min-width: 0;
  background-color: ${e=>e.backgroundColor||"transparent"};
`;e.s(["PageWrapper",0,({label:e,text:t,children:o,backgroundColor:c})=>(0,i.jsx)(n,{children:(0,i.jsxs)(r,{backgroundColor:c,children:[e&&(0,i.jsx)(a,{children:e}),t&&(0,i.jsx)(l,{children:t}),o]})})])},50506,e=>{"use strict";var i=e.i(43476),t=e.i(97053),o=e.i(57688),n=e.i(20133),a=e.i(4529),l=e.i(92199);let r=t.default.div.withConfig({componentId:"sc-3ce889b2-0"})`
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
`,c=t.default.div.withConfig({componentId:"sc-3ce889b2-1"})`
  position: relative;
  width: 100%;
  height: ${({variant:e})=>"full"===e?"140px":"auto"};
  aspect-ratio: 1.35 / 1;
  background: #f5f3f3;
`,s=t.default.div.withConfig({componentId:"sc-3ce889b2-2"})`
  width: 100%;
  height: 100%;
  color: #a08367;
  background: #fff7ed;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`,d=t.default.div.withConfig({componentId:"sc-3ce889b2-3"})`
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

  @media ${a.minDevice.laptop} {
    font-size: 16px;
  }
`,x=t.default.div.withConfig({componentId:"sc-3ce889b2-5"})`
  margin-top: 6px;
  font-size: 12px;
  line-height: 1.5;
  color: #6d6258;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,f=t.default.div.withConfig({componentId:"sc-3ce889b2-6"})`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  color: #5f554d;
`,h=t.default.div.withConfig({componentId:"sc-3ce889b2-7"})`
  display: flex;
  align-items: center;
  gap: 4px;
`,b=["Легко","Средне","Сложно"];e.s(["RecipeCard",0,({name:e,img:t,title:a,description:m,time:g,level:u,variant:w="base"})=>(0,i.jsx)(n.Link,{href:{pathname:"/recipe/[name]",params:{name:e}},locale:"ru",style:{textDecoration:"none",color:"inherit"},children:(0,i.jsxs)(r,{variant:w,children:[(0,i.jsx)(c,{variant:w,children:t?(0,i.jsx)(o.default,{src:t,alt:a,fill:!0,style:{objectFit:"cover"},sizes:"220px"}):(0,i.jsx)(s,{children:"Нет изображения"})}),(0,i.jsxs)(d,{children:[(0,i.jsx)(p,{children:a}),(0,i.jsx)(x,{children:m}),(0,i.jsxs)(f,{children:[(0,i.jsxs)(h,{children:[(0,i.jsx)(l.FiClock,{size:14})," ",g," мин"]}),(0,i.jsxs)(h,{children:[(0,i.jsx)(l.FiStar,{size:14,color:"#f6a623"})," ",b[u-1]]})]})]})]})})])},60777,e=>{"use strict";var i=e.i(43476),t=e.i(97053);let o=t.default.div.withConfig({componentId:"sc-64c242a1-0"})`
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
`;e.s(["RecipesScroll",0,({children:e})=>(0,i.jsx)(o,{children:e})])}]);