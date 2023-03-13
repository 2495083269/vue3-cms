<template>
    <div>
        <div>
            <slot name="header"></slot>
        </div>
        <el-form label-width="120px">
            <el-row :gutter="10">
                <template v-for="(item,index) in formItem" :key="index">
                    <el-col :xs="16" :sm="14" :md="12" :lg="10" :xl="8">
                        <el-form-item :label="item.label">
                            <template v-if="item.type == 'input'">
                                <el-input v-model="formData[item.name]" :placeholder="item.placeholder" />
                            </template>
                            <template v-if="item.type == 'select'">
                                <el-select :placeholder="item.placeholder" v-model="formData[item.name]">
                                    <el-option v-for="items in item.options" :key="items.value" :label="items.label"
                                        :value="items.value" />
                                </el-select>
                            </template>
                            <template v-if="item.type == 'dateSelect'">
                                <el-date-picker :type="item.mode" v-model="formData[`${item.name}`]" :placeholder="item.placeholder" />
                            </template>
                            <template v-if="item.type == 'rangePicker'">
                                <el-date-picker :type="item.mode" v-model="formData[`${item.name}`]" v-bind="item.otherOptions" />
                            </template>
                        </el-form-item>
                    </el-col>
                </template>

            </el-row>

           
        </el-form>
        <div>
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IFormData } from '@/utils/formType'
import { ref, watch } from 'vue';

const props = defineProps<{
    formItem: IFormData[],
    modelValue: object
}>()
// 浅拷贝props中的数据
const formData = ref({...props.formItem})
// 通过监听实现值的双向绑定
const emit = defineEmits(['update:modelValue'])
watch(formData,(newValue) => emit('update:modelValue',newValue),{
    deep: true
})

</script>

<style scoped></style>
