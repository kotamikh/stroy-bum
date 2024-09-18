<template>
  <Head>
    <Title>СтройБум | Сайдинг Киров</Title>
  </Head>

  <div class="lg:h-[630px] md:h-[500px] sm:bg-center h-[300px] bg-cover bg-house bg-left bg-no-repeat">
    <div class="bg-overlay w-full h-full">
      <div class="sm:w-3/4 h-full m-auto flex flex-col gap-5 justify-center">
        <h1 class="lg:text-5xl md:text-4xl sm:text-2xl sm:text-nowrap text-xl text-white font-medium text-center">
          Сайдинг и кровельные материалы <br/> с доставкой на ваш участок</h1>
        <button
            class="md:px-6 md:py-3 md:rounded-2xl px-3 py-2 rounded-xl text-dark-grey bg-transparent-accent-90 hover:bg-accent hover:shadow-accent-dark transition-all flex items-center gap-2 mx-auto">
          <span class="md:text-lg text-sm">Посмотреть каталог</span>
          <PhosphorIconCaretRight weight="bold"/>
        </button>
      </div>
    </div>
  </div>

  <div
      class="lg:h-[380px] md:h-[300px] sm:h-[280px] h-[350px] lg:gap-14 md:gap-10 sm:gap-8 gap-6 justify-center flex flex-col items-center">
    <p class="lg:text-5xl md:text-4xl sm:text-2xl text-xl text-grey font-medium">Нам доверяют</p>
    <div class="lg:w-3/4 sm:w-full flex flex-wrap sm:justify-between justify-center">
      <div class="flex flex-col gap-4 items-center md:w-1.2/4 sm:w-1/3 w-1/2">
        <award/>
        <p class="text-grey lg:text-2xl md:text-xl sm:text-lg text-base text-center sm:leading-6 leading-5 font-light">
          Работаем
          напрямую <br/> с
          производителем</p>
      </div>
      <div class="flex flex-col gap-4 items-center md:w-1.2/4 sm:w-1/3 w-1/2">
        <ten/>
        <p class="text-grey lg:text-2xl md:text-xl sm:text-lg text-base text-center sm:leading-6 leading-5 font-light">
          На рынке
          более 10 лет</p>
      </div>
      <div class="flex flex-col gap-4 items-center md:w-1.2/4 sm:w-1/3 w-1/2 sm:mt-0 mt-5">
        <thumb/>
        <p class="text-grey lg:text-2xl md:text-xl sm:text-lg text-base text-center sm:leading-6 leading-5 font-light">
          Широкий
          выбор, <br/> доступные
          цены
        </p>
      </div>
    </div>
  </div>

  <div id="delivery" class="md:h-[400px] h-[380px] bg-cover bg-delivery sm:bg-bottom bg-no-repeat">
    <div class="md:w-3/5 w-4/5 h-full mx-auto flex flex-col md:gap-5 gap-3 justify-center text-white">
      <h2 class="lg:text-4xl md:text-3xl text-2xl font-medium text-center">Оформим доставку по России</h2>
      <p class="lg:text-xl md:text-lg font-semibold">Компании: СДЭК, БайкалСервис, ПЭК, Объём, Деловые линии.</p>
      <p class="lg:text-xl md:text-lg font-semibold">Товары оплачиваются перед получением, наличными или банковской
        картой. <br/> Стоимость доставки рассчитывается
        согласно тарифу транспортной компании.</p>
    </div>
  </div>

  <div
      class="lg:h-[380px] md:h-[300px] sm:h-[280px] h-[350px] lg:gap-14 md:gap-10 sm:gap-8 gap-6 justify-center flex flex-col items-center">
    <p class="lg:text-5xl md:text-4xl sm:text-2xl text-xl text-grey font-medium">Лучшие предложения</p>
  </div>

  <div id="contacts" class="flex md:flex-row flex-col md:h-[400px] h-[500px]">
    <div class="md:w-1/2 md:h-full h-[250px]">
      <component :is="'script'" type="application/javascript" charset="utf-8" async
                 src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A0f5ae8f64d658ba78051cb8f2f83e9be1c18cc4a080af3742893da1b3fecd609&amp;lang=ru_RU&amp;scroll=true"></component>
    </div>
    <div
        class="md:w-1/2 md:h-full h-[300px] bg-cover bg-house bg-center bg-no-repeat text-white flex items-center justify-center">
      <div class="w-full h-full">
        <div class="gap-3 flex flex-col items-end justify-center bg-overlay w-full h-full px-24">
          <h2 class="font-medium lg:text-4xl sm:text-2xl text-xl">Контакты</h2>
          <p class="lg:text-lg md:text-base text-sm text-end">+7 (8332) 79-69-00 <br/> +7 (8332) 75-69-83</p>
          <p class="lg:text-lg md:text-base text-sm text-end">ПН-ПТ 8:30-17:30 <br/> СБ 9:00-13:00</p>
          <p class="lg:text-lg md:text-base text-sm text-end">г. Киров, 2-й Кирпичный пер. 2/1 <br/> (территория базы
            “Слон”)</p>
          <button
              class="md:rounded-xl md:px-3 py-2 px-2 rounded-lg bg-transparent-accent-90 hover:bg-accent hover:shadow-accent-dark transition-all flex gap-1 items-center text-dark-grey">
            <Icon name="bxl:vk" size="20"/>
            <span class="md:text-base text-sm">Мы ВКонтакте</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Ten from "assets/svg/ten.vue"
import Award from "assets/svg/award.vue"
import Thumb from "assets/svg/thumb.vue"
</script>
