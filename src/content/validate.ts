import { parse as parseYaml } from 'yaml'
import { ConceptSchema, KINDS, type Concept } from '../schema'

export interface SourceFile {
  /** Path relative to `content/`, e.g. `component/popup-select.yaml`. */
  path: string
  raw: string
}

export interface ContentIssue {
  path: string
  message: string
}

export interface ContentResult {
  concepts: readonly Concept[]
  issues: readonly ContentIssue[]
}

const FILE_PATTERN = /^(?<kind>[^/]+)\/(?<id>[^/]+)\.yaml$/

function parseFile(file: SourceFile): { concept?: Concept; issues: ContentIssue[] } {
  const match = FILE_PATTERN.exec(file.path)
  if (!match?.groups) {
    return { issues: [{ path: file.path, message: 'expected content/<kind>/<id>.yaml' }] }
  }
  const { kind = '', id = '' } = match.groups

  let data: unknown
  try {
    data = parseYaml(file.raw)
  } catch (error) {
    return { issues: [{ path: file.path, message: `invalid YAML: ${String(error)}` }] }
  }

  const parsed = ConceptSchema.safeParse(data)
  if (!parsed.success) {
    return {
      issues: parsed.error.issues.map((issue) => ({
        path: file.path,
        message: `${issue.path.join('.') || '(root)'}: ${issue.message}`,
      })),
    }
  }

  const concept = parsed.data
  const issues: ContentIssue[] = []
  if (!(KINDS as readonly string[]).includes(kind)) {
    issues.push({ path: file.path, message: `unknown kind folder "${kind}"` })
  } else if (concept.kind !== kind) {
    issues.push({ path: file.path, message: `kind "${concept.kind}" does not match folder "${kind}"` })
  }
  if (concept.id !== id) {
    issues.push({ path: file.path, message: `id "${concept.id}" does not match file name "${id}"` })
  }
  return { concept, issues }
}

function crossReferenceIssues(entries: readonly { path: string; concept: Concept }[]): ContentIssue[] {
  const seen = new Map<string, string>()
  const issues: ContentIssue[] = []

  for (const { path, concept } of entries) {
    const first = seen.get(concept.id)
    if (first) {
      issues.push({ path, message: `duplicate id "${concept.id}" (also in ${first})` })
    } else {
      seen.set(concept.id, path)
    }
  }

  for (const { path, concept } of entries) {
    const refs = [
      ...concept.confusedWith.map((ref) => ['confusedWith', ref] as const),
      ...concept.prompt.avoid.map((ref) => ['prompt.avoid', ref] as const),
    ]
    for (const [field, ref] of refs) {
      if (ref === concept.id) {
        issues.push({ path, message: `${field} points at itself` })
      } else if (!seen.has(ref)) {
        issues.push({ path, message: `${field} points at unknown id "${ref}"` })
      }
    }
  }
  return issues
}

/** Parses, validates and cross-checks every content file. Never throws. */
export function validateContent(files: readonly SourceFile[]): ContentResult {
  const parsed = files.map((file) => ({ path: file.path, ...parseFile(file) }))
  const entries = parsed.flatMap(({ path, concept }) => (concept ? [{ path, concept }] : []))
  const issues = [...parsed.flatMap((result) => result.issues), ...crossReferenceIssues(entries)]
  const concepts = [...entries.map((entry) => entry.concept)].sort((a, b) => a.id.localeCompare(b.id))
  return { concepts, issues }
}

export function formatIssues(issues: readonly ContentIssue[]): string {
  return issues.map((issue) => `  content/${issue.path}: ${issue.message}`).join('\n')
}
