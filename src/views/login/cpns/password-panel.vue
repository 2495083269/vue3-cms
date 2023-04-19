<template>
    <div>
        <!-- <el-input v-model="username" placeholder="请输入账号名称">
            <template #prefix>
                <i-ep-search></i-ep-search>
            </template>
        </el-input>
        <el-input v-model="password" placeholder="请输入密码">
            <template #prefix>
                <i-ep-search></i-ep-search>
            </template>
        </el-input> -->
        <el-form ref="ruleFormRef" :model="formLabel" :rules="rules">
            <el-form-item label="账号" prop="username">
                <el-input v-model="formLabel.username" placeholder="请输入账号">
                    <template #prefix>
                        <i-ep-User></i-ep-User>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="formLabel.password" show-password placeholder="请输入密码"><template #prefix>
                        <i-ep-Lock></i-ep-Lock>
                    </template>
                </el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useStore } from 'vuex';
import type { FormInstance, FormRules } from 'element-plus'
import localCache from '@/utils/cache'
const formLabel = reactive({
    username: '',
    password: '',
})
const store = useStore()
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
    username: [
        { required: true, message: '请输入账号名称', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入账号密码', trigger: 'blur' },
    ],
})
// 开始登录的方法
const loginAction = (isRember: boolean) => {
    console.log("点击了登录按钮~",ruleFormRef.value)
    ruleFormRef.value?.validate(valid => {
        if (valid) {
            if (isRember) {
                localCache.setCache('username', formLabel.username)
                localCache.setCache('password', formLabel.password)
            }else {
                localCache.deleteCache('username')
                localCache.deleteCache('password')
            }

            // 开始登录验证
            store.dispatch('login/accountLoginAction',{...formLabel})
        }
    })
}
// 暴露该组件中的申明
defineExpose({
    loginAction
})
</script>

<style scoped></style>