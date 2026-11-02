/** Project slugs are kebab-case; their i18n blocks use camelCase keys. */
export const projectCopyKey = (slug: string): string =>
  slug.replace(/-(\w)/g, (_, letter: string) => letter.toUpperCase());
