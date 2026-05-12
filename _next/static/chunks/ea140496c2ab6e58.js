(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,41582,e=>{"use strict";var i=e.i(43476),n=e.i(4529),g=e.i(97053);let m=g.default.header.withConfig({componentId:"sc-f6510fb7-0"})`
  display: flex;
  min-width: 0;
  margin: 76px 140px 60px 140px;

  @media ${n.maxDevice.tablet} {
    margin: 40px 0px 60px 0px;
  }

  @media ${n.maxDevice.mobileL} {
    margin: 40px 0px 50px 0px;
  }

  @media ${n.maxDevice.laptopL} {
    flex-direction: column;
  }
`,t=g.default.div.withConfig({componentId:"sc-f6510fb7-1"})`
  white-space: pre-line;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 48px;
  color: #000000;
  margin-bottom: 40px;

  @media ${n.maxDevice.mobileL} {
    margin-bottom: 30px;
    font-size: 30px;
    line-height: 36px;
  }
`,a=g.default.div.withConfig({componentId:"sc-f6510fb7-2"})`
  white-space: pre-line;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #777777;
  max-width: 760px;
`,p=g.default.div.withConfig({componentId:"sc-f6510fb7-3"})`
  width: 100%;
  min-width: 0;
  background-color: ${e=>e.backgroundColor||"transparent"};
`;e.s(["PageWrapper",0,({label:e,text:n,children:g,backgroundColor:o})=>(0,i.jsx)(m,{children:(0,i.jsxs)(p,{backgroundColor:o,children:[e&&(0,i.jsx)(t,{children:e}),n&&(0,i.jsx)(a,{children:n}),g]})})])},50506,e=>{"use strict";var i=e.i(43476),n=e.i(97053),g=e.i(57688),m=e.i(20133),t=e.i(4529),a=e.i(92199);let p=n.default.div.withConfig({componentId:"sc-3ce889b2-0"})`
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
`,o=n.default.div.withConfig({componentId:"sc-3ce889b2-1"})`
  position: relative;
  width: 100%;
  height: ${({variant:e})=>"full"===e?"140px":"auto"};
  aspect-ratio: 1.35 / 1;
  background: #f5f3f3;
`,r=n.default.div.withConfig({componentId:"sc-3ce889b2-2"})`
  width: 100%;
  height: 100%;
  color: #a08367;
  background: #fff7ed;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`,s=n.default.div.withConfig({componentId:"sc-3ce889b2-3"})`
  display: flex;
  flex-direction: column;
  padding: 14px;
  flex: 1;
`,d=n.default.div.withConfig({componentId:"sc-3ce889b2-4"})`
  font-size: 15px;
  font-weight: 600;
  color: #222;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media ${t.minDevice.laptop} {
    font-size: 16px;
  }
`,b=n.default.div.withConfig({componentId:"sc-3ce889b2-5"})`
  margin-top: 6px;
  font-size: 12px;
  line-height: 1.5;
  color: #6d6258;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,u=n.default.div.withConfig({componentId:"sc-3ce889b2-6"})`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  color: #5f554d;
`,w=n.default.div.withConfig({componentId:"sc-3ce889b2-7"})`
  display: flex;
  align-items: center;
  gap: 4px;
`,v=["Легко","Средне","Сложно"];e.s(["RecipeCard",0,({name:e,img:n,title:t,description:l,time:c,level:z,variant:h="base"})=>(0,i.jsx)(m.Link,{href:{pathname:"/recipe/[name]",params:{name:e}},style:{textDecoration:"none",color:"inherit"},children:(0,i.jsxs)(p,{variant:h,children:[(0,i.jsx)(o,{variant:h,children:n?(0,i.jsx)(g.default,{src:n,alt:t,fill:!0,style:{objectFit:"cover"},sizes:"220px"}):(0,i.jsx)(r,{children:"Нет изображения"})}),(0,i.jsxs)(s,{children:[(0,i.jsx)(d,{children:t}),(0,i.jsx)(b,{children:l}),(0,i.jsxs)(u,{children:[(0,i.jsxs)(w,{children:[(0,i.jsx)(a.FiClock,{size:14})," ",c," мин"]}),(0,i.jsxs)(w,{children:[(0,i.jsx)(a.FiStar,{size:14,color:"#f6a623"})," ",v[z-1]]})]})]})]})})])},60777,e=>{"use strict";var i=e.i(43476),n=e.i(97053);let g=n.default.div.withConfig({componentId:"sc-64c242a1-0"})`
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
`;e.s(["RecipesScroll",0,({children:e})=>(0,i.jsx)(g,{children:e})])},32557,e=>{e.v({name:"Мука",gauge:"г",img:"/optimize/ingredients/flour.webp"})},11992,e=>{e.v({name:"Лаваш",gauge:"шт.",img:"/optimize/ingredients/lavash.webp"})},37,e=>{e.v({name:"Белый хлеб",gauge:"г",img:"/optimize/ingredients/white-bread.webp"})},65783,e=>{e.v({name:"Дрожжи",gauge:"г",img:"/optimize/ingredients/yeast.webp"})},83481,e=>{e.v({name:"Сыр фета",gauge:"г",img:"/optimize/ingredients/feta-cheese.webp"})},44930,e=>{e.v({name:"Сыр твёрдый",gauge:"г",img:"/optimize/ingredients/hard-cheese.webp"})},66362,e=>{e.v({name:"Яйцо куриное",img:"/optimize/ingredients/egg.webp",gauge:"шт."})},67859,e=>{e.v({name:"Яичный белок",gauge:"шт.",img:"/optimize/ingredients/egg-white.webp"})},45792,e=>{e.v({name:"Базилик",gauge:"пуч.",img:"/optimize/ingredients/bazil.webp"})},48929,e=>{e.v({name:"Кинза",gauge:"пуч.",img:"/optimize/ingredients/cilantro.webp"})},87708,e=>{e.v({name:"Укроп",gauge:"пуч.",img:"/optimize/ingredients/dill.webp"})},26408,e=>{e.v({name:"Лук зелёный",gauge:"пуч.",img:"/optimize/ingredients/green-onion.webp"})},18475,e=>{e.v({name:"Зелень",gauge:"пуч.",img:"/optimize/ingredients/greens.webp"})},83115,e=>{e.v({name:"Петрушка",gauge:"пуч.",img:"/optimize/ingredients/parsley.webp"})},87973,e=>{e.v({name:"Шпинат",gauge:"пуч.",img:"/optimize/ingredients/spinach.webp"})},32401,e=>{e.v({name:"Хлебный квас",gauge:"л",img:"/optimize/ingredients/bread-kvass.webp"})},17401,e=>{e.v({name:"Газированная минеральная вода",gauge:"мл",img:"/optimize/ingredients/carbonated-mineral-water.webp"})},36356,e=>{e.v({name:"Сливки 20%",gauge:"мл",img:"/optimize/ingredients/cream.webp"})},32505,e=>{e.v({name:"Сливки 33%",gauge:"мл",img:"/optimize/ingredients/cream.webp"})},36897,e=>{e.v({name:"Горячая вода",gauge:"мл",img:"/optimize/ingredients/water.webp"})},75080,e=>{e.v({name:"Кефир",gauge:"мл",img:"/optimize/ingredients/kefir.webp"})},26942,e=>{e.v({name:"Кефир 3.2%",gauge:"мл",img:"/optimize/ingredients/kefir.webp"})},48716,e=>{e.v({name:"Лимонный сок",gauge:"мл",img:"/optimize/ingredients/lemon-juice.webp"})},15235,e=>{e.v({name:"Молоко",gauge:"мл",img:"/optimize/ingredients/milk.webp"})},41086,e=>{e.v({name:"Сметана",gauge:"г",img:"/optimize/ingredients/sour-cream.webp"})},74403,e=>{e.v({name:"Уксус",gauge:"ст.л.",img:"/optimize/ingredients/vinegar.webp"})},26911,e=>{e.v({name:"Хересный уксус",gauge:"ст.л.",img:"/optimize/ingredients/sherry-vinegar.webp"})},36847,e=>{e.v({name:"Вода",gauge:"мл",img:"/optimize/ingredients/water.webp"})},67659,e=>{e.v({name:"Водка",gauge:"мл",img:"/optimize/ingredients/vodka.webp"})},11011,e=>{e.v({name:"Йогурт",gauge:"мл",img:"/optimize/ingredients/yogurt.webp"})},94441,e=>{e.v({name:"Колбаса вареная свиная",gauge:"кг.",img:"/optimize/ingredients/boiled-pork-sausage.webp"})},88021,e=>{e.v({name:"Колбаса вареная",gauge:"кг.",img:"/optimize/ingredients/boiled-sausage.webp"})},94804,e=>{e.v({name:"Куриное филе грудки",gauge:"кг",img:"/optimize/ingredients/chicken-breast.webp"})},19036,e=>{e.v({name:"Целая курица",gauge:"кг",img:"/optimize/ingredients/chicken-whole.webp"})},69423,e=>{e.v({name:"Куриное филе бедра",gauge:"кг",img:"/optimize/ingredients/chicken-thigh-fillet.webp"})},81346,e=>{e.v({name:"Куриное филе грудки",gauge:"кг",img:"/optimize/ingredients/chicken-thigh-fillet.webp"})},13208,e=>{e.v({name:"Шея свиная",gauge:"кг",img:"/optimize/ingredients/pork-neck.webp"})},35778,e=>{e.v({name:"Свиные ребрышки",gauge:"кг",img:"/optimize/ingredients/pork-ribs.webp"})},97021,e=>{e.v({name:"Масло сливочное",gauge:"г",img:"/optimize/ingredients/butter.webp"})},24758,e=>{e.v({name:"Масло сливочное растопленное",gauge:"ст.л.",img:"/optimize/ingredients/melted-butter.webp"})},30044,e=>{e.v({name:"Масло оливковое",gauge:"ст.л.",img:"/optimize/ingredients/olive-oil.webp"})},43030,e=>{e.v({name:"Масло трюфельное",gauge:"ст.л.",img:"/optimize/ingredients/truffle-oil.webp"})},7925,e=>{e.v({name:"Масло подсолнечное",gauge:"ст.л.",img:"/optimize/ingredients/sunflower-oil.webp"})},48674,e=>{e.v({name:"Масло растительное рафинированное",gauge:"ст.л.",img:"/optimize/ingredients/refined-vegetable-oil.webp"})},24269,e=>{e.v({name:"Масло растительное",gauge:"ст.л.",img:"/optimize/ingredients/vegetable-oil.webp"})},74251,e=>{e.v({name:"Горчица",gauge:"г",img:"/optimize/ingredients/mustard.webp"})},29049,e=>{e.v({name:"Рыбный соус",gauge:"мл",img:"/optimize/ingredients/fish-sauce.webp"})},84034,e=>{e.v({name:"Сливочный сыр",gauge:"г",img:"/optimize/ingredients/cream-cheese.webp"})},47681,e=>{e.v({name:"Лавровый лист",gauge:"шт.",img:"/optimize/ingredients/bay-leaf.webp"})},59027,e=>{e.v({name:"Перец чёрный молотый",gauge:"г",img:"/optimize/ingredients/ground-black-pepper.webp"})},56474,e=>{e.v({name:"Перец чёрный горошек",gauge:"шт",img:"/optimize/ingredients/black-pepper.webp"})},45791,e=>{e.v({name:"Перец белый",gauge:"г",img:"/optimize/ingredients/white-pepper.webp"})},48835,e=>{e.v({name:"Сушеные белые грибы",gauge:"г",img:"/optimize/ingredients/dried-porcini.webp"})},66558,e=>{e.v({name:"Орегано сушёный",gauge:"г",img:"/optimize/ingredients/oregano-dry.webp"})},30570,e=>{e.v({name:"Соль",gauge:"г",img:"/optimize/ingredients/salt.webp"})},94020,e=>{e.v({name:"Сахар",gauge:"г",img:"/optimize/ingredients/sugar.webp"})},70288,e=>{e.v({name:"Сахарная пудра",gauge:"г",img:"/optimize/ingredients/powdered-sugar.webp"})},45643,e=>{e.v({name:"Ванильный сахар",gauge:"г",img:"/optimize/ingredients/vanilla-sugar.webp"})},38743,e=>{e.v({name:"Кунжутные семечки",gauge:"г",img:"/optimize/ingredients/sesame-seeds.webp"})},48882,e=>{e.v({name:"Тыквенные семечки",gauge:"г",img:"/optimize/ingredients/pumpkin-seeds.webp"})},29323,e=>{e.v({name:"Тыквенные семечки",gauge:"г",img:"/optimize/ingredients/coriander-seeds.webp"})},54081,e=>{e.v({name:"Свекла",gauge:"шт.",img:"/optimize/ingredients/beet.webp"})},1918,e=>{e.v({name:"Перец сладкий",gauge:"шт.",img:"/optimize/ingredients/bell-pepper.webp"})},45138,e=>{e.v({name:"Брокколи",gauge:"г",img:"/optimize/ingredients/broccoli.webp"})},21870,e=>{e.v({name:"Капуста белокочанная",gauge:"коч.",img:"/optimize/ingredients/cabbage.webp"})},49606,e=>{e.v({name:"Морковь",gauge:"шт.",img:"/optimize/ingredients/carrot.webp"})},26085,e=>{e.v({name:"Огурец",gauge:"шт.",img:"/optimize/ingredients/cucumber.webp"})},1474,e=>{e.v({name:"Чеснок",gauge:"зуб.",img:"/optimize/ingredients/garlic.webp"})},95526,e=>{e.v({name:"Оливки",gauge:"г",img:"/optimize/ingredients/olives.webp"})},49602,e=>{e.v({name:"Лук репчатый",gauge:"шт.",img:"/optimize/ingredients/onion.webp"})},59552,e=>{e.v({name:"Картофель",gauge:"шт.",img:"/optimize/ingredients/potato.webp"})},77858,e=>{e.v({name:"Редис",gauge:"шт.",img:"/optimize/ingredients/radish.webp"})},62719,e=>{e.v({name:"Лук красный",gauge:"шт.",img:"/optimize/ingredients/red-onion.webp"})},16732,e=>{e.v({name:"Помидор",gauge:"шт.",img:"/optimize/ingredients/tomato.webp"})},37769,e=>{e.v({name:"Лимон",gauge:"шт.",img:"/optimize/ingredients/lemon.webp"})},45142,e=>{e.v({name:"Имбирь",gauge:"г",img:"/optimize/ingredients/ginger.webp"})},68527,e=>{e.v({name:"Сельдерей",gauge:"шт.",img:"/optimize/ingredients/celery.webp"})},47886,e=>{e.v({name:"Шампиньоны",gauge:"г",img:"/optimize/ingredients/champignons.webp"})},71219,e=>{e.v({name:"Лисички",gauge:"г",img:"/optimize/ingredients/chanterelles.webp"})},62048,e=>{e.v({name:"Свежие белые грибы",gauge:"г",img:"/optimize/ingredients/fresh-porcini.webp"})},73611,e=>{e.v({name:"Грибы",gauge:"г.",img:"/optimize/ingredients/mushrooms.webp"})},94912,e=>{e.v({name:"Корень хрена",gauge:"г",img:"/optimize/ingredients/horseradish-root.webp"})},35772,e=>{e.v({name:"Кабачок",gauge:"шт.",img:"/optimize/ingredients/zucchini.webp"})},73023,e=>{e.v({name:"Разрыхлитель теста",gauge:"г",img:"/optimize/ingredients/baking-powder.webp"})},21387,e=>{e.v({name:"Гренки",gauge:"г",img:"/optimize/ingredients/croutons.webp"})},75802,e=>{e.v({name:"Чиабатта",gauge:"г",img:"/optimize/ingredients/ciabatta.webp"})},78317,e=>{e.v({name:"Тарталетки",gauge:"шт.",img:"/optimize/ingredients/tartlets.webp"})},1342,e=>{e.v({name:"Овсянка",gauge:"г",img:"/optimize/ingredients/oatmeal.webp"})},82920,e=>{e.v({name:"Рисовая лапша",gauge:"г",img:"/optimize/ingredients/rice-noodles.webp"})},82502,e=>{e.v({name:"Рис",gauge:"г",img:"/optimize/ingredients/rice.webp"})},27419,e=>{e.v({name:"Яичная лапша",gauge:"г",img:"/optimize/ingredients/egg-noodles.webp"})},20137,e=>{e.v({name:"Сода",gauge:"г",img:"/optimize/ingredients/soda.webp"})},66241,e=>{e.v({name:"Перец красный хлопьями",gauge:"г",img:"/optimize/ingredients/red-pepper-flakes.webp"})},84181,e=>{e.v({name:"Зелёный перец",gauge:"шт.",img:"/optimize/ingredients/green-pepper.webp"})},24722,e=>{e.v({name:"Cушёная мята",gauge:"г",img:"/optimize/ingredients/dried-mint.webp"})},36172,e=>{e.v({name:"Копченая паприка",gauge:"г",img:"/optimize/ingredients/smoked-paprika.webp"})},92714,e=>{e.v({name:"Мускатный орех",gauge:"г",img:"/optimize/ingredients/muscat-nut.webp"})},54490,e=>{e.v({name:"Тимьян",gauge:"г",img:"/optimize/ingredients/thyme.webp"})},46128,e=>{e.v({name:"Анис звездчатый",gauge:"шт.",img:"/optimize/ingredients/star-anise.webp"})},22537,e=>{e.v({name:"Палочка корицы",gauge:"шт.",img:"/optimize/ingredients/cinnamon-stick.webp"})},72892,e=>{e.v({name:"Гвоздика",gauge:"шт.",img:"/optimize/ingredients/cloves.webp"})},6262,e=>{e.v({name:"Прованские травы",gauge:"ч.л.",img:"/optimize/ingredients/provencal-herbs.webp"})},35725,e=>{e.v({name:"Сушёные травы",gauge:"ч.л.",img:"/optimize/ingredients/dried-herbs.webp"})},21957,e=>{e.v({name:"Имбирь молотый",gauge:"ч.л.",img:"/optimize/ingredients/ginger-ground.webp"})},18839,e=>{e.v({name:"Кумин",gauge:"г",img:"/optimize/ingredients/cumin.webp"})},68915,e=>{e.v({name:"Томатная паста",gauge:"г",img:"/optimize/ingredients/tomato-paste.webp"})},6685,e=>{e.v({name:"Чили перец",gauge:"г",img:"/optimize/ingredients/chili-pepper.webp"})},10662,e=>{e.v({name:"Вустерширский соус",gauge:"л",img:"/optimize/ingredients/worcestershire-sauce.webp"})},41503,e=>{e.v({name:"Мед",gauge:"г",img:"/optimize/ingredients/honey.webp"})},59381,e=>{e.v({name:"Кокосовые сливки",gauge:"мл",img:"/optimize/ingredients/coconut-cream.webp"})},85549,e=>{e.v({name:"Молочные колбаски",gauge:"кг.",img:"/optimize/ingredients/milk-sausages.webp"})},70017,e=>{e.v({name:"Говядина",gauge:"кг",img:"/optimize/ingredients/beef.webp"})},94235,e=>{e.v({name:"Говяжьи кости",gauge:"кг",img:"/optimize/ingredients/beef-bones.webp"})},54850,e=>{e.v({name:"Говядина на кости",gauge:"кг",img:"/optimize/ingredients/beef-on-the-bone.webp"})},20849,e=>{e.v({name:"Говяжья грудинка",gauge:"кг",img:"/optimize/ingredients/beef-brisket.webp"})},42394,e=>{e.v({name:"Говяжья фарш",gauge:"кг",img:"/optimize/ingredients/ground-beef.webp"})},61736,e=>{e.v({name:"Говяжий язык",gauge:"г",img:"/optimize/ingredients/beef-tongue.webp"})},79584,e=>{e.v({name:"Говяжья вырезка",gauge:"кг",img:"/optimize/ingredients/beef-tenderloin.webp"})},51577,e=>{e.v({name:"Консервированная фасоль",gauge:"шт.",img:"/optimize/ingredients/canned-beans.webp"})},19849,e=>{e.v({name:"Сало",gauge:"г",img:"/optimize/ingredients/lard.webp"})},96124,e=>{e.v({name:"Тыква",gauge:"г",img:"/optimize/ingredients/pumpkin.webp"})},16199,e=>{e.v({name:"Батат",gauge:"г",img:"/optimize/ingredients/sweet-potato.webp"})},2385,e=>{e.v({name:"Руккола",gauge:"пуч.",img:"/optimize/ingredients/arugula.webp"})},24546,e=>{e.v({name:"Баклажан",gauge:"шт.",img:"/optimize/ingredients/eggplant.webp"})},37338,e=>{e.v({name:"Ростки фасоли",gauge:"пуч.",img:"/optimize/ingredients/bean-sprouts.webp"})},46683,e=>{e.v({name:"Лайм",gauge:"шт.",img:"/optimize/ingredients/lime.webp"})},25769,e=>{e.v({name:"Филе лосося",gauge:"кг",img:"/optimize/ingredients/salmon-fillet.webp"})},14879,e=>{e.v({name:"Солённый лосось",gauge:"кг",img:"/optimize/ingredients/salmon-salted.webp"})},48990,e=>{e.v({name:"Филе сельди",gauge:"г",img:"/optimize/ingredients/herring-fillet.webp"})},26522,e=>{e.v({name:"Крабовые палочки",gauge:"г.",img:"/optimize/ingredients/crab-sticks.webp"})},70293,e=>{e.v({name:"Рыбные консервы",gauge:"банка",img:"/optimize/ingredients/canned-fish.webp"})},92884,e=>{e.v({name:"Красная икра",gauge:"кг",img:"/optimize/ingredients/red-caviar.webp"})},46193,e=>{e.v({name:"Яблоко",gauge:"шт.",img:"/optimize/ingredients/apple.webp"})},42612,e=>{e.v({name:"Клюква",gauge:"шт.",img:"/optimize/ingredients/cranberry.webp"})},31052,e=>{e.v({name:"Вишня",gauge:"шт.",img:"/optimize/ingredients/cherry.webp"})},27847,e=>{e.v({name:"Консервированный ананас",gauge:"г",img:"/optimize/ingredients/canned-pineapple.webp"})},16033,e=>{e.v({name:"Корица",gauge:"г.",img:"/optimize/ingredients/cinnamon.webp"})},63525,e=>{e.v({name:"Маринованные огурцы",gauge:"шт.",img:"/optimize/ingredients/pickled-cucumbers.webp"})},91644,e=>{e.v({name:"зеленый горошек",gauge:"г",img:"/optimize/ingredients/green-peas.webp"})},94004,e=>{e.v({name:"Консервированная кукуруза",gauge:"г",img:"/optimize/ingredients/canned-corn.webp"})},32242,e=>{e.v({name:"Авокадо",gauge:"шт.",img:"/optimize/ingredients/avocado.webp"})},43984,e=>{e.v({name:"Майонез",gauge:"г",img:"/optimize/ingredients/mayonnaise.webp"})},34274,e=>{e.v({img:"/optimize/equipments/blender.webp",name:"Блендер"})},56887,e=>{e.v({name:"Ручной миксер",img:"/optimize/equipments/hand-mixer.webp"})},56923,e=>{e.v({img:"/optimize/equipments/microwave.webp",name:"Микроволновая печь"})},19980,e=>{e.v({img:"/optimize/equipments/oven.webp",name:"Духовка"})},17333,e=>{e.v({img:"/optimize/equipments/cut-board.webp",name:"Разделочная доска"})},49779,e=>{e.v({img:"/optimize/equipments/baking-tray.webp",name:"Противень"})},5460,e=>{e.v({img:"/optimize/equipments/bowl.webp",name:"Миска"})},49885,e=>{e.v({img:"/optimize/equipments/colander.webp",name:"Дуршлаг"})},29020,e=>{e.v({img:"/optimize/equipments/lid.webp",name:"Крышка"})},27202,e=>{e.v({img:"/optimize/equipments/frying-pan.webp",name:"Сковорода"})},82929,e=>{e.v({img:"/optimize/equipments/plate.webp",name:"Тарелка"})},42974,e=>{e.v({img:"/optimize/equipments/pot.webp",name:"Кастрюля"})},31580,e=>{e.v({img:"/optimize/equipments/fork.webp",name:"Вилка"})},61531,e=>{e.v({img:"/optimize/equipments/grater.webp",name:"Тёрка"})},9419,e=>{e.v({img:"/optimize/equipments/grill.webp",name:"Мангал"})},11928,e=>{e.v({img:"/optimize/equipments/knife.webp",name:"Нож"})},19691,e=>{e.v({name:"Бумага для выпечки",img:"/optimize/equipments/parchment.webp"})},16249,e=>{e.v({name:"Скалка",img:"/optimize/equipments/rolling-pin.webp"})},97232,e=>{e.v({img:"/optimize/equipments/measuring-spoon.webp",name:"Мерная ложка"})},29963,e=>{e.v({img:"/optimize/equipments/paper-towel.webp",name:"Бумажное полотенце"})},2203,e=>{e.v({img:"/optimize/equipments/brush.webp",name:"Кулинарная кисть"})},78912,e=>{e.v({img:"/optimize/equipments/skewers.webp",name:"Шампуры"})},63350,e=>{e.v({img:"/optimize/equipments/spatula.webp",name:"Лопатка"})},20213,e=>{e.v({img:"/optimize/equipments/spoon.webp",name:"Ложка"})},6827,e=>{e.v({img:"/optimize/equipments/tongs.webp",name:"Щипцы"})},44913,e=>{e.v({img:"/optimize/equipments/whisk.webp",name:"Венчик"})},97625,e=>{e.v({img:"/optimize/equipments/sieve.webp",name:"Сито"})},39179,e=>{e.v({img:"/optimize/equipments/ladle.webp",name:"Ковшик"})},15936,e=>{e.v({img:"/optimize/equipments/wooden-spoon.webp",name:"Деревянная ложка"})},94951,e=>{e.v({img:"/optimize/equipments/mortar.webp",name:"Ступка с пестиком"})},61633,e=>{e.v({img:"/optimize/equipments/fridge.webp",name:"Холодильник"})},4037,e=>{e.v({img:"/optimize/equipments/skimmer.webp",name:"Шумовка"})},30734,e=>{e.v({img:"/optimize/equipments/bottle.webp",name:"Бутылка"})},23896,e=>{e.v({img:"/optimize/equipments/jar.webp",name:"Банка"})},46063,e=>{e.v({name:"Формочки для печенья",img:"/optimize/equipments/cookie-cutters.webp"})}]);