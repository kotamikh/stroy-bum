export default defineEventHandler((event) => {
    return [
        {
            id: 0,
            images: ['_nuxt/assets/images/siding/НордСайд-Белый.jpeg', '_nuxt/assets/images/main-page/house.jpg'],
            price: 10000,
            oldPrice: 12000,
            currency: 'руб/шт.',
            name: 'Сайдниг Nordside Лапландия Белый',
            stock: true
        },
        {
            id: 1,
            images: ['_nuxt/assets/images/siding/НордСайд-Миртовый.webp', '_nuxt/assets/images/main-page/house.jpg'],
            price: 20000,
            oldPrice: 50000,
            currency: 'руб/шт.',
            name: 'Сайдниг Nordside Лапландия Миртовый',
            stock: false
        },
        {
            id: 2,
            images: ['_nuxt/assets/images/siding/НордСайд-Магнолия.jpeg', '_nuxt/assets/images/main-page/house.jpg'],
            price: 3000,
            oldPrice: 4000,
            currency: 'руб/шт.',
            name: 'Сайдниг Nordside Лапландия Магнолия',
            stock: true
        },
        {
            id: 3,
            images: ['_nuxt/assets/images/siding/НордСайд-Шафран.webp', '_nuxt/assets/images/main-page/house.jpg'],
            price: 4500,
            oldPrice: 10000,
            currency: 'руб/шт.',
            name: 'Сайдниг Nordside Лапландия Шафран',
            stock: false
        }
    ]
})
