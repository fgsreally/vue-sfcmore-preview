<script setup lang="ts">
import PreviewProd from '../src/PreviewProd.vue'
import PreviewDev from '../src/PreviewDev.vue'
import { ref } from 'vue'

const isDev = ref(true)
const importmap = { vue: 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.47/vue.esm-browser.min.js' }
const url='/example/HelloWorld.vue'
const projects = [
  {
    id: '测试项目',
    label: 'test',
    components: [
      {
        id: '测试项目',
        label: 'test',
        url: '/test.js',
        cssUrl: 'http://localhost:4100/test.css',
        metaUrl: 'http://localhost:4100/test.addon.js',

      },
    ],
  },
]
</script>

<template>
  <button @clikc="isDev = !isDev">change mode</button>
    <PreviewDev v-if="isDev" :url="url"></PreviewDev>
    <PreviewProd v-else :importmap="importmap" :projects="projects" />
</template>

