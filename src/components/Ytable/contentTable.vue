<template>
    <div>
        <Ytable :userlist="userlist" :prop-list="propList">
            <template #status="scope">
                <!-- <el-switch v-model="scope.row.state" active-value="1" inactive-value="0" /> -->
                <el-button plain size="small" :type="scope.row.state == 1 ? 'success' : 'danger'">{{ scope.row.state == 1 ?
                    '禁用' : '启用' }}</el-button>
            </template>
            <template #createTime="scope">
                <strong> {{ $filters.formatTime(scope.row.createTime) }}</strong>
            </template>
            <template #action>
                <el-button size="small" text type="primary"><i-ep-Edit></i-ep-Edit>编辑</el-button>
                <el-button size="small" text type="primary"><i-ep-delete></i-ep-delete>删除</el-button>
            </template>
            <!-- 封装多层插槽，动态绑定插槽 -->
            <template v-for="item in otherPropList" :key="item.prop" #[item.soltName]="scope">
                <template v-if="item.soltName">
                    <slot :name="item.soltName" :row="scope.row"></slot>
                </template>
            </template> 
        </Ytable>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    userlist: any[],
    propList: any[]
}>()
// 遍历上级传递的数据，去除不用再次封装的插槽
const otherPropList = props.propList?.filter(item => {
    if (item.soltName == 'status') return false
    if (item.soltName == 'createTime') return false
    if (item.soltName == 'action') return false
    return true
})
</script>

<style scoped>
.el-button {
    margin-left: 0;
}
</style>