<template>
  <div class="lg:w-11/12 md:w-full sm:w-11/12 mx-auto md:mt-14 sm:mt-10">
    <div class="flex flex-wrap w-full h-full justify-center md:gap-x-5 gap-x-4 gap-y-8">
      <product-card v-for="product in products"
                    :image="product.images[0]"
                    :price="product.price"
                    :oldPrice="product.oldPrice"
                    :currency="product.currency"
                    :name="product.name"
                    :stock="product.stock"/>
      <product-card v-for="product in products"
                    :image="product.images[0]"
                    :price="product.price"
                    :oldPrice="product.oldPrice"
                    :currency="product.currency"
                    :name="product.name"
                    :stock="product.stock"
      />
      <product-card v-for="product in products"
                    :image="product.images[0]"
                    :price="product.price"
                    :oldPrice="product.oldPrice"
                    :currency="product.currency"
                    :name="product.name"
                    :stock="product.stock"
      />
      <product-card v-for="product in products"
                    :image="product.images[0]"
                    :price="product.price"
                    :oldPrice="product.oldPrice"
                    :currency="product.currency"
                    :name="product.name"
                    :stock="product.stock"
      />
      <product-card v-for="product in products"
                    :image="product.images[0]"
                    :price="product.price"
                    :oldPrice="product.oldPrice"
                    :currency="product.currency"
                    :name="product.name"
                    :stock="product.stock"
      />
      <product-card v-for="product in products"
                    :image="product.images[0]"
                    :price="product.price"
                    :oldPrice="product.oldPrice"
                    :currency="product.currency"
                    :name="product.name"
                    :stock="product.stock"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const products = await $fetch('/api/best-offers', { method: "get" })
</script>
