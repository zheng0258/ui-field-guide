<script setup lang="ts">
import { useHead } from '@unhead/vue'
import SiteFooter from './components/SiteFooter.vue'

useHead({ titleTemplate: (title) => (title ? `${title} · UI Field Guide` : 'UI Field Guide') })
</script>

<template>
  <a class="skip-link" href="#main">跳到主要內容</a>
  <header class="site-header">
    <RouterLink to="/" class="brand">
      <span class="brand-name">UI Field Guide</span>
      <span class="brand-tagline">Spot it, name it, prompt it.</span>
    </RouterLink>
  </header>
  <main id="main" tabindex="-1">
    <RouterView />
  </main>
  <SiteFooter />
</template>
