<script setup lang="ts">
import { PLATFORM_LABELS, PLATFORMS } from '../schema/constants'
import type { ComponentConcept } from '../schema'

defineProps<{ platforms: ComponentConcept['platforms'] }>()
</script>

<template>
  <div class="platform-grid">
    <section
      v-for="platform in PLATFORMS"
      :key="platform"
      class="platform-card"
      :class="{ missing: !platforms[platform] }"
      :aria-labelledby="`platform-${platform}`"
    >
      <h3 :id="`platform-${platform}`" class="platform-label">{{ PLATFORM_LABELS[platform] }}</h3>
      <template v-if="platforms[platform]">
        <p class="platform-name">{{ platforms[platform]!.name }}</p>
        <dl class="api-list">
          <template v-for="(symbol, framework) in platforms[platform]!.api" :key="framework">
            <dt>{{ framework }}</dt>
            <dd>
              <code>{{ symbol }}</code>
            </dd>
          </template>
        </dl>
        <a v-if="platforms[platform]!.guideline" :href="platforms[platform]!.guideline" class="guideline">
          官方指南<span class="visually-hidden">（{{ PLATFORM_LABELS[platform] }}）</span>
        </a>
      </template>
      <p v-else class="platform-name none">此平台沒有對應組件</p>
    </section>
  </div>
</template>
