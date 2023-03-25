<script setup lang="ts">
import { ref, watch } from 'vue'
import { createIframeHtml } from '../helper/iframeChannel'
const props = defineProps<{
  url: string
  cssUrl?: string
  propsData: Object
  importmap: Record<string, string>
}>()

const el = ref<HTMLIFrameElement>(null as any)

watch(() => props.url, (n) => {
  el.value.contentWindow!.load(props.url, props.cssUrl, props.propsData)
})
watch(() => props.propsData, (n) => {
  el.value.contentWindow!.update(props.propsData)
})
</script>

<template>
  <iframe ref="el" :srcdoc="createIframeHtml(importmap)" width="100%" height="100%" class="story_iframe" />
</template>
