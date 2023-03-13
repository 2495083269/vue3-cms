<template>
    <div class="nav-header">
        <div>
            <el-breadcrumb separator="/">
                <template v-for="(item, index) in breadCrumbs" :key="index">
                    <el-breadcrumb-item :to="{ path: item.path }">{{ item.name }}</el-breadcrumb-item>
                </template>
            </el-breadcrumb>
        </div>
        <div>
            <navMain></navMain>
        </div>

    </div>
</template>

<script setup lang="ts">
import navMain from './nav-main.vue';
import { pathMapToBreadcrumb } from '@/utils/map-menus'
import { menuData } from '@/utils/menuData'
import { useRoute } from 'vue-router';
import { computed } from '@vue/reactivity';


const breadCrumbs = computed(() => {
    const route = useRoute()
    const currentPath = route.path
    return pathMapToBreadcrumb(menuData, currentPath)
})
</script>

<style scoped>
.nav-header {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>