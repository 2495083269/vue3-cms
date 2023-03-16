<template>
    <div>
        <div ref="echartDivRef" :style="{width:width,height:height}"></div>
    </div>
</template>

<script setup lang="ts">
import useEcharts from '@/hooks/echart/useEcharts';
import { ref, onMounted,defineProps, withDefaults, watchEffect } from 'vue';
import { EChartsOption } from 'echarts';

const props = withDefaults(defineProps<{
    width?: string,
    height?: string
    options: any // EChartsOption
}>(),{
    width: '100%',
    height: '360px'
})
const echartDivRef = ref<HTMLElement>()

onMounted(() => {
    const echartInstance = useEcharts(echartDivRef.value!)
    watchEffect(() => {
        echartInstance.setOptions(props.options)
    })
})

</script>

<style scoped>

</style>