<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { mountDemo } from '../demos/behaviors'
import { findDemo } from '../demos/registry'
import type { Platform } from '../schema/constants'

const props = defineProps<{ platform: Platform; id: string }>()
const demo = computed(() => findDemo(props.platform, props.id))
const stage = ref<HTMLElement>()
let cleanup: (() => void) | undefined

onMounted(() => {
  if (stage.value) cleanup = mountDemo(stage.value)
})
onBeforeUnmount(() => cleanup?.())
</script>

<template>
  <div v-if="demo" class="demo-stage">
    <!-- eslint-disable-next-line vue/no-v-html -- trusted: build-time files from src/demos, not user input -->
    <div ref="stage" :class="`demo demo-${platform} demo-live`" v-html="demo.html" />
    <details class="demo-source">
      <summary>HTML 原始碼</summary>
      <pre><code>{{ demo.html.trim() }}</code></pre>
    </details>
  </div>
  <p v-else class="demo-missing">這個平台的可互動範例還在製作中。</p>
</template>
