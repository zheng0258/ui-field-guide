import { PLATFORM_LABELS } from './schema/constants'
import type { Concept, Platform } from './schema'

/** The coding prompt for a concept: the hand-written one, or one composed from keywords, descriptors and avoid. */
export function buildCodingPrompt(concept: Concept, all: readonly Concept[], platform?: Platform): string {
  if (concept.prompt.coding) return concept.prompt.coding

  const entry = platform && 'platforms' in concept ? concept.platforms?.[platform] : undefined
  const [canonical, ...related] = concept.prompt.keywords
  const target = entry ? `a ${PLATFORM_LABELS[platform!]} ${entry.name}` : `a ${canonical}`
  const api = entry ? Object.values(entry.api).join(' or ') : undefined
  const namesById = new Map(all.map((other) => [other.id, other.name.en]))
  const avoid = concept.prompt.avoid.map((id) => namesById.get(id) ?? id)

  return [
    `Build ${target}${api ? ` (${api})` : ''}.`,
    related.length > 0 ? `Also known as: ${related.join(', ')}.` : '',
    concept.prompt.descriptors.length > 0 ? `It should have: ${concept.prompt.descriptors.join('; ')}.` : '',
    avoid.length > 0 ? `Do not build a ${avoid.join(' or ')}.` : '',
  ]
    .filter(Boolean)
    .join(' ')
}
