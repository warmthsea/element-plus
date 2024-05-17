<template>
  <el-drag-box
    v-model="input"
    style="width: 240px"
    placeholder="Please input 666"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('1234')
</script>
