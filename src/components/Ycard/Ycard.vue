<template>
    <div>
        <el-card>
            <template #header>
                <div class="card-header">
                    <span>{{ title }}</span>
                </div>
            </template>
            <slot></slot>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps<{
    title: string
}>()

</script>

<style scoped>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

</style>