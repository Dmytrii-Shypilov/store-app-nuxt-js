<script setup lang="ts"></script>

<template>
  <Header></Header>

  <div class="container">
    <slot></slot>
  </div>
</template>

<style lang="scss">
@import "../assets/main.scss";

.container {
  width: 1300px;
  padding: 0 20px;
  margin: 0 auto;
}
</style>
