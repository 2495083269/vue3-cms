<template>
    <div>
        <baseEcharts :options="options"></baseEcharts>
    </div>
</template>

<script setup lang="ts">
import '@/assets/js/chain.js'
import { defineProps, computed } from 'vue';
import baseEcharts from './baseEcharts.vue';

const props = defineProps<{
    data: any
}>()
const options = computed(() => {
    return {
        tooltip: {
            show: true,
            fomatter: '{a}-{b}:{c}人'
        },
        visualMap: [{ // 视觉映射组件
            type: 'piecewise'

        }],
        geo: {
            map:'china',
            label: {
                show: true
            },
            emphasis: {
                areaColor: 'pick'
            }
        },
        series: [{
            name: '地图',
            type: 'map',
            geoIndex: 0,
            data: props.data
        }]
    }
})
</script>

<style scoped>

</style>