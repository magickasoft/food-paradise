import { EQUIPMENTS } from '@/constants/equipments'
import { INGREDIENTS } from '@/constants/ingredients'

export const LEMONCELLO_VODKA = {
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
    {
      id: '1',
      name: 'Анна',
      text: 'Готовила на водке — вкус мягкий, аромат шикарный! Теперь делаю только так.',
      rating: 5,
      avatar: null,
    },
    {
      id: '2',
      name: 'Мария',
      text: 'Классическая домашняя клюквовка на водке. Очень нежный и вкусный напиток.',
      rating: 5,
      avatar: null,
    },
    {
      id: '3',
      name: 'Иван',
      text: 'Простой рецепт, а результат превзошёл ожидания! Лимончелло получился ароматным и освежающим.',
      rating: 5,
      avatar: null,
    },
  ],
}
