import concepts from 'virtual:content'
import { createSearch } from '../search'
import type { Concept } from '../schema'

export { concepts }

const byId = new Map(concepts.map((concept) => [concept.id, concept]))

export function findConcept(id: string): Concept | undefined {
  return byId.get(id)
}

export const conceptSearch = createSearch(concepts)
