<template>
  <div class="flex p-6 border-b-[1px] h-[140px] gap-6">
    <div class="w-[25%]">
      <img class="w-[100%] m-auto" :src="image" :alt="name"/>
    </div>
    <div class="w-full flex justify-between">
      <div class="flex flex-col justify-between">
        <p class="text-dark-grey">{{ name }}</p>
        <p class="text-sm text-light-grey">{{ isAvailable ? 'В наличии' : 'Под заказ' }}</p>
        <button class="flex gap-1 items-center text-dark-grey self-start">
          <PhosphorIconTrash size="18"/>
          <span class="text-sm">Удалить</span>
        </button>
      </div>
      <div class="flex flex-col justify-between">
        <p>{{ price * productAmount }} руб.</p>
        <div class="flex w-full justify-between items-center">
          <PhosphorIconMinus weight="bold" @click="productAmount > 0 ? productAmount-- : ''"/>
          <p>{{ productAmount }}</p>
          <PhosphorIconPlus weight="bold" @click="productAmount++"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  image: String,
  price: Number,
  name: String,
  isAvailable: Boolean,
  amount: Number
})

let productAmount = ref(1)
</script>
