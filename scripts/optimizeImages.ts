import { readdir, rm, mkdir, stat } from 'node:fs/promises'
import path from 'node:path'

import sharp from 'sharp'

const sourceRoot = 'public/static'
const outputRoot = 'public/optimize'
const maxWidth = 1600
const webpQuality = 82
const supportedExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp'])

type OptimizedImagePathParams = {
  sourceRoot: string
  outputRoot: string
  imagePath: string
}

type OptimizeImageParams = {
  imagePath: string
  outputPath: string
}

type OptimizedImageResult = {
  imagePath: string
  outputPath: string
  sourceSize: number
  outputSize: number
}

type OptimizationPlanItem = {
  imagePath: string
  outputPath: string
}

type CreateOptimizationPlanParams = {
  sourceRoot: string
  outputRoot: string
  imagePaths: string[]
}

export const isSupportedImagePath = (imagePath: string) =>
  supportedExtensions.has(path.extname(imagePath).toLowerCase())

export const createOptimizedImagePath = ({ sourceRoot, outputRoot, imagePath }: OptimizedImagePathParams) => {
  const relativeImagePath = path.relative(sourceRoot, imagePath)
  const parsedPath = path.parse(relativeImagePath)

  return path.join(outputRoot, parsedPath.dir, `${parsedPath.name}.webp`)
}

export const collectImagePaths = async (directoryPath: string): Promise<string[]> => {
  const entries = await readdir(directoryPath, { withFileTypes: true })
  const imagePaths = await Promise.all(
    entries.map(async entry => {
      const entryPath = path.join(directoryPath, entry.name)

      if (entry.isDirectory()) {
        return collectImagePaths(entryPath)
      }

      if (entry.isFile() && isSupportedImagePath(entryPath)) {
        return [entryPath]
      }

      return []
    }),
  )

  return imagePaths.flat().sort((firstPath, secondPath) => firstPath.localeCompare(secondPath))
}

export const createOptimizationPlan = ({ sourceRoot, outputRoot, imagePaths }: CreateOptimizationPlanParams) => {
  const seenOutputPaths = new Set<string>()
  const images: OptimizationPlanItem[] = []
  const skipped: OptimizationPlanItem[] = []

  for (const imagePath of imagePaths) {
    const outputPath = createOptimizedImagePath({ sourceRoot, outputRoot, imagePath })
    const item = { imagePath, outputPath }

    if (seenOutputPaths.has(outputPath)) {
      skipped.push(item)
      continue
    }

    seenOutputPaths.add(outputPath)
    images.push(item)
  }

  return { images, skipped }
}

export const optimizeImage = async ({ imagePath, outputPath }: OptimizeImageParams): Promise<OptimizedImageResult> => {
  await mkdir(path.dirname(outputPath), { recursive: true })

  let image = sharp(imagePath).rotate()
  const metadata = await image.metadata()

  if (metadata.width && metadata.width > maxWidth) {
    image = image.resize({ width: maxWidth, withoutEnlargement: true })
  }

  await image.webp({ quality: webpQuality, effort: 5 }).toFile(outputPath)

  const [sourceStats, outputStats] = await Promise.all([stat(imagePath), stat(outputPath)])

  return {
    imagePath,
    outputPath,
    sourceSize: sourceStats.size,
    outputSize: outputStats.size,
  }
}

export const optimizeImages = async () => {
  await rm(outputRoot, { recursive: true, force: true })

  const imagePaths = await collectImagePaths(sourceRoot)

  if (imagePaths.length === 0) {
    console.log('No images found for optimization.')
    return
  }

  const { images, skipped } = createOptimizationPlan({ sourceRoot, outputRoot, imagePaths })
  const results = []

  for (const { imagePath, outputPath } of images) {
    const result = await optimizeImage({ imagePath, outputPath })

    results.push(result)
    console.log(`${result.imagePath} -> ${result.outputPath}`)
  }

  for (const { imagePath, outputPath } of skipped) {
    console.warn(`Skipped duplicate output: ${imagePath} -> ${outputPath}`)
  }

  const sourceSize = results.reduce((totalSize, result) => totalSize + result.sourceSize, 0)
  const outputSize = results.reduce((totalSize, result) => totalSize + result.outputSize, 0)
  const savedPercent = sourceSize === 0 ? 0 : Math.round((1 - outputSize / sourceSize) * 100)

  console.log(`Optimized ${results.length} images.`)
  console.log(`Skipped ${skipped.length} duplicate output paths.`)
  console.log(`Source: ${(sourceSize / 1024 / 1024).toFixed(2)} MB`)
  console.log(`Output: ${(outputSize / 1024 / 1024).toFixed(2)} MB`)
  console.log(`Saved: ${savedPercent}%`)
}

if (import.meta.main) {
  await optimizeImages()
}
