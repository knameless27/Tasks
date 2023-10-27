<script setup lang="ts">
import { ref } from 'vue'
import Card from "./Card.vue"
import Lists from './Lists.vue';
import EditAdd from "./EditAdd.vue";
const sexito = ref(false)
const xds = () => {
  sexito.value = false
}
</script>

<template>
  <EditAdd v-if="sexito" @closeModal="xds"/>
  <div class="container">
    <Card class="card">
      <div class="header">
        <h1>My Tasks</h1>
        <button @click="sexito = true">New Task</button>
      </div>
      <Lists />
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
