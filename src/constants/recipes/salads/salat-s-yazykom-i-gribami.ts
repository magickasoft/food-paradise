import { EQUIPMENTS } from '@/constants/equipments'
import { INGREDIENTS } from '@/constants/ingredients'

export const SALAT_S_YAZYKOM_I_GRIBAMI = {
  metaSeo: {
    title: 'Салат с языком и грибами',
    description:
      'Салат с языком и грибами — изысканный и сытный праздничный салат, который часто готовят к Новому году и большим семейным торжествам. Нежный отварной язык, обжаренные грибы и сочный лук в сочетании с майонезной заправкой создают гармоничный и благородный вкус. Этот салат нередко называют «праздничным деликатесом» домашней кухни.',
    keywords: [
      'салат с языком',
      'салат с языком и грибами',
      'салат с говяжьим языком',
      'салат с языком праздничный',
      'салат с языком классический',
      'салат с языком и шампиньонами',
      'салаты на новый год',
      'праздничные салаты',
    ],
    'og:title': 'Салат с языком и грибами',
    'og:description': 'Праздничный салат с отварным языком и обжаренными грибами.',
    'og:url': 'https://food-paradise.ru/recipe/salat-s-yazykom-i-gribami',
    'og:image': '/static/recipes/new-year/salat-s-yazykom-i-gribami.jpeg',
    twitterTitle: 'Салат с языком и грибами',
    twitterDescription: 'Изысканный салат с языком и грибами для праздничного стола.',
    twitterImage: '/static/recipes/new-year/salat-s-yazykom-i-gribami.jpeg',
    twitterUrl: 'https://food-paradise.ru/recipe/salat-s-yazykom-i-gribami',
    'twitter:card': 'summary_large_image',
    canonicalUrl: 'https://food-paradise.ru/recipe/salat-s-yazykom-i-gribami',
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
    'салат с языком',
    'салат с языком и грибами',
    'салат с говяжьим языком',
    'салат с языком праздничный',
    'салат с языком классический',
    'салат с языком и шампиньонами',
    'салат с языком и луком',
    'салат с языком и майонезом',
    'салат с языком пошагово',
    'вкусный салат с языком',
    'салат с отварным языком',
    'праздничный салат с языком',
    'новогодний салат с языком',
    'салат с языком на новый год',
    'салат с языком и солеными огурцами',
    'салат с языком и маринованными грибами',
    'салат с языком и свежими грибами',
    'салат с мясом и грибами',
    'салаты с мясом праздничные',
    'деликатесные салаты',
    'салаты на праздник',
    'салаты на новый год рецепты',
    'салат с говяжьим языком и грибами',
  ],
  categories: [{ name: 'new-year' }, { name: 'salads' }],
  key: 'salat-s-yazykom-i-gribami',
  name: 'salat-s-yazykom-i-gribami',
  img: '/static/recipes/new-year/salat-s-yazykom-i-gribami.jpeg',
  title: 'Салат с языком и грибами',
  description: 'Праздничный салат с нежным говяжьим языком и обжаренными грибами.',
  calories: 320,
  preparation: 120,
  time: 25,
  level: 3,
  rating: 5,
  portions: 6,

  used: [16.9, 20.8, 17.4],

  ingredients: [
    {
      ...INGREDIENTS.beefTongue,
      count: 600,
      gauge: 'г',
    },
    {
      ...INGREDIENTS.champignons,
      count: 300,
      gauge: 'г',
    },
    {
      ...INGREDIENTS.onion,
      count: 1,
      gauge: 'шт.',
    },
    {
      ...INGREDIENTS.pickledCucumbers,
      count: 2,
      gauge: 'шт.',
    },
    {
      ...INGREDIENTS.mayonnaise,
      count: 180,
      gauge: 'г',
    },
    {
      ...INGREDIENTS.refinedVegetableOil,
      count: 2,
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
    EQUIPMENTS.pot,
    EQUIPMENTS.pan,
    EQUIPMENTS.knife,
    EQUIPMENTS.cutBoard,
    EQUIPMENTS.bowl,
    EQUIPMENTS.plate,
  ],

  cookingRecipe: [
    {
      img: null,
      video: null,
      description:
        'Говяжий язык тщательно промойте и отварите в подсоленной воде до мягкости (1,5–2 часа). Горячим снимите кожу, остудите и нарежьте тонкой соломкой.',
      ingredients: [
        {
          ...INGREDIENTS.beefTongue,
          count: 600,
          gauge: 'г',
        },
      ],
    },
    {
      img: null,
      video: null,
      description:
        'Шампиньоны нарежьте пластинками, лук — полукольцами. Обжарьте на растительном масле до испарения жидкости и лёгкой золотистости.',
      ingredients: [
        {
          ...INGREDIENTS.champignons,
          count: 300,
          gauge: 'г',
        },
        {
          ...INGREDIENTS.onion,
          count: 1,
          gauge: 'шт.',
        },
        {
          ...INGREDIENTS.refinedVegetableOil,
          count: 2,
          gauge: 'ст.л.',
        },
      ],
    },
    {
      img: null,
      video: null,
      description: 'Солёные огурцы нарежьте тонкой соломкой, при необходимости слегка отожмите рассол.',
      ingredients: [
        {
          ...INGREDIENTS.pickledCucumbers,
          count: 2,
          gauge: 'шт.',
        },
      ],
    },
    {
      img: null,
      video: null,
      description:
        'Смешайте язык, грибы с луком и огурцы. Добавьте майонез, соль и чёрный перец по вкусу, аккуратно перемешайте.',
      ingredients: [
        {
          ...INGREDIENTS.mayonnaise,
          count: 180,
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
    'Чтобы язык был мягким, варите его на слабом кипении.',
    'Снимайте кожу с языка сразу после варки — так она удаляется легче.',
    'Грибы обжаривайте до полного испарения влаги.',
    'Огурцы не должны доминировать — нарезайте их тонко.',
    'Дайте салату настояться 1–2 часа в холодильнике перед подачей.',
  ],

  variations: [
    {
      name: 'Салат с языком и маринованными грибами',
      changes: 'Замените жареные шампиньоны маринованными грибами.',
    },
    {
      name: 'Салат с языком и свежим огурцом',
      changes: 'Используйте свежий огурец вместо солёного для более лёгкого вкуса.',
    },
    {
      name: 'Салат с языком и сыром',
      changes: 'Добавьте тёртый твёрдый сыр для сливочной нотки.',
    },
    {
      name: 'Лёгкий салат с языком',
      changes: 'Используйте соус на основе йогурта и горчицы вместо майонеза.',
    },
  ],

  historyDescription:
    'Салаты с языком традиционно считались праздничными и деликатесными блюдами. В советской и постсоветской кухне говяжий язык часто использовали для особых случаев, сочетая его с грибами, соленьями и майонезом. Такой салат стал символом достатка и торжественного стола.',

  comments: ['Очень благородный вкус', 'Идеально для праздничного стола', 'Гости были в восторге'],
}
