export default defineEventHandler((event) => {
    return [
        {
            name: 'Сайдинг',
            image: '_nuxt/assets/images/catalog-images/house.svg',
            children: [
                'Сайдинг Nordside Лапландия',
                'Сайдинг Nordside Классика',
                'Сайдинг Nordside Бревно (БлокХаус)',
                'Сайдинг Альта-Профиль БлокХаус',
                'Сайдинг Ю-Пласт Timberblock',
                'Сайдинг STARKE',
                'Сайдинг VOX System MAX-3',
                'Grand Line',
                'Софиты'
            ]
        },
        {
            name: 'Доборные элементы сайдинга',
            image: '_nuxt/assets/images/catalog-images/screwdriver.svg',
            children: [
                'Аксессуары к сайдингу Nordside',
                'Аксессуары к сайдингу Альта-профиль',
                'Аксессуары к сайдингу Starke',
                'Аксессуары к сайдингу Grand Line',
                'Аксессуары к сайдингу Ю-Пласт Timberblock'
            ]
        },
        {
            name: 'Фасадные панели',
            image: '_nuxt/assets/images/catalog-images/bricks-wall.svg',
            children: [
                'Ю-Пласт',
                'FineBer',
                'Альта-Профиль',
                'Фасадные-цокольные панели VOX (Польша-Белоруссия)',
                'Фасадные-цокольные панели Docke (Россия-Германия)',
                'Фасадные панели Starke'
            ]
        },
        {
            name: 'Террасная доска',
            image: '_nuxt/assets/images/catalog-images/board.svg',
            children: [
                'Wood Grand',
                'АРТ ДПК',
                'Holzhof',
                'Роскомпозит'
            ]
        },
        {
            name: 'Все для установки окон',
            image: '_nuxt/assets/images/catalog-images/sealant.svg',
            children: [
                'Отливы оконные',
                'Нащельники ПВХ',
                'Сэндвич панели',
                'Монтажная пена, герметики',
                'Пистолет для пены',
                'Крепеж для монтажа окон',
                'Ленты',
                'Профиль ПВХ',
                'Панели ПВХ'
            ]
        },
        {
            name: 'Водосточная система',
            image: '_nuxt/assets/images/catalog-images/pipe.svg',
            children: [
                'Альта-профиль Элит',
                'Grand Line Optima металл'
            ]
        },
        {
            name: 'Подоконники',
            image: '_nuxt/assets/images/catalog-images/windowsill.svg'
        },

        {
            name: 'Подвесные потолки',
            image: '_nuxt/assets/images/catalog-images/grid.svg'
        },
        {
            name: 'Заборы',
            image: '_nuxt/assets/images/catalog-images/fence.svg'
        },
        {
            name: 'Декоративные экраны для радиаторов',
            image: '_nuxt/assets/images/catalog-images/radiator.svg'
        },
        {
            name: 'Кровля',
            image: '_nuxt/assets/images/catalog-images/roof.svg'
        },
        {
            name: 'Утеплители',
            image: '_nuxt/assets/images/catalog-images/temperature.svg'
        }
    ]
})
