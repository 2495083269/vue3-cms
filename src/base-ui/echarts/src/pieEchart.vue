<template>
    <div>
        <baseEcharts :options="options"></baseEcharts>
    </div>
</template>

<script setup lang="ts">
import baseEcharts from './baseEcharts.vue';
import { defineProps, computed, withDefaults } from 'vue'
import { IOptions, roseType } from '../type/type';

const props = withDefaults(defineProps<{
    pieData: IOptions[],
    roseType?: roseType,
    roseRadius?: any
}>(),{
    roseRadius: '50%'
})

const options = computed(() => {
    return {
        // title: {
        //     text: 'Referer of a Website',
        //     subtext: 'Fake Data',
        //     left: 'center'
        // },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                name: '商品销量',
                type: 'pie',
                radius: props.roseRadius,
                roseType: props.roseType,
                data: props.pieData,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    }
})

</script>

<style scoped></style>