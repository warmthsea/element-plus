<template>
  <div>
    <el-select v-model="value">
      <!-- <el-option
        v-for="value in ['1.', '2.', '3.']"
        :key="value"
        :label="value"
        :value="value"
      ></el-option> -->
    </el-select>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
</script>
<style></style>
