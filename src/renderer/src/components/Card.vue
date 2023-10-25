<template>
  <div class="__card">
    <slot></slot>
  </div>
</template>

<script lang="ts"></script>

<style lang="less">
@import '../assets/css/styles.less';

.__card {
  border-radius: 10px;
  background-color: var(--white);
  color: var(--black);
  box-shadow: 0px 6px 5px 5px rgba(0,0,0,0.25);
  padding: 1%;
  a {
    color: var(--light-grey);
  }
}
</style>
