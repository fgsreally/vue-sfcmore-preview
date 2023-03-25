export const virtualStr=`import { createApp } from 'vue'
import Preview from './App.vue'

createApp(Preview,{url:location.hash.slice(1)}).mount('#app')
`