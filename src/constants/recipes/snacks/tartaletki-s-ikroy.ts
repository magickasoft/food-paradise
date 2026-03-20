import { EQUIPMENTS } from '@/constants/equipments'
import { INGREDIENTS } from '@/constants/ingredients'

export const TARTALETKI_S_IKROY = {
  metaSeo: {
    title: 'Тарталетки с икрой',
    description:
      'Тарталетки с икрой — изысканная и при этом простая закуска, которая неизменно ассоциируется с праздниками и Новым годом. Хрустящая основа, нежный сливочный вкус и солоноватая икра создают идеальный баланс. Такое блюдо выглядит эффектно на столе и готовится всего за несколько минут.',
    keywords: [
      'тарталетки с икрой',
      'тарталетки с красной икрой',
      'закуска с икрой',
      'новогодние тарталетки',
      'тарталетки на праздничный стол',
      'икра в тарталетках',
      'закуски с икрой',
    ],
    'og:title': 'Тарталетки с икрой',
    'og:description': 'Классические тарталетки с икрой — быстрая и эффектная закуска.',
    'og:url': 'https://food-paradise.ru/recipe/tartaletki-s-ikroy',
    'og:image': '/static/recipes/new-year/tartaletki-s-ikroy.jpeg',
    twitterTitle: 'Тарталетки с икрой',
    twitterDescription: 'Праздничные тарталетки с красной икрой.',
    twitterImage: '/static/recipes/new-year/tartaletki-s-ikroy.jpeg',
    twitterUrl: 'https://food-paradise.ru/recipe/tartaletki-s-ikroy',
    'twitter:card': 'summary_large_image',
    canonicalUrl: 'https://food-paradise.ru/recipe/tartaletki-s-ikroy',
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
    'тарталетки с икрой',
    'тарталетки с красной икрой',
    'икра в тарталетках',
    'закуски с икрой',
    'новогодние тарталетки',
    'тарталетки на новый год',
    'тарталетки на праздничный стол',
    'быстрые закуски с икрой',
    'тарталетки со сливочным сыром и икрой',
    'тарталетки с икрой рецепт',
    'тарталетки с икрой фото',
    'тарталетки с икрой и маслом',
    'тарталетки с икрой и сыром',
    'праздничные закуски',
    'холодные закуски на праздник',
    'икра красная закуска',
    'что приготовить с икрой',
    'икра на новый год',
  ],
  categories: [{ name: 'new-year' }],
  key: 'tartaletki-s-ikroy',
  name: 'tartaletki-s-ikroy',
  img: '/static/recipes/new-year/tartaletki-s-ikroy.jpeg',
  title: 'Тарталетки с икрой',
  description: 'Праздничные тарталетки с красной икрой и нежной сливочной основой.',

  calories: 210,
  preparation: 10,
  time: 10,
  level: 1,
  rating: 5,
  portions: 6,
  used: [6.5, 9.8, 18.4],
  ingredients: [
    {
      ...INGREDIENTS.tartlets,
      count: 12,
      gauge: 'шт.',
    },
    {
      ...INGREDIENTS.redCaviar,
      count: 80,
      gauge: 'г',
    },
    {
      ...INGREDIENTS.creamCheese,
      count: 120,
      gauge: 'г',
    },
    {
      ...INGREDIENTS.butter,
      count: 30,
      gauge: 'г',
    },
    {
      ...INGREDIENTS.dill,
      count: ' ',
      gauge: 'по вкусу',
    },
  ],

  equipments: [EQUIPMENTS.bowl, EQUIPMENTS.spatula, EQUIPMENTS.knife, EQUIPMENTS.plate],

  cookingRecipe: [
    {
      img: null,
      video: null,
      description:
        'Подготовьте все ингредиенты. Сливочное масло заранее достаньте из холодильника, чтобы оно стало мягким.',
      ingredients: [
        {
          ...INGREDIENTS.butter,
          count: 30,
          gauge: 'г',
        },
      ],
    },
    {
      img: null,
      video: null,
      description: 'В миске смешайте сливочный сыр с мягким сливочным маслом до однородной кремовой консистенции.',
      ingredients: [
        {
          ...INGREDIENTS.creamCheese,
          count: 120,
          gauge: 'г',
        },
        {
          ...INGREDIENTS.butter,
          count: 30,
          gauge: 'г',
        },
      ],
    },
    {
      img: null,
      video: null,
      description: 'Наполните тарталетки получившейся сырной массой, аккуратно разравнивая поверхность.',
      ingredients: [
        {
          ...INGREDIENTS.tartlets,
          count: 12,
          gauge: 'шт.',
        },
      ],
    },
    {
      img: null,
      video: null,
      description: 'Сверху выложите красную икру. Украсьте мелко нарезанным укропом.',
      ingredients: [
        {
          ...INGREDIENTS.redCaviar,
          count: 80,
          gauge: 'г',
        },
        {
          ...INGREDIENTS.dill,
          count: ' ',
          gauge: 'по вкусу',
        },
      ],
    },
    {
      img: null,
      video: null,
      description: 'Подавайте тарталетки сразу после приготовления, чтобы основа оставалась хрустящей.',
      ingredients: [],
    },
  ],
  tips: [
    'Наполняйте тарталетки непосредственно перед подачей — так они не размокнут.',
    'Можно использовать только сливочное масло без сыра для классического вкуса.',
    'Для более нежного вкуса добавьте несколько капель лимонного сока.',
    'Используйте охлаждённую икру — так вкус будет ярче.',
    'Украсьте микрозеленью или долькой лимона для эффектной подачи.',
  ],
  variations: [
    {
      name: 'Тарталетки с икрой и сливочным маслом',
      changes: 'Используйте только мягкое сливочное масло без сыра.',
    },
    {
      name: 'Тарталетки с икрой и творожным сыром',
      changes: 'Замените сливочный сыр на творожный.',
    },
    {
      name: 'Тарталетки с икрой и авокадо',
      changes: 'Добавьте слой пюре из спелого авокадо.',
    },
    {
      name: 'Тарталетки с чёрной икрой',
      changes: 'Используйте чёрную икру для более изысканного варианта.',
    },
  ],
  historyDescription:
    'Тарталетки появились во французской кухне как миниатюрные закусочные корзинки. Со временем они стали популярны по всей Европе. В сочетании с икрой тарталетки приобрели статус праздничного блюда, особенно популярного на новогоднем и торжественном столе в России.',
  comments: ['Очень красиво смотрятся на столе', 'Гости разобрали первыми', 'Быстро и невероятно вкусно'],
}
