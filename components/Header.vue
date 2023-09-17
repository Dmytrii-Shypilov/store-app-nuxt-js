<template>
  <div class="header">
    <div class="wrapper">
      <div class="logo">
        <span class="buy">Buy</span>
        <span class="now">Now</span>
      </div>
      <div class="basket">
        <PhosphorIconShoppingCartSimple size="30" color="#fff"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Container from "../components/common/Container.vue";
</script>

<style scoped>
.header {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  
  box-shadow: 0px 15px 10px -15px #DF6951; 
}

.wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px
}

.basket {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #DF6951;
}
.logo {
  font-weight: 700;
  font-size: 25px;
}
.buy {
  
  color: #DF6951
}
</style>
