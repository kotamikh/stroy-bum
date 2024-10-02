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

    const addToCart = (id: number, amount: number) => {
        cart.value.set(id, amount)
    }

    const deleteFromCart = async (id: number) => {
        cart.value.delete(id)
    }

    return {
        loadAll,
        productsMap,
        cart,
        addToCart,
        deleteFromCart
    }
})
