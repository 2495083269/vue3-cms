<template>
  <div class="user">
    <contentTable :userlist="userlist" :prop-list="userPropList"></contentTable>
  </div>
</template>

<script lang="ts" setup>
import contentTable from '@/components/Ytable/contentTable.vue';
import { userlist } from '@/utils/tableData'
import { userPropList } from './userSearchTable'


</script>

<style scoped>

</style>
