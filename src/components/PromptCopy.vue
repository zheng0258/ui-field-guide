<script setup lang="ts">
import { computed, ref } from 'vue'
import { buildCodingPrompt } from '../prompt'
import { PLATFORM_LABELS, PLATFORMS } from '../schema/constants'
import type { Concept, Platform } from '../schema'
import { concepts } from '../content/store'

const props = defineProps<{ concept: Concept; platform?: Platform }>()

const available = computed(() =>
  PLATFORMS.filter((platform) => 'platforms' in props.concept && props.concept.platforms?.[platform]),
)
const platform = ref<Platform | undefined>(props.platform ?? available.value[0])
const prompt = computed(() => buildCodingPrompt(props.concept, concepts, platform.value))
const status = ref('')

async function copy() {
  try {
    await navigator.clipboard.writeText(prompt.value)
    status.value = '已複製'
  } catch {
    status.value = '無法存取剪貼簿，請手動選取文字複製'
  }
}
</script>

<template>
  <div class="prompt-copy">
    <div class="prompt-toolbar">
      <label for="prompt-platform">平台</label>
      <select id="prompt-platform" v-model="platform">
        <option v-for="option in available" :key="option" :value="option">{{ PLATFORM_LABELS[option] }}</option>
      </select>
      <button type="button" class="copy-button" @click="copy">複製 prompt</button>
      <span class="copy-status" role="status">{{ status }}</span>
    </div>
    <pre class="prompt-text"><code>{{ prompt }}</code></pre>
  </div>
</template>
