import { EQUIPMENTS } from '../equipments'
import { INGREDIENTS } from '../ingredients'

export const HOMEMADE_ALCOHOL = [
  {
    metaSeo: {
      title: 'Лимончелло на водке — домашняя лимонная настойка | Рецепт с фото',
      description:
        'Домашний лимончелло на водке — мягкий лимонный ликёр с ярким ароматом и солнечным вкусом. Без спирта и без лишней химии, готовится за 10 дней.',
      keywords: [
        'лимончелло на водке',
        'лимончелло рецепт',
        'лимонная настойка',
        'настойка на лимоне',
        'домашний ликёр',
        'итальянский лимончелло',
        'лимонная водка',
        'цитрусовый ликёр',
      ],
      'og:title': 'Лимончелло на водке — домашняя лимонная настойка | Пошаговый рецепт с фото',
      'og:description':
        'Простой рецепт лимончелло без спирта — только лимоны, водка, сахар и вода. Мягкий, ароматный и натуральный ликёр для дома.',
      'og:url': 'https://food-paradise.ru/recipe/lemoncello-vodka',
      'og:image': '/static/recipes/homemadeAlcohol/lemoncello-vodka.jpeg',
      twitterTitle: 'Домашний лимончелло на водке — пошаговый рецепт с фото',
      twitterDescription:
        'Лимончелло без спирта — нежный и ароматный напиток, который легко приготовить дома. Настоящее итальянское солнце в бутылке!',
      twitterImage: '/static/recipes/homemadeAlcohol/lemoncello-vodka.jpeg',
      twitterUrl: 'https://food-paradise.ru/recipe/lemoncello-vodka',
      'twitter:card': 'summary_large_image',
      canonicalUrl: 'https://food-paradise.ru/recipe/lemoncello-vodka',
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
      'лимончелло на водке',
      'настойка на лимоне рецепт',
      'домашний лимончелло без спирта',
      'лимонный ликёр',
      'как сделать лимончелло дома',
      'лимончелло своими руками',
    ],
    categories: [{ name: 'homemade-alcohol' }, { name: 'drinks' }],
    key: 'lemoncello-vodka',
    name: 'lemoncello-vodka',
    img: '/static/recipes/homemadeAlcohol/lemoncello-vodka.jpeg',
    title: 'Настойка на лимоне (лимончелло на водке)',
    description:
      'Лимончелло на водке — адаптированный вариант знаменитого итальянского ликёра. Напиток получается мягким, с ярким лимонным ароматом и сбалансированной сладостью. Идеален в качестве дижестива или подарка ручной работы.',
    warning: 'Чрезмерное употребление алкоголя вредит вашему здоровью!',
    calories: 240,
    preparation: 15,
    time: 14400,
    level: 1,
    rating: 4.8,
    portions: 25,
    used: [4.2, 2.7, 6.5],
    ingredients: [
      { ...INGREDIENTS.lemon, count: 6, gauge: 'шт.' },
      { ...INGREDIENTS.vodka, count: 700, gauge: 'мл' },
      { ...INGREDIENTS.water, count: 300, gauge: 'мл' },
      { ...INGREDIENTS.sugar, count: 250, gauge: 'г' },
    ],
    equipments: [EQUIPMENTS.jar, EQUIPMENTS.knife, EQUIPMENTS.sieve, EQUIPMENTS.pot, EQUIPMENTS.bottle],
    historyDescription:
      'Легендарный ликёр лимончелло родом из солнечного побережья Амальфи. Его традиционно готовят из лимонов сорта Сорренто, но в домашних условиях прекрасно получается и с обычными цитрусами. На водке напиток выходит чуть мягче, чем на спирту, но не менее ароматный и освежающий.',
    cookingRecipe: [
      {
        img: null,
        video: null,
        description: 'Снимите цедру с лимонов тонкой стружкой, не задевая белую часть, чтобы избежать горечи.',
        ingredients: [{ ...INGREDIENTS.lemon, count: 6, gauge: 'шт.' }],
      },
      {
        img: null,
        video: null,
        description:
          'Положите цедру в стеклянную банку, залейте водкой, закройте крышкой и оставьте на 7–10 дней в тёмном месте. Ежедневно встряхивайте банку.',
        ingredients: [{ ...INGREDIENTS.vodka, count: 700, gauge: 'мл' }],
      },
      {
        img: null,
        video: null,
        description:
          'Сварите сироп: смешайте воду и сахар, доведите до кипения и остудите. Смешайте сироп с лимонным настоем, перемешайте.',
        ingredients: [
          { ...INGREDIENTS.water, count: 300, gauge: 'мл' },
          { ...INGREDIENTS.sugar, count: 250, gauge: 'г' },
        ],
      },
      {
        img: null,
        video: null,
        description:
          'Процедите настойку через сито или марлю, разлейте по бутылкам и дайте настояться в холодильнике 2–3 дня перед подачей.',
        ingredients: [],
      },
    ],
    serving:
      'Подавайте лимончелло охлаждённым до 5–7°C в маленьких рюмках или бокалах. Отлично подходит как дижестив после ужина или в составе десертов и коктейлей.',
    tips: [
      'Используйте лимоны с толстой кожурой — в них больше эфирных масел.',
      'Если хотите мягкий вкус — добавьте немного ванильного сахара в сироп.',
      'Храните настойку в холодильнике до 6 месяцев.',
    ],
    variations: [
      {
        name: 'Медовый лимончелло',
        changes: 'Замените часть сахара (100 г) мёдом — получится более мягкий и ароматный вариант.',
      },
      {
        name: 'Имбирно-лимонный ликёр',
        changes: 'Добавьте небольшой кусочек свежего имбиря на этапе настаивания для лёгкой пряности.',
      },
    ],
    comments: [
      'Готовила на водке — вкус мягкий, аромат шикарный! Теперь делаю только так.',
      'Стоял 9 дней, потом процедила и остудила — очень нежный и освежающий напиток!',
    ],
  },
  {
    metaSeo: {
      title: 'Настойка на клюкве на водке — рецепт домашней клюквовки',
      description:
        'Домашняя клюквовая настойка на водке — насыщенная, слегка кислая и ароматная. Идеальный зимний напиток, готовится просто и быстро.',
      keywords: [
        'клюквовка',
        'настойка на клюкве',
        'клюква на водке',
        'домашняя настойка',
        'ягодная настойка',
        'домашний алкоголь',
      ],
      'og:title': 'Настойка на клюкве — классическая домашняя клюквовка на водке',
      'og:description':
        'Простой рецепт клюквовой настойки на водке: только ягоды, сахар и терпение. Насыщенный вкус и яркий цвет без химии.',
      'og:url': 'https://food-paradise.ru/recipe/cranberry-vodka',
      'og:image': '/static/recipes/homemadeAlcohol/cranberry-vodka.jpeg',
      twitterTitle: 'Домашняя клюквовка на водке — яркий вкус зимы',
      twitterDescription: 'Кисло-сладкая настойка на клюкве — яркая классика домашнего бара.',
      twitterImage: '/static/recipes/homemadeAlcohol/cranberry-vodka.jpeg',
      twitterUrl: 'https://food-paradise.ru/recipe/cranberry-vodka',
      'twitter:card': 'summary_large_image',
      canonicalUrl: 'https://food-paradise.ru/recipe/cranberry-vodka',
      robots: 'index, follow',
      googlebot: 'index, follow',
      yandex: 'index, follow',
      author: 'food-paradise',
      'theme-color': '#ffffff',
    },
    categories: [{ name: 'homemade-alcohol' }, { name: 'drinks' }],
    key: 'cranberry-vodka',
    name: 'cranberry-vodka',
    img: '/static/recipes/homemadeAlcohol/cranberry-vodka.jpeg',
    title: 'Настойка на клюкве (клюквовка на водке)',
    description:
      'Клюквовка на водке — один из самых популярных домашних напитков. Яркий цвет, свежая кислинка и лёгкая сладость делают её идеальной для зимних застолий.',
    warning: 'Чрезмерное употребление алкоголя вредит вашему здоровью!',
    calories: 180,
    preparation: 15,
    time: 20160,
    level: 1,
    used: [],
    rating: 4.9,
    portions: 20,
    ingredients: [
      { ...INGREDIENTS.cranberry, count: 400, gauge: 'г' },
      { ...INGREDIENTS.sugar, count: 200, gauge: 'г' },
      { ...INGREDIENTS.vodka, count: 700, gauge: 'мл' },
    ],
    equipments: [EQUIPMENTS.jar, EQUIPMENTS.sieve, EQUIPMENTS.bottle],

    historyDescription:
      'Клюквовка — старинная русская настойка, которую готовили ещё в XIX веке. Клюква придаёт напитку насыщенный рубиновый цвет и приятную кислинку, а водка смягчает вкус и раскрывает аромат.',
    cookingRecipe: [
      {
        img: null,
        description: 'Промойте клюкву, слегка разомните её ложкой или толкушкой, чтобы выделился сок.',
        ingredients: [{ ...INGREDIENTS.cranberry, count: 400, gauge: 'г' }],
      },
      {
        img: null,
        description: 'Переложите ягоды в банку, добавьте сахар и залейте водкой. Перемешайте и закройте крышкой.',
        ingredients: [
          { ...INGREDIENTS.sugar, count: 200, gauge: 'г' },
          { ...INGREDIENTS.vodka, count: 700, gauge: 'мл' },
        ],
      },
      {
        img: null,
        description: 'Оставьте в тёмном месте на 2–3 недели, ежедневно встряхивая банку.',
        ingredients: [],
      },
      {
        img: null,
        description:
          'Процедите настойку через сито, разлейте по бутылкам и дайте настояться ещё 3–4 дня в холодильнике.',
        ingredients: [],
      },
    ],
    serving: 'Подавайте охлаждённой в рюмках. Отлично сочетается с мясными блюдами, дичью или как дижестив после еды.',
    tips: [
      'Можно добавить немного мёда для мягкости вкуса.',
      'Используйте только спелую клюкву — недозрелая придаёт горечь.',
      'Храните настойку в холодильнике до года.',
    ],
    variations: [
      { name: 'Клюквовка с апельсином', changes: 'Добавьте цедру одного апельсина на этапе настаивания.' },
      { name: 'Пряная клюквовка', changes: 'Положите немного корицы и гвоздики для зимнего аромата.' },
    ],
    comments: [
      'Настойка получилась шикарная, цвет как рубин! Стояла 3 недели.',
      'Делала с мёдом вместо сахара — мягкая и ароматная, просто чудо!',
    ],
  },
  {
    metaSeo: {
      title: 'Хреновуха — классическая настойка на хрене на водке',
      description:
        'Настоящая хреновуха — крепкая, жгучая и ароматная настойка на водке. Простой рецепт для любителей русских традиций.',
      keywords: ['хреновуха', 'настойка на хрене', 'домашняя настойка', 'водка с хреном', 'русская настойка'],
      'og:title': 'Хреновуха — классическая настойка на хрене',
      'og:description': 'Домашняя хреновуха на водке — бодрящий напиток с ярким вкусом и согревающим эффектом.',
      'og:url': 'https://food-paradise.ru/recipe/hrenovukha',
      'og:image': '/static/recipes/homemadeAlcohol/hrenovukha-vodka.jpeg',
      twitterTitle: 'Хреновуха — домашняя настойка на водке',
      twitterDescription: 'Русская классика — простая и мощная хреновуха, как делали наши предки.',
      twitterImage: '/static/recipes/homemadeAlcohol/hrenovukha-vodka.jpeg',
      twitterUrl: 'https://food-paradise.ru/recipe/hrenovukha',
      'twitter:card': 'summary_large_image',
      canonicalUrl: 'https://food-paradise.ru/recipe/hrenovukha',
      robots: 'index, follow',
      author: 'food-paradise',
    },
    categories: [{ name: 'homemade-alcohol' }, { name: 'drinks' }],
    key: 'hrenovukha',
    name: 'hrenovukha',
    img: '/static/recipes/homemadeAlcohol/hrenovukha-vodka.jpeg',
    title: 'Настойка на хрене (хреновуха)',
    description:
      'Хреновуха — легендарная русская настойка с характером. Острая, ароматная и бодрящая, она согреет в холод и придаст сил.',
    warning: 'Чрезмерное употребление алкоголя вредит вашему здоровью!',
    calories: 210,
    preparation: 10,
    time: 5040,
    level: 1,
    used: [],
    rating: 4.7,
    portions: 15,
    ingredients: [
      { ...INGREDIENTS.horseradishRoot, count: 40, gauge: 'г' },
      { ...INGREDIENTS.honey, count: 1, gauge: 'ст. л.' },
      { ...INGREDIENTS.vodka, count: 500, gauge: 'мл' },
    ],
    equipments: [EQUIPMENTS.jar, EQUIPMENTS.grater, EQUIPMENTS.sieve, EQUIPMENTS.bottle],
    historyDescription:
      'Хреновуха известна на Руси с XVI века. Её готовили к зимним праздникам и охотничьим застольям — считалось, что она укрепляет дух и тело.',
    cookingRecipe: [
      {
        img: null,
        video: null,
        description: 'Очистите корень хрена и натрите на мелкой тёрке.',
        ingredients: [{ ...INGREDIENTS.horseradishRoot, count: 40, gauge: 'г' }],
      },
      {
        img: null,
        video: null,
        description: 'Положите хрен в банку, добавьте мёд и залейте водкой. Перемешайте.',
        ingredients: [
          { ...INGREDIENTS.honey, count: 1, gauge: 'ст. л.' },
          { ...INGREDIENTS.vodka, count: 500, gauge: 'мл' },
        ],
      },
      {
        img: null,
        video: null,
        description: 'Накройте крышкой и оставьте в тёмном месте на 3–5 дней. Встряхивайте ежедневно.',
        ingredients: [],
      },
      {
        img: null,
        video: null,
        description: 'Процедите, разлейте по бутылкам и охладите. Перед подачей дайте настояться ещё сутки.',
        ingredients: [],
      },
    ],
    serving: 'Подавайте сильно охлаждённой, из стопок. Идеально подходит к соленьям, мясу и холодцу.',
    tips: [
      'Не передержите хрен — больше 5 дней даст горечь.',
      'Можно добавить немного чеснока или перца для пикантности.',
      'Если хотите мягче — увеличьте количество мёда.',
    ],
    variations: [
      { name: 'Хреновуха с лимоном', changes: 'Добавьте немного лимонной цедры для свежести.' },
      { name: 'Острая хреновуха', changes: 'Положите щепотку красного перца вместе с хреном.' },
    ],
    comments: [
      'Супер! Жжёт как надо, но мягкая. Настоящая мужская настойка.',
      'Делала с ложкой мёда — вкус сбалансированный, без лишней резкости.',
    ],
  },
  {
    metaSeo: {
      title: 'Вишнёвка — настойка на вишне на водке',
      description:
        'Домашняя вишнёвка на водке — сладкая, ароматная настойка с насыщенным вкусом и цветом. Отличный десертный напиток.',
      keywords: ['вишнёвка', 'настойка на вишне', 'вишня на водке', 'домашняя настойка', 'вишневая водка'],
      'og:title': 'Вишнёвка — классическая настойка на вишне',
      'og:description': 'Простой рецепт ароматной вишнёвки на водке — идеальный домашний ликёр для праздничного стола.',
      'og:url': 'https://food-paradise.ru/recipe/cherry-vodka',
      'og:image': '/static/recipes/homemadeAlcohol/cherry-vodka.jpeg',
      twitterTitle: 'Домашняя вишнёвка — настойка на вишне на водке',
      twitterDescription:
        'Насыщенная, сладкая и красивая вишнёвка — традиционный русский ликёр, который легко приготовить дома.',
      twitterImage: '/static/recipes/homemadeAlcohol/cherry-vodka.jpeg',
      twitterUrl: 'https://food-paradise.ru/recipe/cherry-vodka',
      'twitter:card': 'summary_large_image',
      canonicalUrl: 'https://food-paradise.ru/recipe/cherry-vodka',
      robots: 'index, follow',
      author: 'food-paradise',
    },
    categories: [{ name: 'homemade-alcohol' }, { name: 'drinks' }],
    key: 'cherry-vodka',
    name: 'cherry-vodka',
    img: '/static/recipes/homemadeAlcohol/cherry-vodka.jpeg',
    title: 'Настойка на вишне (вишнёвка на водке)',
    description:
      'Вишнёвка — мягкий, сладковатый напиток с насыщенным ароматом спелой вишни. Легко готовится и идеально подходит для праздничного стола.',
    warning: 'Чрезмерное употребление алкоголя вредит вашему здоровью!',
    calories: 200,
    preparation: 20,
    time: 10080,
    level: 1,
    used: [],
    rating: 4.9,
    portions: 25,
    ingredients: [
      { ...INGREDIENTS.cherry, count: 500, gauge: 'г' },
      { ...INGREDIENTS.sugar, count: 250, gauge: 'г' },
      { ...INGREDIENTS.vodka, count: 700, gauge: 'мл' },
    ],
    equipments: [EQUIPMENTS.jar, EQUIPMENTS.sieve, EQUIPMENTS.bottle],
    historyDescription:
      'Вишнёвку делали ещё в купеческих домах — считалось, что вишня символизирует достаток и тепло. Её вкус — баланс сладости и терпкости, который невозможно спутать ни с чем.',
    cookingRecipe: [
      {
        img: null,
        description: 'Промойте вишню и удалите косточки.',
        ingredients: [{ ...INGREDIENTS.cherry, count: 500, gauge: 'г' }],
      },
      {
        img: null,
        description: 'Переложите ягоды в банку, засыпьте сахаром и залейте водкой.',
        ingredients: [
          { ...INGREDIENTS.sugar, count: 250, gauge: 'г' },
          { ...INGREDIENTS.vodka, count: 700, gauge: 'мл' },
        ],
      },
      {
        img: null,
        description:
          'Накройте крышкой и оставьте в тёмном месте на 3–4 недели. Раз в несколько дней встряхивайте банку.',
        ingredients: [],
      },
      {
        img: null,
        description: 'Процедите настойку, разлейте по бутылкам и дайте постоять ещё 5–7 дней перед подачей.',
        ingredients: [],
      },
    ],
    serving: 'Подавайте охлаждённой. Вишнёвка отлично подходит к десертам, сырам и лёгким закускам.',
    tips: [
      'Не выбрасывайте вишни после процеживания — их можно добавить в десерт или выпечку.',
      'Для аромата добавьте немного ванили или корицы.',
      'Храните настойку в тёмном прохладном месте до года.',
    ],
    variations: [
      { name: 'Вишнёвка с коньяком', changes: 'Замените часть водки (100 мл) коньяком для более глубокого вкуса.' },
      { name: 'Пряная вишнёвка', changes: 'Добавьте палочку корицы и пару гвоздик.' },
    ],
    comments: [
      'Делала на свежей вишне — получилось шикарно, аромат как у ликёра!',
      'Стояла месяц, вкус просто божественный. Не терпится повторить!',
    ],
  },
]
