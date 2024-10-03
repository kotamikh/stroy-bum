<template>
  <button
      v-if="!store.cart.has(id)"
      @click="increaseTheAmount"
      class="lg:text-base text-sm md:px-3 md:py-1 py-2 rounded-lg text-grey bg-transparent-accent-80 hover:bg-transparent-accent-90 hover:shadow-accent-dark transition-all">
    В корзину
  </button>
  <button v-else
          class="flex md:w-[55%] items-center justify-between gap-1 border-[1px] border-light-grey lg:text-base text-sm md:px-2 md:py-1 px-3 py-2 rounded-lg text-grey transition-all"
  >
    <PhosphorIconMinus weight="bold" @click="reduceTheAmount"/>
    <span>{{ productAmount }}</span>
    <PhosphorIconPlus weight="bold" @click="increaseTheAmount"/>
  </button>
</template>

<script setup lang="ts">
import { useProductsStore } from "~/store/products";

const props = defineProps(
    {
      id: Number
    }
)

const store = useProductsStore()
const productAmount = computed(() => {
  if (props.id) {
    return store.cart.get(props.id) || 0
  }
})

const reduceTheAmount = () => {
  if (productAmount.value && productAmount.value > 1) {
    store.addToCart(props.id, productAmount.value - 1)
  }
  if (productAmount.value && productAmount.value === 1) {
    store.deleteFromCart(props.id)
  }
}

const increaseTheAmount = () => {
  if (productAmount.value === 0 || productAmount.value < 100) {
    store.addToCart(props.id, productAmount.value + 1)
  }
}
</script>
