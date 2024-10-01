<template>
  <div v-if="!cartProducts.length" class="font-nunito flex flex-col items-center justify-center text-grey gap-4 md:h-[60vh] h-[70vh]">
    <div class="flex gap-2 items-center lg:text-lg text-base">
      <PhosphorIconWarningOctagon size="26"/>
      <p>В корзине пока нет товаров</p>
    </div>
    <button
        class="px-4 py-2 rounded-xl text-grey bg-transparent-accent-90 hover:bg-accent hover:shadow-accent-dark transition-all flex items-center gap-2 mx-auto">
      <NuxtLink to="/catalogue" class="lg:text-lg md:text-base text-sm">Посмотреть каталог</NuxtLink>
      <PhosphorIconCaretRight weight="bold"/>
    </button>
  </div>
  <div v-else class="font-nunito w-11/12 m-auto flex gap-12">
    <div class="border-t-[1px] w-2/3">
      <ProductFromCart v-for="product in cartProducts"
                       :images="product.images"
                       :price="product.price"
                       :name="product.name"
                       :stock="product.stock"
                       @increase-amount=""
      />
    </div>
    <div class="text-dark-grey bg-card rounded-2xl h-[360px] p-6 w-1/3 flex flex-col justify-between">
      <div class="flex justify-between font-semibold text-2xl">
        <p>Итого</p>
        <p>{{ sumOfProducts }} руб.</p>
      </div>
      <form>
        <div class="mb-4 flex justify-between items-center">
          <label for="name">Имя</label>
          <input type="text" name="name" class="p-1 rounded border-[1px] bg-card" required/>
        </div>
        <div class="mb-4 flex justify-between items-center">
          <label for="telephone">Телефон</label>
          <input type="tel" name="telephone" class="p-1 rounded border-[1px] bg-card" required/>
        </div>
        <div class="flex justify-between items-center">
          <label for="city">Город доставки</label>
          <input type="text" name="city" class="p-1 rounded border-[1px] bg-card" required/>
        </div>
      </form>
      <div class="flex flex-col gap-1">
        <button
            class="px-4 py-2 rounded-xl text-grey bg-transparent-accent-80 hover:bg-transparent-accent-90 hover:shadow-accent-dark transition-all flex items-center gap-2 ml-auto">
          Оформить заказ
        </button>
        <p class="text-right">После подтверждения заказа мы перезвоним вам чтобы уточнить детали</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from "#imports";
import { useProductsStore } from "~/store/products";

definePageMeta({
  layout: 'pages'
})

const store = useProductsStore()

const cartProducts = computed(() => {
  const result = []
  for (const id of store.cart) {
    const product = store.productsMap.get(id)
    if (product) {
      result.push(product)
    }
  }
  return result
})

const products = await $fetch('/api/best-offers', { method: "get" })

let sumOfProducts = computed(() => {
  if (products.length) {
    let sum = 0
    products.forEach(p => {
      sum += p.price
    })
    return sum
  }
})
</script>
