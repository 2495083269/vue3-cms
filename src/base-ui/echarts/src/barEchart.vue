<template>
    <div>
        <baseEcharts :options="options"></baseEcharts>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import * as echarts from 'echarts'
import baseEcharts from './baseEcharts.vue';

const options = computed(() => {
    return {
        // title: {
        //     text: '特性示例：渐变色 阴影 点击缩放',
        //     subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
        // },
        xAxis: {
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLabel: {
                inside: true,
                color: '#fff'
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            z: 10
        },
        yAxis: {
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#999'
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        series: [
            {
                type: 'bar',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#83bff6' },
                        { offset: 0.5, color: '#188df0' },
                        { offset: 1, color: '#188df0' }
                    ])
                },
                emphasis: {
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#2378f7' },
                            { offset: 0.7, color: '#2378f7' },
                            { offset: 1, color: '#83bff6' }
                        ])
                    }
                },
                data: [20, 30, 40, 50, 60, 70, 80]
            }
        ]
    };
})
</script>

<style scoped></style>