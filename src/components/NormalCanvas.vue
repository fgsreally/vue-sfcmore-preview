
<script setup lang="ts">
import { render, watch,ref,h } from 'vue';
const el = ref<HTMLElement>(null as any)
const props = defineProps<{ propsData: any, url: string }>()
watch(props, async () => {
    const { default: comp } = await import(props.url)
    render(h(comp, { ...props.propsData }), el.value)
})

</script>
<template>
    <div ref="el">

    </div>
</template>


