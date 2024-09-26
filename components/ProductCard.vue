<template>
  <div class="sm:h-[334px] h-[280px] lg:max-w-[20%] md:max-w-[28%] sm:max-w-[30%] max-w-[220px] w-[45%] rounded-xl flex flex-col gap-2 cursor-pointer">
    <div class="bg-card h-[60%] rounded-xl flex relative">
      <div class="text-grey bg-transparent-accent-80 px-1 rounded-lg absolute top-1 right-1 text-sm">-50%</div>
      <img class="sm:w-[75%] w-[80%] m-auto max-h-[80%] object-contain" src="../assets/images/main-page/house.jpg" alt="product"/>
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex md:gap-2 md:flex-row flex-col-reverse">
        <p class="text-black md:text-base text-sm">10000 руб/шт.</p>
        <span class="text-light-grey line-through md:text-sm text-xs">20000 руб/шт.</span>
      </div>
      <p class="text-black font-light line-clamp-2 overflow-hidden sm:text-base text-sm">Название нашего опупенного продукта Название нашего
        опупенного продукта Название нашего опупенного продукта</p>
      <div class="flex justify-between items-center">
        <span class="font-light text-grey md:text-base sm:text-sm text-xs">Под заказ</span>
        <button
            class="md:text-base sm:text-sm text-xs sm:px-4 px-2 py-1 rounded-lg text-grey bg-transparent-accent-80 hover:bg-transparent-accent-90 hover:shadow-accent-dark transition-all">
          В корзину
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
