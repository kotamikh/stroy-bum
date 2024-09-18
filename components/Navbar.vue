<template>
  <div class="w-11/12 flex mx-auto my-5 justify-between items-center">
    <div>
      <NuxtLink to="/">
        <div class="text-3xl text-header-grey font-russo-one">Строй<span class="text-dark-accent">Бум</span></div>
      </NuxtLink>
    </div>
    <div class="md:contents fixed bottom-0 left-0 px-3 w-full h-14 bg-white flex justify-between items-center">
      <div class="md:flex md:gap-5 contents">
        <NuxtLink class="md:text-base max-phone:text-xs text-grey text-sm hover:text-dark-grey cursor-pointer">
          <PhosphorIconBookOpenText size="22" class="md:hidden mx-auto"/>
          Каталог</NuxtLink>
        <NuxtLink @click="scrollToAnchor('delivery')" class="md:text-base max-phone:text-xs text-grey text-sm hover:text-dark-grey cursor-pointer">
          <PhosphorIconCar size="22" class="md:hidden mx-auto"/>
          Доставка</NuxtLink>
        <NuxtLink @click="scrollToAnchor('contacts')" class="md:text-base max-phone:text-xs text-grey text-sm hover:text-dark-grey cursor-pointer">
          <PhosphorIconPhone size="22" class="md:hidden mx-auto"/>
          Контакты</NuxtLink>
      </div>
      <div class="md:flex md:gap-2 contents">
        <button
            class="md:flex-row md:gap-1 md:px-4 md:py-2.5 md:bg-transparent-grey-10 md:rounded-xl md:hover:shadow md:hover:bg-transparent-grey-15 md:transition-all flex flex-col items-center text-grey">
          <span class="text-sm max-phone:text-xs">Избранное</span>
          <PhosphorIconHeart size="22" class="md:order-1 order-[-1]"/>
        </button>
        <button
                class="md:flex-row md:gap-1 md:px-4 md:py-2.5 md:bg-transparent-accent-80 md:rounded-xl md:hover:shadow md:hover:bg-transparent-accent-90 md:transition-all flex flex-col items-center text-grey ">
          <span class="text-sm max-phone:text-xs">Корзина</span>
          <PhosphorIconBasket size="22" class="md:order-1 order-[-1]"/>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { scrollToAnchor } = useAnchorScroll({
  toTop: {
    scrollOptions: {
      behavior: 'smooth',
      offsetTop: 0,
    }
  },
})
</script>
