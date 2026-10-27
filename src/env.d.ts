/// <reference types="vite/client" />

declare module 'virtual:content' {
  import type { Concept } from './schema'
  const concepts: readonly Concept[]
  export default concepts
}

declare const __INCLUDE_DRAFTS__: boolean
