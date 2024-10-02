<template>
  <div
      class="lg:max-w-[220px] md:w-[22%] max-w-[180px] w-[45%] rounded-xl flex flex-col gap-2 cursor-pointer">
    <div class="sm:h-[170px] h-[180px] rounded-xl flex relative">
      <div class="text-grey bg-transparent-accent-80 px-1 md:rounded-lg rounded absolute top-1 right-1 sm:text-sm text-xs">
        -{{ Math.ceil((oldPrice - price) * 100 / oldPrice) }}%
      </div>
      <img class="sm:w-[75%] w-[80%] m-auto max-h-[80%] object-contain" :src="image" :alt="name"/>
    </div>
    <div class="flex lg:gap-2 lg:flex-row flex-col-reverse">
      <p class="text-black md:text-base text-sm">{{ price }} {{ currency }}</p>
      <span class="text-light-grey line-through md:text-sm text-xs">{{ oldPrice }} {{ currency }}</span>
    </div>
    <p class="text-black font-light line-clamp-2 overflow-hidden sm:text-base text-sm">{{ name }}</p>
    <div class="flex gap-1 sm:flex-row flex-col justify-between flex-wrap mt-auto">
      <span class="font-light text-grey lg:text-base sm:text-sm text-xs sm:self-end">{{ stock ? 'В наличии' : 'Под заказ' }}</span>
      <button
          @click="store.addToCart(id, 1)"
          class="lg:text-base sm:text-sm text-xs sm:px-4 sm:py-1 py-2 rounded-lg text-grey bg-transparent-accent-80 hover:bg-transparent-accent-90 hover:shadow-accent-dark transition-all">
        В корзину
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductsStore } from "~/store/products";

defineProps({
  id: Number,
  image: String,
  price: Number,
  oldPrice: Number,
  currency: String,
  name: String,
  stock: Boolean
})

const store = useProductsStore()
</script>
