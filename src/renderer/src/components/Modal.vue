<script setup lang="ts">
// import { ref } from 'vue'
import Card from "./Card.vue"
const { styles } = defineProps<{ styles: string }>()
</script>

<template>
  <div class="__modal">
    <Card class="__card_modal" :style="styles">
      <slot />
    </Card>
  </div>
</template>

<style lang="less" scoped>
@import '../assets/css/styles.less';

.__modal {
  position: relative;
}

.__card_modal {
  top: 50%;
  left: 50%;
  border: 1px solid var(--black);
  padding: 1%;
  padding-right: 2%;
  position: absolute;
  transform: translate(-50%, 50%);
  box-shadow: 0px 0px 0px 100rem rgba(0, 0, 0, 0.356);
}
</style>
