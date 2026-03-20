import { EQUIPMENTS } from '@/constants/equipments'
import { INGREDIENTS } from '@/constants/ingredients'

export const SELODKA_POD_SHUBOY = {
  metaSeo: {
    title: 'Селёдка под шубой',
    description:
      'Селёдка под шубой — культовый салат русской кухни и неизменный символ новогоднего стола. Слои солёной сельди, отварных овощей и майонеза создают насыщенный и гармоничный вкус, знакомый каждому с детства. Этот салат ценят за сытность, яркий внешний вид и праздничное настроение, которое он приносит.',
    keywords: [
      'селёдка под шубой',
      'салат селедка под шубой',
      'шуба салат',
      'селедка под шубой классический',
      'селедка под шубой рецепт',
      'новогодние салаты',
      'салаты на новый год',
    ],
    'og:title': 'Селёдка под шубой',
    'og:description': 'Селёдка под шубой — классический слоёный салат для праздничного стола.',
    'og:url': 'https://food-paradise.ru/recipe/selodka-pod-shuboy',
    'og:image': '/static/recipes/new-year/selodka-pod-shuboy.jpeg',
    twitterTitle: 'Селёдка под шубой',
    twitterDescription: 'Классическая селёдка под шубой — символ новогоднего стола.',
    twitterImage: '/static/recipes/new-year/selodka-pod-shuboy.jpeg',
    twitterUrl: 'https://food-paradise.ru/recipe/selodka-pod-shuboy',
    'twitter:card': 'summary_large_image',
    canonicalUrl: 'https://food-paradise.ru/recipe/selodka-pod-shuboy',
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
    'селёдка под шубой',
    'селедка под шубой',
    'салат селёдка под шубой',
    'шуба салат',
    'селедка под шубой классический',
    'селедка под шубой рецепт',
    'селедка под шубой пошагово',
    'селедка под шубой слоями',
    'селедка под шубой с яйцом',
    'селедка под шубой без яиц',
    'селедка под шубой без лука',
    'селедка под шубой с яблоком',
    'селедка под шубой новогодний',
    'селедка под шубой на новый год',
    'классические салаты',
    'праздничные салаты',
    'салаты на новый год',
    'слоеные салаты',
    'салат с селедкой',
    'селедка соленая салат',
    'селедка под шубой калорийность',
    'селедка под шубой сколько калорий',
    'селедка под шубой на большую компанию',
    'селедка под шубой домашняя',
    'советские салаты',
    'русская кухня салаты',
  ],

  categories: [{ name: 'new-year' }],
  key: 'selodka-pod-shuboy',
  name: 'selodka-pod-shuboy',
  img: '/static/recipes/new-year/selodka-pod-shuboy.jpeg',
  title: 'Селёдка под шубой',
  description: 'Слоёный салат из солёной сельди, овощей и майонеза — классика праздничного стола.',

  calories: 320,
  preparation: 40,
  time: 30,
  level: 2,
  rating: 5,
  portions: 6,

  used: [11.4, 22.8, 19.6],

  ingredients: [
    {
      ...INGREDIENTS.herringFillet,
      count: 300,
      gauge: 'г',
    },
    {
      ...INGREDIENTS.potato,
      count: 3,
      gauge: 'шт.',
    },
    {
      ...INGREDIENTS.carrot,
      count: 2,
      gauge: 'шт.',
    },
    {
      ...INGREDIENTS.beet,
      count: 2,
      gauge: 'шт.',
    },
    {
      ...INGREDIENTS.onion,
      count: 1,
      gauge: 'шт.',
    },
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
      description: 'Картофель, морковь и свёклу отварите до готовности, остудите и очистите.',
      ingredients: [
        {
          ...INGREDIENTS.potato,
          count: 3,
          gauge: 'шт.',
        },
        {
          ...INGREDIENTS.carrot,
          count: 2,
          gauge: 'шт.',
        },
        {
          ...INGREDIENTS.beet,
          count: 2,
          gauge: 'шт.',
        },
      ],
    },
    {
      img: null,
      video: null,
      description: 'Сельдь нарежьте мелкими кубиками. Лук очистите и измельчите.',
      ingredients: [
        {
          ...INGREDIENTS.herringFillet,
          count: 300,
          gauge: 'г',
        },
        {
          ...INGREDIENTS.onion,
          count: 1,
          gauge: 'шт.',
        },
      ],
    },
    {
      img: null,
      video: null,
      description: 'Натрите картофель, морковь и свёклу на крупной тёрке.',
      ingredients: [],
    },
    {
      img: null,
      video: null,
      description:
        'Выложите салат слоями: сельдь, лук, картофель, морковь, свёкла. Каждый слой слегка смажьте майонезом.',
      ingredients: [
        {
          ...INGREDIENTS.mayonnaise,
          count: 200,
          gauge: 'г',
        },
      ],
    },
  ],

  tips: [
    'Используйте слабосолёную сельдь — вкус будет более сбалансированным.',
    'Лук можно ошпарить кипятком, чтобы убрать лишнюю горечь.',
    'Не утрамбовывайте слои слишком сильно — салат должен быть воздушным.',
    'Дайте салату настояться в холодильнике минимум 2 часа.',
    'Для ровных слоёв используйте кулинарное кольцо.',
  ],

  variations: [
    {
      name: 'Шуба с яйцом',
      changes: 'Добавьте слой тёртых варёных яиц между картофелем и морковью.',
    },
    {
      name: 'Шуба с яблоком',
      changes: 'Добавьте слой кисло-сладкого яблока для свежей нотки.',
    },
    {
      name: 'Лёгкая шуба',
      changes: 'Замените часть майонеза сметаной или йогуртом.',
    },
    {
      name: 'Шуба без лука',
      changes: 'Исключите лук для более мягкого вкуса.',
    },
  ],

  historyDescription:
    'Салат «Селёдка под шубой» появился в начале XX века и стал символом праздничного застолья в Советском Союзе. Считается, что он был создан как доступное и сытное блюдо из простых ингредиентов. Со временем шуба стала обязательным атрибутом новогоднего стола и одним из самых узнаваемых салатов русской кухни.',

  comments: [
    'Без этого салата Новый год не Новый год',
    'Всегда готовим заранее — на следующий день ещё вкуснее',
    'Классика, которая никогда не надоедает',
  ],
}
