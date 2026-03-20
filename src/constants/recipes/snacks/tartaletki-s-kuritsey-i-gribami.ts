import { EQUIPMENTS } from '@/constants/equipments'
import { INGREDIENTS } from '@/constants/ingredients'

export const TARTALETKI_S_KURITSEY_I_GRIBAMI = {
  metaSeo: {
    title: 'Тарталетки с курицей и грибами',
    description:
      'Тарталетки с курицей и грибами — сытная и ароматная закуска для праздничного стола. Нежное куриное филе, обжаренные грибы и сливочный соус идеально сочетаются с хрустящей основой тарталеток. Блюдо готовится просто, выглядит аппетитно и отлично подходит для Нового года.',
    keywords: [
      'тарталетки с курицей и грибами',
      'тарталетки с курицей',
      'тарталетки с грибами',
      'начинка для тарталеток',
      'тарталетки на праздничный стол',
      'новогодние тарталетки',
      'закуски с курицей',
    ],
    'og:title': 'Тарталетки с курицей и грибами',
    'og:description': 'Праздничные тарталетки с курицей и грибами в сливочном соусе.',
    'og:url': 'https://food-paradise.ru/recipe/tartaletki-s-kuritsey-i-gribami',
    'og:image': '/static/recipes/new-year/tartaletki-s-kuritsey-i-gribami.jpeg',
    twitterTitle: 'Тарталетки с курицей и грибами',
    twitterDescription: 'Сытные тарталетки с курицей и грибами для праздничного стола.',
    twitterImage: '/static/recipes/new-year/tartaletki-s-kuritsey-i-gribami.jpeg',
    twitterUrl: 'https://food-paradise.ru/recipe/tartaletki-s-kuritsey-i-gribami',
    'twitter:card': 'summary_large_image',
    canonicalUrl: 'https://food-paradise.ru/recipe/tartaletki-s-kuritsey-i-gribami',
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
    'тарталетки с курицей и грибами',
    'тарталетки с курицей',
    'тарталетки с грибами',
    'начинка для тарталеток с курицей',
    'тарталетки на новый год',
    'тарталетки на праздничный стол',
    'закуски с курицей и грибами',
    'тарталетки с курицей и шампиньонами',
    'тарталетки с курицей и грибами рецепт',
    'тарталетки с курицей и грибами фото',
    'начинка для тарталеток простая',
    'горячие тарталетки',
    'холодные закуски на праздник',
    'что приготовить в тарталетках',
    'тарталетки со сливочным соусом',
  ],
  categories: [{ name: 'new-year' }],
  key: 'tartaletki-s-kuritsey-i-gribami',
  name: 'tartaletki-s-kuritsey-i-gribami',
  img: '/static/recipes/new-year/tartaletki-s-kuritsey-i-gribami.jpeg',
  title: 'Тарталетки с курицей и грибами',
  description: 'Сытные тарталетки с курицей и грибами в нежном сливочном соусе.',

  calories: 235,
  preparation: 20,
  time: 25,
  level: 2,
  rating: 5,
  portions: 6,

  used: [14.8, 12.3, 16.1],

  ingredients: [
    {
      ...INGREDIENTS.tartlets,
      count: 12,
      gauge: 'шт.',
    },
    {
      ...INGREDIENTS.chickenBreastFillet,
      count: 300,
      gauge: 'г',
    },
    {
      ...INGREDIENTS.mushrooms,
      count: 200,
      gauge: 'г',
    },
    {
      ...INGREDIENTS.onion,
      count: 1,
      gauge: 'шт.',
    },
    {
      ...INGREDIENTS.cream20,
      count: 100,
      gauge: 'мл',
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
    {
      ...INGREDIENTS.hardCheese,
      count: 50,
      gauge: 'г',
    },
  ],

  equipments: [
    EQUIPMENTS.pan,
    EQUIPMENTS.knife,
    EQUIPMENTS.cutBoard,
    EQUIPMENTS.bowl,
    EQUIPMENTS.spatula,
    EQUIPMENTS.plate,
  ],

  cookingRecipe: [
    {
      img: null,
      video: null,
      description: 'Куриное филе нарежьте мелкими кубиками. Лук очистите и мелко нарежьте. Грибы нарежьте пластинками.',
      ingredients: [
        {
          ...INGREDIENTS.chickenBreastFillet,
          count: 300,
          gauge: 'г',
        },
        {
          ...INGREDIENTS.onion,
          count: 1,
          gauge: 'шт.',
        },
        {
          ...INGREDIENTS.mushrooms,
          count: 200,
          gauge: 'г',
        },
      ],
    },
    {
      img: null,
      video: null,
      description:
        'На сковороде разогрейте растительное масло. Обжарьте лук до прозрачности, затем добавьте курицу и готовьте 5–7 минут.',
      ingredients: [
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
      description: 'Добавьте грибы, посолите и поперчите. Обжаривайте до испарения жидкости.',
      ingredients: [
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
    {
      img: null,
      video: null,
      description: 'Влейте сливки, перемешайте и прогрейте начинку 3–5 минут до лёгкого загустения.',
      ingredients: [
        {
          ...INGREDIENTS.cream20,
          count: 100,
          gauge: 'мл',
        },
      ],
    },
    {
      img: null,
      video: null,
      description: 'Наполните тарталетки горячей начинкой. По желанию посыпьте тёртым сыром.',
      ingredients: [
        {
          ...INGREDIENTS.tartlets,
          count: 12,
          gauge: 'шт.',
        },
        {
          ...INGREDIENTS.hardCheese,
          count: 50,
          gauge: 'г',
        },
      ],
    },
    {
      img: null,
      video: null,
      description: 'Подавайте тарталетки тёплыми или полностью остывшими.',
      ingredients: [],
    },
  ],
  tips: [
    'Для более насыщенного вкуса используйте смесь шампиньонов и лесных грибов.',
    'Если начинка получилась жидкой, прогрейте её дольше без крышки.',
    'Сыр добавляйте перед подачей или слегка запеките тарталетки в духовке.',
    'Можно заменить сливки сметаной 20%.',
    'Начинку удобно готовить заранее.',
  ],
  variations: [
    {
      name: 'Тарталетки с курицей, грибами и сыром',
      changes: 'Запеките тарталетки 5–7 минут в духовке до расплавления сыра.',
    },
    {
      name: 'Тарталетки с курицей и лесными грибами',
      changes: 'Используйте белые грибы или лисички.',
    },
    {
      name: 'Тарталетки с курицей и сметаной',
      changes: 'Замените сливки густой сметаной.',
    },
    {
      name: 'Острые тарталетки',
      changes: 'Добавьте щепотку чили или паприки.',
    },
  ],
  historyDescription:
    'Тарталетки с мясной начинкой получили широкое распространение в европейской кухне как удобная порционная закуска. В России вариант с курицей и грибами стал особенно популярным благодаря доступности ингредиентов и сытности блюда, идеально подходящего для праздничного стола.',
  comments: ['Очень сытно и вкусно', 'Гости съели моментально', 'Отличная начинка для тарталеток'],
}
