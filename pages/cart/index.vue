<template>
  <div v-if="!cartProducts.length"
       class="font-nunito flex flex-col items-center justify-center text-grey gap-4 md:h-[60vh] h-[70vh]">
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
  <div v-else class="md:flex-row flex-col font-nunito lg:w-11/12 m-auto flex lg:gap-10 md:gap-6">
    <div class="border-t-[1px] md:w-2/3">
      <ProductFromCart v-for="product in cartProducts"
                       :id="product.id"
                       :image="product.images[0]"
                       :price="product.price"
                       :name="product.name"
                       :stock="product.stock"
      />
    </div>
    <div class="text-dark-grey bg-card md:rounded-2xl sm:h-[360px] h-[340px] md:p-6 sm:p-10 p-6 lg:w-1/3 md:w-1/2 flex flex-col justify-between">
      <div class="md:max-w-full max-w-[320px] w-full flex justify-between font-semibold text-2xl">
        <p>Итого</p>
        <p>{{ sumOfProducts }} руб.</p>
      </div>
      <form class="xs:text-base md:max-w-full max-w-[320px] w-full text-sm">
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
      <div class="flex flex-col gap-1 md:w-full w-[70%] ml-auto">
        <button
            class="px-4 py-2 rounded-xl text-grey bg-transparent-accent-80 hover:bg-transparent-accent-90 hover:shadow-accent-dark transition-all flex items-center gap-2 ml-auto">
          Оформить заказ
        </button>
        <p class="text-right xs:text-base text-sm">После подтверждения заказа мы перезвоним вам чтобы уточнить детали</p>
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

let sumOfProducts = computed(() => {
  let sum = ref(0)
  for (const [id, quantity] of store.cart) {
    const product = store.productsMap.get(id)
    if (product) {
      sum.value += product.price * quantity
    }
  }
  return sum
})

const cartProducts = computed(() => {
  const result = []
    for (const [id, quantity] of store.cart) {
      const product = store.productsMap.get(id)
      if (product) {
        result.push(product)
      }
    }
  return result
})
</script>
