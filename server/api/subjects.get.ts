export default defineEventHandler((event) => {
    return [
        {
            name: 'Сайдинг',
            image: '_nuxt/assets/images/catalogue-images/house.svg',
            children: [
                {
                    name: 'Сайдинг Nordside Лапландия',
                    path: 'nordside-laplandia'
                },
                {
                    name: 'Сайдинг Nordside Классика',
                    path: 'nordside-classic'
                },
                {
                    name: 'Сайдинг Nordside Бревно (БлокХаус)',
                    path: 'nordside-blockhouse'
                },
                {
                    name: 'Сайдинг Альта-Профиль БлокХаус',
                    path: 'altprofile'
                },
                {
                    name: 'Сайдинг Ю-Пласт Timberblock',
                    path: 'uplast'
                },
                {
                    name: 'Сайдинг STARKE',
                    path: 'starke'
                },
                {
                    name: 'Сайдинг VOX System MAX-3',
                    path: 'vox'
                },
                {
                    name: 'Grand Line',
                    path: 'grand-line'
                },
                {
                    name: 'Софиты',
                    path: 'soffits'
                }
            ]
        },
        {
            name: 'Доборные элементы сайдинга',
            image: '_nuxt/assets/images/catalogue-images/screwdriver.svg',
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
            image: '_nuxt/assets/images/catalogue-images/bricks-wall.svg',
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
            image: '_nuxt/assets/images/catalogue-images/board.svg',
            children: [
                'Wood Grand',
                'АРТ ДПК',
                'Holzhof',
                'Роскомпозит'
            ]
        },
        {
            name: 'Все для установки окон',
            image: '_nuxt/assets/images/catalogue-images/sealant.svg',
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
            image: '_nuxt/assets/images/catalogue-images/pipe.svg',
            children: [
                'Альта-профиль Элит',
                'Grand Line Optima металл'
            ]
        },
        {
            name: 'Подоконники',
            image: '_nuxt/assets/images/catalogue-images/windowsill.svg'
        },

        {
            name: 'Подвесные потолки',
            image: '_nuxt/assets/images/catalogue-images/grid.svg'
        },
        {
            name: 'Заборы',
            image: '_nuxt/assets/images/catalogue-images/fence.svg'
        },
        {
            name: 'Декоративные экраны для радиаторов',
            image: '_nuxt/assets/images/catalogue-images/radiator.svg'
        },
        {
            name: 'Кровля',
            image: '_nuxt/assets/images/catalogue-images/roof.svg'
        },
        {
            name: 'Утеплители',
            image: '_nuxt/assets/images/catalogue-images/temperature.svg'
        }
    ]
})
