<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import '~/assets/styles/main.css'
import { useProductsStore } from "~/store/products";

const store = useProductsStore()

store.loadAll()
</script>
