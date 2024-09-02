<template>
  <div class="flex justify-between items-center">
    <div class="flex items-center gap-8">
      <NuxtLink to="/">
        <div class="text-3xl text-header-grey font-russo-one">Строй<span class="text-dark-accent">Бум</span></div>
      </NuxtLink>
    </div>
    <div class="fixed bottom-0 left-0 w-full h-12 bg-white flex justify-between">
      <div class="md:flex md:gap-5 contents">
        <a class="text-grey text-base hover:text-dark-grey cursor-pointer">Каталог</a>
        <a class="text-grey text-base hover:text-dark-grey cursor-pointer">Доставка</a>
        <a class="text-grey text-base hover:text-dark-grey cursor-pointer">Контакты</a>
      </div>
      <div class="md:flex md:gap-2 contents">
        <button
            class="flex gap-1 items-center text-grey bg-transparent-grey-10 px-4 py-2.5 rounded-xl hover:shadow hover:bg-transparent-grey-15 transition-all">
          <span class="text-sm">Избранное</span>
          <PhosphorIconHeart size="22"/>
        </button>
        <button value="Корзина"
                class="flex gap-1 items-center text-grey bg-transparent-accent-80 px-4 py-2.5 rounded-xl hover:shadow hover:bg-transparent-accent-90 transition-all">
          <span class="text-sm">Корзина</span>
          <PhosphorIconBasket size="22"/>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
