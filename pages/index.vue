<script setup lang="ts">

const { data: {value}, pending } : any  = await useFetch(
  "https://fakestoreapi.com/products?limit=10"
);


</script>

<template>
  <section class="section">
    <p v-if="pending">...Loading</p>
    <div v-else>
      <ProductsList :products="value"></ProductsList>
    </div>
  </section>
</template>

<style>
.section {
    margin: 35px 0;
}
</style>
