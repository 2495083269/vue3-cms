<template>
    <div class="login-panel">
        <div>
            <div class="login-title">{{ title }}</div>
            <el-tabs v-model="activeName" type="border-card" stretch class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane name="first">
                    <template #label>
                        <span class="custom-tabs-label">
                            <!-- icon以这种格式写才生效 -->
                            <el-icon>
                                <i-ep-User></i-ep-User>
                            </el-icon>
                            <span>账号登录</span>
                        </span>
                    </template>
                    <password-panel ref="passwordRef"></password-panel>
                </el-tab-pane>
                <el-tab-pane name="seconed">
                    <template #label>
                        <span class="custom-tabs-label">
                            <el-icon>
                                <i-ep-Iphone></i-ep-Iphone>
                            </el-icon>
                            <span>手机登录</span>
                        </span>
                    </template>
                    <phone-coed-panel ref="phonecodeRef"></phone-coed-panel>
                </el-tab-pane>
            </el-tabs>
            <div class="tabs-bottom" v-show="isShowbottom">
                <el-checkbox v-model="isRember" label="记住密码" size="large" />
                <el-link type="primary" :underline="false">忘记密码</el-link>
            </div>
            <el-button class="button" type="primary" @click="handelLoginClick">登录</el-button>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'


// 引入页面
import passwordPanel from './password-panel.vue'
import phoneCoedPanel from './phoneCoed-panel.vue'

defineProps({
    title: String
})

const isShowbottom = ref(true)
const isRember = ref(true)
const activeName = ref<string>('first')

// 调用子组件的方法
const passwordRef = ref<InstanceType<typeof passwordPanel>>()
const phonecodeRef = ref<InstanceType<typeof phoneCoedPanel>>()

// 点击登录的方法
const handelLoginClick = () => {
    console.log('立即登录', passwordRef.value)
    if (activeName.value == 'seconed') {
        // 调用手机登录页面的登录方法
        // phonecodeRef.value?
    } else {
        passwordRef.value?.loginAction(isRember.value)
    }

}

// 点击tabs的方法
const handleClick = (tab: TabsPaneContext, event: Event) => {
    if (tab.paneName == 'seconed') {
        isShowbottom.value = false
    } else {
        isShowbottom.value = true
    }
    console.log(tab.paneName, activeName.value)
}
</script>

<style scoped lang="scss">
.login-panel {
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;

    .login-title {
        text-align: center;
        margin-bottom: 10px;
    }
}

.demo-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}

.demo-tabs .custom-tabs-label .el-icon {
    vertical-align: middle;
}

.demo-tabs .custom-tabs-label span {
    vertical-align: middle;
    margin-left: 4px;
}

.tabs-bottom {
    display: flex;
    justify-content: space-between;
}

.button {
    width: 100%;
    margin-top: 20px;
}
</style>
