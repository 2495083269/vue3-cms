<template>
    <div>
        <el-dropdown>
            <div style="display: flex; align-items: center;">
                <el-avatar class="mr-3" :size="32" src="../../assets/avatar.jpg" />
                <div class="el-dropdown-link" style="margin-left: 10px;">
                    个人中心
                </div>
            </div>

            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item @click="router.push('/personal')">个人中心</el-dropdown-item>
                    <el-dropdown-item divided @click="showDialogVisible = true">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>

        <el-dialog v-model="showDialogVisible" width="300px" center>
            <span>确定退出登录吗?</span>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="showDialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="handleQuit">
                        确定
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import localCache from '@/utils/cache'
import router from '@/router'

const showDialogVisible = ref(false)
const handleQuit = () => {
    showDialogVisible.value = false
    localCache.deleteCache('token')
    router.push('/login')
}

</script>

<style scoped lang="scss">
.example-showcase .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
}
</style>