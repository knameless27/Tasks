<script setup lang="ts">
import { ref } from 'vue'
import Card from "./components/Card.vue"
import Lists from './components/Lists.vue';
</script>

<template>
  <div class="container">
    <Card class="card">
      <h1>My Tasks</h1>
      <hr />
      <Lists />
    </Card>
  </div>
</template>

<style lang="less">
@import './assets/css/styles.less';

.container {
  padding-top: 2%;
  display: flex;
}

.card {
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
</style>
