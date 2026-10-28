<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DemoStage from '../components/DemoStage.vue'
import PlatformGrid from '../components/PlatformGrid.vue'
import PromptCopy from '../components/PromptCopy.vue'
import { findConcept, platformEntry } from '../content/store'
import { CATEGORY_LABELS, isPlatform, PLATFORM_LABELS } from '../schema/constants'
import NotFoundPage from './NotFoundPage.vue'

const route = useRoute()
const platform = computed(() => (isPlatform(route.params.platform) ? route.params.platform : undefined))
const concept = computed(() => {
  const found = findConcept(String(route.params.id))
  return found && platform.value && platformEntry(found, platform.value) ? found : undefined
})
const entry = computed(() =>
  concept.value && platform.value ? platformEntry(concept.value, platform.value) : undefined,
)
const confused = computed(() =>
  (concept.value?.confusedWith ?? []).flatMap((id) => {
    const other = findConcept(id)
    return other ? [other] : []
  }),
)
const confusedPath = (id: string) => {
  const other = findConcept(id)
  return other && platform.value && platformEntry(other, platform.value) ? `/${platform.value}/${id}` : `/web/${id}`
}

useHead({
  title: () =>
    entry.value && platform.value ? `${entry.value.name} · ${PLATFORM_LABELS[platform.value]}` : 'Not found',
  meta: [{ name: 'description', content: () => concept.value?.describe[0] ?? '' }],
})
</script>

<template>
  <article v-if="concept && entry && platform" class="concept">
    <nav class="crumbs" aria-label="麵包屑">
      <RouterLink to="/">平台</RouterLink>
      <span aria-hidden="true">/</span>
      <RouterLink :to="`/${platform}`">{{ PLATFORM_LABELS[platform] }}</RouterLink>
      <span aria-hidden="true">/</span>
      <span aria-current="page">{{ entry.name }}</span>
    </nav>

    <header class="concept-header">
      <p class="eyebrow">
        {{ PLATFORM_LABELS[platform] }} · {{ CATEGORY_LABELS[concept.category] }}
        <span v-if="concept.status === 'draft'" class="badge">draft</span>
      </p>
      <h1>
        {{ entry.name }} <span class="concept-zh">{{ concept.name.zh }}</span>
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

    <section aria-labelledby="demo-heading">
      <h2 id="demo-heading">範例</h2>
      <DemoStage :id="concept.id" :key="`${platform}/${concept.id}`" :platform="platform" />
    </section>

    <section v-if="concept.kind === 'component'" aria-labelledby="platforms-heading">
      <h2 id="platforms-heading">四平台名稱與 API</h2>
      <PlatformGrid :id="concept.id" :platforms="concept.platforms" :current="platform" />
    </section>

    <section v-if="confused.length > 0" aria-labelledby="confused-heading">
      <h2 id="confused-heading">容易搞混</h2>
      <ul class="confused-list">
        <li v-for="other in confused" :key="other.id">
          <RouterLink :to="confusedPath(other.id)">{{ other.name.en }}（{{ other.name.zh }}）</RouterLink>
        </li>
      </ul>
    </section>

    <section aria-labelledby="prompt-heading">
      <h2 id="prompt-heading">AI prompt</h2>
      <PromptCopy :key="`${platform}/${concept.id}`" :concept="concept" :platform="platform" />
    </section>
  </article>
  <NotFoundPage v-else />
</template>
