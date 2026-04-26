# AGENTS.md

Инструкции для Codex и других AI-агентов, работающих с этим репозиторием.

## Кратко о проекте

Food Paradise / "Всегда ГотовЪ" - статически экспортируемый сайт рецептов на Next.js App Router.

- Основной стек: Next.js 16, React 19, TypeScript, styled-components, next-intl.
- Пакетный менеджер по lockfile и CI: Bun.
- Сайт собирается как static export: `next.config.ts` содержит `output: 'export'`, `trailingSlash: true`, `images.unoptimized: true`.
- Деплой настроен на GitHub Pages из папки `out`.
- Основная локаль: `ru`; также заведена `en`.

## Команды

Предпочитай Bun:

```bash
bun install
bun run dev
bun run build
bun run tsc:check
bun run prettier:check
bun run prettier:fix
```

Дополнительные команды качества:

```bash
bun run qlty:check
bun run qlty:fmt
bun run qlty:smells
bun run biome:format
bun run biome:lint
bun run biome:lint:fix
```

Перед завершением задач с изменением кода минимум запускай:

```bash
bun run tsc:check
bun run prettier:check
```

Для изменений, влияющих на маршруты, рецепты, i18n или сборку, также запускай:

```bash
bun run build
```

В проекте есть скрипт `bun run lint`, но соответствующий шаг в GitHub Actions сейчас закомментирован. Не делай его единственной проверкой.

## Структура проекта

- `src/app` - App Router страницы, layouts, sitemap, robots, manifest.
- `src/app/[locale]` - локализованные страницы.
- `src/components` - UI-компоненты, большая часть стилей через `styled-components`.
- `src/components/RecipePage` - блоки страницы рецепта.
- `src/constants/recipes` - TypeScript-данные рецептов и типы `Recipe`, `MetaSeo`.
- `src/constants/ingredients.ts` и `src/constants/equipments.ts` - агрегаторы справочников.
- `src/jsons/ingredients` и `src/jsons/equipments` - JSON-справочники ингредиентов и инвентаря.
- `src/i18n` - маршрутизация, локали, helpers для URL и language entities.
- `messages` - словари `next-intl`.
- `public/static` - статические ассеты.

## Важные соглашения

- Используй алиас `@/*` для импортов из `src`.
- Соблюдай Prettier: без semicolon, single quotes, 2 пробела, trailing commas, `printWidth: 120`.
- TypeScript строгий. Не добавляй `any` без необходимости.
- Компоненты, использующие state/effects/browser APIs/styled-components runtime, помечай `'use client'`.
- Сохраняй текущий стиль: styled-components рядом с компонентом, props для стилей с `$`-префиксом.
- Не переводить русские тексты в UI или данных без явной задачи.
- Не добавлять новые библиотеки, если можно решить задачу существующими зависимостями.
- Не коммитить и не править сгенерированные артефакты: `.next`, `out`, `tsconfig.tsbuildinfo`, `node_modules`.

## Рецепты и данные

Тип рецепта описан в `src/constants/recipes/recipes.ts`.

При добавлении или изменении рецепта:

- Проверь уникальность `key`.
- Добавь рецепт в подходящий файл категории в `src/constants/recipes`.
- Убедись, что категория присутствует в `RECIPES_OBJ`.
- Если появляется новая категория, обнови `RecipeCategories`, `RECIPES_OBJ`, страницы категорий и связанные UI-константы.
- Для статических путей рецептов проверь `src/i18n/paths.ts`: `recipePaths` используется для известных recipe URL.
- Для ингредиентов и инвентаря используй существующие JSON-справочники, а не дублируй названия и изображения вручную.
- Сохраняй SEO-поля `metaSeo`: title, description, keywords, Open Graph и Twitter-данные важны для страниц рецептов.

## i18n и маршруты

- Локали заданы в `src/i18n/constants.ts`: `ru`, `en`; default locale - `ru`.
- Роутинг настроен через `next-intl` в `src/i18n/routing.ts`.
- Для ссылок внутри приложения используй `Link` и navigation helpers из `src/i18n/navigation`, а не прямой `next/link`, если ссылка зависит от локали.
- Для canonical/локализованных URL используй helpers из `src/i18n`, например `createUrl`.
- Не меняй стратегию `localePrefix: 'always'` без отдельной задачи.

## Static export

Проект должен оставаться совместимым с `output: 'export'`.

- Не добавляй серверные функции, API routes, runtime-зависимые server actions или динамику, несовместимую со static export.
- Для изображений учитывай `images.unoptimized: true`.
- Если добавляешь динамические страницы, обеспечь генерацию статических параметров там, где это требуется для export.
- После изменений в маршрутах обязательно проверь `bun run build`.

## UI и стили

- Дизайн проекта спокойный, контентный, с акцентом на рецепты и карточки.
- Поддерживай адаптивность через helpers из `src/styles/device.ts`.
- Не ломай фиксированный header и мобильное меню.
- Для новых интерактивных элементов учитывай mobile layout.
- Иконки в текущем проекте в основном из `react-icons`; используй их, если нужен новый icon button.

## GitHub Actions и качество

CI использует Bun и проверяет:

- `bun run tsc:check`
- `bun run prettier:check`
- `bun run build`
- Qlty workflows
- CodeQL

При изменениях в workflow учитывай, что проект деплоится с ветки `master` в `gh-pages`.

## Рабочий процесс для Codex

1. Сначала изучи ближайшие файлы и существующие паттерны.
2. Делай минимальные, тематически связанные изменения.
3. Не переписывай большие файлы рецептов или путей без необходимости.
4. Если меняешь данные рецептов, проверь, что страница рецепта и категория смогут их отрендерить.
5. После правок запусти релевантные проверки и явно сообщи, что запускалось.
6. Если проверку невозможно запустить, объясни причину и риск.
