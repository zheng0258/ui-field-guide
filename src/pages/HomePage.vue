<script setup lang="ts">
import { useHead } from '@unhead/vue'
import ConceptSearch from '../components/ConceptSearch.vue'
import { concepts } from '../content/store'

useHead({ title: '' })
</script>

<template>
  <section class="hero">
    <h1>一個概念，四個平台的名字</h1>
    <p class="lead">看到一個 UI 元件，叫出它在 macOS、iOS、Android、Web 的正式名稱，再一鍵複製給 AI 的 prompt。</p>
  </section>
  <ConceptSearch />
  <section aria-labelledby="all-concepts">
    <h2 id="all-concepts">全部組件（{{ concepts.length }}）</h2>
    <p v-if="concepts.length === 0" class="empty">還沒有已驗證的條目。</p>
    <ul v-else class="concept-list">
      <li v-for="concept in concepts" :key="concept.id">
        <RouterLink :to="`/c/${concept.id}`" class="concept-link">
          <span class="concept-name">{{ concept.name.en }}</span>
          <span class="concept-zh">{{ concept.name.zh }}</span>
          <span v-if="concept.status === 'draft'" class="badge">draft</span>
        </RouterLink>
      </li>
    </ul>
  </section>
</template>
