<template>
  <div class="lg:w-11/12 md:mt-14 md:grid-cols-3 sm:mt-10 xs:grid-cols-2 xs:w-full w-11/12 font-nunito m-auto grid gap-y-6">
    <div v-for="category in categories"
         :id="category.name">
      <div class="flex items-center cursor-pointer">
        <img :src="category.image" :alt="category.name"/>
        <p class="text-dark-grey text-lg">{{ category.name }}</p>
      </div>
      <div v-if="category.children" class="flex flex-col gap-2 ml-14 cursor-pointer text-grey overflow-hidden">
        <p class="hover:text-dark-grey" v-for="child in category.children.slice(0, 5)">{{ child }}</p>
        <div v-if="!openedCategories.includes(category.name) && category.children.length > 5"
             class="flex gap-2 items-center hover:text-dark-grey" @click="makeOpened(category.name)">
          <p class="font-semibold">Ещё {{ category.children.length - 5 }}</p>
          <PhosphorIconCaretDown weight="bold"/>
        </div>
        <div v-if="openedCategories.includes(category.name)" class="flex flex-col gap-2">
          <p class="hover:text-dark-grey" v-for="child in category.children.slice(5)">{{ child }}</p>
          <p class="font-semibold hover:text-dark-grey" @click="collapseCategory(category.name)">Свернуть</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const categories = await $fetch('/api/subjects', { method: "get" })

const openedCategories = ref<Array<string>>([])

const makeOpened = (name: string) => {
  if (openedCategories.value.every(cat => cat !== name)) {
    console.log('no such category', name)
    openedCategories.value.push(name)
  }
}

const collapseCategory = (name: string) => {
  openedCategories.value = openedCategories.value.filter(cat => cat !== name)
}
</script>

<style>

</style>
