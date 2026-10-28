<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ConceptSearch from '../components/ConceptSearch.vue'
import DemoThumb from '../components/DemoThumb.vue'
import { conceptsByCategory, conceptsOn, platformEntry } from '../content/store'
import { CATEGORY_LABELS, isPlatform, PLATFORM_LABELS } from '../schema/constants'
import NotFoundPage from './NotFoundPage.vue'

const route = useRoute()
const platform = computed(() => (isPlatform(route.params.platform) ? route.params.platform : undefined))
const groups = computed(() => (platform.value ? conceptsByCategory(platform.value) : []))
const total = computed(() => (platform.value ? conceptsOn(platform.value).length : 0))

useHead({ title: () => (platform.value ? `${PLATFORM_LABELS[platform.value]} 組件` : 'Not found') })
</script>

<template>
  <div v-if="platform" class="platform-page">
    <nav class="crumbs" aria-label="麵包屑">
      <RouterLink to="/">平台</RouterLink>
      <span aria-hidden="true">/</span>
      <span aria-current="page">{{ PLATFORM_LABELS[platform] }}</span>
    </nav>
    <header>
      <h1>{{ PLATFORM_LABELS[platform] }} 組件</h1>
      <p class="lead">共 {{ total }} 個，依用途分組。點縮圖看可互動範例與四平台對照。</p>
    </header>

    <ConceptSearch :platform="platform" />

    <nav class="category-jump" aria-label="分類">
      <a v-for="group in groups" :key="group.category" :href="`#${group.category}`">
        {{ CATEGORY_LABELS[group.category] }} <span>{{ group.concepts.length }}</span>
      </a>
    </nav>

    <section
      v-for="group in groups"
      :id="group.category"
      :key="group.category"
      class="category"
      :aria-labelledby="`${group.category}-heading`"
    >
      <h2 :id="`${group.category}-heading`">{{ CATEGORY_LABELS[group.category] }}</h2>
      <ul class="component-grid">
        <li v-for="concept in group.concepts" :key="concept.id">
          <RouterLink :to="`/${platform}/${concept.id}`" class="component-card">
            <DemoThumb :id="concept.id" :platform="platform" :label="platformEntry(concept, platform)!.name" />
            <span class="component-card-name">{{ platformEntry(concept, platform)!.name }}</span>
            <span class="component-card-zh">{{ concept.name.zh }}</span>
          </RouterLink>
        </li>
      </ul>
    </section>
  </div>
  <NotFoundPage v-else />
</template>
