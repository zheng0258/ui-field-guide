<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({ title: '找不到頁面' })
</script>

<template>
  <section class="not-found">
    <h1>找不到這個頁面</h1>
    <p><RouterLink to="/">回首頁搜尋組件</RouterLink></p>
  </section>
</template>
