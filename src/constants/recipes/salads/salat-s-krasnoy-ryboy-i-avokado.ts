import { EQUIPMENTS } from '@/constants/equipments'
import { INGREDIENTS } from '@/constants/ingredients'

export const SALAT_S_KRASNOY_RYBOY_I_AVOKADO = {
  metaSeo: {
    title: 'Салат с красной рыбой и авокадо',
    description:
      'Салат с красной рыбой и авокадо — современный праздничный салат с нежным, сбалансированным вкусом. Слабосолёный лосось или сёмга прекрасно сочетаются с кремовой текстурой авокадо, свежестью огурца и лёгкой заправкой. Этот салат часто подают на Новый год, романтические ужины и фуршеты, ценя его за элегантность и пользу.',
    keywords: [
      'салат с красной рыбой',
      'салат с авокадо и рыбой',
      'салат с лососем и авокадо',
      'салат с семгой и авокадо',
      'салат с красной рыбой праздничный',
      'салат с рыбой и авокадо',
      'новогодние салаты',
      'праздничные салаты',
    ],
    'og:title': 'Салат с красной рыбой и авокадо',
    'og:description': 'Праздничный салат с красной рыбой и спелым авокадо.',
    'og:url': 'https://food-paradise.ru/recipe/salat-s-krasnoy-ryboy-i-avokado',
    'og:image': '/static/recipes/new-year/salat-s-krasnoy-ryboy-i-avokado.jpeg',
    twitterTitle: 'Салат с красной рыбой и авокадо',
    twitterDescription: 'Нежный и изысканный салат с лососем и авокадо.',
    twitterImage: '/static/recipes/new-year/salat-s-krasnoy-ryboy-i-avokado.jpeg',
    twitterUrl: 'https://food-paradise.ru/recipe/salat-s-krasnoy-ryboy-i-avokado',
    'twitter:card': 'summary_large_image',
    canonicalUrl: 'https://food-paradise.ru/recipe/salat-s-krasnoy-ryboy-i-avokado',
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
    'салат с красной рыбой',
    'салат с лососем и авокадо',
    'салат с семгой и авокадо',
    'салат с рыбой и авокадо',
    'салат с авокадо праздничный',
    'салат с красной рыбой новый год',
    'новогодний салат с лососем',
    'праздничный салат с рыбой',
    'салат с слабосоленой семгой',
    'салат с рыбой и огурцом',
    'салат с красной рыбой и сыром',
    'салат с рыбой слоями',
    'вкусный салат с красной рыбой',
    'легкий салат с рыбой',
    'салат с авокадо рецепт',
    'салаты с авокадо и рыбой',
    'рыбный салат праздничный',
    'салат с рыбой и яйцом',
    'салат с рыбой и лимонным соком',
    'салат с лососем простой',
    'салат с красной рыбой фото',
  ],
  categories: [{ name: 'new-year' }],
  key: 'salat-s-krasnoy-ryboy-i-avokado',
  name: 'salat-s-krasnoy-ryboy-i-avokado',
  img: '/static/recipes/new-year/salat-s-krasnoy-ryboy-i-avokado.jpeg',
  title: 'Салат с красной рыбой и авокадо',
  description: 'Нежный праздничный салат с красной рыбой, авокадо и свежими овощами.',
  calories: 285,
  preparation: 15,
  time: 20,
  level: 2,
  rating: 5,
  portions: 4,
  used: [14.8, 22.1, 9.6],
  ingredients: [
    {
      ...INGREDIENTS.salmonSalted,
      count: 300,
      gauge: 'г',
    },
    {
      ...INGREDIENTS.avocado,
      count: 2,
      gauge: 'шт.',
    },
    {
      ...INGREDIENTS.cucumber,
      count: 1,
      gauge: 'шт.',
    },
    {
      ...INGREDIENTS.eggs,
      count: 3,
      gauge: 'шт.',
    },
    {
      ...INGREDIENTS.mayonnaise,
      count: 120,
      gauge: 'г',
    },
    {
      ...INGREDIENTS.lemonJuice,
      count: 1,
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

  equipments: [EQUIPMENTS.knife, EQUIPMENTS.cutBoard, EQUIPMENTS.bowl, EQUIPMENTS.pot, EQUIPMENTS.plate],

  cookingRecipe: [
    {
      img: null,
      video: null,
      description: 'Яйца отварите вкрутую, остудите, очистите и нарежьте небольшими кубиками.',
      ingredients: [
        {
          ...INGREDIENTS.eggs,
          count: 3,
          gauge: 'шт.',
        },
      ],
    },
    {
      img: null,
      video: null,
      description: 'Красную рыбу нарежьте аккуратными кубиками или тонкими ломтиками.',
      ingredients: [
        {
          ...INGREDIENTS.salmonSalted,
          count: 300,
          gauge: 'г',
        },
      ],
    },
    {
      img: null,
      video: null,
      description:
        'Авокадо очистите, удалите косточку и нарежьте кубиками. Сбрызните лимонным соком, чтобы мякоть не потемнела.',
      ingredients: [
        {
          ...INGREDIENTS.avocado,
          count: 2,
          gauge: 'шт.',
        },
        {
          ...INGREDIENTS.lemonJuice,
          count: 1,
          gauge: 'ст.л.',
        },
      ],
    },
    {
      img: null,
      video: null,
      description: 'Огурец нарежьте кубиками. При необходимости удалите семена.',
      ingredients: [
        {
          ...INGREDIENTS.cucumber,
          count: 1,
          gauge: 'шт.',
        },
      ],
    },
    {
      img: null,
      video: null,
      description: 'Смешайте все ингредиенты в миске, добавьте майонез, соль и чёрный перец. Аккуратно перемешайте.',
      ingredients: [
        {
          ...INGREDIENTS.mayonnaise,
          count: 120,
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
    'Выбирайте спелый авокадо — он должен быть мягким, но не водянистым.',
    'Нарезайте рыбу острым ножом, чтобы кусочки были аккуратными.',
    'Майонез можно заменить соусом из йогурта и горчицы.',
    'Добавляйте лимонный сок умеренно, чтобы он не перебил вкус рыбы.',
    'Подавайте салат охлаждённым — так он вкуснее.',
  ],

  variations: [
    {
      name: 'Слоёный салат с красной рыбой',
      changes: 'Выкладывайте ингредиенты слоями, промазывая каждый слой соусом.',
    },
    {
      name: 'Салат с красной рыбой и сыром',
      changes: 'Добавьте тёртый сливочный или творожный сыр.',
    },
    {
      name: 'Лёгкий салат с лососем',
      changes: 'Используйте соус из греческого йогурта, лимонного сока и оливкового масла.',
    },
    {
      name: 'Салат с красной рыбой и рукколой',
      changes: 'Добавьте свежую рукколу для пикантной горчинки.',
    },
  ],

  historyDescription:
    'Салаты с красной рыбой и авокадо пришли в русскую кухню под влиянием европейских и скандинавских традиций. Авокадо долгое время считался экзотическим продуктом, поэтому такие салаты стали символом современного праздничного стола и гастрономического изобилия.',

  comments: ['Очень нежный и свежий салат', 'Идеально смотрится на праздничном столе', 'Готовлю каждый Новый год'],
}
