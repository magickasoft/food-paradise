const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

/**
 * Добавляет basePath к абсолютному пути статического ресурса из папки public.
 *
 * Пример:
 *   assetPath('/optimize/recipes/breakfast/bliny.webp')
 *   // локально:  '/optimize/recipes/breakfast/bliny.webp'
 *   // на GH Pages: '/food-paradise/optimize/recipes/breakfast/bliny.webp'
 */
export const assetPath = (path: string): string => {
  if (!path?.startsWith('/')) {
    // защита от случайного вызова с относительным путём
    return path
  }

  return `${basePath}${path}`
}
