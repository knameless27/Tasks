<script setup lang="ts">
import { ref } from 'vue'
import { Task } from '../../../interfaces/main';
import Modal from "./Modal.vue";
import Lists from './Lists.vue';
import EditAdd from './EditAdd.vue';

const emit = defineEmits(['closeModal', 'getTasks'])
const seeModal = ref(false)
const props = defineProps<{ task: Task, index: number }>()
const oldTask = ref<Task | null>(null)
const indx = ref(-1)

const item = ref<Task>(props.task)

const cancel = () => {
  emit('closeModal');
}

const closingModal = () => {
  seeModal.value = false
  oldTask.value = null
  emit('getTasks')
}

const updatingData = (task: Task) => {
  item.value = task
  seeModal.value = false
  oldTask.value = null
}

const editTask = ({ task, index }) => {
  seeModal.value = true
  oldTask.value = task
  indx.value = index
}

const delTask = (index: number) => {
  item.value = window.api.deleteSubTask(index, props.index)
}

const newTask = () => {
  seeModal.value = true
  indx.value = props.index
}

</script>

<template>
  <EditAdd v-if="seeModal" @closeModal="closingModal" @updating-data="updatingData" :oldTask="oldTask" :index="indx" :subTask="true"
    :fatherIndx="props.index" />
  <Modal styles="margin: 0; width: 500px">
    <div class="container">
      <h1>{{ item?.name }}</h1>
      <button @click="newTask">New Sub Task</button>
    </div>
    <div class="description">
      {{ item?.description }}
    </div>
    <Lists @editTask="editTask" @del-task="delTask" :tasks="item.subTasks" />
    <button class="secondary" style="margin-top: 2%" @click="cancel">Ok</button>
  </Modal>
</template>

<style lang="less" scoped>
.container {
  display: grid;
  grid-template-columns: 5fr 2fr;
}
</style>
