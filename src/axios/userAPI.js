import { $authHost, $host } from "."
import jwt_decode from 'jwt-decode'

export const registration = async (first_name, surname, email, password, role="USER") => {
    const { data } = await $host.post('api/user/registration', {
        first_name, surname, email, password, role
    })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {
        email, password
    })
    localStorage.setItem('token', data.token)
    console.log(data.token);
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const change = async (newUser) => {
    console.log(newUser);
    const {data} = await $host.put('api/user/change', newUser)
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}