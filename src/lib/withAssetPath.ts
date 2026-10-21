import { assetPath } from './assetPath'

/**
 * Рекурсивно обходит объект/массив и подставляет basePath
 * ко всем строковым значениям, начинающимся с "/".
 * Создаёт новые объекты (не мутирует исходные).
 */
export const withAssetPath = <T>(value: T): T => {
  if (typeof value === 'string') {
    return (value.startsWith('/') ? assetPath(value) : value) as unknown as T
  }

  if (Array.isArray(value)) {
    return value.map(item => withAssetPath(item)) as unknown as T
  }

  if (value !== null && typeof value === 'object') {
    const result: Record<string, unknown> = {}
    for (const [key, val] of Object.entries(value as Record<string, unknown>)) {
      result[key] = withAssetPath(val)
    }
    return result as unknown as T
  }

  return value
}
