<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Task, Tasks } from '../../../interfaces/main';
import Card from "./Card.vue"
import Lists from './Lists.vue';
import EditAdd from "./EditAdd.vue";
import SeeTask from './seeTask.vue';

const seeModal = ref(false)
const seeTaskModal = ref(false)
const oldTask = ref<Task | null>(null)
const tasks = ref<Tasks>([])
const tempTask = ref<Task>({
  name: '',
  description: '',
  finished: false,
  image: '',
  subTasks: []
})
const indx = ref(-1)

const closingModal = () => {
  seeModal.value = false
  oldTask.value = null
  tasks.value = window.api.getAllTasks();
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
onMounted(() => {
  tasks.value = window.api.getAllTasks();
})
</script>

<template>
  <EditAdd v-if="seeModal" @closeModal="closingModal" :oldTask="oldTask" :index="indx" />
  <SeeTask v-if="seeTaskModal" @closeModal="seeTaskModal = false" :task="tempTask" :index="indx" />
  <div class="container">
    <Card class="card">
      <div class="header">
        <h1>My Tasks</h1>
        <button @click="seeModal = true">New Task</button>
      </div>
      <Lists @editTask="editTask" @seeTaskFromList="seeTaskFromList" :tasks="tasks" />
    </Card>
  </div>
</template>

<style lang="less" scoped>
@import '../assets/css/styles.less';

.container {
  padding-top: 2%;
  display: flex;
}

.card {
  max-width: 1200px;
  padding: 1%;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.header {
  border-bottom: 1px solid var(--black);
  display: grid;
  grid-template-columns: 6fr 1fr;
  padding-bottom: 1%;
}
</style>
