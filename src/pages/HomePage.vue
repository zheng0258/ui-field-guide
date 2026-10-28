<script setup lang="ts">
import { useHead } from '@unhead/vue'
import ConceptSearch from '../components/ConceptSearch.vue'
import { conceptsOn } from '../content/store'
import { demoKeys } from '../demos/registry'
import { PLATFORM_LABELS, PLATFORMS, type Platform } from '../schema/constants'

useHead({ title: '' })

const demoCount = (platform: Platform) => demoKeys().filter((key) => key.startsWith(`${platform}/`)).length
const blurbs: Record<Platform, string> = {
  macos: 'AppKit 與 SwiftUI 的桌面控制項',
  ios: 'UIKit 與 SwiftUI 的觸控組件',
  android: 'Material 3、Jetpack Compose 與 View',
  web: '原生 HTML 與 WAI-ARIA 模式',
}
</script>

<template>
  <section class="hero">
    <h1>看到一個 UI，叫出它的名字</h1>
    <p class="lead">先選平台，再從縮圖找到你看到的組件：正式名稱、API、可互動範例，以及一鍵複製給 AI 的 prompt。</p>
  </section>

  <nav aria-labelledby="platforms-heading">
    <h2 id="platforms-heading">選擇平台</h2>
    <ul class="platform-picker">
      <li v-for="platform in PLATFORMS" :key="platform">
        <RouterLink :to="`/${platform}`" class="platform-tile" :class="`platform-tile-${platform}`">
          <span class="platform-tile-name">{{ PLATFORM_LABELS[platform] }}</span>
          <span class="platform-tile-blurb">{{ blurbs[platform] }}</span>
          <span class="platform-tile-meta">
            {{ conceptsOn(platform).length }} 個組件 ·
            {{ demoCount(platform) > 0 ? `${demoCount(platform)} 個範例` : '範例製作中' }}
          </span>
        </RouterLink>
      </li>
    </ul>
  </nav>

  <ConceptSearch />
</template>
