<template>
    <!-- 菜单导航栏 -->
    <div>
        <navTitle></navTitle>
        <el-menu :default-active="defaultValue" class="el-menu-vertical-demo" :unique-opened="true" background-color="#021a25"
            text-color="#ffffff">
            <template v-for="(item, index) in menuData" :key="index">
                <template v-if="item.children">
                    <el-sub-menu :index="item.id">
                        <template #title>
                            <!-- 通过icon的名称格式化为组件，组件方式引入才能使用 -->
                            <!-- <el-icon v-if="item.icon">
                                <component :is="item.icon" style="width: 16px; height: 16px" />
                            </el-icon> -->
                            <span>{{ item.name }}</span>
                        </template>
                        <template v-for="(subitem, subIndex) in item.children" :key="subIndex">
                            <el-menu-item-group>
                                <el-menu-item :index="subitem.id" @click="handleMenuItemClick(subitem.path)">{{ subitem.name }}</el-menu-item>
                            </el-menu-item-group>
                        </template>
                    </el-sub-menu>

                </template>
                <template v-else>
                    <el-menu-item :index="item.id" @click="handleMenuItemClick(item.path)">
                        <!-- <el-icon v-if="item.icon">
                            {{item.icon}}
                            </el-icon> -->
                        <template #title>{{ item.name }}</template>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import navTitle from './nav-title.vue';
import { menuData } from '@/utils/menuData'
import { useRouter,useRoute } from 'vue-router';
import { ref } from 'vue';
import { pathMapToRouter } from '@/utils/map-menus'



// 获取当前页面的路径
const route = useRoute()
const currentPath  = route.path
// 将当前路径和菜单进行匹配
const menu = pathMapToRouter(menuData,currentPath)
console.log("获取到的id值",menu.id)
const defaultValue = ref(menu.id)

const router = useRouter()
const handleMenuItemClick = (path: any) => {
    router.push({
        path: path ?? '/not-found'
    })
}

</script>

<style scoped lang="scss">
// .el-menu-vertical-demo {
//     background-color: rgb(1, 17, 31);
//     color: #fff !important;
// }
.el-menu {
    border-right: none;
}

// ::v-deep.el-menu-item-group__title {
//     padding: 0px !important;
// }
// .el-menu-item,.el-sub-menu {
//     color: #fff !important;
//     background-color: rgb(1, 17, 31);
// }
// ::v-deep .el-sub-menu__title {
//     color: #fff !important;
// }
</style>