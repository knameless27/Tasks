<script setup lang="ts">
import { basicPropsInput } from '../../../interfaces/main';

// import { ref } from 'vue'
const emit = defineEmits(['update:modelValue'])
const { label, placeholder, modelValue } = defineProps<basicPropsInput>()
</script>

<template>
  <div class="__textarea_container">
    <label :for="`__${label}`">{{ label }}</label>
    <textarea :id="`__${label}`" :placeholder="placeholder" :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"></textarea>
  </div>
</template>

<style lang="less" scoped></style>
