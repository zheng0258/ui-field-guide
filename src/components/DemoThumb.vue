<script setup lang="ts">
import { computed } from 'vue'
import { findDemo } from '../demos/registry'
import type { Platform } from '../schema/constants'

const props = defineProps<{ platform: Platform; id: string; label: string }>()
const demo = computed(() => findDemo(props.platform, props.id))
</script>

<template>
  <!-- Thumbnails are pictures, not controls: inert keeps them out of focus order and pointer events. -->
  <div class="demo-thumb" aria-hidden="true">
    <!-- eslint-disable-next-line vue/no-v-html -- trusted: build-time files from src/demos, not user input -->
    <div v-if="demo" :class="`demo demo-${platform} demo-thumb-stage`" inert v-html="demo.thumb" />
    <div v-else class="demo-thumb-empty">
      <span>{{ label }}</span>
      <small>範例製作中</small>
    </div>
  </div>
</template>
