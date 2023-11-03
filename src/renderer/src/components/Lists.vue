<script setup lang="ts">
import { Tasks } from '../../../interfaces/main';
import Pen from "./svgs/Pen.vue"
import Trash from "./svgs/Trash.vue"

const props = defineProps<{tasks: Tasks}>()
const emit = defineEmits(['editTask', 'seeTaskFromList', 'getTasks', 'delTask'])

const editTask = async (index: number) => {
  emit('editTask', { task: props.tasks[index], index })
}

const delTask = async (index: number) => {
  emit('delTask', index)
}
</script>

<template>
  <div v-for="({ name }, index) in props.tasks">
    <div class="container">
      <div class="checkbox">
        <input type="checkbox" v-model="props.tasks[index].finished">
      </div>
      <div class="task" @click="emit('seeTaskFromList', { task: props.tasks[index], index })">
        <del v-if="props.tasks[index].finished">
          {{ name }}
        </del>
        <p v-else>
          {{ name }}
        </p>
      </div>
      <div class="actions">
        <Pen width="20px" height="20px" color="black" @onClick="editTask" :data="index" class="pen" />
        <Trash width="30px" height="30px" color="black" @onClick="delTask" :data="index" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 90% 2fr;
  gap: 10px;
  margin-top: 2%;
  border-bottom: 1px solid black;
}

.task {
  width: 90%;
  cursor: pointer;
}

.pen {
  transform: translate(0px, -4px);
}

.actions {
  margin-top: 10%;
}
</style>
