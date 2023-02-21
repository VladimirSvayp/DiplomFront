import { $authHost, $host } from "."

export const createType = async (name) => {
    const { data } = await $authHost.post('api/type', { name })
    return data
}

export const fetchTypes = async () => {
    const { data } = await $authHost.get('api/type')
    return data
}

export const createBrand = async (name) => {
    const { data } = await $authHost.post('api/brand', { name })
    return data
}

export const fetchBrands = async () => {
    const { data } = await $authHost.get('api/brand')
    return data
}

export const createProduct = async (product) => {
    const { data } = await $authHost.post('api/product', product)
    return data
}

export const fetchProducts = async (typeId, brandId, ordering, searchInput, page, limit) => {
    console.log(typeId, brandId, ordering, searchInput, page)
    const search = searchInput
    const { data } = await $host.get('api/product', {
        params: {
            typeId, brandId, ordering, search, page, limit
        }
    })
    return data
}

export const fetchOneProduct = async (id) => {
    const { data } = await $host.get('api/product/' + id)
    return data
}

export const fetchProductInfos = async (productId) => {
    const { data } = await $host.post('api/product_infos', { productId })
    return data
}