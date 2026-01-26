(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,41582,e=>{"use strict";var i=e.i(43476),t=e.i(4529),n=e.i(97053);let o=n.default.header.withConfig({componentId:"sc-f6510fb7-0"})`
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
`,a=n.default.div.withConfig({componentId:"sc-f6510fb7-1"})`
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
`,r=n.default.div.withConfig({componentId:"sc-f6510fb7-2"})`
  white-space: pre-line;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #777777;
  max-width: 760px;
`,l=n.default.div.withConfig({componentId:"sc-f6510fb7-3"})`
  width: 100%;
  background-color: ${e=>e.backgroundColor||"transparent"};
`;e.s(["PageWrapper",0,({label:e,text:t,children:n,backgroundColor:d})=>(0,i.jsx)(o,{children:(0,i.jsxs)(l,{backgroundColor:d,children:[e&&(0,i.jsx)(a,{children:e}),t&&(0,i.jsx)(r,{children:t}),n]})})])},50506,e=>{"use strict";var i=e.i(43476),t=e.i(97053),n=e.i(57688),o=e.i(20133),a=e.i(4529),r=e.i(92199);let l=t.default.div.withConfig({componentId:"sc-3ce889b2-0"})`
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
`,d=t.default.div.withConfig({componentId:"sc-3ce889b2-1"})`
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
`,c=t.default.div.withConfig({componentId:"sc-3ce889b2-3"})`
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
`,h=["Легко","Средне","Сложно"];e.s(["RecipeCard",0,({name:e,img:t,title:a,description:m,time:g,level:b,variant:u="base"})=>(0,i.jsx)(o.Link,{href:{pathname:"/recipe/[name]",params:{name:e}},locale:"ru",style:{textDecoration:"none",color:"inherit"},children:(0,i.jsxs)(l,{variant:u,children:[(0,i.jsx)(d,{variant:u,children:t?(0,i.jsx)(n.default,{src:t,alt:a,fill:!0,style:{objectFit:"cover"},sizes:"220px"}):(0,i.jsx)("div",{style:{width:"100%",height:"100%",color:"#aaa",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:500},children:"Нет изображения"})}),(0,i.jsxs)(s,{children:[(0,i.jsx)(c,{children:a}),(0,i.jsx)(p,{children:m}),(0,i.jsxs)(x,{children:[(0,i.jsxs)(f,{children:[(0,i.jsx)(r.FiClock,{size:14})," ",g," мин"]}),(0,i.jsxs)(f,{children:[(0,i.jsx)(r.FiStar,{size:14,color:"#f6a623"})," ",h[b-1]]})]})]})]})})])},13159,e=>{"use strict";var i=e.i(43476),t=e.i(71645),n=e.i(50506);let o=(0,t.memo)(function(e){let o=((e=768)=>{let[i,n]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{let i=()=>{n(window.innerWidth<e)};return i(),window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[e]),i})();return(0,i.jsx)(n.RecipeCard,{...e,variant:o?"full":"base"})});e.s(["AdaptiveRecipeCard",0,o],13159)},67933,e=>{"use strict";var i=e.i(97053);let t=i.default.div.withConfig({componentId:"sc-c563041a-0"})`
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
`;e.s(["Grid",0,t])}]);