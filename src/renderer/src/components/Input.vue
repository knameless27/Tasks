<script setup lang="ts">
import { basicPropsInput } from '@main_interfaces/main';

// import { ref } from 'vue'
const emit = defineEmits(['update:modelValue'])
const { label, placeholder, modelValue } = defineProps<basicPropsInput>()
</script>

<template>
  <div class="__input_container">
    <label :for="`__${label}`">{{ label }}</label>
    <input type="text" :id="`__${label}`" :placeholder="placeholder" :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)">
  </div>
</template>

<style lang="less" scoped></style>
