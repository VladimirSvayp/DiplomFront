import { $authHost } from "."

export const create = async (basketId, productId) => {
    const { data } = await $authHost.post('api/basket_product', { basketId, productId })
    return data
}

export const getAll = async (basketId) => {
    console.log(basketId)
    const { data } = await $authHost.post('api/basket_product/get_all', { basketId })
    return data
}

export const fetchBasketProducts = async (productsId) => {
    const { data } = await $authHost.post('api/product/get_basket_products', { productsId })
    return data
}

export const updateBasketProducts = async (basketId, productId, operation) => {
    const { data } = await $authHost.put('api/basket_product', { basketId, productId, operation })
    return data
}

export const deleteOneBasketProducts = async (basketId, productId) => {
    const data = await $authHost.post('api/basket_product/remove_one', { basketId, productId })
    return data
}