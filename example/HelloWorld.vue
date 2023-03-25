<script setup lang="ts">
/**
 * props...
 */
defineProps<{
    /**
     * @default ''
     */
    msg: string
}>()
</script>

<template>
    <div>
{{ msg }}
    </div>
</template>



