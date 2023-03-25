<script setup lang="ts">
import { Pane, Splitpanes } from 'splitpanes'
import { computed, ref } from 'vue'
import 'splitpanes/dist/splitpanes.css'
import PropsPane from '../components/PropsPane.vue'
import { metaToPropsValue } from '../helper/vueTypeMeta'
import NormalCanvas from '../components/NormalCanvas.vue'
const { url } = defineProps<{ url: string }>()

const metaProps = ref<any>(null)


async function loadAddon() {
    const { metadata } = await import(url)
    metaProps.value = metadata
}
loadAddon()

const propsData = computed(() => {
    const data = {}
    return metaProps.value ? metaToPropsValue(data, metaProps.value) : data
})


</script>

<template>
    <Splitpanes>
        <Pane>
            <Splitpanes horizontal>
                <Pane>
                    <NormalCanvas :url="url" :props-data="propsData" />
                </Pane>
                <Pane>
                    <PropsPane ref="pane" :meta="metaProps" />
                </Pane>
            </Splitpanes>
        </Pane>
    </Splitpanes>
</template>

