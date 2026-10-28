<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PlatformGrid from '../components/PlatformGrid.vue'
import PromptCopy from '../components/PromptCopy.vue'
import { findConcept } from '../content/store'
import NotFoundPage from './NotFoundPage.vue'

const route = useRoute()
const concept = computed(() => findConcept(String(route.params.id)))
const confused = computed(() =>
  (concept.value?.confusedWith ?? []).flatMap((id) => {
    const other = findConcept(id)
    return other ? [other] : []
  }),
)

useHead({
  title: () => concept.value?.name.en ?? 'Not found',
  meta: [{ name: 'description', content: () => concept.value?.describe[0] ?? '' }],
})
</script>

<template>
  <article v-if="concept" class="concept">
    <header class="concept-header">
      <p class="eyebrow">{{ concept.category }}<span v-if="concept.status === 'draft'" class="badge">draft</span></p>
      <h1>
        {{ concept.name.en }} <span class="concept-zh">{{ concept.name.zh }}</span>
      </h1>
      <p v-if="concept.status === 'draft'" class="draft-note">
        草稿：名稱與 API 對應尚未對照官方文件驗證，使用前請先確認。
      </p>
      <ul class="describe">
        <li v-for="line in concept.describe" :key="line">{{ line }}</li>
      </ul>
      <p v-if="concept.aliases.length > 0" class="aliases">
        也叫：<span v-for="alias in concept.aliases" :key="alias" class="alias">{{ alias }}</span>
      </p>
    </header>

    <section v-if="concept.kind === 'component'" aria-labelledby="platforms-heading">
      <h2 id="platforms-heading">四平台名稱與 API</h2>
      <PlatformGrid :platforms="concept.platforms" />
    </section>

    <section v-if="confused.length > 0" aria-labelledby="confused-heading">
      <h2 id="confused-heading">容易搞混</h2>
      <ul class="confused-list">
        <li v-for="other in confused" :key="other.id">
          <RouterLink :to="`/c/${other.id}`">{{ other.name.en }}（{{ other.name.zh }}）</RouterLink>
        </li>
      </ul>
    </section>

    <section aria-labelledby="prompt-heading">
      <h2 id="prompt-heading">AI prompt</h2>
      <PromptCopy :concept="concept" />
    </section>
  </article>
  <NotFoundPage v-else />
</template>
