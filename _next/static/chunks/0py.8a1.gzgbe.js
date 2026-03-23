(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,41582,e=>{"use strict";var i=e.i(43476),t=e.i(4529),o=e.i(97053);let n=o.default.header.withConfig({componentId:"sc-f6510fb7-0"})`
  display: flex;
  margin: 76px 140px 60px 140px;

  @media ${t.maxDevice.tablet} {
    margin: 40px 0px 60px 0px;
  }

  @media ${t.maxDevice.mobileL} {
    margin: 90px 0px 50px 0px;
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
  background-color: ${e=>e.backgroundColor||"transparent"};
`;e.s(["PageWrapper",0,({label:e,text:t,children:o,backgroundColor:c})=>(0,i.jsx)(n,{children:(0,i.jsxs)(r,{backgroundColor:c,children:[e&&(0,i.jsx)(a,{children:e}),t&&(0,i.jsx)(l,{children:t}),o]})})])},50506,e=>{"use strict";var i=e.i(43476),t=e.i(97053),o=e.i(57688),n=e.i(20133),a=e.i(4529),l=e.i(92199);let r=t.default.div.withConfig({componentId:"sc-3ce889b2-0"})`
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
`,c=t.default.div.withConfig({componentId:"sc-3ce889b2-1"})`
  position: relative;
  width: 100%;
  height: ${({variant:e})=>"full"===e?"140px":"auto"};
  aspect-ratio: 1.3 / 1;
  background: #f5f3f3;
`,s=t.default.div.withConfig({componentId:"sc-3ce889b2-2"})`
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

  @media ${a.minDevice.laptop} {
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
`,x=t.default.div.withConfig({componentId:"sc-3ce889b2-5"})`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  color: #444;
`,f=t.default.div.withConfig({componentId:"sc-3ce889b2-6"})`
  display: flex;
  align-items: center;
  gap: 4px;
`,h=["Легко","Средне","Сложно"];e.s(["RecipeCard",0,({name:e,img:t,title:a,description:b,time:m,level:g,variant:u="base"})=>(0,i.jsx)(n.Link,{href:{pathname:"/recipe/[name]",params:{name:e}},locale:"ru",style:{textDecoration:"none",color:"inherit"},children:(0,i.jsxs)(r,{variant:u,children:[(0,i.jsx)(c,{variant:u,children:t?(0,i.jsx)(o.default,{src:t,alt:a,fill:!0,style:{objectFit:"cover"},sizes:"220px"}):(0,i.jsx)("div",{style:{width:"100%",height:"100%",color:"#aaa",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:500},children:"Нет изображения"})}),(0,i.jsxs)(s,{children:[(0,i.jsx)(d,{children:a}),(0,i.jsx)(p,{children:b}),(0,i.jsxs)(x,{children:[(0,i.jsxs)(f,{children:[(0,i.jsx)(l.FiClock,{size:14})," ",m," мин"]}),(0,i.jsxs)(f,{children:[(0,i.jsx)(l.FiStar,{size:14,color:"#f6a623"})," ",h[g-1]]})]})]})]})})])},60777,e=>{"use strict";var i=e.i(43476),t=e.i(97053);let o=t.default.div.withConfig({componentId:"sc-64c242a1-0"})`
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
`;e.s(["RecipesScroll",0,({children:e})=>(0,i.jsx)(o,{children:e})])}]);