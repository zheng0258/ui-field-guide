import { readContentFiles } from '../src/content/fs'
import { formatIssues, validateContent } from '../src/content/validate'

const { concepts, issues } = validateContent(readContentFiles())

if (issues.length > 0) {
  process.stderr.write(`content check failed with ${issues.length} issue(s):\n${formatIssues(issues)}\n`)
  process.exit(1)
}

const drafts = concepts.filter((concept) => concept.status === 'draft').length
process.stdout.write(`content OK: ${concepts.length} concept(s), ${drafts} draft\n`)
