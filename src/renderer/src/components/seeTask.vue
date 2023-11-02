<script setup lang="ts">
import { ref } from 'vue'
import { Task } from '../../../interfaces/main';
import Modal from "./Modal.vue";

const emit = defineEmits(['closeModal'])
const props = defineProps<{ task: Task, index: number }>()

const item = ref<Task>()

item.value = props.task

const cancel = () => {
  emit('closeModal');
}
</script>

<template>
  <Modal styles="margin: 0; width: 500px">
    <h1>{{item?.name}}</h1>
    <button class="secondary" style="margin-right: 1%" @click="cancel">Cancel</button>
  </Modal>
</template>

<style lang="less" scoped></style>
