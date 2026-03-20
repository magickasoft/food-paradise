import { EQUIPMENTS } from '@/constants/equipments'
import { INGREDIENTS } from '@/constants/ingredients'

export const SALAT_MIMOSA = {
  metaSeo: {
    title: 'Салат Мимоза',
    description:
      'Салат «Мимоза» — классический слоёный салат советской кухни, который традиционно готовят к праздничному столу и особенно часто — к Новому году. Его нежная текстура, сочетание рыбы, яиц и майонеза, а также узнаваемый внешний вид с тёртым желтком сделали «Мимозу» одним из самых любимых салатов нескольких поколений.',
    keywords: [
      'салат мимоза',
      'мимоза салат',
      'салат мимоза классический',
      'мимоза рецепт',
      'салат мимоза с рыбными консервами',
      'новогодние салаты',
      'салаты на новый год',
    ],
    'og:title': 'Салат Мимоза',
    'og:description': 'Салат «Мимоза» — нежный слоёный салат с рыбой и яйцом.',
    'og:url': 'https://food-paradise.ru/recipe/salat-mimosa',
    'og:image': '/static/recipes/new-year/salat-mimosa.jpg',
    twitterTitle: 'Салат Мимоза',
    twitterDescription: 'Классический салат «Мимоза» — украшение праздничного стола.',
    twitterImage: '/static/recipes/new-year/salat-mimosa.jpg',
    twitterUrl: 'https://food-paradise.ru/recipe/salat-mimosa',
    'twitter:card': 'summary_large_image',
    canonicalUrl: 'https://food-paradise.ru/recipe/salat-mimosa',
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
    'салат мимоза',
    'мимоза салат',
    'салат мимоза классический',
    'мимоза рецепт',
    'салат мимоза пошагово',
    'салат мимоза с консервами',
    'салат мимоза с рыбными консервами',
    'салат мимоза с сайрой',
    'салат мимоза с горбушей',
    'салат мимоза с тунцом',
    'салат мимоза с сыром',
    'салат мимоза с картофелем',
    'салат мимоза с морковью',
    'салат мимоза без картофеля',
    'салат мимоза без моркови',
    'мимоза новогодний салат',
    'мимоза на новый год',
    'классические салаты',
    'праздничные салаты',
    'слоёные салаты',
    'советские салаты',
    'русская кухня салаты',
    'салат с рыбой',
    'рыбный салат',
    'салат с консервированной рыбой',
    'мимоза калорийность',
    'сколько калорий в мимозе',
    'мимоза на большую компанию',
  ],
  categories: [{ name: 'new-year' }, { name: 'salads' }],
  key: 'salat-mimosa',
  name: 'salat-mimosa',
  img: '/static/recipes/new-year/salat-mimosa.jpg',
  title: 'Салат Мимоза',
  description: 'Нежный слоёный салат с рыбными консервами, яйцом и майонезом.',

  calories: 310,
  preparation: 35,
  time: 25,
  level: 2,
  rating: 5,
  portions: 6,

  used: [12.1, 20.4, 18.7],

  ingredients: [
    {
      ...INGREDIENTS.cannedFish,
      count: 1,
      gauge: 'банка',
    },
    {
      ...INGREDIENTS.eggs,
      count: 4,
      gauge: 'шт.',
    },
    {
      ...INGREDIENTS.potato,
      count: 2,
      gauge: 'шт.',
    },
    {
      ...INGREDIENTS.carrot,
      count: 1,
      gauge: 'шт.',
    },
    {
      ...INGREDIENTS.hardCheese,
      count: 100,
      gauge: 'г',
    },
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
      description: 'Картофель и морковь отварите до готовности, остудите и очистите. Яйца отварите вкрутую.',
      ingredients: [
        {
          ...INGREDIENTS.potato,
          count: 2,
          gauge: 'шт.',
        },
        {
          ...INGREDIENTS.carrot,
          count: 1,
          gauge: 'шт.',
        },
        {
          ...INGREDIENTS.eggs,
          count: 4,
          gauge: 'шт.',
        },
      ],
    },
    {
      img: null,
      video: null,
      description: 'Рыбные консервы разомните вилкой, отделите белки от желтков, натрите их отдельно на мелкой тёрке.',
      ingredients: [
        {
          ...INGREDIENTS.cannedFish,
          count: 1,
          gauge: 'банка',
        },
      ],
    },
    {
      img: null,
      video: null,
      description:
        'Натрите картофель, морковь и сыр. Выложите салат слоями: рыба, картофель, белки, морковь, сыр. Каждый слой слегка смажьте майонезом.',
      ingredients: [
        {
          ...INGREDIENTS.hardCheese,
          count: 100,
          gauge: 'г',
        },
        {
          ...INGREDIENTS.mayonnaise,
          count: 180,
          gauge: 'г',
        },
      ],
    },
    {
      img: null,
      video: null,
      description: 'Сверху посыпьте салат тёртыми желтками, придавая характерный «мимозный» вид.',
      ingredients: [],
    },
  ],

  tips: [
    'Используйте качественные рыбные консервы в собственном соку или масле.',
    'Не делайте слои слишком толстыми — салат должен быть нежным.',
    'Майонез наносите тонкой сеткой для лёгкости.',
    'Дайте салату настояться в холодильнике 2–3 часа.',
    'Украсьте зеленью или желтком непосредственно перед подачей.',
  ],

  variations: [
    {
      name: 'Мимоза с тунцом',
      changes: 'Используйте консервированный тунец вместо сайры или горбуши.',
    },
    {
      name: 'Мимоза без картофеля',
      changes: 'Исключите картофель — салат получится легче.',
    },
    {
      name: 'Мимоза с луком',
      changes: 'Добавьте тонкий слой ошпаренного репчатого лука.',
    },
    {
      name: 'Лёгкая Мимоза',
      changes: 'Замените часть майонеза натуральным йогуртом.',
    },
  ],

  historyDescription:
    'Салат «Мимоза» появился в СССР во второй половине XX века и быстро стал популярным благодаря доступности ингредиентов и эффектному внешнему виду. Название салат получил из-за верхнего слоя тёртого желтка, напоминающего цветы мимозы. Сегодня «Мимоза» остаётся одним из самых узнаваемых праздничных салатов.',

  comments: ['Очень нежный и вкусный салат', 'Любимая классика с детства', 'Всегда готовим на праздники'],
}
