<script setup lang="ts">
type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  raiting: {
    rate: number;
    count: number;
  };
};

const { products } = defineProps<{ products: Product[] }>();
</script>

<template>
  <ul class="gallery">
    <li v-for="product in products" class="gallery-item">
      <div class="product">
        <div class="image-thumb">
          <img class="image" :src="product.image" :alt="product.title" />
        </div>
        <p class="title">{{ product.title }}</p>
        <span class="price">$ {{ product.price }}</span>
      </div>
      <button class="button">Add to Cart</button>
    </li>
  </ul>
</template>

<style lang="scss">
.gallery {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.gallery-item {
  position: relative;
  display: flex;
  width: calc((100% - 90px) / 4);
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  padding: 20px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  cursor: pointer;
  &:hover {
    transition: box-shadow 250ms;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 12px;
  }
  &:not(:nth-of-type(4n)) {
    margin-right: 30px;
  }
}

.product {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-thumb {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 250px;
  overflow: hidden;
}

.image {
  max-width: 80%;
}

.info {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 15px;
}

.price {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 25px;
  top: 25px;
  width: 65px;
  height: 30px;
  border-radius: 10px;
  background-color: gold;
}
.title {
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;
}

.description {
  text-align: justify;
  color: grey;
}

.button {
  width: 100px;
  height: 30px;
  margin-top: 30px;
  border-radius: 10px;
  background-color: rgba(223, 105, 81, 1);
  color: #fff;
  border: transparent;
  cursor: pointer;
  &:hover {
    background-color: rgba(223, 135, 81, 1)
  }
}
</style>
