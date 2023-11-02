<script setup lang="ts">
import { ref } from 'vue'
import { Task } from '../../../interfaces/main';
import Modal from "./Modal.vue";
import Lists from './Lists.vue';
import SeeTask from './seeTask.vue';

const emit = defineEmits(['closeModal'])
const seeModal = ref(false)
const props = defineProps<{ task: Task, index: number }>()
const seeTaskModal = ref(false)
const oldTask = ref<Task | null>(null)
const tempTask = ref<Task>({
  name: '',
  description: '',
  finished: false,
  image: '',
  subTasks: []
})
const indx = ref(-1)

const item = ref<Task>()

item.value = props.task

const cancel = () => {
  emit('closeModal');
}

const editTask = ({ task, index }) => {
  seeModal.value = true
  oldTask.value = task
  indx.value = index
}

const seeTaskFromList = ({ task, index }) => {
  seeTaskModal
    .value = true
  tempTask.value = task
  indx.value = index
}
</script>

<template>
  <SeeTask v-if="seeTaskModal" @closeModal="seeTaskModal = false" :task="tempTask" :index="indx" />
  <Modal styles="margin: 0; width: 500px">
    <div class="container">
      <h1>{{ item?.name }}</h1>
      <button @click="cancel">New Sub Task</button>
    </div>
    <div class="description">
      {{ item?.description }}
    </div>
    <Lists @editTask="editTask" @seeTaskFromList="seeTaskFromList" :tasks="tempTask.subTasks" />
    <button class="secondary" style="margin-top: 2%" @click="cancel">Ok</button>
  </Modal>
</template>

<style lang="less" scoped>
.container {
  display: grid;
  grid-template-columns: 5fr 2fr;
}
</style>
