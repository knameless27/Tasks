<script setup lang="ts">
import { ref } from 'vue';
import { Tasks } from '../interfaces/main';
import Pen from "./svgs/Pen.vue"
import Trash from "./svgs/Trash.vue"

const tasks = ref<Tasks>([
  {
    name: 's',
    description: '',
    finished: false,
    subTasks: [{
      name: '',
      finished: false,
      description: '',
      subTasks: []
    }]
  },
  {
    name: 'sd',
    description: '',
    finished: false,
    subTasks: [{
      name: '',
      finished: false,
      description: '',
      subTasks: []
    }]
  },
])

const sss = (xd) => {
  console.log(xd);
}
</script>

<template>
  <div v-for="({ name }, index) in tasks">
    <div class="container">
      <div class="checkbox">
        <input type="checkbox" v-model="tasks[index].finished">
      </div>
      <div class="task">
        <del v-if="tasks[index].finished">
          {{ name }}
        </del>
        <p v-else>
          {{ name }}
        </p>
      </div>
      <div class="actions">
        <Pen width="20px" height="20px" color="black" @onClick="sss" :data="index" class="pen" />
        <Trash width="30px" height="30px" color="black" @onClick="sss" :data="index" />
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
