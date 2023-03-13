<template>
  <div>
    <Yform :form-item="formData" v-model="formModel">
      <template #header>
        <h2>高级检索</h2>
      </template>
      <template #footer>
        <el-row>
          <el-col :span="24" :style="{ textAlign: 'right' }">
            <el-button @click="handleRessetForm">重置</el-button>
            <el-button type="primary" @click="handleFormDate">确定</el-button>
          </el-col>
        </el-row>

      </template>
    </Yform>
  </div>
</template>

<script setup lang="ts">
import { formData } from '@/utils/formData'
import Yform from '@/components/Yform/Yform.vue'
import { ref } from 'vue';


// 动态绑定formModel的值
const formItem: any = {}
for (const item of formData) {
  formItem[item.name] = ''
}
const formModel = ref(formItem)
console.log("绑定到的表单的值",formModel.value)

const handleFormDate = () =>  {
  console.log("是否获取到表单的结果",formModel.value)
}

const handleRessetForm = () => {
  for (const key in formItem) {
    formModel.value[key] = formItem[key]
  }
}

</script>

<style scoped></style>
