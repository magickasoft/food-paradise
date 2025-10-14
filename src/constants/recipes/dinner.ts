import { EQUIPMENTS } from '../equipments'
import { INGREDIENTS } from '../ingredients'

export const DINNER = [
  {
    metaSeo: {
      title: 'Борщ с пампушками',
      description:
        'Настоящий борщ с пампушками – это сытное первое блюдо с насыщенным вкусом и ярким цветом. Пошаговый рецепт с фото: как приготовить борщ со свеклой и ароматные чесночные пампушки в домашних условиях.',
      keywords: [
        'борщ',
        'борщ с пампушками',
        'борщ рецепт',
        'борщ со свеклой',
        'пампушки рецепт',
        'чесночные пампушки',
        'первое блюдо',
        'домашний борщ',
        'традиционная кухня',
      ],
      'og:title': 'Борщ с пампушками – классический рецепт',
      'og:description':
        'Как приготовить настоящий борщ с пампушками? Пошаговый рецепт: насыщенный борщ со свеклой и пышные чесночные пампушки – идеальное сочетание для сытного обеда.',
      'og:url': 'https://food-paradise.ru/recipe/borshch-s-pampushkami',
      'og:image': '/static/recipes/dinner/borshch-s-pampushkami.jpeg',
      twitterTitle: 'Борщ с пампушками – классический рецепт',
      twitterDescription:
        'Секреты приготовления борща с пампушками: насыщенный суп со свеклой и чесночные булочки. Готовим дома по пошаговому рецепту!',
      twitterImage: '/static/recipes/dinner/borshch-s-pampushkami.jpeg',
      twitterUrl: 'https://food-paradise.ru/recipe/borshch-s-pampushkami',
      'twitter:card': 'summary_large_image',
      canonicalUrl: 'https://food-paradise.ru/recipe/borshch-s-pampushkami',
      robots: 'index, follow',
      googlebot: 'index, follow',
      yandex: 'index, follow',
      selfwork: 'index, follow',
      'max-image-preview': 'large',
      viewport: 'width=device-width, initial-scale=1',
      author: 'food-paradise',
      'theme-color': '#ffffff',
    },
    searchRequests: ['борщ', 'борщ рецепт', 'борщ с пампушками'],
    categories: [{ name: 'dinner' }],
    key: 'borshch-s-pampushkami',
    name: 'borshch-s-pampushkami',
    img: '/static/recipes/dinner/borshch-s-pampushkami.jpeg',
    title: 'Борщ с пампушками',
    description:
      'Классический борщ со свеклой в сочетании с мягкими и ароматными пампушками – это блюдо, которое стало символом домашнего уюта и настоящей кухни. Благодаря пошаговому рецепту вы легко приготовите насыщенный борщ с чесночными булочками, которые идеально дополняют вкус супа.',
    historyDescription:
      'Борщ – одно из самых известных блюд восточноевропейской кухни. Его готовят в России, Польше и других странах, но именно  борщ с пампушками считается эталонным. Традиционно борщ готовили в печи, где он томился несколько часов, а подавали его вместе с пышными дрожжевыми булочками, щедро смазанными чесночным соусом. Такое сочетание делало блюдо не только сытным, но и праздничным. Сегодня борщ с пампушками остаётся визитной карточкой гастрономии.',
    calories: 547.18,
    preparation: 15,
    time: 90,
    level: 1,
    rating: 4.9,
    portions: 6,
    used: [12.37, 28.55, 60.08],
    ingredients: [
      {
        ...INGREDIENTS.beet,
        count: 2,
      },
      {
        ...INGREDIENTS.carrot,
        count: 1,
      },
      {
        ...INGREDIENTS.potato,
        count: 2,
      },
      {
        ...INGREDIENTS.onion,
        count: 1,
      },
      {
        ...INGREDIENTS.garlic,
        count: 2,
      },
      {
        ...INGREDIENTS.vegetableOil,
        count: 6,
      },
      {
        ...INGREDIENTS.salt,
      },
      {
        ...INGREDIENTS.sugar,
      },
      {
        ...INGREDIENTS.vinegar,
      },
      {
        ...INGREDIENTS.bayLeaf,
      },
      {
        ...INGREDIENTS.tomato,
        count: 2,
      },
      {
        ...INGREDIENTS.cabbage,
        count: 0.5,
      },
      {
        ...INGREDIENTS.groundBlackPepper,
      },
      {
        ...INGREDIENTS.refinedVegetableOil,
      },
      {
        ...INGREDIENTS.flour,
        count: 250,
      },
      {
        ...INGREDIENTS.yeast,
        count: 6,
      },

      {
        ...INGREDIENTS.sesameSeeds,
      },
      {
        ...INGREDIENTS.milk,
      },
      {
        ...INGREDIENTS.refinedVegetableOil,
        count: 1.5,
      },
      {
        ...INGREDIENTS.eggs,
        count: 1,
      },
      {
        ...INGREDIENTS.sesameSeeds,
        count: 1,
      },
      {
        ...INGREDIENTS.garlic,
        count: 4,
      },
    ],
    equipments: [
      EQUIPMENTS.pot,
      EQUIPMENTS.pan,
      EQUIPMENTS.bowl,
      EQUIPMENTS.knife,
      EQUIPMENTS.cutBoard,
      EQUIPMENTS.grater,
      EQUIPMENTS.blender,
      EQUIPMENTS.oven,
      EQUIPMENTS.bakingTray,
      EQUIPMENTS.pastryBrush,
    ],
    cookingRecipe: [
      {
        img: null,
        video: null,
        description:
          'Подготовьте овощи: вымойте, очистите и нарежьте их тонкой соломкой, а помидоры — кубиками. Закипятите воду в кастрюле, посолите, добавьте капусту и картофель. Пока они варятся, обжарьте на сковороде лук и морковь, затем добавьте половину свеклы, уксус и сахар — получится ароматная зажарка.',
        ingredients: [
          { ...INGREDIENTS.beet, count: 2 },
          { ...INGREDIENTS.carrot, count: 1 },
          { ...INGREDIENTS.potato, count: 3 },
          { ...INGREDIENTS.onion, count: 1 },
          { ...INGREDIENTS.cabbage, count: 0.5 },
          { ...INGREDIENTS.tomato, count: 2 },
          { ...INGREDIENTS.garlic, count: 3 },
          { ...INGREDIENTS.refinedVegetableOil, count: 2 },
          { ...INGREDIENTS.vinegar, count: 1 },
          { ...INGREDIENTS.sugar, count: 1 },
          { ...INGREDIENTS.salt, count: 1 },
        ],
      },
      {
        img: null,
        video: null,
        description:
          'Перемешайте овощи и тушите их под крышкой 10 минут. Оставшуюся свеклу залейте кипятком с уксусом — она настоится и отдаст красивый цвет. Добавьте к овощам помидоры, приправьте и тушите еще 20 минут до мягкости и насыщенного вкуса.',
        ingredients: [
          { ...INGREDIENTS.vinegar, count: 1 },
          { ...INGREDIENTS.groundBlackPepper, count: 0.5 },
          { ...INGREDIENTS.salt, count: 0.5 },
        ],
      },
      {
        img: null,
        video: null,
        description:
          'Когда картофель и капуста будут почти готовы, добавьте к ним тушёные овощи и лавровый лист. Доведите до кипения, снимите пену. Добавьте чеснок, накройте крышкой и сразу уберите с огня — борщ должен настояться и раскрыть аромат.',
        ingredients: [{ ...INGREDIENTS.bayLeaf, count: 2 }],
      },
      {
        img: null,
        video: null,
        description:
          'Добавьте в борщ настоянный свекольный сок, чтобы придать супу яркий, насыщенный цвет. Аккуратно перемешайте и оставьте под крышкой.',
        ingredients: [],
      },
      {
        img: null,
        video: null,
        description:
          'Разогрейте духовку и приготовьте тесто для пампушек: разведите дрожжи в молоке, добавьте муку, масло, сахар и соль. Замесите тесто, оставьте подойти. Сформируйте шарики и выложите на противень. Смажьте яйцом, присыпьте кунжутом и выпекайте до золотистой корочки.',
        ingredients: [
          { ...INGREDIENTS.flour, count: 400 },
          { ...INGREDIENTS.yeast, count: 1 },
          { ...INGREDIENTS.milk, count: 250 },
          { ...INGREDIENTS.sugar, count: 1 },
          { ...INGREDIENTS.salt, count: 1 },
          { ...INGREDIENTS.refinedVegetableOil, count: 2 },
          { ...INGREDIENTS.eggs, count: 1 },
          { ...INGREDIENTS.sesameSeeds, count: 1 },
        ],
      },
      {
        img: null,
        video: null,
        description:
          'Измельчите чеснок и взбейте его с маслом в блендере. Горячие пампушки смажьте ароматным чесночным маслом с помощью кисточки. Подавайте свежие и тёплые пампушки к борщу — это идеальное дополнение.',
        ingredients: [
          { ...INGREDIENTS.garlic, count: 3 },
          { ...INGREDIENTS.refinedVegetableOil, count: 2 },
        ],
      },
    ],
    tips: [
      'Чтобы борщ получился насыщенного цвета, добавляйте свеклу в два этапа: часть в зажарку, часть в конце приготовления.',
      'Дайте борщу настояться хотя бы 20–30 минут под крышкой – вкус станет богаче.',
      'Для постного варианта не используйте мясо и замените пампушки на постные (без яиц и молока).',
      'Подавайте борщ со сметаной и свежей зеленью – так он будет ещё вкуснее.',
    ],
    variations: [
      {
        name: 'Постный борщ',
        changes: 'Исключите мясо, используйте только овощи и постные пампушки.',
      },
      {
        name: 'Борщ с говядиной',
        changes: 'Добавьте кусок говядины на кости, варите бульон 1–1,5 часа перед добавлением овощей.',
      },
      {
        name: 'Острый борщ',
        changes: 'Добавьте немного чили или острого перца в зажарку для пикантного вкуса.',
      },
    ],
  },
  {
    metaSeo: {
      title: 'Окрошка на квасе – классический рецепт холодного супа',
      description:
        'Освежающая окрошка на квасе – традиционное блюдо русской кухни, которое идеально подходит для жарких летних дней. Лёгкий и сытный холодный суп из овощей, яиц, колбасы и зелени, заправленный натуральным хлебным квасом.',
      keywords: [
        'окрошка',
        'окрошка на квасе',
        'окрошка с колбасой',
        'окрошка классический рецепт',
        'холодный суп',
        'русская кухня',
        'летний суп',
        'окрошка с квасом',
        'окрошка рецепт',
      ],
      'og:title': 'Окрошка на квасе – освежающий суп для лета',
      'og:description':
        'Классическая окрошка на квасе с колбасой, картофелем, свежими овощами и зеленью. Пошаговый рецепт освежающего супа для жарких дней.',
      'og:url': 'https://food-paradise.ru/recipe/okroshka-na-kvase',
      'og:image': '/static/recipes/dinner/okroshka-na-kvase.jpeg',
      twitterTitle: 'Окрошка на квасе – традиционный рецепт',
      twitterDescription:
        'Как приготовить окрошку на квасе: классический рецепт холодного супа с колбасой, овощами и сметаной. Лучшее летнее блюдо!',
      twitterImage: '/static/recipes/dinner/okroshka-na-kvase.jpeg',
      twitterUrl: 'https://food-paradise.ru/recipe/okroshka-na-kvase',
      'twitter:card': 'summary_large_image',
      canonicalUrl: 'https://food-paradise.ru/recipe/okroshka-na-kvase',
      robots: 'index, follow',
      googlebot: 'index, follow',
      yandex: 'index, follow',
      selfwork: 'index, follow',
      'max-image-preview': 'large',
      viewport: 'width=device-width, initial-scale=1',
      author: 'food-paradise',
      'theme-color': '#ffffff',
    },
    searchRequests: ['окрошка', 'окрошка на квасе', 'холодный суп', 'летний обед'],
    categories: [{ name: 'dinner' }],
    key: 'okroshka-na-kvase',
    name: 'okroshka-na-kvase',
    img: '/static/recipes/dinner/okroshka-na-kvase.jpeg',
    title: 'Окрошка на квасе',
    description:
      'Классическая окрошка на квасе – символ лета и освежающий холодный суп, без которого трудно представить жаркие дни. Простая в приготовлении, она сочетает в себе свежесть огурцов и редиса, насыщенность зелени и яиц, а хлебный квас придаёт ей особую кислинку. Лёгкая, питательная и невероятно вкусная – окрошка на квасе станет главным блюдом вашего летнего обеда.',
    historyDescription:
      'Окрошка – традиционный холодный суп восточнославянской кухни, упоминания о котором встречаются ещё в XVIII веке. Название произошло от слова «крошить», ведь основа блюда – мелко нарезанные овощи и зелень. В старину окрошку готовили на домашнем хлебном квасе, иногда добавляя мясо или рыбу. С течением времени появились разные варианты: с говядиной, с курицей, с кефиром или минеральной водой. Однако классика – это именно окрошка на квасе, которая остаётся любимым летним блюдом в России и странах СНГ.',
    calories: 231.25,
    preparation: 20,
    time: 30,
    level: 1,
    rating: 4.9,
    portions: 10,
    used: [8.25, 12.57, 19.03],
    ingredients: [
      {
        ...INGREDIENTS.potato,
        count: 6,
      },
      {
        ...INGREDIENTS.eggs,
        count: 3,
      },
      {
        ...INGREDIENTS.radish,
        count: 6,
      },
      {
        ...INGREDIENTS.cucumber,
        count: 3,
      },
      {
        ...INGREDIENTS.greenOnion,
        count: 1,
      },
      {
        ...INGREDIENTS.dill,
        count: 1,
      },
      {
        ...INGREDIENTS.parsley,
        count: 1,
      },
      {
        ...INGREDIENTS.boiledSausage,
        count: 0.3,
      },
      {
        ...INGREDIENTS.breadKvass,
        count: 1.5,
      },
      {
        ...INGREDIENTS.sourCream,
        count: 0.2,
      },
      {
        ...INGREDIENTS.salt,
      },

      {
        ...INGREDIENTS.groundBlackPepper,
      },
    ],
    equipments: [
      EQUIPMENTS.pot,
      EQUIPMENTS.knife,
      EQUIPMENTS.cutBoard,
      EQUIPMENTS.bowl,
      EQUIPMENTS.spoon,
      EQUIPMENTS.sieve,
    ],
    cookingRecipe: [
      {
        img: null,
        video: null,
        description:
          'Начните с подготовки всех компонентов. Тщательно вымойте картофель щеткой и отварите его в кожуре до мягкости — это займет примерно 15–20 минут в зависимости от размера клубней.',
        ingredients: [{ ...INGREDIENTS.potato, count: 6 }],
      },
      {
        img: null,
        video: null,
        description:
          'Яйца аккуратно положите в кастрюлю, залейте холодной водой и доведите до кипения. Затем убавьте огонь и варите около 10 минут. После этого остудите яйца под струей холодной воды и очистите от скорлупы.',
        ingredients: [{ ...INGREDIENTS.eggs, count: 3 }],
      },
      {
        img: null,
        video: null,
        description:
          'Редис хорошо промойте и нарежьте тонкими кружочками. Огурцы также вымойте, обсушите и разрежьте вдоль, затем нарежьте тонкими полукружиями или ломтиками.',
        ingredients: [
          { ...INGREDIENTS.radish, count: 6 },
          { ...INGREDIENTS.cucumber, count: 3 },
        ],
      },
      {
        img: null,
        video: null,
        description:
          'Промойте свежую зелень — лук, укроп и петрушку. Разложите на бумажных полотенцах, чтобы избавиться от влаги, затем мелко нашинкуйте. Колбасу нарежьте небольшими аккуратными кубиками.',
        ingredients: [
          { ...INGREDIENTS.greenOnion, count: 1 },
          { ...INGREDIENTS.dill, count: 1 },
          { ...INGREDIENTS.parsley, count: 1 },
          { ...INGREDIENTS.boiledSausage, count: 0.3 },
        ],
      },
      {
        img: null,
        video: null,
        description:
          'В глубокой миске соедините нарезанные огурцы, редис, зелень и колбасу. Остывшие картофель и яйца порежьте мелкими кубиками и добавьте к остальным ингредиентам. Приправьте солью и перцем по вкусу, тщательно перемешайте.',
        ingredients: [{ ...INGREDIENTS.salt }, { ...INGREDIENTS.groundBlackPepper }],
      },
      {
        img: null,
        video: null,
        description:
          'Готовую смесь залейте охлаждённым квасом и снова перемешайте. Разлейте окрошку по тарелкам, добавьте по ложке сметаны в каждую порцию и подавайте охлаждённой к столу.',
        ingredients: [
          { ...INGREDIENTS.breadKvass, count: 1.5 },
          { ...INGREDIENTS.sourCream, count: 0.2 },
        ],
      },
    ],
    tips: [
      'Для яркого вкуса используйте настоящий хлебный квас, а не газированный напиток.',
      'Чтобы суп был холодным и освежающим, заранее охладите квас и ингредиенты.',
      'Окрошку лучше не хранить долго – подавайте её сразу после приготовления.',
      'Добавьте в квас немного горчицы или хрена – получится более пикантный вариант.',
      'Сметану можно вмешать в квас перед подачей, чтобы получился нежный, слегка кремовый вкус.',
    ],
    variations: [
      {
        name: 'Окрошка на кефире',
        changes:
          'Замените квас на кефир или смесь кефира с минеральной водой – получится более мягкий и кисломолочный вкус.',
      },
      {
        name: 'Окрошка с говядиной',
        changes: 'Вместо колбасы используйте отварную говядину или язык – так вы получите более традиционный вариант.',
      },
      {
        name: 'Окрошка постная',
        changes: 'Исключите яйца и колбасу, оставив только свежие овощи, зелень и квас – идеальный вариант для поста.',
      },
    ],
  },
  {
    metaSeo: {
      title: 'Окрошка на кефире – освежающий летний суп',
      description:
        'Окрошка на кефире – холодный суп, который идеально подходит для жарких дней. Классическая окрошка с колбасой, свежими овощами, зеленью и нежным кефиром — лёгкая, сытная и освежающая!',
      keywords: [
        'окрошка на кефире',
        'окрошка',
        'окрошка с колбасой',
        'окрошка рецепт',
        'холодный суп',
        'русская кухня',
        'летний суп',
        'кефирный суп',
      ],
      'og:title': 'Окрошка на кефире – классический летний суп',
      'og:description':
        'Как приготовить окрошку на кефире: освежающий суп с колбасой, огурцами, яйцами и зеленью. Идеальное блюдо для жаркого дня!',
      'og:url': 'https://food-paradise.ru/recipe/okroshka-na-kefire',
      'og:image': '/static/recipes/dinner/okroshka-na-kefire.jpg',
      twitterTitle: 'Окрошка на кефире – классический летний суп',
      twitterDescription:
        'Освежающая окрошка на кефире с колбасой, яйцами и зеленью – лёгкий и вкусный холодный суп для жарких дней.',
      twitterImage: '/static/recipes/dinner/okroshka-na-kefire.jpg',
      twitterUrl: 'https://food-paradise.ru/recipe/okroshka-na-kefire',
      'twitter:card': 'summary_large_image',
      canonicalUrl: 'https://food-paradise.ru/recipe/okroshka-na-kefire',
      robots: 'index, follow',
      googlebot: 'index, follow',
      yandex: 'index, follow',
      selfwork: 'index, follow',
      'max-image-preview': 'large',
      viewport: 'width=device-width, initial-scale=1',
      author: 'food-paradise',
      'theme-color': '#ffffff',
    },
    searchRequests: ['окрошка на кефире', 'кефир', 'летний суп', 'холодное блюдо'],
    categories: [{ name: 'dinner' }],
    key: 'okroshka-na-kefire',
    name: 'okroshka-na-kefire',
    img: '/static/recipes/dinner/okroshka-na-kefire.jpg',
    title: 'Окрошка на кефире',
    description:
      'Окрошка на кефире — это лёгкий, освежающий и питательный холодный суп, который спасает от жары. Сочетание варёного картофеля, яиц, свежих огурцов, колбасы и зелени с нежным кисломолочным вкусом кефира делает это блюдо любимым во многих семьях. Простой рецепт, который создаёт ощущение домашнего уюта и лета.',
    historyDescription:
      'Окрошка на кефире появилась как современный вариант традиционной окрошки на квасе. В советское время, когда кефир стал широко доступным, хозяйки стали использовать его как более мягкую и нейтральную основу. Этот вариант быстро стал популярным благодаря своей нежности и лёгкости — особенно среди тех, кто предпочитает менее кислые супы.',
    calories: 510.2,
    preparation: 25,
    time: 30,
    level: 1,
    rating: 5,
    portions: 4,
    used: [24.82, 34.27, 25.22],
    ingredients: [
      { ...INGREDIENTS.potato, count: 3 },
      { ...INGREDIENTS.eggs, count: 4 },
      { ...INGREDIENTS.cucumber, count: 3 },
      { ...INGREDIENTS.greenOnion, count: 1 },
      { ...INGREDIENTS.dill, count: 1 },
      { ...INGREDIENTS.mustard },
      { ...INGREDIENTS.carbonatedMineralWater, count: 500 },
      { ...INGREDIENTS.boiledPorkSausage, count: 300 },
      { ...INGREDIENTS.kefir32, count: 1000 },
      { ...INGREDIENTS.salt },
    ],
    equipments: [
      EQUIPMENTS.pot,
      EQUIPMENTS.knife,
      EQUIPMENTS.cutBoard,
      EQUIPMENTS.bowl,
      EQUIPMENTS.spoon,
      EQUIPMENTS.sieve,
    ],
    cookingRecipe: [
      {
        img: null,
        video: null,
        description:
          'Отварите картофель в мундире до мягкости (около 15–20 минут) и яйца вкрутую (примерно 10 минут). После варки остудите, очистите и дайте им полностью остыть.',
        ingredients: [
          { ...INGREDIENTS.potato, count: 3 },
          { ...INGREDIENTS.eggs, count: 4 },
        ],
      },
      {
        img: null,
        video: null,
        description:
          'Нарежьте варёную колбасу, картофель и яйца небольшими кубиками. Огурцы нарежьте полукружьями или мелкими кубиками. Мелко порубите зелёный лук и укроп.',
        ingredients: [
          { ...INGREDIENTS.boiledPorkSausage, count: 300 },
          { ...INGREDIENTS.cucumber, count: 3 },
          { ...INGREDIENTS.greenOnion, count: 1 },
          { ...INGREDIENTS.dill, count: 1 },
        ],
      },
      {
        img: null,
        video: null,
        description:
          'В глубокой миске соедините все нарезанные ингредиенты. Посолите по вкусу, добавьте немного горчицы для остроты. Залейте смесью кефира и минеральной воды, хорошо перемешайте. Подавайте охлаждённой.',
        ingredients: [
          { ...INGREDIENTS.kefir32, count: 1000 },
          { ...INGREDIENTS.carbonatedMineralWater, count: 500 },
          { ...INGREDIENTS.mustard },
          { ...INGREDIENTS.salt },
        ],
      },
    ],
    tips: [
      'Чтобы вкус был более ярким, используйте смесь кефира и газированной минеральной воды 1:1.',
      'Окрошку на кефире можно охладить в холодильнике перед подачей – она станет ещё вкуснее.',
      'Добавьте немного лимонного сока или хрена, если хотите кислинку и пикантность.',
      'Не используйте обезжиренный кефир — с 2,5–3,2% жирности окрошка получается более насыщенной и нежной.',
    ],
    variations: [
      {
        name: 'Окрошка с курицей',
        changes: 'Замените колбасу на отварное куриное филе – получится более лёгкий и диетический вариант.',
      },
      {
        name: 'Окрошка постная',
        changes: 'Исключите яйца и колбасу, оставив только овощи и кефир — отличное блюдо для поста.',
      },
      {
        name: 'Окрошка с минералкой без кефира',
        changes:
          'Если хотите более лёгкий вариант, замените кефир полностью на минералку и добавьте немного сметаны для мягкости вкуса.',
      },
    ],
  },
  {
    metaSeo: {
      title: 'Классический борщ с говядиной — пошаговый рецепт с фото',
      description:
        'Классический борщ с говядиной — густой, ароматный и насыщенный вкусом. Идеальный цвет, правильная заправка, три вида мяса и овощи — всё для настоящего борща!',
      keywords: [
        'борщ классический',
        'борщ с говядиной',
        'наваристый борщ',
        'борщ со свеклой',
        'домашний борщ',
        'рецепт борща с фото',
        'борщ как у бабушки',
        'зимний суп',
        'борщ рецепт пошагово',
        'густой борщ',
      ],
      'og:title': 'Классический борщ с говядиной — пошаговый рецепт с фото',
      'og:description':
        'Как приготовить настоящий борщ с говядиной: насыщенный бульон, сочная свекла и ароматная заправка. Полный пошаговый рецепт с фото!',
      'og:url': 'https://food-paradise.ru/recipe/classic-borscht',
      'og:image': '/static/recipes/dinner/classic-borscht.jpeg',
      twitterTitle: 'Классический борщ с говядиной — рецепт с фото',
      twitterDescription:
        'Настоящий борщ: говядина, свинина, свёкла, томаты и чеснок. Как добиться идеального цвета и густоты.',
      twitterImage: '/static/recipes/dinner/classic-borscht.jpeg',
      twitterUrl: 'https://food-paradise.ru/recipe/classic-borscht',
      'twitter:card': 'summary_large_image',
      canonicalUrl: 'https://food-paradise.ru/recipe/classic-borscht',
      robots: 'index, follow',
      googlebot: 'index, follow',
      yandex: 'index, follow',
      selfwork: 'index, follow',
      'max-image-preview': 'large',
      viewport: 'width=device-width, initial-scale=1',
      author: 'food-paradise',
      'theme-color': '#ffffff',
    },
    searchRequests: ['борщ с говядиной', 'классический борщ', 'густой борщ'],
    categories: [{ name: 'dinner' }, { name: 'soups' }],
    key: 'classic-borscht',
    name: 'classic-borscht',
    img: '/static/recipes/dinner/classic-borscht.jpeg',
    title: 'Борщ классический с говядиной',
    description:
      'Легендарный борщ — это больше, чем суп. Это традиция, вкус детства и аромат домашнего уюта. В этом рецепте — говядина, свиные ребрышки и богатая овощная заправка со свеклой, морковью и капустой. Правильная технология приготовления сохраняет насыщенный рубиновый цвет и насыщенный мясной вкус.',
    historyDescription:
      'Борщ — символ славянской кухни, история которого насчитывает сотни лет. В классическом варианте он готовится на мясном бульоне, а секрет его насыщенности — в долгом томлении и тройной обработке свеклы. С добавлением сала, чеснока и пампушек борщ превращается в настоящее народное блюдо, любимое по всему миру.',
    calories: 320,
    preparation: 40,
    time: 150,
    level: 3,
    rating: 4.9,
    portions: 6,
    used: [45.2, 60.1, 25.3],
    ingredients: [
      { ...INGREDIENTS.beef, count: 0.6 },
      { ...INGREDIENTS.porkRibs, count: 0.3 },
      { ...INGREDIENTS.beet, count: 3 },
      { ...INGREDIENTS.potato, count: 4 },
      { ...INGREDIENTS.cabbage, count: 300 },
      { ...INGREDIENTS.carrot, count: 2 },
      { ...INGREDIENTS.onion, count: 2 },
      { ...INGREDIENTS.tomatoPaste, count: 1 },
      { ...INGREDIENTS.vinegar, count: 1 },
      { ...INGREDIENTS.sugar, count: 1 },
      { ...INGREDIENTS.garlic, count: 4 },
      { ...INGREDIENTS.salt },
      { ...INGREDIENTS.groundBlackPepper },
      { ...INGREDIENTS.bayLeaf },
      { ...INGREDIENTS.butter, count: 20 },
      { ...INGREDIENTS.vegetableOil, count: 3 },
      { ...INGREDIENTS.lard, count: 30 },
      { ...INGREDIENTS.sourCream, count: 100 },
      { ...INGREDIENTS.greenOnion, count: 1 },
      { ...INGREDIENTS.dill, count: 1 },
    ],
    equipments: [
      EQUIPMENTS.pot,
      EQUIPMENTS.pan,
      EQUIPMENTS.knife,
      EQUIPMENTS.cutBoard,
      EQUIPMENTS.grater,
      EQUIPMENTS.spoon,
      EQUIPMENTS.bowl,
      EQUIPMENTS.ladle,
    ],
    cookingRecipe: [
      {
        description:
          'Приготовьте бульон: залейте говядину 3 литрами холодной воды, доведите до кипения и снимите пену. Добавьте целую луковицу, морковь, лавровый лист и соль. Варите на медленном огне 1,5 часа. За 30 минут до готовности положите свиные ребрышки.',
        ingredients: [
          { ...INGREDIENTS.beef, count: 600 },
          { ...INGREDIENTS.porkRibs, count: 300 },
          { ...INGREDIENTS.onion, count: 1 },
          { ...INGREDIENTS.carrot, count: 1 },
          { ...INGREDIENTS.bayLeaf },
          { ...INGREDIENTS.salt },
        ],
      },
      {
        description:
          'Подготовьте свеклу: две свеклы натрите на крупной тёрке, одну нарежьте соломкой. Обжарьте свёклу на смеси растительного и сливочного масла с томатной пастой 10 минут. Добавьте уксус и сахар, тушите ещё 5 минут до насыщенного цвета.',
        ingredients: [
          { ...INGREDIENTS.beet, count: 3 },
          { ...INGREDIENTS.tomatoPaste, count: 1 },
          { ...INGREDIENTS.vinegar, count: 1 },
          { ...INGREDIENTS.sugar, count: 1 },
          { ...INGREDIENTS.vegetableOil, count: 2 },
          { ...INGREDIENTS.butter, count: 20 },
        ],
      },
      {
        description:
          'В кипящий бульон добавьте нарезанный картофель. Через 10 минут — шинкованную капусту. Отдельно обжарьте лук и морковь на сковороде до золотистости и переложите к овощам в кастрюлю. Затем добавьте тушёную свёклу и варите ещё 10–15 минут.',
        ingredients: [
          { ...INGREDIENTS.potato, count: 4 },
          { ...INGREDIENTS.cabbage, count: 300 },
          { ...INGREDIENTS.onion, count: 1 },
          { ...INGREDIENTS.carrot, count: 1 },
          { ...INGREDIENTS.vegetableOil, count: 1 },
        ],
      },
      {
        description:
          'Приготовьте заправку: растолките чеснок с солью, салом и чёрным перцем до состояния пасты. Добавьте в борщ за 5 минут до готовности. Снимите с огня, накройте крышкой и дайте настояться 20 минут. Подавайте борщ со сметаной, зелёным луком и укропом.',
        ingredients: [
          { ...INGREDIENTS.lard, count: 30 },
          { ...INGREDIENTS.garlic, count: 4 },
          { ...INGREDIENTS.salt },
          { ...INGREDIENTS.groundBlackPepper },
          { ...INGREDIENTS.sourCream, count: 100 },
          { ...INGREDIENTS.greenOnion, count: 1 },
          { ...INGREDIENTS.dill, count: 1 },
        ],
      },
    ],

    tips: [
      'Чтобы борщ сохранил яркий цвет, добавляйте свеклу в самом конце варки.',
      'Для насыщенного вкуса используйте смесь мяса: говядина + свиные ребра.',
      'Борщ станет гуще и вкуснее, если настоится 12 часов в холодильнике.',
      'Подавайте с чесночными пампушками и салом — это классика!',
    ],
    variations: [
      {
        name: 'Зелёный борщ',
        changes: 'Замените свеклу на щавель и шпинат, добавьте варёное яйцо при подаче.',
      },
      {
        name: 'Постный борщ',
        changes: 'Исключите мясо, приготовьте на грибном или овощном бульоне.',
      },
      {
        name: 'Борщ с фасолью',
        changes: 'Добавьте отварную фасоль на этапе закладки картофеля — получится сытнее.',
      },
    ],
  },
  {
    metaSeo: {
      title: 'Крем-суп из тыквы с имбирем — рецепт с фото | Нежный и полезный',
      description:
        'Идеальный осенний суп: шелковистая текстура, согревающий имбирь и сливочные нотки. 3 секрета бархатистости, варианты подачи с крутонами и семечками. Готовится за 40 минут.',
      keywords: [
        'тыквенный крем-суп',
        'суп из тыквы',
        'рецепт тыквенного супа',
        'суп с имбирем',
        'осенние супы',
        'полезный суп',
        'нежный крем-суп',
        'суп-пюре',
        'диетический суп',
        'суп за 40 минут',
        'тыква с сливками',
        'имбирный суп',
        'витаминный суп',
        'ресторанный суп',
        'подача тыквенного супа',
      ],
      'og:title': 'Крем-суп из тыквы с имбирем — рецепт с фото',
      'og:description':
        'Идеальный осенний суп: шелковистая текстура, согревающий имбирь и сливочные нотки. 3 секрета бархатистости.',
      'og:url': 'https://food-paradise.ru/recipe/pumpkin-cream-soup',
      'og:image': '/static/recipes/dinner/pumpkin-cream-soup.jpeg',
      twitterTitle: 'Крем-суп из тыквы с имбирем — рецепт с фото',
      twitterDescription: 'Шелковистый тыквенный суп с имбирной ноткой — осеннее наслаждение в тарелке!',
      twitterImage: '/static/recipes/dinner/pumpkin-cream-soup.jpeg',
      twitterUrl: 'https://food-paradise.ru/recipe/pumpkin-cream-soup',
      'twitter:card': 'summary_large_image',
      canonicalUrl: 'https://food-paradise.ru/recipe/pumpkin-cream-soup',
      robots: 'index, follow',
      googlebot: 'index, follow',
      yandex: 'index, follow',
      selfwork: 'index, follow',
      'max-image-preview': 'large',
      viewport: 'width=device-width, initial-scale=1',
      author: 'food-paradise',
      'theme-color': '#ffffff',
    },
    searchRequests: ['тыквенный крем-суп', 'суп из тыквы', 'рецепт тыквенного супа', 'суп с имбирем', 'осенние супы'],
    categories: [{ name: 'dinner' }, { name: 'soups' }, { name: 'vegetarian' }],
    key: 'pumpkin-cream-soup',
    name: 'pumpkin-cream-soup',
    img: '/static/recipes/dinner/pumpkin-cream-soup.jpeg',
    title: 'Крем-суп из тыквы с имбирем',
    description:
      'Шеф-версия тыквенного супа от мишленовских поваров: бархатистая текстура достигается сочетанием запеченной тыквы сорта Хоккайдо и сладкого картофеля. Имбирь и мускатный орех добавляют согревающие нотки, а кокосовые сливки делают вкус объемным. Секрет — тройное пюрирование и подача с карамелизированными тыквенными семечками.',
    calories: 240,
    preparation: 20,
    time: 40,
    level: 2,
    rating: 4.8,
    portions: 4,
    used: [30.5, 45.2, 12.3],
    ingredients: [
      { ...INGREDIENTS.water, count: 1000 },
      { ...INGREDIENTS.carrot, count: 1 },
      { ...INGREDIENTS.celery, count: 1 },
      { ...INGREDIENTS.pumpkin, count: 700 },
      { ...INGREDIENTS.sweetPotato, count: 200 },
      { ...INGREDIENTS.onion, count: 1 },
      { ...INGREDIENTS.ginger, count: 20 },
      { ...INGREDIENTS.garlic, count: 2 },
      { ...INGREDIENTS.coconutCream, count: 200 },
      { ...INGREDIENTS.oliveOil, count: 2 },
      { ...INGREDIENTS.muscatNut, count: 1 },
      { ...INGREDIENTS.pumpkinSeeds, count: 30 },
      { ...INGREDIENTS.thyme, count: 2 },
      { ...INGREDIENTS.salt },
      { ...INGREDIENTS.groundBlackPepper },
    ],
    equipments: [
      EQUIPMENTS.oven,
      EQUIPMENTS.bakingTray,
      EQUIPMENTS.knife,
      EQUIPMENTS.cutBoard,
      EQUIPMENTS.pot,
      EQUIPMENTS.blender,
      EQUIPMENTS.sieve,
      EQUIPMENTS.pan,
      EQUIPMENTS.spoon,
      EQUIPMENTS.bowl,
    ],
    historyDescription:
      'История тыквенного супа уходит корнями в европейскую кухню XVII века, когда тыква стала популярным осенним продуктом. Первые рецепты супов-пюре появились во Франции, где повара начали сочетать запечённую тыкву с маслом и сливками. Сегодня тыквенный крем-суп известен во всём мире — в Италии его подают с пармезаном, в Азии — с имбирём и кокосом, а в России он стал любимым осенним блюдом, символом уюта и мягкого тепла.',
    cookingRecipe: [
      {
        img: null,
        video: null,
        description:
          'Вскипятите 1 литр воды с морковью, луком и стеблем сельдерея. Варите 15 минут, затем удалите овощи — получится лёгкий овощной бульон для супа.',
        ingredients: [INGREDIENTS.water, INGREDIENTS.carrot, INGREDIENTS.onion, INGREDIENTS.celery],
      },
      {
        img: null,
        video: null,
        description:
          'Разогрейте духовку до 200°C. Тыкву и батат нарежьте крупными кубиками (можно с кожурой). Выложите на противень, сбрызните 1 ст. л. оливкового масла, запекайте 25 минут до мягкости.',
        ingredients: [INGREDIENTS.pumpkin, INGREDIENTS.sweetPotato, INGREDIENTS.oliveOil],
      },
      {
        img: null,
        video: null,
        description:
          'В кастрюле разогрейте оставшееся оливковое масло, обжарьте мелко нарезанный лук до прозрачности (3 минуты). Добавьте тёртый имбирь и раздавленный чеснок, готовьте 1 минуту до появления аромата.',
        ingredients: [INGREDIENTS.onion, INGREDIENTS.ginger, INGREDIENTS.garlic, INGREDIENTS.oliveOil],
      },
      {
        img: null,
        video: null,
        description:
          'Добавьте запечённые овощи, овощной бульон, кокосовые сливки, мускатный орех, соль и перец. Доведите до кипения и пюрируйте блендером до гладкости. При желании процедите через сито для шелковистой текстуры.',
        ingredients: [INGREDIENTS.coconutCream, INGREDIENTS.muscatNut, INGREDIENTS.salt, INGREDIENTS.groundBlackPepper],
      },
      {
        img: null,
        video: null,
        description:
          'На сухой сковороде обжарьте тыквенные семечки до лёгкого потрескивания. Подавайте суп, украсив семечками, каплей сливок и веточкой тимьяна.',
        ingredients: [INGREDIENTS.pumpkinSeeds, INGREDIENTS.thyme],
      },
    ],
    tips: [
      'Для более насыщенного вкуса добавьте 1 ч.л. кленового сиропа в конце приготовления.',
      'Храните не более 2 дней — суп теряет бархатистость при повторном нагревании.',
      'Веганский вариант: используйте кокосовое молоко вместо сливок.',
      'Подавайте с гренками из чиабатты или чесночными крутонами.',
    ],
    variations: [
      {
        name: 'С копченым лососем',
        changes: 'Добавьте 100 г копчёного лосося на порцию перед подачей.',
      },
      {
        name: 'Острый вариант',
        changes: 'Добавьте 1/2 перца чили при обжарке лука.',
      },
    ],
  },
  {
    metaSeo: {
      title: 'Фо Бо — вьетнамский суп с говядиной | Аутентичный рецепт с фото',
      description:
        'Настоящий вьетнамский фо: прозрачный ароматный бульон, тончайшая говядина и правильная лапша. Секреты приготовления за 4 часа, набор специй и традиционная подача. Рецепт от шефа из Ханоя.',
      keywords: [
        'фо бо',
        'вьетнамский суп',
        'суп с говядиной',
        'азиатские супы',
        'рецепт фо',
        'суп с лапшой',
        'вьетнамская кухня',
        'прозрачный бульон',
        'суп за 4 часа',
        'имбирный суп',
        'аутентичный фо',
        'говяжий суп',
        'суп со звездчатым анисом',
        'подача фо бо',
        'рецепт от шефа',
      ],
      'og:title': 'Фо Бо — вьетнамский суп с говядиной | Аутентичный рецепт',
      'og:description':
        'Настоящий вьетнамский фо: прозрачный бульон, тонкая говядина и правильная лапша. Секреты приготовления за 4 часа.',
      'og:url': 'https://food-paradise.ru/recipe/pho-bo',
      'og:image': '/static/recipes/dinner/pho-bo.jpeg',
      twitterTitle: 'Фо Бо — вьетнамский суп с говядиной | Аутентичный рецепт',
      twitterDescription: 'Научитесь готовить настоящий фо как в уличных кафе Ханоя!',
      twitterImage: '/static/recipes/dinner/pho-bo.jpeg',
      twitterUrl: 'https://food-paradise.ru/recipe/pho-bo',
      'twitter:card': 'summary_large_image',
      canonicalUrl: 'https://food-paradise.ru/recipe/pho-bo',
      robots: 'index, follow',
      googlebot: 'index, follow',
      yandex: 'index, follow',
      selfwork: 'index, follow',
      'max-image-preview': 'large',
      viewport: 'width=device-width, initial-scale=1',
      author: 'food-paradise',
      'theme-color': '#ffffff',
    },

    searchRequests: ['фо бо', 'вьетнамский суп', 'суп с говядиной', 'азиатские супы', 'рецепт фо'],
    categories: [{ name: 'dinner' }, { name: 'soups' }, { name: 'asian' }],
    key: 'pho-bo',
    name: 'pho-bo',
    img: '/static/recipes/dinner/pho-bo.jpeg',
    title: 'Фо Бо (вьетнамский суп с говядиной)',

    description:
      "Коронное блюдо вьетнамской кухни — фо бо требует особого подхода к приготовлению бульона. Наш рецепт повторяет технологию уличных поваров Ханоя: 4-часовое томление костей с обугленным имбирем и луком, набор специй (звездчатый анис, корица, гвоздика, кориандр) и рисовую лапшу 'бань фо'. Особенность — добавление сырой говядины тончайшей нарезки прямо в тарелку: она готовится от горячего бульона.",

    calories: 380,
    preparation: 60,
    time: 240,
    level: 3,
    rating: 4.9,
    portions: 4,
    used: [55.3, 70.2, 30.1],

    historyDescription:
      'Фо бо — символ Вьетнама. Он появился в начале XX века, когда местные повара адаптировали французские мясные бульоны, добавив восточные специи, рисовую лапшу и свежие травы. Сегодня фо готовят повсюду — от уличных лавок до ресторанов.',

    ingredients: [
      { ...INGREDIENTS.beefBones, count: 1.5 },
      { ...INGREDIENTS.beefBrisket, count: 0.4 },
      { ...INGREDIENTS.water, count: 4000 },
      { ...INGREDIENTS.onion, count: 2 },
      { ...INGREDIENTS.ginger, count: 60 },
      { ...INGREDIENTS.starAnise, count: 2 },
      { ...INGREDIENTS.cinnamonStick, count: 1 },
      { ...INGREDIENTS.cloves, count: 4 },
      { ...INGREDIENTS.corianderSeeds, count: 1 },
      { ...INGREDIENTS.fishSauce, count: 40 },
      { ...INGREDIENTS.sugar, count: 10 },
      { ...INGREDIENTS.salt },
      { ...INGREDIENTS.riceNoodles, count: 300 },
      { ...INGREDIENTS.beefTenderloin, count: 0.3 },
      { ...INGREDIENTS.lime, count: 1 },
      { ...INGREDIENTS.chiliPepper, count: 1 },
      { ...INGREDIENTS.beanSprouts, count: 1 },
      { ...INGREDIENTS.cilantro, count: 1 },
      { ...INGREDIENTS.greenOnion, count: 1 },
    ],

    equipments: [
      EQUIPMENTS.pot,
      EQUIPMENTS.sieve,
      EQUIPMENTS.knife,
      EQUIPMENTS.cutBoard,
      EQUIPMENTS.pan,
      EQUIPMENTS.tongs,
      EQUIPMENTS.bowl,
      EQUIPMENTS.spoon,
    ],

    cookingRecipe: [
      {
        description:
          'Подготовьте кости: залейте холодной водой, доведите до кипения, варите 5 минут. Слейте, промойте кости и кастрюлю — это уберёт запах и лишнюю пену.',
        ingredients: [INGREDIENTS.beefBones, INGREDIENTS.water],
      },
      {
        description:
          'Залейте кости заново 4 л воды, добавьте грудинку. Доведите до кипения, снимите пену и варите на минимальном огне 3 часа.',
        ingredients: [INGREDIENTS.beefBones, INGREDIENTS.beefBrisket, INGREDIENTS.water],
      },
      {
        description:
          'На сухой сковороде обуглите лук и имбирь до чёрных подпалин (около 10 минут). Очистите и добавьте в бульон вместе со специями: звёздчатым анисом, корицей, гвоздикой и кориандром. Варите ещё 1 час.',
        ingredients: [
          INGREDIENTS.onion,
          INGREDIENTS.ginger,
          INGREDIENTS.starAnise,
          INGREDIENTS.cinnamonStick,
          INGREDIENTS.cloves,
          INGREDIENTS.corianderSeeds,
        ],
      },
      {
        description:
          'Процедите бульон через сито, верните на слабый огонь. Добавьте рыбный соус, сахар и щепоть соли. Попробуйте — вкус должен быть солоновато-сладким с ярким умами.',
        ingredients: [INGREDIENTS.fishSauce, INGREDIENTS.sugar, INGREDIENTS.salt],
      },
      {
        description:
          'Достаньте грудинку, остудите и нарежьте ломтиками. Замочите рисовую лапшу в горячей воде на 1 минуту, откиньте на дуршлаг и разложите по глубоким мискам.',
        ingredients: [INGREDIENTS.beefBrisket, INGREDIENTS.riceNoodles],
      },
      {
        description:
          'Сырую вырезку нарежьте тончайшими ломтиками (удобнее, если мясо слегка подморожено). Выложите поверх лапши и ломтиков грудинки.',
        ingredients: [INGREDIENTS.beefTenderloin],
      },
      {
        description:
          'Залейте всё кипящим бульоном. Украсьте ростками бобов, зелёным луком, кинзой, дольками лайма и перцем чили. Подавайте сразу — мясо должно оставаться розовым.',
        ingredients: [
          INGREDIENTS.beanSprouts,
          INGREDIENTS.greenOnion,
          INGREDIENTS.cilantro,
          INGREDIENTS.lime,
          INGREDIENTS.chiliPepper,
        ],
      },
    ],

    tips: [
      'Используйте кости с костным мозгом — бульон получится насыщенным.',
      'Не добавляйте соль — вкус регулируйте рыбным соусом.',
      'Подморозьте говядину перед нарезкой, чтобы получить тонкие ломтики.',
      'Подавайте сразу — мясо готовится от горячего бульона и должно быть розовым.',
    ],

    variations: [
      {
        name: 'Фо Га',
        changes: 'Замените говядину на курицу и используйте куриный бульон.',
      },
      {
        name: 'Вегетарианский фо',
        changes: 'Используйте овощной бульон, тофу и грибы шиитаке вместо мяса.',
      },
    ],
  },
  {
    metaSeo: {
      title: 'Гаспачо андалуз — холодный испанский суп | Классический рецепт с фото',
      description:
        'Настоящий гаспачо из Севильи: освежающий, с идеальным балансом кислоты и сладости. Секреты шеф-повара: выбор томатов, подача с гарнирами и исторические корни блюда. Готовится за 15 минут + охлаждение.',
      keywords: [
        'гаспачо',
        'холодный суп',
        'испанская кухня',
        'томатный суп',
        'рецепт гаспачо',
        'летний суп',
        'освежающий суп',
        'суп за 15 минут',
        'классический гаспачо',
        'андалузский суп',
        'овощной суп',
        'холодные супы',
        'суп без варки',
        'подача гаспачо',
        'редис для гаспачо',
      ],
      'og:title': 'Гаспачо андалуз — холодный испанский суп | Классический рецепт',
      'og:description':
        'Настоящий гаспачо из Севильи: освежающий, с идеальным балансом кислоты и сладости. Секреты шеф-повара.',
      'og:url': 'https://food-paradise.ru/recipe/gazpacho',
      'og:image': '/static/recipes/dinner/gazpacho.jpeg',
      twitterTitle: 'Гаспачо андалуз — холодный испанский суп',
      twitterDescription: 'Научитесь готовить настоящий гаспачо как в андалузских тавернах!',
      twitterImage: '/static/recipes/dinner/gazpacho.jpeg',
      twitterUrl: 'https://food-paradise.ru/recipe/gazpacho',
      'twitter:card': 'summary_large_image',
      canonicalUrl: 'https://food-paradise.ru/recipe/gazpacho',
      robots: 'index, follow',
      googlebot: 'index, follow',
      yandex: 'index, follow',
      selfwork: 'index, follow',
      'max-image-preview': 'large',
      viewport: 'width=device-width, initial-scale=1',
      author: 'food-paradise',
      'theme-color': '#ffffff',
    },

    searchRequests: ['гаспачо', 'холодный суп', 'испанская кухня', 'томатный суп', 'рецепт гаспачо'],

    categories: [{ name: 'dinner' }, { name: 'soups' }, { name: 'cold' }],

    key: 'gazpacho',
    name: 'gazpacho',
    img: '/static/recipes/dinner/gazpacho.jpeg',
    title: 'Гаспачо андалуз (холодный томатный суп)',

    description:
      "Аутентичный рецепт гаспачо из Андалусии — освежающего холодного супа, который когда-то был пищей испанских жнецов. В основе — спелые томаты 'бычье сердце', сладкий перец, огурец, чеснок, хлеб для густоты и немного хересного уксуса. Важно: настоящий гаспачо готовится вручную в ступке, а не в блендере, чтобы сохранить шелковистую, но слегка текстурную консистенцию.",

    calories: 180,
    preparation: 15,
    time: 135,
    level: 1,
    rating: 4.7,
    portions: 4,
    used: [25.3, 30.1, 10.2],

    historyDescription:
      'Гаспачо — гордость Андалусии и символ испанского лета. Первоначально он готовился крестьянами из хлеба, воды, чеснока и оливкового масла. После открытия Америки в рецепт вошли томаты и перцы, превратив блюдо в легендарный красный суп, который сегодня подают в лучших ресторанах Испании.',

    ingredients: [
      { ...INGREDIENTS.tomato, count: 3 },
      { ...INGREDIENTS.cucumber, count: 1.5 },
      { ...INGREDIENTS.bellPepper, count: 2 },
      { ...INGREDIENTS.onion, count: 0.5 },
      { ...INGREDIENTS.garlic, count: 2 },
      { ...INGREDIENTS.whiteBread, count: 100 },
      { ...INGREDIENTS.water, count: 100 },
      { ...INGREDIENTS.oliveOil, count: 8 },
      { ...INGREDIENTS.sherryVinegar, count: 3 },
      { ...INGREDIENTS.salt, count: 5 },
      { ...INGREDIENTS.groundBlackPepper, count: 1 },
      { ...INGREDIENTS.greenOnion, count: 1 },
      { ...INGREDIENTS.parsley, count: 0.5 },
      { ...INGREDIENTS.croutons, count: 30 },
    ],

    equipments: [
      EQUIPMENTS.mortar,
      EQUIPMENTS.knife,
      EQUIPMENTS.cutBoard,
      EQUIPMENTS.sieve,
      EQUIPMENTS.bowl,
      EQUIPMENTS.spoon,
      EQUIPMENTS.fridge,
    ],

    cookingRecipe: [
      {
        description:
          'Подготовьте хлеб: удалите корки, залейте водой на 5 минут, затем отожмите. Томаты ошпарьте, снимите кожицу и удалите семена. Очистите огурец и перец от кожуры и семян, лук нарежьте крупно.',
        ingredients: [
          INGREDIENTS.whiteBread,
          INGREDIENTS.tomato,
          INGREDIENTS.cucumber,
          INGREDIENTS.bellPepper,
          INGREDIENTS.onion,
          INGREDIENTS.water,
        ],
      },
      {
        description:
          'В ступке растолките чеснок с солью до пасты. Добавляйте по очереди томаты, перец, огурец и лук, продолжая толочь до получения густой массы. В конце добавьте размоченный хлеб.',
        ingredients: [
          INGREDIENTS.garlic,
          INGREDIENTS.salt,
          INGREDIENTS.tomato,
          INGREDIENTS.bellPepper,
          INGREDIENTS.cucumber,
          INGREDIENTS.onion,
          INGREDIENTS.whiteBread,
        ],
      },
      {
        description:
          'Медленно влейте оливковое масло и хересный уксус, перемешивая до шелковистой текстуры. При желании добавьте немного холодной воды для нужной густоты. Процедите через сито, чтобы удалить крупные частицы.',
        ingredients: [INGREDIENTS.oliveOil, INGREDIENTS.sherryVinegar, INGREDIENTS.water],
      },
      {
        description:
          'Разлейте гаспачо по мискам, добавьте немного свежемолотого перца. Украсьте мелко нарезанным огурцом, перцем, зелёным луком, петрушкой и гренками. Охладите в холодильнике не менее 2 часов перед подачей.',
        ingredients: [
          INGREDIENTS.groundBlackPepper,
          INGREDIENTS.cucumber,
          INGREDIENTS.bellPepper,
          INGREDIENTS.greenOnion,
          INGREDIENTS.parsley,
          INGREDIENTS.croutons,
        ],
      },
    ],

    tips: [
      'Выбирайте переспелые мясистые томаты — от них зависит вкус.',
      'Не используйте блендер — ступка придаёт правильную текстуру.',
      'Можно добавить пару капель соуса Табаско для остроты.',
      'Подавайте гаспачо очень холодным, но не со льдом — он разбавляет вкус.',
    ],

    variations: [
      {
        name: 'Зелёный гаспачо',
        changes: 'Замените красные томаты на зелёные и добавьте горсть миндаля.',
      },
      {
        name: 'Фруктовый гаспачо',
        changes: 'Добавьте спелую грушу или арбуз для сладости.',
      },
    ],
  },
  {
    metaSeo: {
      title: 'Сливочный грибной суп с трюфельным маслом — ресторанный рецепт',
      description:
        'Изысканный грибной крем-суп с трюфельными нотками: сочетание лесных грибов, сливок и правильных специй. 5 секретов насыщенного вкуса, техника обжарки грибов и подача с гренками. Готовится за 45 минут.',
      keywords: [
        'грибной крем-суп',
        'сливочный грибной суп',
        'рецепт грибного супа',
        'суп с трюфельным маслом',
        'ресторанный суп',
        'суп-пюре с грибами',
        'лесные грибы суп',
        'изысканные супы',
        'суп за 45 минут',
        'шампиньоны суп',
        'белые грибы суп',
        'подача грибного супа',
        'домашний грибной суп',
        'суп с тимьяном',
        'зимние супы',
      ],
      'og:title': 'Сливочный грибной суп с трюфельным маслом — ресторанный рецепт',
      'og:description':
        'Изысканный грибной крем-суп с трюфельными нотками: сочетание лесных грибов, сливок и правильных специй.',
      'og:url': 'https://food-paradise.ru/recipe/cream-mushroom-soup',
      'og:image': '/static/recipes/dinner/cream-mushroom-soup.jpeg',
      twitterTitle: 'Сливочный грибной суп с трюфельным маслом — ресторанный рецепт',
      twitterDescription: 'Научитесь готовить грибной суп как в мишленовских ресторанах!',
      twitterImage: '/static/recipes/dinner/cream-mushroom-soup.jpeg',
      twitterUrl: 'https://food-paradise.ru/recipe/cream-mushroom-soup',
      'twitter:card': 'summary_large_image',
      canonicalUrl: 'https://food-paradise.ru/recipe/cream-mushroom-soup',
      robots: 'index, follow',
      googlebot: 'index, follow',
      yandex: 'index, follow',
      selfwork: 'index, follow',
      'max-image-preview': 'large',
      viewport: 'width=device-width, initial-scale=1',
      author: 'food-paradise',
      'theme-color': '#ffffff',
    },

    searchRequests: [
      'грибной крем-суп',
      'сливочный грибной суп',
      'рецепт грибного супа',
      'суп с трюфельным маслом',
      'ресторанный суп',
    ],

    categories: [{ name: 'dinner' }, { name: 'soups' }, { name: 'cream' }],

    key: 'cream-mushroom-soup',
    name: 'cream-mushroom-soup',
    img: '/static/recipes/dinner/cream-mushroom-soup.jpeg',
    title: 'Сливочный грибной суп с трюфельным маслом',

    description:
      'Ресторанный вариант сливочного грибного супа с трюфельным акцентом. Готовится на насыщенном грибном бульоне из сушёных белых грибов, с добавлением шампиньонов, лисичек и свежих трав. Секрет вкуса — раздельная обжарка грибов и доведение консистенции до кремовой гладкости. Подаётся с каплей трюфельного масла и гренками из чиабатты.',

    calories: 350,
    preparation: 20,
    time: 45,
    level: 2,
    rating: 4.9,
    portions: 4,
    used: [40.2, 55.3, 18.7],

    historyDescription:
      'Грибные крем-супы появились во французской кухне в XIX веке, как изысканный способ использовать лесные грибы. Позже рецепты распространились по Европе, а добавление сливок и трюфельного масла сделало их символом гастрономической элегантности. В Италии и Франции подобные супы подают в ресторанах высокой кухни.',

    ingredients: [
      { ...INGREDIENTS.driedPorcini, count: 20 },
      { ...INGREDIENTS.champignons, count: 300 },
      { ...INGREDIENTS.chanterelles, count: 150 },
      { ...INGREDIENTS.freshPorcini, count: 100 },
      { ...INGREDIENTS.onion, count: 1 },
      { ...INGREDIENTS.garlic, count: 2 },
      { ...INGREDIENTS.butter, count: 50 },
      { ...INGREDIENTS.thyme, count: 3 },
      { ...INGREDIENTS.cream33, count: 250 },
      { ...INGREDIENTS.truffleOil, count: 1 },
      { ...INGREDIENTS.sunflowerOil, count: 1 },
      { ...INGREDIENTS.whitePepper, count: 1 },
      { ...INGREDIENTS.salt, count: 5 },
      { ...INGREDIENTS.ciabatta, count: 60 },
      { ...INGREDIENTS.water, count: 600 },
    ],

    equipments: [
      EQUIPMENTS.pot,
      EQUIPMENTS.pan,
      EQUIPMENTS.knife,
      EQUIPMENTS.cutBoard,
      EQUIPMENTS.sieve,
      EQUIPMENTS.blender,
      EQUIPMENTS.spoon,
      EQUIPMENTS.bowl,
    ],

    cookingRecipe: [
      {
        img: '/static/steps/mushroom-soup1.webp',
        description:
          'Залейте сушёные белые грибы 600 мл кипятка, накройте крышкой и настаивайте 30 минут. Процедите, отожмите грибы (их можно добавить в суп позже). Полученный бульон доведите до кипения и уварите до 500 мл для насыщенного вкуса.',
        ingredients: [INGREDIENTS.driedPorcini, INGREDIENTS.water],
      },
      {
        description:
          'В кастрюле растопите сливочное масло. Добавьте нарезанный лук и обжарьте до прозрачности. Введите чеснок и тимьян, готовьте 1 минуту до появления аромата.',
        ingredients: [INGREDIENTS.butter, INGREDIENTS.onion, INGREDIENTS.garlic, INGREDIENTS.thyme],
      },
      {
        description:
          'Шампиньоны нарежьте пластинами и обжарьте на отдельной сковороде до лёгкой румяности. То же проделайте с лисичками и свежими белыми грибами. Это придаст супу многослойный вкус.',
        ingredients: [
          INGREDIENTS.champignons,
          INGREDIENTS.chanterelles,
          INGREDIENTS.freshPorcini,
          INGREDIENTS.sunflowerOil,
        ],
      },
      {
        description:
          'Соедините все грибы с обжаренным луком, добавьте грибной бульон и сливки. Посолите, приправьте белым перцем. Доведите до лёгкого кипения и варите 10 минут.',
        ingredients: [INGREDIENTS.cream33, INGREDIENTS.whitePepper, INGREDIENTS.salt],
      },
      {
        description:
          'Пюрируйте суп блендером до гладкости. Процедите через сито для шелковистой текстуры. Разлейте по тарелкам, украсьте каплей трюфельного масла и подавайте с гренками из чиабатты.',
        ingredients: [INGREDIENTS.truffleOil, INGREDIENTS.ciabatta],
      },
    ],

    tips: [
      'Используйте смесь грибов — это даёт сложный аромат.',
      'Не кипятите сливки слишком долго, чтобы не потерять нежность вкуса.',
      'Трюфельное масло добавляйте только перед подачей.',
      'Для вегетарианской версии замените сливочное масло и сливки на растительные аналоги.',
    ],

    variations: [
      {
        name: 'С курицей',
        changes: 'Добавьте 200 г куриного филе при варке вместе с бульоном.',
      },
      {
        name: 'С картофелем',
        changes: 'Добавьте 2 очищенные картофелины при варке, до пюрирования.',
      },
    ],
  },
  {
    metaSeo: {
      title: 'Щи из свежей капусты — классический русский обед',
      description: `Щи из свежей капусты — это воплощение домашнего уюта и настоящей русской кухни. Ароматный мясной бульон, сочная капуста, картофель, морковь и лёгкая кислинка томатной пасты создают гармоничный вкус, который невозможно спутать ни с чем. Эти щи получаются густыми, наваристыми и сытными — идеальный вариант для обеда в холодное время года. Подавайте их со сметаной и ржаным хлебом — как в старых русских домах, где щи считались главным блюдом дня.`,
      keywords: [
        'щи из свежей капусты',
        'русские щи',
        'наваристый суп',
        'обеденный суп',
        'рецепт щей',
        'щи с говядиной',
        'домашние щи',
        'суп с капустой',
        'русская кухня',
        'сытный обед',
        'постные щи',
        'щи в кастрюле',
        'вкусный суп',
        'рецепт с томатной пастой',
        'зимний суп',
        'обед для семьи',
        'щи как в детстве',
        'простой рецепт',
        'настоящие щи',
        'ароматный суп',
      ],
      'og:title': 'Щи из свежей капусты — классический русский обед',
      'og:description':
        'Наваристые щи с говядиной, капустой и ароматными специями. Традиционный рецепт, как у бабушки.',
      'og:url': 'https://food-paradise.ru/recipe/schi-iz-svezhey-kapusty',
      'og:image': '/static/recipes/dinner/schi-iz-svezhey-kapusty.jpeg',
      twitterTitle: 'Щи из свежей капусты — классический русский обед',
      twitterDescription: 'Наваристые щи с говядиной, капустой и ароматными специями.',
      twitterImage: '/static/recipes/dinner/schi-iz-svezhey-kapusty.jpeg',
      twitterUrl: 'https://food-paradise.ru/recipe/schi-iz-svezhey-kapusty',
      'twitter:card': 'summary_large_image',
      canonicalUrl: 'https://food-paradise.ru/recipe/schi-iz-svezhey-kapusty',
      robots: 'index, follow',
      viewport: 'width=device-width, initial-scale=1',
    },

    searchRequests: ['щи из свежей капусты', 'русские щи', 'наваристый суп', 'обеденный суп'],
    categories: [{ name: 'dinner' }, { name: 'soup' }, { name: 'russian' }],
    key: 'schi-iz-svezhey-kapusty',
    name: 'schi-iz-svezhey-kapusty',
    img: '/static/recipes/dinner/schi-iz-svezhey-kapusty.jpeg',
    title: 'Щи из свежей капусты',
    description: `Щи из свежей капусты — это воплощение домашнего уюта и настоящей русской кухни. Ароматный мясной бульон, сочная капуста, картофель, морковь и лёгкая кислинка томатной пасты создают гармоничный вкус, который невозможно спутать ни с чем. Эти щи получаются густыми, наваристыми и сытными — идеальный вариант для обеда в холодное время года. Подавайте их со сметаной и ржаным хлебом — как в старых русских домах, где щи считались главным блюдом дня.`,
    calories: 210,
    preparation: 30,
    time: 120,
    level: 2,
    rating: 4.7,
    portions: 6,
    used: [12, 14],

    historyDescription: `Щи — одно из древнейших блюд русской кухни. Первые упоминания о них встречаются ещё в XI веке, 
  а выражение «щи да каша — пища наша» стало народным символом домашнего уюта. 
  В старину щи варили в русской печи на мясном бульоне, а в пост — на грибном отваре. 
  Секрет настоящих щей — долгое томление, которое придаёт бульону густоту и насыщенность. 
  Щи из свежей капусты особенно популярны летом и осенью, когда капуста молодая и сочная, а на столе — аромат зелени и свежего хлеба.`,

    ingredients: [
      { ...INGREDIENTS.beefOnTheBone, count: 0.5 },
      { ...INGREDIENTS.cabbage, count: 0.5 },
      { ...INGREDIENTS.potato, count: 4 },
      { ...INGREDIENTS.carrot, count: 1 },
      { ...INGREDIENTS.onion, count: 1 },
      { ...INGREDIENTS.tomatoPaste, count: 40 },
      { ...INGREDIENTS.bayLeaf, count: 3 },
      { ...INGREDIENTS.blackPepper, count: 5 },
      { ...INGREDIENTS.salt, count: 1 },
      { ...INGREDIENTS.sourCream, count: 30 },
      { ...INGREDIENTS.water, count: 3000 },
    ],

    equipments: [
      { ...EQUIPMENTS.pot, count: 1 },
      { ...EQUIPMENTS.pan, count: 1 },
      { ...EQUIPMENTS.woodenSpoon, count: 1 },
      { ...EQUIPMENTS.knife, count: 1 },
      { ...EQUIPMENTS.cutBoard, count: 1 },
    ],

    cookingRecipe: [
      {
        img: '/static/steps/schi1.webp',
        video: null,
        description:
          'Подготовьте мясо: говядину на кости промойте, залейте 3 литрами холодной воды и доведите до кипения. Снимите пену, убавьте огонь и варите 1.5 часа до мягкости. Бульон станет прозрачным и ароматным — это основа будущих щей.',
        ingredients: [
          { ...INGREDIENTS.beefOnTheBone, count: 0.5 },
          { ...INGREDIENTS.water, count: 3000 },
        ],
      },
      {
        img: '/static/steps/schi2.webp',
        video: null,
        description:
          'Пока варится мясо, подготовьте овощи: очистите и мелко нарежьте лук и морковь. На сковороде с маслом обжарьте лук до прозрачности, затем добавьте морковь и жарьте до золотистого оттенка. Добавьте томатную пасту и тушите 5 минут, пока не появится насыщенный аромат.',
        ingredients: [
          { ...INGREDIENTS.onion, count: 1 },
          { ...INGREDIENTS.carrot, count: 1 },
          { ...INGREDIENTS.tomatoPaste, count: 40 },
        ],
      },
      {
        img: '/static/steps/schi3.webp',
        video: null,
        description:
          'Готовое мясо выньте из бульона, нарежьте порционными кусочками и верните обратно. Добавьте нарезанный картофель и капусту. Варите 15 минут до мягкости овощей. Затем введите зажарку с томатной пастой, добавьте лавровый лист, перец горошком и немного соли. Варите ещё 10–15 минут на слабом огне, чтобы все вкусы соединились.',
        ingredients: [
          { ...INGREDIENTS.potato, count: 4 },
          { ...INGREDIENTS.cabbage, count: 0.5 },
          { ...INGREDIENTS.bayLeaf, count: 3 },
          { ...INGREDIENTS.blackPepper, count: 5 },
          { ...INGREDIENTS.salt, count: 1 },
        ],
      },
      {
        img: '/static/steps/schi4.webp',
        video: null,
        description:
          'Снимите щи с огня, накройте крышкой и дайте настояться 20–30 минут — это позволит раскрыться вкусу бульона и специям. Подавайте горячими, добавив ложку сметаны и посыпав свежей зеленью. Идеальное дополнение — ржаной хлеб или чесночные гренки.',
        ingredients: [{ ...INGREDIENTS.sourCream, count: 30 }],
      },
    ],

    tips: [
      'Для более насыщенного вкуса дайте щам настояться 1–2 часа перед подачей.',
      'Можно добавить немного кислой капусты для лёгкой кислинки и более старинного вкуса.',
      'Если используете молодую капусту — уменьшите время варки на 5–7 минут, чтобы сохранить хруст.',
    ],

    variations: [
      {
        name: 'Постные щи',
        changes:
          'Замените мясо на грибы и добавьте немного растительного масла для обжарки. Получится лёгкий и ароматный вариант для постных дней.',
      },
      {
        name: 'Щи со свининой',
        changes:
          'Вместо говядины используйте свиные рёбрышки — получится более жирный и насыщенный вариант, особенно хорош зимой.',
      },
    ],
  },
  {
    metaSeo: {
      title: 'Уха по-фински с лососем — сливочный суп Лохикейтто',
      description:
        'Нежная уха по-фински с лососем, картофелем, сливками и укропом. Сытный, ароматный и согревающий суп, как в северных странах.',
      keywords: [
        'уха по-фински',
        'лохикейтто',
        'суп с лососем',
        'финская кухня',
        'сливочный суп',
        'обед с рыбой',
        'рецепт ухи',
        'лососевый суп',
        'вкусный обед',
        'суп с картошкой',
        'финские блюда',
        'наваристая уха',
        'рецепт с укропом',
        'домашний суп',
        'уха в финском стиле',
        'сливки в супе',
        'рыбный суп',
        'обед за 40 минут',
        'простой рецепт',
        'ароматный суп',
      ],
      'og:title': 'Уха по-фински с лососем — сливочный суп Лохикейтто',
      'og:description': 'Финский сливочный суп с лососем, картофелем и укропом. Нежный, сытный и ароматный.',
      'og:url': 'https://food-paradise.ru/recipe/uha-po-finski',
      'og:image': '/static/recipes/dinner/uha-po-finski.jpeg',
      twitterTitle: 'Уха по-фински (Лохикейтто) — сливочный суп с лососем',
      twitterDescription: 'Финский сливочный суп с лососем и картофелем. Простой, вкусный и сытный обед.',
      twitterImage: '/static/recipes/dinner/uha-po-finski.jpeg',
      twitterUrl: 'https://food-paradise.ru/recipe/uha-po-finski',
      'twitter:card': 'summary_large_image',
      canonicalUrl: 'https://food-paradise.ru/recipe/uha-po-finski',
      robots: 'index, follow',
      viewport: 'width=device-width, initial-scale=1',
    },

    searchRequests: ['уха по-фински', 'лохикейтто', 'суп с лососем', 'финская кухня'],
    categories: [{ name: 'dinner' }, { name: 'soup' }, { name: 'finnish' }],
    key: 'uha-po-finski',
    name: 'uha-po-finski',
    img: '/static/recipes/dinner/uha-po-finski.jpeg',
    title: 'Уха по-фински (Лохикейтто)',

    description: `Уха по-фински, или Лохикейтто, — это мягкий сливочный суп с лососем, картофелем и свежим укропом, 
  в котором простота соединяется с изысканностью. Он обладает удивительно нежным вкусом: 
  сладость сливок и лёгкая солоноватость рыбы создают гармонию, которая будто переносит вас на побережье Балтийского моря. 
  Это идеальный обед для прохладных дней — сытный, ароматный и согревающий.`,

    historyDescription: `Лохикейтто (lohikeitto) — одно из самых популярных блюд Финляндии, где рыбу уважают и готовят круглый год. 
  Название буквально переводится как “рыбный суп из лосося”. 
  Первые упоминания о нём встречаются в старинных скандинавских кулинарных книгах, где сливки добавлялись, 
  чтобы сделать блюдо более питательным в суровую северную зиму. 
  Сегодня уха по-фински — неотъемлемая часть финской кухни, подаётся как в домашних трапезах, так и в ресторанах Хельсинки и Турку. 
  Её секрет — в балансе: немного сливок, немного рыбы, немного тепла и максимум уюта.`,

    calories: 320,
    preparation: 20,
    time: 40,
    level: 2,
    rating: 4.8,
    portions: 4,
    used: [10, 12],
    ingredients: [
      { ...INGREDIENTS.salmonFillet, count: 0.4 },
      { ...INGREDIENTS.potato, count: 4 },
      { ...INGREDIENTS.onion, count: 1 },
      { ...INGREDIENTS.carrot, count: 1 },
      { ...INGREDIENTS.cream20, count: 200 },
      { ...INGREDIENTS.butter, count: 20 },
      { ...INGREDIENTS.dill, count: 1 },
      { ...INGREDIENTS.bayLeaf, count: 1 },
      { ...INGREDIENTS.blackPepper, count: 5 },
      { ...INGREDIENTS.salt, count: 1 },
      { ...INGREDIENTS.water, count: 1500 },
    ],
    equipments: [
      { ...EQUIPMENTS.pot, count: 1 },
      { ...EQUIPMENTS.knife, count: 1 },
      { ...EQUIPMENTS.cutBoard, count: 1 },
      { ...EQUIPMENTS.woodenSpoon, count: 1 },
    ],

    cookingRecipe: [
      {
        img: null,
        video: null,
        description: `Очистите и нарежьте картофель, морковь и лук. В кастрюле растопите сливочное масло, 
      слегка обжарьте овощи 2–3 минуты, чтобы появился лёгкий аромат.`,
        ingredients: [
          { ...INGREDIENTS.potato, count: 4 },
          { ...INGREDIENTS.carrot, count: 1 },
          { ...INGREDIENTS.onion, count: 1 },
          { ...INGREDIENTS.butter, count: 20 },
        ],
      },
      {
        img: null,
        video: null,
        description: `Добавьте 1.5 литра воды, лавровый лист и перец горошком. Варите овощи 10–12 минут до полуготовности.`,
        ingredients: [
          { ...INGREDIENTS.water, count: 1500 },
          { ...INGREDIENTS.bayLeaf, count: 1 },
          { ...INGREDIENTS.blackPepper, count: 5 },
        ],
      },
      {
        img: null,
        video: null,
        description: `Нарежьте лосося кубиками, добавьте в суп и варите ещё 7–10 минут до мягкости рыбы.`,
        ingredients: [{ ...INGREDIENTS.salmonFillet, count: 0.4 }],
      },
      {
        img: null,
        video: null,
        description: `Влейте сливки, добавьте мелко нарезанный укроп и аккуратно прогрейте суп 2–3 минуты, не доводя до кипения. 
      Посолите по вкусу и дайте настояться 5 минут под крышкой.`,
        ingredients: [
          { ...INGREDIENTS.cream20, count: 200 },
          { ...INGREDIENTS.dill, count: 1 },
          { ...INGREDIENTS.salt, count: 1 },
        ],
      },
    ],

    tips: [
      'Не кипятите сливки — это может испортить текстуру и вкус супа.',
      'Для насыщенности можно заменить часть воды рыбным бульоном.',
      'Подавайте с ломтиком ржаного хлеба или хрустящими гренками.',
    ],

    variations: [
      {
        name: 'С копчёным лососем',
        changes: 'Замените часть свежего филе копчёным лососем для более яркого аромата.',
      },
      {
        name: 'Без сливок',
        changes:
          'Если хотите более лёгкий вариант, исключите сливки и добавьте немного масла — получится финская уха в классическом стиле.',
      },
    ],
  },
  {
    metaSeo: {
      title: 'Суп-пюре из тыквы — нежный обед за 30 минут',
      description:
        'Кремовый суп-пюре с запечённой тыквой, морковью и сливками. Согревающий, ароматный и очень простой рецепт на каждый день.',
      keywords: [
        'суп-пюре из тыквы',
        'тыквенный суп',
        'крем-суп',
        'обед за 30 минут',
        'рецепт с тыквой',
        'вегетарианский суп',
        'сливочный суп',
        'пп рецепт',
        'суп-пюре в блендере',
        'вкусно и полезно',
        'осенний суп',
        'рецепт с морковью',
        'домашний суп',
        'легкий обед',
        'простой рецепт',
        'суп с имбирем',
        'тыква со сливками',
        'быстрый обед',
        'ароматный суп',
        'здоровый обед',
      ],
      'og:title': 'Суп-пюре из тыквы — нежный обед за 30 минут',
      'og:description':
        'Кремовый суп-пюре с запечённой тыквой, морковью и сливками. Согревающий, полезный и очень простой.',
      'og:url': 'https://food-paradise.ru/recipe/sup-pyure-iz-tykvy',
      'og:image': '/static/recipes/dinner/sup-pyure-iz-tykvy.jpeg',
      twitterTitle: 'Суп-пюре из тыквы — нежный обед за 30 минут',
      twitterDescription: 'Кремовый суп-пюре с тыквой, морковью и сливками. Простой, ароматный и полезный рецепт.',
      twitterImage: '/static/recipes/dinner/sup-pyure-iz-tykvy.jpeg',
      twitterUrl: 'https://food-paradise.ru/recipe/sup-pyure-iz-tykvy',
      'twitter:card': 'summary_large_image',
      canonicalUrl: 'https://food-paradise.ru/recipe/sup-pyure-из-tykvy',
      robots: 'index, follow',
      viewport: 'width=device-width, initial-scale=1',
    },
    searchRequests: ['суп-пюре из тыквы', 'тыквенный суп', 'крем-суп', 'обед за 30 минут'],
    categories: [{ name: 'dinner' }, { name: 'soup' }, { name: 'vegetarian' }],
    key: 'sup-pyure-iz-tykvy',
    name: 'sup-pyure-iz-tykvy',
    img: '/static/recipes/dinner/sup-pyure-iz-tykvy.jpeg',
    title: 'Суп-пюре из тыквы',
    description: `Этот суп-пюре из тыквы — воплощение уюта в тарелке. 
  Мягкий, бархатистый и слегка сладковатый, он идеально согревает в холодное время года. 
  Сочетание запечённой тыквы, моркови, сливок и лёгкой пряности имбиря делает вкус ярким и многослойным. 
  Это блюдо не только вкусное, но и полезное — богато витаминами A и C, поддерживает иммунитет и улучшает настроение. 
  Подавайте с ржаными гренками, ложкой сливок и щепоткой тыквенных семечек — и у вас получится ресторанный результат за 30 минут.`,
    historyDescription: `Тыквенный суп-пюре — одно из самых популярных блюд осени. 
  Его родиной считают Францию, где крем-супы стали неотъемлемой частью изысканной кухни. 
  Однако в наши широты рецепт пришёл из северной Европы — там тыкву варили с овощами и растительным маслом, 
  создавая сытное, но лёгкое блюдо. Сегодня тыквенный суп готовят в десятках вариаций — со сливками, кокосовым молоком, сыром или орехами. 
  Главное в нём — естественная сладость тыквы и её нежная текстура.`,
    calories: 250,
    preparation: 15,
    time: 30,
    level: 1,
    rating: 4.6,
    portions: 4,
    used: [8, 9],
    ingredients: [
      { ...INGREDIENTS.pumpkin, count: 600 },
      { ...INGREDIENTS.carrot, count: 1 },
      { ...INGREDIENTS.onion, count: 1 },
      { ...INGREDIENTS.cream20, count: 200 },
      { ...INGREDIENTS.ginger, count: 10 },
      { ...INGREDIENTS.oliveOil, count: 1 },
      { ...INGREDIENTS.salt, count: 1 },
      { ...INGREDIENTS.blackPepper, count: 1 },
      { ...INGREDIENTS.water, count: 1000 },
      { ...INGREDIENTS.pumpkinSeeds, count: 20 },
    ],
    equipments: [
      { ...EQUIPMENTS.bakingTray, count: 1 },
      { ...EQUIPMENTS.pot, count: 1 },
      { ...EQUIPMENTS.blender, count: 1 },
      { ...EQUIPMENTS.knife, count: 1 },
      { ...EQUIPMENTS.cutBoard, count: 1 },
    ],
    cookingRecipe: [
      {
        img: null,
        video: null,
        description: `Разогрейте духовку до 200°C. Нарежьте тыкву и морковь кубиками, выложите на противень, 
      сбрызните оливковым маслом, посолите и запекайте 20 минут до мягкости.`,
        ingredients: [
          { ...INGREDIENTS.pumpkin, count: 600 },
          { ...INGREDIENTS.carrot, count: 1 },
          { ...INGREDIENTS.oliveOil, count: 1 },
        ],
      },
      {
        img: null,
        video: null,
        description: `В кастрюле обжарьте мелко нарезанные лук и тёртый имбирь на оставшемся масле 2–3 минуты. 
      Добавьте запечённые овощи, влейте воду и варите под крышкой 10 минут.`,
        ingredients: [
          { ...INGREDIENTS.onion, count: 1 },
          { ...INGREDIENTS.ginger, count: 10 },
          { ...INGREDIENTS.water, count: 1000 },
        ],
      },
      {
        img: null,
        video: null,
        description: `Измельчите суп блендером до однородной текстуры, верните на плиту, добавьте сливки, 
      приправьте солью и перцем и прогрейте 2 минуты, не доводя до кипения.`,
        ingredients: [
          { ...INGREDIENTS.cream20, count: 200 },
          { ...INGREDIENTS.salt, count: 1 },
          { ...INGREDIENTS.blackPepper, count: 1 },
        ],
      },
    ],
    tips: [
      'Добавьте щепотку мускатного ореха — он подчеркнёт сладость тыквы.',
      'Можно использовать кокосовое молоко вместо сливок для веганской версии.',
      'Перед подачей украсьте суп семечками, зеленью или каплей сливок.',
    ],
    variations: [
      {
        name: 'С кокосовым молоком',
        changes: 'Замените сливки на кокосовое молоко и добавьте немного карри — получится ароматная азиатская версия.',
      },
      {
        name: 'С сыром',
        changes: 'После измельчения добавьте 50 г тёртого сыра — суп станет гуще и насыщеннее.',
      },
    ],
  },
  {
    metaSeo: {
      title: 'Куриный бульон с лапшой — легкий обед при простуде',
      description:
        'Прозрачный домашний бульон с курицей, лапшой, морковью и зеленью. Лёгкий, ароматный и согревающий суп, который возвращает силы.',
      keywords: [
        'куриный бульон',
        'бульон с лапшой',
        'обед при простуде',
        'домашний бульон',
        'рецепт с курицей',
        'легкий суп',
        'бульон с овощами',
        'лапша в бульоне',
        'вкусный обед',
        'простой рецепт',
        'бульон как в детстве',
        'рецепт с морковью',
        'домашняя лапша',
        'здоровый обед',
        'бульон после болезни',
        'куриный суп',
        'быстрый обед',
        'ароматный бульон',
        'рецепт с зеленью',
        'комфортная еда',
      ],
      'og:title': 'Куриный бульон с лапшой — легкий обед при простуде',
      'og:description':
        'Прозрачный ароматный бульон с домашней лапшой, морковью и зеленью. Идеален для восстановления сил.',
      'og:url': 'https://food-paradise.ru/recipe/kurinyy-bulon-s-lapshoy',
      'og:image': '/static/recipes/dinner/kurinyy-bulon-s-lapshoy.jpeg',
      twitterTitle: 'Куриный бульон с лапшой — легкий обед при простуде',
      twitterDescription: 'Прозрачный бульон с лапшой, морковью и зеленью. Классический рецепт домашнего уюта.',
      twitterImage: '/static/recipes/dinner/kurinyy-bulon-s-lapshoy.jpeg',
      twitterUrl: 'https://food-paradise.ru/recipe/kurinyy-bulon-s-lapshoy',
      'twitter:card': 'summary_large_image',
      canonicalUrl: 'https://food-paradise.ru/recipe/kurinyy-bulon-s-lapshoy',
      robots: 'index, follow',
      viewport: 'width=device-width, initial-scale=1',
    },
    searchRequests: ['куриный бульон', 'бульон с лапшой', 'обед при простуде', 'домашний бульон'],
    categories: [{ name: 'dinner' }, { name: 'soup' }, { name: 'russian' }],
    key: 'kurinyy-bulon-s-lapshoy',
    name: 'kurinyy-bulon-s-lapshoy',
    img: '/static/recipes/dinner/kurinyy-bulon-s-lapshoy.jpeg',
    title: 'Куриный бульон с лапшой',
    description: `Классический куриный бульон с лапшой — это вкус детства и заботы. 
  Прозрачный, насыщенный ароматами курицы, моркови и лаврового листа, он согревает изнутри и возвращает силы после долгого дня. 
  Домашняя лапша делает суп особенно нежным, а свежий укроп добавляет лёгкость и аромат. 
  Это идеальный вариант для лёгкого обеда или ужина, особенно когда хочется чего-то простого, тёплого и по-домашнему вкусного.`,
    historyDescription: `История куриного бульона уходит корнями в самые древние времена. 
  Его варили в каждой культуре — от Франции до Китая, считая средством для восстановления после болезни. 
  В России куриный бульон с лапшой прочно вошёл в семейное меню: его готовили на выходных, когда дом наполнялся ароматом свежего укропа и кипящей курицы. 
  Такой суп символизирует домашний уют, заботу и простое счастье — тарелка горячего бульона, приготовленная с любовью.`,
    calories: 180,
    preparation: 15,
    time: 60,
    level: 1,
    rating: 4.5,
    portions: 4,
    used: [7, 8],
    ingredients: [
      { ...INGREDIENTS.chickenBreastFillet, count: 0.4 },
      { ...INGREDIENTS.carrot, count: 1 },
      { ...INGREDIENTS.onion, count: 1 },
      { ...INGREDIENTS.eggNoodles, count: 100 },
      { ...INGREDIENTS.dill, count: 1 },
      { ...INGREDIENTS.bayLeaf, count: 1 },
      { ...INGREDIENTS.blackPepper, count: 5 },
      { ...INGREDIENTS.salt, count: 1 },
      { ...INGREDIENTS.water, count: 2000 },
    ],
    equipments: [
      { ...EQUIPMENTS.pot, count: 1 },
      { ...EQUIPMENTS.knife, count: 1 },
      { ...EQUIPMENTS.cutBoard, count: 1 },
      { ...EQUIPMENTS.skimmer, count: 1 },
    ],
    cookingRecipe: [
      {
        img: null,
        video: null,
        description: `Куриную грудку промойте и залейте 2 литрами холодной воды. 
      Доведите до кипения, снимите пену, добавьте целые морковь, лук, лавровый лист и перец горошком. 
      Варите на слабом огне 40 минут, не допуская бурного кипения.`,
        ingredients: [
          { ...INGREDIENTS.water, count: 2000 },
          { ...INGREDIENTS.chickenBreastFillet, count: 0.4 },
          { ...INGREDIENTS.carrot, count: 1 },
          { ...INGREDIENTS.onion, count: 1 },
          { ...INGREDIENTS.bayLeaf, count: 1 },
          { ...INGREDIENTS.blackPepper, count: 5 },
        ],
      },
      {
        img: null,
        video: null,
        description: `Достаньте курицу и овощи, бульон аккуратно процедите через сито. 
      Верните его на огонь, добавьте лапшу и варите 5–7 минут до готовности.`,
        ingredients: [{ ...INGREDIENTS.eggNoodles, count: 100 }],
      },
      {
        img: null,
        video: null,
        description: `Курицу нарежьте кусочками, морковь — кружочками. 
      Разложите по тарелкам, залейте горячим бульоном с лапшой и посыпьте свежим укропом.`,
        ingredients: [{ ...INGREDIENTS.dill, count: 1 }],
      },
    ],
    tips: [
      'Для более насыщенного вкуса используйте куриные бёдра или целую тушку.',
      'Добавьте немного корня сельдерея или петрушки при варке — бульон станет ароматнее.',
      'Если хотите идеально прозрачный бульон, варите на минимальном огне и не допускайте кипения.',
    ],
    variations: [
      {
        name: 'С яйцом',
        changes: 'Добавьте в каждую тарелку по половинке варёного яйца — получится питательный вариант.',
      },
      {
        name: 'С домашней лапшой',
        changes: 'Приготовьте лапшу сами: смешайте яйцо, муку и щепотку соли, раскатайте и нарежьте тонкими полосками.',
      },
    ],
  },
]
