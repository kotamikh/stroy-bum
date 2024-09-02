<template>
  <div class="flex w-inherit justify-between items-center">
    <div class="flex items-center gap-8">
      <NuxtLink to="/">
        <div class="text-3xl text-header-grey font-russo-one">Строй<span class="text-dark-accent">Бум</span></div>
      </NuxtLink>
    </div>
    <div class="md:contents fixed bottom-0 w-inherit h-12 bg-white flex justify-between">
      <div class="md:flex md:gap-5 contents">
        <a class="md:text-base max-phone:text-xs text-grey text-sm hover:text-dark-grey cursor-pointer">
          <PhosphorIconBookOpenText size="22" class="md:hidden max-phone:mb-1 mx-auto"/>
          Каталог</a>
        <a class="md:text-base max-phone:text-xs text-grey text-sm hover:text-dark-grey cursor-pointer">
          <PhosphorIconCar size="22" class="md:hidden max-phone:mb-1 mx-auto"/>
          Доставка</a>
        <a class="md:text-base max-phone:text-xs text-grey text-sm hover:text-dark-grey cursor-pointer">
          <PhosphorIconPhone size="22" class="md:hidden max-phone:mb-1 mx-auto"/>
          Контакты</a>
      </div>
      <div class="md:flex md:gap-2 contents">
        <button
            class="md:flex-row md:gap-1 md:px-4 md:py-2.5 md:bg-transparent-grey-10 md:rounded-xl md:hover:shadow md:hover:bg-transparent-grey-15 md:transition-all flex flex-col items-center text-grey">
          <span class="text-sm max-phone:text-xs">Избранное</span>
          <PhosphorIconHeart size="22" class="md:order-1 max-phone:mb-1 order-[-1]"/>
        </button>
        <button value="Корзина"
                class="md:flex-row md:gap-1 md:px-4 md:py-2.5 md:bg-transparent-accent-80 md:rounded-xl md:hover:shadow md:hover:bg-transparent-accent-90 md:transition-all flex flex-col items-center text-grey ">
          <span class="text-sm max-phone:text-xs">Корзина</span>
          <PhosphorIconBasket size="22" class="md:order-1 max-phone:mb-1 order-[-1]"/>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
<script setup lang="ts">
</script>
