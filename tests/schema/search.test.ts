import { describe, expect, it } from 'vitest'
import { readContentFiles } from '../../src/content/fs'
import { validateContent } from '../../src/content/validate'
import { buildCodingPrompt } from '../../src/prompt'
import type { ComponentConcept } from '../../src/schema'
import { createSearch } from '../../src/search'

const { concepts } = validateContent(readContentFiles())
const search = createSearch(concepts)
const topIds = (query: string, limit = 3) => search.search(query, limit).map((concept) => concept.id)

describe('search', () => {
  it.each(['下拉', 'dropdown', '點開選一個值', 'NSPopUpButton', 'select'])('finds Pop-up select for "%s"', (query) => {
    expect(topIds(query)).toContain('popup-select')
  })

  it('finds by another platform name', () => {
    expect(topIds('Segmented button', 1)).toEqual(['segmented-control'])
  })

  it('returns nothing for an empty query', () => {
    expect(search.search('   ')).toEqual([])
  })
})

describe('buildCodingPrompt', () => {
  const popup = concepts.find(
    (concept): concept is ComponentConcept => concept.kind === 'component' && concept.id === 'popup-select',
  )!

  it('composes a platform-specific prompt from keywords, descriptors and avoid', () => {
    const prompt = buildCodingPrompt(popup, concepts, 'macos')
    expect(prompt).toContain('Build a macOS Pop-up button (NSPopUpButton or Picker(.menu))')
    expect(prompt).toContain('shows current selection')
    expect(prompt).toContain('Do not build a Pull-down menu')
  })

  it('prefers a hand-written coding prompt', () => {
    const custom = { ...popup, prompt: { ...popup.prompt, coding: 'Hand written.' } }
    expect(buildCodingPrompt(custom, concepts, 'macos')).toBe('Hand written.')
  })
})
