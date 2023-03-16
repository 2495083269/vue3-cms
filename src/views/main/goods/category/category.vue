<template>
  <div class="category">
    <el-row :gutter="10">
      <el-col :span="7">
        <Ycard title="商品类别">
          <template #default>
            <pieEchart :pie-data="pieData" />
          </template>
        </Ycard>
      </el-col>
      <el-col :span="10">
        <Ycard title="不同城市商品销量">
          <template #default>
            <chinaEchart :data="chinaData"></chinaEchart>
          </template>
        </Ycard>
      </el-col>
      <el-col :span="7">
        <Ycard title="商品类别（玫瑰图）">
          <template #default>
            <pieEchart :pie-data="pieData" :rose-type="'area'" :roseRadius="[10,120]" />
          </template>
        </Ycard>
      </el-col>
    </el-row>
    <el-row :gutter="10" style="margin-top: 10px;">
      <el-col :span="12">
        <Ycard title="折线图">
          <template #default>
            <lineEchart></lineEchart>
          </template>
        </Ycard>
      </el-col>
      <el-col :span="12">
        <Ycard title="柱状图">
          <template #default>
            <barEchart></barEchart>
          </template>
        </Ycard>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { pieData, chinaData } from '@/utils/echartsData';
import pieEchart from '@/base-ui/echarts/src/pieEchart.vue';
import Ycard from '@/components/Ycard/Ycard.vue'
import lineEchart from '@/base-ui/echarts/src/lineEchart.vue';
import barEchart from '@/base-ui/echarts/src/barEchart.vue';
import chinaEchart from '@/base-ui/echarts/src/chinaEchart.vue';

</script>

<style scoped></style>
