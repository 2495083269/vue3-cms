<template>
    <div>
        <el-dropdown>
            <div style="display: flex; align-items: center;">
                <el-avatar class="mr-3" :size="32"
                    src="../../assets/avatar.jpg" />
                <div class="el-dropdown-link" style="margin-left: 10px;">
                    个人中心
                </div>
            </div>

            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item divided>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.example-showcase .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
}
</style>