<template>
    <div>
        <el-container class="common-layout">
            <el-aside class="main-aside" width="200px">
                <navMenu></navMenu>
            </el-aside>
            <el-container>
                <el-header>
                    <navHeader></navHeader>
                </el-header>
                <el-main>
                    <el-card>
                        <RouterView></RouterView>

                    </el-card>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import navMenu from '@/components/nav-menu/nav-menu.vue';
import navHeader from '@/components/nav-header/nav-header.vue';

</script>

<style scoped lang="scss">
.common-layout {
    width: 100vw;
    height: 100vh;
}

.main-aside {
    height: 100%;
    background-color: #021a25;
}

.el-header {
    background-color: #FFFFFF;
    border-bottom: 1px solid #cccc;
}
</style>