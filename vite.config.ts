import { copyFileSync } from 'node:fs'
import { join } from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig, type Plugin } from 'vite'
import { CONTENT_DIR, readContentFiles } from './src/content/fs'
import { formatIssues, validateContent } from './src/content/validate'
import type { Concept } from './src/schema'

const VIRTUAL_ID = 'virtual:content'
const RESOLVED_ID = `\0${VIRTUAL_ID}`

function publishedConcepts(concepts: readonly Concept[], includeDrafts: boolean): readonly Concept[] {
  return includeDrafts ? concepts : concepts.filter((concept) => concept.status === 'verified')
}

/**
 * Loads content/ at build time, fails the build on any schema or cross-reference issue,
 * and drops drafts from production builds unless INCLUDE_DRAFTS=1 (preview deploys).
 */
function contentPlugin(includeDrafts: boolean): Plugin {
  return {
    name: 'ui-field-guide:content',
    resolveId: (id) => (id === VIRTUAL_ID ? RESOLVED_ID : undefined),
    load(id) {
      if (id !== RESOLVED_ID) return undefined
      const files = readContentFiles()
      files.forEach((file) => this.addWatchFile(`${CONTENT_DIR}/${file.path}`))
      const { concepts, issues } = validateContent(files)
      if (issues.length > 0) this.error(`content check failed:\n${formatIssues(issues)}`)
      const published = publishedConcepts(concepts, includeDrafts)
      return `export default ${JSON.stringify(published)}`
    },
  }
}

export default defineConfig(({ command }) => {
  const includeDrafts = command === 'serve' || process.env.INCLUDE_DRAFTS === '1'
  return {
    base: process.env.BASE_PATH ?? '/',
    plugins: [vue(), contentPlugin(includeDrafts)],
    define: {
      __INCLUDE_DRAFTS__: JSON.stringify(includeDrafts),
    },
    ssgOptions: {
      script: 'async',
      formatting: 'minify',
      dirStyle: 'nested',
      // One static page per published concept; the catch-all route becomes the host's 404 page.
      includedRoutes: () => {
        const { concepts } = validateContent(readContentFiles())
        const ids = publishedConcepts(concepts, includeDrafts).map((concept) => `/c/${concept.id}`)
        return ['/', ...ids, '/404']
      },
      onFinished: () => {
        const dist = join(import.meta.dirname, 'dist')
        copyFileSync(join(dist, '404', 'index.html'), join(dist, '404.html'))
      },
    },
  }
})
