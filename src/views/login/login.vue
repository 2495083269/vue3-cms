<template>
    <div class="login">
        <LoginPanel :title="'后台管理系统'"/>
    </div>
</template>

<script setup lang="ts">
import LoginPanel from './cpns/login-panel.vue';
</script>

<style lang="scss" scoped>
.login {
    width: 100%;
    height: 100%;
    background-image: url('../../assets/background.svg');
    background-size: 100%;
}
</style>