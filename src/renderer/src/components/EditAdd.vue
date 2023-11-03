<script setup lang="ts">
import { ref } from 'vue'
import { Task } from '../../../interfaces/main';
import Input from "./Input.vue";
import Modal from "./Modal.vue";
import TextArea from './TextArea.vue';

const emit = defineEmits(['closeModal', 'updatingData'])
const props = defineProps<{ oldTask: Task | null, index: number, subTask: boolean | null, fatherIndx: number }>()

let editing = false

const item = ref<Task>({
  name: '',
  description: '',
  finished: false,
  image: '',
  subTasks: []
})

if (props.oldTask != null) {
  editing = true
  item.value = props.oldTask
}

const editingTask = (newTask: Task) => {
  if (props.subTask) return window.api.editSubTask(newTask, props.index, props.fatherIndx)
  return window.api.updateTask(newTask, props.index)
}

const newTask = (newTask: Task) => {
  if (props.subTask) return window.api.newSubTask(newTask, props.index)
  return window.api.newTask(newTask)
}

const saveTask = () => {
  const newItemValue = JSON.parse(JSON.stringify(item.value));
  emit('updatingData', editing ? editingTask(newItemValue) : newTask(newItemValue));
}

const cancel = () => {
  emit('closeModal');
}
</script>

<template>
  <Modal styles="margin: 0; width: 500px; z-index: 2">
    <Input label="Name" v-model="item.name" placeholder="Write here the name of your task!" />
    <TextArea label="Description" v-model="item.description" placeholder="Write here the description of your task!" />
    <button class="secondary" style="margin-right: 1%" @click="cancel">Cancel</button>
    <button @click="saveTask">Save Task</button>
  </Modal>
</template>

<style lang="less" scoped></style>
