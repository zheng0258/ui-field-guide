<script setup lang="ts">
import { computed, ref } from 'vue'
import { conceptPlatforms, conceptSearch, platformEntry } from '../content/store'
import { PLATFORM_LABELS, type Platform } from '../schema/constants'
import type { Concept } from '../schema'

/** With `platform`, results are limited to that platform and link to its pages. */
const props = defineProps<{ platform?: Platform }>()

const query = ref('')
const results = computed(() =>
  conceptSearch
    .search(query.value, 20)
    .filter((concept) => !props.platform || platformEntry(concept, props.platform))
    .slice(0, 10),
)
const hasQuery = computed(() => query.value.trim().length > 0)
const inputId = computed(() => `concept-search-${props.platform ?? 'all'}`)

function target(concept: Concept): Platform {
  if (props.platform) return props.platform
  const platforms = conceptPlatforms(concept)
  return platforms.includes('web') ? 'web' : (platforms[0] ?? 'web')
}
</script>

<template>
  <search class="concept-search">
    <label :for="inputId" class="label">
      {{ platform ? `搜尋 ${PLATFORM_LABELS[platform]} 組件` : '搜尋組件' }}
    </label>
    <input
      :id="inputId"
      v-model="query"
      type="search"
      autocomplete="off"
      placeholder="中文、英文、別名或白話描述，例如「點開選一個值」"
      :aria-describedby="`${inputId}-status`"
    />
    <p :id="`${inputId}-status`" class="status" aria-live="polite">
      <template v-if="hasQuery">找到 {{ results.length }} 項</template>
    </p>
    <ul v-if="hasQuery && results.length > 0" class="results">
      <li v-for="concept in results" :key="concept.id">
        <RouterLink :to="`/${target(concept)}/${concept.id}`">
          <span class="result-name">{{ platformEntry(concept, target(concept))?.name ?? concept.name.en }}</span>
          <span class="result-zh">{{ concept.name.zh }}</span>
          <span class="result-platform">{{ PLATFORM_LABELS[target(concept)] }}</span>
        </RouterLink>
      </li>
    </ul>
  </search>
</template>
