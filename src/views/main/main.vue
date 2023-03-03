<template>
    <div>
        <el-container class="common-layout">
            <el-aside class="main-aside" width="200px">
                <navMenu></navMenu>
            </el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>
                    <RouterView></RouterView>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import navMenu from '@/components/nav-menu/nav-menu.vue';

</script>

<style scoped lang="scss">
.common-layout {
    width: 100vw;
    height: 100vh;
}
.main-aside {
    height: 100%;
    background-color:#021a25 ;
}
</style>