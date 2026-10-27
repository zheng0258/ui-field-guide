<script setup lang="ts">
import { computed, ref } from 'vue'
import { conceptSearch } from '../content/store'

const query = ref('')
const results = computed(() => conceptSearch.search(query.value))
const hasQuery = computed(() => query.value.trim().length > 0)
</script>

<template>
  <search class="concept-search">
    <label for="concept-search-input" class="label">搜尋組件</label>
    <input
      id="concept-search-input"
      v-model="query"
      type="search"
      autocomplete="off"
      placeholder="中文、英文、別名或白話描述，例如「點開選一個值」"
      aria-describedby="concept-search-status"
    />
    <p id="concept-search-status" class="status" aria-live="polite">
      <template v-if="hasQuery">找到 {{ results.length }} 項</template>
    </p>
    <ul v-if="hasQuery && results.length > 0" class="results">
      <li v-for="concept in results" :key="concept.id">
        <RouterLink :to="`/c/${concept.id}`">
          <span class="result-name">{{ concept.name.en }}</span>
          <span class="result-zh">{{ concept.name.zh }}</span>
        </RouterLink>
      </li>
    </ul>
  </search>
</template>
