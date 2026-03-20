import { EQUIPMENTS } from '@/constants/equipments'
import { INGREDIENTS } from '@/constants/ingredients'

export const SALAT_OBZHORKA = {
  metaSeo: {
    title: 'Салат Обжорка',
    description:
      'Салат «Обжорка» — сытный и насыщенный салат с мясом, обжаренными овощами и майонезом, который особенно популярен на праздничном столе. Благодаря простым ингредиентам и яркому вкусу он стал настоящей классикой домашней кухни и часто готовится к Новому году, юбилеям и семейным застольям.',
    keywords: [
      'салат обжорка',
      'обжорка салат',
      'салат обжорка классический',
      'обжорка рецепт',
      'салат обжорка с курицей',
      'салат обжорка с мясом',
      'праздничные салаты',
      'салаты на новый год',
    ],
    'og:title': 'Салат Обжорка',
    'og:description': 'Сытный салат «Обжорка» с мясом и жареными овощами.',
    'og:url': 'https://food-paradise.ru/recipe/salat-obzhorka',
    'og:image': '/static/recipes/new-year/salat-obzhorka.jpeg',
    twitterTitle: 'Салат Обжорка',
    twitterDescription: 'Классический салат «Обжорка» — сытно и по-домашнему.',
    twitterImage: '/static/recipes/new-year/salat-obzhorka.jpeg',
    twitterUrl: 'https://food-paradise.ru/recipe/salat-obzhorka',
    'twitter:card': 'summary_large_image',
    canonicalUrl: 'https://food-paradise.ru/recipe/salat-obzhorka',
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
    'салат обжорка',
    'обжорка салат',
    'салат обжорка классический',
    'обжорка рецепт',
    'салат обжорка с курицей',
    'салат обжорка с говядиной',
    'салат обжорка с мясом',
    'салат обжорка с жареной морковью',
    'салат обжорка с луком',
    'салат обжорка с солеными огурцами',
    'салат обжорка пошаговый',
    'вкусный салат обжорка',
    'сытный салат с мясом',
    'салат с жареными овощами',
    'праздничный салат с мясом',
    'новогодний салат обжорка',
    'салат обжорка на новый год',
    'салат обжорка простой',
    'домашние салаты',
    'советские салаты',
    'салат с курицей и морковью',
    'салат с жареным луком',
    'салаты с майонезом',
    'салаты на праздник',
    'салаты на новый год рецепты',
  ],

  categories: [{ name: 'new-year' }],
  key: 'salat-obzhorka',
  name: 'salat-obzhorka',
  img: '/static/recipes/new-year/salat-obzhorka.jpeg',
  title: 'Салат Обжорка',
  description: 'Сытный салат с курицей, жареной морковью и луком под майонезом.',

  calories: 345,
  preparation: 35,
  time: 25,
  level: 2,
  rating: 5,
  portions: 6,

  used: [15.8, 21.6, 18.9],

  ingredients: [
    {
      ...INGREDIENTS.chickenBreastFillet,
      count: 400,
      gauge: 'г',
    },
    {
      ...INGREDIENTS.carrot,
      count: 2,
      gauge: 'шт.',
    },
    {
      ...INGREDIENTS.onion,
      count: 2,
      gauge: 'шт.',
    },
    {
      ...INGREDIENTS.pickledCucumbers,
      count: 3,
      gauge: 'шт.',
    },
    {
      ...INGREDIENTS.mayonnaise,
      count: 200,
      gauge: 'г',
    },
    {
      ...INGREDIENTS.refinedVegetableOil,
      count: 3,
      gauge: 'ст.л.',
    },
    {
      ...INGREDIENTS.salt,
      count: ' ',
      gauge: 'по вкусу',
    },
    {
      ...INGREDIENTS.groundBlackPepper,
      count: ' ',
      gauge: 'по вкусу',
    },
  ],

  equipments: [
    EQUIPMENTS.pan,
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
      description: 'Куриное филе отварите в подсоленной воде до готовности, остудите и нарежьте соломкой.',
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
      description:
        'Лук нарежьте полукольцами, морковь натрите на крупной тёрке. Обжарьте овощи на растительном масле до мягкости и золотистого цвета.',
      ingredients: [
        {
          ...INGREDIENTS.carrot,
          count: 2,
          gauge: 'шт.',
        },
        {
          ...INGREDIENTS.onion,
          count: 2,
          gauge: 'шт.',
        },
        {
          ...INGREDIENTS.refinedVegetableOil,
          count: 3,
          gauge: 'ст.л.',
        },
      ],
    },
    {
      img: null,
      video: null,
      description: 'Солёные огурцы нарежьте соломкой, при необходимости слегка отожмите лишний рассол.',
      ingredients: [
        {
          ...INGREDIENTS.pickledCucumbers,
          count: 3,
          gauge: 'шт.',
        },
      ],
    },
    {
      img: null,
      video: null,
      description:
        'Соедините курицу, обжаренные овощи и огурцы. Добавьте майонез, соль и перец, тщательно перемешайте.',
      ingredients: [
        {
          ...INGREDIENTS.mayonnaise,
          count: 200,
          gauge: 'г',
        },
        {
          ...INGREDIENTS.salt,
          count: ' ',
          gauge: 'по вкусу',
        },
        {
          ...INGREDIENTS.groundBlackPepper,
          count: ' ',
          gauge: 'по вкусу',
        },
      ],
    },
  ],

  tips: [
    'Дайте обжаренным овощам полностью остыть перед смешиванием.',
    'Не пережаривайте лук — он должен быть мягким и сладковатым.',
    'Огурцы обязательно отжимайте, чтобы салат не потёк.',
    'Для более насыщенного вкуса используйте домашний майонез.',
    'Салат становится вкуснее после настаивания 1–2 часа в холодильнике.',
  ],

  variations: [
    {
      name: 'Обжорка с говядиной',
      changes: 'Замените курицу отварной говядиной, нарезанной соломкой.',
    },
    {
      name: 'Обжорка с грибами',
      changes: 'Добавьте обжаренные шампиньоны вместе с овощами.',
    },
    {
      name: 'Обжорка без огурцов',
      changes: 'Исключите солёные огурцы для более мягкого вкуса.',
    },
    {
      name: 'Лёгкая Обжорка',
      changes: 'Используйте йогуртово-майонезную заправку 50/50.',
    },
  ],

  historyDescription:
    'Салат «Обжорка» появился в домашней кухне в конце советского периода и быстро стал популярным благодаря своей сытности и простоте. Его готовили из доступных продуктов, часто используя остатки мяса. Название отражает характер салата — плотный, насыщенный и очень домашний.',

  comments: ['Очень сытный и вкусный салат', 'Настоящая классика домашних праздников', 'Гости всегда просят добавку'],
}
