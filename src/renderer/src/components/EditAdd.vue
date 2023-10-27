<script setup lang="ts">
import { ref } from 'vue'
import Input from "./Input.vue";
import Modal from "./Modal.vue";
import TextArea from './TextArea.vue';

const emit = defineEmits(['closeModal'])
const name = ref('')
const description = ref('')

const saveTask = () => {
  // const { app, BrowserWindow } = require('electron');

}
</script>

<template>
  <Modal styles="margin: 0; width: 500px">
    <Input label="Name" v-model="name" placeholder="Write here the name of your task!" />
    <TextArea label="Description" v-model="description" placeholder="Write here the description of your task!" />
    <button @click="saveTask">Save Task</button>
    <!-- <button @click="emit('closeModal')">Ok</button> -->
  </Modal>
</template>

<style lang="less" scoped></style>
