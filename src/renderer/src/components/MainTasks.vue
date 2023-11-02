<script setup lang="ts">
import { ref } from 'vue'
import { Task } from '../../../interfaces/main';
import Card from "./Card.vue"
import Lists from './Lists.vue';
import EditAdd from "./EditAdd.vue";
import SeeTask from './seeTask.vue';

const seeModal = ref(false)
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
const listRef = ref(null)

const closingModal = () => {
  seeModal.value = false
  oldTask.value = null
  listRef.value?.getTasks()
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
  <EditAdd v-if="seeModal" @closeModal="closingModal" :oldTask="oldTask" :index="indx" />
  <SeeTask v-if="seeTaskModal" @closeModal="seeTaskModal = false" :task="tempTask" :index="indx" />
  <div class="container">
    <Card class="card">
      <div class="header">
        <h1>My Tasks</h1>
        <button @click="seeModal = true">New Task</button>
      </div>
      <Lists @editTask="editTask" @seeTaskFromList="seeTaskFromList" />
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
