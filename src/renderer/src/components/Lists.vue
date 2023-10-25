<script setup lang="ts">
import { ref } from 'vue';
import { Tasks } from '../interfaces/main';

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
</script>

<template>
  <!-- <input type="checkbox" v-model="www">
      <del>
        {{ www }}
      </del> -->
  <div v-for="({name, description, subTasks, ...task}, index) in tasks">
    <input type="checkbox" v-model="tasks[index].finished">
    {{ tasks[index].finished }}
    <del v-if="tasks[index].finished">
      {{ name }}
    </del>
    <p v-else>
      {{ name }}
    </p>
  </div>
</template>

<style lang="less">
/*@import './assets/css/styles.less';*/
</style>
