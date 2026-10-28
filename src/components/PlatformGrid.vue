<script setup lang="ts">
import { PLATFORM_LABELS, PLATFORMS, type Platform } from '../schema/constants'
import type { ComponentConcept } from '../schema'

defineProps<{ id: string; platforms: ComponentConcept['platforms']; current: Platform }>()
</script>

<template>
  <div class="platform-grid">
    <section
      v-for="platform in PLATFORMS"
      :key="platform"
      class="platform-card"
      :class="{ missing: !platforms[platform], current: platform === current }"
      :aria-labelledby="`platform-${platform}`"
    >
      <h3 :id="`platform-${platform}`" class="platform-label">
        {{ PLATFORM_LABELS[platform] }}<span v-if="platform === current" class="badge">目前</span>
      </h3>
      <template v-if="platforms[platform]">
        <p class="platform-name">
          <RouterLink v-if="platform !== current" :to="`/${platform}/${id}`">{{
            platforms[platform]!.name
          }}</RouterLink>
          <template v-else>{{ platforms[platform]!.name }}</template>
        </p>
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
