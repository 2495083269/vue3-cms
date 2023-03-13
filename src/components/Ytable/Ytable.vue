<template>
    <div>
        <el-table :data="userlist" border style="width: 100%">
            <template v-for="item in propList" :key="item.prop">
                <el-table-column v-bind="item" align="center" >
                    <!-- 定义一个动态作用域插槽，用于格式化任意一列 -->
                    <template #default="scope">
                        <slot :name="item.soltName" :row="scope.row">{{ scope.row[item.prop] }}</slot>
                    </template>
                </el-table-column>
            </template>
        </el-table>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    userlist: any[],
    propList: any[]
}>()
</script>

<style scoped></style>