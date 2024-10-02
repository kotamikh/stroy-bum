<template>
  <div class="relative flex sm:p-6 pr-12 p-4 border-b-[1px] md:h-[145px] h-[160px] gap-3">
    <div class="xs:w-[25%] w-[55%]">
      <img class="h-[100%] m-auto" :src="image" :alt="name"/>
    </div>
    <div class="flex-col lg:flex-row md:w-full flex justify-between">
      <div class="flex flex-col justify-between">
        <p class="text-dark-grey lg:text-lg xs:text-base text-sm line-clamp-2 overflow-hidden">{{ name }}</p>
        <p class="xs:text-sm text-xs text-light-grey">{{ stock ? 'В наличии' : 'Под заказ' }}</p>
        <button class="sm:flex lg:static absolute md:right-0 sm:right-8 right-6 sm:top-6 top-4 gap-1 items-center text-dark-grey self-start" @click="store.deleteFromCart(id)">
          <PhosphorIconTrash size="18"/>
          <span class="text-sm lg:block hidden">Удалить</span>
        </button>
      </div>
      <div class="flex flex-col gap-2 justify-between md:text-base text-sm font-semibold">
        <p>{{ price * productAmount }} руб.</p>
        <div class="flex lg:w-full w-[100px] justify-between items-center">
          <PhosphorIconMinus weight="bold" @click="productAmount > 1 ? decreaseAmount(id) : store.deleteFromCart(id)"/>
          <p>{{ productAmount }}</p>
          <PhosphorIconPlus weight="bold" @click="increaseAmount(id)"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductsStore } from "~/store/products";

defineProps({
  id: Number,
  image: String,
  price: Number,
  name: String,
  stock: Boolean
})

let productAmount = ref(1)

const store = useProductsStore()

const increaseAmount = (id: number) => {
  productAmount.value++
  store.addToCart(id, productAmount.value)
}

const decreaseAmount = (id: number) => {
  productAmount.value--
  store.addToCart(id, productAmount.value)
}
</script>
