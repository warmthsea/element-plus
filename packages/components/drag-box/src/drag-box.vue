<template>
  <div class="el-otp-input">
    <input v-for="i in props.length" :key="i" />
  </div>
</template>

<script lang="ts" setup>
import { dragBoxEmits, dragBoxProps } from './drag-box'

defineOptions({
  name: 'ElOtpInput',
  inheritAttrs: false,
})

const props = defineProps(dragBoxProps)
const emit = defineEmits(dragBoxEmits)
</script>
