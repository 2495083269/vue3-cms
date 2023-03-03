<template>
    <div>
        <el-form ref="ruleFormRef" :model="formLabel" :rules="rules">
            <el-form-item label="手机号" prop="username">
                <el-input v-model="formLabel.phonenumber" placeholder="请输入手机号码" />
            </el-form-item>
            <el-form-item label="验证码" prop="password">
                <div class="phone-code">
                    <el-input v-model="formLabel.phonecode" placeholder="请输入验证码" />
                    <el-button style="marginLeft: 10px" type="success">验证码</el-button>
                </div>

            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
const formLabel = reactive({
    phonenumber: '',
    phonecode: '',
})
const rules = reactive<FormRules>({
    username: [
        { required: true, message: '请输入手机号码', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入验证码', trigger: 'blur' },
    ],
})
</script>

<style scoped>
.phone-code {
    display: flex;
}
</style>