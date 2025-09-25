type LocalizedPath = {
  [locale: string]: string
}

export const createLocalizedPaths =
  (locales: readonly string[]) =>
  (path: string): LocalizedPath =>
    Object.fromEntries(locales.map(locale => [locale, path]))
