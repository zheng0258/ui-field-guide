import concepts from 'virtual:content'
import { createSearch } from '../search'
import { CATEGORIES, PLATFORMS, type Category, type Platform } from '../schema/constants'
import type { Concept, PlatformEntry } from '../schema'

export { concepts }

const byId = new Map(concepts.map((concept) => [concept.id, concept]))

export function findConcept(id: string): Concept | undefined {
  return byId.get(id)
}

export function platformEntry(concept: Concept, platform: Platform): PlatformEntry | undefined {
  return 'platforms' in concept ? concept.platforms?.[platform] : undefined
}

export function conceptPlatforms(concept: Concept): Platform[] {
  return PLATFORMS.filter((platform) => platformEntry(concept, platform))
}

export function conceptsOn(platform: Platform): Concept[] {
  return concepts.filter((concept) => platformEntry(concept, platform))
}

/** A platform's concepts grouped by category, in CATEGORIES order, sorted by the platform's own name. */
export function conceptsByCategory(platform: Platform): { category: Category; concepts: Concept[] }[] {
  const onPlatform = conceptsOn(platform)
  const nameOn = (concept: Concept) => platformEntry(concept, platform)?.name ?? concept.name.en
  return CATEGORIES.map((category) => ({
    category,
    concepts: onPlatform
      .filter((concept) => concept.category === category)
      .sort((a, b) => nameOn(a).localeCompare(nameOn(b))),
  })).filter((group) => group.concepts.length > 0)
}

export function conceptPath(concept: Concept, platform: Platform): string {
  return `/${platform}/${concept.id}`
}

export const conceptSearch = createSearch(concepts)
