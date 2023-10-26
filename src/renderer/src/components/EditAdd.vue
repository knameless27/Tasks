<script setup lang="ts">
// import { ref } from 'vue'
import Modal from "./Modal.vue";

const emit = defineEmits(['closeModal'])
</script>

<template>
  <Modal>
    sexito
    <button @click="emit('closeModal')">xdddd</button>
  </Modal>
</template>

<style lang="less" scoped>
</style>
