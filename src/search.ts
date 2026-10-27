import Fuse, { type FuseOptionKey } from 'fuse.js'
import { PLATFORMS } from './schema/constants'
import type { Concept } from './schema'

/** Flat, search-only view of a concept so Fuse can weigh each field. */
interface SearchDoc {
  id: string
  names: string[]
  aliases: string[]
  describe: string[]
  platformNames: string[]
  keywords: string[]
}

function toSearchDoc(concept: Concept): SearchDoc {
  const platforms = 'platforms' in concept && concept.platforms ? concept.platforms : {}
  return {
    id: concept.id,
    names: [concept.name.en, concept.name.zh],
    aliases: concept.aliases,
    describe: concept.describe,
    platformNames: PLATFORMS.flatMap((platform) => {
      const entry = platforms[platform]
      return entry ? [entry.name, ...Object.values(entry.api)] : []
    }),
    keywords: concept.prompt.keywords,
  }
}

const KEYS: FuseOptionKey<SearchDoc>[] = [
  { name: 'names', weight: 3 },
  { name: 'aliases', weight: 3 },
  { name: 'platformNames', weight: 2 },
  { name: 'keywords', weight: 1.5 },
  { name: 'describe', weight: 1 },
]

export interface ConceptSearch {
  search(query: string, limit?: number): Concept[]
}

export function createSearch(concepts: readonly Concept[]): ConceptSearch {
  const byId = new Map(concepts.map((concept) => [concept.id, concept]))
  const fuse = new Fuse(concepts.map(toSearchDoc), {
    keys: KEYS,
    threshold: 0.4,
    // Plain-language descriptions are long; match anywhere instead of near the start.
    ignoreLocation: true,
    includeScore: true,
  })
  return {
    search(query, limit = 10) {
      const trimmed = query.trim()
      if (!trimmed) return []
      return fuse.search(trimmed, { limit }).flatMap((result) => {
        const concept = byId.get(result.item.id)
        return concept ? [concept] : []
      })
    },
  }
}
