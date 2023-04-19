<template>
    <div>
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>个人信息</span>
                    <el-button class="button" text>编辑</el-button>
                </div>
            </template>
            <el-form :model="form" label-width="120px">
                <el-form-item label="用户名">
                    <div>{{ form.username }}</div>
                </el-form-item>
                <el-form-item label="真实姓名">
                    <div>{{ form.nickname }}</div>
                </el-form-item>
                <el-form-item label="邮箱">
                    <div>{{ form.email }}</div>
                </el-form-item>
                <el-form-item label="头像">
                    <div>{{ form.pic_img }}</div>
                </el-form-item>
            </el-form>
            <div class="card-header" style="margin-top: 30px;">
                <el-button>修改密码</el-button>
                <el-button type="primary" @click="router.go(-1)">返回</el-button>
            </div>

        </el-card>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { getUserinfo } from '@/service/login/loginApi'
import router from '@/router'

const form = reactive({
    username: '',
    nickname: '',
    email: '',
    pic_img: '',
})
const getFormData = async () => {
    const res = (await getUserinfo()).result
    form.username = res.username
    form.nickname = res.nickname
    form.email = res.emial
    form.pic_img = res.pic_img

}
getFormData()
</script>

<style scoped>
.box-card {
    width: 40%;
    margin: 0 auto;
    margin-top: 40px;

}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.button {
    color: rgb(60, 122, 204);
}
</style>