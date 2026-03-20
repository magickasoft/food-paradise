import { EQUIPMENTS } from '@/constants/equipments'
import { INGREDIENTS } from '@/constants/ingredients'

export const SALAT_S_KURITSEY_I_ANANASAMI = {
  metaSeo: {
    title: 'Салат с курицей и ананасами',
    description:
      'Салат с курицей и ананасами — популярный праздничный салат с нежным вкусом и ярким контрастом сладких ананасов и сочной курицы. Его часто готовят на Новый год, дни рождения и семейные торжества. Благодаря простым ингредиентам и эффектному вкусу салат давно стал современной классикой праздничного стола.',
    keywords: [
      'салат с ананасами',
      'салат с курицей и ананасами',
      'салат ананас курица',
      'салат с ананасами и сыром',
      'праздничные салаты',
      'салаты на новый год',
      'новогодний салат с курицей',
    ],
    'og:title': 'Салат с курицей и ананасами',
    'og:description': 'Праздничный салат с курицей, ананасами и сыром — нежный и яркий вкус.',
    'og:url': 'https://food-paradise.ru/recipe/salat-s-kuritsey-i-ananasami',
    'og:image': '/static/recipes/new-year/salat-s-kuritsey-i-ananasami.jpeg',
    twitterTitle: 'Салат с курицей и ананасами',
    twitterDescription: 'Нежный салат с курицей, ананасами и сыром для праздничного стола.',
    twitterImage: '/static/recipes/new-year/salat-s-kuritsey-i-ananasami.jpeg',
    twitterUrl: 'https://food-paradise.ru/recipe/salat-s-kuritsey-i-ananasami',
    'twitter:card': 'summary_large_image',
    canonicalUrl: 'https://food-paradise.ru/recipe/salat-s-kuritsey-i-ananasami',
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
    'салат с ананасами',
    'салат с курицей и ананасами',
    'салат ананас курица',
    'салат с ананасами и сыром',
    'салат с ананасами классический',
    'салат с ананасами и майонезом',
    'салат с ананасами и куриной грудкой',
    'салат с ананасами и чесноком',
    'салат с ананасами и яйцом',
    'салат с ананасами и грибами',
    'салат с ананасами слоеный',
    'праздничный салат с ананасами',
    'новогодний салат с ананасами',
    'салат с ананасами на новый год',
    'салат с ананасами простой',
    'вкусный салат с ананасами',
    'салат курица ананас сыр',
    'салат курица ананас яйцо',
    'салат курица ананас грибы',
    'салат с консервированными ананасами',
    'ананасовый салат',
    'сладкий салат с курицей',
    'праздничные салаты',
    'салаты на праздник',
    'салаты на новый год рецепты',
    'салат с курицей праздничный',
    'салат с курицей и сыром',
  ],

  categories: [{ name: 'new-year' }],
  key: 'salat-s-kuritsey-i-ananasami',
  name: 'salat-s-kuritsey-i-ananasami',
  img: '/static/recipes/new-year/salat-s-kuritsey-i-ananasami.jpeg',
  title: 'Салат с курицей и ананасами',
  description: 'Нежный праздничный салат с курицей, ананасами и сыром.',

  calories: 295,
  preparation: 30,
  time: 20,
  level: 2,
  rating: 5,
  portions: 6,

  used: [14.6, 19.8, 16.2],

  ingredients: [
    {
      ...INGREDIENTS.chickenBreastFillet,
      count: 400,
      gauge: 'г',
    },
    {
      ...INGREDIENTS.cannedPineapple,
      count: 300,
      gauge: 'г',
    },
    {
      ...INGREDIENTS.hardCheese,
      count: 150,
      gauge: 'г',
    },
    {
      ...INGREDIENTS.eggs,
      count: 3,
      gauge: 'шт.',
    },
    {
      ...INGREDIENTS.mayonnaise,
      count: 180,
      gauge: 'г',
    },
    {
      ...INGREDIENTS.garlic,
      count: 1,
      gauge: 'зубчик',
    },
    {
      ...INGREDIENTS.salt,
      count: ' ',
      gauge: 'по вкусу',
    },
  ],

  equipments: [
    EQUIPMENTS.pot,
    EQUIPMENTS.knife,
    EQUIPMENTS.cutBoard,
    EQUIPMENTS.grater,
    EQUIPMENTS.bowl,
    EQUIPMENTS.plate,
  ],

  cookingRecipe: [
    {
      img: null,
      video: null,
      description: 'Куриное филе отварите в подсоленной воде до готовности, остудите и нарежьте небольшими кубиками.',
      ingredients: [
        {
          ...INGREDIENTS.chickenBreastFillet,
          count: 400,
          gauge: 'г',
        },
      ],
    },
    {
      img: null,
      video: null,
      description: 'Яйца отварите вкрутую, остудите и натрите на крупной тёрке. Сыр также натрите.',
      ingredients: [
        {
          ...INGREDIENTS.eggs,
          count: 3,
          gauge: 'шт.',
        },
        {
          ...INGREDIENTS.hardCheese,
          count: 150,
          gauge: 'г',
        },
      ],
    },
    {
      img: null,
      video: null,
      description: 'Ананасы откиньте на сито, дайте стечь сиропу и нарежьте небольшими кусочками.',
      ingredients: [
        {
          ...INGREDIENTS.cannedPineapple,
          count: 300,
          gauge: 'г',
        },
      ],
    },
    {
      img: null,
      video: null,
      description: 'Смешайте курицу, яйца, ананасы и сыр. Добавьте майонез и мелко натёртый чеснок, посолите по вкусу.',
      ingredients: [
        {
          ...INGREDIENTS.mayonnaise,
          count: 180,
          gauge: 'г',
        },
        {
          ...INGREDIENTS.garlic,
          count: 1,
          gauge: 'зубчик',
        },
        {
          ...INGREDIENTS.salt,
          count: ' ',
          gauge: 'по вкусу',
        },
      ],
    },
  ],

  tips: [
    'Хорошо отжимайте ананасы от сиропа, чтобы салат не был водянистым.',
    'Используйте куриную грудку без кожи — салат будет нежнее.',
    'Чеснок добавляйте умеренно, он должен лишь подчеркнуть вкус.',
    'Для более лёгкого варианта замените часть майонеза йогуртом.',
    'Дайте салату настояться в холодильнике 1–2 часа перед подачей.',
  ],

  variations: [
    {
      name: 'Салат с ананасами и грибами',
      changes: 'Добавьте обжаренные шампиньоны для более насыщенного вкуса.',
    },
    {
      name: 'Слоёный салат с ананасами',
      changes: 'Выложите ингредиенты слоями, промазывая майонезом.',
    },
    {
      name: 'Салат с ананасами и орехами',
      changes: 'Добавьте рубленые грецкие орехи для текстуры.',
    },
    {
      name: 'Лёгкий салат с ананасами',
      changes: 'Используйте йогуртовую заправку вместо майонеза.',
    },
  ],

  historyDescription:
    'Салаты с ананасами получили популярность в России в 1990–2000-х годах, когда консервированные фрукты стали доступнее. Сочетание сладких ананасов и куриного мяса быстро стало праздничным хитом, а салат прочно закрепился в меню новогодних и семейных застолий.',

  comments: ['Очень нежный и вкусный салат', 'Гости всегда просят рецепт', 'Идеально подходит для праздников'],
}
