import { describe, expect, test } from 'bun:test'

import { createOptimizationPlan, createOptimizedImagePath, isSupportedImagePath } from './optimizeImages'

describe('optimizeImages helpers', () => {
  test('detects raster images supported by the optimizer', () => {
    expect(isSupportedImagePath('public/static/recipes/supper/plov.jpeg')).toBe(true)
    expect(isSupportedImagePath('public/static/logo.PNG')).toBe(true)
    expect(isSupportedImagePath('public/static/equipments/frying-pan.webp')).toBe(true)
    expect(isSupportedImagePath('public/static/companies/sber.svg')).toBe(false)
  })

  test('mirrors the source structure in optimize and writes webp files', () => {
    expect(
      createOptimizedImagePath({
        sourceRoot: 'public/static',
        outputRoot: 'public/optimize',
        imagePath: 'public/static/recipes/supper/plov.jpeg',
      }),
    ).toBe('public/optimize/recipes/supper/plov.webp')
  })

  test('skips duplicate source files that would overwrite the same optimized image', () => {
    expect(
      createOptimizationPlan({
        sourceRoot: 'public/static',
        outputRoot: 'public/optimize',
        imagePaths: ['public/static/ingredients/black-pepper.jpeg', 'public/static/ingredients/black-pepper.webp'],
      }),
    ).toEqual({
      images: [
        {
          imagePath: 'public/static/ingredients/black-pepper.jpeg',
          outputPath: 'public/optimize/ingredients/black-pepper.webp',
        },
      ],
      skipped: [
        {
          imagePath: 'public/static/ingredients/black-pepper.webp',
          outputPath: 'public/optimize/ingredients/black-pepper.webp',
        },
      ],
    })
  })
})
