import { defineStore } from "pinia";
import nuxtStorage from 'nuxt-storage';
import type { IProduct } from "~/types/Product";

export const useProductsStore = defineStore('cardsStore', () => {
    const productsMap = ref(new Map<number, IProduct>())
    const cart = ref(new Map<number, number>)

    const loadAll = async () => {
        const products = await $fetch('/api/best-offers', { method: "get" })
        if (products.length > 0) {
            productsMap.value.clear()
            for (const p of products) {
                productsMap.value.set(p.id, p)
            }
            return productsMap.value
        }
    }

    const addToCart = (id: number) => {
        cart.value.set(id, 1)
    }

    const deleteFromCart = async (id: number) => {
        cart.value.delete(id)
    }

    return {
        productsMap,
        cart
    }
})
