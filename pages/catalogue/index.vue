<template>
  <div class="lg:w-11/12 md:grid-cols-3 xs:grid-cols-2 xs:w-full w-11/12 font-nunito m-auto grid gap-y-8">
    <div v-for="category in categories"
         :id="category.name">
      <div class="flex items-center cursor-pointer">
        <img :src="category.image" :alt="category.name"/>
        <p class="text-dark-grey text-lg">{{ category.name }}</p>
      </div>
      <div v-if="category.children" class="flex flex-col gap-2 ml-14 cursor-pointer text-grey overflow-hidden">
        <NuxtLink :to="child.path" class="hover:text-dark-grey" v-for="child in category.children.slice(0, 5)">{{ child.name || child }}</NuxtLink>
        <div v-if="!openedCategories.includes(category.name) && category.children.length > 5"
             class="flex gap-2 items-center hover:text-dark-grey" @click="makeOpened(category.name)">
          <p class="font-semibold">Ещё {{ category.children.length - 5 }}</p>
          <PhosphorIconCaretDown weight="bold"/>
        </div>
        <div v-if="openedCategories.includes(category.name)" class="flex flex-col gap-2">
          <NuxtLink :to="child.path" class="hover:text-dark-grey" v-for="child in category.children.slice(5)">{{ child.name || child }}</NuxtLink>
          <p class="font-semibold hover:text-dark-grey" @click="collapseCategory(category.name)">Свернуть</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from "#imports";

definePageMeta({
  layout: 'pages'
})

const openedCategories = ref<Array<string>>([])

const makeOpened = (name: string) => {
  if (openedCategories.value.every(cat => cat !== name)) {
    openedCategories.value.push(name)
  }
}

const collapseCategory = (name: string) => {
  openedCategories.value = openedCategories.value.filter(cat => cat !== name)
}

const categories = await $fetch('/api/subjects', { method: "get" })
</script>
