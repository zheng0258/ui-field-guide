import { describe, expect, it } from 'vitest'
import { readContentFiles } from '../../src/content/fs'
import { formatIssues, validateContent } from '../../src/content/validate'

describe('content/', () => {
  const { concepts, issues } = validateContent(readContentFiles())

  it('passes schema validation and cross-reference checks', () => {
    expect(issues, formatIssues(issues)).toEqual([])
  })

  it('holds the first batch of 10 component concepts', () => {
    expect(concepts.filter((concept) => concept.kind === 'component').length).toBeGreaterThanOrEqual(10)
  })

  it('fills the Web column for every component', () => {
    const missingWeb = concepts.filter((concept) => concept.kind === 'component' && !concept.platforms.web)
    expect(missingWeb.map((concept) => concept.id)).toEqual([])
  })
})
