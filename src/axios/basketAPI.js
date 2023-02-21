import { $authHost } from "."

export const getId = async (userId) => {
    const {data} = await $authHost.post('api/basket', {userId})
    return data
}