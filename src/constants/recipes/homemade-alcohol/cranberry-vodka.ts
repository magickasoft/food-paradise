import { EQUIPMENTS } from '@/constants/equipments'

export const CRANBERRY_VODKA = {
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
    'og:image': '/optimize/recipes/homemadeAlcohol/cranberry-vodka.webp',
    twitterTitle: 'Домашняя клюквовка на водке — яркий вкус зимы',
    twitterDescription: 'Кисло-сладкая настойка на клюкве — яркая классика домашнего бара.',
    twitterImage: '/optimize/recipes/homemadeAlcohol/cranberry-vodka.webp',
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
  img: '/optimize/recipes/homemadeAlcohol/cranberry-vodka.webp',
  title: 'Настойка на клюкве (клюквовка на водке)',
  description:
    'Клюквовка на водке — один из самых популярных домашних напитков. Яркий цвет, свежая кислинка и лёгкая сладость делают её идеальной для зимних застолий.',
  warning: 'Чрезмерное употребление алкоголя вредит вашему здоровью!',
  calories: 180,
  preparation: 15,
  time: 36000,
  level: 1,
  used: null,
  rating: 4.9,
  portions: 20,
  ingredients: [
    { ingredientKey: 'cranberry', count: 400, gauge: 'г' },
    { ingredientKey: 'sugar', count: 200, gauge: 'г' },
    { ingredientKey: 'vodka', count: 700, gauge: 'мл' },
  ],
  equipments: [EQUIPMENTS.jar, EQUIPMENTS.sieve, EQUIPMENTS.bottle],

  historyDescription:
    'Клюквовка — старинная русская настойка, которую готовили ещё в XIX веке. Клюква придаёт напитку насыщенный рубиновый цвет и приятную кислинку, а водка смягчает вкус и раскрывает аромат.',
  cookingRecipe: [
    {
      img: null,
      description: 'Промойте клюкву, слегка разомните её ложкой или толкушкой, чтобы выделился сок.',
      ingredients: [{ ingredientKey: 'cranberry', count: 400, gauge: 'г' }],
    },
    {
      img: null,
      description: 'Переложите ягоды в банку, добавьте сахар и залейте водкой. Перемешайте и закройте крышкой.',
      ingredients: [
        { ingredientKey: 'sugar', count: 200, gauge: 'г' },
        { ingredientKey: 'vodka', count: 700, gauge: 'мл' },
      ],
    },
    {
      img: null,
      description: 'Оставьте в тёмном месте на 2–3 недели, ежедневно встряхивая банку.',
      ingredients: [],
    },
    {
      img: null,
      description: 'Процедите настойку через сито, разлейте по бутылкам и дайте настояться ещё 3–4 дня в холодильнике.',
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
    {
      id: '1',
      name: 'Анна',
      text: 'Настойка получилась шикарная, цвет как рубин! Стояла 3 недели.',
      rating: 5,
      avatar: null,
    },
    {
      id: '2',
      name: 'Мария',
      text: 'Делала с мёдом вместо сахара — мягкая и ароматная, просто чудо!',
      rating: 5,
      avatar: null,
    },
  ],
}
