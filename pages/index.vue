<template>
  <Head>
    <Title>СтройБум | Сайдинг Киров</Title>
  </Head>

  <div class="font-nunito lg:h-[630px] md:h-[500px] sm:bg-center h-[300px] bg-cover bg-house bg-left bg-no-repeat">
    <div class="bg-overlay w-full h-full">
      <div class="sm:w-3/4 h-full m-auto flex flex-col gap-5 justify-center">
        <h1 class="lg:text-5xl md:text-4xl sm:text-2xl sm:text-nowrap text-xl text-white font-medium text-center">
          Сайдинг и кровельные материалы <br/> с доставкой на ваш участок</h1>
        <button
            class="md:px-6 md:py-3 md:rounded-2xl px-3 py-2 rounded-xl text-dark-grey bg-transparent-accent-90 hover:bg-accent hover:shadow-accent-dark transition-all flex items-center gap-2 mx-auto">
          <NuxtLink to="/catalog" class="md:text-lg text-sm">Посмотреть каталог</NuxtLink>
          <PhosphorIconCaretRight weight="bold"/>
        </button>
      </div>
    </div>
  </div>

  <div
      class="font-nunito lg:h-[380px] md:h-[300px] sm:h-[280px] h-[350px] lg:gap-14 md:gap-10 sm:gap-8 gap-6 justify-center flex flex-col items-center">
    <p class="lg:text-5xl md:text-4xl sm:text-2xl text-xl text-grey">Нам доверяют</p>
    <div class="lg:w-4/5 sm:w-full flex flex-wrap sm:justify-between justify-center">
      <div class="flex flex-col gap-4 items-center md:w-1.2/4 sm:w-1/3 w-1/2">
        <div
            class="lg:w-[90px] lg:h-[90px] lg:p-3 md:w-[80px] md:h-[80px] sm:w-[70px] sm:h-[70px] w-[65px] h-[65px] p-2 flex justify-center items-center bg-transparent-accent-80 rounded-2xl shadow-accent">
          <award/>
        </div>
        <p class="text-grey lg:text-2xl md:text-xl sm:text-lg text-base text-center sm:leading-6 leading-5 font-light">
          Работаем
          напрямую <br/> с
          производителем</p>
      </div>
      <div class="flex flex-col gap-4 items-center md:w-1.2/4 sm:w-1/3 w-1/2">
        <div
            class="lg:w-[90px] lg:h-[90px] lg:p-3 md:w-[80px] md:h-[80px] sm:w-[70px] sm:h-[70px] w-[65px] h-[65px] p-2 flex justify-center items-center bg-transparent-accent-80 rounded-2xl shadow-accent">
          <ten/>
        </div>
        <p class="text-grey lg:text-2xl md:text-xl sm:text-lg text-base text-center sm:leading-6 leading-5 font-light">
          На рынке
          более 10 лет</p>
      </div>
      <div class="flex flex-col gap-4 items-center md:w-1.2/4 sm:w-1/3 w-1/2 sm:mt-0 mt-6">
        <div
            class="lg:w-[90px] lg:h-[90px] lg:p-3 md:w-[80px] md:h-[80px] sm:w-[70px] sm:h-[70px] w-[65px] h-[65px] p-2 flex justify-center items-center bg-transparent-accent-80 rounded-2xl shadow-accent">
          <thumb/>
        </div>
        <p class="text-grey lg:text-2xl md:text-xl sm:text-lg text-base text-center sm:leading-6 leading-5 font-light">
          Широкий
          выбор, <br/> доступные
          цены
        </p>
      </div>
    </div>
  </div>

  <div id="delivery" class="md:h-[360px] sm:h-[480px] h-[410px] flex md:flex-row flex-col">
    <div class="md:w-1/2 md:h-full sm:h-[250px] h-[180px] bg-cover bg-delivery bg-left-bottom bg-no-repeat"></div>
    <div
        class="font-nunito md:w-1/2 sm:px-8 md:py-2 px-5 py-4 md:h-full h-[230px] flex flex-col md:gap-4 gap-2 justify-center text-grey bg-transparent-accent-90">
      <h2 class="lg:text-4xl md:text-2xl sm:text-2xl text-xl">Оформим доставку по России</h2>
      <p class="md:text-lg sm:text-base text-sm font-light">Компании: СДЭК, БайкалСервис, ПЭК, Объём, Деловые
        линии.</p>
      <p class="md:text-lg sm:text-base text-sm font-light">Товары оплачиваются перед получением, наличными
        или
        банковской
        картой. Стоимость доставки рассчитывается
        согласно тарифу транспортной компании.</p>
    </div>
  </div>

  <div id="contacts" class="flex md:flex-row flex-col md:h-[400px] h-[500px]">
    <div class="md:w-1/2 md:h-full h-[250px]">
      <component :is="'script'" type="application/javascript" charset="utf-8" async
                 src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A0f5ae8f64d658ba78051cb8f2f83e9be1c18cc4a080af3742893da1b3fecd609&amp;lang=ru_RU&amp;scroll=true"></component>
    </div>
    <div
        class="font-nunito md:w-1/2 md:h-full h-[300px] bg-cover bg-house bg-center bg-no-repeat text-white flex md:items-center md:justify-center">
      <div class="w-full h-full">
        <div
            class="gap-3 flex flex-col items-end justify-center bg-overlay w-full h-full lg:px-22 md:px-12 sm:px-20 px-10">
          <h2 class="lg:text-4xl sm:text-2xl text-xl">Контакты</h2>
          <p class="lg:text-lg md:text-base text-sm text-end font-light">+7 (8332) 79-69-00 <br/> +7 (8332)
            75-69-83</p>
          <p class="lg:text-lg md:text-base text-sm text-end font-light">ПН-ПТ 8:30-17:30 <br/> СБ 9:00-13:00</p>
          <p class="lg:text-lg md:text-base text-sm text-end font-light">г. Киров, 2-й Кирпичный пер. 2/1 <br/>
            (территория базы
            “Слон”)</p>
          <button
              class="md:rounded-2xl md:px-3 py-2 px-2 rounded-xl bg-transparent-accent-90 hover:bg-accent hover:shadow-accent-dark transition-all flex gap-1 items-center text-dark-grey">
            <Icon name="bxl:vk" size="20"/>
            <a href="https://vk.com/stroibum_kirov" target="_blank" class="md:text-base text-sm font-light">Мы
              ВКонтакте</a>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div
      class="font-nunito lg:h-[550px] sm:h-[490px] xs:h-[400px] h-[700px] lg:gap-14 md:gap-10 sm:gap-8 gap-6 justify-center flex flex-col items-center">
    <p class="lg:text-5xl md:text-4xl sm:text-2xl text-xl text-grey font-medium">Лучшие предложения</p>
    <div class="flex md:gap-10 xs:flex-nowrap gap-4 gap-y-6 justify-center w-full flex-wrap">
      <ProductCard v-for="offer in offers"
                   :image="offer.image"
                   :price="offer.price"
                   :oldPrice="offer.oldPrice"
                   :currencyName="offer.currencyName"
                   :name="offer.name"
                   :isAvailable="offer.isAvailable"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Ten from "assets/svg/ten.vue"
import Award from "assets/svg/award.vue"
import Thumb from "assets/svg/thumb.vue"

const offers = await $fetch('/api/best-offers', { method: "get" })
</script>
